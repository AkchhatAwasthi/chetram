"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

const dishes = [
    {
        name: "Pindi Chole Bhature",
        tagline: "The Delhi Classic",
        image: "https://raw.githubusercontent.com/AkchhatAwasthi/chetramimages/main/Chole%20Bhature%20(delhi%20pindi%20style)%202%20Pieces%20(1).jpg",
    },
    {
        name: "Shahi Paneer",
        tagline: "Creamy & Delicious",
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Shahi%20Paneer.jpg?raw=true",
    },
    {
        name: "Chur Chur Naan",
        tagline: "Crispy Perfection",
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Aloo%20Chur%20Chur%20Naan.jpg?raw=true",
    },
    {
        name: "Dal Makhni",
        tagline: "Slow Cooked Magic",
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Dal%20Makhani.jpg?raw=true",
    },
    {
        name: "Lachha Paratha",
        tagline: "Thick & Refreshing",
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Laccha%20Paratha%20(1%20Pc).jpg?raw=true",
    },
];

export default function SignatureDishes() {
    return (
        <section className="py-24 bg-accent">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
                            Our Signature Dishes
                        </h2>
                        <p className="text-text-dark/80 text-lg max-w-2xl mx-auto">
                            Authentic flavors that keep our customers coming back
                        </p>
                        <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto" />
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
                            <div className="relative h-64 rounded-2xl overflow-hidden mb-4 border-2 border-primary/30 shadow-lg">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/30 backdrop-blur-sm">
                                    <p className="text-xs uppercase tracking-wider text-primary font-semibold">{dish.tagline}</p>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-text-dark text-center">{dish.name}</h3>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-text-dark/80 text-lg font-medium">
                        Craving a complete tandoori meal? Try our famous <Link href="/best-chole-kulcha-combo-lucknow" className="text-primary font-bold hover:underline">Best Chole Kulcha Combo in Lucknow</Link>!
                    </p>
                </div>
            </div>
        </section>
    );
}
