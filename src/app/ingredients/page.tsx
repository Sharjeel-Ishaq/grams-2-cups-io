import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Ingredients: Grams Per Cup Weights, Compared With King Arthur Baking",
  description:
    "A full grams-per-cup reference table for 40+ ingredients, comparing King Arthur Baking's published weights with other reference data — plus cup size by country and where sources actually disagree.",
  alternates: { canonical: "/ingredients" },
  openGraph: {
    title: "Ingredients: Grams Per Cup Weights, Compared With King Arthur Baking",
    description:
      "Grams-per-cup weights for 40+ ingredients across flours, sugars, fats, dairy, pantry staples, and nuts — sourced and labeled, not averaged into one unlabeled number.",
    url: "/ingredients",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingredients: Grams Per Cup Weights, Compared With King Arthur Baking",
    description: "A full grams-per-cup reference table for 40+ ingredients, sourced and labeled.",
    images: ["/og-image.jpg"],
  },
};

type Row = { name: string; href?: string; cup: string; tbsp: string; tsp: string; basis: string };

const cupByCountry = [
  { country: "United States", cup: "236.59 mL", notes: "The US customary cup, and the standard behind every table on this page." },
  { country: "United Kingdom", cup: "250 mL metric cup", notes: "Modern UK recipes generally use metric weights instead of cups; older sources may use the 284.13 mL Imperial cup." },
  { country: "Australia", cup: "250 mL", notes: "Same metric cup as the UK and Canada, but Australia's tablespoon is 20 mL instead of 15 mL." },
  { country: "Canada", cup: "250 mL", notes: "Officially metric, though many Canadian recipes borrow the 236.59 mL US cup from American sources." },
  { country: "Philippines", cup: "236.59 mL or 250 mL", notes: "Filipino recipes mix US and metric cups. Check which one a specific recipe means before converting." },
];

const flours: Row[] = [
  { name: "All-purpose flour", href: "/flour", cup: "120g", tbsp: "7.5g", tsp: "2.5g", basis: "King Arthur" },
  { name: "Bread flour", cup: "120g", tbsp: "7.5g", tsp: "2.5g", basis: "King Arthur" },
  { name: "Whole wheat flour (Premium 100%)", cup: "113g", tbsp: "7.06g", tsp: "2.35g", basis: "King Arthur" },
  { name: "Cake flour", cup: "114g", tbsp: "7.13g", tsp: "2.38g", basis: "King Arthur" },
  { name: "Almond flour, toasted", cup: "96g", tbsp: "6g", tsp: "2g", basis: "King Arthur" },
  { name: "Coconut flour", cup: "128g", tbsp: "8g", tsp: "2.67g", basis: "King Arthur" },
  { name: "Self-rising flour", cup: "113g", tbsp: "7.06g", tsp: "2.35g", basis: "King Arthur" },
  { name: "Semolina flour", cup: "163g", tbsp: "10.19g", tsp: "3.4g", basis: "King Arthur" },
  { name: "Baking powder", href: "/baking-powder", cup: "192g", tbsp: "12g", tsp: "4g", basis: "King Arthur" },
  { name: "Baking soda", cup: "288g, scaled up from ½ tsp = 3g; treat as approximate", tbsp: "18g", tsp: "6g", basis: "King Arthur" },
  { name: "Cornstarch", cup: "128g", tbsp: "8g", tsp: "2.67g", basis: "King Arthur" },
];

const sugars: Row[] = [
  { name: "Granulated sugar", href: "/sugar", cup: "198g", tbsp: "12.38g", tsp: "4.13g", basis: "King Arthur" },
  { name: "Brown sugar, packed", href: "/brown-sugar", cup: "213g (other references report closer to 220g)", tbsp: "13.31g", tsp: "4.44g", basis: "King Arthur" },
  { name: "Powdered sugar, unsifted", href: "/powdered-sugar", cup: "113g", tbsp: "7.06g", tsp: "2.35g", basis: "King Arthur" },
  { name: "Honey", href: "/honey", cup: "336g", tbsp: "21g", tsp: "7g", basis: "King Arthur" },
  { name: "Maple syrup", cup: "312g", tbsp: "19.5g", tsp: "6.5g", basis: "King Arthur" },
  { name: "Molasses", cup: "340g", tbsp: "21.25g", tsp: "7.08g", basis: "King Arthur" },
  { name: "Agave nectar", cup: "336g", tbsp: "21g", tsp: "7g", basis: "King Arthur" },
  { name: "Coconut sugar", cup: "180g", tbsp: "11.25g", tsp: "3.75g", basis: "Reference estimate" },
];

