import type { MetadataRoute } from "next";
import { getAllIngredients } from "@/lib/ingredients";

const SITE_URL = "https://grams2cups.io";

const staticPaths = [
  "/",
  "/about",
  "/almonds",
  "/baking-powder",
  "/blog",
  "/blog/chewy-oatmeal-cookies",
  "/blog/chocolate-chip-cookies",
  "/blog/moist-banana-bread",
  "/blog/spoon-and-level-method",
  "/brown-sugar",
  "/butter",
  "/chocolate-chips",
  "/cocoa-powder",
  "/contact",
  "/conversion-chart",
  "/cookies-policy",
  "/cups-to-grams",
  "/disclaimer",
  "/faq",
  "/flour",
  "/grams-to-cups",
  "/grams-to-cups-accuracy",
  "/grams-to-ounces",
  "/honey",
  "/ingredients",
  "/lemon-juice",
  "/ml-to-cups",
  "/milk",
  "/oats",
  "/privacy-policy",
  "/powdered-sugar",
  "/rice",
  "/salt",
  "/sugar",
  "/terms-of-service",
  "/vegetable-oil",
  "/water",
  "/potato-starch",
  "/50-grams-to-cups",
  "/100-grams-to-cups",
  "/120-grams-to-cups",
  "/150-grams-to-cups",
  "/200-grams-to-cups",
  "/250-grams-to-cups",
  "/300-grams-to-cups",
  "/350-grams-to-cups",
  "/400-grams-to-cups",
  "/450-grams-to-cups",
  "/500-grams-to-cups",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const ingredients = await getAllIngredients();
  const weights = [50, 100, 125, 150, 200, 250, 300, 400, 500];
  const dynamicPaths = ingredients.flatMap(({ slug }) => [
    `/${slug}`,
    ...weights.map((weight) => `/${slug}/${weight}-grams-to-cups`),
  ]);

  return [...new Set([...staticPaths, ...dynamicPaths])].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
