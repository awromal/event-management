import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

const templates = {
  birthday: {
    title: 'Birthday Templates',
    description: 'Explore our vibrant and elegant collection of birthday invitation designs.',
    images: [
      { src: '/templates/birthday_1.jpg', alt: 'Birthday Template 1' },
      { src: '/templates/birthday_2.jpg', alt: 'Birthday Template 2' },
      { src: '/templates/birthday_3.jpg', alt: 'Birthday Template 3' },
    ]
  },
  wedding: {
    title: 'Wedding Templates',
    description: 'Discover timeless and romantic wedding invitations for your special day.',
    images: [
      { src: '/templates/wedding_1.jpg', alt: 'Wedding Template 1' },
      { src: '/templates/wedding_2.jpg', alt: 'Wedding Template 2' },
      { src: '/templates/wedding_3.jpg', alt: 'Wedding Template 3' },
    ]
  }
};

export default async function EventTemplatePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const eventType = type.toLowerCase();
  
  if (eventType !== 'birthday' && eventType !== 'wedding') {
    notFound();
  }

  const data = templates[eventType as keyof typeof templates];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/#events" className="inline-flex items-center text-primary hover:underline font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Events
          </Link>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl tracking-tight font-serif font-extrabold text-primary sm:text-5xl uppercase">
            {data.title}
          </h1>
          <p className="mt-4 text-lg text-foreground">
            {data.description}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {data.images.map((img, idx) => (
            <div key={idx} className="group relative rounded-lg overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-xl bg-card">
              <div className="aspect-[4/5] relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <a 
                  href="#contact"
                  className="bg-background text-primary px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer hover:bg-primary hover:text-background"
                >
                  Select Design
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form specifically for this event */}
      <BookingForm defaultEventType={eventType} />
    </main>
  );
}
