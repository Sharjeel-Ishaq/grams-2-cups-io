import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "200 Grams to Cups — Full Ingredient Conversion Chart",
  description:
    "How many cups is 200 grams? It depends on the ingredient. A complete chart covering flour, sugar, butter, honey, and 25+ other ingredients.",
  alternates: { canonical: "/200-grams-to-cups" },
  openGraph: {
    title: "200 Grams to Cups — Full Ingredient Conversion Chart",
    description: "200 grams is about 1⅔ cups of flour, 1 cup of sugar, or ⅞ cup of butter — see the full chart.",
    url: "/200-grams-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "200 Grams to Cups — Full Ingredient Conversion Chart",
    description: "How many cups is 200 grams? It depends on the ingredient — see the full chart.",
    images: ["/og-image.jpg"],
  },
};

type Row = { name: string; href?: string; cups: string; tbsp: string };
type Ingredient = {
  name: string;
  slug: string;
  gramsPerCup: number;
  cupsFor200g: number;
  notes: string;
};

/* ─── Main 200g table — the site's 16 dedicated ingredients ─────────── */
const mainRows: Row[] = [
  { name: "All-purpose flour", href: "/flour", cups: "~1⅔ cups", tbsp: "26.7 tbsp" },
  { name: "Granulated sugar", href: "/sugar", cups: "1 cup", tbsp: "16 tbsp" },
  { name: "Powdered sugar", href: "/powdered-sugar", cups: "~1⅔ cups", tbsp: "26.7 tbsp" },
  { name: "Brown sugar (packed)", href: "/brown-sugar", cups: "~⅞ cup", tbsp: "14.5 tbsp" },
  { name: "Butter", href: "/butter", cups: "~⅞ cup", tbsp: "14.1 tbsp" },
  { name: "Vegetable oil", href: "/vegetable-oil", cups: "~⅞ cup", tbsp: "14.7 tbsp" },
  { name: "Milk", href: "/milk", cups: "~⅚ cup", tbsp: "13.5 tbsp" },
  { name: "Water", href: "/water", cups: "~⅚ cup", tbsp: "13.5 tbsp" },
  { name: "Honey", href: "/honey", cups: "~⅝ cup", tbsp: "9.4 tbsp" },
  { name: "Uncooked rice", href: "/rice", cups: "~1⅛ cups", tbsp: "17.3 tbsp" },
  { name: "Rolled oats", href: "/oats", cups: "~2¼ cups", tbsp: "35.6 tbsp" },
  { name: "Cocoa powder", href: "/cocoa-powder", cups: "~2⅓ cups", tbsp: "37.6 tbsp" },
  { name: "Chocolate chips", href: "/chocolate-chips", cups: "~1⅙ cups", tbsp: "18.8 tbsp" },
  { name: "Whole almonds", href: "/almonds", cups: "~1⅖ cups", tbsp: "22.4 tbsp" },
  { name: "Table salt", href: "/salt", cups: "~⅔ cup", tbsp: "11 tbsp" },
  { name: "Baking powder", href: "/baking-powder", cups: "~⅞ cup", tbsp: "14.5 tbsp" },
];

/* ─── Additional table 1 — more flours, fats & grains at 200g ───────── */
const moreFlourFatRows: Row[] = [
  { name: "Whole wheat flour", cups: "~1⅔ cups", tbsp: "26.7 tbsp" },
  { name: "Almond flour", cups: "~2.08 cups", tbsp: "33.3 tbsp" },
  { name: "Cake flour", cups: "~1¾ cups", tbsp: "28.1 tbsp" },
  { name: "Olive oil", cups: "~0.93 cup", tbsp: "14.8 tbsp" },
  { name: "Shortening", cups: "~1 cup (scant)", tbsp: "15.6 tbsp" },
  { name: "Quinoa (uncooked)", cups: "~1⅙ cups", tbsp: "18.8 tbsp" },
  { name: "Dry pasta", cups: "2 cups", tbsp: "32 tbsp" },
  { name: "Cornstarch", cups: "~1.56 cups", tbsp: "25 tbsp" },
];

