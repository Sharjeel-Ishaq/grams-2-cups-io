import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Moist Banana Bread Recipe (With Caramel Drizzle Option)",
  description:
    "A simple, genuine banana bread formula featuring gram-first measurements, ripe bananas, proper creaming techniques, and an optional stovetop caramel drizzle.",
  alternates: { canonical: "/blog/moist-banana-bread" },
  openGraph: {
    title: "Moist Banana Bread Recipe (With Caramel Drizzle Option)",
    description: "Moist crumb, rich brown sugar notes, and an optional pan caramel drizzle.",
    url: "/blog/moist-banana-bread",
    siteName: "Grams2Cups",
    type: "article",
    images: ["/images/moist-banana-bread-featured-image.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moist Banana Bread Recipe (With Caramel Drizzle Option)",
    description: "A simple, genuine banana bread formula featuring gram-first measurements and expert baking techniques.",
    images: ["/images/moist-banana-bread-featured-image.webp"],
  },
};

type IngredientRow = {
  ingredient: string;
  href?: string;
  grams: string;
  cup: string;
};

const recipeIngredients: IngredientRow[] = [
  { ingredient: "All-purpose flour", href: "/flour", grams: "240 g", cup: "2 cups" },
  { ingredient: "Baking soda", href: "/baking-powder", grams: "—", cup: "1 teaspoon" },
  { ingredient: "Salt", href: "/salt", grams: "—", cup: "¼ teaspoon" },
  { ingredient: "Ground cinnamon", grams: "—", cup: "½ teaspoon" },
  { ingredient: "Unsalted butter, softened", href: "/butter", grams: "113 g", cup: "½ cup" },
  { ingredient: "Brown sugar, packed", href: "/brown-sugar", grams: "165 g", cup: "¾ cup" },
  { ingredient: "Large eggs", grams: "2", cup: "2" },
  { ingredient: "Ripe bananas, mashed", grams: "~340 g", cup: "1½ cups (about 3–4 bananas)" },
  { ingredient: "Buttermilk (or milk + 1 tbsp lemon juice)", href: "/milk", grams: "~80 g", cup: "⅓ cup" },
  { ingredient: "Vanilla extract", grams: "—", cup: "1 teaspoon" },
  { ingredient: "Optional: chopped pecans or walnuts", grams: "90 g", cup: "¾ cup" },
  { ingredient: "Optional: chocolate chips", href: "/chocolate-chips", grams: "170 g", cup: "1 cup" },
];

const caramelIngredients = [
  { ingredient: "Unsalted butter", href: "/butter", amount: "57 g (4 tablespoons)" },
  { ingredient: "Brown sugar, packed", href: "/brown-sugar", amount: "110 g (½ cup)" },
  { ingredient: "Milk", href: "/milk", amount: "60 g (¼ cup)" },
  { ingredient: "Vanilla extract", amount: "1 teaspoon" },
];

const methodSteps = [
  { title: "Preheat the oven and prepare pan", body: "Preheat the oven to 350°F (175°C). Position the rack in the lower third of the oven — this keeps the top of the loaf from browning too quickly before the center finishes baking. Grease a 9×5-inch loaf pan." },
  { title: "Mash the bananas", body: "The riper and spottier, the better — very ripe bananas are both sweeter and easier to mash smooth. A handheld or stand mixer on low-to-medium speed makes quick work of this if you don't want to do it by hand with a fork; just don't over-process it into pure liquid, since a few small banana pieces are fine." },
  { title: "Whisk the dry ingredients", body: "In a separate bowl, combine the flour, baking soda, salt, and cinnamon, and mix well until thoroughly blended. Set the mixture aside for now." },
  { title: "Cream the butter and brown sugar", body: "Beat the softened butter and brown sugar together until light and slightly fluffy, about 2 to 3 minutes. This step matters more than it looks — creaming properly incorporates air into the batter, which supports the bread's rise and texture. (There is no need to worry if a mixer is not available; this step can easily be completed with a little effort using a large whisk.)" },
  { title: "Add eggs", body: "Add the eggs to the mixture one by one, beating well after each addition, until the mixture is completely uniform and smooth, and the eggs are no longer visible as separate entities." },
  { title: "Mix in wet ingredients", body: "Mix in the mashed banana, buttermilk, and vanilla on low speed until just combined." },
  { title: "Combine dry and wet mixtures", body: "Add the dry ingredients in two additions, alternating with the wet mixture, mixing on low just until no streaks of flour remain. Overmixing at this stage develops gluten and can leave the loaf tougher than it should be — stop as soon as it looks combined." },
  { title: "Fold in mix-ins", body: "Fold in nuts or chocolate chips, if using." },
  { title: "Bake", body: "Pour into the prepared pan, tap it gently on the counter a couple of times to settle the batter and release large air bubbles, and bake for 55 to 65 minutes. If the top is browning too fast partway through, loosely tent it with aluminum foil for the remainder of the bake." },
  { title: "Test for doneness", body: "To check if the cake is done, insert a toothpick into the center. If the toothpick comes out clean or with only a few slightly moist crumbs attached, the cake is ready; however, there should be no raw batter on it." },
  { title: "Cool and release", body: "Cool in the pan on a wire rack for about 20 to 25 minutes before turning the loaf out. Running a butter knife around the edge first, then inverting the pan onto a clean towel, helps release it cleanly. Let it cool further before slicing." },
];

