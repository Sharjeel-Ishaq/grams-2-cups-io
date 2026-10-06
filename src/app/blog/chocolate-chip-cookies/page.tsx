import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Classic Chocolate Chip Cookies: Complete Recipe From Grams To Cups",
  description:
    "Bake classic chocolate chip cookies with measurements in grams and cups. Crisp edges, soft centers, and practical baking tips.",
  alternates: { canonical: "/blog/chocolate-chip-cookies" },
  openGraph: {
    title: "Classic Chocolate Chip Cookies: Complete Recipe From Grams To Cups",
    description: "Crisp at the edges, soft in the center: a complete cookie recipe with gram and cup measurements.",
    url: "/blog/chocolate-chip-cookies",
    siteName: "Grams2Cups",
    type: "article",
    images: ["/images/chocolates-chips-cookies-featured-image.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Classic Chocolate Chip Cookies: Complete Recipe From Grams To Cups",
    description: "A classic chocolate chip cookie recipe with gram and cup measurements.",
    images: ["/images/chocolates-chips-cookies-featured-image.webp"],
  },
};

type IngredientRow = {
  ingredient: string;
  href?: string;
  grams: string;
  cup: string;
};

const recipeIngredients: IngredientRow[] = [
  { ingredient: "Unsalted butter, softened", href: "/butter", grams: "113 g", cup: "½ cup" },
  { ingredient: "Brown sugar", href: "/brown-sugar", grams: "150 g", cup: "About ¾ cup" },
  { ingredient: "Granulated sugar", href: "/sugar", grams: "100 g", cup: "½ cup" },
  { ingredient: "Large egg", grams: "1", cup: "1 egg" },
  { ingredient: "Vanilla extract", grams: "—", cup: "1 teaspoon" },
  { ingredient: "All-purpose flour", href: "/flour", grams: "190 g", cup: "About 1½ cups" },
  { ingredient: "Cornstarch", grams: "8 g", cup: "1 tablespoon" },
  { ingredient: "Baking soda", href: "/baking-powder", grams: "—", cup: "½ teaspoon" },
  { ingredient: "Salt", href: "/salt", grams: "—", cup: "½ teaspoon" },
  { ingredient: "Chocolate chips", href: "/chocolate-chips", grams: "170 g", cup: "About 1 cup" },
];

const tips = [
  {
    title: "Keep flour measurements accurate.",
    desc: "An excess of flour in the cookie dough can result in dry and hard cookies; therefore, for the best results, be sure to weigh the flour in grams if possible.",
  },
  {
    title: "The butter should not be too hot.",
    desc: "The butter should be soft and ready to use, but do not let it melt completely, as overly melted butter can affect the dough's texture and the way the cookies spread during baking.",
  },
  {
    title: "Do not overmix the dough.",
    desc: "After adding the dry ingredients, mix just enough to combine the ingredients. Overmixing can make the texture tough.",
  },
  {
    title: "Use good chocolate.",
    desc: "Chocolate chips are easy and convenient, but using chopped chocolate results in different sized chocolate pieces in the cookies and the texture of each bite feels slightly different.",
  },
  {
    title: "Try flaky salt.",
    desc: "If you like a sweet-and-salty combination, sprinkle a small amount of flaky sea salt over the warm cookies.",
  },
];

const method = [
  { title: "Prepare the oven", body: "Preheat the oven to 350°F (175°C) and line two baking trays with baking paper." },
  { title: "Cream the butter and sugars", body: "Beat the softened butter, brown sugar, and granulated sugar for 2 to 3 minutes, until smooth, light, and well combined." },
  { title: "Add egg and vanilla", body: "Mix in the egg and vanilla until combined. Room-temperature egg blends more easily into the butter and sugar." },
  { title: "Combine the dry ingredients", body: "In a separate bowl, whisk together the flour, cornstarch, baking soda, and salt. Add to the wet mixture and mix on low only until the dry pockets disappear. Do not overmix." },
  { title: "Fold in the chocolate", body: "Gently fold in the chocolate chips, reserving a few to press onto the tops of the dough balls if desired." },
  { title: "Shape the cookies", body: "Scoop 2 to 3 tablespoons of dough per cookie and place on the prepared trays, leaving space for spreading." },
  { title: "Bake", body: "Bake for 9 to 12 minutes, until the edges are lightly golden and the centers still look soft." },
  { title: "Cool", body: "Let the cookies rest on the tray for about 10 minutes, then transfer to a rack. They continue setting as they cool." },
];

