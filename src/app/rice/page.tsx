import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Rice Grams to Cups Converter | Uncooked Rice Guide",
  description:
    "Convert uncooked rice from grams to cups instantly. Includes white rice, brown rice, and common kitchen conversion charts.",
  alternates: { canonical: "/rice" },
  openGraph: {
    title: "Rice Grams to Cups Converter",
    description:
      "Convert uncooked rice from grams to cups instantly with quick reference charts for rice measurements.",
    url: "/rice",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rice Grams to Cups Converter",
    description:
      "Convert uncooked rice from grams to cups instantly with quick reference charts for rice measurements.",
    images: ["/og-image.jpg"],
  },
};

/* ─── Ingredient data for the converter tool ────── */
const ingredients: Ingredient[] = [
  { name: "Uncooked White Rice", slug: "rice", gramsPerCup: 185, notes: "Long/medium-grain, leveled" },
  { name: "Jasmine Rice", slug: "jasmine-rice", gramsPerCup: 190, notes: "1 cup is about 190 g, leveled" },
  { name: "Basmati Rice", slug: "basmati-rice", gramsPerCup: 185, notes: "1 cup is about 185 g, leveled" },
  { name: "Brown Rice", slug: "brown-rice", gramsPerCup: 195, notes: "About 190–195 g per cup, leveled" },
  { name: "Short-Grain / Sushi Rice", slug: "sushi-rice", gramsPerCup: 200, notes: "About 200 g per cup, leveled" },
  { name: "Arborio Rice", slug: "arborio-rice", gramsPerCup: 200, notes: "About 200 g per cup, leveled" },

];

