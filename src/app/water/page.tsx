import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Water Grams to Cups Converter | Precise Kitchen Measurements",
  description:
    "Convert water from grams to cups instantly. Includes the grams-to-cups chart, when to weigh water instead of pouring, and why water is the reference liquid for other conversions.",
  alternates: { canonical: "/water" },
  openGraph: {
    title: "Water Grams to Cups Converter",
    description:
      "Convert water from grams to cups instantly — the reference conversion every other liquid is measured against.",
    url: "/water",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Grams to Cups Converter",
    description: "Convert water from grams to cups instantly — the reference conversion every other liquid is measured against.",
    images: ["/og-image.jpg"],
  },
};

const ingredients: Ingredient[] = [
  { name: "Water", slug: "water", gramsPerCup: 236.6, notes: "US customary cup" },
];

const heroBadges = [
  { label: "¼ Cup", value: "60 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "120 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "237 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "473 g", icon: "ri-restaurant-line" },
];

const gramsToCupsTable = [
  ["30 g", "⅛ cup", "2 tbsp"],
  ["50 g", "~⅕ cup", "3.4 tbsp"],
  ["60 g", "¼ cup", "4 tbsp"],
  ["100 g", "~0.42 cup", "6.8 tbsp"],
  ["150 g", "~0.63 cup", "10.1 tbsp"],
  ["200 g", "~0.85 cup", "13.5 tbsp"],
  ["237 g", "1 cup", "16 tbsp"],
  ["250 g", "~1.06 cups", "16.9 tbsp"],
  ["300 g", "~1.27 cups", "20.3 tbsp"],
  ["355 g", "~1.5 cups", "24 tbsp"],
  ["500 g", "~2.11 cups", "33.8 tbsp"],
  ["750 g", "~3.17 cups", "50.7 tbsp"],
  ["1,000 g", "~4.23 cups", "67.6 tbsp"],
];

const referenceLiquidPoints = [
  "Honey is much heavier per cup because it's mostly concentrated sugar with very little water.",
  "Vegetable oil is lighter per cup because oil molecules pack less densely than water.",
  "Milk is slightly heavier than water because of dissolved fat, protein, and lactose.",
];

const wherePrecisionMatters = [
  {
    title: "Bread and pizza dough",
    text: "hydration percentage (the ratio of water to flour) directly controls how sticky, extensible, and open-crumbed the final dough turns out. A shift of even 10–15 grams of water can noticeably change how a dough handles.",
  },
  {
    title: "Rice and grains",
    text: "the water-to-grain ratio determines whether rice finishes tender or ends up gummy or undercooked, since the grain absorbs a fixed amount before it's done.",
  },
  {
    title: "Coffee and cold brew",
    text: "brewing strength is essentially a dilution ratio, so baristas and home brewers who care about consistency weigh water rather than eyeballing a pour.",
  },
  {
    title: "Sauce and roux adjustments",
    text: "thinning a béchamel or gravy with the wrong amount of water can push it from \"properly coating a spoon\" to noticeably watery in a single splash.",
  },
];

const measuringTips = [
  "Use an actual liquid measuring cup, not a dry measuring cup. Liquid cups have headroom below the rim so you can pour to the line without spilling, and they're designed to be read from the side.",
  "Set it on a flat, level surface before checking the fill line. Holding the cup in your hand while pouring makes the level much harder to judge accurately.",
  "Read the meniscus at eye level. Water curves slightly where it meets the side of the cup — bend down so your eye is level with the surface rather than looking down from above, which tends to make the water look lower than it actually is.",
  "Skip the foam or bubbles if you've just run the tap hard — trapped air at the surface can throw off a volume reading by a few milliliters.",
];

const whenToWeigh = [
  "You're scaling a bread or pizza recipe up or down and hydration percentage needs to stay exact.",
  "You're diluting something concentrated, like cold brew, simple syrup, or a sauce reduction, where the ratio defines the final result.",
  "The recipe was originally written in grams (common in professional and European baking sources) — weighing the gram figure directly avoids compounding rounding error from converting to cups and back.",
];

const otherIngredients = [
  { name: "Whole Milk", href: "/milk" },
  { name: "Lemon juice", href: "/lemon-juice" },
  { name: "All-purpose flour", href: "/flour" },
  { name: "Granulated sugar", href: "/sugar" },
  { name: "Butter", href: "/butter" },
  { name: "Rolled oats", href: "/oats" },
  { name: "Rice", href: "/rice" },
  { name: "Chocolate chips", href: "/chocolate-chips" },
  { name: "Honey", href: "/honey" },
  { name: "Almonds", href: "/almonds" },
  { name: "Cocoa powder", href: "/cocoa-powder" },
  { name: "Salt", href: "/salt" },
  { name: "Baking powder", href: "/baking-powder" },
  { name: "Vegetable oil", href: "/vegetable-oil" },
];

export default function WaterGramsToCups() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />

      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div
              className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
            >
              <i className="ri-drop-line" /> Water-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Water Grams To Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Water is the one ingredient every other kitchen conversion quietly gets measured against.
              When a recipe says milk is &quot;245 grams per cup&quot; or oil is &quot;218 grams per
              cup,&quot; those numbers are really being compared to water&apos;s baseline of roughly 236.6
              grams per cup. That makes water conversions simple in theory — but the details of how you
              measure it still matter more than most people assume.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another ingredient?{" "}
              <Link href="/" className="font-semibold transition-colors duration-200 underline underline-offset-2" style={{ color: ACCENT }}>
                Convert Grams To Cups
              </Link>
              .
            </p>
          </div>

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
                <div className="text-sm font-semibold tracking-[-0.02em] text-gray-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Short Answer</h2>
              <div className="mb-3 rounded-xl p-3 text-sm font-semibold text-gray-800" style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}30` }}>
                236.6 grams of water ≈ 1 cup
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 236.6</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So 100 grams of water comes out to about 0.42 cups, and 500 grams lands around 2.11 cups.
                Because water is close to exactly 1 gram per milliliter at room temperature, this is one of
                the few kitchen conversions where the math holds up almost perfectly — no packing, no
                fluffing, no density surprises.
              </p>
              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Why Water Is the &quot;Reference&quot; Liquid
              </h2>

              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Every other liquid in a kitchen conversion chart is really being measured relative to
                water. Water sits at almost exactly 1 gram per milliliter, so a US cup (236.588 mL) works
                out to about 236.6 grams. Other liquids drift above or below that number depending on
                what&apos;s dissolved or suspended in them:
              </p>

              <ul className="mb-3 space-y-1.5 text-sm text-gray-600">
                {referenceLiquidPoints.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i
                      className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm"
                      style={{ color: ACCENT }}
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Understanding this relationship is useful beyond water itself — it&apos;s the reason a
                recipe converted from grams to cups can go wrong if you assume every liquid weighs the
                same as water.
              </p>

              <p className="text-xs leading-relaxed text-gray-500 font-semibold">
                Reference:{" "}
                <a
                  href="https://www.exploratorium.edu/food/measurements"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-medium underline underline-offset-2"
                  style={{ color: ACCENT }}
                >
                  Exploratorium — Measurement Equivalents
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams To Cups Chart</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[420px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups (approx.)</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Tablespoons</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gramsToCupsTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Where Small Water Measurements Actually Matter</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Water might be the simplest liquid to convert, but it&apos;s rarely a minor ingredient — in
                several common kitchen tasks, the exact water amount is what determines whether the final
                result works at all:
              </p>
              <div className="space-y-3">
                {wherePrecisionMatters.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border bg-white p-4"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <i className="ri-checkbox-circle-fill flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                      {item.title}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                In each of these, water isn&apos;t a background ingredient — it&apos;s the variable doing
                most of the work, which is exactly why measuring it accurately pays off.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure Water Correctly (With a Cup)</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                If you don&apos;t have a scale handy, a few small habits make cup measurements far more
                reliable:
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {measuringTips.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">When to Weigh Instead of Pour</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Water is forgiving enough that a measuring cup works fine for everyday cooking — soup,
                boiling pasta, topping off a pot. Reach for a scale instead when:
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {whenToWeigh.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "60 g water = ¼ cup",
                  "120 g water = ½ cup",
                  "237 g water = 1 cup",
                  "473 g water = 2 cups",
                  "15 g water ≈ 1 tablespoon",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Water is about as close to a &quot;perfect&quot; kitchen conversion as it gets — 1 gram is
                essentially 1 milliliter, and 236.6 grams makes a US cup. The math rarely surprises you.
                What actually causes errors isn&apos;t the conversion itself, but the measuring technique —
                a misread meniscus, a cup held at an angle, or foam sitting on top. For anything where the
                water amount genuinely shapes the outcome — dough, brewing, dilution — weighing it removes
                that last bit of guesswork entirely.
              </p>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for water. Each of these has its own
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
          </div>
        </main>
      </div>
    </div>
  );
}
