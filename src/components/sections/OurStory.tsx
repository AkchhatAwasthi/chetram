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
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Journey</span>
                            <h2 className="text-4xl font-bold text-text-dark mb-4">
                                About <span className="text-accent">Chetram</span>
                            </h2>
                            <div className="h-1 w-20 bg-primary mb-6 rounded-full" />
                            <p className="text-text-muted text-base mb-5 leading-relaxed">
                                From a small setup to Lucknow's favorite destination for authentic Delhi-style food
                            </p>
                            <div className="space-y-4 text-text-muted text-lg leading-relaxed">
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
                                className="inline-block mt-6 bg-accent hover:bg-accent-soft text-text-dark px-6 py-3 rounded-full font-bold transition-colors shadow-md"
                            >
                                Learn More →
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Right Column - Single Image */}
                    <ScrollReveal direction="right" delay={0.2}>
                        <div className="relative h-[450px] lg:h-[500px] rounded-2xl overflow-hidden border-4 border-primary/30 shadow-xl">
                            <Image
                                src="https://github.com/AkchhatAwasthi/chetramimages/blob/main/ANM09027.jpg?raw=true"
                                alt="Chetram Restaurant"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
