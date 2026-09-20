"use client";

import React, { useEffect, useState } from 'react';
import './styles.css';

export default function FloralTemplate() {
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

        document.querySelectorAll('.floral-observe').forEach(el => observer.observe(el));
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
        <main className="floral-template paper-texture relative min-h-screen">
            {/* Background Petals */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="petal w-12 h-12 top-[10%] left-[5%] animate-float"></div>
                <div className="petal w-16 h-16 top-[40%] right-[10%] animate-float-delayed"></div>
                <div className="petal w-8 h-8 bottom-[20%] left-[15%] animate-float"></div>
            </div>

            {/* Split Hero Section */}
            <header className="relative z-10 min-h-screen flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 min-h-[50vh] md:h-screen relative p-6 sm:p-10 md:p-16 flex items-center justify-center pt-20 md:pt-16">
                    <div className="absolute inset-0 bg-[#F5F0E6] organic-shape-1 scale-90 md:scale-75 animate-float opacity-50 mix-blend-multiply"></div>
                    <div className="relative z-10 text-center">
                        <p className="tracking-[0.3em] uppercase text-xs mb-6 sm:mb-8 text-[#8B3A3A] font-medium">Together with their families</p>
                        <h1 className="font-floral-serif text-4xl sm:text-6xl md:text-8xl text-[#4A3B32] leading-tight mb-4">
                            Charlotte<br />
                            <span className="italic text-[#8B3A3A] text-3xl sm:text-5xl md:text-7xl">&amp;</span><br />
                            James
                        </h1>
                        <p className="mt-6 sm:mt-8 italic text-base sm:text-lg text-[#4A3B32]/70">Request the honor of your presence</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 min-h-[40vh] md:h-screen relative">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80" 
                         alt="Charlotte and James" className="w-full h-full object-cover rounded-tl-[50px] sm:rounded-tl-[100px] md:rounded-l-[200px]" />
                </div>
            </header>

            {/* Organic Gallery */}
            <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12 sm:mb-20 floral-observe">
                    <h2 className="font-floral-serif text-3xl sm:text-4xl md:text-5xl text-[#4A3B32] mb-4">Our Moments</h2>
                    <div className="w-12 h-[1px] bg-[#8B3A3A] mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                    <div className="md:col-span-5 floral-observe">
                        <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80" 
                             alt="Ring" className="w-full aspect-[4/5] object-cover organic-shape-2 shadow-xl" />
                    </div>
                    <div className="md:col-span-7 space-y-6 sm:space-y-8">
                        <div className="floral-observe delay-100">
                            <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80" 
                                 alt="Couple" className="w-full aspect-video object-cover rounded-[2rem] sm:rounded-[3rem] shadow-lg" />
                        </div>
                        <div className="flex gap-4 sm:gap-8">
                            <img src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80" 
                                 alt="Flowers" className="w-1/2 aspect-square object-cover rounded-full shadow-md floral-observe delay-200" />
                            <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=400&q=80" 
                                 alt="Hands" className="w-1/2 aspect-[4/5] object-cover rounded-t-full shadow-md floral-observe delay-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Details */}
            <section className="py-16 sm:py-24 bg-[#F5F0E6] relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center floral-observe">
                    <h2 className="font-floral-serif text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12">The Details</h2>
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-16">
                        <div className="bg-white/50 backdrop-blur-sm p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white">
                            <h3 className="font-floral-serif text-2xl sm:text-3xl text-[#8B3A3A] mb-3 sm:mb-4">When</h3>
                            <p className="text-lg sm:text-xl mb-1 sm:mb-2">Saturday</p>
                            <p className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4">September 14, 2024</p>
                            <p className="text-[#4A3B32]/70 italic text-sm sm:text-base">At Five O'Clock<br/>in the Afternoon</p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white">
                            <h3 className="font-floral-serif text-2xl sm:text-3xl text-[#8B3A3A] mb-3 sm:mb-4">Where</h3>
                            <p className="text-lg sm:text-xl mb-1 sm:mb-2">The Oakwood Estate</p>
                            <p className="text-[#4A3B32]/70 italic mb-4 sm:mb-6 text-sm sm:text-base">123 Vineyard Lane<br/>Napa Valley, CA</p>
                            <p className="tracking-widest uppercase text-xs">Dinner & Dancing to follow</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RSVP */}
            <section className="py-16 sm:py-32 px-4 sm:px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center floral-observe">
                    <h2 className="font-floral-serif text-3xl sm:text-5xl mb-3 sm:mb-4">RSVP</h2>
                    <p className="italic text-[#8B3A3A] mb-8 sm:mb-12 text-sm sm:text-base">By August 1st, 2024</p>
                    
                    {!isSuccess ? (
                        <form onSubmit={handleRsvpSubmit} className="space-y-6 sm:space-y-8 bg-white p-6 sm:p-12 rounded-t-[2.5rem] sm:rounded-t-[5rem] shadow-xl border border-[#F5F0E6]">
                            <div>
                                <input type="text" placeholder="M.........................................................." required 
                                       className="w-full bg-transparent border-b-2 border-[#4A3B32]/10 focus:border-[#8B3A3A] outline-none py-3 px-2 sm:px-4 font-floral-serif text-lg sm:text-xl italic placeholder:text-[#4A3B32]/30" />
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 py-2 sm:py-4">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="radio" name="attending" className="accent-[#8B3A3A] w-5 h-5 shrink-0" required />
                                    <span className="font-medium text-sm sm:text-base group-hover:text-[#8B3A3A] transition-colors">Accepts with Pleasure</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="radio" name="attending" className="accent-[#8B3A3A] w-5 h-5 shrink-0" required />
                                    <span className="font-medium text-sm sm:text-base group-hover:text-[#8B3A3A] transition-colors">Declines with Regret</span>
                                </label>
                            </div>
                            <button type="submit" disabled={isSubmitting} 
                                    className="w-full sm:w-auto px-8 sm:px-12 py-3.5 sm:py-4 bg-[#8B3A3A] text-[#FDFBF7] rounded-full tracking-[0.2em] uppercase text-xs sm:text-sm hover:bg-[#6c2c2c] transition-colors shadow-lg disabled:opacity-50">
                                {isSubmitting ? 'Sending...' : 'Reply'}
                            </button>
                        </form>
                    ) : (
                        <div className="bg-white p-8 sm:p-16 rounded-[2rem] sm:rounded-[4rem] shadow-xl text-center">
                            <h3 className="font-floral-serif text-3xl sm:text-4xl text-[#8B3A3A] mb-3 sm:mb-4">Thank You</h3>
                            <p className="text-[#4A3B32]/80 text-sm sm:text-base">We cannot wait to celebrate with you.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
