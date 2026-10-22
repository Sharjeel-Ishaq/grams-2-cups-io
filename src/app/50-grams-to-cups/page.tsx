import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "50 Grams to Cups — Full Ingredient Conversion Chart",
  description:
    "How many cups is 50 grams? It depends on the ingredient. A complete chart covering flour, sugar, butter, honey, and 40+ other ingredients across 8 categories.",
  alternates: { canonical: "/50-grams-to-cups" },
  openGraph: {
    title: "50 Grams to Cups — Full Ingredient Conversion Chart",
    description:
      "50 grams is about ⅜ cup of flour, ¼ cup of sugar, or a scant ¼ cup of butter — see the full chart.",
    url: "/50-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "50 Grams to Cups — Full Ingredient Conversion Chart",
    description:
      "How many cups is 50 grams? It depends on the ingredient — see the full chart.",
    images: ["/og-image.jpg"],
  },
};

type Row = {
  name: string;
  href?: string;
  cups: string;
  tbsp: string;
  tsp: string;
  gpc: string;
};
type MainRow = Omit<Row, "tsp" | "gpc">;
type Category = { id: string; title: string; rows: Row[] };

const ingredients: Ingredient[] = [
  {
    name: "All-Purpose Flour",
    slug: "flour",
    gramsPerCup: 120,
    notes: "Spoon and level",
  },
  {
    name: "Granulated Sugar",
    slug: "sugar",
    gramsPerCup: 200,
    notes: "Use level cups",
  },
  {
    name: "Brown Sugar",
    slug: "brown-sugar",
    gramsPerCup: 220,
    notes: "Pack firmly",
  },
  {
    name: "Butter",
    slug: "butter",
    gramsPerCup: 227,
    notes: "Standard butter",
  },
  {
    name: "Vegetable Oil",
    slug: "vegetable-oil",
    gramsPerCup: 218,
    notes: "Approximate density",
  },
  { name: "Milk", slug: "milk", gramsPerCup: 245, notes: "Whole milk" },
  { name: "Water", slug: "water", gramsPerCup: 236, notes: "US customary cup" },
  { name: "Honey", slug: "honey", gramsPerCup: 340, notes: "Dense liquid" },
  {
    name: "Rolled Oats",
    slug: "oats",
    gramsPerCup: 90,
    notes: "Regular rolled oats",
  },
  { name: "White Rice", slug: "rice", gramsPerCup: 185, notes: "Uncooked" },
  {
    name: "Cocoa Powder",
    slug: "cocoa-powder",
    gramsPerCup: 86,
    notes: "Unsweetened",
  },
  {
    name: "Table Salt",
    slug: "salt",
    gramsPerCup: 288,
    notes: "Fine crystals",
  },
];

const mainRows: MainRow[] = [
  {
    name: "All-purpose flour",
    href: "/flour",
    cups: "~⅜ cup",
    tbsp: "6.7 tbsp",
  },
  { name: "Granulated sugar", href: "/sugar", cups: "¼ cup", tbsp: "4 tbsp" },
  {
    name: "Powdered sugar",
    href: "/powdered-sugar",
    cups: "~⅜ cup",
    tbsp: "6.7 tbsp",
  },
  {
    name: "Brown sugar (packed)",
    href: "/brown-sugar",
    cups: "~¼ cup (scant)",
    tbsp: "3.6 tbsp",
  },
  { name: "Butter", href: "/butter", cups: "~¼ cup (scant)", tbsp: "3.5 tbsp" },
  {
    name: "Vegetable oil",
    href: "/vegetable-oil",
    cups: "~¼ cup (scant)",
    tbsp: "3.7 tbsp",
  },
  { name: "Milk", href: "/milk", cups: "~¼ cup (scant)", tbsp: "3.4 tbsp" },
  { name: "Water", href: "/water", cups: "~¼ cup (scant)", tbsp: "3.4 tbsp" },
  { name: "Honey", href: "/honey", cups: "~⅛ cup (heaping)", tbsp: "2.4 tbsp" },
  {
    name: "Uncooked rice",
    href: "/rice",
    cups: "~¼ cup (heaping)",
    tbsp: "4.3 tbsp",
  },
  {
    name: "Rolled oats",
    href: "/oats",
    cups: "~½ cup (heaping)",
    tbsp: "8.9 tbsp",
  },
  {
    name: "Cocoa powder",
    href: "/cocoa-powder",
    cups: "~⅝ cup",
    tbsp: "9.4 tbsp",
  },
  {
    name: "Chocolate chips",
    href: "/chocolate-chips",
    cups: "~⅓ cup (scant)",
    tbsp: "4.7 tbsp",
  },
  { name: "Whole almonds", href: "/almonds", cups: "~⅓ cup", tbsp: "5.6 tbsp" },
  {
    name: "Table salt",
    href: "/salt",
    cups: "~⅛ cup (heaping)",
    tbsp: "2.8 tbsp",
  },
  {
    name: "Baking powder",
    href: "/baking-powder",
    cups: "~¼ cup (scant)",
    tbsp: "3.6 tbsp",
  },
];

