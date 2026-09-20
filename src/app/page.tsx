"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import EventCategories from "@/components/EventCategories";
import HowItWorks from "@/components/HowItWorks";
import EventSections from "@/components/EventSections";
import ReadyToInvite from "@/components/ReadyToInvite";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState("");

  return (
    <main className="min-h-screen">
      {/* 1. Hero — "Every celebration starts here." */}
      <Hero />

      {/* 2. How It Works — "Pick your design / Make it yours / Send it" */}
      <HowItWorks />

      {/* 3. Event Categories — "Made for your moments." */}
      <EventCategories />

      {/* 4. Event Sections with sample cards */}
      <EventSections onSelectEvent={setSelectedEvent} />

      {/* 5. Ready to invite? */}
      <ReadyToInvite />

      {/* 6. Booking Form */}
      <BookingForm defaultEventType={selectedEvent} />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
