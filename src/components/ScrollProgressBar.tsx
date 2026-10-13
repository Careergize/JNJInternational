import React, { useEffect, useState } from 'react'

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100
        setScrollProgress(Math.min(Math.max(progress, 0), 100))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#aa851c] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgressBar
