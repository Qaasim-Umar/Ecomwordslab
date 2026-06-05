import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EcomWords Lab: E-Commerce Copywriting Agency",
    template: "%s | EcomWords Lab",
  },
  description:
    "EcomWords Lab helps e-commerce brands and online businesses attract the right audience, increase conversions, and generate more revenue through high-converting copy and content strategy.",
  openGraph: {
    title: "EcomWords Lab: E-Commerce Copywriting Agency",
    description:
      "High-converting copy and content strategy for e-commerce brands. Product descriptions, email marketing, landing pages, and more.",
    type: "website",
    siteName: "EcomWords Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcomWords Lab: E-Commerce Copywriting Agency",
    description:
      "High-converting copy and content strategy for e-commerce brands.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${manrope.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
