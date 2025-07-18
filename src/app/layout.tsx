import type { Metadata } from "next";
import { Lato, Merriweather } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Neurture - Break habits with science and self-compassion",
  description: "Learn how to quit or reduce behaviors using research-based resources. Get support from Neurture's AI coach and develop a personal plan to break habits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
