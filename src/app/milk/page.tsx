import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Milk Grams to Cups Converter | Whole, Skim & Dairy Measurements",
  description:
    "Convert milk from grams to cups instantly. Includes whole milk, skim milk, and real-world kitchen conversions for baking and cooking.",
  alternates: { canonical: "/milk" },
  openGraph: {
    title: "Milk Grams to Cups Converter",
    description: "Convert milk from grams to cups instantly with quick reference charts for dairy-based recipes.",
    url: "/milk",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milk Grams to Cups Converter",
    description: "Convert milk from grams to cups instantly with quick reference charts for dairy-based recipes.",
    images: ["/og-image.jpg"],
  },
};

const ingredients: Ingredient[] = [
  {
    name: "Whole Milk",
    slug: "milk",
    gramsPerCup: 244,
    notes: "3.25% fat; approximately 244 g per US cup",
  },
  {
    name: "2% Reduced-Fat Milk",
    slug: "2-percent-milk",
    gramsPerCup: 241,
    notes: "Approximately 241 g per US cup; slightly lighter than whole milk",
  },
  {
    name: "Skim Milk",
    slug: "skim-milk",
    gramsPerCup: 245,
    notes: "Fat-free; approximately 245 g per US cup",
  },
  {
    name: "Heavy Cream",
    slug: "heavy-cream",
    gramsPerCup: 238,
    notes: "Approximately 238 g per US cup",
  },
  {
    name: "Buttermilk",
    slug: "buttermilk",
    gramsPerCup: 245,
    notes: "Cultured buttermilk; approximately 245 g per US cup",
  },
  {
    name: "Oat Milk",
    slug: "oat-milk",
    gramsPerCup: 245,
    notes: "Approximately 245 g per US cup; varies by brand and thickeners",
  },
  {
    name: "Almond Milk",
    slug: "almond-milk",
    gramsPerCup: 240,
    notes: "Approximately 240 g per US cup",
  },
  {
    name: "Soy Milk",
    slug: "soy-milk",
    gramsPerCup: 245,
    notes: "Approximately 245 g per US cup",
  },
];

