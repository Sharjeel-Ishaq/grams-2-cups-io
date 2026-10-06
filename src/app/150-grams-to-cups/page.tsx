import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "150 Grams to Cups — Full Ingredient Conversion Chart",
  description: "How many cups is 150 grams? It depends on the ingredient. A complete chart covering flour, sugar, butter, honey, and 90+ other ingredients across 9 categories.",
  alternates: { canonical: "/150-grams-to-cups" },
  openGraph: {
    title: "150 Grams to Cups — Full Ingredient Conversion Chart",
    description: "150 grams is about 1¼ cups of flour, ¾ cup of sugar, or ⅔ cup of butter — see the full chart.",
    url: "/150-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "150 Grams to Cups — Full Ingredient Conversion Chart",
    description: "How many cups is 150 grams? It depends on the ingredient — see the full chart.",
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
  { name: "All-purpose flour", href: "/flour", cups: "1¼ cups", tbsp: "20 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "¾ cup", tbsp: "12 tbsp" },
  { name: "Powdered sugar", href: "/powdered-sugar", cups: "1¼ cups", tbsp: "20 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "~⅔ cup", tbsp: "10.9 tbsp" },
  { name: "Butter", href: "/butter", cups: "~⅔ cup", tbsp: "10.6 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~⅔ cup", tbsp: "11 tbsp" },
  { name: "Milk", href: "/milk", cups: "~⅝ cup", tbsp: "9.8 tbsp" },
  { name: "Water", href: "/water", cups: "~⅝ cup", tbsp: "10.2 tbsp" },
  { name: "Honey", href: "/honey", cups: "~½ cup (scant)", tbsp: "7.1 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~¾ cup", tbsp: "13 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "1⅔ cups", tbsp: "26.7 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "1¾ cups", tbsp: "27.9 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "~⅞ cup", tbsp: "14.1 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~1 cup", tbsp: "16.8 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~½ cup", tbsp: "8.3 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "~⅔ cup", tbsp: "10.9 tbsp" },
];

const categories: IngredientGroup[] = [
  { id: "flours", title: "Flours", rows: [
    { name: "All-purpose flour", href: "/flour", cups: "1¼ cups", tbsp: "19.2", tsp: "57.6", gpc: "125" },
    { name: "Bread flour", cups: "1⅛ cups", tbsp: "18.9", tsp: "56.7", gpc: "127" },
    { name: "Cake flour", cups: "1⅓ cups", tbsp: "21.1", tsp: "63.2", gpc: "114" },
    { name: "Whole wheat flour", cups: "1¼ cups", tbsp: "20", tsp: "60", gpc: "120" },
    { name: "Almond flour", cups: "1½ cups", tbsp: "25", tsp: "75", gpc: "96" },
    { name: "Coconut flour", cups: "1⅛ cups", tbsp: "18.8", tsp: "56.3", gpc: "128" },
  ]},
  { id: "sugars", title: "Sugars and Sweeteners", rows: [
    { name: "Granulated sugar", href: "/sugar", cups: "¾ cup", tbsp: "12", tsp: "36", gpc: "200" },
    { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "⅔ cup", tbsp: "10.9", tsp: "32.7", gpc: "220" },
    { name: "Powdered sugar", href: "/powdered-sugar", cups: "1¼ cups", tbsp: "20", tsp: "60", gpc: "120" },
    { name: "Honey", href: "/honey", cups: "½ cup", tbsp: "7.06", tsp: "21.2", gpc: "340" },
    { name: "Maple syrup", cups: "½ cup", tbsp: "7.45", tsp: "22.4", gpc: "322" },
    { name: "Molasses", cups: "½ cup", tbsp: "7.32", tsp: "22", gpc: "328" },
  ]},
  { id: "fats", title: "Butter, Oils and Fats", rows: [
    { name: "Butter", href: "/butter", cups: "⅔ cup", tbsp: "10.6", tsp: "31.7", gpc: "227" },
    { name: "Shortening", cups: "¾ cup", tbsp: "11.7", tsp: "35.1", gpc: "205" },
    { name: "Vegetable oil", href: "/vegetable-oil", cups: "⅔ cup", tbsp: "11", tsp: "33", gpc: "218" },
    { name: "Olive oil", cups: "⅔ cup", tbsp: "11.1", tsp: "33.3", gpc: "216" },
    { name: "Coconut oil", cups: "⅔ cup", tbsp: "11", tsp: "33", gpc: "218" },
  ]},
  { id: "dairy", title: "Dairy and Liquids", rows: [
    { name: "Milk", href: "/milk", cups: "⅝ cup", tbsp: "9.8", tsp: "29.4", gpc: "245" },
    { name: "Heavy cream", cups: "⅝ cup", tbsp: "10.1", tsp: "30.3", gpc: "238" },
    { name: "Yogurt", cups: "⅝ cup", tbsp: "9.8", tsp: "29.4", gpc: "245" },
    { name: "Cream cheese", cups: "⅔ cup", tbsp: "10.3", tsp: "31", gpc: "232" },
    { name: "Condensed milk", cups: "½ cup", tbsp: "7.84", tsp: "23.5", gpc: "306" },
  ]},
  { id: "grains", title: "Rice, Grains and Pasta", rows: [
    { name: "Uncooked rice", href: "/rice", cups: "¾ cup", tbsp: "13", tsp: "38.9", gpc: "185" },
    { name: "Rolled oats", href: "/oats", cups: "1⅔ cups", tbsp: "26.7", tsp: "80", gpc: "90" },
    { name: "Quinoa", cups: "⅞ cup", tbsp: "14.1", tsp: "42.4", gpc: "170" },
    { name: "Couscous", cups: "⅞ cup", tbsp: "13.9", tsp: "41.6", gpc: "173" },
    { name: "Dry pasta", cups: "1½ cups", tbsp: "24", tsp: "72", gpc: "100" },
  ]},
  { id: "nuts", title: "Nuts and Seeds", rows: [
    { name: "Whole almonds", href: "/almonds", cups: "1 cup", tbsp: "16.8", tsp: "50.3", gpc: "143" },
    { name: "Walnuts (chopped)", cups: "1¼ cups", tbsp: "20", tsp: "60", gpc: "120" },
    { name: "Cashews", cups: "1⅛ cups", tbsp: "17.5", tsp: "52.6", gpc: "137" },
    { name: "Peanut butter", cups: "⅝ cup", tbsp: "9.3", tsp: "27.9", gpc: "258" },
    { name: "Sesame seeds", cups: "1 cup", tbsp: "16.7", tsp: "50", gpc: "144" },
  ]},
  { id: "baking-staples", title: "Baking Staples", rows: [
    { name: "Cocoa powder", href: "/cocoa-powder", cups: "1¾ cups", tbsp: "27.9", tsp: "83.7", gpc: "86" },
    { name: "Chocolate chips", href: "/chocolate-chips", cups: "⅞ cup", tbsp: "14.1", tsp: "42.4", gpc: "170" },
    { name: "Cornstarch", cups: "1⅛ cups", tbsp: "18.8", tsp: "56.3", gpc: "128" },
    { name: "Breadcrumbs", cups: "1⅜ cups", tbsp: "22.2", tsp: "66.7", gpc: "108" },
    { name: "Baking powder", href: "/baking-powder", cups: "⅔ cup", tbsp: "10.9", tsp: "32.7", gpc: "220" },
    { name: "Salt", href: "/salt", cups: "½ cup", tbsp: "8.33", tsp: "25", gpc: "288" },
  ]},
  { id: "cheese", title: "Cheese", rows: [
    { name: "Parmesan (grated)", cups: "1½ cups", tbsp: "24", tsp: "72", gpc: "100" },
    { name: "Cheddar (shredded)", cups: "1⅓ cups", tbsp: "21.2", tsp: "63.7", gpc: "113" },
    { name: "Mozzarella (shredded)", cups: "1⅓ cups", tbsp: "21.4", tsp: "64.3", gpc: "112" },
    { name: "Feta (crumbled)", cups: "1 cup", tbsp: "16", tsp: "48", gpc: "150" },
  ]},
];

function MainTable({ rows }: { rows: Row[] }) {
  return <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}><table className="w-full min-w-[420px] text-sm"><thead style={{ backgroundColor: ACCENT }}><tr><th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th><th className="px-4 py-3 text-left font-semibold text-white">150g in Cups</th><th className="px-4 py-3 text-left font-semibold text-white">Tablespoons</th></tr></thead><tbody>{rows.map((row, index) => <tr key={row.name} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}><td className="px-4 py-2.5 font-medium text-gray-800">{row.href ? <Link href={row.href} className="hover:underline" style={{ color: ACCENT }}>{row.name}</Link> : row.name}</td><td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.cups}</td><td className="px-4 py-2.5 text-gray-600">{row.tbsp}</td></tr>)}</tbody></table></div>;
}

