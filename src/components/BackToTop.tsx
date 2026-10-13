import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [isAtEnd, setIsAtEnd] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShow(scrollY > 350)

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const percent = Math.min((scrollY / totalHeight) * 100, 100)
        setScrollPercent(percent)
        // Transition to WhatsApp when reaching the end (88%+ or within 300px of page bottom)
        setIsAtEnd(percent >= 88 || window.innerHeight + scrollY >= document.documentElement.scrollHeight - 250)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    if (isAtEnd) {
      // Open WhatsApp chat
      const message = encodeURIComponent(
        'Hello JNJ International, I would like to enquire about export rates for fresh vegetables.'
      )
      window.open(`https://wa.me/917994561627?text=${message}`, '_blank')
    } else {
      // Scroll back to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        show
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
      }`}
    >
      {/* Tooltip bubble when it becomes WhatsApp */}
      {isAtEnd && (
        <div className="hidden xs:flex absolute right-13 sm:right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#062417] text-[#f5d77f] text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/40 shadow-xl animate-in fade-in slide-in-from-right-2 duration-300 items-center gap-1.5">
          <span className="size-2 rounded-full bg-[#25D366] animate-ping"></span>
          <span>Chat on WhatsApp</span>
        </div>
      )}

      <button
        onClick={handleClick}
        aria-label={isAtEnd ? 'Chat with JNJ International on WhatsApp' : 'Scroll back to top'}
        className={`relative size-12 sm:size-13 rounded-full flex items-center justify-center transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group cursor-pointer shadow-2xl ${
          isAtEnd
            ? 'bg-[#25D366] text-white border-2 border-white/80 shadow-[0_12px_32px_rgba(37,211,102,0.45)] hover:scale-105 hover:bg-[#20ba59] active:scale-95'
            : 'bg-[#062417] text-[#f5d77f] border border-[#d4af37]/40 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(6,36,23,0.35)] hover:border-[#f5d77f]'
        }`}
      >
        {/* Circular SVG track for scroll progress (visible when scrolling before the end) */}
        {!isAtEnd && (
          <svg className="absolute inset-0 size-full -rotate-90 pointer-events-none" viewBox="0 0 52 52">
            <circle
              cx="26"
              cy="26"
              r="23"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="2.5"
            />
            <circle
              cx="26"
              cy="26"
              r="23"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2.5"
              strokeDasharray="144.5"
              strokeDashoffset={144.5 - (144.5 * scrollPercent) / 100}
              strokeLinecap="round"
              className="transition-all duration-200 ease-out"
            />
          </svg>
        )}

        {/* WhatsApp pulsing radar ring when at the end */}
        {isAtEnd && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>
        )}

        {/* Morphing Icons: ArrowUp vs Official WhatsApp Vector */}
        <div className="relative size-6 flex items-center justify-center transition-transform duration-300">
          {isAtEnd ? (
            /* Official WhatsApp Vector Icon */
            <svg
              className="size-6.5 fill-white transition-all duration-300 animate-in zoom-in-75 rotate-0"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          ) : (
            /* Arrow Up */
            <ArrowUp className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
          )}
        </div>
      </button>
    </div>
  )
}

export default BackToTop
