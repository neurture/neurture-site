"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PlatformCTA from "@/components/PlatformCTA";

type LogType = 'journal' | 'conversation' | 'meditation' | 'checkin-emotion' | 'checkin-urge' | 'checkin-slip' | 'course';

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
  activities: Record<number, {
    count: number; // Number of activities on this day (0=empty, 1=light, 2=medium, 3+=dark)
  }>;
  logs: LogEntry[];
}

// Utility functions for encoding/decoding URL data
const encodeActivityData = (data: ActivityData): string => {
  return btoa(JSON.stringify(data));
};

const decodeActivityData = (encoded: string): ActivityData | null => {
  try {
    return JSON.parse(atob(encoded));
  } catch {
    return null;
  }
};

// Empty data template for when no URL data is provided
const getEmptyData = (): ActivityData => {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth(),
    selectedDay: now.getDate(),
    activities: {},
    logs: []
  };
};

// Log type configuration
const getLogTypeConfig = (type: LogType) => {
  switch (type) {
    case 'journal':
      return {
        icon: 'notebook',
        color: 'bg-blue-500',
        textColor: 'text-blue-600',
        name: 'Journal'
      };
    case 'conversation':
      return {
        icon: 'message',
        color: 'bg-purple-500',
        textColor: 'text-purple-600',
        name: 'Conversation'
      };
    case 'meditation':
      return {
        icon: 'meditation',
        color: 'bg-green-500',
        textColor: 'text-green-600',
        name: 'Meditation'
      };
    case 'checkin-emotion':
      return {
        icon: 'heart-pulse',
        color: 'bg-pink-500',
        textColor: 'text-pink-600',
        name: 'Emotion Check-in'
      };
    case 'checkin-urge':
      return {
        icon: 'heart-pulse',
        color: 'bg-red-500',
        textColor: 'text-red-600',
        name: 'Urge Check-in'
      };
    case 'checkin-slip':
      return {
        icon: 'heart-pulse',
        color: 'bg-orange-500',
        textColor: 'text-orange-600',
        name: 'Slip Check-in'
      };
    case 'course':
      return {
        icon: 'book',
        color: 'bg-blue-600',
        textColor: 'text-blue-700',
        name: 'Course'
      };
    default:
      return {
        icon: 'heart',
        color: 'bg-gray-500',
        textColor: 'text-gray-600',
        name: 'Entry'
      };
  }
};

// Render icon based on type
const renderLogIcon = (type: LogType) => {
  const config = getLogTypeConfig(type);
  
  switch (config.icon) {
    case 'notebook':
      return (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      );
    case 'message':
      return (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4l4 4 4-4h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
        </svg>
      );
    case 'meditation':
      return (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      );
    case 'heart-pulse':
      return (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          <path d="M16 8h-2v3h-4V8H8v8h2v-3h4v3h2V8z" fill="white" opacity="0.7"/>
        </svg>
      );
    case 'book':
      return (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1z"/>
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
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
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  }
  
  // Yesterday
  if (diffDays === 1) {
    return 'Yesterday';
  }
  
  // This week: Day name (Mon)
  if (diffDays < 7) {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  }
  
  // This year: Month/day (Jul 15)
  if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  }
  
  // Older: Short date (7/15/23)
  return date.toLocaleDateString('en-US', { 
    month: 'numeric', 
    day: 'numeric', 
    year: '2-digit' 
  });
};

// Tailwind safelist: bg-green-200 bg-green-400 bg-green-600 text-green-800 bg-blue-500 bg-purple-500 bg-pink-500 bg-red-500 bg-orange-500 bg-blue-600
type FilterType = 'all' | 'journal' | 'conversation' | 'meditation' | 'checkin-all' | 'checkin-emotion' | 'checkin-urge' | 'checkin-slip' | 'course';

