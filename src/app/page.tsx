import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import Link from "next/link";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

/* ─── Ingredient data (grams per cup) ──────────────────────────────── */
const ingredients: Ingredient[] = [
  { name: "All-Purpose Flour", slug: "flour", gramsPerCup: 120, notes: "Spoon and level" },
  { name: "Granulated Sugar", slug: "sugar", gramsPerCup: 200, notes: "Use level cups" },
  { name: "Brown Sugar", slug: "brown-sugar", gramsPerCup: 220, notes: "Pack firmly" },
  { name: "Butter", slug: "butter", gramsPerCup: 227, notes: "Standard butter, 2 sticks" },
  { name: "Water", slug: "water", gramsPerCup: 237, notes: "Based on a US cup" },
  { name: "Milk", slug: "milk", gramsPerCup: 237, notes: "Whole milk" },
  { name: "Oats", slug: "oats", gramsPerCup: 80, notes: "Regular rolled oats" },
  { name: "Rice", slug: "rice", gramsPerCup: 185, notes: "Uncooked white rice" },
  { name: "Chocolate Chips", slug: "chocolate-chips", gramsPerCup: 160, notes: "Semi-sweet chips" },
  { name: "Honey", slug: "honey", gramsPerCup: 340, notes: "Dense liquid" },
  { name: "Almonds", slug: "almonds", gramsPerCup: 140, notes: "Whole almonds" },
  { name: "Cocoa Powder", slug: "cocoa-powder", gramsPerCup: 100, notes: "Unsweetened" },
  { name: "Salt", slug: "salt", gramsPerCup: 90, notes: "Table salt, level" },
  { name: "Baking Powder", slug: "baking-powder", gramsPerCup: 64, notes: "Level, not packed" },
  { name: "Vegetable Oil", slug: "vegetable-oil", gramsPerCup: 218, notes: "Approx., based on density" },
  {name: "Potato Starch", slug: "potato-starch", gramsPerCup: 120, notes: "Spoon and level" },
];

/* ─── Hero quick-conversion badges ─────────────────────────────────── */
const conversions = [
  { label: "Butter", value: "100 g ≈ 0.44 cups", icon: "ri-cup-line" },
  { label: "Cocoa", value: "100 g ≈ 0.85 cups", icon: "ri-seedling-line" },
  { label: "Honey", value: "100 g ≈ 0.29 cups", icon: "ri-drop-line" },
  { label: "Flour", value: "100 g ≈ 0.83 cups", icon: "ri-restaurant-line" },
];

const faqs = [
  { q: "How many cups is 250g of flour?", a: "Using 120g per cup, 250g of all-purpose flour is approximately 2.08 cups." },
  { q: "Can every ingredient be converted from grams to cups?", a: "Yes, if you have a reliable ingredient-specific grams-per-cup value. The result will differ between ingredients because their densities are different." },
  { q: "Is 240g always equal to 1 cup?", a: "No. 240g is not automatically one cup. Grams measure mass, while cups measure volume. For example, 1 cup of all-purpose flour is commonly listed as 120g by King Arthur Baking." },
  { q: "Should brown sugar be packed?", a: "If the recipe says packed brown sugar, yes. Press the sugar firmly into the measuring cup and level the top." },
  { q: "Can I use the same conversion for liquids and dry ingredients?", a: "No. Each ingredient needs its own conversion value. Water, milk, oil, honey, flour, and sugar do not have the same weight per cup." },
  { q: "Why can two conversion charts show different numbers?", a: "Different sources may use different ingredient brands, preparation methods, cup standards, or measuring techniques. This is especially noticeable with ingredients such as flour and cocoa powder." },
  { q: "Do I need a kitchen scale?", a: "You can bake successfully with cups, but a digital scale gives more repeatable measurements, especially for flour and other ingredients where packing can change the volume measurement." },
  { q: "How do I convert 500g to cups?", a: "The answer depends on the ingredient. For example, using 120g per cup for all-purpose flour: 500 ÷ 120 = 4.17 cups" },
];

export const metadata: Metadata = {
  title: "Grams to Cups Converter | Ingredient Charts & Calculators",
  description:
    "Convert grams to cups for flour, sugar, butter, honey, oats, milk, water, and more. Find ingredient-specific charts, quick references, and formulas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grams to Cups Converter",
    description:
      "Ingredient-specific grams to cups conversion charts for baking and cooking.",
    url: "/",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/images/Preview-image.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grams to Cups Converter",
    description:
      "Ingredient-specific grams to cups conversion charts for baking and cooking.",
    images: ["/images/Preview-image.webp"],
  },
};

