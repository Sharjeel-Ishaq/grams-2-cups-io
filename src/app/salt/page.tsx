import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleConverter from "@/components/SimpleConverter";
import type { Ingredient } from "@/types";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Salt Grams to Cups Converter | Table, Kosher & Sea Salt",
  description:
    "Convert salt from grams to cups instantly. Includes table salt, kosher salt, sea salt, and why salt type changes the conversion more than other ingredients.",
  alternates: { canonical: "/salt" },
  openGraph: {
    title: "Salt Grams to Cups Converter",
    description:
      "Convert table salt from grams to cups instantly — plus salt-type differences and common kitchen conversions.",
    url: "/salt",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salt Grams to Cups Converter",
    description: "Convert table salt from grams to cups instantly — plus salt-type differences and common kitchen conversions.",
    images: ["/og-image.jpg"],
  },
};

/* ─── Ingredient data for the converter tool (single ingredient) ────── */
const ingredients: Ingredient[] = [
  { name: "Table Salt", slug: "salt", gramsPerCup: 290, notes: "Fine crystals" },
  { name: "Fine Sea Salt", slug: "fine-sea-salt", gramsPerCup: 280, notes: "Fine crystals" },
  { name: "Kosher Salt (Morton)", slug: "kosher-salt-morton", gramsPerCup: 240, notes: "Dense flakes" },
  { name: "Kosher Salt (Diamond Crystal)", slug: "kosher-salt-diamond-crystal", gramsPerCup: 145, notes: "Large hollow flakes" },
  { name: "Coarse Sea Salt", slug: "coarse-sea-salt", gramsPerCup: 250, notes: "Chunky crystals" },
  { name: "Flaky Finishing Salt (Maldon)", slug: "flaky-finishing-salt", gramsPerCup: 120, notes: "Thin delicate flakes" },
];


/* ─── Hero quick-reference badges ──────────────────────────────────── */
const heroBadges = [
  { label: "¼ Cup", value: "72.5 g", icon: "ri-drop-line" },
  { label: "½ Cup", value: "145 g", icon: "ri-cup-line" },
  { label: "1 Cup", value: "290 g", icon: "ri-scales-3-line" },
  { label: "1g Salt", value: "388 mg Na", icon: "ri-heart-pulse-line" },
];

/* ─── Grams per Cup by Salt Type ────────────────────────────────────── */
const saltTypeTable = [
  { type: "Fine table salt", grams: "~290 g", notes: "Small, uniform crystals with minimal air gaps" },
  { type: "Fine sea salt", grams: "~280 g", notes: "Similar to table salt, slightly less refined" },
  { type: "Kosher salt (Morton brand)", grams: "~240 g", notes: "Flatter, denser flakes than Diamond Crystal" },
  { type: "Kosher salt (Diamond Crystal brand)", grams: "~145 g", notes: "Large, hollow pyramid-shaped flakes — almost half the density of Morton" },
  { type: "Coarse sea salt", grams: "~250 g", notes: "Irregular chunky crystals" },
  { type: "Flaky finishing salt (e.g., Maldon)", grams: "~120 g", notes: "Thin, delicate flakes with the most trapped air of any common type" },
];

/* ─── Grams to Cups Chart (Table Salt) ──────────────────────────────── */
const gramsToCupsTable = [
  ["20 g", "~0.07 cup"],
  ["50 g", "~0.17 cup"],
  ["72.5 g", "¼ cup"],
  ["100 g", "~0.35 cup"],
  ["145 g", "½ cup"],
  ["200 g", "~0.69 cup"],
  ["217.5 g", "¾ cup"],
  ["290 g", "1 cup"],
  ["500 g", "~1.72 cups"],
  ["1,000 g", "~3.45 cups"],
];

/* ─── Other ingredients — internal links to their own converter pages ── */
const otherIngredients = [
  { name: "All-purpose flour", href: "/flour" },
  { name: "Granulated sugar", href: "/sugar" },
  { name: "Butter", href: "/butter" },
  { name: "Milk", href: "/milk" },
  { name: "Water", href: "/water" },
  { name: "Rolled oats", href: "/oats" },
  { name: "Rice", href: "/rice" },
  { name: "Chocolate chips", href: "/chocolate-chips" },
  { name: "Honey", href: "/honey" },
  { name: "Almonds", href: "/almonds" },
  { name: "Cocoa powder", href: "/cocoa-powder" },
  { name: "Baking powder", href: "/baking-powder" },
  { name: "Vegetable oil", href: "/vegetable-oil" },
];

