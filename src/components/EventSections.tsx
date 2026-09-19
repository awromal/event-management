"use client";

import React from 'react';
import { Cake, Heart, GlassWater, Home, Sparkles, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Birthday Celebrations',
    tagline: 'Make every year count',
    formValue: 'birthday',
    description:
      'From milestone birthdays to surprise parties, our custom cards set the perfect tone. Choose from playful, elegant, or themed designs that capture the spirit of the celebration.',
    features: ['Custom themes & colors', 'Photo integration', 'Animated digital cards'],
    icon: Cake,
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
    accentBorder: 'border-pink-200',
    accentGradient: 'from-pink-50 to-rose-50',
  },
  {
    title: 'Wedding Invitations',
    tagline: 'Where love meets elegance',
    formValue: 'wedding',
    description:
      'Your wedding day deserves an invitation as beautiful as your love story. Explore timeless, modern, and romantic designs crafted with the finest attention to detail.',
    features: ['RSVP management', 'Matching stationery suites', 'Foil & embossed options'],
    icon: Heart,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    accentBorder: 'border-rose-200',
    accentGradient: 'from-rose-50 to-red-50',
  },
  {
    title: 'Reception Invites',
    tagline: 'Celebrate in style',
    formValue: 'reception',
    description:
      'Invite your guests to join the after-party with reception cards that complement your event perfectly. Sophisticated designs for cocktail hours, dinners, and grand receptions.',
    features: ['Venue map integration', 'Dress code details', 'Menu preview cards'],
    icon: GlassWater,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
    accentBorder: 'border-indigo-200',
    accentGradient: 'from-indigo-50 to-violet-50',
  },
  {
    title: 'House Warming',
    tagline: 'Welcome to our new home',
    formValue: 'house-warming',
    description:
      'Share the joy of your new beginning with warm and inviting house warming cards. From cozy to contemporary, find designs that feel just like home.',
    features: ['Address announcement', 'Open house scheduling', 'Registry links'],
    icon: Home,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    accentBorder: 'border-emerald-200',
    accentGradient: 'from-emerald-50 to-teal-50',
  },
];

interface EventSectionsProps {
  onSelectEvent: (eventType: string) => void;
}

export default function EventSections({ onSelectEvent }: EventSectionsProps) {
  const handleGetStarted = (formValue: string) => {
    onSelectEvent(formValue);
    // Smooth scroll to the booking form
    const formEl = document.getElementById('booking-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-serif font-bold text-stone-900 sm:text-4xl">
            Explore Our Event Collections
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Every occasion is unique. Discover hand-crafted invitation designs tailored to your celebration.
          </p>
        </div>

        <div className="space-y-20">
          {events.map((event, index) => {
            const Icon = event.icon;
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={index}
                id={event.title.toLowerCase().replace(/\s+/g, '-')}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
              >
                {/* Visual Card */}
                <div className="w-full lg:w-1/2">
                  <div
                    className={`relative rounded-3xl bg-gradient-to-br ${event.accentGradient} border ${event.accentBorder} p-10 sm:p-14 flex flex-col items-center justify-center min-h-[320px] group transition-all duration-500 hover:shadow-2xl`}
                  >
                    <div
                      className={`${event.bgColor} ${event.color} p-5 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon className="w-12 h-12" />
                    </div>
                    <Sparkles className={`absolute top-6 right-6 w-5 h-5 ${event.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                    <Sparkles className={`absolute bottom-8 left-8 w-4 h-4 ${event.color} opacity-20 group-hover:opacity-80 transition-opacity duration-500`} />
                    <p className="text-sm font-medium tracking-widest uppercase text-stone-400">
                      {event.tagline}
                    </p>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-4">
                    {event.title}
                  </h3>
                  <p className="text-stone-600 text-lg leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {event.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-stone-700">
                        <span className={`w-2 h-2 rounded-full ${event.color.replace('text-', 'bg-')} mr-3 shrink-0`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleGetStarted(event.formValue)}
                    className={`inline-flex items-center gap-2 font-semibold ${event.color} hover:underline underline-offset-4 transition-all group/link cursor-pointer`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
