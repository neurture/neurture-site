'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string[];
}

const faqData: FAQItem[] = [
  {
    question: "What behaviors can I work on with Neurture?",
    answer: [
      "Anything! Neurture can target use of social media, procrastination, vaping or smoking, alcohol consumption, caffeine intake, gambling or betting, impulsive shopping, viewing pornography, gaming, technology, and many more compulsive or addictive behaviors."
    ]
  },
  {
    question: "Is Neurture just for addicts?",
    answer: [
      "No. Neurture is designed to support any individuals who are looking to address unwanted, compulsive, or addictive behaviors that they wish to change. It offers resources and tools like meditations, affirmations, journaling, and the My Map feature aimed at fostering self-awareness and promoting healthier habits.",
      "Neurture is a subclinical app, meaning it is geared towards those whose daily functioning is not severely impacted by their behaviors. It serves as a supplementary aid that can fit into a broader care plan, offering support and resources that individuals can incorporate into their self-care routines. This can prove beneficial for anyone, ranging from those looking for extra support between therapy sessions, to individuals seeking to understand and modify their behaviors better.",
      "For persons facing clinical levels of addiction, where the behavior significantly interferes with their daily life and requires specialized intervention, it's crucial to seek help from healthcare professionals who can provide the comprehensive care needed. Neurture can be part of a broader, professionally guided approach but should not replace the specialized treatment that clinical addictions demand.",
      "While Neurture is beneficial for anyone interested in working on their behavioral patterns, it is not designed as a standalone solution for severe addictions. Consult with a healthcare provider to determine the best course of action for any clinical conditions."
    ]
  },
  {
    question: "Who is Neurture intended for, and what reading level do you write for?",
    answer: [
      "Intended users: Neurture is designed for adults and older teens who want to reduce or change unwanted habits and behaviors (e.g., screen time, alcohol, vaping, gambling, impulsive spending) and build healthier routines. It is not a substitute for professional care or emergency services.",
      "Reading level: We aim to write content at a general audience reading level (roughly 8th–10th grade) using plain language, short paragraphs, and clear headings. We periodically review content to keep it accessible."
    ]
  },
  {
    question: "Is this like an AI therapist?",
    answer: [
      "There is an AI assistant as part of Neurture but it is not a substitute or replacement for therapy or a mental health professional. The AI chat serves as a way to direct users to vetted resources within Neurture and is not intended to be used as a therapist. Chatting with the assistant is completely anonymous and can help users express their thoughts and feelings in a way that can be healing."
    ]
  },
  {
    question: "Can I just use ChatGPT instead of this?",
    answer: [
      "You could but chat alone is quite limited. Neurture uses chat with an assistant as a starting point and then, based on what you share, it incorporates different meditations, journal prompts, and goals to include in your action plan.",
      "Additionally, ChatGPT provides minimal privacy compared to Neurture. Privacy and trust are critical so we don't be sell your information, target you with ads, or train models using your chat data."
    ]
  },
  {
    question: "Does this replace therapy?",
    answer: [
      "Neurture does not replace therapy. There are many cases when therapy administered by a professional is the most effective approach to helping someone address their challenges or concerns.",
      "Even when someone is seeing a therapist, outside education about mental health can provide a lot of value to both the patient and the provider. Using multiple modalities, such as traditional psychotherapy and mindfulness, often increases effectiveness of treatment in general. If you are seeing a therapist or mental health professional, always consult with them about any changes to your mental health care.",
      "There are times when therapy isn't the best fit for individuals. It can be too costly for many people, too scary to discuss real issues, or simply not conducive to someone's schedule. And even more frequently, people have challenges in their lives that simply don't reach a clinical need, such as unwanted habits or behaviors that don't impair someone's ability to function or just everyday stress. In each of these cases, Neurture can serve as an effective piece of someone's treatment plan."
    ]
  },
  {
    question: "Can Neurture help with my New Year's resolution?",
    answer: [
      "Absolutely! With Neurture you can set goals and use tools that will help you actually achieve your New Years resolutions. With check-ins anytime and a library of resources to help you understand your habits and yourself, Neurture is a great tool for reaching your new year's goals."
    ]
  },
  {
    question: "What should I do if I'm in crisis?",
    answer: [
      "If you're experiencing a mental health crisis or having thoughts of suicide, please reach out for immediate help. In the US, call or text 988 for the Suicide and Crisis Lifeline, available 24/7. You can also text HOME to 741741 for the Crisis Text Line.",
      "For comprehensive crisis support resources in your country, visit our mental health resources page.",
      "Neurture is designed to support you with daily challenges and unwanted habits, but it is not a substitute for emergency mental health services. Your safety is the top priority—please don't hesitate to reach out for professional help when you need it."
    ]
  },
  {
    question: "Do you have investors or conflicts of interest?",
    answer: [
      "Neurture has no outside funding or advertising. We earn revenue from user subscriptions.",
      "In some cases, if you install via a partner link, we may share a portion of revenue with that partner; partners do not access health data and have no editorial control over our content or recommendations.",
      "We have no conflicts of interest to disclose. See details on our Team page.",
    ],
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#0a0a23] text-white py-20">
      <div className="max-w-[1000px] mx-auto px-8">
        <h2 className="text-[3rem] mb-12 text-left">Frequently Asked Questions</h2>
        <div className="w-full">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-white/20 py-6">
              <div 
                className="flex justify-between items-center text-xl font-medium cursor-pointer py-2"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className={`text-3xl font-light transition-transform duration-300 ease-in-out ${
                  activeIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 pt-4' : 'max-h-0'
              }`}>
                <div className="leading-relaxed text-lg text-white/80">
                  {faq.answer.map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}