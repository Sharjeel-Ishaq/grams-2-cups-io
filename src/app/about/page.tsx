import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import OpenAssistantButton from "@/components/OpenAssistantButton";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "About Grams to Cups Converter",
  description:
    "Why we built Grams to Cups Converter, how our conversion figures are sourced, and how our Kitchen Assistant helps with ingredient and measurement questions.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Grams to Cups Converter",
    description:
      "How we source our conversion figures, why one number per ingredient isn't the whole story, and how our Kitchen Assistant fits into the experience.",
    url: "/about",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Grams to Cups Converter",
    description:
      "Why we built this tool, how we source our numbers, and how our Kitchen Assistant can help.",
    images: ["/og-image.jpg"],
  },
};

const accuracyPoints = [
  "Using a clearly stated reference method, typically spoon-and-level for dry goods and a US customary cup of 236.6 mL, so our numbers are internally consistent.",
  "Flagging ingredients like brown sugar, salt, and baking powder where the standard number depends on a detail the person measuring needs to know.",
  "Recommending a digital kitchen scale wherever precision affects the recipe, because weight removes packing and technique variability.",
  "Updating our figures when better data or clearer sourcing becomes available, rather than treating any chart as permanently fixed.",
  "Keeping the Kitchen Assistant grounded in the same practical measurement principles used throughout the site.",
];

