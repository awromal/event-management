import React from 'react';
import { Palette, Pencil, Send, ChevronRight, ChevronDown } from 'lucide-react';

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
    <section id="how-it-works" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 rounded-[100%] blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-black/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <p className="inline-block px-5 py-2 mb-6 rounded-full bg-white/10 text-white/90 uppercase tracking-[0.2em] text-xs font-semibold backdrop-blur-md border border-white/20 shadow-sm">
            Three easy steps
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
            Simple from start to send.
          </h2>
        </div>

        {/* Steps container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle connecting line - Mobile (vertical) */}
          <div className="md:hidden absolute left-[39px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent z-0" />
          
          {/* Subtle connecting line - Desktop (horizontal) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0"
                >
                  {/* Arrow to Next Step (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-[2.5rem] -translate-y-1/2 -right-[1.5rem] md:-right-[2rem] lg:-right-[2.5rem] w-12 h-12 items-center justify-center text-white/40 z-20">
                      <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                  )}

                  {/* Arrow to Next Step (Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute top-[5.5rem] left-[27px] w-6 h-6 flex items-center justify-center text-white/40 z-20 bg-primary">
                      <ChevronDown className="w-5 h-5" strokeWidth={2} />
                    </div>
                  )}

                  {/* Icon Circle */}
                  <div className="relative z-10 md:mb-8 shrink-0">
                    <div className="relative w-20 h-20 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-black/10">
                      <Icon className="w-8 h-8 text-white transition-all duration-500 ease-out group-hover:scale-110 group-hover:text-primary" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-left md:text-center relative z-10 pt-3 md:pt-0">
                    <div className="inline-flex items-center justify-center md:justify-center mb-3">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                        Step 0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2 md:mb-4">
                      {step.step}
                    </h3>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-[260px] md:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
