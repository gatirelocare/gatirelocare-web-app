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
  title: {
    default: "GatiRelocare Packers Movers | Premium Relocation Services",
    template: "%s | GatiRelocare Packers Movers",
  },
  description:
    "Premium packers and movers service offering luxury relocation solutions. Expert handling for homes, offices, and automobiles with 24/7 support. Get your free quote today!",
  keywords: [
    "packers and movers",
    "relocation services",
    "moving services",
    "home shifting",
    "office relocation",
    "car transportation",
    "premium movers",
    "professional packers",
    "storage solutions",
    "warehouse services",
    "GatiRelocare",
  ],
  authors: [{ name: "GatiRelocare Packers Movers" }],
  creator: "GatiRelocare Packers Movers",
  publisher: "GatiRelocare Packers Movers",
  metadataBase: new URL("https://gatirelocare.com"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gatirelocare.com", // Update with your actual domain
    siteName: "GatiRelocare Packers Movers",
    title: "GatiRelocare Packers Movers | Premium Relocation Services",
    description:
      "Premium packers and movers service offering luxury relocation solutions. Expert handling for homes, offices, and automobiles with 24/7 support.",
    images: [
      {
        url: "/og-image.jpg", // You can add an Open Graph image later
        width: 1200,
        height: 630,
        alt: "GatiRelocare Packers Movers - Premium Relocation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GatiRelocare Packers Movers | Premium Relocation Services",
    description:
      "Premium packers and movers service offering luxury relocation solutions. Expert handling for homes, offices, and automobiles with 24/7 support.",
    images: ["/og-image.jpg"], // You can add a Twitter image later
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
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
