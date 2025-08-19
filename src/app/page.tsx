"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import VideoSection from "@/components/VideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExpertsSection from "@/components/ExpertsSection";
import QRSection from "@/components/QRSection";

function AnimatedText() {
  const options = [
    "Break habits",
    "Stop stress eating",
    "Reduce screen time",
    "Quit porn",
    "Overcome addiction",
    "Quit alcohol",
    "Stop smoking",
    "Quit doom scrolling",
    "Control spending",
    "Quit vaping",
    "Break the cycle",
    "Stop gambling",
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % options.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative inline-block h-[1.2em] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={options[i]}
          initial={{ y: "100%", opacity: 0 }} // from bottom
          animate={{ y: "0%", opacity: 1 }} // to center
          exit={{ y: "-100%", opacity: 0 }} // up & fade out
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="block whitespace-nowrap"
        >
          {options[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function HomePage() {
  const heroTitle = (
    <>
      <AnimatedText />
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
    "Courses reviewed by clinical psychologists (CBT, ACT, etc)",
    "Chat with the AI assistant to get out of your head or get specific recommendations for meditations or other resources",
    "Affirmations UI helps you change your thoughts",
    "Easily digitize handwritten journal entries"
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
      <HeroSection
        title={heroTitle}
        subtitle="Confront your cravings, track your progress, and build lasting change with methods used by expert clinicians around the world."
      />

      <ReviewsSection reviews={reviews} />

      <VideoSection 
        videoId="4bIgPUopX0g"
        title="Neurture: Learn your brain, change addictive habits"
      />

      <FeaturesSection
        title="Understand your brain, change your brain"
        features={features}
        imageSrc="/images/picture-journal.png"
        imageAlt="Smartphone taking picture of open journal"
      />

      <FAQ />

      <ExpertsSection
        title="Recommended by Clinical Experts"
        experts={experts}
      />

      <QRSection />
    </>
  );
}