import React from 'react'
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from 'lucide-react'
import JNJLogo from './JNJLogo'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#03170e] text-emerald-100/80 border-t border-[#d4af37]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-emerald-900/60">
          {/* Brand & Registry Col */}
          <div className="lg:col-span-4 space-y-4">
            <JNJLogo size="md" variant="dark" />
            <p className="text-xs text-emerald-200/70 leading-relaxed pr-4">
              JNJ International Private Limited is an accredited Indian agricultural export house headquartered in
              Thiruvananthapuram, Kerala. Specializing in high-volume, farm-gate aggregated fresh vegetables for global
              wholesale distribution and maritime sea freight.
            </p>

            <div className="pt-2">
              <div className="inline-block bg-[#052417] px-3 py-1.5 rounded-lg border border-[#d4af37]/40 text-[11px] font-mono text-[#f5d77f]">
                CIN: U46301KL2026PTC104999
              </div>
              <div className="text-[10px] text-emerald-400/80 mt-1">Registrar of Companies, Kerala, India</div>
            </div>
          </div>

          {/* Quick Produce Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f5d77f] font-mono">
              Export Produce Portfolio
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-[#d4af37]"></span>
                  Fresh Tomatoes (Roma &amp; Hybrid)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-[#d4af37]"></span>
                  Nashik &amp; Southern Red Onions
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-[#d4af37]"></span>
                  Golden Table &amp; Processing Potatoes
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-[#d4af37]"></span>
                  G4 Green Chillies &amp; Ginger Roots
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-[#d4af37]"></span>
                  Mixed Reefer Container Shipments
                </a>
              </li>
            </ul>
          </div>

          {/* Logistics & Seaports */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f5d77f] font-mono">
              Shipping Hubs
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/70">
              <li>Vizhinjam Int&apos;l Seaport</li>
              <li>Cochin Port (Vallarpadam)</li>
              <li>Tuticorin V.O.C Port</li>
              <li>Trivandrum Air Cargo (TRV)</li>
              <li>Jebel Ali (Dubai) Liner</li>
              <li>Jeddah Islamic Port Corridor</li>
            </ul>
          </div>

          {/* Contact & Desk Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f5d77f] font-mono">
              Registered Head Office
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  No.13/602 Manjadimoodu, Mylakkara,
                  <br />
                  Thiruvananthapuram, Kerala &ndash; 695572
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="size-4 text-[#d4af37] shrink-0" />
                <span>+91 7994561627 / 9961810692</span>
              </div>

              <div className="flex items-center gap-2 truncate">
                <Mail className="size-4 text-[#d4af37] shrink-0" />
                <span className="truncate">jnj.internationalpvt@gmail.com</span>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/917994561627"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 text-[11px] font-semibold border border-emerald-700/60 transition-colors"
                >
                  <span>Chat on WhatsApp Export Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-emerald-300/60">
          <div>
            &copy; {new Date().getFullYear()} <strong>JNJ INTERNATIONAL PRIVATE LIMITED</strong>. All Rights Reserved.
            CIN: U46301KL2026PTC104999.
          </div>

          <div className="flex items-center gap-6">
            <span>Thiruvananthapuram, Kerala, India</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-emerald-200 hover:text-[#f5d77f] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
