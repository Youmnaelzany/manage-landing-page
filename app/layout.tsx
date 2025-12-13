import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TeamWorks from "@/components/TeamWorks";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Manage App",
  description: "Manage App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${beVietnam.variable} mx-auto max-w-360 overflow-x-hidden antialiased`}
      >
        <Header />
        {children}
        <TeamWorks />
        <Footer />
      </body>
    </html>
  );
}