const heroBadges = [
  { label: "¼ Cup", value: "60 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "120 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "240 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "480 g", icon: "ri-restaurant-line" },
];

const milkTypeTable = [
  { type: "Whole milk (3.25% fat)", grams: "~244 g", notes: "Highest fat content among common dairy milks" },
  { type: "2% reduced-fat milk", grams: "~241 g", notes: "Slightly lighter than whole" },
  { type: "Skim milk (fat-free)", grams: "~245 g", notes: "Higher water and protein ratio, close to whole" },
  { type: "Heavy cream", grams: "~238 g", notes: "Higher fat but different structure than milk" },
  { type: "Buttermilk", grams: "~245 g", notes: "Cultured, slightly thicker than plain milk" },
  { type: "Oat milk", grams: "~245 g", notes: "Varies noticeably by brand and added thickeners" },
  { type: "Almond milk", grams: "~240 g", notes: "Often close to water, since fat content is low" },
  { type: "Soy milk", grams: "~245 g", notes: "Higher protein content than most plant milks" },
];

const gramsToCupsTable = [
  ["30 g", "⅛ cup"],
  ["60 g", "¼ cup"],
  ["100 g", "~⅖ cup"],
  ["150 g", "~⅝ cup"],
  ["200 g", "~⅚ cup"],
  ["240 g", "1 cup"],
  ["300 g", "~1¼ cups"],
  ["400 g", "~1⅔ cups"],
  ["500 g", "~2⅛ cups"],
];

const cupStandardTable = [
  { standard: "US Customary Cup", volume: "236.6 mL", weight: "~240 g" },
  { standard: "US Legal Cup", volume: "240 mL", weight: "~244 g" },
  { standard: "Metric Cup (used in Australia, UK recipes)", volume: "250 mL", weight: "~254 g" },
  { standard: "Imperial Cup (older UK standard)", volume: "284.1 mL", weight: "~288 g" },
];

const otherIngredients = [
  { name: "All-purpose flour", href: "/flour" },
  { name: "Granulated sugar", href: "/sugar" },
  { name: "Butter", href: "/butter" },
  { name: "Water", href: "/water" },
  { name: "Lemon juice", href: "/lemon-juice" },
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

export default function MilkGramsToCups() {
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
              <i className="ri-drop-line" /> Milk-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Milk Grams To Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Milk sits in an odd middle ground in the kitchen — it&apos;s a liquid, so most people assume
              it converts exactly like water, but it isn&apos;t quite water. It carries fat, protein, and
              dissolved sugars, and all of that pushes its weight slightly above pure water&apos;s. This
              guide covers how milk actually converts between grams and cups, how much that changes across
              milk types, and when the difference is worth caring about.
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
                237–240 grams of whole milk ≈ 1 cup
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 240</div>
                <div>Grams = Cups × 240</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                For a quick gut check: 100 grams of milk comes out to 0.42 cups, and 480 grams is about 2
                cups. This works pretty well for almost every recipe — but the numbers depend on what kind
                of milk is in the carton.
              </p>
              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why Milk Isn&apos;t Exactly the Same Weight as Water</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Pure water weighs 236.6 grams per US cup — no more, no less, at room temperature. Milk is
                heavier because it&apos;s not pure water; it&apos;s a suspension of fat globules, milk
                proteins, and lactose (milk sugar) all dissolved or floating in that water. The more fat
                and solids a milk contains, the more it weighs per cup, because those components are
                slightly denser than water itself.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                That&apos;s why whole milk, skim milk, and oat milk don&apos;t all land on exactly the same
                gram figure, even though they look and pour almost identically.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Milk Weight By Type</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[520px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Milk Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {milkTypeTable.map((row, i) => (
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
                These figures can vary slightly between milk products because composition and added
                ingredients can differ by brand.{" "}
                <a
                  href="https://ers.usda.gov/sites/default/files/_laserfiche/publications/40920/44516_aer772ap2.pdf"
                  rel="nofollow"
                  target="_blank"
                  className="font-medium underline underline-offset-2 transition-colors hover:text-[#02B875]"
                >
                  USDA reference data
                </a>{" "}
                lists a serving weight of about 244 grams for whole milk and 245 grams for skim milk,
                supporting a practical range of roughly 240–245 grams per US cup for common dairy milk.
                If a recipe requires precise measurements, weighing the specific milk you are using is
                more reliable than relying on a generic conversion chart.
              </p>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                <strong>Reference:</strong>{" "}
                <a
                  href="https://ers.usda.gov/sites/default/files/_laserfiche/publications/40920/44516_aer772ap2.pdf"
                  rel="nofollow"
                  target="_blank"
                  className="font-medium underline underline-offset-2 transition-colors hover:text-[#02B875]"
                >
                  USDA — A Dietary Assessment of the U.S. Food Supply
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams To Cups Chart</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[280px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups (approx.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gramsToCupsTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Does Cup Size Affect the Result?</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Yes — and this trips people up more often with liquids than with dry ingredients, because
                &quot;a cup of milk&quot; sounds universal. It isn&apos;t:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[480px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cup Standard</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Volume</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Milk Weight</th>
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
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                If a recipe comes from outside the US — particularly Australian or UK sources — it&apos;s
                likely using the 250 mL metric cup, not the US customary one. That 14 mL gap seems small,
                but across several cups of liquid in a recipe, it adds up enough to affect batter
                consistency.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why Measuring Milk by Weight Is More Reliable</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Liquid measuring cups are read at eye level, which introduces small human error every time
                — a fraction of a degree in how you&apos;re looking at the line can shift the reading.
                Milk also clings slightly to the sides of a cup, meaning a small residue often gets left
                behind rather than poured out. Neither error is significant on its own, but in recipes
                with tight ratios — pastry cream, ganache, or bread dough where hydration percentage
                matters — those small inconsistencies can be the difference between a dough that comes
                together properly and one that&apos;s slightly too wet or dry.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                A digital kitchen scale set to grams removes both issues: you&apos;re weighing exactly what
                goes into the bowl, with no meniscus to read and no residue left in the cup.
              </p>
            </section>

            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "60 g milk = ¼ cup",
                  "120 g milk = ½ cup",
                  "240 g milk = 1 cup",
                  "480 g milk = 2 cups",
                  "15 g milk ≈ 1 tablespoon",
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
                240 grams per cup is a safe, reliable baseline for whole milk and works well enough for
                most home baking. If you&apos;re working with skim milk, plant-based milk, or a recipe
                that came from outside the US, it&apos;s worth checking both the fat content and the cup
                standard being used — small shifts in either can move the number by 5–15 grams per cup,
                which rarely matters for a glass of milk but can matter for a recipe with tight ratios.
              </p>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for milk. Each of these has its own
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
