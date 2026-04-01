"use client"

interface PlayerProps {
  x: number
  y: number
  direction: "up" | "down" | "left" | "right"
}

export function Player({ x, y, direction }: PlayerProps) {
  return (
    <div
      className="absolute transition-all duration-75 ease-linear z-20"
      style={{ left: x, top: y }}
    >
      {/* Name tag */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-800/90 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap flex items-center gap-1">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        You
      </div>
      
      {/* Pixel character */}
      <div className="relative w-8 h-10">
        {/* Shadow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-2 bg-black/20 rounded-full" />
        
        {/* Body */}
        <svg viewBox="0 0 32 40" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
          {/* Hair */}
          <rect x="8" y="2" width="16" height="4" fill="#2d2d2d" />
          <rect x="6" y="4" width="4" height="8" fill="#2d2d2d" />
          <rect x="22" y="4" width="4" height="8" fill="#2d2d2d" />
          
          {/* Head */}
          <rect x="10" y="6" width="12" height="10" fill="#deb887" />
          
          {/* Face based on direction */}
          {direction === "down" && (
            <>
              <rect x="12" y="9" width="2" height="2" fill="#333" />
              <rect x="18" y="9" width="2" height="2" fill="#333" />
              <rect x="14" y="13" width="4" height="1" fill="#333" />
            </>
          )}
          {direction === "up" && (
            <rect x="10" y="6" width="12" height="10" fill="#2d2d2d" />
          )}
          {direction === "left" && (
            <>
              <rect x="10" y="9" width="2" height="2" fill="#333" />
              <rect x="12" y="13" width="3" height="1" fill="#333" />
            </>
          )}
          {direction === "right" && (
            <>
              <rect x="18" y="9" width="2" height="2" fill="#333" />
              <rect x="15" y="13" width="3" height="1" fill="#333" />
            </>
          )}
          
          {/* Body/Shirt */}
          <rect x="8" y="16" width="16" height="12" fill="#4a90d9" />
          <rect x="10" y="18" width="12" height="2" fill="#3a7fc9" />
          
          {/* Arms */}
          <rect x="4" y="16" width="4" height="10" fill="#deb887" />
          <rect x="24" y="16" width="4" height="10" fill="#deb887" />
          
          {/* Legs */}
          <rect x="10" y="28" width="5" height="8" fill="#4a5568" />
          <rect x="17" y="28" width="5" height="8" fill="#4a5568" />
          
          {/* Shoes */}
          <rect x="9" y="34" width="6" height="4" fill="#333" />
          <rect x="17" y="34" width="6" height="4" fill="#333" />
        </svg>
      </div>
    </div>
  )
}
