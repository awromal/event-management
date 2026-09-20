"use client";

import React from 'react';
import Link from 'next/link';
import { Cake, Heart, Sparkles, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Birthday Celebrations',
    tagline: 'Make every year count',
    formValue: 'birthday',
    description:
      'From milestone birthdays to surprise parties, our custom cards set the perfect tone. Choose from playful, elegant, or vintage designs that capture the spirit of the celebration.',
    features: ['Custom themes & colors', 'Photo integration', 'Animated digital cards'],
    icon: Cake,
  },
  {
    title: 'Wedding Invitations',
    tagline: 'Where love meets elegance',
    formValue: 'wedding',
    description:
      'Your wedding day deserves an invitation as beautiful as your love story. Explore timeless, modern, and romantic designs crafted with the finest attention to detail.',
    features: ['Matching stationery suites', 'Foil & embossed styles', 'Interactive RSVP tracking'],
    icon: Heart,
  }
];

interface EventSectionsProps {
  onSelectEvent: (eventType: string) => void;
}

export default function EventSections({ onSelectEvent }: EventSectionsProps) {
  return (
    <section id="events" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
            Explore Our Event Collections
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-foreground/80">
            Every occasion is unique. Discover hand-crafted invitation designs tailored to your celebration.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {events.map((event, index) => {
            const Icon = event.icon;
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={index}
                id={event.title.toLowerCase().replace(/\s+/g, '-')}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 sm:gap-10 lg:gap-16 items-center`}
              >
                {/* Visual Card */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl bg-card border border-primary/20 p-8 sm:p-12 md:p-14 flex flex-col items-center justify-center min-h-[240px] sm:min-h-[300px] group transition-all duration-500 shadow-sm">
                    <div className="border border-primary text-primary p-4 sm:p-5 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-9 h-9 sm:w-12 sm:h-12" strokeWidth={1.25} />
                    </div>
                    <Sparkles className="absolute top-4 right-4 sm:top-6 sm:right-6 w-4 h-4 sm:w-5 sm:h-5 text-primary opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    <Sparkles className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-3 h-3 sm:w-4 sm:h-4 text-primary opacity-20 group-hover:opacity-80 transition-opacity duration-500" />
                    <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary/80 text-center px-2">
                      {event.tagline}
                    </p>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-3 sm:mb-4">
                    {event.title}
                  </h3>
                  <p className="text-foreground/80 text-base sm:text-lg leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                    {event.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm sm:text-base text-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary mr-3 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/events/${event.formValue}`}
                    className="inline-flex items-center gap-2 font-bold text-primary hover:underline underline-offset-4 transition-all group/link cursor-pointer uppercase tracking-wide text-xs sm:text-sm"
                  >
                    View {event.title.split(' ')[0]} Templates
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
