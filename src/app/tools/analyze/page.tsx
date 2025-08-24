"use client";

import { useState, useEffect } from "react";
import LZString from "lz-string";
import PlatformCTA from "@/components/PlatformCTA";


type LogType =
  | "journal"
  | "conversation"
  | "meditation"
  | "checkin-emotion"
  | "checkin-urge"
  | "checkin-slip"
  | "course";

interface LogEntry {
  id: string;
  date: string; // ISO string for sorting
  type: LogType;
  title: string;
  subtitle?: string;
  content?: string; // For journal entries or conversation previews
  metadata?: {
    intensity?: number; // For urge tracking (1-10)
    emotion?: string; // For emotion tracking
    duration?: number; // For meditations (in minutes)
    courseId?: string; // For course progress
    lessonId?: string; // For course progress
    resisted?: boolean; // For urge tracking
  };
}

interface ActivityData {
  year: number;
  month: number; // 0-indexed (0 = January)
  selectedDay?: number;
  activities: Record<
    number,
    {
      count: number; // Number of activities on this day (0=empty, 1=light, 2=medium, 3+=dark)
    }
  >;
  logs: LogEntry[];
}

// Utility functions for encoding/decoding URL data
const encodeActivityData = (data: ActivityData): string => {
  return btoa(JSON.stringify(data));
};

const decodeActivityData = (encoded: string): ActivityData | null => {
  try {
    // Validate data integrity first
    if (!encoded || encoded.length === 0) {
      console.error("❌ Empty or missing data parameter");
      return null;
    }

    // Try LZ-String decompression first (new format)
    let jsonString: string;
    try {
      jsonString = LZString.decompressFromEncodedURIComponent(encoded);
      if (!jsonString) {
        throw new Error("LZ-String decompression failed");
      }
      console.log("✅ Successfully decompressed LZ-String data");
    } catch (lzError) {
      console.log("⚠️ LZ-String failed, trying base64 fallback");

      // Fallback to base64 decoding (legacy format)
      if (encoded.length % 4 !== 0) {
        console.error(
          "❌ Base64 data appears truncated - invalid length:",
          encoded.length
        );
        console.error(
          "📝 Data preview:",
          encoded.substring(0, 50) +
            "..." +
            encoded.substring(encoded.length - 10)
        );
        return null;
      }

      // Check for suspicious truncation patterns
      if (encoded.endsWith("...") || encoded.includes("…")) {
        console.error("❌ Data appears visually truncated (contains ellipsis)");
        return null;
      }

      console.log("✅ Base64 validation passed - length:", encoded.length);

      // Decode from base64 then UTF-8 (matches mobile app encoding)
      const base64Decoded = atob(encoded);
      const bytes = Uint8Array.from(base64Decoded, (c) => c.charCodeAt(0));
      jsonString = new TextDecoder().decode(bytes);
      console.log("✅ Successfully decoded base64 data (legacy format)");
    }

    // Parse the JSON
    const parsed = JSON.parse(jsonString);
    console.log("✅ Successfully parsed activity data");
    return parsed as ActivityData;
  } catch (error) {
    console.error("❌ Failed to decode activity data:", error);
    console.error("📝 Encoded data length:", encoded?.length || 0);
    console.error("📝 Data sample:", encoded?.substring(0, 100) + "...");
    return null;
  }
};

// Empty data template for when no URL data is provided
const getEmptyData = (): ActivityData => {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth(),
    selectedDay: now.getDate(), // This will be today's date
    activities: {},
    logs: [],
  };
};

