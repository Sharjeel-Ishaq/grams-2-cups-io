import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Almonds Grams to Cups Converter | Whole, Sliced & Ground",
  description:
    "Convert almonds from grams to cups instantly. Includes whole, sliced, slivered, and ground almond measurements and practical kitchen conversion charts.",
  alternates: { canonical: "/almonds" },
  openGraph: {
    title: "Almonds Grams To Cups Converter",
    description:
      "Convert almonds from grams to cups with charts for whole, sliced, slivered, and ground almonds.",
    url: "/almonds",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Almonds Grams to Cups Converter",
    description:
      "Convert almonds from grams to cups with charts for whole, sliced, slivered, and ground almonds.",
    images: ["/og-image.jpg"],
  },
};

/* ─── Ingredient data for the converter tool (single ingredient) ────── */
const ingredients: Ingredient[] = [
  {
    name: "Whole Almonds",
    slug: "almonds",
    gramsPerCup: 143,
    notes: "US customary cup — 5.0 oz",
  },
  {
    name: "Coarsely Chopped Almonds",
    slug: "coarsely-chopped-almonds",
    gramsPerCup: 135,
    notes: "Approximately 4.8 oz per US cup",
  },
  {
    name: "Slivered Almonds",
    slug: "slivered-almonds",
    gramsPerCup: 108,
    notes: "Approximately 3.8 oz per US cup",
  },
  {
    name: "Sliced Almonds",
    slug: "sliced-almonds",
    gramsPerCup: 92,
    notes: "Approximately 3.3 oz per US cup",
  },
  {
    name: "Ground Almonds",
    slug: "ground-almonds",
    gramsPerCup: 112.5,
    notes: "Home-processed; approximately 100–125 g or 3.5–4.4 oz per US cup",
  },
  {
    name: "Almond Flour",
    slug: "almond-flour",
    gramsPerCup: 96,
    notes: "Packaged, blanched; approximately 3.4 oz per US cup",
  },
  {
    name: "Flaked Almonds",
    slug: "flaked-almonds",
    gramsPerCup: 75,
    notes: "Approximately 2.6 oz per US cup",
  },
];