export default function SaltGramsToCups() {
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
              <i className="ri-restaurant-line" /> Salt-specific converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Salt Grams to Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Here&apos;s what makes salt different from almost every other ingredient on a conversion
              chart: the type of salt you&apos;re holding can change the gram-per-cup figure by nearly
              double. A recipe that says &quot;1 cup of salt&quot; without specifying which kind is,
              honestly, an incomplete instruction — and this is the one conversion where getting that
              detail wrong doesn&apos;t just throw off a baked good, it can make a dish inedibly salty.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for another ingredient?{" "}
              <Link href="/" className="font-semibold transition-colors duration-200 underline underline-offset-2" style={{ color: ACCENT }}>
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

            {/* Why Salt Doesn't Have One Universal Number */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Why Salt Doesn&apos;t Have One Universal Number</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Most dry ingredients vary a little between brands. Salt varies enormously, because
                different salts are literally different shapes and sizes of crystal, and volume
                measurement cares about shape far more than it cares about the substance itself. Fine
                table salt grains pack tightly together with almost no gaps. Kosher salt crystals are
                larger and more irregular, so a cup of them is mostly air pockets between crystals. The
                chemical substance is the same — sodium chloride — but the density by volume is completely
                different.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                This is why &quot;1 teaspoon of salt&quot; means a very different amount of actual sodium
                depending on which box it came from, and it&apos;s a common source of recipes turning out
                too salty or too bland when a cook swaps salt types without adjusting.
              </p>
            </section>

            {/* The Short Answer + Tool */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Short Answer (Table Salt Baseline)</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Since fine table salt is the most common reference point, here&apos;s the standard
                conversion:
              </p>
              <div className="mb-3 rounded-xl p-3 text-sm font-semibold text-gray-800" style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}30` }}>
                1 cup of table salt ≈ 290 grams
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Grams ÷ 290</div>
                <div>Grams = Cups × 290</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                So 100 grams of table salt is a little over ⅓ cup, and 500 grams comes to roughly 1¾ cups.
              </p>
              <div className="mt-5">
                <SimpleConverter ingredients={ingredients} />
              </div>
            </section>

            {/* Grams per Cup by Salt Type */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams per Cup by Salt Type</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[560px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Salt Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams per Cup</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {saltTypeTable.map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.type}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.grams}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                The gap between the two major kosher salt brands is the detail that catches even
                experienced cooks off guard. Diamond Crystal&apos;s pyramid-shaped, hollow flakes pack so
                much air into a cup that it weighs roughly 40% less than the same cup of Morton kosher
                salt, which has flatter, more compressed flakes. Recipe developers who don&apos;t specify a
                brand for kosher salt are leaving a genuinely significant variable unaddressed — using
                Morton where a recipe was tested with Diamond Crystal can mean adding close to twice the
                actual salt.
              </p>
            </section>

            {/* Grams to Cups Chart (Table Salt) */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Grams to Cups Chart (Table Salt)</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[280px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gramsToCupsTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Why Recipe Writers Specify Salt Type */}
            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{
                backgroundColor: `${ACCENT}0a`,
                border: `1px solid ${ACCENT}25`,
              }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Why Recipe Writers Specify Salt Type (and Why You Should Care)
              </h2>

              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                If a baking or cooking recipe was developed using kosher salt and you swap in table salt
                using the same volume measurement, you&apos;re not making an equivalent substitution —
                you&apos;re roughly doubling the actual amount of sodium chloride going into the dish,
                because table salt is so much denser per cup. The safer approach when a recipe doesn&apos;t
                specify:
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'If a recipe just says "salt" with no type, it\'s most often referring to table salt in home baking contexts, and kosher or coarse salt in professional/restaurant-style recipes.',
                  "When converting a recipe from kosher to table salt (or the reverse), use weight instead of volume if at all possible — grams stay honest regardless of crystal shape, while cups and teaspoons do not.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i
                      className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm"
                      style={{ color: ACCENT }}
                    />
                    <span>{t}</span>
                  </li>
                ))}

                <li className="flex items-start gap-2">
                  <i
                    className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm"
                    style={{ color: ACCENT }}
                  />
                  <span>
                    If you must convert by volume, use roughly half the volume of table salt to replace
                    a given volume of Diamond Crystal kosher salt, or about ⅔ the volume to replace
                    Morton kosher salt — these are rough starting points, not exact substitutes, so
                    taste and adjust.{" "}
                    <a
                      href="https://www.mortonsalt.com/article/salt-conversion-chart/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                      style={{ color: ACCENT }}
                    >
                      See Morton Salt&apos;s conversion chart
                    </a>
                    .
                  </span>
                </li>
              </ul>
            </section>


            {/* Measuring Salt Accurately */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Measuring Salt Accurately</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Identify the exact type and brand, especially for kosher salt — this matters more than for almost any other pantry ingredient.",
                  "Spoon into the measuring cup rather than scooping, to avoid compacting flaky or crystalline salts.",
                  "Level off the top rather than mounding, particularly for finer salts that can pile up.",
                  "Weigh whenever a recipe's saltiness needs to be exact — bread doughs, brines, and cured or fermented foods (where salt percentage affects preservation, not just flavor) are the cases where a scale genuinely matters, not just a nice-to-have.",
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
                  "72.5 g table salt = ¼ cup",
                  "145 g table salt = ½ cup",
                  "290 g table salt = 1 cup",
                  "1 g salt ≈ 388 mg sodium",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* The Bottom Line */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Salt is the one common kitchen ingredient where &quot;grams per cup&quot; genuinely depends
                on which product is in front of you — not just as a minor variation, but as a difference
                that can approach 2x between salt types. If a recipe specifies kosher salt by brand,
                respect that detail; if it just says &quot;salt,&quot; table salt at roughly 290 g/cup is
                the safest general assumption. And whenever the amount of salt really matters to the
                outcome — bread, brining, curing — weight is the only measurement that stays consistent no
                matter which box the salt came from.
              </p>
            </section>

            {/* Other Ingredients */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Grams-to-cups conversion isn&apos;t only useful for salt. Each of these has its own
                weight-per-cup because densities differ:
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {otherIngredients.map((ing) => (
                  <Link
                    key={ing.href}
                    href={ing.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:text-[#02B875] hover:border-current"
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
