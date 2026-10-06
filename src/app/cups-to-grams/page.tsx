import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CupsToGramsConverter from "@/components/CupsToGramsConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

type Column = { label: string; href?: string };
type Category = { id: string; title: string; columns: Column[]; rows: string[][]; note?: string };

export const metadata: Metadata = {
    title: "Cups to Grams Converter — Full Ingredient Weight Tables",
    description:
        "Convert cups to grams for flours, sugars, fats, dairy, grains, nuts, baking staples, cheese, spices, and condiments — a complete cup-to-gram reference.",
    alternates: { canonical: "/cups-to-grams" },
    openGraph: {
        title: "Cups to Grams Converter — Full Ingredient Weight Tables",
        description: "Grams = Cups × Grams per Cup. A complete cup-to-gram reference table across 10 ingredient categories.",
        url: "/cups-to-grams",
        siteName: "Grams2Cups",
        type: "website",
        images: ["/og-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cups to Grams Converter — Full Ingredient Weight Tables",
        description: "Convert cups to grams across 10 ingredient categories.",
        images: ["/og-image.jpg"],
    },
};

const otherIngredients = [
  { name: "All-purpose flour", href: "/flour" },
  { name: "Butter", href: "/butter" },
  { name: "Water", href: "/water" },
  { name: "Milk", href: "/milk" },
  { name: "Rolled oats", href: "/oats" },
  { name: "Rice", href: "/rice" },
  { name: "Chocolate chips", href: "/chocolate-chips" },
  { name: "Honey", href: "/honey" },
  { name: "Almonds", href: "/almonds" },
  { name: "Cocoa powder", href: "/cocoa-powder" },
  { name: "Salt", href: "/salt" },
  { name: "Baking powder", href: "/baking-powder" },
  { name: "Vegetable oil", href: "/vegetable-oil" },
];

const ingredients: Ingredient[] = [
    { name: "All-purpose flour", slug: "flour", gramsPerCup: 120, notes: "Spoon and level" },
    { name: "Granulated sugar", slug: "sugar", gramsPerCup: 200, notes: "Use level cups" },
    { name: "Brown sugar", slug: "brown-sugar", gramsPerCup: 220, notes: "Pack firmly" },
    { name: "Powdered sugar", slug: "powdered-sugar", gramsPerCup: 120, notes: "Sift before measuring" },
    { name: "Butter", slug: "butter", gramsPerCup: 227, notes: "Standard US butter" },
    { name: "Vegetable oil", slug: "vegetable-oil", gramsPerCup: 218, notes: "Approximate density" },
    { name: "Milk", slug: "milk", gramsPerCup: 245, notes: "Whole milk, approximately" },
    { name: "Water", slug: "water", gramsPerCup: 237, notes: "US customary cup" },
    { name: "Honey", slug: "honey", gramsPerCup: 340, notes: "Dense liquid" },
    { name: "Rolled oats", slug: "oats", gramsPerCup: 90, notes: "Regular rolled oats" },
    { name: "Rice", slug: "rice", gramsPerCup: 185, notes: "Uncooked white rice" },
    { name: "Cocoa powder", slug: "cocoa-powder", gramsPerCup: 100, notes: "Unsweetened" },
];

const cups = ["¼ cup", "⅓ cup", "½ cup", "⅔ cup", "¾ cup", "1 cup", "1½ cups", "2 cups"];

function rows(weights: number[][]) {
    return cups.map((cup, index) => [cup, ...weights.map((weight) => `${Math.round(weight[index])} g`)]);
}

const categories: Category[] = [
    {
        id: "flours", title: "Flours", columns: [{ label: "Cups" }, { label: "All-Purpose Flour", href: "/flour" }, { label: "Whole Wheat Flour" }, { label: "Almond Flour" }, { label: "Cake Flour" }],
        rows: rows([[31, 42, 63, 83, 94, 120, 180, 240], [30, 40, 60, 80, 90, 120, 180, 240], [24, 32, 48, 64, 72, 96, 144, 192], [29, 38, 57, 76, 86, 114, 171, 228]]),
        note: "Flour is strongly affected by measuring technique. These figures assume the spoon-and-level method rather than scooping directly from the bag.",
    },
    {
        id: "sugars", title: "Sugars and Sweeteners", columns: [{ label: "Cups" }, { label: "Granulated Sugar", href: "/sugar" }, { label: "Brown Sugar (Packed)", href: "/brown-sugar" }, { label: "Powdered Sugar", href: "/powdered-sugar" }, { label: "Honey", href: "/honey" }],
        rows: rows([[50, 67, 100, 133, 150, 200, 300, 400], [55, 73, 110, 147, 165, 220, 330, 440], [30, 40, 60, 80, 90, 120, 180, 240], [85, 113, 170, 227, 255, 340, 510, 680]]),
        note: "Brown sugar values assume it is firmly packed. A loose cup can weigh substantially less.",
    },
    {
        id: "fats", title: "Butter, Oils, and Fats", columns: [{ label: "Cups" }, { label: "Butter", href: "/butter" }, { label: "Vegetable Oil", href: "/vegetable-oil" }, { label: "Olive Oil" }, { label: "Shortening" }],
        rows: rows([[57, 76, 114, 151, 170, 227, 341, 454], [55, 73, 109, 145, 164, 218, 327, 436], [54, 72, 108, 144, 162, 216, 324, 432], [51, 68, 103, 137, 154, 205, 308, 410]]),
        note: "Butter is especially easy to measure in the US because one cup equals two standard sticks.",
    },
    {
        id: "dairy", title: "Dairy and Liquids", columns: [{ label: "Cups" }, { label: "Milk", href: "/milk" }, { label: "Heavy Cream" }, { label: "Water", href: "/water" }, { label: "Yogurt" }],
        rows: rows([[61, 82, 123, 163, 184, 245, 368, 490], [60, 79, 119, 159, 179, 238, 357, 476], [59, 79, 118, 157, 177, 236, 354, 472], [61, 82, 123, 163, 184, 245, 368, 490]]),
        note: "Liquids are generally more consistent because there is no packing or settling, though cup standards still differ by country.",
    },
    {
        id: "grains", title: "Grains, Rice, and Pasta", columns: [{ label: "Cups" }, { label: "Uncooked Rice", href: "/rice" }, { label: "Rolled Oats", href: "/oats" }, { label: "Quinoa" }, { label: "Dry Pasta" }],
        rows: rows([[46, 62, 93, 123, 139, 185, 278, 370], [23, 30, 45, 60, 68, 90, 135, 180], [43, 57, 85, 113, 128, 170, 255, 340], [25, 33, 50, 67, 75, 100, 150, 200]]),
    },
    {
        id: "nuts", title: "Nuts and Seeds", columns: [{ label: "Cups" }, { label: "Whole Almonds", href: "/almonds" }, { label: "Walnuts (Chopped)" }, { label: "Sesame Seeds" }, { label: "Peanut Butter" }],
        rows: rows([[36, 48, 72, 95, 107, 143, 215, 286], [30, 40, 60, 80, 90, 120, 180, 240], [36, 48, 72, 96, 108, 144, 216, 288], [65, 86, 129, 172, 194, 258, 387, 516]]),
    },
    {
        id: "baking-staples", title: "Baking Staples", columns: [{ label: "Cups" }, { label: "Cocoa Powder", href: "/cocoa-powder" }, { label: "Chocolate Chips", href: "/chocolate-chips" }, { label: "Cornstarch" }, { label: "Baking Powder", href: "/baking-powder" }],
        rows: rows([[22, 29, 43, 57, 65, 86, 129, 172], [43, 57, 85, 113, 128, 170, 255, 340], [32, 43, 64, 85, 96, 128, 192, 256], [55, 73, 110, 147, 165, 220, 330, 440]]),
    },
    {
        id: "cheese", title: "Cheese", columns: [{ label: "Cups" }, { label: "Parmesan (Grated)" }, { label: "Cheddar (Shredded)" }, { label: "Cream Cheese" }, { label: "Feta (Crumbled)" }],
        rows: rows([[25, 33, 50, 67, 75, 100, 150, 200], [28, 38, 57, 75, 85, 113, 170, 226], [58, 77, 116, 155, 174, 232, 348, 464], [38, 50, 75, 100, 113, 150, 225, 300]]),
        note: "Grated and shredded cheeses vary with cut size and packing, so these are practical reference values.",
    },
    {
        id: "herbs-spices", title: "Dried Herbs and Spices", columns: [{ label: "Cups" }, { label: "Ground Cinnamon" }, { label: "Ground Cumin" }, { label: "Paprika" }, { label: "Garlic Powder" }],
        rows: rows([[31, 42, 63, 83, 94, 125, 188, 250], [26, 35, 52, 69, 78, 104, 156, 208], [27, 36, 55, 73, 82, 109, 164, 218], [38, 51, 76, 101, 114, 152, 228, 304]]),
        note: "Spices are usually measured by teaspoon or tablespoon, but full-cup values help when scaling bulk blends.",
    },
    {
        id: "condiments", title: "Condiments and Sauces", columns: [{ label: "Cups" }, { label: "Mayonnaise" }, { label: "Ketchup" }, { label: "Soy Sauce" }, { label: "Peanut Butter" }],
        rows: rows([[58, 77, 116, 155, 174, 232, 348, 464], [68, 91, 136, 181, 204, 272, 408, 544], [64, 85, 128, 170, 191, 255, 383, 510], [65, 86, 129, 172, 194, 258, 387, 516]]),
        note: "Thick condiments behave more like dense ingredients than thin liquids, so their cup weights can be surprisingly high.",
    },
];

function CategoryTable({ columns, tableRows }: { columns: Column[]; tableRows: string[][] }) {
    return (
        <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
            <table className="w-full min-w-[560px] text-sm">
                <thead style={{ backgroundColor: ACCENT }}><tr>{columns.map((column) => <th key={column.label} className="whitespace-nowrap px-4 py-3 text-left font-semibold text-white">{column.href ? <Link href={column.href} className="hover:underline">{column.label}</Link> : column.label}</th>)}</tr></thead>
                <tbody>{tableRows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>{row.map((cell, cellIndex) => <td key={cellIndex} className={`px-4 py-2.5 ${cellIndex === 0 ? "font-medium text-gray-800" : "text-gray-600"}`}>{cell}</td>)}</tr>)}</tbody>
            </table>
        </div>
    );
}

