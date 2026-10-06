"use client";

import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import SiteSearch from "@/components/SiteSearch";

const brandFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const navItems = [
  { label: "Ingredients", href: "/ingredients" },
  { label: "Conversion Charts", href: "/conversion-chart" },
  { label: "Cups To Grams", href: "/cups-to-grams" },
  { label: "Ml To Cups", href: "/ml-to-cups" },
  { label: "FAQs", href: "/faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    function handleHashChange() {
      setMobileOpen(false);
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/95 backdrop-blur-xl dark:border-[#22322c] dark:bg-[#121b17]/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between gap-3 sm:h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="group flex min-w-0 shrink items-center gap-0.5"
            aria-label="Grams To Cups home"
          >
            <img
              src="/Grams-to-cups-logo.svg"
              alt=""
              aria-hidden="true"
              width={58}
              height={58}
              className="h-16 w-16 shrink-0 rounded-lg object-contain sm:h-14 sm:w-14"
            />

            <span
              className={`${brandFont.className} truncate text-[19px] font-semibold leading-none tracking-[-0.035em] text-[#02b875] sm:text-[22px]`}
            >
              Grams To Cups
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className=" rounded-full px-3.5 py-2 text-[14px] font-medium text-gray-600 transition-colors duration-200 hover:bg-[#02b875cc] hover:text-white dark:text-white dark:hover:bg-[#02b875] dark:hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>



          {/* Desktop right side */}
          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden lg:block">
              <SiteSearch />
            </div>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#02b875]/20 text-gray-600 transition-colors hover:border-[#02b875]/40 hover:bg-[#02b875]/10 hover:text-[#02b875] dark:border-[#02b875]/20 dark:text-gray-300 dark:hover:border-[#02b875]/40 dark:hover:bg-[#02b875]/15 dark:hover:text-[#02b875] lg:hidden"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
            >
              <i
                className={
                  mobileOpen
                    ? "ri-close-line text-xl"
                    : "ri-menu-line text-xl"
                }
                aria-hidden="true"
              />
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-gray-100 py-4 dark:border-gray-800 lg:hidden">
            {/* Mobile Search */}
            <div className="flex justify-center px-1 pb-4">
              <div className="w-full max-w-xl">
                <SiteSearch variant="inline" />
              </div>
            </div>

            {/* Navigation links */}
            <div className="space-y-1 border-t border-gray-100 pt-3 dark:border-gray-800">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-[#22322c]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
