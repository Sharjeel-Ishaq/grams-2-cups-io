import { getAllIngredients, getIngredientBySlug } from "@/lib/ingredients";
import { gramsToCups, formatCups } from "@/lib/conversions";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { ingredient: string; weight: string };
};

export async function generateStaticParams() {
  const ingredients = await getAllIngredients();
  const weights = [50, 100, 125, 150, 200, 250, 300, 400, 500];

  const params: { ingredient: string; weight: string }[] = [];
  for (const ing of ingredients) {
    for (const w of weights) {
      params.push({ ingredient: ing.slug, weight: String(w) });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ing = await getIngredientBySlug(params.ingredient);
  const weight = Number(params.weight || 0);
  if (!ing || !weight) {
    return { title: "Conversion - Grams to Cups" };
  }

  const cups = gramsToCups(weight, ing.gramsPerCup);
  return {
    title: `${params.weight} g ${ing.name} → ${cups.toFixed(2)} cups`,
    description: `Convert ${params.weight} grams of ${ing.name} to cups. ${formatCups(cups)} cups (approx).`,
  };
}

export default async function WeightConversionPage({ params }: Props) {
  const ing = await getIngredientBySlug(params.ingredient);
  const weight = Number(params.weight || 0);

  if (!ing) {
    notFound();
  }

  const cups = gramsToCups(weight, ing.gramsPerCup);

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-2 text-3xl font-bold">{params.weight} g of {ing.name} → {cups.toFixed(3)} cups</h1>

      <p className="mb-4 text-zinc-600">Using {ing.name} density: 1 cup ≈ {ing.gramsPerCup} g.</p>

      <section className="rounded border bg-white p-6">
        <h2 className="mb-2 text-lg font-semibold">Conversion</h2>
        <div className="text-2xl font-semibold">{cups.toFixed(3)} cups</div>
        <div className="mt-1 text-sm italic text-zinc-500">({formatCups(cups)})</div>
      </section>

      <section className="mt-6 rounded border bg-white p-6">
        <h2 className="mb-2 text-lg font-semibold">Tips</h2>
        <p className="text-zinc-600">Notes: {ing.notes ?? `Measure ${ing.name} accurately for best results.`}</p>
      </section>

      <nav className="mt-6 flex gap-3">
        <Link href={`/${ing.slug}`} className="text-sm transition-colors duration-200 hover:underline" style={{ color: "#02b875" }}>More about {ing.name}</Link>
        <Link href="/" className="text-sm transition-colors duration-200 hover:underline" style={{ color: "#02b875" }}>Home</Link>
      </nav>
    </div>
  );
}
