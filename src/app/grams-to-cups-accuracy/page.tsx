import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Grams-to-Cups Conversion Accuracy: Why Grams Per Cup Vary by Source",
  description:
    "Why do different sites give different grams-per-cup numbers for the same ingredient? A comparison of USDA FoodData Central and FAO/INFOODS density data, and how to pick a reliable conversion.",
  alternates: {
    canonical: "/grams-to-cups-accuracy",
  },
  openGraph: {
    title: "Grams-to-Cups Conversion Accuracy: Why Grams Per Cup Vary by Source",
    description:
      "A comparison of USDA FoodData Central and FAO/INFOODS density data — where grams-per-cup sources agree, where they diverge, and why.",
    url: "/grams-to-cups-accuracy",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/images/grams-to-cups-accuracy.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grams-to-Cups Conversion Accuracy: Why Grams Per Cup Vary by Source",
    description: "Where reputable grams-per-cup sources agree, where they diverge, and why.",
    images: ["/images/grams-to-cups-accuracy.webp"],
  },
};

/* ─── FAO/INFOODS density comparison table ──────────────────────────── */
const densityTable = [
  { name: "Butter", density: "0.911", grams: "~216 g" },
  { name: "Vegetable/cooking oils (various)", density: "0.88–0.96", grams: "~208–227 g" },
  { name: "Olive oil", density: "0.91–0.92", grams: "~215–218 g" },
  { name: "Table salt", density: "1.217–1.38 (varies by source)", grams: "~288–327 g" },
  { name: "Baking powder", density: "0.9", grams: "~213 g" },
  { name: "Sodium bicarbonate (crystal)", density: "2.2", grams: "Not a valid cup figure — see note below" },
  { name: "Rolled oats", density: "0.30–0.38", grams: "~71–90 g" },
  { name: "White sugar", density: "0.88–0.95", grams: "~208–225 g" },
  { name: "Powdered sugar", density: "0.56", grams: "~133 g" },
  { name: "Almonds", density: "0.46", grams: "~109 g" },
  { name: "Wheat flour (various sources)", density: "0.48–0.67", grams: "~114–159 g" },
];

/* ─── Four real reasons ──────────────────────────────────────────────── */
const fourReasons = [
  { title: "Measured vs. derived.", body: "A genuinely kitchen-tested chart may weigh an actual measurement technique — spoon-and-level, packed, or sifted — in a real cup. A density database instead reports mass per milliliter under controlled conditions, and the \"cup weight\" is calculated afterward by simple multiplication. These are two different processes answering a related but distinct question." },
  { title: "Bulk density vs. true density.", body: "As the baking soda example shows, a powder's material density and its real-world bulk density (with air gaps included) can differ substantially. Any source that doesn't clearly state which one it's reporting is a source to treat cautiously." },
  { title: "Fill technique isn't always disclosed.", body: "Sifted powdered sugar vs. unsifted can differ meaningfully; packed brown sugar vs. loose can differ even more. When a chart doesn't say which technique it assumes, the number is a starting estimate, not a guarantee." },
  { title: "The cup itself isn't universal.", body: "US customary (236.6 mL), US legal (240 mL), metric (250 mL), and other regional cup definitions are all genuinely different volumes. A source using a 250 mL metric cup will report a heavier \"cup\" for the same ingredient than one using the US customary cup, independent of any density disagreement at all." },
];

/* ─── How to choose a reliable conversion ───────────────────────────── */
const howToChoose = [
  "Prefer a measured kitchen weight when the source clearly explains its method.",
  "Check which cup standard the source uses.",
  "For dry ingredients, check whether the value assumes spoon-and-level, scooping, packing, or sifting.",
  "For density-based conversions, confirm whether the value represents bulk density or material/mass density.",
  "Make sure the ingredient form matches the density data — for example, whole, chopped, sifted, or ground.",
  "Don't mix incompatible assumptions from different sources within the same recipe.",
];