const converterLinks = [
  { name: "All ingredients", href: "/ingredients" },
  { name: "Grams to cups (home)", href: "/" },
  { name: "FAQ", href: "/faq" },
  { name: "Conversion chart", href: "/conversion-chart" },
  { name: "Cups to grams", href: "/cups-to-grams" },
  { name: "100 grams to cups", href: "/100-grams-to-cups" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div
              className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: `${ACCENT}12`,
                color: ACCENT,
              }}
            >
              <i className="ri-information-line" aria-hidden="true" />
              About this site
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              About Grams to Cups Converter
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
              Conversion tools, ingredient guides, and practical help for
              turning recipe measurements into something you can confidently
              use in your kitchen.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">

            {/* Why We Built This */}
            <section
              className="rounded-[24px] border bg-white p-5 sm:p-6"
              style={{ borderColor: `${ACCENT}20` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Why We Built This
              </h2>

              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Every baker eventually runs into the same wall: a recipe
                written in cups, a scale sitting unused in the cupboard, and
                uncertainty about whether “1 cup of flour” means the same thing
                every time it&apos;s scooped. It doesn&apos;t, and that gap
                between what a recipe assumes and what lands in the bowl causes
                a lot of baking frustration.
              </p>

              <p className="text-sm leading-relaxed text-gray-600">
                Grams to Cups Converter exists to close that gap. We built
                ingredient-specific conversion tools and guides that go beyond
                a generic “1 cup = X grams” number because that number is rarely
                the whole story.{" "}
                <Link
                  href="/flour"
                  className="font-semibold hover:underline"
                  style={{ color: ACCENT }}
                >
                  Flour
                </Link>{" "}
                packs differently than it pours.{" "}
                <Link
                  href="/brown-sugar"
                  className="font-semibold hover:underline"
                  style={{ color: ACCENT }}
                >
                  Brown sugar
                </Link>{" "}
                changes depending on whether it&apos;s packed or loose.{" "}
                <Link
                  href="/salt"
                  className="font-semibold hover:underline"
                  style={{ color: ACCENT }}
                >
                  Kosher salt
                </Link>{" "}
                from one brand can weigh nearly half as much as another.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                We also built a{" "}
                <strong className="text-gray-900">
                  Kitchen Assistant
                </strong>{" "}
                for questions that don&apos;t fit neatly into a conversion
                table. It can help explain ingredient-specific conversions,
                measurement techniques, and common baking questions while
                keeping the same practical context used throughout the site.
              </p>
            </section>

            {/* What Makes Our Approach Different */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                What Makes Our Approach Different
              </h2>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Most conversion charts give you one number and move on. We try
                to do more by explaining the ingredient, the measurement method,
                and the context behind the number.
              </p>

              <div className="space-y-3">
                {[
                  [
                    "We separate the ingredient from the technique.",
                    "A cup of packed brown sugar and a cup of loose brown sugar aren&apos;t a rounding difference. Wherever measuring technique or brand meaningfully changes the outcome, we call it out explicitly instead of hiding it behind an average.",
                  ],
                  [
                    "We check our numbers against credible sources, not just each other.",
                    "Where possible, reference values are cross-checked against sources like USDA FoodData Central and the FAO/INFOODS Density Database. When credible sources disagree, we say so rather than presenting false precision.",
                  ],
                  [
                    "We explain the “why,” not just the “what.”",
                    "A conversion chart tells you that 100 grams of honey is about 0.29 cups. It should also explain why honey is denser than water and why packing dry ingredients changes their weight.",
                  ],
                  [
                    "We give you help beyond the chart.",
                    "Some questions are about more than a single conversion. The Kitchen Assistant can help with ingredient-specific conversions, measurement questions, and practical baking guidance when you need more context than a chart can provide.",
                  ],
                ].map(([title, body]) => (
                  <div
                    key={title}
                    className="rounded-2xl border bg-white p-4"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <h3 className="mb-1 text-sm font-bold text-gray-900">
                      {title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Kitchen Assistant */}
            <section
              className="overflow-hidden rounded-[24px] border bg-white"
              style={{ borderColor: `${ACCENT}25` }}
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${ACCENT}12`,
                      color: ACCENT,
                    }}
                  >
                    <i
                      className="ri-robot-2-line text-xl"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p
                      className="mb-1 text-xs font-semibold uppercase tracking-[0.16em]"
                      style={{ color: ACCENT }}
                    >
                      Kitchen Assistant
                    </p>

                    <h2 className="text-2xl font-bold tracking-[-0.02em] text-gray-900">
                      Have a measurement question?
                    </h2>
                  </div>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
                  Not sure how much a particular ingredient weighs, why two
                  conversion values differ, or how a measurement technique
                  affects your recipe? The Kitchen Assistant can help you work
                  through those questions conversationally.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <OpenAssistantButton
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02b875] focus-visible:ring-offset-2"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <i className="ri-message-3-line" aria-hidden="true" />
                    <span>Ask the Assistant</span>
                  </OpenAssistantButton>

                  <span className="text-xs leading-relaxed text-gray-400">
                    Available from the Kitchen Assistant button on the site.
                  </span>
                </div>
              </div>
            </section>

            {/* Accuracy */}
            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{
                backgroundColor: `${ACCENT}0a`,
                border: `1px solid ${ACCENT}25`,
              }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Our Standard for Accuracy
              </h2>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                We&apos;re upfront about something most conversion sites gloss
                over:{" "}
                <strong className="text-gray-900">
                  there is no single grams-per-cup value that&apos;s
                  universally “correct” for most ingredients.
                </strong>{" "}
                Density depends on particle size, moisture, temperature, brand,
                and how the ingredient was measured. What we commit to instead
                is:
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {accuracyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2"
                  >
                    <i
                      className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm"
                      style={{ color: ACCENT }}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Who This Is For */}
            <section className="rounded-[24px] border border-[#02b875] bg-white p-5 transition-colors sm:p-6 dark:border-[#33443d] dark:bg-[#17211e]"
              style={{
                backgroundColor: `${ACCENT}0a`,
                border: `1px solid ${ACCENT}25`,
              }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
                Who This Is For
              </h2>

              <p className="text-sm leading-relaxed text-gray-600 dark:text-[#c5d1cc]">
                Whether you&apos;re converting a European recipe written in grams,
                double-checking a baking measurement, figuring out how much a “cup” of
                something weighs, or simply have a question about an ingredient, our goal
                is the same: give you a fast, useful answer and enough context to
                understand it.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {/* Convert */}
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-colors dark:border-[#33443d] dark:bg-[#1c2924]">
                  <i
                    className="ri-calculator-line text-lg text-[#02b875]"
                    aria-hidden="true"
                  />

                  <h3 className="mt-2 text-sm font-bold text-gray-900 dark:text-white">
                    Convert
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-[#b8c6bf]">
                    Use ingredient-specific conversion tools when you need a number.
                  </p>
                </div>

                {/* Understand */}
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-colors dark:border-[#33443d] dark:bg-[#1c2924]">
                  <i
                    className="ri-book-open-line text-lg text-[#02b875]"
                    aria-hidden="true"
                  />

                  <h3 className="mt-2 text-sm font-bold text-gray-900 dark:text-white">
                    Understand
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-[#b8c6bf]">
                    Read the guides to learn what affects the measurement.
                  </p>
                </div>

                {/* Ask */}
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-colors dark:border-[#33443d] dark:bg-[#1c2924]">
                  <i
                    className="ri-robot-2-line text-lg text-[#02b875]"
                    aria-hidden="true"
                  />

                  <h3 className="mt-2 text-sm font-bold text-gray-900 dark:text-white">
                    Ask
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-[#b8c6bf]">
                    Use the Kitchen Assistant when your question needs more context.
                  </p>
                </div>
              </div>
            </section>


            {/* What We're Not */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                A Note on What We&apos;re Not
              </h2>

              <p className="text-sm leading-relaxed text-gray-600">
                We&apos;re not a substitute for a kitchen scale, and we say so
                throughout our guides. Conversion charts, ours included, are
                estimates built on reasonable reference values and measurement
                methods. The Kitchen Assistant can help explain conversions and
                measurement questions, but its answers should also be treated
                as guidance rather than a replacement for weighing an ingredient
                when precision matters.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                When a recipe&apos;s success depends on exact weight,{" "}
                <strong className="text-gray-900">
                  weighing the ingredient directly will always beat any
                  conversion chart or conversational estimate.
                </strong>
              </p>
            </section>

            {/* Feedback */}
            <section
              className="rounded-[24px] border bg-white p-5 sm:p-6"
              style={{
                backgroundColor: `${ACCENT}0a`,
                border: `1px solid ${ACCENT}25`,
              }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Feedback and Corrections
              </h2>

              <p className="text-sm leading-relaxed text-gray-600">
                Ingredient densities, brand formulations, and best practices
                evolve. If you spot a conversion that doesn&apos;t match your
                kitchen scale, notice an explanation that could be clearer, or
                know of a source we should cite, we want to hear about it.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Good conversion data should be transparent, explainable, and
                open to correction.
              </p>
            </section>

            {/* Explore */}
            <section
              className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500"
              style={{ borderColor: `${ACCENT}15` }}
            >
              <p className="mb-2 font-semibold text-gray-600">
                Explore the Converters
              </p>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {converterLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2 font-medium text-gray-700 transition-colors hover:border-current"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <span className="truncate">{link.name}</span>

                    <i
                      className="ri-arrow-right-s-line flex-shrink-0"
                      style={{ color: ACCENT }}
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
