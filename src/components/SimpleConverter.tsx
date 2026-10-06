"use client";

import React, { useMemo, useState } from "react";
import { gramsToCups, formatCups } from "@/lib/conversions";
import type { Ingredient } from "@/types";

type Props = {
  ingredients: Ingredient[];
  initialGrams?: number;
};

const ACCENT = "#02b875";

export default function SimpleConverter({ ingredients, initialGrams = 100 }: Props) {
  const [grams, setGrams] = useState<number | "">(initialGrams);
  const [selected, setSelected] = useState<string>(
    ingredients[0]?.slug || ""
  );
  const [copied, setCopied] = useState(false);

  const ingredient = useMemo(
    () =>
      ingredients.find((i) => i.slug === selected) || ingredients[0],
    [ingredients, selected]
  );

  const cups = useMemo(() => {
    if (grams === "" || !ingredient) return 0;

    return gramsToCups(
      Number(grams),
      ingredient.gramsPerCup
    );
  }, [grams, ingredient]);

  // Text that gets copied to the clipboard
  const copyText = useMemo(() => {
    if (!ingredient) return "";
    const g = grams === "" ? 0 : Number(grams);
    return `${g} g ${ingredient.name} = ${cups.toFixed(3)} cups (${formatCups(cups)})`;
  }, [grams, ingredient, cups]);

  const handleCopy = async () => {
    if (!copyText) return;

    try {
      await navigator.clipboard.writeText(copyText);
    } catch {
      // Fallback for non-secure contexts / older browsers
      const ta = document.createElement("textarea");
      ta.value = copyText;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="converter"
      className="w-full rounded-[24px] border bg-white p-5 sm:p-6"
      style={{ borderColor: `${ACCENT}20` }}
    >
      {/* Header */}
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <div
            className="text-[10px] font-semibold uppercase tracking-[0.24em]"
            style={{ color: ACCENT }}
          >
            Free Conversion Tool
          </div>

          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-gray-900">
            Grams To Cups Converter
          </h2>

          <p className="mt-1 text-sm leading-relaxed text-gray-500">
            Convert grams to cups instantly for common cooking and baking
            ingredients.
          </p>
        </div>

        {/* Icon */}
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: `${ACCENT}12`,
            color: ACCENT,
          }}
        >
          <i className="ri-cup-line text-xl" />
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Ingredient */}
        <label className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
            Ingredient
          </span>

          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="h-11 w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-800 outline-none transition hover:border-gray-300 focus:border-[#02b875] focus:bg-white focus:ring-2 focus:ring-[#02b875]/10"
          >
            {ingredients.map((ing) => (
              <option
                key={ing.slug}
                value={ing.slug}
                className="text-xs text-gray-800"
              >
                {ing.name}
              </option>
            ))}
          </select>
        </label>

        {/* Grams */}
        <label className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
            Grams
          </span>

          <div className="relative">
            <input
              type="number"
              min="0"
              value={grams}
              onChange={(e) =>
                setGrams(
                  e.target.value === ""
                    ? ""
                    : Number(e.target.value)
                )
              }
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 pr-12 text-sm font-semibold text-gray-900 outline-none transition hover:border-gray-300 focus:border-[#02b875] focus:bg-white focus:ring-2 focus:ring-[#02b875]/10"
            />

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400">
              g
            </span>
          </div>
        </label>

        {/* Per Cup */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
            Per cup
          </span>

          <div className="flex h-11 items-center rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm font-semibold text-gray-800">
            {ingredient?.gramsPerCup ?? "—"}
            <span className="ml-1 text-gray-400">g</span>
          </div>
        </div>
      </div>

      {/* Result */}
      <div
        className="mt-5 rounded-[20px] border p-5"
        style={{
          backgroundColor: `${ACCENT}08`,
          borderColor: `${ACCENT}20`,
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: ACCENT }}
          >
            Result
          </div>

          {/* Copy button */}
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy result to clipboard"
            title={copied ? "Copied!" : "Copy result"}
            className="flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-semibold uppercase tracking-[0.12em] transition hover:opacity-80 active:scale-[0.97]"
            style={{
              backgroundColor: copied ? ACCENT : `${ACCENT}12`,
              color: copied ? "#ffffff" : ACCENT,
            }}
          >
            <i
              className={`${
                copied ? "ri-check-line" : "ri-file-copy-line"
              } text-sm`}
            />
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>

        <div className="mt-3 flex items-end gap-3">
          <div className="text-3xl font-bold tracking-[-0.006em] text-gray-900">
            {cups.toFixed(3)}
          </div>

          <div className="pb-1 text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
            cups
          </div>
        </div>

        <div className="mt-2 text-xs font-medium text-gray-500">
          {formatCups(cups)}
        </div>
      </div>

      {/* Ingredient Info */}
      <div
        className="converter-ingredient-info mt-4 flex flex-col gap-1.5 rounded-xl px-3.5 py-3 sm:flex-row sm:items-center sm:justify-between"
        style={{
          backgroundColor: "#f7faf8",
          border: `1px solid ${ACCENT}12`,
        }}
      >
        <div className="flex items-center gap-2">
          <i
            className="ri-restaurant-line text-sm"
            style={{ color: ACCENT }}
          />

          <span className="text-xs font-semibold text-gray-700">
            {ingredient?.name}
          </span>
        </div>

        <span className="text-xs text-gray-400">
          {ingredient?.notes || "Ingredient"}
        </span>
      </div>
    </div>
  );
}