"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";

const outlets = [
    {
        name: "Ashiana Outlet",
        address: "Quila Road, Near Power House Chauraha, Opposite Ashiana Kotwali, Sector K, Ashiana, Lucknow, UP- 226012",
        phone: "+91 70543 52288",
        timing: "7:30 AM - 11:00 PM",
        specialTiming: "Open All Days",
        mapLink: "https://maps.app.goo.gl/Lw63W3ANbmRk73rY6",
    },
];

export default function OutletsTimings() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Visit Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
                            Our Outlet & <span className="text-primary">Timings</span>
                        </h2>
                        <div className="h-1 w-20 bg-accent mt-4 rounded-full mx-auto" />
                        <p className="text-text-muted text-lg mt-4">
                            Visit us at our location in Ashiana, Lucknow
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-accent/30"
                    >
                        <Image
                            src="https://github.com/AkchhatAwasthi/chetramimages/blob/main/ANM09061-Edit.jpg?raw=true"
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
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-accent/20"
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
                                            <p className="text-sm text-accent font-semibold">{outlet.specialTiming}</p>
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
