"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";

const testimonials = [
    {
        name: "Priya Sharma",
        location: "Gomti Nagar",
        rating: 5,
        quote: "The best Chole Bhature in Lucknow! Reminds me of Delhi every single time.",
    },
    {
        name: "Rahul Verma",
        location: "Hazratganj",
        rating: 5,
        quote: "Chur Chur Naan is absolutely divine. The consistency in taste is remarkable!",
    },
    {
        name: "Anjali Gupta",
        location: "Alambagh",
        rating: 5,
        quote: "Love their eco-friendly approach. Great food with a conscience!",
    },
];

export default function CustomerLove() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Testimonials</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
                            Customer <span className="text-primary">Love</span>
                        </h2>
                        <div className="h-1 w-20 bg-accent mt-4 rounded-full mx-auto" />
                        <p className="text-text-muted text-lg mt-4">
                            Hear what our happy customers have to say
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-accent/30"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2074&auto=format&fit=crop"
                            alt="Happy customers"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <div className="space-y-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow relative border border-accent/20"
                            >
                                <Quote className="absolute top-4 right-4 text-accent/30" size={48} />
                                <div className="flex gap-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-accent text-accent" />
                                    ))}
                                </div>
                                <p className="text-text-dark mb-4 italic leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <p className="font-bold text-text-dark">{testimonial.name}</p>
                                    <p className="text-sm text-text-muted">{testimonial.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
