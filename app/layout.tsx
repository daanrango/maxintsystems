import type { Metadata } from "next";

import { Montserrat, Poppins, Red_Hat_Display } from "next/font/google";

import "./globals.css";
import "./style.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-h1",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-h2",
});

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "MAXINTSYSTEMS",
    template: "%s | MAXINTSYSTEMS",
  },
  description:
    "Max Integration Security Systems Soluciones integrales de seguridad electrónica para hogares, empresas e industrias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${redHat.variable}`}
      >
        <Header />
        <main className="pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
