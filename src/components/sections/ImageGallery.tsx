"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const galleryImages = [
    {
        src: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/1%20(2).png?raw=true",
        alt: "Chole Bhature",
        title: "Our Signature Chole Bhature",
    },
    {
        src: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/2%20(4).png?raw=true",
        alt: "Restaurant Outlet",
        title: "Our Bustling Outlets",
    },
    {
        src: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/3%20(2).png?raw=true",
        alt: "Kitchen Preparation",
        title: "Fresh Preparation Daily",
    },
    {
        src: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/4.png?raw=true",
        alt: "Happy Customers",
        title: "The Chetram Family",
    },
];

export default function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {galleryImages.map((image, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div
                                    onClick={() => setSelectedImage(index)}
                                    className="relative h-80 cursor-pointer group overflow-hidden rounded-2xl bg-white border-2 border-accent/30 hover:border-primary/50 transition-colors shadow-sm hover:shadow-lg"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="absolute bottom-4 left-4 right-4 text-white">
                                            <p className="font-bold">{image.title}</p>
                                        </div>
                                    </div>
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
                        className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
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
