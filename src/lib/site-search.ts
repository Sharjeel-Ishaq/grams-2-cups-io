export type SearchCategory =
  | "Ingredient"
  | "Converter"
  | "Conversion"
  | "Blog";

export type SearchItem = {
  title: string;
  href: string;
  category: SearchCategory;
  description: string;
  terms?: string;
};

const routeIngredients: SearchItem[] = [
  { title: "All-purpose flour", href: "/flour", category: "Ingredient", description: "Flour grams-to-cups converter and measuring guide", terms: "plain flour baking wheat" },
  { title: "Almonds", href: "/almonds", category: "Ingredient", description: "Almond grams-to-cups conversion", terms: "whole nuts" },
  { title: "Baking powder", href: "/baking-powder", category: "Ingredient", description: "Baking powder grams-to-cups conversion", terms: "leavening raising agent" },
  { title: "Brown sugar", href: "/brown-sugar", category: "Ingredient", description: "Brown sugar conversion; measurements assume packed sugar", terms: "light dark packed" },
  { title: "Butter", href: "/butter", category: "Ingredient", description: "Butter grams-to-cups converter", terms: "unsalted salted dairy" },
  { title: "Chocolate chips", href: "/chocolate-chips", category: "Ingredient", description: "Chocolate chip grams-to-cups conversion", terms: "cookies baking" },
  { title: "Cocoa powder", href: "/cocoa-powder", category: "Ingredient", description: "Cocoa powder grams-to-cups conversion", terms: "cacao unsweetened baking" },
  { title: "Granulated sugar", href: "/sugar", category: "Ingredient", description: "White sugar grams-to-cups converter", terms: "white caster baking" },
  { title: "Honey", href: "/honey", category: "Ingredient", description: "Honey grams-to-cups conversion", terms: "liquid sweetener" },
  { title: "Lemon juice", href: "/lemon-juice", category: "Ingredient", description: "Fresh and bottled lemon juice converter", terms: "citrus liquid" },
  { title: "Milk", href: "/milk", category: "Ingredient", description: "Milk grams-to-cups conversion", terms: "whole dairy liquid" },
  { title: "Oats", href: "/oats", category: "Ingredient", description: "Rolled oats grams-to-cups conversion", terms: "rolled oatmeal old fashioned" },
  { title: "Potato starch", href: "/potato-starch", category: "Ingredient", description: "Potato starch grams-to-cups conversion and measurement guide", terms: "potato flour starch gluten-free thickener" },
  { title: "Powdered sugar", href: "/powdered-sugar", category: "Ingredient", description: "Powdered sugar grams-to-cups conversion", terms: "confectioners icing icing sugar sifted" },
  { title: "Rice", href: "/rice", category: "Ingredient", description: "Rice grams-to-cups conversion", terms: "white uncooked grain" },
  { title: "Salt", href: "/salt", category: "Ingredient", description: "Salt grams-to-cups conversion", terms: "table kosher seasoning" },
  { title: "Vegetable oil", href: "/vegetable-oil", category: "Ingredient", description: "Vegetable oil grams-to-cups conversion", terms: "cooking oil liquid" },
  { title: "Water", href: "/water", category: "Ingredient", description: "Water grams-to-cups conversion", terms: "liquid" },
];

