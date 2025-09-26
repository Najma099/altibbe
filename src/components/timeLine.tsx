"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedTimeline() {
  const controls = useAnimation();
  const events = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Hedamo was born to address transparency challenges in health systems."
    },
    {
      year: "2021",
      title: "Food as Medicine",
      description: "Promoting healthier lifestyles and sustainable practices."
    },
    {
      year: "2023",
      title: "Setting Standards",
      description: "Blockchain & analytics created benchmarks for transparency."
    },
    {
      year: "2024",
      title: "Transparent Choices",
      description: "QR labels and reports empower informed consumer decisions."
    }
  ];

  useEffect(() => {
    controls.start({ width: "100%" });
  }, [controls]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          Altibbe Story Timeline
        </h2>

        <div className="relative">
          {/* Container for the timeline */}
          <div className="flex justify-between items-start relative">
            {/* The animated line - positioned to go through center of dots */}
            <div className="absolute top-[10px] left-0 right-0 h-0.5 bg-gray-300">
              <motion.div
                initial={{ width: 0 }}
                animate={controls}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="h-0.5 bg-green-700 origin-left"
              />
            </div>

            {/* Timeline dots & content */}
            {events.map((event, index) => (
              <div key={index} className="relative flex-1 text-center z-10">
                {/* Smaller dot - positioned so its center aligns with the line */}
                <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 bg-white">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.8, duration: 0.5 }}
                      className="w-full h-full rounded-full bg-green-700"
                    />
                  </div>
                </div>

                {/* Event content - positioned below the dot */}
                <div className="pt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.8, duration: 0.5 }}
                    className="px-2"
                  >
                    <p className="text-green-700 font-bold text-lg mb-2">{event.year}</p>
                    <h4 className="text-gray-800 font-semibold mb-2">{event.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}