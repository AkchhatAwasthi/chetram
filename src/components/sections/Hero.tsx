"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

// Hero images - different for desktop and mobile
const heroImages = {
    desktop: "https://github.com/AkchhatAwasthi/upscalers-images/blob/main/bhature_with_raita_ANM05297-Edit%20(1).jpg?raw=true",
    mobile: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Chur%20Chur%20Naan%20with%20Dal%20Makhani%20+%20Shahi%20Paneer%20+%20Raita2_.jpg?raw=true"
};

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-text-dark mt-24">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />

                {/* Desktop Image - hidden on mobile */}
                <img
                    src={heroImages.desktop}
                    alt="Delicious North Indian Food Spread"
                    className="hidden md:block w-full h-full object-cover opacity-80"
                />

                {/* Mobile Image - hidden on desktop, uses object-center to better fit mobile screens */}
                <img
                    src={heroImages.mobile}
                    alt="Delicious North Indian Food Spread"
                    className="block md:hidden w-full h-full object-cover object-center opacity-80"
                />
            </div>

            <div className="relative z-20 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-accent text-text-dark font-bold text-sm mb-6">
                        🌶️ Est. 2010 • Lucknow
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Lucknow's Famous <br />
                        <span className="text-accent">Chur Chur Naan</span> & <span className="text-primary">Pindi Chole Bhature</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Experience the authentic taste of North India right here in Lucknow.
                        Crispy, buttery, and absolutely delicious.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            href="/menu"
                            className="w-full md:w-auto bg-accent hover:bg-accent-soft text-text-dark px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-accent/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Explore Menu <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-primary/50 hover:-translate-y-1"
                        >
                            Find Our Outlets
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-2 text-sm text-white/70">
                        <MapPin size={16} className="text-accent" />
                        <span>Serving at 5 locations across Lucknow</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
