import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Brown Sugar Grams to Cups Converter — Packed vs. Unpacked",
  description:
    "Convert packed brown sugar from grams to cups instantly. Covers the packed-vs-loose difference, light vs dark vs muscovado, and recipe amounts.",
  alternates: {
    canonical: "/brown-sugar",
  },
  openGraph: {
    title: "Brown Sugar Grams to Cups Converter",
    description:
      "1 packed cup of brown sugar ≈ 220 grams — a full chart for packed vs. unpacked, plus light, dark, and muscovado varieties.",
    url: "/brown-sugar",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brown Sugar Grams to Cups Converter",
    description: "Convert packed brown sugar from grams to cups instantly — 220g = 1 packed cup.",
    images: ["/og-image.jpg"],
  },
};

/* ─── Ingredient data for the converter tool (single ingredient) ────── */
const ingredients: Ingredient[] = [
  { name: "Brown Sugar (Packed)", slug: "brown-sugar", gramsPerCup: 220, notes: "Packed firmly into the cup" },
  { name: "Granulated Sugar", slug: "granulated-sugar", gramsPerCup: 200, notes: "Spoon and level" },
  { name: "Powdered Sugar", slug: "powdered-sugar", gramsPerCup: 120, notes: "Sift before measuring" },
  { name: "Raw / Turbinado Sugar", slug: "raw-sugar", gramsPerCup: 250, notes: "Coarser, denser crystals" },
];

