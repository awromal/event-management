import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah & James',
    event: 'Wedding',
    text: "The invitation templates were absolutely stunning. We found exactly what we were looking for and our guests couldn't stop complementing the design. Highly recommended!",
  },
  {
    name: 'Michael T.',
    event: 'Birthday Party',
    text: "I needed a last-minute invitation for my daughter's sweet 16, and this was a lifesaver. Customizing it was incredibly easy and the digital RSVP tracking saved us so much time.",
  },
  {
    name: 'Elena R.',
    event: 'Baby Shower',
    text: "Beautiful designs with such attention to detail. It felt like a bespoke service without the huge price tag. The animations added a magical touch to the whole experience.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
            Loved by our clients
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-foreground/80">
            Don't just take our word for it. Here's what people are saying about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 sm:p-8 rounded-2xl shadow-sm border border-primary/10 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex text-amber-400 mb-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-6 flex-1 text-sm sm:text-base leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-primary text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-foreground/60 uppercase tracking-widest mt-0.5">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
