import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";
const PAGE_PATH = "/butter";

export const metadata: Metadata = {
  title: "Butter Grams to Cups Converter | 1 Cup = 227g",
  description:
    "Convert butter from grams to cups and sticks instantly. 1 cup of butter equals 227 grams — see the full chart, stick equivalents, and the formula.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Butter Grams to Cups Converter",
    description:
      "1 cup of butter equals 227 grams, or 2 US sticks. Convert any amount instantly, with the full grams-cups-sticks chart.",
    url: PAGE_PATH,
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Butter Grams to Cups Converter",
    description: "1 cup of butter equals 227 grams, or 2 US sticks. Convert any amount instantly.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://grams2cups.io/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Butter Grams to Cups",
      "item": "https://grams2cups.io/butter"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many grams is 1 cup of butter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1 cup of butter equals 227 grams, or 2 US sticks.",
      },
    },
    {
      "@type": "Question",
      name: "Why is butter easier to convert than flour or sugar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Butter is a solid block with a consistent density, so its weight per cup barely changes with packing or temperature — unlike flour or sugar, which can vary with how they're scooped or sifted.",
      },
    },
    {
      "@type": "Question",
      name: "How much does 1 stick of butter weigh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One stick of butter weighs 113 grams, equal to ½ cup or 8 tablespoons.",
      },
    },
  ],
};

const butterIngredient: Ingredient[] = [
  {
    name: "Butter",
    slug: "butter",
    gramsPerCup: 227,
    notes: "Standard US butter, 2 sticks — 1 cup = 227 g",
  },
  {
    name: "Peanut Butter",
    slug: "peanut-butter",
    gramsPerCup: 250,
    notes: "1 US cup = 250 g",
  },
  {
    name: "Almond Butter",
    slug: "almond-butter",
    gramsPerCup: 240,
    notes: "1 US cup = 240 g",
  },
  {
    name: "Buttermilk",
    slug: "buttermilk",
    gramsPerCup: 245,
    notes: "1 US cup = 245 g",
  },
];

const gramsChart: [string, string, string][] = [
  ["28 g", "⅛ cup", "¼ stick"],
  ["57 g", "¼ cup", "½ stick"],
  ["85 g", "⅜ cup", "¾ stick"],
  ["100 g", "~0.44 cup", "~⅞ stick"],
  ["113 g", "½ cup", "1 stick"],
  ["150 g", "~0.66 cup", "~1⅓ sticks"],
  ["200 g", "~0.88 cup", "~1¾ sticks"],
  ["227 g", "1 cup", "2 sticks"],
  ["250 g", "~1.1 cups", "~2¼ sticks"],
  ["300 g", "~1.32 cups", "~2⅔ sticks"],
  ["340 g", "1½ cups", "3 sticks"],
  ["400 g", "~1.76 cups", "~3½ sticks"],
  ["454 g", "2 cups", "4 sticks"],
  ["500 g", "~2.2 cups", "~4½ sticks"],
];

