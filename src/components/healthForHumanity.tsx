"use client";
import Image from "next/image";

export default function HealthForHumanitySection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:space-x-12">

        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 relative h-80 md:h-96">
          <Image
            src="https://altibbe.com/wp-content/uploads/2024/12/Health-for-Humanity.png"
            alt="Health for Humanity"
            fill
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative inline-block">
            Our Mission
            <span className="block w-12 h-1 bg-green-700 mt-2 rounded"></span>
          </h2>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At <span className="font-semibold text-gray-800">Altibbe</span>, we strive to empower individuals with <span className="text-green-700 font-medium">knowledge</span>, <span className="text-green-700 font-medium">tools</span>, and <span className="text-green-700 font-medium">transparency</span> to make informed health decisions.  
            <br /><br />
            By connecting consumers with health-focused producers, promoting <span className="italic text-gray-800">sustainable practices</span>, and championing well-being, we aim to create a world where <span className="font-semibold text-gray-800">health independence</span> is accessible to everyone.
          </p>
        </div>

      </div>
    </section>
  );
}
