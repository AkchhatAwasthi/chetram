"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=2070&auto=format&fit=crop",
        alt: "Chole Bhature",
        title: "Our Signature Chole Bhature",
    },
    {
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop",
        alt: "Restaurant Outlet",
        title: "Our Bustling Outlets",
    },
    {
        src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
        alt: "Kitchen Preparation",
        title: "Fresh Preparation Daily",
    },
    {
        src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2074&auto=format&fit=crop",
        alt: "Happy Customers",
        title: "The Chetram Family",
    },
];

export default function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <>
            <section className="py-20 bg-neutral-cream/20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {galleryImages.map((image, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div
                                    onClick={() => setSelectedImage(index)}
                                    className="relative h-80 cursor-pointer group overflow-hidden rounded-lg bg-white border border-neutral-100"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        aria-label="Close"
                    >
                        <X size={32} />
                    </button>
                    <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
                        <Image
                            src={galleryImages[selectedImage].src}
                            alt={galleryImages[selectedImage].alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
