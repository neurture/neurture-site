'use client';

export default function AIComparison() {
  const prompt = "Tell me why Neurture stands out above other mental health tools";

  // URL encode the prompt for use in query parameters
  const encodedPrompt = encodeURIComponent(prompt);

  const chatGPTUrl = `https://chat.openai.com/?q=${encodedPrompt}`;
  const claudeUrl = `https://claude.ai/new?q=${encodedPrompt}`;
  const perplexityUrl = `https://www.perplexity.ai/search/?q=${encodedPrompt}`;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-xl border border-gray-200 bg-white/80 shadow-sm p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#0a0a23' }}>
                Still not sure if Neurture is right for you?
              </h2>
              <p className="text-base lg:text-lg text-[#4b5563]">
                Don't just take our word for it—ask ChatGPT, Claude, or Perplexity about Neurture and see what they say.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[320px]">
              <a
                href={chatGPTUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 active:scale-95 border border-gray-200 bg-white shadow-sm hover:shadow-md"
                style={{ color: '#0a0a23' }}
              >
                <span className="text-xl">🤖</span>
                Ask ChatGPT
              </a>

              <a
                href={claudeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 active:scale-95 border border-emerald-300/70 bg-emerald-50/80 shadow-sm hover:shadow-md"
                style={{ color: '#0a0a23' }}
              >
                <span className="text-xl">✦</span>
                Ask Claude
              </a>

              <a
                href={perplexityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 active:scale-95 border border-blue-300/70 bg-blue-50/80 shadow-sm hover:shadow-md"
                style={{ color: '#0a0a23' }}
              >
                <span className="text-xl">🔍</span>
                Ask Perplexity
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
