import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "600 Grams to Cups — Full Ingredient Conversion Chart",
  description:
    "How many cups is 600 grams? A complete chart covering flour, sugar, butter, honey, and 90+ other ingredients across 8 categories.",
  alternates: { canonical: "/600-grams-to-cups" },
  openGraph: {
    title: "600 Grams to Cups — Full Ingredient Conversion Chart",
    description:
      "600 grams is about 5 cups of flour, 3 cups of sugar, or 2⅝ cups of butter — see the full chart.",
    url: "/600-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "600 Grams to Cups — Full Ingredient Conversion Chart",
    description:
      "How many cups is 600 grams? It depends on the ingredient — see the full chart.",
    images: ["/og-image.jpg"],
  },
};

type Row = {
  name: string;
  href?: string;
  cups: string;
  tbsp: string;
  tsp?: string;
  gpc?: string;
};

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
  { name: "All-purpose flour", href: "/flour", cups: "5 cups", tbsp: "80 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "3 cups", tbsp: "48 tbsp" },
  { name: "Powdered sugar (unsifted)", href: "/powdered-sugar", cups: "5 cups", tbsp: "80 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "~2¾ cups", tbsp: "43.6 tbsp" },
  { name: "Butter", href: "/butter", cups: "~2⅝ cups", tbsp: "42.3 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~2¾ cups", tbsp: "44 tbsp" },
  { name: "Milk", href: "/milk", cups: "~2½ cups", tbsp: "40.5 tbsp" },
  { name: "Water", href: "/water", cups: "~2½ cups", tbsp: "40.6 tbsp" },
  { name: "Honey", href: "/honey", cups: "~1¾ cups", tbsp: "28.2 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~3¼ cups", tbsp: "51.9 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "~6⅔ cups", tbsp: "106.7 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "~7 cups", tbsp: "112.9 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "~3½ cups", tbsp: "56.5 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~4¼ cups", tbsp: "67.1 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~2 cups", tbsp: "33.1 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "~2¾ cups", tbsp: "43.6 tbsp" },
];

const categories: IngredientGroup[] = [
  {
    id: "flours",
    title: "Flours",
    rows: [
      { name: "All-purpose flour", href: "/flour", cups: "4.800 cups", tbsp: "76.800", tsp: "230.400", gpc: "125" },
      { name: "Bread flour", cups: "4.724 cups", tbsp: "75.591", tsp: "226.772", gpc: "127" },
      { name: "Cake flour", cups: "5.263 cups", tbsp: "84.211", tsp: "252.632", gpc: "114" },
      { name: "Whole wheat flour", cups: "5.000 cups", tbsp: "80.000", tsp: "240.000", gpc: "120" },
      { name: "Almond flour", cups: "6.250 cups", tbsp: "100.000", tsp: "300.000", gpc: "96" },
      { name: "Coconut flour", cups: "4.688 cups", tbsp: "75.000", tsp: "225.000", gpc: "128" },
    ],
  },
  {
    id: "sugars",
    title: "Sugars and Sweeteners",
    rows: [
      { name: "Granulated sugar", href: "/sugar", cups: "3.000 cups", tbsp: "48.000", tsp: "144.000", gpc: "200" },
      { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "2.727 cups", tbsp: "43.636", tsp: "130.909", gpc: "220" },
      { name: "Powdered sugar", href: "/powdered-sugar", cups: "5.000 cups", tbsp: "80.000", tsp: "240.000", gpc: "120" },
      { name: "Honey", href: "/honey", cups: "1.765 cups", tbsp: "28.235", tsp: "84.706", gpc: "340" },
      { name: "Maple syrup", cups: "1.863 cups", tbsp: "29.814", tsp: "89.441", gpc: "322" },
      { name: "Molasses", cups: "1.829 cups", tbsp: "29.268", tsp: "87.805", gpc: "328" },
    ],
  },
  {
    id: "fats",
    title: "Butter, Oils and Fats",
    rows: [
      { name: "Butter", href: "/butter", cups: "2.643 cups", tbsp: "42.291", tsp: "126.872", gpc: "227" },
      { name: "Shortening", cups: "2.927 cups", tbsp: "46.829", tsp: "140.488", gpc: "205" },
      { name: "Vegetable oil", href: "/vegetable-oil", cups: "2.752 cups", tbsp: "44.037", tsp: "132.110", gpc: "218" },
      { name: "Olive oil", cups: "2.778 cups", tbsp: "44.444", tsp: "133.333", gpc: "216" },
      { name: "Coconut oil", cups: "2.752 cups", tbsp: "44.037", tsp: "132.110", gpc: "218" },
    ],
  },
  {
    id: "dairy",
    title: "Dairy and Liquids",
    rows: [
      { name: "Milk", href: "/milk", cups: "2.449 cups", tbsp: "39.184", tsp: "117.551", gpc: "245" },
      { name: "Heavy cream", cups: "2.521 cups", tbsp: "40.336", tsp: "121.008", gpc: "238" },
      { name: "Yogurt", cups: "2.449 cups", tbsp: "39.184", tsp: "117.551", gpc: "245" },
      { name: "Cream cheese", cups: "2.586 cups", tbsp: "41.379", tsp: "124.138", gpc: "232" },
      { name: "Condensed milk", cups: "1.961 cups", tbsp: "31.373", tsp: "94.118", gpc: "306" },
    ],
  },
  {
    id: "grains",
    title: "Rice, Grains and Pasta",
    rows: [
      { name: "Uncooked rice", href: "/rice", cups: "3.243 cups", tbsp: "51.892", tsp: "155.676", gpc: "185" },
      { name: "Rolled oats", href: "/oats", cups: "6.667 cups", tbsp: "106.667", tsp: "320.000", gpc: "90" },
      { name: "Quinoa", cups: "3.529 cups", tbsp: "56.471", tsp: "169.412", gpc: "170" },
      { name: "Couscous", cups: "3.468 cups", tbsp: "55.491", tsp: "166.474", gpc: "173" },
      { name: "Dry pasta", cups: "6.000 cups", tbsp: "96.000", tsp: "288.000", gpc: "100" },
    ],
  },
  {
    id: "nuts",
    title: "Nuts and Seeds",
    rows: [
      { name: "Whole almonds", href: "/almonds", cups: "4.196 cups", tbsp: "67.133", tsp: "201.399", gpc: "143" },
      { name: "Walnuts (chopped)", cups: "5.000 cups", tbsp: "80.000", tsp: "240.000", gpc: "120" },
      { name: "Cashews", cups: "4.380 cups", tbsp: "70.073", tsp: "210.219", gpc: "137" },
      { name: "Peanut butter", cups: "2.326 cups", tbsp: "37.209", tsp: "111.628", gpc: "258" },
      { name: "Sesame seeds", cups: "4.167 cups", tbsp: "66.667", tsp: "200.000", gpc: "144" },
      { name: "Tahini", href: "/tahini", cups: "2.5 cups", tbsp: "40", tsp: "120", gpc: "240" },
    ],
  },
  {
    id: "baking-staples",
    title: "Baking Staples",
    rows: [
      { name: "Cocoa powder", href: "/cocoa-powder", cups: "6.977 cups", tbsp: "111.628", tsp: "334.884", gpc: "86" },
      { name: "Chocolate chips", href: "/chocolate-chips", cups: "3.529 cups", tbsp: "56.471", tsp: "169.412", gpc: "170" },
      { name: "Cornstarch", cups: "4.688 cups", tbsp: "75.000", tsp: "225.000", gpc: "128" },
      { name: "Breadcrumbs", cups: "5.556 cups", tbsp: "88.889", tsp: "266.667", gpc: "108" },
      { name: "Baking powder", href: "/baking-powder", cups: "2.727 cups", tbsp: "43.636", tsp: "130.909", gpc: "220" },
      { name: "Salt", href: "/salt", cups: "2.083 cups", tbsp: "33.333", tsp: "100.000", gpc: "288" },
    ],
  },
  {
    id: "cheese",
    title: "Cheese",
    rows: [
      { name: "Parmesan (grated)", cups: "6.000 cups", tbsp: "96.000", tsp: "288.000", gpc: "100" },
      { name: "Cheddar (shredded)", cups: "5.310 cups", tbsp: "84.956", tsp: "254.867", gpc: "113" },
      { name: "Mozzarella (shredded)", cups: "5.357 cups", tbsp: "85.714", tsp: "257.143", gpc: "112" },
      { name: "Feta (crumbled)", cups: "4.000 cups", tbsp: "64.000", tsp: "192.000", gpc: "150" },
    ],
  },
];

function MainTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[420px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
            <th className="px-4 py-3 text-left font-semibold text-white">600g in Cups</th>
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
            {["Ingredient", "600g in Cups", "Tbsp", "Tsp", "g per Cup"].map((title) => (
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

export default function SixHundredGramsToCups() {
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
              <i className="ri-scales-3-line" /> 90+ ingredients at 600 grams
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              600 Grams to Cups
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              600 grams is one of the tidiest amounts in this series. At our reference weights, 600 grams of flour is exactly 5 cups, and 600 grams of granulated sugar is exactly 3 cups. It is also about 21 ounces, or roughly 1⅓ pounds. Other ingredients land on less round numbers, so here is the full breakdown.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another amount?{" "}
              <Link href="/550-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                550g
              </Link>{" "}
              ·{" "}
              <Link href="/500-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                700g
              </Link>{" "}
              ·{" "}
              <Link href="/450-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                450g
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
            <SimpleConverter ingredients={ingredients} initialGrams={600} />

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                600 grams is about 5 cups of <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, 3 cups of <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>granulated sugar</Link>, or 2⅝ cups of <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>. The cup amount always depends on the ingredient&apos;s density. Find yours in the table below.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">600 Grams to Cups, by Ingredient</h2>
              <MainTable rows={mainRows} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                These figures use standard reference weights per cup (flour at 120 g, sugar at 200 g, butter at 227 g, and so on), a US customary cup, and the spoon-and-level method for dry ingredients. Sites that use 125 g for a cup of flour get 4.8 cups instead of 5. The two answers are close, so pick one reference and stay with it for the whole recipe.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why the Same 600 Grams Looks So Different</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                It comes down to how much air sits between the tiny pieces of whatever you are measuring. Flour is light and fluffy, so 600 grams of it fills 5 cups. Sugar crystals sit closer together, so the same weight fits into 3 cups. Honey is a thick liquid with almost no trapped air, so 600 grams of it fills only about 1¾ cups.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                A cup measures space, not amount. The weight on your scale never changes, but the room it takes up does.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Closer Look at a Few Common Ones</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong className="text-gray-900">600g of flour</strong> is exactly 5 cups at 120 g per cup. That is a typical amount for a big loaf of bread or the dough for two pizzas.</li>
                <li><strong className="text-gray-900">600g of sugar</strong> is exactly 3 cups, which makes it one of the easiest conversions to remember.</li>
                <li><strong className="text-gray-900">600g of butter</strong> comes to about 2⅝ cups, or roughly 5¼ standard US sticks (each stick is ½ cup).</li>
                <li><strong className="text-gray-900">600g of powdered sugar</strong> is 5 cups if it is unsifted. Sifting adds air, so a cup of sifted powdered sugar holds less (around 100 g). If your recipe says &quot;sifted,&quot; the same 600 grams comes to about 6 cups.</li>
                <li><strong className="text-gray-900">600g of honey</strong> fills only about 1¾ cups, a good reminder of how much denser honey is than anything dry.</li>
              </ul>
            </section>

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 600 Grams Accurately</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <strong className="text-gray-900">With a kitchen scale (most reliable):</strong> Put your bowl on the scale, press the tare button to zero it, and pour until it reads 600 grams. At this size, a small error in each cup adds up. Five cups that are each a few grams off can leave you short or over by a noticeable amount.
              </p>
              <p className="mb-2 text-sm font-semibold text-gray-800">With measuring cups (if you don&apos;t have a scale):</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-3">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                  <span>For <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link> and <Link href="/cocoa-powder" className="hover:underline" style={{ color: ACCENT }}>cocoa</Link>, spoon the ingredient into the cup and level it off. Don&apos;t scoop straight from the bag.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                  <span>For <Link href="/brown-sugar" className="hover:underline" style={{ color: ACCENT }}>brown sugar</Link>, press it down firmly so it holds its shape when you tip the cup out.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                  <span>For liquids like <Link href="/honey" className="hover:underline" style={{ color: ACCENT }}>honey</Link>, <Link href="/vegetable-oil" className="hover:underline" style={{ color: ACCENT }}>oil</Link>, or <Link href="/milk" className="hover:underline" style={{ color: ACCENT }}>milk</Link>, use a liquid measuring cup and read the line at eye level.</span>
                </li>
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                If a recipe uses ounces, 600 grams is about 21.2 oz, and our <Link href="/grams-to-ounces" className="font-semibold hover:underline" style={{ color: ACCENT }}>grams to ounces converter</Link> can switch other amounts for you. The <Link href="/blog/spoon-and-level-method" className="font-semibold hover:underline" style={{ color: ACCENT }}>spoon-and-level guide</Link> walks through the cup technique step by step.
              </p>
            </section>

            {/* Detailed Ingredient Breakdowns by Category */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Detailed Ingredient Breakdowns by Category</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                These tables extend the reference across eight ingredient categories with tablespoon, teaspoon, and grams-per-cup figures.
              </p>
              {categories.map((category) => (
                <div key={category.id} id={category.id} className="mb-8 scroll-mt-24">
                  <h3 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">{category.title}</h3>
                  <CategoryTable rows={category.rows} />
                </div>
              ))}
            </section>

            {/* Quick Reference Box */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="mb-4 space-y-1.5 text-sm text-gray-600">
                {[
                  "600g flour = 5 cups",
                  "600g sugar = 3 cups",
                  "600g butter ≈ 2⅝ cups",
                  "600g honey ≈ 1¾ cups",
                  "600g rice (uncooked) ≈ 3¼ cups",
                  "600g ≈ 21.2 ounces ≈ 1.32 pounds",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                There is no single answer to &quot;how many cups is 600 grams.&quot; It depends on what you are measuring. Use the table above for a quick answer, and when a recipe&apos;s result depends on getting the amount right, weighing 600 grams on a scale is the surest way to hit it exactly.
              </p>
            </section>

            <section
              className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500"
              style={{ borderColor: `${ACCENT}15` }}
            >
              <p className="mb-2 font-semibold text-gray-600">More Converters</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { name: "550 grams to cups", href: "/550-grams-to-cups" },
                  { name: "500 grams to cups", href: "/500-grams-to-cups" },
                  { name: "450 grams to cups", href: "/450-grams-to-cups" },
                  { name: "400 grams to cups", href: "/400-grams-to-cups" },
                  { name: "300 grams to cups", href: "/300-grams-to-cups" },
                  { name: "Cups to grams", href: "/cups-to-grams" },
                  { name: "Grams to ounces", href: "/grams-to-ounces" },
                  { name: "All ingredients", href: "/ingredients" },
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