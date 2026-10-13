import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "500 Grams to Cups — Full Ingredient Conversion Chart",
  description: "How many cups is 500 grams? It depends on the ingredient. A complete chart covering flour, sugar, butter, honey, and 90+ other ingredients across 9 categories.",
  alternates: { canonical: "/500-grams-to-cups" },
  openGraph: {
    title: "500 Grams to Cups — Full Ingredient Conversion Chart",
    description: "500 grams is about 4⅙ cups of flour, 2½ cups of sugar, or 2¼ cups of butter — see the full chart.",
    url: "/500-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "500 Grams to Cups — Full Ingredient Conversion Chart",
    description: "How many cups is 500 grams? It depends on the ingredient — see the full chart.",
    images: ["/og-image.jpg"],
  },
};

type Row = { name: string; href?: string; cups: string; tbsp: string; tsp?: string; gpc?: string };

type IngredientGroup = { id: string; title: string; rows: Row[] };

const ingredients: Ingredient[] = [
  { name: "All-Purpose Flour", slug: "flour", gramsPerCup: 120, notes: "Spoon and level" },
  { name: "Granulated Sugar", slug: "sugar", gramsPerCup: 200, notes: "Use level cups" },
  { name: "Brown Sugar", slug: "brown-sugar", gramsPerCup: 220, notes: "Pack firmly" },
  { name: "Butter", slug: "butter", gramsPerCup: 227, notes: "Standard butter" },
  { name: "Vegetable Oil", slug: "vegetable-oil", gramsPerCup: 218, notes: "Approximate density" },
  { name: "Milk", slug: "milk", gramsPerCup: 245, notes: "Whole milk" },
  { name: "Water", slug: "water", gramsPerCup: 236, notes: "US customary cup" },
  { name: "Honey", slug: "honey", gramsPerCup: 340, notes: "Dense liquid" },
  { name: "Rolled Oats", slug: "oats", gramsPerCup: 90, notes: "Regular rolled oats" },
  { name: "White Rice", slug: "rice", gramsPerCup: 185, notes: "Uncooked" },
  { name: "Cocoa Powder", slug: "cocoa-powder", gramsPerCup: 86, notes: "Unsweetened" },
  { name: "Table Salt", slug: "salt", gramsPerCup: 288, notes: "Fine crystals" },
];

