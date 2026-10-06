import type { Metadata } from "next";
import ConversionChartPage from "./ConversionChartPage";

export const metadata: Metadata = {
  title: "Complete Baking Conversion Chart — USA, UK, Canada, Australia & Philippines",
  description:
    "A complete baking conversion chart covering volume, weight, oven temperature, and butter measurements across the USA, UK, Canada, Australia, and the Philippines.",
  alternates: { canonical: "/conversion-chart" },
  openGraph: {
    title: "Complete Baking Conversion Chart — USA, UK, Canada, Australia & Philippines",
    description: "Country-specific cup sizes, weight conversions, oven temperatures, and butter measurements in one printable chart.",
    url: "/conversion-chart",
    siteName: "Grams2Cups",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Baking Conversion Chart — USA, UK, Canada, Australia & Philippines",
    description: "Country-specific cup sizes, weight, oven temperature, and butter conversions.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <ConversionChartPage />;
}