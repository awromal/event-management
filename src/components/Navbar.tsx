"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowLeft, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Birthday', href: '/events/birthday' },
  { label: 'Wedding', href: '/events/wedding' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const pathname = usePathname() || '';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isTemplatePreview = pathname.startsWith('/templates/');
  const isWeddingTemplate = pathname.includes('wedding');
  const isBirthdayTemplate = pathname.includes('birthday');
  
  const backHref = isWeddingTemplate
    ? '/events/wedding'
    : isBirthdayTemplate
    ? '/events/birthday'
    : '/';
    
  const categoryName = isWeddingTemplate
    ? 'Wedding'
    : isBirthdayTemplate
    ? 'Birthday'
    : 'Cards';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change / resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile drawer when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Dedicated Preview Bar when previewing an invitation template
  if (isTemplatePreview) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-md">
        <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16 gap-2">
            {/* Back Button */}
            <Link
              href={backHref}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-background border border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm active:scale-95 shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>
                <span className="hidden sm:inline">Back to </span>{categoryName}<span className="hidden md:inline"> Cards</span>
              </span>
            </Link>

            {/* Center Live Indicator (Visible on tablet & desktop) */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-primary/15 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-foreground/80 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Preview</span>
            </div>

            {/* Book / Customize CTA */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm active:scale-95 shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 hidden sm:inline" />
              <span>Customize</span>
            </Link>
          </div>
        </nav>
      </header>
    );
  }

  // Standard Main Navbar
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-primary/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl sm:text-2xl font-serif font-bold text-primary tracking-tight">
              Lumina Cards
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              className="px-5 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-primary rounded-md hover:bg-primary/5 transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-background border-b border-primary/20 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-2.5 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 pb-1">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center px-6 py-2.5 font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
