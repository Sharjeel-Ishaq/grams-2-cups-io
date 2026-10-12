"use client";

import { useMemo, useState } from "react";
import { cupsToGrams } from "@/lib/conversions";
import type { Ingredient } from "@/types";

type Props = {
  ingredients: Ingredient[];
};

const ACCENT = "#02b875";

export default function CupsToGramsConverter({ ingredients }: Props) {
  const [cups, setCups] = useState<number | "">(1);
  const [selected, setSelected] = useState(ingredients[0]?.slug || "");
  const [copied, setCopied] = useState(false);

  const ingredient = useMemo(
    () => ingredients.find((item) => item.slug === selected) || ingredients[0],
    [ingredients, selected]
  );

  const grams = useMemo(() => {
    if (cups === "" || !ingredient) return 0;
    return cupsToGrams(Number(cups), ingredient.gramsPerCup);
  }, [cups, ingredient]);

  const copyText = useMemo(() => {
    if (!ingredient) return "";
    const amount = cups === "" ? 0 : Number(cups);
    return `${amount} cup${amount === 1 ? "" : "s"} ${ingredient.name} = ${grams.toFixed(1)} g`;
  }, [cups, grams, ingredient]);

  async function handleCopy() {
    if (!copyText) return;

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
    <div
      id="cups-to-grams"
      className="mx-auto w-full max-w-4xl rounded-[24px] border border-t-4 bg-white p-5 sm:p-6"
      style={{
        borderColor: `${ACCENT}20`,
        borderTopColor: ACCENT,
      }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em]" style={{ color: ACCENT }}>
            Free Conversion Tool
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-gray-900">Cups To Grams Converter</h2>
          <p className="mt-1 text-sm leading-relaxed text-gray-500">Convert cups to grams using the ingredient&apos;s specific weight per cup.</p>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>
          <i className="ri-scales-3-line text-xl" aria-hidden="true" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">Ingredient</span>
          <select
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
            className="h-11 w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-800 outline-none transition hover:border-gray-300 focus:border-[#02b875] focus:bg-white focus:ring-2 focus:ring-[#02b875]/10"
          >
            {ingredients.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">Cups</span>
          <div className="relative">
            <input
              type="number"
              min="0"
              step="0.25"
              value={cups}
              onChange={(event) => setCups(event.target.value === "" ? "" : Number(event.target.value))}
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 pr-14 text-sm font-semibold text-gray-900 outline-none transition hover:border-gray-300 focus:border-[#02b875] focus:bg-white focus:ring-2 focus:ring-[#02b875]/10"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400">cups</span>
          </div>
        </label>

        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">Per cup</span>
          <div className="flex h-11 items-center rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm font-semibold text-gray-800">
            {ingredient?.gramsPerCup ?? "—"}<span className="ml-1 text-gray-400">g</span>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-[20px] border p-5" style={{ backgroundColor: `${ACCENT}08`, borderColor: `${ACCENT}20` }}>
        <div className="flex items-center justify-between gap-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>Result</div>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy cups to grams result"
            title={copied ? "Copied!" : "Copy result"}
            className="flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-semibold uppercase tracking-[0.12em] transition hover:opacity-80 active:scale-[0.97]"
            style={{ backgroundColor: copied ? ACCENT : `${ACCENT}12`, color: copied ? "#ffffff" : ACCENT }}
          >
            <i className={copied ? "ri-check-line text-sm" : "ri-file-copy-line text-sm"} aria-hidden="true" />
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
        <div className="mt-3 flex items-end gap-3">
          <div className="text-3xl font-bold tracking-[-0.006em] text-gray-900">{grams.toFixed(1)}</div>
          <div className="pb-1 text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">grams</div>
        </div>
        <div className="mt-2 text-xs font-medium text-gray-500">{copyText}</div>
      </div>

      <div className="converter-ingredient-info mt-4 flex flex-col gap-1.5 rounded-xl px-3.5 py-3 sm:flex-row sm:items-center sm:justify-between" style={{ backgroundColor: "#f7faf8", border: `1px solid ${ACCENT}12` }}>
        <div className="flex items-center gap-2"><i className="ri-restaurant-line text-sm" style={{ color: ACCENT }} /><span className="text-xs font-semibold text-gray-700">{ingredient?.name}</span></div>
        <span className="text-xs text-gray-400">{ingredient?.notes || "Ingredient"}</span>
      </div>
    </div>
  );
}
