import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react'
import JNJLogo from './JNJLogo'

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

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products & Services', path: '/products' },
    { label: 'Logistics', path: '/logistics' },
    { label: 'Quality', path: '/quality' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
      <nav
        className={`w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? 'bg-[#03150e]/95 backdrop-blur-xl shadow-xl shadow-black/50 border-b border-[#d4af37]/25 py-3'
            : 'bg-[#03150e]/88 backdrop-blur-md border-b border-[#d4af37]/20 py-3.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo - JNJ Official Emblem & Typography */}
          <Link
            to="/"
            className="flex items-center gap-2 group transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] select-none"
          >
            <JNJLogo size="sm" variant="dark" />
          </Link>

          {/* Desktop Nav Links - Clean Luxury Aesthetic with Active Gold Underline */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.14em] font-medium transition-colors nav-link-hover py-1 ${
                    isActive
                      ? 'text-[#f5d77f] font-semibold after:scale-x-100 after:origin-left'
                      : 'text-slate-300 hover:text-[#f5d77f]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Action: Clean WhatsApp & Get a Quote Pill Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/917994561627?text=Hello%20JNJ%20International%2C%20I%20would%20like%20to%20enquire%20about%20vegetable%20export%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-emerald-400 p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
              title="Chat with Export Desk on WhatsApp"
            >
              <MessageCircle className="size-4 text-emerald-400" />
            </a>

            <button
              onClick={onOpenRFQ}
              className="extice-btn-primary btn-shimmer group inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-wider font-bold text-[#051c24] bg-[#e5a83b] hover:bg-[#d89726] rounded-full shadow-lg shadow-amber-500/20 cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="size-3.5 text-[#051c24] arrow-slide" />
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenRFQ}
              className="px-3.5 py-1.5 text-xs font-bold text-[#051c24] bg-[#e5a83b] rounded-full shadow-sm cursor-pointer"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-200 hover:text-white rounded-md transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#03150e]/98 backdrop-blur-2xl border-b border-[#d4af37]/30 px-6 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-300 text-white">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-2.5 text-sm font-medium border-b border-white/10 flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#f5d77f] font-bold' : 'text-slate-200 hover:text-[#f5d77f]'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="size-3.5 text-slate-400" />
                </NavLink>
              ))}

              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenRFQ()
                  }}
                  className="extice-btn-primary btn-shimmer w-full py-3 text-xs font-bold uppercase tracking-wider text-[#051c24] bg-[#e5a83b] rounded-full shadow-md cursor-pointer"
                >
                  Get a Quote
                </button>
                <div className="text-center text-[10px] text-slate-400 pt-1 font-mono">
                  CIN U46301KL2026PTC104999 &bull; Mylakkara, Thiruvananthapuram
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
