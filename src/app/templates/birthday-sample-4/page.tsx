"use client";

import React, { useEffect, useState } from 'react';
import './styles.css';

export default function ClassyTemplate() {
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

        document.querySelectorAll('.classy-observe').forEach(el => observer.observe(el));
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
        <main className="classy-template min-h-screen p-4 md:p-8 bg-[#F9F9F9]">
            <div className="gold-border silk-texture min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] p-8 md:p-16 flex flex-col relative bg-white shadow-2xl max-w-4xl mx-auto">
                
                {/* Hero Section */}
                <header className="flex-1 flex flex-col items-center justify-center text-center mt-12 md:mt-24 z-10 relative">
                    <div className="classy-observe">
                        {/* Monogram/Crest */}
                        <div className="w-20 h-20 mx-auto border border-[#D4AF37] rounded-full flex items-center justify-center mb-10">
                            <span className="font-classy text-4xl gold-text">I</span>
                        </div>

                        <p className="uppercase tracking-[0.2em] text-xs font-medium text-[#1A1A1A] mb-8">
                            You are cordially invited to celebrate
                        </p>
                        
                        <h1 className="font-classy text-5xl md:text-7xl gold-text leading-tight mb-8">
                            Isabella Wright
                        </h1>

                        <p className="uppercase tracking-[0.2em] text-xs font-medium text-[#1A1A1A] mb-8 leading-loose">
                            The honor of your presence is requested<br/>
                            at the celebration of her
                        </p>

                        <div className="ornament mb-8">
                            <div className="ornament-diamond"></div>
                        </div>

                        <h2 className="font-classy text-4xl md:text-5xl text-[#1A1A1A] mb-12">
                            40th Birthday Gala
                        </h2>
                    </div>
                </header>

                {/* Event Details */}
                <section className="py-12 z-10 relative text-center">
                    <div className="classy-observe">
                        <p className="font-medium text-sm tracking-[0.15em] mb-2 uppercase">Saturday, the Fifth of October</p>
                        <p className="font-medium text-sm tracking-[0.15em] mb-2 uppercase">Two Thousand Twenty-Four</p>
                        <p className="font-medium text-sm tracking-[0.15em] mb-8 uppercase">Six O'Clock in the Evening</p>
                        
                        <p className="text-xs tracking-[0.3em] gold-text mb-4">AT</p>
                        
                        <p className="font-medium text-sm tracking-[0.15em] mb-2 uppercase">The Belvedere Club</p>
                        <p className="font-medium text-xs tracking-[0.1em] text-gray-500 mb-8 uppercase">One East Bank Street, Chicago, Illinois</p>
                        
                        <div className="ornament mb-8">
                            <div className="ornament-diamond"></div>
                        </div>

                        <p className="font-medium text-sm tracking-[0.15em] uppercase mb-2">Dinner & Dancing to Follow</p>
                        <p className="font-medium text-xs tracking-[0.1em] text-gray-500 uppercase">Black Tie Required</p>
                    </div>
                </section>

                {/* Minimalist Gallery */}
                <section className="py-24 z-10 relative">
                    <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto classy-observe">
                        <div className="relative aspect-[3/4] overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80" alt="Champagne" className="w-full h-full object-cover filter sepia-[0.3] contrast-125 transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-[#D4AF37]/10"></div>
                        </div>
                        <div className="relative aspect-[3/4] overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=600&q=80" alt="Gala" className="w-full h-full object-cover filter sepia-[0.3] contrast-125 transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-[#D4AF37]/10"></div>
                        </div>
                    </div>
                </section>

                {/* RSVP Form */}
                <section className="py-16 z-10 relative">
                    <div className="max-w-md mx-auto text-center classy-observe">
                        <h2 className="font-classy text-3xl gold-text mb-4">R.S.V.P.</h2>
                        <p className="text-xs uppercase tracking-[0.15em] mb-12">Please respond by September 10th</p>
                        
                        {!isSuccess ? (
                            <form onSubmit={handleRsvpSubmit} className="space-y-8">
                                <div>
                                    <input type="text" required placeholder="M." className="classy-input w-full" />
                                </div>
                                <div className="space-y-4 py-6">
                                    <label className="flex items-center justify-center gap-4 cursor-pointer group">
                                        <div className="relative flex items-center justify-center">
                                            <input type="radio" name="attending" className="peer appearance-none w-4 h-4 border border-[#1A1A1A] rounded-none checked:bg-[#D4AF37] checked:border-[#D4AF37] transition-colors" required />
                                            <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <span className="uppercase tracking-[0.15em] text-xs font-medium group-hover:text-[#D4AF37] transition-colors">Accepts with Pleasure</span>
                                    </label>
                                    <label className="flex items-center justify-center gap-4 cursor-pointer group">
                                        <div className="relative flex items-center justify-center">
                                            <input type="radio" name="attending" className="peer appearance-none w-4 h-4 border border-[#1A1A1A] rounded-none checked:bg-[#D4AF37] checked:border-[#D4AF37] transition-colors" required />
                                            <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <span className="uppercase tracking-[0.15em] text-xs font-medium group-hover:text-[#D4AF37] transition-colors">Declines with Regret</span>
                                    </label>
                                </div>
                                <div className="pt-8">
                                    <button type="submit" disabled={isSubmitting} className="classy-btn w-full md:w-auto">
                                        {isSubmitting ? 'Sending' : 'Submit Response'}
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="py-12 border-t border-b border-[#D4AF37]/30">
                                <h3 className="font-classy text-3xl gold-text mb-4">Thank You</h3>
                                <p className="text-xs uppercase tracking-[0.15em]">Your response has been received</p>
                            </div>
                        )}
                    </div>
                </section>
                
            </div>
        </main>
    );
}
