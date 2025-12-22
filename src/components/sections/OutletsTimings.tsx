"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";

const outlets = [
    {
        name: "Gomti Nagar Outlet",
        address: "Vibhuti Khand, Gomti Nagar, Lucknow",
        phone: "+91 98765 43210",
        timing: "7:00 AM - 11:00 PM",
        specialTiming: "Morning Chole Bhature: 7:00 AM - 11:00 AM",
    },
    {
        name: "Hazratganj Outlet",
        address: "MG Marg, Hazratganj, Lucknow",
        phone: "+91 98765 43211",
        timing: "7:00 AM - 11:00 PM",
        specialTiming: "Morning Chole Bhature: 7:00 AM - 11:00 AM",
    },
    {
        name: "Alambagh Outlet",
        address: "Kanpur Road, Alambagh, Lucknow",
        phone: "+91 98765 43212",
        timing: "10:00 AM - 10:00 PM",
        specialTiming: "Full Day Service",
    },
];

export default function OutletsTimings() {
    return (
        <section className="py-24 bg-neutral-cream/30">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-4">
                            Our Outlets & Timings
                        </h2>
                        <p className="text-text-muted text-lg">
                            Visit us at any of our convenient locations across Lucknow
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop"
                            alt="Restaurant exterior"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <div className="space-y-6">
                        {outlets.map((outlet, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-text-dark mb-3">{outlet.name}</h3>
                                <div className="space-y-2 text-text-muted">
                                    <div className="flex items-start gap-2">
                                        <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                                        <p>{outlet.address}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone size={18} className="text-primary flex-shrink-0" />
                                        <p>{outlet.phone}</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-text-dark">{outlet.timing}</p>
                                            <p className="text-sm text-accent">{outlet.specialTiming}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
