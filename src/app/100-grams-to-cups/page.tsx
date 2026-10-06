import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "100 Grams to Cups Conversion Chart | Ingredient Guide",
  description:
    "Convert 100 grams to cups for flour, sugar, butter, honey, oats, rice, chocolate chips, and more. Quick-reference chart and ingredient guide.",
  alternates: {
    canonical: "/100-grams-to-cups",
  },
  openGraph: {
    title: "100 Grams to Cups Conversion Chart",
    description:
      "See how 100 grams converts to cups across common ingredients used in baking and cooking.",
    url: "/100-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "100 Grams to Cups Conversion Chart",
    description: "Quick ingredient-by-ingredient chart showing how 100 grams converts to cups.",
    images: ["/og-image.jpg"],
  },
};

/* ─── Ingredient data for the "convert any amount" tool ────────────── */
const ingredients: Ingredient[] = [
  { name: "All-Purpose Flour", slug: "flour", gramsPerCup: 120, notes: "Spoon and level" },
  { name: "Granulated Sugar", slug: "sugar", gramsPerCup: 200, notes: "Use level cups" },
  { name: "Brown Sugar", slug: "brown-sugar", gramsPerCup: 220, notes: "Pack firmly" },
  { name: "Powdered Sugar", slug: "powdered-sugar", gramsPerCup: 120, notes: "Sift for a lighter measure" },
  { name: "Butter", slug: "butter", gramsPerCup: 227, notes: "Standard butter, 2 sticks" },
  { name: "Vegetable Oil", slug: "vegetable-oil", gramsPerCup: 220, notes: "Neutral cooking oil" },
  { name: "Water", slug: "water", gramsPerCup: 237, notes: "Based on a US cup" },
  { name: "Whole Milk", slug: "milk", gramsPerCup: 245, notes: "US customary cup" },
  { name: "Honey", slug: "honey", gramsPerCup: 340, notes: "Dense liquid" },
  { name: "Rolled Oats", slug: "oats", gramsPerCup: 90, notes: "Regular rolled oats" },
  { name: "White Rice", slug: "rice", gramsPerCup: 185, notes: "Uncooked" },
  { name: "Chocolate Chips", slug: "chocolate-chips", gramsPerCup: 170, notes: "Semi-sweet chips" },
  { name: "Almonds", slug: "almonds", gramsPerCup: 140, notes: "Whole almonds" },
  { name: "Cocoa Powder", slug: "cocoa-powder", gramsPerCup: 85, notes: "Unsweetened" },
  { name: "Baking Powder", slug: "baking-powder", gramsPerCup: 192, notes: "Level, not packed" },
  { name: "Table Salt", slug: "salt", gramsPerCup: 292, notes: "Fine, uniform crystals" },
];

/* ─── Hero quick-reference badges ──────────────────────────────────── */
const heroBadges = [
  { label: "Sugar", value: "0.5 cups", icon: "ri-drop-line" },
  { label: "Flour", value: "0.83 cups", icon: "ri-restaurant-line" },
  { label: "Honey", value: "0.29 cups", icon: "ri-seedling-line" },
  { label: "Oats", value: "1.11 cups", icon: "ri-cup-line" },
];

