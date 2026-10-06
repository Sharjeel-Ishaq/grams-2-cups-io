import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "450 Grams to Cups — Full Ingredient Conversion Chart",
  description: "How many cups is 450 grams? It depends on the ingredient. A complete chart covering flour, sugar, butter, honey, and 90+ other ingredients across 9 categories.",
  alternates: { canonical: "/450-grams-to-cups" },
  openGraph: {
    title: "450 Grams to Cups — Full Ingredient Conversion Chart",
    description: "450 grams is about 3¾ cups of flour, 2¼ cups of sugar, or 2 cups of butter — see the full chart.",
    url: "/450-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "450 Grams to Cups — Full Ingredient Conversion Chart",
    description: "How many cups is 450 grams? It depends on the ingredient — see the full chart.",
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
  { name: "All-purpose flour", href: "/flour", cups: "3¾ cups", tbsp: "60 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "2¼ cups", tbsp: "36 tbsp" },
  { name: "Powdered sugar", href: "/powdered-sugar", cups: "3¾ cups", tbsp: "60 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "~2 cups", tbsp: "32.7 tbsp" },
  { name: "Butter", href: "/butter", cups: "~2 cups (scant)", tbsp: "31.7 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~2 cups (heaping)", tbsp: "33 tbsp" },
  { name: "Milk", href: "/milk", cups: "~1⅞ cups", tbsp: "29.4 tbsp" },
  { name: "Water", href: "/water", cups: "~1⅞ cups", tbsp: "30.4 tbsp" },
  { name: "Honey", href: "/honey", cups: "~1⅓ cups", tbsp: "21.2 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~2⅜ cups", tbsp: "38.9 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "5 cups", tbsp: "80 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "~5¼ cups", tbsp: "84.7 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "~2⅝ cups", tbsp: "42.4 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~3⅛ cups", tbsp: "50.4 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~1½ cups", tbsp: "24.2 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "~2 cups", tbsp: "32.7 tbsp" },
];

const categories: IngredientGroup[] = [
  { id: "flours", title: "Flours", rows: [
    { name: "All-purpose flour", href: "/flour", cups: "3.600 cups", tbsp: "57.6", tsp: "172.8", gpc: "125" },
    { name: "Bread flour", cups: "3.543 cups", tbsp: "56.7", tsp: "170.1", gpc: "127" },
    { name: "Cake flour", cups: "3.947 cups", tbsp: "63.2", tsp: "189.5", gpc: "114" },
    { name: "Whole wheat flour", cups: "3.750 cups", tbsp: "60.0", tsp: "180.0", gpc: "120" },
    { name: "Almond flour", cups: "4.688 cups", tbsp: "75.0", tsp: "225.0", gpc: "96" },
    { name: "Coconut flour", cups: "3.516 cups", tbsp: "56.3", tsp: "168.8", gpc: "128" },
  ]},
  { id: "sugars", title: "Sugars and Sweeteners", rows: [
    { name: "Granulated sugar", href: "/sugar", cups: "2.250 cups", tbsp: "36.0", tsp: "108.0", gpc: "200" },
    { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "2.045 cups", tbsp: "32.7", tsp: "98.2", gpc: "220" },
    { name: "Powdered sugar", href: "/powdered-sugar", cups: "3.750 cups", tbsp: "60.0", tsp: "180.0", gpc: "120" },
    { name: "Honey", href: "/honey", cups: "1.324 cups", tbsp: "21.2", tsp: "63.5", gpc: "340" },
    { name: "Maple syrup", cups: "1.398 cups", tbsp: "22.4", tsp: "67.1", gpc: "322" },
    { name: "Molasses", cups: "1.372 cups", tbsp: "22.0", tsp: "65.9", gpc: "328" },
  ]},
  { id: "fats", title: "Butter, Oils and Fats", rows: [
    { name: "Butter", href: "/butter", cups: "1.982 cups", tbsp: "31.7", tsp: "95.2", gpc: "227" },
    { name: "Shortening", cups: "2.195 cups", tbsp: "35.1", tsp: "105.4", gpc: "205" },
    { name: "Vegetable oil", href: "/vegetable-oil", cups: "2.064 cups", tbsp: "33.0", tsp: "99.1", gpc: "218" },
    { name: "Olive oil", cups: "2.083 cups", tbsp: "33.3", tsp: "100.0", gpc: "216" },
    { name: "Coconut oil", cups: "2.064 cups", tbsp: "33.0", tsp: "99.1", gpc: "218" },
  ]},
  { id: "dairy", title: "Dairy and Liquids", rows: [
    { name: "Milk", href: "/milk", cups: "1.837 cups", tbsp: "29.4", tsp: "88.2", gpc: "245" },
    { name: "Heavy cream", cups: "1.891 cups", tbsp: "30.3", tsp: "90.8", gpc: "238" },
    { name: "Yogurt", cups: "1.837 cups", tbsp: "29.4", tsp: "88.2", gpc: "245" },
    { name: "Cream cheese", cups: "1.940 cups", tbsp: "31.0", tsp: "93.1", gpc: "232" },
    { name: "Condensed milk", cups: "1.471 cups", tbsp: "23.5", tsp: "70.6", gpc: "306" },
  ]},
  { id: "grains", title: "Rice, Grains and Pasta", rows: [
    { name: "Uncooked rice", href: "/rice", cups: "2.432 cups", tbsp: "38.9", tsp: "116.8", gpc: "185" },
    { name: "Rolled oats", href: "/oats", cups: "5.000 cups", tbsp: "80.0", tsp: "240.0", gpc: "90" },
    { name: "Quinoa", cups: "2.647 cups", tbsp: "42.4", tsp: "127.1", gpc: "170" },
    { name: "Couscous", cups: "2.601 cups", tbsp: "41.6", tsp: "124.9", gpc: "173" },
    { name: "Dry pasta", cups: "4.500 cups", tbsp: "72.0", tsp: "216.0", gpc: "100" },
  ]},
  { id: "nuts", title: "Nuts and Seeds", rows: [
    { name: "Whole almonds", href: "/almonds", cups: "3.147 cups", tbsp: "50.4", tsp: "151.0", gpc: "143" },
    { name: "Walnuts (chopped)", cups: "3.750 cups", tbsp: "60.0", tsp: "180.0", gpc: "120" },
    { name: "Cashews", cups: "3.285 cups", tbsp: "52.6", tsp: "157.7", gpc: "137" },
    { name: "Peanut butter", cups: "1.744 cups", tbsp: "27.9", tsp: "83.7", gpc: "258" },
    { name: "Sesame seeds", cups: "3.125 cups", tbsp: "50.0", tsp: "150.0", gpc: "144" },
  ]},
  { id: "baking-staples", title: "Baking Staples", rows: [
    { name: "Cocoa powder", href: "/cocoa-powder", cups: "5.233 cups", tbsp: "83.7", tsp: "251.2", gpc: "86" },
    { name: "Chocolate chips", href: "/chocolate-chips", cups: "2.647 cups", tbsp: "42.4", tsp: "127.1", gpc: "170" },
    { name: "Cornstarch", cups: "3.516 cups", tbsp: "56.3", tsp: "168.8", gpc: "128" },
    { name: "Breadcrumbs", cups: "4.167 cups", tbsp: "66.7", tsp: "200.0", gpc: "108" },
    { name: "Baking powder", href: "/baking-powder", cups: "2.045 cups", tbsp: "32.7", tsp: "98.2", gpc: "220" },
    { name: "Salt", href: "/salt", cups: "1.563 cups", tbsp: "25.0", tsp: "75.0", gpc: "288" },
  ]},
  { id: "cheese", title: "Cheese", rows: [
    { name: "Parmesan (grated)", cups: "4.500 cups", tbsp: "72.0", tsp: "216.0", gpc: "100" },
    { name: "Cheddar (shredded)", cups: "3.982 cups", tbsp: "63.7", tsp: "191.2", gpc: "113" },
    { name: "Mozzarella (shredded)", cups: "4.018 cups", tbsp: "64.3", tsp: "192.9", gpc: "112" },
    { name: "Feta (crumbled)", cups: "3.000 cups", tbsp: "48.0", tsp: "144.0", gpc: "150" },
  ]},
];

function MainTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[420px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
            <th className="px-4 py-3 text-left font-semibold text-white">450g in Cups</th>
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
            {["Ingredient", "450g in Cups", "Tbsp", "Tsp", "g per Cup"].map((title) => (
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

export default function FourHundredFiftyGramsToCups() {
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
              <i className="ri-scales-3-line" /> 90+ ingredients at 450 grams
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">450 Grams to Cups</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              450 grams is close enough to a full pound (453.6 grams) that a lot of recipes treat the two as interchangeable — handy to know if you&apos;re working from a US recipe written in pounds but weighing out grams instead. As always on this site, though, the actual cup amount 450 grams fills depends entirely on the ingredient sitting in the bowl.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another amount?{" "}
              <Link href="/300-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                300g
              </Link>{" "}
              ·{" "}
              <Link href="/400-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                400g
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
            <SimpleConverter ingredients={ingredients} initialGrams={450} />

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                450 grams is about 3¾ cups of <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, 2¼ cups of <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>sugar</Link>, or roughly 2 cups of <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>. The cup amount always comes down to the ingredient&apos;s density. Find yours in the table below.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">450 Grams to Cups, by Ingredient</h2>
              <MainTable rows={mainRows} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Figures are based on standard reference weights per cup (flour at 120g/cup, sugar at 200g/cup, and so on), using a US customary cup and the spoon-and-level method for dry ingredients. These figures line up closely with independently published density-based conversion tools, which is a good sign the numbers are solid — though brand, humidity, and packing technique can still shift the real result slightly.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why 450 Grams Fills the Cup Differently Every Time</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                It comes down to how much air sits between the particles of whatever&apos;s being measured. Flour is light and airy, with a fair amount of trapped space between its fine particles, so 450 grams of it stretches to a generous 3¾ cups. Sugar crystals pack much closer together, shrinking that same weight to 2¼ cups. Honey isn&apos;t made of particles at all — it&apos;s a dense, syrupy liquid with almost no trapped air — which is why 450 grams of it barely reaches 1⅓ cups, a fraction of what flour takes up at the same weight.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                The rule worth remembering: a cup measures space, not amount. The exact same 450 grams can look like completely different quantities once it&apos;s sitting in a measuring cup.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Closer Look at a Few Common Ones</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>450g of flour comes out to 3¾ cups — a common amount for a larger bread recipe or a double batch of cookies.</li>
                <li>450g of sugar is a clean 2¼ cups, one of the tidier numbers in this series.</li>
                <li>450g of butter works out to just under 2 cups — close to 4 standard US sticks (each stick is ½ cup), which makes sense given that 450g sits right around the weight of a full pound of butter.</li>
                <li>450g of honey only fills about 1⅓ cups, a good reminder of just how much denser honey is compared to almost anything dry on a baking shelf.</li>
              </ul>
            </section>

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 450 Grams Accurately</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <strong className="text-gray-900">With a kitchen scale (most reliable):</strong> Place your mixing bowl on the scale, zero it out, and pour the ingredient in until it reads 450 grams. Since 450 grams is close to a full pound, a scale also makes it easy to double-check a butter package or bag of flour against its printed weight.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "For flour, cocoa, and other light powders, spoon the ingredient into the cup rather than scooping it from the bag, then level off the top with a straight edge.",
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
                &quot;How many cups is 450 grams&quot; only has an answer once you know the ingredient — the table above gets you there instantly for whatever&apos;s on your counter. And since 450 grams is a large enough amount that even a small measuring error adds up fast, weighing it directly on a scale is still the most dependable way to hit the number exactly, especially when a recipe&apos;s outcome depends on getting the ratio right.
              </p>
            </section>

            <section
              className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500"
              style={{ borderColor: `${ACCENT}15` }}
            >
              <p className="mb-2 font-semibold text-gray-600">More Converters</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { name: "300 grams to cups", href: "/300-grams-to-cups" },
                  { name: "400 grams to cups", href: "/400-grams-to-cups" },
                  { name: "500 grams to cups", href: "/500-grams-to-cups" },
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