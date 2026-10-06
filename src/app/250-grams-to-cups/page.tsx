import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "250 Grams to Cups — Full Ingredient Conversion Chart",
  description: "How many cups is 250 grams? It depends on the ingredient. A complete chart covering flour, sugar, butter, honey, and 90+ other ingredients across 9 categories.",
  alternates: { canonical: "/250-grams-to-cups" },
  openGraph: {
    title: "250 Grams to Cups — Full Ingredient Conversion Chart",
    description: "250 grams is about 2⅛ cups of flour, 1¼ cups of sugar, or 1⅛ cups of butter — see the full chart.",
    url: "/250-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "250 Grams to Cups — Full Ingredient Conversion Chart",
    description: "How many cups is 250 grams? It depends on the ingredient — see the full chart.",
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
  { name: "All-purpose flour", href: "/flour", cups: "2⅛ cups", tbsp: "33.3 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "1¼ cups", tbsp: "20 tbsp" },
  { name: "Powdered sugar", href: "/powdered-sugar", cups: "2⅛ cups", tbsp: "33.3 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "~1⅛ cups", tbsp: "18.2 tbsp" },
  { name: "Butter", href: "/butter", cups: "~1⅛ cups", tbsp: "17.6 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~1⅛ cups", tbsp: "18.3 tbsp" },
  { name: "Milk", href: "/milk", cups: "1 cup (scant)", tbsp: "16.9 tbsp" },
  { name: "Water", href: "/water", cups: "1 cup (scant)", tbsp: "16.9 tbsp" },
  { name: "Honey", href: "/honey", cups: "~¾ cup", tbsp: "11.8 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~1⅓ cups", tbsp: "21.6 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "~2¾ cups", tbsp: "44.4 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "~2⅞ cups", tbsp: "47 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "~1½ cups", tbsp: "23.5 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~1¾ cups", tbsp: "28 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~⅞ cup", tbsp: "13.8 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "~1⅛ cups", tbsp: "18.2 tbsp" },
];

const categories: IngredientGroup[] = [
  { id: "flours", title: "Flours", rows: [
    { name: "All-purpose flour", href: "/flour", cups: "2.000 cups", tbsp: "32.0", tsp: "96.0", gpc: "125" },
    { name: "Bread flour", cups: "1.969 cups", tbsp: "31.5", tsp: "94.5", gpc: "127" },
    { name: "Cake flour", cups: "2.193 cups", tbsp: "35.1", tsp: "105.3", gpc: "114" },
    { name: "Whole wheat flour", cups: "2.083 cups", tbsp: "33.3", tsp: "100.0", gpc: "120" },
    { name: "Almond flour", cups: "2.604 cups", tbsp: "41.7", tsp: "125.0", gpc: "96" },
    { name: "Coconut flour", cups: "1.953 cups", tbsp: "31.3", tsp: "93.8", gpc: "128" },
  ]},
  { id: "sugars", title: "Sugars and Sweeteners", rows: [
    { name: "Granulated sugar", href: "/sugar", cups: "1.250 cups", tbsp: "20.0", tsp: "60.0", gpc: "200" },
    { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "1.136 cups", tbsp: "18.2", tsp: "54.5", gpc: "220" },
    { name: "Powdered sugar", href: "/powdered-sugar", cups: "2.083 cups", tbsp: "33.3", tsp: "100.0", gpc: "120" },
    { name: "Honey", href: "/honey", cups: "0.735 cup", tbsp: "11.8", tsp: "35.3", gpc: "340" },
    { name: "Maple syrup", cups: "0.776 cup", tbsp: "12.4", tsp: "37.3", gpc: "322" },
    { name: "Molasses", cups: "0.762 cup", tbsp: "12.2", tsp: "36.6", gpc: "328" },
  ]},
  { id: "fats", title: "Butter, Oils and Fats", rows: [
    { name: "Butter", href: "/butter", cups: "1.101 cups", tbsp: "17.6", tsp: "52.9", gpc: "227" },
    { name: "Shortening", cups: "1.220 cups", tbsp: "19.5", tsp: "58.5", gpc: "205" },
    { name: "Vegetable oil", href: "/vegetable-oil", cups: "1.147 cups", tbsp: "18.3", tsp: "55.0", gpc: "218" },
    { name: "Olive oil", cups: "1.157 cups", tbsp: "18.5", tsp: "55.6", gpc: "216" },
    { name: "Coconut oil", cups: "1.147 cups", tbsp: "18.3", tsp: "55.0", gpc: "218" },
  ]},
  { id: "dairy", title: "Dairy and Liquids", rows: [
    { name: "Milk", href: "/milk", cups: "1.020 cups", tbsp: "16.3", tsp: "49.0", gpc: "245" },
    { name: "Heavy cream", cups: "1.050 cups", tbsp: "16.8", tsp: "50.4", gpc: "238" },
    { name: "Yogurt", cups: "1.020 cups", tbsp: "16.3", tsp: "49.0", gpc: "245" },
    { name: "Cream cheese", cups: "1.078 cups", tbsp: "17.2", tsp: "51.7", gpc: "232" },
    { name: "Condensed milk", cups: "0.817 cup", tbsp: "13.1", tsp: "39.2", gpc: "306" },
  ]},
  { id: "grains", title: "Rice, Grains and Pasta", rows: [
    { name: "Uncooked rice", href: "/rice", cups: "1.351 cups", tbsp: "21.6", tsp: "64.9", gpc: "185" },
    { name: "Rolled oats", href: "/oats", cups: "2.778 cups", tbsp: "44.4", tsp: "133.3", gpc: "90" },
    { name: "Quinoa", cups: "1.471 cups", tbsp: "23.5", tsp: "70.6", gpc: "170" },
    { name: "Couscous", cups: "1.445 cups", tbsp: "23.1", tsp: "69.4", gpc: "173" },
    { name: "Dry pasta", cups: "2.500 cups", tbsp: "40.0", tsp: "120.0", gpc: "100" },
  ]},
  { id: "nuts", title: "Nuts and Seeds", rows: [
    { name: "Whole almonds", href: "/almonds", cups: "1.748 cups", tbsp: "28.0", tsp: "83.9", gpc: "143" },
    { name: "Walnuts (chopped)", cups: "2.083 cups", tbsp: "33.3", tsp: "100.0", gpc: "120" },
    { name: "Cashews", cups: "1.825 cups", tbsp: "29.2", tsp: "87.6", gpc: "137" },
    { name: "Peanut butter", cups: "0.969 cup", tbsp: "15.5", tsp: "46.5", gpc: "258" },
    { name: "Sesame seeds", cups: "1.736 cups", tbsp: "27.8", tsp: "83.3", gpc: "144" },
  ]},
  { id: "baking-staples", title: "Baking Staples", rows: [
    { name: "Cocoa powder", href: "/cocoa-powder", cups: "2.907 cups", tbsp: "46.5", tsp: "139.5", gpc: "86" },
    { name: "Chocolate chips", href: "/chocolate-chips", cups: "1.471 cups", tbsp: "23.5", tsp: "70.6", gpc: "170" },
    { name: "Cornstarch", cups: "1.953 cups", tbsp: "31.3", tsp: "93.8", gpc: "128" },
    { name: "Breadcrumbs", cups: "2.315 cups", tbsp: "37.0", tsp: "111.1", gpc: "108" },
    { name: "Baking powder", href: "/baking-powder", cups: "1.136 cups", tbsp: "18.2", tsp: "54.5", gpc: "220" },
    { name: "Salt", href: "/salt", cups: "0.868 cup", tbsp: "13.9", tsp: "41.7", gpc: "288" },
  ]},
  { id: "cheese", title: "Cheese", rows: [
    { name: "Parmesan (grated)", cups: "1.500 cups", tbsp: "40.0", tsp: "120.0", gpc: "100" },
    { name: "Cheddar (shredded)", cups: "2.212 cups", tbsp: "35.4", tsp: "106.2", gpc: "113" },
    { name: "Mozzarella (shredded)", cups: "2.232 cups", tbsp: "35.7", tsp: "107.1", gpc: "112" },
    { name: "Feta (crumbled)", cups: "1.667 cups", tbsp: "26.7", tsp: "80.0", gpc: "150" },
  ]},
];

function MainTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[420px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
            <th className="px-4 py-3 text-left font-semibold text-white">250g in Cups</th>
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
            {["Ingredient", "250g in Cups", "Tbsp", "Tsp", "g per Cup"].map((title) => (
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

export default function TwoFiftyGramsToCups() {
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
              <i className="ri-scales-3-line" /> 90+ ingredients at 250 grams
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">250 Grams to Cups</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              250 grams is a quarter of a kilogram and the standard size for a block of butter across Europe and Australia. Here&apos;s how it breaks down across the ingredients people convert most.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another amount?{" "}
              <Link href="/100-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                100g
              </Link>{" "}
              ·{" "}
              <Link href="/150-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                150g
              </Link>{" "}
              ·{" "}
              <Link href="/200-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                200g
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
            <SimpleConverter ingredients={ingredients} initialGrams={250} />
            
            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                250 grams is about 2⅛ cups of <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, 1¼ cups of <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>sugar</Link>, or 1⅛ cups of <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>. The cup amount depends on the ingredient&apos;s density.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">250 Grams to Cups, by Ingredient</h2>
              <MainTable rows={mainRows} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Figures are based on standard reference weights per cup, a US customary cup, and the spoon-and-level method for dry ingredients. Brand, humidity, and how firmly an ingredient is packed can shift the real number slightly.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why 250 Grams Looks So Different Depending on the Ingredient</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                It all comes back to how much air sits between the particles of whatever&apos;s filling the cup. Flour is light and fluffy, with a fair amount of trapped space between its fine particles, so 250 grams of it takes up a generous 2⅛ cups. Sugar crystals sit much closer together, shrinking that same weight down to 1¼ cups.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                A cup measures space, not amount. The same weight can look like completely different quantities once it&apos;s actually sitting in a measuring cup.
              </p>
            </section>

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 250 Grams Accurately</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <strong className="text-gray-900">With a kitchen scale (most reliable):</strong> Place your bowl on the scale, zero it out, and pour the ingredient in until it reads 250 grams. If you&apos;re working from a recipe that originally listed 250g of butter as &quot;one block,&quot; a scale also confirms your specific stick or package actually weighs what the label says.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "For flour, cocoa, and other light powders, spoon the ingredient into the cup rather than scooping it, then level off the top.",
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
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Full Category Tables</h2>
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
                Like every other weight on this site, &quot;how many cups is 250 grams&quot; only has an answer once you know the ingredient. The table above gets you there quickly for whatever&apos;s on your counter, and whenever precision matters — especially with a quarter-kilogram amount this size — weighing it directly on a scale is the most reliable way to hit the number exactly.
              </p>
            </section>

            <section
              className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500"
              style={{ borderColor: `${ACCENT}15` }}
            >
              <p className="mb-2 font-semibold text-gray-600">More Converters</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { name: "100 grams to cups", href: "/100-grams-to-cups" },
                  { name: "150 grams to cups", href: "/150-grams-to-cups" },
                  { name: "200 grams to cups", href: "/200-grams-to-cups" },
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