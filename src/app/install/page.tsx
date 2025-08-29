'use client';

import { useEffect, useState } from 'react';
import { usePostHog } from 'posthog-js/react';

const APPLE_APP_STORE_URL = 'https://apps.apple.com/app/id6467687675';
const GOOGLE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.bradydowling.unshame';

interface AttributionParams {
  ref?: string;
  campaign?: string;
  partner?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

function detectDevice() {
  const userAgent = navigator.userAgent;
  
  // Check for iOS devices
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return 'ios';
  }
  
  // Check for Android devices
  if (/Android/.test(userAgent)) {
    return 'android';
  }
  
  // Default to web/desktop
  return 'web';
}

function parseAttributionParams(): AttributionParams {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    ref: urlParams.get('ref') || undefined,
    campaign: urlParams.get('campaign') || undefined,
    partner: urlParams.get('partner') || undefined,
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    utm_term: urlParams.get('utm_term') || undefined,
    utm_content: urlParams.get('utm_content') || undefined,
  };
}

export default function InstallPage() {
  const posthog = usePostHog();
  const [attribution, setAttribution] = useState<AttributionParams>({});
  const [hasTrackedView, setHasTrackedView] = useState(false);

  // Parse URL parameters and track page view
  useEffect(() => {
    const attributionParams = parseAttributionParams();
    setAttribution(attributionParams);

    // Track install page view with attribution
    if (posthog && !hasTrackedView) {
      const device = detectDevice();
      
      posthog.capture('install_page_viewed', {
        referral_source: attributionParams.ref,
        campaign: attributionParams.campaign,
        partner: attributionParams.partner,
        device_type: device,
        user_agent: navigator.userAgent,
        url: window.location.href,
        // UTM parameters
        utm_source: attributionParams.utm_source,
        utm_medium: attributionParams.utm_medium,
        utm_campaign: attributionParams.utm_campaign,
        utm_term: attributionParams.utm_term,
        utm_content: attributionParams.utm_content,
      });
      
      setHasTrackedView(true);
    }
  }, [posthog, hasTrackedView]);

  // Handle device detection and auto-redirect
  useEffect(() => {
    const device = detectDevice();
    
    if (device === 'ios') {
      // Track auto-redirect before redirecting
      if (posthog) {
        posthog.capture('app_store_clicked', {
          store_type: 'ios',
          click_type: 'auto_redirect',
          referral_source: attribution.ref,
          campaign: attribution.campaign,
          partner: attribution.partner,
          utm_source: attribution.utm_source,
          utm_medium: attribution.utm_medium,
          utm_campaign: attribution.utm_campaign,
        });
      }
      window.location.href = APPLE_APP_STORE_URL;
    } else if (device === 'android') {
      // Track auto-redirect before redirecting
      if (posthog) {
        posthog.capture('app_store_clicked', {
          store_type: 'android',
          click_type: 'auto_redirect',
          referral_source: attribution.ref,
          campaign: attribution.campaign,
          partner: attribution.partner,
          utm_source: attribution.utm_source,
          utm_medium: attribution.utm_medium,
          utm_campaign: attribution.utm_campaign,
        });
      }
      window.location.href = GOOGLE_PLAY_STORE_URL;
    }
    // If web/desktop, stay on this page to show both options
  }, [posthog, attribution]);

  // Handle manual button clicks
  const handleAppStoreClick = (storeType: 'ios' | 'android') => {
    if (posthog) {
      posthog.capture('app_store_clicked', {
        store_type: storeType,
        click_type: 'manual',
        referral_source: attribution.ref,
        campaign: attribution.campaign,
        partner: attribution.partner,
        utm_source: attribution.utm_source,
        utm_medium: attribution.utm_medium,
        utm_campaign: attribution.utm_campaign,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-[#f8f9fa] via-white to-[#f1f3f4]">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Download Neurture</h1>
          <p className="text-lg text-gray-600">
            Get the app and start your journey to break habits with science and self-compassion.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:gap-4 w-full sm:w-fit mx-auto">
          <a
            href={APPLE_APP_STORE_URL}
            onClick={() => handleAppStoreClick('ios')}
            className="inline-flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-auto text-white bg-black hover:bg-neutral-900"
            aria-label="Download on the App Store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mr-3">
              <svg viewBox="0 0 384 512" width="30" className="text-white">
                <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
              </svg>
            </div>
            <div>
              <div className="text-xs">Download on the</div>
              <div className="-mt-1 font-sans text-xl font-semibold">App Store</div>
            </div>
          </a>
          <a
            href={GOOGLE_PLAY_STORE_URL}
            onClick={() => handleAppStoreClick('android')}
            className="inline-flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-auto text-white bg-black hover:bg-neutral-900"
            aria-label="Get it on Google Play"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mr-3">
              <svg viewBox="30 336.7 120.9 129.2" width="30" aria-hidden="true">
                <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"></path>
                <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"></path>
                <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"></path>
                <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"></path>
              </svg>
            </div>
            <div>
              <div className="text-xs">GET IT ON</div>
              <div className="-mt-1 font-sans text-xl font-semibold">Google Play</div>
            </div>
          </a>
        </div>

        <div className="text-sm text-gray-500">
          <p>Available on iOS and Android</p>
        </div>
      </div>
    </div>
  );
}