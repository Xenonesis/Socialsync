import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["stunning", "responsive", "modern", "engaging"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Social Sync
      </div>
    </div>
  );
}

export function BusinessFlipWords() {
  const businessWords = ["websites", "brands", "experiences", "solutions"];

  return (
    <div className="text-center">
      <div className="text-4xl md:text-6xl font-bold text-foreground">
        We create amazing
        <FlipWords words={businessWords} className="text-primary" />
        for your business
      </div>
    </div>
  );
}

export function ServicesFlipWords() {
  const serviceWords = ["Web Development", "Social Media", "Brand Strategy", "Digital Marketing"];

  return (
    <div className="text-2xl md:text-3xl font-semibold text-muted-foreground">
      Expert in
      <FlipWords words={serviceWords} className="text-primary font-bold" duration={2500} />
    </div>
  );
}