const referenceIngredients: SearchItem[] = [
  { title: "Bread flour", href: "/ingredients#flours", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "wheat flour" },
  { title: "Whole wheat flour", href: "/ingredients#flours", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "wholemeal flour" },
  { title: "Cake flour", href: "/ingredients#flours", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "baking flour" },
  { title: "Almond flour", href: "/ingredients#flours", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "nut flour" },
  { title: "Coconut flour", href: "/ingredients#flours", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart" },
  { title: "Self-rising flour", href: "/ingredients#flours", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "self rising" },
  { title: "Semolina flour", href: "/ingredients#flours", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart" },
  { title: "Baking soda", href: "/ingredients#flours", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "sodium bicarbonate leavener" },
  { title: "Cornstarch", href: "/ingredients#flours", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "corn starch" },
  { title: "Maple syrup", href: "/ingredients#sugars", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "sweetener" },
  { title: "Molasses", href: "/ingredients#sugars", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "treacle sweetener" },
  { title: "Agave nectar", href: "/ingredients#sugars", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "agave syrup sweetener" },
  { title: "Coconut sugar", href: "/ingredients#sugars", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "sweetener" },
  { title: "Olive oil", href: "/ingredients#fats", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "cooking oil" },
  { title: "Coconut oil", href: "/ingredients#fats", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "cooking fat" },
  { title: "Shortening", href: "/ingredients#fats", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "baking fat" },
  { title: "Heavy cream", href: "/ingredients#dairy", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "double cream dairy" },
  { title: "Sour cream", href: "/ingredients#dairy", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "dairy" },
  { title: "Buttermilk", href: "/ingredients#dairy", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "dairy" },
  { title: "Cream cheese", href: "/ingredients#dairy", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "dairy" },
  { title: "Breadcrumbs", href: "/ingredients#dry-goods", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "bread crumbs pantry" },
  { title: "Cornmeal", href: "/ingredients#dry-goods", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "corn meal pantry" },
  { title: "Quinoa", href: "/ingredients#dry-goods", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "uncooked grain pantry" },
  { title: "Walnuts", href: "/ingredients#nuts", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "chopped nuts" },
  { title: "Pecans", href: "/ingredients#nuts", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "chopped nuts" },
  { title: "Cashews", href: "/ingredients#nuts", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "nuts" },
  { title: "Sunflower seeds", href: "/ingredients#nuts", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "seeds" },
  { title: "Chia seeds", href: "/ingredients#nuts", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "seeds" },
  { title: "Morton kosher salt", href: "/ingredients#dry-goods", category: "Ingredient", description: "Brand-specific weight reference in the ingredient chart", terms: "salt" },
  { title: "Diamond Crystal kosher salt", href: "/ingredients#dry-goods", category: "Ingredient", description: "Brand-specific weight reference in the ingredient chart", terms: "salt" },
  { title: "Old-fashioned oats", href: "/ingredients#dry-goods", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "rolled oats quick cooking oatmeal" },
  { title: "Quick-cooking oats", href: "/ingredients#dry-goods", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "rolled oats oatmeal" },
  { title: "Brown rice", href: "/ingredients#dry-goods", category: "Ingredient", description: "Grams-per-cup reference in the ingredient chart", terms: "uncooked grain" },
];

const converters: SearchItem[] = [
  { title: "Grams to cups converter", href: "/", category: "Converter", description: "Convert ingredient weights from grams into cups", terms: "weight calculator grams g cup" },
  { title: "Cups to grams converter", href: "/cups-to-grams", category: "Converter", description: "Convert ingredient amounts from cups into grams", terms: "reverse weight calculator" },
  { title: "Cups-to-grams reference tables", href: "/grams-to-cups", category: "Converter", description: "Browse ingredient-specific cup and gram tables", terms: "cups grams reverse chart" },
  { title: "Milliliters to cups converter", href: "/ml-to-cups", category: "Converter", description: "Convert milliliters into US cups", terms: "ml millilitres volume liquid" },
  { title: "Grams to ounces converter", href: "/grams-to-ounces", category: "Converter", description: "Convert grams into ounces", terms: "oz weight" },
];

const conversions: SearchItem[] = [50, 100, 120, 150, 200, 250, 300, 350, 400, 450, 500].map((grams) => ({
  title: `${grams} grams to cups`,
  href: `/${grams}-grams-to-cups`,
  category: "Conversion",
  description: `Ingredient-by-ingredient chart for converting ${grams} grams to cups`,
  terms: `${grams}g ${grams} g grams cup cups conversion chart flour sugar butter`,
}));

const blogItems: SearchItem[] = [
  { title: "Baking and measurement guides", href: "/blog", category: "Blog", description: "Browse recipes and practical measurement advice", terms: "articles posts kitchen" },
  { title: "The spoon-and-level method for measuring flour", href: "/blog/spoon-and-level-method", category: "Blog", description: "Learn why spooning and leveling flour prevents dense, dry baked goods", terms: "spoon level flour measuring technique scoop baking guide" },
  { title: "Moist banana bread recipe", href: "/blog/moist-banana-bread", category: "Blog", description: "Gram-first banana bread recipe with ripe bananas and optional caramel drizzle", terms: "recipe baking banana loaf flour butter brown sugar" },
  { title: "Classic chocolate chip cookies: grams and cups", href: "/blog/chocolate-chip-cookies", category: "Blog", description: "Cookie recipe with ingredient quantities in grams and cups", terms: "recipe baking chocolate chips flour butter" },
  { title: "Chewy oatmeal cookies: gram-first recipe", href: "/blog/chewy-oatmeal-cookies", category: "Blog", description: "Gram-first oatmeal cookie recipe with chewy centers and crisp edges", terms: "recipe baking oats rolled oats oatmeal cookies butter flour" },
];

export const SITE_SEARCH_ITEMS: SearchItem[] = [
  ...routeIngredients,
  ...referenceIngredients,
  ...converters,
  ...conversions,
  ...blogItems,
];

export function normalizeSearchText(value: string): string {
  return value
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/(\d)\s*(?:grams?|g)\b/g, "$1g")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function searchSite(query: string): SearchItem[] {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];

  const queryWords = normalizedQuery.split(/\s+/);

  return SITE_SEARCH_ITEMS
    .map((item) => {
      const title = normalizeSearchText(item.title);
      const searchableText = normalizeSearchText(`${item.title} ${item.description} ${item.terms ?? ""}`);
      if (!queryWords.every((word) => searchableText.includes(word))) return null;

      const score =
        (title === normalizedQuery ? 100 : 0) +
        (title.startsWith(normalizedQuery) ? 30 : 0) +
        queryWords.reduce((total, word) => total + (title.includes(word) ? 10 : 0), 0);

      return { item, score };
    })
    .filter((match): match is { item: SearchItem; score: number } => match !== null)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, 12)
    .map(({ item }) => item);
}
