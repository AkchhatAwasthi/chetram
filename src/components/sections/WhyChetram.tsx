"use client";

import { Award, Clock, Leaf, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const features = [
    {
        icon: Award,
        title: "Authentic Taste",
        description: "Original Delhi-style Pindi Chole recipe perfected over decades.",
    },
    {
        icon: Leaf,
        title: "Fresh Ingredients",
        description: "We use only the freshest locally sourced ingredients daily.",
    },
    {
        icon: Clock,
        title: "Quick Service",
        description: "Hot and fresh food served in minutes, perfect for your busy day.",
    },
    {
        icon: IndianRupee,
        title: "Pocket Friendly",
        description: "Premium taste at prices that are easy on your wallet.",
    },
];

export default function WhyChetram() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Why Choose Us</h2>
                        <h3 className="text-4xl font-bold text-text-dark">The <span className="text-accent">Chetram</span> Experience</h3>
                        <div className="h-1 w-20 bg-accent mt-4 rounded-full mx-auto" />
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white hover:shadow-xl border border-primary/20 transition-all duration-300 text-center group"
                        >
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-accent group-hover:text-text-dark">
                                <feature.icon size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h4>
                            <p className="text-text-muted leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
