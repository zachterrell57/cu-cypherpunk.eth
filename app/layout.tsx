import type { Metadata } from "next";
import { Inter, Zen_Dots } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils";
import Navbar from "@/components/Navbar";
import "@rainbow-me/rainbowkit/styles.css";
import Providers from "@/providers";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-zen",
});

export const metadata: Metadata = {
  title: "cu-cypherpunk.eth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("relative", inter.className, zenDots.variable)}>
        <Providers>
          <div className="absolute flex w-full items-center justify-center p-2">
            <Navbar />
          </div>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
