import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Chocolate Chips Grams to Cups Converter",
  description:
    "Convert semi-sweet, bittersweet, dark, milk, mini, mint chocolate chips, and chocolate chunks from grams to cups.",
  alternates: { canonical: "/chocolate-chips" },
  openGraph: {
    title: "Chocolate Chips Grams to Cups Converter",
    description:
      "Convert different types of chocolate chips from grams to cups with practical baking charts.",
    url: "/chocolate-chips",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chocolate Chips Grams to Cups Converter",
    description:
      "Convert different types of chocolate chips from grams to cups with practical baking charts.",
    images: ["/og-image.jpg"],
  },
};

type ChocolateType = {
  name: string;
  slug: string;
  gramsPerCup: number;
  notes: string;
};

const chocolateTypes: ChocolateType[] = [
  {
    name: "Semi-Sweet Chocolate Chips",
    slug: "semi-sweet-chocolate-chips",
    gramsPerCup: 170,
    notes: "Standard-size semi-sweet chips",
  },
  {
    name: "Bittersweet Chocolate Chips",
    slug: "bittersweet-chocolate-chips",
    gramsPerCup: 170,
    notes: "Standard-size bittersweet chips",
  },
  {
    name: "Dark Chocolate Chips",
    slug: "dark-chocolate-chips",
    gramsPerCup: 170,
    notes: "Standard-size dark chocolate chips",
  },
  {
    name: "Milk Chocolate Chips",
    slug: "milk-chocolate-chips",
    gramsPerCup: 170,
    notes: "Standard-size milk chocolate chips",
  },
  {
    name: "Mini Chocolate Chips",
    slug: "mini-chocolate-chips",
    gramsPerCup: 185,
    notes: "Mini chips pack more densely",
  },
  {
    name: "Chocolate Chunks",
    slug: "chocolate-chunks",
    gramsPerCup: 170,
    notes: "Approximate value; chunk size varies",
  },
  {
    name: "Mint Chocolate Chips",
    slug: "mint-chocolate-chips",
    gramsPerCup: 170,
    notes: "Standard-size mint chocolate chips",
  },
];

const ingredients: Ingredient[] = chocolateTypes.map((chocolate) => ({
  name: chocolate.name,
  slug: chocolate.slug,
  gramsPerCup: chocolate.gramsPerCup,
  notes: chocolate.notes,
}));

