import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Cookie Policy — Grams to Cups Converter",
  description:
    "How Grams to Cups Converter uses cookies and similar tracking technologies, including region-specific information and how to control or disable cookies.",
  alternates: { canonical: "/cookies-policy" },
  openGraph: {
    title: "Cookie Policy — Grams to Cups Converter",
    description:
      "How we use cookies and similar tracking technologies, and how to control or disable them.",
    url: "/cookies-policy",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy — Grams to Cups Converter",
    description: "How we use cookies and similar tracking technologies on our Site.",
    images: ["/og-image.jpg"],
  },
};

const cookieTypes = [
  {
    title: "Strictly necessary cookies",
    text: "These cookies are essential for the Site to function properly — for example, enabling our conversion calculators to operate correctly or remembering settings within a single session. The Site may not work as intended without these.",
  },
  {
    title: "Analytics and performance cookies",
    text: "These cookies help us understand how visitors use the Site — which pages and converters are most popular, how long visitors stay, and whether pages are loading correctly. We may use services such as Google Analytics for this purpose. Data collected is generally aggregated and does not directly identify you.",
  },
  {
    title: "Advertising cookies",
    text: "These cookies are used by third-party advertising networks, including Google AdSense, to deliver advertisements relevant to you and to measure the effectiveness of those advertisements. They may track your browsing activity across this Site and other websites you visit. Google and its partners may use these cookies to serve ads based on your prior visits to this and other websites.",
  },
  {
    title: "Functional cookies",
    text: "These cookies remember choices you make on the Site (such as display preferences) to provide a more personalized experience on return visits.",
  },
];

const thirdPartyCookies = [
  { lead: "Google AdSense / Google Ads", rest: "— for delivering and measuring advertisements" },
  { lead: "Google Analytics", rest: "(or similar analytics providers) — for understanding site usage" },
  { lead: "Embedded content providers", rest: "— if we embed any third-party tools, calculators, or media" },
];

const regionInfo = [
  {
    title: "United Kingdom",
    text: "Under UK data protection law (UK GDPR and the Privacy and Electronic Communications Regulations), we aim to obtain your consent before placing non-essential cookies (such as analytics and advertising cookies) where required, and to give you the ability to manage your preferences. You may see a cookie consent banner when first visiting the Site from the UK.",
  },
  {
    title: "European Economic Area (if applicable)",
    text: "Similar consent requirements under the EU GDPR and ePrivacy rules apply if you access the Site from the EEA.",
  },
  {
    title: "United States",
    text: "Certain states (such as California, under the CCPA/CPRA) give residents specific rights regarding the sale or sharing of personal information, including information collected via cookies for advertising purposes. See the \"Your Choices\" section below for opt-out options.",
  },
  {
    title: "Canada",
    text: "Under Canadian privacy law (including PIPEDA), we aim to be transparent about the personal information we collect via cookies and to provide reasonable means for you to understand and manage that collection.",
  },
  {
    title: "Australia",
    text: "Under the Australian Privacy Act, we aim to handle any personal information collected via cookies responsibly and to be transparent about how it's used, consistent with the Australian Privacy Principles.",
  },
  {
    title: "Philippines",
    text: "Under the Philippine Data Privacy Act, we aim to process any personal data collected through cookies lawfully, transparently, and only for the purposes disclosed in this policy.",
  },
];

const browserInstructions = [
  { browser: "Chrome", path: "Settings → Privacy and Security → Cookies and other site data" },
  { browser: "Safari", path: "Preferences → Privacy → Manage Website Data" },
  { browser: "Firefox", path: "Settings → Privacy & Security → Cookies and Site Data" },
  { browser: "Edge", path: "Settings → Cookies and site permissions" },
];

