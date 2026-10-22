import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "300 Grams to Cups — Full Ingredient Conversion Chart",
  description: "How many cups is 300 grams? It depends on the ingredient. A complete chart covering flour, sugar, butter, honey, and 90+ other ingredients across 9 categories.",
  alternates: { canonical: "/300-grams-to-cups" },
  openGraph: {
    title: "300 Grams to Cups — Full Ingredient Conversion Chart",
    description: "300 grams is about 2½ cups of flour, 1½ cups of sugar, or 1⅓ cups of butter — see the full chart.",
    url: "/300-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "300 Grams to Cups — Full Ingredient Conversion Chart",
    description: "How many cups is 300 grams? It depends on the ingredient — see the full chart.",
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
  { name: "All-purpose flour", href: "/flour", cups: "2½ cups", tbsp: "40 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "1½ cups", tbsp: "24 tbsp" },
  { name: "Powdered sugar", href: "/powdered-sugar", cups: "2½ cups", tbsp: "40 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "~1⅜ cups", tbsp: "21.8 tbsp" },
  { name: "Butter", href: "/butter", cups: "~1⅓ cups", tbsp: "21.1 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~1⅜ cups", tbsp: "22 tbsp" },
  { name: "Milk", href: "/milk", cups: "~1¼ cups", tbsp: "20.3 tbsp" },
  { name: "Water", href: "/water", cups: "~1¼ cups", tbsp: "20.3 tbsp" },
  { name: "Honey", href: "/honey", cups: "~⅞ cup", tbsp: "14.1 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~1⅝ cups", tbsp: "26 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "3⅓ cups", tbsp: "53.3 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "~3½ cups", tbsp: "56.5 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "~1¾ cups", tbsp: "28.2 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~2 cups", tbsp: "33.6 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~1 cup", tbsp: "16.6 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "~1⅜ cups", tbsp: "21.8 tbsp" },
];

const categories: IngredientGroup[] = [
  { id: "flours", title: "Flours", rows: [
    { name: "All-purpose flour", href: "/flour", cups: "2.400 cups", tbsp: "38.400", tsp: "115.200", gpc: "125 g" },
    { name: "Bread flour", cups: "2.362 cups", tbsp: "37.795", tsp: "113.386", gpc: "127 g" },
    { name: "Cake flour", cups: "2.632 cups", tbsp: "42.105", tsp: "126.316", gpc: "114 g" },
    { name: "Whole wheat flour", cups: "2.500 cups", tbsp: "40.000", tsp: "120.000", gpc: "120 g" },
    { name: "Almond flour", cups: "3.125 cups", tbsp: "50.000", tsp: "150.000", gpc: "96 g" },
    { name: "Coconut flour", cups: "2.344 cups", tbsp: "37.500", tsp: "112.500", gpc: "128 g" },
  ]},
  { id: "sugars", title: "Sugars and Sweeteners", rows: [
    { name: "Granulated sugar", href: "/sugar", cups: "1.500 cups", tbsp: "24.000", tsp: "72.000", gpc: "200 g" },
    { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "1.364 cups", tbsp: "21.818", tsp: "65.455", gpc: "220 g" },
    { name: "Powdered sugar", href: "/powdered-sugar", cups: "2.500 cups", tbsp: "40.000", tsp: "120.000", gpc: "120 g" },
    { name: "Honey", href: "/honey", cups: "0.882 cup", tbsp: "14.118", tsp: "42.353", gpc: "340 g" },
    { name: "Maple syrup", cups: "0.932 cup", tbsp: "14.907", tsp: "44.720", gpc: "322 g" },
    { name: "Molasses", cups: "0.915 cup", tbsp: "14.634", tsp: "43.902", gpc: "328 g" },
  ]},
  { id: "fats", title: "Butter, Oils and Fats", rows: [
    { name: "Butter", href: "/butter", cups: "1.322 cups", tbsp: "21.145", tsp: "63.436", gpc: "227 g" },
    { name: "Shortening", cups: "1.463 cups", tbsp: "23.415", tsp: "70.244", gpc: "205 g" },
    { name: "Vegetable oil", href: "/vegetable-oil", cups: "1.376 cups", tbsp: "22.018", tsp: "66.055", gpc: "218 g" },
    { name: "Olive oil", cups: "1.389 cups", tbsp: "22.222", tsp: "66.667", gpc: "216 g" },
    { name: "Coconut oil", cups: "1.376 cups", tbsp: "22.018", tsp: "66.055", gpc: "218 g" },
  ]},
  { id: "dairy", title: "Dairy and Liquids", rows: [
    { name: "Milk", href: "/milk", cups: "1.224 cups", tbsp: "19.592", tsp: "58.776", gpc: "245 g" },
    { name: "Heavy cream", cups: "1.261 cups", tbsp: "20.168", tsp: "60.504", gpc: "238 g" },
    { name: "Yogurt", cups: "1.224 cups", tbsp: "19.592", tsp: "58.776", gpc: "245 g" },
    { name: "Cream cheese", cups: "1.293 cups", tbsp: "20.690", tsp: "62.069", gpc: "232 g" },
    { name: "Condensed milk", cups: "0.980 cup", tbsp: "15.686", tsp: "47.059", gpc: "306 g" },
  ]},
  { id: "grains", title: "Rice, Grains and Pasta", rows: [
    { name: "Uncooked rice", href: "/rice", cups: "1.622 cups", tbsp: "25.946", tsp: "77.838", gpc: "185 g" },
    { name: "Rolled oats", href: "/oats", cups: "3.333 cups", tbsp: "53.333", tsp: "160.000", gpc: "90 g" },
    { name: "Quinoa", cups: "1.765 cups", tbsp: "28.235", tsp: "84.706", gpc: "170 g" },
    { name: "Couscous", cups: "1.734 cups", tbsp: "27.746", tsp: "83.237", gpc: "173 g" },
    { name: "Dry pasta", cups: "3.000 cups", tbsp: "48.000", tsp: "144.000", gpc: "100 g" },
  ]},
  { id: "nuts", title: "Nuts and Seeds", rows: [
    { name: "Whole almonds", href: "/almonds", cups: "2.098 cups", tbsp: "33.566", tsp: "100.699", gpc: "143 g" },
    { name: "Walnuts (chopped)", cups: "2.500 cups", tbsp: "40.000", tsp: "120.000", gpc: "120 g" },
    { name: "Cashews", cups: "2.190 cups", tbsp: "35.036", tsp: "105.109", gpc: "137 g" },
    { name: "Peanut butter", cups: "1.163 cups", tbsp: "18.605", tsp: "55.814", gpc: "258 g" },
    { name: "Sesame seeds", cups: "2.083 cups", tbsp: "33.333", tsp: "100.000", gpc: "144 g" },
    { name: "Tahini", href: "/tahini", cups: "1.25 cups", tbsp: "20", tsp: "60", gpc: "240" },
  ]},
  { id: "baking-staples", title: "Baking Staples", rows: [
    { name: "Cocoa powder", href: "/cocoa-powder", cups: "3.488 cups", tbsp: "55.814", tsp: "167.442", gpc: "86 g" },
    { name: "Chocolate chips", href: "/chocolate-chips", cups: "1.765 cups", tbsp: "28.235", tsp: "84.706", gpc: "170 g" },
    { name: "Cornstarch", cups: "2.344 cups", tbsp: "37.500", tsp: "112.500", gpc: "128 g" },
    { name: "Breadcrumbs", cups: "2.778 cups", tbsp: "44.444", tsp: "133.333", gpc: "108 g" },
    { name: "Baking powder", href: "/baking-powder", cups: "1.364 cups", tbsp: "21.818", tsp: "65.455", gpc: "220 g" },
    { name: "Salt", href: "/salt", cups: "1.042 cups", tbsp: "16.667", tsp: "50.000", gpc: "288 g" },
  ]},
  { id: "cheese", title: "Cheese", rows: [
    { name: "Parmesan (grated)", cups: "3.000 cups", tbsp: "48.000", tsp: "144.000", gpc: "100 g" },
    { name: "Cheddar (shredded)", cups: "2.655 cups", tbsp: "42.478", tsp: "127.434", gpc: "113 g" },
    { name: "Mozzarella (shredded)", cups: "2.679 cups", tbsp: "42.857", tsp: "128.571", gpc: "112 g" },
    { name: "Feta (crumbled)", cups: "2.000 cups", tbsp: "32.000", tsp: "96.000", gpc: "150 g" },
  ]},
];

function MainTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[420px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
            <th className="px-4 py-3 text-left font-semibold text-white">300g in Cups</th>
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
            {["Ingredient", "300g in Cups", "Tbsp", "Tsp", "g per Cup"].map((title) => (
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

export default function ThreeHundredGramsToCups() {
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
              <i className="ri-scales-3-line" /> 90+ ingredients at 300 grams
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">300 Grams to Cups</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              300 grams is a solid, recipe-sized amount — big enough to matter if the conversion is off, but still small enough that most people are converting it by hand rather than scaling a whole batch. And like every other weight on this site, it doesn&apos;t translate to one fixed number of cups.
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
            <SimpleConverter ingredients={ingredients} initialGrams={300} />

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                300 grams is about 2½ cups of <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, 1½ cups of <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>sugar</Link>, or 1⅓ cups of <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>. The actual cup amount always comes down to the ingredient&apos;s density.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">300 Grams to Cups, by Ingredient</h2>
              <MainTable rows={mainRows} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Figures are based on standard reference weights per cup (flour at 120g/cup, sugar at 200g/cup, and so on), using a US customary cup and the spoon-and-level method for dry ingredients. Brand, humidity, and how firmly an ingredient is packed can shift the real number slightly — for anything density-sensitive, cross-checking against a source like the FAO&apos;s ingredient density database is a good habit.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why 300 Grams Never Fills the Same Amount of Cup</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                It comes down to how much air sits between the particles of whatever&apos;s being measured. Flour is light and airy, with plenty of trapped space between its fine particles, so 300 grams of it takes up a fairly generous 2½ cups. Granulated sugar crystals sit much closer together, so the same weight shrinks down to 1½ cups. Honey isn&apos;t made of particles at all — it&apos;s a dense, syrupy liquid with almost no trapped air — which is why 300 grams of honey doesn&apos;t even fill a full cup.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                The short version: a cup measures how much space something occupies, not how much of it actually exists. Weight stays constant no matter what you&apos;re measuring; volume swings wildly depending on the ingredient&apos;s density.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Closer Look at a Few Common Ones</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>300g of flour comes out to 2½ cups — a common amount for a standard loaf of bread or a batch of a dozen large cookies.</li>
                <li>300g of sugar is a clean 1½ cups, one of the easier numbers to remember since it lines up neatly with common recipe fractions.</li>
                <li>300g of butter is about 1⅓ cups — a bit more than 2½ standard US sticks (each stick is ½ cup).</li>
                <li>300g of honey comes out to just under 1 cup, at roughly ⅞ cup — a good example of how far volume and weight drift apart once an ingredient gets dense.</li>
                <li>300g of rolled oats fills a full 3⅓ cups — the opposite end of the spectrum from honey, since oats trap so much air between their flakes.</li>
              </ul>
            </section>

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 300 Grams Accurately</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <strong className="text-gray-900">With a kitchen scale (most reliable):</strong> Set your mixing bowl on the scale, zero it out, and pour the ingredient in until it reads 300 grams. At larger amounts like this, even a small percentage error compounds into a bigger gram gap than it would at 50 or 100 grams, so a scale is especially worth using here.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "For flour, cocoa, and other light powders, spoon the ingredient into the cup instead of scooping it directly from the bag, then level the top with a straight edge.",
                  "For brown sugar, pack it down firmly enough that it holds its shape when the cup is tipped out.",
                  "For liquids like honey, oil, or milk, use a liquid measuring cup and check the fill line at eye level rather than from above.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Complete 300 Grams Conversion Tables by Category</h2>
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
                There&apos;s no single answer to &quot;how many cups is 300 grams&quot; — it depends entirely on what&apos;s filling the cup. Once you know the ingredient, the table above gets you there instantly. And for a batch-sized amount like 300 grams, where even a small measuring error adds up, weighing the ingredient directly on a scale is still the most reliable way to hit the number exactly.
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