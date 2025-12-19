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
