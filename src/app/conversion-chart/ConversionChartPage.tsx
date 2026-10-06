"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ACCENT = "#02b875";

type TableProps = { head: string[]; rows: ReactNode[][]; compact?: boolean };

function Table({ head, rows, compact = false }: TableProps) {
    return (
        <div className="overflow-x-auto rounded-[16px] border" style={{ borderColor: `${ACCENT}20` }}>
            <table className={`w-full min-w-[520px] ${compact ? "text-xs" : "text-sm"}`}>
                <thead style={{ backgroundColor: ACCENT }}>
                    <tr>{head.map((item) => <th key={item} className="whitespace-nowrap px-3 py-2 text-left font-semibold text-white">{item}</th>)}</tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                            {row.map((cell, cellIndex) => <td key={cellIndex} className={`px-3 py-2 ${cellIndex === 0 ? "font-medium text-gray-800" : "text-gray-600"}`}>{cell}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const volumeHead = ["Measure", "USA", "Philippines", "UK & Canada (Imp)", "UK & Canada (Met)", "Australia"];
const volumeRows = [
    ["1 tsp", "⅓ tbsp / 4.9 ml", "5 ml", "⅓ tbsp / 5.9 ml", "5 ml", "⅓ tbsp / 5 ml"],
    ["1 tbsp", "3 tsp / 14.8 ml", "15 ml", "3 tsp / 17.8 ml", "15 ml", "4 tsp / 20 ml ⚠️"],
    ["2 tbsp", "1 fl oz / 29.6 ml", "30 ml", "1 fl oz / 56.8 ml", "30 ml", "40 ml"],
    ["¼ cup", "4 tbsp / 59 ml", "60 ml", "2 fl oz / 71 ml", "60 ml", "62.5 ml"],
    ["⅓ cup", "5 tbsp + 1 tsp / 79 ml", "80 ml", "2.7 fl oz / 95 ml", "80 ml", "83 ml"],
    ["½ cup", "8 tbsp / 118 ml", "120 ml", "4 fl oz / 142 ml", "120 ml", "125 ml"],
    ["⅔ cup", "10 tbsp + 2 tsp / 158 ml", "160 ml", "5.3 fl oz / 189 ml", "160 ml", "167 ml"],
    ["¾ cup", "12 tbsp / 177 ml", "180 ml", "6 fl oz / 213 ml", "180 ml", "188 ml"],
    ["1 cup", "16 tbsp / 8 fl oz / 237 ml", "240 ml", "8 fl oz / 284 ml", "250 ml", "250 ml"],
    ["1 pt", "2 cups / 473 ml", "480 ml", "20 fl oz / 568 ml", "500 ml", "500 ml"],
    ["1 qt", "4 cups / 946 ml", "960 ml", "40 fl oz / 1.136 L", "1 L", "1 L"],
    ["1 gal", "16 cups / 3.785 L", "3.8 L", "160 fl oz / 4.546 L", "4.5 L", "4.5 L"],
];

const cupSizeRows = [
    ["USA", "237 ml", "All standard US recipes", "US customary system."],
    ["Philippines", "240 ml", "Philippine standard recipes", "FNRI-DOST reference."],
    ["UK & Canada (Modern)", "250 ml", "Modern UK/Canadian recipes", "Metric cup."],
    ["Australia", "250 ml", "Modern Australian recipes", "Standard metric cup."],
    ["UK & Canada (Old Imp)", "284 ml", "Rarely used today", "Traditional reference."],
];

const weightHead = ["Measure", "USA", "Philippines", "UK & Canada", "Australia"];
const weightRows = [
    ["1 oz", "28 g", "28 g", "28 g", "28 g"],
    ["2 oz", "57 g", "57 g", "57 g", "57 g"],
    ["4 oz", "113 g", "113 g", "113 g", "113 g"],
    ["8 oz", "227 g", "227 g", "227 g", "227 g"],
    ["12 oz", "340 g", "340 g", "340 g", "340 g"],
    ["16 oz / 1 lb", "454 g", "454 g", "454 g", "454 g"],
    ["500 g", "17.6 oz / 1.1 lb", "17.6 oz / 1.1 lb", "500 g", "500 g"],
    ["1 kg", "35.3 oz / 2.2 lb", "35.3 oz / 2.2 lb", "1000 g", "1000 g"],
];

const ovenHead = ["°F", "°C", "Gas", "Description"];
const ovenRows = [
    ["225°F", "107°C", "¼", "Very Low"], ["250°F", "121°C", "½", "Very Low"],
    ["275°F", "135°C", "1", "Low"], ["300°F", "149°C", "2", "Low"],
    ["325°F", "163°C", "3", "Mod. Low"], ["350°F", "177°C", "4", "Moderate"],
    ["375°F", "191°C", "5", "Moderate"], ["400°F", "204°C", "6", "Mod. Hot"],
    ["425°F", "218°C", "7", "Hot"], ["450°F", "232°C", "8", "Hot"],
    ["475°F", "246°C", "9", "Very Hot"], ["500°F", "260°C", "10", "Very Hot"],
];

const butterRows = [
    ["¼ stick", "2 tbsp", "⅛ cup", "28 g", "1 oz"], ["½ stick", "4 tbsp", "¼ cup", "57 g", "2 oz"],
    ["1 stick", "8 tbsp", "½ cup", "114 g", "4 oz"], ["1½ sticks", "12 tbsp", "¾ cup", "170 g", "6 oz"],
    ["2 sticks", "16 tbsp", "1 cup", "227 g", "8 oz"], ["4 sticks", "32 tbsp", "2 cups", "454 g", "16 oz / 1 lb"],
];

const gramsToCupsRows = [
    ["All-Purpose Flour", "50g", "⅜ cup", "⅜ cup", "⅓ cup", "⅓ cup", "¼ cup"],
    ["All-Purpose Flour", "100g", "¾ cup", "¾ cup", "⅔ cup", "⅔ cup", "⅝ cup"],
    ["All-Purpose Flour", "200g", "1⅝ cups", "1½ cups", "1½ cups", "1½ cups", "1¼ cups"],
    ["All-Purpose Flour", "250g", "2 cups", "1¾ cups", "1¾ cups", "1¾ cups", "1½ cups"],
    ["Granulated Sugar", "50g", "¼ cup", "¼ cup", "¼ cup", "¼ cup", "2 tbsp"],
    ["Granulated Sugar", "100g", "½ cup", "⅜ cup", "⅜ cup", "⅜ cup", "⅓ cup"],
    ["Granulated Sugar", "200g", "1 cup", "¾ cup", "¾ cup", "¾ cup", "⅔ cup"],
    ["Granulated Sugar", "250g", "1¼ cups", "1 cup", "1 cup", "1 cup", "⅞ cup"],
    ["Butter", "50g", "¼ cup", "¼ cup", "¼ cup", "¼ cup", "2 tbsp"],
    ["Butter", "100g", "½ cup", "⅜ cup", "⅜ cup", "⅜ cup", "⅓ cup"],
    ["Butter", "200g", "1 cup", "¾ cup", "¾ cup", "¾ cup", "⅔ cup"],
    ["Butter", "250g", "1⅛ cups", "1 cup", "1 cup", "1 cup", "⅞ cup"],

    ["Milk", "50g", "¼ cup", "¼ cup", "¼ cup", "¼ cup", "3 tbsp"],
    ["Milk", "100g", "⅜ cup", "⅜ cup", "⅓ cup", "⅓ cup", "¼ cup"],
    ["Milk", "200g", "¾ cup", "¾ cup", "¾ cup", "¾ cup", "⅔ cup"],
    ["Milk", "250g", "1 cup", "1 cup", "1 cup", "1 cup", "¾ cup"],

    ["Water", "50g", "¼ cup", "¼ cup", "¼ cup", "¼ cup", "3 tbsp"],
    ["Water", "100g", "⅜ cup", "⅜ cup", "⅓ cup", "⅓ cup", "¼ cup"],
    ["Water", "200g", "¾ cup", "¾ cup", "¾ cup", "¾ cup", "⅔ cup"],
    ["Water", "250g", "1 cup", "1 cup", "1 cup", "1 cup", "¾ cup"],

    ["Honey", "50g", "⅛ cup", "⅛ cup", "2 tbsp", "2 tbsp", "1½ tbsp"],
    ["Honey", "100g", "¼ cup", "¼ cup", "3 tbsp", "3 tbsp", "2 tbsp"],
    ["Honey", "200g", "½ cup", "½ cup", "½ cup", "½ cup", "⅓ cup"],
    ["Honey", "250g", "¾ cup", "⅔ cup", "⅔ cup", "⅔ cup", "½ cup"]
];

const cupsToGramsRows = [
    ["All-Purpose Flour", "125 g", "127 g", "132 g", "132 g", "150 g"],
    ["Granulated Sugar", "200 g", "203 g", "211 g", "211 g", "240 g"],
    ["Butter", "227 g", "230 g", "239 g", "239 g", "272 g"],
    ["Water", "236 g", "240 g", "250 g", "250 g", "284 g"],
    ["Milk", "245 g", "248 g", "258 g", "258 g", "294 g"],
    ["Honey", "340 g", "344 g", "359 g", "359 g", "408 g"],
];

const otherIngredients = [
    { name: "Flour", href: "/flour" }, { name: "Sugar", href: "/sugar" }, { name: "Brown Sugar", href: "/brown-sugar" },
    { name: "Powdered Sugar", href: "/powdered-sugar" }, { name: "Milk", href: "/milk" }, { name: "Water", href: "/water" },
    { name: "Honey", href: "/honey" }, { name: "Cocoa Powder", href: "/cocoa-powder" }, { name: "Oats", href: "/oats" },
    { name: "Rice", href: "/rice" }, { name: "Chocolate Chips", href: "/chocolate-chips" }, { name: "Butter", href: "/butter" },
];

const jumpNav = [
    ["volume", "Volume"], ["weight", "Weight"], ["oven", "Oven"], ["butter", "Butter"],
    ["grams-to-cups", "g → cup"], ["cups-to-grams", "cup → g"], ["summary", "Summary"],
];

export default function ConversionChartPage() {
    function handlePrint() {
        window.print();
    }

    return (
        <div className="min-h-screen bg-[#f7f7f7]">
            <Navbar />
            <section className="relative overflow-hidden border-b border-[#e4efe9]">
                <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}><i className="ri-earth-line" /> 5 countries, one printable chart</div>
                        <h1 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 sm:text-5xl">Complete Baking Conversion Chart — USA, UK, Canada, Australia &amp; Philippines</h1>
                        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">Convert between grams, cups, volume, oven temperatures, and butter measurements while baking. This reference brings country-specific standards together in one place.</p>
                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">Cup measurements differ by country, so always check whether a recipe uses a US, Philippine, metric, or Imperial cup before converting.</p>
                    </div>
                    <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">{jumpNav.map(([id, label]) => <a key={id} href={`#${id}`} className="rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-current" style={{ borderColor: `${ACCENT}30`, color: ACCENT }}>{label}</a>)}</div>
                    <div className="mx-auto mt-6">
                        <button onClick={handlePrint} className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-md" style={{ backgroundColor: ACCENT }}>
                            <i className="ri-printer-line" /> Print Chart
                        </button>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
                <main className="mx-auto w-full max-w-5xl"><div className="space-y-10">
                    <section className="rounded-[20px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}>
                        <p className="text-sm leading-relaxed text-gray-700"><strong className="text-gray-900"><i className="ri-information-line inline-block align-middle" /> Important Tip:</strong> Always check whether a recipe uses US cups (237 ml), metric cups (250 ml), Philippine standard cups (240 ml), or weight in grams. This single step will prevent most baking disasters when using international recipes.</p>
                    </section>

                    <section id="volume" className="scroll-mt-24"><h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900"><i className="ri-beaker-2-line inline-block align-middle" /> Volume Conversion Chart – Country-Specific Cup Sizes</h2><p className="mb-4 text-sm text-gray-500">This is the most important section because 1 cup is NOT the same volume in every country.</p><Table head={volumeHead} rows={volumeRows} compact /><h3 className="mb-3 mt-8 text-xl font-bold tracking-[-0.02em] text-gray-900">Key Country-Specific Cup Sizes</h3><Table head={["Country / Region", "Cup Size", "Used In", "Source / Note"]} rows={cupSizeRows} compact /><div className="mt-6 rounded-[20px] border bg-white p-5 sm:p-6" style={{ borderColor: `${ACCENT}20` }}><h3 className="mb-2 text-lg font-bold text-gray-900"><i className="ri-flag-line inline-block align-middle" style={{ color: ACCENT }} /> Australia Tablespoon Warning</h3><p className="text-sm leading-relaxed text-gray-600">In Australia, 1 tablespoon = 20 ml, while in the USA, UK, and Canada, it is 15 ml. Using an Australian tablespoon in another country&apos;s recipe adds 33% more.</p></div></section>

                    <section id="weight" className="scroll-mt-24"><h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900"> Weight Conversion Chart (Ounces, Pounds &amp; Grams)</h2><p className="mb-4 text-sm text-gray-500">Weight-to-weight conversions are the same in every country.</p><Table head={weightHead} rows={weightRows} compact /></section>

                    <section id="oven" className="scroll-mt-24"><h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900"> Oven Temperature Chart (Fahrenheit, Celsius &amp; Gas Mark)</h2><p className="mb-4 text-sm text-gray-500">For fan ovens, some recipes recommend reducing the temperature by about 25°F (15°C). Follow the recipe or oven manufacturer&apos;s instructions.</p><Table head={ovenHead} rows={ovenRows} compact /></section>

                    <section id="butter" className="scroll-mt-24"><div className="mb-1 flex flex-wrap items-center justify-between gap-3"><h2 className="text-2xl font-bold tracking-[-0.02em] text-gray-900"> Butter Conversion Chart (Sticks, Cups, Grams, Ounces)</h2><Link href="/butter" className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: ACCENT }}>Full Butter Converter <i className="ri-arrow-right-line" /></Link></div><p className="mb-4 text-sm text-gray-500">US butter is commonly sold in sticks, while the UK, Canada, and Australia generally sell butter in blocks.</p><Table head={["Butter", "USA Sticks", "Cups", "Grams", "Ounces"]} rows={butterRows} compact /></section>

                    <section id="grams-to-cups" className="scroll-mt-24"><h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900"> Grams to Cups — Country-Specific Conversion</h2><p className="mb-4 text-sm text-gray-500">These examples compare US, Philippine, metric, and Imperial cup conventions.</p><Table head={["Ingredient", "Weight", "USA", "Philippines", "UK/Canada Met", "Australia", "Imperial"]} rows={gramsToCupsRows.map((row) => [
                        <Link
                            key={`${row[0]}-${row[1]}`}
                            href={
                                row[0] === "All-Purpose Flour"
                                    ? "/flour"
                                    : row[0] === "Granulated Sugar"
                                        ? "/sugar"
                                        : row[0] === "Butter"
                                            ? "/butter"
                                            : row[0] === "Milk"
                                                ? "/milk"
                                                : row[0] === "Water"
                                                    ? "/water"
                                                    : row[0] === "Honey"
                                                        ? "/honey"
                                                        : "/butter" // fallback
                            }
                            className="font-medium hover:underline"
                            style={{ color: ACCENT }}
                        >
                            {row[0]}
                        </Link>,
                        ...row.slice(1),
                    ])} compact /></section>

                    <section id="cups-to-grams" className="scroll-mt-24">
                        <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Cups to Grams — Country-Specific Conversion</h2>
                        <p className="mb-4 text-sm text-gray-500">The cup volume changes by country, so ingredient-specific weights change too.</p>
                        <div className="overflow-x-auto rounded-[16px] border" style={{ borderColor: `${ACCENT}20` }}>
                            <table className="w-full min-w-[480px] text-xs">
                                <thead style={{ backgroundColor: ACCENT }}>
                                    <tr>
                                        <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-white">Ingredient</th>
                                        <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-white">USA<br /><span className="font-normal">(237 ml)</span></th>
                                        <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-white">Philippines<br /><span className="font-normal">(240 ml)</span></th>
                                        <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-white">UK/Canada<br /><span className="font-normal">(250 ml)</span></th>
                                        <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-white">Australia<br /><span className="font-normal">(250 ml)</span></th>
                                        <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-white">Imperial<br /><span className="font-normal">(284 ml)</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cupsToGramsRows.map((row, rowIndex) => (
                                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                                            <td className="px-3 py-2 font-medium text-gray-800">{row[0]}</td>
                                            {row.slice(1).map((cell, cellIndex) => <td key={cellIndex} className="px-3 py-2 text-gray-600">{cell}</td>)}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            See <Link href="/cups-to-grams" className="font-semibold hover:underline" style={{ color: ACCENT }}>cups to grams</Link> for more ingredients and a full list of country-specific conversions.
                        </p>
                    </section>

                    <section id="summary" className="scroll-mt-24"><h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-gray-900">Final Quick Summary — Measurement Systems by Country</h2><Table head={["Feature", "USA", "Philippines", "UK & Canada", "Australia"]} rows={[["Cup size", "237 ml", "240 ml", "250 ml", "250 ml"], ["Tablespoon", "15 ml", "15 ml", "15 ml", "20 ml ⚠️"], ["Oven temperature", "°F", "°C / °F", "°C", "°C"], ["Butter sold as", "Sticks", "Sticks or blocks", "Blocks", "Blocks"], ["Preferred measurement", "Volume", "Varies", "Weight", "Weight"]]} compact /></section>

                    <section className="rounded-[20px] p-5 sm:p-6" style={{ backgroundColor: `${ACCENT}0a`, border: `1px solid ${ACCENT}25` }}><h2 className="mb-3 text-xl font-bold tracking-[-0.02em] text-gray-900"><i className="ri-alert-line inline-block align-middle" style={{ color: ACCENT }} /> International Recipe Warning</h2><ul className="space-y-2 text-sm text-gray-600">{["Check whether the recipe uses a US, Philippine, metric, or Imperial cup.", "Check whether tablespoons are Australian (20 ml) or US/UK/Canadian (15 ml).", "Use a kitchen scale when a recipe provides weights in grams.", "Avoid applying one multiplication factor to every ingredient; density and measuring technique matter."].map((item) => <li key={item} className="flex items-start gap-2"><i className="ri-checkbox-circle-fill mt-0.5 flex-shrink-0 text-sm" style={{ color: ACCENT }} /><span>{item}</span></li>)}</ul></section>

                    <section id="sources" className="scroll-mt-24 rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-500" style={{ borderColor: `${ACCENT}15` }}>
                        <p className="mb-2 font-semibold text-gray-600">Data Sources &amp; References</p>
                        <ul className="space-y-1.5">
                            <li><a href="https://www.scribd.com/document/914321211/Menu-Eval-Plus-2025-ppt" target="_blank" rel="nofollow noopener noreferrer" className="font-semibold hover:underline" style={{ color: ACCENT }}>FNRI-DOST — Menu Eval Plus 2025 Presentation</a><span> — Philippine standard cup reference.</span></li>
                            <li><a href="https://ddb.gov.ph/wp-content/uploads/2023/01/healthy_snacks_for_PWUDs.pdf" target="_blank" rel="nofollow noopener noreferrer" className="font-semibold hover:underline" style={{ color: ACCENT }}>Dangerous Drugs Board (DDB), Philippines — Healthy Snacks for PWUDs</a><span> — FNRI-DOST 1 cup = 240 ml reference.</span></li>
                            <li><a href="https://www.canada.ca/en/health-canada/services/food-guide/eating-support/kitchen/cooking-skills/measure-ingredients-pro.html" target="_blank" rel="nofollow noopener noreferrer" className="font-semibold hover:underline" style={{ color: ACCENT }}>Health Canada — Measure Ingredients</a><span> — Canadian measurement guidance.</span></li>
                            <li><a href="https://aliments-nutrition.canada.ca/cnf-fce/serving-portion?id=92" target="_blank" rel="nofollow noopener noreferrer" className="font-semibold hover:underline" style={{ color: ACCENT }}>Canadian Nutrient File (CNF) — Serving Size and Portion Information</a><span> — Canadian serving/portion data.</span></li>
                            <li><a href="https://www.nist.gov/pml/owm/metric-si/metric-kitchen/metric-kitchen-culinary-measurement-tips" target="_blank" rel="nofollow noopener noreferrer" className="font-semibold hover:underline" style={{ color: ACCENT }}>NIST — Metric Kitchen: Culinary Measurement Tips</a><span> — US culinary measurement guidance.</span></li>
                            <li><a href="https://www.health.nsw.gov.au/heal/schools/Documents/oosh/EatSmartPlaySmart_Manual_ThirdEdition-V7.pdf" target="_blank" rel="nofollow noopener noreferrer" className="font-semibold hover:underline" style={{ color: ACCENT }}>NSW Health — Eat Smart Play Smart: Manual</a><span> — Australian health and measurement reference.</span></li>
                        </ul>
                    </section>

                    {/* Other Ingredients */}
                    <section>
                        <h2 className="mb-1 text-2xl font-bold tracking-[-0.02em] text-gray-900">Other Ingredients</h2>
                        <p className="mb-4 text-sm leading-relaxed text-gray-600">
                            Grams-to-cups conversion isn&apos;t only useful for cocoa powder. Each of these has its own
                            weight-per-cup because densities differ:
                        </p>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {otherIngredients.map((ing) => (
                                <Link
                                    key={ing.href}
                                    href={ing.href}
                                    className="flex items-center justify-between gap-1 rounded-xl border bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-current hover:text-[#02B875]"
                                    style={{ borderColor: `${ACCENT}20` }}
                                >
                                    <span className="truncate">{ing.name}</span>
                                    <i className="ri-arrow-right-s-line flex-shrink-0" style={{ color: ACCENT }} />
                                </Link>
                            ))}
                        </div>
                    </section>
                </div></main>
            </div>

            {/* Print Watermark */}
            <div className="hidden print:block print:fixed print:bottom-4 print:right-4 print:z-50 print:text-xs print:text-gray-400">
                grams2cups.io/conversion-chart
            </div>

            <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          header, nav, button {
            display: none !important;
          }
          .rounded-\\[20px\\], .rounded-\\[16px\\], .rounded-\\[24px\\] {
            border-radius: 8px !important;
          }
        }
      `}</style>
        </div>
    );
}