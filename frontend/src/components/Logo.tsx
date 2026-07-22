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
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
  }

  const textSizes = {
    sm: 'text-sm font-semibold tracking-[-0.02em]',
    md: 'text-base font-semibold tracking-[-0.025em]',
    lg: 'text-xl font-semibold tracking-[-0.03em]',
  }

  return (
    <div className={`inline-flex items-center gap-2 select-none text-[#1d1d1f] ${className}`}>
      {/* Flat Minimalist Apple-Style SVG Vector Mark (No Gradients, No Shadows) */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} shrink-0 text-[#1d1d1f] transition-opacity hover:opacity-80`}
        aria-hidden="true"
      >
        {/* Minimalist Interlocking Socratic Wisdom Delta / Pillars Mark */}
        <path
          d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6L7 9V15L12 18L17 15V9L12 6Z"
          fill="currentColor"
        />
      </svg>

      {/* Pure SF Pro Typography */}
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
