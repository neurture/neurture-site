
export default function PartnersPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col pt-16 pb-20 px-8 items-center text-center gap-6 bg-[#f8f9fa]">
        <div className="relative z-10 flex flex-col items-center max-w-[800px]">
          <h1 className="font-serif font-bold text-[2.5rem] sm:text-[3.5rem] text-[#0a0a23] leading-[1.1] mb-6">
            Partner with Neurture: Scale Your Impact in Habit Change
          </h1>
          
          <p className="text-lg sm:text-xl text-[#6b7280] max-w-[650px] leading-[1.6] mb-8">
            Join leading clinicians, coaches, and researchers who are helping thousands break harmful habits through evidence-based digital tools.
          </p>

          <a
            href="https://cal.com/bradydowling/30min?notes=Partnership%20Inquiry%3A%20I%27m%20interested%20in%20partnering%20with%20Neurture%20to%20scale%20my%20impact%20in%20habit%20change%20and%20addiction%20recovery.%20I%27d%20like%20to%20discuss%20collaboration%20opportunities."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#10b981] text-white text-lg font-medium rounded-full hover:bg-[#059669] transition-colors duration-200"
          >
            Schedule a Partnership Call
          </a>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-8 max-w-[1200px] mx-auto">
        <h2 className="font-serif text-4xl text-[#0a0a23] text-center mb-16">
          Why Partner with Neurture?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">Scale Your Impact</h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Reach thousands of people struggling with habits and addictions, far beyond traditional 1:1 practice limitations.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">Evidence-Based Platform</h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Associate your expertise with clinically-validated tools reviewed by licensed psychologists and researchers.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">Revenue Opportunities</h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Monetize your expertise through content creation, consultation, and referral partnerships.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">Professional Visibility</h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Build your professional brand as a featured expert in the digital mental health space.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#ef4444] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">Research & Data</h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Access anonymized user behavior data and contribute to research advancing the field.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#06b6d4] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">Expert Community</h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Join a network of leading professionals advancing evidence-based habit change interventions.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-8 bg-[#f8f9fa]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-serif text-4xl text-[#0a0a23] mb-16">
            Simple Partnership Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#10b981] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a23] mb-2">Schedule a Call</h3>
              <p className="text-[#6b7280]">
                Book a 30-minute conversation to discuss your expertise and partnership interests.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#3b82f6] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a23] mb-2">Explore Opportunities</h3>
              <p className="text-[#6b7280]">
                We&apos;ll identify the best ways to leverage your expertise within our platform.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#8b5cf6] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a23] mb-2">Start Collaborating</h3>
              <p className="text-[#6b7280]">
                Begin creating content, providing guidance, or conducting research with our team.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="https://cal.com/bradydowling/30min?notes=Partnership%20Inquiry%3A%20I%27m%20interested%20in%20partnering%20with%20Neurture%20to%20scale%20my%20impact%20in%20habit%20change%20and%20addiction%20recovery.%20I%27d%20like%20to%20discuss%20collaboration%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#10b981] text-white text-lg font-medium rounded-full hover:bg-[#059669] transition-colors duration-200"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8 max-w-[800px] mx-auto">
        <h2 className="font-serif text-4xl text-[#0a0a23] text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">
              What qualifications do you look for in partners?
            </h3>
            <p className="text-[#6b7280] leading-[1.6]">
              We partner with licensed clinicians (psychologists, therapists, addiction counselors), certified coaches specializing in behavior change, published authors/researchers in habit formation, and treatment centers with evidence-based approaches.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">
              How do partnerships typically work?
            </h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Partnerships vary based on your expertise and interests. Common collaborations include content creation (courses, articles, videos), clinical consultation on app features, research partnerships, and referral programs for your clients.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">
              Is there compensation for partners?
            </h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Yes, we offer various compensation models including revenue sharing for content, consulting fees for clinical guidance, research grants, and referral commissions. We&apos;ll discuss the specifics based on your partnership type.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">
              How much time commitment is required?
            </h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Time commitments are flexible and depend on the partnership scope. Some partners contribute a few hours monthly for consultation, while others create ongoing content. We work around your existing practice and schedule.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-3">
              Can I maintain my independent practice?
            </h3>
            <p className="text-[#6b7280] leading-[1.6]">
              Absolutely. Our partnerships are designed to complement, not replace, your existing practice. Many partners find it enhances their professional brand and provides additional revenue streams.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-8 bg-[#0a0a23] text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-3xl text-white mb-6">
            Ready to Scale Your Impact?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join us in making evidence-based habit change accessible to everyone.
          </p>
          <a
            href="https://cal.com/bradydowling/30min?notes=Partnership%20Inquiry%3A%20I%27m%20interested%20in%20partnering%20with%20Neurture%20to%20scale%20my%20impact%20in%20habit%20change%20and%20addiction%20recovery.%20I%27d%20like%20to%20discuss%20collaboration%20opportunities."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#10b981] text-white text-lg font-medium rounded-full hover:bg-[#059669] transition-colors duration-200"
          >
            Schedule Your Partnership Call
          </a>
        </div>
      </section>
    </main>
  );
}