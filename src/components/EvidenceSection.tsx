import React from "react";

export default function EvidenceSection() {
  return (
    <section className="relative py-20 px-8 bg-gradient-to-b from-[#f6faf8] via-[#f8f9fa] to-white overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-1/2 h-56 w-56 rounded-full bg-gradient-to-tr from-emerald-200/40 to-blue-200/30 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-56 rounded-full bg-gradient-to-tr from-blue-200/30 to-emerald-200/30 blur-3xl"></div>

      <div className="relative max-w-[1100px] mx-auto">
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full border border-emerald-300/70 bg-emerald-50/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Evidence-based
          </span>
        </div>

        <h2 className="font-serif text-[2.2rem] text-[#0a0a23] mb-3">
          Our evidence-based approach
        </h2>
        <p className="text-[#4b5563] text-lg mb-10 max-w-[850px]">
          Neurture's tools are grounded in established clinical frameworks and
          reviewed by licensed clinicians. Below is how the{" "}
          <strong>45+ coping tools</strong> in the app map to the underlying
          methodologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-xl border border-gray-200 bg-white/80 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-4">
              Clinical frameworks
            </h3>
            <ul className="space-y-3 text-[#374151]">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span>
                  <strong>Acceptance and Commitment Therapy (ACT)</strong>:
                  values clarification, willingness/acceptance, cognitive
                  defusion, mindfulness
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span>
                  <strong>Cognitive Behavioral Therapy (CBT)</strong>: cognitive
                  restructuring, relapse prevention, behavioral substitution
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span>
                  <strong>Mindfulness-Based Relapse Prevention (MBRP)</strong>:
                  mindful awareness of triggers and cravings (e.g., urge
                  surfing)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span>
                  <strong>
                    Mindfulness, grounding, and somatic regulation
                  </strong>
                  : paced/diaphragmatic breathing, 5-4-3-2-1 grounding,
                  NSDR/yoga nidra
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white/80 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-[#0a0a23] mb-4">
              How this shows up in Neurture
            </h3>
            <ul className="space-y-3 text-[#374151]">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span>
                  <strong>Urge Surfing</strong> and{" "}
                  <strong>Sitting with Urges</strong> (ACT/MBRP) to ride
                  cravings without acting
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span>
                  <strong>Observing Thoughts</strong> and cognitive{" "}
                  <strong>defusion</strong> meditations (ACT)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span>
                  <strong>Thought Trap Challenge</strong>,{" "}
                  <strong>Straight Thinking</strong>, and{" "}
                  <strong>Consequence Analysis</strong> (CBT)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span>
                  <strong>5-4-3-2-1 Grounding</strong>,{" "}
                  <strong>Breathwork</strong> (4-7-8, box, coherent), and{" "}
                  <strong>Deep Relaxation/NSDR</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span>
                  <strong>Values Reminder</strong>, goals, and
                  urge/trigger/outcome tracking to reinforce change
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
