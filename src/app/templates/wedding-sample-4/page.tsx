"use client";

import React, { useEffect, useState } from 'react';
import './styles.css';

export default function HanddrawnTemplate() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Target date for countdown (Feb 1, 2026)
    useEffect(() => {
        const targetDate = new Date("February 1, 2026 00:00:00").getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    secs: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        };

        const timerId = setInterval(updateTimer, 1000);
        updateTimer();
        return () => clearInterval(timerId);
    }, []);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // If it has SVG paths, animate them
                    const paths = entry.target.querySelectorAll('path');
                    paths.forEach(p => p.classList.add('path-draw'));
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.hand-observe').forEach(el => observer.observe(el));
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
        <main className="handcrafted-template min-h-screen">
            {/* Hero Section */}
            <section className="min-h-[90vh] flex flex-col items-center justify-center text-center p-6 relative">
                <h1 className="font-bold text-4xl md:text-5xl uppercase tracking-wider red-ink mb-12 hand-observe">
                    We're<br/>Getting<br/>Married!
                </h1>
                
                {/* Holding Hands SVG Illustration */}
                <div className="w-64 h-64 mb-8 red-ink animate-hand-float hand-observe">
                    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {/* Abstract line art for holding hands */}
                        <path d="M40 120 L80 160 C90 170 110 170 120 160 L160 120" />
                        <path d="M70 100 L95 150" />
                        <path d="M130 100 L105 150" />
                        <path d="M60 130 C75 110 90 130 90 130" />
                        <path d="M140 130 C125 110 110 130 110 130" />
                    </svg>
                </div>

                <div className="hand-observe text-center mt-4">
                    <h2 className="font-hand text-5xl md:text-6xl red-ink mb-2">Felix & Angel</h2>
                    <p className="font-bold text-sm tracking-widest text-[#B22222]/70 uppercase mb-8">Sunday, February 1st 2026</p>
                    <button className="hand-btn">Open Invitation</button>
                </div>
            </section>

            {/* Countdown & Save the Date */}
            <section className="py-20 px-6 max-w-md mx-auto text-center border-t-2 border-dashed border-[#B22222]/30">
                <div className="hand-observe mb-16">
                    <h3 className="font-hand text-4xl red-ink mb-4">Counting Days</h3>
                    <div className="flex justify-center gap-4 text-center">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold red-ink">{timeLeft.days}</span>
                            <span className="text-[10px] uppercase font-bold text-[#B22222]/60">Days</span>
                        </div>
                        <span className="text-3xl font-bold red-ink">:</span>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold red-ink">{timeLeft.hours.toString().padStart(2, '0')}</span>
                            <span className="text-[10px] uppercase font-bold text-[#B22222]/60">Hours</span>
                        </div>
                        <span className="text-3xl font-bold red-ink">:</span>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold red-ink">{timeLeft.mins.toString().padStart(2, '0')}</span>
                            <span className="text-[10px] uppercase font-bold text-[#B22222]/60">Mins</span>
                        </div>
                        <span className="text-3xl font-bold red-ink">:</span>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold red-ink">{timeLeft.secs.toString().padStart(2, '0')}</span>
                            <span className="text-[10px] uppercase font-bold text-[#B22222]/60">Secs</span>
                        </div>
                    </div>
                </div>

                <div className="hand-observe relative">
                    {/* Decorative squiggles */}
                    <div className="absolute -left-4 top-0 w-8 h-8 red-ink">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 Q16 6 12 10 Q8 14 12 18"/></svg>
                    </div>
                    <div className="absolute -right-4 top-0 w-8 h-8 red-ink">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 Q16 6 12 10 Q8 14 12 18"/></svg>
                    </div>

                    <h3 className="font-hand text-4xl red-ink mb-2">Save The Date</h3>
                    <p className="font-bold text-sm text-[#B22222]/80 uppercase mb-8">Sunday, February 2026</p>
                    
                    {/* Calendar mock */}
                    <div className="flex justify-center items-center gap-4 text-2xl font-bold text-[#B22222]/50 mb-6">
                        <span>30</span>
                        <span>31</span>
                        <div className="relative text-white w-12 h-12 flex items-center justify-center">
                            <svg className="absolute inset-0 w-full h-full text-[#B22222]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            <span className="relative z-10 text-xl font-bold">1</span>
                        </div>
                        <span>2</span>
                        <span>3</span>
                    </div>
                    <p className="font-hand text-2xl red-ink">at 5:00 PM</p>
                </div>
            </section>

            {/* Location */}
            <section className="py-16 px-6 text-center hand-observe border-t-2 border-dashed border-[#B22222]/30">
                <h3 className="font-hand text-4xl red-ink mb-8">Location</h3>
                <div className="flex justify-center mb-6 red-ink opacity-80">
                    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {/* Table and flowers illustration */}
                        <path d="M20 70 L100 70 M30 70 L30 100 M90 70 L90 100"/>
                        <path d="M10 70 C 10 50, 110 50, 110 70"/>
                        <circle cx="60" cy="40" r="10" />
                        <path d="M50 40 Q 60 20 70 40"/>
                    </svg>
                </div>
                <p className="font-bold text-sm tracking-wide text-[#B22222]/80 mb-6">Bali Resort, Sunset Road, Bali</p>
                <button className="hand-btn text-sm px-6 py-2">Google Maps</button>
            </section>

            {/* Timeline */}
            <section className="py-20 px-6 relative max-w-md mx-auto border-t-2 border-dashed border-[#B22222]/30 overflow-hidden">
                <h3 className="font-hand text-4xl red-ink text-center mb-16">Wedding Timeline</h3>
                
                <div className="relative pl-12 space-y-16 hand-observe">
                    {/* Wavy dashed line */}
                    <div className="absolute left-8 top-4 bottom-0 w-8 border-l-2 border-dashed border-[#B22222] opacity-50"></div>
                    
                    <div className="relative">
                        <div className="absolute -left-[45px] top-0 w-10 h-10 bg-[#F8F4EC] border-2 border-[#B22222] rounded-full flex items-center justify-center red-ink z-10">
                            💍
                        </div>
                        <p className="font-bold text-sm text-[#B22222]/60 mb-1">5:00 PM</p>
                        <p className="font-hand text-2xl red-ink">Wedding Ceremony</p>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-[45px] top-0 w-10 h-10 bg-[#F8F4EC] border-2 border-[#B22222] rounded-full flex items-center justify-center red-ink z-10">
                            🍽️
                        </div>
                        <p className="font-bold text-sm text-[#B22222]/60 mb-1">7:00 PM</p>
                        <p className="font-hand text-2xl red-ink">Dinner Reception</p>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-[45px] top-0 w-10 h-10 bg-[#F8F4EC] border-2 border-[#B22222] rounded-full flex items-center justify-center red-ink z-10">
                            🪩
                        </div>
                        <p className="font-bold text-sm text-[#B22222]/60 mb-1">9:00 PM</p>
                        <p className="font-hand text-2xl red-ink">Dance Party</p>
                    </div>
                </div>
            </section>

            {/* Love Story Polaroids */}
            <section className="py-20 px-6 max-w-sm mx-auto text-center border-t-2 border-dashed border-[#B22222]/30">
                <h3 className="font-hand text-4xl red-ink mb-12 hand-observe">Love Story</h3>
                
                <div className="space-y-16">
                    <div className="photo-strip border-2 border-[#B22222] hand-observe">
                        <div className="red-tape"></div>
                        <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=400&q=80" alt="2021" className="w-full aspect-square object-cover mb-4 filter grayscale contrast-125 sepia-[0.3]" />
                        <div className="text-left">
                            <p className="font-bold text-[#B22222] mb-1">2021</p>
                            <p className="font-hand text-lg text-[#B22222]/80 leading-tight">We first met and little did we know it was the beginning of something beautiful.</p>
                        </div>
                    </div>

                    <div className="photo-strip border-2 border-[#B22222] hand-observe" style={{ transform: 'rotate(2deg)' }}>
                        <div className="red-tape"></div>
                        <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80" alt="2024" className="w-full aspect-square object-cover mb-4 filter grayscale contrast-125 sepia-[0.3]" />
                        <div className="text-left">
                            <p className="font-bold text-[#B22222] mb-1">2024</p>
                            <p className="font-hand text-lg text-[#B22222]/80 leading-tight">A heartfelt proposal sealed our fate.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RSVP */}
            <section className="py-24 px-6 text-center max-w-md mx-auto border-t-2 border-dashed border-[#B22222]/30">
                <div className="hand-observe mb-12">
                    <h2 className="text-[120px] leading-[0.8] font-bold red-ink tracking-tighter">RS<br/>VP</h2>
                    <p className="font-hand text-2xl red-ink mt-8">Kindly RSVP by January 15th, 2026</p>
                </div>

                {!isSuccess ? (
                    <form onSubmit={handleRsvpSubmit} className="space-y-8 hand-observe text-left px-4">
                        <div>
                            <input type="text" placeholder="Your Name" required className="hand-input w-full" />
                        </div>
                        <div className="flex gap-8 justify-center pt-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="attending" className="accent-[#B22222] w-5 h-5" required />
                                <span className="font-hand text-2xl red-ink">Joyfully Accept</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="attending" className="accent-[#B22222] w-5 h-5" required />
                                <span className="font-hand text-2xl red-ink">Regretfully Decline</span>
                            </label>
                        </div>
                        <div className="pt-8 text-center">
                            <button type="submit" disabled={isSubmitting} className="hand-btn w-full">
                                {isSubmitting ? 'Sending...' : 'Send RSVP'}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="hand-observe text-center border-2 border-dashed border-[#B22222] p-8 rounded-xl bg-white/50">
                        <h3 className="font-hand text-4xl red-ink mb-4">Thank You!</h3>
                        <p className="font-bold text-[#B22222]/70">We received your RSVP.</p>
                    </div>
                )}
            </section>
        </main>
    );
}
