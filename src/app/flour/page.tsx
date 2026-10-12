import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";
const PAGE_URL = "/flour";

export const metadata: Metadata = {
  title: "Flour Grams to Cups Converter | Free Online Tool",
  description:
    "Convert flour from grams to cups instantly. Free calculator and charts for all-purpose, bread, cake, and whole wheat flour, plus the cup-to-gram formula.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Flour Grams to Cups Converter",
    description:
      "Convert flour from grams to cups instantly, with charts for every common flour type and the spoon-and-level measuring method.",
    url: PAGE_URL,
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flour Grams to Cups Converter",
    description:
      "Convert flour from grams to cups instantly, with charts for every common flour type.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://grams2cups.io/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Flour Grams to Cups",
      item: "https://grams2cups.io/flour",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does 1 cup of flour weigh in grams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One US cup of all-purpose flour weighs around 125 grams when spooned into the cup and leveled off.",
      },
    },
    {
      "@type": "Question",
      name: "Does sifting affect the weight of flour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sifting adds air into the flour, which lowers its density, so a cup of sifted flour weighs less than a cup of unsifted flour.",
      },
    },
    {
      "@type": "Question",
      name: "How do I convert cups of flour back to grams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the number of cups by 125. For example, 2 cups of all-purpose flour equals about 250 grams.",
      },
    },
  ],
};

/* ─── Flour-type data (grams per cup) for the converter widget ────────── */
const flourIngredients: Ingredient[] = [
  { name: "All-Purpose Flour", slug: "all-purpose-flour", gramsPerCup: 125, notes: "Spoon and level" },
  { name: "Bread Flour", slug: "bread-flour", gramsPerCup: 127, notes: "Spoon and level" },
  { name: "Cake Flour", slug: "cake-flour", gramsPerCup: 114, notes: "Sift before measuring" },
  { name: "Whole Wheat Flour", slug: "whole-wheat-flour", gramsPerCup: 120, notes: "Spoon and level" },
  { name: "Almond Flour", slug: "almond-flour", gramsPerCup: 96, notes: "Loosely packed" },
  { name: "Coconut Flour", slug: "coconut-flour", gramsPerCup: 128, notes: "Spoon and level" },
  { name: "Rye Flour", slug: "rye-flour", gramsPerCup: 102, notes: "Spoon and level" },
  { name: "Self-Rising Flour", slug: "self-rising-flour", gramsPerCup: 125, notes: "Spoon and level" },
  { name: "Semolina", slug: "semolina", gramsPerCup: 167, notes: "Spoon and level" },
  { name: "Buckwheat Flour", slug: "buckwheat-flour", gramsPerCup: 120, notes: "Spoon and level" },
  { name: "Rolled Oats", slug: "rolled-oats-flour", gramsPerCup: 104, notes: "Regular rolled oats" },
  { name: "Spelt Flour", slug: "spelt-flour", gramsPerCup: 120, notes: "Spoon and level" },
];

const quickChart = [
  ["50 g", "⅜ cup"], ["100 g", "¾ cup"], ["125 g", "1 cup"], ["150 g", "1¼ cups"],
  ["200 g", "1⅝ cups"], ["250 g", "2 cups"], ["300 g", "2⅜ cups"], ["500 g", "4 cups"],
  ["750 g", "6 cups"], ["1,000 g", "8 cups"],
];

const methodTable = [
  ["Spoon in, then level off", "120–125 g"],
  ["Scoop straight from the bag", "140 g or more"],
  ["Sifted flour", "110–115 g"],
];

const flourTypeTable = [
  ["All-purpose flour", "125 g"], ["Bread flour", "127 g"], ["Cake flour", "114 g"],
  ["Whole wheat flour", "120 g"], ["Almond flour", "96 g"], ["Coconut flour", "128 g"],
  ["Rye flour", "102 g"], ["Self-rising flour", "125 g"], ["Semolina", "167 g"],
  ["Buckwheat flour", "120 g"], ["Rolled oats", "104 g"], ["Spelt flour", "120 g"],
];

