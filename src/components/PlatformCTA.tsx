'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Platform = 'ios' | 'android' | 'other';

export default function PlatformCTA() {
  const [platform, setPlatform] = useState<Platform>('other');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform('ios');
    } else if (/android/.test(userAgent)) {
      setPlatform('android');
    } else {
      setPlatform('other');
    }
  }, []);

  if (platform === 'ios') {
    return (
      <div className="flex flex-col gap-3 w-full">
        <a href="https://apps.apple.com/app/id6467687675" className="w-full flex justify-center">
          <Image
            src="/images/download-on-the-app-store.svg"
            alt="Download on the App Store"
            width={200}
            height={60}
            className="h-[60px] w-auto max-w-full"
          />
        </a>
        <a 
          href="https://play.google.com/store/apps/details?id=com.bradydowling.unshame"
          className="text-blue-600 text-center hover:underline block"
        >
          Also available on Google Play
        </a>
      </div>
    );
  }

  if (platform === 'android') {
    return (
      <div className="flex flex-col gap-3 w-full">
        <a href="https://play.google.com/store/apps/details?id=com.bradydowling.unshame" className="w-full flex justify-center">
          <Image
            src="/images/get-it-on-google-play.png"
            alt="Get it on Google Play"
            width={200}
            height={60}
            className="h-[60px] w-auto max-w-full"
          />
        </a>
        <a 
          href="https://apps.apple.com/app/id6467687675"
          className="text-blue-600 text-center hover:underline block"
        >
          Also available on the App Store
        </a>
      </div>
    );
  }

  // Fallback for other platforms
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <a href="https://apps.apple.com/app/id6467687675" className="flex justify-center">
        <Image
          src="/images/download-on-the-app-store.svg"
          alt="Download on the App Store"
          width={200}
          height={60}
          className="h-[58px] w-auto"
        />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.bradydowling.unshame" className="flex justify-center">
        <Image
          src="/images/get-it-on-google-play.png"
          alt="Get it on Google Play"
          width={200}
          height={60}
          className="h-[58px] w-auto"
        />
      </a>
    </div>
  );
}