export default function ActivityPage() {
  const searchParams = useSearchParams();
  const [activityData, setActivityData] = useState<ActivityData>(getEmptyData());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentViewDate, setCurrentViewDate] = useState<Date>(new Date());
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowFilterDropdown(false);
    };

    if (showFilterDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showFilterDropdown]);

  // Load data from URL on component mount
  useEffect(() => {
    const dataParam = searchParams.get('data');
    if (dataParam) {
      const decodedData = decodeActivityData(dataParam);
      if (decodedData) {
        setActivityData(decodedData);
        const viewDate = new Date(decodedData.year, decodedData.month, 1);
        setCurrentViewDate(viewDate);
        setSelectedDate(new Date(decodedData.year, decodedData.month, decodedData.selectedDay || 1));
      }
    } else {
      // Use empty data when no URL parameter provided
      const emptyData = getEmptyData();
      setActivityData(emptyData);
      const viewDate = new Date(emptyData.year, emptyData.month, 1);
      setCurrentViewDate(viewDate);
      setSelectedDate(new Date(emptyData.year, emptyData.month, emptyData.selectedDay || 1));
    }
  }, [searchParams]);

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
    return currentViewDate.getFullYear() === now.getFullYear() && 
           currentViewDate.getMonth() === now.getMonth();
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
    
    // Check if this day has activity (only if viewing the same month as the data)
    const viewingDataMonth = currentViewDate.getFullYear() === activityData.year && 
                           currentViewDate.getMonth() === activityData.month;
    const activity = viewingDataMonth ? activityData.activities[day] : null;
    const activityCount = activity?.count || 0;
    
    
    // Check if this day is selected
    const isSelected = selectedDate.getDate() === day && 
                      selectedDate.getMonth() === currentViewDate.getMonth() &&
                      selectedDate.getFullYear() === currentViewDate.getFullYear();
    
    let baseStyle = "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer ";
    
    if (isSelected) {
      return baseStyle + "border-2 border-gray-800 text-gray-800";
    } else if (activityCount > 0) {
      // Activity count based styling: 1=light, 2=medium, 3+=dark
      if (activityCount === 1) {
        return baseStyle + "!bg-green-200 !text-green-800";
      } else if (activityCount === 2) {
        return baseStyle + "!bg-green-400 !text-white";
      } else { // 3+
        return baseStyle + "!bg-green-600 !text-white";
      }
    } else {
      return baseStyle + "text-gray-600 hover:bg-gray-100";
    }
  };

  // Helper function to get month name
  const getCurrentMonthName = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    return months[currentViewDate.getMonth()];
  };

  // Filter logs based on active filter
  const getFilteredLogs = (): LogEntry[] => {
    if (activeFilter === 'all') return activityData.logs;
    
    return activityData.logs.filter(log => {
      switch (activeFilter) {
        case 'journal':
          return log.type === 'journal';
        case 'conversation':
          return log.type === 'conversation';
        case 'meditation':
          return log.type === 'meditation';
        case 'checkin-all':
          return log.type.startsWith('checkin-');
        case 'checkin-emotion':
          return log.type === 'checkin-emotion';
        case 'checkin-urge':
          return log.type === 'checkin-urge';
        case 'checkin-slip':
          return log.type === 'checkin-slip';
        case 'course':
          return log.type === 'course';
        default:
          return true;
      }
    });
  };

  // Get all available filter options
  const getFilterOptions = (): Array<{filter: FilterType, name: string, count: number}> => {
    const allLogs = activityData.logs;
    
    return [
      { filter: 'all', name: 'All Logs', count: allLogs.length },
      { filter: 'journal', name: 'Journal', count: allLogs.filter(log => log.type === 'journal').length },
      { filter: 'conversation', name: 'Conversations', count: allLogs.filter(log => log.type === 'conversation').length },
      { filter: 'meditation', name: 'Meditations', count: allLogs.filter(log => log.type === 'meditation').length },
      { filter: 'checkin-all', name: 'All Check-ins', count: allLogs.filter(log => log.type.startsWith('checkin-')).length },
      { filter: 'checkin-emotion', name: 'Check-ins: Emotion', count: allLogs.filter(log => log.type === 'checkin-emotion').length },
      { filter: 'checkin-urge', name: 'Check-ins: Urge', count: allLogs.filter(log => log.type === 'checkin-urge').length },
      { filter: 'checkin-slip', name: 'Check-ins: Slip', count: allLogs.filter(log => log.type === 'checkin-slip').length },
      { filter: 'course', name: 'Course Progress', count: allLogs.filter(log => log.type === 'course').length }
    ];
  };

  // Get filter display name and count
  const getFilterInfo = () => {
    const filteredLogs = getFilteredLogs();
    const count = filteredLogs.length;
    
    switch (activeFilter) {
      case 'all':
        return { name: 'All Logs', count };
      case 'journal':
        return { name: 'Journal', count };
      case 'conversation':
        return { name: 'Conversations', count };
      case 'meditation':
        return { name: 'Meditations', count };
      case 'checkin-all':
        return { name: 'All Check-ins', count };
      case 'checkin-emotion':
        return { name: 'Check-ins: Emotion', count };
      case 'checkin-urge':
        return { name: 'Check-ins: Urge', count };
      case 'checkin-slip':
        return { name: 'Check-ins: Slip', count };
      case 'course':
        return { name: 'Course Progress', count };
      default:
        return { name: 'Logs', count };
    }
  };

  const calendarDays = generateCalendarData();
  const filteredLogs = getFilteredLogs();
  const filterInfo = getFilterInfo();
  
  // Check if we have URL data
  const hasUrlData = searchParams.get('data') !== null;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Force Tailwind to include activity colors */}
      <div className="hidden bg-green-200 bg-green-400 bg-green-600 text-green-800"></div>
      
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-800 text-white px-6 py-4">
          <h1 className="text-xl font-semibold text-center">Analyze</h1>
        </div>

        {/* Calendar */}
        <div className="p-6">
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            {/* Month Header */}
            <div className="flex items-center justify-between mb-4">
              <button 
                onClick={goToPreviousMonth}
                className="text-green-600 text-lg hover:text-green-700 cursor-pointer"
              >
                ‹
              </button>
              <h2 className="text-lg font-semibold text-gray-800">{getCurrentMonthName()}</h2>
              {!isCurrentMonth() && (
                <button 
                  onClick={goToNextMonth}
                  className="text-green-600 text-lg hover:text-green-700 cursor-pointer"
                >
                  ›
                </button>
              )}
              {isCurrentMonth() && <div className="w-6"></div>}
            </div>

            {/* Day Labels */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <div key={`day-label-${index}`} className="text-center text-sm font-medium text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <div key={`calendar-${index}`} className="flex justify-center">
                  <button
                    className={getDayStyle(day)}
                    onClick={() => day && setSelectedDate(new Date(currentViewDate.getFullYear(), currentViewDate.getMonth(), day))}
                  >
                    {day}
                  </button>
                </div>
              ))}
            </div>
          </div>

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
                    {activeFilter !== 'all' && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                    )}
                  </span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-600">{filterInfo.count} entries</p>
              </div>
              {activeFilter !== 'all' && (
                <button 
                  className="text-xs text-blue-600 font-medium hover:text-blue-700"
                  onClick={() => {
                    setActiveFilter('all');
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
                      activeFilter === option.filter ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                    }`}
                    onClick={() => {
                      setActiveFilter(option.filter);
                      setShowFilterDropdown(false);
                    }}
                  >
                    <span className="font-medium">{option.name}</span>
                    <span className="text-sm text-gray-500">{option.count}</span>
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
                    <div key={log.id || index} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${config.color} rounded-lg flex items-center justify-center`}>
                          {renderLogIcon(log.type)}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{log.title}</p>
                          {log.subtitle && <p className="text-xs text-gray-500">{log.subtitle}</p>}
                          {log.metadata && (
                            <div className="text-xs text-gray-400 mt-1">
                              {log.metadata.intensity && `Intensity ${log.metadata.intensity}/10`}
                              {log.metadata.emotion && ` • ${log.metadata.emotion}`}
                              {log.metadata.resisted !== undefined && (log.metadata.resisted ? ' • resisted urge' : ' • acted on urge')}
                              {log.metadata.duration && ` • ${log.metadata.duration}min`}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">{formatSmartDate(log.date)}</span>
                        <button className="text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Journey Awaits</h3>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      This is what your personal activity calendar could look like.<br />
                      Track habits, manage urges, and see your progress over time.
                    </p>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-8 space-y-3 text-left max-w-xs mx-auto">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-200 rounded-full"></div>
                      <span className="text-xs text-gray-600">Light activity days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-600">Busy activity days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-xs text-gray-600">High activity days</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-gray-900">Start your journey with Neurture</p>
                    <div className="flex flex-col items-center gap-4 w-full mx-auto">
                      <a
                        href="https://apps.apple.com/app/id6467687675"
                        className="inline-flex items-center justify-center px-6 h-14 rounded-full w-full text-white bg-black hover:bg-neutral-900"
                        aria-label="Download on the App Store"
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
                        href="https://play.google.com/store/apps/details?id=com.bradydowling.unshame"
                        className="inline-flex items-center justify-center px-6 h-14 rounded-full w-full text-white bg-black hover:bg-neutral-900"
                        aria-label="Get it on Google Play"
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
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Floating Action Button */}
          <div className="fixed bottom-6 right-6">
            <button className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}