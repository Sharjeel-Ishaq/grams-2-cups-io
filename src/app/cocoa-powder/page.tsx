import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Cocoa Powder Grams to Cups Converter",
  description:
    "Convert cocoa powder from grams to cups instantly. Includes unsweetened cocoa, Dutch process, and spoon-and-level measuring guidance.",
  alternates: { canonical: "/cocoa-powder" },
  openGraph: {
    title: "Cocoa Powder Grams to Cups Converter",
    description:
      "Convert cocoa powder from grams to cups instantly with spoon-and-level measuring guidance.",
    url: "/cocoa-powder",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cocoa Powder Grams to Cups Converter",
    description:
      "Convert cocoa powder from grams to cups instantly with spoon-and-level measuring guidance.",
    images: ["/og-image.jpg"],
  },
};

/* ─── Ingredient data for the converter tool (single ingredient) ────── */
const ingredients: Ingredient[] = [
  { name: "Unsweetened Cocoa Powder", slug: "cocoa-powder", gramsPerCup: 85, notes: "US customary cup" },
];

/* ─── Hero quick-reference badges ──────────────────────────────────── */
const heroBadges = [
  { label: "¼ Cup", value: "21 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "42.5 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "85 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "170 g", icon: "ri-restaurant-line" },
];

/* ─── Grams to Cups Chart ─────────────────────────────────────────────── */
const gramsToCupsTable = [
  ["5 g", "~0.06 cup", "0.18 oz"],
  ["10 g", "~0.12 cup", "0.35 oz"],
  ["21 g", "¼ cup", "0.75 oz"],
  ["30 g", "~0.35 cup", "1.06 oz"],
  ["42.5 g", "½ cup", "1.5 oz"],
  ["50 g", "~0.58 cup", "1.76 oz"],
  ["64 g", "¾ cup", "2.25 oz"],
  ["75 g", "~0.87 cup", "2.65 oz"],
  ["85 g", "1 cup", "3 oz"],
  ["100 g", "~1.18 cups", "3.53 oz"],
  ["150 g", "~1.76 cups", "5.29 oz"],
  ["200 g", "~2.35 cups", "7.05 oz"],
  ["250 g", "~2.94 cups", "8.82 oz"],
  ["500 g", "~5.88 cups", "17.6 oz"],
];

/* ─── Natural vs. Dutch-Process Cocoa ────────────────────────────────── */
const cocoaTypeTable = [
  { type: "Natural cocoa", treatment: "Untreated, naturally acidic", flavor: "Sharp, bold, slightly bitter", chemistry: "Reacts with baking soda as the leavener" },
  { type: "Dutch-process (alkalized)", treatment: "Treated with an alkali to neutralize acidity", flavor: "Smoother, milder, rounder", chemistry: "Needs baking powder instead, since it won't react with soda" },
];

/* ─── Does Packing the Cup Really Matter Here? — tips ────────────────── */
const packingTips = [
  "Sift the cocoa powder first if it's been stored a while or looks clumpy.",
  "Spoon it into the measuring cup rather than scooping the cup through the container.",
  "Level the top with a straight edge — don't tap or shake the cup to settle more in.",
];

/* ─── Small-Amount Conversions (Tablespoons and Teaspoons) ───────────── */
const smallAmountsTable = [
  ["1 teaspoon", "~2.5 g"],
  ["1 tablespoon", "~7 g"],
  ["2 tablespoons", "~14 g"],
  ["3 tablespoons", "~21 g"],
  ["¼ cup (4 tbsp)", "~21 g"],
];

/* ─── Cocoa Powder in Baking: A Few Things Worth Knowing ─────────────── */
const bakingNotes = [
  "Cocoa powder often gets sifted together with flour, since both are fine dry ingredients and sifting helps avoid pockets of unmixed cocoa in the finished batter.",
  "Blooming cocoa in hot liquid intensifies its flavor. Stirring cocoa powder into a small amount of boiling water (in place of some of the recipe's liquid) before adding it to a batter helps release more of its chocolate flavor than adding it dry.",
  "Recipes with cocoa often call for a bit more fat or leavening than a plain cake recipe, since cocoa powder has a drying and slightly toughening effect on batter that other ingredients need to counterbalance.",
  "The two cocoa types aren't just a flavor choice — as covered above, using the wrong one against a recipe's specified leavener (soda vs. powder) can visibly affect how well a cake rises.",
];

/* ─── Does Cup Size Change the Number? ───────────────────────────────── */
const cupStandardTable = [
  { standard: "US Customary Cup", volume: "236.588 mL", weight: "85 g" },
  { standard: "US Legal Cup", volume: "240 mL", weight: "~86 g" },
  { standard: "Metric Cup", volume: "250 mL", weight: "~90 g" },
  { standard: "Imperial Cup", volume: "284.131 mL", weight: "~102 g" },
];

/* ─── Other ingredients — internal links to their own converter pages ── */
const otherIngredients = [
  { name: "Whole Milk", href: "/milk" },
  { name: "Water", href: "/water" },
  { name: "Honey", href: "/honey" },
  { name: "Rice", href: "/rice" },
  { name: "Chocolate chips", href: "/chocolate-chips" },
  { name: "Almonds", href: "/almonds" },
  { name: "All-purpose flour", href: "/flour" },
  { name: "Granulated sugar", href: "/sugar" },
  { name: "Butter", href: "/butter" },
  { name: "Rolled oats", href: "/oats" },
  { name: "Salt", href: "/salt" },
  { name: "Baking powder", href: "/baking-powder" },
  { name: "Vegetable oil", href: "/vegetable-oil" },
];

export default function CocoaPowderGramsToCups() {
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
              <i className="ri-drop-line" /> Cocoa powder-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Cocoa Powder Grams To Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Cocoa powder looks like it should behave like flour — both are fine, dry, and scoopable — but
              it&apos;s actually one of the lightest ingredients in a typical baking aisle. A cup of it
              holds surprisingly little weight, and how you spoon it in can shift that number more than it
              would for almost any other dry ingredient.
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
                1 cup of unsweetened cocoa powder ≈ 85–86 grams
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 85</div>
                <div>Grams = Cups × 85</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So 100 grams of cocoa powder comes out to a bit over a cup (~1.18 cups), and 250 grams is
                close to 3 cups. For comparison, a cup of all-purpose flour weighs about 125 grams — cocoa
                powder is noticeably lighter for the same volume, mostly because it&apos;s so finely milled
                that it traps a lot of air between particles.
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

            {/* Why Cocoa Powder Is So Light for Its Volume */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why Cocoa Powder Is So Light for Its Volume</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Cocoa powder starts as chocolate liquor — the ground, liquefied paste made from roasted
                cacao beans — which then has most of its fat (cocoa butter) pressed out, leaving behind dry
                cocoa solids that get milled into a fine powder. What&apos;s left is an extremely fine,
                low-density powder with a huge amount of surface area, which means a lot of air gets trapped
                between particles when it&apos;s spooned into a cup. That&apos;s the same basic reason
                powdered sugar and cornstarch also come in lighter than flour — the finer and drier the
                particle, the more it behaves like a cloud rather than a solid fill.
              </p>
            </section>

            {/* Natural vs. Dutch-Process Cocoa */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Natural vs. Dutch-Process Cocoa: Does It Change the Weight?</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Both types are close enough in weight that you can use the same 85g/cup figure for either
                without meaningfully affecting a recipe&apos;s measurements — but they are not
                interchangeable in how they behave chemically, which matters more for baking than the gram
                difference does:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[680px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Treatment</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Flavor</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Baking Chemistry</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cocoaTypeTable.map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.type}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.treatment}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.flavor}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.chemistry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                This distinction trips up more home bakers than the weight conversion does. If a recipe was
                developed with natural cocoa and baking soda, swapping in Dutch-process cocoa removes the
                acid the recipe was counting on to help the batter rise — the cake can end up denser or
                flatter than intended. When a recipe doesn&apos;t specify which type, it&apos;s worth
                checking the ingredient list of your cocoa tin; most say &quot;natural&quot; or
                &quot;processed with alkali&quot; somewhere on the label.
              </p>
            </section>

            {/* Does Packing the Cup Really Matter Here? */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Does Packing the Cup Really Matter Here?</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Yes — arguably more than it does for flour, because cocoa powder clumps and compresses
                easily. A cup that&apos;s been sifted and spooned in loosely can weigh noticeably less than
                one where the powder was scooped directly from the container and packed down by the
                scooping motion itself. Cocoa that&apos;s been sitting in a humid kitchen for a while is
                especially prone to this, since moisture encourages the fine particles to stick together
                into small clumps rather than sitting loose and fluffy.
              </p>
              <p className="mb-3 text-sm font-semibold text-gray-800">For a consistent result:</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {packingTips.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Small-Amount Conversions (Tablespoons and Teaspoons) */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Small-Amount Conversions (Tablespoons and Teaspoons)</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Cocoa powder is often used in small quantities — a spoonful in a smoothie, a dusting on top
                of a dessert — so the full-cup figure isn&apos;t always the most useful reference:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[280px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Amount</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams (approx.)</th>
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

            {/* Cocoa Powder in Baking: A Few Things Worth Knowing */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Cocoa Powder in Baking: A Few Things Worth Knowing</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {bakingNotes.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Does Cup Size Change the Number? */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Does Cup Size Change the Number?</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Slightly — cocoa powder&apos;s low density means the gap between cup standards is
                proportionally more noticeable than it is for heavier ingredients:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[480px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cup Standard</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Volume</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cocoa Powder Weight</th>
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
                  "21 g cocoa powder = ¼ cup",
                  "42.5 g cocoa powder = ½ cup",
                  "85 g cocoa powder = 1 cup",
                  "170 g cocoa powder = 2 cups",
                  "7 g cocoa powder ≈ 1 tablespoon",
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
                85 grams per cup is a reliable reference for unsweetened cocoa powder, whether natural or
                Dutch-process — the bigger thing to get right isn&apos;t the weight, it&apos;s matching the
                type of cocoa to the leavening agent a recipe expects. Because cocoa powder is so light and
                prone to clumping, it&apos;s also one of the ingredients where a kitchen scale earns its
                keep fastest: a scooped, packed cup can run noticeably heavier than a sifted, spooned one,
                and in a recipe that depends on the right cocoa-to-flour ratio, that difference is enough to
                change the texture of the final bake.
              </p>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for cocoa powder. Each of these has its own
                weight-per-cup because densities differ:
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {otherIngredients.map((ing) => (
                  <Link
                    key={ing.href}
                    href={ing.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-current hover:text-[#02B875]"
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
