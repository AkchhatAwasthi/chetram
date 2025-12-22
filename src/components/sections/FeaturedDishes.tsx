"use client";

import DishCard from "@/components/ui/DishCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredItems = [
    {
        id: "1",
        name: "Special Chur Chur Naan Thali",
        description: "Our signature crispy crushed naan served with Dal Makhani, Paneer, Raita and Salad.",
        price: 240,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop", // Naan Thali placeholder
        isVeg: true,
    },
    {
        id: "2",
        name: "Pindi Chole Bhature",
        description: "Delhi style spicy chickpeas served with fluffy bhaturas and pickles.",
        price: 160,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=2070&auto=format&fit=crop", // Chole Bhature placeholder
        isVeg: true,
    },
    {
        id: "3",
        name: "Paneer Kulcha Combo",
        description: "Stuffed Paneer Kulcha served with Chole and tangy chutney.",
        price: 180,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1921&auto=format&fit=crop", // Kulcha placeholder
        isVeg: true,
    },
    {
        id: "4",
        name: "Dal Makhani Special",
        description: "Slow cooked black lentils with fresh cream and butter.",
        price: 220,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop", // Dal Makhani placeholder
        isVeg: true,
    },
];

export default function FeaturedDishes() {
    return (
        <section className="py-20 bg-neutral-cream">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Our Specialties</h2>
                        <h3 className="text-4xl font-serif font-bold text-text-dark">Customer Favorites</h3>
                        <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
                    </div>
                    <Link href="/menu" className="flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors group">
                        View Full Menu <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredItems.map((item) => (
                        <DishCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