/* ─── Quick conversion table ────────────────────────────────────────── */
const quickTable = [
  { name: "All-purpose flour", grams: "120 g", cups: "0.83 cups", href: "/flour" },
  { name: "Granulated sugar", grams: "200 g", cups: "0.5 cups", href: "/sugar" },
  { name: "Brown sugar, packed", grams: "220 g", cups: "0.45 cups", href: "/sugar" },
  { name: "Powdered (confectioners') sugar", grams: "120 g", cups: "0.83 cups", href: "/sugar" },
  { name: "Butter", grams: "227 g", cups: "0.44 cups", href: "/butter" },
  { name: "Vegetable oil", grams: "220 g", cups: "0.45 cups", href: "/vegetable-oil" },
  { name: "Water", grams: "237 g", cups: "0.42 cups", href: "/water" },
  { name: "Whole milk", grams: "245 g", cups: "0.41 cups", href: "/milk" },
  { name: "Honey", grams: "340 g", cups: "0.29 cups", href: "/honey" },
  { name: "Rolled oats", grams: "90 g", cups: "1.11 cups", href: "/oats" },
  { name: "White rice, uncooked", grams: "185 g", cups: "0.54 cups", href: "/rice" },
  { name: "Chocolate chips", grams: "170 g", cups: "0.59 cups", href: "/chocolate-chips" },
  { name: "Almonds, whole", grams: "140 g", cups: "0.71 cups", href: "/almonds" },
  { name: "Cocoa powder, unsweetened", grams: "85 g", cups: "1.18 cups", href: "/cocoa-powder" },
  { name: "Baking powder", grams: "192 g", cups: "0.52 cups", href: "/baking-powder" },
  { name: "Table salt, fine", grams: "292 g", cups: "0.34 cups", href: "/salt" },
];

/* ─── Ingredient-by-ingredient breakdown ────────────────────────────── */
const breakdown = [
  "100 grams of all-purpose flour measures out to 0.83 cups, just under seven-eighths of a cup, based on the standard 120 grams per cup used by most US baking references.",
  <> 100 grams of granulated sugar measures out to exactly 0.5 cups, since a cup of white sugar weighs a consistent{" "} 
  <Link
    href="/200-grams-to-cups"
    className="transition-colors duration-200 hover:underline"
    style={{ color: ACCENT }}
  >200 grams </Link>{" "}  regardless of brand.
  </>,
  "100 grams of packed brown sugar measures out to 0.45 cups. Brown sugar needs to be pressed firmly into the cup for this figure to hold, since loosely spooned brown sugar weighs noticeably less.",
  "100 grams of powdered sugar measures out to 0.83 cups. It shares roughly the same density as flour, so the two convert almost identically.",
  "100 grams of butter measures out to 0.44 cups, just under one full stick of US butter.",
  "100 grams of vegetable oil measures out to 0.45 cups.",
  "100 grams of water measures out to 0.42 cups, and whole milk comes in just slightly lower at 0.41 cups because of its added fat and protein.",
  "100 grams of honey measures out to 0.29 cups, the smallest figure on this list, since honey is one of the densest common baking ingredients.",
  "100 grams of rolled oats measures out to 1.11 cups. Oats are light and full of air pockets, so this is one of the few ingredients where 100 grams fills more than a full cup.",
  "100 grams of uncooked white rice measures out to 0.54 cups.",
  "100 grams of chocolate chips measures out to 0.59 cups.",
  "100 grams of whole almonds measures out to 0.71 cups.",
  "100 grams of unsweetened cocoa powder measures out to 1.18 cups, the highest figure on this list, since cocoa is extremely light and airy.",
  "100 grams of baking powder measures out to 0.52 cups.",
  "100 grams of fine table salt measures out to 0.34 cups, since salt packs more tightly than almost any other pantry ingredient.",
];

/* ─── Cup standards ──────────────────────────────────────────────────── */
const cupStandards = [
  { name: "US customary cup", vol: "236.59 mL", note: "Used in most American recipes" },
  { name: "US legal cup", vol: "240 mL", note: "Shows up on nutrition labels" },
  { name: "Metric cup", vol: "250 mL", note: "UK, Australia, Canada, South Africa" },
  { name: "Imperial cup (pre-1970)", vol: "284.13 mL", note: "Older British cookbooks" },
];

