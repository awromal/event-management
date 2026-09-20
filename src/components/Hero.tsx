import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-background overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32 lg:pt-48 lg:pb-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-8 sm:mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Digital Invitations
        </div>

        {/* Main headline */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-serif font-extrabold text-primary max-w-4xl mx-auto leading-[1.15]">
          Every celebration
          <br />
          <span className="italic font-normal text-foreground">starts here.</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed px-2">
          Beautiful digital invitations for every occasion.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-xs sm:max-w-none mx-auto w-full">
          <a
            href="#categories"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-full text-primary-foreground bg-primary hover:bg-primary/90 shadow-md transition-all duration-300 w-full sm:w-auto"
          >
            Create Invitation
          </a>
          <Link
            href="/events/wedding"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-primary text-sm sm:text-base font-semibold rounded-full text-primary bg-transparent hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto"
          >
            Browse Templates
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-2 sm:gap-4 max-w-xs sm:max-w-sm mx-auto pt-6 border-t border-primary/10">
          {[
            { value: '500+', label: 'Designs' },
            { value: '2K+', label: 'Happy Clients' },
            { value: '8', label: 'Templates' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-primary">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-foreground/60 uppercase tracking-wider mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[30%] -right-[10%] w-[50%] h-[60%] rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
}
