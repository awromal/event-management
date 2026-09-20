"use client";

import React, { useEffect, useState } from 'react';
import './styles.css';

export default function ClassicTemplate() {
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

        document.querySelectorAll('.classic-observe').forEach(el => observer.observe(el));
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
        <main className="classic-template min-h-screen p-2 sm:p-4 md:p-8">
            <div className="formal-border min-h-[calc(100vh-1rem)] sm:min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] p-4 sm:p-8 md:p-16 flex flex-col relative bg-white shadow-2xl">
                
                {/* Hero Section */}
                <header className="flex-1 flex flex-col items-center justify-center text-center mt-16 sm:mt-16 md:mt-24">
                    <div className="classic-observe">
                        <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[11px] sm:text-xs font-medium text-[#1A1A1A] mb-6 sm:mb-8">Together with their families</p>
                        
                        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                            <h1 className="font-script text-5xl sm:text-7xl md:text-9xl text-[#993333] leading-none">Tamara</h1>
                            <span className="font-script text-3xl sm:text-5xl md:text-7xl text-[#1A1A1A]">&amp;</span>
                            <h1 className="font-script text-5xl sm:text-7xl md:text-9xl text-[#993333] leading-none">James</h1>
                        </div>

                        <p className="uppercase tracking-widest text-[11px] sm:text-xs font-medium text-[#1A1A1A] mt-8 sm:mt-12 mb-4 leading-loose max-w-lg mx-auto px-2">
                            Request the pleasure of your company<br/>
                            To celebrate their marriage
                        </p>
                        
                        <div className="w-[80px] sm:w-[100px] h-[1px] bg-[#993333] mx-auto my-6 sm:my-8"></div>
                    </div>
                </header>

                {/* Event Details */}
                <section className="py-10 sm:py-16 border-t border-b border-[#1A1A1A]/10 mt-8 sm:mt-12">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center classic-observe">
                        <div>
                            <h3 className="uppercase tracking-[0.3em] text-xs text-[#993333] font-bold mb-3 sm:mb-4">Date & Time</h3>
                            <p className="font-medium text-base sm:text-lg">Saturday</p>
                            <p className="font-light text-sm sm:text-base">September 21, 2024</p>
                            <p className="font-light italic mt-1 sm:mt-2 text-sm sm:text-base">At four o'clock</p>
                        </div>
                        <div className="border-y md:border-y-0 md:border-l md:border-r border-[#1A1A1A]/10 py-6 md:py-0 px-2 md:px-4">
                            <h3 className="uppercase tracking-[0.3em] text-xs text-[#993333] font-bold mb-3 sm:mb-4">The Venue</h3>
                            <p className="font-medium text-base sm:text-lg uppercase tracking-wider">The Aman Estate</p>
                            <p className="font-light mt-1 sm:mt-2 text-sm sm:text-base">Napa Valley, California</p>
                        </div>
                        <div>
                            <h3 className="uppercase tracking-[0.3em] text-xs text-[#993333] font-bold mb-3 sm:mb-4">Reception</h3>
                            <p className="font-medium text-base sm:text-lg">Dinner & Dancing</p>
                            <p className="font-light mt-1 sm:mt-2 text-sm sm:text-base">To Follow Ceremony</p>
                        </div>
                    </div>
                </section>

                {/* Symmetrical Grid Gallery */}
                <section className="py-12 sm:py-24">
                    <div className="text-center mb-10 sm:mb-16 classic-observe">
                        <h2 className="font-script text-4xl sm:text-5xl text-[#993333] mb-3 sm:mb-4">Memories</h2>
                        <div className="w-[50px] h-[1px] bg-[#1A1A1A] mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 classic-observe">
                        <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80" alt="Ring" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-lg" />
                        <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80" alt="Couple" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-lg" />
                        <img src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80" alt="Flowers" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-lg" />
                        <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80" alt="Hands" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-lg" />
                    </div>
                </section>

                {/* RSVP Form */}
                <section className="py-10 sm:py-16 classic-observe">
                    <div className="max-w-xl mx-auto border border-[#1A1A1A]/20 p-6 sm:p-12 text-center rounded-lg">
                        <h2 className="uppercase tracking-[0.4em] text-xs sm:text-sm text-[#993333] font-bold mb-4 sm:mb-8">R.S.V.P.</h2>
                        <p className="font-light italic mb-6 sm:mb-8 text-sm sm:text-base">Please respond by August 1st, 2024</p>
                        
                        {!isSuccess ? (
                            <form onSubmit={handleRsvpSubmit} className="space-y-6 sm:space-y-8 text-left">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-[#1A1A1A]/60 mb-2">M(s).</label>
                                    <input type="text" required className="w-full border-b border-[#1A1A1A] bg-transparent outline-none py-2 font-script text-2xl sm:text-3xl" />
                                </div>
                                <div className="space-y-3 sm:space-y-4 py-2 sm:py-4">
                                    <label className="flex items-center gap-3 sm:gap-4 cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input type="radio" name="attending" className="peer appearance-none w-4 h-4 border border-[#1A1A1A] rounded-none checked:bg-[#993333] checked:border-[#993333] transition-colors" required />
                                            <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <span className="uppercase tracking-widest text-xs">Joyfully Accepts</span>
                                    </label>
                                    <label className="flex items-center gap-3 sm:gap-4 cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input type="radio" name="attending" className="peer appearance-none w-4 h-4 border border-[#1A1A1A] rounded-none checked:bg-[#993333] checked:border-[#993333] transition-colors" required />
                                            <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <span className="uppercase tracking-widest text-xs">Regretfully Declines</span>
                                    </label>
                                </div>
                                <div className="text-center pt-6 sm:pt-8">
                                    <button type="submit" disabled={isSubmitting} className="classic-btn border border-[#993333] text-[#993333] px-8 sm:px-12 py-3 uppercase tracking-[0.2em] text-xs font-bold w-full sm:w-auto">
                                        {isSubmitting ? 'Sending...' : 'Submit'}
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="py-8 sm:py-12">
                                <h3 className="font-script text-3xl sm:text-4xl text-[#993333] mb-3 sm:mb-4">Thank You</h3>
                                <p className="font-light text-sm sm:text-base">Your response is greatly appreciated.</p>
                            </div>
                        )}
                    </div>
                </section>
                
            </div>
        </main>
    );
}
