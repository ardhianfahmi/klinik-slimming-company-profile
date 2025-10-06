import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/style/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klinik Slimming - Professional Body & Wellness Care",
  description: "Klinik Slimming provides professional body slimming, wellness treatments, and personalized care to help you look and feel your best.",
  keywords: ["Klinik Slimming", "body slimming", "wellness care", "weight loss", "professional treatments"],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Klinik Slimming", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "Klinik Slimming - Professional Body & Wellness Care",
    description: "Experience professional slimming and wellness treatments tailored for your body and lifestyle.",
    url: "https://yourwebsite.com",
    siteName: "Klinik Slimming",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Klinik Slimming",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Slimming - Professional Body & Wellness Care",
    description: "Experience professional slimming and wellness treatments tailored for your body and lifestyle.",
    images: ["https://yourwebsite.com/og-image.jpg"],
    site: "@YourTwitterHandle",
    creator: "@YourTwitterHandle",
  },
  metadataBase: new URL("https://yourwebsite.com"),
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
