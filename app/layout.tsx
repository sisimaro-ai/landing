import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "sisimaro - Your Personal AI Pal at Work",
  description:
    "Sisimaro turns corporate mess into magic: one friendly chat for knowledge, research, access, and decisions that actually work.",
  keywords: ["AI", "workplace", "productivity", "enterprise", "assistant", "chat"],
  openGraph: {
    title: "sisimaro - Your Personal AI Pal at Work",
    description:
      "Sisimaro turns corporate mess into magic: one friendly chat for knowledge, research, access, and decisions that actually work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} ${instrumentSerif.variable} ${interTight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
