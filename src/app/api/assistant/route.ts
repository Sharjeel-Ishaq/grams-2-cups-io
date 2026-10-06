import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function parseMessages(value: unknown): ChatMessage[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > 20) {
    return null;
  }

  const messages: ChatMessage[] = [];
  let totalLength = 0;

  for (const entry of value) {
    if (
      !isRecord(entry) ||
      (entry.role !== "user" && entry.role !== "assistant") ||
      typeof entry.content !== "string"
    ) {
      return null;
    }

    const content = entry.content.trim();
    if (!content || content.length > 2500) return null;

    totalLength += content.length;
    if (totalLength > 12000) return null;

    messages.push({ role: entry.role, content });
  }

  if (messages[messages.length - 1]?.role !== "user") return null;
  return messages.slice(-12);
}

function extractAnswer(value: unknown): string | null {
  if (!isRecord(value) || !Array.isArray(value.candidates)) return null;

  const candidate = value.candidates[0];
  if (!isRecord(candidate) || !isRecord(candidate.content)) return null;

  const parts = candidate.content.parts;
  if (!Array.isArray(parts)) return null;

  const text = parts
    .filter((part): part is Record<string, unknown> => isRecord(part))
    .map((part) => part.text)
    .filter((part): part is string => typeof part === "string")
    .join("")
    .trim();

  return text || null;
}

async function getProviderError(response: Response): Promise<string> {
  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    return `Gemini returned HTTP ${response.status} without an error description.`;
  }

  if (
    isRecord(payload) &&
    isRecord(payload.error) &&
    typeof payload.error.message === "string"
  ) {
    return payload.error.message.slice(0, 400);
  }

  return `Gemini returned HTTP ${response.status}.`;
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "The request body must be valid JSON." }, { status: 400 });
  }

  const messages = isRecord(payload) ? parseMessages(payload.messages) : null;
  if (!messages) {
    return NextResponse.json(
      { error: "Send a non-empty conversation with a user question. Each message must be under 2,500 characters." },
      { status: 400 },
    );
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "The assistant is not configured yet. Add GEMINI_API_KEY to the server environment." },
      { status: 503 },
    );
  }

  const model = process.env.GEMINI_MODEL || "gemini-flash-lite-latest";
  let upstream: Response;

  try {
    upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{
              text: [
                "You are the Grams2Cups kitchen measurement assistant.",
                "Help users solve ingredient conversions, baking measurement problems, and questions about using this website's converter tools.",
                "Grams measure mass and cups measure volume, so conversions depend on the ingredient and measuring method. Never imply one grams-per-cup value works for every ingredient.",
                "Show the formula and arithmetic when converting: cups = grams / grams per cup; grams = cups * grams per cup. Mark estimates as approximate and state assumptions.",
                "If an ingredient density, recipe detail, or real-time fact is unknown, say so and ask a focused follow-up rather than inventing it. Recommend the site's ingredient charts or a kitchen scale when precision matters.",
                "Keep answers practical, friendly, and concise. Do not claim to browse the web or see the user's recipe unless they provide it.",
                "Format answers as plain text for a chat bubble: do not use Markdown symbols, LaTeX, or dollar-sign math delimiters. Use simple equations such as 150 / 120 = 1.25 cups.",
              ].join(" "),
            }],
          },
          contents: messages.map((message) => ({
            role: message.role === "assistant" ? "model" : "user",
            parts: [{ text: message.content }],
          })),
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 800,
          },
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(30000),
      },
    );
  } catch (error) {
    if (error instanceof Error && error.name === "TimeoutError") {
      return NextResponse.json(
        { error: "The assistant took too long to respond. Please try again." },
        { status: 504 },
      );
    }

    return NextResponse.json(
      { error: "Could not reach the assistant service. Check your connection and try again." },
      { status: 502 },
    );
  }

  if (!upstream.ok) {
    const providerError = await getProviderError(upstream);

    if (upstream.status === 429) {
      return NextResponse.json(
        { error: `Gemini rate limit: ${providerError}` },
        { status: 429 },
      );
    }

    if (upstream.status === 401 || upstream.status === 403) {
      return NextResponse.json(
        { error: `Gemini rejected the API key or project access: ${providerError}` },
        { status: 503 },
      );
    }

    if (upstream.status === 503) {
      return NextResponse.json(
        { error: `Gemini is temporarily unavailable: ${providerError}` },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { error: `Gemini request failed (HTTP ${upstream.status}): ${providerError}` },
      { status: 502 },
    );
  }

  let result: unknown;
  try {
    result = await upstream.json();
  } catch {
    return NextResponse.json(
      { error: "The assistant service returned an unreadable response. Please try again." },
      { status: 502 },
    );
  }
  const answer = extractAnswer(result);
  if (!answer) {
    return NextResponse.json(
      { error: "The assistant did not return a text answer. Please rephrase and try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ answer });
}
