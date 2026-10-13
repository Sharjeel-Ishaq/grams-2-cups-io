"use client";

import { useMemo, useState } from "react";
import { gramsToOunces, ouncesToGrams } from "@/lib/conversions";

const ACCENT = "#02b875";

type Direction = "grams-to-ounces" | "ounces-to-grams";

export default function GramsToOuncesConverter() {
  const [direction, setDirection] = useState<Direction>("grams-to-ounces");
  const [amount, setAmount] = useState<number | "">(1);
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    if (amount === "") return 0;
    return direction === "grams-to-ounces"
      ? gramsToOunces(Number(amount))
      : ouncesToGrams(Number(amount));
  }, [amount, direction]);

  const copyText = useMemo(() => {
    const value = amount === "" ? 0 : amount;
    return direction === "grams-to-ounces"
      ? `${value} g = ${result.toFixed(3)} oz`
      : `${value} oz = ${result.toFixed(3)} g`;
  }, [amount, direction, result]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copyText);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = copyText;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  const gramsToOuncesMode = direction === "grams-to-ounces";

  return (
    <div id="grams-to-ounces" className="mx-auto w-full max-w-5xl rounded-[24px] border border-t-4 bg-white p-5 sm:p-6" style={{
        borderColor: `${ACCENT}20`,
        borderTopColor: ACCENT,
      }}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em]" style={{ color: ACCENT }}>Free Conversion Tool</div>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-gray-900">Grams To Ounces Converter</h2>
          <p className="mt-1 text-sm leading-relaxed text-gray-500">Convert everyday weights using the international avoirdupois ounce.</p>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>
          <i className="ri-scales-3-line text-xl" aria-hidden="true" />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2 rounded-xl bg-gray-50 p-1">
        {(["grams-to-ounces", "ounces-to-grams"] as Direction[]).map((mode) => {
          const active = direction === mode;
          return (
            <button
              key={mode}
              type="button"
              onClick={() => setDirection(mode)}
              className="rounded-lg px-3 py-2 text-xs font-semibold transition-colors"
              style={{ backgroundColor: active ? ACCENT : "transparent", color: active ? "#fff" : "#6b7280" }}
            >
              {mode === "grams-to-ounces" ? "Grams → Ounces" : "Ounces → Grams"}
            </button>
          );
        })}
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">{gramsToOuncesMode ? "Grams" : "Ounces"}</span>
        <div className="relative">
          <input
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(event) => setAmount(event.target.value === "" ? "" : Number(event.target.value))}
            className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 pr-16 text-sm font-semibold text-gray-900 outline-none transition hover:border-gray-300 focus:border-[#02b875] focus:bg-white focus:ring-2 focus:ring-[#02b875]/10"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400">{gramsToOuncesMode ? "g" : "oz"}</span>
        </div>
      </label>

      <div className="mt-5 rounded-[20px] border p-5" style={{ backgroundColor: `${ACCENT}08`, borderColor: `${ACCENT}20` }}>
        <div className="flex items-center justify-between gap-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>Result</div>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy grams to ounces result"
            title={copied ? "Copied!" : "Copy result"}
            className="flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-semibold uppercase tracking-[0.12em] transition hover:opacity-80 active:scale-[0.97]"
            style={{ backgroundColor: copied ? ACCENT : `${ACCENT}12`, color: copied ? "#ffffff" : ACCENT }}
          >
            <i className={copied ? "ri-check-line text-sm" : "ri-file-copy-line text-sm"} aria-hidden="true" />
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
        <div className="mt-3 flex items-end gap-3">
          <div className="text-3xl font-bold tracking-[-0.006em] text-gray-900">{result.toFixed(3)}</div>
          <div className="pb-1 text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">{gramsToOuncesMode ? "ounces" : "grams"}</div>
        </div>
        <div className="mt-2 text-xs font-medium text-gray-500">{copyText}</div>
      </div>
    </div>
  );
}
