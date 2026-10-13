import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ShieldCheck,
  Ship,
  Award,
  CheckCircle2,
  ThermometerSnowflake,
  MessageCircle,
  FileSpreadsheet,
  Sparkles,
} from 'lucide-react'
import Hero from '../components/Hero'
import ScrollReveal from '../components/ScrollReveal'

interface HomePageProps {
  onOpenRFQ: (item?: string) => void
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenRFQ }) => {
  const flagshipProduce = [
    {
      name: 'Fresh Tomatoes',
      variety: 'Roma & Hybrid Grade A+',
      caliber: '55mm – 65mm Uniform',
      temp: '+10°C to +12°C Reefer',
      shelfLife: '14 – 21 Days',
      packaging: '15kg Crates / 6kg Cartons',
      image: '/images/tomatoes.jpg',
      badge: 'HIGH DEMAND GCC',
    },
    {
      name: 'Superior Red Onions',
      variety: 'Nashik & Bellary Red',
      caliber: '45mm – 60mm & 55mm+',
      temp: 'Dry Ventilated / +2°C Reefer',
      shelfLife: '30 – 60 Days',
      packaging: '25kg & 50kg Leno Mesh Bags',
      image: '/images/onions.jpg',
      badge: 'HIGH DRY-MATTER',
    },
    {
      name: 'Golden Potatoes',
      variety: 'Kufri Jyoti & Processing Grade',
      caliber: '50mm+ Calibrated',
      temp: '+8°C to +10°C Reefer',
      shelfLife: '60 – 90 Days',
      packaging: '25kg & 50kg Heavy Jute Bags',
      image: '/images/potatoes.jpg',
      badge: 'GRADE A SELECTION',
    },
  ]

  const trustBadges = [
    {
      title: 'APEDA Compliant',
      subtitle: 'Govt. of India Agricultural Export Authority',
      icon: Award,
    },
    {
      title: 'Phytosanitary Certified',
      subtitle: 'Free from quarantine pests and pathogens',
      icon: ShieldCheck,
    },
    {
      title: 'FSSAI Food Safety',
      subtitle: 'Hygienic sorting & food-grade packaging',
      icon: CheckCircle2,
    },
    {
      title: 'Cold-Chain Telemetry',
      subtitle: 'Continuous data logger temperature tracking',
      icon: ThermometerSnowflake,
    },
  ]

  return (
    <div>
      {/* 1. Global Maritime Freight & Produce Hero */}
      <Hero onOpenRFQ={() => onOpenRFQ()} />

      {/* 2. Specialized Multipage Portfolios Feature Strip */}
      <section className="bg-[#03170e] text-white py-10 sm:py-12 px-4 sm:px-6 border-y border-[#d4af37]/35 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4af37]"></span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#f5d77f] font-semibold">
              Explore Our Specialized Export Portfolios
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4af37]"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            <Link
              to="/about"
              className="p-5 rounded-2xl bg-gradient-to-br from-[#062518]/90 to-[#041910]/95 border border-[#d4af37]/25 hover:border-[#d4af37]/75 hover:shadow-xl hover:shadow-black/50 transition-all duration-400 group"
            >
              <div className="size-11 rounded-xl bg-[#083320] text-[#f5d77f] border border-[#d4af37]/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Award className="size-5 text-[#f5d77f]" />
              </div>
              <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-[#f5d77f] transition-colors flex items-center justify-between">
                <span>About Corporate</span>
                <ArrowRight className="size-3.5 text-[#d4af37] transition-transform group-hover:translate-x-1" />
              </h4>
              <p className="text-xs text-emerald-100/70 mt-1 line-clamp-2">
                CIN U46301KL2026PTC104999 &bull; Registered with ROC Kerala.
              </p>
            </Link>

            <Link
              to="/products"
              className="p-5 rounded-2xl bg-gradient-to-br from-[#062518]/90 to-[#041910]/95 border border-[#d4af37]/25 hover:border-[#d4af37]/75 hover:shadow-xl hover:shadow-black/50 transition-all duration-400 group"
            >
              <div className="size-11 rounded-xl bg-[#083320] text-[#f5d77f] border border-[#d4af37]/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="size-5 text-[#f5d77f]" />
              </div>
              <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-[#f5d77f] transition-colors flex items-center justify-between">
                <span>Fresh Produce</span>
                <ArrowRight className="size-3.5 text-[#d4af37] transition-transform group-hover:translate-x-1" />
              </h4>
              <p className="text-xs text-emerald-100/70 mt-1 line-clamp-2">
                Tomatoes, Nashik Red Onions, Potatoes &amp; Green Chillies.
              </p>
            </Link>

            <Link
              to="/logistics"
              className="p-5 rounded-2xl bg-gradient-to-br from-[#062518]/90 to-[#041910]/95 border border-[#d4af37]/25 hover:border-[#d4af37]/75 hover:shadow-xl hover:shadow-black/50 transition-all duration-400 group"
            >
              <div className="size-11 rounded-xl bg-[#083320] text-[#f5d77f] border border-[#d4af37]/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Ship className="size-5 text-[#f5d77f]" />
              </div>
              <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-[#f5d77f] transition-colors flex items-center justify-between">
                <span>Sea Reefer Logistics</span>
                <ArrowRight className="size-3.5 text-[#d4af37] transition-transform group-hover:translate-x-1" />
              </h4>
              <p className="text-xs text-emerald-100/70 mt-1 line-clamp-2">
                Vizhinjam Seaport &bull; 3-4 days transit to Jebel Ali.
              </p>
            </Link>

            <Link
              to="/quality"
              className="p-5 rounded-2xl bg-gradient-to-br from-[#062518]/90 to-[#041910]/95 border border-[#d4af37]/25 hover:border-[#d4af37]/75 hover:shadow-xl hover:shadow-black/50 transition-all duration-400 group"
            >
              <div className="size-11 rounded-xl bg-[#083320] text-[#f5d77f] border border-[#d4af37]/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ShieldCheck className="size-5 text-[#f5d77f]" />
              </div>
              <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-[#f5d77f] transition-colors flex items-center justify-between">
                <span>Quality &amp; APEDA</span>
                <ArrowRight className="size-3.5 text-[#d4af37] transition-transform group-hover:translate-x-1" />
              </h4>
              <p className="text-xs text-emerald-100/70 mt-1 line-clamp-2">
                Optical grading, phytosanitary clearance &amp; residue testing.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Curated Flagship Produce Preview (Compact & High Impact) */}
      <section className="py-16 sm:py-20 bg-[#f8faf5] border-b border-[#d4af37]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <ScrollReveal variant="fade-down" delay={50}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#052216]/10 border border-[#d4af37]/40 text-[#073822] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
                  <Sparkles className="size-3.5 text-[#d4af37]" />
                  <span>Flagship Agricultural Commodities</span>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={150}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#052215] tracking-tight">
                  Direct Farm-Gate Export Produce
                </h2>
                <p className="text-sm text-slate-600 mt-2 max-w-xl">
                  Optical grading, pre-cooled at farm-gate packhouses, and stuffed into refrigerated sea containers for global wholesale distribution.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="fade-left" delay={200}>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#052417] text-[#f5d77f] hover:text-white border border-[#d4af37]/40 text-xs font-bold shadow-md hover:bg-[#073321] transition-all group shrink-0"
              >
                <span>View Full Catalog &amp; Specs</span>
                <ArrowRight className="size-4 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {flagshipProduce.map((item, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={100 + idx * 100}>
                <div className="luxury-card-light rounded-2xl overflow-hidden group flex flex-col h-full">
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-3 left-3 bg-[#03180f]/90 text-[#f5d77f] text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-[#d4af37]/40 backdrop-blur-sm">
                      {item.badge}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="font-bold text-lg leading-tight drop-shadow-sm">{item.name}</h3>
                      <p className="text-xs text-emerald-200/90 drop-shadow-sm font-medium mt-0.5">{item.variety}</p>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-emerald-950/5">
                        <span className="text-slate-500">Grading Caliber:</span>
                        <strong className="text-slate-800 font-semibold">{item.caliber}</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-emerald-950/5">
                        <span className="text-slate-500">Reefer Temp:</span>
                        <strong className="text-[#083b24] font-semibold">{item.temp}</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-emerald-950/5">
                        <span className="text-slate-500">Shelf Longevity:</span>
                        <strong className="text-slate-800 font-semibold">{item.shelfLife}</strong>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-500">Export Packaging:</span>
                        <span className="text-slate-700 font-medium truncate max-w-[140px] text-right">{item.packaging}</span>
                      </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-emerald-950/10 flex items-center gap-2">
                      <button
                        onClick={() => onOpenRFQ(item.name)}
                        className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-[#e5a83b] via-[#d4af37] to-[#c59b27] hover:brightness-105 text-[#041a10] text-xs font-bold shadow-sm transition-all text-center cursor-pointer"
                      >
                        Request Quote
                      </button>
                      <Link
                        to="/products"
                        className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#073822] transition-colors"
                        title="View Full Specifications"
                      >
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Maritime Gateway Teaser (High-Impact Dark Emerald Banner) */}
      <section className="py-16 sm:py-20 bg-[#03150e] text-white relative overflow-hidden border-b border-[#d4af37]/25">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="luxury-card-dark bg-gradient-to-br from-[#062518]/95 via-[#083523]/90 to-[#041910] p-6 sm:p-10 rounded-3xl border border-[#d4af37]/35 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03170e]/80 border border-[#d4af37]/40 text-[#f5d77f] text-xs font-mono uppercase mb-4">
                  <Ship className="size-3.5 text-[#d4af37]" />
                  <span>Strategic Maritime Gateway</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  25 km to Vizhinjam Deepwater Port &bull; Direct Mother Vessel Sailings
                </h3>
                <p className="text-sm text-emerald-100/80 leading-relaxed max-w-2xl mb-6">
                  Headquartered in Thiruvananthapuram, Kerala, JNJ International bridges Indian farm gates directly with
                  international seaports. Natural 20-meter draft permits direct liner calls to Jebel Ali (Dubai) in just 3 to 4 days,
                  eliminating feeder delays and preserving critical produce shelf life.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/logistics"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#e5a83b] via-[#d4af37] to-[#c59b27] hover:brightness-105 active:scale-95 text-[#041a10] text-xs font-bold shadow-lg transition-all"
                  >
                    <span>Explore Shipping Corridors &amp; Schedules</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#041a10] hover:bg-[#072a1b] text-emerald-200 hover:text-white border border-[#d4af37]/30 text-xs font-semibold transition-all"
                  >
                    <span>About Corporate Registry</span>
                  </Link>
                </div>
              </div>

              {/* 4 Stat Highlights */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4">
                <div className="bg-[#031c11]/85 p-4 sm:p-5 rounded-2xl border border-emerald-800/60 hover:border-[#d4af37]/40 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#f5d77f]">25 KM</div>
                  <div className="text-xs font-semibold text-white mt-1">Packhouse to Berth</div>
                  <div className="text-[11px] text-emerald-300/70 mt-0.5">Under 40-min drayage</div>
                </div>

                <div className="bg-[#031c11]/85 p-4 sm:p-5 rounded-2xl border border-emerald-800/60 hover:border-[#d4af37]/40 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#f5d77f]">3 - 4 DAYS</div>
                  <div className="text-xs font-semibold text-white mt-1">Transit to Jebel Ali</div>
                  <div className="text-[11px] text-emerald-300/70 mt-0.5">Direct ocean passage</div>
                </div>

                <div className="bg-[#031c11]/85 p-4 sm:p-5 rounded-2xl border border-emerald-800/60 hover:border-[#d4af37]/40 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#f5d77f]">+2° to +12°C</div>
                  <div className="text-xs font-semibold text-white mt-1">Reefer Precision</div>
                  <div className="text-[11px] text-emerald-300/70 mt-0.5">Micro-climate control</div>
                </div>

                <div className="bg-[#031c11]/85 p-4 sm:p-5 rounded-2xl border border-emerald-800/60 hover:border-[#d4af37]/40 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#f5d77f]">100%</div>
                  <div className="text-xs font-semibold text-white mt-1">Traceability</div>
                  <div className="text-[11px] text-emerald-300/70 mt-0.5">APEDA audited logs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quality & Compliance Trust Bar */}
      <section className="py-12 bg-[#f8faf5] border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon
              return (
                <div
                  key={idx}
                  className="luxury-card-light p-4 rounded-xl flex items-center gap-3.5"
                >
                  <div className="size-10 rounded-lg bg-[#052417] text-[#f5d77f] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                    <Icon className="size-5 text-[#f5d77f]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{badge.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{badge.subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/quality"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#073822] hover:text-[#b38b2d] transition-colors"
            >
              <span>Learn about our 5-Stage Farm-to-Port Quality Control Protocol</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Quick RFQ & Commercial Desk Callout */}
      <section className="py-16 sm:py-20 bg-[#03150e] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <ScrollReveal variant="fade-down" delay={50}>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#f5d77f] font-semibold block mb-2">
              COMMERCIAL EXPORT INQUIRIES
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Procure Commercial Container Loads Directly
            </h2>
            <p className="text-sm text-emerald-100/80 leading-relaxed mb-8">
              Farm-gate aggregated pricing, certified tare weights, and guaranteed Reefer vessel bookings from Vizhinjam Seaport. Connect with our export desk today.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <button
                onClick={() => onOpenRFQ()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#e5a83b] via-[#d4af37] to-[#c59b27] hover:brightness-105 active:scale-95 text-[#041a10] text-xs font-bold shadow-xl transition-all cursor-pointer"
              >
                <FileSpreadsheet className="size-4" />
                <span>Request Formal Export Quotation</span>
              </button>

              <a
                href="https://wa.me/917994561627?text=Hello%20JNJ%20International%2C%20I%20would%20like%20to%20enquire%20about%20vegetable%20export%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#062417] hover:bg-[#083321] text-[#f5d77f] hover:text-white border border-[#d4af37]/40 text-xs font-semibold shadow-md transition-all"
              >
                <MessageCircle className="size-4 text-[#d4af37]" />
                <span>WhatsApp Trade Desk</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-200 hover:text-white border border-emerald-700/50 text-xs font-medium transition-all"
              >
                <span>Full Contact Office Details</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default HomePage
