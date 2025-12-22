"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Rohan Gupta",
        rating: 5,
        text: "The best Chole Bhature in Lucknow without a doubt! The texture, the spice mix, everything is just perfect.",
        date: "2 days ago",
    },
    {
        name: "Anjali Singh",
        rating: 5,
        text: "Absolutely love their Chur Chur Naan thali. It's so filling and tastes exactly like the ones in Delhi.",
        date: "1 week ago",
    },
    {
        name: "Vikas Kumar",
        rating: 4,
        text: "Great food and hygiene. Service is quick even during rush hours. A must-visit place with family.",
        date: "3 weeks ago",
    },
    {
        name: "Priya Sharma",
        rating: 5,
        text: "Pocket friendly and delicious. Their Lassi is also very good. Highly recommended for students.",
        date: "1 month ago",
    },
];

export default function Reviews() {
    return (
        <section className="py-20 bg-white border-t border-neutral-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Customer Love</h2>
                    <h3 className="text-4xl font-serif font-bold text-text-dark">What People Say</h3>
                    <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-neutral-cream p-6 rounded-2xl relative"
                        >
                            <Quote size={40} className="text-primary/10 absolute top-4 right-4" />
                            <div className="flex gap-1 mb-4 text-accent">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-accent" : "text-gray-300"} />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic text-sm leading-relaxed">"{review.text}"</p>
                            <div>
                                <h4 className="font-bold text-text-dark">{review.name}</h4>
                                <p className="text-xs text-gray-500">{review.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
