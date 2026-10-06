import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Lemon Juice Grams to Cups Converter | Fresh & Bottled",
  description:
    "Convert lemon juice from grams to cups instantly. Includes conversions for tablespoons, ounces, how many lemons to buy, and practical kitchen charts.",
  alternates: { canonical: "/lemon-juice" },
  openGraph: {
    title: "Lemon Juice Grams To Cups Converter",
    description:
      "Convert lemon juice from grams to cups with charts, tablespoons, ounces, and lemon yield estimates.",
    url: "/lemon-juice",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lemon Juice Grams to Cups Converter",
    description:
      "Convert lemon juice from grams to cups with charts, tablespoons, ounces, and lemon yield estimates.",
    images: ["/og-image.jpg"],
  },
};

/* ─── Ingredient data for the converter tool (single ingredient) ────── */
const ingredients: Ingredient[] = [
  {
    name: "Lemon Juice",
    slug: "lemon-juice",
    gramsPerCup: 244,
    notes: "US customary cup — USDA data",
  },
];

/* ─── Hero quick-reference badges ──────────────────────────────────── */
const heroBadges = [
  { label: "1 Tbsp", value: "15 g", icon: "ri-drop-line" },
  { label: "¼ Cup", value: "61 g", icon: "ri-cup-line" },
  { label: "½ Cup", value: "122 g", icon: "ri-scales-3-line" },
  { label: "1 Cup", value: "244 g", icon: "ri-restaurant-line" },
];

/* ─── Grams to Cups Chart (Lemon Juice) ────────────────────────────── */
const gramsToCupsTable = [
  ["15 g", "1 tbsp", "0.53 oz"],
  ["31 g", "⅛ cup", "1.09 oz"],
  ["61 g", "¼ cup", "2.15 oz"],
  ["81 g", "⅓ cup", "2.86 oz"],
  ["122 g", "½ cup", "4.30 oz"],
  ["163 g", "⅔ cup", "5.75 oz"],
  ["183 g", "¾ cup", "6.46 oz"],
  ["244 g", "1 cup", "8.61 oz"],
  ["366 g", "1½ cups", "12.91 oz"],
  ["488 g", "2 cups", "17.21 oz"],
  ["732 g", "3 cups", "25.82 oz"],
];

/* ─── How Many Lemons Do You Actually Need? ────────────────────────── */
const lemonYieldTable = [
  { amount: "1 tablespoon", lemons: "½ lemon" },
  { amount: "¼ cup (4 tbsp)", lemons: "~1½ lemons" },
  { amount: "½ cup", lemons: "~2½–3 lemons" },
  { amount: "1 cup", lemons: "~5–6 lemons" },
];

/* ─── Getting More Juice Out of a Lemon ────────────────────────────── */
const lemonTips = [
  {
    lead: "Roll the lemon firmly on the counter before cutting it",
    rest: "— this breaks down some of the internal membranes and releases more juice once you squeeze.",
  },
  {
    lead: "Use room-temperature lemons rather than cold ones",
    rest: ". A lemon straight from the fridge yields noticeably less juice than one that's been sitting at room temperature; some sources put the difference as high as 20–30%.",
  },
  {
    lead: "Microwave briefly if a lemon feels firm",
    rest: ". A few seconds of gentle heat can loosen the pulp similarly to rolling, especially for lemons that have been refrigerated.",
  },
];

/* ─── Other ingredients — internal links to their own converter pages ── */
const otherIngredients = [
  { name: "Water", href: "/water" },
  { name: "Milk", href: "/milk" },
  { name: "Honey", href: "/honey" },
  { name: "Rice", href: "/rice" },
  { name: "Chocolate chips", href: "/chocolate-chips" },
  { name: "All-purpose flour", href: "/flour" },
  { name: "Granulated sugar", href: "/sugar" },
  { name: "Butter", href: "/butter" },
  { name: "Rolled oats", href: "/oats" },
  { name: "Cocoa powder", href: "/cocoa-powder" },
  { name: "Salt", href: "/salt" },
  { name: "Baking powder", href: "/baking-powder" },
  { name: "Brown sugar", href: "/brown-sugar" },
];

