import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Grams to Cups Converter — FAQ Answers",
  description:
    "Answers to the most common grams-to-cups conversion questions — general conversions, plus flour, sugar, butter, milk, and rice specific FAQs.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Grams to Cups Converter — FAQ Answers",
    description:
      "How many grams are in a cup? How do I convert grams to cups for flour, sugar, butter, milk, or rice? Answered here.",
    url: "/faq",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grams to Cups Converter — FAQ Answers",
    description: "Answers to the most common grams-to-cups conversion questions.",
    images: ["/og-image.jpg"],
  },
};

type Faq = { q: string; a: string };

/* ─── General FAQs ───────────────────────────────────────────────────── */
const generalFaqs: Faq[] = [
  { q: "How to convert grams to cups?", a: "Divide the weight in grams by the ingredient's grams-per-cup value. For example, flour is 120g per cup, so 240g of flour ÷ 120 = 2 cups. Since every ingredient has a different density, you need the correct grams-per-cup figure for whatever you're measuring — a generic \"grams to cups\" formula doesn't exist without that ingredient-specific number." },
  { q: "How to convert cups to grams?", a: "Multiply the number of cups by the ingredient's grams-per-cup value. For example, 1½ cups of sugar × 200g = 300g. As with the reverse conversion, this only works accurately when you use the correct density for the specific ingredient." },
  { q: "How many grams are in a cup?", a: "It depends entirely on the ingredient — a cup measures volume, not weight, so different ingredients pack different amounts of mass into the same cup. As a reference: flour ≈ 120g, sugar ≈ 200g, butter ≈ 227g, milk ≈ 237g, honey ≈ 340g." },
  { q: "How many cups are in 100 grams?", a: "Again, it depends on the ingredient. 100g of flour ≈ 0.83 cup, 100g of sugar ≈ 0.5 cup, 100g of butter ≈ 0.44 cup, and 100g of milk ≈ 0.42 cup." },
  { q: "How many grams of flour are in a cup?", a: "1 cup of all-purpose flour is approximately 120 grams, using the standard spoon-and-level measuring method." },
  { q: "How to measure grams in cups?", a: "Weigh the ingredient in grams on a digital kitchen scale, then divide that number by the ingredient's grams-per-cup value to find the cup equivalent. If you don't have a scale, spoon the ingredient into a measuring cup and level off the top for the most consistent result." },
  { q: "How to convert grams to cups for baking?", a: "Use the specific ingredient's density (grams per cup) rather than a single universal number, since flour, sugar, butter, and liquids all convert differently. For the most reliable baking results, weighing ingredients directly on a scale removes the guesswork entirely." },
  { q: "How to convert grams to cups for flour?", a: "Divide the flour weight in grams by 120 (grams per cup). For example, 250g of flour ÷ 120 = about 2.08 cups. Spoon the flour into the cup and level it — don't scoop directly from the bag, which packs in extra flour and throws off the conversion." },
  { q: "How to measure grams in measuring cups?", a: "Measuring cups show volume, not weight, so they can only approximate a gram amount using the ingredient's known density. For an exact gram measurement, a digital kitchen scale is more reliable than reading a cup's fill line." },
  { q: "How much is 30 grams to cups?", a: "30g of flour ≈ ¼ cup." },
  { q: "How much is 40 grams to cups?", a: "40g of flour ≈ ⅓ cup." },
  { q: "How much is 50 grams to cups?", a: "50g of flour ≈ 0.42 cup (a little under ½ cup)." },
  { q: "How much is 60 grams to cups?", a: "60g of flour ≈ ½ cup." },
  { q: "How much is 80 grams to cups?", a: "80g of flour ≈ ⅔ cup." },
  { q: "How much is 90 grams to cups?", a: "90g of flour ≈ ¾ cup." },
  { q: "How much is 100 grams to cups?", a: "100g of flour ≈ 0.83 cup (about ⅚ cup)." },
  { q: "How much is 120 grams to cups?", a: "120g of flour = 1 cup." },
  { q: "How much is 150 grams to cups?", a: "150g of flour ≈ 1¼ cups." },
  { q: "How much is 180 grams to cups?", a: "180g of flour ≈ 1½ cups." },
  { q: "How much is 200 grams to cups?", a: "200g of flour ≈ 1⅔ cups." },
  { q: "How much is 250 grams to cups?", a: "250g of flour ≈ 2.08 cups (a little over 2 cups)." },
  { q: "How much is 300 grams to cups?", a: "300g of flour ≈ 2.5 cups." },
  { q: "How much is 400 grams to cups?", a: "400g of flour ≈ 3.33 cups." },
  { q: "How much is 450 grams to cups?", a: "450g of flour ≈ 3.75 cups." },
  { q: "How much is 500 grams to cups?", a: "500g of flour ≈ 4.17 cups." },
  { q: "How much is 600 grams to cups?", a: "600g of flour = 5 cups." },
  { q: "How many grams are in 2 cups?", a: "2 cups of flour = 240g. (For sugar, 2 cups = 400g; for butter, 2 cups = 454g.)" },
  { q: "How many grams are in 3 cups?", a: "3 cups of flour = 360g. (For sugar, 3 cups = 600g; for butter, 3 cups = 681g.)" },
  { q: "What is ¼ cup in grams?", a: "¼ cup of flour = 30g. (For sugar, ¼ cup = 50g; for butter, ¼ cup = 57g.)" },
  { q: "What is ¾ cup in grams?", a: "¾ cup of flour = 90g. (For sugar, ¾ cup = 150g; for butter, ¾ cup = 170g.)" },
];

