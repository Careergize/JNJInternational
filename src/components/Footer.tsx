import React from 'react'
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  MessageCircle,
} from 'lucide-react'
import JNJLogo from './JNJLogo'
import ScrollReveal from './ScrollReveal'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#03170e] text-emerald-100/80 border-t border-[#d4af37]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-emerald-900/60">
          {/* Brand & Registry Col */}
          <div className="lg:col-span-4 space-y-4">
            <ScrollReveal variant="fade-up" delay={50}>
              <JNJLogo size="md" variant="dark" />
              <p className="text-xs text-emerald-200/70 leading-relaxed pr-4 mt-3">
                JNJ International Private Limited is an accredited Indian agricultural export house headquartered in
                Thiruvananthapuram, Kerala. Specializing in high-volume, farm-gate aggregated fresh vegetables for global
                wholesale distribution and maritime sea freight.
              </p>

              <div className="pt-2">
                <div className="inline-block bg-[#052417] px-3.5 py-1.5 rounded-xl border border-[#d4af37]/40 text-[11px] font-mono text-[#f5d77f] shadow-sm">
                  CIN: U46301KL2026PTC104999
                </div>
                <div className="text-[10px] text-emerald-400/80 mt-1">Registrar of Companies, Kerala, India</div>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Produce Links */}
          <div className="lg:col-span-3 space-y-3">
            <ScrollReveal variant="fade-up" delay={120}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#f5d77f] font-mono mb-3">
                Export Produce Portfolio
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="size-1 rounded-full bg-[#d4af37] group-hover:scale-150 transition-transform"></span>
                    <span>Fresh Tomatoes (Roma &amp; Hybrid)</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="size-1 rounded-full bg-[#d4af37] group-hover:scale-150 transition-transform"></span>
                    <span>Nashik &amp; Southern Red Onions</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="size-1 rounded-full bg-[#d4af37] group-hover:scale-150 transition-transform"></span>
                    <span>Golden Table &amp; Processing Potatoes</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="size-1 rounded-full bg-[#d4af37] group-hover:scale-150 transition-transform"></span>
                    <span>G4 Green Chillies &amp; Ginger Roots</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="size-1 rounded-full bg-[#d4af37] group-hover:scale-150 transition-transform"></span>
                    <span>Mixed Reefer Container Shipments</span>
                  </a>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Logistics & Seaports */}
          <div className="lg:col-span-2 space-y-3">
            <ScrollReveal variant="fade-up" delay={180}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#f5d77f] font-mono mb-3">
                Shipping Hubs
              </h4>
              <ul className="space-y-2 text-xs text-emerald-200/70">
                <li className="hover:text-emerald-100 transition-colors">Vizhinjam Int&apos;l Seaport</li>
                <li className="hover:text-emerald-100 transition-colors">Cochin Port (Vallarpadam)</li>
                <li className="hover:text-emerald-100 transition-colors">Tuticorin V.O.C Port</li>
                <li className="hover:text-emerald-100 transition-colors">Trivandrum Air Cargo (TRV)</li>
                <li className="hover:text-emerald-100 transition-colors">Jebel Ali (Dubai) Liner</li>
                <li className="hover:text-emerald-100 transition-colors">Jeddah Islamic Port Corridor</li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Contact & Desk Details */}
          <div className="lg:col-span-3 space-y-3">
            <ScrollReveal variant="fade-up" delay={240}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#f5d77f] font-mono mb-3">
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
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 hover:text-white text-[11px] font-semibold border border-emerald-700/60 transition-all hover:scale-105"
                  >
                    <MessageCircle className="size-3.5 text-[#f5d77f]" />
                    <span>Chat on WhatsApp Export Desk</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
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
              className="inline-flex items-center gap-1.5 text-emerald-200 hover:text-[#f5d77f] transition-all cursor-pointer group hover:-translate-y-0.5"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
