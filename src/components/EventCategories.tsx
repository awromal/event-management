import React from 'react';
import { Cake, Heart, GlassWater, Home } from 'lucide-react';

const categories = [
  {
    title: 'Birthday',
    description: 'Celebrate another year with fun and personalized birthday invitations.',
    icon: Cake,
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
  },
  {
    title: 'Wedding',
    description: 'Elegant and timeless designs for your special day.',
    icon: Heart,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
  },
  {
    title: 'Reception',
    description: 'Invite your loved ones to join the celebration with style.',
    icon: GlassWater,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
  },
  {
    title: 'House Warming',
    description: 'Welcome friends and family to your new home with warm invites.',
    icon: Home,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
];

export default function EventCategories() {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-stone-900 sm:text-4xl">
            Invitations for Every Occasion
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Browse our curated collection of custom card designs tailored perfectly for your special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className={`p-4 rounded-full ${category.bgColor} ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{category.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
