"use client";

import { useState } from "react";
import DishCard from "@/components/ui/DishCard";
import { Download } from "lucide-react";
import clsx from "clsx";

const categories = [
    "All Items",
    "Chole Bhature",
    "Chur Chur Naan",
    "Kulchas",
    "Sides & Dal",
    "Beverages",
    "Desserts",
];

const menuItems = [
    {
        id: "1",
        name: "Classic Pindi Chole Bhature",
        description: "2 fluffly bhaturas served with spicy pindi chole, pickle and onion salad.",
        price: 160,
        rating: 4.8,
        category: "Chole Bhature",
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=2070&auto=format&fit=crop",
        isVeg: true,
    },
    {
        id: "2",
        name: "Paneer Bhature",
        description: "Bhaturas stuffed with spicy paneer filling, served with chole.",
        price: 190,
        rating: 4.7,
        category: "Chole Bhature",
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=2070&auto=format&fit=crop",
        isVeg: true,
    },
    {
        id: "3",
        name: "Aloo Chur Chur Naan Thali",
        description: "Crispy aloo stuffed naan served with Dal Makhani, Paneer, and Raita.",
        price: 240,
        rating: 4.9,
        category: "Chur Chur Naan",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop",
        isVeg: true,
    },
    {
        id: "4",
        name: "Paneer Chur Chur Naan Thali",
        description: "Rich paneer stuffed naan served with premium sides.",
        price: 260,
        rating: 4.9,
        category: "Chur Chur Naan",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop",
        isVeg: true,
    },
    {
        id: "5",
        name: "Mix Kulcha",
        description: "Kulcha stuffed with mix vegetables and paneer.",
        price: 120,
        rating: 4.5,
        category: "Kulchas",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1921&auto=format&fit=crop",
        isVeg: true,
    },
    {
        id: "6",
        name: "Dal Makhani (Full)",
        description: "Creamy black lentils cooked overnight.",
        price: 280,
        rating: 4.7,
        category: "Sides & Dal",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop",
        isVeg: true,
    },
    {
        id: "7",
        name: "Sweet Lassi",
        description: "Thick creamy yogurt drink topped with malai.",
        price: 80,
        rating: 4.8,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1887&auto=format&fit=crop",
        isVeg: true,
    },
    {
        id: "8",
        name: "Gulab Jamun (2 pcs)",
        description: "Hot khoya gulab jamuns.",
        price: 60,
        rating: 4.6,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1593701478530-829b96c8a143?q=80&w=2070&auto=format&fit=crop",
        isVeg: true,
    },
];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("All Items");

    const filteredItems = activeCategory === "All Items"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="pt-36 pb-20 min-h-screen bg-neutral-cream">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-4">Our Menu</h1>
                        <p className="text-gray-600 max-w-xl">
                            Explore authentic North Indian delicacies prepared with love and tradition.
                            From spicy Chole Bhature to buttery Naans.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold transition-all">
                        <Download size={20} />
                        Download PDF
                    </button>
                </div>

                {/* Categories */}
                <div className="sticky top-24 z-30 bg-neutral-cream/95 backdrop-blur-sm py-4 mb-8 overflow-x-auto no-scrollbar">
                    <div className="flex gap-4 min-w-max px-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={clsx(
                                    "px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap",
                                    activeCategory === cat
                                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                                        : "bg-white text-gray-600 hover:bg-gray-100"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <DishCard key={item.id} {...item} />
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No items found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
