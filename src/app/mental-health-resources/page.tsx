'use client';

import { useState } from 'react';

const countries = [
  {
    id: 'australia',
    name: 'Australia',
    emergency: 'Call 000 for immediate police, fire, or medical emergencies',
    crisis: {
      name: 'Lifeline Australia (24/7)',
      phone: '13 11 14',
      text: 'Text 0477 13 11 14',
      website: 'lifeline.org.au'
    }
  },
  {
    id: 'canada',
    name: 'Canada',
    emergency: 'Call 911 for immediate police, fire, or medical emergencies',
    crisis: {
      name: 'Talk Suicide Canada (24/7)',
      phone: '1-833-456-4566',
      text: 'Text TALK to 45645',
      website: 'talksuicide.ca'
    }
  },
  {
    id: 'france',
    name: 'France',
    emergency: 'Call 112 for immediate police, fire, or medical emergencies',
    crisis: {
      name: 'National Suicide Prevention Line (24/7)',
      phone: '3114',
      website: '3114.fr'
    }
  },
  {
    id: 'germany',
    name: 'Germany',
    emergency: 'Call 112 for immediate police, fire, or medical emergencies',
    crisis: {
      name: 'TelefonSeelsorge (24/7)',
      phone: '0800 111 0 111',
      website: 'telefonseelsorge.de'
    }
  },
  {
    id: 'united-kingdom',
    name: 'United Kingdom',
    emergency: 'Call 999 for immediate police, fire, or medical emergencies',
    crisis: {
      name: 'Samaritans (24/7)',
      phone: '116 123',
      text: 'Text 116 123',
      website: 'samaritans.org'
    }
  },
  {
    id: 'united-states',
    name: 'United States',
    emergency: 'Call 911 for immediate police, fire, or medical emergencies',
    crisis: {
      name: '988 Suicide & Crisis Lifeline (24/7)',
      phone: '988',
      text: 'Text HOME to 741741 for Crisis Text Line',
      website: '988lifeline.org'
    }
  }
];

export default function MentalHealthResourcesPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const scrollToCountry = (countryId: string) => {
    setSelectedCountry(countryId);
    const element = document.getElementById(countryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="bg-[#f8f9fa] min-h-screen">
      <section className="max-w-[900px] mx-auto py-12 px-8">
        <h1 className="text-[3rem] text-[#0a0a23] mb-4 font-serif">Mental health resources</h1>

        <div className="mb-12">
          <p className="text-[1.1rem] text-[#0a0a23] leading-[1.8] mb-6">
            Sometimes you need support that goes beyond what an app can provide. We've gathered trusted crisis resources from around the world to help you or someone you care about get immediate assistance when it matters most.
          </p>
          <p className="text-[1.1rem] text-[#0a0a23] leading-[1.8]">
            Can't find your country below?{' '}
            <a
              href="https://findahelpline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b82f6] hover:underline font-semibold"
            >
              Visit findahelpline.com
            </a>{' '}
            to locate crisis support services in your area.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
          <h2 className="text-[1.5rem] text-[#0a0a23] mb-4 font-serif">Choose your location:</h2>
          <div className="flex flex-col gap-2">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => scrollToCountry(country.id)}
                className="text-left text-[#3b82f6] hover:underline hover:text-[#2563eb] transition-colors text-lg"
              >
                {country.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {countries.map((country) => (
            <div
              key={country.id}
              id={country.id}
              className="bg-white rounded-lg p-8 shadow-sm scroll-mt-8"
            >
              <h2 className="text-[2rem] text-[#0a0a23] mb-6 font-serif border-b border-gray-200 pb-3">
                {country.name}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-[1.2rem] font-semibold text-[#0a0a23] mb-2">Emergencies:</h3>
                  <p className="text-[#0a0a23]/80 leading-[1.6]">
                    {country.emergency}
                    {country.emergencyWebsite && (
                      <>
                        {' | '}
                        <a
                          href={`https://${country.emergencyWebsite}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#3b82f6] hover:underline"
                        >
                          {country.emergencyWebsite}
                        </a>
                      </>
                    )}
                  </p>
                </div>

                <div>
                  <h3 className="text-[1.2rem] font-semibold text-[#0a0a23] mb-2">Crisis support:</h3>
                  <div className="text-[#0a0a23]/80 leading-[1.6] space-y-2">
                    <p>
                      <strong>{country.crisis.name}</strong>
                    </p>
                    {country.crisis.phone && (
                      <p>
                        Call{' '}
                        <a
                          href={`tel:${country.crisis.phone.replace(/\s/g, '')}`}
                          className="text-[#3b82f6] hover:underline font-semibold"
                        >
                          {country.crisis.phone}
                        </a>
                      </p>
                    )}
                    {country.crisis.text && (
                      <p className="text-[#0a0a23]/80">{country.crisis.text}</p>
                    )}
                    <p>
                      <a
                        href={`https://${country.crisis.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3b82f6] hover:underline"
                      >
                        {country.crisis.website}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[#e0f2fe] rounded-lg">
          <p className="text-[#0a0a23] leading-[1.6]">
            <strong>Note:</strong> Neurture is designed to support you with daily challenges and unwanted habits, but it is not a substitute for emergency mental health services or professional therapy. Your safety is the top priority—please don't hesitate to reach out for professional help when you need it.
          </p>
        </div>
      </section>
    </main>
  );
}