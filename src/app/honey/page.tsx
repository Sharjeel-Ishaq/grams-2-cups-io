import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Honey Grams to Cups Converter | Sticky Sweetener Guide",
  description:
    "Convert honey from grams to cups instantly. Includes tablespoons, teaspoons, cup standards, and practical tips for measuring sticky honey accurately.",
  alternates: { canonical: "/honey" },
  openGraph: {
    title: "Honey Grams to Cups Converter",
    description:
      "Convert honey from grams to cups instantly with tablespoon and cup reference charts.",
    url: "/honey",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Honey Grams to Cups Converter",
    description:
      "Convert honey from grams to cups instantly with tablespoon and cup reference charts.",
    images: ["/og-image.jpg"],
  },
};

const ingredients: Ingredient[] = [
  { name: "Honey", slug: "honey", gramsPerCup: 340, notes: "US customary cup" },
];

const heroBadges = [
  { label: "¼ Cup", value: "85 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "170 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "340 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "680 g", icon: "ri-restaurant-line" },
];

const gramsToCupsTable = [
  ["10 g", "0.03 cup", "0.47 tbsp", "1.4 tsp", "—"],
  ["25 g", "0.07 cup", "1.18 tbsp", "3.5 tsp", "—"],
  ["50 g", "0.15 cup", "2.35 tbsp", "7.1 tsp", "~⅛ cup"],
  ["75 g", "0.22 cup", "3.53 tbsp", "10.6 tsp", "~¼ cup"],
  ["85 g", "0.25 cup", "4 tbsp", "12 tsp", "¼ cup"],
  ["100 g", "0.29 cup", "4.71 tbsp", "14.1 tsp", "~⅓ cup"],
  ["125 g", "0.37 cup", "5.88 tbsp", "17.6 tsp", "~⅜ cup"],
  ["150 g", "0.44 cup", "7.06 tbsp", "21.2 tsp", "~½ cup"],
  ["170 g", "0.50 cup", "8 tbsp", "24 tsp", "½ cup"],
  ["200 g", "0.59 cup", "9.41 tbsp", "28.2 tsp", "~⅝ cup"],
  ["250 g", "0.74 cup", "11.76 tbsp", "35.3 tsp", "~¾ cup"],
  ["255 g", "0.75 cup", "12 tbsp", "36 tsp", "¾ cup"],
  ["300 g", "0.88 cup", "14.12 tbsp", "42.4 tsp", "~⅞ cup"],
  ["340 g", "1 cup", "16 tbsp", "48 tsp", "1 cup"],
  ["500 g", "1.47 cups", "23.53 tbsp", "70.6 tsp", "~1½ cups"],
  ["750 g", "2.21 cups", "35.29 tbsp", "105.9 tsp", "~2¼ cups"],
  ["1,000 g", "2.94 cups", "47.06 tbsp", "141.2 tsp", "~3 cups"],
];

const sweetenerTable = [
  { sweetener: "Honey", grams: "~340 g" },
  { sweetener: "Molasses", grams: "~328 g" },
  { sweetener: "Maple syrup", grams: "~322 g" },
  { sweetener: "Packed brown sugar", grams: "~220 g" },
  { sweetener: "Granulated sugar", grams: "~200 g" },
  { sweetener: "Powdered sugar", grams: "~120 g" },
];

const densityFactors = [
  {
    title: "Temperature",
    text: "warm honey flows more easily and settles into a cup with less trapped air; cold, thick honey can trap tiny air bubbles as it's poured, which has a small effect on volume.",
  },
  {
    title: "Brand and floral source",
    text: "different honeys have slightly different moisture content and sugar composition, which shifts density by a small amount from jar to jar.",
  },
  {
    title: "Crystallization",
    text: "honey that has partially crystallized (common in raw, unfiltered honey) takes up space differently than fully liquid honey until it's gently warmed back to a pourable state.",
  },
];

const siteDifferenceReasons = [
  {
    title: "Cup size assumptions.",
    text: "A US customary cup (236.6 mL) and a metric cup (250 mL) aren't the same volume, so a site using one versus the other will land on a different grams-per-cup figure.",
  },
  {
    title: "Density reference value.",
    text: "Some sources use 340 g/cup, others use figures closer to 336 g or 345 g, depending on which honey sample or reference they built the chart from.",
  },
  {
    title: "Rounding method.",
    text: "0.294 cups might get rounded to 0.29 by one calculator, 0.3 by another, and displayed as \"about ⅓ cup\" by a third — all technically defensible, just rounded differently.",
  },
];

const cupStandardTable = [
  { standard: "US Customary Cup", volume: "236.588 mL", weight: "~340 g" },
  { standard: "US Legal Cup", volume: "240 mL", weight: "~345 g" },
  { standard: "Metric Cup", volume: "250 mL", weight: "~359 g" },
  { standard: "Imperial Cup", volume: "284.131 mL", weight: "~408 g" },
  { standard: "Japanese Cup", volume: "200 mL", weight: "~287 g" },
];

const measuringSteps = [
  "Place a bowl or container directly on a kitchen scale.",
  "Zero out (tare) the scale so it reads 0 with the empty bowl on it.",
  "Pour honey directly into the bowl until the scale shows your target weight.",
];

const otherIngredients = [
  { name: "Whole Milk", href: "/milk" },
  { name: "Water", href: "/water" },
  { name: "All-purpose flour", href: "/flour" },
  { name: "Granulated sugar", href: "/sugar" },
  { name: "Butter", href: "/butter" },
  { name: "Rolled oats", href: "/oats" },
  { name: "Rice", href: "/rice" },
  { name: "Chocolate chips", href: "/chocolate-chips" },
  { name: "Almonds", href: "/almonds" },
  { name: "Cocoa powder", href: "/cocoa-powder" },
  { name: "Salt", href: "/salt" },
  { name: "Baking powder", href: "/baking-powder" },
  { name: "Vegetable oil", href: "/vegetable-oil" },
];

export default function HoneyGramsToCups() {
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
              <i className="ri-drop-line" /> Honey-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Honey Grams To Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Honey behaves differently from almost everything else in a kitchen conversion chart. It&apos;s
              not a dry ingredient that can be packed or fluffed, and it&apos;s not a simple liquid like
              water either — it&apos;s thick, slow-moving, and clings to whatever it touches. That
              combination is exactly why honey deserves its own conversion logic instead of borrowing
              sugar&apos;s or water&apos;s numbers.
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
              <div
                className="mb-3 rounded-xl p-3 text-sm font-semibold text-gray-800"
                style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}30` }}
              >
                1 US cup of honey ≈ 340 grams
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 340</div>
                <div>Grams = Cups × 340</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So 200 grams of honey works out to about 0.59 cups, and a full 500 grams comes to roughly
                1.47 cups. Because honey is a liquid, this ratio holds up more consistently than
                dry-ingredient conversions do — there&apos;s no packing or sifting variable to account for.
              </p>
              
            </section>
            <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>

            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams to Cups (with Tablespoons and Teaspoons)</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Honey is often used in small amounts — a drizzle here, a tablespoon there — so a bare cup
                figure isn&apos;t always the most useful unit. Here&apos;s the same conversion broken down
                further, since 1 cup of honey equals 16 tablespoons, or 48 teaspoons:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[640px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Tablespoons</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Teaspoons</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Nearest Fraction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gramsToCupsTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[2]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[3]}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                A quick note on the fractions column: these are rounded to the nearest common kitchen
                fraction for convenience, not exact matches. 100 grams is closer to ⅓ cup than any other
                simple fraction, but it isn&apos;t ⅓ cup exactly — treat the fraction as a rounded shortcut,
                not a precise figure.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why 340 Grams, Specifically?</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Honey is denser than water because it&apos;s mostly concentrated sugar (fructose and
                glucose) with a small amount of water mixed in — typically only around 17-18% water by
                weight. Water alone comes in at about 237 grams per cup, so honey&apos;s extra sugar
                content pushes that same cup up to roughly 340 grams — about 40% heavier than an equal
                volume of water.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                This is also why the &quot;1 cup honey = 1 cup sugar&quot; swap that some recipes casually
                suggest isn&apos;t really accurate by weight. A cup of granulated sugar weighs about 200
                grams, while a cup of honey weighs about 340 grams — nearly 70% more in the same space.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">How Honey Compares to Other Sweeteners</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[320px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Sweetener</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per US Cup</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sweetenerTable.map((row, i) => (
                      <tr key={row.sweetener} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.sweetener}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.grams}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                A word of caution on substitutions: matching the cup or gram amount isn&apos;t the same as
                matching the recipe. Swapping honey for sugar (or the reverse) changes more than just
                weight — honey adds moisture, acidity, and a different sweetness intensity than granulated
                sugar, which can affect browning, texture, and how much other liquid the recipe needs.
                Volume or weight conversion tells you how much to use by measure; it doesn&apos;t guarantee
                the recipe will turn out the same.
              </p>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Does Honey&apos;s Density Really Change With How You Measure It?</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Some conversion charts claim that honey can weigh dramatically more or less per cup
                depending on whether it&apos;s &quot;packed&quot; or &quot;poured loosely&quot; — sometimes
                citing swings as large as 289 grams to 442 grams for the same cup. That claim doesn&apos;t
                hold up well for a liquid. Packing and settling are relevant for dry, granular ingredients
                like flour or brown sugar, where air pockets between particles can be pressed out. Honey is
                a viscous liquid — it doesn&apos;t trap air between particles the way a powder does, so it
                doesn&apos;t compress the same way.
              </p>
              <p className="mb-3 text-sm font-semibold text-gray-800">What can shift honey&apos;s measured weight slightly:</p>
              <div className="space-y-3">
                {densityFactors.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border bg-white p-4"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <i className="ri-checkbox-circle-fill flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                      {item.title}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                None of these push the number anywhere close to a 289–442 gram range — that kind of spread
                belongs to dry ingredients, not honey.
              </p>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why Different Sites Give Slightly Different Honey Conversions</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                If you&apos;ve compared honey conversions across a few different websites and noticed the
                numbers don&apos;t quite match, it usually comes down to one of three things:
              </p>
              <div className="space-y-3">
                {siteDifferenceReasons.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border bg-white p-4"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <i className="ri-checkbox-circle-fill flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                      {item.title}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                None of these differences are large enough to ruin a recipe, but it explains why you
                won&apos;t find one universally &quot;correct&quot; number down to the decimal.
              </p>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Cup Size Comparison</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Honey&apos;s grams-per-cup figure shifts depending on which cup standard is being used,
                since it&apos;s the container volume — not the honey — that changes:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[480px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cup Standard</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Volume</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Honey Weight</th>
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
                If a recipe comes from outside the US, checking which cup standard it&apos;s written in
                matters more for honey than it does for lighter ingredients, since the weight difference
                compounds with honey&apos;s higher density.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Best Way to Measure Honey</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Honey&apos;s stickiness is the real practical challenge, not its density. The method that
                wastes the least honey and gives the most consistent result:
              </p>
              <ol className="mb-4 space-y-2 text-sm text-gray-600">
                {measuringSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span
                      className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="text-sm leading-relaxed text-gray-600">
                This skips the measuring cup entirely, which means less honey left clinging to the sides of
                a cup, less cleanup, and a more repeatable result than trying to read a sticky, slow-settling
                liquid against a fill line. If you don&apos;t have a scale, lightly coating the measuring cup
                with a bit of oil or nonstick spray beforehand helps honey slide out cleanly rather than
                leaving residue behind — a trick that also keeps your poured amount closer to accurate.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Note on Your Own Honey</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Because honey&apos;s density varies slightly by brand, moisture content, and floral source,
                340 grams per cup is a solid reference average rather than a fixed universal constant. <a
                  href="https://www.webstaurantstore.com/guide/685/types-of-honey.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-medium underline underline-offset-2 transition-colors hover:text-[#02B875]"
                  style={{ color: ACCENT }}
                >
                  Different types of honey
                </a> can also vary in flavor, color, and characteristics depending on their floral source. If
                your jar&apos;s label or a batch-specific data sheet lists a different grams-per-cup figure,
                use the jar-specific value for that recipe of the same batch. The difference is small enough
                to matter mostly for precision work, not for casual kitchen use.
              </p>
            </section>

            {/* Quick Reference */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="mb-4 space-y-1.5 text-sm text-gray-600">
                {[
                  "85 g honey = ¼ cup",
                  "170 g honey = ½ cup",
                  "255 g honey = ¾ cup",
                  "340 g honey = 1 cup",
                  "21 g honey ≈ 1 tablespoon",
                  "7 g honey ≈ 1 teaspoon",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                All conversions here are approximate. Honey&apos;s exact weight per cup can vary a little by
                brand and temperature — for recipes where precision genuinely matters, weighing honey
                directly is the most reliable approach.
              </p>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for honey. Each of these has its own
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
