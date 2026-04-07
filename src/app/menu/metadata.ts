// Next.js allows metadata to be co-located via this file
// This works even when the page.tsx uses "use client"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Chur Chur Naan, Chole Bhature & More",
  description:
    "Explore Chetram's full menu featuring Chur Chur Naan, Pindi Chole Bhature, Dal Makhani, Kulche, Thalis, Lassi and more. Authentic North Indian food in Ashiana, Lucknow.",
  keywords: [
    "Chetram menu",
    "Chur Chur Naan menu",
    "Chole Bhature Lucknow",
    "Dal Makhani Lucknow",
    "Kulche Lucknow",
    "North Indian menu Lucknow",
    "Ashiana restaurant menu",
    "Paneer Chur Chur Naan",
    "Veg Thali Lucknow",
    "Lassi Lucknow",
    "restaurant menu Lucknow",
  ],
  alternates: {
    canonical: "https://www.chetram.in/menu",
  },
  openGraph: {
    title: "Menu | Chetram - Authentic North Indian Food Lucknow",
    description:
      "Explore Chetram's full menu featuring Chur Chur Naan, Pindi Chole Bhature, Dal Makhani, Kulche, Thalis & more.",
    url: "https://www.chetram.in/menu",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | Chetram - Authentic North Indian Food Lucknow",
    description:
      "Explore Chetram's full menu featuring Chur Chur Naan, Pindi Chole Bhature, Dal Makhani & more.",
    images: ["/og-image.jpg"],
  },
};
