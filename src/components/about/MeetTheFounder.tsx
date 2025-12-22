"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

export default function MeetTheFounder() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
                            The Visionary Behind Chetram
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6">
                            Meet the Founder
                        </h3>
                        <div className="h-1 w-24 bg-primary rounded-full mx-auto" />
                    </div>
                </ScrollReveal>

                {/* Founder Section */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                        {/* Founder Image */}
                        <ScrollReveal direction="left" className="lg:col-span-2">
                            <div className="relative">
                                {/* Main Image */}
                                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                                        alt="Founder Portrait"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>

                                {/* Decorative Element */}
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
                            </div>
                        </ScrollReveal>

                        {/* Founder Story */}
                        <ScrollReveal direction="right" delay={0.2} className="lg:col-span-3">
                            <div className="space-y-6">
                                {/* Quote Icon */}
                                <Quote size={48} className="text-primary/20" />

                                {/* Name & Title */}
                                <div>
                                    <h4 className="text-3xl font-serif font-bold text-text-dark mb-2">
                                        Rajesh Kumar Sharma
                                    </h4>
                                    <p className="text-primary font-semibold text-lg">
                                        Founder & Chief Culinary Visionary
                                    </p>
                                </div>

                                {/* Personal Message */}
                                <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                                    <p>
                                        "Growing up in Delhi, I was surrounded by the incredible flavors of street food—the crispy bhature, the aromatic chole, the perfectly charred naan. When I moved to Lucknow, I realized something was missing."
                                    </p>
                                    <p>
                                        "I wanted to bring that authentic Delhi experience to this beautiful city, but with one crucial difference: uncompromising hygiene and quality. That's how Chetram was born in 2010."
                                    </p>
                                    <p>
                                        "What started as a small outlet in Aashiana has now grown into a family of 5 locations, but our mission remains the same—to serve food that makes people happy, brings families together, and creates memories that last a lifetime."
                                    </p>
                                    <p className="font-semibold text-text-dark italic">
                                        "Every customer who walks through our doors is not just a guest, but a part of the Chetram family. Your trust and love have been the foundation of our journey."
                                    </p>
                                </div>

                                {/* Signature */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-6 border-t border-neutral-200"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="text-4xl font-serif italic text-primary">
                                            Rajesh Kumar
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Additional Info Cards */}
                    <ScrollReveal delay={0.4}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                            <div className="bg-neutral-cream/50 p-6 rounded-xl text-center border border-neutral-100">
                                <div className="text-3xl font-bold text-primary mb-2">2010</div>
                                <div className="text-sm text-text-muted">Journey Started</div>
                            </div>
                            <div className="bg-neutral-cream/50 p-6 rounded-xl text-center border border-neutral-100">
                                <div className="text-3xl font-bold text-primary mb-2">Delhi → Lucknow</div>
                                <div className="text-sm text-text-muted">Bringing Authentic Flavors</div>
                            </div>
                            <div className="bg-neutral-cream/50 p-6 rounded-xl text-center border border-neutral-100">
                                <div className="text-3xl font-bold text-primary mb-2">Family First</div>
                                <div className="text-sm text-text-muted">Our Core Philosophy</div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
