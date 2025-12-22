"use client";

import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1921&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=2080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop",
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="pt-36 pb-20 min-h-screen bg-neutral-cream">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-4">Gallery</h1>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        A visual feast of our delicious offerings and vibrant ambiance.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-auto object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full screen view"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />
                </div>
            )}
        </div>
    );
}
