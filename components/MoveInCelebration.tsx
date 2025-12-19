"use client";

import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { QuoteRotator } from './QuoteRotator';

export function MoveInCelebration() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [doorOpen, setDoorOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    // Animation sequence
    const doorTimer = setTimeout(() => setDoorOpen(true), 1000);
    const messageTimer = setTimeout(() => setShowMessage(true), 2000);
    const confettiTimer = setTimeout(() => setShowConfetti(false), 7000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(doorTimer);
      clearTimeout(messageTimer);
      clearTimeout(confettiTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF8F3] flex flex-col items-center justify-center p-8">
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          colors={['#FDF8F3', '#C4785A', '#8B7355', '#D4A962', '#E8DED1']}
          numberOfPieces={200}
          recycle={false}
        />
      )}

      {/* Door scene */}
      <div className="relative mb-8">
        {/* Door frame */}
        <div className="relative w-48 h-72 bg-amber-900 rounded-t-lg p-2">
          {/* Door */}
          <div
            className="relative w-full h-full bg-amber-700 rounded-t overflow-hidden origin-left transition-transform duration-1000"
            style={{
              transform: doorOpen ? 'perspective(1000px) rotateY(-85deg)' : 'perspective(1000px) rotateY(0deg)',
            }}
          >
            {/* Door panels */}
            <div className="absolute top-4 left-4 right-4 h-24 border-4 border-amber-800 rounded" />
            <div className="absolute top-32 left-4 right-4 h-24 border-4 border-amber-800 rounded" />

            {/* Door knob */}
            <div className="absolute top-1/2 right-3 w-4 h-4 bg-amber-500 rounded-full shadow-inner" />

            {/* Wreath */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 border-8 border-green-700 rounded-full">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-6 bg-red-600 rounded-sm" />
            </div>
          </div>

          {/* Golden light inside */}
          <div
            className="absolute inset-2 bg-gradient-to-b from-amber-200 to-amber-100 rounded-t -z-10 transition-opacity duration-500"
            style={{ opacity: doorOpen ? 1 : 0 }}
          />
        </div>

        {/* Welcome mat */}
        <div className="w-56 h-8 bg-amber-800 rounded mx-auto -mt-1 flex items-center justify-center">
          <span className="text-amber-200 text-xs font-semibold tracking-wider">WELCOME</span>
        </div>
      </div>

      {/* Welcome message */}
      <div
        className="text-center transition-all duration-1000"
        style={{
          opacity: showMessage ? 1 : 0,
          transform: showMessage ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        <h1
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#C4785A] mb-4"
          style={{ animation: showMessage ? 'gentleBounce 2s ease-in-out' : 'none' }}
        >
          Welcome Home,
        </h1>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#8B7355] mb-6">
          Trenton & Sydney!
        </h2>
        <p className="text-[#8B7355] mb-8">
          February 6, 2026 — Your new chapter begins
        </p>
      </div>

      {/* Quotes continue */}
      <QuoteRotator isComplete={true} />
    </div>
  );
}
