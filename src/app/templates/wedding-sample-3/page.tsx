"use client";

import React, { useEffect, useState } from 'react';
import './styles.css';

export default function RegalTemplate() {
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

        document.querySelectorAll('.regal-observe').forEach(el => observer.observe(el));
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
        <main className="regal-template min-h-screen regal-texture">
            {/* Hero Section */}
            <header className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center p-4 sm:p-6 border-b-2 border-[#BF953F]/30 pt-16 md:pt-6">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2b0c0c]/0 via-[#2b0c0c]/80 to-[#2b0c0c] pointer-events-none"></div>
                
                <div className="relative z-10 w-full max-w-4xl p-6 sm:p-12 md:p-24 border border-[#BF953F]/20 bg-[#1A0505]/60 backdrop-blur-md shadow-2xl">
                    <div className="regal-observe">
                        <h3 className="font-regal text-[#BF953F] tracking-[0.3em] sm:tracking-[0.5em] text-xs sm:text-base uppercase mb-8 sm:mb-12">The Wedding Of</h3>
                        
                        <h1 className="font-regal gold-text text-4xl sm:text-6xl md:text-8xl leading-tight mb-4 sm:mb-6">
                            Charlotte<br/>
                            <span className="text-2xl sm:text-4xl md:text-5xl my-2 sm:my-4 block">&amp;</span>
                            Arthur
                        </h1>
                        
                        <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#BF953F] mx-auto my-6 sm:my-12 opacity-50"></div>
                        
                        <p className="font-regal tracking-widest text-[#FDFBF7]/80 text-sm sm:text-lg md:text-xl uppercase">
                            September 14, 2024
                        </p>
                    </div>
                </div>
            </header>

            {/* Content Section */}
            <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    
                    {/* The Venue */}
                    <div className="text-center mb-16 sm:mb-24 md:mb-32 regal-observe">
                        <h2 className="font-regal gold-text text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">The Celebration</h2>
                        <p className="text-lg sm:text-xl italic text-[#FDFBF7]/70 mb-4 sm:mb-8">The Rosewood Manor</p>
                        <p className="font-regal tracking-widest uppercase text-xs sm:text-sm text-[#BF953F] mb-2">1200 Oak Avenue, Charleston, SC</p>
                        <p className="font-regal tracking-widest uppercase text-[10px] sm:text-xs text-[#FDFBF7]/50">Four O'Clock in the Afternoon</p>
                    </div>

                    {/* Ornate Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                        <div className="relative regal-observe gold-border p-2 bg-[#1A0505]">
                            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80" 
                                 alt="Rings" className="w-full aspect-[4/5] object-cover filter contrast-125 sepia-[0.3]" />
                        </div>
                        <div className="space-y-6 sm:space-y-8">
                            <div className="regal-observe text-center md:text-left">
                                <h3 className="font-regal gold-text text-2xl sm:text-3xl mb-3 sm:mb-4">A Royal Affair</h3>
                                <p className="leading-relaxed text-[#FDFBF7]/80 mb-6 sm:mb-8 text-sm sm:text-base">
                                    Join us for an evening of elegance, fine dining, and dancing under the stars as we begin our new chapter together.
                                </p>
                            </div>
                            <div className="relative regal-observe gold-border p-2 bg-[#1A0505]">
                                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80" 
                                     alt="Cake" className="w-full aspect-video object-cover filter contrast-125 sepia-[0.3]" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* RSVP */}
            <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t-2 border-[#BF953F]/30 bg-[#1A0505]">
                <div className="max-w-xl mx-auto text-center regal-observe">
                    <h2 className="font-regal gold-text text-3xl sm:text-5xl mb-3 sm:mb-4">R.S.V.P</h2>
                    <p className="font-regal tracking-widest text-[#BF953F] text-xs sm:text-sm uppercase mb-10 sm:mb-16">Kindly Reply by August 1st</p>
                    
                    {!isSuccess ? (
                        <form onSubmit={handleRsvpSubmit} className="space-y-6 sm:space-y-8">
                            <div>
                                <input type="text" placeholder="Name(s) of Guest(s)" required 
                                       className="w-full velvet-input px-4 sm:px-6 py-3.5 sm:py-4 outline-none font-regal text-base sm:text-lg placeholder:text-[#FDFBF7]/30 text-center" />
                            </div>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                <label className="cursor-pointer">
                                    <input type="radio" name="attending" className="peer sr-only" required />
                                    <div className="velvet-input p-3 sm:p-4 peer-checked:border-[#BF953F] peer-checked:bg-[rgba(191,149,63,0.1)] transition-all">
                                        <span className="font-regal uppercase tracking-wider text-xs sm:text-sm">Accepts</span>
                                    </div>
                                </label>
                                <label className="cursor-pointer">
                                    <input type="radio" name="attending" className="peer sr-only" required />
                                    <div className="velvet-input p-3 sm:p-4 peer-checked:border-[#BF953F] peer-checked:bg-[rgba(191,149,63,0.1)] transition-all">
                                        <span className="font-regal uppercase tracking-wider text-xs sm:text-sm">Declines</span>
                                    </div>
                                </label>
                            </div>
                            <div className="pt-4 sm:pt-8">
                                <button type="submit" disabled={isSubmitting} 
                                        className="gold-btn px-8 sm:px-16 py-3.5 sm:py-5 font-regal tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm font-bold w-full disabled:opacity-50">
                                    {isSubmitting ? 'Sending...' : 'Confirm Presence'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="velvet-input p-8 sm:p-16">
                            <h3 className="font-regal gold-text text-2xl sm:text-4xl mb-3 sm:mb-4">Gratitude</h3>
                            <p className="text-[#FDFBF7]/80 italic text-base sm:text-xl">Your response has been received.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
