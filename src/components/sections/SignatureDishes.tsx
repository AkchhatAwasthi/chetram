"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";

const dishes = [
    {
        name: "Pindi Chole Bhature",
        tagline: "The Delhi Classic",
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=2070&auto=format&fit=crop",
    },
    {
        name: "Paneer Bhature",
        tagline: "Creamy & Delicious",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop",
    },
    {
        name: "Chur Chur Naan",
        tagline: "Crispy Perfection",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop",
    },
    {
        name: "Dal Makhni",
        tagline: "Slow Cooked Magic",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop",
    },
    {
        name: "Lassi",
        tagline: "Thick & Refreshing",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function SignatureDishes() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-4">
                            Our Signature Dishes
                        </h2>
                        <p className="text-text-muted text-lg max-w-2xl mx-auto">
                            Authentic flavors that keep our customers coming back
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {dishes.map((dish, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <p className="text-xs uppercase tracking-wider opacity-90">{dish.tagline}</p>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-text-dark text-center">{dish.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
