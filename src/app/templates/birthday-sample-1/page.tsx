"use client";

import React, { useEffect, useState } from 'react';
import './styles.css';

export default function PlayfulTemplate() {
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

        document.querySelectorAll('.playful-observe').forEach(el => observer.observe(el));
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
        <main className="playful-template min-h-screen relative">
            {/* Confetti Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="confetti" style={{ 
                        left: `${Math.random() * 100}vw`,
                        animationDelay: `${Math.random() * 5}s`
                    }}></div>
                ))}
            </div>

            {/* Hero Section */}
            <header className="fun-gradient min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center text-center p-4 sm:p-6 relative z-10 overflow-hidden rounded-b-[30px] sm:rounded-b-[50px] shadow-sm pt-20 sm:pt-6">
                <div className="playful-observe">
                    <div className="bg-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full inline-block font-bold text-[#FF6B6B] tracking-widest uppercase text-xs sm:text-sm mb-6 sm:mb-8 shadow-sm">
                        You're Invited!
                    </div>
                    <h1 className="font-fun text-5xl sm:text-7xl md:text-9xl text-white drop-shadow-md leading-tight mb-4 transform -rotate-2">
                        Leo's 5th<br/>Birthday
                    </h1>
                    <p className="font-fun text-xl sm:text-3xl md:text-4xl text-[#333333] mt-4 sm:mt-8 bg-white/50 backdrop-blur-sm inline-block px-5 sm:px-8 py-2 sm:py-3 rounded-2xl sm:rounded-3xl transform rotate-1">
                        Let's party! 🎈
                    </p>
                </div>
                
                {/* Wavy bottom divider */}
                <svg className="absolute bottom-0 w-full h-12 sm:h-16 md:h-24 text-[#F8F9FA]" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,22.4223049 C238.666667,61.8598711 477.333333,76.5786542 716,66.5786542 C954.666667,56.5786542 1193.33333,21.8598711 1440,22.4223049 L1440,74.4223049 L0,74.4223049 L0,22.4223049 Z"></path>
                </svg>
            </header>

            {/* Details Section */}
            <section className="py-14 sm:py-24 px-4 sm:px-6 relative z-10 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-12 playful-observe">
                    <div className="bg-white p-6 sm:p-10 rounded-[25px] sm:rounded-[40px] shadow-xl transform hover:scale-105 transition-transform duration-300 border-4 border-[#4ECDC4]">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#4ECDC4] rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6">📅</div>
                        <h3 className="font-fun text-2xl sm:text-3xl text-[#333333] mb-2 sm:mb-4">When</h3>
                        <p className="text-lg sm:text-xl font-bold">Saturday, Oct 12</p>
                        <p className="text-base sm:text-lg text-gray-500 mt-1 sm:mt-2">2:00 PM to 5:00 PM</p>
                    </div>
                    <div className="bg-white p-6 sm:p-10 rounded-[25px] sm:rounded-[40px] shadow-xl transform hover:scale-105 transition-transform duration-300 border-4 border-[#FFE66D]">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFE66D] rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6">📍</div>
                        <h3 className="font-fun text-2xl sm:text-3xl text-[#333333] mb-2 sm:mb-4">Where</h3>
                        <p className="text-lg sm:text-xl font-bold">FunZone Park</p>
                        <p className="text-base sm:text-lg text-gray-500 mt-1 sm:mt-2">123 Play Street<br/>Happy Town</p>
                    </div>
                </div>
            </section>

            {/* Polaroid Gallery */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
                <h2 className="font-fun text-3xl sm:text-5xl text-center text-[#9D4EDD] mb-10 sm:mb-16 playful-observe">Sneak Peek!</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 playful-observe">
                    <div className="polaroid">
                        <img src="https://images.unsplash.com/photo-1530103862676-de8892437659?auto=format&fit=crop&w=600&q=80" alt="Balloons" className="w-full aspect-square object-cover" />
                        <p className="font-fun text-center mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600">Lots of balloons!</p>
                    </div>
                    <div className="polaroid">
                        <img src="https://images.unsplash.com/photo-1558285549-2a06ee628bf4?auto=format&fit=crop&w=600&q=80" alt="Cake" className="w-full aspect-square object-cover" />
                        <p className="font-fun text-center mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600">Yummy Cake 🎂</p>
                    </div>
                    <div className="polaroid">
                        <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80" alt="Party" className="w-full aspect-square object-cover" />
                        <p className="font-fun text-center mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600">Games & Fun</p>
                    </div>
                </div>
            </section>

            {/* RSVP Form */}
            <section className="py-14 sm:py-24 px-4 sm:px-6 relative z-10">
                <div className="max-w-xl mx-auto bg-white p-6 sm:p-12 md:p-16 rounded-[30px] sm:rounded-[50px] shadow-2xl border-4 border-[#FF6B6B] playful-observe">
                    <h2 className="font-fun text-3xl sm:text-5xl text-center text-[#FF6B6B] mb-4 sm:mb-8">RSVP</h2>
                    <p className="text-center text-sm sm:text-lg font-bold text-gray-500 mb-6 sm:mb-10">Can you make it to the party?</p>
                    
                    {!isSuccess ? (
                        <form onSubmit={handleRsvpSubmit} className="space-y-4 sm:space-y-6">
                            <div>
                                <label className="block font-bold text-sm sm:text-base text-gray-700 mb-1.5 pl-2">Who is coming?</label>
                                <input type="text" required placeholder="Your Name" className="fun-input w-full" />
                            </div>
                            <div>
                                <label className="block font-bold text-sm sm:text-base text-gray-700 mb-1.5 pl-2">How many kids?</label>
                                <select required className="fun-input w-full appearance-none">
                                    <option value="">Select number</option>
                                    <option value="1">1 kiddo</option>
                                    <option value="2">2 kiddos</option>
                                    <option value="3">3 kiddos</option>
                                    <option value="0">Sorry, can't make it!</option>
                                </select>
                            </div>
                            <div className="pt-4 sm:pt-6">
                                <button type="submit" disabled={isSubmitting} className="fun-btn w-full py-3.5 sm:py-4 text-lg sm:text-xl">
                                    {isSubmitting ? 'Sending...' : 'Send RSVP!'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center py-6 sm:py-8">
                            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🎉</div>
                            <h3 className="font-fun text-3xl sm:text-4xl text-[#4ECDC4] mb-3 sm:mb-4">Yay!</h3>
                            <p className="text-base sm:text-xl font-bold text-gray-600">We got your RSVP. See you there!</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
