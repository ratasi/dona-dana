import type { Metadata } from "next";

import { Montserrat } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tornem a casa | Ayuda a las familias afectadas por la Dana",
  description:
    "Apoya a los afectados por la Dana proveyendo las necesidades esenciales para reconstruir sus hogares y vidas. Cada aporte cuenta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
