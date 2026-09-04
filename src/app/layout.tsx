import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const jost = Jost({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jost",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "AYLATAN — кимоно и кафтаны, созданные с любовью",
    template: "%s — AYLATAN",
  },
  description:
    "Кимоно, кафтаны и украшения AYLATAN. Каждая вещичка намолена, орнамент священен. Вы под защитой.",
  metadataBase: new URL("https://aylatan.local"),
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "AYLATAN",
    description: "Кимоно, кафтаны и украшения, созданные с любовью.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${jost.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-paper font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
