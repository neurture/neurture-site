import Image from 'next/image';


import FAQ from '@/components/FAQ';
import PlatformCTA from '@/components/PlatformCTA';

export default function SweetSobrietyPage() {
  return (
    <>
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row py-[5%] px-8 items-center justify-between gap-8 mb-8 max-w-[1200px] mx-auto">
          <div className="flex-1 order-1 lg:order-1">
            <h1 className="font-serif font-bold text-[2.5rem] sm:text-[3rem] text-[#0a0a23] mb-6 leading-[1.2]">
              Break free from food addiction and emotional eating
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
                Learn evidence-based strategies to overcome overeating, emotional eating, and food cravings
              </li>
              <li>
                Get personalized support from Neurture's AI coach to identify triggers, process emotions, and develop healthier coping mechanisms
              </li>
              <li>
                Create a sustainable plan to break the cycle of food addiction and build a healthy relationship with eating
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
                "This app has been a game-changer for my relationship with food. I finally understand my emotional eating triggers."
              </p>
              <div className="text-[#ffc107] text-2xl tracking-wider">★★★★★</div>
            </div>

            <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
              <h3 className="text-base text-[#333] mb-6 font-medium">App Store Review</h3>
              <p className="text-[1.2rem] leading-[1.6] text-[#333] mb-6 font-medium">
                "The mindful eating techniques and craving management tools have helped me break free from years of binge eating patterns."
              </p>
              <div className="text-[#ffc107] text-2xl tracking-wider">★★★★★</div>
            </div>

            <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
              <h3 className="text-base text-[#333] mb-6 font-medium">App Store Review</h3>
              <p className="text-[1.2rem] leading-[1.6] text-[#333] mb-6 font-medium">
                "No more guilt and shame around food. The self-compassion approach has transformed how I view my eating habits."
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
              Understand your hunger, transform your relationship with food
            </h2>
            <ul className="features-list mb-8 space-y-4">
              <li>
                Evidence-based courses on emotional eating, binge eating recovery, and mindful eating practices
              </li>
              <li>
                AI-powered conversations to explore food triggers, process difficult emotions, and develop personalized coping strategies
              </li>
              <li>
                Affirmations and mindset tools specifically designed to overcome food guilt and build body positivity
              </li>
              <li>
                Track your eating patterns, emotions, and progress in your digital food and mood journal
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
          <h2 className="mb-12 text-[2.5rem] text-[#0a0a23]">Recommended by Eating Disorder Specialists</h2>
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
                "The mindful eating approaches and emotional regulation tools in Neurture align perfectly with evidence-based eating disorder treatment principles."
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
                "Neurture provides accessible, science-backed resources for breaking unhealthy eating patterns and building a compassionate relationship with food and body."
              </p>
            </div>

            <div className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
              <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-6 bg-[#e5e7eb] flex items-center justify-center">
                <span className="text-3xl font-semibold text-[#6b7280]">AD</span>
              </div>
              <h3 className="text-[1.8rem] text-[#0a0a23] mb-4">Amanda Dean LMSW</h3>
              <p className="text-lg leading-[1.6] text-[#333]">
                "The combination of urge-surfing techniques and 24/7 AI support makes Neurture an invaluable tool for anyone struggling with emotional eating and food cravings."
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