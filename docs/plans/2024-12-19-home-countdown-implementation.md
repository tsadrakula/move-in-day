# Home Countdown Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a warm, cozy countdown page for Trenton & Sydney's first home move-in day (February 6, 2026) featuring an illustrated living room scene with photos, animated fireplace, rotating quotes, and a celebration on move-in day.

**Architecture:** Single-page Next.js app with modular React components. CSS/SVG illustrations (no external image dependencies except user photos). Client-side countdown with react-confetti for celebration.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, react-confetti, Google Fonts (Playfair Display, Lora)

---

## Task 1: Install Dependencies & Setup Fonts

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: `package.json`

**Step 1: Install react-confetti**

Run:
```bash
bun add react-confetti
```

**Step 2: Update layout.tsx with fonts and metadata**

Replace `app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trenton & Sydney's First Home",
  description: "Counting down to our move-in day - February 6, 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

**Step 3: Update globals.css with color palette and base styles**

Replace `app/globals.css`:
```css
@import "tailwindcss";

:root {
  --color-cream: #FDF8F3;
  --color-warm-brown: #8B7355;
  --color-beige: #E8DED1;
  --color-terracotta: #C4785A;
  --color-soft-gold: #D4A962;
  --color-brick: #A0522D;
  --color-brick-dark: #8B4513;
  --font-playfair: var(--font-playfair);
  --font-lora: var(--font-lora);
}

@theme inline {
  --color-cream: #FDF8F3;
  --color-warm-brown: #8B7355;
  --color-beige: #E8DED1;
  --color-terracotta: #C4785A;
  --color-soft-gold: #D4A962;
  --color-brick: #A0522D;
  --color-brick-dark: #8B4513;
  --font-playfair: var(--font-playfair);
  --font-lora: var(--font-lora);
}

body {
  background: var(--color-cream);
  color: var(--color-warm-brown);
  font-family: var(--font-lora), Georgia, serif;
}

@keyframes fireGlow {
  0%, 100% { opacity: 0.8; filter: brightness(1); }
  50% { opacity: 1; filter: brightness(1.1); }
}

@keyframes firePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-10px) translateX(5px); }
  50% { transform: translateY(-5px) translateX(-3px); }
  75% { transform: translateY(-15px) translateX(2px); }
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0; }
  10%, 90% { opacity: 1; }
}

@keyframes gentleBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes doorOpen {
  0% { transform: perspective(1000px) rotateY(0deg); }
  100% { transform: perspective(1000px) rotateY(-85deg); }
}
```

**Step 4: Verify setup**

Run:
```bash
bun run dev
```
Expected: App starts without errors

**Step 5: Commit**

```bash
git add -A && git commit -m "chore: setup fonts and color palette"
```

---

## Task 2: Create Quotes Data

**Files:**
- Create: `data/quotes.ts`

**Step 1: Create quotes data file**

Create `data/quotes.ts`:
```ts
export interface Quote {
  text: string;
  category: 'love' | 'newBeginnings' | 'together' | 'engagement' | 'home' | 'future' | 'playful';
}

