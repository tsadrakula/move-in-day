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
      <header className="text-center mb-4 md:mb-8">
        <h1 className="font-[family-name:var(--font-playfair)] text-2xl md:text-4xl text-[#8B7355] mb-1 md:mb-2">
          Trenton & Sydney&apos;s
        </h1>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-[#C4785A] font-semibold">
          First Home
        </h2>
      </header>

      {/* Mobile: Countdown at top */}
      <div className="md:hidden flex justify-center mb-4">
        <CountdownCalendar targetDate={TARGET_DATE} />
      </div>

      {/* Mobile: Quote below countdown */}
      <div className="md:hidden mb-6">
        <QuoteRotator />
      </div>

      {/* Desktop: Living Room Scene with embedded calendar */}
      <main className="mb-8 md:mb-12 relative">
        <LivingRoomScene targetDate={TARGET_DATE} />

        {/* Desktop: Calendar positioned on right side */}
        <div className="hidden md:block absolute top-8 right-4 lg:right-8 z-20">
          <CountdownCalendar targetDate={TARGET_DATE} />
        </div>
      </main>

      {/* Desktop: Rotating Quotes at bottom */}
      <footer className="hidden md:block pb-8">
        <QuoteRotator />
      </footer>
    </div>
  );
}