const fullTable: [string, string][] = [
  ["10 g", "⅛ cup"], ["25 g", "¼ cup"], ["50 g", "⅜ cup"], ["60 g", "½ cup"],
  ["75 g", "⅝ cup"], ["80 g", "⅝ cup"], ["85 g", "⅔ cup"], ["90 g", "¾ cup"],
  ["100 g", "¾ cup"], ["110 g", "⅞ cup"], ["120 g", "1 cup"], ["125 g", "1 cup"],
  ["140 g", "1⅛ cups"], ["150 g", "1¼ cups"], ["160 g", "1¼ cups"], ["180 g", "1½ cups"],
  ["200 g", "1⅝ cups"], ["220 g", "1¾ cups"], ["225 g", "1¾ cups"], ["240 g", "1⅞ cups"],
  ["250 g", "2 cups"], ["275 g", "2¼ cups"], ["300 g", "2⅜ cups"], ["320 g", "2½ cups"],
  ["340 g", "2¾ cups"], ["375 g", "3 cups"], ["400 g", "3¼ cups"], ["450 g", "3⅝ cups"],
  ["500 g", "4 cups"], ["600 g", "4¾ cups"], ["650 g", "5¼ cups"], ["700 g", "5⅝ cups"],
  ["750 g", "6 cups"], ["800 g", "6⅜ cups"], ["900 g", "7¼ cups"], ["1,000 g", "8 cups"],
];

const cupsBackToGrams = [
  ["½ cup", "62.5 g"], ["¾ cup", "93.75 g"], ["1 cup", "125 g"],
  ["1½ cups", "187.5 g"], ["2 cups", "250 g"], ["3 cups", "375 g"], ["4 cups", "500 g"],
];

const worldCupSizes = [
  ["US customary cup", "236.6 mL"], ["US legal cup", "240 mL"], ["Metric cup", "250 mL"],
  ["Imperial cup", "284.1 mL"], ["Japanese cup", "200 mL"],
];

const otherIngredients = [
  { name: "Granulated Sugar", href: "/sugar" },
  { name: "Brown Sugar", href: "/brown-sugar" },
  { name: "Powdered Sugar", href: "/powdered-sugar" },
  { name: "Butter", href: "/butter" },
  { name: "Water", href: "/water" },
  { name: "Milk", href: "/milk" },
  { name: "Rolled Oats", href: "/oats" },
  { name: "Rice", href: "/rice" },
  { name: "Chocolate Chips", href: "/chocolate-chips" },
  { name: "Honey", href: "/honey" },
  { name: "Almonds", href: "/almonds" },
  { name: "Cocoa Powder", href: "/cocoa-powder" },
  { name: "Salt", href: "/salt" },
  { name: "Baking Powder", href: "/baking-powder" },
  { name: "Vegetable Oil", href: "/vegetable-oil" },
];

