import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Sugar Grams to Cups Converter | Granulated, Brown & Powdered Sugar",
  description:
    "Convert sugar from grams to cups instantly. Includes granulated sugar, brown sugar, powdered sugar, and raw sugar conversion charts.",
  alternates: { canonical: "/sugar" },
  openGraph: {
    title: "Sugar Grams to Cups Converter",
    description:
      "Find sugar conversion charts for granulated, brown, powdered, and raw sugar in grams and cups.",
    url: "/sugar",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugar Grams to Cups Converter",
    description: "Find sugar conversion charts for granulated, brown, powdered, and raw sugar in grams and cups.",
    images: ["/og-image.jpg"],
  },
};

/* ─── Ingredient data for the multi-type converter tool ────────────── */
const ingredients: Ingredient[] = [
  { name: "Granulated Sugar", slug: "granulated-sugar", gramsPerCup: 200, notes: "Spoon and level" },
  { name: "Brown Sugar (Packed)", slug: "brown-sugar", gramsPerCup: 220, notes: "Packed firmly into the cup" },
  { name: "Powdered Sugar", slug: "powdered-sugar", gramsPerCup: 120, notes: "Sift before measuring" },
  { name: "Raw / Turbinado Sugar", slug: "raw-sugar", gramsPerCup: 250, notes: "Coarser, denser crystals" },
];

/* ─── Hero quick-reference badges ──────────────────────────────────── */
const heroBadges = [
  { label: "Granulated", value: "200 g / cup", icon: "ri-drop-line" },
  { label: "Brown (Packed)", value: "220 g / cup", icon: "ri-honour-line" },
  { label: "Powdered", value: "120 g / cup", icon: "ri-snowy-line" },
  { label: "Raw / Turbinado", value: "250 g / cup", icon: "ri-seedling-line" },
];

/* ─── Grams to Cups by Sugar Type — main comparison table ──────────── */
const sugarTable = [
  { g: "25 g", granulated: "2 Tbsp", brown: "2 Tbsp", powdered: "3 Tbsp", raw: "2 Tbsp" },
  { g: "50 g", granulated: "¼ cup", brown: "¼ cup", powdered: "⅓ cup", raw: "¼ cup" },
  { g: "100 g", granulated: "½ cup", brown: "½ cup", powdered: "¾ cup", raw: "⅓ cup + 2 Tbsp" },
  { g: "150 g", granulated: "¾ cup", brown: "¾ cup", powdered: "1¼ cups", raw: "¾ cup" },
  { g: "200 g", granulated: "1 cup", brown: "1 cup (scant)", powdered: "1⅔ cups", raw: "¾ cup + 3 Tbsp" },
  { g: "250 g", granulated: "1¼ cups", brown: "1⅛ cups", powdered: "2 cups", raw: "1 cup" },
  { g: "300 g", granulated: "1½ cups", brown: "1⅓ cups", powdered: "2½ cups", raw: "1¼ cups" },
  { g: "400 g", granulated: "2 cups", brown: "1¾ cups", powdered: "3⅓ cups", raw: "1⅔ cups" },
  { g: "500 g", granulated: "2½ cups", brown: "2¼ cups", powdered: "4⅛ cups", raw: "2 cups" },
];

/* ─── Other ingredients — internal links to their own converter pages ── */
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