// Log type configuration
const getLogTypeConfig = (type: LogType) => {
  switch (type) {
    case "journal":
      return {
        icon: "notebook",
        color: "bg-[#3FB281]",
        textColor: "text-[#3FB281]",
        name: "Journal",
      };
    case "conversation":
      return {
        icon: "message-text-outline",
        color: "bg-[#140F35]",
        textColor: "text-[#140F35]",
        name: "Conversation",
      };
    case "meditation":
      return {
        icon: "meditation",
        color: "bg-[#171047]",
        textColor: "text-[#171047]",
        name: "Meditation",
      };
    case "checkin-emotion":
      return {
        icon: "heart-outline",
        color: "bg-[#4CAF50]",
        textColor: "text-[#4CAF50]",
        name: "Emotion Check-in",
      };
    case "checkin-urge":
      return {
        icon: "alert-circle",
        color: "bg-[#E91E63]",
        textColor: "text-[#E91E63]",
        name: "Urge Check-in",
      };
    case "checkin-slip":
      return {
        icon: "repeat",
        color: "bg-[#FF5722]",
        textColor: "text-[#FF5722]",
        name: "Slip Check-in",
      };
    case "course":
      return {
        icon: "book-outline",
        color: "bg-[#2196F3]",
        textColor: "text-[#2196F3]",
        name: "Course",
      };
    default:
      return {
        icon: "heart",
        color: "bg-gray-500",
        textColor: "text-gray-600",
        name: "Entry",
      };
  }
};

// Render icon based on type - matching mobile icons
const renderLogIcon = (type: LogType) => {
  const config = getLogTypeConfig(type);

  switch (config.icon) {
    case "notebook":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      );
    case "message-text-outline":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      );
    case "meditation":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 5.5C8 5.5 4.73 8.11 3.8 11.5c.93 3.39 4.2 6 8.2 6s7.27-2.61 8.2-6c-.93-3.39-4.2-6-8.2-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      );
    case "alert-circle":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      );
    case "heart-outline":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      );
    case "repeat":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      );
    case "book-outline":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      );
    default:
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      );
  }
};

// Time-smart date display
const formatSmartDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Today: Just time (3:30 PM)
  if (diffDays === 0) {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  // Yesterday
  if (diffDays === 1) {
    return "Yesterday";
  }

  // This week: Day name (Mon)
  if (diffDays < 7) {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  }

  // This year: Month/day (Jul 15)
  if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  // Older: Short date (7/15/23)
  return date.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  });
};

// Tailwind safelist: bg-green-200 bg-green-400 bg-green-600 text-green-800 bg-blue-500 bg-purple-500 bg-pink-500 bg-red-500 bg-orange-500 bg-blue-600
type FilterType =
  | "all"
  | "journal"
  | "conversation"
  | "meditation"
  | "checkin-all"
  | "checkin-emotion"
  | "checkin-urge"
  | "checkin-slip"
  | "course";

