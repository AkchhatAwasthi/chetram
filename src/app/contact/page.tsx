"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-36 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-4">Get in Touch</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have a question or want to book a party order? We'd love to hear from you.
                        Reach out to us using the form below or visit one of our outlets.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-neutral-cream p-8 rounded-2xl h-full">
                        <h3 className="text-2xl font-bold text-text-dark mb-8">Contact Information</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-text-dark">Phone Number</h4>
                                    <p className="text-gray-600">+91 987 654 3210 (Main)</p>
                                    <p className="text-gray-600">+91 987 654 3211 (Catering)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-text-dark">Email Address</h4>
                                    <p className="text-gray-600">hello@chetram.com</p>
                                    <p className="text-gray-600">catering@chetram.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-text-dark">Operating Hours</h4>
                                    <p className="text-gray-600">Monday - Sunday</p>
                                    <p className="text-gray-600">9:00 AM - 10:00 PM</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-text-dark">Head Office</h4>
                                    <p className="text-gray-600">
                                        Power House Chauraha,<br />
                                        Sector H, Aashiana,<br />
                                        Lucknow, Uttar Pradesh 226012
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white border border-neutral-100 p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-text-dark mb-6">Send us a Message</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="purpose" className="text-sm font-medium text-gray-700">Purpose</label>
                                <select
                                    id="purpose"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                                >
                                    <option>General Inquiry</option>
                                    <option>Feedback</option>
                                    <option>Catering / Bulk Order</option>
                                    <option>Franchise Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Locations Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-4">Our Locations</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Find us at 5 convenient locations across Lucknow. Open daily from 9:00 AM to 10:00 PM.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
                        {/* List */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-4 overflow-y-auto max-h-[600px] pr-2">
                            {[
                                {
                                    name: "Chetram Aashiana",
                                    address: "near Power House Chauraha, Bank of Baroda, Sector H, Aashiana, Lucknow",
                                    phone: "+91 987 654 3210",
                                },
                                {
                                    name: "Chetram Naka Hindola",
                                    address: "Opposite Gurudwara, Naka Hindola, Lucknow",
                                    phone: "+91 987 654 3211",
                                },
                                {
                                    name: "Chetram Lalbagh",
                                    address: "Near Novelty Cinema, Lalbagh, Lucknow",
                                    phone: "+91 987 654 3212",
                                },
                                {
                                    name: "Chetram Vijay Nagar",
                                    address: "Main Market, Vijay Nagar, Krishna Nagar, Lucknow",
                                    phone: "+91 987 654 3213",
                                },
                                {
                                    name: "Chetram Hazratganj",
                                    address: "Near Sahu Cinema, Hazratganj, Lucknow",
                                    phone: "+91 987 654 3214",
                                },
                            ].map((loc, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:border-primary/50 transition-all cursor-pointer group"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg text-text-dark group-hover:text-primary transition-colors">{loc.name}</h3>
                                        <MapPin size={20} className="text-gray-400 group-hover:text-primary" />
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">{loc.address}</p>

                                    <div className="flex flex-col gap-2 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Phone size={14} /> {loc.phone}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} /> 9:00 AM - 10:00 PM
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-neutral-100 flex gap-2">
                                        <a
                                            href={`tel:${loc.phone}`}
                                            className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-text-dark py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Phone size={14} /> Call
                                        </a>
                                        <button className="flex-1 bg-primary hover:bg-primary-dark text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                            <MapPin size={14} /> Direction
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full lg:w-2/3 bg-gray-200 rounded-2xl overflow-hidden relative min-h-[400px] lg:min-h-[600px]">
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                                <div className="text-center text-gray-500">
                                    <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                                    <p className="font-bold">Google Maps Integration</p>
                                    <p className="text-sm">API Key Required for Display</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
