import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Baking Powder Grams to Cups Converter",
  description:
    "Convert baking powder from grams to cups and teaspoons accurately. Includes freshness tips, baking powder vs baking soda, and kitchen reference charts.",
  alternates: { canonical: "/baking-powder" },
  openGraph: {
    title: "Baking Powder Grams to Cups Converter",
    description:
      "Convert baking powder from grams to cups and teaspoons accurately with kitchen reference charts.",
    url: "/baking-powder",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baking Powder Grams to Cups Converter",
    description:
      "Convert baking powder from grams to cups and teaspoons accurately with kitchen reference charts.",
    images: ["/og-image.jpg"],
  },
};

/* ─── Ingredient data for the converter tool (single ingredient) ────── */
const ingredients: Ingredient[] = [
  { name: "Baking Powder", slug: "baking-powder", gramsPerCup: 220, notes: "Level, not packed" },
];

/* ─── Hero quick-reference badges ──────────────────────────────────── */
const heroBadges = [
  { label: "1 Tsp", value: "~4.5 g", icon: "ri-drop-line" },
  { label: "1 Tbsp", value: "~14 g", icon: "ri-cup-line" },
  { label: "¼ Cup", value: "~55 g", icon: "ri-scales-3-line" },
  { label: "1 Cup", value: "~220 g", icon: "ri-restaurant-line" },
];

/* ─── Small-Amount Chart ─────────────────────────────────────────────── */
const smallAmountTable = [
  ["⅛ teaspoon", "~0.6 g"],
  ["¼ teaspoon", "~1.2 g"],
  ["½ teaspoon", "~2.4 g"],
  ["1 teaspoon", "~4.5 g"],
  ["1½ teaspoons", "~6.8 g"],
  ["2 teaspoons", "~9 g"],
  ["1 tablespoon", "~14 g"],
  ["2 tablespoons", "~28 g"],
  ["¼ cup", "~55 g"],
  ["½ cup", "~110 g"],
  ["1 cup", "~220 g"],
];

/* ─── Grams to Cups Chart ────────────────────────────────────────────── */
const gramsToCupsTable = [
  ["5 g", "~0.02 cup", "0.36 tbsp"],
  ["10 g", "~0.05 cup", "0.7 tbsp"],
  ["20 g", "~0.09 cup", "1.4 tbsp"],
  ["50 g", "~0.23 cup", "3.6 tbsp"],
  ["100 g", "~0.45 cup", "7.1 tbsp"],
  ["150 g", "~0.68 cup", "10.7 tbsp"],
  ["220 g", "1 cup", "16 tbsp"],
  ["300 g", "~1.36 cups", "21.8 tbsp"],
  ["500 g", "~2.27 cups", "36.4 tbsp"],
];

/* ─── Baking Powder vs. Baking Soda ─────────────────────────────────── */
const bpVsBsTable = [
  { label: "Composition", bp: "Alkali + built-in acid + starch", bs: "Pure alkali (sodium bicarbonate) only" },
  { label: "Needs an acidic ingredient?", bp: "No — it's self-contained", bs: "Yes — buttermilk, yogurt, molasses, brown sugar, etc." },
  { label: "Typical use", bp: "Neutral batters: vanilla cake, pancakes, biscuits", bs: "Batters that already contain an acid" },
  { label: "Grams per cup", bp: "~220 g", bs: "~220–230 g" },
];

/* ─── Trusted sources (curated for authority) ───────────────────────── */
const sources = [
  { name: "Wikipedia — Baking powder", url: "https://en.wikipedia.org/wiki/Baking_powder", note: "Formulation, base/acid/desiccant composition, and reaction mechanism." },
  { name: "Encyclopedia Britannica — Baking powder", url: "https://www.britannica.com/topic/baking-powder", note: "Definition, composition, and leavening behavior." },
  { name: "American Chemical Society — Development of Baking Powder", url: "https://www.acs.org/education/whatischemistry/landmarks/bakingpowder.html", note: "Historical development of baking powder chemistry." },
  { name: "National Institutes of Health (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10001083/", note: "Peer-reviewed research on baking powder and leavening acids in batters." },
  { name: "Healthline — Baking Soda vs. Baking Powder", url: "https://www.healthline.com/nutrition/baking-soda-vs-baking-powder", note: "Practical comparison of when to use each leavening agent." },
  { name: "The Bake School — What is Baking Powder", url: "https://historycambridge.org/innovation/Baking%20Powder.html", note: "Baking-focused explainer, including the fresh-powder fizz test." },
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
  { name: "Vegetable oil", href: "/vegetable-oil" },
];

