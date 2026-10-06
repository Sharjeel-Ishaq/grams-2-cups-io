import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Privacy Policy — Grams to Cups Converter",
  description:
    "How Grams to Cups Converter collects, uses, and protects information when you visit our site, including our use of cookies, analytics, and advertising.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy — Grams to Cups Converter",
    description: "How we collect, use, and protect information when you visit our site, including cookies, analytics, and advertising.",
    url: "/privacy-policy",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Grams to Cups Converter",
    description: "How we collect, use, and protect information when you visit our site.",
    images: ["/og-image.jpg"],
  },
};

const dataWeUse = [
  "Operate, maintain, and improve our conversion tools and content",
  "Understand which pages and calculators are most useful to visitors",
  "Diagnose technical issues and improve site performance",
  "Respond to inquiries, feedback, or correction requests",
  "Comply with legal obligations",
];

const cookieTypes = [
  { title: "Essential cookies", text: "required for basic site functionality" },
  { title: "Analytics cookies", text: "help us understand how visitors interact with the site" },
  { title: "Advertising cookies", text: "used by ad networks to deliver relevant ads and measure ad performance" },
];

const userRights = [
  "Access the personal information we hold about you",
  "Request correction of inaccurate information",
  "Request deletion of your information",
  "Object to or restrict certain processing",
  "Opt out of the sale or sharing of personal information where applicable",
  "Data portability",
];

