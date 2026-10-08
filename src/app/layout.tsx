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