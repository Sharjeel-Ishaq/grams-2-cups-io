import { getIngredientBySlug } from "@/lib/ingredients";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { ingredient: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ing = await getIngredientBySlug(params.ingredient);
  if (!ing) {
    return { title: "Ingredient not found - Grams to Cups" };
  }
  return {
    title: `${ing.name} — Grams to Cups`,
    description: `Convert grams of ${ing.name} to US cups. ${ing.notes ?? ""}`.trim(),
  };
}

export default async function IngredientPage({ params }: Props) {
  const ing = await getIngredientBySlug(params.ingredient);
  if (!ing) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-2 text-3xl font-bold">{ing.name}</h1>
      <p className="mb-4 text-zinc-600">1 cup ≈ {ing.gramsPerCup} g</p>

      <section className="rounded border bg-white p-6">
        <h2 className="mb-2 text-xl font-semibold">About {ing.name}</h2>
        <p className="text-zinc-600">{ing.notes ?? `Use ${ing.name} specific density for accurate conversions.`}</p>
      </section>

      <section className="mt-6 rounded border bg-white p-6">
        <h2 className="mb-2 text-lg font-semibold">Common conversions</h2>
        <ul className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[50, 100, 125, 150, 200, 250, 300, 400, 500].map((g) => (
            <li key={g} className="rounded border px-3 py-2">
              <Link href={`/${ing.slug}/${g}-grams-to-cups`} className="text-sm transition-colors duration-200 hover:underline" style={{ color: "#02b875" }}>
                {g} g → {(g / ing.gramsPerCup).toFixed(3)} cups
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