export const quotes: Quote[] = [
  // Love & Partnership
  { text: "Home is wherever I'm with you.", category: 'love' },
  { text: "You are my today and all of my tomorrows.", category: 'love' },
  { text: "I love you not only for what you are, but for what I am when I am with you.", category: 'love' },
  { text: "In all the world, there is no heart for me like yours.", category: 'love' },
  { text: "You're my favorite hello and my hardest goodbye.", category: 'love' },
  { text: "I fell in love the way you fall asleep: slowly, then all at once.", category: 'love' },
  { text: "Whatever our souls are made of, yours and mine are the same.", category: 'love' },
  { text: "I would rather spend one lifetime with you than face all the ages of this world alone.", category: 'love' },
  { text: "You are the best thing that's ever been mine.", category: 'love' },
  { text: "My heart is, and always will be, yours.", category: 'love' },
  { text: "I choose you. And I'll choose you over and over and over.", category: 'love' },
  { text: "You're the one I want to annoy for the rest of my life.", category: 'love' },
  { text: "I love you more than yesterday, less than tomorrow.", category: 'love' },
  { text: "You're my person.", category: 'love' },
  { text: "I never want to stop making memories with you.", category: 'love' },

  // New Beginnings
  { text: "Every love story is beautiful, but ours is my favorite.", category: 'newBeginnings' },
  { text: "The best is yet to come.", category: 'newBeginnings' },
  { text: "Here's to new beginnings and happy endings.", category: 'newBeginnings' },
  { text: "A new chapter begins.", category: 'newBeginnings' },
  { text: "This is the start of something beautiful.", category: 'newBeginnings' },
  { text: "And so the adventure begins.", category: 'newBeginnings' },
  { text: "New place, same love.", category: 'newBeginnings' },
  { text: "Every ending is a new beginning.", category: 'newBeginnings' },
  { text: "Life is about creating yourself.", category: 'newBeginnings' },
  { text: "The beginning is always today.", category: 'newBeginnings' },
  { text: "Start where you are. Use what you have. Do what you can.", category: 'newBeginnings' },
  { text: "Every day is a fresh start.", category: 'newBeginnings' },
  { text: "New keys, new doors, new adventures.", category: 'newBeginnings' },
  { text: "The first step is always the hardest, but it's also the most exciting.", category: 'newBeginnings' },
  { text: "Here's to turning the page to a beautiful new chapter.", category: 'newBeginnings' },

  // Building a Life Together
  { text: "Together is a wonderful place to be.", category: 'together' },
  { text: "Two hearts, one home.", category: 'together' },
  { text: "Better together.", category: 'together' },
  { text: "Side by side or miles apart, we're connected by heart.", category: 'together' },
  { text: "Life is better when we're together.", category: 'together' },
  { text: "You + Me = Home.", category: 'together' },
  { text: "Where we love is home.", category: 'together' },
  { text: "Love grows best in little houses.", category: 'together' },
  { text: "Let's build a life we don't need a vacation from.", category: 'together' },
  { text: "Home is not a place, it's a feeling.", category: 'together' },
  { text: "The best things in life are the people you love.", category: 'together' },
  { text: "We make a good team.", category: 'together' },
  { text: "Partners in crime, partners in life.", category: 'together' },
  { text: "You're my favorite adventure.", category: 'together' },
  { text: "Together we have it all.", category: 'together' },

  // Engagement & Commitment
  { text: "I can't wait to marry you.", category: 'engagement' },
  { text: "Forever and always.", category: 'engagement' },
  { text: "You're my happily ever after.", category: 'engagement' },
  { text: "I said yes!", category: 'engagement' },
  { text: "My favorite fairytale is our love story.", category: 'engagement' },
  { text: "I found the one my heart loves.", category: 'engagement' },
  { text: "You had me at hello.", category: 'engagement' },
  { text: "I promise to love you forever, every single day of forever.", category: 'engagement' },
  { text: "You're my once in a lifetime.", category: 'engagement' },
  { text: "I'm so glad I swiped right.", category: 'engagement' },
  { text: "From this moment on.", category: 'engagement' },
  { text: "You're worth the wait.", category: 'engagement' },
  { text: "I can't wait to spend forever with you.", category: 'engagement' },
  { text: "My soulmate, my best friend, my forever.", category: 'engagement' },
  { text: "Engaged to my favorite person.", category: 'engagement' },

  // Cozy/Home Vibes
  { text: "Let's stay home.", category: 'home' },
  { text: "Home sweet home.", category: 'home' },
  { text: "Our happy place.", category: 'home' },
  { text: "Bless this mess.", category: 'home' },
  { text: "This is our happy place.", category: 'home' },
  { text: "Welcome to our story.", category: 'home' },
  { text: "Home is where the heart is.", category: 'home' },
  { text: "All you need is love and a good couch.", category: 'home' },
  { text: "There's no place like home.", category: 'home' },
  { text: "Home: where life begins and love never ends.", category: 'home' },
  { text: "Our nest is best.", category: 'home' },
  { text: "A house is made of walls and beams; a home is built with love and dreams.", category: 'home' },
  { text: "May our walls know joy.", category: 'home' },
  { text: "Peace, love, and cozy vibes.", category: 'home' },
  { text: "Welcome home.", category: 'home' },

  // Future Dreams
  { text: "Here's to the next chapter.", category: 'future' },
  { text: "Dream big, start small, begin now.", category: 'future' },
  { text: "The future belongs to those who believe in the beauty of their dreams.", category: 'future' },
  { text: "Our future looks bright.", category: 'future' },
  { text: "Building our dreams, one day at a time.", category: 'future' },
  { text: "Can't wait to see what the future holds for us.", category: 'future' },
  { text: "Growing old with you is the greatest adventure.", category: 'future' },
  { text: "Here's to love, laughter, and happily ever after.", category: 'future' },
  { text: "Our story is just beginning.", category: 'future' },
  { text: "The best is yet to be.", category: 'future' },
  { text: "Making plans, building dreams.", category: 'future' },
  { text: "Every day with you is a step toward our dreams.", category: 'future' },
  { text: "Let's create a life we love.", category: 'future' },
  { text: "Excited for all our tomorrows.", category: 'future' },
  { text: "Our journey has just begun.", category: 'future' },

  // Playful/Fun
  { text: "You're my favorite person to do nothing with.", category: 'playful' },
  { text: "You're weird. I like it.", category: 'playful' },
  { text: "Let's be weird together.", category: 'playful' },
  { text: "You're the cheese to my macaroni.", category: 'playful' },
  { text: "I love you more than pizza. And I really love pizza.", category: 'playful' },
  { text: "You're my favorite notification.", category: 'playful' },
  { text: "Netflix and actually chill.", category: 'playful' },
  { text: "Home is where the WiFi connects automatically.", category: 'playful' },
  { text: "I like you even when I'm hungry.", category: 'playful' },
  { text: "You're the avocado to my toast.", category: 'playful' },
  { text: "Let's cuddle on the couch forever.", category: 'playful' },
  { text: "You make me smile for no reason.", category: 'playful' },
  { text: "Relationship status: couch potatoes together.", category: 'playful' },
  { text: "Love you more than my phone battery.", category: 'playful' },
  { text: "Finally, someone to blame for the thermostat.", category: 'playful' },
  { text: "You're stuck with me now.", category: 'playful' },
  { text: "Can't wait to argue about what's for dinner every night.", category: 'playful' },
  { text: "Our love story: Started with Netflix, ended with IKEA furniture.", category: 'playful' },
  { text: "I promise to always let you have the last slice.", category: 'playful' },
  { text: "You're my favorite human.", category: 'playful' },
];

