import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-background overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl tracking-tight font-serif font-extrabold text-primary sm:text-5xl md:text-6xl max-w-4xl mx-auto uppercase">
          Craft the Perfect Invitation <br className="hidden sm:block" />
          <span>for Your Special Day</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground">
          Design and book custom cards for birthdays, weddings, receptions, and every memorable moment in between. Beautiful outcomes without the design skills.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#categories"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-primary-foreground bg-primary hover:bg-primary/90 shadow-sm transition-all duration-300 min-w-[200px]"
          >
            Browse Categories
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-base font-medium rounded-full text-primary bg-transparent hover:bg-primary/5 transition-all duration-300 min-w-[200px]"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-40">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-[30%] -right-[10%] w-[40%] h-[60%] rounded-full bg-primary/5 blur-3xl"></div>
      </div>
    </section>
  );
}
