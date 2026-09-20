import React from 'react';
import Link from 'next/link';
import { Heart, Cake, Gem, PartyPopper, Baby, Sparkles } from 'lucide-react';

const occasions = [
  { label: 'Weddings', icon: Heart, href: '/events/wedding' },
  { label: 'Birthdays', icon: Cake, href: '/events/birthday' },
  { label: 'Engagements', icon: Gem, href: '#contact' },
  { label: 'Parties', icon: PartyPopper, href: '#contact' },
  { label: 'Baby Showers', icon: Baby, href: '#contact' },
  { label: 'More', icon: Sparkles, href: '#contact' },
];

export default function EventCategories() {
  return (
    <section id="categories" className="py-16 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary/60 uppercase tracking-[0.2em] text-xs font-semibold mb-3">All occasions</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
            Made for your moments.
          </h2>
        </div>

        {/* Occasions grid — 3 cols mobile, 6 desktop */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
          {occasions.map((occasion) => {
            const Icon = occasion.icon;
            return (
              <Link
                key={occasion.label}
                href={occasion.href}
                className="group flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl border border-primary/15 bg-background hover:border-primary hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="p-3 rounded-full border border-primary/20 text-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                </div>
                <span className="text-xs md:text-sm font-semibold text-foreground/70 group-hover:text-primary transition-colors text-center leading-tight">
                  {occasion.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA button */}
        <div className="text-center">
          <Link
            href="/events/wedding"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-primary text-base font-semibold rounded-full text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            Explore Designs
          </Link>
        </div>
      </div>
    </section>
  );
}
