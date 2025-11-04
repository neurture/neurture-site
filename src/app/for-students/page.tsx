import FAQ, { FAQItem } from "@/components/FAQ";

export default function StudentsPage() {
  const faqQuestions: FAQItem[] = [
    {
      question: "Is my data safe? Will this information be sold or shared?",
      answer: [
        "Your data is safe. We don't sell your information, target you with ads, or train AI models using your personal data. Privacy and trust are critical—especially for mental health and behavior change tools.",
        "When you use Neurture, your data is encrypted and stored securely. If your university provides access to Neurture, they only receive anonymous, aggregate usage statistics (like '60% of students activated their accounts'). They never see who is using the app or what you're working on.",
        "Research shows privacy concerns are the #1 barrier preventing students from using mental health apps. We built Neurture with privacy as a core feature, not an afterthought.",
      ],
    },
    {
      question: "Do mental health apps actually work for college students?",
      answer: [
        "Yes, when they're evidence-based and address specific needs. A systematic review of mental health apps for college students found that the majority were either effective or partially effective in reducing symptoms of depression and anxiety and improving overall psychological well-being.",
        "What matters is that the app uses proven techniques—not just generic meditation or mood tracking. Neurture is built on evidence-based approaches from ACT (Acceptance and Commitment Therapy), CBT (Cognitive Behavioral Therapy), and Mindfulness-Based Relapse Prevention. These aren't just buzzwords; they're the same techniques used by therapists and clinicians.",
        "That said, apps work best for subclinical concerns—everyday stress, unwanted habits, and behavioral patterns that don't severely impact your functioning. If you're struggling with severe depression, anxiety, or thoughts of self-harm, please reach out to your campus counseling center or call 988.",
      ],
    },
    {
      question: "Do I need to be diagnosed with something to use this?",
      answer: [
        "No. Neurture is designed for anyone who wants to work on habits, behaviors, or patterns they want to change—no diagnosis required. You don't need to have a 'problem' or be in crisis to benefit from these tools.",
        "Think of it like going to the gym. You don't need to be diagnosed with a medical condition to work out—you just want to be healthier. Neurture works the same way for your mental fitness and habits. Whether you're trying to drink less, reduce screen time, manage stress before exams, or just build better routines, the tools are here for you.",
        "This is actually one of the advantages of digital tools over traditional campus counseling. There's no need to 'qualify' for help or prove you're struggling enough. If you want support, it's available.",
      ],
    },
    {
      question: "Is this a replacement for campus counseling?",
      answer: [
        "No. Neurture is a self-help tool that complements professional counseling. Students with serious mental health concerns should still access counseling services.",
      ],
    },
    {
      question: "Can students use it completely privately?",
      answer: [
        "Yes. Students can use Neurture without their university knowing. For institutional implementations, we only provide aggregate usage metrics—never individual student data.",
      ],
    },
    {
      question: "What if a student is in crisis?",
      answer: [
        "Neurture is not a crisis service. The app provides resources for students in crisis, including the 988 Suicide & Crisis Lifeline and campus-specific emergency contacts.",
      ],
    },
    {
      question: "Can we pilot the program first?",
      answer: [
        "Yes. We can work with you to structure a pilot program with specific student populations (e.g., athletes, recovery community, one residence hall) to evaluate fit and gather feedback.",
      ],
    },
    {
      question: "How much does it cost?",
      answer: [
        "Pricing depends on your student population size and implementation approach. We offer per-student and departmental pricing. Let's discuss what makes sense for your institution.",
      ],
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col pt-16 pb-20 px-8 items-center text-center gap-6 bg-[#f8f9fa]">
        <div className="relative z-10 flex flex-col items-center max-w-[900px]">
          <h1 className="font-serif font-bold text-[2.5rem] sm:text-[3.5rem] text-[#0a0a23] leading-[1.1] mb-6">
            Mental Health Support That Actually Fits Your Schedule
          </h1>

          <p className="text-lg sm:text-xl text-[#6b7280] max-w-[700px] leading-[1.6] mb-8">
            No appointments. No waiting lists. No judgment. Just evidence-based tools available 24/7 when you need them most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#for-students"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white text-lg font-medium rounded-full hover:bg-brand-green-light transition-colors duration-200"
            >
              I'm a Student
            </a>
            <a
              href="#for-universities"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-bg-light text-white text-lg font-medium rounded-full hover:bg-brand-bg-mid transition-colors duration-200"
            >
              I Work at a University
            </a>
          </div>
        </div>
      </section>

      {/* For Students Section */}
      <section id="for-students" className="py-20 px-8 scroll-mt-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#0a0a23] mb-6">
              For Students
            </h2>
            <p className="text-xl text-[#6b7280] max-w-[700px] mx-auto">
              Whether you're dealing with stress, bad habits, or just trying to make it through finals week—we've got you.
            </p>
          </div>

          {/* The Reality */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-12">
              You're Not Alone in This
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-[#f8f9fa] rounded-lg">
                <div className="text-4xl font-bold text-brand-bg-dark mb-3">70%</div>
                <p className="text-[#6b7280] text-sm leading-[1.6]">
                  of students say they've struggled with mental health since starting college
                </p>
                <a
                  href="https://www.usnews.com/news/education-news/articles/mental-health-on-college-campuses-challenges-and-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#6b7280] underline decoration-1 underline-offset-2 hover:text-brand-green transition-colors mt-2 inline-block"
                >
                  U.S. News survey, 2024
                </a>
              </div>

              <div className="text-center p-6 bg-[#f8f9fa] rounded-lg">
                <div className="text-4xl font-bold text-brand-bg-mid mb-3">37%</div>
                <p className="text-[#6b7280] text-sm leading-[1.6]">
                  experience moderate to severe depression symptoms
                </p>
                <a
                  href="https://sph.umich.edu/news/2025posts/college-student-mental-health-third-consecutive-year-improvement.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#6b7280] underline decoration-1 underline-offset-2 hover:text-brand-green transition-colors mt-2 inline-block"
                >
                  Healthy Minds Study, 2024-25
                </a>
              </div>

              <div className="text-center p-6 bg-[#f8f9fa] rounded-lg">
                <div className="text-4xl font-bold text-brand-green mb-3">52%</div>
                <p className="text-[#6b7280] text-sm leading-[1.6]">
                  report high levels of loneliness
                </p>
                <a
                  href="https://www.tandfonline.com/doi/full/10.1080/19325037.2024.2396586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#6b7280] underline decoration-1 underline-offset-2 hover:text-brand-green transition-colors mt-2 inline-block"
                >
                  NCHA, 2023
                </a>
              </div>

              <div className="text-center p-6 bg-[#f8f9fa] rounded-lg">
                <div className="text-4xl font-bold text-brand-bg-light mb-3">29%</div>
                <p className="text-[#6b7280] text-sm leading-[1.6]">
                  of college students report binge drinking in the past month
                </p>
                <a
                  href="https://www.niaaa.nih.gov/alcohols-effects-health/alcohol-topics-z/alcohol-facts-and-statistics/alcohol-and-young-adults-ages-18-25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#6b7280] underline decoration-1 underline-offset-2 hover:text-brand-green transition-colors mt-2 inline-block"
                >
                  NIAAA, 2023
                </a>
              </div>
            </div>

            <p className="text-center text-[#6b7280] mt-8 italic max-w-[600px] mx-auto">
              Campus counseling centers are overwhelmed. Appointments take weeks. And sometimes you just need help right now.
            </p>
          </div>

          {/* Why Neurture for Students */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-12">
              Why Students Use Neurture
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Available When You Need It</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    2am craving? Anxiety before an exam? Stressed before a game? Get help right now—no appointments, no waiting.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-bg-light rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Completely Private</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    No one needs to know you're using it. Not your parents, not your coach, not your school. Your business, your phone.
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
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Actually Based on Science</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Not just meditation vibes. Real tools from ACT, CBT, and mindfulness-based therapy—the stuff that actually works.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-green-light rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Quick & Practical</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Tools you can use in 5 minutes between classes. No hour-long therapy sessions that mess up your schedule.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-bg-dark rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Always in Your Pocket</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Simple mobile app. Use it in your dorm, at the gym, or anywhere you need support.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">For All Kinds of Struggles</h4>
                  <p className="text-[#6b7280] leading-[1.6]">
                    Drinking too much. Stress eating. Screen time. Procrastination. Whatever habit you're trying to change.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What You Can Work On */}
          <div className="mb-20 bg-[#f8f9fa] rounded-lg p-12">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-12">
              What Students Use Neurture For
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="text-2xl mr-3">🍺</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Alcohol & Partying</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Manage cravings, track patterns, decide when to drink (or not)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">📱</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Screen Time & Social Media</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Break doom scrolling, reduce TikTok binges, get your time back
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">😰</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Stress & Anxiety</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Calm down before exams, manage performance pressure, ground yourself
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">🍕</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Stress Eating</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Understand emotional eating, break late-night snacking cycles
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">💨</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Vaping & Smoking</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Quit nicotine, manage withdrawal, resist peer pressure
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">🎮</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Gaming & Procrastination</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Set boundaries, get back to schoolwork, regain control
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">💊</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Substance Use</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Get help with weed, pills, or other substances—judgment-free
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">😔</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Loneliness & Isolation</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    Tools to manage difficult emotions when you're feeling alone
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">💪</div>
                <div>
                  <h4 className="font-semibold text-[#0a0a23] mb-1">Performance Pressure</h4>
                  <p className="text-[#6b7280] text-sm leading-[1.6]">
                    For athletes: manage pre-game anxiety, deal with injury stress
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-12">
              How It Works
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Download the App</h4>
                <p className="text-[#6b7280]">
                  Available on iOS and Android. Takes 2 minutes to get started.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-bg-light text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Pick What You're Working On</h4>
                <p className="text-[#6b7280]">
                  Choose the habit or issue you want help with. You can work on multiple things.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-bg-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Use Tools When You Need Them</h4>
                <p className="text-[#6b7280]">
                  Quick exercises for cravings, stress, triggers—whenever, wherever.
                </p>
              </div>
            </div>
          </div>

          {/* CTA for Students */}
          <div className="text-center bg-[#0a0a23] text-white rounded-lg p-12">
            <h3 className="font-serif text-3xl mb-4">
              Ready to Try It?
            </h3>
            <p className="text-gray-300 mb-6 max-w-[600px] mx-auto">
              Download Neurture and get access to tools that actually help. No waiting, no appointments, no judgment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/install"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white text-lg font-medium rounded-full hover:bg-brand-green-light transition-colors duration-200"
              >
                Download Now
              </a>
              <p className="text-gray-400 text-sm">
                Or scroll down if you work at a university →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* For Universities Section */}
      <section id="for-universities" className="py-20 px-8 scroll-mt-8 bg-[#f8f9fa]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#0a0a23] mb-6">
              For Universities & Student Services
            </h2>
            <p className="text-xl text-[#6b7280] max-w-[800px] mx-auto">
              Supplement your counseling center, wellness programs, and student support services with 24/7 digital tools.
            </p>
          </div>

          {/* The Campus Mental Health Crisis */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-12">
              The Campus Reality
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white rounded-lg">
                <div className="text-5xl font-bold text-brand-bg-dark mb-4">Overwhelmed</div>
                <p className="text-[#6b7280] leading-[1.6]">
                  Counseling centers report waitlists of 2-6 weeks. Students need help now, not next month.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg">
                <div className="text-5xl font-bold text-brand-bg-mid mb-4">After Hours</div>
                <p className="text-[#6b7280] leading-[1.6]">
                  Mental health crises don't happen 9-5. Most high-risk moments occur nights and weekends.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg">
                <div className="text-5xl font-bold text-brand-green mb-4">Stigma</div>
                <p className="text-[#6b7280] leading-[1.6]">
                  Many students won't seek traditional counseling but will use private digital tools.
                </p>
              </div>
            </div>
          </div>

          {/* Who Can Benefit */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-12">
              Who at Your Institution Can Use Neurture
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl mb-3">🎓</div>
                <h4 className="font-semibold text-[#0a0a23] mb-2">All Students</h4>
                <p className="text-[#6b7280] text-sm">
                  Campus-wide mental health support for stress, habits, and substance use
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl mb-3">🏃</div>
                <h4 className="font-semibold text-[#0a0a23] mb-2">Student-Athletes</h4>
                <p className="text-[#6b7280] text-sm">
                  Performance anxiety, injury stress, alcohol culture, identity issues
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl mb-3">🏛️</div>
                <h4 className="font-semibold text-[#0a0a23] mb-2">Greek Life</h4>
                <p className="text-[#6b7280] text-sm">
                  Support for chapters dealing with high-risk drinking and mental health
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl mb-3">🎖️</div>
                <h4 className="font-semibold text-[#0a0a23] mb-2">High-Risk Populations</h4>
                <p className="text-[#6b7280] text-sm">
                  Students in recovery, mandated students, those on wellness plans
                </p>
              </div>
            </div>
          </div>

          {/* How Universities Use Neurture */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-12">
              How Universities Can Implement Neurture
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-[#0a0a23] mb-3">Campus-Wide Wellness Benefit</h4>
                <p className="text-[#6b7280] leading-[1.6] mb-4">
                  Offer Neurture to all students as part of your mental health and wellness services—like a gym membership for mental fitness.
                </p>
                <ul className="space-y-2 text-[#6b7280] text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Students access via university email or enrollment code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Promotes early intervention before crises occur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reduces demand on counseling center</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-[#0a0a23] mb-3">Athletic Department Programs</h4>
                <p className="text-[#6b7280] leading-[1.6] mb-4">
                  Provide to all student-athletes as part of sports medicine and mental performance support.
                </p>
                <ul className="space-y-2 text-[#6b7280] text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Complements sports psychology services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Supports NCAA mental health requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Available during travel and off-season</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-[#0a0a23] mb-3">Counseling Center Supplement</h4>
                <p className="text-[#6b7280] leading-[1.6] mb-4">
                  Refer students on waitlists or between sessions to Neurture for immediate support.
                </p>
                <ul className="space-y-2 text-[#6b7280] text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Bridge gap while waiting for appointments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Provide 24/7 support between therapy sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Students practice skills learned in counseling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-[#0a0a23] mb-3">AOD Prevention & Recovery Support</h4>
                <p className="text-[#6b7280] leading-[1.6] mb-4">
                  Offer to students in recovery, those with mandated education, or fraternity/sorority wellness initiatives.
                </p>
                <ul className="space-y-2 text-[#6b7280] text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Evidence-based alternative to sanctions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Support collegiate recovery communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Track engagement for wellness agreements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Special Focus: Student-Athletes */}
          <div className="mb-20 bg-white rounded-lg p-12">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-6">
              Supporting Student-Athlete Mental Health
            </h3>
            <p className="text-center text-[#6b7280] max-w-[700px] mx-auto mb-12">
              Student-athletes face unique mental health challenges and are less likely to seek help than their peers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-bg-dark mb-3">22%</div>
                <p className="text-[#6b7280] text-sm">
                  of student-athletes show depression risk (vs. general population)
                </p>
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9858692/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#6b7280] underline decoration-1 underline-offset-2 hover:text-brand-green transition-colors mt-2 inline-block"
                >
                  NCAA research
                </a>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-brand-bg-mid mb-3">38%</div>
                <p className="text-[#6b7280] text-sm">
                  of female athletes feel mentally exhausted most days or constantly
                </p>
                <a
                  href="https://ncaaorg.s3.amazonaws.com/research/other/2020/2022RES_NCAA-SA-Well-BeingSurveyPPT.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#6b7280] underline decoration-1 underline-offset-2 hover:text-brand-green transition-colors mt-2 inline-block"
                >
                  NCAA Well-Being Study, 2021
                </a>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-brand-green mb-3">42%</div>
                <p className="text-[#6b7280] text-sm">
                  of student-athletes engage in binge drinking
                </p>
                <a
                  href="https://ncaaorg.s3.amazonaws.com/research/wellness/Jan2024RES_HW-SubstanceUseRelease.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#6b7280] underline decoration-1 underline-offset-2 hover:text-brand-green transition-colors mt-2 inline-block"
                >
                  NCAA Substance Use Study
                </a>
              </div>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-[#0a0a23] mb-3">
                Why Neurture Works for Athletes
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#6b7280]">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">No fear of being benched for seeking help</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Fits demanding practice/travel schedules</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Complements sports psychology services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Tools for pre-game anxiety and performance pressure</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Support during injury recovery periods</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Helps with team culture around alcohol</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Implementation */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl text-[#0a0a23] text-center mb-12">
              Simple Implementation Process
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Schedule a Demo</h4>
                <p className="text-[#6b7280]">
                  We'll discuss your student population, existing services, and how Neurture can complement them.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-bg-light text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Choose Your Approach</h4>
                <p className="text-[#6b7280]">
                  Campus-wide, specific departments, pilot programs—we'll customize to your needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-bg-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h4 className="text-lg font-semibold text-[#0a0a23] mb-2">Launch & Support</h4>
                <p className="text-[#6b7280]">
                  We provide promotional materials, training for staff, and ongoing support.
                </p>
              </div>
            </div>
          </div>

          {/* CTA for Universities */}
          <div className="text-center">
            <a
              href="https://cal.com/bradydowling/30min?notes=University%20Inquiry%3A%20I%27m%20interested%20in%20learning%20how%20Neurture%20can%20support%20our%20students%27%20mental%20health%20and%20wellness.%20I%27d%20like%20to%20discuss%20implementation%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-bg-light text-white text-lg font-medium rounded-full hover:bg-brand-bg-mid transition-colors duration-200"
            >
              Schedule a Demo for Your Campus
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
            Whether you're a student looking for support or a university administrator exploring options, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/install"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white text-lg font-medium rounded-full hover:bg-brand-green-light transition-colors duration-200"
            >
              For Students: Download Now
            </a>
            <a
              href="https://cal.com/bradydowling/30min?notes=University%20Inquiry%3A%20I%27m%20interested%20in%20learning%20how%20Neurture%20can%20support%20our%20students%27%20mental%20health%20and%20wellness.%20I%27d%20like%20to%20discuss%20implementation%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-bg-light text-white text-lg font-medium rounded-full hover:bg-brand-bg-mid transition-colors duration-200"
            >
              For Universities: Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
