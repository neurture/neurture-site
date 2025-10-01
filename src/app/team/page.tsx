import Image from "next/image";

export default function TeamPage() {
  return (
    <main className="bg-[#f8f9fa]">
      <section className="max-w-[1000px] mx-auto my-16 px-8">
        <h1 className="text-[3rem] text-[#0a0a23] text-center mb-12 font-serif">Meet the Team</h1>

        <section id="funding-transparency" className="bg-white rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.05)] p-6 mb-12">
          <h2 className="text-[1.5rem] text-[#0a0a23] mb-3 font-serif">Funding & Conflicts of Interest</h2>
          <p className="text-[1.1rem] leading-[1.6] text-[#333] mb-3">
            Neurture has no outside funding or advertising. Revenue comes from user subscriptions.
            In some cases, if you install via a partner link, we may share a portion of revenue with that
            partner. Partners do not access health data and have no editorial control over our content
            or recommendations. We have no conflicts of interest to disclose.
          </p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-8">
          <div className="bg-white rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
            <div className="pt-6 px-6">
              <Image
                src="/images/team/brady.png"
                alt="Brady Dowling"
                width={800}
                height={260}
                className="w-full aspect-square object-cover rounded-[30px]"
              />
            </div>
            <div className="p-6">
              <h2 className="text-[1.5rem] text-[#0a0a23] mb-1 font-serif">Brady Dowling</h2>
              <p className="text-[#6b7280] font-medium mb-3">Founder</p>
              <p className="text-[1.1rem] leading-[1.6] text-[#333]">
                Brady founded Neurture, after working as a software engineer for 10+ years, including time at Amazon, Shopify, and Modern Health. Having felt a strong pull toward technology his whole life, it&apos;s his personal mission to bring research-based digital resources to the habits and addictions space. Sobriety trackers and motivational quote apps are not going to cut it.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
            <div className="pt-6 px-6">
              <Image
                src="/images/team/sarah.jpg"
                alt="Sarah Coe-Odess"
                width={800}
                height={260}
                className="w-full aspect-square object-cover rounded-[30px]"
              />
            </div>
            <div className="p-6">
              <h2 className="text-[1.5rem] text-[#0a0a23] mb-1 font-serif">Sarah Coe-Odess</h2>
              <p className="text-[#6b7280] font-medium mb-3">Clinical Lead</p>
              <p className="text-[1.1rem] leading-[1.6] text-[#333]">
                Dr. Sarah Coe-Odess is a licensed clinical psychologist at Massachusetts General Hospital and Instructor in Psychology at Harvard Medical School. With expertise in cognitive behavioral therapy (CBT), exposure therapy, and digital mental health interventions, she brings extensive clinical knowledge to Neurture&apos;s approach. Her research focuses on developing scalable digital interventions to improve access to evidence-based treatments, making her uniquely qualified to help translate therapy principles into effective digital tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}