/* ─── Hero quick-reference badges ──────────────────────────────────── */
const heroBadges = [
  { label: "¼ Cup", value: "55 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "110 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "220 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "440 g", icon: "ri-restaurant-line" },
];

/* ─── Fill method table ──────────────────────────────────────────────── */
const fillMethodTable = [
  { method: "Packed (pressed firmly)", grams: "~220 g", behavior: "Holds the shape of the cup when tipped out" },
  { method: "Unpacked (loose fill)", grams: "~160 g", behavior: "Collapses loosely, doesn't hold shape" },
];

/* ─── Grams to Cups Chart (Packed vs Unpacked) ──────────────────────── */
const packedVsUnpackedTable = [
  ["25 g", "0.11 cup", "0.16 cup"],
  ["55 g", "¼ cup", "~⅓ cup"],
  ["110 g", "½ cup", "~⅔ cup"],
  ["165 g", "¾ cup", "~1 cup"],
  ["220 g", "1 cup", "1⅜ cups"],
  ["300 g", "~1⅜ cups", "~1⅞ cups"],
  ["440 g", "2 cups", "2¾ cups"],
  ["500 g", "~2¼ cups", "~3⅛ cups"],
];

/* ─── Not All Brown Sugar Is the Same ───────────────────────────────── */
const brownSugarTypeTable = [
  { type: "Light brown sugar", grams: "~215 g", molasses: "~3.5%", bestFor: "Everyday baking — cookies, muffins, banana bread" },
  { type: "Dark brown sugar", grams: "~225 g", molasses: "~6.5%", bestFor: "Gingerbread, barbecue sauce, deep caramel flavor" },
  { type: "Muscovado sugar", grams: "~220 g", molasses: "~13%+", bestFor: "British-style baking, treacle desserts, intense molasses flavor" },
  { type: "Demerara sugar", grams: "~200 g", molasses: "~2%", bestFor: "Crumble toppings, coffee — large crystals, not for smooth batters" },
];

/* ─── Quick Recipe Reference ─────────────────────────────────────────── */
const recipeTable = [
  { recipe: "Chocolate chip cookies (24)", amount: "¾ cup", grams: "~165 g" },
  { recipe: "Banana bread (1 loaf)", amount: "⅔ cup", grams: "~150 g" },
  { recipe: "Barbecue sauce (~400 ml)", amount: "½ cup", grams: "~110 g" },
  { recipe: "Sticky toffee pudding (6)", amount: "1 cup", grams: "~220 g" },
  { recipe: "Gingerbread cookies (24)", amount: "~⅞ cup", grams: "~200 g" },
];

const otherIngredients = [
  { name: "All-purpose flour", href: "/flour" },
  { name: "Butter", href: "/butter" },
  { name: "Water", href: "/water" },
  { name: "Milk", href: "/milk" },
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

export default function BrownSugarGramsToCups() {
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
              <i className="ri-restaurant-line" /> Brown sugar-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Brown Sugar Grams to Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Brown sugar breaks a rule that applies to almost every other dry ingredient on this site: for
              most things, a &quot;spoon and level&quot; cup is the standard reference. Brown sugar is the
              opposite — nearly every recipe that calls for it means <strong>packed</strong> brown sugar,
              and the gap between a packed cup and a loose cup is large enough to genuinely change how a
              cookie or loaf turns out. Getting this one detail right matters more than the gram figure
              itself.
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
                1 packed cup of brown sugar ≈ 220 grams
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 220</div>
                <div>Grams = Cups × 220</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So 100 grams of packed brown sugar comes to just under ½ cup, and 250 grams is about 1⅛
                cups. This is the number to use whenever a recipe simply says &quot;brown sugar&quot;
                without further instruction — packed is the default assumption in the overwhelming majority
                of American recipes.
              </p>
              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            {/* Why Brown Sugar Needs Two Different Numbers */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why Brown Sugar Needs Two Different Numbers</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                According to the{" "}
                <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noopener noreferrer" className="font-semibold transition-colors duration-200 hover:underline" style={{ color: ACCENT }}>
                  USDA FoodData Central
                </a>{" "}
                composition data, brown sugar is essentially{" "}
                <Link href="/sugar" className="font-semibold transition-colors duration-200 hover:underline" style={{ color: ACCENT }}>
                  granulated sugar
                </Link>{" "}
                with molasses added back in — typically somewhere between 3.5% and 6.5% molasses by weight
                for light and dark varieties. Molasses is thick, sticky, and hygroscopic (it actively
                attracts and holds onto moisture), which is exactly why brown sugar clumps instead of
                pouring freely like white sugar. That stickiness is also why brown sugar&apos;s volume
                changes so dramatically depending on how it&apos;s handled:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[420px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Fill Method</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Behavior</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fillMethodTable.map((row, i) => (
                      <tr key={row.method} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.method}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.grams}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.behavior}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                That&apos;s roughly a <strong className="text-gray-900">27% difference</strong> between the
                two — far more than the packing variance you&apos;d see with something like flour or
                granulated sugar. If a recipe was developed assuming a packed cup and you measure it loose
                instead, you&apos;re effectively adding almost a quarter less brown sugar than the recipe
                intended, which shows up as drier, less chewy, less caramelized results <Link href="/almonds" className="font-sm hover:underline" style={{ color: ACCENT }}>
                  See more about almonds grams to cups conversion.
                </Link>
              </p>
            </section>

            {/* The Sandcastle Test */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Sandcastle Test</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                The traditional way bakers confirm they&apos;ve packed a cup correctly: press the brown
                sugar in firmly with the back of a spoon, level off the top, then tip the cup upside down.
                Properly packed brown sugar should hold its shape like a small sandcastle rather than
                crumbling apart. If it collapses, it wasn&apos;t packed firmly enough — and the actual
                weight in the cup was probably closer to the loose-fill figure than the packed one.
              </p>
            </section>

            {/* Grams to Cups Chart (Packed vs Unpacked) */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams to Cups Chart (Packed vs. Unpacked)</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[480px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups (Packed, 220g/cup)</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups (Unpacked, 160g/cup)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packedVsUnpackedTable.map((row, i) => (
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

            {/* Not All Brown Sugar Is the Same */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Not All Brown Sugar Is the Same, Either</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Beyond the packing question, brown sugar itself comes in a few distinct types that differ in
                both density and flavor intensity:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[560px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per Cup (packed)</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Molasses Content</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {brownSugarTypeTable.map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.type}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.grams}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.molasses}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Light and dark brown sugar can generally substitute for each other by weight without
                ruining a recipe, but they aren&apos;t flavor-identical — dark brown sugar brings noticeably
                more molasses depth, which matters in recipes like gingerbread where that flavor is the
                point.
              </p>
            </section>

            {/* Where Brown Sugar Shows Up */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Where Brown Sugar Shows Up (and Why the Amount Matters)</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Brown sugar isn&apos;t just &quot;sweeter white sugar&quot; — the molasses changes texture,
                moisture, and browning in ways that make the correct amount genuinely important to a
                recipe&apos;s outcome:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  <><strong className="text-gray-900">Cookies:</strong> molasses moisture is a major reason chewy cookies (chocolate chip, oatmeal) stay soft — too little brown sugar and they turn crisp and dry instead of chewy.</>,
                  <><strong className="text-gray-900">Quick breads:</strong> banana bread and spice cakes rely on brown sugar&apos;s moisture retention; underfilling the cup tends to leave the crumb drier and less rich.</>,
                  <><strong className="text-gray-900">Barbecue sauce and glazes:</strong> brown sugar contributes body and stickiness, not just sweetness — a thin, underwhelming glaze is often a brown-sugar-measurement problem, not a recipe problem.</>,
                  <><strong className="text-gray-900">Gingerbread and dark bakes:</strong> these recipes are usually built around dark brown sugar specifically, since the stronger molasses flavor is part of the intended taste.</>,
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quick Recipe Reference */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Recipe Reference</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[480px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Recipe</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Typical Amount</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams (packed)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recipeTable.map((row, i) => (
                      <tr key={row.recipe} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.recipe}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.amount}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.grams}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to Measure Packed Brown Sugar Correctly */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure Packed Brown Sugar Correctly</h2>
              <div className="mt-4 space-y-3">
                {[
                  { n: 1, title: "Assume \"packed\" unless told otherwise.", body: "If a recipe just says \"brown sugar,\" treat it as packed — that's the near-universal default in US baking." },
                  { n: 2, title: "Spoon the sugar into the cup", body: "rather than scooping directly from the bag, which gives more control over clumping." },
                  { n: 3, title: "Press firmly with the back of a spoon", body: "as you fill, working out air pockets until the sugar is dense." },
                  { n: 4, title: "Level the top and run the sandcastle test", body: "described above to confirm it's packed correctly." },
                  { n: 5, title: "When precision matters, weigh it instead.", body: "220 grams removes the packing guesswork entirely — no sandcastle test needed, no wondering whether you pressed hard enough." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4 rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                    <div
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-gray-900">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Reference */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "55 g packed brown sugar = ¼ cup",
                  "110 g packed brown sugar = ½ cup",
                  "220 g packed brown sugar = 1 cup",
                  "440 g packed brown sugar = 2 cups",
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
                Brown sugar is one of the few ingredients where the <em>method</em> matters as much as the{" "}
                <em>amount</em> — a packed cup (220 g) and a loose cup (160 g) aren&apos;t a rounding
                difference, they&apos;re nearly a quarter apart. When a recipe just says &quot;brown
                sugar,&quot; pack it. When precision genuinely matters — chewy cookies, sticky glazes,
                anything where texture depends on getting the moisture right — weighing the sugar directly
                is the only way to remove the guesswork entirely. For conversions involving plain
                granulated or powdered{" "}
                <Link href="/sugar" className="font-semibold transition-colors duration-200 hover:underline" style={{ color: ACCENT }}>
                  sugar
                </Link>{" "}
                instead, see our sugar grams to cups guide, where packing isn&apos;t nearly as large a
                factor.
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
