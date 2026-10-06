import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CupsToGramsConverter from "@/components/CupsToGramsConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Cups to Grams Converter | Ingredient Weight Calculator",
  description: "Convert cups to grams for flour, sugar, butter, milk, water, honey, and other common cooking and baking ingredients.",
  alternates: { canonical: "/grams-to-cups" },
  openGraph: {
    title: "Cups to Grams Converter",
    description: "Convert cups to grams with ingredient-specific weights per cup.",
    url: "/grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cups to Grams Converter",
    description: "Convert cups to grams with ingredient-specific weights per cup.",
    images: ["/og-image.jpg"],
  },
};

const ingredients: Ingredient[] = [
  { name: "All-purpose flour", slug: "flour", gramsPerCup: 120, notes: "Spoon and level for accuracy" },
  { name: "Granulated sugar", slug: "sugar", gramsPerCup: 200, notes: "Use level cups" },
  { name: "Brown sugar", slug: "brown-sugar", gramsPerCup: 220, notes: "Pack firmly" },
  { name: "Powdered sugar", slug: "powdered-sugar", gramsPerCup: 120, notes: "Sift before measuring" },
  { name: "Butter", slug: "butter", gramsPerCup: 227, notes: "Standard US butter" },
  { name: "Water", slug: "water", gramsPerCup: 237, notes: "US customary cup" },
  { name: "Milk", slug: "milk", gramsPerCup: 237, notes: "Whole milk, approximately" },
  { name: "Honey", slug: "honey", gramsPerCup: 340, notes: "Dense liquid" },
  { name: "Rolled oats", slug: "oats", gramsPerCup: 90, notes: "Regular rolled oats" },
  { name: "Rice", slug: "rice", gramsPerCup: 185, notes: "Uncooked white rice" },
  { name: "Cocoa powder", slug: "cocoa-powder", gramsPerCup: 100, notes: "Unsweetened" },
  { name: "Vegetable oil", slug: "vegetable-oil", gramsPerCup: 218, notes: "Approximate density" },
];

export default function CupsToGramsPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />
      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}><i className="ri-scales-3-line" /> Reverse ingredient converter</div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">Cups To Grams Converter</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">Convert cups to grams using the correct weight for each ingredient. Flour, sugar, butter, liquids, and dry goods all have different grams-per-cup values.</p>
            <p className="mx-auto mt-3 text-sm text-gray-400">Need the reverse direction? <Link href="/" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>Convert grams to cups</Link>.</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-4xl space-y-10">
          <CupsToGramsConverter ingredients={ingredients} />
          <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to convert cups to grams</h2>
            <p className="mb-3 text-sm leading-relaxed text-gray-600">Multiply the number of cups by the ingredient&apos;s grams-per-cup value:</p>
            <div className="mb-3 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>Grams = cups × grams per cup</div>
            <p className="text-sm leading-relaxed text-gray-600">For example, 2 cups of all-purpose flour at 120 grams per cup equals 240 grams. Since measuring technique changes the result, use a scale when accuracy matters.</p>
          </section>
          <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
            <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Common cup-to-gram references</h2>
            <ul className="grid gap-2 text-sm text-gray-600 sm:grid-cols-2">{ingredients.slice(0, 8).map((ingredient) => <li key={ingredient.slug} className="flex items-center justify-between rounded-xl border bg-white px-3 py-2" style={{ borderColor: `${ACCENT}20` }}><span>{ingredient.name}</span><strong style={{ color: ACCENT }}>{ingredient.gramsPerCup} g / cup</strong></li>)}</ul>
          </section>
        </main>
      </div>
    </div>
  );
}
