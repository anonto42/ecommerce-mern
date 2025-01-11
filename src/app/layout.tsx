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
  title: "S-Brand",
  description: "We create the best product on the T-Shirt World",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="icon" 
          href="/Image/Top_logo.svg"
          sizes="any"
          />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
      <div>
        <Naveber /> 
        <main>
          {children}
        </main>
        <Footer />
      </div>
      </body>
    </html>
  );
}
