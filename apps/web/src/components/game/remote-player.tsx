"use client";

interface RemotePlayerProps {
  x: number;
  y: number;
  name: string;
  direction?: "up" | "down" | "left" | "right";
}

export function RemotePlayer({ x, y, name, direction = "down" }: RemotePlayerProps) {
  return (
    <div className="absolute z-[15] transition-all duration-75 ease-linear" style={{ left: x, top: y }}>
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-stone-800/90 px-2 py-0.5 text-xs text-emerald-200">
        {name}
      </div>

      <div className="relative h-10 w-8">
        <div className="absolute bottom-0 left-1/2 h-2 w-6 -translate-x-1/2 rounded-full bg-black/20" />

        <svg viewBox="0 0 32 40" className="h-full w-full" style={{ imageRendering: "pixelated" }}>
          <rect x="8" y="2" width="16" height="4" fill="#166534" />
          <rect x="6" y="4" width="4" height="8" fill="#166534" />
          <rect x="22" y="4" width="4" height="8" fill="#166534" />

          <rect x="10" y="6" width="12" height="10" fill="#deb887" />

          {direction === "down" && (
            <>
              <rect x="12" y="9" width="2" height="2" fill="#333" />
              <rect x="18" y="9" width="2" height="2" fill="#333" />
              <rect x="14" y="13" width="4" height="1" fill="#333" />
            </>
          )}
          {direction === "up" && <rect x="10" y="6" width="12" height="10" fill="#166534" />}
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

          <rect x="8" y="16" width="16" height="12" fill="#22c55e" />
          <rect x="10" y="18" width="12" height="2" fill="#16a34a" />

          <rect x="4" y="16" width="4" height="10" fill="#deb887" />
          <rect x="24" y="16" width="4" height="10" fill="#deb887" />

          <rect x="10" y="28" width="5" height="8" fill="#4a5568" />
          <rect x="17" y="28" width="5" height="8" fill="#4a5568" />

          <rect x="9" y="34" width="6" height="4" fill="#333" />
          <rect x="17" y="34" width="6" height="4" fill="#333" />
        </svg>
      </div>
    </div>
  );
}
