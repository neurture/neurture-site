"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PlatformCTA from "@/components/PlatformCTA";

interface ActivityData {
  year: number;
  month: number; // 0-indexed (0 = January)
  selectedDay?: number;
  activities: Record<number, {
    count: number; // Number of activities on this day (0=empty, 1=light, 2=medium, 3+=dark)
  }>;
  logs: Array<{
    date: string;
    title: string;
    subtitle?: string;
    iconType?: 'heart' | 'star' | 'check';
  }>;
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

export default function ActivityPage() {
  const searchParams = useSearchParams();
  const [activityData, setActivityData] = useState<ActivityData>(getEmptyData());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentViewDate, setCurrentViewDate] = useState<Date>(new Date());

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
        return baseStyle + "bg-green-200 text-green-800";
      } else if (activityCount === 2) {
        return baseStyle + "bg-green-400 text-white";
      } else { // 3+
        return baseStyle + "bg-green-600 text-white";
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

  const calendarDays = generateCalendarData();
  
  // Check if we have URL data
  const hasUrlData = searchParams.get('data') !== null;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
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
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">All Logs</h3>
                <p className="text-sm text-gray-600">{activityData.logs.length} entries</p>
              </div>
              <button className="text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Log Entries */}
            <div className="space-y-3">
              {activityData.logs.length > 0 ? (
                activityData.logs.map((log, index) => (
                  <div key={index} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                        {log.iconType === 'heart' ? (
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        ) : log.iconType === 'star' ? (
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{log.title}</p>
                        {log.subtitle && <p className="text-xs text-gray-500">{log.subtitle}</p>}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{log.date}</span>
                      <button className="text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
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