"use client";

import { useState, useEffect } from 'react';
import { quotes, welcomeHomeQuotes } from '@/data/quotes';

interface QuoteRotatorProps {
  isComplete?: boolean;
}

export function QuoteRotator({ isComplete = false }: QuoteRotatorProps) {
  const [currentQuote, setCurrentQuote] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const quoteSource = isComplete ? welcomeHomeQuotes : quotes.map(q => q.text);

    // Set initial quote
    setCurrentQuote(quoteSource[Math.floor(Math.random() * quoteSource.length)]);

    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      // After fade out, change quote and fade in
      setTimeout(() => {
        setCurrentQuote(quoteSource[Math.floor(Math.random() * quoteSource.length)]);
        setIsVisible(true);
      }, 1500);
    }, 8000);

    return () => clearInterval(interval);
  }, [isComplete]);

  return (
    <div className="text-center max-w-md mx-auto px-4">
      <p
        className="font-[family-name:var(--font-lora)] text-lg italic text-[#8B7355] transition-opacity duration-[1500ms]"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        &ldquo;{currentQuote}&rdquo;
      </p>
    </div>
  );
}
