import React from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Ship,
  Building2,
  Globe2,
  Plane,
  TrendingUp,
  FileText,
  ArrowRight,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import AboutCompany from '../components/AboutCompany'
import ScrollReveal from '../components/ScrollReveal'

interface AboutPageProps {
  onOpenRFQ: (item?: string) => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenRFQ }) => {
  const pillars = [
    {
      icon: TrendingUp,
      title: 'Farmer-Direct Aggregation',
      desc: 'We partner directly with certified Farmer Producer Collectives across Kerala, Tamil Nadu, and Maharashtra. Eliminating predatory intermediaries guarantees fair remuneration to growers and pristine freshness to international consignees.',
    },
    {
      icon: Ship,
      title: 'Unbroken Maritime Cold Chain',
      desc: 'Perishables move directly from temperature-controlled farm-gate pre-cooling chambers into 40ft High-Cube Carrier Reefers equipped with micro-atmosphere monitors, maintaining constant +2°C to +4°C until port discharge.',
    },
    {
      icon: ShieldCheck,
      title: 'Stringent Regulatory Compliance',
      desc: 'Every container consignment is tested against international Maximum Residue Limits (MRL), accredited by APEDA, Spices Board of India, and accompanied by Phytosanitary Certification from Indian Plant Quarantine authorities.',
    },
    {
      icon: Globe2,
      title: 'High-Frequency Middle East Liners',
      desc: 'Leveraging direct sailings from Vizhinjam Deepwater Port and Cochin Port, transit to Jebel Ali (Dubai) and Jeddah Islamic Port is compressed to just 3 to 4 days, ensuring uncompromised shelf life for supermarkets.',
    },
  ]

  const corporateFacts = [
    { label: 'Company Name', value: 'JNJ International Private Limited' },
    { label: 'Corporate Identity Number', value: 'U46301KL2026PTC104999' },
    { label: 'Registration Authority', value: 'Registrar of Companies (RoC), Kerala, India' },
    { label: 'Registered Head Office', value: 'No. 13/602 Manjadimoodu, Mylakkara, Thiruvananthapuram, Kerala – 695572' },
    { label: 'Operational Hubs', value: 'Vizhinjam Seaport, Trivandrum Cargo Terminal & Cochin ICTT' },
    { label: 'Primary Export Commodities', value: 'Fresh Tomatoes, Red Onions, Potatoes, G4 Green Chillies, Ginger Roots' },
    { label: 'Key Export Destinations', value: 'United Arab Emirates, Saudi Arabia, Qatar, Oman, EU & Southeast Asia' },
    { label: 'Container Types Handled', value: '40ft & 20ft Refrigerated Sea Containers (Carrier Transicold / Daikin / Thermo King)' },
  ]

  return (
    <div className="bg-[#fafcf9]">
      {/* 1. Multipage Header */}
      <PageHeader
        breadcrumbCurrent="About Us"
        badge="GOVERNMENT ACCREDITED EXPORT ENTERPRISE"
        title="Institutional Agrarian Export Excellence"
        subtitle="JNJ International Private Limited is an Indian export enterprise based in Thiruvananthapuram, Kerala. We specialize in aggregating, optical sorting, cold-chain preservation, and maritime container freight of Grade-A fresh perishables."
        onOpenRFQ={() => onOpenRFQ()}
      />

      {/* 2. Official Corporate Registry & Profile */}
      <AboutCompany />

      {/* 3. Detailed Strategic Gateway: The Vizhinjam Port Advantage */}
      <section className="py-20 bg-[#03150e] text-white relative overflow-hidden border-y border-[#d4af37]/25">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mb-14">
            <ScrollReveal variant="fade-up" delay={50}>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f5d77f] block mb-2">
                STRATEGIC GEOGRAPHICAL ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">
                Positioned at the Crossroads of Global Maritime Trade
              </h2>
              <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed font-normal">
                Our head office and dispatch packhouses in Thiruvananthapuram are situated just 25 kilometers from
                India&apos;s first mega transshipment deepwater container port, Vizhinjam Seaport, and 15 kilometers
                from Trivandrum International Airport.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal variant="fade-up" delay={100}>
              <div className="luxury-card-dark bg-[#062417]/85 border-[#d4af37]/35 p-7 rounded-2xl h-full flex flex-col justify-between">
                <div>
                  <div className="size-12 rounded-xl bg-[#0b3d26] text-[#f5d77f] border border-[#d4af37]/30 flex items-center justify-center mb-5">
                    <Ship className="size-6 text-[#f5d77f]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Vizhinjam Deepwater Seaport</h3>
                  <p className="text-xs text-emerald-100/75 leading-relaxed">
                    Just 25 km from our dispatch gates. Natural 20-meter draft permits direct berthing of mother container
                    vessels, eliminating feeder delays and transit penalties via Sri Lanka.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-emerald-800/80 text-[11px] font-mono text-[#f5d77f]">
                  25 KM &bull; 40-MINUTE REEFER DRAYAGE
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={180}>
              <div className="luxury-card-dark bg-[#062417]/85 border-[#d4af37]/35 p-7 rounded-2xl h-full flex flex-col justify-between">
                <div>
                  <div className="size-12 rounded-xl bg-[#0b3d26] text-[#f5d77f] border border-[#d4af37]/30 flex items-center justify-center mb-5">
                    <Plane className="size-6 text-[#f5d77f]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Trivandrum International Airport</h3>
                  <p className="text-xs text-emerald-100/75 leading-relaxed">
                    15 km to TRV Air Cargo Complex. Daily wide-body direct flights to Dubai, Doha, Abu Dhabi, Muscat, and
                    Kuwait enable same-day delivery of ultra-perishable produce like premium green chillies.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-emerald-800/80 text-[11px] font-mono text-[#f5d77f]">
                  15 KM &bull; SAME-DAY AIR CARGO
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={260}>
              <div className="luxury-card-dark bg-[#062417]/85 border-[#d4af37]/35 p-7 rounded-2xl h-full flex flex-col justify-between">
                <div>
                  <div className="size-12 rounded-xl bg-[#0b3d26] text-[#f5d77f] border border-[#d4af37]/30 flex items-center justify-center mb-5">
                    <Building2 className="size-6 text-[#f5d77f]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Cochin &amp; Tuticorin Access</h3>
                  <p className="text-xs text-emerald-100/75 leading-relaxed">
                    Seamless access via National Highway corridor to Vallarpadam International Container Transshipment
                    Terminal (ICTT Cochin) and V.O. Chidambaranar Port (Tuticorin) for multi-corridor route resilience.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-emerald-800/80 text-[11px] font-mono text-[#f5d77f]">
                  MULTI-PORT FLEXIBILITY &bull; ZERO BOTTLENECK
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. The 4 Operational Pillars */}
      <section className="py-20 bg-[#f8faf5] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal variant="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#052216]/10 border border-[#d4af37]/40 text-[#073822] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
                <span className="size-1.5 rounded-full bg-[#d4af37]"></span>
                <span>Our Operational Foundation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#052215] mb-4">
                The Four Pillars of JNJ Export Operations
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every carton, sack, and refrigerated sea container shipped under the JNJ banner adheres to an
                institutional standard of quality, accountability, and traceability.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon
              return (
                <ScrollReveal key={pil.title} variant="fade-up" delay={idx * 100}>
                  <div className="luxury-card-light p-8 rounded-2xl h-full flex flex-col justify-between">
                    <div>
                      <div className="size-13 rounded-2xl bg-gradient-to-br from-[#062417] to-[#0b3d26] text-[#f5d77f] border border-[#d4af37]/40 flex items-center justify-center mb-5 shadow-md">
                        <Icon className="size-6.5 text-[#f5d77f]" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{pil.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">{pil.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Corporate Factsheet */}
      <section className="py-20 bg-[#f8faf5] border-t border-[#d4af37]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal variant="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#052216]/10 border border-[#d4af37]/40 text-[#073822] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
                <FileText className="size-3.5 text-[#d4af37]" />
                <span>OFFICIAL CORPORATE DOSSIER</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#052215] font-heading">
                Corporate Credentials &amp; Verification
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-up" delay={120}>
            <div className="luxury-card-light rounded-3xl p-6 sm:p-10 shadow-lg border border-emerald-900/10">
              <div className="divide-y divide-emerald-900/10">
                {corporateFacts.map((fact) => (
                  <div key={fact.label} className="py-3.5 sm:py-4 grid sm:grid-cols-12 gap-2 sm:gap-4 items-center">
                    <span className="sm:col-span-5 text-xs font-bold font-mono text-emerald-900/70 uppercase tracking-wide">
                      {fact.label}
                    </span>
                    <span className="sm:col-span-7 text-xs sm:text-sm font-medium text-slate-900 font-sans">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick CTA Footer Banner */}
          <div className="mt-12 text-center">
            <ScrollReveal variant="fade-up" delay={180}>
              <div className="inline-flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/products"
                  className="extice-btn-primary btn-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e5a83b] via-[#eaae42] to-[#d4af37] text-[#041a10] font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all"
                >
                  <span>Explore Produce Catalog</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider border border-slate-300 shadow-sm transition-all"
                >
                  <span>Contact Export Desk</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
