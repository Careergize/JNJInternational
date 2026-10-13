import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Ship, Award, CheckCircle2 } from 'lucide-react'
import Hero from '../components/Hero'
import ProduceSection from '../components/ProduceSection'
import MaritimeLogistics from '../components/MaritimeLogistics'
import ExportWorkflow from '../components/ExportWorkflow'
import QualityStandards from '../components/QualityStandards'
import AboutCompany from '../components/AboutCompany'
import ContactSection from '../components/ContactSection'

interface HomePageProps {
  onOpenRFQ: (item?: string) => void
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenRFQ }) => {
  return (
    <div>
      {/* 1. Global Freight Solutions Hero */}
      <Hero onOpenRFQ={() => onOpenRFQ()} />

      {/* 2. Multipage Quick Navigation Feature Strip */}
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

      {/* 3. Core Produce Catalog */}
      <ProduceSection onOpenRFQ={onOpenRFQ} />

      {/* 4. Maritime Shipping & Port Proximity */}
      <MaritimeLogistics />

      {/* 5. 4-Stage Farm-to-Port Cold-Chain Workflow */}
      <ExportWorkflow />

      {/* 6. Quality Assurance & APEDA Standards */}
      <QualityStandards />

      {/* 7. Corporate Profile & Registry Information */}
      <AboutCompany />

      {/* 8. Dedicated Contact Section */}
      <ContactSection />
    </div>
  )
}

export default HomePage
