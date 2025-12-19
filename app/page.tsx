"use client";

import { LivingRoomScene } from '@/components/LivingRoomScene';
import { QuoteRotator } from '@/components/QuoteRotator';
import { MoveInCelebration } from '@/components/MoveInCelebration';
import { CountdownCalendar } from '@/components/CountdownCalendar';
import { useCountdown } from '@/hooks/useCountdown';

// Move-in date: February 6, 2026
const TARGET_DATE = new Date('2026-02-06T00:00:00');

export default function Home() {
  const { isComplete } = useCountdown(TARGET_DATE);

  // Show celebration when countdown is complete
  if (isComplete) {
    return <MoveInCelebration />;
  }

  return (
    <div className="min-h-screen bg-[#FDF8F3] py-6 md:py-8 px-4">
      {/* Title */}
      <header className="text-center mb-4 md:mb-6">
        <h1 className="font-[family-name:var(--font-playfair)] text-2xl md:text-4xl text-[#8B7355] mb-1 md:mb-2">
          Trenton & Sydney&apos;s
        </h1>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-[#C4785A] font-semibold">
          First Home
        </h2>
      </header>

      {/* Countdown - centered and prominent on all screens */}
      <div className="flex justify-center mb-4 md:mb-6">
        <CountdownCalendar targetDate={TARGET_DATE} />
      </div>

      {/* Quote - below countdown on all screens */}
      <div className="mb-6 md:mb-8">
        <QuoteRotator />
      </div>

      {/* Living Room Scene */}
      <main className="mb-8">
        <LivingRoomScene targetDate={TARGET_DATE} />
      </main>
    </div>
  );
}
