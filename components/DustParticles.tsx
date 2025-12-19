"use client";

import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

export function DustParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client to avoid hydration mismatch
    setParticles(
      [...Array(20)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 10,
      }))
    );
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
