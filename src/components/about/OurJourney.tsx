"use client";

import { ArrowRight, MapPin, Phone, Heart, Utensils, Leaf, Users, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

const whyCustomersLoveUs = [
    {
        icon: Utensils,
        title: "Authentic Taste",
        description: "Genuine Delhi-style flavors that transport you straight to Chandni Chowk with every bite."
    },
    {
        icon: Heart,
        title: "Made with Love",
        description: "Every dish is prepared with passion and care, just like homemade food should be."
    },
    {
        icon: Leaf,
        title: "Fresh Ingredients",
        description: "We source the freshest ingredients daily to ensure quality in every meal."
    },
    {
        icon: Users,
        title: "Family Legacy",
        description: "Recipes passed down through generations, perfected over years of dedication."
    },
    {
        icon: Star,
        title: "Customer First",
        description: "Your satisfaction is our priority. We listen, improve, and deliver excellence."
    },
    {
        icon: Clock,
        title: "Consistent Quality",
        description: "The same great taste every time you visit, from morning till night."
    },
];

export default function OurJourney() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <Image
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">
                            Why Choose Us
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                            Why Customers <span className="text-primary">Love Chetram</span>
                        </h3>
                        <div className="h-1 w-24 bg-accent rounded-full mx-auto mb-6" />
                        <p className="text-lg text-text-muted leading-relaxed">
                            What makes us special? Here's why thousands of food lovers choose Chetram for their authentic North Indian cravings.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Why Customers Love Us Cards */}
                <div className="max-w-5xl mx-auto mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyCustomersLoveUs.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-accent/20 group hover:border-primary/30"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <item.icon size={28} className="text-primary" />
                                </div>
                                <h4 className="text-xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-text-muted leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Looking Ahead */}
                <ScrollReveal delay={0.3}>
                    <div className="max-w-5xl mx-auto bg-white p-12 rounded-2xl border border-accent/20 shadow-xl">
                        <div className="text-center mb-8">
                            <h4 className="text-3xl font-bold text-text-dark mb-4">
                                Looking <span className="text-primary">Ahead</span>
                            </h4>
                            <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
                                As we look to the future, our vision is clear: to continue serving authentic Delhi-style food with the same passion and quality that our customers love. We're constantly exploring new menu innovations and sustainable practices to serve you better.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <Link
                                href="/menu"
                                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                            >
                                Explore Our Menu
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto bg-accent hover:bg-accent-soft text-text-dark px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
                            >
                                <MapPin size={20} />
                                Visit Our Outlet
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 pt-8 border-t border-accent/20 text-center"
                        >
                            <p className="text-text-muted mb-3">Have questions or feedback? We'd love to hear from you!</p>
                            <a
                                href="tel:+917054352288"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                            >
                                <Phone size={18} />
                                +91 70543 52288
                            </a>
                        </motion.div>
                    </div>
                </ScrollReveal>

                {/* Final Message */}
                <ScrollReveal delay={0.5}>
                    <div className="text-center mt-16 max-w-2xl mx-auto">
                        <p className="text-2xl font-serif italic text-text-dark">
                            "Thank you for being a part of our story. Here's to many more years of serving you with love and authenticity."
                        </p>
                        <p className="text-primary font-semibold mt-4">— The Chetram Family</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
