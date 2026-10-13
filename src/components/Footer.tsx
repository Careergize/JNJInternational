import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, MessageCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#12442c] text-emerald-100/70 border-t border-[#d4af37]/30 pt-12 pb-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* CRR-style Business Hours & Export Liaison Panel */}
        <ScrollReveal variant="fade-up" delay={50}>
          <div className="bg-[#185839] text-white p-5 sm:p-6 rounded-2xl border border-[#d4af37]/30 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-10">
            <div>
              <strong className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-[#f5d77f] font-bold mb-1">
                Business Hours
              </strong>
              <span className="text-xs sm:text-sm text-emerald-100/90 font-medium">
                Mon &ndash; Sat: 8:00 AM &ndash; 9:00 PM IST
              </span>
            </div>

            <div>
              <strong className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-[#f5d77f] font-bold mb-1">
                Export Desk
              </strong>
              <span className="text-xs sm:text-sm text-emerald-100/90 font-medium">
                Responds within 24 hours on all international channels
              </span>
            </div>

            <div>
              <strong className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-[#f5d77f] font-bold mb-1">
                Company &amp; Location
              </strong>
              <span className="text-xs sm:text-sm text-emerald-100/90 font-medium">
                JNJ International Private Limited &bull; Thiruvananthapuram, Kerala
              </span>
            </div>

            <div className="shrink-0">
              <a
                href="https://wa.me/917994561627?text=Hello%20JNJ%20International%2C%20I%20would%20like%20to%20enquire%20about%20export%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#e5a83b] via-[#d4af37] to-[#c59b27] hover:brightness-105 active:scale-95 text-[#041a10] text-xs font-bold shadow-md transition-all"
              >
                <MessageCircle className="size-3.5 text-[#041a10]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer Top: Brand (Left) + Horizontal Navigation Links (Right) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-7 border-b border-[#d4af37]/25">
          {/* Brand Mark & Brand Word */}
          <ScrollReveal variant="fade-up" delay={100}>
            <Link to="/" className="flex items-center gap-3.5 group">
              {/* Circular Emblem Mark with Gold Border & Ambient Glow */}
              <div className="size-14 sm:size-15 rounded-full overflow-hidden flex items-center justify-center bg-white border-2 border-[#d4af37] shadow-[0_0_16px_rgba(212,175,55,0.35)] shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/jnj-logo-emblem.png"
                  alt="JNJ International Emblem"
                  className="size-full object-contain p-1.5"
                />
              </div>

              {/* Brand Word in Cinzel / Heading Serif with Gold Accents */}
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-xl sm:text-2xl tracking-[1.5px] text-[#f5d77f] uppercase drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]">
                  JNJ International
                </span>
                <small className="mt-1.5 font-sans text-[10px] sm:text-[11px] font-semibold tracking-[4px] text-[#d4af37] uppercase">
                  Private Limited &mdash; Export House
                </small>
              </div>
            </Link>
          </ScrollReveal>

          {/* Horizontal Navigation Links */}
          <ScrollReveal variant="fade-up" delay={150}>
            <nav className="flex items-center gap-4 sm:gap-6 md:gap-7 flex-wrap">
              <Link
                to="/"
                className="text-xs sm:text-[13.5px] font-semibold text-emerald-100/85 hover:text-[#f5d77f] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-xs sm:text-[13.5px] font-semibold text-emerald-100/85 hover:text-[#f5d77f] transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="text-xs sm:text-[13.5px] font-semibold text-emerald-100/85 hover:text-[#f5d77f] transition-colors"
              >
                Products &amp; Services
              </Link>
              <Link
                to="/logistics"
                className="text-xs sm:text-[13.5px] font-semibold text-emerald-100/85 hover:text-[#f5d77f] transition-colors"
              >
                Maritime Logistics
              </Link>
              <Link
                to="/quality"
                className="text-xs sm:text-[13.5px] font-semibold text-emerald-100/85 hover:text-[#f5d77f] transition-colors"
              >
                Quality Standards
              </Link>
              <Link
                to="/contact"
                className="text-xs sm:text-[13.5px] font-semibold text-emerald-100/85 hover:text-[#f5d77f] transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </ScrollReveal>
        </div>

        {/* Footer Bottom Strip: Copyright & Location */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] sm:text-xs text-emerald-200/65 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} <strong>JNJ INTERNATIONAL PRIVATE LIMITED</strong>. All Rights Reserved.
            <span className="block sm:inline sm:ml-2 text-emerald-400/80 font-normal">
              CIN: U46301KL2026PTC104999 &bull; RoC Kerala
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>Thiruvananthapuram, Kerala, India</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-emerald-200 hover:text-[#f5d77f] transition-colors cursor-pointer group"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-1 text-[#d4af37]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
