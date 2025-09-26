"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[35rem] rounded-md flex flex-col antialiased bg-gray-50 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10">
        What People Say About Us
      </h2>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Altibbe helped me understand what truly organic food means. I feel healthier and more confident in my choices every day.",
    name: "Sofia R.",
    title: "Wellness Enthusiast",
  },
  {
    quote:
      "Transparency in the food industry is so important. With Altibbe, I finally know where my food is coming from.",
    name: "David L.",
    title: "Nutrition Coach",
  },
  {
    quote:
      "Their dedication to organic certification gave me peace of mind. It’s a brand that actually practices what it preaches.",
    name: "Emily T.",
    title: "Mother of Two",
  },
  {
    quote:
      "Altibbe’s mission of ‘Health for Humanity’ really resonates with me. It feels like more than just food—it’s a movement.",
    name: "Rajesh K.",
    title: "Entrepreneur",
  },
  {
    quote:
      "From farm to table, the process is transparent and authentic. I’ve never felt so connected to what I eat.",
    name: "Lina M.",
    title: "Organic Lifestyle Blogger",
  },
];
