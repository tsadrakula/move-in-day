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
