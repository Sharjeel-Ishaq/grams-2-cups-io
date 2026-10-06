import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "400 Grams to Cups — Full Ingredient Conversion Chart",
  description: "How many cups is 400 grams? It depends on the ingredient. A complete chart covering flour, sugar, butter, honey, and 90+ other ingredients across 9 categories.",
  alternates: { canonical: "/400-grams-to-cups" },
  openGraph: {
    title: "400 Grams to Cups — Full Ingredient Conversion Chart",
    description: "400 grams is about 3⅓ cups of flour, 2 cups of sugar, or 1¾ cups of butter — see the full chart.",
    url: "/400-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "400 Grams to Cups — Full Ingredient Conversion Chart",
    description: "How many cups is 400 grams? It depends on the ingredient — see the full chart.",
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
  { name: "All-purpose flour", href: "/flour", cups: "3⅓ cups", tbsp: "53.3 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "2 cups", tbsp: "32 tbsp" },
  { name: "Powdered sugar", href: "/powdered-sugar", cups: "3⅓ cups", tbsp: "53.3 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "~1⅞ cups", tbsp: "29.1 tbsp" },
  { name: "Butter", href: "/butter", cups: "~1¾ cups", tbsp: "28.2 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~1⅞ cups", tbsp: "29.4 tbsp" },
  { name: "Milk", href: "/milk", cups: "~1⅔ cups", tbsp: "27 tbsp" },
  { name: "Water", href: "/water", cups: "~1⅔ cups", tbsp: "27.1 tbsp" },
  { name: "Honey", href: "/honey", cups: "~1⅛ cups", tbsp: "18.8 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~2⅛ cups", tbsp: "34.6 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "~4½ cups", tbsp: "71.1 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "~4¾ cups", tbsp: "75.3 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "~2⅜ cups", tbsp: "37.6 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~2¾ cups", tbsp: "44.8 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~1⅜ cups", tbsp: "22.2 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "~1⅞ cups", tbsp: "29.1 tbsp" },
];

const categories: IngredientGroup[] = [
  { id: "flours", title: "Flours", rows: [
    { name: "All-purpose flour", href: "/flour", cups: "3.200 cups", tbsp: "51.2", tsp: "153.6", gpc: "125" },
    { name: "Bread flour", cups: "3.150 cups", tbsp: "50.4", tsp: "151.2", gpc: "127" },
    { name: "Cake flour", cups: "3.509 cups", tbsp: "56.1", tsp: "168.4", gpc: "114" },
    { name: "Whole wheat flour", cups: "3.333 cups", tbsp: "53.3", tsp: "160.0", gpc: "120" },
    { name: "Almond flour", cups: "4.167 cups", tbsp: "66.7", tsp: "200.0", gpc: "96" },
    { name: "Coconut flour", cups: "3.125 cups", tbsp: "50.0", tsp: "150.0", gpc: "128" },
  ]},
  { id: "sugars", title: "Sugars and Sweeteners", rows: [
    { name: "Granulated sugar", href: "/sugar", cups: "2.000 cups", tbsp: "32.0", tsp: "96.0", gpc: "200" },
    { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "1.818 cups", tbsp: "29.1", tsp: "87.3", gpc: "220" },
    { name: "Powdered sugar", href: "/powdered-sugar", cups: "3.333 cups", tbsp: "53.3", tsp: "160.0", gpc: "120" },
    { name: "Honey", href: "/honey", cups: "1.176 cups", tbsp: "18.8", tsp: "56.5", gpc: "340" },
    { name: "Maple syrup", cups: "1.242 cups", tbsp: "19.9", tsp: "59.6", gpc: "322" },
    { name: "Molasses", cups: "1.220 cups", tbsp: "19.5", tsp: "58.5", gpc: "328" },
  ]},
  { id: "fats", title: "Butter, Oils and Fats", rows: [
    { name: "Butter", href: "/butter", cups: "1.762 cups", tbsp: "28.2", tsp: "84.6", gpc: "227" },
    { name: "Shortening", cups: "1.951 cups", tbsp: "31.2", tsp: "93.7", gpc: "205" },
    { name: "Vegetable oil", href: "/vegetable-oil", cups: "1.835 cups", tbsp: "29.4", tsp: "88.1", gpc: "218" },
    { name: "Olive oil", cups: "1.852 cups", tbsp: "29.6", tsp: "88.9", gpc: "216" },
    { name: "Coconut oil", cups: "1.835 cups", tbsp: "29.4", tsp: "88.1", gpc: "218" },
  ]},
  { id: "dairy", title: "Dairy and Liquids", rows: [
    { name: "Milk", href: "/milk", cups: "1.633 cups", tbsp: "26.1", tsp: "78.4", gpc: "245" },
    { name: "Heavy cream", cups: "1.681 cups", tbsp: "26.9", tsp: "80.7", gpc: "238" },
    { name: "Yogurt", cups: "1.633 cups", tbsp: "26.1", tsp: "78.4", gpc: "245" },
    { name: "Cream cheese", cups: "1.724 cups", tbsp: "27.6", tsp: "82.8", gpc: "232" },
    { name: "Condensed milk", cups: "1.307 cups", tbsp: "20.9", tsp: "62.7", gpc: "306" },
  ]},
  { id: "grains", title: "Rice, Grains and Pasta", rows: [
    { name: "Uncooked rice", href: "/rice", cups: "2.162 cups", tbsp: "34.6", tsp: "103.8", gpc: "185" },
    { name: "Rolled oats", href: "/oats", cups: "4.444 cups", tbsp: "71.1", tsp: "213.3", gpc: "90" },
    { name: "Quinoa", cups: "2.353 cups", tbsp: "37.6", tsp: "112.9", gpc: "170" },
    { name: "Couscous", cups: "2.312 cups", tbsp: "37.0", tsp: "111.0", gpc: "173" },
    { name: "Dry pasta", cups: "4.000 cups", tbsp: "64.0", tsp: "192.0", gpc: "100" },
  ]},
  { id: "nuts", title: "Nuts and Seeds", rows: [
    { name: "Whole almonds", href: "/almonds", cups: "2.797 cups", tbsp: "44.8", tsp: "134.3", gpc: "143" },
    { name: "Walnuts (chopped)", cups: "3.333 cups", tbsp: "53.3", tsp: "160.0", gpc: "120" },
    { name: "Cashews", cups: "2.920 cups", tbsp: "46.7", tsp: "140.1", gpc: "137" },
    { name: "Peanut butter", cups: "1.550 cups", tbsp: "24.8", tsp: "74.4", gpc: "258" },
    { name: "Sesame seeds", cups: "2.778 cups", tbsp: "44.4", tsp: "133.3", gpc: "144" },
  ]},
  { id: "baking-staples", title: "Baking Staples", rows: [
    { name: "Cocoa powder", href: "/cocoa-powder", cups: "4.651 cups", tbsp: "74.4", tsp: "223.3", gpc: "86" },
    { name: "Chocolate chips", href: "/chocolate-chips", cups: "2.353 cups", tbsp: "37.6", tsp: "112.9", gpc: "170" },
    { name: "Cornstarch", cups: "3.125 cups", tbsp: "50.0", tsp: "150.0", gpc: "128" },
    { name: "Breadcrumbs", cups: "3.704 cups", tbsp: "59.3", tsp: "177.8", gpc: "108" },
    { name: "Baking powder", href: "/baking-powder", cups: "1.818 cups", tbsp: "29.1", tsp: "87.3", gpc: "220" },
    { name: "Salt", href: "/salt", cups: "1.389 cups", tbsp: "22.2", tsp: "66.7", gpc: "288" },
  ]},
  { id: "cheese", title: "Cheese", rows: [
    { name: "Parmesan (grated)", cups: "4.000 cups", tbsp: "64.0", tsp: "192.0", gpc: "100" },
    { name: "Cheddar (shredded)", cups: "3.540 cups", tbsp: "56.6", tsp: "169.9", gpc: "113" },
    { name: "Mozzarella (shredded)", cups: "3.571 cups", tbsp: "57.1", tsp: "171.4", gpc: "112" },
    { name: "Feta (crumbled)", cups: "2.667 cups", tbsp: "42.7", tsp: "128.0", gpc: "150" },
  ]},
];

function MainTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[420px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
            <th className="px-4 py-3 text-left font-semibold text-white">400g in Cups</th>
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
            {["Ingredient", "400g in Cups", "Tbsp", "Tsp", "g per Cup"].map((title) => (
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

export default function FourHundredGramsToCups() {
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
              <i className="ri-scales-3-line" /> 90+ ingredients at 400 grams
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">400 Grams to Cups</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              400 grams is a number you&apos;ll run into a lot without even trying — it&apos;s the net weight printed on a standard can of condensed milk, and it&apos;s a common amount for a small loaf of bread. Handy to recognize, but like everything else on this site, the cup amount it fills still depends entirely on what you&apos;re measuring.
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
            <SimpleConverter ingredients={ingredients} initialGrams={400} />

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                400 grams is about 3⅓ cups of <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, 2 cups of <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>sugar</Link>, or 1¾ cups of <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>. The cup amount always comes down to the ingredient&apos;s density. Find yours in the table below.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">400 Grams to Cups, by Ingredient</h2>
              <MainTable rows={mainRows} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Figures are based on standard reference weights per cup (flour at 120g/cup, sugar at 200g/cup, and so on), using a US customary cup and the spoon-and-level method for dry ingredients. Brand, humidity, and how firmly an ingredient is packed can shift the real number slightly.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why 400 Grams Never Fills the Cup the Same Way Twice</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                It comes down to how much air sits between the particles of whatever&apos;s being measured. Flour is light and airy, so 400 grams of it spreads out to a generous 3⅓ cups. Sugar crystals sit much closer together with far less trapped air, shrinking that same weight down to a clean 2 cups. Honey isn&apos;t a particle-based ingredient at all — it&apos;s a thick, syrupy liquid with barely any air in it — which is why 400 grams of honey only reaches about 1⅛ cups, less than half of what flour takes up at the same weight.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                The short version: a cup measures space, not amount. The exact same 400 grams can look like completely different quantities once it&apos;s actually sitting in a measuring cup.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Closer Look at a Few Common Ones</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>400g of flour comes out to about 3⅓ cups — a solid amount for a standard loaf of bread or a batch of dinner rolls.</li>
                <li>400g of sugar is a clean 2 cups, one of the tidier conversions to keep in mind.</li>
                <li>400g of butter is roughly 1¾ cups — close to 3½ standard US sticks (each stick being ½ cup).</li>
                <li>400g of honey only fills about 1⅛ cups, a good reminder of just how much denser honey is compared to almost every dry ingredient on the shelf.</li>
              </ul>
            </section>

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 400 Grams Accurately</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <strong className="text-gray-900">With a kitchen scale (most reliable):</strong> Set your mixing bowl on the scale, zero it out, and pour the ingredient in until it reads 400 grams. At a larger amount like this, a small percentage error in a cup measurement adds up to a bigger gram gap than it would with a smaller quantity, so a scale is especially worth the extra minute.
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
                There&apos;s no single answer to &quot;how many cups is 400 grams&quot; — it always depends on what&apos;s filling the cup. The table above gets you there instantly for whatever&apos;s on your counter, and for an amount this size, where even a small measuring slip compounds into a noticeable gram gap, weighing it directly on a scale is still the most reliable way to hit 400 grams exactly.
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
                  { name: "350 grams to cups", href: "/350-grams-to-cups" },
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