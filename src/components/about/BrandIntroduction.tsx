"use client";

import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

export default function BrandIntroduction() {
    return (
        <section className="py-20 bg-gradient-to-b from-neutral-cream/30 to-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                    {/* Left - Image */}
                    <ScrollReveal direction="left">
                        <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                                alt="Chetram Restaurant"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                    </ScrollReveal>

                    {/* Right - Story */}
                    <ScrollReveal direction="right" delay={0.2}>
                        <div className="space-y-6">
                            <div>
                                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
                                    Est. 2010 • Lucknow
                                </span>
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-4">
                                    A Legacy Built on <span className="text-primary">Authentic Taste</span>
                                </h1>
                                <div className="h-1 w-24 bg-primary rounded-full mb-6" />
                            </div>

                            <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                                <p>
                                    What started as a humble dream to bring the authentic flavors of Delhi's iconic street food to Lucknow has blossomed into a beloved culinary destination.
                                </p>
                                <p>
                                    At <span className="font-semibold text-text-dark">Chetram</span>, we believe that great food is more than just a meal—it's an experience, a memory, and a connection to tradition. Every dish we serve carries the soul of Delhi's vibrant street food culture, prepared with the same passion and precision that has defined us since day one.
                                </p>
                                <p>
                                    From our signature <span className="font-semibold text-primary">Chur Chur Naan</span> to our legendary <span className="font-semibold text-accent">Pindi Chole Bhature</span>, we've stayed true to our roots while creating a space where families, friends, and food lovers come together.
                                </p>
                            </div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.4 }}
                                className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200"
                            >
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">14+</div>
                                    <div className="text-sm text-text-muted">Years of Excellence</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">5</div>
                                    <div className="text-sm text-text-muted">Outlets Across City</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50K+</div>
                                    <div className="text-sm text-text-muted">Happy Customers</div>
                                </div>
                            </motion.div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
