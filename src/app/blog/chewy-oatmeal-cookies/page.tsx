import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ACCENT = "#02b875";

export const metadata: Metadata = {
  title: "Chewy Oatmeal Cookies: Gram-First Recipe & Technique Guide",
  description:
    "A deliberately oat-heavy cookie formula with gram-first measurements, explained conversions, and techniques designed for chewy centers and crisp edges.",
  alternates: { canonical: "/blog/chewy-oatmeal-cookies" },
  openGraph: {
    title: "Chewy Oatmeal Cookies: Gram-First Recipe & Technique Guide",
    description: "Crisp edges, a stretchy center, and genuine oat flavor with precise gram measurements.",
    url: "/blog/chewy-oatmeal-cookies",
    siteName: "Grams2Cups",
    type: "article",
    images: ["/images/chewy-oatmeal-cookies-hero-image.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chewy Oatmeal Cookies: Gram-First Recipe & Technique Guide",
    description: "A deliberately oat-heavy cookie formula with gram-first measurements and expert baking techniques.",
    images: ["/images/chewy-oatmeal-cookies-hero-image.webp"],
  },
};

type IngredientRow = {
  ingredient: string;
  href?: string;
  grams: string;
  cup: string;
};

const recipeIngredients: IngredientRow[] = [
  { ingredient: "Unsalted butter, softened", href: "/butter", grams: "150 g", cup: "10 tablespoons" },
  { ingredient: "Dark brown sugar or demerara sugar", href: "/brown-sugar", grams: "165 g", cup: "¾ cup packed" },
  { ingredient: "Honey or golden syrup", href: "/honey", grams: "20 g", cup: "1 tablespoon" },
  { ingredient: "Large egg", grams: "1", cup: "1" },
  { ingredient: "Vanilla extract", grams: "—", cup: "1 teaspoon" },
  { ingredient: "All-purpose flour", href: "/flour", grams: "125 g", cup: "1 cup" },
  { ingredient: "Cornstarch", grams: "—", cup: "1 tablespoon" },
  { ingredient: "Baking powder", href: "/baking-powder", grams: "—", cup: "½ teaspoon" },
  { ingredient: "Baking soda", href: "/baking-powder", grams: "—", cup: "½ teaspoon" },
  { ingredient: "Fine salt", href: "/salt", grams: "—", cup: "½ teaspoon" },
  { ingredient: "Cinnamon or pumpkin pie spice", grams: "—", cup: "½ teaspoon" },
  { ingredient: "Regular rolled oats", href: "/oats", grams: "~225 g", cup: "2½ cups" },
  { ingredient: "Chocolate chips and/or dried cranberries", href: "/chocolate-chips", grams: "—", cup: "1 cup (250 mL) total, any mix" },
];

const oatTypes = [
  { type: "Regular rolled oats", href: "/oats", processing: "Steamed, then flattened", bestFor: "This recipe — they hold their texture and retain more fiber" },
  { type: "Quick-cooking oats", href: "/oats", processing: "Steamed slightly less, flattened finer", bestFor: "Faster-cooking porridge, softer-textured bakes" },
  { type: "Instant oats", href: "/oats", processing: "Steamed longest, flattened thinnest", bestFor: "Needs very little liquid or time — too soft for this cookie's texture" },
  { type: "Steel-cut oats", href: "/oats", processing: "Steamed, then cut (not flattened)", bestFor: "Coarse, chewy texture — not interchangeable here without adjustment" },
];

const methodSteps = [
  { title: "Preheat the oven", body: "Preheat the oven to 375°F (190°C)." },
  { title: "Cream the softened butter and brown sugar together", body: "Use unsalted butter so you stay in control of how much salt goes into the recipe overall. Beat the butter and sugar by hand or with a mixer until the mixture lightens slightly in color — this creaming step builds structure and stability in the dough, which matters more than usual here because a lower-flour, oat-heavy dough needs that extra help holding together." },
  { title: "Beat in the honey (or golden syrup)", body: "Make sure it's fully blended in rather than sitting in a separate streak — this is what adds a meaningful amount of chewiness to the finished center." },
  { title: "Add the egg and vanilla, mixed until smooth", body: "If the batter looks slightly curdled at this stage, don't worry — it's a common and easily fixed issue. Just take a tablespoon or two of your already-measured flour and sprinkle it in to help the batter come back together before adding everything else." },
  { title: "Mix the dry ingredients separately, then combine", body: "In a separate bowl (or right on top of the batter, loosely, if you want to skip a dish), combine the flour, cornstarch, baking powder, baking soda, salt, and cinnamon or pumpkin spice. Stir these into the wet mixture." },
  { title: "Fold in the oats, followed by your chocolate chips, dried cranberries, or other mix-ins of choice", body: "" },
  { title: "Scoop and lightly flatten", body: "Use a cookie scoop (about 2 tablespoons) to portion the dough, and press each one down slightly before baking — because this dough is dense from all the oats, flattening helps the cookies spread properly in the oven instead of staying mounded." },
  { title: "Bake for 8 to 10 minutes", body: "Smaller scoops bake closer to 8 minutes; slightly larger ones need closer to 10. The cookies will look a little underdone in the center when you pull them out — that's correct, not a mistake. Don't be tempted to leave them in longer." },
  { title: "Tap the tray", body: "As soon as the cookies come out of the oven, give the baking tray a firm tap on the counter. This makes the slightly risen cookies collapse a bit, which condenses and thickens the center — this is one of the biggest contributors to that chewy pull in the middle." },
  { title: "Cool on the tray", body: "Let the cookies sit for a few minutes before moving them — they're fragile straight out of the oven and firm up as they cool." },
];

export default function ChewyOatmealCookiesPage() {
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
            Chewy Oatmeal Cookies: Gram-First Recipe &amp; Techniques
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            A deliberately oat-heavy cookie formula with gram-first measurements, explained conversions, and techniques designed for chewy centers and crisp edges.
          </p>
        </div>
      </section>

      <section className="mt-6 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <figure
          className="overflow-hidden rounded-[20px] border bg-white"
          style={{ borderColor: `${ACCENT}20` }}
        >
          <Image
            src="/images/chewy-oatmeal-cookies-hero-image.webp"
            alt="Chewy oatmeal cookies with melted chocolate chips"
            width={1600}
            height={1067}
            className="h-auto w-full object-cover"
            priority
          />
          <figcaption className="px-4 py-2 text-xs text-gray-500">
            Featured chewy oatmeal cookies recipe image.
          </figcaption>
        </figure>
      </section>

      {/* Main Content Container */}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <main className="space-y-10">

          {/* Intro Paragraph */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <p className="text-sm leading-relaxed text-gray-600">
              This recipe yields a distinctive type of oatmeal cookie—neither the soft, bordering-on-soggy kind nor the thin, overly crisp variety. It is a cookie with crisp edges, a center that pulls and stretches when you break it apart, and a genuine oat flavor—all achieved through a handful of small techniques, each serving a specific purpose. None of these steps are complicated, but combined, they are what set a truly great oatmeal cookie apart from an average one.
            </p>
          </section>

          {/* Why This Recipe Gets Measured in Grams */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">
              Why This Recipe Gets Measured in Grams
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Oatmeal cookie dough is dense and oat-heavy, with comparatively little <Link href="/flour" className="font-semibold hover:underline" style={{ color: ACCENT }}>flour</Link> holding it together — which means the ratio between ingredients matters more here than in a lot of cookie recipes. A cup of flour that&apos;s been scooped and packed can weigh noticeably more than one spooned in lightly, and in a recipe already running light on flour relative to oats, that difference can be the line between a cookie that holds together and one that falls apart. Weighing the key ingredients removes that variable. If you want to double-check any of these against a different brand or convert a different amount, our <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link>, <Link href="/brown-sugar" className="hover:underline" style={{ color: ACCENT }}>brown sugar</Link>, <Link href="/honey" className="hover:underline" style={{ color: ACCENT }}>honey</Link>, <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link>, and <Link href="/chocolate-chips" className="hover:underline" style={{ color: ACCENT }}>chocolate chips</Link> converters can help.
            </p>
          </section>

          {/* Ingredients Section */}
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Ingredients</h2>
            <p className="mb-4 text-sm text-gray-600">
              Makes about 2 dozen cookies.
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
            <figure className="mb-5 mt-5 overflow-hidden rounded-[20px] border bg-white shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
              <Image
                src="/images/chewy-oatmeal-cookies-ingredients-image.webp"
                alt="Ingredients for chewy oatmeal cookies, including rolled oats, brown sugar, butter, flour, honey, spices, and chocolate chips"
                width={1143}
                height={762}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto max-h-[440px] w-full object-cover"
              />
              <figcaption className="px-4 py-2 text-xs text-gray-500">
                Ingredients for chewy oatmeal cookies.
              </figcaption>
            </figure>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              A note on a couple of these: the oats are genuinely the defining ingredient of this cookie — this version is deliberately oat-heavy rather than flour-heavy, which is part of what gives it that dense, chewy character, but also why the other techniques below (especially the cornstarch and the honey) matter so much for keeping the dough from falling apart or baking out too dry. And for the honey or golden syrup, don&apos;t stress over the exact tablespoon — being a little over or under 15 mL won&apos;t noticeably change the result.
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

          {/* What's Actually Making These Cookies Chewy */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">
              What&apos;s Actually Making These Cookies Chewy
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              A few specific techniques are doing the real work here, and they&apos;re worth understanding rather than just following blindly:
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>Dark <Link href="/brown-sugar" className="hover:underline" style={{ color: ACCENT }}>brown sugar</Link> contributes moisture as well as a deeper caramel flavor. If using demerara sugar, expect some differences in texture and spread because it has larger, drier crystals.</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div><Link href="/honey" className="hover:underline" style={{ color: ACCENT }}>Honey</Link> (or golden syrup) is sugar in liquid form, and that liquid sugar behaves differently in the oven than dry crystallized sugar, adding to the soft, chewy pull in the center.</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>Cornstarch helps create a tender texture by reducing the amount of gluten-forming <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link> in the dough and contributing to a softer crumb.</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>Slightly underbaking, on purpose. <Link href="/oats" className="hover:underline" style={{ color: ACCENT }}>Oats</Link> continue absorbing liquid even after the cookies come out of the oven, which is part of what builds the chew — pulling them while they still look a touch underdone is a feature, not an error.</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-checkbox-circle-line mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>Tapping the tray right out of the oven collapses the structure slightly and thickens the center, reinforcing the chew one more time.</div>
              </li>
            </ul>
          </section>

          {/* A Note on Oat Types */}
          <section className="oat-types-section rounded-[24px] border bg-white p-6 shadow-sm dark:bg-[#1c2924]" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900 dark:text-gray-100">A Note on Oat Types</h2>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Not all <Link href="/oats" className="font-semibold hover:underline" style={{ color: ACCENT }}>oats</Link> behave the same way in baking, and the difference comes down to how the oat grain was processed:
            </p>
            <div className="oat-types-table-wrap mb-4 overflow-x-auto rounded-xl border bg-gray-50/50 dark:bg-[#17211e]" style={{ borderColor: `${ACCENT}20` }}>
              <table className="oat-types-table w-full text-xs">
                <thead className="bg-gray-100 text-gray-700 dark:bg-[#263832] dark:text-gray-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Oat Type</th>
                    <th className="px-3 py-2 text-left font-semibold">Processing</th>
                    <th className="px-3 py-2 text-left font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-[#40534a]">
                  {oatTypes.map((o) => (
                    <tr key={o.type} className="odd:bg-white even:bg-gray-50/60 dark:odd:bg-[#1c2924] dark:even:bg-[#22322c]">
                      <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100"><Link href={o.href} className="hover:underline" style={{ color: ACCENT }}>{o.type}</Link></td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-300">{o.processing}</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-300">{o.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Regular rolled <Link href="/oats" className="hover:underline" style={{ color: ACCENT }}>oats</Link> are the right choice for this recipe specifically because they hold their shape and texture through baking, rather than dissolving into the dough the way instant oats would.
            </p>
          </section>

          {/* Troubleshooting */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Troubleshooting</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p><strong className="text-gray-900">Cookies aren&apos;t spreading.</strong> A few common causes: the <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link> wasn&apos;t fully softened, the sugar amount was off, or the dough wasn&apos;t flattened before baking — this recipe&apos;s dense, oat-heavy batter benefits from a light press down before it goes in the oven. Also double-check your oven&apos;s actual temperature, since a too-cool oven can keep cookies from spreading properly.</p>
              <p><strong className="text-gray-900">The batter looks curdled after adding the egg.</strong> Sprinkle in a tablespoon or two of your measured <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link> and stir — this brings the mixture back together before you add the rest of the dry ingredients.</p>
              <p><strong className="text-gray-900">Cookies taste flat.</strong> Make sure you&apos;re not skipping or under-measuring the <Link href="/salt" className="hover:underline" style={{ color: ACCENT }}>salt</Link>, especially if you&apos;re using unsalted <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link> as the base.</p>
            </div>
          </section>

          {/* Substitutions and Variations */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Substitutions and Variations</h2>
            <p className="mb-3 text-sm text-gray-600">This recipe adapts easily in a lot of directions:</p>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Golden syrup works as a direct swap for <Link href="/honey" className="hover:underline" style={{ color: ACCENT }}>honey</Link>.</li>
              <li>Brown <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link> can replace regular melted or softened <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link> for a nuttier flavor — brown it, let it cool completely before mixing (it won&apos;t meaningfully change the moisture balance, despite some water evaporating during browning), and expect the dough may need an hour of rest or a fridge chill before baking so it doesn&apos;t spread too flat.</li>
              <li>Coconut sugar (gula melaka or similar) can replace <Link href="/brown-sugar" className="hover:underline" style={{ color: ACCENT }}>brown sugar</Link>, bringing its own natural caramel color and moisture.</li>
              <li>Gluten-free <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link> blends can work, but results vary considerably between blends. Follow the blend manufacturer&apos;s substitution guidance and expect some adjustment in dough consistency.</li>
              <li>Almond <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link> can replace the all-purpose <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link>, ideally with a little extra tapioca starch or cornstarch added alongside it to help compensate for the structure almond <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link> doesn&apos;t provide on its own.</li>
              <li>Sourdough discard can be worked into the dough — expect a flavor shift, and know that the discard&apos;s gluten development interacts a little differently with a naturally gluten-light ingredient like <Link href="/oats" className="hover:underline" style={{ color: ACCENT }}>oats</Link>.</li>
              <li>Malted milk powder can be added for a toasted, malty sweetness, and can even stand in for the vanilla.</li>
              <li>Vegan adaptation: replace the single egg with a flax egg, and swap the <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link> for a vegan <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link>/spread or coconut oil (try half melted, half left at room temperature). Use dairy-free <Link href="/chocolate-chips" className="hover:underline" style={{ color: ACCENT }}>chocolate</Link> if adding <Link href="/chocolate-chips" className="hover:underline" style={{ color: ACCENT }}>chocolate</Link>.</li>
              <li>Egg-free (non-vegan) adaptation: For an egg-free variation, applesauce can sometimes replace the egg, but it will change the cookie&apos;s moisture, spread, and texture.</li>
              <li>Ghee can replace <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link> directly — since ghee is simply clarified <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link>, the swap doesn&apos;t meaningfully change the amount of liquid in the recipe, just makes for a slightly richer flavor.</li>
            </ul>
          </section>

          {/* Add-In Ideas & High-Altitude Adjustments */}
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-xl font-bold text-gray-900">Add-In Ideas</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                This recipe is flexible with its final 1 cup (250 mL) of mix-ins — raisins, pecans, walnuts, chopped dates, toffee bits, <Link href="/chocolate-chips" className="hover:underline" style={{ color: ACCENT }}>chocolate chips</Link>, and dried cranberries all work well, either on their own or combined. A 50/50 mix of <Link href="/chocolate-chips" className="hover:underline" style={{ color: ACCENT }}>chocolate chips</Link> and dried cranberries gives a sweet-tart contrast that pairs particularly well with the <Link href="/oats" className="hover:underline" style={{ color: ACCENT }}>oats</Link>.
              </p>
            </div>

            <div className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
              <h2 className="mb-3 text-xl font-bold text-gray-900">High-Altitude Adjustments</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Cookies generally need less altitude adjustment than cakes or breads, thanks to their short bake time and dense batter. If you&apos;re baking at a meaningful elevation, a small reduction in the baking powder and <Link href="/baking-powder" className="hover:underline" style={{ color: ACCENT }}>baking soda</Link> is usually enough — nothing else in this recipe typically needs to change.
              </p>
            </div>
          </section>

          {/* Storing and Freezing the Dough */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">
              Storing and Freezing the Dough
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-gray-600">
              Baked cookies are best eaten fresh but keep well for a few days in an airtight container. For the dough itself:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li><strong className="text-gray-900">To chill before baking:</strong> scoop the dough onto a plate or tray, close together, and refrigerate for about an hour to firm it up — no need to freeze it solid first.</li>
              <li><strong className="text-gray-900">To freeze for later:</strong> pack the chilled, scooped dough into a container once firm. Frozen raw dough keeps well for up to about 3 months — it&apos;ll technically last longer, but <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link>-based doughs with a mild flavor tend to start picking up freezer odors beyond that window.</li>
              <li><strong className="text-gray-900">To bake from frozen:</strong> let the scooped dough thaw on the counter while your oven preheats — these cookies are small enough that they&apos;ll be ready to bake by the time the oven&apos;s hot.</li>
            </ul>
          </section>

          {/* Other Ways to Use This Dough */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">
              Other Ways to Use This Dough
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Beyond the classic warm cookie, this same oat-heavy dough makes a good base for a cheesecake crust — just be mindful that too many dried fruits mixed in can gum up a food processor if you&apos;re pulverizing the baked cookies into crumbs.
            </p>
          </section>

          {/* Quick Reference Box */}
          <section className="rounded-[24px] p-6 shadow-sm" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
            <h2 className="mb-3 text-xl font-bold text-gray-900">Quick Reference</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              <div><strong>150 g <Link href="/butter" className="hover:underline" style={{ color: ACCENT }}>butter</Link></strong> = 10 tablespoons</div>
              <div><strong>165 g <Link href="/brown-sugar" className="hover:underline" style={{ color: ACCENT }}>brown sugar</Link>, packed</strong> $\approx$ ¾ cup</div>
              <div><strong>125 g <Link href="/flour" className="hover:underline" style={{ color: ACCENT }}>flour</Link></strong> — 1 cup</div>
              <div><strong>1 tablespoon <Link href="/honey" className="hover:underline" style={{ color: ACCENT }}>honey</Link></strong> $\approx$ 20 g</div>
            </div>
          </section>

          {/* The Bottom Line */}
          <section className="rounded-[24px] border bg-white p-6 shadow-sm" style={{ borderColor: `${ACCENT}20` }}>
            <h2 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900">
              The Bottom Line
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Chewy oatmeal cookies come down to a handful of deliberate choices stacked on top of each other — extra moisture from dark <Link href="/brown-sugar" className="hover:underline" style={{ color: ACCENT }}>brown sugar</Link> and <Link href="/honey" className="hover:underline" style={{ color: ACCENT }}>honey</Link>, a hygroscopic assist from cornstarch, a dough that&apos;s intentionally oat-heavy, and a bake time that stops just short of &quot;done.&quot; None of these steps are hard on their own, but skipping any one of them is usually where a chewy oatmeal cookie quietly turns into just an okay one.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              For another comforting homemade bake, explore our <Link href="/blog/moist-banana-bread" className="font-semibold hover:underline" style={{ color: ACCENT }}>Moist Banana Bread</Link> recipe, complete with gram and cup measurements.
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
                { name: "Oats", href: "/oats" },
                { name: "Flour", href: "/flour" },
                { name: "Butter", href: "/butter" },
                { name: "Brown sugar", href: "/brown-sugar" },
                { name: "Honey", href: "/honey" },
                { name: "Chocolate chips", href: "/chocolate-chips" },
                { name: "Salt", href: "/salt" },
                { name: "Baking powder", href: "/baking-powder" },
                { name: "Conversion Chart", href: "/conversion-chart" },
                { name: "Accuracy Guide", href: "/grams-to-cups-accuracy" },
                { name: "100g to cups", href: "/100-grams-to-cups" },
                { name: "150g to cups", href: "/150-grams-to-cups" },
                { name: "200g to cups", href: "/200-grams-to-cups" },
                { name: "250g to cups", href: "/250-grams-to-cups" },
                { name: "Grams to Ounces", href: "/grams-to-ounces" },
                { name: "ML to Cups", href: "/ml-to-cups" },
                { name: "FAQs", href: "/faq" },
                { name: "Blog", href: "/blog" },
                { name: "Chocolate chips cookies", href: "/blog/chocolate-chip-cookies" },
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