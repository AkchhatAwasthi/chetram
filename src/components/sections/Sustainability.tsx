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
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6">
                            Sustainability Practices
                        </h2>
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
                                    className="flex gap-4 items-start"
                                >
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <practice.icon className="text-green-600" size={24} />
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
                        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
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