/* ─── Flour FAQs ─────────────────────────────────────────────────────── */
const flourFaqs: Faq[] = [
  { q: "How do I convert grams of flour to cups?", a: "Divide the grams by 120 (the standard weight of 1 cup of all-purpose flour). For example, 180g ÷ 120 = 1.5 cups." },
  { q: "How do I convert cups of flour to grams?", a: "Multiply the number of cups by 120. For example, 2½ cups × 120 = 300g." },
  { q: "How much is 100 grams of flour to cups?", a: "100g of flour is approximately 0.83 cup, or a little under ⅞ cup." },
  { q: "How many cups are in 500 grams of flour?", a: "500g of flour is approximately 4.17 cups." },
  { q: "How many grams are in 4 cups of flour?", a: "4 cups of flour is 480g." },
];

/* ─── Sugar FAQs ─────────────────────────────────────────────────────── */
const sugarFaqs: Faq[] = [
  { q: "How much is 100 grams of sugar in cups?", a: "100g of granulated sugar is approximately 0.5 cup, based on 200g per cup." },
  { q: "How to convert 500 grams of sugar to cups?", a: "Divide 500 by 200 (grams per cup for granulated sugar): 500 ÷ 200 = 2.5 cups." },
];

/* ─── Butter FAQs ────────────────────────────────────────────────────── */
const butterFaqs: Faq[] = [
  { q: "How do I convert grams of butter to cups?", a: "Divide the grams by 227 (1 cup of butter = 227g = 2 US sticks). For example, 340g ÷ 227 ≈ 1.5 cups." },
  { q: "How much is 100 grams of butter in cups?", a: "100g of butter is approximately 0.44 cup." },
  { q: "How much is 150 grams of butter in cups?", a: "150g of butter is approximately 0.66 cup." },
  { q: "How much is 250 grams of butter in cups?", a: "250g of butter is approximately 1.1 cups." },
  { q: "How many grams are in half a cup of butter?", a: "½ cup of butter is 113g — equivalent to 1 standard US stick of butter." },
];

/* ─── Milk FAQs ──────────────────────────────────────────────────────── */
const milkFaqs: Faq[] = [
  { q: "How many cups is 100 grams of milk?", a: "100g of milk is approximately 0.42 cup, based on 237g per cup." },
  { q: "How many cups is 250 grams of milk?", a: "250g of milk is approximately 1.05 cups." },
  { q: "How to convert grams of milk to cups?", a: "Divide the grams by 237 (the approximate weight of 1 cup of milk). For example, 474g ÷ 237 = 2 cups." },
];

/* ─── Rice FAQs ──────────────────────────────────────────────────────── */
const riceFaqs: Faq[] = [
  { q: "How to convert grams of rice to cups?", a: "Divide the grams of uncooked rice by 185 (grams per cup). For example, 370g ÷ 185 = 2 cups. This applies to uncooked rice only — cooked rice weighs significantly more per cup since it absorbs water." },
  { q: "How many cups is 100g of rice?", a: "100g of uncooked rice is approximately 0.54 cup, based on 185g per cup." },
  { q: "How many grams are in 1 cup of rice?", a: "1 cup of uncooked white rice is approximately 185 grams." },
];