/* ─── JSON-LD structured data — the one real Q&A heading in the article ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should You Weigh Sugar Instead of Measuring by Cup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most everyday cooking — sweetening a sauce, stirring sugar into coffee, a casual batch of cookies — a measuring cup is perfectly fine. Where weighing genuinely pays off is in recipes where sugar does more than add sweetness, such as baking that relies on structure, candy-making, and recipes originally written in grams.",
      },
    },
  ],
};

export default function SugarGramsToCups() {
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
              <i className="ri-drop-line" /> 4 sugar types, one converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Grams Of Sugar To Cups: No-Guesswork Real Time Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              If you&apos;ve ever stood in the kitchen holding a recipe written in grams while your only
              measuring tools are cups, you know the exact moment of hesitation this converter is meant to
              fix. Sugar doesn&apos;t behave like flour or liquid — it packs, it clumps, it sits
              differently in a cup depending on whether it&apos;s white, brown, or powdered. Getting the
              conversion wrong doesn&apos;t ruin a dish outright, but it can throw off texture, sweetness,
              and how well a batter or syrup sets.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another ingredient?{" "}
              <Link href="/" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
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

            {/* Intro + Tool */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <p className="text-sm leading-relaxed text-gray-600">
                This Converter breaks the conversion down type by type, explains why the numbers shift between
                sugars, and gives you a reference you can actually trust while baking — not just a single
                number pulled out of context.
              </p>
              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            {/* The Short Answer */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Short Answer</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                For everyday granulated white sugar, the number to remember is:
              </p>
              <div className="mb-3 rounded-xl p-3 text-sm font-semibold text-gray-800" style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}30` }}>
                1 cup of granulated sugar is equal to200 grams
              </div>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">From there, the math is simple:</p>
              <div className="mb-3 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                Cups = Grams ÷ 200
              </div>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                So if a recipe calls for 350 grams of sugar and you only have a measuring cup on hand,
                you&apos;re looking at 1.75 cups. That formula works well for granulated sugar
                specifically — but it starts to break down the moment you switch to brown or powdered
                sugar, because those pack into a cup very differently.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                For additional sugar measurement guidance:
                {" "}
                <a
                  href="https://www.canr.msu.edu/news/how_to_convert_grams_of_sugars_into_teaspoons"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-medium underline underline-offset-2"
                  style={{ color: ACCENT }}
                >
                  Michigan State University Extension&apos;s sugar conversion guide
                </a>
                .
              </p>

            </section>

            {/* Why Sugar Doesn't Convert Like Flour or Water */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why Sugar Doesn&apos;t Convert Like Flour or Water</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                A cup represents volume, that is, how much space an object occupies, while a gram is used to describe the mass or weight of an object. Conversion between the two units is possible when we know how much of the respective ingredient typically fits in a cup, because the empty space between its particles also affects its volume.
              </p>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Granulated sugar crystals are small, uniform, and free-flowing, so they pack fairly
                consistently — that&apos;s why the 200g/cup figure holds up well across most kitchens. <Link href="/brown-sugar" className="font-semibold transition-colors duration-200 hover:underline" style={{ color: ACCENT }}>
                  Brown sugar
                </Link>
                , on the other hand, is coated in molasses, which makes the grains sticky and
                clumpy. When a recipe says &quot;1 cup packed brown sugar,&quot; it means pressed down
                firmly enough to hold the shape of the cup when turned out — and that packed cup weighs
                noticeably more than a loosely spooned one. Powdered sugar sits at the opposite end:
                it&apos;s ground so fine and aerated that a cup of it weighs far less than a cup of
                granulated sugar, even though the &quot;sweetness&quot; per gram is roughly the same.
              </p>
              <div className="rounded-xl p-3 text-sm text-gray-700" style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}30` }}>
                This is the part most conversion charts skip — the type of sugar matters just as much as
                the amount.
              </div>
            </section>

            {/* Grams to Cups by Sugar Type table */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams to Cups by Sugar Type</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[560px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Granulated</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Brown (Packed)</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Powdered</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Raw/Turbinado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sugarTable.map((row, i) => (
                      <tr key={row.g} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.g}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.granulated}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.brown}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.powdered}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.raw}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                These are working estimates, not laboratory-grade figures — humidity, how tightly the
                sugar was packed, and even the brand can shift the real number by a few grams either way.
                If you&apos;re making something where precision genuinely matters (see below), a scale
                beats any chart.
              </p>
            </section>

            {/* A Closer Look at Each Sugar Type */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Closer Look at Each Sugar Type</h2>

              <h3 className="mb-2 mt-6 text-base font-bold text-gray-900">Granulated (White) Sugar — about 200g per cup</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                This is the sugar most conversion formulas are built around, and for good reason:
                it&apos;s consistent. Spoon it into a cup, level it off with the back of a knife, and
                you&apos;ll be within a few grams of 200 almost every time. This is the one sugar where
                &quot;just use a cup&quot; is genuinely reliable.
              </p>

              <h3 className="mb-2 mt-6 text-base font-bold text-gray-900">Brown Sugar — about 200–220g per cup (packed)</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <Link href="/brown-sugar" className="font-semibold transition-colors duration-200 hover:underline" style={{ color: ACCENT }}>
                  Brown sugar
                </Link> is where most home bakers get tripped up. If a recipe says &quot;packed,&quot;
                it means pressing the sugar into the cup with a spoon until it holds its shape when tipped
                out — light, loosely spooned brown sugar can weigh 30–40 grams less than a properly packed
                cup, which is enough to noticeably change a cookie&apos;s texture. If your brown sugar has
                hardened into a brick, breaking it up before measuring makes a real difference in
                accuracy.
              </p>

              <h3 className="mb-2 mt-6 text-base font-bold text-gray-900">Powdered (Confectioners&apos;) Sugar — about 120g per cup</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Powdered sugar is mostly air by volume. It&apos;s also prone to clumping, especially if
                it&apos;s been sitting in a humid pantry, so sifting before you measure isn&apos;t just a
                nicety — it changes how much sugar actually ends up in your cup. Measuring powdered sugar
                by weight instead of volume is one of the easiest ways to fix inconsistent frosting or
                glaze results.
              </p>

              <h3 className="mb-2 mt-6 text-base font-bold text-gray-900">Raw / Turbinado Sugar — about 250g per cup</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Raw sugar has larger, coarser crystals than granulated sugar, so more empty space sits
                between the grains — but the crystals themselves are denser, which pushes the
                weight-per-cup figure higher than you&apos;d expect. It&apos;s commonly used to top
                muffins or sweeten coffee rather than as a full substitute in baking, since its coarser
                texture doesn&apos;t dissolve as easily in a batter.
              </p>
            </section>

            {/* Should You Weigh Sugar */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Should You Weigh Sugar Instead of Measuring by Cup?</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                For most everyday cooking — sweetening a sauce, stirring sugar into coffee, a casual batch
                of cookies — a measuring cup is perfectly fine. Where weighing genuinely pays off is in
                recipes where sugar does more than add sweetness:
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600">
                {[
                  <><strong className="text-gray-900">Baking that relies on structure</strong> (macarons, meringues, delicate cakes): sugar affects how proteins set and how much moisture is in the batter. A few grams off can change whether a meringue holds its peak.</>,
                  <><strong className="text-gray-900">Candy-making and caramel:</strong> sugar concentration determines the exact temperature at which sugar syrup transitions between stages. Volume inconsistency here can mean the difference between a smooth caramel and a grainy one.</>,
                  <><strong className="text-gray-900">Recipes originally written in grams</strong> (common in European and professional baking sources): converting to cups and back introduces rounding error twice. Weighing the original gram amount skips that entirely.</>,
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                If you bake often, a basic digital kitchen scale is one of the cheaper upgrades that
                noticeably improves consistency — and it removes the guesswork of &quot;packed&quot;
                versus &quot;loose&quot; entirely.
              </p>
            </section>

            {/* Quick Conversion Reference */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Conversion Reference</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">Formula:</p>
              <div className="mb-3 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                Cups = Grams ÷ (grams per cup for that sugar type)
              </div>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>Granulated sugar: divide by <strong className="text-gray-900">200</strong></li>
                <li>Brown sugar (packed): divide by <strong className="text-gray-900">~220</strong></li>
                <li>Powdered sugar: divide by <strong className="text-gray-900">~120</strong></li>
                <li>Raw sugar: divide by <strong className="text-gray-900">~250</strong></li>
              </ul>
            </section>

            {/* Grams and Cups, Defined */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border bg-white p-5" style={{ borderColor: `${ACCENT}20` }}>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Gram (g)</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  A metric unit of mass equal to one-thousandth of a kilogram. It&apos;s the standard
                  weight unit used in most baking recipes outside the US, and increasingly in professional
                  kitchens everywhere because of how precise it is.
                </p>
              </div>
              <div className="rounded-[24px] border bg-white p-5" style={{ borderColor: `${ACCENT}20` }}>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Cup (c)</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  A US customary unit of volume, equal to 16 tablespoons or roughly 236.6 milliliters.
                  It&apos;s convenient and widely used in American home recipes, but because it measures
                  space rather than mass, its accuracy depends heavily on how an ingredient is packed into
                  it.
                </p>
              </div>
            </section>

            {/* The Bottom Line */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                There&apos;s no single &quot;grams to cups&quot; number that works for every kind of sugar
                — treating them all as 200g/cup is the single most common source of baking measurement
                errors. Know which sugar you&apos;re working with, measure it the way the recipe intends
                (packed vs. loose), and reach for a scale when precision actually affects the outcome. For
                everything else, the chart above will get you close enough every time.
              </p>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for sugar. Each of these has its own
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
