import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Potato Starch Grams to Cups Converter",
  description:
    "Convert potato starch from grams to cups with our reliable guide. Learn why weights vary, how it differs from potato flour, and how it compares to cornstarch.",
  alternates: { canonical: "/potato-starch" },
  openGraph: {
    title: "Potato Starch Grams to Cups Converter",
    description: "Convert potato starch from grams to cups instantly with clear reference charts.",
    url: "/potato-starch",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Potato Starch Grams to Cups Converter",
    description: "Convert potato starch from grams to cups with practical measurement tips.",
    images: ["/og-image.jpg"],
  },
};

const gramsToCupsTable = [
  ["10 g", "⅟₁₆ cup", "1 tbsp"],
  ["20 g", "⅛ cup", "2 tbsp"],
  ["30 g", "~⅙ cup", "3 tbsp"],
  ["40 g", "¼ cup", "4 tbsp"],
  ["50 g", "~⅓ cup (scant)", "5 tbsp"],
  ["60 g", "⅜ cup", "6 tbsp"],
  ["80 g", "½ cup", "8 tbsp"],
  ["100 g", "⅝ cup", "10 tbsp"],
  ["120 g", "¾ cup", "12 tbsp"],
  ["150 g", "~15⁄16 cup (just under 1 cup)", "15 tbsp"],
  ["160 g", "1 cup", "16 tbsp"],
  ["200 g", "1¼ cups", "20 tbsp"],
  ["250 g", "~1⁹⁄₁₆ cups", "25 tbsp"],
  ["300 g", "1⅞ cups", "30 tbsp"],
  ["400 g", "2½ cups", "40 tbsp"],
  ["500 g", "~3⅛ cups", "50 tbsp"],
  ["1,000 g", "~6¼ cups", "100 tbsp"],
];

const ingredients: Ingredient[] = [
  { name: "Potato Starch", slug: "potato-starch", gramsPerCup: 160, notes: "US customary cup" }, 
  { name: "Potato Flour", slug: "potato-flour", gramsPerCup: 173, notes: "US customary cup" },
  { name: "Sweet Potato Starch", slug: "sweet-potato-starch", gramsPerCup: 130, notes: "US customary cup" },
];

const cupsToGramsTable = [
  ["1 tablespoon", "10 g"],
  ["¼ cup", "40 g"],
  ["⅓ cup", "53 g"],
  ["½ cup", "80 g"],
  ["⅔ cup", "107 g"],
  ["¾ cup", "120 g"],
  ["1 cup", "160 g"],
  ["1½ cups", "240 g"],
  ["2 cups", "320 g"],
];

const sourceComparison = [
  {
    source: "King Arthur Baking ingredient chart (scaled to 1 cup)",
    weight: "~152 g",
    notes: "Professional test kitchen figure",
  },
  {
    source: "Home-kitchen test using fluff, spoon, and level (What To Cook Today)",
    weight: "160 g",
    notes: "Weighed on a digital scale, no sifting",
  },
  {
    source: "Kitchen conversion tables",
    weight: "150–170 g",
    notes: "Commonly lands near 160 g",
  },
  {
    source: "Gluten-free flour maker Authentic Foods",
    weight: "170 g (6 oz)",
    notes: "Used for gluten-free flour blends",
  },
  {
    source: "Celebrity baker Anna Olson",
    weight: "190 g",
    notes: "Based on a 250 mL Canadian cup — about 180 g on a US cup",
  },
  {
    source: "Branded retail product in USDA data",
    weight: "~192 g",
    notes: "One specific packaged product",
  },
];

const comparisonTable = [
  {
    category: "What it is",
    starch: "Pure starch washed out of crushed potatoes",
    flour: "Whole cooked potatoes, dried and ground",
  },
  {
    category: "Look and feel",
    starch: "Bright white, very fine, powdery",
    flour: "Cream or off-white, slightly coarser",
  },
  {
    category: "Flavor",
    starch: "Neutral",
    flour: "Mild potato flavor",
  },
  {
    category: "Main jobs",
    starch: "Thickening, crisp coatings, gluten-free blends",
    flour: "Adding moisture and softness to bread",
  },
  {
    category: "Water absorption",
    starch: "Thickens when heated",
    flour: "Soaks up a lot of liquid",
  },
  {
    category: "Approx. grams per cup",
    starch: "~160 g",
    flour: "~173–184 g",
  },
];

