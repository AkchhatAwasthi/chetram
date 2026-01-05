"use client";

import { ArrowRight, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

const milestones = [
    { year: "2010", event: "First outlet opens in Aashiana" },
    { year: "2013", event: "Expanded to Gomti Nagar" },
    { year: "2016", event: "Launched our signature Chur Chur Naan" },
    { year: "2019", event: "Opened 4th outlet in Hazratganj" },
    { year: "2022", event: "Introduced eco-friendly packaging" },
    { year: "2024", event: "5 outlets serving 50,000+ customers" },
];

export default function OurJourney() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <Image
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">
                            Our Journey
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                            From Humble Beginnings to <span className="text-primary">Lucknow's Favorite</span>
                        </h3>
                        <div className="h-1 w-24 bg-accent rounded-full mx-auto mb-6" />
                        <p className="text-lg text-text-muted leading-relaxed">
                            Every great journey has milestones. Here are some of the key moments that shaped Chetram into what it is today.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-accent/20 group hover:border-primary/30"
                            >
                                <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
                                    {milestone.year}
                                </div>
                                <p className="text-text-muted leading-relaxed">
                                    {milestone.event}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Looking Ahead */}
                <ScrollReveal delay={0.3}>
                    <div className="max-w-5xl mx-auto bg-white p-12 rounded-2xl border border-accent/20 shadow-xl">
                        <div className="text-center mb-8">
                            <h4 className="text-3xl font-bold text-text-dark mb-4">
                                Looking <span className="text-primary">Ahead</span>
                            </h4>
                            <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
                                As we look to the future, our vision is clear: to expand our presence across Uttar Pradesh while maintaining the same authentic taste and quality that our customers love. We're also exploring new menu innovations and sustainable practices to serve you better.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <Link
                                href="/menu"
                                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                            >
                                Explore Our Menu
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto bg-accent hover:bg-accent-soft text-text-dark px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
                            >
                                <MapPin size={20} />
                                Visit Our Outlets
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 pt-8 border-t border-accent/20 text-center"
                        >
                            <p className="text-text-muted mb-3">Have questions or feedback? We'd love to hear from you!</p>
                            <a
                                href="tel:+919876543210"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                            >
                                <Phone size={18} />
                                +91 987 654 3210
                            </a>
                        </motion.div>
                    </div>
                </ScrollReveal>

                {/* Final Message */}
                <ScrollReveal delay={0.5}>
                    <div className="text-center mt-16 max-w-2xl mx-auto">
                        <p className="text-2xl font-serif italic text-text-dark">
                            "Thank you for being a part of our story. Here's to many more years of serving you with love and authenticity."
                        </p>
                        <p className="text-primary font-semibold mt-4">— The Chetram Family</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
