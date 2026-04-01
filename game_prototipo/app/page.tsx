"use client"

import { useState, useEffect, useCallback } from "react"
import { GameRoom } from "@/components/game/game-room"
import { PlayerInfo } from "@/components/game/player-info"

export default function GamePage() {
  const [playerPosition, setPlayerPosition] = useState({ x: 200, y: 300 })
  const [playerDirection, setPlayerDirection] = useState<"up" | "down" | "left" | "right">("down")

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const speed = 8
    setPlayerPosition((prev) => {
      let newX = prev.x
      let newY = prev.y

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          newY = Math.max(60, prev.y - speed)
          setPlayerDirection("up")
          break
        case "ArrowDown":
        case "s":
        case "S":
          newY = Math.min(520, prev.y + speed)
          setPlayerDirection("down")
          break
        case "ArrowLeft":
        case "a":
        case "A":
          newX = Math.max(20, prev.x - speed)
          setPlayerDirection("left")
          break
        case "ArrowRight":
        case "d":
        case "D":
          newX = Math.min(580, prev.x + speed)
          setPlayerDirection("right")
          break
      }

      return { x: newX, y: newY }
    })
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <main className="min-h-screen bg-stone-800 flex items-center justify-center p-4">
      <div className="relative">
        <PlayerInfo />
        <div className="bg-amber-100 rounded-lg p-2 shadow-2xl">
          <div className="bg-stone-200 rounded px-4 py-1 text-center mb-2 text-stone-600 font-medium text-sm">
            Product team
          </div>
          <GameRoom playerPosition={playerPosition} playerDirection={playerDirection} />
        </div>
        <div className="text-center mt-4 text-stone-400 text-sm">
          Use as setas ou WASD para mover
        </div>
      </div>
    </main>
  )
}
