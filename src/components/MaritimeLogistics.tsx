import React from 'react'
import {
  Anchor,
  Navigation,
  Globe2,
  ThermometerSnowflake,
  Ship,
  Clock,
  Compass,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import AnimatedCounter from './AnimatedCounter'

export const MaritimeLogistics: React.FC = () => {
  const ports = [
    {
      name: 'Vizhinjam International Seaport',
      location: 'Thiruvananthapuram, Kerala (Immediate Proximity)',
      description:
        "India's premier deepwater transshipment mega-port. Allows direct mother-vessel container calls with ultra-low turnaround times and zero congestion delays.",
      highlights: 'Direct Deepwater Ocean Berth • 25 km from JNJ Corporate Base',
      distance: 25,
    },
    {
      name: 'Cochin Port (Vallarpadam ICTT)',
      location: 'Kochi, Kerala',
      description:
        'Established container transshipment terminal with multiple weekly sailings directly linking to UAE (Jebel Ali), Saudi Arabia (Jeddah), Oman, and European gateways.',
      highlights: 'Dedicated Reefer Plug Infrastructure • 4-day transit to Dubai',
      distance: 210,
    },
    {
      name: 'Tuticorin (V.O.C Port)',
      location: 'Tamil Nadu (Southern Corridor)',
      description:
        'Strategic eastern-coast port providing rapid transit corridors to Colombo, Maldives, Singapore, and Southeast Asian distribution hubs.',
      highlights: 'Fast Customs Gate Clearance • Ideal for Colombo transshipment',
      distance: 180,
    },
    {
      name: 'Trivandrum International Airport',
      location: 'Thiruvananthapuram (TRV Air Cargo)',
      description:
        'Equipped with cold storage and phytosanitary inspection desks for time-critical air consignments of fresh G4 green chillies, curry leaves, and ginger.',
      highlights: 'Same-day flight departures to GCC Gulf capitals',
      distance: 22,
    },
  ]

  const destinations = [
    { region: 'United Arab Emirates', ports: 'Jebel Ali (Dubai), Port Khalid (Sharjah)', transit: '3 - 4 Days' },
    { region: 'Saudi Arabia', ports: 'Jeddah Islamic Port, King Abdulaziz Port (Dammam)', transit: '5 - 7 Days' },
    { region: 'Oman & Qatar', ports: 'Port of Salalah, Sohar, Hamad Port (Doha)', transit: '4 - 5 Days' },
    { region: 'Maldives', ports: 'Male Commercial Harbour (Direct Reefer Vessels)', transit: '36 - 48 Hours' },
    { region: 'Southeast Asia', ports: 'Port of Singapore, Port Klang (Malaysia)', transit: '5 - 6 Days' },
    { region: 'United Kingdom & Europe', ports: 'Felixstowe, London Gateway, Rotterdam', transit: '18 - 22 Days' },
  ]

  return (
    <section id="logistics" className="py-24 bg-[#072519] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal variant="fade-down" delay={50}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#d4af37] font-semibold block mb-2">
              Maritime Logistics
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Direct Gateway to Global Seaports
            </h2>
            <div className="flex justify-center mb-4">
              <span className="extice-accent-line"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={250}>
            <p className="text-emerald-100/75 text-sm sm:text-base leading-relaxed">
              Headquartered in Thiruvananthapuram, we utilize direct access to South India&apos;s premier deepwater
              container terminals for fast refrigerated ocean transit.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Quick Maritime Counter Badges */}
        <ScrollReveal variant="fade-up" delay={300}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            <div className="glass-panel-dark p-4 rounded-2xl border border-[#d4af37]/30 flex items-center gap-4 extice-card">
              <div className="size-12 rounded-xl bg-[#d4af37]/15 flex items-center justify-center text-[#f5d77f]">
                <Ship className="size-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold font-mono text-[#f5d77f]">
                  <AnimatedCounter value={25} suffix=" km" />
                </div>
                <div className="text-xs text-emerald-100/80 font-medium">To Vizhinjam Megaport</div>
              </div>
            </div>

            <div className="glass-panel-dark p-4 rounded-2xl border border-[#d4af37]/30 flex items-center gap-4 extice-card">
              <div className="size-12 rounded-xl bg-[#d4af37]/15 flex items-center justify-center text-[#f5d77f]">
                <Clock className="size-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold font-mono text-[#f5d77f]">
                  <AnimatedCounter value={3} suffix=" - 4 Days" />
                </div>
                <div className="text-xs text-emerald-100/80 font-medium">Ocean Transit to UAE / Dubai</div>
              </div>
            </div>

            <div className="glass-panel-dark p-4 rounded-2xl border border-[#d4af37]/30 flex items-center gap-4 extice-card">
              <div className="size-12 rounded-xl bg-[#d4af37]/15 flex items-center justify-center text-[#f5d77f]">
                <ThermometerSnowflake className="size-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold font-mono text-[#f5d77f]">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <div className="text-xs text-emerald-100/80 font-medium">Cold-Chain Reefer Audit</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Split: Cargo Ship Visual + Cold Chain Protocol */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: Ship Image with Vessel Specs */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-right" delay={200} duration={850}>
              <div className="relative group extice-card">
                <div className="rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl relative bg-black/60 extice-zoom-wrap">
                  <img
                    src="/images/jnj-cargo-ship.jpg"
                    alt="JNJ International Container Ship Carrying Refrigerated Cargo across Ocean"
                    className="w-full h-[380px] sm:h-[440px] object-cover extice-zoom-img"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03160d] via-black/30 to-transparent"></div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#062215]/90 backdrop-blur-md border border-[#d4af37]/40 flex flex-wrap items-center justify-between gap-3 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-[#d4af37]/20 text-[#f5d77f] group-hover:scale-110 transition-transform duration-300">
                        <Anchor className="size-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Full Container Load (FCL) Reefer Service</h4>
                        <p className="text-xs text-emerald-200">Continuous temperature monitoring with micro-data loggers</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#f5d77f] bg-black/50 px-3 py-1.5 rounded-lg border border-[#d4af37]/40">
                      <span className="size-2 rounded-full bg-emerald-400 animate-beacon"></span>
                      <ThermometerSnowflake className="size-3.5" />
                      <span>Cold-Chain Maintained</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Port Gateway List */}
          <div className="lg:col-span-5 space-y-3.5">
            <ScrollReveal variant="fade-left" delay={150}>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Navigation className="size-5 text-[#f5d77f]" />
                Strategic Export Shipping Gateways
              </h3>
              <p className="text-xs text-emerald-100/70 mb-4">
                Our trucks access deepwater docks within minutes, eliminating road fatigue and heat shock before container
                sealing:
              </p>
            </ScrollReveal>

            <div className="space-y-3">
              {ports.map((port, idx) => (
                <ScrollReveal key={idx} variant="fade-left" delay={200 + idx * 80}>
                  <div className="extice-card p-4 rounded-xl bg-white/5 border border-emerald-800/60 hover:border-[#d4af37]/50 hover:bg-white/10 transition-all cursor-default group">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2 group-hover:text-[#f5d77f] transition-colors">
                        <span className="size-1.5 rounded-full bg-[#f5d77f]"></span>
                        {port.name}
                      </h4>
                    </div>
                    <p className="text-[11px] text-[#f5d77f] font-mono mb-1.5">{port.location}</p>
                    <p className="text-xs text-emerald-100/80 leading-relaxed mb-2">{port.description}</p>
                    <span className="inline-block text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/50">
                      {port.highlights}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Global Transit Times Table */}
        <ScrollReveal variant="fade-up" delay={250}>
          <div className="glass-panel-dark rounded-2xl p-6 sm:p-8 border border-emerald-800/60 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Globe2 className="size-5 text-[#f5d77f]" />
                  Primary Export Corridors &amp; Typical Ocean Transit Windows
                </h3>
                <p className="text-xs text-emerald-200/80 mt-1">
                  Direct maritime liner sailings operating out of Southern Indian terminals.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-300 bg-black/40 px-3.5 py-1.5 rounded-lg border border-emerald-700/50 flex items-center gap-2">
                <Compass className="size-3.5 text-[#d4af37]" />
                Weekly Scheduled Reefer Slots
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {destinations.map((dest, idx) => (
                <div
                  key={idx}
                  className="extice-card p-4 rounded-xl bg-[#031c11]/80 border border-emerald-800/40 flex flex-col justify-between hover:border-[#d4af37]/50"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-white">{dest.region}</span>
                      <span className="text-[11px] font-mono font-bold text-[#f5d77f] bg-[#d4af37]/10 px-2.5 py-0.5 rounded border border-[#d4af37]/30">
                        {dest.transit}
                      </span>
                    </div>
                    <p className="text-xs text-emerald-100/70">{dest.ports}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default MaritimeLogistics
