"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

const suggestions = [
  "How many cups is 150g of flour?",
  "Why does flour weight vary by cup?",
  "How do I convert cups to grams?",
];

export default function KitchenAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, sending, error]);

  useEffect(() => {
    if (!open) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  useEffect(() => {
    function openAssistant() {
      setOpen(true);
    }

    window.addEventListener("open-kitchen-assistant", openAssistant);
    return () => window.removeEventListener("open-kitchen-assistant", openAssistant);
  }, []);

  async function sendMessage(content: string) {
    const question = content.trim();
    if (!question || sending) return;

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: question },
    ];
    setMessages(nextMessages);
    setDraft("");
    setError("");
    setSending(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-12) }),
      });

      let result: unknown;
      try {
        result = await response.json();
      } catch {
        throw new Error("The assistant returned an unreadable response. Please try again.");
      }

      if (!response.ok) {
        const message =
          isRecord(result) && typeof result.error === "string"
            ? result.error
            : "The assistant could not complete that request.";
        throw new Error(message);
      }

      if (!isRecord(result) || typeof result.answer !== "string") {
        throw new Error("The assistant returned an invalid response.");
      }

      const answer = result.answer;
      setMessages((current) => [
        ...current,
        { role: "assistant", content: answer },
      ]);
    } catch (sendError) {
      setMessages((current) => current.slice(0, -1));
      setDraft(question);
      setError(
        sendError instanceof Error
          ? sendError.message
          : "Could not send your question. Please try again.",
      );
    } finally {
      setSending(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(draft);
  }

  return (
    <div className="kitchen-assistant fixed bottom-5 right-5 z-[70] sm:bottom-6 sm:right-6">
      {open && (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby="kitchen-assistant-title"
          className="kitchen-assistant-panel mb-3 flex h-[min(72vh,36rem)] w-[min(calc(100vw-2.5rem),24rem)] flex-col overflow-hidden rounded-2xl border border-[#02b875]/20 bg-white shadow-2xl dark:border-[#33443d] dark:bg-[#17211e]"
        >
          <header className="kitchen-assistant-header flex items-center justify-between bg-[#02b875] px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <i className="ri-robot-2-line text-xl" aria-hidden="true" />
              </span>
              <div>
                <h2 id="kitchen-assistant-title" className="text-sm font-bold">
                  Kitchen Assistant
                </h2>
                <p className="text-xs text-white/85">Ingredient conversions & baking help</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close kitchen assistant"
            >
              <i className="ri-close-line text-xl" aria-hidden="true" />
            </button>
          </header>

          <div
            ref={messagesRef}
            className="kitchen-assistant-messages flex-1 space-y-4 overflow-y-auto bg-[#f8fbf9] p-4 dark:bg-[#121b17]"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.length === 0 ? (
              <div>
                <div className="kitchen-assistant-bubble max-w-[92%] rounded-2xl rounded-tl-sm border border-gray-100 bg-white p-3 text-sm leading-relaxed text-gray-700 shadow-sm dark:border-[#33443d] dark:bg-[#1c2924] dark:text-gray-200">
                  Hi! Ask me about ingredient-specific grams-to-cups conversions,
                  measurement problems, or baking substitutions. Include the
                  ingredient and amount for the best answer.
                </div>
                <div className="mt-4 space-y-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => void sendMessage(suggestion)}
                      disabled={sending}
                      className="kitchen-assistant-suggestion block w-full rounded-xl border border-[#02b875]/20 bg-white px-3 py-2 text-left text-xs text-gray-700 transition-colors hover:bg-[#02b875]/[0.06] disabled:opacity-60 dark:bg-[#1c2924] dark:text-gray-200 dark:hover:bg-[#02b875]/10"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${message.role === "user"
                        ? "rounded-br-sm bg-[#02b875] text-white"
                        : "kitchen-assistant-bubble rounded-bl-sm border border-gray-100 bg-white text-gray-700 shadow-sm dark:border-[#33443d] dark:bg-[#1c2924] dark:text-gray-200"
                      }`}
                  >
                    {message.content}
                  </p>
                </div>
              ))
            )}
            {sending && (
              <p className="text-xs text-gray-500 dark:text-gray-400" role="status">
                Assistant is thinking…
              </p>
            )}
            {error && (
              <div
                className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs leading-relaxed text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200"
                role="alert"
              >
                {error}
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="kitchen-assistant-form flex items-center gap-2 border-t border-gray-100 bg-white p-3 dark:border-[#33443d] dark:bg-[#17211e]"
          >
            <label htmlFor="kitchen-assistant-input" className="sr-only">
              Ask the kitchen assistant
            </label>
            <input
              ref={inputRef}
              id="kitchen-assistant-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask a measurement question…"
              maxLength={2500}
              disabled={sending}
              className="kitchen-assistant-input h-11 min-w-0 flex-1 rounded-full border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#02b875] disabled:opacity-60 dark:border-[#40534a] dark:bg-[#1c2924] dark:text-gray-100"
            />
            <button
              type="submit"
              disabled={sending || !draft.trim()}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#02b875] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send question"
            >
              <i className="ri-send-plane-fill" aria-hidden="true" />
            </button>
          </form>
          <p className="kitchen-assistant-disclaimer bg-white px-3 pb-2 text-center text-[10px] text-gray-400 dark:bg-[#17211e]">
            Messages are processed by Grams2Cups.io. Verify critical measurements.
          </p>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="ml-auto flex h-14 items-center justify-center gap-2 rounded-full bg-[#02b875] px-5 text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#02b875]/30"
        aria-label={open ? "Close Kitchen Assistant" : "Open Kitchen Assistant"}
        aria-expanded={open}
      >
        <i
          className={
            open
              ? "ri-close-line text-xl"
              : "ri-message-3-line text-xl"
          }
          aria-hidden="true"
        />

        <span className="text-sm font-semibold">
          {open ? "Close" : "Ask Assistant"}
        </span>
      </button>

    </div>
  );
}
