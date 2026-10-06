import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "120 Grams to Cups — Full Ingredient Conversion Chart",
  description: "How many cups is 120 grams? 120 grams happens to be a genuinely useful number to know, because it lines up almost exactly with 1 cup of all-purpose flour.",
  alternates: { canonical: "/120-grams-to-cups" },
  openGraph: {
    title: "120 Grams to Cups — Full Ingredient Conversion Chart",
    description: "120 grams is about 1 cup of flour, ⅝ cup of granulated sugar, or ½ cup of butter — see the full chart.",
    url: "/120-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "120 Grams to Cups — Full Ingredient Conversion Chart",
    description: "How many cups is 120 grams? It depends on the ingredient — see the full chart.",
    images: ["/og-image.jpg"],
  },
};

type Row = { name: string; href?: string; cups: string; tbsp: string; tsp: string; gpc: string };
type MainRow = Omit<Row, "tsp" | "gpc">;
type Category = { id: string; title: string; rows: Row[] };

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

const mainRows: MainRow[] = [
  { name: "All-purpose flour", href: "/flour", cups: "1 cup", tbsp: "15.4 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "~⅝ cup", tbsp: "9.6 tbsp" },
  { name: "Powdered sugar", href: "/powdered-sugar", cups: "1 cup", tbsp: "16 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "~½ cup (heaping)", tbsp: "8.7 tbsp" },
  { name: "Butter", href: "/butter", cups: "~½ cup (heaping)", tbsp: "8.5 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~½ cup (heaping)", tbsp: "8.8 tbsp" },
  { name: "Milk", href: "/milk", cups: "~½ cup", tbsp: "7.8 tbsp" },
  { name: "Water", href: "/water", cups: "~½ cup", tbsp: "8.1 tbsp" },
  { name: "Honey", href: "/honey", cups: "~⅓ cup (heaping)", tbsp: "5.6 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~⅔ cup", tbsp: "10.4 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "1⅓ cups", tbsp: "21.3 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "~1⅜ cups", tbsp: "22.3 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "~¾ cup", tbsp: "11.3 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~⅞ cup", tbsp: "13.4 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~⅜ cup (heaping)", tbsp: "6.7 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "~½ cup (heaping)", tbsp: "8.7 tbsp" },
];

const categories: Category[] = [
  { id: "flours", title: "Flours", rows: [
    { name: "All-purpose flour", href: "/flour", cups: "0.96 cup", tbsp: "15.4", tsp: "46.1", gpc: "125" },
    { name: "Bread flour", cups: "0.94 cup", tbsp: "15.1", tsp: "45.4", gpc: "127" },
    { name: "Cake flour", cups: "1.05 cups", tbsp: "16.8", tsp: "50.5", gpc: "114" },
    { name: "Whole wheat flour", cups: "1 cup", tbsp: "16", tsp: "48", gpc: "120" },
    { name: "Almond flour", cups: "1.25 cups", tbsp: "20", tsp: "60", gpc: "96" },
    { name: "Coconut flour", cups: "0.94 cup", tbsp: "15", tsp: "45", gpc: "128" },
  ] },
  { id: "sugars", title: "Sugars and Sweeteners", rows: [
    { name: "Granulated sugar", href: "/sugar", cups: "0.60 cup", tbsp: "9.6", tsp: "28.8", gpc: "200" },
    { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "0.55 cup", tbsp: "8.7", tsp: "26.2", gpc: "220" },
    { name: "Powdered sugar", href: "/powdered-sugar", cups: "1 cup", tbsp: "16", tsp: "48", gpc: "120" },
    { name: "Honey", href: "/honey", cups: "0.35 cup", tbsp: "5.65", tsp: "16.9", gpc: "340" },
    { name: "Maple syrup", cups: "0.37 cup", tbsp: "5.96", tsp: "17.9", gpc: "322" },
    { name: "Molasses", cups: "0.37 cup", tbsp: "5.85", tsp: "17.6", gpc: "328" },
  ] },
  { id: "fats", title: "Butter, Oils and Fats", rows: [
    { name: "Butter", href: "/butter", cups: "0.53 cup", tbsp: "8.46", tsp: "25.4", gpc: "227" },
    { name: "Shortening", cups: "0.59 cup", tbsp: "9.37", tsp: "28.1", gpc: "205" },
    { name: "Vegetable oil", href: "/vegetable-oil", cups: "0.55 cup", tbsp: "8.81", tsp: "26.4", gpc: "218" },
    { name: "Olive oil", cups: "0.56 cup", tbsp: "8.89", tsp: "26.7", gpc: "216" },
    { name: "Coconut oil", cups: "0.55 cup", tbsp: "8.81", tsp: "26.4", gpc: "218" },
  ] },
  { id: "dairy-and-liquids", title: "Dairy and Liquids", rows: [
    { name: "Milk", href: "/milk", cups: "0.49 cup", tbsp: "7.84", tsp: "23.5", gpc: "245" },
    { name: "Heavy cream", cups: "0.50 cup", tbsp: "8.07", tsp: "24.2", gpc: "238" },
    { name: "Yogurt", cups: "0.49 cup", tbsp: "7.84", tsp: "23.5", gpc: "245" },
    { name: "Cream cheese", cups: "0.52 cup", tbsp: "8.28", tsp: "24.8", gpc: "232" },
    { name: "Condensed milk", cups: "0.39 cup", tbsp: "6.27", tsp: "18.8", gpc: "306" },
  ] },
  { id: "grains", title: "Rice, Grains and Pasta", rows: [
    { name: "Uncooked rice", href: "/rice", cups: "0.65 cup", tbsp: "10.38", tsp: "31.1", gpc: "185" },
    { name: "Rolled oats", href: "/oats", cups: "1.33 cups", tbsp: "21.3", tsp: "64", gpc: "90" },
    { name: "Quinoa", cups: "0.71 cup", tbsp: "11.29", tsp: "33.9", gpc: "170" },
    { name: "Couscous", cups: "0.69 cup", tbsp: "11.1", tsp: "33.3", gpc: "173" },
    { name: "Dry pasta", cups: "1.20 cups", tbsp: "19.2", tsp: "57.6", gpc: "100" },
  ] },
  { id: "nuts", title: "Nuts and Seeds", rows: [
    { name: "Whole almonds", href: "/almonds", cups: "0.84 cup", tbsp: "13.4", tsp: "40.3", gpc: "143" },
    { name: "Walnuts (chopped)", cups: "1 cup", tbsp: "16", tsp: "48", gpc: "120" },
    { name: "Cashews", cups: "0.88 cup", tbsp: "14.0", tsp: "42.0", gpc: "137" },
    { name: "Peanut butter", cups: "0.47 cup", tbsp: "7.44", tsp: "22.3", gpc: "258" },
    { name: "Sesame seeds", cups: "0.83 cup", tbsp: "13.3", tsp: "40", gpc: "144" },
  ] },
  { id: "baking-staples", title: "Baking Staples", rows: [
    { name: "Cocoa powder", href: "/cocoa-powder", cups: "1.40 cups", tbsp: "22.3", tsp: "67.0", gpc: "86" },
    { name: "Chocolate chips", href: "/chocolate-chips", cups: "0.71 cup", tbsp: "11.3", tsp: "33.9", gpc: "170" },
    { name: "Cornstarch", cups: "0.94 cup", tbsp: "15.0", tsp: "45.0", gpc: "128" },
    { name: "Breadcrumbs", cups: "1.11 cups", tbsp: "17.8", tsp: "53.3", gpc: "108" },
    { name: "Baking powder", href: "/baking-powder", cups: "0.55 cup", tbsp: "8.73", tsp: "26.2", gpc: "220" },
    { name: "Salt", href: "/salt", cups: "0.42 cup", tbsp: "6.67", tsp: "20", gpc: "288" },
  ] },
  { id: "cheese", title: "Cheese", rows: [
    { name: "Parmesan (grated)", cups: "1.20 cups", tbsp: "19.2", tsp: "57.6", gpc: "100" },
    { name: "Cheddar (shredded)", cups: "1.06 cups", tbsp: "16.99", tsp: "51.0", gpc: "113" },
    { name: "Mozzarella (shredded)", cups: "1.07 cups", tbsp: "17.14", tsp: "51.4", gpc: "112" },
    { name: "Feta (crumbled)", cups: "0.80 cup", tbsp: "12.8", tsp: "38.4", gpc: "150" },
  ] },
];

function MainTable({ rows }: { rows: MainRow[] }) {
  return <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}><table className="w-full min-w-[420px] text-sm"><thead style={{ backgroundColor: ACCENT }}><tr><th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th><th className="px-4 py-3 text-left font-semibold text-white">120g in Cups</th><th className="px-4 py-3 text-left font-semibold text-white">Tablespoons</th></tr></thead><tbody>{rows.map((row, index) => <tr key={row.name} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}><td className="px-4 py-2.5 font-medium text-gray-800">{row.href ? <Link href={row.href} className="hover:underline" style={{ color: ACCENT }}>{row.name}</Link> : row.name}</td><td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.cups}</td><td className="px-4 py-2.5 text-gray-600">{row.tbsp}</td></tr>)}</tbody></table></div>;
}

