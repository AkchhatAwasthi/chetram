import BrandIntroduction from "@/components/about/BrandIntroduction";
import MissionValues from "@/components/about/MissionValues";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import MeetTheFounder from "@/components/about/MeetTheFounder";
import OurJourney from "@/components/about/OurJourney";

export const metadata = {
    title: "About Us | Chetram - Lucknow's Authentic North Indian Restaurant Since 2022",
    description: "Discover the story behind Chetram - Lucknow's favorite destination for authentic Delhi-style Chole Bhature and Chur Chur Naan since 2022. Learn about our mission, values, founder, and journey.",
    keywords: [
        "about Chetram",
        "Chetram story",
        "Chetram founder",
        "Chetram history",
        "authentic North Indian restaurant Lucknow",
        "Delhi style food Lucknow",
        "Chetram mission",
        "best Chole Bhature Lucknow",
        "Chetram 2022",
    ],
    alternates: {
        canonical: "https://chetrampindichole.com/about",
    },
    openGraph: {
        title: "About Chetram | Lucknow's Authentic North Indian Restaurant",
        description: "Discover the story behind Chetram - Lucknow's favorite destination for authentic Delhi-style Chole Bhature and Chur Chur Naan since 2022.",
        url: "https://chetrampindichole.com/about",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Chetram | Lucknow's Authentic North Indian Restaurant",
        description: "Discover the story behind Chetram - Delhi-style Chole Bhature and Chur Chur Naan in Lucknow since 2022.",
        images: ["/og-image.jpg"],
    },
};

export default function AboutPage() {
    return (
        <main className="pt-24">
            {/* Hero Section */}
            <section className="bg-accent py-16">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block py-2 px-4 rounded-full bg-primary text-white font-bold text-sm mb-6">
                        🌶️ Our Story
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-dark mb-6">
                        About <span className="text-primary">Chetram</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-dark/80 max-w-3xl mx-auto leading-relaxed">
                        A story of passion, authenticity, and bringing Delhi's iconic flavors to the heart of Lucknow.
                    </p>
                    <div className="h-1 w-20 bg-primary mt-6 rounded-full mx-auto" />
                </div>
            </section>

            {/* Section 1: Brand Introduction / Our Story */}
            <BrandIntroduction />

            {/* Section 2: Our Mission & Values */}
            <MissionValues />

            {/* Section 3: What Makes Us Different */}
            <WhatMakesUsDifferent />

            {/* Section 4: Meet the Founder */}
            <MeetTheFounder />

            {/* Section 5: Our Journey & Looking Ahead */}
            <OurJourney />
        </main>
    );
}
