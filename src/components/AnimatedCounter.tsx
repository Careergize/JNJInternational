import React, { useEffect, useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1800,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0)
  const { elementRef, isVisible } = useScrollReveal<HTMLSpanElement>({
    threshold: 0.2,
    once: true,
  })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    let startTimestamp: number | null = null

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const elapsed = timestamp - startTimestamp
      const progress = Math.min(elapsed / duration, 1)

      // Ease out exponential curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = easeProgress * value

      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(step)
  }, [isVisible, value, duration])

  const formatted = displayValue.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
