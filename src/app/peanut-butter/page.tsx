import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Peanut Butter Grams to Cups Converter | Sticky Nut Butter Guide",
  description:
    "Convert peanut butter from grams to cups instantly. Includes tablespoon, teaspoon reference charts, FDA & USDA insights, and mess-free measuring tricks.",
  alternates: { canonical: "/peanut-butter" },
  openGraph: {
    title: "Peanut Butter Grams to Cups Converter",
    description:
      "Convert peanut butter from grams to cups instantly with tablespoon and cup reference charts.",
    url: "/peanut-butter",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peanut Butter Grams to Cups Converter",
    description:
      "Convert peanut butter from grams to cups instantly with tablespoon and cup reference charts.",
    images: ["/og-image.jpg"],
  },
};

const ingredients: Ingredient[] = [
  { name: "Peanut Butter", slug: "peanut-butter", gramsPerCup: 258, notes: "USDA FoodData Central standard" },
];

const heroBadges = [
  { label: "¼ Cup", value: "65 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "129 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "258 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "516 g", icon: "ri-restaurant-line" },
];

const gramsToCupsTable = [
  ["16 g", "1⁄16 cup", "1 tbsp"],
  ["32 g", "⅛ cup", "2 tbsp"],
  ["48 g", "~⅕ cup", "3 tbsp"],
  ["65 g", "¼ cup", "4 tbsp"],
  ["86 g", "⅓ cup", "5⅓ tbsp"],
  ["100 g", "~0.39 cup", "6.2 tbsp"],
  ["129 g", "½ cup", "8 tbsp"],
  ["150 g", "~0.58 cup", "9.3 tbsp"],
  ["172 g", "⅔ cup", "10⅔ tbsp"],
  ["194 g", "¾ cup", "12 tbsp"],
  ["200 g", "~0.78 cup", "12.4 tbsp"],
  ["250 g", "~0.97 cup (scant 1 cup)", "15.5 tbsp"],
  ["258 g", "1 cup", "16 tbsp"],
  ["300 g", "~1.16 cups", "18.6 tbsp"],
  ["400 g", "~1.55 cups", "24.8 tbsp"],
  ["454 g (16 oz jar)", "~1.76 cups", "28.2 tbsp"],
  ["500 g", "~1.94 cups", "31 tbsp"],
  ["516 g", "2 cups", "32 tbsp"],
  ["1,000 g", "~3.88 cups", "62 tbsp"],
];

const cupsToGramsChart = [
  ["1 teaspoon", "5 g", "0.18 oz"],
  ["1 tablespoon", "16 g", "0.56 oz"],
  ["2 tablespoons (⅛ cup)", "32 g", "1.13 oz"],
  ["¼ cup", "65 g", "2.28 oz"],
  ["⅓ cup", "86 g", "3.03 oz"],
  ["½ cup", "129 g", "4.55 oz"],
  ["⅔ cup", "172 g", "6.07 oz"],
  ["¾ cup", "194 g", "6.83 oz"],
  ["1 cup", "258 g", "9.10 oz"],
  ["1½ cups", "387 g", "13.65 oz"],
  ["2 cups", "516 g", "18.20 oz"],
];

const sourceComparison = [
  {
    source: "USDA FoodData Central (smooth peanut butter)",
    weight: "258 g",
    notes: "16 g per tablespoon",
  },
  {
    source: "Sweet 2 Eat Baking",
    weight: "258 g",
    notes: "Same figure for a standard jar",
  },
  {
    source: "King Arthur Baking ingredient chart (half-cup weight scaled up)",
    weight: "~270 g",
    notes: "As reported by converter sites",
  },
  {
    source: "Natural peanut butter, well stirred",
    weight: "~255 g",
    notes: "From one converter table",
  },
  {
    source: "Powdered peanut butter",
    weight: "~96 g",
    notes: "A much lighter, low-fat powder",
  },
];

const cupStandardTable = [
  { standard: "US customary cup", volume: "236.6 mL", weight: "258 g" },
  { standard: "US legal cup (nutrition labels)", volume: "240 mL", weight: "~262 g" },
  { standard: "Metric cup (Australia, NZ, Canada, modern UK)", volume: "250 mL", weight: "~273 g" },
  { standard: "UK imperial cup (older recipes)", volume: "284.1 mL", weight: "~310 g" },
  { standard: "Japanese cup", volume: "200 mL", weight: "~218 g" },
];

const recipeAmounts = [
  { recipe: "Peanut butter cookies (about 24)", amount: "½ to 1 cup", grams: "129–258 g" },
  { recipe: "Satay-style peanut sauce", amount: "¼ to ½ cup", grams: "65–129 g" },
  { recipe: "No-bake peanut butter bars", amount: "½ cup", grams: "129 g" },
  { recipe: "Peanut butter frosting", amount: "½ to ¾ cup", grams: "129–194 g" },
  { recipe: "Smoothie (one serving)", amount: "1 to 2 tbsp", grams: "16–32 g" },
];

const measuringSteps = [
  "Stir natural peanut butter well. Mix the whole jar until the oil and solids are fully blended. This matters more than anything else on this list.",
  "Best method: use a scale. Put your bowl on the scale, press tare to zero it, and spoon the peanut butter straight in. Nothing sticks to a cup and nothing is wasted.",
  "Using a cup or spoon? Press the peanut butter in firmly to push out air pockets, level the top, and scrape every bit into the bowl.",
  "Try the water trick for cups. To measure ½ cup, pour ½ cup of cold water into a 1-cup liquid measure, then add peanut butter until the water rises to the 1-cup line. Pour off the water. Peanut butter is denser than water, so it sinks and leaves the right amount behind.",
  "Level your spoons. A heaped spoonful of peanut butter can hold roughly half again as much as a level one, which adds up fast in small recipes.",
];

const sourcesLinks = [
  {
    title: "USDA FoodData Central: household measures and portion weights for peanut butter.",
    href: "https://fdc.nal.usda.gov/",
  },
  {
    title: "U.S. FDA, 21 CFR § 164.150: Peanut butter standard of identity.",
    href: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-164/subpart-B/section-164.150",
  },
  {
    title: "U.S. FDA, 21 CFR § 101.12: Reference amounts customarily consumed.",
    href: "https://www.govinfo.gov/content/pkg/CFR-2025-title21-vol2/pdf/CFR-2025-title21-vol2-sec101-12.pdf",
  },
  {
    title: "King Arthur Baking ingredient weight chart.",
    href: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart",
  },
];

const otherIngredients = [
  { name: "Tahini", href: "/tahini" },
  { name: "Milk", href: "/milk" },
  { name: "Honey", href: "/honey" },
  { name: "All-purpose flour", href: "/flour" },
  { name: "Granulated sugar", href: "/sugar" },
  { name: "Butter", href: "/butter" },
  { name: "Rolled oats", href: "/oats" },
  { name: "Chocolate chips", href: "/chocolate-chips" },
  { name: "Cocoa powder", href: "/cocoa-powder" },
  { name: "Salt", href: "/salt" },
  { name: "Baking powder", href: "/baking-powder" },
  { name: "Vegetable oil", href: "/vegetable-oil" },
];

export default function PeanutButterGramsToCups() {
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
              <i className="ri-drop-line" /> Peanut butter-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Peanut Butter Grams to Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Peanut butter is thick, sticky, and dense. It clings to the cup, it can separate in the jar, and a spoonful from one jar can weigh a little more than a spoonful from another. That&apos;s why weighing it is so much easier than measuring it by volume. This page gives you the grams-to-cups numbers, explains why published figures differ, and shows you how to find the exact number for your own jar.
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
            {/* The Short Answer */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Short Answer</h2>
              <div
                className="mb-3 rounded-xl p-3 text-sm font-semibold text-gray-800"
                style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}30` }}
              >
                1 cup of peanut butter ≈ 258 grams
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 258</div>
                <div>Grams = Cups × 258</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 mb-3">
                So 100 grams of peanut butter is about 0.39 cups (a little more than ⅓ cup), and 258 grams is one full cup. One tablespoon weighs about 16 grams and one teaspoon about 5 grams, so a standard 2-tablespoon serving is 32 grams.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                This figure matches USDA food data for smooth peanut butter, which lists 16 grams per tablespoon, 32 grams per 2 tablespoons, and 258 grams per cup.
              </p>
              
            </section>

            <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>

            {/* Grams to Cups Chart */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams to Cups Chart</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[480px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Tablespoons</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gramsToCupsTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cups to Grams Chart */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Cups to Grams Chart</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[480px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Amount</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Ounces</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cupsToGramsChart.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                For other ounce amounts, see our <Link href="/grams-to-ounces" className="font-semibold hover:underline" style={{ color: ACCENT }}>grams to ounces converter</Link>.
              </p>
            </section>

            {/* What the Experts and Regulators Say */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">What the Experts and Regulators Say</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Two U.S. government sources help explain where these numbers come from:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 pl-5 list-disc mb-3">
                <li>
                  <strong>USDA FoodData Central</strong> is the U.S. Department of Agriculture&apos;s food database. For smooth peanut butter, its household measures list 16 g for 1 tablespoon and 32 g for 2 tablespoons, and its older reference tables give 258 g per cup. That is the figure we use here.
                </li>
                <li>
                  The <strong>U.S. Food and Drug Administration (FDA)</strong> sets two rules that matter to measuring. Under 21 CFR § 101.12, the standard serving size for nut and seed butters is 2 tablespoons, with the gram weight printed in brackets on the label. And under 21 CFR § 164.150, a product can only be called &quot;peanut butter&quot; if it is at least 90% peanuts, with seasonings and stabilizers (like salt, sugar, and stabilizing oil) making up no more than 10% by weight. Anything with less peanut than that has to be called a &quot;peanut spread.&quot;
                </li>
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                That 10% allowance is the reason two jars of peanut butter never weigh exactly the same by the cup. Salt, sugar, and stabilizers differ from brand to brand.
              </p>
            </section>

            {/* Why You'll See Different Numbers for Peanut Butter */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-gray-900">Why You&apos;ll See Different Numbers for Peanut Butter</h2>

              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[600px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Source</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per US cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sourceComparison.map((row, i) => (
                      <tr key={row.source} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.source}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.weight}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm font-semibold text-gray-800">The spread comes from a few things:</p>
              <ul className="space-y-2 text-sm text-gray-600 pl-5 list-disc">
                <li><strong>Brand differences.</strong> Salt, sugar, and stabilizers add up to as much as 10% of the jar, and every brand uses a different mix.</li>
                <li><strong>Stirred or not.</strong> In natural jars the oil rises to the top. A spoonful from the top is looser and lighter than one from the thick bottom.</li>
                <li><strong>Smooth or crunchy.</strong> Crunchy peanut butter has nut pieces and tiny air gaps, so it can pack a little differently from smooth.</li>
                <li><strong>Which cup.</strong> A US cup holds 236.6 mL, but many other countries use a 250 mL cup.</li>
                <li><strong>Scraping.</strong> Sticky peanut butter left on the spoon or cup means less ends up in your bowl.</li>
              </ul>

              <p className="text-sm leading-relaxed text-gray-600">
                Our reference is 258 grams per cup, which matches the USDA figure. The next section shows how to match your own jar.
              </p>
            </section>

            {/* Find the Exact Number for Your Own Jar */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Find the Exact Number for Your Own Jar</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Your jar&apos;s nutrition label can give you your own grams-per-cup figure in a few seconds. Because the FDA sets the serving at 2 tablespoons, manufacturers print the weight of those 2 tablespoons in grams.
              </p>
              <ol className="mb-4 space-y-2 text-sm text-gray-600 list-decimal pl-5">
                <li>Find the serving size. It will say 2 tbsp with a weight in grams, often 32 g.</li>
                <li>Multiply those grams by 8. Two tablespoons is ⅛ of a cup, so this gives you the weight of a full cup.</li>
              </ol>
              <p className="text-sm leading-relaxed text-gray-600">
                A label that says 32 g works out to 256 g per cup. A label that says 34 g works out to 272 g per cup. Use your own number in the formulas at the top of this page, and your conversions will match your jar.
              </p>
            </section>

            {/* Peanut Butter by Cup Size */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Peanut Butter by Cup Size</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                A &quot;cup&quot; isn&apos;t the same everywhere, so a cup of peanut butter weighs slightly differently depending on where the recipe comes from.
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[500px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cup standard</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Volume</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1 cup of peanut butter</th>
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

            {/* Common Recipe Amounts */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Common Recipe Amounts</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                These are typical ranges. Always follow your own recipe, since amounts vary a lot between cooks.
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[400px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Recipe</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Typical peanut butter</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">In grams</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recipeAmounts.map((row, i) => (
                      <tr key={row.recipe} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.recipe}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.amount}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.grams}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                A standard 16 oz (454 g) jar, a common size, holds about 1¾ cups. Jar sizes differ between brands, so check the weight on yours.
              </p>
            </section>

            {/* How to Measure Peanut Butter Without the Mess */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure Peanut Butter Without the Mess</h2>
              <ol className="mb-4 space-y-2 text-sm text-gray-600 list-decimal pl-5">
                {measuringSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            {/* Quick Substitution Note */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Substitution Note</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Other nut and seed butters weigh about the same: <Link href="/tahini" className="font-semibold hover:underline" style={{ color: ACCENT }}>tahini</Link> is around 240 g per cup (see our <Link href="/tahini" className="font-semibold hover:underline" style={{ color: ACCENT }}>tahini guide</Link>), and <Link href="/almond-butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>almond butter</Link> and sunflower seed butter are usually listed near 250–256 g. You can swap by weight, but the flavor, oil level, and thickness will change. If you&apos;re swapping because of a peanut allergy, read the labels carefully, since many nut-free products are made in shared facilities.
              </p>
            </section>

            {/* Quick Reference Box */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="mb-4 space-y-1.5 text-sm text-gray-600">
                {[
                  "16 g peanut butter = 1 tablespoon",
                  "32 g peanut butter = 2 tablespoons",
                  "65 g peanut butter = ¼ cup",
                  "129 g peanut butter = ½ cup",
                  "258 g peanut butter = 1 cup",
                  "100 g peanut butter ≈ 0.39 cup",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Sources and Further Reading */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Sources and Further Reading</h2>
              <ul className="space-y-2 text-sm text-gray-600 pl-5 list-disc">
                {sourcesLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline"
                      style={{ color: ACCENT }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* The Bottom Line */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                A cup of peanut butter weighs about 258 grams, in line with USDA data. Published figures run from roughly 255 to 270 grams, because every brand&apos;s mix of salt, sugar, and stabilizers is a little different, and because natural jars separate. For the best match, use the serving size on your own jar&apos;s label to work out your grams per cup, stir well before you measure, and weigh it on a scale whenever you can.
              </p>
            </section>

            {/* Other Ingredients Links */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for peanut butter. Each of these has its own weight-per-cup because densities differ:
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