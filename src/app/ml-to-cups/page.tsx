import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MlToCupsConverter from "@/components/MlToCupsConverter";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "ML to Cups Converter — US, Metric, UK Imperial & More",
  description:
    "Convert milliliters to cups instantly across every major cup standard — US customary, US legal, metric, UK imperial, traditional Canadian, and Japanese cups.",
  alternates: { canonical: "/ml-to-cups" },
  openGraph: {
    title: "ML To Cups Converter",
    description:
      "Convert milliliters to cups instantly — US customary, metric, UK imperial, and more, all in one place.",
    url: "/ml-to-cups",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ML to Cups Converter",
    description: "Convert milliliters to cups across every major cup standard in use today.",
    images: ["/og-image.jpg"],
  },
};

const heroBadges = [
  { label: "¼ Cup", value: "59 mL", icon: "ri-drop-line" },
  { label: "½ Cup", value: "118 mL", icon: "ri-cup-line" },
  { label: "1 Cup", value: "236.6 mL", icon: "ri-scales-3-line" },
  { label: "2 Cups", value: "473 mL", icon: "ri-restaurant-line" },
];

const cupsByCountryTable = [
  { standard: "US customary cup", volume: "236.5882365 mL", used: "United States (standard recipes)" },
  { standard: "US legal cup", volume: "240 mL exactly", used: "United States (nutrition labeling)" },
  { standard: "Metric cup", volume: "250 mL exactly", used: "Australia, New Zealand, modern UK recipes, modern Canada" },
  { standard: "UK imperial cup", volume: "284.130625 mL", used: "Older/traditional British recipes" },
  { standard: "Traditional Canadian cup", volume: "~227.3 mL (8 imperial fl oz)", used: "Older Canadian recipes; largely replaced by the metric cup today" },
  { standard: "Japanese cup", volume: "200 mL", used: "Japanese recipes (a distinct traditional standard)" },
];

const usCustomaryTable = [
  ["30 mL", "~0.127 cup"],
  ["50 mL", "~0.211 cup"],
  ["59 mL", "¼ cup"],
  ["79 mL", "⅓ cup"],
  ["100 mL", "~0.423 cup"],
  ["118 mL", "½ cup"],
  ["150 mL", "~0.634 cup"],
  ["177 mL", "¾ cup"],
  ["200 mL", "~0.845 cup"],
  ["236.6 mL", "1 cup"],
  ["250 mL", "~1.057 cups"],
  ["300 mL", "~1.268 cups"],
  ["355 mL", "1½ cups"],
  ["473 mL", "2 cups"],
  ["500 mL", "~2.113 cups"],
  ["750 mL", "~3.170 cups"],
  ["1,000 mL", "~4.227 cups"],
];

const metricCupTable = [
  ["50 mL", "⅕ cup"],
  ["62.5 mL", "¼ cup"],
  ["100 mL", "⅖ cup"],
  ["125 mL", "½ cup"],
  ["187.5 mL", "¾ cup"],
  ["200 mL", "⅘ cup"],
  ["250 mL", "1 cup"],
  ["375 mL", "1½ cups"],
  ["500 mL", "2 cups"],
  ["750 mL", "3 cups"],
  ["1,000 mL", "4 cups"],
];

const ukImperialTable = [
  ["71 mL", "¼ cup"],
  ["100 mL", "~0.352 cup"],
  ["142 mL", "½ cup"],
  ["213 mL", "¾ cup"],
  ["284.1 mL", "1 cup"],
  ["500 mL", "~1.760 cups"],
  ["1,000 mL", "~3.520 cups"],
];

const usLegalTable = [
  ["60 mL", "¼ cup"],
  ["120 mL", "½ cup"],
  ["180 mL", "¾ cup"],
  ["240 mL", "1 cup"],
  ["480 mL", "2 cups"],
];