export default function ChocolateChipCookiesPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />
      <section className="relative overflow-hidden border-b border-[#e4efe9] bg-white">
        <div className="relative mx-auto max-w-4xl px-4 py-8 text-center sm:px-6 sm:py-6 lg:px-8">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>
            <i className="ri-cake-3-line" aria-hidden="true" /> Baking Recipe &amp; Conversion Guide
          </div>
          <h1 className="text-3xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
            Classic Chocolate Chip Cookies: Complete Recipe From Grams To Cups
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            If you are looking for classic chocolate chip cookies that are slightly crisp at the edges, soft in the center, and packed with melted chocolate in every bite, then you must try this easy recipe. The key ingredients are listed in both grams and cups so you can measure them according to your preference. Best of all, these delicious cookies come together in about 30 to 40 minutes without requiring any special or hard-to-find ingredients.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold text-gray-600">
            <span className="rounded-full bg-gray-100 px-3 py-1" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>Prep: 15 mins</span>
            <span className="rounded-full bg-gray-100 px-3 py-1" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>Bake: 9–12 mins</span>
            <span className="rounded-full bg-gray-100 px-3 py-1" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>Yield: 12 large cookies</span>
          </div>
        </div>
      </section>

      <section className="mt-6 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <figure
          className="overflow-hidden rounded-[20px] border bg-white"
          style={{ borderColor: `${ACCENT}20` }}
        >
          <Image
            src="/images/chocolates-chips-cookies-featured-image.webp"
            alt="Featured chocolate chip cookies with melted chocolate chips"
            width={1600}
            height={1067}
            className="h-auto w-full object-cover"
            priority
          />
          <figcaption className="px-4 py-2 text-xs text-gray-500">
            Featured chocolate chip cookies recipe image.
          </figcaption>
        </figure>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="space-y-10">
          <section className="rounded-[24px] border bg-white p-6" style={{ borderColor: `${ACCENT}20` }}>
            <p className="text-sm leading-relaxed text-gray-600">
              The recipe lists ingredients in grams and cups so you can use the measuring method available to you. For the most repeatable results, especially with flour, a kitchen scale is best. See our <Link href="/ingredients" className="font-semibold hover:underline" style={{ color: ACCENT }}>ingredient reference</Link> for more on how ingredient weights differ.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Ingredients For Chocolate Chip Cookies</h2>
            <p className="mb-4 text-sm text-gray-600">Gather these ingredients to make approximately 12 large cookies:</p>
            <figure className="mb-4 overflow-hidden rounded-[20px] border bg-white" style={{ borderColor: `${ACCENT}20` }}>
              <Image
                src="/images/ingredients-for-chocolate-chip-cookies.webp"
                alt="Featured chocolate chip cookies with melted chocolate chips"
                width={1600}
                height={1067}
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="px-4 py-2 text-xs text-gray-500">Featured chocolate chip cookies recipe image.</figcaption>
            </figure>
            <div className="overflow-x-auto rounded-[20px] border bg-white" style={{ borderColor: `${ACCENT}20` }}>
              <table className="w-full min-w-[400px] text-sm">
                <thead style={{ backgroundColor: ACCENT }}>
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Cup/Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {recipeIngredients.map((item, index) => (
                    <tr key={item.ingredient} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                      <td className="px-4 py-3 font-medium text-gray-800">
                        {item.href ? <Link href={item.href} className="hover:underline" style={{ color: ACCENT }}>{item.ingredient}</Link> : item.ingredient}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{item.grams}</td>
                      <td className="px-4 py-3 font-semibold" style={{ color: ACCENT }}>{item.cup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-500">Optional: sprinkle flaky or sea <Link href="/salt" className="underline" style={{ color: ACCENT }}>salt</Link> over the warm cookies.</p>
          </section>

          <section className="rounded-[24px] p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Grams or cups?</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Cup measurements can vary because ingredients settle and pack differently. Weighing flour gives more consistent results; if you use cups, spoon the flour in lightly and level it rather than scooping directly from the bag. Learn more in our <Link href="/grams-to-cups-accuracy" className="font-semibold hover:underline" style={{ color: ACCENT }}>conversion accuracy guide</Link>.
            </p>
          </section>

          <section className="rounded-[24px] border bg-white p-6" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-6 text-2xl font-bold tracking-[-0.02em] text-gray-900">How to make chocolate chip cookies</h2>
            <ol className="space-y-6 text-sm text-gray-600">
              {method.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-bold text-white" style={{ backgroundColor: ACCENT }}>{index + 1}</span>
                  <div><strong className="block text-base font-semibold text-gray-900">{step.title}.</strong>{step.body}</div>
                </li>
              ))}
            </ol>
          </section>

          {/* How to convert flour from grams to cups? */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">
              How to convert flour from grams to cups?
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-gray-600">
              Since flour is the main ingredient in this recipe, it is useful to understand the difference between grams and cups.
            </p>
            <p className="mb-3 text-sm font-semibold text-gray-800">
              This recipe contains approximately:
            </p>
            <div
              className="mb-4 inline-block rounded-xl px-4 py-2 font-semibold text-sm"
              style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
            >
              190 grams all-purpose flour ≈ 1½ cups
            </div>
            <p className="mb-3 text-sm leading-relaxed text-gray-600">
              But this is an approximate conversion. The weight of the flour may vary depending on how you press, spoon, or level it in the cup.
            </p>
            <p className="mb-3 text-sm leading-relaxed text-gray-600">
              That is why, if a recipe specifies 190 grams of flour, using a kitchen scale is a more reliable method than relying solely on cup measurements.
            </p>
            <p className="text-sm leading-relaxed text-gray-600">
              If you are converting a recipe from grams to cups, keep the nature of each ingredient in mind, because a cup of flour, sugar, and chocolate chips does not weigh the same.
            </p>
          </section>

          {/* Some important tips for making the best cookies */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-6 text-2xl font-bold tracking-[-0.02em] text-gray-900">
              Some important tips for making the best cookies
            </h2>
            <div className="space-y-4">
              {tips.map((t) => (
                <div key={t.title} className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                  <div>
                    <strong className="text-sm font-semibold text-gray-900">{t.title}</strong>
                    <p className="text-sm leading-relaxed text-gray-600">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Can cookie dough be made in advance? */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">
              Can cookie dough be made in advance?
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Yes. If you want to bake fresh cookies later, the dough can be portioned in advance and saved.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Form small portions of cookie dough, place them on baking paper, and put them in the freezer for 1 to 2 hours. Once they are thoroughly frozen, transfer them to an airtight bag or container. When ready to bake, place the frozen dough balls directly onto the baking tray and bake for a few extra minutes if necessary.
            </p>
          </section>

          {/* Classic Chocolate Chip Cookies Summary Footer Box */}
          <section
            className="rounded-[24px] p-6 shadow-sm"
            style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}
          >
            <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">
              Classic Chocolate Chip Cookies
            </h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-4 text-sm text-gray-700">
              <div><strong className="text-gray-900">Preparation time:</strong> 15 minutes</div>
              <div><strong className="text-gray-900">Baking time:</strong> 9–12 minutes</div>
              <div><strong className="text-gray-900">Total time:</strong> Approximately 30–40 minutes</div>
              <div><strong className="text-gray-900">Servings:</strong> About 12 large cookies</div>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-gray-600">
              These cookies should be lightly crisp on the outside, soft in the middle, and chocolaty. If you like them chewier, avoid overbaking them.
            </p>
            <p className="mb-3 text-sm leading-relaxed text-gray-600">
              And if you want to make a recipe in cups instead of grams, be sure to take into account ingredient-specific conversions—especially for flour.
            </p>
            <p className="text-sm font-semibold text-gray-900">
              Remember a simple rule: in baking, grams offer precision, while cups offer convenience.
            </p>
          </section>

          <section className="rounded-[24px] border bg-white p-6" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">Why grams-to-cups conversions vary</h2>
            <p className="mb-3 text-sm leading-relaxed text-gray-600">Grams measure mass and cups measure volume. Different ingredients have different densities, so one cup of flour, brown sugar, butter, or chocolate chips has a different weight.</p>
            <p className="text-sm leading-relaxed text-gray-600">Explore our <Link href="/conversion-chart" className="font-semibold hover:underline" style={{ color: ACCENT }}>conversion chart</Link>, <Link href="/grams-to-cups-accuracy" className="font-semibold hover:underline" style={{ color: ACCENT }}>accuracy guide</Link>, or amount-specific references for <Link href="/100-grams-to-cups" className="hover:underline" style={{ color: ACCENT }}>100 grams</Link>, <Link href="/150-grams-to-cups" className="hover:underline" style={{ color: ACCENT }}>150 grams</Link>, <Link href="/200-grams-to-cups" className="hover:underline" style={{ color: ACCENT }}>200 grams</Link>, and <Link href="/250-grams-to-cups" className="hover:underline" style={{ color: ACCENT }}>250 grams</Link>.</p>
          </section>

          <div className="text-center pt-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold transition-colors hover:underline"
              style={{ color: ACCENT }}
            >
              <i className="ri-arrow-left-line" /> Back to Kitchen Measurement Blog
            </Link>
          </div>

          <section className="rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>
            <p className="mb-3 font-semibold text-gray-700">Explore More Baking &amp; Conversion Resources</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {[
                { name: "Chocolate chips", href: "/chocolate-chips" },
                { name: "Flour", href: "/flour" },
                { name: "Brown sugar", href: "/brown-sugar" },
                { name: "50g to cups", href: "/50-grams-to-cups" },
                { name: "100g to cups", href: "/100-grams-to-cups" },
                { name: "120g to cups", href: "/120-grams-to-cups" },
                { name: "150g to cups", href: "/150-grams-to-cups" },
                { name: "200g to cups", href: "/200-grams-to-cups" },
                { name: "250g to cups", href: "/250-grams-to-cups" },
                { name: "Grams to ounces", href: "/grams-to-ounces" },
                { name: "mL to cups", href: "/ml-to-cups" },
                { name: "FAQs", href: "/faq" },
                { name: "Blog", href: "/blog" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2 font-medium text-gray-700 transition-colors hover:border-current" style={{ borderColor: `${ACCENT}20` }}>
                  <span className="truncate">{item.name}</span>
                <i className="ri-arrow-right-s-line flex-shrink-0" style={{ color: ACCENT }} />
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}