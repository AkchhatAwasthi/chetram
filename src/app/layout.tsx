import type { Metadata } from "next";
import { Poppins, Inter, Playfair_Display } from "next/font/google";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const siteUrl = "https://www.chetram.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chetram | Lucknow's Famous Chur Chur Naan & Pindi Chole Bhature",
    template: "%s | Chetram - Lucknow",
  },
  description:
    "Chetram is Lucknow's most loved restaurant for authentic North Indian street food. Famous for Chur Chur Naan, Pindi Chole Bhature, Dal Makhani & more. Visit us in Ashiana, Lucknow.",
  keywords: [
    "Chetram",
    "Chur Chur Naan Lucknow",
    "Pindi Chole Bhature Lucknow",
    "North Indian restaurant Lucknow",
    "best restaurant Ashiana Lucknow",
    "Chole Bhature Lucknow",
    "Dal Makhani Lucknow",
    "Kulche Lucknow",
    "authentic North Indian food Lucknow",
    "Lucknow street food",
    "Chetram restaurant",
    "Chetram Ashiana",
  ],
  authors: [{ name: "Chetram Restaurant", url: siteUrl }],
  creator: "Chetram Restaurant",
  publisher: "Chetram Restaurant",
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Chetram Restaurant",
    title: "Chetram | Lucknow's Famous Chur Chur Naan & Pindi Chole Bhature",
    description:
      "Chetram is Lucknow's most loved restaurant for authentic North Indian street food. Famous for Chur Chur Naan, Pindi Chole Bhature, Dal Makhani & more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chetram Restaurant - Authentic North Indian Food in Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chetram | Lucknow's Famous Chur Chur Naan & Pindi Chole Bhature",
    description:
      "Chetram is Lucknow's most loved restaurant for authentic North Indian street food. Famous for Chur Chur Naan, Pindi Chole Bhature & more.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "v34GdW5TlL5GrJ7rM89IOyK8zJ9Odkp1UyNH36V_vKQ",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteUrl}/#restaurant`,
  name: "Chetram",
  description:
    "Lucknow's famous restaurant for authentic North Indian street food - Chur Chur Naan, Pindi Chole Bhature, Dal Makhani and more.",
  url: siteUrl,
  telephone: "+917054352288",
  email: "chetrambhature@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Quila Road, Near Power House Chauraha, Opposite Ashiana Kotwali, Sector K",
    addressLocality: "Ashiana, Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226012",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.7893,
    longitude: 80.9481,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:30",
      closes: "23:00",
    },
  ],
  servesCuisine: ["North Indian", "Indian", "Street Food"],
  priceRange: "₹₹",
  hasMap: "https://maps.app.goo.gl/Lw63W3ANbmRk73rY6",
  sameAs: [],
  image: `${siteUrl}/logo.png`,
  foundingDate: "2022",
  areaServed: "Lucknow, Uttar Pradesh, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} ${playfair.variable} antialiased bg-background text-text-dark font-sans selection:bg-primary selection:text-white flex flex-col min-h-screen`}
      >
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
