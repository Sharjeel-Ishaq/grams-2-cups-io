import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Grams of Powdered Sugar to Cups Converter",
  description:
    "Convert grams of powdered sugar to cups instantly. Full conversion chart, sifted vs. unsifted guidance, and sourcing notes from King Arthur Baking and BAKERpedia.",
  alternates: { canonical: "/powdered-sugar" },
  openGraph: {
    title: "Grams of Powdered Sugar to Cups Converter",
    description:
      "1 US cup of powdered sugar ≈ 120 g — a full gram-to-cup chart, plus sifting guidance and sourcing notes.",
    url: "/powdered-sugar",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grams of Powdered Sugar to Cups Converter",
    description: "Convert grams of powdered sugar to cups instantly — 120g = 1 cup.",
    images: ["/og-image.jpg"],
  },
};

/* ─── Ingredient data for the converter tool (single ingredient) ────── */
const ingredients: Ingredient[] = [
  { name: "Powdered Sugar", slug: "powdered-sugar", gramsPerCup: 120, notes: "Sift before measuring" },
];

/* ─── Hero quick-reference badges ──────────────────────────────────── */
const heroBadges = [
  { label: "¼ Cup", value: "30 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "60 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "120 g", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "240 g", icon: "ri-restaurant-line" },
];

/* ─── Powdered Sugar Conversion Chart ────────────────────────────────── */
const conversionChart = [
  ["25 g", "0.21 cup", "about 3½ tbsp"],
  ["30 g", "0.25 cup", "¼ cup"],
  ["40 g", "0.33 cup", "⅓ cup"],
  ["50 g", "0.42 cup", "about ⅜ cup"],
  ["60 g", "0.50 cup", "½ cup"],
  ["75 g", "0.63 cup", "about ⅝ cup"],
  ["90 g", "0.75 cup", "¾ cup"],
  ["100 g", "0.83 cup", "about ⅞ cup"],
  ["120 g", "1.00 cup", "1 cup"],
  ["150 g", "1.25 cups", "1¼ cups"],
  ["180 g", "1.50 cups", "1½ cups"],
  ["200 g", "1.67 cups", "1⅔ cups"],
  ["240 g", "2.00 cups", "2 cups"],
  ["250 g", "2.08 cups", "about 2⅛ cups"],
  ["300 g", "2.50 cups", "2½ cups"],
  ["400 g", "3.33 cups", "about 3⅓ cups"],
  ["500 g", "4.17 cups", "about 4⅙ cups"],
];

/* ─── FAQs ───────────────────────────────────────────────────────────── */
const faqs = [
  { q: "How many grams are in 1 cup of powdered sugar?", a: "For this converter, 1 cup is approximately 120 grams. The actual weight can vary depending on the product and how it is measured." },
  { q: "How many cups are 100 grams of powdered sugar?", a: "100 grams is about 0.83 cup, or approximately ⅞ cup, using the 120 g/cup working value." },
  { q: "How many grams are in ½ cup of powdered sugar?", a: "Using the same conversion, ½ cup is about 60 grams." },
  { q: "How many grams are in ¼ cup of powdered sugar?", a: "¼ cup is about 30 grams using the 120 g/cup reference." },
  { q: "Should powdered sugar be packed into a cup?", a: "Usually, no. Powdered sugar is generally measured lightly and leveled unless the recipe gives different instructions. Packing can increase the amount of sugar in the cup." },
  { q: "Is sifted powdered sugar the same as unsifted powdered sugar?", a: "Not necessarily by volume. Sifting loosens the powder and removes or breaks up clumps, so the same cup measurement can contain a different weight." },
  { q: "Is powdered sugar the same as granulated sugar?", a: "No. They are different forms of sugar with different textures and different weights per cup. They should not automatically be substituted cup-for-cup." },
];

