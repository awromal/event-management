"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, ArrowRight, Loader2 } from 'lucide-react';

interface TemplateCardProps {
  imageSrc: string;
  imageAlt: string;
  label: string;
  description: string;
  route: string;
  index: number;
}

export default function TemplateCard({
  imageSrc,
  imageAlt,
  label,
  description,
  route,
  index,
}: TemplateCardProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
  };

  return (
    <Link
      href={`/templates/${route}`}
      prefetch={true}
      onClick={handleClick}
      aria-label={`Preview ${label} invitation template`}
      className="group block relative rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.98] transform-gpu cursor-pointer"
    >
      {/* Cover Image Container */}
      <div className="aspect-[4/5] relative w-full overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={index < 2}
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Live Preview Badge - always visible in top-left */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-background/90 backdrop-blur-md text-foreground shadow-sm border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Preview
          </span>
        </div>

        {/* Instant 0ms Loading Overlay when tapped/clicked */}
        {isOpening && (
          <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-white gap-3 p-4 text-center animate-fadeIn">
            <Loader2 className="w-8 h-8 animate-spin text-white" />
            <span className="text-xs font-bold tracking-widest uppercase text-white">
              Opening Preview...
            </span>
          </div>
        )}

        {/* Desktop Hover Overlay */}
        <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center p-4">
          <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full font-bold shadow-2xl text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Eye className="w-4 h-4" />
              Preview Template
            </span>
          </div>
        </div>

        {/* Mobile "Tap to Preview" pill (Always visible on touch screens) */}
        <div className="md:hidden absolute bottom-3 right-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            Tap to Preview
          </span>
        </div>
      </div>

      {/* Card Info & Bottom Action Bar */}
      <div className="p-4 bg-background border-t border-primary/10 flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-serif font-bold text-base text-primary truncate group-hover:text-primary/90 transition-colors">
            {label}
          </h3>
          <p className="text-xs text-foreground/70 truncate mt-0.5">
            {description}
          </p>
        </div>

        {/* Action Button - clearly visible on all screen sizes */}
        <div className="shrink-0">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            <span className="hidden sm:inline">View</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
