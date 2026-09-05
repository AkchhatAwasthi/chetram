"use client";

import { useState } from "react";
import { Star, Plus } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface PriceVariant {
    label: string;
    price: number;
}

interface DishProps {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    isVeg?: boolean;
    onAdd?: () => void;
    link?: { href: string; text: string };
    variants?: PriceVariant[];
    portion?: string;
}

export default function DishCard({
    name,
    description,
    price,
    rating,
    image,
    isVeg = true,
    onAdd,
    link,
    variants,
    portion,
}: DishProps) {
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const activeVariant = variants && variants.length > 0 ? variants[selectedVariantIndex] : null;
    const currentPrice = activeVariant ? activeVariant.price : price;

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-accent/20 hover:border-primary/30 group h-full flex flex-col"
        >
            <div className="relative h-48 w-full overflow-hidden">
                {/* Type Badge */}
                <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
                    <div className={`w-4 h-4 border-2 flex items-center justify-center ${isVeg ? 'border-green-600' : 'border-red-600'}`}>
                        <div className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                    </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 z-10 bg-accent text-text-dark px-2 py-1 rounded-md shadow-sm flex items-center gap-1">
                    <span className="text-xs font-bold">{rating}</span>
                    <Star size={12} className="fill-text-dark" />
                </div>

                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-xl text-text-dark mb-1">{name}</h3>
                <p className="text-sm text-text-muted line-clamp-2 mb-2 flex-1">{description}</p>
                {link && (
                    <div className="mb-3">
                        <Link href={link.href} className="text-sm font-semibold text-primary hover:underline">
                            {link.text}
                        </Link>
                    </div>
                )}

                {/* Per Pcs / Variant Selector */}
                {variants && variants.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 mb-3 pt-1">
                        {variants.map((v, i) => {
                            const isSelected = selectedVariantIndex === i;
                            return (
                                <button
                                    key={v.label}
                                    type="button"
                                    onClick={() => setSelectedVariantIndex(i)}
                                    className={`text-xs font-semibold px-2.5 py-1 rounded-full border transition-all duration-200 ${
                                        isSelected
                                            ? "bg-primary text-white border-primary shadow-sm"
                                            : "bg-background text-text-muted border-accent/40 hover:border-primary/40 hover:text-text-dark"
                                    }`}
                                >
                                    {v.label} · ₹{v.price}
                                </button>
                            );
                        })}
                    </div>
                )}

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-accent/15">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-extrabold text-primary">₹{currentPrice}</span>
                        {activeVariant ? (
                            <span className="text-xs font-medium text-text-muted">/ {activeVariant.label}</span>
                        ) : portion ? (
                            <span className="text-xs font-medium text-text-muted">/ {portion}</span>
                        ) : null}
                    </div>
                    <button
                        onClick={onAdd}
                        className="w-10 h-10 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center transition-colors shadow-sm"
                        aria-label="Add to cart"
                    >
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
