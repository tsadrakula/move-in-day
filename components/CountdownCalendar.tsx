"use client";

import { useCountdown } from '@/hooks/useCountdown';

interface CountdownCalendarProps {
  targetDate: Date;
}

export function CountdownCalendar({ targetDate }: CountdownCalendarProps) {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(targetDate);

  if (isComplete) {
    return null; // Will be handled by parent for celebration
  }

  return (
    <div className="relative">
      {/* String/nail at top */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-2 h-2 bg-gray-600 rounded-full" />
        <div className="w-px h-3 bg-gray-400" />
      </div>

      {/* Calendar body */}
      <div
        className="bg-[#FDF8F3] border-2 border-amber-200 rounded-lg shadow-lg p-4 w-40"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
        }}
      >
        {/* Header */}
        <div className="text-center mb-3">
          <p className="font-[family-name:var(--font-playfair)] text-amber-800 text-sm italic">
            Until We&apos;re
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-amber-800 text-lg font-semibold">
            Home
          </p>
        </div>

        {/* Days */}
        <div className="text-center mb-2">
          <span
            className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#C4785A]"
            style={{ transition: 'opacity 0.3s ease' }}
          >
            {days}
          </span>
          <p className="text-amber-700 text-sm">days</p>
        </div>

        {/* Time */}
        <div className="text-center text-amber-700 font-mono text-sm mb-2">
          <span className="transition-opacity duration-300">{String(hours).padStart(2, '0')}</span>
          <span>:</span>
          <span className="transition-opacity duration-300">{String(minutes).padStart(2, '0')}</span>
          <span>:</span>
          <span className="transition-opacity duration-300">{String(seconds).padStart(2, '0')}</span>
        </div>
        <div className="text-center text-amber-600 text-xs">
          hrs &nbsp; min &nbsp; sec
        </div>

        {/* Target date */}
        <div className="mt-3 pt-2 border-t border-amber-200">
          <p className="text-center text-amber-700 text-xs font-[family-name:var(--font-lora)]">
            February 6, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
