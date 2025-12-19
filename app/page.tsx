"use client";

import { LivingRoomScene } from '@/components/LivingRoomScene';
import { QuoteRotator } from '@/components/QuoteRotator';
import { MoveInCelebration } from '@/components/MoveInCelebration';
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
    <div className="min-h-screen bg-[#FDF8F3] py-8 px-4">
      {/* Title */}
      <header className="text-center mb-8">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#8B7355] mb-2">
          Trenton & Sydney&apos;s
        </h1>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#C4785A] font-semibold">
          First Home
        </h2>
      </header>

      {/* Living Room Scene */}
      <main className="mb-12">
        <LivingRoomScene targetDate={TARGET_DATE} />
      </main>

      {/* Rotating Quotes */}
      <footer className="pb-8">
        <QuoteRotator />
      </footer>
    </div>
  );
}