/* ─── Hero quick-reference badges ──────────────────────────────────── */
const heroBadges = [
  { label: "¼ Cup", value: "36 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "72 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "143 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "286 g", icon: "ri-restaurant-line" },
];

/* ─── Grams per Cup by Almond Form ───────────────────────────────────── */
const almondFormTable = [
  { form: "Whole almonds", grams: "143 g", oz: "5.0 oz" },
  { form: "Coarsely chopped almonds", grams: "~135 g", oz: "4.8 oz" },
  { form: "Slivered almonds", grams: "108 g", oz: "3.8 oz" },
  { form: "Sliced almonds", grams: "92 g", oz: "3.3 oz" },
  { form: "Ground almonds (home-processed)", grams: "100–125 g*", oz: "3.5–4.4 oz" },
  { form: "Almond flour (packaged, blanched)", grams: "~96 g", oz: "3.4 oz" },
  { form: "Flaked almonds", grams: "~75 g", oz: "2.6 oz" },
];

/* ─── Why the numbers vary so much between forms ─────────────────────── */
const formExplanations = [
  {
    lead: "Whole almonds",
    rest: "are smooth, oval, and roll into fairly tight contact with each other, which is part of why they pack the heaviest per cup among the sliced/chopped/slivered group.",
  },
  {
    lead: "Slivered almonds",
    rest: "(thin, elongated strips) leave narrow gaps between pieces — enough air that a cup weighs noticeably less than whole almonds.",
  },
  {
    lead: "Sliced almonds",
    rest: "are flatter and thinner than slivers, which paradoxically leaves more open space per cup, making them the lightest of the \"cut\" forms.",
  },
  {
    lead: "Flaked almonds",
    rest: "are cut even thinner still, closer to shavings, so they trap the most air of any cut form and land at the low end of the scale.",
  },
  {
    lead: "Ground almonds and almond flour",
    rest: "should, in theory, be the densest — fine particles usually pack tighter. But almonds are oily, so fine grinding can cause slight clumping rather than settling perfectly flat, which is part of why this category has the widest real-world range.",
  },
];

/* ─── Grams to Cups Chart (Whole Almonds) ────────────────────────────── */
const gramsToCupsTable = [
  ["28 g", "~⅕ cup", "1 oz"],
  ["36 g", "¼ cup", "1.3 oz"],
  ["57 g", "~⅖ cup", "2 oz"],
  ["72 g", "½ cup", "2.5 oz"],
  ["100 g", "~0.7 cup", "3.5 oz"],
  ["107 g", "¾ cup", "3.8 oz"],
  ["143 g", "1 cup", "5 oz"],
  ["200 g", "~1.4 cups", "7.1 oz"],
  ["250 g", "~1.75 cups", "8.8 oz"],
  ["454 g (1 lb)", "~3.17 cups", "16 oz"],
  ["500 g", "~3.5 cups", "17.6 oz"],
];

/* ─── Tablespoons and Ounces, for Smaller Amounts ────────────────────── */
const smallAmountsTable = [
  ["1 tablespoon", "~8.9 g"],
  ["2 tablespoons", "~17.8 g"],
  ["¼ cup (4 tbsp)", "~36 g"],
  ["1 oz", "~28 g"],
  ["4 oz", "~113 g"],
  ["8 oz (½ lb)", "~227 g"],
  ["16 oz (1 lb)", "~454 g"],
];

/* ─── A Few Things Worth Knowing About Almonds Beyond the Conversion ─── */
const almondFacts = [
  {
    lead: "Toasting changes flavor, not weight.",
    rest: "Raw, blanched, and toasted almonds can be substituted for each other in equal amounts by cup or weight — toasting mainly deepens the flavor and helps almonds stay suspended in batter instead of sinking during baking.",
  },
  {
    lead: "Bitter almonds aren't sold in the US.",
    rest: "The almonds found in grocery stores are the sweet variety; bitter almonds contain a compound that's toxic when raw and are restricted from sale in the US, showing up instead in small, processed amounts in some European extracts and almond paste.",
  },
  {
    lead: "Almond flour and ground almonds aren't quite the same product.",
    rest: "Commercial almond flour is typically made from blanched (skin-off) almonds ground very finely and evenly. Home-ground almonds — especially with skins left on — tend to be coarser and slightly heavier per cup as a result.",
  },
  {
    lead: "Store almonds in the fridge or freezer for freshness.",
    rest: "Almonds have a relatively high fat content for a nut, which means they can turn rancid faster than shelf-stable pantry staples if left at room temperature for extended periods.",
  },
];

/* ─── Other ingredients — internal links to their own converter pages ── */
const otherIngredients = [
  { name: "Whole Milk", href: "/milk" },
  { name: "Water", href: "/water" },
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
  { name: "Vegetable oil", href: "/vegetable-oil" },
];

export default function AlmondGramsToCups() {
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
              <i className="ri-drop-line" /> Almond-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Almond Grams To Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Almonds cause more measuring confusion than most nuts, and it&apos;s not really about the
              almond itself — it&apos;s about the dozen different forms almonds come in. Whole, sliced,
              slivered, chopped, ground, flour — each one packs into a measuring cup completely
              differently, so &quot;a cup of almonds&quot; genuinely means different things depending on
              which almonds you&apos;re holding.
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
                1 cup of whole almonds ≈ 143 grams
              </div>
              <div
                className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800"
                style={{ border: `1px solid ${ACCENT}25` }}
              >
                <div>Cups = Grams ÷ 143</div>
                <div>Grams = Cups × 143</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So 100 grams of whole almonds is about ⅔ cup, and 250 grams comes to roughly 1¾ cups. That
                reference number, though, only applies to whole almonds — sliced, slivered, ground, and
                flour versions each need their own figure, since the shape of the pieces changes how much
                air sits between them in the cup.
              </p>
              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            {/* Grams per Cup by Almond Form */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams per Cup by Almond Form</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                This is the table worth bookmarking, since it&apos;s the part most generic converters get
                wrong by treating all &quot;almonds&quot; as one ingredient:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[560px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Almond Form</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Ounces per Cup</th>
                    </tr>
                  </thead>
                  <tbody>
                    {almondFormTable.map((row, i) => (
                      <tr key={row.form} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.form}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.grams}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.oz}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                *Ground almonds show the widest spread of any form here, and it&apos;s worth explaining why
                rather than pretending there&apos;s one exact number. How fine you grind them, whether the
                skins are left on, and how much oil has been released during processing (almonds are fatty
                enough that over-processing turns them into almond butter) all shift the weight. If
                you&apos;re grinding your own, weighing the result once and noting your own number is more
                reliable than any generic chart — including this one.
              </p>
            </section>

            {/* Why the Numbers Vary So Much Between Forms */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why the Numbers Vary So Much Between Forms</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Every almond form is really the same nut with a different amount of trapped air around it:
              </p>
              <div className="space-y-3">
                {formExplanations.map((item) => (
                  <div
                    key={item.lead}
                    className="rounded-2xl border bg-white p-4"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <p className="text-sm leading-relaxed text-gray-600">
                      <strong className="text-gray-900">{item.lead}</strong> {item.rest}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Grams to Cups Chart (Whole Almonds) */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams to Cups Chart (Whole Almonds)</h2>
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

            {/* Tablespoons and Ounces, for Smaller Amounts */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Tablespoons and Ounces, for Smaller Amounts</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Since almonds are frequently used a handful or a spoonful at a time — toppings, garnishes,
                small recipe additions — here&apos;s the same conversion at a finer scale, based on whole
                almonds:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[280px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Amount</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                    </tr>
                  </thead>
                  <tbody>
                    {smallAmountsTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Does Packing the Cup Change the Weight? */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Does Packing the Cup Change the Weight?</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Yes, and almonds are a good example of why &quot;spoon and level&quot; matters as an
                instruction, not just a suggestion. A gently filled, leveled cup of sliced or slivered
                almonds sits close to the reference numbers above. Shake the cup, tap it on the counter, or
                press the almonds down, and the pieces settle into each other&apos;s gaps more tightly —
                which can push the weight up by as much as 20–25% over a loosely filled cup. This effect is
                stronger for cut almond forms (sliced, slivered, chopped) than for whole almonds, simply
                because cut pieces have more irregular edges that can nest together when compacted.
              </p>
            </section>

            {/* Whole, Sliced, or Slivered — Can You Substitute One for Another? */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Whole, Sliced, or Slivered — Can You Substitute One for Another?</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Not without adjusting the amount, and not always successfully in terms of texture. If a
                recipe calls for sliced almonds and you only have slivered, swapping by cup measurement is
                closer to correct than swapping by piece count, but you&apos;ll still get a different
                mouthfeel — slivered almonds are thicker and crunchier, while sliced almonds are thinner and
                toast faster. Whole almonds can&apos;t sensibly substitute for either without chopping them
                first. Ground almonds and almond flour are close enough to interchange in many recipes,
                though flour is generally more finely and evenly processed, which matters in delicate baked
                goods like macarons.
              </p>
            </section>

            {/* A Few Things Worth Knowing About Almonds Beyond the Conversion */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Few Things Worth Knowing About Almonds Beyond the Conversion</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {almondFacts.map((item) => (
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
                  "36 g whole almonds = ¼ cup",
                  "72 g whole almonds = ½ cup",
                  "143 g whole almonds = 1 cup",
                  "108 g slivered almonds = 1 cup",
                  "92 g sliced almonds = 1 cup",
                  "96 g almond flour = 1 cup",
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
                There&apos;s no single &quot;grams per cup&quot; answer for almonds — the form matters as
                much as the amount. Whole almonds pack the densest at around 143 g/cup, cut forms like
                sliced and slivered sit noticeably lighter, and ground almonds or almond flour fall
                somewhere in between depending on how finely they&apos;re processed. When a recipe
                specifies a form, use that form&apos;s number rather than a generic almond average, and
                when precision really counts — macarons, financiers, anything where almond flour affects
                structure — weigh rather than scoop.
              </p>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for almonds. Each of these has its own
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
