import React, { useEffect, useState } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  twinkleDelay: number
}

export function GalacticBackground() {
  const [stars, setStars] = useState<Star[]>([])
  const [timeOfDay, setTimeOfDay] = useState(0) // 0-1, where 0 is night and 1 is day

  useEffect(() => {
    // Generate random stars
    const generatedStars: Star[] = []
    for (let i = 0; i < 100; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        twinkleDelay: Math.random() * 3
      })
    }
    setStars(generatedStars)

    // Time cycle simulation (60 seconds = full day/night cycle)
    const interval = setInterval(() => {
      setTimeOfDay(prev => (prev + 0.0167) % 1) // 1/60 to complete cycle in 60s
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Calculate background gradient based on time of day
  const getBackgroundGradient = () => {
    if (timeOfDay < 0.25) {
      // Night
      return 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800'
    } else if (timeOfDay < 0.5) {
      // Sunrise
      return 'bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600'
    } else if (timeOfDay < 0.75) {
      // Day
      return 'bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200'
    } else {
      // Sunset
      return 'bg-gradient-to-br from-orange-500 via-red-500 to-purple-800'
    }
  }

  const getSunMoonPosition = () => {
    const angle = timeOfDay * Math.PI * 2
    const x = 50 + Math.cos(angle - Math.PI / 2) * 40
    const y = 50 + Math.sin(angle - Math.PI / 2) * 30
    return { x, y }
  }

  const { x: celestialX, y: celestialY } = getSunMoonPosition()
  const isDay = timeOfDay > 0.25 && timeOfDay < 0.75

  return (
    <div className={`fixed inset-0 -z-10 transition-colors duration-1000 ${getBackgroundGradient()}`}>
      {/* Celestial Body (Sun/Moon) */}
      <div
        className={`absolute w-16 h-16 rounded-full transition-all duration-1000 ${
          isDay 
            ? 'bg-gradient-to-br from-yellow-300 to-orange-400 shadow-[0_0_60px_rgba(255,255,0,0.6)]' 
            : 'bg-gradient-to-br from-gray-200 to-gray-300 shadow-[0_0_40px_rgba(255,255,255,0.4)]'
        }`}
        style={{
          left: `${celestialX}%`,
          top: `${celestialY}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Stars (visible mostly at night) */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white transition-opacity duration-1000 ${
            isDay ? 'opacity-10' : 'opacity-80'
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle 3s ease-in-out infinite ${star.twinkleDelay}s`
          }}
        />
      ))}

      {/* Floating cosmic particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full transition-opacity duration-1000 ${
              isDay 
                ? 'bg-white/20 opacity-30' 
                : 'bg-purple-400/40 opacity-60'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        isDay ? 'opacity-0' : 'opacity-100'
      } bg-gradient-radial from-transparent via-purple-900/10 to-black/30`} />
    </div>
  )
}