export default function Home() {

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14">

          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
            >
              <i className="ri-restaurant-line" /> 15+ kitchen Ingredients, Ready To Convert
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Convert Grams To Cups: See Charts Here For Each Ingredient.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <Link className="transition-colors duration-200 text-[#02b875] hover:underline" href="/100-grams-to-cups">100 grams</Link> of butter equals about 0.44 cups, while 100 grams of cocoa powder equals about
              0.85 cups. Since every ingredient has a different density, the same weight can equal
              different volumes depending on what you&apos;re measuring — pick your ingredient below and
              convert instantly.
            </p>

          </div>

          {/* quick conversion badges */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {conversions.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border bg-white/80 p-3 backdrop-blur-sm"
                style={{ borderColor: `${ACCENT}25` }}
              >
                <div className="mb-2 flex items-center justify-between text-gray-400">
                  <i className={item.icon} style={{ color: ACCENT }} />
                  <span className="text-[9px] uppercase tracking-[0.2em]">{item.label}</span>
                </div>
                <div className="text-sm font-semibold tracking-[-0.02em] text-gray-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Converter tool */}
      <div className="mx-auto my-8 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto w-full max-w-4xl mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Convert Ingredients From Grams To Cups</h2>
        <div className="mx-auto w-full max-w-4xl">
          <SimpleConverter ingredients={ingredients} />
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-4xl">


          {/* ── Left column: long-form content ── */}
          <div className="mx-auto w-full space-y-10">

            {/* Grams to Cups Conversion */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams To Cups Conversion</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                100 grams of butter equals about <strong className="text-gray-900">0.44 cups</strong>, while 100 grams of
                cocoa powder equals about <strong className="text-gray-900">0.85 cups</strong>. Similarly, 227 grams of
                heavy cream equals about <strong className="text-gray-900">1 cup</strong>, while 14 grams of vanilla
                extract equals about <strong className="text-gray-900">1 tablespoon</strong>. Since each ingredient has a
                different density, the same weight can equal different volumes or cup measurements for different <Link href="/ingredients" className="transition-colors duration-200 text-[#02b875] hover:underline">
                  ingredients
                </Link>.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Use the grams to cups conversion chart below to find the correct measurements for common cooking and
                baking ingredients. Our converter can also be used if you need a more precise measurement of a
                specific amount.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Have you ever tried to estimate the amount of butter, heavy cream, or cocoa powder in a recipe and
                the result wasn&apos;t what you expected? It&apos;s common for this to happen. Converting grams to
                cups isn&apos;t a simple calculation, as butter, heavy cream, cocoa powder, vanilla extract, and
                other ingredients have different densities.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                This guide is designed to make it easy to measure common ingredients. It includes butter, heavy
                cream, cocoa powder, vanilla extract, baking powder, baking soda, salt, and other important cooking
                and baking ingredients. Use these measurements as a handy reference when cooking or baking.
              </p>

              <h3 className="mb-2 mt-6 text-base font-bold text-gray-900">Measurement Chart for Common Ingredients</h3>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[420px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Part of</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cup measurement</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Gram measurement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["All-purpose flour", "1 cup", "120 grams"],
                      ["Cake flour", "1 cup", "120 grams"],
                      ["Granulated sugar", "1 cup", "198 grams"],
                      ["Baking powder", "1 tablespoon", "4 grams"],
                      ["Vanilla extract", "1 tablespoon", "14 grams"],
                      ["Unsalted butter", "1/2 cup", "113 grams"],
                      ["Baking soda", "1 tablespoon", "40 grams"],
                      ["Salt", "1 tablespoon", "5.6 grams"],
                      ["Powdered sugar", "1 cup", "125 grams"],
                      ["Heavy cream", "1 cup", "227 grams"],
                      ["Cocoa powder", "1/4 cup", "29.5 grams"],
                    ].map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                Note: Ingredient measurements may vary slightly depending on brand, packaging method, and density.
                For more accurate results in baking, it is best to use a kitchen scale for weighing, where possible.
              </p>
            </section>

            {/* How Many Cups Does 100 Grams Equal */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">How Many Cups Does 100 Grams Equal?</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                100 grams does not equal the same amount of cups for each ingredient, because grams are a
                measurement of weight while cups are a measurement of volume. Since the density of each ingredient
                is different, converting <Link href="/100-grams-to-cups" className="font-semibold transition-colors duration-200 underline underline-offset-2" style={{ color: ACCENT }}>
                  100 grams to cups
                </Link>{" "}
                will give different results.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                For example, 100 grams of all-purpose flour equals about 0.83 cups, 100 grams of granulated sugar
                equals about 0.5 cups, and 100 grams of butter equals about 0.44 cups. Similarly, 100 grams of honey
                equals about 0.29 cups, while 100 grams of cocoa powder can equal about 1 cup.
              </p>
              <p className="mb-4 text-sm text-gray-500">Below are the approximate amounts in cups per 100 grams for commonly used <Link href="/ingredients" className="transition-colors duration-200 text-[#02b875] hover:underline">
                ingredients
              </Link>:</p>
              <div className="overflow-hidden rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Part of</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">100 grams approximately</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["All-purpose flour", "0.83 cup"],
                      ["Granulated sugar", "0.5 cup"],
                      ["Butter", "0.44 cup"],
                      ["Water or milk", "0.42 cup"],
                      ["Cocoa powder", "1 cup"],
                      ["Honey", "0.29 cup"],
                    ].map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 className="mb-2 mt-6 text-base font-bold text-gray-900">Convert any ingredient and quantity to cups.</h3>
              <p className="mb-2 text-sm leading-relaxed text-gray-600">
                Need a different ingredient or quantity? See <Link href="/100-grams-to-cups" className="transition-colors duration-200 text-[#02b875] hover:underline">100 grams in cups</Link> for 15+ common ingredients with our
                complete converter, or convert any weight to cups by entering the quantity you need.
              </p>
              <p className="mt-2 text-xs text-gray-400">
                Note: These measurements may vary slightly depending on the density of the ingredients and the
                method of measurement. It is best to use a kitchen scale while baking for more accurate results.
              </p>
            </section>

            {/* Ingredients Used for Multiple Time Conversions */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Ingredients Used for Multiple Time Conversions</h2>
              <p className="mb-4 text-sm text-gray-500">A guide to ingredients used in everyday life, with useful information, charts, and printable pages.</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { title: "Flour Grams to Cups", desc: "Convert all-purpose flour from grams to cups using the 120g-per-cup standard, with an easy spoon-and-level guide.", cta: "Visit Flour Converter", href: `/flour`, icon: "ri-restaurant-line" },
                  { title: "Sugar Grams to Cups", desc: "Convert granulated sugar at 200g per cup, with helpful measurements for brown and powdered sugar too.", cta: "Visit Sugar Converter", href: `/sugar`, icon: "ri-drop-line" },
                  { title: "Butter Grams to Cups", desc: "One standard cup of butter weighs 227 grams, which is equivalent to exactly two sticks of butter.", cta: "Visit Butter Converter", href: "/butter", icon: "ri-cup-line" },
                  { title: "Milk Grams to Cups", desc: "The density of water is 1 gram/ml, so the conversion is 1 gram to 1 ml, which is equal to 0.2 teaspoons.", cta: "Visit Milk Converter", href: "/milk", icon: "ri-water-flash-line" },
                  { title: "Water Grams to Cups", desc: "Easily convert water measurements from grams to cups, tablespoons, and teaspoons for everyday recipes.", cta: "Visit Water Converter", href: "/water", icon: "ri-drop-line" },
                  { title: "Honey Grams to Cups", desc: "Convert honey from grams to cups, tablespoons, and teaspoons while accounting for its thicker consistency.", cta: "Visit Honey Converter", href: "/honey", icon: "ri-seedling-line" },
                  { title: "Almonds Grams to Cups", desc: "Convert whole, sliced, slivered, and ground almonds with a practical guide for the different weights per cup.", cta: "Visit Almonds Converter", href: "/almonds", icon: "ri-plant-line" },
                  { title: "Cocoa Powder Grams to Cups", desc: "Convert natural and Dutch-process cocoa powder — spoon-and-level tips and small-amount conversions included.", cta: "Visit Cocoa Powder Converter", href: "/cocoa-powder", icon: "ri-cup-line" },
                  { title: "Salt Grams to Cups", desc: "Convert table salt, kosher salt, and finishing salts — includes Morton's vs Diamond Crystal comparisons.", cta: "Visit Salt Converter", href: "/salt", icon: "ri-shield-star-line" },
                  { title: "Baking Powder Grams to Cups", desc: "Convert baking powder from grams to teaspoons, tablespoons and cups — includes freshness test and baking-powder vs baking-soda comparison.", cta: "Visit Baking Powder Converter", href: "/baking-powder", icon: "ri-flask-line" },
                  { title: "Vegetable Oil Grams to Cups", desc: "Convert vegetable oil and common neutral cooking oils — 218g per cup reference and substitution tips.", cta: "Visit Vegetable Oil Converter", href: "/vegetable-oil", icon: "ri-drop-line" },
                  // { title: "100 Grams To Cups", desc: "Quick reference chart: how much 100 grams is in cups for common ingredients.", cta: "View 100g Chart", href: "/100-grams-to-cups", icon: "ri-list-check" },
                  { title: "Chocolate Chips Grams to Cups", desc: "Measure semi-sweet chips by weight using the standard 170g-per-cup conversion, with common cup and tablespoon equivalents.", cta: "Visit Chocolate Chips Converter", href: "/chocolate-chips", icon: "ri-cake-3-line" },
                ].map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    className="rounded-2xl border bg-white p-4 transition-shadow hover:shadow-sm"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>
                      <i className={c.icon} />
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-gray-900">{c.title}</h3>
                    <p className="mb-3 text-xs leading-relaxed text-gray-500">{c.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: ACCENT }}>
                      {c.cta} <i className="ri-arrow-right-line" />
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* What is a Gram */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">What is a Gram?</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                A gram (g) is a metric unit of mass equal to one-thousandth of a kilogram (kg). It is widely used
                for precise measurements in baking, cooking, science, medicine, nutrition, and everyday life.
              </p>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                In baking, grams are especially useful because weight measurements are more consistent than cups or
                spoons. For example, 100g of flour is always 100g, regardless of how it is packed or measured.
              </p>
              <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">Common Gram Conversions</h3>
              <ul className="mb-3 space-y-1.5 text-sm text-gray-600">
                {["1 g = 0.001 kg", "1 g = 1,000 mg", "1 g ≈ 0.0353 oz", "1 g ≈ 0.0022 lb"].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">Why Grams Matter</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Grams provide accurate, repeatable measurements, making them ideal for recipes, nutritional labels,
                scientific experiments, medicine, manufacturing, and other applications where precision matters.
              </p>
              <div className="rounded-xl p-3 text-sm text-gray-700" style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}25` }}>
                In short: When accuracy counts, measuring by grams removes guesswork and delivers more consistent
                results.
              </div>
            </section>

            {/* What Is A Cup */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">What Is A Cup?</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                A cup is a widely used kitchen measurement for volume, especially in baking and cooking. Unlike
                grams, which measure weight, a cup measures the amount of space an ingredient occupies.
              </p>
              <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">Definition</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                In the USA, a standard measuring cup is commonly treated as 240 mL in recipes, while the US legal
                cup is 236.6 mL. In the UK, the modern metric cup is generally 250 mL.
              </p>
              <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">A Brief History</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Cup-based measurements became popular in American cookbooks during the 19th century because they
                made recipes simple and practical for home cooks. Over time, cups became a standard part of American
                baking, while the UK increasingly adopted grams and milliliters for greater precision.
              </p>
              <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">USA vs UK</h3>
              <ul className="mb-3 space-y-1.5 text-sm text-gray-600">
                {["🇺🇸 US cup: ~240 mL in everyday recipes", "🇺🇸 US legal cup: 236.6 mL", "🇬🇧 UK metric cup: 250 mL"].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                The key point is that a cup measures volume, not weight. For example, one cup of flour weighs much
                less than one cup of sugar. For precise baking, grams are usually more reliable than cups.
              </p>
            </section>

            {/* Formula */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams To Cups Formula</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Converting grams to cups depends on the ingredient&apos;s weight per cup and cup size. Since flour,
                sugar, butter, and other ingredients have different densities, the same number of grams can produce
                different cup measurements.
              </p>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ Grams per Cup</div>
                <div>Cups = Weight ÷ (Cup Size × Density)</div>
              </div>
              <p className="mb-2 text-sm text-gray-500">For example:</p>
              <ul className="mb-3 space-y-1.5 text-sm text-gray-600">
                <li>250g Flour: 250 ÷ 120 = <strong className="text-gray-900">2.08 cups</strong></li>
                <li>250g Sugar: 250 ÷ 200 = <strong className="text-gray-900">1.25 cups</strong></li>
                <li>250g Butter: 250 ÷ 227 = <strong className="text-gray-900">1.10 cups</strong></li>
                <li>250g Honey: 250 ÷ 340 = <strong className="text-gray-900">0.74 cups</strong></li>
              </ul>
              <p className="mb-2 text-sm text-gray-500">To convert in the opposite direction:</p>
              <div className="mb-3 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                Grams = Cups × Grams per Cup
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">So, 2 cups of flour × 120g = 240g.</p>
              <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">Why Density Matters</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                A cup measures volume, while grams measure mass. That&apos;s why 1 cup of flour does not weigh the
                same as 1 cup of sugar or honey. Using the correct ingredient-specific grams-per-cup value gives a
                more accurate conversion.
              </p>
              <div className="rounded-xl bg-white p-3 text-sm text-gray-700" style={{ border: `1px solid ${ACCENT}25` }}>
                Enter your grams, select an ingredient, and get the cup measurement instantly.
              </div>
            </section>

            {/* USA table */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">🇺🇸 USA Grams to Cups Conversion Table</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                In the US, recipes commonly use a 236.6 mL cup (often rounded to 240 mL). The gram weight changes
                from ingredient to ingredient because each ingredient has a different density.
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[560px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1/4 Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1/2 Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1 Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1.5 Cups</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">2 Cups</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["All-Purpose Flour", "31g", "63g", "125g", "188g", "250g"],
                      ["Granulated Sugar", "50g", "101g", "201g", "302g", "402g"],
                      ["Brown Sugar, Packed", "49g", "98g", "195g", "293g", "390g"],
                      ["Butter", "57g", "113g", "227g", "340g", "454g"],
                      ["Cocoa Powder", "21g", "43g", "85g", "128g", "170g"],
                      ["Chocolate Chips", "44g", "88g", "175g", "263g", "350g"],
                      ["Water", "59g", "118g", "237g", "356g", "473g"],
                      ["Milk", "61g", "122g", "244g", "366g", "488g"],
                      ["Honey", "85g", "170g", "340g", "510g", "680g"],
                    ].map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        {row.map((cell, j) => (
                          <td key={j} className={`px-4 py-2.5 ${j === 0 ? "font-medium text-gray-800" : j === 3 ? "font-semibold" : "text-gray-600"}`} style={j === 3 ? { color: ACCENT } : undefined}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                US baking tip: For flour and cocoa powder, use the spoon-and-level method when measuring by cup. For
                the most consistent results, a kitchen scale is better.
              </p>
            </section>

            {/* UK table */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">🇬🇧 UK Grams to Cups Conversion Table</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                The modern UK metric cup is generally 250 mL. Because it is slightly larger than the US cup, the
                gram equivalent can also be higher for the same ingredient.
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[560px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1/4 Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1/2 Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1 Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1.5 Cups</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">2 Cups</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Plain Flour", "33g", "67g", "133g", "200g", "266g"],
                      ["Granulated Sugar", "53g", "107g", "213g", "320g", "426g"],
                      ["Brown Sugar, Packed", "52g", "104g", "207g", "311g", "414g"],
                      ["Butter", "60g", "120g", "240g", "360g", "480g"],
                      ["Cocoa Powder", "25g", "50g", "100g", "150g", "200g"],
                      ["Chocolate Chips", "44g", "88g", "175g", "263g", "350g"],
                      ["Water", "62.5g", "125g", "250g", "375g", "500g"],
                      ["Milk", "63g", "126g", "252g", "378g", "504g"],
                      ["Honey", "88g", "175g", "350g", "525g", "700g"],
                    ].map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        {row.map((cell, j) => (
                          <td key={j} className={`px-4 py-2.5 ${j === 0 ? "font-medium text-gray-800" : j === 3 ? "font-semibold" : "text-gray-600"}`} style={j === 3 ? { color: ACCENT } : undefined}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                UK baking tip: UK recipes often prefer grams and milliliters, especially for accurate baking. When a
                recipe gives cups, always check whether it means a US or UK cup.
              </p>
            </section>

            {/* USA vs UK at a Glance */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">USA vs UK at a Glance</h2>
              <div className="overflow-hidden rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Measurement</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">🇺🇸 USA</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">🇬🇧 UK</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Standard cup", "~236.6 mL", "250 mL"],
                      ["Flour, 1 cup", "~125g", "~133g"],
                      ["Sugar, 1 cup", "~201g", "~213g"],
                      ["Butter, 1 cup", "227g", "~240g"],
                      ["Cocoa, 1 cup", "~85g", "~100g"],
                    ].map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                Important: Ingredient weight can vary with brand, packing, sifting, and measuring technique. For
                precise baking, grams are the most reliable option.
              </p>
            </section>

            {/* Cup Measurements Around the World */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Cup Measurements Around the World</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                A cup is a volume measurement, but its size is not exactly the same everywhere. This matters when
                following recipes from another country. A small difference in cup size can change the amount of
                flour, sugar, or other ingredients in a recipe.
              </p>
              <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">International Cup Size Guide</h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  { region: "🇺🇸 USA", size: "236.6 mL", use: "US recipes and baking" },
                  { region: "🇬🇧 UK", size: "250 mL*", use: "Modern metric recipes" },
                  { region: "🇦🇺 Australia", size: "250 mL", use: "Metric cooking and baking" },
                  { region: "🇨🇦 Canada", size: "250 mL", use: "Modern Canadian recipes" },
                  { region: "🇳🇿 New Zealand", size: "250 mL", use: "Metric recipes" },
                  { region: "🇯🇵 Japan", size: "200 mL", use: "Japanese recipes" },
                  { region: "🇵🇭 Philippines", size: "~240 mL", use: "Often follows US-style measurements" },
                ].map((row) => (
                  <div key={row.region} className="flex items-center justify-between rounded-xl border bg-white px-4 py-3" style={{ borderColor: `${ACCENT}20` }}>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">{row.region}</div>
                      <div className="text-xs text-gray-400">{row.use}</div>
                    </div>
                    <div className="text-sm font-semibold" style={{ color: ACCENT }}>{row.size}</div>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-400">
                *Older British recipes may use the 284 mL imperial cup, so the recipe&apos;s measurement system
                should always be checked.
              </p>
              <p className="mt-1 text-xs text-gray-400">
                <span className="font-semibold">Note:</span> The UK (United Kingdom) uses milliliters (mL), as it officially operates the metric system.
              </p>

              <h3 className="mb-2 mt-6 text-base font-bold text-gray-900">US Cup vs Metric Cup</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">The easiest way to understand the difference is to compare the two common systems:</p>
              <div className="overflow-hidden rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1 US Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1 Metric Cup</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["All-purpose flour", "~120g", "~125g"],
                      ["Granulated sugar", "~200g", "~210g"],
                      ["Butter", "227g", "~240g"],
                      ["Water", "~237g", "250g"],
                      ["Milk", "~237g", "~250g"],
                      ["Brown sugar, packed", "~220g", "~230g"],
                    ].map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                These values are approximate because ingredients can change weight depending on density, packing,
                sifting, and measuring method.
              </p>

              <h3 className="mb-2 mt-6 text-base font-bold text-gray-900">Cup, Tablespoon &amp; Teaspoon Sizes</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">Small measuring units can also vary between countries. The biggest difference is Australia&apos;s tablespoon.</p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[420px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Region</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1 Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1 Tbsp</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1 Tsp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["🇺🇸 USA", "236.6 mL", "14.8 mL", "4.9 mL"],
                      ["🇬🇧 UK", "250 mL*", "15 mL", "5 mL"],
                      ["🇦🇺 Australia", "250 mL", "20 mL", "5 mL"],
                      ["🇨🇦 Canada", "250 mL", "15 mL", "5 mL"],
                      ["🇯🇵 Japan", "200 mL", "15 mL", "5 mL"],
                    ].map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[2]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-400">*Modern UK metric recipes generally use a 250 mL cup; older imperial recipes can differ.</p>
              <h3 className="mb-2 mt-6 text-base font-bold text-gray-900">Why This Matters in Baking</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                A cup is volume, not weight. One cup of flour and one cup of sugar take up the same space but do not
                weigh the same. This is why a gram measurement can be more reliable when accuracy is important.
              </p>
              <div className="rounded-xl p-3 text-sm text-gray-700" style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}25` }}>
                Quick rule: If a recipe comes from another country and the cup size is unclear, check the recipe&apos;s
                measurement system before converting. For precise baking, use grams whenever possible.
              </div>
            </section>

            {/* Common Ingredients: Grams to Cups Chart */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Common Ingredients: Grams to Cups Chart</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                The weight of one cup depends on the ingredient&apos;s density and how it is measured. The values
                below are practical baking estimates for quick conversions.
              </p>
              <div className="overflow-hidden rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Measuring Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["All-Purpose Flour", "120g", "Spoon and level"],
                      ["Granulated Sugar", "200g", "Use level cups"],
                      ["Brown Sugar", "220g", "Pack firmly"],
                      ["Butter", "227g", "Standard butter"],
                      ["Powdered Sugar", "120g", "Sift for a lighter measure"],
                      ["Water", "237g", "Based on a US cup"],
                      ["Milk", "237g", "Approximate"],
                      ["Rolled Oats", "80g", "Regular rolled oats"],
                      ["White Rice", "185g", "Uncooked"],
                      ["Chocolate Chips", "160g", "Semi-sweet chips"],
                      ["Honey", "340g", "Dense liquid"],
                      ["Almonds", "140g", "Whole almonds"],
                      ["Cocoa Powder", "100g", "Unsweetened"],
                    ].map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row[1]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="mb-2 mt-6 text-base font-bold text-gray-900">Flour: Why Measuring Method Matters</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">Flour can give different gram weights depending on how tightly it is placed in the cup.</p>
              <div className="overflow-hidden rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Method</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Approx. Weight per Cup</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Spoon and level", "120–125g"],
                      ["Sifted flour", "~110g"],
                      ["Dip and sweep", "~140g"],
                    ].map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 mb-4 text-sm leading-relaxed text-gray-600">
                For the most consistent results, spoon flour into the cup and level the top. Avoid dipping the
                measuring cup directly into the flour, as this can pack in extra flour.
              </p>

              <h3 className="mb-2 mt-6 text-base font-bold text-gray-900">Sugar: Choose the Right Density</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">Sugar varieties have different weights because their crystals and texture are not the same.</p>
              <div className="overflow-hidden rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Sugar Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Approx. Weight per Cup</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Granulated sugar", "200g"],
                      ["Brown sugar, packed", "220g"],
                      ["Powdered sugar", "120g"],
                    ].map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Brown sugar should be packed tightly unless otherwise specified in the recipe. If there are lumps in
                the powdered sugar, it is best to sift it before using.
              </p>
            </section>

            {/* Common US Cup Fractions */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Common US Cup Fractions</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                For quick baking measurements, these common US cup sizes can be converted using the ingredient&apos;s
                grams-per-cup value:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[420px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Volume</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Flour</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Sugar</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Butter</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["¼ cup", "59 mL", "30g", "50g", "57g"],
                      ["⅓ cup", "79 mL", "40g", "67g", "76g"],
                      ["½ cup", "118 mL", "60g", "100g", "113g"],
                      ["⅔ cup", "158 mL", "80g", "133g", "151g"],
                      ["¾ cup", "177 mL", "90g", "150g", "170g"],
                      ["1 cup", "237 mL", "120g", "200g", "227g"],
                    ].map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        {row.map((cell, j) => (
                          <td key={j} className={`px-4 py-2.5 ${j === 0 ? "font-medium text-gray-800" : "text-gray-600"}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                Remember: These are approximate values. Flour, cocoa, brown sugar, and other ingredients can change
                weight depending on packing, sifting, moisture, and texture. For precise baking, a digital kitchen
                scale is the most reliable choice.
              </p>
            </section>

            {/* Weight vs volume */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Baking by Weight vs. Volume: Why Grams Are More Reliable</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Cups are convenient, but grams give bakers better control over the actual amount of an ingredient. A
                cup measures space, while a gram measures mass. Since ingredients can settle, compress, or vary in
                texture, the same cup measurement may not always contain the same amount.
              </p>
              <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">Why Weighing Ingredients Helps</h3>
              <ul className="mb-4 space-y-2 text-sm text-gray-600">
                {[
                  <><strong className="text-gray-900">More consistent results:</strong> The same gram amount can be repeated from one bake to the next.</>,
                  <><strong className="text-gray-900">Better ingredient ratios:</strong> Small differences in flour, sugar, or butter can change the texture and structure of baked goods.</>,
                  <><strong className="text-gray-900">Easy scaling:</strong> Weight makes recipe adjustments simple. For example, 250g can quickly become 375g or 500g without dealing with awkward fractions.</>,
                  <><strong className="text-gray-900">Fewer measuring tools:</strong> A scale lets you add several ingredients directly into one bowl, reducing dishes and preparation time.</>,
                  <><strong className="text-gray-900">Works across countries:</strong> Grams provide a common measurement for recipes from different regions without worrying about cup sizes.</>,
                  <><strong className="text-gray-900">Useful for nutrition tracking:</strong> Ingredients can be weighed directly in grams, making portion calculations easier.</>,
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">When Cups Still Work Well</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Volume measurements are perfectly practical for many liquids and less precise dishes, such as soups,
                sauces, and everyday cooking. They can also work well in baking when the recipe gives a clear
                measuring method.
              </p>
              <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">A Simple Way to Improve Accuracy</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                For dry ingredients such as flour and cocoa, use the spoon-and-level method if you are measuring by
                cup. For the most reliable results, place the mixing bowl on a digital scale, tare it to zero, and
                add each ingredient by weight.
              </p>
              <div className="rounded-xl p-3 text-sm text-gray-700" style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}25` }}>
                The bottom line: Cups are convenient for everyday cooking, but when baking depends on precise
                ingredient ratios, grams make the process more consistent, scalable, and repeatable.
              </div>
            </section>

            {/* Tips */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Tips for More Accurate Gram-to-Cup Conversions</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                A good conversion is not only about the formula. How an ingredient is measured can also change the
                result. These simple habits can make your conversions more reliable.
              </p>
              <div className="space-y-3">
                {[
                  { n: 1, title: "Use a Digital Kitchen Scale", body: "For baking, a scale is usually more reliable than a measuring cup. Choose one that measures in grams and has a tare function so you can reset the weight between ingredients." },
                  { n: 2, title: "Measure Flour Carefully", body: "Flour can become compacted inside a cup. For cup-based recipes, gently spoon flour into the cup and level the top rather than scooping directly from the bag. King Arthur Baking recommends this method and lists 120g as the weight of one cup of all-purpose flour." },
                  { n: 3, title: "Follow the Recipe's Measuring Instructions", body: "\"Sifted flour\" and \"flour, sifted\" can mean different things depending on how the recipe is written. If the recipe gives a specific measuring method, follow it rather than applying your own conversion." },
                  { n: 4, title: "Use One Measurement System", body: "When possible, convert the whole recipe into grams instead of switching between grams, cups, and spoons. This makes scaling and checking ingredient ratios much easier." },
                  { n: 5, title: "Check the Ingredient Type", body: "There is no universal grams-per-cup number. For example, all-purpose flour, almond flour, powdered sugar, and brown sugar have different weights per cup. Even different forms of the same ingredient can vary." },
                  { n: 6, title: "Treat Conversion Values as Estimates", body: "A cup-to-gram value can change with packing, particle size, moisture, and preparation. Conversion charts are useful for quick reference, but a scale is the better choice when recipe precision matters." },
                ].map((tip) => (
                  <div key={tip.n} className="flex gap-4 rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                    <div
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {tip.n}
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-gray-900">{tip.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{tip.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recipe examples */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams to Cups in Everyday Recipes</h2>
              <p className="mb-4 text-sm text-gray-500">Here are simple examples showing how a gram-to-cup conversion can be used in familiar baking recipes.</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { title: "Chocolate Chip Cookies", icon: "ri-cake-3-line", items: ["240g flour → about 2 cups", "200g granulated sugar → about 1 cup", "213g packed brown sugar → about 1 cup", "227g butter → about 1 cup", "170g chocolate chips → about 1 cup"] },
                  { title: "Pancakes", icon: "ri-donut-chart-line", items: ["180g flour → about 1½ cups", "50g sugar → about ¼ cup", "227g milk → about 1 cup", "57g butter → about ¼ cup"] },
                  { title: "Simple Cake", icon: "ri-cake-2-line", items: ["300g flour → about 2½ cups", "400g sugar → about 2 cups", "227g butter → about 1 cup", "227g milk → about 1 cup"] },
                ].map((r) => (
                  <div key={r.title} className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                    <div className="mb-2 flex items-center gap-2">
                      <i className={r.icon} style={{ color: ACCENT }} />
                      <h3 className="text-sm font-semibold text-gray-800">{r.title}</h3>
                    </div>
                    <ul className="space-y-1 text-xs leading-relaxed text-gray-500">
                      {r.items.map((it) => <li key={it}>{it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-400">
                Note: These examples use ingredient-specific weights, so they should not be treated as universal cup
                conversions.
              </p>
            </section>

            {/* Useful Tools for Recipe Conversions */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Useful Tools for Recipe Conversions</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                A good converter should make measurement changes quick without forcing users to calculate everything
                manually.
              </p>
              <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">What a Useful Converter Should Offer</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  <><strong className="text-gray-900">Instant calculation</strong> — enter grams and get the cup amount immediately.</>,
                  <><strong className="text-gray-900">Ingredient selection</strong> — choose flour, sugar, butter, honey, oats, and other ingredients.</>,
                  <><strong className="text-gray-900">Ingredient-specific values</strong> — each ingredient uses its own grams-per-cup value.</>,
                  <><strong className="text-gray-900">Reverse conversion</strong> — convert cups back to grams when needed.</>,
                  <><strong className="text-gray-900">Mobile-friendly design</strong> — easy to use while cooking.</>,
                  <><strong className="text-gray-900">No complicated math</strong> — the converter handles the calculation for you.</>,
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How Accurate */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">How Accurate Are Gram-to-Cup Conversions?</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                There is no single gram value that works for every ingredient. A cup measures volume, while grams
                measure mass, so the ingredient&apos;s density is what connects the two.
              </p>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                For example, King Arthur Baking lists 120g for one cup of all-purpose flour, while its ingredient
                chart gives different values for sugar, butter, chocolate chips, oats, and other foods.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                For packaged foods, the FDA also commonly presents serving sizes using a household measure together
                with the metric weight in grams, showing why both volume and weight can be useful reference points.
              </p>
            </section>

            {/* What is a gram / cup — quick recap cards */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border bg-white p-5" style={{ borderColor: `${ACCENT}20` }}>
                <h3 className="mb-2 text-lg font-bold text-gray-900">What Is a Gram?</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  A gram (g) is a metric unit of mass equal to one-thousandth of a kilogram. In baking, grams are
                  especially useful because weight is more consistent than cups or spoons — 100g of flour is always
                  100g, regardless of how it&apos;s packed.
                </p>
              </div>
              <div className="rounded-[24px] border bg-white p-5" style={{ borderColor: `${ACCENT}20` }}>
                <h3 className="mb-2 text-lg font-bold text-gray-900">What Is a Cup?</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  A cup is a volume measurement. In the US it&apos;s commonly treated as 240 mL in recipes (the legal
                  cup is 236.6 mL), while the modern UK metric cup is 250 mL. A cup measures space, not weight — so a
                  cup of flour weighs far less than a cup of sugar.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <details key={faq.q} open={i === 0} className="overflow-hidden rounded-2xl border bg-white" style={{ borderColor: `${ACCENT}20` }}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors hover:bg-gray-50">
                      <span className="text-sm font-semibold text-gray-800">{faq.q}</span>
                      <i className="ri-arrow-down-s-line flex-shrink-0 text-lg text-gray-400" />
                    </summary>
                    <div className="border-t px-4 pb-4 pt-3 text-sm leading-relaxed text-gray-600" style={{ borderColor: `${ACCENT}15` }}>
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Sources */}
            <section
              className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500"
              style={{ borderColor: `${ACCENT}15` }}
            >
              <h3 className="mb-2 font-bold text-base text-gray-600">
                Data &amp; Reference Sources
              </h3>

              <p className="mb-2">
                For a trustworthy conversion page, it is better to identify what each
                source is actually used for rather than claiming that every gram value
                comes from one database.
              </p>

              <ul className="space-y-1">
                <li>
                  <Link
                    href="https://www.kingarthurbaking.com/learn/ingredient-weight-chart"
                    rel="nofollow"
                    className="font-semibold text-gray-700 transition-colors hover:text-[#02b875]"
                  >
                    King Arthur Baking — Ingredient Weight Chart
                  </Link>{" "}
                  — useful for baking-specific cup-to-gram weights and measuring guidance.
                </li>

                <li>
                  <Link
                    href="https://fdc.nal.usda.gov/"
                    rel="nofollow"
                    className="font-semibold text-gray-700 transition-colors hover:text-[#02b875]"
                  >
                    USDA FoodData Central
                  </Link>{" "}
                  — useful for food composition and nutrient data.
                </li>

                <li>
                  <Link
                    href="https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label"
                    rel="nofollow"
                    className="font-semibold text-gray-700 transition-colors hover:text-[#02b875]"
                  >
                    FDA — Nutrition Facts &amp; Serving Sizes
                  </Link>{" "}
                  — useful for understanding household serving measures alongside metric
                  weights.
                </li>

                <li>
                  <Link
                    href="https://www.nist.gov/pml/owm"
                    rel="nofollow"
                    className="font-semibold text-gray-700 transition-colors hover:text-[#02b875]"
                  >
                    NIST — Office of Weights and Measures
                  </Link>{" "}
                  — useful for measurement standards and unit information.
                </li>
              </ul>

              <p className="mt-2">
                Best practice: Present your ingredient values as standard or approximate
                baking conversions, not as universally exact densities. This makes the
                content more accurate and avoids overstating what a source actually
                verifies.
              </p>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Ingredient Converters</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Each of these ingredients has its own full conversion guide, with charts for every common
                amount — not just 100 grams:
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { name: "All-purpose flour", href: "/flour" },
                  { name: "Sugar (all types)", href: "/sugar" },
                  { name: "Butter", href: "/butter" },
                  { name: "Milk", href: "/milk" },
                  { name: "Water", href: "/water" },
                  { name: "Rolled oats", href: "/oats" },
                  { name: "Rice", href: "/rice" },
                  { name: "Chocolate chips", href: "/chocolate-chips" },
                  { name: "Honey", href: "/honey" },
                  { name: "Almonds", href: "/almonds" },
                  { name: "Cocoa powder", href: "/cocoa-powder" },
                  { name: "Salt", href: "/salt" },
                  { name: "Baking powder", href: " /baking-powder" },
                  { name: "Vegetable oil", href: "/vegetable-oil" },
                  { name: "Potato Starch", href: "/potato-starch" }
                ].map((ing) => (
                  <Link
                    key={ing.href}
                    href={ing.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:text-[#02b875] hover:border-current"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <span className="truncate">{ing.name}</span>
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