export default function MoistBananaBreadPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#e4efe9] bg-white">
        <div className="relative mx-auto max-w-4xl px-4 py-8 text-center sm:px-6 sm:py-6 lg:px-8">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>
            <i className="ri-cake-3-line" aria-hidden="true" /> Recipe &amp; Technique Guide
          </div>
          <h1 className="text-3xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">
            Moist Banana Bread (With a Caramel Drizzle Option)
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            Banana bread doesn&apos;t need to be complicated to be genuinely great — the recipe below sticks to a short, familiar ingredient list and leans on a few technique details that make a bigger difference than people expect.
          </p>
          <div className="relative mx-auto mt-6 aspect-[16/9] max-w-3xl overflow-hidden rounded-2xl">
            <Image
              src="/images/moist-banana-bread-featured-image.webp"
              alt="Freshly baked moist banana bread, ready to slice"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="space-y-10">
          
          {/* Intro Paragraph */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <p className="text-sm leading-relaxed text-gray-600">
              Banana bread doesn&apos;t need to be complicated to be genuinely great — the recipe below sticks to a short, familiar ingredient list and leans on a few technique details that make a bigger difference than people expect: how the butter and sugar are creamed, how ripe the bananas really are, and a simple stovetop caramel sauce that turns an everyday loaf into something worth making on a weekend morning.
            </p>
          </section>

          {/* Why This Recipe Uses Both Grams and Cups */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">
              Why This Recipe Uses Both Grams and Cups
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Banana bread is forgiving compared to a lot of baking — but the two ingredients that genuinely shift the result are <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link> and mashed banana, since both can vary a surprising amount depending on how they&apos;re measured. A cup of <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link> scooped straight from the bag can weigh meaningfully more than one spooned in and leveled, and that extra <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link> is a common reason banana bread turns out denser or drier than intended. Weighing the key ingredients takes that variable out of the equation. For a deeper look at any specific ingredient here, our <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link>, <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link>, and <Link href="/brown-sugar" className="hover:underline" style={{ color: ACCENT }}>brown sugar</Link> converters can help.
            </p>
          </section>

          {/* Ingredients Section */}
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Ingredients</h2>
            <p className="mb-4 text-sm text-gray-600">
              Makes 1 loaf.
            </p>
            <div className="overflow-x-auto rounded-[20px] border bg-white shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
              <table className="w-full min-w-[400px] text-sm">
                <thead style={{ backgroundColor: ACCENT }}>
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-white">Ingredient</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Grams</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Cups / Volume</th>
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
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              No buttermilk on hand? Measure 1 tablespoon of lemon juice (or white vinegar) into a liquid measuring cup, then fill the rest of the way to the ⅓ cup line with regular <Link href="/milk" className="hover:underline" style={{ color: ACCENT }}>milk</Link>. Stir and let it sit for about 5 minutes — it&apos;ll thicken slightly and may look a little curdled, which is exactly right. That acidity reacts with the baking soda to help the bread rise, in addition to standing in for the real thing.
            </p>
          </section>

          {/* Method Section */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-6 text-2xl font-bold tracking-[-0.02em] text-gray-900">Method</h2>
            <ol className="space-y-6 text-sm text-gray-600">
              {methodSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-bold text-white" style={{ backgroundColor: ACCENT }}>{index + 1}</span>
                  <div>
                    <strong className="block text-base font-semibold text-gray-900">{step.title}.</strong>
                    {step.body}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* The Caramel Drizzle */}
          <section className="caramel-drizzle-section rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="caramel-drizzle-heading mb-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
              The Caramel Drizzle (Optional, But Worth It)
            </h2>
            <p className="caramel-drizzle-copy mb-4 text-sm leading-relaxed text-gray-600">
              A simple pan caramel takes this from good banana bread to something a little more special, and it&apos;s genuinely simple to make:
            </p>
            <div className="caramel-drizzle-table-wrap overflow-x-auto rounded-xl border bg-gray-50/50 mb-4" style={{ borderColor: `${ACCENT}20` }}>
              <table className="caramel-drizzle-table w-full text-xs">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Ingredient</th>
                    <th className="px-3 py-2 text-left font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {caramelIngredients.map((ci) => (
                    <tr key={ci.ingredient}>
                      <td className="px-3 py-2 font-medium text-gray-900">
                        {ci.href ? <Link href={ci.href} className="hover:underline" style={{ color: ACCENT }}>{ci.ingredient}</Link> : ci.ingredient}
                      </td>
                      <td className="px-3 py-2 text-gray-600">{ci.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="caramel-drizzle-copy text-sm leading-relaxed text-gray-600">
              Melt the <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link> in a small saucepan over low heat. Once melted, stir in the <Link href="/brown-sugar" className="hover:underline" style={{ color: ACCENT }}>brown sugar</Link> and let it dissolve into the <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link>—you will notice the color deepening as it comes together. Pour in the <Link href="/milk" className="hover:underline" style={{ color: ACCENT }}>milk</Link>, stirring constantly, and let the mixture bubble gently for a minute or two until it thickens slightly and takes on a caramel hue. Remove from the heat and stir in the vanilla. The sauce will continue to thicken a bit as it cools, so remove it from the heat just before it looks fully set. Drizzle it warm over the sliced ​​banana bread.
            </p>
          </section>

          {/* Why the Technique Details Matter */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">
              Why the Technique Details Matter
            </h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>Very ripe bananas aren&apos;t just sweeter — their starches have converted further into sugar, which also means more moisture is available to the batter, directly affecting how moist the finished loaf turns out.</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>Buttermilk (or the lemon juice substitute) adds acidity that reacts with the baking soda, contributing to rise, and adds tang that balances the sweetness of the bananas and <Link href="/brown-sugar" className="hover:underline" style={{ color: ACCENT }}>brown sugar</Link>.</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div><Link href="/brown-sugar" className="hover:underline" style={{ color: ACCENT }}>Brown sugar</Link> over white brings extra moisture from its molasses content, along with a deeper, slightly caramelized flavor — the same reason it&apos;s favored in chewy cookies.</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>Properly creaming the <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link> and sugar builds air pockets into the batter before the <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link> goes in, which supports a lighter crumb than simply stirring everything together would.</div>
              </li>
            </ul>
          </section>

          {/* Troubleshooting */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Troubleshooting</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p><strong className="text-gray-900">Bread sinks in the middle or turns out gummy.</strong> This is almost always too much banana or underbaking — if your bananas are unusually large, you may be adding more mashed banana by volume than the recipe accounts for. Weighing the mashed banana (around 340g) rather than estimating by cup is the most reliable fix.</p>
              <p><strong className="text-gray-900">Top is browning too fast but the center isn&apos;t done.</strong> Tent the loaf loosely with foil partway through baking, and double-check your oven rack is in the lower third position.</p>
              <p><strong className="text-gray-900">Bread is dry.</strong> Likely too much <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link> (a strong argument for weighing it) or slightly overbaked — pull it as soon as a toothpick shows a few moist crumbs rather than waiting for it to come out completely clean.</p>
            </div>
          </section>

          {/* Storage and Freezing */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">
              Storage and Freezing
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Store the cooled loaf wrapped tightly at room temperature for up to 3 days, or in the refrigerator for up to a week. To freeze, wrap the cooled loaf (whole or in individual slices) in two to three layers of plastic wrap or foil, place in a freezer bag, and freeze for up to 3 to 4 months. Slices thaw faster than a whole loaf if you want to pull out just what you need. Thawing works fine either at room temperature or in the refrigerator.
            </p>
          </section>

          {/* Quick Reference Box */}
          <section className="rounded-[24px] p-6 shadow-sm" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
            <h2 className="mb-3 text-xl font-bold text-gray-900">Quick Reference</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              <div><strong>240 g <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link></strong> = 2 cups</div>
              <div><strong>113 g <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link></strong> = ½ cup (1 stick)</div>
              <div><strong>165 g <Link href="/brown-sugar" className="hover:underline" style={{ color: ACCENT }}>brown sugar</Link>, packed</strong> = ¾ cup</div>
              <div><strong>340 g mashed banana</strong> $\approx$ 1½ cups (3–4 ripe bananas)</div>
            </div>
          </section>

          {/* The Bottom Line */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">
              The Bottom Line
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Good banana bread comes down to ripe bananas, a properly creamed <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link>-and-sugar base, and not overmixing once the <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link> goes in — the same handful of details that separate a decent loaf from a genuinely great one. Weighing the <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link> and banana specifically removes the two biggest sources of variation, and the caramel drizzle, while optional, is a small enough extra step to make the loaf feel like a weekend occasion rather than just a way to use up spotty bananas.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              In the mood for another cozy bake? Try our <Link href="/blog/chewy-oatmeal-cookies" className="font-semibold hover:underline" style={{ color: ACCENT }}>Chewy Oatmeal Cookies</Link> recipe for crisp edges and soft, oat-filled centers.
            </p>
          </section>

          {/* Back & Footer Resources */}
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
                { name: "Flour", href: "/flour" },
                { name: "Butter", href: "/butter" },
                { name: "Brown sugar", href: "/brown-sugar" },
                { name: "Milk", href: "/milk" },
                { name: "Chocolate chips", href: "/chocolate-chips" },
                { name: "Salt", href: "/salt" },
                { name: "Conversion Chart", href: "/conversion-chart" },
                { name: "Accuracy Guide", href: "/grams-to-cups-accuracy" },
                { name: "100g to cups", href: "/100-grams-to-cups" },
                { name: "150g to cups", href: "/150-grams-to-cups" },
                { name: "200g to cups", href: "/200-grams-to-cups" },
                { name: "250g to cups", href: "/250-grams-to-cups" },
                { name: "Grams to Ounces", href: "/grams-to-ounces" },
                { name: "mL to Cups", href: "/ml-to-cups" },
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