/* ─── Additional table 2 — dairy, nuts, cheese, spices & condiments ─── */
const moreDairyNutsRows: Row[] = [
  { name: "Heavy cream", cups: "~⅚ cup", tbsp: "13.4 tbsp" },
  { name: "Yogurt", cups: "~0.82 cup", tbsp: "13.1 tbsp" },
  { name: "Walnuts, chopped", cups: "~1⅔ cups", tbsp: "26.7 tbsp" },
  { name: "Sesame seeds", cups: "~1⅜ cups", tbsp: "22.2 tbsp" },
  { name: "Peanut butter", cups: "~¾ cup", tbsp: "12.4 tbsp" },
  { name: "Parmesan, grated", cups: "2 cups", tbsp: "32 tbsp" },
  { name: "Cheddar, shredded", cups: "~1¾ cups", tbsp: "28.3 tbsp" },
  { name: "Cream cheese", cups: "~⅞ cup", tbsp: "13.8 tbsp" },
  { name: "Feta, crumbled", cups: "1⅓ cups", tbsp: "21.3 tbsp" },
  { name: "Ground cinnamon", cups: "~1.6 cups", tbsp: "25.6 tbsp" },
  { name: "Ground cumin", cups: "~1.92 cups", tbsp: "30.8 tbsp" },
  { name: "Paprika", cups: "~1⅚ cups", tbsp: "29.4 tbsp" },
  { name: "Garlic powder", cups: "~1⅓ cups", tbsp: "21.1 tbsp" },
  { name: "Mayonnaise", cups: "~⅞ cup", tbsp: "13.8 tbsp" },
  { name: "Ketchup", cups: "~¾ cup", tbsp: "11.8 tbsp" },
  { name: "Soy sauce", cups: "~⅘ cup", tbsp: "12.5 tbsp" },
];

const ingredients: Ingredient[] = [
  { name: "All-Purpose Flour", slug: "flour", gramsPerCup: 120, cupsFor200g: 1.67, notes: "Spoon and level" },
  { name: "Granulated Sugar", slug: "sugar", gramsPerCup: 200, cupsFor200g: 1.00, notes: "Use level cups" },
  { name: "Brown Sugar", slug: "brown-sugar", gramsPerCup: 220, cupsFor200g: 0.91, notes: "Pack firmly" },
  { name: "Butter", slug: "butter", gramsPerCup: 227, cupsFor200g: 0.88, notes: "Standard butter, 2 sticks" },
  { name: "Water", slug: "water", gramsPerCup: 237, cupsFor200g: 0.84, notes: "Based on a US cup" },
  { name: "Milk", slug: "milk", gramsPerCup: 244, cupsFor200g: 0.82, notes: "Whole milk" },
  { name: "Oats", slug: "oats", gramsPerCup: 90, cupsFor200g: 2.22, notes: "Regular rolled oats" },
  { name: "Rice", slug: "rice", gramsPerCup: 185, cupsFor200g: 1.08, notes: "Uncooked white rice" },
  { name: "Chocolate Chips", slug: "chocolate-chips", gramsPerCup: 160, cupsFor200g: 1.25, notes: "Semi-sweet chips" },
  { name: "Honey", slug: "honey", gramsPerCup: 340, cupsFor200g: 0.59, notes: "Dense liquid" },
  { name: "Almonds", slug: "almonds", gramsPerCup: 140, cupsFor200g: 1.43, notes: "Whole almonds" },
  { name: "Cocoa Powder", slug: "cocoa-powder", gramsPerCup: 85, cupsFor200g: 2.35, notes: "Unsweetened" },
  { name: "Salt", slug: "salt", gramsPerCup: 280, cupsFor200g: 0.71, notes: "Table salt, level" },
  { name: "Baking Powder", slug: "baking-powder", gramsPerCup: 120, cupsFor200g: 1.67, notes: "Level, not packed" },
  { name: "Vegetable Oil", slug: "vegetable-oil", gramsPerCup: 218, cupsFor200g: 0.92, notes: "Approx., based on density" },
  { name: "Bread Flour", slug: "bread-flour", gramsPerCup: 127, cupsFor200g: 1.57, notes: "Higher protein" },
  { name: "Cake Flour", slug: "cake-flour", gramsPerCup: 114, cupsFor200g: 1.75, notes: "Fine texture" },
  { name: "Whole Wheat Flour", slug: "whole-wheat-flour", gramsPerCup: 120, cupsFor200g: 1.67, notes: "Spoon & level" },
  { name: "Powdered Sugar", slug: "powdered-sugar", gramsPerCup: 120, cupsFor200g: 1.67, notes: "Unsifted" },
  { name: "Cornstarch", slug: "cornstarch", gramsPerCup: 120, cupsFor200g: 1.67, notes: "Light & fine" },
  { name: "Almond Flour", slug: "almond-flour", gramsPerCup: 96, cupsFor200g: 2.08, notes: "Finely ground almonds" },
  { name: "Coconut Flour", slug: "coconut-flour", gramsPerCup: 112, cupsFor200g: 1.79, notes: "Highly absorbent" },
  { name: "Maple Syrup", slug: "maple-syrup", gramsPerCup: 320, cupsFor200g: 0.63, notes: "Pure maple syrup" },
  { name: "Sour Cream", slug: "sour-cream", gramsPerCup: 240, cupsFor200g: 0.83, notes: "Full fat" },
  { name: "Greek Yogurt", slug: "greek-yogurt", gramsPerCup: 245, cupsFor200g: 0.82, notes: "Plain, full fat" }
];

function WeightTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[420px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
            <th className="px-4 py-3 text-left font-semibold text-white">200g in Cups</th>
            <th className="px-4 py-3 text-left font-semibold text-white">Tablespoons</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
              <td className="px-4 py-2.5 font-medium text-gray-800">
                {row.href ? (
                  <Link href={row.href} className="hover:underline" style={{ color: ACCENT }}>{row.name}</Link>
                ) : (
                  row.name
                )}
              </td>
              <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.cups}</td>
              <td className="px-4 py-2.5 text-gray-600">{row.tbsp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TwoHundredGramsToCups() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div
              className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
            >
              <i className="ri-scales-3-line" /> 30+ ingredients at 200 grams
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              200 Grams to Cups
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Same weight, different ingredient, completely different amount of cups — that&apos;s the
              whole story behind converting 200 grams. Butter and flour can both weigh 200 grams and still
              fill your measuring cup to two very different lines. Here&apos;s exactly how much 200 grams
              comes out to for the ingredients people look up most.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another amount?{" "}
              <Link href="/100-grams-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                See 100 grams to cups
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">

            {/* Quick Answer */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Answer</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                200 grams is about 1⅔ cups of{" "}
                <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>, 1 cup
                of granulated{" "}
                <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>sugar</Link>, or
                ⅞ cup of{" "}
                <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link> —
                the number changes because every ingredient has its own density. Find your specific
                ingredient in the table below.
              </p>
            </section>

            <div className="mt-5">
              <SimpleConverter ingredients={ingredients} initialGrams={200} />
            </div>

            {/* Main table */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">200 Grams to Cups, by Ingredient</h2>
              <WeightTable rows={mainRows} />
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Figures are based on standard reference weights per cup for each ingredient (for example,
                flour at 120g/cup and sugar at 200g/cup), using the US customary cup and the
                spoon-and-level method for dry ingredients. Actual results can shift slightly depending on
                brand, humidity, and how firmly an ingredient was packed.
              </p>
            </section>

            {/* Additional tables */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">More Ingredients at 200 Grams</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Beyond the core pantry staples above, here&apos;s how 200 grams works out for a wider range
                of baking and cooking ingredients.
              </p>

              <h3 className="mb-3 mt-6 text-xl font-bold tracking-[-0.02em] text-gray-900">More Flours, Fats &amp; Grains</h3>
              <WeightTable rows={moreFlourFatRows} />

              <h3 className="mb-3 mt-8 text-xl font-bold tracking-[-0.02em] text-gray-900">Dairy, Nuts, Cheese, Spices &amp; Condiments</h3>
              <WeightTable rows={moreDairyNutsRows} />

              <p className="mt-2 text-xs text-gray-400">
                These additional figures use the same reference densities as{" "}
                <Link href="/cups-to-grams" className="font-semibold hover:underline" style={{ color: ACCENT }}>
                  our cups-to-grams tables
                </Link>{" "}
                and should be treated as practical estimates rather than exact constants.
              </p>
            </section>

            {/* Why looks so different */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why the Same 200 Grams Looks So Different</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                It comes down to how much empty space sits between the particles of whatever you&apos;re
                measuring. Flour is light and airy — its fine particles trap a good bit of air, so it takes
                more volume to reach 200 grams. Sugar crystals sit closer together with far less air
                between them, so 200 grams of sugar fills a smaller cup. Honey isn&apos;t even a
                &quot;particle&quot; ingredient at all — it&apos;s a thick liquid with almost no trapped
                air, which is why 200 grams of it barely fills half a cup.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                A simple way to think about it: a cup measures the space something takes up, not how much
                of it there actually is. Two ingredients can occupy the same amount of space and still
                weigh completely different amounts — or, as in this case, weigh the same and take up
                completely different amounts of space.
              </p>
            </section>

            {/* Closer look */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Closer Look at a Few Common Ones</h2>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                  <span>
                    200g of{" "}
                    <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link>{" "}
                    comes out to roughly 1⅔ cups — a common amount for a batch of cookies or a small loaf.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                  <span>
                    200g of{" "}
                    <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>sugar</Link>{" "}
                    is a clean 1 cup exactly, which is part of why sugar is often the easiest ingredient to
                    eyeball without a scale.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                  <span>
                    200g of{" "}
                    <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link>{" "}
                    is just under 1 cup (about ⅞ cup) — close to 1¾ standard US sticks of butter.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                  <span>
                    200g of{" "}
                    <Link href="/honey" className="font-semibold hover:underline" style={{ color: ACCENT }}>honey</Link>{" "}
                    is only about ⅝ cup, since honey is considerably denser than dry ingredients — this is
                    the one that catches people off guard most often when they expect &quot;200
                    grams&quot; to look like a similar amount across ingredients.
                  </span>
                </li>
              </ul>
            </section>

            {/* How to Measure */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure 200 Grams Accurately</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <strong className="text-gray-900">With a kitchen scale (most reliable):</strong> Place your
                bowl on the scale, zero it out, and pour in the ingredient until the scale reads 200 grams.
                This sidesteps every variable that affects a cup measurement — no guessing about packing or
                leveling.
              </p>
              <p className="mb-2 text-sm text-gray-500">With measuring cups (if no scale is available):</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "For flour, cocoa, and other light powders — spoon the ingredient into the cup rather than scooping, then level the top with a straight edge.",
                  "For brown sugar — pack it down firmly enough that it holds its shape when tipped out of the cup.",
                  "For liquids like honey, oil, or milk — use a liquid measuring cup and check the fill line at eye level.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quick Reference */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  <>200g <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link> ≈ 1⅔ cups</>,
                  <>200g <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>sugar</Link> = 1 cup</>,
                  <>200g <Link href="/butter" className="font-semibold hover:underline" style={{ color: ACCENT }}>butter</Link> ≈ ⅞ cup</>,
                  <>200g <Link href="/honey" className="font-semibold hover:underline" style={{ color: ACCENT }}>honey</Link> ≈ ⅝ cup</>,
                  <>200g <Link href="/rice" className="font-semibold hover:underline" style={{ color: ACCENT }}>rice</Link> (uncooked) ≈ 1⅛ cups</>,
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Bottom Line */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                There&apos;s no single answer to &quot;how many cups is 200 grams&quot; — it always depends
                on what you&apos;re measuring. When you know the ingredient, the conversion table above
                gets you there in seconds. When precision really matters — baking especially — weighing the
                ingredient directly on a scale is still the most dependable way to hit exactly 200 grams,
                no matter how it settles in the cup.
              </p>
            </section>

            <section
              className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500"
              style={{ borderColor: `${ACCENT}15` }}
            >
              <p className="mb-2 font-semibold text-gray-600">More Converters</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { name: "100 grams to cups", href: "/100-grams-to-cups" },
                  { name: "150 grams to cups", href: "/150-grams-to-cups" },
                  { name: "200 grams to cups", href: "/200-grams-to-cups" },
                  { name: "Cups to grams", href: "/cups-to-grams" },
                  { name: "Grams to ounces", href: "/grams-to-ounces" },
                  { name: "All ingredients", href: "/ingredients" },
                  { name: "Accuracy guide", href: "/grams-to-cups-accuracy" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2 font-medium text-gray-700 transition-colors hover:border-current"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <span className="truncate">{link.name}</span>
                    <i className="ri-arrow-right-s-line flex-shrink-0" style={{ color: ACCENT }} />
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