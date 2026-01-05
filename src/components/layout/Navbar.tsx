"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-10 w-full z-40 bg-background/95 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden border-b border-accent/20",
                scrolled ? "h-14" : "h-16"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 h-full flex justify-between items-center">

                {/* LOGO */}
                <Link href="/" className="flex items-center">
                    <div className="flex items-center h-10 transition-transform hover:scale-105">
                        <Image
                            src="/logo3.png"
                            alt="Chetram Logo"
                            height={40}
                            width={168}
                            className="h-full w-auto object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary",
                                pathname === link.href ? "text-primary" : "text-text-dark"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* DESKTOP CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="tel:+919876543210"
                        className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full font-semibold transition-colors"
                    >
                        <Phone size={16} />
                        <span className="text-sm">Call Now</span>
                    </a>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden p-2 text-text-dark"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-t border-accent/20"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        "text-lg font-semibold py-2 border-b border-accent/10",
                                        pathname === link.href ? "text-primary" : "text-text-dark"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="flex flex-col gap-4 mt-4">
                                <a
                                    href="tel:+919876543210"
                                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
                                >
                                    <Phone size={20} />
                                    Call: 987 654 3210
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
