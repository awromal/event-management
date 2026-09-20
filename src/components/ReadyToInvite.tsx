import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ReadyToInvite() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Soft glow in background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] h-[60%] rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary/60 uppercase tracking-[0.2em] text-xs font-semibold mb-4 sm:mb-5">
          Let&apos;s get started
        </p>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-primary leading-tight mb-4 sm:mb-6">
          Ready to invite?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-foreground/75 max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Create a beautiful, personalized invitation in minutes. Your guests won&apos;t forget it.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-xs sm:max-w-none mx-auto w-full">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 border border-transparent text-sm sm:text-base font-semibold rounded-full text-primary-foreground bg-primary hover:bg-primary/90 shadow-md transition-all duration-300 w-full sm:w-auto group active:scale-95"
          >
            Create Invitation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/events/wedding"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-primary text-sm sm:text-base font-semibold rounded-full text-primary bg-transparent hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto active:scale-95"
          >
            Browse Templates
          </Link>
        </div>
      </div>
    </section>
  );
}
