import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import TopBanner from "@/components/layout/Banner/TopBanner";
import TopNavbar from "@/components/layout/Navbar/TopNavbar";
import Footer from "@/components/layout/Footer";
import HolyLoader from "holy-loader";
import Providers from "./providers";
import BackToTop from "@/components/layout/BackToTop";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "Velora - Modern Fashion & Lifestyle Store",
    template: "%s | Velora",
  },
  description: "Discover the latest fashion trends and lifestyle essentials at Velora. Shop premium clothing, accessories, and more with free shipping on orders over $100.",
  keywords: ["fashion", "clothing", "ecommerce", "online shopping", "velora", "lifestyle", "accessories"],
  authors: [{ name: "Velora" }],
  creator: "Velora",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Velora",
    title: "Velora - Modern Fashion & Lifestyle Store",
    description: "Discover the latest fashion trends and lifestyle essentials at Velora.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora - Modern Fashion & Lifestyle Store",
    description: "Discover the latest fashion trends and lifestyle essentials at Velora.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <HolyLoader color="#868686" />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:border focus:border-black focus:rounded-md"
        >
          Skip to content
        </a>
        <TopBanner />
        <Providers>
          <TopNavbar />
          <div id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </div>
        </Providers>
        <Footer />
        <Toaster position="top-right" richColors />
        <BackToTop />
      </body>
    </html>
  );
}