// Welcome home quotes for after move-in day
export const welcomeHomeQuotes: string[] = [
  "Welcome home, Trenton & Sydney!",
  "Home at last!",
  "This is where your story continues.",
  "May your new home be filled with love and laughter.",
  "A new chapter begins here.",
  "Home is where your story begins.",
  "Welcome to your happily ever after.",
  "Love lives here now.",
  "The adventure continues in your new home.",
  "May these walls witness only joy.",
];

export function getRandomQuote(): string {
  return quotes[Math.floor(Math.random() * quotes.length)].text;
}

export function getRandomWelcomeQuote(): string {
  return welcomeHomeQuotes[Math.floor(Math.random() * welcomeHomeQuotes.length)];
}
```

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: add 100+ quotes data"
```

---

## Task 3: Create Countdown Hook

**Files:**
- Create: `hooks/useCountdown.ts`

**Step 1: Create countdown hook**

Create `hooks/useCountdown.ts`:
```ts
"use client";

import { useState, useEffect } from 'react';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export function useCountdown(targetDate: Date): CountdownTime {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isComplete: false,
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}
```

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: add countdown hook"
```

---

## Task 4: Create Fireplace Component

**Files:**
- Create: `components/Fireplace.tsx`

**Step 1: Create fireplace component with CSS illustration**

Create `components/Fireplace.tsx`:
```tsx
"use client";

