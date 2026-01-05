"use client";

import { Star, Plus } from "lucide-react";
import { motion } from "framer-motion";

interface DishProps {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    isVeg?: boolean;
    onAdd?: () => void;
}

export default function DishCard({
    name,
    description,
    price,
    rating,
    image,
    isVeg = true,
    onAdd,
}: DishProps) {
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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-xl text-text-dark mb-1">{name}</h3>
                <p className="text-sm text-text-muted line-clamp-2 mb-4 flex-1">{description}</p>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-primary">₹{price}</span>
                    <button
                        onClick={onAdd}
                        className="w-10 h-10 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center transition-colors"
                        aria-label="Add to cart"
                    >
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
