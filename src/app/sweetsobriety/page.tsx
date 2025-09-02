"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import FAQ from "@/components/FAQ";
import SweetSobrietyHeroSection from "@/components/SweetSobrietyHeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import VideoSection from "@/components/VideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExpertsSection from "@/components/ExpertsSection";
import SweetSobrietyQRSection from "@/components/SweetSobrietyQRSection";

function FoodAnimatedText() {
  const options = [
    "Stop emotional eating",
    "Break binge cycles",
    "Overcome food addiction",
    "End stress eating", 
    "Stop overeating",
    "Break food habits",
    "Control cravings",
    "Stop comfort eating",
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % options.length), 3000);
    return () => clearInterval(t);
  }, [options.length]);

  return (
    <div className="relative inline-block h-[1.2em] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={options[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="block whitespace-nowrap"
        >
          {options[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function SweetSobrietyPage() {
  const heroTitle = (
    <>
      <FoodAnimatedText />
      <br />
      with{" "}
      <span className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">
        science-backed tools
      </span>
    </>
  );

  const reviews = [
    {
      text: "I see this app as being something I will use to reach many of my goals and manage my habits."
    },
    {
      text: "The UX feels welcoming, calming and comfortable. Its a safe space to validate my feelings and get the help I need. Highly recommend to anyone struggling with addictive behaviors like me."
    },
    {
      text: "Finally a digestible, simple, AI-infused app to help me better myself in healthy manageable ways."
    }
  ];

  const features = [
    "Evidence-based courses on emotional eating, binge eating recovery, and mindful eating practices",
    "AI-powered conversations to explore food triggers, process difficult emotions, and develop personalized coping strategies", 
    "Affirmations and mindset tools specifically designed to overcome food guilt and build body positivity",
    "Track your eating patterns, emotions, and progress in your digital food and mood journal"
  ];

  const experts = [
    {
      name: "Amanda Raybould",
      title: "Amanda Raybould, MSW, LICSW",
      organization: "Arlington School",
      quote: "The AI chat was validating and offered some helpful reframing, much like I would use with my clients. It then guided me to some helpful meditations. I was very impressed!",
      imageSrc: "/images/amanda.jpg"
    },
    {
      name: "Dr. Sarah Coe-Odess",
      title: "Dr. Sarah Coe-Odess",
      organization: "Mass General Hospital",
      quote: "Neurture is a valuable, evidence-based resource with structured tools that empower users to break unhealthy patterns and pursue a more intentional, fulfilling life.",
      imageSrc: "/images/team/sarah.jpg"
    },
    {
      name: "Amanda Dean",
      title: "Amanda Dean LMSW",
      quote: "Having access to evidence-based resources like urge-surfing is invaluable. Neurture complements that with personalized AI support which means users have access to affordable, acceptance-based care 24/7.",
      initials: "AD"
    }
  ];

  return (
    <>
      <SweetSobrietyHeroSection
        title={heroTitle}
        subtitle="Confront your cravings, track your progress, and build lasting change with methods used by expert clinicians around the world."
      />

      <ReviewsSection reviews={reviews} />

      <VideoSection 
        videoId="4bIgPUopX0g"
        title="Neurture: Learn your brain, change addictive habits"
      />

      <FeaturesSection
        title="Understand your hunger, transform your relationship with food"
        features={features}
        imageSrc="/images/picture-journal.png"
        imageAlt="Smartphone taking picture of open journal"
      />

      <FAQ />

      <ExpertsSection
        title="Recommended by Clinical Experts"
        experts={experts}
      />

      <SweetSobrietyQRSection />
    </>
  );
}