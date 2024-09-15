import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Naveber from "@/Components/Naveber/Naveber";
import Footer from "@/Components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fairrow Associatiesllc",
  description: "This des will generate by default",
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
      <div>
      <Naveber />
        {children}
      <Footer />
      </div>
      </body>
    </html>
  );
}
