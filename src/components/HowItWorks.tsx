import React from 'react';
import { Palette, Pencil, Send } from 'lucide-react';

const steps = [
  {
    icon: Palette,
    step: 'Pick your design.',
    description: 'Choose a style you love.',
  },
  {
    icon: Pencil,
    step: 'Make it yours.',
    description: 'Add your details, photos & colors.',
  },
  {
    icon: Send,
    step: 'Send it.',
    description: 'Share instantly with your guests.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-foreground/60 uppercase tracking-[0.2em] text-xs font-semibold mb-3">Three easy steps</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-foreground leading-tight">
            Simple from start to send.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 md:p-10 group hover:bg-primary-foreground/20 transition-all duration-300"
              >
                {/* Step number */}
                <span className="absolute top-5 left-6 text-primary-foreground/20 text-5xl font-bold font-serif select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="mt-6 mb-6 p-4 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />
                </div>

                {/* Title — exact tagline */}
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-foreground mb-2">
                  {step.step}
                </h3>

                {/* Sub — exact tagline */}
                <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow to next (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-primary-foreground/40">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
