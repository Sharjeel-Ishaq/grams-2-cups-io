import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import GramsToOuncesConverter from "@/components/GramsToOuncesConverter";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Grams to Ounces Converter — Avoirdupois, Troy & Fluid Ounces",
  description:
    "Convert grams to ounces instantly, in both directions. Covers avoirdupois, troy, and fluid ounces, plus practical reference charts.",
  alternates: { canonical: "/grams-to-ounces" },
  openGraph: {
    title: "Grams to Ounces Converter",
    description:
      "Convert grams to ounces instantly — 28.3495g = 1oz, with a full reference chart in both directions.",
    url: "/grams-to-ounces",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grams to Ounces Converter",
    description: "Convert grams to ounces instantly — 28.3495g = 1oz.",
    images: ["/og-image.jpg"],
  },
};

const heroBadges = [
  { label: "1 oz", value: "28 g" },
  { label: "4 oz", value: "113 g" },
  { label: "8 oz", value: "227 g" },
  { label: "16 oz (1 lb)", value: "454 g" },
];

const gramsToOuncesTable = [
  ["5 g", "0.18 oz"],
  ["10 g", "0.35 oz"],
  ["20 g", "0.71 oz"],
  ["25 g", "0.88 oz"],
  ["30 g", "1.06 oz"],
  ["50 g", "1.76 oz"],
  ["75 g", "2.65 oz"],
  ["100 g", "3.53 oz"],
  ["150 g", "5.29 oz"],
  ["200 g", "7.05 oz"],
  ["250 g", "8.82 oz"],
  ["500 g", "17.64 oz"],
  ["1,000 g", "35.27 oz"],
];

const ouncesToGramsTable = [
  ["1 oz", "28.35 g"],
  ["2 oz", "56.70 g"],
  ["4 oz", "113.40 g"],
  ["8 oz", "226.80 g"],
  ["12 oz", "340.19 g"],
  ["16 oz (1 lb)", "453.59 g"],
];

const otherLinks = [
  { name: "Grams to Cups", href: "/" },
  { name: "Cups to Grams", href: "/cups-to-grams" },
  { name: "ML to Cups", href: "/ml-to-cups" },
  { name: "Whole Milk", href: "/milk" },
  { name: "Water", href: "/water" },
  { name: "Honey", href: "/honey" },
];

function ReferenceTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border" style={{ borderColor: `${ACCENT}20` }}>
      <table className="w-full min-w-[280px] text-sm">
        <thead style={{ backgroundColor: ACCENT }}>
          <tr>
            {head.map((title) => (
              <th key={title} className="px-4 py-3 text-left font-semibold text-white">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row[0]} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cell}
                  className={`px-4 py-2.5 ${cellIndex === 0 ? "font-medium text-gray-800" : "text-gray-600"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GramsToOuncesPage() {
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
              <i className="ri-scales-3-line" /> Grams to Ounces converter
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Grams to Ounces Converter
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              If you&apos;ve ever stared at a recipe, a protein label, or a gold ring&apos;s weight and wondered how
              grams and ounces line up, you&apos;re not alone — these two units show up side by side constantly, and yet
              most of us never quite memorize the exact math between them. Here&apos;s the full picture, explained
              simply.
            </p>

            <p className="mx-auto mt-3 text-sm text-gray-400">
              Working with cups instead?{" "}
              <Link href="/" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                Grams to Cups
              </Link>
              ,{" "}
              <Link href="/cups-to-grams" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                Cups to Grams
              </Link>
              , and{" "}
              <Link href="/ml-to-cups" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                ML to Cups
              </Link>{" "}
              cover the rest.
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
                  <i className="ri-scales-3-line" style={{ color: ACCENT }} />
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
            <GramsToOuncesConverter />

            {/* The Short Answer */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Short Answer</h2>

              <div
                className="mb-3 rounded-xl p-3 text-sm font-semibold text-gray-800"
                style={{ backgroundColor: `${ACCENT}0d`, border: `1px solid ${ACCENT}30` }}
              >
                1 ounce = 28.3495 grams (more precisely, 28.349523125 grams)
              </div>

              <p className="mb-3 text-sm text-gray-700">
                <strong className="text-gray-900">1 gram = 0.035274 ounces</strong>
              </p>

              <div
                className="mb-3 space-y-1 rounded-xl bg-white p-4 font-mono text-sm text-gray-800"
                style={{ border: `1px solid ${ACCENT}25` }}
              >
                <div>Ounces = Grams ÷ 28.3495</div>
                <div>Grams = Ounces × 28.3495</div>
              </div>

              <p className="text-sm leading-relaxed text-gray-600">
                So if you&apos;re holding a <Link href="/100-grams-to-cups" className="font-semibold hover:underline" style={{ color: ACCENT }}>100-gram</Link> bag of something, that&apos;s about 3.53 ounces. And if a recipe
                calls for 8 ounces of an ingredient, that&apos;s roughly 227 grams.
              </p>
            </section>

            {/* Common Conversions at a Glance */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Common Conversions at a Glance
              </h2>
              <ReferenceTable head={["Grams", "Ounces"]} rows={gramsToOuncesTable} />
              <p className="my-4 text-sm leading-relaxed text-gray-600">
                And the other direction, since people often start from ounces instead:
              </p>
              <ReferenceTable head={["Ounces", "Grams"]} rows={ouncesToGramsTable} />
            </section>

            {/* Why the Number Isn't a Round One */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Why the Number Isn&apos;t a Round One
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
                You might notice 28.3495 isn&apos;t a clean number, and that&apos;s simply because grams and ounces come
                from two completely different measuring traditions. The gram belongs to the metric system, built around
                powers of ten. The ounce comes from the older imperial and US customary systems, which were never
                designed to divide evenly into metric units. When the two systems were formally reconciled in the 20th
                century, the ounce was defined as exactly 28.349523125 grams — an oddly specific number, but a fixed and
                internationally agreed one.
              </p>
            </section>

            {/* A Detail Most Converters Skip: There's More Than One "Ounce" */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                A Detail Most Converters Skip: There&apos;s More Than One &quot;Ounce&quot;
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Here&apos;s something worth knowing before you trust any grams-to-ounces conversion blindly: the word
                &quot;ounce&quot; doesn&apos;t always mean the same thing.
              </p>

              <div className="space-y-3">
                <div className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                  <p className="text-sm leading-relaxed text-gray-600">
                    <strong className="text-gray-900">The avoirdupois ounce (28.35 g)</strong> is the everyday ounce —
                    the one used for food, body weight, shipping packages, and pretty much anything you&apos;d weigh on a
                    kitchen or bathroom scale. This is what every conversion on this page refers to.
                  </p>
                </div>

                <div className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                  <p className="text-sm leading-relaxed text-gray-600">
                    <strong className="text-gray-900">The troy ounce (31.1035 g)</strong> is a different, heavier unit
                    used specifically for precious metals — gold, silver, platinum. If you&apos;ve ever seen a gold
                    price quoted &quot;per ounce,&quot; that&apos;s almost always the troy ounce, not the everyday one.
                    Mixing these up when pricing or weighing metal leads to a real, non-trivial error.
                  </p>
                </div>

                <div className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                  <p className="text-sm leading-relaxed text-gray-600">
                    <strong className="text-gray-900">The fluid ounce</strong> isn&apos;t a weight at all — it&apos;s a
                    measure of volume, used for liquids. A fluid ounce of water weighs close to an avoirdupois ounce, but
                    a fluid ounce of honey or oil won&apos;t, since fluid ounces measure space, not mass.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                If a conversion ever looks slightly &quot;off&quot; from what you expected, checking which kind of ounce
                is actually meant is often the reason.
              </p>
            </section>

            {/* Where Grams and Ounces Are Actually Used */}
            <section
              className="rounded-[24px] p-5 sm:p-6"
              style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Where Grams and Ounces Are Actually Used
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                The mix of grams and ounces you&apos;ll run into depends heavily on where you are:
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                  <span>
                    <strong className="text-gray-800">The United States</strong> is one of the few places in the world
                    where the ounce remains the everyday standard for food packaging, postage, and body weight, alongside
                    Myanmar and Liberia — the only other countries that haven&apos;t fully adopted the metric system.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                  <span>
                    <strong className="text-gray-800">Canada</strong> officially switched to the metric system in the
                    1970s, so grams are the standard on food labels — but ounces still show up regularly in everyday
                    use, especially for things like meat portions at a butcher counter or produce sold by the pound.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                  <span>
                    <strong className="text-gray-800">The UK, Australia, and most of the world</strong> rely on grams
                    and kilograms for virtually everything, with the ounce mostly surviving in a few informal or
                    traditional contexts.
                  </span>
                </li>
              </ul>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                This is part of why grams-to-ounces conversions matter so much for cooking specifically — a recipe from
                a US food blog and one from a European cookbook can list the exact same ingredient in two completely
                different units, and getting the conversion right is the only way to actually follow both accurately.
              </p>
            </section>

            {/* A Quick Way to Estimate Without a Calculator */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                A Quick Way to Estimate Without a Calculator
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
                If you just need a rough figure and don&apos;t want to do exact math, dividing grams by 28 (instead of
                28.35) gets you close enough for casual use — the error is small enough not to matter unless you need
                precision. For anything where the exact amount actually matters — nutrition tracking, baking ratios, or
                precious metals — stick to the full 28.3495 figure or use a proper converter.
              </p>
            </section>

            {/* Quick Reference */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Quick Reference</h2>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {["28 g ≈ 1 oz", "57 g ≈ 2 oz", "113 g ≈ 4 oz", "227 g ≈ 8 oz (half a pound)", "454 g ≈ 16 oz (1 pound)"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </section>

            {/* The Bottom Line */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">The Bottom Line</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                The core conversion is simple once you have the number: 1 ounce equals 28.3495 grams, full stop. The
                part that actually trips people up isn&apos;t the math — it&apos;s making sure you&apos;re using the
                right kind of ounce for the right context, since the everyday ounce, the troy ounce, and the fluid ounce
                are three genuinely different things wearing the same name.
              </p>
            </section>

            {/* Explore More Converters */}
            <section
              className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500"
              style={{ borderColor: `${ACCENT}15` }}
            >
              <p className="mb-2 font-semibold text-gray-600">Explore More Converters</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {otherLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2 font-medium text-gray-700 transition-colors hover:border-current hover:text-[#02B875]"
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