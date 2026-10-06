import type { Metadata } from "next";
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
      </body>
    </html>
  );
}