const categories: Category[] = [
  {
    id: "flours",
    title: "Flours",
    rows: [
      {
        name: "All-purpose flour",
        href: "/flour",
        cups: "0.42 cup",
        tbsp: "6.4",
        tsp: "19.2",
        gpc: "125",
      },
      {
        name: "Bread flour",
        cups: "0.375 cup",
        tbsp: "6.3",
        tsp: "18.9",
        gpc: "127",
      },
      {
        name: "Cake flour",
        cups: "0.44 cup",
        tbsp: "7.03",
        tsp: "21.1",
        gpc: "114",
      },
      {
        name: "Whole wheat flour",
        cups: "0.42 cup",
        tbsp: "6.67",
        tsp: "20",
        gpc: "120",
      },
      {
        name: "Almond flour",
        cups: "0.50 cup",
        tbsp: "8.33",
        tsp: "25",
        gpc: "96",
      },
      {
        name: "Coconut flour",
        cups: "0.375 cup",
        tbsp: "6.27",
        tsp: "18.77",
        gpc: "128",
      },
    ],
  },
  {
    id: "sugars",
    title: "Sugars and Sweeteners",
    rows: [
      {
        name: "Granulated sugar",
        href: "/sugar",
        cups: "0.25 cup",
        tbsp: "4",
        tsp: "12",
        gpc: "200",
      },
      {
        name: "Brown sugar (packed)",
        href: "/brown-sugar",
        cups: "0.22 cup",
        tbsp: "3.63",
        tsp: "10.9",
        gpc: "220",
      },
      {
        name: "Powdered sugar",
        href: "/powdered-sugar",
        cups: "0.42 cup",
        tbsp: "6.67",
        tsp: "20",
        gpc: "120",
      },
      {
        name: "Honey",
        href: "/honey",
        cups: "0.17 cup",
        tbsp: "2.35",
        tsp: "7.07",
        gpc: "340",
      },
      {
        name: "Maple syrup",
        cups: "0.17 cup",
        tbsp: "2.48",
        tsp: "7.47",
        gpc: "322",
      },
      {
        name: "Molasses",
        cups: "0.17 cup",
        tbsp: "2.44",
        tsp: "7.33",
        gpc: "328",
      },
    ],
  },
  {
    id: "fats",
    title: "Butter, Oils and Fats",
    rows: [
      {
        name: "Butter",
        href: "/butter",
        cups: "0.22 cup",
        tbsp: "3.53",
        tsp: "10.57",
        gpc: "227",
      },
      {
        name: "Shortening",
        cups: "0.25 cup",
        tbsp: "3.90",
        tsp: "11.7",
        gpc: "205",
      },
      {
        name: "Vegetable oil",
        href: "/vegetable-oil",
        cups: "0.22 cup",
        tbsp: "3.67",
        tsp: "11",
        gpc: "218",
      },
      {
        name: "Olive oil",
        cups: "0.22 cup",
        tbsp: "3.70",
        tsp: "11.1",
        gpc: "216",
      },
      {
        name: "Coconut oil",
        cups: "0.22 cup",
        tbsp: "3.67",
        tsp: "11",
        gpc: "218",
      },
    ],
  },
  {
    id: "dairy-and-liquids",
    title: "Dairy and Liquids",
    rows: [
      {
        name: "Milk",
        href: "/milk",
        cups: "0.21 cup",
        tbsp: "3.27",
        tsp: "9.8",
        gpc: "245",
      },
      {
        name: "Heavy cream",
        cups: "0.21 cup",
        tbsp: "3.37",
        tsp: "10.1",
        gpc: "238",
      },
      {
        name: "Yogurt",
        cups: "0.21 cup",
        tbsp: "3.27",
        tsp: "9.8",
        gpc: "245",
      },
      {
        name: "Cream cheese",
        cups: "0.22 cup",
        tbsp: "3.43",
        tsp: "10.33",
        gpc: "232",
      },
      {
        name: "Condensed milk",
        cups: "0.17 cup",
        tbsp: "2.61",
        tsp: "7.83",
        gpc: "306",
      },
    ],
  },
  {
    id: "grains",
    title: "Rice, Grains and Pasta",
    rows: [
      {
        name: "Uncooked rice",
        href: "/rice",
        cups: "0.25 cup",
        tbsp: "4.33",
        tsp: "12.97",
        gpc: "185",
      },
      {
        name: "Rolled oats",
        href: "/oats",
        cups: "0.56 cup",
        tbsp: "8.90",
        tsp: "26.67",
        gpc: "90",
      },
      {
        name: "Quinoa",
        cups: "0.29 cup",
        tbsp: "4.70",
        tsp: "14.13",
        gpc: "170",
      },
      {
        name: "Couscous",
        cups: "0.29 cup",
        tbsp: "4.63",
        tsp: "13.87",
        gpc: "173",
      },
      { name: "Dry pasta", cups: "0.50 cup", tbsp: "8", tsp: "24", gpc: "100" },
    ],
  },
  {
    id: "nuts",
    title: "Nuts and Seeds",
    rows: [
      {
        name: "Whole almonds",
        href: "/almonds",
        cups: "0.33 cup",
        tbsp: "5.60",
        tsp: "16.77",
        gpc: "143",
      },
      {
        name: "Walnuts (chopped)",
        cups: "0.42 cup",
        tbsp: "6.67",
        tsp: "20",
        gpc: "120",
      },
      {
        name: "Cashews",
        cups: "0.375 cup",
        tbsp: "5.83",
        tsp: "17.53",
        gpc: "137",
      },
      {
        name: "Peanut butter",
        cups: "0.21 cup",
        tbsp: "3.10",
        tsp: "9.30",
        gpc: "258",
      },
      {
        name: "Sesame seeds",
        cups: "0.33 cup",
        tbsp: "5.57",
        tsp: "16.67",
        gpc: "144",
      },
      {
        name: "Tahini",
        href: "/tahini",
        cups: "0.21 cup",
        tbsp: "3.33",
        tsp: "10",
        gpc: "248",
      },
    ],
  },
  {
    id: "baking-staples",
    title: "Baking Staples",
    rows: [
      {
        name: "Cocoa powder",
        href: "/cocoa-powder",
        cups: "0.58 cup",
        tbsp: "9.30",
        tsp: "27.90",
        gpc: "86",
      },
      {
        name: "Chocolate chips",
        href: "/chocolate-chips",
        cups: "0.29 cup",
        tbsp: "4.70",
        tsp: "14.13",
        gpc: "170",
      },
      {
        name: "Cornstarch",
        cups: "0.375 cup",
        tbsp: "6.27",
        tsp: "18.77",
        gpc: "128",
      },
      {
        name: "Breadcrumbs",
        cups: "0.46 cup",
        tbsp: "7.40",
        tsp: "22.23",
        gpc: "108",
      },
      {
        name: "Baking powder",
        href: "/baking-powder",
        cups: "0.22 cup",
        tbsp: "3.63",
        tsp: "10.90",
        gpc: "220",
      },
      {
        name: "Salt",
        href: "/salt",
        cups: "0.17 cup",
        tbsp: "2.78",
        tsp: "8.33",
        gpc: "288",
      },
    ],
  },
  {
    id: "cheese",
    title: "Cheese",
    rows: [
      {
        name: "Parmesan (grated)",
        cups: "0.50 cup",
        tbsp: "8",
        tsp: "24",
        gpc: "100",
      },
      {
        name: "Cheddar (shredded)",
        cups: "0.44 cup",
        tbsp: "7.07",
        tsp: "21.23",
        gpc: "113",
      },
      {
        name: "Mozzarella (shredded)",
        cups: "0.44 cup",
        tbsp: "7.13",
        tsp: "21.43",
        gpc: "112",
      },
      {
        name: "Feta (crumbled)",
        cups: "0.33 cup",
        tbsp: "5.33",
        tsp: "16",
        gpc: "150",
      },
    ],
  },
];

