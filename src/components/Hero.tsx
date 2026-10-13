import React from 'react'
import {
  ArrowRight,
  Star,
  Ship,
  ExternalLink,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface HeroProps {
  onOpenRFQ: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenRFQ }) => {
  return (
    <section id="home" className="relative bg-[#0e3824] py-2.5 sm:py-6 lg:py-8 px-2 sm:px-5 lg:px-8 overflow-hidden select-none">
      {/* Outer Luxury Rounded Canvas (Matching Reference Frame) */}
      <div className="max-w-[1440px] mx-auto relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-[#d4af37]/35 shadow-[0_25px_70px_-15px_rgba(10,40,26,0.55)] bg-[#13442d]">
        {/* Ocean & Container Vessel Panoramic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/jnj-ocean-freight.jpg"
            alt="JNJ International Container Ship Carrying Refrigerated Farm Produce across Ocean"
            className="w-full h-full object-cover object-center sm:object-[70%_center] lg:object-center animate-ken-burns brightness-[0.92]"
            loading="eager"
          />
          {/* Directional Cinematic Overlays for Text Legibility & Emerald Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e3824]/92 via-[#12442c]/75 sm:via-[#12442c]/45 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e3824]/92 via-[#0e3824]/20 to-[#12442c]/30 pointer-events-none"></div>
          {/* Subtle Ambient Radial Gold & Emerald Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/12 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* Main Hero Container Content */}
        <div className="relative z-10 px-4 sm:px-10 lg:px-16 pt-8 pb-10 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 min-h-[560px] sm:min-h-[720px] lg:min-h-[760px] flex flex-col justify-between">
          {/* Top Row: Eyebrow Registration Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 sm:mb-8">
            <ScrollReveal variant="fade-down" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-[11px] sm:text-xs font-mono tracking-wider shadow-sm max-w-full truncate">
                <span className="size-2 rounded-full bg-emerald-400 animate-beacon shrink-0"></span>
                <span className="text-[#f5d77f] font-semibold truncate">JNJ INTERNATIONAL PRIVATE LIMITED</span>
                <span className="text-white/60 hidden sm:inline">&bull; CIN U46301KL2026PTC104999</span>
                <span className="text-emerald-300 hidden md:inline">&bull; THIRUVANANTHAPURAM, KERALA</span>
              </div>
            </ScrollReveal>

            {/* Quick Live Status Pill */}
            <ScrollReveal variant="fade-down" delay={150}>
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#164f33]/85 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Active Sea Reefers &bull; Vizhinjam Seaport</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Center Split: Left Editorial Typography + Right Floating Rating Card */}
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center my-auto">
            {/* Left Column: Bold Impact Headline & Dual CTA Buttons */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start max-w-2xl">
              {/* Main Headline Dedicated to JNJ International */}
              <ScrollReveal variant="fade-up" delay={200} duration={800}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.08] mb-3 font-heading">
                  JNJ International{' '}
                  <span className="block text-white">Fresh Produce Export</span>
                </h1>
                <div className="text-base sm:text-xl lg:text-2xl font-serif italic text-[#f5d77f] font-normal mb-4 sm:mb-5 drop-shadow-sm">
                  From India&apos;s fertile soil to the world&apos;s table.
                </div>
              </ScrollReveal>

              {/* Subtitle Description */}
              <ScrollReveal variant="fade-up" delay={300} duration={750}>
                <p className="text-xs sm:text-sm lg:text-base text-emerald-100/90 leading-relaxed font-normal mb-6 sm:mb-8 max-w-xl">
                  <strong>JNJ International Private Limited</strong> is an accredited agricultural export enterprise
                  based in Thiruvananthapuram, Kerala. We specialize in aggregating, optical grading, and cold-chain
                  container shipping of premium Grade-A <strong className="text-white font-medium">Fresh Tomatoes</strong>,{' '}
                  <strong className="text-white font-medium">Nashik Red Onions</strong>,{' '}
                  <strong className="text-white font-medium">Golden Potatoes</strong>, and fresh perishable spices directly
                  to wholesale markets worldwide.
                </p>
              </ScrollReveal>

              {/* Dual Action Buttons */}
              <ScrollReveal variant="fade-up" delay={400} className="w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-0">
                  {/* Primary Golden Pill Button */}
                  <button
                    onClick={onOpenRFQ}
                    className="extice-btn-primary btn-shimmer group inline-flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 text-xs uppercase tracking-wider font-bold text-[#041a10] bg-gradient-to-r from-[#e5a83b] via-[#eaae42] to-[#d4af37] hover:brightness-105 rounded-full shadow-xl shadow-amber-500/25 cursor-pointer transition-all w-full sm:w-auto"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  {/* Secondary Dark Glass Pill Button */}
                  <a
                    href="#products"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 text-xs uppercase tracking-wider font-semibold text-[#f5d77f] hover:text-white bg-[#1a5c3c]/85 hover:bg-[#1a5c3c] rounded-full border border-[#d4af37]/40 backdrop-blur-md shadow-md hover:border-[#d4af37]/80 cursor-pointer transition-all w-full sm:w-auto text-center"
                  >
                    <span>Explore Produce</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Floating Trust Review Card for JNJ International */}
            <div className="lg:col-span-5 xl:col-span-6 relative flex justify-center lg:justify-end">
              <ScrollReveal variant="fade-left" delay={350} duration={850} className="w-full max-w-md lg:max-w-[320px]">
                <div className="w-full bg-white/95 backdrop-blur-2xl text-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/90 animate-float-badge transition-all hover:scale-[1.02]">
                  {/* Top Avatar Group + Review Link */}
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex -space-x-2.5 overflow-hidden">
                      <img
                        className="inline-block size-7 sm:size-8 rounded-full ring-2 ring-white object-cover"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                        alt="Buyer Avatar 1"
                      />
                      <img
                        className="inline-block size-7 sm:size-8 rounded-full ring-2 ring-white object-cover"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                        alt="Buyer Avatar 2"
                      />
                      <img
                        className="inline-block size-7 sm:size-8 rounded-full ring-2 ring-white object-cover"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                        alt="Buyer Avatar 3"
                      />
                    </div>

                    <a
                      href="#quality"
                      className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 transition-colors flex items-center gap-1"
                    >
                      <span>APEDA Certified</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>

                  {/* Testimonial Quote Specific to JNJ */}
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal mb-3 sm:mb-4">
                    Direct farmer collective aggregation with unbroken cold-chain pre-cooling. Trusted by wholesale
                    supermarkets and mandi buyers across UAE, Saudi Arabia, and Europe.
                  </p>

                  {/* Rating Display */}
                  <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                        4.9
                      </span>
                      <div className="flex items-center gap-0.5 text-amber-500">
                        <Star className="size-3.5 sm:size-4 fill-amber-400 text-amber-400" />
                        <Star className="size-3.5 sm:size-4 fill-amber-400 text-amber-400" />
                        <Star className="size-3.5 sm:size-4 fill-amber-400 text-amber-400" />
                        <Star className="size-3.5 sm:size-4 fill-amber-400 text-amber-400" />
                        <Star className="size-3.5 sm:size-4 fill-amber-400 text-amber-400" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      100% Quality
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Bottom Floating Cards Row: Reefer Allocation & Port Tracker */}
          <div className="pt-8 sm:pt-14 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-6 items-end">
            {/* Bottom-Left Floating Card: JNJ Reefer Produce Allocation */}
            <ScrollReveal variant="fade-up" delay={500}>
              <div className="extice-card bg-[#185839]/90 backdrop-blur-xl border border-[#d4af37]/35 rounded-2xl p-3.5 sm:p-4.5 shadow-2xl flex items-center gap-3 sm:gap-4 max-w-md group">
                {/* 3D Yellow Shipping Container Image */}
                <div className="relative size-14 sm:size-18 shrink-0 rounded-xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
                  <img
                    src="/images/yellow-container.jpg"
                    alt="JNJ International 40ft Reefer Container"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block mb-0.5 truncate">
                    JNJ REEFER SERVICE &bull; FCL CONSIGNMENTS
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-[#f5d77f] transition-colors">
                    Tomatoes, Red Onions &amp; Potatoes
                  </h4>
                  <button
                    onClick={onOpenRFQ}
                    className="text-[10px] sm:text-[11px] font-semibold text-amber-300 hover:text-white transition-colors inline-flex items-center gap-1 mt-1 cursor-pointer"
                  >
                    <span>Request Pack Date &amp; Rate</span>
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom-Right Floating Card: Port Route & Voyage Tracker */}
            <ScrollReveal variant="fade-up" delay={550}>
              <div className="extice-card bg-[#185839]/90 backdrop-blur-xl border border-[#d4af37]/35 rounded-2xl p-3.5 sm:p-5 shadow-2xl max-w-md sm:ml-auto w-full">
                {/* Route Header: Vizhinjam Seaport (TRV) -> Jebel Ali (DXB) */}
                <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs font-mono font-bold text-white mb-2">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="size-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                    <span className="tracking-wider truncate">IN TRV (Vizhinjam)</span>
                  </div>

                  {/* Miniature Vessel Emblem */}
                  <div className="p-1 rounded-full bg-white/10 border border-white/20 shrink-0">
                    <Ship className="size-3 sm:size-3.5 text-[#f5d77f]" />
                  </div>

                  <div className="flex items-center gap-1.5 truncate">
                    <span className="tracking-wider text-[#f5d77f] truncate">AE DXB (Jebel Ali)</span>
                    <span className="size-1.5 rounded-full bg-amber-400 shrink-0"></span>
                  </div>
                </div>

                {/* Animated Directional Route Arrow Track */}
                <div className="relative py-1.5 sm:py-2">
                  <div className="h-0.5 w-full bg-white/15 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 via-[#f5d77f] to-amber-400 w-3/4 rounded-full"></div>
                  </div>
                  {/* Moving ship position icon */}
                  <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 size-2.5 sm:size-3 rounded-full bg-[#f5d77f] ring-4 ring-amber-400/30 animate-pulse"></div>
                </div>

                {/* Route Metadata: Departure & Estimated Arrival */}
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-white/70 pt-1">
                  <div>
                    <span className="text-white/40 block">DISPATCH TERMINAL</span>
                    <span className="text-white font-semibold">Vizhinjam &bull; 25km</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white/40 block">TRANSIT WINDOW</span>
                    <span className="text-[#f5d77f] font-semibold">3 - 4 Days &bull; Cold-Chain</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
