"use client"

import { useEffect, useState } from "react"

/**
 * Pipeline Visual Component
 * Visualizes the transformation: INPUT (chaotic documents) → SUTRA CORE (processing) → OUTPUT (clean workflows)
 */
export function PipelineVisual() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="w-full max-w-5xl mx-auto relative py-12">
      {/* Pipeline Container */}
      <div className="relative flex items-center justify-between gap-4 md:gap-8">
        {/* INPUT Section */}
        <div className={`flex-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-300/30 shadow-lg">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-red-600 mb-2">INPUT</h3>
              <p className="text-sm text-red-700/80">Giấy tờ lộn xộn</p>
            </div>
            {/* Chaotic documents illustration */}
            <div className="relative h-32 flex items-end justify-center gap-2">
              <div className="w-8 h-12 bg-red-400/60 rounded rotate-12 transform"></div>
              <div className="w-10 h-14 bg-orange-400/60 rounded -rotate-6 transform"></div>
              <div className="w-8 h-10 bg-red-500/60 rounded rotate-6 transform"></div>
              <div className="w-9 h-13 bg-orange-500/60 rounded -rotate-12 transform"></div>
              <div className="w-7 h-11 bg-red-400/60 rounded rotate-3 transform"></div>
            </div>
            {/* Error indicators */}
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">!</div>
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✗</div>
            </div>
          </div>
        </div>

        {/* Arrow/Flow Indicator */}
        <div className="flex-shrink-0 flex flex-col items-center gap-2">
          <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 rounded-full"></div>
          <div className="w-0 h-0 border-l-8 border-l-blue-500 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>

        {/* SUTRA CORE Section */}
        <div className={`flex-shrink-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative">
            {/* Glowing core cube */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white/20 backdrop-blur-md relative overflow-hidden">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-400/50 animate-pulse"></div>
              
              {/* Core content */}
              <div className="relative z-10 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">S</div>
                <div className="text-xs md:text-sm text-white/90 font-semibold">SUTRA</div>
                <div className="text-xs text-white/80">CORE</div>
              </div>

              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path d="M20,50 L40,50 M60,50 L80,50 M50,20 L50,40 M50,60 L50,80" stroke="white" strokeWidth="1" />
                  <circle cx="50" cy="50" r="8" fill="white" />
                </svg>
              </div>
            </div>

            {/* AI Brain icon */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Arrow/Flow Indicator */}
        <div className="flex-shrink-0 flex flex-col items-center gap-2">
          <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 rounded-full"></div>
          <div className="w-0 h-0 border-l-8 border-l-green-500 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>

        {/* OUTPUT Section */}
        <div className={`flex-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-300/30 shadow-lg">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-green-600 mb-2">OUTPUT</h3>
              <p className="text-sm text-green-700/80">Quy trình sạch sẽ</p>
            </div>
            {/* Organized documents illustration */}
            <div className="relative h-32 flex items-end justify-center gap-2">
              <div className="w-8 h-12 bg-green-400/80 rounded transform"></div>
              <div className="w-8 h-14 bg-emerald-400/80 rounded transform"></div>
              <div className="w-8 h-12 bg-green-500/80 rounded transform"></div>
              <div className="w-8 h-13 bg-emerald-500/80 rounded transform"></div>
            </div>
            {/* Success indicators */}
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
            </div>
          </div>
        </div>
      </div>

      {/* Data flow lines animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping delay-500"></div>
      </div>
    </div>
  )
}



