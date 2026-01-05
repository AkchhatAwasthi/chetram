"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Recycle, Ban } from "lucide-react";

const practices = [
    {
        icon: Leaf,
        title: "CHUK Compostable Plates",
        description: "100% biodegradable plates made from sugarcane bagasse",
    },
    {
        icon: Ban,
        title: "Zero Plastic Policy",
        description: "Completely plastic-free packaging and serving",
    },
    {
        icon: Recycle,
        title: "Eco-Friendly Operations",
        description: "Sustainable practices in every aspect of our business",
    },
];

export default function Sustainability() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Eco Friendly</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
                            Sustainability <span className="text-primary">Practices</span>
                        </h2>
                        <div className="h-1 w-20 bg-accent mb-6 rounded-full" />
                        <p className="text-text-muted text-lg mb-8 leading-relaxed">
                            We believe great food should not come at the cost of our planet.
                            That's why we've committed to eco-friendly practices that make a real difference.
                        </p>

                        <div className="space-y-6">
                            {practices.map((practice, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: index * 0.15 }}
                                    className="flex gap-4 items-start p-4 rounded-xl bg-background border border-accent/20 hover:border-primary/30 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <practice.icon className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-text-dark mb-2">{practice.title}</h3>
                                        <p className="text-text-muted">{practice.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/30"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
                            alt="Eco-friendly practices"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
