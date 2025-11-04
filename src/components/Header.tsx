'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

export default function Header() {
  const pathname = usePathname();
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  // Check if we're on any of the solutions pages
  const isSolutionsActive = pathname?.startsWith('/for-');

  // Toggle dropdown on click (for mobile)
  const toggleSolutions = () => {
    setSolutionsOpen(!solutionsOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('[data-solutions-dropdown]')) {
      setSolutionsOpen(false);
    }
  }, []);

  // Add click outside listener
  useEffect(() => {
    if (solutionsOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [solutionsOpen, handleClickOutside]);

  return (
    <header className="bg-[#0a0a23]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-2 sm:px-4 py-3 sm:py-4">
        <div className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] rounded-full flex-shrink-0">
          <Image
            src="/images/neurture-logo-transparent.png"
            alt="Neurture"
            width={30}
            height={30}
            className="w-full h-full object-contain rounded-[22%]"
          />
        </div>
        <nav>
          <ul className="flex items-center gap-2 sm:gap-4 md:gap-6 list-none m-0 p-0">
            <li>
              <Link
                href="/"
                className={`text-white no-underline text-sm sm:text-base md:text-lg pb-[3px] sm:pb-[5px] ${
                  pathname === "/"
                    ? "border-b-2 border-white"
                    : "hover:border-b-2 hover:border-white"
                }`}
              >
                Home
              </Link>
            </li>

            {/* Solutions Dropdown */}
            <li
              className="relative"
              data-solutions-dropdown
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                onClick={toggleSolutions}
                className={`text-white no-underline text-sm sm:text-base md:text-lg pb-[3px] sm:pb-[5px] flex items-center gap-0.5 sm:gap-1 bg-transparent border-0 cursor-pointer ${
                  isSolutionsActive
                    ? "border-b-2 border-white"
                    : "hover:border-b-2 hover:border-white"
                }`}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
              >
                Solutions
                <svg
                  className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full right-0 sm:left-0 mt-2 bg-[#0a0a23] border border-white/20 rounded-md shadow-lg min-w-[240px] transition-all duration-200 z-50 ${
                  solutionsOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <ul className="list-none m-0 p-2">
                  <li>
                    <Link
                      href="/for-treatment-centers"
                      onClick={() => setSolutionsOpen(false)}
                      className={`block text-white no-underline px-4 py-3 rounded hover:bg-white/10 transition-colors ${
                        pathname === '/for-treatment-centers' || pathname === '/for-treatment-centers/'
                          ? 'bg-white/10'
                          : ''
                      }`}
                    >
                      For Treatment Centers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/for-employers"
                      onClick={() => setSolutionsOpen(false)}
                      className={`block text-white no-underline px-4 py-3 rounded hover:bg-white/10 transition-colors ${
                        pathname === '/for-employers' || pathname === '/for-employers/'
                          ? 'bg-white/10'
                          : ''
                      }`}
                    >
                      For Employers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/for-students"
                      onClick={() => setSolutionsOpen(false)}
                      className={`block text-white no-underline px-4 py-3 rounded hover:bg-white/10 transition-colors ${
                        pathname === '/for-students' || pathname === '/for-students/'
                          ? 'bg-white/10'
                          : ''
                      }`}
                    >
                      For Students
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/team"
                className={`text-white no-underline text-sm sm:text-base md:text-lg pb-[3px] sm:pb-[5px] ${
                  pathname === "/team" || pathname === "/team/"
                    ? "border-b-2 border-white"
                    : "hover:border-b-2 hover:border-white"
                }`}
              >
                Team
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link
                href="/partners"
                className={`text-white no-underline text-sm sm:text-base md:text-lg pb-[3px] sm:pb-[5px] ${
                  pathname === "/partners" || pathname === "/partners/"
                    ? "border-b-2 border-white"
                    : "hover:border-b-2 hover:border-white"
                }`}
              >
                Partners
              </Link>
            </li>
            <li className="hidden sm:block">
              <a
                href="https://theadaptivemind.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline text-sm sm:text-base md:text-lg pb-[3px] sm:pb-[5px] hover:border-b-2 hover:border-white"
              >
                Podcast
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