export default function CupsToGramsPage() {
    const jumpNav = categories.map(({ id, title }) => ({ id, title }));

    return (
        <div className="min-h-screen bg-[#f7f7f7]">
            <Navbar />
            <section className="relative overflow-hidden border-b border-[#e4efe9]">
                <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}><i className="ri-scales-3-line" /> 10 categories, 38 ingredients</div>
                        <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">Cups to Grams Converter</h1>
                        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">Got a measurement in cups and need to know the weight in grams? Start with the cup measurement you have and get an ingredient-specific result, then browse the full reference tables below.</p>
                        <p className="mx-auto mt-3 text-sm text-gray-400">Looking for the reverse direction? <Link href="/" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>Convert grams to cups</Link>.</p>
                    </div>
                    <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">{jumpNav.map((item) => <a key={item.id} href={`#${item.id}`} className="rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-current" style={{ borderColor: `${ACCENT}30`, color: ACCENT }}>{item.title}</a>)}</div>
                </div>
            </section>

            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
                <main className="mx-auto w-full max-w-5xl"><div className="space-y-10">
                    <CupsToGramsConverter ingredients={ingredients} />

                    <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
                        <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Formula</h2>
                        <div className="mb-3 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>Grams = Cups × Grams per Cup</div>
                        <p className="text-sm leading-relaxed text-gray-600">Every ingredient has its own grams-per-cup value because weight depends on density. A cup of flour and a cup of honey occupy the same volume but weigh very different amounts.</p>
                    </section>

                    {categories.map((category) => <section key={category.id} id={category.id} className="scroll-mt-24"><h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">{category.title}</h2><CategoryTable columns={category.columns} tableRows={category.rows} />{category.note && <p className="mt-2 text-sm leading-relaxed text-gray-600">{category.note}</p>}</section>)}

                    <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
                        <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why convert cups to grams?</h2>
                        <ul className="space-y-2 text-sm text-gray-600">{["Grams do not shift with measuring technique.", "Scaling recipes is cleaner in grams.", "Many international and professional recipes are written in grams.", "A scale lets you build a recipe in one bowl with fewer measuring tools."].map((item) => <li key={item} className="flex items-start gap-2"><i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} /><span>{item}</span></li>)}</ul>
                    </section>

                    <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A note on cup sizes</h2><p className="text-sm leading-relaxed text-gray-600">This page uses the US customary cup, approximately 236.6 mL. Metric cups can be 250 mL, so check a recipe&apos;s country and measurement system when precision matters.</p></section>

                    <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2><p className="text-sm leading-relaxed text-gray-600">Cups are convenient, but the weight behind a cup depends on what fills it and how it was measured. When a recipe&apos;s outcome matters, convert to grams and weigh directly.</p></section>
                </div>

                    {/* Other Ingredients */}
                    <section className="mt-10">
                        <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams To Cups: Ingredients</h2>
                        <p className="mb-4 text-sm leading-relaxed text-gray-600">
                            Grams-to-cups conversion isn&apos;t only useful for oats. Each of these has its own
                            weight-per-cup because densities differ:
                        </p>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {otherIngredients.map((ing) => (
                                <Link
                                    key={ing.href}
                                    href={ing.href}
                                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:text-[#02B875] hover:border-current"
                                    style={{ borderColor: `${ACCENT}20` }}
                                >
                                    <span className="truncate">{ing.name}</span>
                                    <i className="ri-arrow-right-s-line flex-shrink-0" style={{ color: ACCENT }} />
                                </Link>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