function CategoryTable({ rows }: { rows: Row[] }) {
  return <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}><table className="w-full min-w-[560px] text-sm"><thead style={{ backgroundColor: ACCENT }}><tr>{["Ingredient", "120g in Cups", "Tbsp", "Tsp", "g per Cup"].map((title) => <th key={title} className="whitespace-nowrap px-4 py-3 text-left font-semibold text-white">{title}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={row.name} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}><td className="px-4 py-2.5 font-medium text-gray-800">{row.href ? <Link href={row.href} className="hover:underline" style={{ color: ACCENT }}>{row.name}</Link> : row.name}</td><td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.cups}</td><td className="px-4 py-2.5 text-gray-600">{row.tbsp}</td><td className="px-4 py-2.5 text-gray-600">{row.tsp}</td><td className="px-4 py-2.5 text-gray-600">{row.gpc}</td></tr>)}</tbody></table></div>;
}

export default function OneHundredTwentyGramsToCups() {
  return <div className="min-h-screen bg-[#f7f7f7]"><Navbar />
    <section className="relative overflow-hidden border-b border-[#e4efe9]"><div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8"><div className="mx-auto max-w-3xl"><div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}><i className="ri-scales-3-line" /> 40+ ingredients at 120 grams</div><h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">120 Grams to Cups</h1><p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">120 grams is a useful number because it lines up almost exactly with 1 cup of all-purpose flour. That coincidence only holds for flour; swap in sugar, butter, or honey and the volume changes with the ingredient&apos;s density.</p><p className="mx-auto mt-3 text-sm text-gray-400">Looking for another amount? <Link href="/50-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>50g</Link> · <Link href="/100-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>100g</Link> · <Link href="/150-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>150g</Link></p></div><div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">{categories.map((category) => <a key={category.id} href={`#${category.id}`} className="rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-current" style={{ borderColor: `${ACCENT}30`, color: ACCENT }}>{category.title}</a>)}</div></div></section>
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8"><main className="mx-auto w-full max-w-5xl"><div className="space-y-10">
      <SimpleConverter ingredients={ingredients} initialGrams={120} />
      <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2><p className="text-sm leading-relaxed text-gray-600">120 grams is about 1 cup of <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, ⅝ cup of <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>granulated sugar</Link>, or ½ cup of <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>. The exact amount depends on ingredient density.</p></section>
      <section><h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">120 Grams to Cups, by Ingredient</h2><MainTable rows={mainRows} /><p className="mt-2 text-sm leading-relaxed text-gray-600">Figures use standard reference weights per cup, a US customary cup, and the spoon-and-level method for dry ingredients. Brand, humidity, and packing can shift the result slightly.</p></section>
      <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why 120 Grams Does Not Always Mean 1 Cup</h2><p className="mb-3 text-sm leading-relaxed text-gray-600">120 grams equals about 1 cup for all-purpose flour because of flour&apos;s density. Sugar crystals pack more closely, so 120 grams settles into a smaller volume, while dense honey fills only about a third of a cup.</p><p className="text-sm leading-relaxed text-gray-600">A cup measures space, not mass. The same 120-gram weight can look very different depending on what is being measured.</p></section>
      <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 120 Grams Accurately</h2><p className="mb-3 text-sm leading-relaxed text-gray-600"><strong className="text-gray-900">With a kitchen scale:</strong> Set your bowl on the scale, zero it, and add the ingredient until it reads 120 grams. A scale avoids the awkward fractions that several ingredients produce in cups.</p><ul className="space-y-2 text-sm text-gray-600">{["Spoon light powders into a cup, then level the top.", "Pack brown sugar firmly until it holds its shape.", "Read liquid fill lines at eye level."] .map((item) => <li key={item} className="flex items-start gap-2"><i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} /><span>{item}</span></li>)}</ul></section>
      <section><h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Full Category Tables</h2><p className="mb-4 text-sm leading-relaxed text-gray-600">These tables break down 120 grams across eight ingredient categories with tablespoon, teaspoon, and grams-per-cup figures.</p>{categories.map((category) => <div key={category.id} id={category.id} className="mb-8 scroll-mt-24"><h3 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">{category.title}</h3><CategoryTable rows={category.rows} /></div>)}</section>
      <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2><p className="text-sm leading-relaxed text-gray-600">120 grams looking like 1 cup only holds true for flour. Every other ingredient lands somewhere different because its density is different. When precision matters, weighing 120 grams directly is the most dependable approach.</p></section>
      <section className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}><p className="mb-2 font-semibold text-gray-600">More Converters</p><div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{[{ name: "50 grams to cups", href: "/50-grams-to-cups" }, { name: "100 grams to cups", href: "/100-grams-to-cups" }, { name: "150 grams to cups", href: "/150-grams-to-cups" }, { name: "Cups to grams", href: "/cups-to-grams" }, { name: "Grams to ounces", href: "/grams-to-ounces" }, { name: "All ingredients", href: "/ingredients" }].map((link) => <Link key={link.href} href={link.href} className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2 font-medium text-gray-700 transition-colors hover:border-current" style={{ borderColor: `${ACCENT}20` }}><span className="truncate">{link.name}</span><i className="ri-arrow-right-s-line flex-shrink-0" style={{ color: ACCENT }} /></Link>)}</div></section>
    </div></main></div>
  </div>;
}
