"use client";

import { Heart, Award, Users, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const values = [
    {
        icon: Award,
        title: "Authenticity First",
        description: "We honor traditional Delhi-style recipes, using time-tested methods and authentic spices to deliver genuine flavors.",
    },
    {
        icon: Heart,
        title: "Customer Love",
        description: "Every customer is family. We're committed to creating memorable experiences with warmth and hospitality.",
    },
    {
        icon: Leaf,
        title: "Quality & Hygiene",
        description: "From sourcing fresh ingredients daily to maintaining spotless kitchens, quality and hygiene are non-negotiable.",
    },
    {
        icon: Users,
        title: "Community First",
        description: "We believe in giving back, supporting local suppliers, and being a responsible part of the Lucknow community.",
    },
];

export default function MissionValues() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">
                            Our Mission & Values
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                            What <span className="text-accent">Drives Us</span> Every Day
                        </h3>
                        <div className="h-1 w-24 bg-primary rounded-full mx-auto mb-6" />
                        <p className="text-lg text-text-muted leading-relaxed">
                            Our mission is simple: to bring joy through authentic, delicious food while building lasting relationships with our community. These core values guide everything we do.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group"
                        >
                            <div className="bg-background hover:bg-white p-8 rounded-2xl h-full transition-all duration-300 hover:shadow-xl border border-primary/20 hover:border-accent/50">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-text-dark transition-all duration-300">
                                    <value.icon size={32} strokeWidth={2} />
                                </div>

                                {/* Content */}
                                <h4 className="text-xl font-bold text-text-dark mb-3">
                                    {value.title}
                                </h4>
                                <p className="text-text-muted leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mission Statement */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-16 max-w-4xl mx-auto bg-accent p-10 rounded-2xl">
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-text-dark mb-4">
                                Our <span className="text-primary">Commitment</span> to You
                            </h4>
                            <p className="text-lg text-text-dark/80 leading-relaxed">
                                We promise to serve you food that's made with love, prepared with care, and delivered with a smile. Every plate that leaves our kitchen represents our dedication to excellence and our gratitude for your trust.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
