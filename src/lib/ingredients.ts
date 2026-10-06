import type { Ingredient } from "@/types";

export const INGREDIENTS: Ingredient[] = [
  { name: "All-purpose flour", slug: "flour", gramsPerCup: 120, notes: "Spoon and level for accuracy" },
  { name: "Granulated sugar", slug: "sugar", gramsPerCup: 200 },
  { name: "Powdered sugar", slug: "powdered-sugar", gramsPerCup: 120, notes: "Sift before measuring" },
  { name: "Unsalted butter", slug: "butter", gramsPerCup: 227 },
  { name: "Milk", slug: "milk", gramsPerCup: 245, notes: "Whole milk, approximately" },
  { name: "Water", slug: "water", gramsPerCup: 236.6, notes: "US customary cup" },
  { name: "Honey", slug: "honey", gramsPerCup: 340, notes: "US customary cup" },
  { name: "Rolled oats", slug: "oats", gramsPerCup: 90 },
];

export async function getAllIngredients(): Promise<Ingredient[]> {
  // Placeholder for future Supabase fetch. For now return local list.
  return INGREDIENTS;
}

export async function getIngredientBySlug(slug: string): Promise<Ingredient | undefined> {
  const list = await getAllIngredients();
  return list.find((i) => i.slug === slug);
}