/* ─── FAQs ───────────────────────────────────────────────────────────── */
const faqs = [
  { q: "Is 100 grams the same as half a cup?", a: "Only for a handful of ingredients. Granulated sugar lands almost exactly at half a cup per 100 grams, but flour comes in closer to 0.83 cups and honey sits around 0.29 cups. Treat \"half a cup\" as a rough guide for sugar specifically, not a general rule." },
  { q: "How many cups is 100 grams of flour?", a: "100 grams of all-purpose flour is about 0.83 cups, based on the common baking standard of 120 grams per cup. If your flour is packed more densely, the same 100 grams could measure slightly under that." },
  { q: "How many cups is 100 grams of butter?", a: "100 grams of butter comes out to roughly 0.44 cups, or a little under one stick. A single US stick of butter weighs 113 grams and equals half a cup, so 100 grams is just under one stick." },
  { q: "Why do recipes from different countries give different gram amounts for the same cup?", a: "Because the size of a \"cup\" itself changes by region. A US cup, a UK metric cup, and an Australian cup aren't identical volumes, so the same cup measurement can represent a different gram weight depending on where the recipe was written." },
  { q: "Is weighing ingredients more accurate than using cups?", a: "Yes. A gram measurement stays the same no matter how the ingredient settles, packs, or gets scooped, while a cup measurement can shift by 10 to 20 percent depending on technique. For anything where precision affects the outcome, like bread or delicate pastries, a scale is the more dependable tool." },
];