export default function GramsToCupsAccuracy() {
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
              <i className="ri-shield-check-line" /> USDA vs. FAO/INFOODS, compared
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Grams-to-Cups Conversion Accuracy: Why Grams Per Cup Vary by Source
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-md">
              <Link href="/" className="font-semibold transition-colors duration-200 underline underline-offset-2" style={{ color: ACCENT }}>
                Grams-to-cups conversions
              </Link>{" "}
              look simple, but their accuracy depends on more than arithmetic. A
              cup measures volume while grams measure mass, so converting between them requires an
              ingredient-specific density or a measured cup weight. That is why reputable sources can give
              different grams-per-cup values for the same ingredient without necessarily making a mistake —
              it&apos;s the same reason you can look up{" "}
              <Link href="/100-grams-to-cups" className="font-semibold transition-colors duration-200 underline underline-offset-2" style={{ color: ACCENT }}>
                100 grams to cups
              </Link>{" "}
              for butter on three different sites and get three different answers.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
              Look up &quot;grams in a cup of butter&quot; on three different sites and you can get three
              different answers — 226 g, 227 g, 240 g — all presented with confidence. This page explains
              where those differences actually come from, using two credible reference points —{" "}
              <Link className="font-semibold transition-colors duration-200 underline underline-offset-2" style={{ color: ACCENT }}
                href="https://fdc.nal.usda.gov/food-search?component=1299"
                rel="nofollow"
              >
                USDA FoodData Central
              </Link>{" "}
              and the{" "}
              <Link className="font-semibold transition-colors duration-200 underline underline-offset-2" style={{ color: ACCENT }}
                href="https://www.fao.org/food-composition/tables-and-databases/detail/(global--2012)-fao-infoods-density-database---version-2/en"
                rel="nofollow"
              >
                FAO/INFOODS Density Database
              </Link>{" "}
              — and shows where they agree, where they genuinely diverge, and why.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <figure className="overflow-hidden rounded-[24px] border bg-white" style={{ borderColor: `${ACCENT}20` }}>
          <Image
            src="/images/grams-to-cups-accuracy.webp"
            alt="Measuring ingredients accurately for grams-to-cups conversions"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />
        </figure>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">

            {/* A Cup Measures Space, Not Substance */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">A Cup Measures Space, Not Substance</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                A US customary cup is approximately 236.6 mL, but not every &quot;cup&quot; used around the
                world has the same volume. What varies within that space is how much mass fits into it, and
                that depends on a property called density (grams per milliliter). Two organizations can
                each publish a well-sourced density figure for the same ingredient and still land on
                different cup weights, because density itself isn&apos;t a single fixed number for most
                foods — it shifts with moisture, particle size, temperature, and how the material was
                measured in the first place.
              </p>
            </section>

            {/* Formula */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams-to-Cups Conversion Formula</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">For a US customary cup, the underlying math is straightforward:</p>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>cups = grams ÷ (density × 236.6)</div>
                <div>grams = cups × density × 236.6</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                The formula itself is straightforward. The difficult part is choosing a density value that
                represents the same ingredient form and measurement conditions as the cup measurement being
                converted.
              </p>
            </section>

            {/* How Accurate */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How Accurate Are Grams-to-Cups Conversions?</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                The arithmetic behind a grams-to-cups conversion can be precise, but the practical accuracy
                depends on the inputs. If the ingredient&apos;s density, cup volume, and measurement
                conditions are known, the conversion can be calculated consistently. The uncertainty
                usually comes from the density value itself and from how the ingredient behaves when placed
                in a measuring cup.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                For liquids and relatively uniform ingredients, density-based conversions are generally more
                reproducible. For flour, powdered sugar, oats, nuts, and other particulate foods, packing,
                particle size, sifting, and ingredient form can cause greater variation.
              </p>
            </section>

            {/* Accuracy vs Precision */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Accuracy vs. Precision</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Accuracy means how close a measurement is to the intended or reference value. Precision
                means how consistently the same measurement can be repeated. A grams-to-cups conversion can
                be mathematically precise while still being less accurate in practice if the density value
                or packing assumption does not match the ingredient being measured.
              </p>
            </section>

            {/* Two Reference Sources */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Two Reference Sources, Compared</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                <Link href="https://fdc.nal.usda.gov/food-search?component=1299" rel="nofollow" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                  USDA FoodData Central
                </Link>{" "}
                is the U.S. government&apos;s food and nutrient composition database.
                It contains several types of food records, and available portion and weight information can
                vary by data type and source.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                <Link href="https://www.fao.org/food-composition/tables-and-databases/detail/(global--2012)-fao-infoods-density-database---version-2/en" rel="nofollow" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                  FAO/INFOODS Density Database (Version 2.0)
                </Link>{" "}
                , published by the UN Food and Agriculture
                Organization, compiles food-density information from multiple national and institutional
                sources. Its records can include different kinds of density measurements, including mass
                density and bulk density, so individual values should not automatically be treated as
                interchangeable. This makes the database particularly useful for understanding why reported
                food densities can vary between sources.
              </p>
              <p className="mb-4 text-sm text-gray-500">
                Converting a density figure (g/mL) into grams-per-US-cup means multiplying by 236.6:
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[560px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">FAO/INFOODS Reported Density Value (g/mL)</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Computed Grams per Cup</th>
                    </tr>
                  </thead>
                  <tbody>
                    {densityTable.map((row, i) => (
                      <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.name}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.density}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.grams}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm text-gray-500">A few of these are worth pausing on.</p>
            </section>

            {/* Where Values Diverge */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Where Reported Values Genuinely Diverge</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Almonds show one of the widest gaps in this comparison. Common baking references typically
                put a cup of whole almonds around 140–143 grams. FAO&apos;s listed density computes to
                roughly 109 grams per cup — a difference of over 20%. The FAO entry does not provide enough
                information in the summary table to establish that its density value represents the same
                physical form and packing conditions as the whole-almond cup weights reported by kitchen
                references. Particle arrangement, ingredient form, and measurement conditions can all
                affect volume-based measurements, so the two figures should not automatically be treated as
                directly comparable.
              </p>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Baking soda is a case where a density value and a cup weight can be very different things.
                FAO lists sodium bicarbonate&apos;s density as 2.2 g/mL. A sodium-bicarbonate density value
                should not automatically be interpreted as the bulk density of baking soda in a household
                measuring cup. FAO/INFOODS distinguishes mass density from bulk density, and that
                distinction is particularly important for powders because the air spaces between particles
                affect how much mass fits into a given volume. Applying a material-density value directly
                to a household cup can therefore produce a physically inappropriate grams-per-cup estimate
                — one far higher than the practical cup weights normally used in cooking references.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                Table salt spans a real range even within a single database. FAO&apos;s own entries for salt
                range from about 1.217 g/mL to 1.38 g/mL, which computes to roughly 288 to 327 grams per
                cup. Crystal size and packing can create substantial additional differences between types
                of salt, particularly when comparing fine table salt with coarse or flaked varieties.
              </p>
            </section>

            {/* Where Sources Line Up */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Where the Sources Line Up Closely</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                It&apos;s worth noting where the disagreement is small, because it isn&apos;t universal:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  <><strong className="text-gray-900">Cooking oils cluster tightly</strong> — most common oils fall in a narrow 0.91–0.93 g/mL band, meaning different sources land within a few grams of each other per cup.</>,
                  <><strong className="text-gray-900">Granulated sugar is similarly consistent</strong> — the compiled range (0.88–0.95 g/mL) overlaps comfortably with the ~200 g/cup figure used across most baking references.</>,
                  <><strong className="text-gray-900">
                    Butter is closer than it might first appear
                  </strong>{" "}
                    — 0.911 g/mL (≈216 g/cup) versus a commonly cited figure of 227 g/cup is
                    roughly a 5% gap. The difference reflects the fact that these figures may
                    come from different measurement methods, source data, or assumptions about
                    the ingredient and cup measurement.{" "}
                    <Link className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}
                      href="https://www.usdairy.com/dairy-nutrition/products/butter"
                      rel="nofollow"
                    >
                      U.S. Dairy
                    </Link>{" "}
                    also notes that 1 tablespoon of butter is 14 g, which works out to
                    approximately 224 g per 16-tablespoon U.S. cup.</>,
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Four Real Reasons */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why the Same Ingredient Gets Different Numbers: Four Real Reasons</h2>
              <div className="mt-4 space-y-3">
                {fourReasons.map((r, i) => (
                  <div key={r.title} className="flex gap-4 rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                    <div
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-gray-900">{r.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{r.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* For Liquids Specifically */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">For Liquids Specifically</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                For homogeneous liquids, density-based conversions are generally more reproducible because
                particle packing is not a factor. However, temperature, concentration, moisture content,
                and product formulation can still affect density, so &quot;liquid&quot; doesn&apos;t
                automatically mean &quot;fixed number&quot; either — it just means one major source of
                variation (packing) is off the table.
              </p>
            </section>

            {/* The Practical Rule */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Practical Rule</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                None of this means grams-per-cup charts are unreliable — it means they need to be used
                consistently rather than mixed. The bigger problem is mixing incompatible measurement
                assumptions within the same recipe — for example, using a packed flour weight from one
                source and a loosely measured volume assumption from another. Pick one reasonably
                authoritative source for a given conversion, note whether it&apos;s reporting bulk or true
                density, and stay consistent within a single recipe rather than chasing the &quot;most
                accurate&quot; number ingredient by ingredient.
              </p>
            </section>

            {/* How to Choose */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Choose a Reliable Grams-to-Cups Conversion</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {howToChoose.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* The Bottom Line */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                There is no single grams-to-cups accuracy figure that applies to every ingredient. The
                conversion formula is straightforward, but its practical accuracy depends on the
                ingredient&apos;s density, physical form, measurement method, and cup definition. When
                different reputable sources give different grams-per-cup values, the right question is not
                simply &quot;Which number is correct?&quot; but &quot;What was measured, how was it
                measured, and under which assumptions?&quot;
              </p>
            </section>

            {/* Related pages */}
            <section className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>
              <p className="mb-2 font-semibold text-gray-600">Related</p>
              <ul className="space-y-1.5">
                <li>
                  <Link href="/" className="font-semibold transition-colors duration-200 hover:underline" style={{ color: ACCENT }}>
                    Grams To Cups Converter
                  </Link>
                  <span> — convert any ingredient and any amount instantly.</span>
                </li>
                <li>
                  <Link href="/100-grams-to-cups" className="font-semibold transition-colors duration-200 hover:underline" style={{ color: ACCENT }}>
                    100 grams to cups
                  </Link>
                  <span> — the quick-reference chart this page&apos;s examples are drawn from.</span>
                </li>
              </ul>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Explore Ingredient Converters</h2>
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