const categories = [
  { id: "general", title: "General FAQs", icon: "ri-questionnaire-line", faqs: generalFaqs, href: undefined, hrefLabel: undefined },
  { id: "flour", title: "Flour FAQs", icon: "ri-restaurant-line", faqs: flourFaqs, href: "/flour", hrefLabel: "Full Flour Converter" },
  { id: "sugar", title: "Sugar FAQs", icon: "ri-drop-line", faqs: sugarFaqs, href: "/sugar", hrefLabel: "Full Sugar Converter" },
  { id: "butter", title: "Butter FAQs", icon: "ri-cup-line", faqs: butterFaqs, href: "/butter", hrefLabel: "Full Butter Converter" },
  { id: "milk", title: "Milk FAQs", icon: "ri-water-flash-line", faqs: milkFaqs, href: "/milk", hrefLabel: "Full Milk Converter" },
  { id: "rice", title: "Rice FAQs", icon: "ri-restaurant-2-line", faqs: riceFaqs, href: "/rice", hrefLabel: "Full Rice Converter" },
];

/* ─── FAQPage JSON-LD (all categories combined) ─────────────────────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((c) =>
    c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }))
  ),
};

export default function FaqPage() {
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
              <i className="ri-questionnaire-line" /> {categories.reduce((n, c) => n + c.faqs.length, 0)} questions answered
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Grams to Cups Converter — FAQ Answers
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Quick answers to the grams-to-cups questions people search for most — general conversions,
              plus flour, sugar, butter, milk, and rice specific FAQs.
            </p>
          </div>

          {/* jump nav */}
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-current"
                style={{ borderColor: `${ACCENT}30`, color: ACCENT }}
              >
                <i className={c.icon} /> {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">

            {/* Reference values note */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <p className="text-sm leading-relaxed text-gray-600">
                <em>
                  All answers below use the site&apos;s standard reference values: all-purpose flour at
                  120g/cup, granulated sugar at 200g/cup, butter at 227g/cup, milk at 237g/cup, and rice at
                  185g/cup, based on a US customary cup (236.6 mL). Where a general question doesn&apos;t
                  specify an ingredient, flour (120g/cup) is used as the default example, since it&apos;s
                  the most commonly searched conversion — always swap in the correct grams-per-cup value
                  for your actual ingredient.
                </em>
              </p>
            </section>

            {/* Category sections */}
            {categories.map((c) => (
              <section key={c.id} id={c.id} className="scroll-mt-24">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h2 className="flex items-center gap-2 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ backgroundColor: `${ACCENT}14`, color: ACCENT }}>
                      <i className={c.icon} />
                    </span>
                    {c.title}
                  </h2>
                  {c.href && (
                    <Link
                      href={c.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold"
                      style={{ color: ACCENT }}
                    >
                      {c.hrefLabel} <i className="ri-arrow-right-line" />
                    </Link>
                  )}
                </div>
                <div className="space-y-2">
                  {c.faqs.map((faq, i) => (
                    <details
                      key={faq.q}
                      className="overflow-hidden rounded-2xl border bg-white"
                      style={{ borderColor: `${ACCENT}20` }}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors hover:bg-gray-50">
                        <span className="text-sm font-semibold text-gray-800">
                          <span className="mr-2 text-xs font-normal text-gray-400">{i + 1}.</span>
                          {faq.q}
                        </span>
                        <i className="ri-arrow-down-s-line flex-shrink-0 text-lg text-gray-400" />
                      </summary>
                      <div className="border-t px-4 pb-4 pt-3 text-sm leading-relaxed text-gray-600" style={{ borderColor: `${ACCENT}15` }}>
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}

            {/* Cross-link footer */}
            <section className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>
              <h3 className="mb-2 text-xl font-semibold text-gray-600">More Ingredient Converters</h3>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { name: "All-purpose flour", href: "/flour" },
                  { name: "Sugar (all types)", href: "/sugar" },
                  { name: "Butter", href: "/butter" },
                  { name: "Milk", href: "/milk" },
                  { name: "Water", href: "/water" },
                  { name: "Rice", href: "/rice" },
                  { name: "Oats", href: "/oats" },
                  { name: "Honey", href: "/honey" },
                  { name: "Full ingredient list", href: "/ingredients" },
                ].map((ing) => (
                  <Link
                    key={ing.href}
                    href={ing.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2 font-medium text-gray-700 transition-colors hover:text-[#02B875] hover:border-current"
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