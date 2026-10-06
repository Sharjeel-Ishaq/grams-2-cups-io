import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteSearch from "@/components/SiteSearch";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Baking & Measurement Guides | Grams To Cups",
  description:
    "Browse baking recipes and measurement guidance, including chocolate chip and chewy oatmeal cookies with gram-first ingredients.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Baking & Measurement Guides For Consistent Results | Grams To Cups",
    description:
      "Baking recipes and practical measurement guides with gram-first ingredients.",
    url: "/blog",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/images/chocolates-chips-cookies-featured-image.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baking & Measurement Guides For Consistent Results | Grams To Cups",
    description: "Baking recipes and practical measurement guides with gram-first ingredients.",
    images: ["/images/chocolates-chips-cookies-featured-image.webp"],
  },
};

const conversions = [
  { label: "50 grams to cups", href: "/50-grams-to-cups" },
  { label: "100 grams to cups", href: "/100-grams-to-cups" },
  { label: "150 grams to cups", href: "/150-grams-to-cups" },
  { label: "250 grams to cups", href: "/250-grams-to-cups" },
  { label: "Cups to grams", href: "/cups-to-grams" },
];

const posts = [
  {
    href: "/blog/spoon-and-level-method",
    image: "/images/spoon-level-featured-image.webp",
    alt: "Flour being spooned into a measuring cup and leveled with a knife",
    icon: "ri-scales-3-line",
    category: "Kitchen technique guide",
    meta: "Flour measuring",
    count: "Technique guide",
    title: "The Spoon-and-Level Method: Why How You Measure Flour Matters",
    description:
      "Learn how to fluff, spoon, and level flour for more reliable baking, why scooping can add too much flour, and when a kitchen scale is the better choice.",
    linkText: "Read the guide",
  },
  {
    href: "/blog/moist-banana-bread",
    image: "/images/moist-banana-bread-featured-image.webp",
    alt: "Freshly baked moist banana bread, ready to slice",
    icon: "ri-cake-3-line",
    category: "Recipe guide",
    meta: "About 1 hour 20 minutes",
    count: "1 loaf",
    title: "Moist Banana Bread (With a Caramel Drizzle Option)",
    description:
      "A tender banana bread recipe with ripe bananas, gram-first measurements, practical baking techniques, and an optional stovetop caramel drizzle.",
    linkText: "Open the recipe",
  },
  {
    href: "/blog/chocolate-chip-cookies",
    image: "/images/chocolates-chips-cookies-featured-image.webp",
    alt: "Fresh chocolate chip cookies with chocolate chips ready for baking",
    icon: "ri-cake-3-line",
    category: "Recipe guide",
    meta: "About 30–40 minutes",
    count: "12 cookies",
    title: "Classic Chocolate Chip Cookies: Grams and Cups",
    description:
      "Crisp edges, soft centers, and chocolate in every bite. Follow the recipe with ingredient quantities in both grams and cups, plus practical notes for measuring flour and getting the texture right.",
    linkText: "Open the recipe",
  },
  {
    href: "/blog/chewy-oatmeal-cookies",
    image: "/images/chewy-oatmeal-cookies-hero-image.webp",
    alt: "Chewy oatmeal cookies with melted chocolate chips",
    icon: "ri-cup-line",
    category: "Recipe guide",
    meta: "About 30 minutes",
    count: "About 2 dozen",
    title: "Chewy Oatmeal Cookies: Gram-First Recipe & Techniques",
    description:
      "Crisp edges, chewy centers, and genuine oat flavor. A gram-first oatmeal cookie recipe with ingredient conversions and practical techniques.",
    linkText: "Open the recipe",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-[#111816]">
      <Navbar />

      <main>
        {/* =========================
            HERO
        ========================== */}
        <section className="border-b border-[#e4efe9] bg-white dark:border-[#263832] dark:bg-[#17211e]">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase"
                style={{
                  backgroundColor: `${ACCENT}12`,
                  color: ACCENT,
                }}
              >
                <i className="ri-book-open-line" aria-hidden="true" />
                From the kitchen
              </div>

              <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 dark:text-gray-100 sm:text-5xl">
                Baking, Measured well — Every Time
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                Practical recipes and measurement notes for more predictable
                results, whether you reach for a scale or a measuring cup.
                Every recipe includes exact gram weights alongside cups, so it
                turns out the same way every time.
              </p>

              {/* Topics */}
              <div
                className="mt-6 flex flex-wrap justify-center gap-2"
                aria-label="Guide topics"
              >
                {[
                  "Recipes",
                  "Baking",
                  "Ingredient weights",
                  "Cup conversions",
                  "Consistent results",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200"
                    style={{
                      borderColor: `${ACCENT}25`,
                      backgroundColor: `${ACCENT}08`,
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Search */}
              <div className="mx-auto mt-6 max-w-xl">
                <SiteSearch variant="inline" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8 lg:py-10">
          {/* =========================
              BLOG LIST
          ========================== */}
          <section className="min-w-0">
            <div className="space-y-4">
              {posts.map((post) => (
                <article
                  key={post.href}
                  className="overflow-hidden rounded-xl border bg-white dark:bg-[#17211e]"
                  style={{ borderColor: `${ACCENT}20` }}
                >
                  <Link
                    href={post.href}
                    className="group flex min-w-0 gap-4 p-3 sm:gap-5 sm:p-4"
                    aria-label={`Read ${post.title}`}
                  >
                    {/* Compact Image */}
                    <div className="relative flex h-[118px] w-[118px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#edf4ef] dark:bg-[#1d2b26] sm:h-[135px] sm:w-[155px]">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.alt ?? ""}
                          fill
                          sizes="(max-width: 640px) 118px, 155px"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                        />
                      ) : (
                        <i
                          className={`${post.icon} text-4xl text-[#02b875] transition-transform duration-500 group-hover:scale-110`}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Post Content */}
                    <div className="flex min-w-0 flex-1 flex-col justify-center py-0.5">
                      <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-medium text-gray-500 dark:text-gray-400 sm:text-xs">
                        <span
                          className="rounded-full px-2 py-0.5 font-semibold uppercase"
                          style={{
                            backgroundColor: `${ACCENT}12`,
                            color: ACCENT,
                          }}
                        >
                          {post.category}
                        </span>

                        <span aria-hidden="true">·</span>
                        <span>{post.meta}</span>

                        <span aria-hidden="true">·</span>
                        <span>{post.count}</span>
                      </div>

                      <h2 className="line-clamp-2 text-base font-bold leading-tight tracking-[-0.015em] text-gray-900 transition-colors group-hover:text-[#087f58] dark:text-gray-100 sm:text-lg">
                        {post.title}
                      </h2>

                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
                        {post.description}
                      </p>

                      <span
                        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold sm:text-sm"
                        style={{ color: ACCENT }}
                      >
                        {post.linkText}
                        <i
                          className="ri-arrow-right-line transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* =========================
              SIDEBAR
          ========================== */}
          <aside className="space-y-5">
            {/* Need a conversion */}
            <section
              className="rounded-2xl border bg-white p-5 dark:bg-[#17211e]"
              style={{ borderColor: `${ACCENT}20` }}
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                <i
                  className="ri-scales-3-line"
                  style={{ color: ACCENT }}
                  aria-hidden="true"
                />
                Need a conversion?
              </div>

              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Choose an ingredient-specific reference or convert a different
                amount.
              </p>

              <Link
                href="/"
                className="mt-5 flex h-10 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                style={{ backgroundColor: ACCENT }}
              >
                Open the converter
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </Link>
            </section>

            {/* Quick references */}
            <section
              className="rounded-2xl border bg-white p-5 dark:bg-[#17211e]"
              style={{ borderColor: `${ACCENT}20` }}
            >
              <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                <i
                  className="ri-exchange-line"
                  style={{ color: ACCENT }}
                  aria-hidden="true"
                />
                Some Popular conversions
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {conversions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2.5 py-2 text-xs font-medium text-gray-700 transition-colors hover:text-[#087f58] dark:text-gray-200 dark:hover:text-[#63d9ad]"
                    style={{ backgroundColor: `${ACCENT}0d` }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>

            {/* The useful detail */}
            <section
              className="rounded-2xl border bg-white p-5 dark:bg-[#17211e]"
              style={{ borderColor: `${ACCENT}20` }}
            >
              <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                <i
                  className="ri-leaf-line"
                  style={{ color: ACCENT }}
                  aria-hidden="true"
                />
                The useful detail
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                A cup measures volume, while grams measure mass. The
                ingredient and how it is measured determine the conversion.
              </p>

              <Link
                href="/grams-to-cups-accuracy"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                style={{ color: ACCENT }}
              >
                Read the accuracy guide
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </Link>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
