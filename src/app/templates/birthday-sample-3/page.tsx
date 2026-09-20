"use client";

import React, { useEffect, useState } from 'react';
import './styles.css';

export default function VintageTemplate() {
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

        document.querySelectorAll('.vintage-observe').forEach(el => observer.observe(el));
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
        <main className="vintage-template film-grain min-h-screen">
            {/* Retro Hero */}
            <header className="bg-mint min-h-[80vh] sm:min-h-[85vh] flex flex-col items-center justify-center text-center p-4 sm:p-6 relative overflow-hidden pt-16 sm:pt-6">
                {/* Decorative Sunburst (CSS only) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{ background: 'repeating-conic-gradient(from 0deg, transparent 0deg 15deg, #5D4037 15deg 30deg)' }}></div>

                <div className="relative z-10 bg-white/40 p-6 sm:p-12 md:p-20 rounded-3xl sm:rounded-full border-4 border-[#FFAAA5] vintage-observe max-w-sm sm:max-w-none mx-auto">
                    <h3 className="font-retro text-2xl sm:text-3xl md:text-4xl text-[#5D4037] mb-2 transform -rotate-3 sm:-rotate-6">You're Invited to</h3>
                    <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl text-melon uppercase tracking-tighter mb-2 sm:mb-4 drop-shadow-[2px_2px_0_#5D4037] sm:drop-shadow-[4px_4px_0_#5D4037]">
                        Clara's<br/>Sweet 16
                    </h1>
                    <p className="font-retro text-lg sm:text-2xl text-[#5D4037] transform rotate-2 sm:rotate-3 mt-2 sm:mt-4">A groovy good time!</p>
                </div>
            </header>

            {/* Vintage Details with Scalloped Top */}
            <section className="bg-blush pt-16 sm:pt-24 pb-20 sm:pb-32 px-4 sm:px-6 relative z-10 scalloped-top">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-16 vintage-observe">
                    <div className="text-center md:text-right border-b-2 md:border-b-0 md:border-r-2 border-[#5D4037]/20 pb-8 sm:pb-12 md:pb-0 md:pr-16">
                        <h3 className="font-retro text-3xl sm:text-4xl text-melon mb-3 sm:mb-6 drop-shadow-[2px_2px_0_#5D4037]">When</h3>
                        <p className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Saturday, May 18th</p>
                        <p className="text-lg sm:text-xl">1974 (Just kidding, 2024!)</p>
                        <p className="mt-3 sm:mt-4 font-bold bg-[#A8E6CF] inline-block px-4 py-1 rounded-full border-2 border-[#5D4037] shadow-[2px_2px_0_#5D4037] text-sm sm:text-base">7:00 PM</p>
                    </div>
                    <div className="text-center md:text-left md:pl-16">
                        <h3 className="font-retro text-3xl sm:text-4xl text-melon mb-3 sm:mb-6 drop-shadow-[2px_2px_0_#5D4037]">Where</h3>
                        <p className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">The Roller Rink</p>
                        <p className="text-lg sm:text-xl leading-relaxed">88 Boogie Boulevard<br/>Retro City, CA</p>
                        <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#5D4037]/70">Don't forget your skates!</p>
                    </div>
                </div>
            </section>

            {/* Retro Polaroid Gallery */}
            <section className="py-14 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
                <div className="text-center mb-10 sm:mb-16 vintage-observe">
                    <h2 className="font-retro text-3xl sm:text-5xl text-[#5D4037] mb-2">Good Vibes Only</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                    <div className="bg-white p-4 pb-14 sm:pb-16 shadow-[6px_6px_0_rgba(93,64,55,0.2)] sm:shadow-[8px_8px_0_rgba(93,64,55,0.2)] border-2 border-[#5D4037] vintage-observe transform -rotate-2 sm:-rotate-3">
                        <img src="https://images.unsplash.com/photo-1557056637-8b01ba0353da?auto=format&fit=crop&w=600&q=80" alt="Rollerskates" className="w-full aspect-square object-cover filter sepia-[0.5]" />
                        <p className="font-retro text-center text-xl sm:text-2xl mt-4 absolute w-full left-0 bottom-3 sm:bottom-4">Roll on!</p>
                    </div>
                    <div className="bg-white p-4 pb-14 sm:pb-16 shadow-[6px_6px_0_rgba(93,64,55,0.2)] sm:shadow-[8px_8px_0_rgba(93,64,55,0.2)] border-2 border-[#5D4037] vintage-observe delay-100 transform rotate-1 sm:rotate-2">
                        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80" alt="Event" className="w-full aspect-square object-cover filter sepia-[0.5]" />
                        <p className="font-retro text-center text-xl sm:text-2xl mt-4 absolute w-full left-0 bottom-3 sm:bottom-4">Let's Dance</p>
                    </div>
                    <div className="bg-white p-4 pb-14 sm:pb-16 shadow-[6px_6px_0_rgba(93,64,55,0.2)] sm:shadow-[8px_8px_0_rgba(93,64,55,0.2)] border-2 border-[#5D4037] vintage-observe delay-200 transform -rotate-1 hidden lg:block">
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80" alt="Party" className="w-full aspect-square object-cover filter sepia-[0.5]" />
                        <p className="font-retro text-center text-xl sm:text-2xl mt-4 absolute w-full left-0 bottom-3 sm:bottom-4">Cheers!</p>
                    </div>
                </div>
            </section>

            {/* Retro Ticket Form */}
            <section className="py-14 sm:py-24 px-4 sm:px-6 relative z-10 flex justify-center">
                <div className="w-full max-w-lg ticket-form vintage-observe p-6 sm:p-10">
                    <h2 className="font-retro text-3xl sm:text-4xl text-center text-[#5D4037] mb-6 sm:mb-8">Grab your Ticket!</h2>
                    
                    {!isSuccess ? (
                        <form onSubmit={handleRsvpSubmit} className="space-y-6 sm:space-y-8">
                            <div>
                                <label className="block font-bold text-xs sm:text-sm uppercase tracking-widest text-melon mb-2">Name</label>
                                <input type="text" required className="retro-input w-full text-base sm:text-lg" placeholder="Cool Cat Name" />
                            </div>
                            <div>
                                <label className="block font-bold text-xs sm:text-sm uppercase tracking-widest text-melon mb-2">Are you in?</label>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-3 sm:mt-4">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="radio" name="rsvp" className="w-5 h-5 accent-[#5D4037]" required />
                                        <span className="font-bold text-base sm:text-lg">Heck Yes!</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="radio" name="rsvp" className="w-5 h-5 accent-[#5D4037]" required />
                                        <span className="font-bold text-base sm:text-lg">Bummer, No.</span>
                                    </label>
                                </div>
                            </div>
                            <div className="pt-4 sm:pt-8 text-center">
                                <button type="submit" disabled={isSubmitting} className="retro-btn px-8 sm:px-12 py-3.5 sm:py-4 text-lg sm:text-xl w-full">
                                    {isSubmitting ? 'Punching Ticket...' : 'RSVP Now'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center py-8 sm:py-12">
                            <h3 className="font-retro text-3xl sm:text-4xl text-melon mb-3 sm:mb-4">Right On!</h3>
                            <p className="font-bold text-base sm:text-xl">Your ticket is punched. We'll see you on the flip side!</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
