import Image from 'next/image';


import FAQ from '@/components/FAQ';
import PlatformCTA from '@/components/PlatformCTA';

export default function HomePage() {
  return (
    <>
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row py-[5%] px-8 items-center justify-between gap-8 mb-8 max-w-[1200px] mx-auto">
          <div className="flex-1 order-1 lg:order-1">
            <h1 className="font-serif font-bold text-[2.5rem] sm:text-[3rem] text-[#0a0a23] mb-6 leading-[1.2]">
              Break habits with science and self-compassion
            </h1>
            <div className="mb-4 lg:hidden">
              <PlatformCTA />
            </div>
            <div className="flex items-center justify-center gap-2 mb-6 text-sm text-[#6b7280] text-center lg:hidden">
              <div className="flex items-center gap-1">
                <span className="text-[#ffc107]">★★★★★</span>
                <span className="font-medium">4.7</span>
              </div>
              <span>•</span>
              <span>App Store Rating</span>
            </div>
            <ul className="features-list mb-8 space-y-4">
              <li>
                Learn how to quit or reduce behaviors using research-based resources
              </li>
              <li>
                Get support from Neurture's AI coach: get out of your head, talk through your feelings, apply research to your specific situation
              </li>
              <li>
                Develop and maintain a personal plan to break habits and address addictive behaviors
              </li>
            </ul>
            <div className="hidden lg:block mb-4">
              <PlatformCTA />
            </div>
            <div className="hidden lg:flex items-center justify-center gap-2 mb-6 text-sm text-[#6b7280] text-center">
              <div className="flex items-center gap-1">
                <span className="text-[#ffc107]">★★★★★</span>
                <span className="font-medium">4.7</span>
              </div>
              <span>•</span>
              <span>App Store Rating</span>
            </div>
          </div>
          <div className="flex-1 flex justify-center order-2 lg:order-2">
            <Image
              src="/images/iPhone-13.png"
              alt="Neurture app screenshot on iPhone"
              width={400}
              height={600}
              className="max-w-full h-auto max-h-[600px] w-auto"
            />
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-[#f8f9fa] py-20 px-8 my-16">
          <div className="flex justify-center flex-wrap gap-8 max-w-[1200px] mx-auto">
            <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
              <h3 className="text-base text-[#333] mb-6 font-medium">App Store Review</h3>
              <p className="text-[1.2rem] leading-[1.6] text-[#333] mb-6 font-medium">
                "I see this app as being something I will use to reach many of my goals and manage my habits."
              </p>
              <div className="text-[#ffc107] text-2xl tracking-wider">★★★★★</div>
            </div>

            <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
              <h3 className="text-base text-[#333] mb-6 font-medium">App Store Review</h3>
              <p className="text-[1.2rem] leading-[1.6] text-[#333] mb-6 font-medium">
                "The UX feels welcoming, calming and comfortable. Its a safe space to validate my feelings and get the help I need. Highly recommend to anyone struggling with addictive behaviors like me."
              </p>
              <div className="text-[#ffc107] text-2xl tracking-wider">★★★★★</div>
            </div>

            <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
              <h3 className="text-base text-[#333] mb-6 font-medium">App Store Review</h3>
              <p className="text-[1.2rem] leading-[1.6] text-[#333] mb-6 font-medium">
                "Finally a digestible, simple, AI-infused app to help me better myself in healthy manageable ways."
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
              <li>
                Courses reviewed by clinical psychologists (CBT, ACT, etc)
              </li>
              <li>
                Chat with the AI assistant to get out of your head or get specific recommendations for meditations or other resources
              </li>
              <li>
                Affirmations UI helps you change your thoughts
              </li>
              <li>
                Easily digitize handwritten journal entries
              </li>
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
          <h2 className="mb-12 text-[2.5rem] text-[#0a0a23]">Recommended by Clinical Experts</h2>
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
              <h3 className="text-[1.8rem] text-[#0a0a23] mb-4">Amanda Raybould, MSW, LICSW</h3>
              <div className="text-base text-[#6b7280] mb-6 font-normal">Arlington School</div>
              <p className="text-lg leading-[1.6] text-[#333]">
                "The AI chat was validating and offered some helpful reframing, much like I would use with my clients. It then guided me to some helpful meditations. I was very impressed!"
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
              <h3 className="text-[1.8rem] text-[#0a0a23] mb-4">Dr. Sarah Coe-Odess</h3>
              <div className="text-base text-[#6b7280] mb-6 font-normal">Mass General Hospital</div>
              <p className="text-lg leading-[1.6] text-[#333]">
                "Neurture is a valuable, evidence-based resource with structured tools that empower users to break unhealthy patterns and pursue a more intentional, fulfilling life."
              </p>
            </div>

            <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
              <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-6 bg-[#e5e7eb] flex items-center justify-center">
                <span className="text-3xl font-semibold text-[#6b7280]">AD</span>
              </div>
              <h3 className="text-[1.8rem] text-[#0a0a23] mb-4">Amanda Dean LMSW</h3>
              <p className="text-lg leading-[1.6] text-[#333]">
                "Having access to evidence-based resources like urge-surfing is invaluable. Neurture complements that with personalized AI support which means users have access to affordable, acceptance-based care 24/7."
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
                className="w-[220px] h-auto"
              />
              <a href="https://apps.apple.com/app/id6467687675" className="flex justify-center">
                <Image
                  src="/images/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-[58px] w-auto"
                />
              </a>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Image
                src="/images/play-store-qr.png"
                alt="Google Play QR Code"
                width={220}
                height={220}
                className="w-[220px] h-auto"
              />
              <a href="https://play.google.com/store/apps/details?id=com.bradydowling.unshame" className="flex justify-center">
                <Image
                  src="/images/get-it-on-google-play.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-[58px] w-auto"
                />
              </a>
            </div>
          </div>
        </section>
    </>
  );
}
