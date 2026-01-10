import type { Metadata } from "next";
import { Poppins, Inter, Playfair_Display } from "next/font/google";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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

export const metadata: Metadata = {
  title: "Chetram | Lucknow's Famous Chur Chur Naan & Chole Bhature",
  description: "Experience authentic North Indian cuisine at Chetram. Famous for Chur Chur Naan, Pindi Chole Bhature, and quick bites in Lucknow.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
