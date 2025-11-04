import FAQ, { FAQItem } from "@/components/FAQ";

export default function EmployersPage() {
  const faqQuestions: FAQItem[] = [
    {
      question: "Do workplace wellness apps actually work?",
      answer: [
        "Yes, but effectiveness depends on the approach and support. Research published in JAMA Network Open found that nearly 70% of participants in workplace mental health programs reported lower depression and anxiety symptoms, along with fewer missed workdays and increased productivity.",
        "However, wellness apps can't work in isolation. If staff are working long hours in a highly stressful environment with little employer support, an app alone won't solve the problem. Neurture works best as part of a broader wellbeing strategy that demonstrates your organization's genuine commitment to employee mental health.",
        "What makes Neurture different is that it addresses specific behavioral challenges (habits, substance use, stress management) with evidence-based tools from ACT, CBT, and MBRP—not just generic meditation or mood tracking.",
      ],
    },
    {
      question: "How do we get employees to actually use it? What's a typical utilization rate?",
      answer: [
        "This is the right question to ask. Traditional EAPs have notoriously low utilization rates—typically under 5%. About half of employers report that lack of awareness contributes to this problem.",
        "Neurture addresses common barriers to adoption: it's completely anonymous (no fear of stigma), requires no appointments (accessible 24/7), and is positioned as a tool for everyday challenges, not just clinical mental health issues. Employees can use it for stress, habits, sleep, or substance use—making it more approachable than traditional 'mental health' services.",
        "We support your rollout with clear communication materials, leadership messaging templates, and ongoing engagement strategies. The key is communicating the benefit as a practical tool for common struggles, not positioning it as 'treatment' that requires employees to self-identify as having a problem.",
      ],
    },
    {
      question: "What about employee privacy concerns? Will this data be used against them?",
      answer: [
        "Employee privacy is critical, and we take it seriously. Neurture can be used completely anonymously—employees don't have to provide identifying information to use the app. For employer implementations, you can distribute access codes without tracking who uses them.",
        "You receive only aggregate, anonymous usage metrics (like '45% of distributed codes were activated this month'). We never share individual user data, activity, or content with employers. No one at your organization will know who is using the app or what they're working on.",
        "This isn't just good ethics—it's good business. Privacy concerns are one of the biggest barriers to mental health app adoption. By guaranteeing anonymity, employees are more likely to actually use the benefit you're providing.",
      ],
    },
    {
      question: "Can individuals use Neurture anonymously?",
      answer: [
        "Yes. Users can access Neurture without providing identifying information. For employer/program implementations, administrators can distribute access codes without tracking who uses them.",
      ],
    },
    {
      question: "What data do employers/programs receive?",
      answer: [
        'Only aggregate, anonymous usage metrics (e.g., "45% of distributed codes were activated this month"). No individual user data or activity is shared.',
      ],
    },
    {
      question: "How is this different from therapy or an EAP?",
      answer: [
        'Neurture is a self-help tool, not therapy. It complements EAPs and therapy by providing 24/7 access to evidence-based techniques. No appointments needed, no stigma of "seeking help."',
      ],
    },
    {
      question: "Can we integrate with SSO or our benefits portal?",
      answer: [
        "We're exploring integration options. Let's discuss your technical requirements during a demo call.",
      ],
    },
    {
      question: "How much does it cost?",
      answer: [
        "Pricing varies based on organization size and implementation needs. We offer per-employee and program license options. Let's discuss what makes sense for your situation.",
      ],
    },
    {
      question: "Can we pilot the program first?",
      answer: [
        "Yes. We can work with you to structure a pilot program to evaluate fit and gather feedback.",
      ],
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col pt-16 pb-20 px-8 items-center text-center gap-6 bg-[#f8f9fa]">
        <div className="relative z-10 flex flex-col items-center max-w-[900px]">
          <h1 className="font-serif font-bold text-[2.5rem] sm:text-[3.5rem] text-[#0a0a23] leading-[1.1] mb-6">
            Support Your Team's Mental Health & Wellbeing
          </h1>

          <p className="text-lg sm:text-xl text-[#6b7280] max-w-[700px] leading-[1.6] mb-8">
            Give employees and professionals confidential, 24/7 access to evidence-based tools for managing habits, stress, and substance use.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#employers"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white text-lg font-medium rounded-full hover:bg-brand-green-light transition-colors duration-200"
            >
              For Employers
            </a>
            <a
              href="#professional-programs"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-bg-light text-white text-lg font-medium rounded-full hover:bg-brand-bg-mid transition-colors duration-200"
            >
              For Professional Health Programs
            </a>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section id="employers" className="py-20 px-8 scroll-mt-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#0a0a23] mb-6">
              For Employers & HR Leaders
            </h2>
            <p className="text-xl text-[#6b7280] max-w-[700px] mx-auto">
              A mental health benefit your employees will actually use—accessible, anonymous, and evidence-based.
            </p>
          </div>

          {/* The Workplace Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6 bg-[#f8f9fa] rounded-lg">
              <div className="text-4xl font-bold text-brand-bg-dark mb-3">21%</div>
              <p className="text-[#6b7280] leading-[1.6]">
                of U.S. adults experienced mental illness in 2023
              </p>
            </div>

            <div className="text-center p-6 bg-[#f8f9fa] rounded-lg">
              <div className="text-4xl font-bold text-brand-bg-mid mb-3">&lt;5%</div>
              <p className="text-[#6b7280] leading-[1.6]">
                Typical EAP utilization rate—most employees never use it
              </p>
            </div>

            <div className="text-center p-6 bg-[#f8f9fa] rounded-lg">
              <div className="text-4xl font-bold text-brand-green mb-3">24/7</div>
              <p className="text-[#6b7280] leading-[1.6]">
                Mental health challenges don't wait for business hours
              </p>
            </div>
          </div>

          {/* Why Neurture for Employers */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-12">
              Why Neurture Works for the Workplace
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">100% Confidential</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Employees can use Neurture anonymously. No data is shared with employers—removing the stigma barrier that prevents help-seeking.
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
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Available 24/7</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Immediate access when needed most—no appointments, no waiting lists, no scheduling during work hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-bg-mid rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Evidence-Based</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Tools grounded in ACT, CBT, and Mindfulness-Based Relapse Prevention—not wellness fluff.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-green-light rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Easy to Use</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Simple mobile app—no complex onboarding, no therapy jargon. Employees can start using it immediately.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-bg-dark rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Addresses Multiple Issues</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Not just "addiction"—helps with alcohol, stress eating, screen time, smoking, and other habit-related challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Complements Existing Benefits</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Works alongside your EAP, therapy benefits, and wellness programs—not a replacement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation */}
          <div className="mb-20 bg-[#f8f9fa] rounded-lg p-12">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-12">
              Simple Implementation
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Easy Enrollment</h4>
                <p className="text-[#6b7280]">
                  Employees access Neurture via a simple enrollment code or email domain verification.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-bg-light text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Immediate Access</h4>
                <p className="text-[#6b7280]">
                  Once enrolled, employees download the app and start using tools right away.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-bg-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Aggregate Reporting</h4>
                <p className="text-[#6b7280]">
                  You receive anonymous usage metrics (no individual data) to measure benefit utilization.
                </p>
              </div>
            </div>
          </div>

          {/* CTA for Employers */}
          <div className="text-center">
            <a
              href="https://cal.com/bradydowling/30min?notes=Employer%20Inquiry%3A%20I%27m%20interested%20in%20offering%20Neurture%20as%20an%20employee%20mental%20health%20benefit.%20I%27d%20like%20to%20discuss%20implementation%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white text-lg font-medium rounded-full hover:bg-brand-green-light transition-colors duration-200"
            >
              Schedule a Demo for Your Organization
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* For Professional Health Programs Section */}
      <section id="professional-programs" className="py-20 px-8 scroll-mt-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#0a0a23] mb-6">
              For Professional Health Programs
            </h2>
            <p className="text-xl text-[#6b7280] max-w-[800px] mx-auto">
              Support your LAP, PHP, and professional assistance program participants with confidential, 24/7 access to evidence-based tools.
            </p>
          </div>

          {/* What Programs We Support */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-brand-circle-light rounded-lg">
                <h4 className="font-semibold text-[#0a0a23] mb-2">Lawyer Assistance Programs</h4>
                <p className="text-sm text-[#6b7280]">State bar LAPs supporting attorneys</p>
              </div>
              <div className="p-6 bg-brand-circle-mid rounded-lg">
                <h4 className="font-semibold text-[#0a0a23] mb-2">Physician Health Programs</h4>
                <p className="text-sm text-[#6b7280]">PHPs for doctors and healthcare professionals</p>
              </div>
              <div className="p-6 bg-brand-circle-dark rounded-lg">
                <h4 className="font-semibold text-[#0a0a23] mb-2">Pilot Assistance Programs</h4>
                <p className="text-sm text-[#6b7280]">Support for aviation professionals</p>
              </div>
              <div className="p-6 bg-brand-circle-mid rounded-lg">
                <h4 className="font-semibold text-[#0a0a23] mb-2">Other Licensed Professionals</h4>
                <p className="text-sm text-[#6b7280]">Pharmacists, nurses, therapists, and more</p>
              </div>
            </div>
          </div>

          {/* The Professional Challenge */}
          <div className="mb-20 bg-[#0a0a23] text-white rounded-lg p-12">
            <h3 className="font-serif text-3xl text-center mb-12">
              The Unique Challenges High-Risk Professionals Face
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="text-lg font-semibold mb-2">High Stigma</h4>
                <p className="text-gray-300 text-sm leading-[1.6]">
                  Fear of license loss, career damage, and professional judgment prevents help-seeking
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-lg font-semibold mb-2">High Stress, High Access</h4>
                <p className="text-gray-300 text-sm leading-[1.6]">
                  Demanding careers with easy access to substances create elevated risk
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">⏰</div>
                <h4 className="text-lg font-semibold mb-2">Limited Accessibility</h4>
                <p className="text-gray-300 text-sm leading-[1.6]">
                  Demanding schedules make attending in-person meetings or appointments difficult
                </p>
              </div>
            </div>
          </div>

          {/* Why Neurture for Professional Programs */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-12">
              How Neurture Supports Your Participants
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Private & Confidential</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Participants use Neurture on their own devices, privately. Program administrators can provide access codes without tracking individual usage.
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
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">24/7 Between Check-Ins</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    When a craving hits at 2am or during a high-stress moment, participants have immediate access to evidence-based tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-bg-mid rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Complements Monitoring Agreements</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Neurture doesn't replace your structured program—it supplements it with self-help tools between meetings, check-ins, and appointments.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-green-light rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Clinically Credible</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Evidence-based tools from ACT, CBT, and MBRP—approaches these professionals respect and trust.
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
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Track Patterns & Progress</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Participants can track their urges, triggers, and which tools work best—building self-awareness and relapse prevention skills.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Mobile-First, Always Available</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Works on participants' smartphones—no desktop access needed. Available wherever they are, whenever they need support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases for Professional Programs */}
          <div className="mb-20 bg-[#f8f9fa] rounded-lg p-12">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-12">
              When Participants Might Use Neurture
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="text-2xl mr-3">⚖️</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">During High-Stress Work Days</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Quick grounding exercises between court appearances, surgeries, or client meetings
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">🌙</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Late Night Cravings</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Urge surfing and cognitive tools when cravings hit outside of meeting times
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">🎯</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Before/After 12-Step or Support Meetings</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Supplement their meeting attendance with daily skills practice
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">📊</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Tracking Triggers & Progress</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Identify patterns in urges and high-risk situations to discuss with counselors
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">✈️</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">During Travel</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Portable support when away from their regular meeting schedule or support network
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">🔄</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Ongoing Aftercare</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Continued support after completing intensive monitoring periods
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA for Professional Programs */}
          <div className="text-center">
            <a
              href="https://cal.com/bradydowling/30min?notes=Professional%20Health%20Program%20Inquiry%3A%20I%27m%20with%20a%20LAP%2FPHP%2F%5Bother%20professional%20program%5D%20and%20interested%20in%20learning%20how%20Neurture%20can%20support%20our%20participants.%20I%27d%20like%20to%20discuss%20implementation%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-bg-light text-white text-lg font-medium rounded-full hover:bg-brand-bg-mid transition-colors duration-200"
            >
              Schedule a Demo for Your Program
            </a>
          </div>
        </div>
      </section>

      <FAQ questions={faqQuestions} title="Common Questions" darkMode={false} />

      {/* Final CTA */}
      <section className="py-20 px-8 bg-[#0a0a23] text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-serif text-3xl text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Schedule a call to see if Neurture is a good fit for your organization or program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/bradydowling/30min?notes=Employer%20Inquiry%3A%20I%27m%20interested%20in%20offering%20Neurture%20as%20an%20employee%20mental%20health%20benefit.%20I%27d%20like%20to%20discuss%20implementation%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white text-lg font-medium rounded-full hover:bg-brand-green-light transition-colors duration-200"
            >
              For Employers
            </a>
            <a
              href="https://cal.com/bradydowling/30min?notes=Professional%20Health%20Program%20Inquiry%3A%20I%27m%20with%20a%20LAP%2FPHP%2F%5Bother%20professional%20program%5D%20and%20interested%20in%20learning%20how%20Neurture%20can%20support%20our%20participants.%20I%27d%20like%20to%20discuss%20implementation%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-bg-light text-white text-lg font-medium rounded-full hover:bg-brand-bg-mid transition-colors duration-200"
            >
              For Professional Programs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
