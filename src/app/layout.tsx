import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import KitchenAssistant from "@/components/KitchenAssistant";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "block",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grams2cups.io"),

  title: "Grams To Cups Converter",

  description: "Ingredient-specific grams to cups conversion calculator",

  icons: {
    icon: "/favicon.svg",
  },

  verification: {
    google: "aImkOSF8o23o4AB0rQQO5KwuPKrwLg_pin-RhwmVEDM",
    other: {
      "msvalidate.01": "FFA4D89B800A1ED8882AC613172C491E",
    },
  },

  openGraph: {
    title: "Grams2Cups.io — Grams to Cups Converter",
    description:
      "Convert grams to cups with ingredient-specific measurements for cooking and baking.",
    url: "https://grams2cups.io/",
    siteName: "Grams2Cups.io",
    images: [
      {
        url: "/Grams-to-cups-logo.svg",
        width: 1200,
        height: 630,
        alt: "Grams2Cups.io Grams to Cups Converter",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grams2Cups.io — Grams to Cups Converter",
    description:
      "Convert grams to cups with ingredient-specific measurements for cooking and baking.",
    images: ["/Grams-to-cups-logo.svg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${spaceGrotesk.variable} ${instrumentSans.className} ${spaceGrotesk.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
        <KitchenAssistant />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FVLL9MM0RL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FVLL9MM0RL');
          `}
        </Script>

      </body>
    </html>
  );
}