import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface HeroProps {
  onOpenRFQ: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenRFQ }) => {
  return (
    <section id="home" className="relative bg-[#072418] text-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Clean Editorial Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Minimal Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#d4af37] mb-5">
              <span className="size-1.5 rounded-full bg-[#d4af37]"></span>
              <span>Thiruvananthapuram &bull; Kerala &bull; CIN U46301KL2026PTC104999</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              From India&apos;s fertile soil to{' '}
              <em className="italic font-serif font-normal text-[#f5d77f]">the world&apos;s table.</em>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed max-w-xl font-normal mb-8">
              At JNJ International Private Limited, we export premium Indian farm produce—specializing in Grade-A{' '}
              <strong className="text-white font-medium">Tomatoes</strong>,{' '}
              <strong className="text-white font-medium">Red Onions</strong>,{' '}
              <strong className="text-white font-medium">Golden Potatoes</strong>, and fresh spices. Graded,
              pre-cooled, and shipped via maritime reefers to global wholesale markets.
            </p>

            {/* Clean Minimal Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#062417] bg-[#f5d77f] hover:bg-[#fae498] rounded-full transition-all cursor-pointer shadow-sm"
              >
                Explore Products
              </a>

              <button
                onClick={onOpenRFQ}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white hover:text-[#f5d77f] border border-white/30 hover:border-[#f5d77f] rounded-full transition-all cursor-pointer"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="size-3.5" />
              </button>
            </div>

            {/* Minimalist 3-Point Guarantee */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-emerald-200/70 pt-6 border-t border-emerald-900/60 w-full font-mono">
              <div>&bull; Farm Gate Aggregation</div>
              <div>&bull; Temperature Controlled Reefers</div>
              <div>&bull; Vizhinjam &amp; Cochin Port Dispatch</div>
            </div>
          </div>

          {/* Right Column: Pristine Uncluttered Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-800/60 shadow-2xl bg-black/40">
              <img
                src="/images/hero-produce.jpg"
                alt="JNJ International Fresh Vegetables - Export Grade Tomatoes, Onions and Potatoes"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs">
                <span className="text-white/90 font-medium tracking-wide">
                  Grade-A Tomatoes, Onions &amp; Potatoes
                </span>
                <span className="font-mono text-[11px] text-[#f5d77f]">Active Consignments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
