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
    <section id="categories" className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-primary/60 uppercase tracking-[0.2em] text-xs font-semibold mb-2 sm:mb-3">
            All occasions
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
            Made for your moments.
          </h2>
        </div>

        {/* Occasions grid — 2 cols on mobile, 3 on sm, 6 on md/desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-10 sm:mb-12">
          {occasions.map((occasion) => {
            const Icon = occasion.icon;
            return (
              <Link
                key={occasion.label}
                href={occasion.href}
                className="group flex flex-col items-center justify-center gap-2.5 p-3.5 sm:p-5 md:p-6 rounded-2xl border border-primary/15 bg-background hover:border-primary hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer active:scale-95 text-center"
              >
                <div className="p-2.5 sm:p-3 rounded-full border border-primary/20 text-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors leading-tight">
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
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-primary text-sm sm:text-base font-semibold rounded-full text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            Explore Designs
          </Link>
        </div>
      </div>
    </section>
  );
}
