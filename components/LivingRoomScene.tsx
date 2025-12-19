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