export function Fireplace() {
  return (
    <div className="relative w-64 h-56">
      {/* Brick surround */}
      <div className="absolute inset-0 bg-[#A0522D] rounded-t-lg">
        {/* Brick pattern */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(6)].map((_, row) => (
            <div key={row} className="flex">
              {[...Array(8)].map((_, col) => (
                <div
                  key={col}
                  className="w-8 h-4 border border-[#8B4513]/50"
                  style={{ marginLeft: row % 2 === 0 ? 0 : '16px' }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Fireplace opening */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-36 bg-[#1a1a1a] rounded-t-2xl overflow-hidden">
        {/* Fire glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-24"
          style={{ animation: 'fireGlow 2s ease-in-out infinite' }}
        >
          {/* Flame layers */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-300 rounded-full blur-sm"
            style={{ animation: 'firePulse 1.5s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full blur-sm"
            style={{ animation: 'firePulse 1.3s ease-in-out infinite 0.2s' }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-14 bg-gradient-to-t from-red-500 via-orange-400 to-yellow-300 rounded-full blur-sm"
            style={{ animation: 'firePulse 1.7s ease-in-out infinite 0.4s' }}
          />
        </div>

        {/* Logs */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          <div className="w-10 h-3 bg-amber-900 rounded-full rotate-12" />
          <div className="w-12 h-3 bg-amber-800 rounded-full -rotate-6" />
          <div className="w-8 h-3 bg-amber-900 rounded-full rotate-3" />
        </div>
      </div>

      {/* Mantel */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-72 h-6 bg-amber-800 rounded shadow-lg" />

      {/* Ambient glow effect */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-radial from-orange-400/20 to-transparent rounded-full pointer-events-none"
        style={{ animation: 'fireGlow 3s ease-in-out infinite' }}
      />
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: add fireplace component with fire animation"
```

---

## Task 5: Create Photo Gallery Components

**Files:**
- Create: `components/FramedPhoto.tsx`
- Create: `components/PolaroidPhoto.tsx`

**Step 1: Create framed photo component**

Create `components/FramedPhoto.tsx`:
```tsx
"use client";

import Image from 'next/image';

interface FramedPhotoProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

export function FramedPhoto({ src, alt, size = 'medium' }: FramedPhotoProps) {
  const sizes = {
    small: { width: 60, height: 75, frame: 8 },
    medium: { width: 80, height: 100, frame: 10 },
    large: { width: 100, height: 125, frame: 12 },
  };

  const { width, height, frame } = sizes[size];

  return (
    <div
      className="relative transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
      style={{
        width: width + frame * 2,
        height: height + frame * 2,
      }}
    >
      {/* Wooden frame */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 rounded shadow-lg"
        style={{ padding: frame }}
      >
        {/* Inner gold accent */}
        <div className="absolute inset-1 border-2 border-amber-600/50 rounded" />

        {/* Photo area */}
        <div className="relative w-full h-full bg-gray-200 overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes={`${width}px`}
          />
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Create polaroid photo component**

Create `components/PolaroidPhoto.tsx`:
```tsx
"use client";

import Image from 'next/image';

interface PolaroidPhotoProps {
  src: string;
  alt: string;
  rotation?: number;
  variant?: 'tape' | 'pin';
}

export function PolaroidPhoto({ src, alt, rotation = 0, variant = 'tape' }: PolaroidPhotoProps) {
  return (
    <div
      className="relative transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Polaroid body */}
      <div className="bg-[#FFFEF9] p-2 pb-8 shadow-lg rounded-sm">
        {/* Photo area */}
        <div className="relative w-[87px] h-[100px] bg-gray-100 overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="87px"
          />
        </div>
      </div>

      {/* Attachment decoration */}
      {variant === 'tape' && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-amber-200/70 rotate-2" />
      )}
      {variant === 'pin' && (
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-sm" />
      )}
    </div>
  );
}
```

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: add framed and polaroid photo components"
```

---

## Task 6: Create Wall Calendar Countdown Component

**Files:**
- Create: `components/CountdownCalendar.tsx`

**Step 1: Create countdown calendar component**

Create `components/CountdownCalendar.tsx`:
```tsx
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
```

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: add countdown calendar component"
```

---

## Task 7: Create Quote Rotator Component

**Files:**
- Create: `components/QuoteRotator.tsx`

**Step 1: Create quote rotator component**

Create `components/QuoteRotator.tsx`:
```tsx
"use client";

import { useState, useEffect } from 'react';
import { quotes, welcomeHomeQuotes } from '@/data/quotes';

interface QuoteRotatorProps {
  isComplete?: boolean;
}

export function QuoteRotator({ isComplete = false }: QuoteRotatorProps) {
  const [currentQuote, setCurrentQuote] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const quoteSource = isComplete ? welcomeHomeQuotes : quotes.map(q => q.text);

  useEffect(() => {
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
  }, [isComplete, quoteSource]);

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
```

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: add quote rotator component"
```

---

## Task 8: Create Dust Particles Component

**Files:**
- Create: `components/DustParticles.tsx`

**Step 1: Create dust particles component**

Create `components/DustParticles.tsx`:
```tsx
"use client";

import { useMemo } from 'react';

export function DustParticles() {
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-amber-100/40"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: add floating dust particles component"
```

---

## Task 9: Create Move-In Celebration Component

**Files:**
- Create: `components/MoveInCelebration.tsx`

**Step 1: Create celebration component**

Create `components/MoveInCelebration.tsx`:
```tsx
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
```

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: add move-in celebration with door animation and confetti"
```

---

## Task 10: Create Living Room Scene Component

**Files:**
- Create: `components/LivingRoomScene.tsx`

**Step 1: Create the main living room scene**

Create `components/LivingRoomScene.tsx`:
```tsx
"use client";

import { Fireplace } from './Fireplace';
import { FramedPhoto } from './FramedPhoto';
import { PolaroidPhoto } from './PolaroidPhoto';
import { CountdownCalendar } from './CountdownCalendar';
import { DustParticles } from './DustParticles';

interface LivingRoomSceneProps {
  targetDate: Date;
}

// Placeholder images - replace with actual photos
const mantelPhotos = [
  { src: '/photos/photo1.jpg', alt: 'Trenton and Sydney' },
  { src: '/photos/photo2.jpg', alt: 'Engagement photo' },
  { src: '/photos/photo3.jpg', alt: 'Together' },
];

const polaroidPhotos = [
  { src: '/photos/polaroid1.jpg', alt: 'Adventure', rotation: -5, variant: 'tape' as const },
  { src: '/photos/polaroid2.jpg', alt: 'Fun times', rotation: 3, variant: 'pin' as const },
  { src: '/photos/polaroid3.jpg', alt: 'Love', rotation: -2, variant: 'tape' as const },
  { src: '/photos/polaroid4.jpg', alt: 'Memories', rotation: 4, variant: 'pin' as const },
  { src: '/photos/polaroid5.jpg', alt: 'Us', rotation: -3, variant: 'tape' as const },
];

export function LivingRoomScene({ targetDate }: LivingRoomSceneProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Dust particles */}
      <DustParticles />

      {/* Wall background */}
      <div className="relative bg-gradient-to-b from-[#E8DED1] to-[#DDD4C6] rounded-lg p-8 shadow-inner min-h-[500px]">

        {/* Window on left */}
        <div className="absolute top-8 left-8 w-24 h-32 bg-sky-100 rounded border-8 border-amber-800 shadow-inner hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-sky-100" />
          <div className="absolute inset-0 flex">
            <div className="w-1/2 border-r-4 border-amber-800" />
          </div>
          {/* Curtains */}
          <div className="absolute -left-4 top-0 w-6 h-36 bg-[#FDF8F3] rounded-b opacity-90" />
          <div className="absolute -right-4 top-0 w-6 h-36 bg-[#FDF8F3] rounded-b opacity-90" />
        </div>

        {/* Main content area */}
        <div className="flex flex-col items-center justify-center pt-8">

          {/* Polaroids scattered on wall - top */}
          <div className="flex justify-center gap-4 mb-4 flex-wrap">
            {polaroidPhotos.slice(0, 3).map((photo, i) => (
              <PolaroidPhoto key={i} {...photo} />
            ))}
          </div>

          {/* Fireplace with mantel photos */}
          <div className="relative">
            <Fireplace />

            {/* Photos on mantel */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex items-end gap-3">
              <FramedPhoto src={mantelPhotos[0].src} alt={mantelPhotos[0].alt} size="small" />
              <FramedPhoto src={mantelPhotos[1].src} alt={mantelPhotos[1].alt} size="large" />
              <FramedPhoto src={mantelPhotos[2].src} alt={mantelPhotos[2].alt} size="medium" />
            </div>
          </div>

          {/* More polaroids - bottom */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {polaroidPhotos.slice(3).map((photo, i) => (
              <PolaroidPhoto key={i} {...photo} />
            ))}
          </div>
        </div>

        {/* Calendar on right */}
        <div className="absolute top-8 right-8 hidden md:block">
          <CountdownCalendar targetDate={targetDate} />
        </div>

        {/* Mobile calendar - shows below on small screens */}
        <div className="flex justify-center mt-8 md:hidden">
          <CountdownCalendar targetDate={targetDate} />
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: add living room scene composition"
```

---

## Task 11: Create Placeholder Photos

**Files:**
- Create: `public/photos/.gitkeep`
- Create: `public/photos/placeholder.tsx` (generates placeholder images)

**Step 1: Create photos directory**

```bash
mkdir -p public/photos
touch public/photos/.gitkeep
```

**Step 2: Update photo components to handle missing images gracefully**

Update `components/FramedPhoto.tsx` - add fallback:
```tsx
"use client";

import Image from 'next/image';

interface FramedPhotoProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

export function FramedPhoto({ src, alt, size = 'medium' }: FramedPhotoProps) {
  const sizes = {
    small: { width: 60, height: 75, frame: 8 },
    medium: { width: 80, height: 100, frame: 10 },
    large: { width: 100, height: 125, frame: 12 },
  };

  const { width, height, frame } = sizes[size];

  return (
    <div
      className="relative transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
      style={{
        width: width + frame * 2,
        height: height + frame * 2,
      }}
    >
      {/* Wooden frame */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 rounded shadow-lg"
        style={{ padding: frame }}
      >
        {/* Inner gold accent */}
        <div className="absolute inset-1 border-2 border-amber-600/50 rounded" />

        {/* Photo area */}
        <div className="relative w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 overflow-hidden flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes={`${width}px`}
            onError={(e) => {
              // Hide broken image, show placeholder gradient
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Placeholder heart when no image */}
          <span className="text-amber-400 text-2xl">♡</span>
        </div>
      </div>
    </div>
  );
}
```

Update `components/PolaroidPhoto.tsx` - add fallback:
```tsx
"use client";

import Image from 'next/image';

interface PolaroidPhotoProps {
  src: string;
  alt: string;
  rotation?: number;
  variant?: 'tape' | 'pin';
}

export function PolaroidPhoto({ src, alt, rotation = 0, variant = 'tape' }: PolaroidPhotoProps) {
  return (
    <div
      className="relative transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Polaroid body */}
      <div className="bg-[#FFFEF9] p-2 pb-8 shadow-lg rounded-sm">
        {/* Photo area */}
        <div className="relative w-[87px] h-[100px] bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="87px"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Placeholder heart when no image */}
          <span className="text-amber-300 text-3xl">♡</span>
        </div>
      </div>

      {/* Attachment decoration */}
      {variant === 'tape' && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-amber-200/70 rotate-2" />
      )}
      {variant === 'pin' && (
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-sm" />
      )}
    </div>
  );
}
```

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: add photo placeholders with graceful fallbacks"
```

---

## Task 12: Assemble Main Page

**Files:**
- Modify: `app/page.tsx`

**Step 1: Create the main page**

Replace `app/page.tsx`:
```tsx
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
```

**Step 2: Verify build**

Run:
```bash
bun run build
```
Expected: Build succeeds without errors

**Step 3: Run dev server and visually verify**

Run:
```bash
bun run dev
```
Expected: Page loads with living room scene, countdown, and rotating quotes

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: assemble main countdown page"
```

---

## Task 13: Add tsconfig path alias

**Files:**
- Modify: `tsconfig.json`

**Step 1: Add @ path alias for clean imports**

Update `tsconfig.json` to include:
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es2022"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Step 2: Commit**

```bash
git add -A && git commit -m "chore: add @ path alias to tsconfig"
```

---

## Task 14: Final Testing & Polish

**Step 1: Run full build**

```bash
bun run build
```

**Step 2: Run production server**

```bash
bun run start
```

**Step 3: Test countdown**

- Verify countdown updates every second
- Verify quote rotates every 8-10 seconds

**Step 4: Test celebration (optional - modify date temporarily)**

Temporarily change `TARGET_DATE` to a past date to verify celebration works.

**Step 5: Final commit**

```bash
git add -A && git commit -m "feat: complete home countdown page"
```

---

## Summary of Files Created

```
home-countdown/
├── app/
│   ├── page.tsx (modified)
│   ├── layout.tsx (modified)
│   └── globals.css (modified)
├── components/
│   ├── Fireplace.tsx
│   ├── FramedPhoto.tsx
│   ├── PolaroidPhoto.tsx
│   ├── CountdownCalendar.tsx
│   ├── QuoteRotator.tsx
│   ├── DustParticles.tsx
│   ├── MoveInCelebration.tsx
│   └── LivingRoomScene.tsx
├── data/
│   └── quotes.ts
├── hooks/
│   └── useCountdown.ts
└── public/
    └── photos/
        └── .gitkeep
```

## Photo Requirements

When ready to add photos, place them in `public/photos/`:
- `photo1.jpg`, `photo2.jpg`, `photo3.jpg` — 400×500px (mantel frames)
- `polaroid1.jpg` through `polaroid5.jpg` — 350×400px (Polaroids)
