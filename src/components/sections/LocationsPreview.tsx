"use client";

import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";

const locations = [
    "Aashiana",
    "Naka Hindola",
    "Lalbagh",
    "Vijay Nagar",
    "Hazratganj",
];

export default function LocationsPreview() {
    return (
        <section className="py-20 bg-secondary text-neutral-cream relative overflow-hidden">
            {/* Decorative pattern/overlay could go here */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Visit Us</h2>
                        <h3 className="text-4xl font-serif font-bold text-white">Serving Across Lucknow</h3>
                    </div>
                    <Link
                        href="/locations"
                        className="px-6 py-3 border border-accent/50 text-accent hover:bg-accent hover:text-secondary rounded-full font-bold transition-all"
                    >
                        View All Map Locations
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {locations.map((loc) => (
                        <div
                            key={loc}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors flex flex-col items-center text-center group cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                                <MapPin size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">{loc}</h4>
                            <p className="text-sm text-white/60 mb-4">Open 9 - 10 PM</p>
                            <Link href="/locations" className="text-xs font-bold text-accent flex items-center gap-1 uppercase tracking-wide hover:underline">
                                Get Directions <Navigation size={12} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
