"use client";

export function PlayerInfo() {
  return (
    <div className="absolute -left-20 top-12 z-30">
      <div className="flex items-center gap-2 rounded-full bg-stone-800/90 px-3 py-1.5 text-xs text-white shadow-lg">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
        <span className="font-medium">You</span>
      </div>

      <div className="mt-2 flex justify-center">
        <div className="relative h-12 w-10">
          <svg viewBox="0 0 32 40" className="h-full w-full" style={{ imageRendering: "pixelated" }}>
            <rect x="8" y="2" width="16" height="4" fill="#2d2d2d" />
            <rect x="6" y="4" width="4" height="8" fill="#2d2d2d" />
            <rect x="22" y="4" width="4" height="8" fill="#2d2d2d" />

            <rect x="10" y="6" width="12" height="10" fill="#deb887" />
            <rect x="12" y="9" width="2" height="2" fill="#333" />
            <rect x="18" y="9" width="2" height="2" fill="#333" />
            <rect x="14" y="13" width="4" height="1" fill="#333" />

            <rect x="8" y="16" width="16" height="12" fill="#4a90d9" />
            <rect x="10" y="18" width="12" height="2" fill="#3a7fc9" />

            <rect x="4" y="16" width="4" height="10" fill="#deb887" />
            <rect x="24" y="16" width="4" height="10" fill="#deb887" />

            <rect x="10" y="28" width="5" height="8" fill="#4a5568" />
            <rect x="17" y="28" width="5" height="8" fill="#4a5568" />

            <rect x="9" y="34" width="6" height="4" fill="#333" />
            <rect x="17" y="34" width="6" height="4" fill="#333" />
          </svg>
        </div>
      </div>
    </div>
  );
}
