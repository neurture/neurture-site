import Image from "next/image";
import PlatformCTA from "./PlatformCTA";

interface FeaturesSectionProps {
  title: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function FeaturesSection({ title, features, imageSrc, imageAlt }: FeaturesSectionProps) {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-[1200px] mx-auto my-24 px-8 gap-12">
      <div className="flex-1 text-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className="max-w-full h-auto rounded-[10px]"
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