import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  JetBrains_Mono,
  Dancing_Script,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatButton } from "@/components/shared/WhatsAppFloatButton";
import { SITE_CONFIG } from "@/constants/config";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Kamba-Dyami Cocktail | Cocktails para Eventos em Luanda",
    template: "%s | Kamba-Dyami",
  },
  description:
    "Serviço de cocktails de autor para eventos em Luanda. Levamos ingredientes premium e uma experiência inesquecível a casamentos, festas e celebrações corporativas em qualquer parte de Angola.",
  keywords: [
    "cocktails para eventos Luanda",
    "bartender Angola",
    "catering de cocktails",
    "cocktailaria premium",
    "kamba dyami",
  ],
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: "https://kamba-dyami.ao",
    siteName: "Kamba-Dyami Cocktail",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-AO"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-cream">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
