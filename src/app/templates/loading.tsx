import React from 'react';
import { Loader2 } from 'lucide-react';

export default function TemplateLoading() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
      </div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">
        Loading Invitation Preview
      </h2>
      <p className="text-sm md:text-base text-foreground/70 max-w-sm">
        Getting your template ready...
      </p>
    </div>
  );
}