const heroBadges = [
  { label: "¼ Cup", value: "43 g", icon: "ri-cup-line" },
  { label: "½ Cup", value: "85 g", icon: "ri-restaurant-line" },
  { label: "1 Cup", value: "170 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "340 g", icon: "ri-checkbox-circle-line" },
];

const commonAmounts = [
  "25 g chocolate chips ≈ ⅙ cup",
  "50 g chocolate chips ≈ ⅓ cup",
  "85 g chocolate chips ≈ ½ cup",
  "170 g chocolate chips = 1 cup",
  "340 g chocolate chips = 2 cups",
  "10.6 g chocolate chips ≈ 1 tbsp",
];

const chocolateTypeTable = chocolateTypes.map((chocolate) => ({
  type: chocolate.name,
  grams: `${chocolate.gramsPerCup} g`,
  cupsFor100g: `~${(100 / chocolate.gramsPerCup).toFixed(2)} cup`,
  notes: chocolate.notes,
}));

const chocolateFormTable = [
  {
    form: "Standard semi-sweet chips",
    grams: "170 g",
    oz: "6 oz",
  },
  {
    form: "Mini chocolate chips",
    grams: "185 g",
    oz: "6.5 oz",
  },
  {
    form: "Chopped chocolate bar",
    grams: "160–175 g",
    oz: "5.6–6.2 oz",
  },
  {
    form: "Grated chocolate",
    grams: "120 g",
    oz: "4.2 oz",
  },
  {
    form: "Cocoa nibs",
    grams: "140 g",
    oz: "4.9 oz",
  },
];

const gramsToCupsTable: [string, string, string][] = [
  ["10 g", "~0.06 cup", "0.7 tbsp"],
  ["25 g", "~0.15 cup", "2.4 tbsp"],
  ["50 g", "~0.29 cup", "4.8 tbsp"],
  ["75 g", "~0.44 cup", "7.2 tbsp"],
  ["85 g", "½ cup", "8 tbsp"],
  ["100 g", "~0.59 cup", "9.6 tbsp"],
  ["150 g", "~0.88 cup", "14.4 tbsp"],
  ["170 g", "1 cup", "16 tbsp"],
  ["200 g", "~1.18 cups", "18.9 tbsp"],
  ["250 g", "~1.47 cups", "23.6 tbsp"],
  ["300 g", "~1.76 cups", "28.4 tbsp"],
  ["340 g", "2 cups", "32 tbsp"],
  ["500 g", "~2.94 cups", "47 tbsp"],
];

const cupsToGramsTable: [string, string, string][] = [
  ["¼ cup", "42.5 g", "2.7 tbsp"],
  ["½ cup", "85 g", "5.4 tbsp"],
  ["¾ cup", "127.5 g", "8.1 tbsp"],
  ["1 cup", "170 g", "10.6 tbsp"],
  ["1½ cups", "255 g", "16 tbsp"],
  ["2 cups", "340 g", "21.2 tbsp"],
  ["3 cups", "510 g", "31.9 tbsp"],
  ["4 cups", "680 g", "42.5 tbsp"],
];

const cupStandardTable = [
  {
    standard: "US customary cup",
    volume: "236.6 mL",
    weight: "170 g",
  },
  {
    standard: "Metric cup",
    volume: "250 mL",
    weight: "180 g",
  },
  {
    standard: "UK cup",
    volume: "284 mL",
    weight: "204 g",
  },
];

const measuringTips = [
  {
    lead: "Level the scoop:",
    rest: "Use a dry measuring cup and level the chocolate chips gently with a flat knife instead of pressing them down, which changes the density.",
  },
  {
    lead: "Choose one chip type:",
    rest: "Mini chips and standard chips do not weigh the same per cup, so pick the one the recipe means and stick to it for consistency.",
  },
  {
    lead: "Weigh for precision:",
    rest: "For cookies, muffins, brownies, or any recipe where the chocolate matters to the final texture, grams are the most reliable measure.",
  },
  {
    lead: "Avoid packing:",
    rest: "Chocolate chips are not like brown sugar; packing them down will overestimate the amount, and the final batter will taste too heavy or too sweet.",
  },
];

const otherIngredients = [
  { name: "All-purpose flour", href: "/flour" },
  { name: "Granulated sugar", href: "/sugar" },
  { name: "Butter", href: "/butter" },
  { name: "Milk", href: "/milk" },
  { name: "Water", href: "/water" },
  { name: "Rolled oats", href: "/oats" },
  { name: "Rice", href: "/rice" },
  { name: "Honey", href: "/honey" },
  { name: "Cocoa powder", href: "/cocoa-powder" },
  { name: "Salt", href: "/salt" },
  { name: "Baking powder", href: "/baking-powder" },
  { name: "Vegetable oil", href: "/vegetable-oil" },
];

export default function ChocolateChipsGramsToCups() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />

      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div
              className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: `${ACCENT}12`,
                color: ACCENT,
              }}
            >
              <i className="ri-cup-line" /> Chocolate chip converter
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Chocolate Chips Grams to Cups Converter
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Convert semi-sweet, bittersweet, dark, milk, mini, mint chocolate
              chips, and chocolate chunks from grams to cups. One cup of
              standard-size chocolate chips weighs about 170 grams, while mini
              chips may weigh slightly more because they pack more tightly.
            </p>

            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another ingredient?{" "}
              <Link
                href="/"
                className="font-semibold underline underline-offset-2"
                style={{ color: ACCENT }}
              >
                Convert Grams To Cups
              </Link>
              .
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {heroBadges.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border bg-white/80 p-3 text-left backdrop-blur-sm"
                style={{ borderColor: `${ACCENT}25` }}
              >
                <div className="mb-2 flex items-center justify-between text-gray-400">
                  <i className={item.icon} style={{ color: ACCENT }} />
                  <span className="text-[9px] uppercase tracking-[0.2em]">
                    {item.label}
                  </span>
                </div>

                <div className="text-sm font-semibold tracking-[-0.02em] text-gray-900">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">
            <section
              className="rounded-[24px] border bg-white p-5 sm:p-6"
              style={{ borderColor: `${ACCENT}20` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                The Short Answer
              </h2>

              <div
                className="mb-3 rounded-xl p-3 text-sm font-semibold text-gray-800"
                style={{
                  backgroundColor: `${ACCENT}0d`,
                  border: `1px solid ${ACCENT}30`,
                }}
              >
                1 cup of standard chocolate chips ≈ 170 grams
              </div>

              <div
                className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800"
                style={{ border: `1px solid ${ACCENT}25` }}
              >
                <div>Grams = Cups × 170</div>
                <div>Cups = Grams ÷ 170</div>
              </div>

              <p className="text-sm leading-relaxed text-gray-600">
                So a ½ cup serving is about 85 grams, while 250 grams of chips
                is roughly 1½ cups. For mini chips, use approximately 185 grams
                per cup. For irregular chocolate chunks, the result may vary
                depending on their size.
              </p>

              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Chocolate Type: Grams to Cups
              </h2>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Chocolate type and piece size can slightly change the
                grams-per-cup value. Use this table when you want a more
                ingredient-specific estimate instead of the standard 170-gram
                conversion.
              </p>

              <div
                className="overflow-x-auto rounded-[20px] border"
                style={{ borderColor: `${ACCENT}20` }}
              >
                <table className="w-full min-w-[680px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Chocolate Type
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Grams per Cup
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        100 g in Cups
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Notes
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {chocolateTypeTable.map((row, i) => (
                      <tr
                        key={row.type}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                      >
                        <td className="px-4 py-2.5 font-medium text-gray-800">
                          {row.type}
                        </td>
                        <td
                          className="px-4 py-2.5 font-semibold"
                          style={{ color: ACCENT }}
                        >
                          {row.grams}
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          {row.cupsFor100g}
                        </td>
                        <td className="px-4 py-2.5 text-gray-600">
                          {row.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Semi-sweet, bittersweet, dark, milk, and mint chocolate chips can generally
                use the standard 170 grams per cup estimate. Mini chips are slightly heavier
                per cup because their smaller pieces leave fewer gaps. Chocolate chunks vary
                more because their cut size is not uniform. For additional sweets and dessert
                ingredient information, see the{" "}
                <a
                  href="https://www.recipal.com/nutrition-database/category/sweets-desserts"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-medium underline underline-offset-2 transition-colors hover:text-[#02B875]"
                  style={{ color: ACCENT }}
                >
                  sweets and desserts nutrition database
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                It Depends Which Form of Chocolate You&apos;re Measuring
              </h2>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                “Chocolate” isn&apos;t one texture. How it&apos;s cut or shaped
                changes how much air ends up trapped between pieces in the cup.
              </p>

              <div
                className="overflow-x-auto rounded-[20px] border"
                style={{ borderColor: `${ACCENT}20` }}
              >
                <table className="w-full min-w-[520px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Chocolate Form
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Grams per Cup
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Ounces per Cup
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {chocolateFormTable.map((row, i) => (
                      <tr
                        key={row.form}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                      >
                        <td className="px-4 py-2.5 font-medium text-gray-800">
                          {row.form}
                        </td>
                        <td
                          className="px-4 py-2.5 font-semibold"
                          style={{ color: ACCENT }}
                        >
                          {row.grams}
                        </td>
                        <td className="px-4 py-2.5 text-gray-600">
                          {row.oz}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Grated chocolate is the lightest by volume because fine shreds
                create more air gaps. Mini chips pack more efficiently, while
                chopped chocolate bars vary according to the size of the
                pieces.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Full Chart: Chocolate Chips, Grams to Cups
              </h2>

              <div
                className="overflow-x-auto rounded-[20px] border"
                style={{ borderColor: `${ACCENT}20` }}
              >
                <table className="w-full min-w-[420px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Grams
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Cups
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Tablespoons
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {gramsToCupsTable.map((row, i) => (
                      <tr
                        key={row[0]}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                      >
                        <td className="px-4 py-2.5 font-medium text-gray-800">
                          {row[0]}
                        </td>
                        <td
                          className="px-4 py-2.5 font-semibold"
                          style={{ color: ACCENT }}
                        >
                          {row[1]}
                        </td>
                        <td className="px-4 py-2.5 text-gray-600">
                          {row[2]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Cups to Grams: The Reverse Direction
              </h2>

              <div
                className="overflow-x-auto rounded-[20px] border"
                style={{ borderColor: `${ACCENT}20` }}
              >
                <table className="w-full min-w-[420px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Cups
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Grams
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Tablespoons
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {cupsToGramsTable.map((row, i) => (
                      <tr
                        key={row[0]}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                      >
                        <td className="px-4 py-2.5 font-medium text-gray-800">
                          {row[0]}
                        </td>
                        <td
                          className="px-4 py-2.5 font-semibold"
                          style={{ color: ACCENT }}
                        >
                          {row[1]}
                        </td>
                        <td className="px-4 py-2.5 text-gray-600">
                          {row[2]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              className="rounded-[24px] border bg-white p-5 sm:p-6"
              style={{ borderColor: `${ACCENT}20` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Why Chocolate Chips Are Trickier to Measure Than You&apos;d
                Think
              </h2>

              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Chocolate chips are shaped pieces that do not stack perfectly.
                Depending on how they fall into the cup, there may be visible
                gaps between them. This is why the same volume can produce
                slightly different weights across brands and chip sizes.
              </p>

              <p className="text-sm leading-relaxed text-gray-600">
                Chocolate chunks can vary even more because pieces cut from a
                bar are irregular. For cookies and quick breads, a cup estimate
                is usually sufficient, but weighing the chocolate is better
                when the recipe requires precision.
              </p>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Does Cup Size Change the Number?
              </h2>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Yes. A “cup” does not have exactly the same volume in every
                country.
              </p>

              <div
                className="overflow-x-auto rounded-[20px] border"
                style={{ borderColor: `${ACCENT}20` }}
              >
                <table className="w-full min-w-[480px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Cup Standard
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Volume
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-white">
                        Chocolate Chips Weight
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {cupStandardTable.map((row, i) => (
                      <tr
                        key={row.standard}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                      >
                        <td className="px-4 py-2.5 font-medium text-gray-800">
                          {row.standard}
                        </td>
                        <td className="px-4 py-2.5 text-gray-600">
                          {row.volume}
                        </td>
                        <td
                          className="px-4 py-2.5 font-semibold"
                          style={{ color: ACCENT }}
                        >
                          {row.weight}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                The conversion tables on this page use the <a
                  href="https://en.wikipedia.org/wiki/United_States_Customary_Units"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-medium underline underline-offset-2 transition-colors hover:text-[#02B875]"
                  style={{ color: ACCENT }}
                >
                  US customary 
                </a> cups as the primary standard. If your recipe uses metric cups, the
                result may be slightly different.
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
                Practical Measuring Tips
              </h2>

              <ul className="space-y-2 text-sm text-gray-600">
                {measuringTips.map((tip) => (
                  <li
                    key={tip.lead}
                    className="flex items-start gap-2"
                  >
                    <i
                      className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm"
                      style={{ color: ACCENT }}
                    />

                    <span>
                      <strong className="text-gray-800">{tip.lead}</strong>{" "}
                      {tip.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className="rounded-[24px] border bg-white p-5 sm:p-6"
              style={{ borderColor: `${ACCENT}20` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Quick Reference
              </h2>

              <ul className="space-y-1.5 text-sm text-gray-600">
                {commonAmounts.map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-2"
                  >
                    <i
                      className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm"
                      style={{ color: ACCENT }}
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className="rounded-[24px] border bg-white p-5 sm:p-6"
              style={{ borderColor: `${ACCENT}20` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                The Bottom Line
              </h2>

              <p className="text-sm leading-relaxed text-gray-600">
                Use 170 grams per cup for standard semi-sweet, bittersweet,
                dark, milk, and mint chocolate chips. Mini chips are closer to
                185 grams per cup, while chocolate chunks depend on their cut
                size. When the recipe outcome depends on accurate proportions,
                weighing chocolate is more reliable than measuring it by cups.
              </p>
            </section>

            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Other Ingredients
              </h2>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for chocolate
                chips. Every ingredient in the kitchen has a different density,
                so one cup of flour, sugar, or butter will not weigh the same.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {otherIngredients.map((ingredient) => (
                  <Link
                    key={ingredient.href}
                    href={ingredient.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-current hover:text-[#02B875]"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <span className="truncate">{ingredient.name}</span>
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