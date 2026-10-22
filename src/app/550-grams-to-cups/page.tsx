import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "550 Grams to Cups — Full Ingredient Conversion Chart",
  description:
    "How many cups is 550 grams? A complete chart covering flour, sugar, butter, honey, and 90+ other ingredients across 8 categories.",
  alternates: { canonical: "/550-grams-to-cups" },
  openGraph: {
    title: "550 Grams to Cups — Full Ingredient Conversion Chart",
    description:
      "550 grams is about 4⅝ cups of flour, 2¾ cups of sugar, or 2⅜ cups of butter — see the full chart.",
    url: "/550-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "550 Grams to Cups — Full Ingredient Conversion Chart",
    description:
      "How many cups is 550 grams? It depends on the ingredient — see the full chart.",
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
  { name: "All-Purpose Flour", slug: "flour", gramsPerCup: 125, notes: "Spoon and level" },
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
  { name: "All-purpose flour", href: "/flour", cups: "~4⅝ cups", tbsp: "73.3 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "2¾ cups", tbsp: "44 tbsp" },
  { name: "Powdered sugar", href: "/powdered-sugar", cups: "~4⅝ cups", tbsp: "73.3 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "2½ cups", tbsp: "40 tbsp" },
  { name: "Butter", href: "/butter", cups: "~2⅜ cups", tbsp: "38.8 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~2½ cups", tbsp: "40.4 tbsp" },
  { name: "Milk", href: "/milk", cups: "~2⅓ cups", tbsp: "37.1 tbsp" },
  { name: "Water", href: "/water", cups: "~2⅓ cups", tbsp: "37.2 tbsp" },
  { name: "Honey", href: "/honey", cups: "~1⅝ cups", tbsp: "25.9 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~3 cups (scant)", tbsp: "47.6 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "~6⅛ cups", tbsp: "97.8 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "~6½ cups", tbsp: "103.5 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "~3¼ cups", tbsp: "51.8 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~3⅞ cups", tbsp: "61.5 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~1⅞ cups", tbsp: "30.3 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "2½ cups", tbsp: "40 tbsp" },
];

const categories: IngredientGroup[] = [
  {
    id: "flours",
    title: "Flours",
    rows: [
      { name: "All-purpose flour", href: "/flour", cups: "4.400 cups", tbsp: "70.400", tsp: "211.200", gpc: "125" },
      { name: "Bread flour", cups: "4.331 cups", tbsp: "69.291", tsp: "207.874", gpc: "127" },
      { name: "Cake flour", cups: "4.825 cups", tbsp: "77.193", tsp: "231.579", gpc: "114" },
      { name: "Whole wheat flour", cups: "4.583 cups", tbsp: "73.333", tsp: "220.000", gpc: "120" },
      { name: "Almond flour", cups: "5.729 cups", tbsp: "91.667", tsp: "275.000", gpc: "96" },
      { name: "Coconut flour", cups: "4.297 cups", tbsp: "68.750", tsp: "206.250", gpc: "128" },
    ],
  },
  {
    id: "sugars",
    title: "Sugars and Sweeteners",
    rows: [
      { name: "Granulated sugar", href: "/sugar", cups: "2.750 cups", tbsp: "44.000", tsp: "132.000", gpc: "200" },
      { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "2.500 cups", tbsp: "40.000", tsp: "120.000", gpc: "220" },
      { name: "Powdered sugar", href: "/powdered-sugar", cups: "4.583 cups", tbsp: "73.333", tsp: "220.000", gpc: "120" },
      { name: "Honey", href: "/honey", cups: "1.618 cups", tbsp: "25.882", tsp: "77.647", gpc: "340" },
      { name: "Maple syrup", cups: "1.708 cups", tbsp: "27.329", tsp: "81.988", gpc: "322" },
      { name: "Molasses", cups: "1.677 cups", tbsp: "26.829", tsp: "80.488", gpc: "328" },
    ],
  },
  {
    id: "fats",
    title: "Butter, Oils and Fats",
    rows: [
      { name: "Butter", href: "/butter", cups: "2.423 cups", tbsp: "38.767", tsp: "116.300", gpc: "227" },
      { name: "Shortening", cups: "2.683 cups", tbsp: "42.927", tsp: "128.780", gpc: "205" },
      { name: "Vegetable oil", href: "/vegetable-oil", cups: "2.523 cups", tbsp: "40.367", tsp: "121.101", gpc: "218" },
      { name: "Olive oil", cups: "2.546 cups", tbsp: "40.741", tsp: "122.222", gpc: "216" },
      { name: "Coconut oil", cups: "2.523 cups", tbsp: "40.367", tsp: "121.101", gpc: "218" },
    ],
  },
  {
    id: "dairy",
    title: "Dairy and Liquids",
    rows: [
      { name: "Milk", href: "/milk", cups: "2.245 cups", tbsp: "35.918", tsp: "107.755", gpc: "245" },
      { name: "Heavy cream", cups: "2.311 cups", tbsp: "36.975", tsp: "110.924", gpc: "238" },
      { name: "Yogurt", cups: "2.245 cups", tbsp: "35.918", tsp: "107.755", gpc: "245" },
      { name: "Cream cheese", cups: "2.371 cups", tbsp: "37.931", tsp: "113.793", gpc: "232" },
      { name: "Condensed milk", cups: "1.797 cups", tbsp: "28.758", tsp: "86.275", gpc: "306" },
    ],
  },
  {
    id: "grains",
    title: "Rice, Grains and Pasta",
    rows: [
      { name: "Uncooked rice", href: "/rice", cups: "2.973 cups", tbsp: "47.568", tsp: "142.703", gpc: "185" },
      { name: "Rolled oats", href: "/oats", cups: "6.111 cups", tbsp: "97.778", tsp: "293.333", gpc: "90" },
      { name: "Quinoa", cups: "3.235 cups", tbsp: "51.765", tsp: "155.294", gpc: "170" },
      { name: "Couscous", cups: "3.179 cups", tbsp: "50.867", tsp: "152.601", gpc: "173" },
      { name: "Dry pasta", cups: "5.500 cups", tbsp: "88.000", tsp: "264.000", gpc: "100" },
    ],
  },
  {
    id: "nuts",
    title: "Nuts and Seeds",
    rows: [
      { name: "Whole almonds", href: "/almonds", cups: "3.846 cups", tbsp: "61.538", tsp: "184.615", gpc: "143" },
      { name: "Walnuts (chopped)", cups: "4.583 cups", tbsp: "73.333", tsp: "220.000", gpc: "120" },
      { name: "Cashews", cups: "4.015 cups", tbsp: "64.234", tsp: "192.701", gpc: "137" },
      { name: "Peanut butter", cups: "2.132 cups", tbsp: "34.109", tsp: "102.326", gpc: "258" },
      { name: "Sesame seeds", cups: "3.819 cups", tbsp: "61.111", tsp: "183.333", gpc: "144" },
      { name: "Tahini", href: "/tahini", cups: "2.29 cups", tbsp: "36.7", tsp: "110", gpc: "240" },
    ],
  },
  {
    id: "baking-staples",
    title: "Baking Staples",
    rows: [
      { name: "Cocoa powder", href: "/cocoa-powder", cups: "6.395 cups", tbsp: "102.326", tsp: "306.977", gpc: "86" },
      { name: "Chocolate chips", href: "/chocolate-chips", cups: "3.235 cups", tbsp: "51.765", tsp: "155.294", gpc: "170" },
      { name: "Cornstarch", cups: "4.297 cups", tbsp: "68.750", tsp: "206.250", gpc: "128" },
      { name: "Breadcrumbs", cups: "5.093 cups", tbsp: "81.481", tsp: "244.444", gpc: "108" },
      { name: "Baking powder", href: "/baking-powder", cups: "2.500 cups", tbsp: "40.000", tsp: "120.000", gpc: "220" },
      { name: "Salt", href: "/salt", cups: "1.910 cups", tbsp: "30.556", tsp: "91.667", gpc: "288" },
    ],
  },
  {
    id: "cheese",
    title: "Cheese",
    rows: [
      { name: "Parmesan (grated)", cups: "5.500 cups", tbsp: "88.000", tsp: "264.000", gpc: "100" },
      { name: "Cheddar (shredded)", cups: "4.867 cups", tbsp: "77.876", tsp: "233.628", gpc: "113" },
      { name: "Mozzarella (shredded)", cups: "4.911 cups", tbsp: "78.571", tsp: "235.714", gpc: "112" },
      { name: "Feta (crumbled)", cups: "3.667 cups", tbsp: "58.667", tsp: "176.000", gpc: "150" },
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
            <th className="px-4 py-3 text-left font-semibold text-white">550g in Cups</th>
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
            {["Ingredient", "550g in Cups", "Tbsp", "Tsp", "g per Cup"].map((title) => (
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

export default function FiveHundredFiftyGramsToCups() {
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
              <i className="ri-scales-3-line" /> 90+ ingredients at 550 grams
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              550 Grams to Cups
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              550 grams is about 19½ ounces, which works out to a little over 1 pound 3 ounces. That makes it a handy &quot;just over a pound&quot; amount for bigger bakes, like a sandwich loaf or a couple of pizza bases. But once you try to turn those 550 grams into cups, the answer swings a lot, depending on what&apos;s in the bowl.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another amount?{" "}
              <Link href="/500-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                500g
              </Link>{" "}
              ·{" "}
              <Link href="/450-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                450g
              </Link>{" "}
              .{" "}
              <Link href="/400-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                400g
              </Link>
              {" "}·{" "}
              <Link href="/600-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                600g
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
            <SimpleConverter ingredients={ingredients} initialGrams={550} />

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                550 grams is about 4⅝ cups of <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, 2¾ cups of <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>granulated sugar</Link>, or 2⅜ cups of <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>. The cup amount always depends on the ingredient&apos;s density. Find yours in the table below.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">550 Grams to Cups, by Ingredient</h2>
              <MainTable rows={mainRows} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                These figures use standard reference weights per cup (flour at 120 g, sugar at 200 g, butter at 227 g, and so on), a US customary cup, and the spoon-and-level method for dry ingredients. Some other sites use 125 g for a cup of flour, which gives a slightly smaller answer (about 4⅜ cups). Neither is wrong. They start from different reference weights, so pick one and stay with it through a whole recipe.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why the Same 550 Grams Looks So Different</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                It comes down to how much air sits between the tiny pieces of whatever you&apos;re measuring. Flour is light and fluffy, so 550 grams of it spreads out to more than 4½ cups. Sugar crystals sit closer together, so the same weight fits into 2¾ cups. Honey is a thick liquid with almost no trapped air, so 550 grams of it fills only about 1⅝ cups.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                A cup measures space, not amount. The weight on your scale stays the same, but the room it takes up changes with every ingredient.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Closer Look at a Few Common Ones</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong className="text-gray-900">550g of flour</strong> is a little over 4½ cups. That&apos;s about right for a large sandwich loaf, or the dough for a couple of pizzas.</li>
                <li><strong className="text-gray-900">550g of sugar</strong> is a neat 2¾ cups, one of the easiest numbers in this series to remember.</li>
                <li><strong className="text-gray-900">550g of butter</strong> comes to about 2⅜ cups. That&apos;s almost 5 standard US sticks, since each stick is ½ cup.</li>
                <li><strong className="text-gray-900">550g of honey</strong> fills only about 1⅝ cups, which shows how dense honey is compared to anything dry.</li>
                <li><strong className="text-gray-900">550g of uncooked rice</strong> is just under 3 cups, a good amount for a big family meal or a week of meal prep.</li>
              </ul>
            </section>

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 550 Grams Accurately</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <strong className="text-gray-900">With a kitchen scale (most reliable):</strong> Put your bowl on the scale, press the tare button to zero it, and pour until it reads 550 grams. At this size, a small cup error adds up fast. A cup that&apos;s off by just a few grams each time can leave you short or over by a noticeable amount.
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
                If a recipe uses ounces instead, our <Link href="/grams-to-ounces" className="font-semibold hover:underline" style={{ color: ACCENT }}>grams to ounces converter</Link> will do the switch for you, and the <Link href="/blog/spoon-and-level-method" className="font-semibold hover:underline" style={{ color: ACCENT }}>spoon-and-level guide</Link> shows the cup technique step by step.
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
                  "550g flour ≈ 4⅝ cups",
                  "550g sugar = 2¾ cups",
                  "550g butter ≈ 2⅜ cups",
                  "550g honey ≈ 1⅝ cups",
                  "550g rice (uncooked) ≈ 3 cups (scant)",
                  "550g ≈ 19½ ounces",
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
                There&apos;s no single answer to &quot;how many cups is 550 grams.&quot; It depends on what you&apos;re measuring. Use the table above for a quick answer, and when a recipe&apos;s result depends on getting the amount right, weighing 550 grams on a scale is the surest way to hit it exactly.
              </p>
            </section>

            <section
              className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500"
              style={{ borderColor: `${ACCENT}15` }}
            >
              <p className="mb-2 font-semibold text-gray-600">More Converters</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { name: "500 grams to cups", href: "/500-grams-to-cups" },
                  { name: "450 grams to cups", href: "/450-grams-to-cups" },
                  { name: "400 grams to cups", href: "/400-grams-to-cups" },
                  { name: "300 grams to cups", href: "/300-grams-to-cups" },
                  { name: "250 grams to cups", href: "/250-grams-to-cups" },
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