import React, { useState, useEffect } from 'react'
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
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Vegetables', href: '#products' },
    { label: 'Maritime Logistics', href: '#logistics' },
    { label: 'Cold-Chain', href: '#process' },
    { label: 'Quality', href: '#quality' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/70 py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo - Minimal and crisp */}
          <a href="#home" className="flex items-center gap-2 group">
            <JNJLogo size="sm" variant="light" />
          </a>

          {/* Desktop Nav Links - Centered, minimal, airy */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.14em] font-medium text-slate-600 hover:text-[#0b3d26] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action: Clean WhatsApp & Request Quote Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/917994561627?text=Hello%20JNJ%20International%2C%20I%20would%20like%20to%20enquire%20about%20vegetable%20export%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-emerald-700 p-2 rounded-full hover:bg-slate-50 transition-colors"
              title="Chat with Export Desk on WhatsApp"
            >
              <MessageCircle className="size-4 text-emerald-700" />
            </a>

            <button
              onClick={onOpenRFQ}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0b3d26] hover:bg-[#072417] active:scale-95 rounded-full transition-all cursor-pointer shadow-sm"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="size-3.5 text-[#f5d77f]" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenRFQ}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0b3d26] rounded-full"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-[#0b3d26] rounded-md"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-sm font-medium text-slate-700 hover:text-[#0b3d26] border-b border-slate-50"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenRFQ()
                  }}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-[#0b3d26] rounded-full shadow-sm"
                >
                  Request Formal Quote
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
