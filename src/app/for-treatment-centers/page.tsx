import FAQ, { FAQItem } from "@/components/FAQ";

export default function TreatmentCentersPage() {
  const faqQuestions: FAQItem[] = [
    {
      question: "What is digital aftercare and how does it work?",
      answer: [
        "Digital aftercare provides alumni with on-demand access to recovery support tools through a mobile app, available 24/7 from anywhere. Unlike traditional aftercare programs that require scheduled appointments or meetings, digital aftercare allows alumni to access evidence-based techniques whenever they face a craving, trigger, or high-risk situation.",
        "Neurture works by providing immediate access to urge surfing, grounding exercises, cognitive restructuring tools, and mindfulness practices—the same techniques taught in treatment. Alumni can track their progress, identify patterns in their triggers, and build a personalized set of tools that work for them.",
      ],
    },
    {
      question: "How do we measure if alumni are using the app and if it's working?",
      answer: [
        "We provide aggregate usage metrics that show overall engagement without compromising individual privacy. You'll receive reports on metrics like: percentage of alumni who activate their accounts, average frequency of app usage, most-used tools and features, and engagement trends over time.",
        "While we don't share individual alumni data, these aggregate insights help you understand program utilization and can inform your broader aftercare strategy. Many programs use this data to demonstrate the value of their continuing care offerings.",
      ],
    },
    {
      question: "Will this replace our existing alumni program?",
      answer: [
        "No. Neurture is designed to complement and enhance your existing alumni program, not replace it. Think of it as an additional layer of support that extends your reach between alumni events, support groups, and check-ins.",
        "Your alumni program likely includes valuable components like in-person events, peer support groups, and counselor check-ins. Neurture fills the gaps by providing 24/7 support during the times when your team isn't available—like late at night, during weekends, or when an alumnus is traveling. It reinforces the skills you've already taught while giving alumni more tools to maintain their recovery.",
      ],
    },
    {
      question: "How is this different from therapy or counseling?",
      answer: [
        "Neurture is not a replacement for professional therapy. It's a self-help tool that provides on-demand access to evidence-based techniques. Think of it as a digital workbook that reinforces skills your clinical team already teaches.",
      ],
    },
    {
      question: "Can we customize it for our program?",
      answer: [
        "We're exploring options for program-specific customization. Let's discuss your needs during a demo call to see what's possible.",
      ],
    },
    {
      question: "What kind of support do you provide during implementation?",
      answer: [
        "We'll work with you to integrate Neurture into your discharge process, provide materials for your clinical team, and offer ongoing support to ensure successful adoption.",
      ],
    },
    {
      question: "How much does it cost?",
      answer: [
        "Pricing depends on the size of your program and implementation needs. We offer flexible options including per-alumni pricing and program licenses. Let's discuss what makes sense for your center.",
      ],
    },
    {
      question: "Can we try it before committing?",
      answer: [
        "Yes. We can explore pilot programs to help you evaluate Neurture's fit for your alumni population.",
      ],
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col pt-16 pb-20 px-8 items-center text-center gap-6 bg-[#f8f9fa]">
        <div className="relative z-10 flex flex-col items-center max-w-[900px]">
          <h1 className="font-serif font-bold text-[2.5rem] sm:text-[3.5rem] text-[#0a0a23] leading-[1.1] mb-6">
            Extend Your Impact Beyond Discharge
          </h1>

          <p className="text-lg sm:text-xl text-[#6b7280] max-w-[700px] leading-[1.6] mb-8">
            Give your alumni 24/7 access to evidence-based tools for managing cravings, stress, and triggers—no additional staff required.
          </p>

          <a
            href="https://cal.com/bradydowling/30min?notes=Treatment%20Center%20Inquiry%3A%20I%27m%20interested%20in%20learning%20how%20Neurture%20can%20support%20our%20alumni%20aftercare%20program.%20I%27d%20like%20to%20discuss%20implementation%20and%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white text-lg font-medium rounded-full hover:bg-brand-green-light transition-colors duration-200"
          >
            Schedule a Program Demo
          </a>
        </div>
      </section>

      {/* The Aftercare Gap */}
      <section className="py-20 px-8 max-w-[1000px] mx-auto">
        <h2 className="font-serif text-4xl text-[#0a0a23] text-center mb-12">
          The Aftercare Challenge
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-5xl font-bold text-brand-green mb-4">40-60%</div>
            {/* Source: National Institute on Drug Abuse (NIDA) - Treatment and Recovery
                https://nida.nih.gov/publications/drugs-brains-behavior-science-addiction/treatment-recovery
                "The relapse rate for substance use disorders is between 40% and 60%" */}
            <p className="text-[#6b7280] leading-[1.6]">
              Relapse rate for substance use disorders, with the highest risk in the first year after treatment (
              <a
                href="https://nida.nih.gov/publications/drugs-brains-behavior-science-addiction/treatment-recovery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b7280] underline decoration-1 underline-offset-2 hover:text-brand-green transition-colors"
              >
                NIDA
              </a>
              )
            </p>
          </div>

          <div className="p-6">
            <div className="text-5xl font-bold text-brand-bg-light mb-4">24/7</div>
            <p className="text-[#6b7280] leading-[1.6]">
              Cravings and triggers don't wait for business hours or scheduled appointments
            </p>
          </div>

          <div className="p-6">
            <div className="text-5xl font-bold text-brand-bg-dark mb-4">Limited</div>
            <p className="text-[#6b7280] leading-[1.6]">
              Traditional aftercare resources are expensive and difficult to scale
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 px-8 bg-[#f8f9fa]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-serif text-4xl text-[#0a0a23] text-center mb-6">
            A Digital Aftercare Solution Built on Clinical Science
          </h2>
          <p className="text-xl text-[#6b7280] text-center max-w-[700px] mx-auto mb-16">
            Neurture provides on-demand access to the same evidence-based techniques your clinical team teaches in treatment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#0a0a23] mb-4">
                Evidence-Based Tools, Available Anytime
              </h3>
              <p className="text-[#6b7280] leading-[1.6] mb-4">
                Alumni can access interventions from ACT, CBT, and Mindfulness-Based Relapse Prevention whenever they need support—whether it's 2am or during a difficult moment.
              </p>
              <ul className="space-y-3 text-[#6b7280]">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Urge surfing and craving management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Guided breathing and grounding exercises</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cognitive restructuring for permission-giving thoughts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Trigger tracking and pattern recognition</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0a0a23] mb-4">
                Complements Your Clinical Program
              </h3>
              <p className="text-[#6b7280] leading-[1.6] mb-4">
                Neurture isn't a replacement for therapy or your aftercare services—it's a supplement that reinforces what you already teach.
              </p>
              <ul className="space-y-3 text-[#6b7280]">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-bg-light mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reinforces skills learned in treatment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-bg-light mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Provides support between therapy sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-bg-light mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No additional staff or resources required</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-bg-light mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Alumni can use it confidentially, on their own terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-8 max-w-[1000px] mx-auto">
        <h2 className="font-serif text-4xl text-[#0a0a23] text-center mb-16">
          Simple Implementation for Your Program
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">Add to Discharge Plan</h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Include Neurture as part of your continuing care recommendations during discharge planning.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-brand-bg-light text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">Alumni Download App</h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Alumni download the app and gain immediate access to evidence-based tools and support.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-brand-bg-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">Ongoing Support</h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Alumni have 24/7 access to tools that help them manage cravings, stress, and high-risk situations.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Foundation */}
      <section className="py-20 px-8 bg-brand-bg-dark">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-serif text-4xl text-white text-center mb-6">
            Grounded in Evidence-Based Approaches
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-[700px] mx-auto mb-16">
            Neurture incorporates techniques from the most well-researched approaches to addiction recovery and behavior change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-3">ACT</h3>
              <p className="text-gray-300 leading-[1.6]">
                Acceptance and Commitment Therapy techniques help alumni accept uncomfortable feelings without acting on them.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-3">CBT</h3>
              <p className="text-gray-300 leading-[1.6]">
                Cognitive Behavioral Therapy tools help identify and challenge thoughts that give permission to use.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-3">MBRP</h3>
              <p className="text-gray-300 leading-[1.6]">
                Mindfulness-Based Relapse Prevention practices build awareness and self-regulation skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Leaders Support */}
      <section className="py-20 px-8 bg-[#f8f9fa]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-serif text-4xl text-[#0a0a23] text-center mb-6">
            Empowering Your Group Leaders & Peer Support
          </h2>
          <p className="text-xl text-[#6b7280] text-center max-w-[700px] mx-auto mb-16">
            Give your alumni group facilitators an evidence-based resource to reference during meetings and discussions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#0a0a23] mb-4">
                The Peer Support Challenge
              </h3>
              <p className="text-[#6b7280] leading-[1.6] mb-4">
                Many alumni support groups are led by peers in recovery—passionate, committed individuals who may not have formal clinical training. While their lived experience is invaluable, they often lack access to evidence-based frameworks when facilitating discussions or answering questions.
              </p>
              <p className="text-[#6b7280] leading-[1.6]">
                Group leaders want to provide effective guidance, but without clinical training, they may feel uncertain about which techniques to recommend or how to respond to complex situations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0a0a23] mb-4">
                An Evidence-Based Reference Tool
              </h3>
              <p className="text-[#6b7280] leading-[1.6] mb-4">
                Neurture serves as a resource library for group leaders, giving them confidence they're sharing proven techniques—not just personal opinions.
              </p>
              <ul className="space-y-3 text-[#6b7280]">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reference during group meetings to answer questions with evidence-based techniques</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Learn facilitation frameworks from ACT, CBT, and MBRP approaches</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Plan meeting topics around proven interventions and exercises</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Guide alumni to specific tools when they share challenges in group</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 border-l-4 border-brand-green">
            <p className="text-[#6b7280] leading-[1.6] italic">
              "Group leaders don't need to become therapists—but they do benefit from having evidence-based frameworks to reference. Neurture gives them a trusted resource that aligns with the clinical work you've already done in treatment."
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-8 max-w-[1000px] mx-auto">
        <h2 className="font-serif text-4xl text-[#0a0a23] text-center mb-16">
          When Your Alumni Might Use Neurture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0a0a23] mb-2">During a Craving</h3>
              <p className="text-[#6b7280] leading-[1.6]">
                Immediate access to urge surfing, grounding exercises, and cognitive tools when cravings hit.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-brand-bg-light rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0a0a23] mb-2">Late Night Moments</h3>
              <p className="text-[#6b7280] leading-[1.6]">
                Support available at 2am when traditional resources aren't accessible.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-brand-bg-mid rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0a0a23] mb-2">High-Risk Situations</h3>
              <p className="text-[#6b7280] leading-[1.6]">
                In-the-moment coaching when facing triggers like social events or emotional stress.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-brand-bg-dark rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0a0a23] mb-2">Tracking Progress</h3>
              <p className="text-[#6b7280] leading-[1.6]">
                Monitor patterns over time to understand what triggers urges and which tools work best.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ questions={faqQuestions} title="Common Questions" darkMode={false} />

      {/* Final CTA */}
      <section className="py-20 px-8 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-serif text-3xl text-[#0a0a23] mb-6">
            Ready to Explore Neurture for Your Alumni?
          </h2>
          <p className="text-lg text-[#6b7280] mb-8">
            Schedule a 30-minute call to see if Neurture is a good fit for your aftercare program.
          </p>
          <a
            href="https://cal.com/bradydowling/30min?notes=Treatment%20Center%20Inquiry%3A%20I%27m%20interested%20in%20learning%20how%20Neurture%20can%20support%20our%20alumni%20aftercare%20program.%20I%27d%20like%20to%20discuss%20implementation%20and%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white text-lg font-medium rounded-full hover:bg-brand-green-light transition-colors duration-200"
          >
            Schedule a Demo
          </a>
        </div>
      </section>
    </main>
  );
}
