import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactMessageForm from "@/components/ContactMessageForm";

const ACCENT = "#02b875";
const CONTACT_EMAIL = "contact@grams2cups.io";
const SITE_URL = "https://grams2cups.io";

export const metadata: Metadata = {
  title: "Contact — Grams to Cups Converter",
  description:
    "Contact Grams2Cups with conversion corrections, ingredient suggestions, or questions about kitchen measurements.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Grams to Cups Converter",
    description:
      "Get in touch with the Grams2Cups team about ingredient conversions, corrections, and website feedback.",
    url: "/contact",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Grams to Cups Converter",
    description:
      "Questions or feedback about kitchen measurements? Contact Grams2Cups.",
    images: ["/og-image.jpg"],
  },
};

const helpfulLinks = [
  {
    label: "Ingredient conversion guide",
    href: "/ingredients",
    icon: "ri-leaf-line",
  },
  {
    label: "Grams-to-cups accuracy guide",
    href: "/grams-to-cups-accuracy",
    icon: "ri-scales-3-line",
  },
  {
    label: "Frequently asked questions",
    href: "/faq",
    icon: "ri-question-answer-line",
  },
  {
    label: "Baking recipes and guides",
    href: "/blog",
    icon: "ri-book-open-line",
  },
];

const socialLinks = [
  {
    label: "Follow us on Facebook",
    href: "https://web.facebook.com/gram2cup",
    icon: "ri-facebook-fill",
  },
  {
    label: "Follow us on X",
    href: "https://x.com/grams2cups",
    icon: "ri-twitter-x-fill",
  },
  {
    label: "Follow us on Instagram",
    href: "https://www.instagram.com/grams2cups.io/",
    icon: "ri-instagram-line",
  },
  {
    label: "Follow us on Pinterest",
    href: "https://www.pinterest.com/Grams2Cups/",
    icon: "ri-pinterest-fill",
  },
  {
    label: "Follow us on YouTube",
    href: "https://www.youtube.com/@grams2cups",
    icon: "ri-youtube-fill",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-[#111816]">
      <Navbar />

      <section className="border-b border-[#e4efe9] bg-white dark:border-[#263832] dark:bg-[#17211e]">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <div
            className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: `${ACCENT}12`,
              color: ACCENT,
            }}
          >
            <i className="ri-mail-line" aria-hidden="true" />
            Contact Grams2Cups
          </div>

          <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 dark:text-gray-100 sm:text-5xl">
            Get in touch
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
            Have a question about a conversion, spotted something we should
            correct, or want to suggest an ingredient? Send us a note.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid overflow-hidden rounded-[28px] border border-[#02b875]/15 bg-white shadow-[0_18px_60px_rgba(22,67,47,0.08)] dark:border-[#33443d] dark:bg-[#17211e] lg:grid-cols-[0.85fr_1.15fr]">

          {/* Contact Details */}
          <aside className="bg-[#f1f7f3] p-6 dark:bg-[#1c2924] sm:p-8 lg:p-10">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-gray-900 dark:text-gray-100">
              Contact details
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              We’re an online kitchen-conversion resource. Email is the best
              way to reach us about corrections, feedback, or questions.
            </p>

            {/* Contact Information */}
            <div className="mt-7 space-y-5">

              {/* Address */}
              <div className="flex items-start gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `${ACCENT}15`,
                    color: ACCENT,
                  }}
                >
                  <i
                    className="ri-map-pin-2-line text-xl"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Address
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    Online resource
                    <br />
                    No public office address yet
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `${ACCENT}15`,
                    color: ACCENT,
                  }}
                >
                  <i
                    className="ri-mail-line text-xl"
                    aria-hidden="true"
                  />
                </span>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Email us
                  </h3>

                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 inline-block break-all text-sm font-medium transition-colors hover:underline"
                    style={{ color: ACCENT }}
                  >
                    {CONTACT_EMAIL}
                  </a>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Best for corrections, questions, and feedback.
                  </p>
                </div>
              </div>
            </div>

            {/* Helpful Links */}
            <section className="mt-8 border-t border-[#02b875]/15 pt-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Helpful links
              </h3>

              <ul className="mt-3 space-y-2.5">
                {helpfulLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#02b875] dark:text-gray-300 dark:hover:text-[#02b875]"
                    >
                      <i
                        className={`${link.icon} text-base`}
                        style={{ color: ACCENT }}
                        aria-hidden="true"
                      />

                      <span>{link.label}</span>

                      <i
                        className="ri-arrow-right-up-line text-xs opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Follow Us */}
            <section className="mt-8 border-t border-[#02b875]/15 pt-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Follow Us
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                Follow Grams2Cups for recipes, conversion tips, and kitchen
                guides.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02b875] focus-visible:ring-offset-2"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <i
                      className={`${social.icon} text-lg`}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </section>
          </aside>

          {/* Contact Form */}
          <section
            className="p-6 sm:p-8 lg:p-10"
            aria-labelledby="contact-form-heading"
          >
            <div className="mb-6">
              <p
                className="text-xs font-semibold uppercase tracking-[0.16em]"
                style={{ color: ACCENT }}
              >
                We’d love to hear from you
              </p>

              <h2
                id="contact-form-heading"
                className="mt-2 text-2xl font-bold tracking-[-0.02em] text-gray-900 dark:text-gray-100"
              >
                Send us a message
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Fill in the details and your email app will open with your
                message addressed to us.
              </p>
            </div>

            <ContactMessageForm
              email={CONTACT_EMAIL}
              accent={ACCENT}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
