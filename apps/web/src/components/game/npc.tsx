"use client";

interface NPCProps {
  name: string;
  x: number;
  y: number;
  color: string;
  direction: "up" | "down" | "left" | "right";
}

export function NPC({ name, x, y, color, direction }: NPCProps) {
  return (
    <div className="absolute z-10" style={{ left: x, top: y }}>
      <div className="absolute -top-8 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-stone-800/90 px-2 py-0.5 text-xs text-white">
        <svg viewBox="0 0 24 24" className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 13a8 8 0 0 1 16 0" />
          <rect x="2" y="12" width="4" height="7" rx="2" />
          <rect x="18" y="12" width="4" height="7" rx="2" />
        </svg>
        {name}
        <span className="text-orange-400">◀</span>
      </div>

      <div className="relative h-10 w-8">
        <div className="absolute bottom-0 left-1/2 h-2 w-6 -translate-x-1/2 rounded-full bg-black/20" />

        <svg viewBox="0 0 32 40" className="h-full w-full" style={{ imageRendering: "pixelated" }}>
          <rect x="8" y="0" width="16" height="6" fill={color} />
          <rect x="6" y="4" width="4" height="10" fill={color} />
          <rect x="22" y="4" width="4" height="10" fill={color} />
          <rect x="8" y="6" width="16" height="4" fill={color} />

          <rect x="10" y="8" width="12" height="10" fill="#deb887" />

          {direction === "down" && (
            <>
              <rect x="12" y="11" width="2" height="2" fill="#333" />
              <rect x="18" y="11" width="2" height="2" fill="#333" />
              <rect x="14" y="15" width="4" height="1" fill="#333" />
            </>
          )}
          {direction === "up" && <rect x="10" y="8" width="12" height="10" fill={color} />}

          <rect x="8" y="18" width="16" height="12" fill="#e57373" />
          <rect x="10" y="20" width="12" height="2" fill="#ef5350" />

          <rect x="4" y="18" width="4" height="10" fill="#deb887" />
          <rect x="24" y="18" width="4" height="10" fill="#deb887" />

          <rect x="10" y="30" width="5" height="8" fill="#5c6bc0" />
          <rect x="17" y="30" width="5" height="8" fill="#5c6bc0" />

          <rect x="9" y="36" width="6" height="4" fill="#333" />
          <rect x="17" y="36" width="6" height="4" fill="#333" />
        </svg>
      </div>
    </div>
  );
}
