"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-36 pb-20 min-h-screen bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Reach Out</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">Get in <span className="text-accent">Touch</span></h1>
                    <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto mb-4" />
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Have a question or want to book a party order? We'd love to hear from you.
                        Reach out to us using the form below or visit our outlet.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-accent p-8 rounded-2xl h-full">
                        <h3 className="text-2xl font-bold text-text-dark mb-8">Contact Information</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-text-dark">Phone Number</h4>
                                    <a href="tel:+917054352288" className="text-text-dark/80 hover:text-primary transition-colors">+91 70543 52288</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-text-dark">Email Address</h4>
                                    <a href="mailto:chetrambhature@gmail.com" className="text-text-dark/80 hover:text-primary transition-colors">chetrambhature@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-text-dark">Operating Hours</h4>
                                    <p className="text-text-dark/80">Monday - Sunday</p>
                                    <p className="text-text-dark/80">7:30 AM - 11:00 PM</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-text-dark">Our Location</h4>
                                    <p className="text-text-dark/80">
                                        Quila Road, Near Power House Chauraha,<br />
                                        Opposite Ashiana Kotwali, Sector K,<br />
                                        Ashiana, Lucknow, UP- 226012
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white border border-primary/20 p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-text-dark mb-6">Send us a Message</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-text-dark">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all bg-background"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-text-dark">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all bg-background"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-text-dark">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all bg-background"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="purpose" className="text-sm font-medium text-text-dark">Purpose</label>
                                <select
                                    id="purpose"
                                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all bg-background"
                                >
                                    <option>General Inquiry</option>
                                    <option>Feedback</option>
                                    <option>Catering / Bulk Order</option>
                                    <option>Franchise Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-text-dark">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all resize-none bg-background"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Locations Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Find Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Our <span className="text-accent">Location</span></h2>
                        <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto mb-4" />
                        <p className="text-text-muted max-w-2xl mx-auto">
                            Visit us at our outlet in Ashiana, Lucknow. Open daily from 7:30 AM to 11:00 PM.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
                        {/* List */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-4 overflow-y-auto max-h-[600px] pr-2">
                            <div
                                className="bg-white p-6 rounded-xl shadow-sm border border-primary/20 hover:border-accent transition-all cursor-pointer group"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-text-dark group-hover:text-primary transition-colors">Chetram Ashiana</h3>
                                    <MapPin size={20} className="text-primary group-hover:text-accent" />
                                </div>
                                <p className="text-sm text-text-muted mb-4">Quila Road, Near Power House Chauraha, Opposite Ashiana Kotwali, Sector K, Ashiana, Lucknow, UP- 226012</p>

                                <div className="flex flex-col gap-2 text-sm text-text-muted">
                                    <div className="flex items-center gap-2">
                                        <Phone size={14} className="text-primary" /> +91 70543 52288
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} className="text-primary" /> 7:30 AM - 11:00 PM
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-primary/10 flex gap-2">
                                    <a
                                        href="tel:+917054352288"
                                        className="flex-1 bg-background hover:bg-accent/30 text-text-dark py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Phone size={14} /> Call
                                    </a>
                                    <a
                                        href="https://maps.app.goo.gl/Lw63W3ANbmRk73rY6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-primary hover:bg-primary-dark text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MapPin size={14} /> Direction
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="w-full lg:w-2/3 bg-accent/20 rounded-2xl overflow-hidden relative min-h-[400px] lg:min-h-[600px] border-2 border-primary/20">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.9127!2d80.9481!3d26.7893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sGoogle%20Maps!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Chetram Ashiana Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