const fats: Row[] = [
  { name: "Butter", href: "/butter", cup: "226g", tbsp: "14.13g", tsp: "4.71g", basis: "King Arthur" },
  { name: "Vegetable oil", href: "/vegetable-oil", cup: "198g", tbsp: "12.38g", tsp: "4.13g", basis: "King Arthur" },
  { name: "Olive oil", cup: "200g", tbsp: "12.5g", tsp: "4.17g", basis: "King Arthur" },
  { name: "Coconut oil", cup: "226g, varies with temperature", tbsp: "14.13g", tsp: "4.71g", basis: "King Arthur" },
  { name: "Shortening", cup: "205g", tbsp: "12.81g", tsp: "4.27g", basis: "Reference estimate" },
];

const dairy: Row[] = [
  { name: "Milk", href: "/milk", cup: "227g", tbsp: "14.19g", tsp: "4.73g", basis: "King Arthur" },
  { name: "Heavy cream", cup: "227g", tbsp: "14.19g", tsp: "4.73g", basis: "King Arthur (grouped with light cream/half-and-half)" },
  { name: "Sour cream", cup: "227g", tbsp: "14.19g", tsp: "4.73g", basis: "King Arthur" },
  { name: "Buttermilk", cup: "227g", tbsp: "14.19g", tsp: "4.73g", basis: "King Arthur" },
  { name: "Cream cheese", cup: "232g", tbsp: "14.5g", tsp: "4.83g", basis: "Reference estimate" },
  { name: "Water", href: "/water", cup: "236.59g", tbsp: "14.79g", tsp: "4.93g", basis: "Calculated from 236.59 mL using water's approximate density of 1g/mL" },
  { name: "Lemon juice", href: "/lemon-juice", cup: "244g", tbsp: "15.25g", tsp: "5.08g", basis: "USDA data" },
];

const dryGoods: Row[] = [
  { name: "Oats, old-fashioned or quick-cooking", href: "/oats", cup: "89g", tbsp: "5.56g", tsp: "1.85g", basis: "King Arthur" },
  { name: "Oats, King Arthur rolled oats", cup: "113g", tbsp: "7.06g", tsp: "2.35g", basis: "King Arthur" },
  { name: "Rice, uncooked", href: "/rice", cup: "185g to 200g, depending on type", tbsp: "11.56g to 12.5g", tsp: "3.85g to 4.17g", basis: "USDA/reference data" },
  { name: "Brown rice, uncooked", cup: "190g", tbsp: "11.88g", tsp: "3.96g", basis: "Reference estimate" },
  { name: "Cocoa powder, unsweetened", href: "/cocoa-powder", cup: "84g", tbsp: "5.25g", tsp: "1.75g", basis: "King Arthur" },
  { name: "Chocolate chips", href: "/chocolate-chips", cup: "170g", tbsp: "10.63g", tsp: "3.54g", basis: "Reference estimate" },
  { name: "Table salt, fine", href: "/salt", cup: "288g", tbsp: "18g", tsp: "6g", basis: "King Arthur" },
  { name: "Morton kosher salt", cup: "256g", tbsp: "16g", tsp: "5.33g", basis: "King Arthur" },
  { name: "Diamond Crystal kosher salt", cup: "128g", tbsp: "8g", tsp: "2.67g", basis: "King Arthur" },
  { name: "Breadcrumbs", cup: "108g", tbsp: "6.75g", tsp: "2.25g", basis: "Reference estimate" },
  { name: "Cornmeal", cup: "160g", tbsp: "10g", tsp: "3.33g", basis: "Reference estimate" },
  { name: "Quinoa, uncooked", cup: "170g", tbsp: "10.63g", tsp: "3.54g", basis: "Reference estimate" },
];

