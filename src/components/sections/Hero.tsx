"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-text-dark mt-24">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />
                {/* Placeholder for Hero Image - In a real app, use next/image with a local file */}
                <img
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop"
                    alt="Delicious North Indian Food Spread"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            <div className="relative z-20 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary text-primary-dark font-semibold text-sm mb-6 backdrop-blur-sm">
                        Est. 2010 • Lucknow
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                        Lucknow's Famous <br />
                        <span className="text-primary">Chur Chur Naan</span> & <span className="text-accent">Chole Bhature</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-cream/90 mb-10 max-w-2xl mx-auto">
                        Experience the authentic taste of North India right here in Lucknow.
                        Crispy, buttery, and absolutely delicious.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            href="/menu"
                            className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Explore Menu <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full md:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-2 text-sm text-neutral-cream/70">
                        <MapPin size={16} className="text-primary" />
                        <span>Serving at 5 locations across Lucknow</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
