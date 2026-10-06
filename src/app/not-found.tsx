import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Page Not Found | Grams To Cups",
  description: "The page you are looking for could not be found.",
};

const ACCENT = "#02b875";

export default function NotFound() {
  return (
    <div className="not-found-page flex min-h-screen flex-col bg-[#fafafa] dark:bg-[#15201c]">
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section className="w-full max-w-3xl text-center">

          {/* Illustration */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
            <svg
              viewBox="0 0 80 72"
              className="h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="cup-liquid"
                  x1="40"
                  y1="24"
                  x2="40"
                  y2="64"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor={ACCENT} stopOpacity="0.20" />
                  <stop offset="1" stopColor={ACCENT} stopOpacity="0.07" />
                </linearGradient>

                <clipPath id="cup-clip">
                  <path d="M16 8H64L56 64H24L16 8Z" />
                </clipPath>
              </defs>

              {/* Soft background circle */}
              <circle
                cx="40"
                cy="36"
                r="34"
                fill={ACCENT}
                opacity="0.055"
              />

              {/* Liquid */}
              <g clipPath="url(#cup-clip)">
                <rect
                  x="10"
                  y="25"
                  width="60"
                  height="45"
                  fill="url(#cup-liquid)"
                />

                <path
                  d="M14 27C22 24 29 29 38 27C47 25 55 23 66 27V34H14V27Z"
                  fill={ACCENT}
                  opacity="0.08"
                />
              </g>

              {/* Cup */}
              <path
                d="M16 8H64L56 64H24L16 8Z"
                stroke={ACCENT}
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* Handle */}
              <path
                d="M62 20C74 20 74 40 62 40"
                stroke={ACCENT}
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Measurement lines */}
              <path
                d="M27 24H53"
                stroke={ACCENT}
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.35"
              />

              <path
                d="M26 38H54"
                stroke={ACCENT}
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.35"
              />

              <path
                d="M25 52H55"
                stroke={ACCENT}
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.35"
              />
            </svg>
          </div>

          {/* Measurement label */}
          <div
            className="mx-auto mt-4 inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] sm:mt-5 sm:text-xs"
            style={{
              color: ACCENT,
              borderColor: `${ACCENT}25`,
              backgroundColor: `${ACCENT}0A`,
            }}
          >
            404 Grams To Cups
          </div>

          {/* Error */}
          <p
            className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] sm:mt-8"
            style={{ color: ACCENT }}
          >
            Error 404
          </p>

          {/* Heading */}
          <h1 className="not-found-heading mx-auto mt-3 max-w-2xl text-[2.25rem] font-bold leading-[1.08] tracking-[-0.04em] text-gray-950 dark:text-gray-100 sm:mt-4 sm:text-5xl">
            This page is off the recipe.
          </h1>

          {/* Description */}
          <p className="not-found-description mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-300 sm:mt-6 sm:text-base sm:leading-7">
            The page you&apos;re looking for may have moved, or the address
            may not be quite right. Let&apos;s get you back to a useful
            measurement.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">

            {/* Primary */}
            <Link
              href="/"
              className="group inline-flex min-h-12 w-full max-w-[220px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(2,184,117,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(2,184,117,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02b875] focus-visible:ring-offset-2 sm:w-auto"
              style={{ backgroundColor: ACCENT }}
            >
              <i
                className="ri-home-5-line text-base transition-transform duration-200 group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              <span>Back to converter</span>
            </Link>

            {/* Secondary */}
            <Link
              href="/conversion-chart"
              className="not-found-secondary-action group inline-flex min-h-12 w-full max-w-[220px] items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#02b875]/40 hover:text-[#02b875] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02b875] focus-visible:ring-offset-2 dark:border-[#40534a] dark:bg-[#1c2924] dark:text-gray-200 dark:hover:border-[#02b875]/60 sm:w-auto"
            >
              <i
                className="ri-bar-chart-2-line text-base transition-transform duration-200 group-hover:scale-105"
                aria-hidden="true"
              />
              <span>Browse charts</span>
            </Link>
          </div>

          {/* Small supporting text */}
          <p className="not-found-footnote mt-7 text-xs text-gray-400 dark:text-gray-300">
            Need a quick conversion? Start from the{" "}
            <Link
              href="/"
              className="not-found-footnote-link font-medium text-gray-500 underline decoration-gray-300 underline-offset-2 transition-colors hover:text-[#02b875] hover:decoration-[#02b875] dark:text-gray-300 dark:decoration-gray-600"
            >
              grams to cups converter
            </Link>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
