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