/* ─── FAQ JSON-LD ────────────────────────────────────────────────────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PowderedSugarGramsToCups() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div
              className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
            >
              <i className="ri-snowy-line" /> Powdered sugar-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Grams of Powdered Sugar to Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Converting grams of powdered sugar to cups is easy once you know the approximate weight of a
              cup. For everyday conversions in the kitchen, use this guide about 120 grams of powdered
              sugar per US cup.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
              Powdered sugar is also known as confectioner&apos;s sugar or sugar sprinkles. Because it is
              very fine and settles differently depending on the measuring method, a cup does not always
              contain exactly the same amount. If a recipe specifies the weight in grams, using a kitchen
              scale is the most reliable method.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another ingredient?{" "}
              <Link href="/" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                Convert Grams To Cups
              </Link>
              .
            </p>
          </div>

          {/* quick reference badges */}
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {heroBadges.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border bg-white/80 p-3 text-left backdrop-blur-sm"
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

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">

            {/* Conversion of grams to cups + Tool */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Conversion of Grams of Powdered Sugar to Cups</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">For a quick estimate, use:</p>
              <div className="mb-3 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                Cups = grams ÷ 120
              </div>
              <p className="mb-2 text-sm text-gray-500">Examples:</p>
              <ul className="mb-4 space-y-1.5 text-sm text-gray-600">
                {[
                  "30 g ≈ ¼ Cup",
                  "60 g ≈ ½ Cup",
                  "90 g ≈ ¾ Cup",
                  "100 g ≈ 0.83 cups",
                  "120 g ≈ 1 Cup",
                  "150 g ≈ 1¼ cups",
                  "200 g ≈ 1⅔ Cups",
                  "250 g ≈ 2⅛ cups",
                  "500 g ≈ 4⅙ cups",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                These figures are useful estimates for kitchen use, not laboratory measurements. The actual
                weight of a cup can vary depending on the product, moisture content, sieving, and measuring
                method.
              </p>
              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            {/* How many cups 100g */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How Many Cups Are Equivalent to 100 Grams of Powdered Sugar?</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                100 grams of powdered sugar is approximately equivalent to 0.83 US cups, when using a
                working value of 120g per cup. That is approximately ⅞ cup.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                When preparing a recipe where the sugar affects the final consistency, directly weighing
                out 100 grams is more reliable than attempting to measure 0.83 cups.
              </p>
            </section>

            {/* Conversion chart */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Powdered Sugar Conversion Chart</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[420px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Approximate Measure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {conversionChart.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row[1]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Why Powdered Sugar Weighs Less */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why Powdered Sugar Weighs Less Than Granulated Sugar</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Powdered sugar is produced by grinding sugar into very small particles. Commercially
                available products sometimes contain small amounts of an anti-caking agent to ensure the
                powder remains free-flowing. Due to its fine texture, it exhibits very different volume
                properties than ordinary granulated sugar.
              </p>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Therefore, you should not use the same value for grams per cup for both varieties.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                For comparison:{" "}
                <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>
                  Granulated sugar
                </Link>{" "}
                typically weighs about 200 g per cup, while powdered sugar is significantly lighter.
                Therefore, directly substituting granulated sugar can change the amount of sugar needed in
                a recipe.
              </p>
            </section>

            {/* Does Sifting Change the Weight */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Does Sifting Change the Weight?</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Yes. Sifting breaks up clumps and loosens the powder, which can change how much sugar
                occupies a cup.
              </p>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">This is why recipe wording matters.</p>
              <ul className="mb-3 space-y-1.5 text-sm text-gray-600">
                <li>&quot;1 cup powdered sugar, sifted&quot; generally means measure the sugar first and then sift it.</li>
                <li>&quot;1 cup sifted powdered sugar&quot; means to sift the sugar first and then measure it.</li>
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                If your recipe specifies the weight in grams, the distinction is much less important, as
                the quantity is already indicated by the mass.
              </p>
            </section>

            {/* How to Measure */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure Powdered Sugar in Cups</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">If you do not have a scale, use a consistent measuring method:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Break up visible lumps.",
                  "Spoon the powdered sugar gently into the measuring cup.",
                  "Do not press or pack it down unless the recipe specifically tells you to.",
                  "Level the top with a straight edge.",
                  "Follow the recipe's instructions if it says the sugar should be sifted before or after measuring.",
                  "Avoid filling the cup with a firm spoon through a container of settled powdered sugar. This can result in a different weight than a loose spoonful.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Powdered vs Granulated */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Powdered Sugar vs. Granulated Sugar</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Powdered sugar and{" "}
                <Link href="/sugar" className="font-semibold hover:underline" style={{ color: ACCENT }}>
                  granulated sugar
                </Link>{" "}
                are both forms of sugar, but they are not interchangeable by volume.
              </p>
              <p className="mb-1 text-sm text-gray-500">For example, using the working values in this guide:</p>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-3 text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>1 cup powdered sugar ≈ 120 g</div>
                <div>1 cup granulated sugar ≈ 200 g</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So replacing one cup with one cup does not preserve the same weight. If you are
                substituting one type of sugar for another, check the recipe and consider using weight
                rather than volume.
              </p>
            </section>

            {/* When Scale Is Better */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">When a Kitchen Scale Is Better</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                A cup is convenient for everyday recipes, but weighing powdered sugar is the better choice
                when consistency matters. Use a scale when:
              </p>
              <ul className="mb-3 space-y-2 text-sm text-gray-600">
                {[
                  "the recipe is written in grams;",
                  "you are doubling or halving a recipe;",
                  "you are making a large batch of frosting;",
                  "you are preparing a recipe where texture needs to be consistent;",
                  "different people need to reproduce the same recipe.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                A scale also removes uncertainty caused by settling, clumping, and different measuring
                habits.
              </p>
            </section>

            {/* Formula */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Powdered Sugar Conversion Formula</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">For this converter, the working reference is:</p>
              <div className="mb-3 rounded-xl p-3 text-sm font-semibold text-gray-800" style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}30` }}>
                1 US cup powdered sugar ≈ 120 g
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = grams ÷ 120</div>
                <div>Grams = cups × 120</div>
              </div>
              <p className="mb-2 text-sm text-gray-500">For example:</p>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                180 g ÷ 120 = 1.5 cups. So 180 grams is approximately 1½ cups using this conversion.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                Because volume measurements can vary, these results should be treated as practical
                estimates.
              </p>
            </section>

            {/* How Accurate Is 120g */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How Accurate Is 120 g per Cup?</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                The 120 g/cup figure is a rounded kitchen reference, not a universal fixed density.
                Established baking references can use slightly different values depending on how the
                ingredient is measured. For example,{" "}
                <a
                  href="https://www.kingarthurbaking.com/learn/ingredient-weight-chart"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold hover:underline"
                  style={{ color: ACCENT }}
                >
                  King Arthur Baking&apos;s ingredient weight chart
                </a>{" "}
                currently lists 113 g for 1 cup of unsifted confectioners&apos; sugar and recommends
                weighing ingredients for the best results.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                For a simple online converter, 120 g/cup provides an easy rounded number. If your recipe
                was tested using a specific brand or gives its own gram weight, follow the recipe&apos;s
                measurement instead.
              </p>
            </section>

            {/* About Powdered Sugar */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">About Powdered Sugar</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Powdered sugar is a finely ground form of sugar used for foods such as frosting, icing,
                glazes, and some baked goods. Its fine particles allow it to blend quickly into mixtures
                where a smooth texture is wanted.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                <a
                  href="https://bakerpedia.com/ingredients/powdered-sugar/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold hover:underline"
                  style={{ color: ACCENT }}
                >
                  BAKERpedia
                </a>{" "}
                provides additional baking-industry information about powdered sugar, including its fine
                particle structure, production, and use in food applications. This is also why powdered
                sugar behaves differently from ordinary granulated sugar when measured by volume.
              </p>
            </section>

            {/* Quick Reference */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <p className="mb-3 text-sm text-gray-500">For the 120 g/cup working conversion:</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "30 g ≈ ¼ cup",
                  "60 g ≈ ½ cup",
                  "90 g ≈ ¾ cup",
                  "100 g ≈ 0.83 cup",
                  "120 g ≈ 1 cup",
                  "150 g ≈ 1¼ cups",
                  "200 g ≈ 1⅔ cups",
                  "250 g ≈ 2⅛ cups",
                  "300 g ≈ 2½ cups",
                  "500 g ≈ 4⅙ cups",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
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

            {/* Sources and Measurement Notes */}
            <section className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>
              <p className="mb-2 font-semibold text-gray-600">Sources and Measurement Notes</p>
              <p className="mb-2">
                The conversion on this page uses 120 g per US cup as a rounded practical reference.
              </p>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="https://www.kingarthurbaking.com/learn/ingredient-weight-chart"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="font-semibold hover:underline"
                    style={{ color: ACCENT }}
                  >
                    King Arthur Baking&apos;s Ingredient Weight Chart
                  </a>
                  <span> — lists 113 g for one cup of unsifted confectioners&apos; sugar and recommends weighing ingredients for best results.</span>
                </li>
                <li>
                  <a
                    href="https://bakerpedia.com/ingredients/powdered-sugar/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="font-semibold hover:underline"
                    style={{ color: ACCENT }}
                  >
                    BAKERpedia&apos;s Powdered Sugar Guide
                  </a>
                  <span> — additional technical information about powdered sugar and its baking applications.</span>
                </li>
              </ul>
            </section>

            {/* The Bottom Line */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                For a quick conversion, use about 120 grams of powdered sugar per US cup. That gives you:
              </p>
              <ul className="mb-3 space-y-1.5 text-sm text-gray-600">
                {["100 g ≈ 0.83 cup", "120 g ≈ 1 cup", "200 g ≈ 1⅔ cups", "500 g ≈ 4⅙ cups"].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                For everyday baking, these estimates are useful. When the recipe needs to be highly
                consistent, use a digital scale and measure the powdered sugar directly in grams.
              </p>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
