import BrandIntroduction from "@/components/about/BrandIntroduction";
import MissionValues from "@/components/about/MissionValues";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import MeetTheFounder from "@/components/about/MeetTheFounder";
import OurJourney from "@/components/about/OurJourney";

export const metadata = {
    title: "About Us - Chetram | Authentic Delhi-Style Food in Lucknow",
    description: "Discover the story behind Chetram, Lucknow's favorite destination for authentic Delhi-style Chole Bhature and Chur Chur Naan. Learn about our mission, values, and journey since 2010.",
};

export default function AboutPage() {
    return (
        <main className="pt-24">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-primary/5 to-transparent py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-text-dark mb-6">
                        About <span className="text-primary">Chetram</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
                        A story of passion, authenticity, and bringing Delhi's iconic flavors to the heart of Lucknow.
                    </p>
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
