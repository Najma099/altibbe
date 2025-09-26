"use client";
import Image from "next/image";

export default function HedamoSection() {
  return (
    <section className="bg-gray-50 py-16" id="hedamo">
      <div className="max-w-6xl mx-auto px-6 space-y-12">

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-start">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Transparency & On-Site Verification
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-4">
              Hedamo, a sub-brand of Altibbe Inc., sets the benchmark for transparency reporting and health reviews across organic farms, food producers, and wellness brands.
            </p>
            <ul className="text-gray-600 text-sm list-decimal list-inside space-y-2 mb-4">
              <li>
                <span className="font-semibold">Consulting for Organic Farms:</span> Tailored strategies to overcome challenges and seize opportunities.
              </li>
              <li>
                <span className="font-semibold">Health-Centered Product Reporting:</span> Guidance on product innovation and differentiation.
              </li>
              <li>
                <span className="font-semibold">Global Market Access:</span> Facilitating international growth through strategic partnerships.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 relative h-64 md:h-80">
            <Image
              src="/organic_farming.jpg"
              alt="Transparency & Verification"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-start">
          <div className="md:w-1/2 relative h-64 md:h-80 mb-6 md:mb-0">
            <Image
              src="/examing-product.webp"
              alt="Transparent Future"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              A Transparent Future
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-4">
              Hedamo empowers health-focused brands with trusted review and labeling services. Our Platinum, Gold, and Green labels highlight sustainability and quality.
            </p>
            <p className="text-gray-600 text-sm mb-4">
              QR codes link to in-depth reports, ensuring complete transparency about health benefits, production methods, and sustainability.
            </p>
            <p className="text-gray-600 text-sm mb-6">
              Using blockchain and AI, we track products from farm to consumer, enabling informed, health-positive decisions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
