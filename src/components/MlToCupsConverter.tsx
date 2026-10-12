"use client";

import { useMemo, useState } from "react";
import { mlToCups } from "@/lib/conversions";

const ACCENT = "#02b875";
const US_CUP_ML = 236.588;

type CupStandard = {
  label: string;
  ml: number;
};

const cupStandards: CupStandard[] = [
  { label: "US customary cup", ml: 236.588 },
  { label: "Metric cup", ml: 250 },
  { label: "Imperial cup", ml: 284.131 },
];

export default function MlToCupsConverter() {
  const [ml, setMl] = useState<number | "">(250);
  const [cupStandard, setCupStandard] = useState(String(US_CUP_ML));
  const [copied, setCopied] = useState(false);

  const selectedCup = cupStandards.find((cup) => String(cup.ml) === cupStandard) || cupStandards[0];
  const cups = useMemo(() => (ml === "" ? 0 : mlToCups(Number(ml), selectedCup.ml)), [ml, selectedCup]);
  const copyText = `${ml === "" ? 0 : ml} ml = ${cups.toFixed(3)} cups (${selectedCup.label})`;

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

  return (
    <div id="ml-to-cups" className="mx-auto w-full max-w-4xl rounded-[24px] border border-t-4 bg-white p-5 sm:p-6" style={{
        borderColor: `${ACCENT}20`,
        borderTopColor: ACCENT,
      }}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em]" style={{ color: ACCENT }}>Free Conversion Tool</div>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-gray-900">Milliliters To Cups Converter</h2>
          <p className="mt-1 text-sm leading-relaxed text-gray-500">Convert liquid volume from milliliters to cups using your recipe&apos;s cup standard.</p>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>
          <i className="ri-flask-line text-xl" aria-hidden="true" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">Milliliters</span>
          <div className="relative">
            <input
              type="number"
              min="0"
              step="1"
              value={ml}
              onChange={(event) => setMl(event.target.value === "" ? "" : Number(event.target.value))}
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 pr-12 text-sm font-semibold text-gray-900 outline-none transition hover:border-gray-300 focus:border-[#02b875] focus:bg-white focus:ring-2 focus:ring-[#02b875]/10"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400">ml</span>
          </div>
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">Cup standard</span>
          <select
            value={cupStandard}
            onChange={(event) => setCupStandard(event.target.value)}
            className="h-11 w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-800 outline-none transition hover:border-gray-300 focus:border-[#02b875] focus:bg-white focus:ring-2 focus:ring-[#02b875]/10"
          >
            {cupStandards.map((cup) => <option key={cup.label} value={cup.ml}>{cup.label} ({cup.ml} ml)</option>)}
          </select>
        </label>
      </div>

      <div className="mt-5 rounded-[20px] border p-5" style={{ backgroundColor: `${ACCENT}08`, borderColor: `${ACCENT}20` }}>
        <div className="flex items-center justify-between gap-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>Result</div>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy milliliters to cups result"
            title={copied ? "Copied!" : "Copy result"}
            className="flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-semibold uppercase tracking-[0.12em] transition hover:opacity-80 active:scale-[0.97]"
            style={{ backgroundColor: copied ? ACCENT : `${ACCENT}12`, color: copied ? "#ffffff" : ACCENT }}
          >
            <i className={copied ? "ri-check-line text-sm" : "ri-file-copy-line text-sm"} aria-hidden="true" />
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
        <div className="mt-3 flex items-end gap-3">
          <div className="text-3xl font-bold tracking-[-0.006em] text-gray-900">{cups.toFixed(3)}</div>
          <div className="pb-1 text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">cups</div>
        </div>
        <div className="mt-2 text-xs font-medium text-gray-500">{copyText}</div>
      </div>
    </div>
  );
}
