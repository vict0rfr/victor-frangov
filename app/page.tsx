"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

export default function PaintApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [statusText, setStatusText] = useState("Inserts text bla bla bla")
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to white background
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = Math.round(e.clientX - rect.left)
    const y = Math.round(e.clientY - rect.top)
    setCoords({ x, y })
  }

  return (
    <div className="flex flex-col h-screen bg-[#bfbfbf] select-none">
      {/* Title bar */}
      <div className="flex items-center bg-[#010080] text-white px-2 py-0.5">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-[#bfbfbf] flex items-center justify-center border border-white">
            <span className="text-[10px] text-black font-bold">P</span>
          </div>
          <span className="text-sm">Victor Frangov - Paint</span>
        </div>
        <div className="ml-auto flex">
          <button className="w-5 h-4 bg-[#bfbfbf] border-t border-l border-r border-[#ffffff] border-b-[#464646] flex items-center justify-center">
            <div className="w-2 h-0.5 bg-black"></div>
          </button>
          <button className="w-5 h-4 bg-[#bfbfbf] border-t border-l border-r border-[#ffffff] border-b-[#464646] flex items-center justify-center mx-0.5">
            <div className="w-3 h-3 border border-black"></div>
          </button>
          <button className="w-5 h-4 bg-[#bfbfbf] border-t border-l border-r border-[#ffffff] border-b-[#464646] flex items-center justify-center">
            <div className="w-3 h-3 flex items-center justify-center">
              <div className="w-2 h-2 bg-black"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Menu bar */}
      <div className="flex bg-[#bfbfbf] text-black text-sm px-1 py-0.5 border-b border-[#7f7f7f]">
        <button className="px-2 hover:bg-[#010080] hover:text-white">File</button>
        <button className="px-2 hover:bg-[#010080] hover:text-white">Edit</button>
        <button className="px-2 hover:bg-[#010080] hover:text-white">View</button>
        <button className="px-2 hover:bg-[#010080] hover:text-white">Image</button>
        <button className="px-2 hover:bg-[#010080] hover:text-white">Options</button>
        <button className="px-2 hover:bg-[#010080] hover:text-white">Help</button>
      </div>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left toolbar */}
        <div className="w-16 bg-[#bfbfbf] border-r border-[#7f7f7f] flex flex-col">
          <div className="grid grid-cols-2 p-1">
            {Array(16)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 border border-t-[#ffffff] border-l-[#ffffff] border-r-[#5b5b5b] border-b-[#5b5b5b] ${i === 0 ? "bg-white" : ""}`}
                >
                  {i === 0 && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-black"></div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Canvas area */}
        <div className="flex-1 bg-[#8e8e8e] p-1 overflow-auto">
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            className="bg-white border border-black"
            onMouseMove={handleMouseMove}
          />
        </div>
      </div>

      {/* Color palette */}
      <div className="h-8 bg-[#bfbfbf] border-t border-[#7f7f7f] flex">
        <div className="grid grid-cols-14 h-full">
          {Array(28)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 border border-t-[#ffffff] border-l-[#ffffff] border-r-[#5b5b5b] border-b-[#5b5b5b] ${i === 0 ? "bg-black" : ""}`}
              />
            ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="h-6 bg-[#bfbfbf] border-t border-[#7f7f7f] flex items-center px-1 text-xs">
        <div className="border border-inset bg-[#d9d9d9] px-2 py-0.5 flex-1">{statusText}</div>
        <div className="border border-inset bg-[#d9d9d9] px-2 py-0.5 ml-1 w-24">
          coords {coords.x},{coords.y}
        </div>
        <div className="border border-inset bg-[#d9d9d9] px-2 py-0.5 ml-1 w-16">random</div>
      </div>
    </div>
  )
}