const otherIngredients = [
  { name: "Flour", href: "/flour" },
  { name: "Granulated Sugar", href: "/sugar" },
  { name: "Brown Sugar", href: "/brown-sugar" },
  { name: "Powdered Sugar", href: "/powdered-sugar" },
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

function SimpleTable({
  head,
  rows,
  highlightCol,
}: {
  head: string[];
  rows: (string | number)[][];
  highlightCol?: number;
}) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[420px] text-sm">
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
                  className={`px-4 py-2.5 ${j === 0 ? "font-medium text-gray-800" : j === highlightCol ? "font-semibold" : "text-gray-600"
                    }`}
                  style={j === highlightCol ? { color: ACCENT } : undefined}
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

export default function ButterPage() {
  return (
    <div className="butter-page min-h-screen bg-[#fbfbfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <div className="mx-auto w-full max-w-4xl px-4 pt-4 sm:px-6">
        <nav className="flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline" style={{ color: ACCENT }}>
            Home
          </Link>
          <i className="ri-arrow-right-s-line" />
          <span className="text-gray-500">Butter Grams to Cups</span>
        </nav>
      </div>

      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
            >
              <i className="ri-cup-line" /> Sticks, cups, and grams — all in one place
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Butter Grams to Cups Converter
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <strong className="text-gray-900">1 cup of butter = 227 grams = 2 US sticks.</strong>{" "}
              Use the converter for an instant result, or read on for the full chart and the reasoning
              behind the numbers.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another ingredient?{" "}
              <Link href="/" className="font-semibold transition-colors duration-200 underline underline-offset-2" style={{ color: ACCENT }}>
                Convert Grams To Cups
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto my-8 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto w-full max-w-4xl mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">
          Convert Butter From Grams To Cups
        </h2>
        <div className="mx-auto w-full max-w-4xl">
          <SimpleConverter ingredients={butterIngredient} />
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-4xl">
          <div className="mx-auto w-full space-y-10">
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Short Answer</h2>
              <div className="mb-3 rounded-xl bg-white p-4 text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <strong className="text-gray-900">1 cup of butter = 227 grams = 2 US sticks</strong>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                The formula, if you want to convert any amount:
              </p>
              <div className="mb-3 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                Cups = Grams ÷ 227
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So 500 grams of butter works out to about 2.2 cups. Going the other direction is just as
                simple — multiply cups by 227 to get grams.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Why Butter Converts So Cleanly (Unlike Flour or Sugar)
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Most dry ingredients are frustrating to convert because how loosely or tightly they&apos;re
                packed changes the outcome — a &quot;packed cup&quot; of brown sugar and a &quot;loose cup&quot;
                can differ by 30+ grams. Butter doesn&apos;t have that problem. It&apos;s a solid block with a
                consistent density of roughly 911 grams per liter, so a cup of butter weighs close to the
                same amount every single time, whether it&apos;s cold from the fridge, softened on the
                counter, or melted in a pan. The weight doesn&apos;t change with temperature — only the
                shape does.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                This is actually good news for anyone converting a recipe: unlike flour or powdered sugar,
                you don&apos;t need to worry about sifting, packing, or scooping technique. A gram of butter
                is a gram of butter.
              </p>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams to Cups (and Sticks) Chart</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                In the US, butter is sold in sticks — a detail that makes conversion easier, since sticks
                are pre-marked in tablespoons right on the wrapper.
              </p>
              <SimpleTable head={["Grams", "Cups", "Sticks"]} rows={gramsChart} highlightCol={1} />
              <p className="mt-2 text-xs text-gray-400">
                These figures are based on standard US butter (about 227g per cup). Butter sold in other
                countries — particularly in blocks rather than sticks — can be portioned slightly
                differently, so it&apos;s worth checking the packaging if you&apos;re working with an
                imported brand.
              </p>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                The Fastest Way to Measure Butter Without a Scale
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                If you&apos;re working with standard US stick butter, you often don&apos;t need to convert
                anything at all — the wrapper does the work for you.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600">
                {[
                  "Each stick is marked in tablespoons along its length (8 tablespoons per stick).",
                  "1 stick = 113 grams = ½ cup = 8 tablespoons.",
                  "2 sticks = 227 grams = 1 cup.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                This makes stick butter one of the easiest ingredients to portion precisely without ever
                touching a scale — just cut along the printed line for the amount you need.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">When You Should Weigh Butter Instead</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Because butter&apos;s weight doesn&apos;t shift with packing or temperature, cup and stick
                measurements are usually reliable enough for everyday cooking. Weighing still helps in a
                few specific situations:
              </p>
              <ul className="mb-4 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                  <span>
                    <strong className="text-gray-900">Pastry work</strong> (croissants, puff pastry, pie
                    dough): the ratio of butter to flour affects flakiness directly, and professional bakers
                    weigh both for consistency.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                  <span>
                    <strong className="text-gray-900">Recipes converted from grams</strong>: if a recipe was
                    originally written with a gram measurement, weighing the original figure avoids the
                    small rounding errors that come from converting to cups and back.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                  <span>
                    <strong className="text-gray-900">Halving or scaling a recipe</strong>: cutting a stick
                    precisely at an odd fraction (like ⅓) is far easier and more accurate with a scale than
                    guessing by eye.
                  </span>
                </li>
              </ul>
              <div className="rounded-xl p-3 text-sm text-gray-700" style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}25` }}>
                For most baking and cooking, though, US butter&apos;s consistent density means a kitchen
                scale is a nice-to-have here rather than a must-have — which isn&apos;t true for ingredients
                like flour or brown sugar.
              </div>
            </section>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border bg-white p-5" style={{ borderColor: `${ACCENT}20` }}>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Gram, Defined</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  A unit of mass in the metric system that is equal to one thousandth of a kilogram.
                  According to the <Link className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}
                    rel="nofollow"
                    href="https://www.bipm.org/en/measurement-units"
                    target="_blank">
                    International Bureau of Weights and Measures
                  </Link>
                  , the gram remains one of
                  the most widely used everyday units for cooking and food science because of its
                  precision.
                </p>
              </div>
              <div className="rounded-[24px] border bg-white p-5" style={{ borderColor: `${ACCENT}20` }}>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Cup, Defined</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  A US customary unit of volume equal to 16 tablespoons, or about 236.6 milliliters. The <Link
                  className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}
                    rel="nofollow"
                    href="https://www.fns.usda.gov/"
                    target="_blank"
                  >
                    USDA&apos;s Food and Nutrition Service
                  </Link> commonly references cup measurements in its
                  standardized serving-size guidance, though it notes that volume measurements are
                  inherently less precise than weight for solid and semi-solid ingredients.
                </p>
              </div>
            </section>

            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>1 stick butter = 113 g = ½ cup = 8 tablespoons</li>
                <li>2 sticks butter = 227 g = 1 cup</li>
                <li>1 tablespoon = ~14 g</li>
                <li>1 pound butter = 454 g = 4 sticks = 2 cups</li>
              </ul>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Butter is one of the more forgiving ingredients to convert because its density barely
                changes, whether it&apos;s cold, soft, or melted. For everyday cooking, sticks and cup
                markings will get you close enough almost every time. Reach for a scale mainly when
                precision genuinely affects the result — laminated pastry, scaled recipes, or anything
                converted directly from a gram-based source.
              </p>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for sugar. Each of these has its own
                weight-per-cup because densities differ:
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

            <section className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>
              Figures in this guide are approximate and based on standard US butter. For the most accurate
              results, especially with imported or block-style butter, a digital kitchen scale is the most
              reliable choice.
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
