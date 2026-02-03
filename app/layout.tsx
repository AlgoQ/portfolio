import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kobe Janssens - Full Stack Developer & Quant",
  description:
    "I'm Kobe Janssens, a Full Stack Developer and Quant. I craft custom solutions for clients and have built AI models for startups and open-source projects.",
  openGraph: {
    title: "Kobe Janssens - Full Stack Developer & Quant",
    description:
      "Independent contractor building custom solutions and working on quantitative trading.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kobe Janssens - Full Stack Developer & Quant",
    description:
      "Developer passionate about building projects and exploring quantitative trading.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
