import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react'

interface NavbarProps {
  onOpenRFQ: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRFQ }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Concise labels to prevent horizontal congestion & provide generous breathing room
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Logistics', path: '/logistics' },
    { label: 'Quality', path: '/quality' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-400 ease-out">
      <nav
        className={`w-full transition-all duration-400 ease-out ${
          isScrolled
            ? 'bg-[#12442c]/95 backdrop-blur-2xl shadow-xl shadow-black/40 border-b border-[#d4af37]/30 py-3'
            : 'bg-[#12442c]/90 backdrop-blur-xl border-b border-[#d4af37]/25 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand - Circular Emblem & Cinzel Typography */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02] select-none shrink-0"
          >
            {/* Circular Gold Seal Mark */}
            <div className="size-11 sm:size-12 rounded-full overflow-hidden flex items-center justify-center bg-white border-2 border-[#d4af37] shadow-[0_0_14px_rgba(212,175,55,0.3)] shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/jnj-logo-emblem.png"
                alt="JNJ International Logo"
                className="size-full object-contain p-1"
              />
            </div>

            {/* Brand Word */}
            <div className="flex flex-col leading-tight text-left">
              <span className="font-serif font-bold text-base sm:text-lg lg:text-xl tracking-[1.5px] text-[#f5d77f] uppercase drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]">
                JNJ International
              </span>
              <small className="font-sans text-[8px] sm:text-[9px] font-semibold tracking-[3px] text-[#d4af37] uppercase">
                Private Limited &bull; Export House
              </small>
            </div>
          </Link>

          {/* Desktop Nav Links - Spacious, Airy, Elegant Typography with Subtle Underline */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[13.5px] tracking-wide transition-all duration-300 relative py-1.5 ${
                    isActive
                      ? 'text-[#f5d77f] font-semibold'
                      : 'text-emerald-100/75 hover:text-[#f5d77f] font-medium'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)] animate-in fade-in duration-300" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action: Clean WhatsApp Icon & Gold Pill CTA Button */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0">
            <a
              href="https://wa.me/917994561627?text=Hello%20JNJ%20International%2C%20I%20would%20like%20to%20enquire%20about%20vegetable%20export%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-full bg-[#185839] hover:bg-[#206d47] text-[#f5d77f] hover:text-white border border-[#d4af37]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              title="Chat with Export Desk on WhatsApp"
            >
              <MessageCircle className="size-4 text-[#d4af37]" />
            </a>

            <button
              onClick={onOpenRFQ}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs uppercase tracking-wider font-bold text-[#041a10] bg-gradient-to-r from-[#f5d77f] via-[#d4af37] to-[#c59b27] hover:brightness-105 active:scale-95 rounded-full shadow-[0_6px_18px_rgba(212,175,55,0.25)] hover:shadow-[0_10px_24px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 cursor-pointer transition-all duration-300"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="size-3.5 text-[#041a10]" />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenRFQ}
              className="sm:hidden px-3.5 py-1.5 text-xs font-bold text-[#041a10] bg-gradient-to-r from-[#f5d77f] to-[#d4af37] rounded-full shadow-sm cursor-pointer"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="size-10 rounded-xl bg-[#185839] border border-[#d4af37]/35 text-[#f5d77f] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#12442c]/98 backdrop-blur-2xl border-b border-[#d4af37]/30 px-5 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-300 text-white">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-[#d4af37]/15 text-[#f5d77f] border border-[#d4af37]/30 font-bold'
                        : 'text-emerald-100/80 hover:bg-[#185839] hover:text-[#f5d77f]'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="size-4 opacity-75 text-[#d4af37]" />
                </NavLink>
              ))}

              <div className="pt-3.5 mt-2 border-t border-emerald-800/60 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenRFQ()
                  }}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-[#041a10] bg-gradient-to-r from-[#f5d77f] via-[#d4af37] to-[#c59b27] rounded-full shadow-md cursor-pointer text-center"
                >
                  Request Export Quotation
                </button>
                <a
                  href="https://wa.me/917994561627?text=Hello%20JNJ%20International%2C%20I%20would%20like%20to%20enquire%20about%20vegetable%20export%20rates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-xs font-semibold text-[#f5d77f] bg-[#185839] border border-[#d4af37]/40 rounded-full flex items-center justify-center gap-2"
                >
                  <MessageCircle className="size-4 text-[#d4af37]" />
                  <span>Chat on WhatsApp Export Desk</span>
                </a>
                <div className="text-center text-[10px] text-emerald-300/60 pt-1 font-mono">
                  CIN U46301KL2026PTC104999 &bull; Thiruvananthapuram, Kerala
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
