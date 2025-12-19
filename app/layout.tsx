import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trenton & Sydney's First Home",
  description: "Counting down to our move-in day - February 6, 2026",
  openGraph: {
    title: "Trenton & Sydney's First Home",
    description: "Counting down to our move-in day - February 6, 2026",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trenton & Sydney's First Home Countdown",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trenton & Sydney's First Home",
    description: "Counting down to our move-in day - February 6, 2026",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
