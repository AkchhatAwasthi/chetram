"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Image from "next/image";

const differentiators = [
    {
        title: "14+ Years of Expertise",
        description: "Over a decade of perfecting our recipes and serving authentic Delhi-style food in Lucknow.",
    },
    {
        title: "Consistent Taste, Every Time",
        description: "Our secret? Standardized recipes, trained chefs, and quality checks that ensure the same great taste at every outlet.",
    },
    {
        title: "100% Vegetarian & Pure",
        description: "We serve only pure vegetarian food, prepared in a clean, dedicated kitchen environment.",
    },
    {
        title: "Eco-Friendly Practices",
        description: "We use CHUK compostable plates and maintain a zero-plastic policy across all outlets.",
    },
    {
        title: "Family-Friendly Atmosphere",
        description: "Clean, comfortable spaces designed for families to enjoy quality time over great food.",
    },
    {
        title: "Affordable Premium Quality",
        description: "We believe everyone deserves great food. Premium taste at prices that won't break the bank.",
    },
];

export default function WhatMakesUsDifferent() {
    return (
        <section className="py-24 bg-gradient-to-b from-neutral-cream/20 to-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                    {/* Left - Content */}
                    <ScrollReveal direction="left">
                        <div>
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
                                Why Choose Chetram
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6">
                                What Makes Us <span className="text-primary">Different</span>
                            </h3>
                            <div className="h-1 w-24 bg-primary rounded-full mb-8" />

                            <p className="text-lg text-text-muted mb-10 leading-relaxed">
                                In a city full of food options, we've built our reputation on authenticity, consistency, and genuine care for our customers. Here's what sets us apart:
                            </p>

                            <div className="space-y-6">
                                {differentiators.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-4 items-start group"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 group-hover:bg-primary transition-colors">
                                            <CheckCircle2 size={16} className="text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text-dark mb-1 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-text-muted text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right - Image Collage */}
                    <ScrollReveal direction="right" delay={0.2}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=2070&auto=format&fit=crop"
                                        alt="Chole Bhature"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop"
                                        alt="Restaurant Interior"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
                                        alt="Fresh Preparation"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2074&auto=format&fit=crop"
                                        alt="Happy Customers"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
