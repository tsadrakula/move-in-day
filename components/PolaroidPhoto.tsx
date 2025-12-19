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
      <div
        className="bg-[#FFFEF9] p-2 pb-8 md:p-3 md:pb-12 shadow-lg rounded-sm"
        style={{
          background: 'linear-gradient(145deg, #FFFEF9 0%, #F8F4ED 50%, #F5F0E8 100%)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(0,0,0,0.02)',
        }}
      >
        {/* Photo area */}
        <div className="relative w-[100px] h-[115px] md:w-[150px] md:h-[175px] bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover saturate-[1.1] contrast-[1.05]"
            sizes="150px"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Polaroid color tint overlay */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-multiply"
            style={{ background: 'linear-gradient(180deg, rgba(255,248,230,0.15) 0%, rgba(210,180,140,0.1) 100%)' }}
          />
          {/* Gloss reflection */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 30%, transparent 50%, rgba(0,0,0,0.03) 100%)',
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
