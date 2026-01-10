"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OrderVisit() {
    return (
        <section className="py-24 bg-accent relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <Image
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop"
                    alt="Background pattern"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-4xl md:text-5xl font-bold text-text-dark mb-4"
                    >
                        Ready to Experience <span className="text-primary">Chetram?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="text-text-dark/80 text-lg max-w-2xl mx-auto"
                    >
                        Visit our outlet or call us to place your order
                    </motion.p>
                    <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/contact"
                            className="block bg-primary hover:bg-primary-dark text-white p-8 rounded-2xl text-center transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 group"
                        >
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <MapPin size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Find Our Outlet</h3>
                            <p className="text-white/90">Visit us for dine-in experience</p>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3 }}
                    >
                        <a
                            href="tel:+917054352288"
                            className="block bg-white hover:bg-background text-text-dark p-8 rounded-2xl text-center transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 group"
                        >
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Phone size={32} className="text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Call to Order</h3>
                            <p className="text-text-muted">Speak to us directly</p>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