function CategoryTable({ rows }: { rows: Row[] }) {
  return <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}><table className="w-full min-w-[560px] text-sm"><thead style={{ backgroundColor: ACCENT }}><tr>{["Ingredient", "150g in Cups", "Tbsp", "Tsp", "g per Cup"].map((title) => <th key={title} className="whitespace-nowrap px-4 py-3 text-left font-semibold text-white">{title}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={row.name} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}><td className="px-4 py-2.5 font-medium text-gray-800">{row.href ? <Link href={row.href} className="hover:underline" style={{ color: ACCENT }}>{row.name}</Link> : row.name}</td><td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.cups}</td><td className="px-4 py-2.5 text-gray-600">{row.tbsp}</td><td className="px-4 py-2.5 text-gray-600">{row.tsp}</td><td className="px-4 py-2.5 text-gray-600">{row.gpc}</td></tr>)}</tbody></table></div>;
}

export default function OneFiftyGramsToCups() {
  return <div className="min-h-screen bg-[#f7f7f7]"><Navbar />
    <section className="relative overflow-hidden border-b border-[#e4efe9]"><div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8"><div className="mx-auto max-w-3xl"><div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}><i className="ri-scales-3-line" /> 90+ ingredients at 150 grams</div><h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">150 Grams to Cups</h1><p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">150 grams does not fill the same amount of cup twice. Swap the ingredient and the number changes with its density. Here&apos;s how 150 grams breaks down for the ingredients people search for most.</p><p className="mx-auto mt-3 text-sm text-gray-400">Looking for another amount? <Link href="/100-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>100g</Link> · <Link href="/200-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>200g</Link></p></div><div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">{categories.map((category) => <a key={category.id} href={`#${category.id}`} className="rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-current" style={{ borderColor: `${ACCENT}30`, color: ACCENT }}>{category.title}</a>)}</div></div></section>
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8"><main className="mx-auto w-full max-w-5xl"><div className="space-y-10">
      <SimpleConverter ingredients={ingredients} initialGrams={150} />
      <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2><p className="text-sm leading-relaxed text-gray-600">150 grams is about 1¼ cups of <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, ¾ cup of <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>sugar</Link>, or ⅔ cup of <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>. The cup amount depends on the ingredient&apos;s density.</p></section>
      <section><h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">150 Grams to Cups, by Ingredient</h2><MainTable rows={mainRows} /><p className="mt-2 text-sm leading-relaxed text-gray-600">Figures use standard reference weights per cup, a US customary cup, and the spoon-and-level method for dry ingredients. Brand, humidity, and packing can shift the real number slightly.</p></section>
      <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why 150 Grams Never Looks the Same Twice</h2><p className="mb-3 text-sm leading-relaxed text-gray-600">Flour is light and fluffy, sugar crystals sit closer together, and honey is a dense liquid with almost no trapped air. That is why the same weight fills very different amounts of space.</p><p className="text-sm leading-relaxed text-gray-600">A cup measures volume, not mass. Two ingredients can weigh exactly the same and still look completely different in a measuring cup.</p></section>
      <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 150 Grams Accurately</h2><p className="mb-3 text-sm leading-relaxed text-gray-600"><strong className="text-gray-900">With a kitchen scale:</strong> Set your bowl on the scale, zero it, and add the ingredient until it reads 150 grams. This removes the guesswork that comes with a cup&apos;s fill line.</p><ul className="space-y-2 text-sm text-gray-600">{["Spoon light powders into a cup, then level the top.", "Pack brown sugar firmly until it holds its shape.", "Read liquid fill lines at eye level."] .map((item) => <li key={item} className="flex items-start gap-2"><i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} /><span>{item}</span></li>)}</ul></section>
      <section><h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Full Category Tables</h2><p className="mb-4 text-sm leading-relaxed text-gray-600">These tables extend the reference across nine ingredient categories with tablespoon, teaspoon, and grams-per-cup figures.</p>{categories.map((category) => <div key={category.id} id={category.id} className="mb-8 scroll-mt-24"><h3 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">{category.title}</h3><CategoryTable rows={category.rows} /></div>)}</section>
      <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2><p className="text-sm leading-relaxed text-gray-600">There is no single answer to how many cups is 150 grams because it depends on what you are measuring. When precision matters, weigh the ingredient directly: 150 grams on a scale is 150 grams no matter how it settles.</p></section>
      <section className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}><p className="mb-2 font-semibold text-gray-600">More Converters</p><div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{[{ name: "100 grams to cups", href: "/100-grams-to-cups" }, { name: "200 grams to cups", href: "/200-grams-to-cups" }, { name: "Cups to grams", href: "/cups-to-grams" }, { name: "Grams to ounces", href: "/grams-to-ounces" }, { name: "All ingredients", href: "/ingredients" }, { name: "Accuracy guide", href: "/grams-to-cups-accuracy" }].map((link) => <Link key={link.href} href={link.href} className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2 font-medium text-gray-700 transition-colors hover:border-current" style={{ borderColor: `${ACCENT}20` }}><span className="truncate">{link.name}</span><i className="ri-arrow-right-s-line flex-shrink-0" style={{ color: ACCENT }} /></Link>)}</div></section>
    </div></main></div>
  </div>;
}
