"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChefHat, Flame, Heart } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const principles = [
    {
        icon: ChefHat,
        title: "Traditional Recipes",
        description: "Authentic Delhi-style preparation methods passed down through generations",
    },
    {
        icon: Flame,
        title: "Fresh Daily Cooking",
        description: "Every dish prepared fresh each morning with premium ingredients",
    },
    {
        icon: Heart,
        title: "Made with Love",
        description: "The same care and attention in every single plate we serve",
    },
];

export default function DelhiTaste() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-4">
                            Delhi Taste in Lucknow
                        </h2>
                        <p className="text-text-muted text-lg max-w-3xl mx-auto">
                            We bring the authentic flavors of Delhi's street food culture to Lucknow.
                            Our preparation style honors traditional methods while maintaining the highest standards of quality and hygiene.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2070&auto=format&fit=crop"
                            alt="Traditional cooking"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <div className="space-y-6">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.15 }}
                                className="flex gap-4 items-start p-6 rounded-xl bg-neutral-cream/40 hover:bg-neutral-cream/60 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <principle.icon className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text-dark mb-2">{principle.title}</h3>
                                    <p className="text-text-muted">{principle.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
