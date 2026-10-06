"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { searchSite, type SearchCategory, type SearchItem } from "@/lib/site-search";

const categoryOrder: SearchCategory[] = ["Ingredient", "Converter", "Conversion", "Blog"];

type SiteSearchProps = {
  variant?: "trigger" | "inline";
};

export default function SiteSearch({ variant = "trigger" }: SiteSearchProps) {
  const router = useRouter();
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const firstResultRef = useRef<HTMLAnchorElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchSite(query), [query]);

  const groupedResults = useMemo(
    () =>
      categoryOrder
        .map((category) => ({
          category,
          items: results.filter((item) => item.category === category),
        }))
        .filter((group) => group.items.length > 0),
    [results],
  );

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !containerRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function openSearch() {
    setOpen(true);
  }

  function chooseResult(item: SearchItem) {
    setOpen(false);
    setQuery("");
    router.push(item.href);
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (results[0]) {
      chooseResult(results[0]);
    }
  }

  const resultsPanel = query.trim() ? (
    <div
      id={`${id}-results`}
      className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 max-h-[min(65vh,28rem)] overflow-y-auto rounded-2xl border border-[#02b875]/20 bg-white p-2 text-left shadow-xl dark:border-[#02b875]/25 dark:bg-[#17211e]"
    >
      {results.length === 0 ? (
        <p className="px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
          No results for “{query}”. Try an ingredient or an amount such as
          100g.
        </p>
      ) : (
        <div className="space-y-2">
          {groupedResults.map((group) => (
            <section key={group.category} aria-label={group.category}>
              <h2 className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                {group.category === "Conversion"
                  ? "Conversion charts"
                  : group.category === "Blog"
                    ? "Blog & recipes"
                    : `${group.category}s`}
              </h2>

              <ul>
                {group.items.map((item, index) => (
                  <li key={`${item.category}:${item.href}:${item.title}`}>
                    <Link
                      ref={
                        group === groupedResults[0] && index === 0
                          ? firstResultRef
                          : undefined
                      }
                      href={item.href}
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                      className="block rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-[#02b875]/20 hover:bg-[#02b875]/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02b875] dark:hover:border-[#02b875]/20 dark:hover:bg-[#02b875]/10"
                    >
                      <span className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
                        {item.title}
                      </span>

                      <span className="mt-0.5 block text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                        {item.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  ) : null;

  if (variant === "inline") {
    return (
      <div ref={containerRef} className="relative w-full">
        <form onSubmit={submitSearch} role="search">
          <div
            className="flex h-11 items-center overflow-hidden rounded-xl border bg-white shadow-sm transition-colors focus-within:border-[#02b875] dark:bg-[#111816]"
            style={{ borderColor: "#02b87533" }}
          >
            <div
              className="flex h-full w-11 shrink-0 items-center justify-center"
              style={{ color: "#02b875" }}
            >
              <i className="ri-search-line text-base" aria-hidden="true" />
            </div>

            <label htmlFor={`${id}-input`} className="sr-only">
              Search ingredients, conversions, converters, and blog posts
            </label>

            <input
              ref={inputRef}
              id={`${id}-input`}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" && results.length > 0) {
                  event.preventDefault();
                  firstResultRef.current?.focus();
                }
              }}
              placeholder="Search measurements..."
              autoComplete="off"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={Boolean(query.trim())}
              aria-controls={`${id}-results`}
              className="h-full min-w-0 flex-1 border-0 bg-transparent pr-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-gray-100 dark:placeholder:text-gray-500"
            />
          </div>
        </form>

        {resultsPanel}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={open ? () => setOpen(false) : openSearch}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#02b875]/20 text-gray-600 transition-colors hover:border-[#02b875]/40 hover:bg-[#02b875]/10 hover:text-[#02b875] dark:border-[#02b875]/20 dark:text-gray-300 dark:hover:border-[#02b875]/40 dark:hover:bg-[#02b875]/15 dark:hover:text-[#02b875]"
        aria-label={
          open
            ? "Close search"
            : "Search ingredients, converters, and recipes"
        }
        aria-expanded={open}
        aria-controls="site-search-panel"
      >
        <i
          className={open ? "ri-close-line text-xl" : "ri-search-line text-xl"}
          aria-hidden="true"
        />
      </button>

      {open && (
        <section
          id="site-search-panel"
          className="absolute right-0 top-[calc(100%+12px)] z-[60] w-[min(92vw,28rem)] overflow-hidden rounded-2xl border border-[#02b875]/20 bg-white shadow-xl dark:border-[#02b875]/25 dark:bg-[#17211e]"
          aria-label="Site search"
        >
          <form
            onSubmit={submitSearch}
            role="search"
            className="border-b border-[#02b875]/10 p-3 dark:border-[#02b875]/15"
          >
            <label htmlFor={`${id}-input`} className="sr-only">
              Search ingredients, converters, conversions, and blog posts
            </label>

            <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 transition-colors focus-within:border-[#02b875] dark:border-[#40534a]">
              <i className="ri-search-line text-gray-400" aria-hidden="true" />

              <input
                ref={inputRef}
                id={`${id}-input`}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" && results.length > 0) {
                    event.preventDefault();
                    firstResultRef.current?.focus();
                  }
                }}
                placeholder="Search flour, 100g, cups to grams..."
                autoComplete="off"
                className="h-12 min-w-0 flex-1 border-0 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-0 dark:text-gray-100"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={query.trim().length > 0}
                aria-controls={`${id}-results`}
              />

              <kbd className="hidden rounded border border-gray-200 px-1.5 py-0.5 text-[10px] text-gray-400 sm:block dark:border-gray-600">
                ESC
              </kbd>
            </div>
          </form>

          <div
            id={`${id}-results`}
            className="max-h-[min(65vh,28rem)] overflow-y-auto p-2"
          >
            {!query.trim() ? (
              <p className="px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                Search ingredients, conversion tools, gram amounts, and recipes.
              </p>
            ) : results.length === 0 ? (
              <p className="px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                No results for “{query}”. Try an ingredient or an amount such as
                100g.
              </p>
            ) : (
              <div className="space-y-2">
                {groupedResults.map((group) => (
                  <section key={group.category} aria-label={group.category}>
                    <h2 className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      {group.category === "Conversion"
                        ? "Conversion charts"
                        : group.category === "Blog"
                          ? "Blog & recipes"
                          : `${group.category}s`}
                    </h2>

                    <ul>
                      {group.items.map((item, index) => (
                        <li
                          key={`${item.category}:${item.href}:${item.title}`}
                        >
                          <Link
                            ref={
                              group === groupedResults[0] && index === 0
                                ? firstResultRef
                                : undefined
                            }
                            href={item.href}
                            onClick={() => {
                              setOpen(false);
                              setQuery("");
                            }}
                            className="block rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-[#02b875]/20 hover:bg-[#02b875]/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02b875] dark:hover:border-[#02b875]/20 dark:hover:bg-[#02b875]/10"
                          >
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
                              {item.title}
                            </span>

                            <span className="mt-0.5 block text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                              {item.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
