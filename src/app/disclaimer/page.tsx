import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Disclaimer — Grams to Cups Converter",
  description: "Important information about conversion estimates, kitchen measurements, and the limitations of recipe guidance.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Disclaimer — Grams to Cups Converter",
    description: "Important information about conversion estimates and recipe guidance.",
    url: "/disclaimer",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer — Grams to Cups Converter",
    description: "Important information about conversion estimates and recipe guidance.",
    images: ["/og-image.jpg"],
  },
};

export default function DisclaimerPage() {
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
              <i className="ri-alert-line" /> Disclaimer
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">Disclaimer</h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-4xl space-y-6">
          <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
            <p className="text-sm leading-relaxed text-gray-600">
              Grams to Cups Converter provides general conversion guidance for cooking and baking. The figures on this site are practical estimates intended to be useful in everyday kitchen work, not exact laboratory measurements.
            </p>
          </section>

          <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Important limitations</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-gray-600">
              <li>• Ingredient densities vary by brand, moisture content, temperature, and measuring method.</li>
              <li>• Cup measurements can differ between US customary and metric cup standards.</li>
              <li>• Recipes can be sensitive to technique, especially for flour, sugar, cocoa powder, and butter.</li>
              <li>• For precision-critical baking or nutrition tracking, use a digital scale and the recipe&apos;s stated method.</li>
            </ul>
          </section>

          <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Not professional advice</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              This website does not provide professional culinary, nutritional, medical, or legal advice. While we aim for helpful and accurate content, the information is offered as a general reference and should be used with common sense and recipe judgment.
            </p>
          </section>

          <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
            <p className="text-sm leading-relaxed text-gray-600">
              For more details on our measurement approach, see the <Link href="/about" className="font-semibold hover:underline" style={{ color: ACCENT }}>About</Link> page and <Link href="/grams-to-cups-accuracy" className="font-semibold hover:underline" style={{ color: ACCENT }}>Accuracy guide</Link>.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
