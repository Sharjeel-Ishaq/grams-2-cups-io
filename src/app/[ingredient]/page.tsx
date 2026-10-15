
import { getIngredientBySlug } from "@/lib/ingredients";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ ingredient: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ingredient } = await params;
  const ing = await getIngredientBySlug(ingredient);

  if (!ing) {
    return { title: "Ingredient not found - Grams to Cups" };
  }

  return {
    title: `${ing.name} — Grams to Cups`,
    description: `Convert grams of ${ing.name} to US cups. ${ing.notes ?? ""}`.trim(),
    alternates: {
      canonical: `/${ing.slug}`,
    },
  };
}

export default async function IngredientPage({ params }: Props) {
  const { ingredient } = await params;
  const ing = await getIngredientBySlug(ingredient);

  if (!ing) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-2 text-3xl font-bold">{ing.name}</h1>

      <p className="mb-4 text-zinc-600">
        1 cup ≈ {ing.gramsPerCup} g
      </p>

      <section className="rounded border bg-white p-6">
        <h2 className="mb-2 text-xl font-semibold">
          About {ing.name}
        </h2>

        <p className="text-zinc-600">
          {ing.notes ??
            `Use ${ing.name} specific density for accurate conversions.`}
        </p>
      </section>
    </div>
  );
}
