import React from 'react'
import {
  Target,
  ShieldCheck,
  Ship,
} from 'lucide-react'
import JNJLogo from './JNJLogo'
import ScrollReveal from './ScrollReveal'

export const AboutCompany: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#f8faf5] relative overflow-hidden border-t border-[#d4af37]/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Official Corporate Identity & Registry Card */}
          <div className="lg:col-span-5">
            <ScrollReveal variant="fade-right" delay={150} duration={850}>
              <div className="luxury-card-dark bg-gradient-to-br from-[#1a5c3c] via-[#22724a] to-[#12442c] text-white p-5 sm:p-9 rounded-2xl sm:rounded-3xl border border-[#d4af37]/45 shadow-2xl relative overflow-hidden">
                {/* Background watermark with subtle float */}
                <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none animate-float-badge">
                  <JNJLogo size="xl" showText={false} />
                </div>

                {/* Logo Emblem Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-emerald-800/80">
                  <JNJLogo size="md" showText={false} />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white">JNJ INTERNATIONAL</h3>
                    <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#f5d77f] font-mono">PRIVATE LIMITED</div>
                    <div className="text-[10px] sm:text-[11px] text-emerald-300/80 mt-0.5">Govt. of India Registered Export House</div>
                  </div>
                </div>

                {/* Registry Info Block */}
                <div className="space-y-3.5 sm:space-y-4 text-xs">
                  <div className="bg-[#10402a]/85 p-3 sm:p-3.5 rounded-xl border border-emerald-800/60 hover:border-[#d4af37]/40 transition-colors">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] block mb-1">
                      Corporate Identity Number (CIN)
                    </span>
                    <div className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider flex items-center justify-between gap-2">
                      <span className="truncate">U46301KL2026PTC104999</span>
                      <span className="size-2 rounded-full bg-emerald-400 animate-beacon shrink-0"></span>
                    </div>
                    <div className="text-[10px] text-emerald-300/70 mt-0.5">
                      Registered with Registrar of Companies, Kerala
                    </div>
                  </div>

                  <div className="bg-[#10402a]/85 p-3 sm:p-3.5 rounded-xl border border-emerald-800/60 hover:border-[#d4af37]/40 transition-colors">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] block mb-1">
                      Registered Corporate Address
                    </span>
                    <div className="font-medium text-white leading-relaxed text-[11px] sm:text-xs">
                      NO. 13/602 MANJADIMOODU, MYLAKKARA,
                      <br />
                      THIRUVANANTHAPURAM, KERALA &ndash; 695572, INDIA
                    </div>
                  </div>

                  <div className="bg-[#10402a]/85 p-3 sm:p-3.5 rounded-xl border border-emerald-800/60 hover:border-[#d4af37]/40 transition-colors">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] block mb-1">
                      Registered Operating Desks
                    </span>
                    <div className="flex flex-col gap-1.5 text-white">
                      <div className="flex flex-wrap items-center gap-x-1.5 font-mono text-[11px]">
                        <span className="text-slate-400">Hotlines:</span>
                        <strong className="text-[#f5d77f] break-all">+91 7994561627 / 9961810692</strong>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-1.5 font-mono text-[11px]">
                        <span className="text-slate-400">Mail:</span>
                        <strong className="text-[#f5d77f] break-all">jnj.internationalpvt@gmail.com</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badge Bottom */}
                <div className="mt-6 pt-5 border-t border-emerald-800/60 flex items-center justify-between text-[11px] text-emerald-200">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-[#d4af37]" />
                    Verified Corporate Entity
                  </span>
                  <span className="font-mono text-[#f5d77f]">Est. Kerala</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative & Mission */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-down" delay={50}>
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#aa851c] font-semibold block mb-2">
                About Us
              </span>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={150}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#052215] tracking-tight mb-3">
                Empowering Agriculture, Serving Global Markets
              </h2>
              <div className="mb-5">
                <span className="extice-accent-line"></span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={250}>
              <div className="prose prose-slate text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 mb-8">
                <p>
                  <strong>JNJ International Private Limited</strong> is a progressive agricultural export and wholesale
                  enterprise based in Thiruvananthapuram, the capital of Kerala, India. Founded with a vision to connect
                  India&apos;s rich vegetable growing clusters with overseas consumer hubs, our company represents the
                  vital bridge between honest farm labor and world-class maritime supply chains.
                </p>
                <p>
                  While conventional export intermediaries subject produce to multiple mandi transactions and quality
                  degradation, JNJ International operates an integrated aggregation model. We contract directly with farm
                  clusters in Karnataka, Tamil Nadu, Maharashtra, and Kerala—procuring premium tomatoes, high-dry-matter
                  red onions, golden table potatoes, and fresh perishable spices right at the farm gate.
                </p>
                <p>
                  By anchoring our headquarters in Thiruvananthapuram, we hold an unparalleled geographical advantage:
                  immediate proximity to India&apos;s landmark <em>Vizhinjam International Seaport</em>, Cochin Port, and
                  Tuticorin. This allows our temperature-controlled Reefer trucks to load directly into ocean liners
                  within hours of harvest, locking in peak crispness and nutrient integrity.
                </p>
              </div>
            </ScrollReveal>

            {/* Core Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <ScrollReveal variant="fade-up" delay={350}>
                <div className="luxury-card-light p-5 rounded-2xl h-full group">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1 group-hover:text-[#12442c] transition-colors">
                    <Target className="size-4 text-[#185839] group-hover:scale-110 transition-transform" />
                    Direct Farmer Fair Trade
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    By cutting multi-tier brokers, our partner farmers receive guaranteed rates, and our buyers receive
                    unmatched competitive wholesale pricing.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={450}>
                <div className="luxury-card-light p-5 rounded-2xl h-full group">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1 group-hover:text-[#12442c] transition-colors">
                    <Ship className="size-4 text-[#185839] group-hover:scale-110 transition-transform" />
                    Maritime Container Excellence
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Containerized shipments engineered for long transit life. High-cube reefers with strict relative
                    humidity control and real-time voyage telemetry.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany
