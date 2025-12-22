"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function OurStory() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <ScrollReveal direction="left">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-serif font-bold text-text-dark mb-4">
                                About Us
                            </h2>
                            <p className="text-text-muted text-base mb-6 leading-relaxed">
                                From a small setup to Lucknow's favorite destination for authentic Delhi-style food
                            </p>
                            <div className="space-y-4 text-text-muted leading-relaxed">
                                <p>
                                    What started as a small setup with a passion for authentic Delhi-style food has grown into a beloved chain across Lucknow.
                                </p>
                                <p>
                                    From our first outlet to multiple locations today, we've stayed true to our roots—serving the same authentic recipes, maintaining unwavering quality, and treating every customer like family.
                                </p>
                                <p>
                                    Our journey is built on consistency, taste, and the trust of thousands who choose Chetram every day.
                                </p>
                            </div>
                            <Link
                                href="/about"
                                className="inline-block mt-6 text-primary hover:text-primary-dark font-medium transition-colors"
                            >
                                Learn More →
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Right Column - Single Image */}
                    <ScrollReveal direction="right" delay={0.2}>
                        <div className="relative h-[450px] lg:h-[500px]">
                            <Image
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                                alt="Chetram Restaurant"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
