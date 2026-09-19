import React from 'react';
import { MousePointerClick, Settings2, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Select Event Type',
    description: 'Choose from our extensive collection of event categories tailored to your celebration.',
    icon: MousePointerClick,
  },
  {
    number: '02',
    title: 'Customize Details',
    description: 'Provide your specific details, preferences, and any special requests for the design.',
    icon: Settings2,
  },
  {
    number: '03',
    title: 'Confirm Booking',
    description: 'Review your order and securely confirm your booking to get the process started.',
    icon: CheckCircle2,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-foreground">
            Getting your custom invitations designed and delivered is as easy as 1-2-3.
          </p>
        </div>

        <div className="relative">
          {/* Removing connecting line for the block style */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center text-center bg-primary rounded-lg p-8 group">
                  <div className="text-primary-foreground font-bold text-xl mb-4 opacity-80">
                    {index + 1}.
                  </div>
                  <div className="flex items-center justify-center mb-6">
                    <Icon className="w-12 h-12 text-primary-foreground group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-foreground mb-2 leading-tight">{step.title}</h3>
                  
                  {/* Arrow to the next item (only on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 translate-x-1/2 z-20 text-primary-foreground">
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
      </div>
    </section>
  );
}
