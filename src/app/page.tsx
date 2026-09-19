"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import EventCategories from "@/components/EventCategories";
import HowItWorks from "@/components/HowItWorks";
import EventSections from "@/components/EventSections";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState("");

  return (
    <main className="min-h-screen">
      <Hero />
      <EventCategories />
      <HowItWorks />
      <EventSections onSelectEvent={setSelectedEvent} />
      <BookingForm defaultEventType={selectedEvent} />
      <Footer />
    </main>
  );
}
