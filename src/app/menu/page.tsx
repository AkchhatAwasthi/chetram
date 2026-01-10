"use client";

import { useState } from "react";
import DishCard from "@/components/ui/DishCard";
import { Download } from "lucide-react";
import clsx from "clsx";

const categories = [
    "All Items",
    "Season Special",
    "Breakfast",
    "Chur Chur Naan",
    "Chur Chur Kulche",
    "Breads",
    "Rice",
    "Thali",
    "Sides & Dal",
    "Beverages",
    "Desserts",
];

const menuItems = [
    // ================= BREAKFAST =================
    {
        id: "1",
        name: "Chole Bhature",
        description: "Soft fluffy bhature served with spicy, slow-cooked chole and traditional accompaniments.",
        category: "Breakfast",
        price: 125,
        image: "https://github.com/AkchhatAwasthi/upscalers-images/blob/main/bhature_with_raita_ANM05297-Edit%20(1).jpg?raw=true",
        rating: 4.8,
    },
    {
        id: "2",
        name: "Aalu Paratha with Aalu Sabji & Raita",
        description: "Potato-stuffed paratha cooked on tawa, served with aalu sabji and cooling raita.",
        category: "Breakfast",
        price: 160,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Aloo%20Paratha%20(1).jpg?raw=true",
        rating: 4.7,
    },
    {
        id: "3",
        name: "Paneer Paratha with Aalu Sabji & Raita",
        description: "Paratha stuffed with seasoned paneer, paired with aalu sabji and fresh raita.",
        category: "Breakfast",
        price: 200,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Paneer%20Paratha.jpg?raw=true",
        rating: 4.9,
    },
    {
        id: "4",
        name: "Gobhi Paratha with Aalu Sabji & Raita",
        description: "Traditional gobhi paratha served hot with aalu sabji and raita.",
        category: "Breakfast",
        price: 200,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Gobhi%20Paratha%20(2).jpg?raw=true",
        rating: 4.6,
    },
    {
        id: "5",
        name: "Plain Tawa Paratha with Aalu Sabji & Raita",
        description: "Crispy plain paratha cooked on tawa, served with mildly spiced aalu sabji and raita.",
        category: "Breakfast",
        price: 200,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Plain%20Paratha.jpg?raw=true",
        rating: 4.5,
    },

    // ================= CHUR CHUR KULCHE =================
    {
        id: "6",
        name: "Aalu Chur Chur Kulche",
        description: "Crispy layered kulche stuffed with spiced aloo, served with classic North Indian flavors.",
        category: "Chur Chur Kulche",
        price: 260,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Aloo%20Chur%20Chur%20Kulcha.jpg?raw=true",
        rating: 4.8,
    },
    {
        id: "7",
        name: "Aalu Pyaz Chur Chur Kulche",
        description: "Crunchy kulche filled with aloo and onion stuffing for a bold desi taste.",
        category: "Chur Chur Kulche",
        price: 260,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Aloo%20Pyaz%20Chur%20Chur%20Kulcha%20(1%20pc).jpg?raw=true",
        rating: 4.9,
    },
    {
        id: "8",
        name: "Paneer Chur Chur Kulche",
        description: "Flaky chur chur kulche generously stuffed with seasoned paneer.",
        category: "Chur Chur Kulche",
        price: 260,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Paneer%20Chur%20Chur%20Kulcha.jpg?raw=true",
        rating: 5.0,
    },
    {
        id: "9",
        name: "Paneer Pyaz Chur Chur Kulche",
        description: "Paneer and onion stuffed kulche with a crispy layered texture.",
        category: "Chur Chur Kulche",
        price: 260,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Paneer%20Pyaz%20Chur%20Chur%20Kulcha%20(1%20pc).jpg?raw=true",
        rating: 4.9,
    },
    {
        id: "10",
        name: "Gobhi Chur Chur Kulche",
        description: "Crispy kulche stuffed with spiced gobhi filling.",
        category: "Chur Chur Kulche",
        price: 260,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Gobhi%20Chur%20Chur%20Kulcha.jpg?raw=true",
        rating: 4.7,
    },
    {
        id: "11",
        name: "Gobhi Pyaz Chur Chur Kulche",
        description: "Gobhi and onion filled chur chur kulche with authentic Punjabi flavors.",
        category: "Chur Chur Kulche",
        price: 260,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Gobhi%20Pyaz%20Chur%20Chur%20Kulcha%20(1%20Pc).jpg?raw=true",
        rating: 4.8,
    },

    // ================= CHUR CHUR NAAN =================
    {
        id: "12",
        name: "Aalu Chur Chur Naan",
        description: "Crispy layered naan stuffed with spiced aloo, rich and filling.",
        category: "Chur Chur Naan",
        price: 280,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Aloo%20Chur%20Chur%20Naan%20(1).jpg?raw=true",
        rating: 4.9,
    },
    {
        id: "13",
        name: "Aalu Pyaz Chur Chur Naan",
        description: "Crunchy chur chur naan with aloo and onion stuffing.",
        category: "Chur Chur Naan",
        price: 280,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Aloo%20Pyaz%20Chur%20Chur%20Naan.jpg?raw=true",
        rating: 4.8,
    },
    {
        id: "14",
        name: "Paneer Chur Chur Naan",
        description: "Paneer-filled chur chur naan with a crispy texture and rich taste.",
        category: "Chur Chur Naan",
        price: 280,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Paneer%20Chur%20Chur%20Naan.jpg?raw=true",
        rating: 5.0,
    },
    {
        id: "15",
        name: "Paneer Pyaz Chur Chur Naan",
        description: "Layered naan stuffed with paneer and onions, full of flavor.",
        category: "Chur Chur Naan",
        price: 280,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Paneer%20Pyaz%20Chur%20Chur%20Naan.jpg?raw=true",
        rating: 4.9,
    },
    {
        id: "16",
        name: "Mix Chur Chur Naan",
        description: "Chur chur naan stuffed with a mix of vegetables and paneer.",
        category: "Chur Chur Naan",
        price: 280,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Mix%20Chur%20Chur%20Naan.jpg?raw=true",
        rating: 4.9,
    },
    {
        id: "17",
        name: "Gobhi Chur Chur Naan",
        description: "Crispy naan filled with spiced gobhi stuffing.",
        category: "Chur Chur Naan",
        price: 280,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Gobhi%20Chur%20Chur%20Naan.jpg?raw=true",
        rating: 4.7,
    },

    // ================= BREADS =================
    {
        id: "18",
        name: "Tawa Roti",
        description: "Soft whole wheat roti cooked fresh on tawa.",
        category: "Breads",
        price: 15,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Tawa%20Roti.jpg?raw=true",
        rating: 4.5,
    },
    {
        id: "19",
        name: "Tawa Butter Roti",
        description: "Tawa roti topped with melted butter for extra richness.",
        category: "Breads",
        price: 20,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Tawa%20Roti.jpg?raw=true",
        rating: 4.6,
    },
    {
        id: "20",
        name: "Tandoori Roti",
        description: "Classic tandoor-baked roti with a smoky flavor.",
        category: "Breads",
        price: 20,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Tandoori%20Roti%20(1%20pc).jpg?raw=true",
        rating: 4.7,
    },
    {
        id: "21",
        name: "Tandoori Butter Roti",
        description: "Tandoori roti brushed with butter for enhanced taste.",
        category: "Breads",
        price: 30,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Tandoori%20Roti%20(1%20pc).jpg?raw=true",
        rating: 4.8,
    },
    {
        id: "22",
        name: "Chur Chur Naan (Aalu / Paneer / Mix / Gobhi)",
        description: "Crispy layered naan available with multiple stuffing options.",
        category: "Breads",
        price: 80,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Mix%20Chur%20Chur%20Naan.jpg?raw=true",
        rating: 4.9,
    },
    {
        id: "23",
        name: "Kulche (Aalu / Paneer / Mix / Gobhi)",
        description: "Soft kulche with your choice of traditional stuffing.",
        category: "Breads",
        price: 80,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Mix%20Chur%20Chur%20Kulcha.jpg?raw=true",
        rating: 4.8,
    },
    {
        id: "24",
        name: "Plain Tawa Paratha",
        description: "Simple, flaky paratha cooked golden on tawa.",
        category: "Breads",
        price: 50,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Plain%20Paratha.jpg?raw=true",
        rating: 4.6,
    },
    {
        id: "25",
        name: "Missi Roti",
        description: "Gram flour roti seasoned with spices and herbs.",
        category: "Breads",
        price: 60,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Missi%20Roti%20(1%20pc).jpg?raw=true",
        rating: 4.7,
    },
    {
        id: "26",
        name: "Laccha Paratha",
        description: "Multi-layered flaky paratha cooked crisp.",
        category: "Breads",
        price: 60,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Laccha%20Paratha%20(1%20Pc).jpg?raw=true",
        rating: 4.8,
    },

    // ================= RICE =================


    // ================= THALI =================
    {
        id: "29",
        name: "Veg Thali",
        description: "Balanced thali with sabji, dal, roti, rice, raita, and salad.",
        category: "Thali",
        price: 260,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Veg%20Thali.jpg?raw=true",
        rating: 4.9,
    },
    {
        id: "30",
        name: "Chetram Special Delux Thali",
        description: "Premium thali featuring paneer, dal makhani, breads, rice, and dessert.",
        category: "Thali",
        price: 320,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Veg%20Special%20Thali.jpg?raw=true",
        rating: 5.0,
    },

    // ================= SIDES & DAL (Formerly Party Packing) =================
    {
        id: "31",
        name: "Chola",
        description: "Slow-cooked chickpea curry with rich spices.",
        category: "Sides & Dal",
        price: 180,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Chole_ANM05417%20(1).jpg?raw=true",
        rating: 4.8,
    },
    {
        id: "32",
        name: "Shahi Paneer / Palak Paneer",
        description: "Creamy shahi paneer or healthy palak paneer for special occasions.",
        category: "Sides & Dal",
        price: 310,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Shahi%20Paneer%20(1).jpg?raw=true",
        rating: 4.9,
    },
    {
        id: "33",
        name: "Dal Makhani",
        description: "Creamy black lentils cooked overnight with butter.",
        category: "Sides & Dal",
        price: 290,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Dal%20Makhani%20(1).jpg?raw=true",
        rating: 5.0,
    },
    {
        id: "34",
        name: "Rajma / Kadhi",
        description: "Classic rajma curry or comforting Punjabi kadhi.",
        category: "Sides & Dal",
        price: 220,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Kadhi.jpg?raw=true",
        rating: 4.8,
    },
    {
        id: "35",
        name: "Arhar Dal",
        description: "Simple and nutritious arhar dal tempered with spices.",
        category: "Sides & Dal",
        price: 230,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Arhar%20Daal%20(1).jpg?raw=true",
        rating: 4.7,
    },
    {
        id: "36",
        name: "Baigan Bharta",
        description: "Roasted baigan mashed with spices and cooked traditionally.",
        category: "Sides & Dal",
        price: 220,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Baigan%20Bharta.jpg?raw=true",
        rating: 4.6,
    },
    {
        id: "37",
        name: "Aalu Jeera",
        description: "Lightly spiced potatoes tossed with cumin seeds.",
        category: "Sides & Dal",
        price: 180,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Jeera%20Aloo%20(6)%20(1).jpg?raw=true",
        rating: 4.5,
    },
    {
        id: "38",
        name: "Aalu Tamatar Sabji",
        description: "Homestyle potato curry cooked in tangy tomato gravy.",
        category: "Sides & Dal",
        price: 180,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Aloo%20Sabji.jpg?raw=true",
        rating: 4.6,
    },
    {
        id: "39",
        name: "Raita (150gm)",
        description: "Fresh curd seasoned with spices for a cooling side.",
        category: "Sides & Dal",
        price: 40,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Raita%20(1)%20(1).jpg?raw=true",
        rating: 4.7,
    },

    // ================= BEVERAGES & DESSERTS =================
    {
        id: "40",
        name: "Mast Mattha",
        description: "Refreshing spiced buttermilk served chilled.",
        category: "Beverages",
        price: 30,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/chach_ANM05515.jpg?raw=true",
        rating: 4.9,
    },
    {
        id: "41",
        name: "Chulbuli Lassi",
        description: "Thick, creamy sweet lassi with a smooth finish.",
        category: "Beverages",
        price: 70,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/lassi_ANM05513%20(1).jpg?raw=true",
        rating: 5.0,
    },
    {
        id: "42",
        name: "Gulab Jamun",
        description: "Soft milk-solid dumplings soaked in sugar syrup.",
        category: "Desserts",
        price: 30,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/ANM05527.jpg?raw=true",
        rating: 5.0,
    },
    {
        id: "43",
        name: "Chabila Raita",
        description: "Flavorful curd preparation with spices and herbs.",
        category: "Sides & Dal",
        price: 40,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/Raita.jpg?raw=true",
        rating: 4.7,
    },
    {
        id: "44",
        name: "Sarso Ka Saag Makke Di Roti",
        description: "A flavorful green Sabji made with fresh herbs and spices with Makke Di Roti.",
        category: "Season Special",
        price: 280,
        image: "https://github.com/AkchhatAwasthi/chetramimages/blob/main/ANM05257%20(1)%20(1).jpg?raw=true",
        rating: 4.7,
    },
];


export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("All Items");

    const filteredItems = activeCategory === "All Items"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="pt-36 pb-20 min-h-screen bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Explore</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">Our <span className="text-primary">Menu</span></h1>
                        <div className="h-1 w-20 bg-accent mb-4 rounded-full" />
                        <p className="text-text-muted max-w-xl">
                            Explore authentic North Indian delicacies prepared with love and tradition.
                            From spicy Chole Bhature to buttery Naans.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-lg">
                        <Download size={20} />
                        Download PDF
                    </button>
                </div>

                {/* Categories */}
                <div className="sticky top-24 z-30 bg-background/95 backdrop-blur-sm py-4 mb-8 overflow-x-auto no-scrollbar">
                    <div className="flex gap-4 min-w-max px-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={clsx(
                                    "px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap",
                                    activeCategory === cat
                                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                                        : "bg-white text-text-dark border border-accent/30 hover:border-primary/50"
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
                    <div className="text-center py-20 text-text-muted">
                        No items found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}

