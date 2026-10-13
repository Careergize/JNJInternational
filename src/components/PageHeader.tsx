import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface PageHeaderProps {
  badge?: string
  title: string
  subtitle: string
  breadcrumbCurrent: string
  onOpenRFQ?: () => void
  showCta?: boolean
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge = 'JNJ INTERNATIONAL PRIVATE LIMITED',
  title,
  subtitle,
  breadcrumbCurrent,
  onOpenRFQ,
  showCta = true,
}) => {
  return (
    <section className="relative bg-[#12442c] py-8 sm:py-14 lg:py-18 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-b border-[#d4af37]/30">
      {/* Background Ambient Glow & Light Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#d4af37]/12 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl"></div>
        {/* Subtle geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb Row */}
        <ScrollReveal variant="fade-down" delay={50} duration={800}>
          <nav className="flex items-center gap-2 text-xs font-mono text-[#d4af37]/80 mb-4 sm:mb-6">
            <Link to="/" className="text-white/70 hover:text-[#f5d77f] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-white/40" />
            <span className="text-[#f5d77f] font-semibold">{breadcrumbCurrent}</span>
          </nav>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-8">
            {/* Eyebrow Badge */}
            <ScrollReveal variant="fade-down" delay={120} duration={850}>
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#f5d77f] text-[10px] sm:text-xs font-mono tracking-wider shadow-sm mb-3 sm:mb-4 max-w-full truncate">
                <span className="size-1.5 sm:size-2 rounded-full bg-emerald-400 animate-beacon shrink-0"></span>
                <span className="font-semibold uppercase truncate">{badge}</span>
              </div>
            </ScrollReveal>

            {/* Main Page Title */}
            <ScrollReveal variant="fade-up" delay={200} duration={900}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.16] sm:leading-[1.15] mb-3 sm:mb-4 font-heading">
                {title}
              </h1>
            </ScrollReveal>

            {/* Subtitle / Editorial Excerpt */}
            <ScrollReveal variant="fade-up" delay={280} duration={900}>
              <p className="text-xs sm:text-sm lg:text-base text-emerald-100/90 max-w-2xl leading-relaxed font-normal">
                {subtitle}
              </p>
            </ScrollReveal>
          </div>

          {/* Right Action Pill if enabled */}
          {showCta && onOpenRFQ && (
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <ScrollReveal variant="fade-left" delay={320} duration={900} className="w-full max-w-md lg:max-w-sm">
                <div className="luxury-card-dark bg-[#1a5c3c]/90 p-4 sm:p-6 rounded-2xl border border-[#d4af37]/35 shadow-xl w-full">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#f5d77f] font-bold block mb-1">
                    Direct Export Quotation
                  </span>
                  <p className="text-xs text-emerald-100/80 leading-relaxed mb-3 sm:mb-4">
                    Get custom CIF &amp; FOB reefer shipping rates for UAE, Saudi Arabia, Europe &amp; Southeast Asia.
                  </p>
                  <button
                    onClick={onOpenRFQ}
                    className="w-full extice-btn-primary btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 text-xs uppercase tracking-wider font-bold text-[#041a10] bg-gradient-to-r from-[#e5a83b] via-[#eaae42] to-[#d4af37] hover:brightness-105 rounded-full shadow-lg shadow-amber-500/25 cursor-pointer transition-all"
                  >
                    <span>Request Rate Card</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PageHeader