const crossReferenceTable = [
  { standard: "US customary", equals: "236.6 mL" },
  { standard: "US legal (nutrition labels)", equals: "240 mL" },
  { standard: "Metric (AU/NZ/modern UK)", equals: "250 mL" },
  { standard: "UK imperial (traditional)", equals: "284.1 mL" },
  { standard: "Japanese", equals: "200 mL" },
];

const householdReferences = [
  "1 teaspoon ≈ 5 mL",
  "1 tablespoon ≈ 15 mL",
  "A standard drinking glass, filled about ⅔, ≈ 250 mL",
  "A digital kitchen scale — for water and most watery liquids, 1 gram is essentially equal to 1 milliliter, so a scale set to grams can substitute for a milliliter measurement in a pinch.",
];

const cupAssumptions = [
  { lead: "American recipe (blogs, US cookbooks)", rest: "assume the US customary cup (236.6 mL)." },
  { lead: "Australian or New Zealand recipe", rest: "assume the metric cup (250 mL)." },
  { lead: "Modern UK recipe", rest: "likely written in grams/mL already, but if cups appear, assume the 250 mL metric cup." },
  { lead: "Older or vintage UK recipe", rest: "assume the imperial cup (284.1 mL)." },
  { lead: "Canadian recipe", rest: "modern sources typically use the metric 250 mL cup; only very old Canadian cookbooks use the traditional ~227.3 mL cup." },
  { lead: "Japanese recipe", rest: "assume 200 mL, which is a distinct standard from all of the above." },
];

const otherLinks = [
  { name: "Whole Milk", href: "/milk" },
  { name: "Water", href: "/water" },
  { name: "Honey", href: "/honey" },
  { name: "Rice", href: "/rice" },
  { name: "Chocolate chips", href: "/chocolate-chips" },
  { name: "Almonds", href: "/almonds" },
  { name: "Cocoa powder", href: "/cocoa-powder" },
  { name: "Grams to cups (home)", href: "/" },
];

