"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';

import FAQ from "@/components/FAQ";
import PlatformCTA from "@/components/PlatformCTA";
import Rating from "@/components/Rating";

function AnimatedText() {
  const options = [
    "Reduce screen time",
    "Beat procrastination", 
    "Quit social media",
    "End doom scrolling",
    "Stop overthinking",
    "End binge eating",
    "Control spending",
    "Break bad habits",
    "Quit porn",
    "Stop smoking",
    "Control anger",
    "Stop stress eating",
    "Quit vaping",
    "Stop gambling",
    "Overcome addiction",
    "Break the cycle",
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
          initial={{ y: "100%", opacity: 0 }}     // from bottom
          animate={{ y: "0%", opacity: 1 }}       // to center
          exit={{ y: "-100%", opacity: 0 }}       // up & fade out
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="block whitespace-nowrap"
        >
          {options[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col pt-16 pb-0 px-8 items-center text-center gap-6 mb-0 w-full overflow-hidden">
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

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="font-serif font-bold text-[1.6rem] sm:text-[2.8rem] text-[#0a0a23] leading-[1.1] mb-2">
            <AnimatedText />
            <br />
            with{" "}
            <span className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">
              science-backed tools
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#6b7280] max-w-[650px] leading-[1.6] mb-2">
            Confront your cravings, track your progress, and build lasting
            change with methods used by expert clinicians around the world.
          </p>

          <div className="mb-2">
            <PlatformCTA />
          </div>

          <Rating />

          <div className="flex justify-center overflow-hidden h-[400px] mt-auto">
            <Image
              src="/images/iphone-se-screenshot-portrait.png"
              alt="Neurture app screenshot"
              width={1419}
              height={2796}
              className="h-[667px] w-[320px] object-cover rounded-[30px]"
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-[#f8f9fa] py-20 px-8 my-16">
        <div className="flex justify-center flex-wrap gap-8 max-w-[1200px] mx-auto">
          <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
            <h3 className="text-base text-[#333] mb-6 font-medium">
              App Store Review
            </h3>
            <p className="text-[1.2rem] leading-[1.6] text-[#333] mb-6 font-medium">
              &quot;I see this app as being something I will use to reach many
              of my goals and manage my habits.&quot;
            </p>
            <div className="text-[#ffc107] text-2xl tracking-wider">★★★★★</div>
          </div>

          <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
            <h3 className="text-base text-[#333] mb-6 font-medium">
              App Store Review
            </h3>
            <p className="text-[1.2rem] leading-[1.6] text-[#333] mb-6 font-medium">
              &quot;The UX feels welcoming, calming and comfortable. Its a safe
              space to validate my feelings and get the help I need. Highly
              recommend to anyone struggling with addictive behaviors like
              me.&quot;
            </p>
            <div className="text-[#ffc107] text-2xl tracking-wider">★★★★★</div>
          </div>

          <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
            <h3 className="text-base text-[#333] mb-6 font-medium">
              App Store Review
            </h3>
            <p className="text-[1.2rem] leading-[1.6] text-[#333] mb-6 font-medium">
              &quot;Finally a digestible, simple, AI-infused app to help me
              better myself in healthy manageable ways.&quot;
            </p>
            <div className="text-[#ffc107] text-2xl tracking-wider">★★★★★</div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="flex justify-center mb-8">
        <div className="bg-white p-12 text-center w-full max-w-[800px] mx-auto rounded-[5px] shadow-[0_0_10px_rgba(0,0,0,0.05)]">
          <iframe
            src="https://embeds.beehiiv.com/a11ad291-2228-4830-a16a-bfeb7e456919"
            data-test-id="beehiiv-embed"
            width="100%"
            height="320"
            className="border-2 border-[#e5e7eb] rounded-[4px] m-0 bg-transparent"
          />
        </div>
      </section>

      {/* Video Section */}
      <section className="my-16 text-center max-w-[1200px] mx-auto px-4">
        <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
          <iframe
            width="1100"
            height="619"
            src="https://www.youtube.com/embed/4bIgPUopX0g"
            title="Neurture: Learn your brain, change addictive habits"
            className="absolute top-0 left-0 w-full h-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="flex items-center justify-between max-w-[1200px] mx-auto my-24 px-8 gap-12">
        <div className="flex-1 text-center">
          <Image
            src="/images/picture-journal.png"
            alt="Smartphone taking picture of open journal"
            width={400}
            height={400}
            className="max-w-full h-auto rounded-[10px]"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-serif text-5xl text-[#0a0a23] mb-8 leading-[1.2]">
            Understand your brain, change your brain
          </h2>
          <ul className="features-list mb-8 space-y-4">
            <li>Courses reviewed by clinical psychologists (CBT, ACT, etc)</li>
            <li>
              Chat with the AI assistant to get out of your head or get specific
              recommendations for meditations or other resources
            </li>
            <li>Affirmations UI helps you change your thoughts</li>
            <li>Easily digitize handwritten journal entries</li>
          </ul>
          <div className="mt-8">
            <PlatformCTA />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Experts Section */}
      <section className="bg-[#f8f9fa] py-20 px-8 my-16 text-center">
        <h2 className="mb-12 text-[2.5rem] text-[#0a0a23]">
          Recommended by Clinical Experts
        </h2>
        <div className="flex justify-center flex-wrap gap-8 max-w-[1200px] mx-auto">
          <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-6">
              <Image
                src="/images/amanda.jpg"
                alt="Amanda Raybould"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[1.8rem] text-[#0a0a23] mb-4">
              Amanda Raybould, MSW, LICSW
            </h3>
            <div className="text-base text-[#6b7280] mb-6 font-normal">
              Arlington School
            </div>
            <p className="text-lg leading-[1.6] text-[#333]">
              &quot;The AI chat was validating and offered some helpful
              reframing, much like I would use with my clients. It then guided
              me to some helpful meditations. I was very impressed!&quot;
            </p>
          </div>

          <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-6">
              <Image
                src="/images/team/sarah.jpg"
                alt="Dr. Sarah Coe-Odess"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[1.8rem] text-[#0a0a23] mb-4">
              Dr. Sarah Coe-Odess
            </h3>
            <div className="text-base text-[#6b7280] mb-6 font-normal">
              Mass General Hospital
            </div>
            <p className="text-lg leading-[1.6] text-[#333]">
              &quot;Neurture is a valuable, evidence-based resource with
              structured tools that empower users to break unhealthy patterns
              and pursue a more intentional, fulfilling life.&quot;
            </p>
          </div>

          <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-6 bg-[#e5e7eb] flex items-center justify-center">
              <span className="text-3xl font-semibold text-[#6b7280]">AD</span>
            </div>
            <h3 className="text-[1.8rem] text-[#0a0a23] mb-4">
              Amanda Dean LMSW
            </h3>
            <p className="text-lg leading-[1.6] text-[#333]">
              &quot;Having access to evidence-based resources like urge-surfing
              is invaluable. Neurture complements that with personalized AI
              support which means users have access to affordable,
              acceptance-based care 24/7.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* QR Section */}
      <section className="py-20 px-8 text-center flex flex-col items-center mb-12">
        <div className="flex flex-col sm:flex-row justify-center gap-20 mb-8 w-full max-w-[800px]">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/app-store-qr.jpg"
              alt="App Store QR Code"
              width={220}
              height={220}
              className="w-[220px] h-auto hidden sm:block"
            />
            <a
              href="https://apps.apple.com/app/id6467687675"
              className="inline-flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-auto text-white bg-black hover:bg-neutral-900"
              aria-label="Download on the App Store"
            >
              <div className="mr-3">
                <svg viewBox="0 0 384 512" width="30" className="text-white">
                  <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                </svg>
              </div>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="-mt-1 font-sans text-xl font-semibold">App Store</div>
              </div>
            </a>
          </div>
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/play-store-qr.png"
              alt="Google Play QR Code"
              width={220}
              height={220}
              className="w-[220px] h-auto hidden sm:block"
            />
            <a
              href="https://play.google.com/store/apps/details?id=com.bradydowling.unshame"
              className="inline-flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-auto text-white bg-black hover:bg-neutral-900"
              aria-label="Get it on Google Play"
            >
              <div className="mr-3">
                <svg viewBox="30 336.7 120.9 129.2" width="30" aria-hidden="true">
                  <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"></path>
                  <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"></path>
                  <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"></path>
                  <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"></path>
                </svg>
              </div>
              <div>
                <div className="text-xs">GET IT ON</div>
                <div className="-mt-1 font-sans text-xl font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
