"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-accent text-text-dark pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-24 h-24">
                                <Image
                                    src="/logo.png"
                                    alt="Chetram Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-text-dark">
                                Chetram
                            </span>
                        </Link>
                        <p className="text-text-dark/80 text-sm leading-relaxed max-w-xs">
                            Lucknow's famous destination for authentic North Indian street food.
                            Celebrating tradition with every bite of our signature Chur Chur Naan and Pindi Chole.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-text-dark/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-text-dark/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-text-dark/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-primary mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Our Menu", href: "/menu" },
                                { name: "About Us", href: "/about" },
                                { name: "Gallery", href: "/gallery" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-text-dark/80 hover:text-primary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="text-lg font-bold text-primary mb-6">Our Outlet</h3>
                        <div className="space-y-3">
                            <a
                                href="https://maps.app.goo.gl/Lw63W3ANbmRk73rY6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-dark/80 hover:text-primary transition-colors text-sm flex items-center gap-2"
                            >
                                <MapPin size={14} className="text-primary" />
                                Ashiana, Lucknow
                            </a>
                            <p className="text-text-dark/60 text-sm pl-6">
                                Quila Road, Near Power House Chauraha,<br />
                                Opposite Ashiana Kotwali, Sector K,<br />
                                Ashiana, Lucknow, UP- 226012
                            </p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold text-primary mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone size={20} className="text-primary mt-1" />
                                <div>
                                    <p className="text-sm font-bold text-text-dark">Call Us</p>
                                    <a href="tel:+917054352288" className="text-sm text-text-dark/80 hover:text-primary transition-colors">+91 70543 52288</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={20} className="text-primary mt-1" />
                                <div>
                                    <p className="text-sm font-bold text-text-dark">Email Us</p>
                                    <a href="mailto:chetrambhature@gmail.com" className="text-sm text-text-dark/80 hover:text-primary transition-colors">chetrambhature@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-text-dark/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-text-dark/60">
                        © 2025 Chetram. All rights reserved.
                    </p>
                    <p className="text-xs text-text-dark/60 flex items-center gap-1">
                        Made with ❤️ in Lucknow
                    </p>
                </div>
            </div>
        </footer>
    );
}
