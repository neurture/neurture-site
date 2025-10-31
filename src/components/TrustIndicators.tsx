"use client";

import Image from "next/image";

export default function TrustIndicators() {
  const partners = [
    {
      name: "Sweet Sobriety",
      logo: "/images/logos/sweet-sobriety-logo.png",
      alt: "Sweet Sobriety logo"
    },
    {
      name: "ElevenLabs",
      logo: "/images/logos/eleven-labs-logo.png",
      alt: "ElevenLabs logo"
    },
    {
      name: "The Adaptive Mind",
      logo: "/images/logos/adaptive-mind-logo.png",
      alt: "The Adaptive Mind logo"
    }
  ];

  const featured = [
    {
      name: "Mass General Brigham",
      logo: "/images/logos/Mass-General-Brigham-Logo.png",
      alt: "Mass General Brigham logo"
    },
    {
      name: "McLean Hospital",
      logo: "/images/logos/McLean_Hospital_logo.svg",
      alt: "McLean Hospital logo"
    }
  ];

  return (
    <section className="py-8 px-8 bg-gray-100">
      {/* Featured In Banner */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <h3 className="font-sans text-sm font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap">
            LOVED BY THERAPISTS AT
          </h3>
          {featured.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={item.logo}
                alt={item.alt}
                width={140}
                height={60}
                className="max-h-10 sm:max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}