export default function CookiePolicy() {
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
              <i className="ri-cake-3-line" /> Cookie Policy
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Cookie Policy
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400">
              Last updated: September 1, 2026
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-5xl">
          <div className="space-y-10">

            {/* Intro */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <p className="text-sm leading-relaxed text-gray-600">
                This Cookie Policy explains how Grams to Cups Converter (&quot;we,&quot; &quot;us,&quot;
                &quot;this Site&quot;) uses cookies and similar tracking technologies when you visit our
                website. This policy applies to visitors from all regions we serve, including the United
                States, Canada, the United Kingdom, the Philippines, and Australia, and it works alongside
                our{" "}
                <Link href="/privacy-policy" className="font-semibold hover:underline" style={{ color: ACCENT }}>
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            {/* What Are Cookies? */}
            <section>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">What Are Cookies?</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Cookies are small text files placed on your device (computer, tablet, or mobile phone) when
                you visit a website. They are widely used to make websites work more efficiently, remember
                your preferences, and provide information to the website owner. Similar technologies
                include web beacons, pixels, and local storage, which we refer to collectively as
                &quot;cookies&quot; in this policy for simplicity.
              </p>
            </section>

            {/* Types of Cookies We Use */}
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Types of Cookies We Use</h2>
              <div className="space-y-3">
                {cookieTypes.map((item) => (
                  <div key={item.title} className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                    <h3 className="mb-1 text-sm font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Third-Party Cookies</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Some cookies on this Site are placed by third parties, not by us directly. These include:
              </p>
              <ul className="mb-4 space-y-1.5 text-sm text-gray-600">
                {thirdPartyCookies.map((item) => (
                  <li key={item.lead} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>
                      <strong className="text-gray-800">{item.lead}</strong> {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-600">
                These third parties may collect information about your visits to this and other websites in
                order to provide personalized advertising and analytics. We do not control these
                third-party cookies, and their use is governed by the respective third party&apos;s own
                privacy and cookie policies.
              </p>
            </section>

            {/* Region-Specific Information */}
            <section>
              <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Region-Specific Information</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Because our Site is visited by users in several different countries, cookie rules and your
                available choices may vary depending on where you&apos;re located:
              </p>
              <div className="space-y-3">
                {regionInfo.map((item) => (
                  <div key={item.title} className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                    <h3 className="mb-1 text-sm font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Regardless of your location, you can control or limit cookies at any time using the browser
                settings described below.
              </p>
            </section>

            {/* How to Control or Disable Cookies */}
            <section className="rounded-[24px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to Control or Disable Cookies</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">You have several options for managing cookies:</p>

              <div className="mb-4 rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                <h3 className="mb-2 text-sm font-bold text-gray-900">Browser settings.</h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-600">
                  Most web browsers allow you to view, manage, delete, and block cookies through their
                  settings menu. Instructions vary by browser:
                </p>
                <ul className="mb-3 space-y-1.5 text-sm text-gray-600">
                  {browserInstructions.map((b) => (
                    <li key={b.browser} className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                      <span>
                        <strong className="text-gray-800">{b.browser}:</strong> {b.path}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed text-gray-600">
                  Note that blocking all cookies may affect the functionality of this and other websites.
                </p>
              </div>

              <div className="mb-4 rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                <h3 className="mb-2 text-sm font-bold text-gray-900">Advertising opt-outs.</h3>
                <p className="mb-2 text-sm leading-relaxed text-gray-600">
                  You can opt out of personalized advertising from Google and many other ad networks by
                  visiting:
                </p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>
                      <Link href="https://adssettings.google.com" className="font-semibold hover:underline" style={{ color: ACCENT }}>
                        Google Ads Settings
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>
                      <Link href="https://www.aboutads.info/choices" className="font-semibold hover:underline" style={{ color: ACCENT }}>
                        Your Online Choices / AboutAds.info
                      </Link>{" "}
                      (US)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} />
                    <span>
                      <Link href="https://www.youronlinechoices.com" className="font-semibold hover:underline" style={{ color: ACCENT }}>
                        Your Online Choices (EU/UK)
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-4 rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                <h3 className="mb-2 text-sm font-bold text-gray-900">Analytics opt-outs.</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  You can opt out of Google Analytics tracking across websites by installing the{" "}
                  <Link href="https://tools.google.com/dlpage/gaoptout" className="font-semibold hover:underline" style={{ color: ACCENT }}>
                    Google Analytics Opt-out Browser Add-on
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-4" style={{ borderColor: `${ACCENT}20` }}>
                <h3 className="mb-2 text-sm font-bold text-gray-900">Do Not Track.</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Some browsers offer a &quot;Do Not Track&quot; setting. Because there is no
                  industry-standard way to respond to these signals, our Site does not currently respond
                  differently based on a detected Do Not Track signal.
                </p>
              </div>
            </section>

            {/* Changes to This Cookie Policy */}
            <section className="rounded-[24px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">Changes to This Cookie Policy</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in the cookies we use,
                legal requirements, or our practices. Any changes will be posted on this page with an
                updated &quot;Last updated&quot; date. We encourage you to review this page periodically.
              </p>
            </section>

            {/* Contact Us */}
            <section
              className="rounded-[24px] border bg-white p-5 sm:p-6"
              style={{ borderColor: `${ACCENT}20` }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Contact Us
              </h2>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                If you have questions about our use of cookies, please contact us at:
              </p>

              <a
                href="/contact"
                className="mb-4 flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex sm:w-auto"
                style={{ backgroundColor: ACCENT }}
              >
                Contact Us
              </a>

              <p className="text-sm font-semibold text-gray-800">
                Email:{" "}
                <span className="font-normal text-gray-500">
                  contact@grams2cups.io
                </span>
              </p>
            </section>


            {/* Legal disclaimer footer */}
            <section className="rounded-2xl border bg-gray-50 p-4 text-xs italic leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>
              This Cookie Policy is intended to provide a general overview of our cookie practices across
              the regions we serve and does not constitute legal advice. Given that cookie consent
              requirements differ meaningfully between regions (particularly the UK/EU compared to the US),
              we recommend consulting a qualified attorney to confirm this policy meets your specific
              compliance obligations, and consider implementing a cookie consent banner if you have not
              already done so.
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}