import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
  textClassName?: string
}

export default function Logo({
  size = 'md',
  showText = true,
  className = '',
  textClassName = '',
}: LogoProps) {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  const textSizes = {
    sm: 'text-sm font-semibold tracking-tight',
    md: 'text-base font-semibold tracking-tight',
    lg: 'text-2xl font-bold tracking-tight',
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Apple-grade Vector Logo Mark */}
      <div
        className={`relative ${iconSizes[size]} rounded-xl bg-gradient-to-br from-[#0066cc] to-[#004499] p-1.5 shadow-sm shadow-[#0066cc]/20 flex items-center justify-center overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-[#0066cc]/30`}
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_70%)] pointer-events-none" />

        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white drop-shadow-sm"
        >
          {/* Classical Socratic Wisdom Pillar + Modern AI Ring Intersect */}
          <path
            d="M12 3L4 7V17L12 21L20 17V7L12 3Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-40"
          />
          <path
            d="M12 7L17 10V14L12 17L7 14V10L12 7Z"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path
            d="M12 2V4M12 20V22M2 12H4M20 12H22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-70"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <span
          className={`font-sans text-[#1d1d1f] ${textSizes[size]} ${textClassName}`}
        >
          SOCRATES
        </span>
      )}
    </div>
  )
}
