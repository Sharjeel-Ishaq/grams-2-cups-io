import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "350 Grams to Cups — Full Ingredient Conversion Chart",
  description: "How many cups is 350 grams? It depends on the ingredient. A complete chart covering flour, sugar, butter, honey, and 90+ other ingredients across 9 categories.",
  alternates: { canonical: "/350-grams-to-cups" },
  openGraph: {
    title: "350 Grams to Cups — Full Ingredient Conversion Chart",
    description: "350 grams is about 2⅞ cups of flour, 1¾ cups of sugar, or 1½ cups of butter — see the full chart.",
    url: "/350-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "350 Grams to Cups — Full Ingredient Conversion Chart",
    description: "How many cups is 350 grams? It depends on the ingredient — see the full chart.",
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
  { name: "All-purpose flour", href: "/flour", cups: "~2⅞ cups", tbsp: "46.7 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "1¾ cups", tbsp: "28 tbsp" },
  { name: "Powdered sugar", href: "/powdered-sugar", cups: "~2⅞ cups", tbsp: "46.7 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "~1⅝ cups", tbsp: "25.5 tbsp" },
  { name: "Butter", href: "/butter", cups: "~1½ cups", tbsp: "24.7 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~1⅝ cups", tbsp: "25.7 tbsp" },
  { name: "Milk", href: "/milk", cups: "~1½ cups", tbsp: "23.6 tbsp" },
  { name: "Water", href: "/water", cups: "~1½ cups", tbsp: "23.7 tbsp" },
  { name: "Honey", href: "/honey", cups: "~1 cup", tbsp: "16.5 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~1⅞ cups", tbsp: "30.3 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "~3⅞ cups", tbsp: "62.2 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "~4⅛ cups", tbsp: "65.9 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "2 cups", tbsp: "32.9 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~2½ cups", tbsp: "39.2 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~1¼ cups", tbsp: "19.4 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "~1⅝ cups", tbsp: "25.5 tbsp" },
];

const categories: IngredientGroup[] = [
  { id: "flours", title: "Flours", rows: [
    { name: "All-purpose flour", href: "/flour", cups: "2.800 cups", tbsp: "44.8", tsp: "134.4", gpc: "125" },
    { name: "Bread flour", cups: "2.756 cups", tbsp: "44.1", tsp: "132.3", gpc: "127" },
    { name: "Cake flour", cups: "3.070 cups", tbsp: "49.1", tsp: "147.4", gpc: "114" },
    { name: "Whole wheat flour", cups: "2.917 cups", tbsp: "46.7", tsp: "140.0", gpc: "120" },
    { name: "Almond flour", cups: "3.646 cups", tbsp: "58.3", tsp: "175.0", gpc: "96" },
    { name: "Coconut flour", cups: "2.734 cups", tbsp: "43.8", tsp: "131.3", gpc: "128" },
  ]},
  { id: "sugars", title: "Sugars and Sweeteners", rows: [
    { name: "Granulated sugar", href: "/sugar", cups: "1.750 cups", tbsp: "28.0", tsp: "84.0", gpc: "200" },
    { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "1.591 cups", tbsp: "25.5", tsp: "76.4", gpc: "220" },
    { name: "Powdered sugar", href: "/powdered-sugar", cups: "2.917 cups", tbsp: "46.7", tsp: "140.0", gpc: "120" },
    { name: "Honey", href: "/honey", cups: "1.029 cups", tbsp: "16.5", tsp: "49.4", gpc: "340" },
    { name: "Maple syrup", cups: "1.087 cups", tbsp: "17.4", tsp: "52.2", gpc: "322" },
    { name: "Molasses", cups: "1.067 cups", tbsp: "17.1", tsp: "51.2", gpc: "328" },
  ]},
  { id: "fats", title: "Butter, Oils and Fats", rows: [
    { name: "Butter", href: "/butter", cups: "1.542 cups", tbsp: "24.7", tsp: "74.0", gpc: "227" },
    { name: "Shortening", cups: "1.707 cups", tbsp: "27.3", tsp: "82.0", gpc: "205" },
    { name: "Vegetable oil", href: "/vegetable-oil", cups: "1.606 cups", tbsp: "25.7", tsp: "77.1", gpc: "218" },
    { name: "Olive oil", cups: "1.620 cups", tbsp: "25.9", tsp: "77.8", gpc: "216" },
    { name: "Coconut oil", cups: "1.606 cups", tbsp: "25.7", tsp: "77.1", gpc: "218" },
  ]},
  { id: "dairy", title: "Dairy and Liquids", rows: [
    { name: "Milk", href: "/milk", cups: "1.429 cups", tbsp: "22.9", tsp: "68.6", gpc: "245" },
    { name: "Heavy cream", cups: "1.471 cups", tbsp: "23.5", tsp: "70.6", gpc: "238" },
    { name: "Yogurt", cups: "1.429 cups", tbsp: "22.9", tsp: "68.6", gpc: "245" },
    { name: "Cream cheese", cups: "1.509 cups", tbsp: "24.1", tsp: "72.4", gpc: "232" },
    { name: "Condensed milk", cups: "1.144 cups", tbsp: "18.3", tsp: "54.9", gpc: "306" },
  ]},
  { id: "grains", title: "Rice, Grains and Pasta", rows: [
    { name: "Uncooked rice", href: "/rice", cups: "1.892 cups", tbsp: "30.3", tsp: "90.8", gpc: "185" },
    { name: "Rolled oats", href: "/oats", cups: "3.889 cups", tbsp: "62.2", tsp: "186.7", gpc: "90" },
    { name: "Quinoa", cups: "2.059 cups", tbsp: "32.9", tsp: "98.8", gpc: "170" },
    { name: "Couscous", cups: "2.023 cups", tbsp: "32.4", tsp: "97.1", gpc: "173" },
    { name: "Dry pasta", cups: "3.500 cups", tbsp: "56.0", tsp: "168.0", gpc: "100" },
  ]},
  { id: "nuts", title: "Nuts and Seeds", rows: [
    { name: "Whole almonds", href: "/almonds", cups: "2.448 cups", tbsp: "39.2", tsp: "117.5", gpc: "143" },
    { name: "Walnuts (chopped)", cups: "2.917 cups", tbsp: "46.7", tsp: "140.0", gpc: "120" },
    { name: "Cashews", cups: "2.555 cups", tbsp: "40.9", tsp: "122.6", gpc: "137" },
    { name: "Peanut butter", cups: "1.357 cups", tbsp: "21.7", tsp: "65.1", gpc: "258" },
    { name: "Sesame seeds", cups: "2.431 cups", tbsp: "38.9", tsp: "116.7", gpc: "144" },
    { name: "Tahini", href: "/tahini", cups: "1.46 cups", tbsp: "23.3", tsp: "70", gpc: "240" },
  ]},
  { id: "baking-staples", title: "Baking Staples", rows: [
    { name: "Cocoa powder", href: "/cocoa-powder", cups: "4.070 cups", tbsp: "65.1", tsp: "195.3", gpc: "86" },
    { name: "Chocolate chips", href: "/chocolate-chips", cups: "2.059 cups", tbsp: "32.9", tsp: "98.8", gpc: "170" },
    { name: "Cornstarch", cups: "2.734 cups", tbsp: "43.8", tsp: "131.3", gpc: "128" },
    { name: "Breadcrumbs", cups: "3.241 cups", tbsp: "51.9", tsp: "155.6", gpc: "108" },
    { name: "Baking powder", href: "/baking-powder", cups: "1.591 cups", tbsp: "25.5", tsp: "76.4", gpc: "220" },
    { name: "Salt", href: "/salt", cups: "1.215 cups", tbsp: "19.4", tsp: "58.3", gpc: "288" },
  ]},
  { id: "cheese", title: "Cheese", rows: [
    { name: "Parmesan (grated)", cups: "3.500 cups", tbsp: "56.0", tsp: "168.0", gpc: "100" },
    { name: "Cheddar (shredded)", cups: "3.097 cups", tbsp: "49.6", tsp: "148.7", gpc: "113" },
    { name: "Mozzarella (shredded)", cups: "3.125 cups", tbsp: "50.0", tsp: "150.0", gpc: "112" },
    { name: "Feta (crumbled)", cups: "2.333 cups", tbsp: "37.3", tsp: "112.0", gpc: "150" },
  ]},
];

function MainTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[420px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
            <th className="px-4 py-3 text-left font-semibold text-white">350g in Cups</th>
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
            {["Ingredient", "350g in Cups", "Tbsp", "Tsp", "g per Cup"].map((title) => (
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

export default function ThreeFiftyGramsToCups() {
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
              <i className="ri-scales-3-line" /> 90+ ingredients at 350 grams
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">350 Grams to Cups</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              350 grams sits right in the range most home bakers actually reach for — enough for a full loaf, a batch of a dozen big cookies, or a solid cake layer. And like every other weight on this page, the number of cups it fills depends entirely on what you&apos;re measuring.
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
            <SimpleConverter ingredients={ingredients} initialGrams={350} />

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                350 grams is about 2⅞ cups of <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, 1¾ cups of <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>sugar</Link>, or 1½ cups of <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>. The cup amount always comes down to the ingredient&apos;s density. Find yours in the table below.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">350 Grams to Cups, by Ingredient</h2>
              <MainTable rows={mainRows} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Figures are based on standard reference weights per cup (flour at 120g/cup, sugar at 200g/cup, and so on), using a US customary cup and the spoon-and-level method for dry ingredients. Density references like the FAO&apos;s food density database confirm that these figures can shift a bit by brand, moisture, and packing method — so treat them as reliable estimates rather than fixed constants.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why 350 Grams Fills the Cup Differently Every Time</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                It all comes down to how much air sits between the particles of whatever&apos;s being measured, and how the ingredient itself is put together. Flour is light and full of tiny air pockets, so 350 grams of it spreads across a generous 2⅞ cups. Sugar crystals sit much closer together with far less trapped air, shrinking that same weight down to 1¾ cups. Honey isn&apos;t made of particles at all — it&apos;s a thick, syrupy liquid with almost no air in it — which is why 350 grams of honey only fills about 1 cup, less than half of what the same weight of flour takes up.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                The rule to keep in mind: a cup measures space, not quantity. The same 350 grams can look like wildly different amounts once it&apos;s actually poured into a measuring cup.
              </p>
            </section>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Closer Look at a Few Common Ones</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>350g of flour works out to about 2⅞ cups — right in line with what a lot of standard bread or sandwich loaf recipes call for.</li>
                <li>350g of sugar comes to 1¾ cups, a clean number that shows up often in cake and cookie recipes.</li>
                <li>350g of butter is roughly 1½ cups — a bit more than 3 standard US sticks (each stick being ½ cup).</li>
                <li>350g of honey only fills about 1 cup, a good illustration of just how much denser honey is compared to almost every dry ingredient on this list.</li>
              </ul>
            </section>

            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 350 Grams Accurately</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <strong className="text-gray-900">With a kitchen scale (most reliable):</strong> Place your mixing bowl on the scale, zero it out, and pour the ingredient in until it reads 350 grams. At a batch size like this, even a small percentage error in a cup measurement compounds into a noticeably larger gram gap than it would with a smaller amount — which is exactly where a scale earns its keep.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "For flour, cocoa, and other light powders, spoon the ingredient into the cup instead of scooping it from the bag, then level the top with a straight edge.",
                  "For brown sugar, pack it down firmly enough that it holds its shape when the cup is turned out.",
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
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Complete 350 Grams Conversion Tables by Category</h2>
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
                &quot;How many cups is 350 grams&quot; only has an answer once you know the ingredient — there&apos;s no single conversion that works across the board. The table above gets you there quickly for whatever&apos;s on your counter, and for a batch this size, where a small measuring slip adds up fast, weighing it directly on a scale is still the most dependable way to hit 350 grams exactly.
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
                  { name: "250 grams to cups", href: "/250-grams-to-cups" },
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