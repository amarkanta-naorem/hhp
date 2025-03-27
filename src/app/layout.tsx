import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helping Hands for People (HHP), Manipur",
  description:
    "Helping Hands for People is a non-profit charitable trust that works with the economically weaker sections of the society in medical, health and others. The main focus of our work is to provide financial aid for medical emergencies, blood and broatcasting (expose) & provide sustainable lively hood support for the poor sick patients, widows & orphans. HHP was formed by a team of Voluntary Blood Donors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
