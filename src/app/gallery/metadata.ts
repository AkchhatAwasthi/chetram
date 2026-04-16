import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | Chetram Restaurant, Lucknow",
  description:
    "Browse photos of Chetram's delicious dishes including Chur Chur Naan, Kulche, Chole Bhature, Dal Makhani and more. See our restaurant ambiance in Ashiana, Lucknow.",
  keywords: [
    "Chetram gallery",
    "Chetram food photos",
    "Chur Chur Naan photos",
    "Chole Bhature Lucknow photos",
    "restaurant food photography Lucknow",
    "North Indian food gallery",
    "Chetram restaurant images",
  ],
  alternates: {
    canonical: "https://chetrampindichole.com/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Chetram Restaurant, Lucknow",
    description:
      "Browse photos of Chetram's dishes - Chur Chur Naan, Kulche, Chole Bhature & more.",
    url: "https://chetrampindichole.com/gallery",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Chetram Restaurant, Lucknow",
    description:
      "Browse photos of Chetram's dishes - Chur Chur Naan, Kulche, Chole Bhature & more.",
    images: ["/og-image.jpg"],
  },
};