const checkIcon = <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />;

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />
      <section className="relative overflow-hidden border-b border-[#e4efe9]">
        <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>
              <i className="ri-shield-check-line" /> Privacy Policy
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">Privacy Policy</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400">Last updated: September 6, 2026</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl"><div className="space-y-10">
          <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
            <p className="text-sm leading-relaxed text-gray-600">This Privacy Policy explains how Grams to Cups Converter (&quot;we,&quot; &quot;us,&quot; or &quot;this site&quot;) collects, uses, and protects information when you visit our website. We built this site to provide free kitchen conversion tools and guides, and we aim to be transparent about the limited data involved in running it.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Information We Collect</h2>
            <div className="space-y-3">
              {[
                ["Information you provide directly.", "If you contact us through a form, email, or comment feature, we collect whatever information you choose to share, typically your name, email address, and message."],
                ["Information collected automatically.", "Like most websites, we may collect technical information such as IP address in anonymized or aggregated form, browser type, device type, operating system, pages visited, time spent, referring pages, and general geographic location."],
                ["Cookies and similar technologies.", "We use cookies and similar technologies to operate the site, remember preferences, and understand how visitors use our converters and guides. You can control or disable cookies through your browser settings."],
              ].map(([title, text]) => <div key={title} className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}><h3 className="mb-1 text-sm font-bold text-gray-900">{title}</h3><p className="text-sm leading-relaxed text-gray-600">{text}</p></div>)}
            </div>
          </section>

          <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
            <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How We Use Information</h2>
            <p className="mb-3 text-sm leading-relaxed text-gray-600">We use the information we collect to:</p>
            <ul className="mb-4 space-y-1.5 text-sm text-gray-600">{dataWeUse.map((item) => <li key={item} className="flex items-start gap-2">{checkIcon}<span>{item}</span></li>)}</ul>
            <p className="text-sm font-semibold text-gray-800">We do not sell your personal information.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Third-Party Services</h2>
            <div className="space-y-3">
              <div className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}><h3 className="mb-1 text-sm font-bold text-gray-900">Advertising.</h3><p className="mb-3 text-sm leading-relaxed text-gray-600">This site may display advertisements served by third-party networks, including Google AdSense. These networks may use cookies, web beacons, or similar technologies to serve ads based on prior visits to this and other websites.</p><ul className="space-y-1.5 text-sm text-gray-600"><li className="flex items-start gap-2">{checkIcon}<span>You may opt out of personalized advertising through <Link href="https://adssettings.google.com" className="font-semibold hover:underline" style={{ color: ACCENT }}>Google&apos;s Ads Settings</Link>.</span></li><li className="flex items-start gap-2">{checkIcon}<span>You may also opt out of some third-party vendor cookie use through <Link href="https://www.aboutads.info/choices" className="font-semibold hover:underline" style={{ color: ACCENT }}>www.aboutads.info</Link>.</span></li></ul></div>
              <div className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}><h3 className="mb-1 text-sm font-bold text-gray-900">Analytics.</h3><p className="text-sm leading-relaxed text-gray-600">We may use analytics services such as Google Analytics to understand site traffic and usage patterns. These services may collect information about visits, pages viewed, and referring sites in aggregate form.</p></div>
              <div className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}><h3 className="mb-1 text-sm font-bold text-gray-900">Embedded content and links.</h3><p className="text-sm leading-relaxed text-gray-600">Our pages may link to external sites or embedded tools. We are not responsible for the privacy practices of external websites, and we encourage you to review their policies separately.</p></div>
            </div>
          </section>

          <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Cookies</h2>
            <p className="mb-3 text-sm leading-relaxed text-gray-600">We use cookies for purposes that may include:</p>
            <ul className="mb-4 space-y-2 text-sm text-gray-600">{cookieTypes.map((item) => <li key={item.title} className="flex items-start gap-2">{checkIcon}<span><strong className="text-gray-800">{item.title}</strong> — {item.text}</span></li>)}</ul>
            <p className="text-sm leading-relaxed text-gray-600">Most browsers allow you to control cookies through their settings. Disabling cookies may affect certain features of the site.</p>
          </section>

          <section><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Data Retention</h2><p className="text-sm leading-relaxed text-gray-600">We retain automatically collected data only as long as necessary for the purposes outlined in this policy or as required by law. Information submitted directly is retained only as long as needed to address the inquiry, unless earlier deletion is requested.</p></section>

          <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
            <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Your Rights</h2>
            <p className="mb-3 text-sm leading-relaxed text-gray-600">Depending on your location, you may have rights regarding your personal information, including the right to:</p>
            <ul className="mb-4 space-y-1.5 text-sm text-gray-600">{userRights.map((item) => <li key={item} className="flex items-start gap-2">{checkIcon}<span>{item}</span></li>)}</ul>
            <p className="text-sm leading-relaxed text-gray-600">If you are located in the EEA, UK, or a jurisdiction with similar data protection laws, you may also have the right to lodge a complaint with your local data protection authority. To exercise these rights, please contact us using the details below.</p>
          </section>

          {[
            ["Children's Privacy", "This site is not directed at children under 13 or the relevant minimum age in your jurisdiction, and we do not knowingly collect personal information from children."],
            ["Data Security", "We take reasonable measures to protect collected information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage method is completely secure."],
            ["International Visitors", "This site may be accessed from countries around the world. Your information may be transferred to, stored, and processed in a country different from your own."],
            ["Changes to This Policy", "We may update this Privacy Policy to reflect changes in our practices, technology, legal requirements, or operations. Changes will be posted on this page with an updated date."],
          ].map(([title, text], index) => <section key={title} className={index === 0 ? "rounded-[24px] border bg-white p-5 sm:p-6" : ""} style={index === 0 ? { borderColor: `${ACCENT}20` } : undefined}><h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">{title}</h2><p className="text-sm leading-relaxed text-gray-600">{text}</p></section>)}

          <section
            className="rounded-[24px] border bg-white p-5 sm:p-6"
            style={{ borderColor: `${ACCENT}20` }} > <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
              Contact Us
            </h2> <p className="mb-4 text-sm leading-relaxed text-gray-600">
              If you have questions, concerns, or requests regarding this Privacy Policy
              or how we handle information, please contact us through the site&apos;s
              available contact channel. </p> <a
              href="/contact"
              className="inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT }} >
              Contact Us
            </a>
          </section>

          <section className="rounded-2xl border bg-gray-50 p-4 text-xs italic leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>This policy provides a general overview of our data practices and does not constitute legal advice. For a policy tailored to specific legal obligations, consult a qualified attorney.</section>
        </div></main>
      </div>
    </div>
  );
}
