import React from 'react';
import Link from 'next/link';
import { Cake, Heart, GlassWater, Home } from 'lucide-react';

const categories = [
  {
    title: 'Birthday',
    description: 'Celebrate another year with fun and personalized birthday invitations.',
    icon: Cake,
    color: 'text-primary',
    bgColor: 'bg-transparent',
    href: '/events/birthday',
  },
  {
    title: 'Wedding',
    description: 'Elegant and timeless designs for your special day.',
    icon: Heart,
    color: 'text-primary',
    bgColor: 'bg-transparent',
    href: '/events/wedding',
  },
];

export default function EventCategories() {
  return (
    <section id="categories" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary sm:text-4xl uppercase tracking-wider">
            Invitations for Every Occasion
          </h2>
          <p className="mt-4 text-lg text-foreground">
            Browse our curated collection of custom card designs tailored perfectly for your special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={index}
                href={category.href}
                className="group flex flex-col items-center text-center p-8 rounded-lg bg-background border border-primary hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
              >
                <div className={`p-4 rounded-full border border-primary ${category.bgColor} ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" strokeWidth={1} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-wide">{category.title}</h3>
                <p className="text-foreground leading-relaxed text-sm">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
