import React from 'react'
import type { ElementType, ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'mask-up'

interface ScrollRevealProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  as?: ElementType
  once?: boolean
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 750,
  threshold = 0.15,
  className = '',
  as: Component = 'div',
  once = true,
}) => {
  const { elementRef, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold,
    once,
  })

  // Get initial transform style based on variant
  const getInitialStyle = () => {
    switch (variant) {
      case 'fade-up':
        return 'translate3d(0, 36px, 0)'
      case 'fade-down':
        return 'translate3d(0, -36px, 0)'
      case 'fade-left':
        return 'translate3d(40px, 0, 0)'
      case 'fade-right':
        return 'translate3d(-40px, 0, 0)'
      case 'zoom-in':
        return 'scale3d(0.92, 0.92, 1)'
      case 'mask-up':
        return 'translate3d(0, 100%, 0)'
      default:
        return 'translate3d(0, 36px, 0)'
    }
  }

  const baseStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : getInitialStyle(),
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Extice silky smooth curve
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform',
  }

  return (
    <Component
      ref={elementRef as any}
      style={baseStyle}
      className={`scroll-reveal-item ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Component>
  )
}

export default ScrollReveal