const nuts: Row[] = [
  { name: "Almonds, whole", href: "/almonds", cup: "142g", tbsp: "8.88g", tsp: "2.96g", basis: "King Arthur" },
  { name: "Walnuts, chopped", cup: "120g", tbsp: "7.5g", tsp: "2.5g", basis: "Reference estimate" },
  { name: "Pecans, chopped", cup: "109g", tbsp: "6.81g", tsp: "2.27g", basis: "Reference estimate" },
  { name: "Cashews", cup: "137g", tbsp: "8.56g", tsp: "2.85g", basis: "Reference estimate" },
  { name: "Sunflower seeds", cup: "140g", tbsp: "8.75g", tsp: "2.92g", basis: "Reference estimate" },
  { name: "Chia seeds", cup: "168g", tbsp: "10.5g", tsp: "3.5g", basis: "Reference estimate" },
];

const categories = [
  { id: "flours", title: "Flours and Baking Staples", rows: flours },
  { id: "sugars", title: "Sugars and Sweeteners", rows: sugars },
  { id: "fats", title: "Fats and Oils", rows: fats },
  { id: "dairy", title: "Dairy and Liquids", rows: dairy },
  { id: "dry-goods", title: "Dry Goods and Pantry", rows: dryGoods },
  { id: "nuts", title: "Nuts and Seeds", rows: nuts },
];

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Ingredient Grams Per Cup Weight Table",
  description: "Grams-per-cup, grams-per-tablespoon, and grams-per-teaspoon weights for over 40 common cooking and baking ingredients, sourced from King Arthur Baking's Ingredient Weight Chart and other reference data.",
  creator: { "@type": "Organization", name: "Grams2Cups" },
  variableMeasured: "Ingredient weight in grams per US cup",
  citation: [
    "King Arthur Baking: Ingredient Weight Chart — https://www.kingarthurbaking.com/learn/ingredient-weight-chart",
    "USDA FoodData Central — https://fdc.nal.usda.gov/",
  ],
};

function WeightTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[640px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
            <th className="px-4 py-3 text-left font-semibold text-white">Grams/cup</th>
            <th className="px-4 py-3 text-left font-semibold text-white">Grams/tbsp</th>
            <th className="px-4 py-3 text-left font-semibold text-white">Grams/tsp</th>
            <th className="px-4 py-3 text-left font-semibold text-white">Basis</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
              <td className="px-4 py-2.5 font-medium text-gray-800">
                {row.href ? <Link href={row.href} className="hover:underline" style={{ color: ACCENT }}>{row.name}</Link> : row.name}
              </td>
              <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.cup}</td>
              <td className="px-4 py-2.5 text-gray-600">{row.tbsp}</td>
              <td className="px-4 py-2.5 text-gray-600">{row.tsp}</td>
              <td className="px-4 py-2.5 text-gray-600">{row.basis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Ingredients() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <Navbar />
      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>
              <i className="ri-database-2-line" /> 40+ ingredients, sourced and labeled
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">Ingredients: Grams Per Cup Weights, Compared With King Arthur Baking And Reference Data</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">Cup measurements only make sense when you know the cup size and the density of the ingredients. This page pulls both together: a weight table comparing published ingredient weights from King Arthur Baking and other references, as well as how the cup itself changes depending on which country a recipe comes from.</p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">Because these sources may use different products, portions, and measurement conventions, the basis of measurement is identified for each figure rather than being averaged into one unlabeled number.</p>
          </div>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {categories.map((category) => <a key={category.id} href={`#${category.id}`} className="rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-current" style={{ borderColor: `${ACCENT}30`, color: ACCENT }}>{category.title}</a>)}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Where Sources Actually Disagree</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">The clearest example is <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>. King Arthur&apos;s own ingredient chart lists all-purpose flour at 120 grams per cup, using the spoon-and-sweep method its own Recipe Success Guide recommends. Other reference sources sometimes report closer to 125 grams per cup. Neither figure should automatically be treated as universally correct.</p>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">Salt shows an even bigger split, and for a clearer reason: grain size. King Arthur&apos;s chart lists table salt at 18 grams per tablespoon, Morton kosher salt at 16 grams per tablespoon, and Diamond Crystal kosher salt at 8 grams per tablespoon.</p>
              <p className="text-sm leading-relaxed text-gray-600">Oats tell a similar story. King Arthur&apos;s chart lists old-fashioned and quick-cooking oats at 89 grams per cup, but its own rolled oats product comes in heavier at 113 grams per cup.</p>
            </section>

            <section id="cup-size">
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Cup Size by Country</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[560px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}><tr><th className="px-4 py-3 text-left font-semibold text-white">Country</th><th className="px-4 py-3 text-left font-semibold text-white">Standard Cup</th><th className="px-4 py-3 text-left font-semibold text-white">Notes</th></tr></thead>
                  <tbody>{cupByCountry.map((row, i) => <tr key={row.country} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}><td className="px-4 py-2.5 font-medium text-gray-800">{row.country}</td><td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.cup}</td><td className="px-4 py-2.5 text-gray-600">{row.notes}</td></tr>)}</tbody>
                </table>
              </div>
            </section>

            <section id="chart" className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Ingredient Weight Table</h2>
              <p className="text-sm leading-relaxed text-gray-600">The values below are reference weights, not universal constants. When King Arthur publishes a product-specific weight, that product is identified in the Basis column; where no single authoritative figure exists, the table gives a range or reference estimate instead. Tablespoon and teaspoon columns are calculated from the cup figure at 16 tablespoons and 48 teaspoons per cup.</p>
            </section>

            {categories.map((category) => <section key={category.id} id={category.id} className="scroll-mt-24"><h3 className="mb-4 text-xl font-bold tracking-[-0.02em] text-gray-900">{category.title}</h3><WeightTable rows={category.rows} /></section>)}

            <p className="text-xs text-gray-400">Large egg: 50 grams each without shell, King Arthur. This is a per-egg weight, not a grams-per-cup figure, since the number of eggs in a cup depends on how they&apos;re beaten and measured.</p>

            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why We Don&apos;t Just Publish One Number Per Ingredient</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">Most conversion charts pick a single figure per ingredient and move on. That works fine for honey and maple syrup, where published figures leave little room for dispute. It breaks down for flour, salt, and oats, where the product, brand, or measuring method changes the outcome.</p>
              <p className="text-sm leading-relaxed text-gray-600">For the math on a specific gram amount rather than a full cup, <Link href="/100-grams-to-cups" className="font-semibold hover:underline" style={{ color: ACCENT }}>our 100 grams to cups page</Link> runs the calculation per ingredient, and <Link href="/grams-to-cups-accuracy" className="font-semibold hover:underline" style={{ color: ACCENT }}>our accuracy guide</Link> goes deeper into why these figures shift.</p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Measuring Tips</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  ["Flour and Other Powders", "ri-restaurant-line", "Gently spoon dry ingredients into the cup and sweep off the excess rather than scooping directly from the bag."],
                  ["Brown Sugar", "ri-honour-line", "Press it firmly into the cup until it holds the cup's shape when tipped out."],
                  ["Liquids", "ri-drop-line", "Use a clear liquid measuring cup on a flat surface and read the line at eye level."],
                  ["When Precision Matters Most", "ri-scales-3-line", "A digital kitchen scale removes guesswork and is the most reliable option for bread, pastry, and precise recipes."],
                ].map(([title, icon, body]) => <div key={title} className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}><div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}><i className={icon} /></div><h3 className="mb-1 text-sm font-bold text-gray-900">{title}</h3><p className="text-xs leading-relaxed text-gray-500">{body}</p></div>)}
              </div>
            </section>

            <section className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>
              <p className="mb-2 font-semibold text-gray-600">References</p>
              <ul className="space-y-1.5">
                <li><a href="https://www.kingarthurbaking.com/learn/ingredient-weight-chart" target="_blank" rel="nofollow noopener noreferrer" className="font-semibold hover:underline" style={{ color: ACCENT }}>King Arthur Baking: Ingredient Weight Chart</a><span> — source for figures attributed to King Arthur above.</span></li>
                <li><a href="https://www.kingarthurbaking.com/recipes/resources/recipe-success-guide" target="_blank" rel="nofollow noopener noreferrer" className="font-semibold hover:underline" style={{ color: ACCENT }}>King Arthur Baking: Recipe Success Guide</a><span> — measurement standards and the spoon-and-sweep method.</span></li>
                <li><a href="https://fdc.nal.usda.gov/" target="_blank" rel="nofollow noopener noreferrer" className="font-semibold hover:underline" style={{ color: ACCENT }}>USDA FoodData Central</a><span> — general reference for portion-weight data.</span></li>
              </ul>
              <p className="mt-3 text-gray-500">There isn&apos;t always one universally correct grams-per-cup number. The ingredient, product, brand, preparation state, and measurement method all matter.</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