function MainTable({ rows }: { rows: MainRow[] }) {
  return (
    <div
      className="overflow-x-auto rounded-[20px] border"
      style={{ borderColor: `${ACCENT}20` }}
    >
      <table className="w-full min-w-[420px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-white">
              Ingredient
            </th>
            <th className="px-4 py-3 text-left font-semibold text-white">
              50g in Cups
            </th>
            <th className="px-4 py-3 text-left font-semibold text-white">
              Tablespoons
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.name}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
            >
              <td className="px-4 py-2.5 font-medium text-gray-800">
                {row.href ? (
                  <Link
                    href={row.href}
                    className="hover:underline"
                    style={{ color: ACCENT }}
                  >
                    {row.name}
                  </Link>
                ) : (
                  row.name
                )}
              </td>
              <td
                className="px-4 py-2.5 font-semibold"
                style={{ color: ACCENT }}
              >
                {row.cups}
              </td>
              <td className="px-4 py-2.5 text-gray-600">{row.tbsp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CategoryTable({ rows }: { rows: Row[] }) {
  return (
    <div
      className="overflow-x-auto rounded-[20px] border"
      style={{ borderColor: `${ACCENT}20` }}
    >
      <table className="w-full min-w-[560px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            {["Ingredient", "50g in Cups", "Tbsp", "Tsp", "g per Cup"].map(
              (title) => (
                <th
                  key={title}
                  className="whitespace-nowrap px-4 py-3 text-left font-semibold text-white"
                >
                  {title}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.name}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
            >
              <td className="px-4 py-2.5 font-medium text-gray-800">
                {row.href ? (
                  <Link
                    href={row.href}
                    className="hover:underline"
                    style={{ color: ACCENT }}
                  >
                    {row.name}
                  </Link>
                ) : (
                  row.name
                )}
              </td>
              <td
                className="px-4 py-2.5 font-semibold"
                style={{ color: ACCENT }}
              >
                {row.cups}
              </td>
              <td className="px-4 py-2.5 text-gray-600">{row.tbsp}</td>
              <td className="px-4 py-2.5 text-gray-600">{row.tsp}</td>
              <td className="px-4 py-2.5 text-gray-600">{row.gpc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function FiftyGramsToCups() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />
      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div
              className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
            >
              <i className="ri-scales-3-line" /> 40+ ingredients at 50 grams
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              50 Grams to Cups
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              50 grams is a small amount, but the ingredient still decides how
              much cup it fills. A tablespoon or two of honey looks nothing like
              the same weight of flour. Here&apos;s how 50 grams breaks down for
              common ingredients.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another amount?{" "}
              <Link
                href="/100-grams-to-cups"
                className="font-semibold underline underline-offset-2"
                style={{ color: ACCENT }}
              >
                100g
              </Link>{" "}
              ·{" "}
              <Link
                href="/150-grams-to-cups"
                className="font-semibold underline underline-offset-2"
                style={{ color: ACCENT }}
              >
                150g
              </Link>
            </p>
          </div>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-current"
                style={{ borderColor: `${ACCENT}30`, color: ACCENT }}
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">
            <SimpleConverter ingredients={ingredients} initialGrams={50} />
            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{
                backgroundColor: `${ACCENT}0a`,
                border: `1px solid ${ACCENT}25`,
              }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Quick Answer
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
                50 grams is about ⅜ cup of{" "}
                <Link
                  href="/flour"
                  className="font-semibold hover:underline"
                  style={{ color: ACCENT }}
                >
                  flour
                </Link>
                , ¼ cup of{" "}
                <Link
                  href="/sugar"
                  className="font-semibold hover:underline"
                  style={{ color: ACCENT }}
                >
                  sugar
                </Link>
                , or a scant ¼ cup of{" "}
                <Link
                  href="/butter"
                  className="font-semibold hover:underline"
                  style={{ color: ACCENT }}
                >
                  butter
                </Link>
                . The amount always depends on ingredient density.
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                50 Grams to Cups, by Ingredient
              </h2>
              <MainTable rows={mainRows} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Figures use standard reference weights per cup, a US customary
                cup, and the spoon-and-level method for dry ingredients. Brand,
                humidity, and packing can shift the result slightly.
              </p>
            </section>
            <section
              className="rounded-[24px] border bg-white p-5 sm:p-6"
              style={{ borderColor: `${ACCENT}20` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Why 50 Grams Fills the Cup Differently Every Time
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Flour is light and airy, sugar crystals sit closer together, and
                honey is a thick, dense liquid. That is why the same 50-gram
                weight fills very different amounts of space.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                A cup measures space, not mass. Two ingredients can weigh
                exactly the same and still look like completely different
                quantities in a measuring cup.
              </p>
            </section>
            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{
                backgroundColor: `${ACCENT}0a`,
                border: `1px solid ${ACCENT}25`,
              }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                How to Measure 50 Grams Accurately
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <strong className="text-gray-900">With a kitchen scale:</strong>{" "}
                Place a small bowl on the scale, zero it, and add the ingredient
                until it reads 50 grams. At this amount, a scale is especially
                useful because a small measuring error can change the recipe
                ratio.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Spoon light powders into a cup or spoon, then level them.",
                  "Pack brown sugar firmly until it holds its shape.",
                  "Read liquid fill lines at eye level.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <i
                      className="ri-checkbox-circle-line mt-0.5 flex-shrink-0"
                      style={{ color: ACCENT }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Full Category Tables
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                For a deeper reference, these tables break down 50 grams across
                eight ingredient categories with tablespoon, teaspoon, and
                grams-per-cup figures.
              </p>
              {categories.map((category) => (
                <div
                  key={category.id}
                  id={category.id}
                  className="mb-8 scroll-mt-24"
                >
                  <h3 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">
                    {category.title}
                  </h3>
                  <CategoryTable rows={category.rows} />
                </div>
              ))}
            </section>
            <section
              className="rounded-[24px] border bg-white p-5 sm:p-6"
              style={{ borderColor: `${ACCENT}20` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                The Bottom Line
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
                There is no single answer to how many cups is 50 grams because
                it depends on what you are measuring. When precision matters,
                weighing 50 grams directly on a scale is the most reliable
                approach.
              </p>
            </section>
            <section
              className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500"
              style={{ borderColor: `${ACCENT}15` }}
            >
              <p className="mb-2 font-semibold text-gray-600">
                More Converters
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { name: "100 grams to cups", href: "/100-grams-to-cups" },
                  { name: "150 grams to cups", href: "/150-grams-to-cups" },
                  { name: "200 grams to cups", href: "/200-grams-to-cups" },
                  { name: "Cups to grams", href: "/cups-to-grams" },
                  { name: "300 grams to cups", href: "/300-grams-to-cups" },
                  { name: "Grams to ounces", href: "/grams-to-ounces" },
                  { name: "All ingredients", href: "/ingredients" },
                  { name: "650 grams to cups", href: "/650-grams-to-cups" },
                  { name: "Accuracy guide", href: "/grams-to-cups-accuracy" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2 font-medium text-gray-700 transition-colors hover:border-current"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <span className="truncate">{link.name}</span>
                    <i
                      className="ri-arrow-right-s-line flex-shrink-0"
                      style={{ color: ACCENT }}
                    />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
