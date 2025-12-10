import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import { time } from "console";
import { title } from "process";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "My Next App",
    template: "%s | My Next App"
  },
  description: "Tutorial su next moderno",
  keywords: ["Next.js", "React", "tutorial"],
  authors: [{ name: "Manuel Cappai" }],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar title="Navbar"/>
      <Header/>
        <main>{children}</main>
        <footer>© 2025 Manuel</footer>
      </body>
    </html>
  );
}