/* ─── Hero quick-reference badges ──────────────────────────────────── */
const heroBadges = [
  { label: "¼ Cup", value: "46 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "93 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "185 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "370 g", icon: "ri-restaurant-line" },
];

/* ─── Grams to Cups Chart (Uncooked White Rice) ─────────────────────── */
const gramsToCupsTable = [
  ["25 g", "⅛ cup", "2 tbsp"],
  ["46 g", "¼ cup", "4 tbsp"],
  ["62 g", "⅓ cup", "5 tbsp"],
  ["93 g", "½ cup", "8 tbsp"],
  ["123 g", "⅔ cup", "10 tbsp"],
  ["139 g", "¾ cup", "12 tbsp"],
  ["185 g", "1 cup", "16 tbsp"],
  ["200 g", "~1⅛ cups", "17 tbsp"],
  ["250 g", "~1⅓ cups", "22 tbsp"],
  ["300 g", "~1⅝ cups", "26 tbsp"],
  ["400 g", "~2⅛ cups", "35 tbsp"],
  ["500 g", "~2⅔ cups", "43 tbsp"],
  ["750 g", "4 cups", "65 tbsp"],
  ["1,000 g", "~5⅜ cups", "86 tbsp"],
];

/* ─── Not All Rice Weighs the Same ──────────────────────────────────── */
const riceTypeTable = [
  { type: "White rice (long/medium-grain)", grams: "~185 g", notes: "The standard reference used throughout this guide" },
  { type: "Jasmine rice", grams: "~190 g", notes: "Slightly softer grain, aromatic" },
  { type: "Basmati rice", grams: "~185 g", notes: "Long, slender grains, similar density to standard white rice" },
  { type: "Brown rice", grams: "~190–195 g", notes: "Retains the bran layer, giving it a bit more weight per cup" },
  { type: "Short-grain / sushi rice", grams: "~200 g", notes: "Rounder, starchier grains pack more tightly" },
  { type: "Arborio rice", grams: "~200 g", notes: "Short and starchy, used for risotto" },
];

/* ─── How Rice Compares to Other Pantry Staples ─────────────────────── */
const comparisonTable = [
  { name: "Uncooked white rice", grams: "185 g", vs: "—" },
  { name: "Quinoa (uncooked)", grams: "~170 g", vs: "-15 g" },
  { name: "Rolled oats", grams: "~90 g", vs: "-95 g" },
  { name: "Dry pasta", grams: "~100 g", vs: "-85 g" },
  { name: "Lentils (dry)", grams: "~200 g", vs: "+15 g" },
  { name: "Chocolate chips", grams: "~170 g", vs: "-15 g" },
  { name: "Cornstarch", grams: "~128 g", vs: "-57 g" },
];

/* ─── Rough Serving Guide ────────────────────────────────────────────── */
const servingTable = [
  ["100 g", "2 servings"],
  ["185 g (1 cup)", "~3.5 servings"],
  ["300 g", "6 servings"],
  ["500 g", "10 servings"],
];

/* ─── Other ingredients — internal links to their own converter pages ── */
const otherIngredients = [
  { name: "All-purpose flour", href: "/flour" },
  { name: "Granulated sugar", href: "/sugar" },
  { name: "Butter", href: "/butter" },
  { name: "Milk", href: "/milk" },
  { name: "Water", href: "/water" },
  { name: "Rolled oats", href: "/oats" },
  { name: "Chocolate chips", href: "/chocolate-chips" },
  { name: "Honey", href: "/honey" },
  { name: "Almonds", href: "/almonds" },
  { name: "Cocoa powder", href: "/cocoa-powder" },
  { name: "Salt", href: "/salt" },
  { name: "Baking powder", href: "/baking-powder" },
  { name: "Vegetable oil", href: "/vegetable-oil" },
];

export default function RiceGramsToCups() {
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
              <i className="ri-restaurant-line" /> Rice-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Rice Grams to Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Rice is one of the few pantry staples where getting the measurement wrong doesn&apos;t just
              throw off a recipe — it can throw off dinner for the whole table. Too much dry rice and
              you&apos;ve got more food than the pot (or the water ratio) can handle; too little and a
              meal meant for four barely covers three. This guide covers how uncooked rice converts
              between grams and cups, why the variety matters, and how to avoid the mix-up that trips up
              most home cooks.
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
                1 cup of uncooked white rice ≈ 185 grams
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 185</div>
                <div>Grams = Cups × 185</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So 300 grams of uncooked rice works out to about 1⅝ cups, and a full 500 grams comes to
                about 2⅔ cups. This is for uncooked rice — once rice cooks, it roughly triples in volume as
                it absorbs water, so a cooked cup and a dry cup are not interchangeable numbers.
              </p>
              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            {/* The Mistake Most People Actually Make */}
            <section
              className="rounded-[24px] border bg-white p-5 sm:p-6"
              style={{ borderColor: `${ACCENT}20` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                The Mistake Most People Actually Make
              </h2>

              <p className="text-sm leading-relaxed text-gray-600">
                Before getting into variety-specific numbers, it&apos;s worth flagging the error that
                causes more kitchen confusion than density ever does: confusing dry rice with cooked rice.
                A recipe that says &quot;2 cups of rice&quot; almost always means 2 cups measured before
                cooking — but plenty of home cooks measure out 2 cups of already-cooked rice by mistake,
                which is a completely different amount of actual grain.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                One cup of uncooked white rice generally makes around 3 cups of cooked rice, although
                the exact yield, water ratio, and cooking time vary by rice variety. If a recipe
                doesn&apos;t specify whether rice is cooked or uncooked, check the recipe&apos;s ingredient
                list and cooking instructions before measuring.
              </p>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                <strong>Reference:</strong>{" "}
                <a
                  href="https://www.usarice.com/thinkrice/how-to/how-to-cook-rice"
                  rel="nofollow"
                  target="_blank"
                  className="font-medium underline underline-offset-2 transition-colors hover:text-[#02B875]"
                >
                  USA Rice — How to Cook Rice
                </a>
              </p>
            </section>

            {/* Grams to Cups Chart */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams to Cups Chart (Uncooked White Rice)</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[420px] text-sm">
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
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row[1]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Not All Rice Weighs the Same */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Not All Rice Weighs the Same</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                185 grams per cup is a solid reference for standard long-grain white rice, but rice is a
                broad category — different varieties are cut, milled, and shaped differently, which shifts
                the number slightly:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[520px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Rice Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {riceTypeTable.map((row, i) => (
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
                The differences look small on paper, but they add up in a full recipe — and more
                importantly, different rice types absorb water differently once cooking starts, so
                swapping jasmine for basmati or brown rice for white changes more than just the dry weight;
                it changes how much liquid the dish needs and how long it takes to cook.
              </p>
            </section>

            {/* Does Packing the Cup Actually Matter for Rice */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Does Packing the Cup Actually Matter for Rice?</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Yes, more than most people assume. Rice grains are small and hard, but they still shift and
                settle depending on how the cup is filled. A gently leveled cup — poured in and scraped
                flat with a knife — lands close to the 185-gram reference. Shake the cup or press the rice
                down, though, and the grains settle into the gaps between each other more tightly, which
                can push that same visual &quot;cup&quot; up toward 220–240 grams. A very loose, unsettled
                fill can drop below 160 grams.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                This is exactly why two people can each measure &quot;1 cup of rice&quot; and end up with
                meaningfully different amounts of actual grain — and why rice cookers, which rely on a
                fixed water-to-rice ratio, can turn out mushy or undercooked when the rice measurement
                isn&apos;t consistent.
              </p>
            </section>

            {/* Rice Cooker Cups */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Rice Cooker Cups Are Not the Same as US Cups</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                If your rice cooker came with its own plastic measuring cup, don&apos;t assume it matches a
                standard US cup — most rice cooker cups hold about 180 mL, which is roughly ¾ of a US
                customary cup (236.6 mL). That works out to around 140 grams of rice rather than 185 grams.
                Using a US measuring cup with a rice cooker&apos;s built-in water-line markings (which are
                calibrated for the cooker&apos;s own cup) will throw off the water ratio and can leave rice
                too wet or too dry. When in doubt, weigh the rice directly and use your cooker&apos;s
                markings only with the cup it came with.
              </p>
            </section>

            {/* How Rice Compares to Other Pantry Staples */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">How Rice Compares to Other Pantry Staples</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[420px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">vs. Rice</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, i) => (
                      <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.name}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.grams}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.vs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                This is a useful gut-check when a recipe swaps rice for another grain or starch — matching
                the cup measurement doesn&apos;t mean matching the actual weight of food going into the
                pot, and that matters most for anything involving a fixed water ratio.
              </p>
            </section>

            {/* How to Measure Rice */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure Rice for a Predictable Result</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Scoop rice into the measuring cup, then level it off with a straight edge — don't shake or tap the cup to settle more rice in, since that's the packing effect described above.",
                  "Use the same rice variety the recipe was written for. A cup of jasmine rice and a cup of brown rice don't behave the same way once water and heat get involved.",
                  "For meal prep or repeat cooking, weigh the rice instead of scooping it. This is especially useful if you're switching between rice types or batch-cooking for the week — a scale keeps the yield consistent in a way a cup measurement alone can't guarantee.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Rough Serving Guide */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Rough Serving Guide</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                As a general planning reference, about 50 grams of dry rice per person is a typical
                side-dish portion (this varies with appetite and whether rice is the main component of the
                meal):
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[280px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Dry Rice</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Approx. Servings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servingTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
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
                  "46 g rice = ¼ cup",
                  "93 g rice = ½ cup",
                  "185 g rice = 1 cup",
                  "370 g rice = 2 cups",
                  "11.6 g rice ≈ 1 tablespoon",
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
                185 grams per cup works well as a baseline for standard uncooked white rice, but the real
                accuracy depends on two things most charts skip: making sure you&apos;re measuring dry rice
                (not cooked), and accounting for how firmly the cup was filled. For everyday cooking, a
                level, unpacked cup gets you close enough. For rice cookers, batch meal prep, or dishes
                where the water ratio is unforgiving — risotto, sushi rice, paella — weighing the rice is
                the more dependable habit to build.
              </p>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for rice. Each of these has its own
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
