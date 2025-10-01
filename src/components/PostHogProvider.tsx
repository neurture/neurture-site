"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";

// Initialize PostHog
if (typeof window !== "undefined") {
  posthog.init("phc_QGftS8Ws5QOe71EZoRrtzUa6mMXTxGrp4BteNCIfNyl", {
    api_host: "https://us.i.posthog.com",
    ui_host: "https://us.posthog.com",
    defaults: "2025-05-24",
    person_profiles: "never",
    capture_pageview: false, // We'll handle pageviews manually
    capture_pageleave: true,
    session_recording: undefined,
    // Privacy-friendly settings
    autocapture: {
      dom_event_allowlist: ["click", "submit"], // Only capture clicks and form submissions
    },
    bootstrap: {
      distinctID: undefined, // Let PostHog handle user identification
    },
  });
}

// Component to handle manual pageview tracking
function PostHogPageView() {
  const pathname = usePathname();
  const posthog = usePostHog();

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (typeof window !== "undefined" && window.location.search) {
        url = url + window.location.search;
      }
      posthog.capture("$pageview", {
        $current_url: url,
        page_title: document.title,
      });
    }
  }, [pathname, posthog]);

  return null;
}

// Main provider component
export default function PHProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PostHogProvider>
  );
}