/* Small reusable table renderer to keep markup DRY and lightweight */
function SimpleTable({
  head,
  rows,
}: {
  head: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[320px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 text-left font-semibold text-white">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-2.5 ${j === 0 ? "font-medium text-gray-800" : "text-gray-600"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function FlourPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* JSON-LD structured data — rendered server-side, adds no client JS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors duration-200 hover:underline" style={{ color: ACCENT }}>
            Home
          </Link>
          <i className="ri-arrow-right-s-line" />
          <span className="text-gray-500">Flour Grams to Cups</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
            >
              <i className="ri-restaurant-line" /> 12 flour types, ready to convert
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Flour Grams to Cups Converter
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              1 US cup of all-purpose flour weighs around <strong className="text-gray-900">125 grams</strong>.
              Turn any flour weight into cups instantly, with charts for bread flour, cake flour,
              whole wheat, and more.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another ingredient?{" "}
              <Link href="/" className="font-semibold transition-colors duration-200 underline underline-offset-2" style={{ color: ACCENT }}>
                Convert Grams To Cups
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Converter tool ── */}
      <div className="mx-auto my-8 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto w-full max-w-4xl mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">
          Convert Flour From Grams To Cups
        </h2>
        <div className="mx-auto w-full max-w-4xl">
          <SimpleConverter ingredients={flourIngredients} />
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-4xl">
          <div className="mx-auto w-full space-y-10">

            {/* Quick reference chart */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference Chart</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                These numbers assume 1 cup of flour equals 125 grams. For baking that needs to come out
                right every time, it&apos;s better to weigh your flour on a kitchen scale instead of
                scooping it into a cup.
              </p>
              <SimpleTable head={["Flour (grams)", "Cups"]} rows={quickChart} />
            </section>

            {/* Getting an accurate measurement */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Getting an Accurate Cup Measurement</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                How you put flour into the cup changes how much it actually weighs. Follow these steps
                for a fairly reliable result:
              </p>
              <ul className="mb-3 space-y-2 text-sm text-gray-600">
                {[
                  "Stir or fluff the flour first so it isn't packed down.",
                  "Spoon the flour into the measuring cup instead of scooping the cup through the bag.",
                  "Don't press the flour down.",
                  "Once the cup is full, run a knife or straight edge across the top to remove the extra.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                This is often called the <strong className="text-gray-900">spoon-and-level technique</strong>,
                and it gives a more even, repeatable measurement than scooping.
              </p>

              <h3 className="mb-2 mt-6 text-base font-bold text-gray-900">Why the Method Matters</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                The same cup can hold a different amount of flour depending on how you fill it:
              </p>
              <SimpleTable head={["Method", "Weight per cup"]} rows={methodTable} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Scooping the cup directly into the bag usually packs in more flour than you&apos;d want.
                When a recipe&apos;s outcome really matters, weighing the flour is the safer bet.
              </p>
            </section>

            {/* Flour types */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Cup Weights for Different Flour Types</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Flours aren&apos;t all the same density, so 1 cup doesn&apos;t weigh the same across types.
              </p>
              <SimpleTable head={["Flour Type", "Weight per Cup"]} rows={flourTypeTable} />
              <p className="mt-2 text-xs text-gray-400">
                These figures are estimates — the exact weight can shift slightly depending on the brand,
                how much moisture is in the flour, how fine the particles are, and how you scoop it.
              </p>
            </section>

            {/* Full conversion table */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Full Conversion Table (Grams to Cups)</h2>
              <p className="mb-4 text-sm text-gray-500">All-purpose flour, spoon-and-level method.</p>
              <SimpleTable head={["Grams", "Cups (approx.)"]} rows={fullTable} />
            </section>

            {/* Cups back to grams */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Converting Cups Back to Grams</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                If you already have an amount in cups and need grams instead, use this formula:
              </p>
              <div className="mb-3 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                Grams = cups × 125
              </div>
              <SimpleTable head={["Cups", "Grams"]} rows={cupsBackToGrams} />
            </section>

            {/* World cup sizes */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Cup Sizes Around the World</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Not every &quot;cup&quot; holds the same volume. This converter is built around the US
                customary cup, but here&apos;s how the sizes compare:
              </p>
              <SimpleTable head={["Cup Standard", "Volume"]} rows={worldCupSizes} />
              <p className="mt-2 text-xs text-gray-400">
                If a recipe doesn&apos;t say which cup size it means, assume it&apos;s the standard US
                customary cup.
              </p>
            </section>

            {/* Most reliable method + sifting */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Most Reliable Way to Measure Flour</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Volume measurements can vary a lot depending on technique, so weighing flour on a kitchen
                scale is the most dependable method. If a recipe calls for 125 grams of flour, weighing
                that amount directly will give you better results than converting it to a cup
                measurement. When a scale isn&apos;t available, spoon the flour into the cup gently and
                level off the top rather than packing it down.
              </p>
              <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">Does Sifting Affect the Weight?</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Yes — sifting adds air into the flour, which lowers its density. A cup of sifted flour
                will weigh less than a cup of flour that hasn&apos;t been sifted. If a recipe specifically
                asks for &quot;sifted flour,&quot; measure it after sifting, not before.
              </p>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for flour. The same idea applies to other
                kitchen staples, though each has its own weight-per-cup because densities differ:
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {otherIngredients.map((ing) => (
                  <Link
                    key={ing.href}
                    href={ing.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:text-[#02B875] hover:border-current"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <span className="truncate">{ing.name}</span>
                    <i className="ri-arrow-right-s-line flex-shrink-0" style={{ color: ACCENT }} />
                  </Link>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <section className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>
              All figures in this guide are approximate. Actual weight can vary depending on brand,
              moisture level, and how the ingredient is measured. If you want accurate baking results, use a digital kitchen scale.
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
