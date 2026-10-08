import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

// Wordmark font
const brandFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const ACCENT = "#02b875";

const navLinks = [
  { label: "All ingredients", href: "/ingredients" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Ingredients", href: "/ingredients" },
  { label: "100 grams to cups", href: "/100-grams-to-cups" },
  { label: "Accuracy guide", href: "/grams-to-cups-accuracy" },
  { label: "Conversion chart", href: "/conversion-chart" },
];

const converterLinks = [
  { label: "Grams To Cups", href: "/" },
  // { label: "Grams to cups guide", href: "/grams-to-cups" },
  { label: "Cups To Grams", href: "/cups-to-grams" },
  { label: "Grams To Ounces", href: "/grams-to-ounces" },
  { label: "Ml To Cups", href: "/ml-to-cups" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookies Policy", href: "/cookies-policy" },
];

const linkClass =
  "inline-block py-0.5 transition-colors hover:text-[#02b875]";

const headingClass =
  "text-xs font-bold uppercase tracking-[0.18em] text-gray-800";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="min-w-0">
      <h2 className={headingClass}>{title}</h2>

      <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#dcebe3] bg-[#f1f7f3]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:gap-x-8">
          {/* Brand */}
          <div className="sm:col-span-3 lg:col-span-1">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="Grams To Cups home"
            >
              <img
                src="/grams-to-cups-footer.svg"
                alt=""
                aria-hidden="true"
                width={60}
                height={60}
                className="h-13 w-13 shrink-0 rounded-xl object-contain"
              />

              <span
                className={`${brandFont.className} text-2xl font-semibold leading-none tracking-[-0.035em] text-[#02b875] transition-colors`}
              >
                Grams To Cups
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 lg:max-w-xs">
              Ingredient-specific gram to cup conversions for baking and
              everyday cooking, with practical reference charts when
              precision matters.
            </p>

            {/* Divider only on tablet */}
            <div className="mt-8 hidden h-px w-full bg-[#dcebe3] sm:block lg:hidden" />
          </div>

          {/* Navigation */}
          <FooterColumn title="Navigation" links={navLinks} />

          {/* Explore */}
          <FooterColumn title="Explore" links={resourceLinks} />

          {/* Converter */}
          <FooterColumn title="Converter" links={converterLinks} />

          {/* Legal */}
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        {/* A Useful Standard */}
        <div className="footer-standard mt-10 rounded-2xl border border-[#dcebe3] bg-white/60 px-5 py-4">
          <h2 className={headingClass}>A useful standard</h2>

          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
            Grams measure weight; cups measure volume. The correct conversion
            depends on the ingredient, its preparation, and the measuring
            method.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#dcebe3] pt-5 text-xs leading-relaxed text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="hover:underline"
              style={{ color: ACCENT }}
            >
              Grams2Cups.Io
            </Link>{" "}
            Built for better kitchen conversions.
          </p>

          <p className="sm:text-right">
            Measurements are practical estimates. Use a scale when precision
            matters.
          </p>
        </div>
      </div>
    </footer>
  );
}