import React from 'react'

interface JNJLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  variant?: 'light' | 'dark'
}

export const JNJLogo: React.FC<JNJLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'light',
}) => {
  const sizeMap = {
    sm: { dimension: 44, textSize: 'text-base', subSize: 'text-[9px]' },
    md: { dimension: 56, textSize: 'text-xl', subSize: 'text-[11px]' },
    lg: { dimension: 72, textSize: 'text-2xl', subSize: 'text-xs' },
    xl: { dimension: 96, textSize: 'text-3xl', subSize: 'text-sm' },
  }

  const { dimension, textSize, subSize } = sizeMap[size]

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Exact Official JNJ Emblem Seal extracted from Letterhead */}
      <img
        src="/images/jnj-logo-emblem.png"
        alt="JNJ International Private Limited Official Seal"
        width={dimension}
        height={dimension}
        className="shrink-0 object-contain drop-shadow-md select-none transition-transform duration-300 hover:scale-105 pointer-events-auto w-9 h-9 sm:w-auto sm:h-auto"
        loading="eager"
        decoding="async"
        style={{ maxWidth: `${dimension}px`, maxHeight: `${dimension}px` }}
      />

      {/* Brand Name & Classification */}
      {showText && (
        <div className="flex flex-col text-left leading-tight min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap">
            <span
              className={`font-heading font-extrabold tracking-wider text-sm sm:${textSize} ${
                variant === 'dark' ? 'text-white' : 'text-[#072d1c]'
              }`}
            >
              JNJ
            </span>
            <span
              className={`font-heading font-bold tracking-widest text-sm sm:${textSize} ${
                variant === 'dark' ? 'text-[#f5d77f]' : 'text-[#0d472d]'
              }`}
            >
              INTERNATIONAL
            </span>
          </div>
          <span
            className={`font-sans uppercase tracking-[0.14em] sm:tracking-[0.18em] font-semibold text-[8px] sm:${subSize} truncate ${
              variant === 'dark' ? 'text-emerald-200/80' : 'text-emerald-800/80'
            }`}
          >
            Private Limited &bull; Export House
          </span>
        </div>
      )}
    </div>
  )
}

export default JNJLogo
