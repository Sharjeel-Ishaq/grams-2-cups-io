import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Rolled Oats Grams to Cups Converter",
  description:
    "Convert rolled oats from grams to cups instantly. Includes quick reference charts, measuring tips, and ingredient details for oats.",
  alternates: { canonical: "/oats" },
  openGraph: {
    title: "Rolled Oats Grams to Cups Converter",
    description:
      "Convert rolled oats from grams to cups instantly with quick reference charts and measuring tips.",
    url: "/oats",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolled Oats Grams to Cups Converter",
    description:
      "Convert rolled oats from grams to cups instantly with quick reference charts and measuring tips.",
    images: ["/og-image.jpg"],
  },
};

/* ─── Ingredient data for the converter tool ────── */
const ingredients: Ingredient[] = [
  {
    name: "Rolled Oats",
    slug: "oats",
    gramsPerCup: 90,
    notes: "Old-fashioned oats; large flat flakes, gently spooned",
  },
  {
    name: "Quick Oats",
    slug: "quick-oats",
    gramsPerCup: 97.5,
    notes: "Approximately 95–100 g per US cup",
  },
  {
    name: "Steel-Cut Oats",
    slug: "steel-cut-oats",
    gramsPerCup: 160,
    notes: "Whole oat groats cut into small dense pellets",
  },
  {
    name: "Instant Oats",
    slug: "instant-oats",
    gramsPerCup: 100,
    notes: "Pre-cooked and finely cut; similar to quick oats",
  },
  {
    name: "Oat Flour",
    slug: "oat-flour",
    gramsPerCup: 120,
    notes: "Ground oat powder",
  },
];

