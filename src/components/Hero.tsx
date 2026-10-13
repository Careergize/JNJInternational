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
    <section id="home" className="relative bg-[#020b12] py-4 sm:py-6 lg:py-8 px-3 sm:px-5 lg:px-8 overflow-hidden select-none">
      {/* Outer Luxury Rounded Canvas (Matching Reference Frame) */}
      <div className="max-w-[1440px] mx-auto relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.7)] bg-[#04121d]">
        {/* Ocean & Container Vessel Panoramic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/jnj-ocean-freight.jpg"
            alt="JNJ International Container Ship Carrying Refrigerated Farm Produce across Ocean"
            className="w-full h-full object-cover object-center sm:object-[70%_center] lg:object-center animate-ken-burns brightness-[0.95]"
            loading="eager"
          />
          {/* Directional Cinematic Overlays for Text Legibility & Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020f18]/95 via-[#020f18]/80 sm:via-[#020f18]/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020c14]/90 via-transparent to-[#020f18]/40 pointer-events-none"></div>
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* Main Hero Container Content */}
        <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 min-h-[640px] sm:min-h-[720px] lg:min-h-[760px] flex flex-col justify-between">
          {/* Top Row: Eyebrow Registration Badge */}
          <div className="flex items-center justify-between mb-8">
            <ScrollReveal variant="fade-down" delay={100}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-mono tracking-wider shadow-sm">
                <span className="size-2 rounded-full bg-emerald-400 animate-beacon"></span>
                <span className="text-[#f5d77f] font-semibold">JNJ INTERNATIONAL PRIVATE LIMITED</span>
                <span className="text-white/60 hidden sm:inline">&bull; CIN U46301KL2026PTC104999</span>
                <span className="text-emerald-300 hidden md:inline">&bull; THIRUVANANTHAPURAM, KERALA</span>
              </div>
            </ScrollReveal>

            {/* Quick Live Status Pill */}
            <ScrollReveal variant="fade-down" delay={150}>
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#051c24]/80 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Active Sea Reefers &bull; Vizhinjam Seaport</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Center Split: Left Editorial Typography + Right Floating Rating Card */}
          <div className="grid lg:grid-cols-12 gap-8 items-center my-auto">
            {/* Left Column: Bold Impact Headline & Dual CTA Buttons */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start max-w-2xl">
              {/* Main Headline Dedicated to JNJ International */}
              <ScrollReveal variant="fade-up" delay={200} duration={800}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold tracking-tight text-white leading-[1.08] mb-3 font-heading">
                  JNJ International{' '}
                  <span className="block text-white">Fresh Produce Export</span>
                </h1>
                <div className="text-lg sm:text-2xl font-serif italic text-[#f5d77f] font-normal mb-5 drop-shadow-sm">
                  From India&apos;s fertile soil to the world&apos;s table.
                </div>
              </ScrollReveal>

              {/* Subtitle Description */}
              <ScrollReveal variant="fade-up" delay={300} duration={750}>
                <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed font-normal mb-8 max-w-xl">
                  <strong>JNJ International Private Limited</strong> is an accredited agricultural export enterprise
                  based in Thiruvananthapuram, Kerala. We specialize in aggregating, optical grading, and cold-chain
                  container shipping of premium Grade-A <strong className="text-white font-medium">Fresh Tomatoes</strong>,{' '}
                  <strong className="text-white font-medium">Nashik Red Onions</strong>,{' '}
                  <strong className="text-white font-medium">Golden Potatoes</strong>, and fresh perishable spices directly
                  to wholesale markets worldwide.
                </p>
              </ScrollReveal>

              {/* Dual Action Buttons */}
              <ScrollReveal variant="fade-up" delay={400}>
                <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8 sm:mb-0">
                  {/* Primary Golden Pill Button */}
                  <button
                    onClick={onOpenRFQ}
                    className="extice-btn-primary btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-[#051c24] bg-[#e5a83b] hover:bg-[#d89726] rounded-full shadow-xl shadow-amber-500/20 cursor-pointer transition-all"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  {/* Secondary Dark Glass Pill Button */}
                  <a
                    href="#products"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 backdrop-blur-md shadow-md hover:border-white/40 cursor-pointer transition-all"
                  >
                    <span>Explore Produce</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Floating Trust Review Card for JNJ International */}
            <div className="lg:col-span-5 xl:col-span-6 relative flex justify-end">
              <ScrollReveal variant="fade-left" delay={350} duration={850}>
                <div className="w-full max-w-[320px] bg-white/95 backdrop-blur-2xl text-slate-800 rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/90 animate-float-badge transition-all hover:scale-[1.02]">
                  {/* Top Avatar Group + Review Link */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex -space-x-2.5 overflow-hidden">
                      <img
                        className="inline-block size-8 rounded-full ring-2 ring-white object-cover"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                        alt="Buyer Avatar 1"
                      />
                      <img
                        className="inline-block size-8 rounded-full ring-2 ring-white object-cover"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                        alt="Buyer Avatar 2"
                      />
                      <img
                        className="inline-block size-8 rounded-full ring-2 ring-white object-cover"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                        alt="Buyer Avatar 3"
                      />
                    </div>

                    <a
                      href="#quality"
                      className="text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 transition-colors flex items-center gap-1"
                    >
                      <span>APEDA Certified</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>

                  {/* Testimonial Quote Specific to JNJ */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    Direct farmer collective aggregation with unbroken cold-chain pre-cooling. Trusted by wholesale
                    supermarkets and mandi buyers across UAE, Saudi Arabia, and Europe.
                  </p>

                  {/* Rating Display */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                        4.9
                      </span>
                      <div className="flex items-center gap-0.5 text-amber-500">
                        <Star className="size-4 fill-amber-400 text-amber-400" />
                        <Star className="size-4 fill-amber-400 text-amber-400" />
                        <Star className="size-4 fill-amber-400 text-amber-400" />
                        <Star className="size-4 fill-amber-400 text-amber-400" />
                        <Star className="size-4 fill-amber-400 text-amber-400" />
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
          <div className="pt-10 sm:pt-14 grid sm:grid-cols-2 gap-4 lg:gap-6 items-end">
            {/* Bottom-Left Floating Card: JNJ Reefer Produce Allocation */}
            <ScrollReveal variant="fade-up" delay={500}>
              <div className="extice-card bg-[#031724]/85 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-4.5 shadow-2xl flex items-center gap-4 max-w-md group">
                {/* 3D Yellow Shipping Container Image */}
                <div className="relative size-16 sm:size-18 shrink-0 rounded-xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
                  <img
                    src="/images/yellow-container.jpg"
                    alt="JNJ International 40ft Reefer Container"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                    JNJ REEFER SERVICE &bull; FCL CONSIGNMENTS
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-[#f5d77f] transition-colors">
                    Tomatoes, Red Onions &amp; Potatoes
                  </h4>
                  <button
                    onClick={onOpenRFQ}
                    className="text-[11px] font-semibold text-amber-300 hover:text-white transition-colors inline-flex items-center gap-1 mt-1 cursor-pointer"
                  >
                    <span>Request Pack Date &amp; Rate</span>
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom-Right Floating Card: Port Route & Voyage Tracker */}
            <ScrollReveal variant="fade-up" delay={550}>
              <div className="extice-card bg-[#031724]/85 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl max-w-md sm:ml-auto w-full">
                {/* Route Header: Vizhinjam Seaport (TRV) -> Jebel Ali (DXB) */}
                <div className="flex items-center justify-between gap-3 text-xs font-mono font-bold text-white mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-400"></span>
                    <span className="tracking-wider">IN TRV (Vizhinjam Seaport)</span>
                  </div>

                  {/* Miniature Vessel Emblem */}
                  <div className="p-1 rounded-full bg-white/10 border border-white/20">
                    <Ship className="size-3.5 text-[#f5d77f]" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="tracking-wider text-[#f5d77f]">AE DXB (Jebel Ali)</span>
                    <span className="size-1.5 rounded-full bg-amber-400"></span>
                  </div>
                </div>

                {/* Animated Directional Route Arrow Track */}
                <div className="relative py-2">
                  <div className="h-0.5 w-full bg-white/15 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 via-[#f5d77f] to-amber-400 w-3/4 rounded-full"></div>
                  </div>
                  {/* Moving ship position icon */}
                  <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 size-3 rounded-full bg-[#f5d77f] ring-4 ring-amber-400/30 animate-pulse"></div>
                </div>

                {/* Route Metadata: Departure & Estimated Arrival */}
                <div className="flex items-center justify-between text-[10px] font-mono text-white/70 pt-1">
                  <div>
                    <span className="text-white/40 block">DISPATCH TERMINAL</span>
                    <span className="text-white font-semibold">Vizhinjam &bull; 25km Proximity</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white/40 block">TRANSIT WINDOW</span>
                    <span className="text-[#f5d77f] font-semibold">3 - 4 Days &bull; Unbroken Cold-Chain</span>
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
