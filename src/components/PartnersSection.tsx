"use client";

import Image from "next/image";

export default function PartnersSection() {
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

  return (
    <section className="py-8 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <h3 className="font-sans text-sm font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap">
            OUR PARTNERS
          </h3>
          {partners.map((item, index) => (
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