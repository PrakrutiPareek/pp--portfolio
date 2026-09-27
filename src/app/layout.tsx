import type {Metadata} from "next";
import {Inter, DM_Mono} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Prakruti Pareek — Frontend Developer",
  description:
    "Portfolio of Prakruti Pareek, a frontend developer specialising in React, Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmMono.variable}`}>{children}</body>
    </html>
  );
}