export default function BakingPowderGramsToCups() {
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
              <i className="ri-restaurant-line" /> Baking powder-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Baking Powder Grams To Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Baking powder is the rare ingredient where the cup measurement barely matters. Almost nobody
              scoops out a cup of it — recipes call for a teaspoon here, a tablespoon there, because baking
              powder is so chemically active that even small amounts do the entire job of lifting a cake
              or muffin. A cup conversion is still useful to have on hand, but the number that actually
              decides whether your baking turns out right is the teaspoon figure.
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
                1 cup of baking powder ≈ 220 grams (commonly cited figures range from about 192–227 g
                depending on brand and formulation — see the note below)
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 220</div>
                <div>Grams = Cups × 220</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                In everyday terms: 1 level teaspoon of baking powder weighs about 4–4.8 grams, and 1
                tablespoon weighs roughly 14–22 grams depending on the brand&apos;s exact formulation. Since
                baking powder is a blend of a few different powdered ingredients (more on that below), its
                density isn&apos;t quite as fixed as a single-substance ingredient like sugar or salt.
              </p>
              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            {/* Why This Ingredient Doesn't Have One Locked-In Number */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why This Ingredient Doesn&apos;t Have One Locked-In Number</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Baking powder isn&apos;t one pure substance — it&apos;s a manufactured mix of an alkaline
                component (usually baking soda), one or more powdered acids, and a starch filler (often
                cornstarch) that keeps the mixture stable and dry until it meets liquid. Because different
                brands use slightly different ratios of these three components, and different particle
                sizes for each, the overall density can shift by brand more than it would for something
                like table salt or flour. This is also why baking powder containers are almost always
                labeled by teaspoon dosage in recipes rather than by weight — teaspoon measurement has
                stayed the practical standard specifically because the powder&apos;s exact density isn&apos;t
                perfectly uniform across brands.
              </p>
            </section>

            {/* Small-Amount Chart */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Small-Amount Chart (Where It Actually Matters)</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Since baking powder is used in teaspoon and tablespoon amounts far more often than cups,
                this is the chart worth bookmarking:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[320px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Amount</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams (approx.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {smallAmountTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

            {/* Baking Powder vs. Baking Soda */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Baking Powder vs. Baking Soda: Not Interchangeable</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                These two live next to each other on the shelf and get confused constantly, but they solve
                different chemistry problems:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[520px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white"></th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Baking Powder</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Baking Soda</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bpVsBsTable.map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.label}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.bp}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.bs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Baking soda is roughly 3–4 times stronger than baking powder by weight, which is why
                recipes never call for the two in equal amounts — swapping one for the other in the same
                quantity either leaves a batter flat (soda without enough acid to activate it) or gives it
                a harsh, metallic, soapy taste (soda used at a baking-powder-sized dose, reacting fully but
                overwhelming the batter). If a recipe uses both together, it&apos;s usually because the
                batter has some acidity that needs neutralizing (that&apos;s the soda&apos;s job) while
                still needing extra lift on top of it (that&apos;s the powder&apos;s job) — dropping either
                one changes both the rise and the flavor.
              </p>
            </section>

            {/* What Happens When the Amount Is Off */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">What Happens When the Amount Is Off</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Because baking powder works in such small doses, the margin for error is smaller than most
                ingredients:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  <><strong className="text-gray-900">Too much:</strong> batters rise fast and hard, often collapsing partway through baking. The crumb turns coarse with large irregular holes, and there&apos;s frequently a faint bitter or metallic aftertaste from the unreacted alkaline residue.</>,
                  <><strong className="text-gray-900">Too little:</strong> baked goods come out flat, dense, and heavy, without the open, tender crumb the recipe was aiming for.</>,
                  <><strong className="text-gray-900">Heaping instead of leveling a spoon:</strong> this is the most common real-world source of over-measuring — a rounded teaspoon can hold noticeably more than a level one, especially since baking powder tends to clump slightly and pile up on a spoon.</>,
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Testing Whether Your Baking Powder Still Works */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Testing Whether Your Baking Powder Still Works</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Baking powder loses potency over time, especially once opened and exposed to humidity — and
                a weak batch will measure out perfectly by weight while still failing to lift anything in
                the oven. A quick freshness check: stir about a teaspoon into a small cup of hot water.
                Fresh baking powder should bubble up immediately and vigorously. If the reaction is weak or
                slow, it&apos;s a sign the powder has lost enough potency that it&apos;s worth replacing
                before it ruins a batch of baking.
              </p>
            </section>

            {/* How to Measure Baking Powder Correctly */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure Baking Powder Correctly</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Stir the container first if the powder looks clumped — humidity can cause small lumps that make a spoonful heavier than it should be.",
                  "Dip the spoon and level it off with a straight edge rather than the back of another spoon, which tends to compress the powder slightly.",
                  "Double-check the label, not just the container shape — baking powder and baking soda often ship in visually similar packaging, and using one where a recipe calls for the other rarely ends well.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quick Reference */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "1 tsp baking powder ≈ 4.5 g",
                  "1 tbsp baking powder ≈ 14 g",
                  "¼ cup baking powder ≈ 55 g",
                  "1 cup baking powder ≈ 220 g",
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
                Baking powder is one of the few ingredients where the cup conversion is mostly a reference
                point rather than something bakers actually use — real recipes live in teaspoons and
                tablespoons, and that&apos;s also where precision matters most, since even a slightly
                heaped spoon can visibly change a cake&apos;s texture. Because baking powder&apos;s exact
                density varies a bit by brand and formulation, treat any grams-per-cup figure (including
                the one here) as a solid working estimate rather than an exact constant, and lean on level
                spoon measurements — or a scale, for the most consistent results — over eyeballing a cup.
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
                      rel="noopener noreferrer"
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
                Grams-to-cups conversion isn&apos;t only useful for baking powder. Each of these has its
                own weight-per-cup because densities differ:
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
