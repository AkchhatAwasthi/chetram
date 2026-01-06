"use client";

import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
    "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Aloo%20Chur%20Chur%20Naan%20(1).jpg?raw=true",
    "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Aloo%20Pyaz%20Chur%20Chur%20Naan.jpg?raw=true",
    "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Chole%20Bhature%20(delhi%20pindi%20style)%202%20Pieces%20(1).jpg?raw=true",
    "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Gobhi%20Chur%20Chur%20Kulcha%20(1%20pc)%20jpg.jpg?raw=true",
    "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Chur%20Chur%20Naan%20with%20Dal%20Makhani%20+%20Shahi%20Paneer%20+%20Raita2_.jpg?raw=true",
    "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Gobhi%20Pyaz%20Chur%20Chur%20Kulcha.jpg?raw=true",
    "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Makke%20ki%20Roti.jpg?raw=true",
    "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Mix%20Chur%20Chur%20Kulcha.jpg?raw=true",
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
