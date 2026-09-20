import React from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

export default function TemplateLoading() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        <Sparkles className="w-6 h-6 text-primary absolute inset-0 m-auto animate-pulse" />
      </div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">
        Loading Invitation Preview
      </h2>
      <p className="text-sm md:text-base text-foreground/70 max-w-sm">
        Preparing your interactive card experience with custom animations and details...
      </p>
    </div>
  );
}
