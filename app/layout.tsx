import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Guevara Construction | ADU Building Experts | (209) 566-3468",
  description: "Professional ADU (Accessory Dwelling Unit) construction services in California. General contracting for commercial & residential framing, concrete, roofing. Building what you want from the ground up!",
  keywords: ["ADU construction", "accessory dwelling unit", "general contractor", "framing", "concrete", "roofing", "California contractor"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
