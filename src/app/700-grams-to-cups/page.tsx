import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "700 Grams to Cups — Full Ingredient Conversion Chart",
  description:
    "How many cups is 700 grams? A complete chart covering flour, sugar, butter, honey, and 90+ other ingredients across 8 categories.",
  alternates: { canonical: "/700-grams-to-cups" },
  openGraph: {
    title: "700 Grams to Cups — Full Ingredient Conversion Chart",
    description:
      "700 grams is about 5⅚ cups of flour, 3½ cups of sugar, or 3⅛ cups of butter — see the full chart.",
    url: "/700-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "700 Grams to Cups — Full Ingredient Conversion Chart",
    description:
      "How many cups is 700 grams? It depends on the ingredient — see the full chart.",
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
  { name: "All-purpose flour", href: "/flour", cups: "~5⅚ cups", tbsp: "93.3 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "3½ cups", tbsp: "56 tbsp" },
  { name: "Powdered sugar (unsifted)", href: "/powdered-sugar", cups: "~5⅚ cups", tbsp: "93.3 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "~3⅛ cups (a bit over)", tbsp: "50.9 tbsp" },
  { name: "Butter", href: "/butter", cups: "~3⅛ cups (scant)", tbsp: "49.3 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~3¼ cups (scant)", tbsp: "51.4 tbsp" },
  { name: "Milk", href: "/milk", cups: "~3 cups (scant)", tbsp: "47.3 tbsp" },
  { name: "Water", href: "/water", cups: "~3 cups (scant)", tbsp: "47.3 tbsp" },
  { name: "Honey", href: "/honey", cups: "~2 cups (heaping)", tbsp: "32.9 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~3¾ cups", tbsp: "60.5 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "~7¾ cups", tbsp: "124.4 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "~8¼ cups", tbsp: "131.8 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "~4⅛ cups", tbsp: "65.9 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~4⅞ cups", tbsp: "78.3 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~2⅜ cups", tbsp: "38.6 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "~3⅛ cups", tbsp: "50.9 tbsp" },
];

const categories: IngredientGroup[] = [
  {
    id: "flours",
    title: "Flours",
    rows: [
      { name: "All-purpose flour", href: "/flour", cups: "5.600 cups", tbsp: "89.600", tsp: "268.800", gpc: "125" },
      { name: "Bread flour", cups: "5.512 cups", tbsp: "88.189", tsp: "264.567", gpc: "127" },
      { name: "Cake flour", cups: "6.140 cups", tbsp: "98.246", tsp: "294.737", gpc: "114" },
      { name: "Whole wheat flour", cups: "5.833 cups", tbsp: "93.333", tsp: "280.000", gpc: "120" },
      { name: "Almond flour", cups: "7.292 cups", tbsp: "116.667", tsp: "350.000", gpc: "96" },
      { name: "Coconut flour" , cups: "5.469 cups", tbsp: "87.500", tsp: "262.500", gpc: "128" },
    ],
  },
  {
    id: "sugars",
    title: "Sugars and Sweeteners",
    rows: [
      { name: "Granulated sugar", href: "/sugar", cups: "3.500 cups", tbsp: "56.000", tsp: "168.000", gpc: "200" },
      { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "3.182 cups", tbsp: "50.909", tsp: "152.727", gpc: "220" },
      { name: "Powdered sugar", href: "/powdered-sugar", cups: "5.833 cups", tbsp: "93.333", tsp: "280.000", gpc: "120" },
      { name: "Honey", href: "/honey", cups: "2.059 cups", tbsp: "32.941", tsp: "98.824", gpc: "340" },
      { name: "Maple syrup", cups: "2.174 cups", tbsp: "34.783", tsp: "104.348", gpc: "322" },
      { name: "Molasses", cups: "2.134 cups", tbsp: "34.146", tsp: "102.439", gpc: "328" },
    ],
  },
  {
    id: "fats",
    title: "Butter, Oils and Fats",
    rows: [
      { name: "Butter", href: "/butter", cups: "3.084 cups", tbsp: "49.339", tsp: "148.018", gpc: "227" },
      { name: "Shortening", cups: "3.415 cups", tbsp: "54.634", tsp: "163.902", gpc: "205" },
      { name: "Vegetable oil", href: "/vegetable-oil", cups: "3.211 cups", tbsp: "51.376", tsp: "154.128", gpc: "218" },
      { name: "Olive oil", cups: "3.241 cups", tbsp: "51.852", tsp: "155.556", gpc: "216" },
      { name: "Coconut oil", cups: "3.211 cups", tbsp: "51.376", tsp: "154.128", gpc: "218" },
      { name: "Tahini", href: "/tahini", cups: "2.82 cups", tbsp: "45.23", tsp: "135.69", gpc: "248" },
    ],
  },
  {
    id: "dairy",
    title: "Dairy and Liquids",
    rows: [
      { name: "Milk", href: "/milk", cups: "2.857 cups", tbsp: "45.714", tsp: "137.143", gpc: "245" },
      { name: "Heavy cream", cups: "2.941 cups", tbsp: "47.059", tsp: "141.176", gpc: "238" },
      { name: "Yogurt", cups: "2.857 cups", tbsp: "45.714", tsp: "137.143", gpc: "245" },
      { name: "Cream cheese", cups: "3.017 cups", tbsp: "48.276", tsp: "144.828", gpc: "232" },
      { name: "Condensed milk", cups: "2.288 cups", tbsp: "36.601", tsp: "109.804", gpc: "306" },
    ],
  },
  {
    id: "grains",
    title: "Rice, Grains and Pasta",
    rows: [
      { name: "Uncooked rice", href: "/rice", cups: "3.784 cups", tbsp: "60.541", tsp: "181.622", gpc: "185" },
      { name: "Rolled oats", href: "/oats", cups: "7.778 cups", tbsp: "124.444", tsp: "373.333", gpc: "90" },
      { name: "Quinoa", cups: "4.118 cups", tbsp: "65.882", tsp: "197.647", gpc: "170" },
      { name: "Couscous", cups: "4.046 cups", tbsp: "64.740", tsp: "194.220", gpc: "173" },
      { name: "Dry pasta", cups: "7.000 cups", tbsp: "112.000", tsp: "336.000", gpc: "100" },
    ],
  },
  {
    id: "nuts",
    title: "Nuts and Seeds",
    rows: [
      { name: "Whole almonds", href: "/almonds", cups: "4.895 cups", tbsp: "78.322", tsp: "234.965", gpc: "143" },
      { name: "Walnuts (chopped)", cups: "5.833 cups", tbsp: "93.333", tsp: "280.000", gpc: "120" },
      { name: "Cashews", cups: "5.109 cups", tbsp: "81.752", tsp: "245.255", gpc: "137" },
      { name: "Peanut butter", href: "/peanut-butter", cups: "2.713 cups", tbsp: "43.411", tsp: "130.233", gpc: "258" },
      { name: "Sesame seeds", cups: "4.861 cups", tbsp: "77.778", tsp: "233.333", gpc: "144" },
    ],
  },
  {
    id: "baking-staples",
    title: "Baking Staples",
    rows: [
      { name: "Cocoa powder", href: "/cocoa-powder", cups: "8.140 cups", tbsp: "130.233", tsp: "390.698", gpc: "86" },
      { name: "Chocolate chips", href: "/chocolate-chips", cups: "4.118 cups", tbsp: "65.882", tsp: "197.647", gpc: "170" },
      { name: "Cornstarch", cups: "5.469 cups", tbsp: "87.500", tsp: "262.500", gpc: "128" },
      { name: "Breadcrumbs", cups: "6.481 cups", tbsp: "103.704", tsp: "311.111", gpc: "108" },
      { name: "Baking powder", href: "/baking-powder", cups: "3.182 cups", tbsp: "50.909", tsp: "152.727", gpc: "220" },
      { name: "Salt", href: "/salt", cups: "2.431 cups", tbsp: "38.889", tsp: "116.667", gpc: "288" },
    ],
  },
  {
    id: "cheese",
    title: "Cheese",
    rows: [
      { name: "Parmesan (grated)", cups: "7.000 cups", tbsp: "112.000", tsp: "336.000", gpc: "100" },
      { name: "Cheddar (shredded)", cups: "6.195 cups", tbsp: "99.115", tsp: "297.345", gpc: "113" },
      { name: "Mozzarella (shredded)", cups: "6.250 cups", tbsp: "100.000", tsp: "300.000", gpc: "112" },
      { name: "Feta (crumbled)", cups: "4.667 cups", tbsp: "74.667", tsp: "224.000", gpc: "150" },
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
            <th className="px-4 py-3 text-left font-semibold text-white">700g in Cups</th>
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
            {["Ingredient", "700g in Cups", "Tbsp", "Tsp", "g per Cup"].map((title) => (
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

export default function SevenHundredGramsToCups() {
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
              <i className="ri-scales-3-line" /> 90+ ingredients at 700 grams
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              700 Grams to Cups
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              700 grams is about 24.7 ounces, or roughly 1½ pounds. It is a generous amount, the kind you weigh out for a big batch of bread dough, a double-batch of cookies, or a week of meal prep. It also has a neat bonus: 700 grams of granulated sugar is exactly 3½ cups. For other ingredients, the cup amount shifts, so here is the full breakdown.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another amount?{" "}
              <Link href="/650-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                650g
              </Link>{" "}
              ·{" "}
              <Link href="/600-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                600g
              </Link>{" "}
              ·{" "}
              <Link href="/550-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                550g
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
            <SimpleConverter ingredients={ingredients} initialGrams={700} />

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                700 grams is about 5⅚ cups of <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, 3½ cups of <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>granulated sugar</Link>, or 3⅛ cups of <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>. The cup amount always depends on the ingredient&apos;s density. Find yours in the table below.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">700 Grams to Cups, by Ingredient</h2>
              <MainTable rows={mainRows} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                These figures use standard reference weights per cup (flour at 120 g, sugar at 200 g, butter at 227 g, and so on), a US customary cup, and the spoon-and-level method for dry ingredients. Sites that use 125 g for a cup of flour get 5.6 cups instead of 5⅚. The two answers are close, so pick one reference and keep it for the whole recipe.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why 700 Grams Never Fills the Same Number of Cups</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Every ingredient has its own mix of solid material and empty space. Flour is a fine, fluffy powder, so a lot of the cup is air, and 700 grams spreads out to almost 6 cups. Sugar crystals are small, hard, and close together, so the same weight fits into 3½ cups. Honey is a thick liquid with almost no air, so 700 grams of it fills only about 2 cups.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                In short, a cup measures space, not weight. The weight on your scale stays at 700 grams, but the space it needs depends on what it is.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Closer Look at a Few Common Ones</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong className="text-gray-900">700g of flour</strong> is about 5⅚ cups, roughly the amount in a big sandwich loaf plus a little extra for dusting and shaping.</li>
                <li><strong className="text-gray-900">700g of sugar</strong> is exactly 3½ cups, one of the easiest conversions to remember.</li>
                <li><strong className="text-gray-900">700g of butter</strong> is about 3⅛ cups, or around 6 standard US sticks (each stick is ½ cup).</li>
                <li><strong className="text-gray-900">700g of honey</strong> is only about 2 cups, which shows how dense honey is next to anything dry.</li>
                <li><strong className="text-gray-900">700g of water</strong> is about 700 mL, which is just under 3 US cups. Water is one of the few ingredients where grams and milliliters match almost one to one, so you can use our <Link href="/ml-to-cups" className="font-semibold hover:underline" style={{ color: ACCENT }}>ml to cups converter</Link> if your recipe lists milliliters.</li>
              </ul>
            </section>

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 700 Grams Accurately</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <strong className="text-gray-900">With a kitchen scale (most reliable):</strong> Place your bowl on the scale, press the tare button to zero it, and pour until it reads 700 grams. At this size, small cup errors add up quickly. Six cups that are each off by a few grams can leave you with a noticeably different amount.
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
                A handy shortcut: 700 grams is exactly double 350 grams, so you can take the numbers from our 350 grams to cups page and multiply them by two.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                If a recipe uses ounces, 700 grams is about 24.7 oz, and our <Link href="/grams-to-ounces" className="font-semibold hover:underline" style={{ color: ACCENT }}>grams to ounces converter</Link> can switch other amounts. The <Link href="/blog/spoon-and-level-method" className="font-semibold hover:underline" style={{ color: ACCENT }}>spoon-and-level guide</Link> walks through the cup technique step by step.
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
                  "700g flour ≈ 5⅚ cups",
                  "700g sugar = 3½ cups",
                  "700g butter ≈ 3⅛ cups",
                  "700g honey ≈ 2 cups",
                  "700g water ≈ 3 cups (about 700 mL)",
                  "700g ≈ 24.7 ounces ≈ 1.54 pounds",
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
                There is no single answer to &quot;how many cups is 700 grams.&quot; It depends on what you are measuring. Use the table above for a quick answer, and when a recipe&apos;s result depends on getting the amount right, weighing 700 grams on a scale is the surest way to hit it exactly.
              </p>
            </section>

            <section
              className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500"
              style={{ borderColor: `${ACCENT}15` }}
            >
              <p className="mb-2 font-semibold text-gray-600">More Converters</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { name: "650 grams to cups", href: "/650-grams-to-cups" },
                  { name: "600 grams to cups", href: "/600-grams-to-cups" },
                  { name: "550 grams to cups", href: "/550-grams-to-cups" },
                  { name: "500 grams to cups", href: "/500-grams-to-cups" },
                  { name: "Cups to grams", href: "/cups-to-grams" },
                  { name: "Grams to ounces", href: "/grams-to-ounces" },
                  { name: "All ingredients", href: "/ingredients" },
                  { name: "Accuracy guide", href: "/grams-to-cups-accuracy" },
                  { name: "ML to cups", href: "/ml-to-cups" },
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