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
    <section className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-stone-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Getting your custom invitations designed and delivered is as easy as 1-2-3.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-stone-200" aria-hidden="true" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-stone-50 shadow-md flex items-center justify-center mb-6 relative">
                    <Icon className="w-10 h-10 text-primary" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center shadow-sm">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h3>
                  <p className="text-stone-600 max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
