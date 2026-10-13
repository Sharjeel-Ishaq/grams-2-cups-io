import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Tahini Grams to Cups Converter | Sticky Sweetener & Paste Guide",
  description:
    "Convert tahini from grams to cups instantly. Includes tablespoons, teaspoon reference charts, jar label tips, and practical measuring tricks.",
  alternates: { canonical: "/tahini" },
  openGraph: {
    title: "Tahini Grams to Cups Converter",
    description:
      "Convert tahini from grams to cups instantly with tablespoon and cup reference charts.",
    url: "/tahini",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahini Grams to Cups Converter",
    description:
      "Convert tahini from grams to cups instantly with tablespoon and cup reference charts.",
    images: ["/og-image.jpg"],
  },
};

const ingredients: Ingredient[] = [
  { name: "Tahini", slug: "tahini", gramsPerCup: 240, notes: "USDA food data standard" },
];

const heroBadges = [
  { label: "¼ Cup", value: "60 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "120 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "240 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "480 g", icon: "ri-restaurant-line" },
];

const gramsToCupsTable = [
  ["10 g", "~0.04 cup", "2⅔ tsp"],
  ["15 g", "1⁄16 cup", "1 tbsp"],
  ["25 g", "~0.10 cup", "1⅔ tbsp"],
  ["30 g", "⅛ cup", "2 tbsp"],
  ["50 g", "~0.21 cup", "3⅓ tbsp"],
  ["60 g", "¼ cup", "4 tbsp"],
  ["75 g", "~0.31 cup", "5 tbsp"],
  ["80 g", "⅓ cup", "5⅓ tbsp"],
  ["100 g", "~0.42 cup", "6⅔ tbsp"],
  ["120 g", "½ cup", "8 tbsp"],
  ["150 g", "⅝ cup", "10 tbsp"],
  ["180 g", "¾ cup", "12 tbsp"],
  ["200 g", "~⅚ cup", "13⅓ tbsp"],
  ["240 g", "1 cup", "16 tbsp"],
  ["250 g", "~1.04 cups", "16⅔ tbsp"],
  ["300 g", "1¼ cups", "20 tbsp"],
  ["400 g", "~1⅔ cups", "26⅔ tbsp"],
  ["454 g (1 lb)", "~1⅞ cups", "30⅓ tbsp"],
  ["500 g", "~2⅛ cups", "33⅓ tbsp"],
  ["1,000 g", "~4⅙ cups", "66⅔ tbsp"],
];

const cupsToGramsChart = [
  ["1 teaspoon", "5 g", "0.18 oz"],
  ["1 tablespoon", "15 g", "0.53 oz"],
  ["⅛ cup (2 tbsp)", "30 g", "1.06 oz"],
  ["¼ cup", "60 g", "2.12 oz"],
  ["⅓ cup", "80 g", "2.82 oz"],
  ["½ cup", "120 g", "4.23 oz"],
  ["⅔ cup", "160 g", "5.64 oz"],
  ["¾ cup", "180 g", "6.35 oz"],
  ["1 cup", "240 g", "8.47 oz"],
  ["1½ cups", "360 g", "12.70 oz"],
  ["2 cups", "480 g", "16.93 oz"],
  ["3 cups", "720 g", "25.40 oz"],
];

const sourceComparison = [
  {
    source: "USDA food data (15 g per tablespoon)",
    weight: "240 g",
    notes: "Covers the most common type, made from roasted, hulled sesame",
  },
  {
    source: "Nutrition labels on jars (30 g per 2 tbsp)",
    weight: "240 g",
    notes: "The typical printed serving size",
  },
  {
    source: "King Arthur Baking ingredient chart (half-cup weight scaled up)",
    weight: "~256 g",
    notes: "As reported by converter sites that scale the chart to one cup",
  },
  {
    source: "Density-based tools using FAO/INFOODS-style data",
    weight: "~252–253 g",
    notes: "Based on a density of about 1.07 g/mL",
  },
];

const cupStandardTable = [
  { standard: "US customary cup", volume: "236.6 mL", weight: "240 g" },
  { standard: "US legal cup (nutrition labels)", volume: "240 mL", weight: "~244 g" },
  { standard: "Metric cup (Australia, NZ, Canada, modern UK)", volume: "250 mL", weight: "~254 g" },
  { standard: "UK imperial cup (older recipes)", volume: "284.1 mL", weight: "~288 g" },
  { standard: "Japanese cup", volume: "200 mL", weight: "~203 g" },
];

const recipeAmounts = [
  { recipe: "Hummus (one 15 oz can of chickpeas)", amount: "¼ to ½ cup", grams: "60–120 g" },
  { recipe: "Lemon-tahini sauce or dressing", amount: "2 to 4 tbsp", grams: "30–60 g" },
  { recipe: "Baba ghanoush", amount: "2 to 3 tbsp", grams: "30–45 g" },
];

const comparisonTable = [
  {
    category: "What it is",
    hulled: "Prepared from sesame seeds after outer husks have been removed",
    unhulled: "Whole-seed sesame with outer husks left on",
  },
  {
    category: "Texture and Look",
    hulled: "Smoother texture, lighter color",
    unhulled: "Darker, a bit grittier",
  },
  {
    category: "Flavor",
    hulled: "Milder flavor",
    unhulled: "More bitter, stronger sesame taste",
  },
  {
    category: "Measuring rule",
    hulled: "Brand labels usually print 30 g per 2 tbsp",
    unhulled: "Brand labels usually print 30 g per 2 tbsp",
  },
];

const measuringSteps = [
  "Stir the whole jar well. Scrape the bottom and mix until the oil and paste are fully blended and smooth. This one step matters more than any other, because the paste at the bottom of an unstirred jar is much thicker.",
  "Best method: use a scale. Set your bowl on the scale, press tare to zero it, and spoon the tahini straight in until you hit the weight you need. Nothing sticks to a cup and nothing gets wasted.",
  "If you must use a cup or spoon, brush it with a thin film of oil first (or use a spoon you've dipped in the recipe's oil or liquid). Tahini will slide out instead of clinging.",
  "Pack and level. Press the tahini into the cup to remove air pockets, then scrape the top level with a knife.",
  "Use it at room temperature. Cold tahini from the fridge is stiff and harder to pack evenly.",
];

const otherIngredients = [
  { name: "Peanut butter", href: "/peanut-butter" },
  { name: "Almond butter", href: "/almond-butter" },
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

export default function TahiniGramsToCups() {
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
              <i className="ri-drop-line" /> Tahini-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Tahini Grams to Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Tahini is thick, sticky, and separates in the jar, so measuring it by the cup is messier than it looks. Weighing it is much easier. This page gives you the grams-to-cups numbers, explains why sources don&apos;t all agree, and shows you a simple trick to find the exact figure for the jar in your own kitchen.
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
                1 cup of tahini ≈ 240 grams
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 240</div>
                <div>Grams = Cups × 240</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 mb-3">
                So 100 grams of tahini is about 0.42 cups (a little under ½ cup), and 250 grams is just over 1 cup. One tablespoon weighs 15 grams and one teaspoon weighs 5 grams, which makes the math easy.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                This figure comes from USDA food data, which lists 15 grams per tablespoon, and it matches the serving size printed on most tahini jars (30 grams for 2 tablespoons).
              </p>
            </section>

            <div className="mt-5">
              <SimpleConverter ingredients={ingredients} />
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
            <span className="font-bold">Important Note:</span> Consider 240g per cup, 15g per tablespoon, and 5g per teaspoon as approximate measurements. The actual weight of tahini may vary slightly due to differences in density, brand, and oil separation.
            </p>

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
                If your recipe lists ounces, note that 8 oz of tahini is 227 grams, which is just under a cup (about 0.95 cup). Our <Link href="/grams-to-ounces" className="font-semibold hover:underline" style={{ color: ACCENT }}>grams to ounces converter</Link> handles other amounts.
              </p>
            </section>

            {/* Why You'll See Different Numbers for Tahini */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-gray-900">Why You&apos;ll See Different Numbers for Tahini</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Search a few sites and you&apos;ll find tahini listed anywhere from about 225 to 256 grams per cup. Nobody is wrong. Here is what the main sources say:
              </p>

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

              <p className="text-sm font-semibold text-gray-800">So why the spread?</p>
              <ul className="space-y-2 text-sm text-gray-600 pl-5 list-disc">
                <li><strong>The oil separates.</strong> Tahini is ground sesame seeds plus their natural oil. In a jar that hasn&apos;t been stirred, the top is runny oil and the bottom is a thick, dry paste. A spoonful from each end weighs something different.</li>
                <li><strong>Brand and grind.</strong> Some tahini is ground finer or smoother than others, and that changes how it settles in a cup.</li>
                <li><strong>Measured vs. calculated.</strong> A portion weight (like USDA&apos;s 15 g per tablespoon) is a weighed spoonful. A density figure is a lab number turned into a cup weight afterwards. They land close, but not on top of each other. (We explain this in our <Link href="/grams-to-cups-accuracy" className="font-semibold hover:underline" style={{ color: ACCENT }}>accuracy guide</Link>.)</li>
                <li><strong>Which cup.</strong> A US cup holds 236.6 mL, but many other countries use a 250 mL cup, which holds more tahini.</li>
              </ul>

              <p className="text-sm leading-relaxed text-gray-600">
                We use 240 grams per cup as our working reference. It matches USDA data and the serving size printed on jars, so it is easy to double-check at home. The next section shows you how.
              </p>
            </section>

            {/* Find the Exact Number for Your Own Jar */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Find the Exact Number for Your Own Jar</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Your jar&apos;s nutrition label can give you your own grams-per-cup figure in seconds.
              </p>
              <ol className="mb-4 space-y-2 text-sm text-gray-600 list-decimal pl-5">
                <li>Find the serving size on the label. It is usually 2 tablespoons, with a weight in grams, often 30 g.</li>
                <li>Divide the grams by the number of tablespoons to get grams per tablespoon (30 ÷ 2 = 15 g).</li>
                <li>Multiply by 16 to get grams per cup (15 × 16 = 240 g).</li>
              </ol>
              <p className="text-sm leading-relaxed text-gray-600">
                If your label says 32 g for 2 tablespoons, your jar works out to 256 g per cup. Use that number in the formulas at the top of this page and your conversions will match your jar exactly.
              </p>
            </section>

            {/* Tahini by Cup Size */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Tahini by Cup Size</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                A &quot;cup&quot; isn&apos;t the same everywhere, so a cup of tahini weighs a little differently depending on the recipe&apos;s origin.
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[500px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cup standard</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Volume</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1 cup of tahini</th>
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
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Unless a recipe says otherwise, a US recipe means the US cup, and an Australian or modern British recipe means the 250 mL metric cup.
              </p>
            </section>

            {/* Common Recipe Amounts */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Common Recipe Amounts</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                These are typical ranges. Always follow your own recipe, since tahini amounts vary a lot between cooks.
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[400px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Recipe</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Typical tahini</th>
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
                A full 16 oz (454 g) jar, a common size, holds about 1⅞ cups. Jar sizes vary by brand, so check the weight on yours.
              </p>
            </section>

            {/* Hulled vs. Unhulled Tahini */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-gray-900">Hulled vs. Unhulled Tahini</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Hulled tahini is prepared from sesame seeds after their outer husks have been removed, giving it a smoother texture, lighter color, and milder flavor. It is lighter in color, smoother, and milder. Unhulled (whole-seed) tahini is darker, a bit grittier, and more bitter, with a stronger sesame taste. The two taste different, but for measuring you can treat them the same: brand labels for both types usually print the same 30 g per 2 tablespoons.
              </p>

              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[500px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Category</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Hulled Tahini</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Unhulled Tahini</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, i) => (
                      <tr key={row.category} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.category}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.hulled}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.unhulled}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to Measure Tahini Without the Mess */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure Tahini Without the Mess</h2>
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
                <Link href="/peanut-butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>Peanut butter</Link> weighs about 258 g per cup, close to tahini&apos;s 240 g, and other nut and seed butters such as sunflower seed butter or <Link href="/almond-butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>almond butter</Link> are the usual stand-ins. Swap them by weight rather than by cup, and expect a different flavor, since tahini has its own slightly bitter, nutty sesame taste.
              </p>
            </section>

            {/* Quick Reference Box */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="mb-4 space-y-1.5 text-sm text-gray-600">
                {[
                  "15 g tahini = 1 tablespoon",
                  "30 g tahini = 2 tablespoons (⅛ cup)",
                  "60 g tahini = ¼ cup",
                  "120 g tahini = ½ cup",
                  "240 g tahini = 1 cup",
                  "100 g tahini ≈ 0.42 cup",
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
                A cup of tahini weighs about 240 grams. Published figures run from roughly 225 to 256 grams because tahini separates, brands differ, and sources measure it in different ways. If you want an exact match, use the label on your own jar to work out your grams per cup, and stir the jar well before you weigh or measure. For a thick, sticky ingredient like this, a kitchen scale is the easiest way to get it right every time.
              </p>
            </section>

            {/* Other Ingredients Links */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for tahini. Each of these has its own weight-per-cup because densities differ:
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