const mainRows: Row[] = [
  { name: "All-purpose flour", href: "/flour", cups: "~4⅙ cups", tbsp: "66.7 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "2½ cups", tbsp: "40 tbsp" },
  { name: "Powdered sugar", href: "/powdered-sugar", cups: "~4⅙ cups", tbsp: "66.7 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "~2¼ cups", tbsp: "36.4 tbsp" },
  { name: "Butter", href: "/butter", cups: "~2¼ cups", tbsp: "35.2 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~2¼ cups", tbsp: "36.7 tbsp" },
  { name: "Milk", href: "/milk", cups: "~2⅛ cups", tbsp: "33.8 tbsp" },
  { name: "Water", href: "/water", cups: "~2⅛ cups", tbsp: "33.8 tbsp" },
  { name: "Honey", href: "/honey", cups: "~1½ cups", tbsp: "23.5 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~2¾ cups", tbsp: "43.2 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "~5½ cups", tbsp: "88.9 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "~5⅞ cups", tbsp: "94.1 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "~3 cups (scant)", tbsp: "47.1 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~3½ cups", tbsp: "55.9 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~1¾ cups", tbsp: "27.6 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "~2¼ cups", tbsp: "36.4 tbsp" },
];

const categories: IngredientGroup[] = [
  { id: "flours", title: "Flours", rows: [
    { name: "All-purpose flour", href: "/flour", cups: "4.000 cups", tbsp: "64.0", tsp: "192.0", gpc: "125" },
    { name: "Bread flour", cups: "3.937 cups", tbsp: "63.0", tsp: "189.0", gpc: "127" },
    { name: "Cake flour", cups: "4.386 cups", tbsp: "70.2", tsp: "210.5", gpc: "114" },
    { name: "Whole wheat flour", cups: "4.167 cups", tbsp: "66.7", tsp: "200.0", gpc: "120" },
    { name: "Almond flour", cups: "5.208 cups", tbsp: "83.3", tsp: "250.0", gpc: "96" },
    { name: "Coconut flour", cups: "3.906 cups", tbsp: "62.5", tsp: "187.5", gpc: "128" },
  ]},
  { id: "sugars", title: "Sugars and Sweeteners", rows: [
    { name: "Granulated sugar", href: "/sugar", cups: "2.500 cups", tbsp: "40.0", tsp: "120.0", gpc: "200" },
    { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "2.273 cups", tbsp: "36.4", tsp: "109.1", gpc: "220" },
    { name: "Powdered sugar", href: "/powdered-sugar", cups: "4.167 cups", tbsp: "66.7", tsp: "200.0", gpc: "120" },
    { name: "Honey", href: "/honey", cups: "1.471 cups", tbsp: "23.5", tsp: "70.6", gpc: "340" },
    { name: "Maple syrup", cups: "1.553 cups", tbsp: "24.8", tsp: "74.5", gpc: "322" },
    { name: "Molasses", cups: "1.524 cups", tbsp: "24.4", tsp: "73.2", gpc: "328" },
  ]},
  { id: "fats", title: "Butter, Oils and Fats", rows: [
    { name: "Butter", href: "/butter", cups: "2.203 cups", tbsp: "35.2", tsp: "105.7", gpc: "227" },
    { name: "Shortening", cups: "2.439 cups", tbsp: "39.0", tsp: "117.1", gpc: "205" },
    { name: "Vegetable oil", href: "/vegetable-oil", cups: "2.294 cups", tbsp: "36.7", tsp: "110.1", gpc: "218" },
    { name: "Olive oil", cups: "2.315 cups", tbsp: "37.0", tsp: "111.1", gpc: "216" },
    { name: "Coconut oil", cups: "2.294 cups", tbsp: "36.7", tsp: "110.1", gpc: "218" },
  ]},
  { id: "dairy", title: "Dairy and Liquids", rows: [
    { name: "Milk", href: "/milk", cups: "2.041 cups", tbsp: "32.7", tsp: "98.0", gpc: "245" },
    { name: "Heavy cream", cups: "2.101 cups", tbsp: "33.6", tsp: "100.8", gpc: "238" },
    { name: "Yogurt", cups: "2.041 cups", tbsp: "32.7", tsp: "98.0", gpc: "245" },
    { name: "Cream cheese", cups: "2.155 cups", tbsp: "34.5", tsp: "103.4", gpc: "232" },
    { name: "Condensed milk", cups: "1.634 cups", tbsp: "26.1", tsp: "78.4", gpc: "306" },
  ]},
  { id: "grains", title: "Rice, Grains and Pasta", rows: [
    { name: "Uncooked rice", href: "/rice", cups: "2.703 cups", tbsp: "43.2", tsp: "129.7", gpc: "185" },
    { name: "Rolled oats", href: "/oats", cups: "5.556 cups", tbsp: "88.9", tsp: "266.7", gpc: "90" },
    { name: "Quinoa", cups: "2.941 cups", tbsp: "47.1", tsp: "141.2", gpc: "170" },
    { name: "Couscous", cups: "2.890 cups", tbsp: "46.2", tsp: "138.7", gpc: "173" },
    { name: "Dry pasta", cups: "5.000 cups", tbsp: "80.0", tsp: "240.0", gpc: "100" },
  ]},
  { id: "nuts", title: "Nuts and Seeds", rows: [
    { name: "Whole almonds", href: "/almonds", cups: "3.497 cups", tbsp: "55.9", tsp: "167.8", gpc: "143" },
    { name: "Walnuts (chopped)", cups: "4.167 cups", tbsp: "66.7", tsp: "200.0", gpc: "120" },
    { name: "Cashews", cups: "3.650 cups", tbsp: "58.4", tsp: "175.2", gpc: "137" },
    { name: "Peanut butter", cups: "1.938 cups", tbsp: "31.0", tsp: "93.0", gpc: "258" },
    { name: "Sesame seeds", cups: "3.472 cups", tbsp: "55.6", tsp: "166.7", gpc: "144" },
  ]},
  { id: "baking-staples", title: "Baking Staples", rows: [
    { name: "Cocoa powder", href: "/cocoa-powder", cups: "5.814 cups", tbsp: "93.0", tsp: "279.1", gpc: "86" },
    { name: "Chocolate chips", href: "/chocolate-chips", cups: "2.941 cups", tbsp: "47.1", tsp: "141.2", gpc: "170" },
    { name: "Cornstarch", cups: "3.906 cups", tbsp: "62.5", tsp: "187.5", gpc: "128" },
    { name: "Breadcrumbs", cups: "4.630 cups", tbsp: "74.1", tsp: "222.2", gpc: "108" },
    { name: "Baking powder", href: "/baking-powder", cups: "2.273 cups", tbsp: "36.4", tsp: "109.1", gpc: "220" },
    { name: "Salt", href: "/salt", cups: "1.736 cups", tbsp: "27.8", tsp: "83.3", gpc: "288" },
  ]},
  { id: "cheese", title: "Cheese", rows: [
    { name: "Parmesan (grated)", cups: "5.000 cups", tbsp: "80.0", tsp: "240.0", gpc: "100" },
    { name: "Cheddar (shredded)", cups: "4.425 cups", tbsp: "70.8", tsp: "212.4", gpc: "113" },
    { name: "Mozzarella (shredded)", cups: "4.464 cups", tbsp: "71.4", tsp: "214.3", gpc: "112" },
    { name: "Feta (crumbled)", cups: "3.333 cups", tbsp: "53.3", tsp: "160.0", gpc: "150" },
  ]},
];

function MainTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[420px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
            <th className="px-4 py-3 text-left font-semibold text-white">500g in Cups</th>
            <th className="px-4 py-3 text-left font-semibold text-white">Tablespoons</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.name} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
              <td className="px-4 py-2.5 font-medium text-gray-800">
                {row.href ? (
                  <Link href={row.href} className="hover:underline" style={{ color: ACCENT }}>
                    {row.name}
                  </Link>
                ) : (
                  row.name
                )}
              </td>
              <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>
                {row.cups}
              </td>
              <td className="px-4 py-2.5 text-gray-600">{row.tbsp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CategoryTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[560px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            {["Ingredient", "500g in Cups", "Tbsp", "Tsp", "g per Cup"].map((title) => (
              <th key={title} className="whitespace-nowrap px-4 py-3 text-left font-semibold text-white">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.name} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
              <td className="px-4 py-2.5 font-medium text-gray-800">
                {row.href ? (
                  <Link href={row.href} className="hover:underline" style={{ color: ACCENT }}>
                    {row.name}
                  </Link>
                ) : (
                  row.name
                )}
              </td>
              <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>
                {row.cups}
              </td>
              <td className="px-4 py-2.5 text-gray-600">{row.tbsp}</td>
              <td className="px-4 py-2.5 text-gray-600">{row.tsp}</td>
              <td className="px-4 py-2.5 text-gray-600">{row.gpc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function FiveHundredGramsToCups() {
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
              <i className="ri-scales-3-line" /> 90+ ingredients at 500 grams
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">500 Grams to Cups</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              500 grams has one thing going for it that most other weights on this site don&apos;t: it&apos;s exactly half a kilogram, a genuinely round, easy-to-picture amount. That said, &quot;round&quot; only applies to the weight — once you translate 500 grams into cups, the number swings wildly depending on what&apos;s actually filling that cup.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another amount?{" "}
              <Link href="/400-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                400g
              </Link>{" "}
              ·{" "}
              <Link href="/450-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                450g
              </Link>{" "}
              ·{" "}
              <Link href="/300-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                300g
              </Link>
            </p>
          </div>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-current"
                style={{ borderColor: `${ACCENT}30`, color: ACCENT }}
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">
            <SimpleConverter ingredients={ingredients} initialGrams={500} />

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                500 grams is about 4⅙ cups of <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, 2½ cups of <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>sugar</Link>, or roughly 2¼ cups of <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>. The cup amount always comes down to the ingredient&apos;s density. Find yours in the table below.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">500 Grams to Cups, by Ingredient</h2>
              <MainTable rows={mainRows} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Figures are based on standard reference weights per cup (flour at 120g/cup, sugar at 200g/cup, and so on), using a US customary cup and the spoon-and-level method for dry ingredients. Several independently published density-based converters land on very similar numbers, which is a good cross-check — though brand, humidity, and packing technique can still nudge the real result slightly.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why 500 Grams Never Fills the Same Amount of Cup Twice</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                It comes down to how much air sits between the particles of whatever&apos;s being measured. Flour is light and airy, with a fair amount of trapped space between its fine particles, so 500 grams of it stretches to a generous 4⅙ cups. Sugar crystals sit much closer together, shrinking that same weight down to 2½ cups. Honey isn&apos;t made of particles at all — it&apos;s a dense, syrupy liquid with almost no trapped air — which is why 500 grams of it only fills about 1½ cups, well under half of what flour takes up at the same weight.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                The short version: a cup measures space, not amount. The exact same 500 grams — a nice, round half-kilogram — can look like completely different quantities once it&apos;s actually sitting in a measuring cup.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Closer Look at a Few Common Ones</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>500g of flour comes out to about 4⅙ cups — a substantial amount, typical for a large batch of bread or a big layer cake.</li>
                <li>500g of sugar is a clean 2½ cups, one of the tidier numbers in this whole series.</li>
                <li>500g of butter works out to about 2¼ cups — roughly 4½ standard US sticks (each stick is ½ cup).</li>
                <li>500g of honey only fills about 1½ cups, a striking reminder of how much denser honey is compared to almost any dry ingredient on the shelf.</li>
              </ul>
            </section>

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 500 Grams Accurately</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <strong className="text-gray-900">With a kitchen scale (most reliable):</strong> Set your mixing bowl on the scale, zero it out, and pour the ingredient in until it reads 500 grams. At a half-kilogram amount, even a small percentage error in a cup measurement compounds into a fairly large gram gap, which is exactly where a scale earns its keep.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "For flour, cocoa, and other light powders, spoon the ingredient into the cup instead of scooping it from the bag, then level off the top with a straight edge.",
                  "For brown sugar, pack it down firmly enough that it holds its shape when the cup is turned out.",
                  "For liquids like honey, oil, or milk, use a liquid measuring cup and check the fill line at eye level.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Table</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                These tables extend the reference across nine ingredient categories with tablespoon, teaspoon, and grams-per-cup figures.
              </p>
              {categories.map((category) => (
                <div key={category.id} id={category.id} className="mb-8 scroll-mt-24">
                  <h3 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">{category.title}</h3>
                  <CategoryTable rows={category.rows} />
                </div>
              ))}
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                500 grams might be a clean half-kilogram on the scale, but &quot;how many cups is 500 grams&quot; still only has an answer once you know the ingredient. The table above gets you there instantly for whatever&apos;s on your counter, and for a batch this size — where even a small measuring slip adds up fast — weighing it directly on a scale remains the most dependable way to hit the number exactly.
              </p>
            </section>

            <section
              className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500"
              style={{ borderColor: `${ACCENT}15` }}
            >
              <p className="mb-2 font-semibold text-gray-600">More Converters</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { name: "400 grams to cups", href: "/400-grams-to-cups" },
                  { name: "450 grams to cups", href: "/450-grams-to-cups" },
                  { name: "300 grams to cups", href: "/300-grams-to-cups" },
                  { name: "200 grams to cups", href: "/200-grams-to-cups" },
                  { name: "250 grams to cups", href: "/250-grams-to-cups" },
                  { name: "Cups to grams", href: "/cups-to-grams" },
                  { name: "Grams to ounces", href: "/grams-to-ounces" },
                  { name: "550 grams to cups", href: "/550-grams-to-cups" },
                  { name: "Accuracy guide", href: "/grams-to-cups-accuracy" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2 font-medium text-gray-700 transition-colors hover:border-current"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <span className="truncate">{link.name}</span>
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