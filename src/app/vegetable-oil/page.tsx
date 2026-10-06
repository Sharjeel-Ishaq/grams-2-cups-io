import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Vegetable Oil Grams to Cups Converter",
  description: "Convert vegetable oil from grams to cups instantly. Includes neutral oil values, tablespoon equivalents, and kitchen reference charts.",
  alternates: { canonical: "/vegetable-oil" },
  openGraph: {
    title: "Vegetable Oil Grams to Cups Converter",
    description: "Convert vegetable oil from grams to cups instantly. Includes neutral oil values, tablespoon equivalents, and kitchen reference charts.",
    url: "/vegetable-oil",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vegetable Oil Grams to Cups Converter",
    description: "Convert vegetable oil from grams to cups instantly. Includes neutral oil values, tablespoon equivalents, and kitchen reference charts.",
    images: ["/og-image.jpg"],
  },
};

/* ─── Ingredient data for the converter tool (single ingredient) ────── */
const ingredients: Ingredient[] = [
  { name: "Vegetable Oil", slug: "vegetable-oil", gramsPerCup: 218, notes: "Neutral cooking oil" },
  { name: "Canola Oil", slug: "canola-oil", gramsPerCup: 218, notes: "Neutral oil" },
  { name: "Sunflower Oil", slug: "sunflower-oil", gramsPerCup: 218, notes: "Neutral oil" },
  { name: "Corn Oil", slug: "corn-oil", gramsPerCup: 218, notes: "Neutral oil" },
  { name: "Safflower Oil", slug: "safflower-oil", gramsPerCup: 218, notes: "Neutral oil" },
  { name: "Olive Oil", slug: "olive-oil", gramsPerCup: 222, notes: "Slightly denser" },
  { name: "Coconut Oil (Melted)", slug: "coconut-oil-melted", gramsPerCup: 218, notes: "Melted oil" },
  { name: "Coconut Oil (Solid)", slug: "coconut-oil-solid", gramsPerCup: 210, notes: "Temperature varies" },
];


