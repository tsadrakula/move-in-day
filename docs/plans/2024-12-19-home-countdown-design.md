# Trenton & Sydney's First Home Countdown

## Overview

A warm, cozy countdown page celebrating Trenton and Sydney's upcoming move-in day on February 6, 2026. The design presents a stylized illustrated living room scene with a fireplace, photo gallery, and integrated countdown calendar.

## Visual Design

### The Scene

A flat, illustrative living room wall (indie game/children's book aesthetic) featuring:

- **Window (left):** Soft cream curtains, hint of sky visible
- **Fireplace (center):** Brick fireplace with animated warm glow/flicker
- **Mantel:** Wooden mantel holding framed photos and small decor
- **Calendar (right):** Wall calendar containing the countdown display
- **Photos:** Polaroid-style photos scattered/pinned around the scene
- **Ambient:** Soft floating dust particles drifting through the air

### Color Palette

Warm neutrals:
- Cream / Off-white (#FDF8F3)
- Warm brown (#8B7355)
- Soft beige (#E8DED1)
- Terracotta accent (#C4785A)
- Soft gold (#D4A962)

### Typography

- **Title:** Warm, slightly hand-drawn serif (Playfair Display or similar)
- **Countdown numbers:** Clean, readable serif
- **Quotes:** Slightly italic serif (Lora or similar)

## Photo Gallery

### Framed Photos on Mantel (3-4 photos)
- Decorative frames in warm wood or antique gold
- One larger feature frame center, smaller ones on sides
- Formal shots: engagement photo, couple portraits
- **Dimensions:** 400×500px (4:5 portrait ratio)

### Polaroid-Style Photos on Wall (4-5 photos)
- Scattered around fireplace, slightly tilted angles
- Washi tape or pushpin styling
- Classic white Polaroid border with cream/aged tint
- Candid/fun shots: adventures, silly moments, everyday love
- **Dimensions:** 350×400px (image area, border adds ~40px)

### Photo Interactions
- Subtle shadow for depth
- Hover: gentle lift (scale 1.02, translateY -2px, 0.3s ease)

## Countdown Display

### Wall Calendar Design

Rustic paper calendar with cream background, soft brown edges:

```
┌─────────────────┐
│  Until We're    │
│     Home        │
│                 │
│      47         │
│     days        │
│                 │
│  12:34:56       │
│  hrs min sec    │
│                 │
│ February 6, 2026│
└─────────────────┘
```

- Paper texture with tiny string/nail at top
- Seconds tick with gentle fade transition (not jarring snap)

## Quotes System

### Display Style
- Positioned below the illustrated scene
- Centered, max-width contained for nice wrapping
- Warm brown or terracotta text color
- Slightly italic serif font

### Transition
- Fade out: 1.5s
- Pause: 0.3s
- Fade in: 1.5s
- New quote every 8-10 seconds

### Quote Categories (100+ total)
- Love & partnership
- New beginnings
- Building a life together
- Engagement & commitment
- Cozy/home vibes
- Future dreams
- Playful/fun

## Animations

### Fireplace Glow
- CSS animation pulsing orange/yellow glow
- Slight opacity and color temperature shifts
- Warm flicker every 2-3 seconds

### Floating Dust Particles
- 15-20 small cream/white dots
- Drift slowly across scene via CSS keyframes
- Very subtle and slow-moving

### Quote Transitions
- Gentle fade as described above

### Countdown Tick
- Seconds update with gentle opacity fade

## Move-In Day Celebration

### Trigger
When countdown reaches zero (February 6, 2026)

### Sequence
1. Living room scene gently fades/slides back
2. Illustrated front door appears (warm wood, welcoming wreath)
3. Brief pause for anticipation
4. Door swings open with gentle animation
5. Confetti bursts from behind door (react-confetti)
6. Message revealed: "Welcome Home, Trenton & Sydney!"

### Confetti Details
- Colors: cream, terracotta, warm brown, soft gold
- Duration: 5-6 seconds then stops
- Density: medium (celebratory but not overwhelming)

### Post-Celebration State
- Door stays open with welcome message
- Below: "February 6, 2026 — Your new chapter begins"
- Quotes continue with "welcome home" / "new beginnings" theme

## Responsive Design

### Desktop
Full scene as described

### Tablet
Scene scales down proportionally

### Mobile
Vertical stack:
1. Title
2. Simplified scene (fireplace + key photos)
3. Countdown
4. Quotes

## Technical Stack

- Next.js 16 with App Router
- React 19
- Tailwind CSS 4
- react-confetti for celebration
- Illustrations via CSS/SVG (no external dependencies except user photos)
- Quotes stored in TypeScript object by category

## File Structure

```
app/
  page.tsx              # Main countdown page
  globals.css           # Global styles, animations
components/
  LivingRoomScene.tsx   # Main illustrated scene
  Fireplace.tsx         # Fireplace with glow animation
  PhotoGallery.tsx      # Mantel frames + Polaroids
  CountdownCalendar.tsx # Wall calendar with countdown
  QuoteRotator.tsx      # Rotating quotes display
  DustParticles.tsx     # Ambient floating particles
  MoveInCelebration.tsx # Door opening + confetti
data/
  quotes.ts             # 100+ quotes organized by category
public/
  photos/               # User-provided photos
```

## Image Requirements Summary

Provide to implement:
- **3-4 portrait photos:** 400×500px (for mantel frames)
- **4-5 candid photos:** 350×400px (for Polaroids)
