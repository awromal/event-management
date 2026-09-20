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
      { src: '/templates/birthday_1.jpg', alt: 'Birthday Template 1', label: 'Playful' },
      { src: '/templates/birthday_2.jpg', alt: 'Birthday Template 2', label: 'Elegant Dark' },
      { src: '/templates/birthday_3.jpg', alt: 'Birthday Template 3', label: 'Vintage Retro' },
      { src: '/templates/birthday_4_classy.jpg', alt: 'Birthday Template 4', label: 'Minimalist Luxury' },
    ]
  },
  wedding: {
    title: 'Wedding Templates',
    description: 'Discover timeless and romantic wedding invitations for your special day.',
    images: [
      { src: '/templates/wedding_1.jpg', alt: 'Wedding Template 1', label: 'Floral Botanical' },
      { src: '/templates/wedding_2.jpg', alt: 'Wedding Template 2', label: 'Classic Formal' },
      { src: '/templates/wedding_3.jpg', alt: 'Wedding Template 3', label: 'Regal Burgundy' },
      { src: '/templates/wedding_4.jpg', alt: 'Wedding Template 4', label: 'Hand-Drawn' },
    ]
  }
};

// Map template index to route name (birthday-sample-4 is stored as birthday-sample-4)
const templateRouteMap: Record<string, Record<number, string>> = {
  birthday: {
    0: 'birthday-sample-1',
    1: 'birthday-sample-2',
    2: 'birthday-sample-3',
    3: 'birthday-sample-4',
  },
  wedding: {
    0: 'wedding-sample-1',
    1: 'wedding-sample-2',
    2: 'wedding-sample-3',
    3: 'wedding-sample-4',
  }
};

export default async function EventTemplatePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const eventType = type.toLowerCase();
  
  if (eventType !== 'birthday' && eventType !== 'wedding') {
    notFound();
  }

  const data = templates[eventType as keyof typeof templates];
  const routeMap = templateRouteMap[eventType];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:underline font-medium text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-serif font-extrabold text-primary uppercase">
            {data.title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-foreground px-4">
            {data.description}
          </p>
        </div>

        {/* Gallery Grid — 1 col on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 mb-16 md:mb-24">
          {data.images.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-xl bg-card flex flex-col"
            >
              <div className="aspect-[4/5] relative w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Label */}
              <div className="px-4 py-3 bg-background border-t border-primary/10 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary/70">{img.label}</span>
              </div>

              {/* Hover overlay with Preview button */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Link 
                  href={`/templates/${routeMap[idx]}`}
                  className="bg-background text-primary px-5 py-2.5 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-sm hover:bg-primary hover:text-background"
                >
                  Preview Template
                </Link>
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
