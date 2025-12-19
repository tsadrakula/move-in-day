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
  { src: '/photos/polaroid1.jpg', alt: 'Adventure', rotation: -8, variant: 'tape' as const },
  { src: '/photos/polaroid2.jpg', alt: 'Fun times', rotation: 5, variant: 'pin' as const },
  { src: '/photos/polaroid3.jpg', alt: 'Love', rotation: -3, variant: 'tape' as const },
  { src: '/photos/polaroid4.jpg', alt: 'Memories', rotation: 6, variant: 'pin' as const },
  { src: '/photos/polaroid5.jpg', alt: 'Us', rotation: -4, variant: 'tape' as const },
];

export function LivingRoomScene({ targetDate }: LivingRoomSceneProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Wall background */}
      <div
        className="relative rounded-lg p-4 md:p-8 shadow-inner min-h-[400px] md:min-h-[520px]"
        style={{
          background: 'linear-gradient(180deg, #E8DED1 0%, #DDD4C6 50%, #D5CBC0 100%)',
        }}
      >
        {/* Dust particles */}
        <DustParticles />

        {/* Subtle wall texture */}
        <div
          className="absolute inset-0 opacity-10 rounded-lg pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Window on left - higher z-index so it's not covered */}
        <div className="absolute top-8 left-6 w-28 h-36 bg-sky-100 rounded border-[10px] border-amber-800 shadow-lg hidden lg:block z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50" />
          <div className="absolute inset-0 flex">
            <div className="w-1/2 border-r-4 border-amber-800" />
          </div>
          <div className="absolute top-1/2 left-0 right-0 border-t-4 border-amber-800" />
          {/* Curtains */}
          <div className="absolute -left-5 -top-2 w-7 h-40 bg-[#FDF8F3] rounded-b opacity-90 shadow-sm" />
          <div className="absolute -right-5 -top-2 w-7 h-40 bg-[#FDF8F3] rounded-b opacity-90 shadow-sm" />
        </div>

        {/* Calendar on right - part of the wall scene */}
        <div className="absolute top-6 right-6 z-20 hidden md:block">
          <CountdownCalendar targetDate={targetDate} />
        </div>

        {/* Main content - Desktop layout */}
        <div className="hidden md:flex flex-col items-center justify-center pt-4 relative z-10">
          {/* Top row - polaroids spread in the middle area (not touching window or calendar) */}
          <div className="flex justify-center items-start gap-8 lg:gap-16 mb-6">
            <div className="transform -translate-y-2">
              <PolaroidPhoto {...polaroidPhotos[0]} />
            </div>
            <div className="transform translate-y-4">
              <PolaroidPhoto {...polaroidPhotos[1]} />
            </div>
            <div className="transform -translate-y-1">
              <PolaroidPhoto {...polaroidPhotos[2]} />
            </div>
          </div>

          {/* Fireplace with mantel photos */}
          <div className="relative mt-4">
            <Fireplace />

            {/* Photos on mantel */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex items-end gap-4 lg:gap-6">
              <FramedPhoto src={mantelPhotos[0].src} alt={mantelPhotos[0].alt} size="small" />
              <FramedPhoto src={mantelPhotos[1].src} alt={mantelPhotos[1].alt} size="large" />
              <FramedPhoto src={mantelPhotos[2].src} alt={mantelPhotos[2].alt} size="medium" />
            </div>
          </div>

          {/* Bottom row polaroids */}
          <div className="flex justify-center items-start gap-12 lg:gap-24 mt-10">
            <div className="transform translate-y-2">
              <PolaroidPhoto {...polaroidPhotos[3]} />
            </div>
            <div className="transform -translate-y-3">
              <PolaroidPhoto {...polaroidPhotos[4]} />
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center pt-4 relative z-10">
          {/* Mobile calendar at top */}
          <div className="mb-4">
            <CountdownCalendar targetDate={targetDate} />
          </div>

          {/* Polaroids row 1 */}
          <div className="flex justify-center gap-2 mb-4">
            <PolaroidPhoto {...polaroidPhotos[0]} />
            <PolaroidPhoto {...polaroidPhotos[1]} />
          </div>

          {/* Fireplace with mantel photos */}
          <div className="relative scale-90">
            <Fireplace />
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex items-end gap-2">
              <FramedPhoto src={mantelPhotos[0].src} alt={mantelPhotos[0].alt} size="small" />
              <FramedPhoto src={mantelPhotos[1].src} alt={mantelPhotos[1].alt} size="medium" />
              <FramedPhoto src={mantelPhotos[2].src} alt={mantelPhotos[2].alt} size="small" />
            </div>
          </div>

          {/* Polaroids row 2 */}
          <div className="flex justify-center gap-2 mt-6">
            <PolaroidPhoto {...polaroidPhotos[2]} />
            <PolaroidPhoto {...polaroidPhotos[3]} />
            <PolaroidPhoto {...polaroidPhotos[4]} />
          </div>
        </div>
      </div>
    </div>
  );
}