export default function HundredGramsToCups() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div
              className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
            >
              <i className="ri-scales-3-line" /> 16 ingredients, one gram amount
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              100 Grams To Cups: Conversion Chart
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Converting 100 grams to cups can be tricky because the answer depends on what you&apos;re
              measuring. It&apos;s about half a cup of granulated sugar, roughly 0.83 cups of flour, and
              about 0.29 cups of honey. Grams measure weight, while cups measure volume, so the same 100
              grams can take up very different amounts of space depending on the ingredient.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
              Below, commonly used conversion values for the ingredients home bakers ask about most, along
              with an explanation of why 100 grams can look so different from one ingredient to another.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Need a different amount for one ingredient?{" "}
              <Link href="/" className="font-semibold transition-colors duration-200 underline underline-offset-2" style={{ color: ACCENT }}>
                Use the full Grams To Cups converter
              </Link>
              .
            </p>
          </div>

          {/* quick reference badges */}
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {heroBadges.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border bg-white/80 p-3 text-left backdrop-blur-sm"
                style={{ borderColor: `${ACCENT}25` }}
              >
                <div className="mb-2 flex items-center justify-between text-gray-400">
                  <i className={item.icon} style={{ color: ACCENT }} />
                  <span className="text-[9px] uppercase tracking-[0.2em]">{item.label}</span>
                </div>
                <div className="text-sm font-semibold tracking-[-0.02em] text-gray-900">
                  100g ≈ {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">

            {/* Convert any amount tool */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <div className="mb-5 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}>
                  <i className="ri-flashlight-line" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">Not exactly 100 grams?</div>
                  <div className="text-lg font-bold text-gray-900">Convert any amount, for any ingredient</div>
                </div>
              </div>
              <SimpleConverter ingredients={ingredients} initialGrams={100} />
            </section>

            {/* Quick conversion table */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">100 Grams To Cups: Quick Conversion Table</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[480px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">100g in Cups</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quickTable.map((row, i) => (
                      <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">
                          <Link href={row.href} className="transition-colors duration-200 hover:underline" style={{ color: ACCENT }}>
                            {row.name}
                          </Link>
                        </td>
                        <td className="px-4 py-2.5 text-gray-600">{row.grams}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.cups}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                These figures follow the measuring conventions most US recipe developers use, such as the
                spoon-and-level method for flour and the pack-firmly method for brown sugar. Actual weight
                can shift a little depending on how humid your kitchen is and how you scoop.
              </p>
            </section>

            {/* Ingredient by ingredient */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">100 Grams In Cups, Ingredient By Ingredient</h2>
              <ul className="space-y-2.5 text-sm text-gray-600">
                {breakdown.map((line, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Why the same 100 grams looks so different */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why the Same 100 Grams Looks So Different</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Weight and volume aren&apos;t measuring the same thing, so there&apos;s no single
                conversion that works across every ingredient. A cup is always the same size, but how much
                of it fills up with 100 grams depends on how tightly the ingredient&apos;s particles pack
                together.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                Honey is thick and heavy, so it takes 340 grams to fill a cup, leaving 100 grams well under
                a third of that cup. Cocoa powder is dry and full of tiny air pockets, so it only takes 85
                grams to fill the same cup, which pushes 100 grams past a full cup. Once you see the
                pattern, it&apos;s easy to guess whether an ingredient will read as more or less than half
                a cup: light, powdery ingredients read higher, dense liquids and packed sugars read lower.
              </p>
            </section>

            {/* The formula */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Formula Behind Every Conversion</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">Every value in the table above comes from one simple calculation.</p>
              <div className="mb-3 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                cups = grams ÷ grams per cup
              </div>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                For flour, that&apos;s 100 ÷ 120, which comes out to 0.83 cups. For honey, it&apos;s 100 ÷
                340, or about 0.29 cups. If you&apos;re working with an ingredient that isn&apos;t listed
                above, look up its grams-per-cup value first (a kitchen reference chart or the packaging
                itself usually has it), then run it through the same division.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                The reverse works too. To go from cups back to grams, multiply the cup amount by the
                ingredient&apos;s grams-per-cup figure.
              </p>
            </section>

            {/* Not every cup is the same size */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Not Every Cup Is the Same Size</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Cup measurements vary slightly depending on where a recipe comes from, and that small
                difference matters if you&apos;re chasing precision.
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[420px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cup Standard</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Volume</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Where It&apos;s Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cupStandards.map((row, i) => (
                      <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.name}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.vol}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                None of these gaps are huge on their own, but they add up across a multi-cup recipe, so
                it&apos;s worth checking which cup a recipe was written for before you start.
              </p>
            </section>

            {/* Getting an accurate measurement without a scale */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Getting an Accurate Measurement Without a Scale</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                A digital kitchen scale removes all the guesswork, and it&apos;s the fastest way to hit
                exactly 100 grams regardless of the ingredient. If you&apos;re measuring by cup instead, a
                few habits keep you close to accurate.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "For flour and other powdery ingredients, spoon the ingredient into the cup rather than scooping directly from the bag, then level the top with a flat edge. Scooping compacts the ingredient and can add 15 to 20 grams of extra weight without you noticing.",
                  "For packed ingredients like brown sugar, press it firmly into the cup until it holds the cup's shape when tipped out.",
                  "For liquids, use a clear liquid measuring cup and check the fill line at eye level rather than looking down at it, since that angle tends to make the amount look higher than it is.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <details key={faq.q} open={i === 0} className="overflow-hidden rounded-2xl border bg-white" style={{ borderColor: `${ACCENT}20` }}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors hover:bg-gray-50">
                      <span className="text-sm font-semibold text-gray-800">{faq.q}</span>
                      <i className="ri-arrow-down-s-line flex-shrink-0 text-lg text-gray-400" />
                    </summary>
                    <div className="border-t px-4 pb-4 pt-3 text-sm leading-relaxed text-gray-600" style={{ borderColor: `${ACCENT}15` }}>
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Ingredient Converters</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Each of these ingredients has its own full conversion guide, with charts for every common
                amount — not just 100 grams:
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { name: "All-purpose flour", href: "/flour" },
                  { name: "Sugar (all types)", href: "/sugar" },
                  { name: "Butter", href: "/butter" },
                  { name: "Milk", href: "/milk" },
                  { name: "Water", href: "/water" },
                  { name: "Rolled oats", href: "/oats" },
                  { name: "Rice", href: "/rice" },
                  { name: "Chocolate chips", href: "/chocolate-chips" },
                  { name: "Honey", href: "/honey" },
                  { name: "Almonds", href: "/almonds" },
                  { name: "Cocoa powder", href: "/cocoa-powder" },
                  { name: "Salt", href: "/salt" },
                  { name: "Baking powder", href: " /baking-powder" },
                  { name: "Vegetable oil", href: "/vegetable-oil" },
                ].map((ing) => (
                  <Link
                    key={ing.href}
                    href={ing.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:text-[#02b875] hover:border-current"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <span className="truncate">{ing.name}</span>
                    <i className="ri-arrow-right-s-line flex-shrink-0" style={{ color: ACCENT }} />
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
