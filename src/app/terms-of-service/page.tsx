import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Terms of Service — Grams to Cups Converter",
  description:
    "The Terms of Service governing your access to and use of Grams to Cups Converter, including our conversion tools, calculators, and guides.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service — Grams to Cups Converter",
    description: "The Terms of Service governing your access to and use of our conversion tools, calculators, and guides.",
    url: "/terms-of-service",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Grams to Cups Converter",
    description: "The Terms of Service governing your access to and use of our Site.",
    images: ["/og-image.jpg"],
  },
};

const allowedUses = [
  "Converting ingredient measurements between grams, cups, ounces, and other units",
  "Reading our guides and articles for reference",
  "Sharing links to our pages",
];

const prohibitedUses = [
  "Use the Site in any way that violates applicable local, national, or international law",
  "Attempt to gain unauthorized access to any part of the Site, its servers, or connected systems",
  "Use automated systems to extract Site content or data without prior written permission, other than standard search indexing",
  "Reproduce, copy, sell, resell, or commercially exploit Site content without consent",
  "Interfere with or disrupt the Site's functionality, servers, or networks",
];

const accuracyPoints = [
  "Conversion values are estimates based on standard reference conditions and may not reflect the exact density of the product in your kitchen.",
  "We are not responsible for cooking or baking outcomes resulting from information provided on this Site.",
  "Where precision matters, use a digital kitchen scale rather than relying solely on volume conversions.",
];

const thirdPartyPoints = [
  "We do not control and are not responsible for the content, accuracy, or privacy practices of third-party websites linked from this Site.",
  "A link or advertisement does not imply our endorsement of the linked site, product, or service.",
  "Transactions or interactions with third parties found through this Site are solely between you and that third party.",
];

const checkIcon = <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />;

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />
      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}><i className="ri-file-text-line" /> Terms of Service</div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">Terms of Service</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400">Last updated: September 1, 2026</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl"><div className="space-y-10">
          <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}><p className="text-sm leading-relaxed text-gray-600">Welcome to Grams to Cups Converter. These Terms of Service (&quot;Terms&quot;) govern your access to and use of this website, including all conversion tools, calculators, articles, and related content (collectively, the &quot;Site&quot;). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.</p></section>

          <section><h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">1. Use of the Site</h2><p className="mb-4 text-sm leading-relaxed text-gray-600">This Site is provided for general informational and reference purposes related to cooking and baking measurement conversions. You may use it for personal, non-commercial purposes, including:</p><div className="space-y-3"><div className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}><ul className="space-y-1.5 text-sm text-gray-600">{allowedUses.map((item) => <li key={item} className="flex items-start gap-2">{checkIcon}<span>{item}</span></li>)}</ul></div><div className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}><h3 className="mb-2 text-sm font-bold text-gray-900">You agree not to:</h3><ul className="space-y-1.5 text-sm text-gray-600">{prohibitedUses.map((item) => <li key={item} className="flex items-start gap-2"><i className="ri-close-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} /><span>{item}</span></li>)}</ul></div></div></section>

          <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">2. No Professional Advice</h2><p className="mb-3 text-sm leading-relaxed text-gray-600">The content on this Site, including conversion charts, ingredient density figures, and cooking guidance, is provided for general informational purposes only. It is not professional culinary, nutritional, medical, or dietary advice.</p><p className="mb-3 text-sm leading-relaxed text-gray-600">Ingredient weights can vary based on brand, moisture, particle size, measuring technique, and other factors. Although we make reasonable efforts to provide accurate data and cite credible sources, we do not guarantee that every figure is error-free or suited to your specific ingredient or recipe.</p><p className="text-sm leading-relaxed text-gray-600">If you have dietary restrictions, allergies, health conditions, or nutritional concerns, consult a qualified professional rather than relying solely on this Site.</p></section>

          <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">3. Accuracy of Content</h2><p className="mb-4 text-sm leading-relaxed text-gray-600">We aim to provide accurate, well-researched, and clearly sourced information and update our content when better data becomes available. However:</p><ul className="space-y-1.5 text-sm text-gray-600">{accuracyPoints.map((item) => <li key={item} className="flex items-start gap-2">{checkIcon}<span>{item}</span></li>)}</ul></section>

          <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">4. Intellectual Property</h2><p className="mb-3 text-sm leading-relaxed text-gray-600">Unless otherwise stated, all content on this Site, including text, articles, graphics, logos, and conversion-tool design, is the property of Grams to Cups Converter or its contributors and is protected by applicable intellectual property laws.</p><p className="text-sm leading-relaxed text-gray-600">You may share links and quote brief excerpts with attribution and a link to the original page. You may not republish, redistribute, or reproduce substantial portions without prior written permission.</p></section>

          <section><h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">5. Third-Party Links and Advertising</h2><p className="mb-4 text-sm leading-relaxed text-gray-600">This Site may contain links to third-party websites and advertisements served by third-party networks, including Google AdSense.</p><div className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}><ul className="mb-3 space-y-1.5 text-sm text-gray-600">{thirdPartyPoints.map((item) => <li key={item} className="flex items-start gap-2">{checkIcon}<span>{item}</span></li>)}</ul><p className="text-sm leading-relaxed text-gray-600">For information about advertising and cookies, see our <Link href="/privacy-policy" className="font-semibold hover:underline" style={{ color: ACCENT }}>Privacy Policy</Link>.</p></div></section>

          {[
            ["6. Disclaimer of Warranties", "This Site and its content are provided on an \"as is\" and \"as available\" basis, without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components."],
            ["7. Limitation of Liability", "To the fullest extent permitted by applicable law, Grams to Cups Converter and its operators shall not be liable for damages arising from your use of, or inability to use, the Site or its content, including recipe outcomes, measurement errors, or reliance on information provided."],
            ["8. Changes to the Site and These Terms", "We may modify, suspend, or discontinue any part of the Site and may revise these Terms from time to time. Changes will be posted on this page with an updated date. Continued use after changes are posted constitutes acceptance of the revised Terms."],
            ["9. Governing Law", "These Terms shall be governed by the laws of the United States, without regard to conflict-of-law principles. Disputes shall be subject to the exclusive jurisdiction of courts located in the United States."],
            ["10. Severability", "If any provision of these Terms is found unenforceable or invalid, it will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in force."],
          ].map(([title, text], index) => <section key={title} className={index === 0 ? "rounded-[24px] border bg-white p-5 sm:p-6" : ""} style={index === 0 ? { borderColor: `${ACCENT}20` } : undefined}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">{title}</h2><p className="text-sm leading-relaxed text-gray-600">{text}</p></section>)}

          <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">11. Contact Us</h2><p className="mb-3 text-sm leading-relaxed text-gray-600">If you have questions about these Terms of Service, please contact us through the site&apos;s available contact channel.</p><a
            href="/contact"
            className="inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: ACCENT }} >
            Contact Us
          </a></section>
          <section className="rounded-2xl border bg-gray-50 p-4 text-xs italic leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>These Terms provide a general framework for using this Site and do not constitute legal advice. For terms tailored to specific requirements, consult a qualified attorney.</section>
        </div></main>
      </div>
    </div>
  );
}