export default function ActivityPage() {
  const [activityData, setActivityData] = useState<ActivityData>(
    getEmptyData()
  );
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // This should be today
  const [currentViewDate, setCurrentViewDate] = useState<Date>(new Date()); // This should be this month
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowFilterDropdown(false);
    };

    if (showFilterDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showFilterDropdown]);

  // Load data from URL hash on component mount and hash changes
  useEffect(() => {
    const getHashData = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash;
        const match = hash.match(/[#&]data=([^&]*)/);
        return match ? decodeURIComponent(match[1]) : null;
      }
      return null;
    };

    const dataParam = getHashData();

    if (dataParam) {
      const decodedData = decodeActivityData(dataParam);

      if (decodedData) {
        setActivityData(decodedData);
        const viewDate = new Date(decodedData.year, decodedData.month, 1);
        setCurrentViewDate(viewDate);

        // If viewing current month and no specific day selected, default to today
        const now = new Date();
        const isCurrentMonth =
          decodedData.year === now.getFullYear() &&
          decodedData.month === now.getMonth();
        const selectedDay =
          decodedData.selectedDay || (isCurrentMonth ? now.getDate() : 1);

        setSelectedDate(
          new Date(decodedData.year, decodedData.month, selectedDay)
        );
      } else {
        // Failed to decode, use empty data
        const emptyData = getEmptyData();
        setActivityData(emptyData);
        const viewDate = new Date(emptyData.year, emptyData.month, 1);
        setCurrentViewDate(viewDate);
        setSelectedDate(
          new Date(emptyData.year, emptyData.month, emptyData.selectedDay || 1)
        );
      }
    } else {
      // No hash parameter, use empty data
      const emptyData = getEmptyData();
      setActivityData(emptyData);
      const viewDate = new Date(emptyData.year, emptyData.month, 1);
      setCurrentViewDate(viewDate);
      setSelectedDate(
        new Date(emptyData.year, emptyData.month, emptyData.selectedDay || 1)
      );
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newDataParam = getHashData();
      if (newDataParam) {
        const decodedData = decodeActivityData(newDataParam);
        if (decodedData) {
          setActivityData(decodedData);
          const viewDate = new Date(decodedData.year, decodedData.month, 1);
          setCurrentViewDate(viewDate);

          const now = new Date();
          const isCurrentMonth =
            decodedData.year === now.getFullYear() &&
            decodedData.month === now.getMonth();
          const selectedDay =
            decodedData.selectedDay || (isCurrentMonth ? now.getDate() : 1);

          setSelectedDate(
            new Date(decodedData.year, decodedData.month, selectedDay)
          );
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  // Navigation functions
  const goToPreviousMonth = () => {
    const prevMonth = new Date(currentViewDate);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentViewDate(prevMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(currentViewDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentViewDate(nextMonth);
  };

  // Check if we're at current month
  const isCurrentMonth = () => {
    const now = new Date();
    return (
      currentViewDate.getFullYear() === now.getFullYear() &&
      currentViewDate.getMonth() === now.getMonth()
    );
  };

  // Generate calendar data based on current view date
  const generateCalendarData = () => {
    const year = currentViewDate.getFullYear();
    const month = currentViewDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const getDayStyle = (day: number | null) => {
    if (!day) return "invisible";

    // Generate activity count for this specific day based on logs
    const currentDate = new Date(
      currentViewDate.getFullYear(),
      currentViewDate.getMonth(),
      day
    );
    const dayStart = new Date(currentDate);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(currentDate);
    dayEnd.setHours(23, 59, 59, 999);
    
    // Count logs for this specific day
    const activityCount = activityData.logs.filter(log => {
      const logDate = new Date(log.date);
      return logDate >= dayStart && logDate <= dayEnd;
    }).length;

    // Check if this day is selected
    const isSelected =
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentViewDate.getMonth() &&
      selectedDate.getFullYear() === currentViewDate.getFullYear();

    let baseStyle =
      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer ";

    if (isSelected) {
      return baseStyle + "!border-2 !border-[#140F35] !text-[#140F35]";
    } else if (activityCount > 0) {
      // Activity count based styling: 1=light, 2=medium, 3+=dark
      if (activityCount === 1) {
        return baseStyle + "!bg-[#3FB281]/30 !text-[#140F35]";
      } else if (activityCount === 2) {
        return baseStyle + "!bg-[#3FB281]/70 !text-white";
      } else {
        // 3+
        return baseStyle + "!bg-[#3FB281] !text-white";
      }
    } else {
      return baseStyle + "text-gray-600 hover:bg-gray-100";
    }
  };

  // Helper function to get month name
  const getCurrentMonthName = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[currentViewDate.getMonth()];
  };

  // Filter logs based on active filter and sort by date (most recent first)
  const getFilteredLogs = (): LogEntry[] => {
    let filtered: LogEntry[];
    
    if (activeFilter === "all") {
      filtered = activityData.logs;
    } else {
      filtered = activityData.logs.filter((log) => {
        switch (activeFilter) {
          case "journal":
            return log.type === "journal";
          case "conversation":
            return log.type === "conversation";
          case "meditation":
            return log.type === "meditation";
          case "checkin-all":
            return log.type.startsWith("checkin-");
          case "checkin-emotion":
            return log.type === "checkin-emotion";
          case "checkin-urge":
            return log.type === "checkin-urge";
          case "checkin-slip":
            return log.type === "checkin-slip";
          case "course":
            return log.type === "course";
          default:
            return true;
        }
      });
    }
    
    // Sort by date, most recent first
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  // Get all available filter options
  const getFilterOptions = (): Array<{
    filter: FilterType;
    name: string;
    count: number;
  }> => {
    const allLogs = activityData.logs;

    return [
      { filter: "all", name: "All Logs", count: allLogs.length },
      {
        filter: "journal",
        name: "Journal",
        count: allLogs.filter((log) => log.type === "journal").length,
      },
      {
        filter: "conversation",
        name: "Conversations",
        count: allLogs.filter((log) => log.type === "conversation").length,
      },
      {
        filter: "meditation",
        name: "Meditations",
        count: allLogs.filter((log) => log.type === "meditation").length,
      },
      {
        filter: "checkin-all",
        name: "All Check-ins",
        count: allLogs.filter((log) => log.type.startsWith("checkin-")).length,
      },
      {
        filter: "checkin-emotion",
        name: "Check-ins: Emotion",
        count: allLogs.filter((log) => log.type === "checkin-emotion").length,
      },
      {
        filter: "checkin-urge",
        name: "Check-ins: Urge",
        count: allLogs.filter((log) => log.type === "checkin-urge").length,
      },
      {
        filter: "checkin-slip",
        name: "Check-ins: Slip",
        count: allLogs.filter((log) => log.type === "checkin-slip").length,
      },
      {
        filter: "course",
        name: "Course Progress",
        count: allLogs.filter((log) => log.type === "course").length,
      },
    ];
  };

  // Get filter display name and count
  const getFilterInfo = () => {
    const filteredLogs = getFilteredLogs();
    const count = filteredLogs.length;

    switch (activeFilter) {
      case "all":
        return { name: "All Logs", count };
      case "journal":
        return { name: "Journal", count };
      case "conversation":
        return { name: "Conversations", count };
      case "meditation":
        return { name: "Meditations", count };
      case "checkin-all":
        return { name: "All Check-ins", count };
      case "checkin-emotion":
        return { name: "Check-ins: Emotion", count };
      case "checkin-urge":
        return { name: "Check-ins: Urge", count };
      case "checkin-slip":
        return { name: "Check-ins: Slip", count };
      case "course":
        return { name: "Course Progress", count };
      default:
        return { name: "Logs", count };
    }
  };

  const calendarDays = generateCalendarData();
  const filteredLogs = getFilteredLogs();
  const filterInfo = getFilterInfo();

  // Check if we have hash data (client-side only to avoid hydration mismatch)
  const [hasUrlData, setHasUrlData] = useState(false);
  
  useEffect(() => {
    const hasData = window.location.hash.includes("data=");
    setHasUrlData(hasData);
    
    // Update page title for better social sharing
    if (hasData) {
      document.title = "Someone shared their wellness journey with you | Neurture";
      
      // Add meta description for social sharing
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', 'A friend is sharing their progress building healthier habits. See their journey and offer support on their path to wellness.');
      
      // Add Open Graph tags
      const addOGTag = (property: string, content: string) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };
      
      addOGTag('og:title', 'Someone shared their wellness journey with you');
      addOGTag('og:description', 'A friend is building healthier habits and wants your support. See their progress and cheer them on.');
      addOGTag('og:type', 'website');
    }
  }, []);

  return (
    <>
      {/* Hide main header and footer on mobile only */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            header { display: none !important; }
            main { padding-top: 0 !important; }
            footer { display: none !important; }
          }
        `,
        }}
      />

      <div className="min-h-screen bg-gray-100">
        {/* Mobile-only custom header */}
        <div className="md:hidden bg-[#140F35] text-white px-6 py-4 sticky top-0 z-50">
          <div className="flex items-center justify-between">
            <a href="/" className="hover:opacity-80">
              <img
                src="/images/neurture-logo-transparent.png"
                alt="Neurture"
                className="w-6 h-6 object-contain rounded-[22%]"
              />
            </a>
            <h1 className="text-xl font-semibold">Analyze</h1>
            <div className="w-6"></div> {/* Spacer */}
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-lg overflow-hidden md:mt-8">
          {/* Desktop header (shown above in main layout) */}
          <div className="hidden md:block bg-[#140F35] text-white px-6 py-4">
            <h1 className="text-xl font-semibold text-center">Analyze</h1>
          </div>

          {/* Calendar */}
          <div className="p-6">
            {/* Supportive message when viewing shared data */}
            {hasUrlData && (
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Supporting a Friend's Journey
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Someone has shared their habit-building progress with you for support and accountability.
                  </p>
                </div>
              </div>
            )}
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              {/* Month Header */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={goToPreviousMonth}
                  className="text-[#3FB281] text-lg hover:text-[#43C78F] cursor-pointer"
                >
                  ‹
                </button>
                <h2 className="text-lg font-semibold text-gray-800">
                  {getCurrentMonthName()}
                </h2>
                {!isCurrentMonth() && (
                  <button
                    onClick={goToNextMonth}
                    className="text-[#3FB281] text-lg hover:text-[#43C78F] cursor-pointer"
                  >
                    ›
                  </button>
                )}
                {isCurrentMonth() && <div className="w-6"></div>}
              </div>

              {/* Day Labels */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                  <div
                    key={`day-label-${index}`}
                    className="text-center text-sm font-medium text-gray-600 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                  <div
                    key={`calendar-${index}`}
                    className="flex justify-center"
                  >
                    <button
                      className={getDayStyle(day)}
                      onClick={() =>
                        day &&
                        setSelectedDate(
                          new Date(
                            currentViewDate.getFullYear(),
                            currentViewDate.getMonth(),
                            day
                          )
                        )
                      }
                    >
                      {day}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            {hasUrlData && (
              <div className="bg-gradient-to-br from-[#140F35] to-[#30377F] text-white p-4 rounded-xl mb-4 relative overflow-hidden">
                <div className="relative z-10 text-center">
                  <h3 className="text-lg font-bold mb-2">
                    Ready to Care for Your Brain?
                  </h3>
                  <p className="text-white/90 text-xs leading-relaxed mb-4">
                    Start building the habits that matter most to you.
                  </p>

                  <div className="flex gap-2 max-w-sm mx-auto">
                    <a
                      href="https://apps.apple.com/app/id6467687675"
                      className="inline-flex items-center justify-center px-3 py-2 bg-white text-[#140F35] rounded-lg font-semibold text-xs flex-1 hover:bg-gray-100 transition-colors"
                      aria-label="Download Neurture on the App Store"
                    >
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 384 512">
                        <path
                          fill="currentColor"
                          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                        />
                      </svg>
                      iPhone
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.bradydowling.unshame"
                      className="inline-flex items-center justify-center px-3 py-2 bg-white text-[#140F35] rounded-lg font-semibold text-xs flex-1 hover:bg-gray-100 transition-colors"
                      aria-label="Get Neurture on Google Play"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        viewBox="30 336.7 120.9 129.2"
                      >
                        <path
                          fill="#FFD400"
                          d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                        />
                        <path
                          fill="#FF3333"
                          d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                        />
                        <path
                          fill="#48FF48"
                          d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                        />
                        <path
                          fill="#3BCCFF"
                          d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                        />
                      </svg>
                      Android
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Activity Log Section */}
            <div className="mb-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <button
                    className="flex items-center space-x-2 text-lg font-semibold text-gray-800 hover:text-gray-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowFilterDropdown(!showFilterDropdown);
                    }}
                  >
                    <span className="flex items-center">
                      {filterInfo.name}
                      {activeFilter !== "all" && (
                        <div className="w-2 h-2 bg-[#3FB281] rounded-full ml-2"></div>
                      )}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        showFilterDropdown ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <p className="text-sm text-gray-600">
                    {filterInfo.count} entries
                  </p>
                </div>
                {activeFilter !== "all" && (
                  <button
                    className="text-xs text-[#3FB281] font-medium hover:text-[#43C78F]"
                    onClick={() => {
                      setActiveFilter("all");
                      setShowFilterDropdown(false);
                    }}
                  >
                    Show All
                  </button>
                )}
              </div>

              {/* Filter Dropdown */}
              {showFilterDropdown && (
                <div className="absolute top-16 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                  {getFilterOptions().map((option) => (
                    <button
                      key={option.filter}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center justify-between border-b border-gray-100 last:border-b-0 ${
                        activeFilter === option.filter
                          ? "bg-[#3FB281]/10 text-[#140F35]"
                          : "text-gray-700"
                      }`}
                      onClick={() => {
                        setActiveFilter(option.filter);
                        setShowFilterDropdown(false);
                      }}
                    >
                      <span className="font-medium">{option.name}</span>
                      <span className="text-sm text-gray-500">
                        {option.count}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Log Entries */}
              <div className="space-y-3">
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log, index) => {
                    const config = getLogTypeConfig(log.type);
                    return (
                      <div
                        key={`${log.id}-${index}-${log.date}`}
                        className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 ${config.color} rounded-lg flex items-center justify-center`}
                          >
                            {renderLogIcon(log.type)}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              {log.title}
                            </p>
                            {log.subtitle && (
                              <p className="text-xs text-gray-500">
                                {log.subtitle}
                              </p>
                            )}
                            {log.metadata && (
                              <div className="text-xs text-gray-400 mt-1">
                                {log.metadata.intensity &&
                                  `Intensity ${log.metadata.intensity}/10`}
                                {log.metadata.emotion &&
                                  ` • ${log.metadata.emotion}`}
                                {log.metadata.resisted !== undefined &&
                                  (log.metadata.resisted
                                    ? " • resisted urge"
                                    : " • acted on urge")}
                                {log.metadata.duration &&
                                  ` • ${log.metadata.duration}min`}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">
                            {formatSmartDate(log.date)}
                          </span>
                          <button className="text-gray-400">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-12">
                    {/* App Icon/Visual */}
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto mb-4">
                        <img
                          src="/images/neurture-icon.png"
                          alt="Neurture App Icon"
                          className="w-full h-full object-contain rounded-2xl"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Your Journey Awaits
                      </h3>
                      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        This is what your personal activity calendar could look
                        like.
                        <br />
                        Track habits, manage urges, and see your progress over
                        time.
                      </p>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-8 space-y-3 text-left max-w-xs mx-auto">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#3FB281]/30 rounded-full"></div>
                        <span className="text-xs text-gray-600">
                          Light activity days
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#3FB281]/70 rounded-full"></div>
                        <span className="text-xs text-gray-600">
                          Medium activity days
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#3FB281] rounded-full"></div>
                        <span className="text-xs text-gray-600">
                          High activity days
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-4">
                      <p className="text-sm font-medium text-gray-900">
                        Start your journey with Neurture
                      </p>
                      <div className="flex flex-col items-center gap-4 w-full mx-auto">
                        <a
                          href="https://apps.apple.com/app/id6467687675"
                          className="inline-flex items-center justify-center px-6 h-14 rounded-full w-full text-white bg-black hover:bg-neutral-900"
                          aria-label="Download on the App Store"
                        >
                          <div className="mr-3">
                            <svg
                              viewBox="0 0 384 512"
                              width="30"
                              className="text-white"
                            >
                              <path
                                fill="currentColor"
                                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                              ></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs">Download on the</div>
                            <div className="-mt-1 font-sans text-xl font-semibold">
                              App Store
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.bradydowling.unshame"
                          className="inline-flex items-center justify-center px-6 h-14 rounded-full w-full text-white bg-black hover:bg-neutral-900"
                          aria-label="Get it on Google Play"
                        >
                          <div className="mr-3">
                            <svg
                              viewBox="30 336.7 120.9 129.2"
                              width="30"
                              aria-hidden="true"
                            >
                              <path
                                fill="#FFD400"
                                d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                              ></path>
                              <path
                                fill="#FF3333"
                                d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                              ></path>
                              <path
                                fill="#48FF48"
                                d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                              ></path>
                              <path
                                fill="#3BCCFF"
                                d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                              ></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs">GET IT ON</div>
                            <div className="-mt-1 font-sans text-xl font-semibold">
                              Google Play
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced footer for mobile navigation */}
        <div className="md:hidden bg-white border-t border-gray-200 mt-8">
          <div className="px-6 py-8">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Neurture
              </h3>
              <p className="text-sm text-gray-600">
                Break habits with science and self-compassion
              </p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Learn</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/team"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="/podcast"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Podcast
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/partners"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="/press-kit"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Press Kit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* App Download */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm font-medium text-gray-900 text-center mb-4">
                Get the App
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://apps.apple.com/app/id6467687675"
                  className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg viewBox="0 0 384 512" width="20" className="mr-3">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                  <span className="text-sm">Download for iOS</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bradydowling.unshame"
                  className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg
                    viewBox="30 336.7 120.9 129.2"
                    width="20"
                    className="mr-3"
                  >
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    ></path>
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    ></path>
                  </svg>
                  <span className="text-sm">Download for Android</span>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 pt-6 mt-6 text-center">
              <p className="text-xs text-gray-500">
                &copy; 2024 Neurture. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
