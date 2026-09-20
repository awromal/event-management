import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Sparkles } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import TemplateCard from '@/components/TemplateCard';

const templates = {
  birthday: {
    title: 'Birthday Templates',
    description: 'Explore our vibrant and elegant collection of birthday invitation designs. Click any card to preview the full interactive experience.',
    images: [
      {
        src: '/templates/birthday_1.jpg',
        alt: 'Birthday Template 1',
        label: 'Playful',
        description: 'Vibrant balloons, confetti & cheerful vibes',
      },
      {
        src: '/templates/birthday_2.jpg',
        alt: 'Birthday Template 2',
        label: 'Elegant Dark',
        description: 'Neon glow, glassmorphism & nocturnal beats',
      },
      {
        src: '/templates/birthday_3.jpg',
        alt: 'Birthday Template 3',
        label: 'Vintage Retro',
        description: 'Aged parchment, sepia cakes & nostalgic style',
      },
      {
        src: '/templates/birthday_4_classy.jpg',
        alt: 'Birthday Template 4',
        label: 'Minimalist Luxury',
        description: 'Champagne gold, clean serif & editorial elegance',
      },
    ]
  },
  wedding: {
    title: 'Wedding Templates',
    description: 'Discover timeless and romantic wedding invitations for your special day. Click any card to preview the full interactive experience.',
    images: [
      {
        src: '/templates/wedding_1.jpg',
        alt: 'Wedding Template 1',
        label: 'Floral Botanical',
        description: 'Dusty rose peonies & romantic eucalyptus',
      },
      {
        src: '/templates/wedding_2.jpg',
        alt: 'Wedding Template 2',
        label: 'Classic Formal',
        description: 'Timeless monogram crest, gold borders & pure white',
      },
      {
        src: '/templates/wedding_3.jpg',
        alt: 'Wedding Template 3',
        label: 'Regal Burgundy',
        description: 'Rich velvet tones, gold mandalas & rose petals',
      },
      {
        src: '/templates/wedding_4.jpg',
        alt: 'Wedding Template 4',
        label: 'Hand-Drawn',
        description: 'Whimsical love doodles & hand-crafted romance',
      },
    ]
  }
};

// Map template index to route name
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
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:underline font-medium text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Click any card below to open interactive live preview</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-serif font-extrabold text-primary uppercase">
            {data.title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-foreground px-4">
            {data.description}
          </p>
        </div>

        {/* Gallery Grid — 1 col mobile, 2 cols sm, 4 cols lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {data.images.map((img, idx) => (
            <TemplateCard
              key={idx}
              index={idx}
              imageSrc={img.src}
              imageAlt={img.alt}
              label={img.label}
              description={img.description}
              route={routeMap[idx]}
            />
          ))}
        </div>
      </section>

      {/* Booking Form specifically for this event */}
      <BookingForm defaultEventType={eventType} />
    </main>
  );
}