export default function PotatoStarchPage() {
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
              <i className="ri-scales-3-line" /> Ingredient Converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Potato Starch Grams to Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Potato starch looks like cornstarch, feels like cornstarch, and often gets used like cornstarch — but a cup of it weighs noticeably more, and the number you&apos;ll find online depends a lot on who you ask. This guide gives you a clear working figure, shows you why published numbers disagree, and clears up the single most common mix-up with this ingredient: potato starch is not the same thing as potato flour.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another ingredient?{" "}
              <Link href="/" className="font-semibold transition-colors duration-200 underline underline-offset-2" style={{ color: ACCENT }}>
                Convert Grams To Cups
              </Link>
              .
            </p>
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
                1 cup of potato starch ≈ 160 grams
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 160</div>
                <div>Grams = Cups × 160</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So 100 grams of potato starch is ⅝ cup, and 250 grams is about 1½ cups (a little more, at 1.56). A handy side effect of using 160 g as the reference: 1 level tablespoon works out to a neat 10 grams.
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

            {/* Cups to Grams */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Cups to Grams</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[320px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cupsToGramsTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                A teaspoon comes out to roughly 3.3 grams.
              </p>
            </section>

            {/* Why You'll See Different Numbers Online */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-gray-900">Why You&apos;ll See Different Numbers Online</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                If you search for information about potato starch on various websites, you will not necessarily find the same answer everywhere. This discrepancy is not due to an error; rather, there are several underlying factors at play that alter the data:
              </p>

              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[600px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Source</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Published weight per cup</th>
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

              <p className="text-sm font-semibold text-gray-800">Here&apos;s what&apos;s behind the spread:</p>
              <ul className="space-y-2 text-sm text-gray-600 pl-5 list-disc">
                <li><strong>The cup itself.</strong> A US cup holds 236.6 mL, while a metric cup holds 250 mL. The same potato starch simply weighs more in the bigger cup.</li>
                <li><strong>How the cup was filled.</strong> Potato starch is a very fine powder that packs down easily. Scooping straight from the bag compresses it, while fluffing and spooning it in leaves air between the grains. One home baker who tested this on flours and starches found the difference could be 10–20 grams per cup just from the way the cup was filled.</li>
                <li><strong>The brand and the milling.</strong> Moisture content, grain size, and how the starch was dried all nudge the weight up or down a little.</li>
                <li><strong>What&apos;s actually in the bag?</strong> Some people measure potato flour by mistake and then wonder why their numbers don&apos;t match — more on that next.</li>
              </ul>

              <p className="text-sm leading-relaxed text-gray-600">
                In practical kitchen applications, the &quot;fluff-spoon-level&quot; method is considered the most balanced and standard approach; therefore, we have established a weight of 160 grams per cup. However, if the product packaging or a specific recipe card lists a different weight, please follow that figure for the best results.
              </p>
            </section>

            {/* Potato Starch vs. Potato Flour */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-gray-900">Potato Starch vs. Potato Flour: Not the Same Thing</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                This is the fundamental ambiguity that often lies at the root of the most confusion. That is why brands producing gluten-free flour specifically highlight this distinction in their charts and warn consumers (for instance, clearly stating that &quot;potato starch is meant, not potato flour&quot;).
              </p>

              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[500px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Category</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Potato Starch</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Potato Flour</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, i) => (
                      <tr key={row.category} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.category}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.starch}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.flour}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm leading-relaxed text-gray-600">
                Their weights per cup are in the same neighborhood, so a conversion chart can&apos;t save you if you grab the wrong bag. Swapping one for the other will change the texture of your recipe in a big way: potato flour in a sauce will turn it heavy and pasty, and potato starch in a bread dough won&apos;t give you the moisture-holding softness the recipe was after. Check the label for the words &quot;starch&quot; or &quot;flour&quot; and the ingredient list before you measure.
              </p>
            </section>

            {/* Potato Starch vs. Cornstarch */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Potato Starch vs. Cornstarch: A Weight Difference Worth Knowing
              </h2>
              <p className="text-sm leading-relaxed text-gray-600 mb-3">
                Potato starch is denser than cornstarch. On the reference numbers used across this site, a cup of cornstarch is about 128 g while a cup of potato starch is about 160 g.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                That means if a recipe calls for 1 tablespoon of cornstarch (about 8 g) and you swap in 1 tablespoon of potato starch (about 10 g), you&apos;re adding roughly 25% more starch by weight. If you&apos;d rather match the weight, use about ⅘ of a tablespoon of potato starch for every tablespoon of cornstarch. Either way, how it behaves in the pot depends on the recipe, so treat it as a starting point and adjust to taste and texture.
              </p>
            </section>

            {/* Using Potato Starch Well */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Using Potato Starch Well</h2>
              <ul className="space-y-2 text-sm text-gray-600 pl-5 list-disc">
                <li><strong>Make a slurry first.</strong> Stir the starch into a little cold liquid until smooth before adding it to a hot pot. Dropping dry starch into hot liquid makes lumps.</li>
                <li><strong>Add it near the end.</strong> Potato starch thickens at a fairly low temperature, so you generally want to stir it in toward the end of cooking.</li>
                <li><strong>Don&apos;t boil it hard.</strong> Letting a potato-starch sauce boil for a long time can make it stringy or cause it to thin out again.</li>
                <li><strong>Use it in gluten-free blends.</strong> It&apos;s a common ingredient in gluten-free flour mixes, where it adds softness and lightness.</li>
                <li><strong>Coat before frying.</strong> A light dusting of potato starch gives fried foods a crisp, delicate crust.</li>
              </ul>
            </section>

            {/* How to Measure Potato Starch Accurately */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure Potato Starch Accurately</h2>
              <ol className="mb-4 space-y-2 text-sm text-gray-600 list-decimal pl-5">
                <li>Stir or fluff it first. Starch settles and packs down in the bag over time.</li>
                <li>Spoon it into a dry measuring cup instead of dipping the cup into the bag.</li>
                <li>Break up any lumps before you level, since potato starch can clump in humid kitchens.</li>
                <li>Level the top with a straight edge — don&apos;t tap or press it down.</li>
              </ol>
              <p className="text-sm leading-relaxed text-gray-600">
                If you want to go deeper on the technique, our <Link href="/blog/spoon-and-level-method" className="font-semibold hover:underline" style={{ color: ACCENT }}>spoon-and-level guide</Link> walks through it step by step. For small amounts of starch used as a thickener, a scale is especially helpful, since a heaped tablespoon of such a fine powder can be a lot more than a level one. You can also check other conversions with our <Link href="/cups-to-grams" className="font-semibold hover:underline" style={{ color: ACCENT }}>cups to grams converter</Link> or our <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour converter</Link>.
              </p>
            </section>

            {/* Quick Reference Box */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="mb-4 space-y-1.5 text-sm text-gray-600">
                {[
                  "10 g potato starch ≈ 1 tablespoon",
                  "40 g potato starch = ¼ cup",
                  "80 g potato starch = ½ cup",
                  "160 g potato starch = 1 cup",
                  "320 g potato starch = 2 cups",
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
                For potato starch, 160 grams per cup is a solid everyday reference, but published figures run anywhere from about 150 to 190 grams depending on the cup size, the brand, and how the cup was filled. The two things that matter most are measuring the same way each time and making sure you&apos;ve picked up potato starch rather than potato flour. When a recipe really depends on the amount of starch — a silky sauce, a delicate gluten-free bake — weighing it on a scale takes the guesswork out completely.
              </p>
            </section>

            {/* Back & Footer Resources
            <div className="text-center pt-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-semibold transition-colors hover:underline"
                style={{ color: ACCENT }}
              >
                <i className="ri-arrow-left-line" /> Back to Kitchen Measurement Blog
              </Link>
            </div> */}

<section>
  <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">
    Explore More Baking &amp; Conversion Resources
  </h2>

  <p className="mb-4 text-sm leading-relaxed text-gray-600">
    Explore ingredient conversions, baking guides, measurement charts,
    and helpful resources to make your baking measurements easier and more accurate.
  </p>

  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
    {[
      { name: "Flour", href: "/flour" },
      { name: "Butter", href: "/butter" },
      { name: "Brown sugar", href: "/brown-sugar" },
      { name: "Honey", href: "/honey" },
      { name: "Milk", href: "/milk" },
      { name: "Chocolate chips", href: "/chocolate-chips" },
      { name: "Salt", href: "/salt" },
      { name: "Conversion Chart", href: "/conversion-chart" },
      { name: "Accuracy Guide", href: "/grams-to-cups-accuracy" },
      { name: "100g to cups", href: "/100-grams-to-cups" },
      { name: "150g to cups", href: "/150-grams-to-cups" },
      { name: "200g to cups", href: "/200-grams-to-cups" },
      { name: "250g to cups", href: "/250-grams-to-cups" },
      { name: "Grams to Ounces", href: "/grams-to-ounces" },
      { name: "mL to Cups", href: "/ml-to-cups" },
      { name: "FAQs", href: "/faq" },
      { name: "Blog", href: "/blog" },
    ].map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:text-[#02B875] hover:border-current"
        style={{ borderColor: `${ACCENT}20` }}
      >
        <span className="truncate">{item.name}</span>
        <i
          className="ri-arrow-right-s-line flex-shrink-0"
          style={{ color: ACCENT }}
        />
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