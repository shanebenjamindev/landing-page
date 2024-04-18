import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SmoothScrollComp from "@/components/SmoothScroll/SmoothScrollComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing page",
  description: "Personnal Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <SmoothScrollComp>{children}</SmoothScrollComp>
        </main>
        <Footer />
      </body>
    </html>
  );
}