export default function LemonJuiceGramsToCups() {
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
              <i className="ri-drop-line" /> Liquid-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Lemon Juice Grams To Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Lemon juice is one of the more forgiving ingredients to convert, since it behaves almost
              exactly like water — no packing, no settling, nothing tricky about how it sits in a cup.
              The real questions people actually have about lemon juice aren&apos;t about the conversion
              math; they&apos;re about how many lemons that math translates back into.
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
              <div
                className="mb-3 rounded-xl p-3 text-sm font-semibold text-gray-800"
                style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}30` }}
              >
                1 cup of lemon juice ≈ 244 grams
              </div>
              <div
                className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800"
                style={{ border: `1px solid ${ACCENT}25` }}
              >
                <div>Cups = Grams ÷ 244</div>
                <div>Grams = Cups × 244</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So 100 grams of lemon juice is a little under ½ cup, and 122 grams is almost exactly ½ cup.
                This figure is backed by USDA food composition data, which puts raw lemon juice at a density
                just slightly above water — around 1.03 grams per milliliter, compared to water&apos;s 1.0.
              </p>
              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            {/* Grams to Cups Chart */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams to Cups Chart</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[420px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Ounces</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gramsToCupsTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row[1]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Fresh vs. Bottled: Does the Weight Change? */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Fresh vs. Bottled: Does the Weight Change?</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Not meaningfully. Fresh-squeezed lemon juice and bottled lemon juice (the kind made from
                concentrate, like ReaLemon) weigh close to the same per cup — both land right around the
                240–244 gram mark. Where they genuinely differ is flavor, not weight: fresh juice has a
                brighter, more layered taste, while bottled juice tends to taste more uniform and slightly
                cooked, since it&apos;s been pasteurized and reconstituted from concentrate.
                <br /><br />
                That difference matters more in some recipes than others. In something like lemon curd or
                lemon bars, where lemon is the entire point of the dish, fresh juice makes a noticeably
                better result. In recipes where lemon juice is playing a supporting role — activating
                baking soda, deglazing a pan, balancing a sauce — bottled juice does the job just fine.
              </p>
            </section>

            {/* How Many Lemons Do You Actually Need? */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">How Many Lemons Do You Actually Need?</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                This is usually the more useful question than the gram conversion itself. A medium lemon
                typically yields about 3 tablespoons of juice (roughly 45 mL), which puts the math at:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[280px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Amount Needed</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Approx. Lemons (Medium)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lemonYieldTable.map((row, i) => (
                      <tr key={row.amount} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.amount}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.lemons}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Lemon size and juiciness vary a fair amount, so treat this as a solid starting estimate rather
                than an exact promise — a smaller, drier lemon might only give you 2 tablespoons, while a large,
                heavy one can give you 4 or more. If a recipe&apos;s success depends on an exact liquid amount,
                it&apos;s worth measuring the juice directly rather than counting lemons and hoping.
              </p>
            </section>

            {/* Zest Before You Juice */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Zest Before You Juice</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                If a recipe calls for both lemon zest and lemon juice, always zest the lemon first. Once a
                lemon has been juiced, the peel collapses and becomes much harder to grate cleanly against a
                microplane or zester. A single medium lemon typically yields about 1 tablespoon of zest —
                enough for most recipes that call for &quot;the zest of one lemon.&quot;
              </p>
            </section>

            {/* The Baking Soda Reaction: A Common Number That's Slightly Off */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Baking Soda Reaction: A Common Number That&apos;s Slightly Off</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Lemon juice&apos;s acidity (its pH sits around 2, quite acidic) is strong enough to react with
                baking soda and produce lift in a batter, the same way buttermilk or vinegar does. You&apos;ll
                sometimes see this ratio quoted as &quot;1 teaspoon of baking soda per tablespoon of lemon juice,&quot;
                but that overstates how much baking soda is actually needed. Based on the chemistry of the reaction
                and how professional bakers test this in practice, the more accurate starting point is:
                <br /><br />
                <strong className="text-gray-900">About ½ teaspoon of baking soda per 1 tablespoon of lemon juice</strong>
                <br /><br />
                Using much more than that tends to leave a soapy, slightly metallic aftertaste from unreacted
                baking soda, since the excess doesn&apos;t have enough acid left to react with. If you&apos;re
                adjusting a recipe&apos;s acidity and want to neutralize lemon juice&apos;s tartness rather than
                get technical about the ratio, it&apos;s easier to add baking soda gradually, stir, and taste
                as you go rather than trying to hit an exact number.
              </p>
            </section>

            {/* Getting More Juice Out of a Lemon */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Getting More Juice Out of a Lemon</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                A couple of small habits make a real difference in yield:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {lemonTips.map((item) => (
                  <li key={item.lead} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>
                      <strong className="text-gray-800">{item.lead}</strong> {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quick Reference */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "61 g lemon juice = ¼ cup",
                  "122 g lemon juice = ½ cup",
                  "244 g lemon juice = 1 cup",
                  "15 g lemon juice ≈ 1 tablespoon",
                  "1 medium lemon ≈ 3 tablespoons juice + 1 tablespoon zest",
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
                Lemon juice converts almost exactly like water — 244 grams to the cup — which makes it one of
                the simplest liquids on this site to measure. The part worth paying closer attention to isn&apos;t
                the grams-to-cups math; it&apos;s knowing how many actual lemons that translates to, and getting
                the zest off before you juice, since there&apos;s no undoing that step once the lemon&apos;s been
                squeezed.
              </p>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for lemon juice. Each of these has its own
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