export default function MLToCups() {
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
              <i className="ri-drop-line" /> ML to Cups converter
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              ML To Cups Converter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              A &quot;cup&quot; may seem like a fixed amount, but it&apos;s not — the actual milliliter
              value behind a cup depends on which country&apos;s measurement system the recipe is written
              in. This page breaks down the exact conversion for every large cup standard in use today, so
              you can convert accurately no matter where your recipe comes from.
            </p>
            <p className="mx-auto mt-3 text-sm text-gray-400">
              Looking for an ingredient conversion?{" "}
              <Link href="/cups-to-grams" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                Convert Cups To Grams
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

            {/* 🔹 Embedded Converter */}
            <MlToCupsConverter />

            {/* The Formula */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Formula</h2>
              <div className="mb-3 rounded-xl p-3 text-sm font-semibold text-gray-800" style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}30` }}>
                1 cup = 236.6 mL
              </div>
              <div className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800" style={{ border: `1px solid ${ACCENT}25` }}>
                <div>Cups = Milliliters ÷ Milliliters per Cup</div>
                <div>Milliliters = Cups × Milliliters per Cup</div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                The tricky part isn&apos;t the math — it&apos;s knowing which &quot;milliliters per
                cup&quot; figure applies. That number is different for a US recipe, a UK recipe, and an
                Australian recipe, even though all three are commonly just called &quot;a cup.&quot;
              </p>
            </section>

            {/* Cup Sizes by Country */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Cup Sizes by Country (Exact Values)</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[640px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cup Standard</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Volume</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Used In</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cupsByCountryTable.map((row, i) => (
                      <tr key={row.standard} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.standard}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.volume}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.used}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                The US customary cup and the US legal cup are easy to confuse because both are
                &quot;American&quot; — the customary cup is what most recipes use, while the slightly
                rounder 240 mL legal cup is specifically the figure the FDA uses for nutrition facts labels.
                They&apos;re close enough that mixing them up rarely wrecks a recipe, but they aren&apos;t
                identical.
              </p>
            </section>

            {/* US Customary Cup Chart */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">US Customary Cup: ML to Cups Chart</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                This is the standard reference for American recipes (1 cup = 236.588 mL, precisely
                236.5882365 mL).
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[280px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Milliliters</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usCustomaryTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Metric Cup Chart */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Metric Cup: ML to Cups Chart</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Used across Australia, New Zealand, and increasingly in the UK and Canada for modern
                recipes (1 cup = 250 mL exactly). This is the simplest standard to work with, since the
                numbers divide evenly.
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[280px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Milliliters</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metricCupTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* UK Imperial Cup Chart */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">UK Imperial Cup: ML to Cups Chart</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Modern UK recipes typically use grams and milliliters directly rather than cups, but older
                British cookbooks reference the imperial cup (1 cup = 284.130625 mL — notably larger than
                either the US or metric cup).
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[280px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Milliliters</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ukImperialTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                If you&apos;re following an older British recipe and it isn&apos;t clear which cup size is
                meant, the imperial cup is the safer assumption — but checking the cookbook&apos;s
                publication era helps, since UK recipes have largely moved away from cup measurements since
                the 1960s in favor of weight.
              </p>
            </section>

            {/* US Legal Cup Chart */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">US Legal Cup: ML to Cups Chart</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                This is the rounded 240 mL figure used specifically on US nutrition labels rather than in
                recipe writing.
              </p>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[280px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Milliliters</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Cups</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usLegalTable.map((row, i) => (
                      <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Quick Cross-Reference */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Cross-Reference: 1 Cup in Each Standard</h2>
              <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
                <table className="w-full min-w-[380px] text-sm">
                  <thead style={{ backgroundColor: ACCENT }}>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Standard</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">1 Cup Equals</th>
                    </tr>
                  </thead>
                  <tbody>
                    {crossReferenceTable.map((row, i) => (
                      <tr key={row.standard} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.standard}</td>
                        <td className="px-4 py-2.5 font-semibold" style={{ color: ACCENT }}>{row.equals}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                The spread between the smallest and largest common cup standard — Japanese (200 mL) versus
                UK imperial (284.1 mL) — is over 40%. For a recipe with several cups of liquid, that gap is
                large enough to noticeably change the outcome if the wrong standard is assumed.
              </p>
            </section>

            {/* How to Measure ML Without a Measuring Cup */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Measure ML Without a Measuring Cup</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                If you don&apos;t have a cup marked in milliliters, a few household references get you
                close:
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {householdReferences.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Which Cup Size Should You Assume? */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Which Cup Size Should You Assume?</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">If a recipe doesn&apos;t specify:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {cupAssumptions.map((item) => (
                  <li key={item.lead} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>
                      <strong className="text-gray-800">{item.lead}</strong> → {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quick Reference */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "59 mL = ¼ US cup",
                  "118 mL = ½ US cup",
                  "236.6 mL = 1 US cup",
                  "250 mL = 1 metric cup",
                  "284.1 mL = 1 UK imperial cup",
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
                &quot;1 cup&quot; is not a universal amount — it&apos;s shorthand that depends entirely on
                which country&apos;s kitchen the recipe was written in. The US customary cup (236.6 mL), the
                metric cup (250 mL), and the UK imperial cup (284.1 mL) are all genuinely different volumes,
                and mixing them up across a multi-cup recipe adds up to a meaningful error. When a
                recipe&apos;s origin is unclear, check for other clues — spelling conventions, oven
                temperatures in Celsius versus Fahrenheit, or ingredient names — to figure out which cup
                standard it&apos;s actually using, or convert everything to milliliters directly and skip
                the ambiguity altogether.
              </p>
            </section>

            {/* Explore more converters */}
            <section className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>
              <p className="mb-2 font-semibold text-gray-600">Explore More Converters</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {otherLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2 font-medium text-gray-700 transition-colors hover:border-current hover:text-[#02B875]"
                    style={{ borderColor: `${ACCENT}20` }}
                  >
                    <span className="truncate">{l.name}</span>
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