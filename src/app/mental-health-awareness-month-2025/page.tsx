'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

function MentalHealthAwarenessContent() {
  const searchParams = useSearchParams();
  const [deviceType, setDeviceType] = useState<'loading' | 'ios' | 'android' | 'desktop'>('loading');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const partnerName = searchParams.get('partner');
  const promoCode = searchParams.get('promo') || 'MHM25';

  useEffect(() => {
    const userAgent = navigator.userAgent;
    
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      // Redirect iOS users to the App Store with promo code
      window.location.href = `https://apps.apple.com/redeem?ctx=offercodes&id=6467687675&code=${promoCode}`;
      setDeviceType('ios');
    } else if (/Android/.test(userAgent)) {
      setDeviceType('android');
    } else {
      setDeviceType('desktop');
    }
  }, [promoCode]);

  const copyToClipboard = async (elementId: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(elementId);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(elementId);
      setTimeout(() => setCopiedId(null), 1500);
    }
  };

  const formattedPartnerName = partnerName ? `${partnerName} + ` : '';
  const title = partnerName 
    ? `Neurture + ${partnerName} - Mental Health Awareness Month 2025`
    : 'Neurture - Mental Health Awareness Month 2025';

  if (deviceType === 'loading') {
    return (
      <div className="bg-[#f8f9fa] min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#0a0a23] rounded-full animate-spin mb-4"></div>
        <p className="text-lg">Detecting your device...</p>
      </div>
    );
  }

  if (deviceType === 'android') {
    return (
      <div className="bg-[#f8f9fa] min-h-screen flex items-center justify-center p-8">
        <div className="max-w-[600px] bg-white rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.1)] p-10 text-center">
          <div className="w-[70px] h-[70px] mx-auto mb-6 flex items-center justify-center">
            <Image
              src="/images/neurture-icon.png"
              alt="Neurture"
              width={70}
              height={70}
              className="w-full h-full object-contain rounded-[22%]"
            />
          </div>
          
          <h1 className="text-[2.2rem] text-[#0a0a23] mb-4">
            {formattedPartnerName}Neurture
          </h1>
          <p className="text-lg font-medium text-[#444] mb-6">Mental Health Awareness Month 2025</p>

          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[1.2rem] font-bold">Code:</span>
            <div
              className="text-[2rem] font-bold text-[#4caf50] py-3 px-6 bg-[#f0f8f0] rounded-[5px] cursor-pointer hover:bg-[#e8f5e8] active:bg-[#d8f0d8] transition-colors relative tracking-[2px]"
              onClick={() => copyToClipboard('android', promoCode)}
            >
              <span className="block mb-1">
                {copiedId === 'android' ? 'Code copied!' : promoCode}
              </span>
              {copiedId !== 'android' && (
                <div className="text-[0.7rem] text-[#777] flex items-center justify-center mt-1">
                  <span className="w-3.5 h-3.5 mr-1 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23777\'%3E%3Cpath d=\'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\'/%3E%3C/svg%3E')] bg-contain bg-no-repeat"></span>
                  press to copy
                </div>
              )}
            </div>
          </div>

          <p className="text-lg leading-6 mb-4">Use this code for your first month free of Neurture Premium.</p>
          {partnerName && (
            <p className="text-lg leading-6 mb-4">
              Exclusive for <span className="font-medium">{partnerName}</span> members!
            </p>
          )}

          <p className="text-lg leading-6 mb-6">Download Neurture from the Google Play Store:</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.bradydowling.unshame"
            className="inline-block"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-[60px]"
            />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fa] min-h-screen flex items-center justify-center p-8">
      <div className="max-w-[600px] bg-white rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.1)] p-10 text-center">
        <div className="w-[70px] h-[70px] mx-auto mb-6 flex items-center justify-center">
          <Image
            src="/images/neurture-icon.png"
            alt="Neurture"
            width={70}
            height={70}
            className="w-full h-full object-contain rounded-[22%]"
          />
        </div>
        
        <h1 className="text-[2.2rem] text-[#0a0a23] mb-4">
          {formattedPartnerName}Neurture
        </h1>
        <p className="text-lg font-medium text-[#444] mb-6">Mental Health Awareness Month 2025</p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-[1.2rem] font-bold">Code:</span>
          <div
            className="text-[2rem] font-bold text-[#4caf50] py-3 px-6 bg-[#f0f8f0] rounded-[5px] cursor-pointer hover:bg-[#e8f5e8] active:bg-[#d8f0d8] transition-colors relative tracking-[2px]"
            onClick={() => copyToClipboard('desktop', promoCode)}
          >
            <span className="block mb-1">
              {copiedId === 'desktop' ? 'Code copied!' : promoCode}
            </span>
            {copiedId !== 'desktop' && (
              <div className="text-[0.7rem] text-[#777] flex items-center justify-center mt-1">
                <span className="w-3.5 h-3.5 mr-1 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23777\'%3E%3Cpath d=\'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\'/%3E%3C/svg%3E')] bg-contain bg-no-repeat"></span>
                click to copy
              </div>
            )}
          </div>
        </div>

        <p className="text-lg leading-6 mb-4">Use this code for your first month free of Neurture Premium.</p>
        {partnerName && (
          <p className="text-lg leading-6 mb-4">
            Exclusive for <span className="font-medium">{partnerName}</span> members!
          </p>
        )}

        <div className="flex justify-between mt-4 mb-4">
          <div className="flex flex-col items-center w-[45%]">
            <div className="text-[1.2rem] font-bold mb-4">App Store</div>
            <a href={`https://apps.apple.com/redeem?ctx=offercodes&id=6467687675&code=${promoCode}`}>
              <Image
                src="/images/app-store-qr.jpg"
                alt="App Store QR Code"
                width={180}
                height={180}
                className="w-full max-w-[180px] h-auto mb-6 rounded-lg bg-[#f8f9fa]"
              />
            </a>
          </div>

          <div className="flex flex-col items-center w-[45%]">
            <div className="text-[1.2rem] font-bold mb-4">Google Play</div>
            <a href="https://play.google.com/store/apps/details?id=com.bradydowling.unshame">
              <Image
                src="/images/play-store-qr.png"
                alt="Google Play Store QR Code"
                width={180}
                height={180}
                className="w-full max-w-[180px] h-auto mb-6 rounded-lg"
              />
            </a>
          </div>
        </div>

        <p className="text-lg leading-6 mb-4">Scan one of these QR codes to download Neurture:</p>

        <div className="flex justify-between mt-4">
          <div className="w-[45%] flex justify-center">
            <a href={`https://apps.apple.com/redeem?ctx=offercodes&id=6467687675&code=${promoCode}`}>
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
          </div>
          <div className="w-[45%] flex justify-center">
            <a href="https://play.google.com/store/apps/details?id=com.bradydowling.unshame">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MentalHealthAwarenessPage() {
  return (
    <Suspense fallback={
      <div className="bg-[#f8f9fa] min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#0a0a23] rounded-full animate-spin mb-4"></div>
        <p className="text-lg">Loading...</p>
      </div>
    }>
      <MentalHealthAwarenessContent />
    </Suspense>
  );
}