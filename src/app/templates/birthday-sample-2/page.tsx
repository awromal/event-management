"use client";

import React, { useEffect, useState } from 'react';
import './styles.css';

export default function ElegantTemplate() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.elegant-observe').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleRsvpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1200);
    };

    return (
        <main className="elegant-template min-h-screen">
            {/* Hero Section */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1500&q=80" 
                         alt="Party" className="w-full h-full object-cover filter grayscale opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]"></div>
                </div>

                <div className="relative z-10 text-center elegant-observe">
                    <p className="tracking-[0.5em] uppercase text-xs mb-6 text-gray-400">Join us in celebrating</p>
                    <h1 className="font-elegant text-6xl md:text-9xl font-light uppercase tracking-widest glow-text mb-4">
                        Sarah's<br/>Thirty
                    </h1>
                    <div className="w-[1px] h-24 bg-[#D4AF37] mx-auto my-8 opacity-50"></div>
                    <p className="font-elegant tracking-[0.3em] uppercase text-sm">An Elegant Evening</p>
                </div>
            </header>

            {/* Details Glass Panel */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-4xl mx-auto glass-panel p-12 md:p-20 glow-border elegant-observe">
                    <div className="grid md:grid-cols-2 gap-16 text-center md:text-left">
                        <div>
                            <h3 className="font-elegant text-2xl text-[#D4AF37] uppercase tracking-widest mb-6">The Details</h3>
                            <p className="text-xl font-light mb-2">Friday, November 15</p>
                            <p className="text-gray-400 mb-8">8:00 PM until late</p>
                            
                            <h3 className="font-elegant text-2xl text-[#D4AF37] uppercase tracking-widest mb-6">Dress Code</h3>
                            <p className="text-xl font-light">Black Tie Optional</p>
                        </div>
                        <div className="md:border-l border-white/10 md:pl-16">
                            <h3 className="font-elegant text-2xl text-[#D4AF37] uppercase tracking-widest mb-6">Location</h3>
                            <p className="text-xl font-light mb-2">The Skyline Lounge</p>
                            <p className="text-gray-400 mb-8">45th Floor, Metropolis Tower<br/>Downtown</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Edge-to-edge Gallery */}
            <section className="py-16">
                <div className="text-center mb-16 elegant-observe">
                    <h2 className="font-elegant text-4xl uppercase tracking-widest text-gray-500">The Vibe</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 elegant-observe">
                    <img src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=800&q=80" 
                         alt="Drinks" className="w-full h-[60vh] object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                    <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80" 
                         alt="Music" className="w-full h-[60vh] object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                    <img src="https://images.unsplash.com/photo-1510936111840-65e1511adee3?auto=format&fit=crop&w=800&q=80" 
                         alt="Dining" className="w-full h-[60vh] object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
            </section>

            {/* Sleek RSVP */}
            <section className="py-32 px-6">
                <div className="max-w-xl mx-auto text-center elegant-observe">
                    <h2 className="font-elegant text-5xl uppercase tracking-widest glow-text mb-4">RSVP</h2>
                    <p className="text-gray-400 tracking-widest uppercase text-xs mb-16">By November 1st</p>
                    
                    {!isSuccess ? (
                        <form onSubmit={handleRsvpSubmit} className="space-y-10 text-left">
                            <div>
                                <input type="text" required placeholder="Full Name" className="sleek-input w-full text-xl" />
                            </div>
                            <div>
                                <input type="email" required placeholder="Email Address" className="sleek-input w-full text-xl" />
                            </div>
                            <div className="flex gap-8">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="radio" name="attending" className="accent-[#D4AF37] w-4 h-4" required />
                                    <span className="font-light tracking-wider group-hover:text-[#D4AF37] transition-colors">Attending</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="radio" name="attending" className="accent-[#D4AF37] w-4 h-4" required />
                                    <span className="font-light tracking-wider group-hover:text-[#D4AF37] transition-colors">Declining</span>
                                </label>
                            </div>
                            <div className="pt-8 text-center">
                                <button type="submit" disabled={isSubmitting} className="sleek-btn px-16 py-4 w-full md:w-auto">
                                    {isSubmitting ? 'Processing...' : 'Confirm'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="glass-panel p-16">
                            <h3 className="font-elegant text-3xl text-[#D4AF37] uppercase tracking-widest mb-4">Thank You</h3>
                            <p className="font-light">Your response has been recorded.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