/* ─── Hero quick-reference badges ──────────────────────────────────── */
const heroBadges = [
  { label: "¼ Cup", value: "55 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "109 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "218 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "436 g", icon: "ri-restaurant-line" },
];

/* ─── Grams to Cups Chart ────────────────────────────────────────────── */
const gramsToCupsTable = [
  ["15 g", "1 tbsp", "0.53 oz"],
  ["27 g", "⅛ cup", "0.95 oz"],
  ["55 g", "¼ cup", "1.94 oz"],
  ["73 g", "⅓ cup", "2.57 oz"],
  ["109 g", "½ cup", "3.84 oz"],
  ["145 g", "⅔ cup", "5.11 oz"],
  ["164 g", "¾ cup", "5.78 oz"],
  ["218 g", "1 cup", "7.69 oz"],
  ["300 g", "~1.38 cups", "10.58 oz"],
  ["436 g", "2 cups", "15.38 oz"],
  ["654 g", "3 cups", "23.07 oz"],
];

/* ─── Does the Type of Oil Change the Weight ────────────────────────── */
const oilTypeTable = [
  { type: "Canola / sunflower / corn / safflower", grams: "~215–220 g", notes: "Neutral oils, essentially interchangeable by weight" },
  { type: "Vegetable oil blend", grams: "~218 g", notes: "The reference figure used throughout this guide" },
  { type: "Olive oil", grams: "~220–224 g", notes: "Slightly denser due to its fatty acid composition" },
  { type: "Coconut oil (liquid/melted)", grams: "~218 g", notes: "Same as neutral oils once fully melted" },
  { type: "Coconut oil (solid)", grams: "Varies by temperature", notes: "Not a fixed density — see note below" },
];

/* ─── Does Cup Size Change the Number ───────────────────────────────── */
const cupStandardTable = [
  { standard: "US Customary Cup", volume: "236.588 mL", weight: "218 g" },
  { standard: "US Legal Cup", volume: "240 mL", weight: "~221 g" },
  { standard: "Metric Cup", volume: "250 mL", weight: "~230 g" },
  { standard: "Imperial Cup", volume: "284.131 mL", weight: "~262 g" },
];

/* ─── Trusted sources ────────────────────────────────────────────────── */
const sources = [
  { name: "Grams in a Cup Converter — Vegetable Oil", url: "https://www.gramsinacup.com/vegetable-oil/", note: "The reference calculator this guide's figures (218 g per cup) are drawn from." },
  { name: "MyFoodData — Nutrition Facts for Vegetable Oil", url: "https://tools.myfooddata.com/nutrition-facts/789032/wt1", note: "USDA-sourced nutrition data confirming 1 cup (218 g) as the standard serving size." },
  { name: "Tell Me In Grams — Vegetable Oil in Grams", url: "https://www.tellmeingrams.com/vegetable-oil/", note: "Full cup-to-grams conversion table for vegetable, sunflower, canola, and rapeseed oils." },
  { name: "University of Rochester Medicine — Vegetable Oil, Canola, 1 Cup", url: "https://www.urmc.rochester.edu/encyclopedia/content?contenttypeid=76&contentid=04582-2", note: "Health encyclopedia nutrition entry listing 218 g of total fat per 1-cup serving." },
];

/* ─── Other ingredients — internal links to their own converter pages ── */
const otherIngredients = [
  { name: "All-purpose flour", href: "/flour" },
  { name: "Granulated sugar", href: "/sugar" },
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
  { name: "Baking powder", href: "/baking-powder" },
];

export default function VegetableOilGramsToCups() {
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
              <i className="ri-drop-line" /> Oil-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Vegetable Oil Grams to Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Oil is one of the easiest ingredients to measure accurately by volume — it&apos;s a true
              liquid with no packing, no settling, and no air pockets to worry about. But it&apos;s also
              one of the few ingredients where a common assumption trips people up: oil does not weigh the
              same as water, even though both are liquids measured the same way.
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
                1 cup of vegetable oil ≈ 218 grams
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 218</div>
                <div>Grams = Cups × 218</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So 100 grams of vegetable oil comes to a little under half a cup, and 500 grams is roughly
                2.3 cups. This applies to neutral cooking oils broadly — canola, sunflower, corn,
                safflower, and generic vegetable oil blends all cluster close to this same figure.
              </p>
              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            {/* Why Oil Weighs Less Than Water */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why Oil Weighs Less Than the Same Volume of Water</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Water weighs about 237 grams per US cup. Vegetable oil comes in lighter, at roughly 218
                grams per cup, because oil molecules are simply less dense than water molecules — oil
                floats on water for the same underlying reason. As a rough reference point, cooking oils
                typically have a density around 0.92 g/mL, compared to water&apos;s 1.0 g/mL, which is why
                a cup of oil weighs about 8% less than a cup of water. Any chart that lists vegetable oil at
                the same weight as water (240 g/cup) is applying water&apos;s density by mistake — oil is a
                genuinely lighter liquid, not an equivalent one.
              </p>
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

            {/* Does the Type of Oil Change the Weight */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Does the Type of Oil Change the Weight?</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                A little, but less than most people expect — nearly all common cooking oils fall within a
                tight band:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[520px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Oil Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {oilTypeTable.map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.type}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.grams}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Coconut oil deserves a separate mention: it&apos;s solid below about 76°F (24°C) and liquid
                above it, and the two states pack into a measuring cup very differently. A recipe that says
                &quot;1 cup coconut oil, melted&quot; and one that says &quot;1 cup coconut oil, solid&quot;
                are not asking for the same weight of coconut oil, even though both technically fill a cup.
                When precision matters, weighing coconut oil sidesteps this issue entirely, since 218 grams
                is 218 grams regardless of whether it&apos;s solid or liquid at the moment you measure it.
              </p>
            </section>

            {/* Substituting Oil for Butter */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Substituting Oil for Butter (and Back)</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                This is one of the more genuinely useful things to know about oil conversions, since it
                comes up constantly in recipe adaptation. Butter isn&apos;t pure fat — it&apos;s roughly
                80% fat and about 20% water and milk solids — while oil is essentially 100% fat. That
                difference means a direct 1:1 swap by volume isn&apos;t quite right if you want a
                comparable amount of fat in the batter:
              </p>
              <ul className="mb-3 space-y-2 text-sm text-gray-600">
                {[
                  "Replacing butter with oil: use about 75% of the butter's weight in oil. So 227 g (1 cup) of butter converts to roughly 170 g of oil, which is a little under ¾ cup.",
                  "Replacing oil with butter: use about 133% of the oil's weight in butter. So 218 g (1 cup) of oil converts to roughly 290 g of butter, a bit more than 1¼ cups.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                This isn&apos;t a flavor-neutral swap — butter brings dairy richness and browning that oil
                doesn&apos;t — but it keeps the fat content of the recipe roughly consistent, which matters
                more for texture than the flavor difference usually does.
              </p>
            </section>

            {/* How to Measure Oil Accurately */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure Oil Accurately</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Because oil is a true liquid, the technique is simpler than for dry or semi-solid
                ingredients — there&apos;s no packing or leveling involved, and any tip suggesting you
                &quot;pack&quot; oil into a cup is describing a solid-fat technique, not a liquid one:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Use a liquid measuring cup, not a dry one — liquid cups are designed to be read from the side with headroom below the rim.",
                  "Set it on a flat surface and check the fill line at eye level, the same way you would for water or milk.",
                  "Pour slowly near the target line — oil's viscosity means it takes a moment to settle and stop moving after you stop pouring, so rushing the last bit can lead to overfilling.",
                  "For coconut oil, decide whether the recipe wants it solid or melted before measuring — see the note above.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Does Cup Size Change the Number */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Does Cup Size Change the Number?</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Slightly — since cup standards vary in volume, the weight of oil scales with them:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[480px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cup Standard</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Volume</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Vegetable Oil Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cupStandardTable.map((row, i) => (
                      <tr key={row.standard} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.standard}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.volume}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Quick Reference */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "55 g vegetable oil = ¼ cup",
                  "109 g vegetable oil = ½ cup",
                  "218 g vegetable oil = 1 cup",
                  "436 g vegetable oil = 2 cups",
                  "14 g vegetable oil ≈ 1 tablespoon",
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
                218 grams per cup is a dependable reference for vegetable and other neutral cooking oils —
                just remember it&apos;s noticeably lighter than water, not equal to it, since that&apos;s
                the mistake that throws off more oil conversions than anything else. Because oil is a true
                liquid, measuring by volume is already fairly accurate day-to-day; a scale becomes more
                useful specifically when substituting oil for butter (or the reverse), or when working with
                coconut oil, where solid-versus-melted state can make a cup measurement genuinely
                ambiguous.
              </p>
            </section>

            {/* Trusted Sources */}
            <section className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>
              <p className="mb-2 font-semibold text-gray-600">Trusted Sources</p>
              <ul className="space-y-2">
                {sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="font-semibold hover:underline"
                      style={{ color: ACCENT }}
                    >
                      {s.name}
                    </a>
                    <span> — {s.note}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for oil. Each of these has its own
                weight-per-cup because densities differ:
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {otherIngredients.map((ing) => (
                  <Link
                    key={ing.href}
                    href={ing.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-current"
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
