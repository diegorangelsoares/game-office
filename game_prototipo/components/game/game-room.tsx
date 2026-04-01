"use client"

import { Player } from "./player"
import { NPC } from "./npc"
import { Furniture } from "./furniture"

interface GameRoomProps {
  playerPosition: { x: number; y: number }
  playerDirection: "up" | "down" | "left" | "right"
}

export function GameRoom({ playerPosition, playerDirection }: GameRoomProps) {
  const npcs = [
    { id: 1, name: "Brad", x: 180, y: 220, color: "#8B4513", direction: "up" as const },
    { id: 2, name: "Alison", x: 420, y: 250, color: "#654321", direction: "down" as const },
  ]

  return (
    <div 
      className="relative w-[600px] h-[550px] overflow-hidden"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 16px,
            rgba(0,0,0,0.03) 16px,
            rgba(0,0,0,0.03) 32px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 16px,
            rgba(0,0,0,0.03) 16px,
            rgba(0,0,0,0.03) 32px
          )
        `,
        backgroundColor: "#e8dcc8"
      }}
    >
      {/* Office Area */}
      <div className="absolute top-0 left-0 right-0 h-[280px] bg-stone-300/50 border-b-4 border-stone-400">
        {/* Desks Row 1 */}
        <Furniture type="desk" x={80} y={20} variant="computer-setup" />
        <Furniture type="desk" x={200} y={20} variant="dual-monitor" />
        <Furniture type="desk" x={320} y={20} variant="gaming" />
        <Furniture type="desk" x={440} y={20} variant="laptop" />
        
        {/* Plants */}
        <Furniture type="plant" x={50} y={30} />
        <Furniture type="plant" x={530} y={30} />
        
        {/* Trophy */}
        <Furniture type="trophy" x={520} y={15} />
        
        {/* Chairs Row 1 */}
        <Furniture type="chair" x={100} y={90} />
        <Furniture type="chair" x={220} y={90} />
        <Furniture type="chair" x={340} y={90} />
        <Furniture type="chair" x={460} y={90} />

        {/* Desks Row 2 */}
        <Furniture type="desk" x={80} y={160} variant="workstation" />
        <Furniture type="desk" x={200} y={160} variant="computer-setup" />
        <Furniture type="desk" x={320} y={160} variant="dual-monitor" />
        <Furniture type="desk" x={440} y={160} variant="messy" />
        
        {/* Backpack */}
        <Furniture type="backpack" x={280} y={120} />
        
        {/* Water Cooler */}
        <Furniture type="watercooler" x={15} y={200} />
        
        {/* Chairs Row 2 */}
        <Furniture type="chair" x={100} y={230} />
        <Furniture type="chair" x={220} y={230} />
        <Furniture type="chair" x={340} y={230} />
        <Furniture type="chair" x={460} y={230} />
      </div>

      {/* Lounge Area */}
      <div className="absolute bottom-0 left-0 right-0 h-[260px]">
        {/* Carpet */}
        <div className="absolute top-[60px] left-[120px] w-[360px] h-[140px] bg-indigo-400/60 rounded-sm" />
        
        {/* Bamboo planters */}
        <Furniture type="bamboo" x={130} y={320} />
        <Furniture type="bamboo" x={180} y={320} />
        
        {/* Ping pong table */}
        <Furniture type="pingpong" x={40} y={420} />
        
        {/* Sofas */}
        <Furniture type="sofa" x={300} y={340} variant="orange-left" />
        <Furniture type="sofa" x={380} y={340} variant="orange-right" />
        <Furniture type="sofa" x={340} y={380} variant="beige" />
        
        {/* Coffee table */}
        <Furniture type="coffeetable" x={330} y={360} />
        
        {/* Lamp */}
        <Furniture type="lamp" x={270} y={320} />
        
        {/* Big plant */}
        <Furniture type="bigtree" x={480} y={320} />
        
        {/* TV Stand */}
        <Furniture type="tv" x={380} y={470} />
        
        {/* More sofas */}
        <Furniture type="sofa" x={260} y={470} variant="small" />
        <Furniture type="sofa" x={480} y={470} variant="small" />
        
        {/* Plants bottom */}
        <Furniture type="plant" x={220} y={480} />
        <Furniture type="flowerpot" x={550} y={480} />
      </div>

      {/* NPCs */}
      {npcs.map((npc) => (
        <NPC key={npc.id} {...npc} />
      ))}

      {/* Player */}
      <Player x={playerPosition.x} y={playerPosition.y} direction={playerDirection} />
    </div>
  )
}
