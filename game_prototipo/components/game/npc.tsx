"use client"

import { Headphones } from "lucide-react"

interface NPCProps {
  name: string
  x: number
  y: number
  color: string
  direction: "up" | "down" | "left" | "right"
}

export function NPC({ name, x, y, color, direction }: NPCProps) {
  return (
    <div
      className="absolute z-10"
      style={{ left: x, top: y }}
    >
      {/* Name tag */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-800/90 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap flex items-center gap-1">
        <Headphones className="w-3 h-3 text-green-400" />
        {name}
        <span className="text-orange-400">◀</span>
      </div>
      
      {/* Pixel character */}
      <div className="relative w-8 h-10">
        {/* Shadow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-2 bg-black/20 rounded-full" />
        
        {/* Body */}
        <svg viewBox="0 0 32 40" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
          {/* Hair */}
          <rect x="8" y="0" width="16" height="6" fill={color} />
          <rect x="6" y="4" width="4" height="10" fill={color} />
          <rect x="22" y="4" width="4" height="10" fill={color} />
          <rect x="8" y="6" width="16" height="4" fill={color} />
          
          {/* Head */}
          <rect x="10" y="8" width="12" height="10" fill="#deb887" />
          
          {/* Face based on direction */}
          {direction === "down" && (
            <>
              <rect x="12" y="11" width="2" height="2" fill="#333" />
              <rect x="18" y="11" width="2" height="2" fill="#333" />
              <rect x="14" y="15" width="4" height="1" fill="#333" />
            </>
          )}
          {direction === "up" && (
            <rect x="10" y="8" width="12" height="10" fill={color} />
          )}
          
          {/* Body/Shirt */}
          <rect x="8" y="18" width="16" height="12" fill="#e57373" />
          <rect x="10" y="20" width="12" height="2" fill="#ef5350" />
          
          {/* Arms */}
          <rect x="4" y="18" width="4" height="10" fill="#deb887" />
          <rect x="24" y="18" width="4" height="10" fill="#deb887" />
          
          {/* Legs */}
          <rect x="10" y="30" width="5" height="8" fill="#5c6bc0" />
          <rect x="17" y="30" width="5" height="8" fill="#5c6bc0" />
          
          {/* Shoes */}
          <rect x="9" y="36" width="6" height="4" fill="#333" />
          <rect x="17" y="36" width="6" height="4" fill="#333" />
        </svg>
      </div>
    </div>
  )
}
