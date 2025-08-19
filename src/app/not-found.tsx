import Link from "next/link";
import PlatformCTA from "@/components/PlatformCTA";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f9fa] via-white to-[#f1f3f4] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Gentle 404 */}
        <div className="mb-8">
          <div className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-[#0a0a23] mb-4">
            This page seems to have wandered off
          </h1>
        </div>

        {/* Compassionate message */}
        <div className="mb-8 space-y-4">
          <p className="text-lg text-[#6b7280] leading-relaxed">
            Sometimes we all take unexpected detours. That's okay – what matters is how we respond and where we go next.
          </p>
          <p className="text-base text-[#6b7280] leading-relaxed">
            Just like building healthy habits, finding your way is about taking one step at a time.
          </p>
        </div>

        {/* Helpful navigation */}
        <div className="mb-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-[#0a0a23] mb-4">
            Let's get you back on track
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <Link 
              href="/" 
              className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-[#10b981] hover:bg-[#10b981]/5 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#10b981]/10 flex items-center justify-center mr-3 group-hover:bg-[#10b981]/20">
                <svg className="w-4 h-4 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-[#0a0a23]">Home</div>
                <div className="text-sm text-[#6b7280]">Start your journey</div>
              </div>
            </Link>

            <Link 
              href="/sweetsobriety" 
              className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-[#10b981] hover:bg-[#10b981]/5 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#10b981]/10 flex items-center justify-center mr-3 group-hover:bg-[#10b981]/20">
                <svg className="w-4 h-4 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-[#0a0a23]">Food & Emotions</div>
                <div className="text-sm text-[#6b7280]">Sweet Sobriety</div>
              </div>
            </Link>

            <Link 
              href="/team" 
              className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-[#10b981] hover:bg-[#10b981]/5 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#10b981]/10 flex items-center justify-center mr-3 group-hover:bg-[#10b981]/20">
                <svg className="w-4 h-4 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-[#0a0a23]">Our Team</div>
                <div className="text-sm text-[#6b7280]">Meet the experts</div>
              </div>
            </Link>

            <Link 
              href="/partners" 
              className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-[#10b981] hover:bg-[#10b981]/5 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#10b981]/10 flex items-center justify-center mr-3 group-hover:bg-[#10b981]/20">
                <svg className="w-4 h-4 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-[#0a0a23]">For Professionals</div>
                <div className="text-sm text-[#6b7280]">Partner with us</div>
              </div>
            </Link>
          </div>
        </div>

        {/* App download CTA */}
        <div className="mb-8">
          <p className="text-sm text-[#6b7280] mb-4">
            Ready to start building healthier habits?
          </p>
          <PlatformCTA />
        </div>

        {/* Gentle affirmation */}
        <div className="p-4 bg-gradient-to-r from-[#10b981]/10 to-[#3b82f6]/10 rounded-lg border border-[#10b981]/20">
          <p className="text-sm font-medium text-[#0a0a23] italic">
            "Every step forward, no matter how small, is progress worth celebrating."
          </p>
        </div>
      </div>
    </main>
  );
}