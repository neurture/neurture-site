import Image from "next/image";
import PlatformCTA from "./PlatformCTA";

interface FeaturesSectionProps {
  title: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function FeaturesSection({
  title,
  features,
  imageSrc,
  imageAlt,
}: FeaturesSectionProps) {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-[1200px] mx-auto my-24 px-8 gap-12">
      <div className="flex-1 text-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={1334}
          className="max-w-full h-auto max-h-[500px] object-contain rounded-[10px]"
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      <div className="flex-1">
        <h2 className="font-serif text-5xl text-[#0a0a23] mb-8 leading-[1.2]">
          {title}
        </h2>
        <ul className="features-list mb-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="mt-8">
          <PlatformCTA />
        </div>
      </div>
    </section>
  );
}
