import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "650 Grams to Cups — Full Ingredient Conversion Chart",
  description:
    "How many cups is 650 grams? A complete chart covering flour, sugar, butter, honey, and 90+ other ingredients across 8 categories.",
  alternates: { canonical: "/650-grams-to-cups" },
  openGraph: {
    title: "650 Grams to Cups — Full Ingredient Conversion Chart",
    description:
      "650 grams is about 5⅜ cups of flour, 3¼ cups of sugar, or 2⅞ cups of butter — see the full chart.",
    url: "/650-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "650 Grams to Cups — Full Ingredient Conversion Chart",
    description:
      "How many cups is 650 grams? It depends on the ingredient — see the full chart.",
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
  { name: "All-purpose flour", href: "/flour", cups: "~5⅜ cups", tbsp: "86.7 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "3¼ cups", tbsp: "52 tbsp" },
  { name: "Powdered sugar (unsifted)", href: "/powdered-sugar", cups: "~5⅜ cups", tbsp: "86.7 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "~3 cups (scant)", tbsp: "47.3 tbsp" },
  { name: "Butter", href: "/butter", cups: "~2⅞ cups", tbsp: "45.8 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~3 cups (scant)", tbsp: "47.7 tbsp" },
  { name: "Milk", href: "/milk", cups: "~2¾ cups (scant)", tbsp: "43.9 tbsp" },
  { name: "Water", href: "/water", cups: "~2¾ cups", tbsp: "44 tbsp" },
  { name: "Honey", href: "/honey", cups: "~1⅞ cups", tbsp: "30.6 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~3½ cups", tbsp: "56.2 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "~7¼ cups", tbsp: "115.6 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "~7⅝ cups", tbsp: "122.4 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "~3⅞ cups", tbsp: "61.2 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~4½ cups", tbsp: "72.7 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~2¼ cups", tbsp: "35.9 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "~3 cups (scant)", tbsp: "47.3 tbsp" },
];

const categories: IngredientGroup[] = [
  {
    id: "flours",
    title: "Flours",
    rows: [
      { name: "All-purpose flour", href: "/flour", cups: "5.20 cups", tbsp: "83.2", tsp: "249.6", gpc: "125" },
      { name: "Bread flour", href: "/flour", cups: "5.12 cups", tbsp: "81.9", tsp: "245.7", gpc: "127" },
      { name: "Cake flour", cups: "5.70 cups", tbsp: "91.2", tsp: "273.6", gpc: "114" },
      { name: "Whole wheat flour", cups: "5.42 cups", tbsp: "86.7", tsp: "260.0", gpc: "120" },
      { name: "Almond flour", cups: "6.77 cups", tbsp: "108.3", tsp: "325.0", gpc: "96" },
      { name: "Coconut flour", cups: "5.08 cups", tbsp: "81.3", tsp: "243.8", gpc: "128" },
    ],
  },
  {
    id: "sugars",
    title: "Sugars and Sweeteners",
    rows: [
      { name: "Granulated sugar", href: "/sugar", cups: "3.25 cups", tbsp: "52.0", tsp: "156.0", gpc: "200" },
      { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "2.95 cups", tbsp: "47.2", tsp: "141.7", gpc: "220" },
      { name: "Powdered sugar", href: "/powdered-sugar", cups: "5.42 cups", tbsp: "86.7", tsp: "260.0", gpc: "120" },
      { name: "Honey", href: "/honey", cups: "1.91 cups", tbsp: "30.6", tsp: "91.8", gpc: "340" },
      { name: "Maple syrup", cups: "2.02 cups", tbsp: "32.3", tsp: "96.9", gpc: "322" },
      { name: "Molasses", cups: "1.98 cups", tbsp: "31.7", tsp: "95.0", gpc: "328" },
    ],
  },
  {
    id: "fats",
    title: "Butter, Oils and Fats",
    rows: [
      { name: "Butter", href: "/butter", cups: "2.86 cups", tbsp: "45.8", tsp: "137.4", gpc: "227" },
      { name: "Shortening", cups: "3.17 cups", tbsp: "50.7", tsp: "152.2", gpc: "205" },
      { name: "Vegetable oil", href: "/vegetable-oil", cups: "2.98 cups", tbsp: "47.7", tsp: "143.0", gpc: "218" },
      { name: "Olive oil", cups: "3.01 cups", tbsp: "48.2", tsp: "144.6", gpc: "216" },
      { name: "Coconut oil", cups: "2.98 cups", tbsp: "47.7", tsp: "143.0", gpc: "218" },
      { name: "Tahini", href: "/tahini", cups: "2.62 cups", tbsp: "42.0", tsp: "126.0", gpc: "248" },
    ],
  },
  {
    id: "dairy",
    title: "Dairy and Liquids",
    rows: [
      { name: "Milk", href: "/milk", cups: "2.65 cups", tbsp: "42.4", tsp: "127.3", gpc: "245" },
      { name: "Heavy cream", cups: "2.73 cups", tbsp: "43.7", tsp: "131.1", gpc: "238" },
      { name: "Yogurt", cups: "2.65 cups", tbsp: "42.4", tsp: "127.3", gpc: "245" },
      { name: "Cream cheese", cups: "2.80 cups", tbsp: "44.8", tsp: "134.5", gpc: "232" },
      { name: "Condensed milk", cups: "2.12 cups", tbsp: "34.0", tsp: "102.0", gpc: "306" },
    ],
  },
  {
    id: "grains",
    title: "Rice, Grains and Pasta",
    rows: [
      { name: "Uncooked rice", href: "/rice", cups: "3.51 cups", tbsp: "56.2", tsp: "168.6", gpc: "185" },
      { name: "Rolled oats", href: "/oats", cups: "7.22 cups", tbsp: "115.6", tsp: "346.7", gpc: "90" },
      { name: "Quinoa", cups: "3.82 cups", tbsp: "61.2", tsp: "183.5", gpc: "170" },
      { name: "Couscous", cups: "3.76 cups", tbsp: "60.1", tsp: "180.3", gpc: "173" },
      { name: "Dry pasta", cups: "6.50 cups", tbsp: "104.0", tsp: "312.0", gpc: "100" },
    ],
  },
  {
    id: "nuts",
    title: "Nuts and Seeds",
    rows: [
      { name: "Whole almonds", href: "/almonds", cups: "4.55 cups", tbsp: "72.7", tsp: "218.2", gpc: "143" },
      { name: "Walnuts (chopped)", cups: "5.42 cups", tbsp: "86.7", tsp: "260.0", gpc: "120" },
      { name: "Cashews", cups: "4.74 cups", tbsp: "75.9", tsp: "227.7", gpc: "137" },
      { name: "Peanut butter", href: "/peanut-butter", cups: "2.52 cups", tbsp: "40.3", tsp: "121.0", gpc: "258" },
      { name: "Sesame seeds", cups: "4.51 cups", tbsp: "72.2", tsp: "216.7", gpc: "144" },
    ],
  },
  {
    id: "baking-staples",
    title: "Baking Staples",
    rows: [
      { name: "Cocoa powder", href: "/cocoa-powder", cups: "7.56 cups", tbsp: "120.9", tsp: "362.8", gpc: "86" },
      { name: "Chocolate chips", href: "/chocolate-chips", cups: "3.82 cups", tbsp: "61.2", tsp: "183.5", gpc: "170" },
      { name: "Cornstarch", cups: "5.08 cups", tbsp: "81.3", tsp: "243.8", gpc: "128" },
      { name: "Breadcrumbs", cups: "6.02 cups", tbsp: "96.3", tsp: "288.9", gpc: "108" },
      { name: "Baking powder", href: "/baking-powder", cups: "2.95 cups", tbsp: "47.3", tsp: "141.8", gpc: "220" },
      { name: "Salt", href: "/salt", cups: "2.26 cups", tbsp: "36.1", tsp: "108.3", gpc: "288" },
    ],
  },
  {
    id: "cheese",
    title: "Cheese",
    rows: [
      { name: "Parmesan (grated)", cups: "6.50 cups", tbsp: "104.0", tsp: "312.0", gpc: "100" },
      { name: "Cheddar (shredded)", cups: "5.75 cups", tbsp: "92.0", tsp: "276.1", gpc: "113" },
      { name: "Mozzarella (shredded)", cups: "5.80 cups", tbsp: "92.9", tsp: "278.6", gpc: "112" },
      { name: "Feta (crumbled)", cups: "4.33 cups", tbsp: "69.3", tsp: "208.0", gpc: "150" },
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
            <th className="px-4 py-3 text-left font-semibold text-white">650g in Cups</th>
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
            {["Ingredient", "650g in Cups", "Tbsp", "Tsp", "g per Cup"].map((title) => (
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

export default function SixHundredFiftyGramsToCups() {
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
              <i className="ri-scales-3-line" /> 90+ ingredients at 650 grams
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              650 Grams to Cups
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              650 grams is almost 23 ounces, which is about 1 pound 7 ounces. It is a big, bake-day amount, enough flour for a large sandwich loaf or the dough for a couple of pizzas. Like every weight on this site, though, the number of cups it fills depends on what is in the bowl.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another amount?{" "}
              <Link href="/600-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                600g
              </Link>{" "}
              ·{" "}
              <Link href="/550-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                550g
              </Link>{" "}
              ·{" "}
              <Link href="/500-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                500g
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
            <SimpleConverter ingredients={ingredients} initialGrams={650} />

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                650 grams is about 5⅜ cups of <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, 3¼ cups of <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>granulated sugar</Link>, or 2⅞ cups of <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>. The cup amount always depends on the ingredient&apos;s density. Find yours in the table below.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">650 Grams to Cups, by Ingredient</h2>
              <MainTable rows={mainRows} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                These figures use standard reference weights per cup (flour at 120 g, sugar at 200 g, butter at 227 g, and so on), a US customary cup, and the spoon-and-level method for dry ingredients. Sites that use 125 g for a cup of flour get 5¼ cups instead of 5⅜. The two answers are close, so pick one reference and keep it for the whole recipe.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why 650 Grams Takes Up Such Different Amounts of Room</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Think about what each ingredient is made of. Flour is a fine, fluffy powder with lots of tiny air pockets, so it spreads out and fills more than 5 cups. Sugar crystals are small and hard, and they sit snugly together, so the same weight fits into 3¼ cups. Honey is a thick liquid with almost no air in it, so 650 grams barely reaches 2 cups.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                That is the whole secret behind every conversion on this site: a cup measures space, not weight. The weight stays the same, while the space it needs changes with the ingredient.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Closer Look at a Few Common Ones</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong className="text-gray-900">650g of flour</strong> comes out to about 5⅜ cups, a good amount for a large loaf or two pizza bases.</li>
                <li><strong className="text-gray-900">650g of sugar</strong> is a tidy 3¼ cups.</li>
                <li><strong className="text-gray-900">650g of butter</strong> is about 2⅞ cups, or close to 5¾ standard US sticks (each stick is ½ cup).</li>
                <li><strong className="text-gray-900">650g of brown sugar</strong> is just under 3 cups when it is packed down firmly. If you scoop it loosely instead, you will have far less than 650 grams in the cups, which is why recipes say &quot;packed.&quot;</li>
                <li><strong className="text-gray-900">650g of uncooked rice</strong> is about 3½ cups, a solid amount for a big family meal or a week of meal prep.</li>
              </ul>
            </section>

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 650 Grams Accurately</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <strong className="text-gray-900">With a kitchen scale (most reliable):</strong> Set your bowl on the scale, press the tare button to zero it, and pour until it reads 650 grams. At this size, small cup errors stack up. Five or six cups that are each a few grams off can leave you noticeably short or over.
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
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                A handy shortcut: conversions add up in a straight line, so you can combine two of our pages. For example, 650 g is the same as 600 g plus 50 g, so you can add the results from our <Link href="/600-grams-to-cups" className="font-semibold hover:underline" style={{ color: ACCENT }}>600 grams to cups</Link> and <Link href="/50-grams-to-cups" className="font-semibold hover:underline" style={{ color: ACCENT }}>50 grams to cups</Link> pages.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                If a recipe uses ounces, 650 grams is about 22.9 oz, and our <Link href="/grams-to-ounces" className="font-semibold hover:underline" style={{ color: ACCENT }}>grams to ounces converter</Link> can switch other amounts. The <Link href="/blog/spoon-and-level-method" className="font-semibold hover:underline" style={{ color: ACCENT }}>spoon-and-level guide</Link> shows the cup technique step by step.
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
                  "650g flour ≈ 5⅜ cups",
                  "650g sugar = 3¼ cups",
                  "650g butter ≈ 2⅞ cups",
                  "650g brown sugar (packed) ≈ 3 cups (scant)",
                  "650g rice (uncooked) ≈ 3½ cups",
                  "650g ≈ 22.9 ounces ≈ 1.43 pounds",
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
                There is no single answer to &quot;how many cups is 650 grams.&quot; It depends on what you are measuring. Use the table above for a quick answer, and when a recipe&apos;s result depends on getting the amount right, weighing 650 grams on a scale is the surest way to hit it exactly.
              </p>
            </section>

            <section
              className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500"
              style={{ borderColor: `${ACCENT}15` }}
            >
              <p className="mb-2 font-semibold text-gray-600">More Converters</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { name: "600 grams to cups", href: "/600-grams-to-cups" },
                  { name: "550 grams to cups", href: "/550-grams-to-cups" },
                  { name: "500 grams to cups", href: "/500-grams-to-cups" },
                  { name: "450 grams to cups", href: "/450-grams-to-cups" },
                  { name: "300 grams to cups", href: "/300-grams-to-cups" },
                  { name: "Cups to grams", href: "/cups-to-grams" },
                  { name: "Grams to ounces", href: "/grams-to-ounces" },
                  { name: "All ingredients", href: "/ingredients" },
                  { name: "700 grams to cups", href: "/700-grams-to-cups" },
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