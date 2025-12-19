"use client";

export function Fireplace() {
  // Generate brick rows with realistic offset pattern
  const brickRows = [];
  for (let row = 0; row < 7; row++) {
    const bricks = [];
    const isOffset = row % 2 === 1;
    const brickCount = isOffset ? 7 : 8;

    for (let col = 0; col < brickCount; col++) {
      bricks.push(
        <div
          key={col}
          className="h-[14px] rounded-[1px]"
          style={{
            width: '30px',
            background: `linear-gradient(135deg,
              ${col % 3 === 0 ? '#B8664D' : col % 3 === 1 ? '#A0522D' : '#8B4513'} 0%,
              ${col % 2 === 0 ? '#9A4A34' : '#8B4513'} 50%,
              ${col % 3 === 0 ? '#7A3D2D' : '#6B3D1F'} 100%)`,
            boxShadow: 'inset 0 -1px 2px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)',
          }}
        />
      );
    }

    brickRows.push(
      <div
        key={row}
        className="flex gap-[3px]"
        style={{ marginLeft: isOffset ? '16px' : '0' }}
      >
        {bricks}
      </div>
    );
  }

  return (
    <div className="relative w-72 h-60">
      {/* Brick surround with realistic texture */}
      <div
        className="absolute inset-0 rounded-t-lg overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)',
        }}
      >
        {/* Brick pattern */}
        <div className="absolute inset-0 p-2 flex flex-col gap-[3px]">
          {brickRows}
        </div>

        {/* Mortar texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Fireplace opening - arched top */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-40 overflow-hidden">
        {/* Dark interior */}
        <div
          className="absolute inset-0 bg-[#0f0f0f] rounded-t-[50%]"
          style={{
            boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.8)',
          }}
        >
          {/* Soot marks on interior */}
          <div
            className="absolute inset-0 opacity-40 rounded-t-[50%]"
            style={{
              background: 'radial-gradient(ellipse at center top, #1a1a1a 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Fire glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-28"
          style={{ animation: 'fireGlow 2s ease-in-out infinite' }}
        >
          {/* Outer glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-24 rounded-full blur-lg"
            style={{
              background: 'radial-gradient(ellipse at bottom, rgba(255,100,0,0.6) 0%, transparent 70%)',
            }}
          />

          {/* Main flames */}
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-20 rounded-[40%] blur-sm"
            style={{
              background: 'linear-gradient(to top, #ff4500 0%, #ff6b00 30%, #ffaa00 60%, #ffd700 100%)',
              animation: 'firePulse 1.5s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-2 left-[40%] w-16 h-16 rounded-[40%] blur-sm"
            style={{
              background: 'linear-gradient(to top, #ff6b00 0%, #ffaa00 50%, #fff4e0 100%)',
              animation: 'firePulse 1.3s ease-in-out infinite 0.2s',
            }}
          />
          <div
            className="absolute bottom-2 left-[55%] w-14 h-18 rounded-[40%] blur-sm"
            style={{
              background: 'linear-gradient(to top, #ff4500 0%, #ff8c00 50%, #ffd700 100%)',
              animation: 'firePulse 1.7s ease-in-out infinite 0.4s',
            }}
          />

          {/* Inner bright core */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-10 rounded-full blur-sm"
            style={{
              background: 'radial-gradient(ellipse at bottom, #fff8e0 0%, #ffcc00 40%, transparent 70%)',
              animation: 'firePulse 1s ease-in-out infinite 0.1s',
            }}
          />
        </div>

        {/* Logs */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
          <div
            className="w-12 h-4 rounded-full rotate-[15deg]"
            style={{
              background: 'linear-gradient(90deg, #3d2914 0%, #5c3d1e 50%, #3d2914 100%)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}
          />
          <div
            className="w-14 h-4 rounded-full -rotate-[8deg] -ml-3"
            style={{
              background: 'linear-gradient(90deg, #4a3520 0%, #6b4d2d 50%, #4a3520 100%)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}
          />
          <div
            className="w-10 h-4 rounded-full rotate-[5deg] -ml-3"
            style={{
              background: 'linear-gradient(90deg, #3d2914 0%, #5c3d1e 50%, #3d2914 100%)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}
          />
        </div>

        {/* Embers */}
        <div className="absolute bottom-3 left-[30%] w-1 h-1 bg-orange-500 rounded-full animate-pulse" />
        <div className="absolute bottom-4 left-[60%] w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-2 left-[45%] w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Mantel - wooden beam */}
      <div
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-80 h-7 rounded"
        style={{
          background: 'linear-gradient(180deg, #6b4423 0%, #8b5a2b 20%, #6b4423 80%, #4a3520 100%)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)',
        }}
      >
        {/* Wood grain texture */}
        <div
          className="absolute inset-0 opacity-30 rounded"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
          }}
        />
      </div>

      {/* Hearth base */}
      <div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-80 h-4 rounded-sm"
        style={{
          background: 'linear-gradient(180deg, #696969 0%, #4a4a4a 50%, #3d3d3d 100%)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
        }}
      />

      {/* Ambient glow effect */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-40 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(255,150,50,0.25) 0%, rgba(255,100,0,0.1) 40%, transparent 70%)',
          animation: 'fireGlow 3s ease-in-out infinite',
        }}
      />
    </div>
  );
}
