"use client";

import Image from "next/image";
import { ReactNode } from "react";
import PlatformCTA from "./PlatformCTA";
import Rating from "./Rating";

interface HeroSectionProps {
  title: ReactNode;
  subtitle: string;
  showPhone?: boolean;
  background?: "grid" | "none";
  centerAlign?: boolean;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  showPhone = true, 
  background = "grid",
  centerAlign = true 
}: HeroSectionProps) {
  return (
    <section className={`relative flex flex-col pt-12 sm:pt-16 pb-0 px-8 items-center ${centerAlign ? 'text-center' : ''} gap-6 mb-0 w-full overflow-hidden`}>
      {background === "grid" && (
        <>
          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                  linear-gradient(#0a0a23 1px, transparent 1px),
                  linear-gradient(90deg, #0a0a23 1px, transparent 1px)
                `,
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Bottom Gradient */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(63,178,129,0.02) 0%, rgba(20,15,53,0.15) 100%)",
            }}
          ></div>
        </>
      )}

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-serif font-bold text-[1.6rem] sm:text-[2.8rem] text-[#0a0a23] leading-[1.1] mb-3">
          {title}
        </h1>

        <p className="text-base sm:text-xl text-[#6b7280] max-w-[650px] leading-[1.6] mb-6">
          {subtitle}
        </p>

        <div className="mb-4 w-full">
          <PlatformCTA />
        </div>

        <div className="mb-6">
          <Rating />
        </div>

        {showPhone && (
          <div className="flex justify-center overflow-hidden h-[400px] mt-auto">
            <Image
              src="/images/iphone-se-screenshot-portrait.png"
              alt="Neurture app screenshot"
              width={1419}
              height={2796}
              className="h-[667px] w-[320px] object-cover rounded-[30px]"
            />
          </div>
        )}
      </div>
    </section>
  );
}