/* ─── Hero quick-reference badges ──────────────────────────────────── */
const heroBadges = [
  { label: "¼ Cup", value: "23 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "45 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "90 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "180 g", icon: "ri-restaurant-line" },
];

/* ─── Not All Oats Weigh the Same table ────────────────────────────── */
const oatTypeTable = [
  { type: "Rolled (old-fashioned) oats", grams: "~90 g", why: "Large, flat flakes with plenty of trapped air" },
  { type: "Quick oats", grams: "~95–100 g", why: "Chopped finer before rolling, so pieces settle more densely" },
  { type: "Steel-cut oats", grams: "~160 g", why: "Whole oat groats cut into small dense pellets, not flaked at all" },
  { type: "Instant oats", grams: "~100 g", why: "Pre-cooked and very finely cut, similar density to quick oats" },
  { type: "Oat flour", grams: "~120 g", why: "Ground to a powder, closer in density to a light flour" },
];

/* ─── Grams to Cups Chart (Rolled Oats) ─────────────────────────────── */
const gramsToCupsTable = [
  ["15 g", "⅛ cup", "3 tbsp"],
  ["23 g", "¼ cup", "4 tbsp"],
  ["30 g", "⅓ cup", "5 tbsp"],
  ["45 g", "½ cup", "8 tbsp"],
  ["60 g", "⅔ cup", "11 tbsp"],
  ["68 g", "¾ cup", "12 tbsp"],
  ["90 g", "1 cup", "16 tbsp"],
  ["100 g", "~1⅛ cups", "18 tbsp"],
  ["150 g", "~1⅔ cups", "27 tbsp"],
  ["200 g", "~2¼ cups", "36 tbsp"],
  ["250 g", "~2¾ cups", "44 tbsp"],
  ["300 g", "~3⅓ cups", "53 tbsp"],
  ["500 g", "~5½ cups", "89 tbsp"],
];

/* ─── Ingredient comparison table ───────────────────────────────────── */
const comparisonTable = [
  { name: "Rolled oats", grams: "90 g", vs: "—" },
  { name: "Cocoa powder", grams: "~86 g", vs: "-4 g" },
  { name: "Breadcrumbs", grams: "~108 g", vs: "+18 g" },
  { name: "Cornstarch", grams: "~128 g", vs: "+38 g" },
  { name: "Uncooked rice", grams: "~185 g", vs: "+95 g" },
  { name: "Chocolate chips", grams: "~170 g", vs: "+80 g" },
];

/* ─── Other ingredients — internal links to their own converter pages ── */
const otherIngredients = [
  { name: "All-purpose flour", href: "/flour" },
  { name: "Granulated sugar", href: "/sugar" },
  { name: "Butter", href: "/butter" },
  { name: "Milk", href: "/milk" },
  { name: "Water", href: "/water" },
  { name: "Rice", href: "/rice" },
  { name: "Chocolate chips", href: "/chocolate-chips" },
  { name: "Honey", href: "/honey" },
  { name: "Almonds", href: "/almonds" },
  { name: "Cocoa powder", href: "/cocoa-powder" },
  { name: "Salt", href: "/salt" },
  { name: "Baking powder", href: "/baking-powder" },
  { name: "Vegetable oil", href: "/vegetable-oil" },
];

export default function OatsGramsToCups() {
  return (
    <div className="min-h-screen bg-[#f7f7f9]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div
              className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
            >
              <i className="ri-restaurant-line" /> Oats-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Oats Grams to Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Oats are deceptively bulky. A cup of them looks like a generous portion, but because rolled
              oats are big, airy flakes with a lot of empty space between pieces, that same cup barely tips
              the scale compared to denser pantry staples like flour or sugar. That gap between &quot;looks
              like a lot&quot; and &quot;weighs surprisingly little&quot; is exactly why oats deserve their
              own conversion reference instead of borrowing a generic dry-goods number.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another ingredient?{" "}
              <Link href="/" className="font-semibold transition-colors duration-200 underline underline-offset-2" style={{ color: ACCENT }}>
                Convert Grams To Cups
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
                <div className="text-sm font-semibold tracking-[-0.02em] text-gray-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">

            {/* The Short Answer + Tool */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Short Answer</h2>
              <div className="mb-3 rounded-xl p-3 text-sm font-semibold text-gray-800" style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}30` }}>
                1 cup of rolled (old-fashioned) oats ≈ 90 grams
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                <strong>Reference:</strong>{" "}
                <a
                  href="https://www.kingarthurbaking.com/learn/ingredient-weight-chart"
                  rel="nofollow"
                  target="_blank"
                  className="font-medium underline underline-offset-2 transition-colors hover:text-[#02B875]"
                >
                  King Arthur Baking — Ingredient Weight Chart
                </a>
              </p>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 90</div>
                <div>Grams = Cups × 90</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So 250 grams of rolled oats works out to about 2¾ cups, and half a cup weighs around 45
                grams. Compare that to flour, where a cup weighs roughly 125 grams — oats are noticeably
                lighter for the same volume, purely because of how much air sits between the flakes.
              </p>
              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            {/* Not All Oats Weigh the Same */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Not All Oats Weigh the Same
              </h2>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                &quot;Oats&quot; isn&apos;t one uniform product, and the cut of the oat changes its
                weight-per-cup significantly. Swapping one type for another in a recipe without adjusting
                the amount is a common source of texture problems:
              </p>

              <div
                className="overflow-x-auto rounded-[20px] border"
                style={{ borderColor: `${ACCENT}20` }}
              >
                <table className="w-full min-w-[520px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Oat Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Why It Differs</th>
                    </tr>
                  </thead>

                  <tbody>
                    {oatTypeTable.map((row, i) => (
                      <tr
                        key={row.type}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                      >
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.type}</td>
                        <td
                          className="px-4 py-2.5 font-semibold"
                          style={{ color: ACCENT }}
                        >
                          {row.grams}
                        </td>
                        <td className="px-4 py-2.5 text-gray-600">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Steel-cut oats in particular can&apos;t be substituted 1:1 by volume for rolled oats —
                using the same cup measurement would leave you with nearly twice the weight of oats,
                throwing off both cooking time and liquid ratio. Product weights can also vary by brand:
                Quaker lists <strong>40 g for ½ cup</strong> of its Old Fashioned Oats, which works out
                to about 80 g per cup.
              </p>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                <strong>Reference:</strong>{" "}
                <a
                  href="https://smartlabel.pepsico.info/030000010402-0006-en-US/index.html"
                  rel="nofollow"
                  target="_blank"
                  className="font-medium underline underline-offset-2 transition-colors hover:text-[#02B875]"
                >
                  Quaker — Old Fashioned Oats Nutrition Facts
                </a>
              </p>
            </section>

            {/* Does Packing Oats Down Actually Change the Weight */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Does Packing Oats Down Actually Change the Weight?</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Unlike a liquid, rolled oats are a genuinely compressible dry good — flat flakes can nest
                into each other or lie loosely depending on how they&apos;re poured, similar to flour or
                brown sugar. A gently spooned, unpacked cup of rolled oats tends to land close to the
                90-gram reference. Pressed down firmly, that same visual &quot;cup&quot; can hold noticeably
                more oats — sometimes climbing toward 115–120 grams — because compacting the flakes
                squeezes out the air pockets between them. Poured loosely straight from the container
                without any settling, a cup can come in lighter, sometimes closer to 75–80 grams.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                This is the main reason two people measuring &quot;1 cup of oats&quot; by eye can end up
                with meaningfully different amounts, and why oatmeal or granola recipes can turn out
                thicker or thinner than expected even when everyone followed the same instructions.
              </p>
            </section>

            {/* How to Measure Oats Consistently */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure Oats Consistently</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                If you don&apos;t have a scale, a few habits keep cup measurements closer to the standard
                reference:
              </p>
              <ul className="mb-3 space-y-2 text-sm text-gray-600">
                {[
                  "Spoon oats into the measuring cup rather than scooping the cup through the container, which tends to compress them.",
                  "Don't tap, shake, or press the cup down to fit more in — this is the packing effect described above, and it can add 20–30% more oats than a recipe intended.",
                  "Level off the top with a straight edge instead of mounding oats above the rim.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                For recipes where the oat-to-liquid ratio really matters — overnight oats, granola bars, or
                baked oatmeal that needs to set properly — weighing the oats removes this variability
                entirely.
              </p>
            </section>

            {/* Quick Reference */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "23 g rolled oats = ¼ cup",
                  "45 g rolled oats = ½ cup",
                  "90 g rolled oats = 1 cup",
                  "180 g rolled oats = 2 cups",
                  "5.6 g rolled oats ≈ 1 tablespoon",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* The Bottom Line */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                90 grams per cup is a solid working reference for old-fashioned rolled oats, but it&apos;s
                an estimate rather than a fixed law — the flake size, how gently or firmly the oats are
                packed, and whether you&apos;re using quick, steel-cut, or instant oats can all shift the
                real number. For casual cooking, spoon-and-level gets you close enough. For recipes where
                the oat-to-liquid balance is what makes or breaks the texture, a kitchen scale is the more
                dependable tool.
              </p>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for oats. Each of these has its own
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
