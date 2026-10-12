import React from 'react'
import {
  Anchor,
  Navigation,
  Globe2,
  ThermometerSnowflake,
} from 'lucide-react'

export const MaritimeLogistics: React.FC = () => {
  const ports = [
    {
      name: 'Vizhinjam International Seaport',
      location: 'Thiruvananthapuram, Kerala (Immediate Proximity)',
      description:
        "India's premier deepwater transshipment mega-port. Allows direct mother-vessel container calls with ultra-low turnaround times and zero congestion delays.",
      highlights: 'Direct Deepwater Ocean Berth • 25 km from JNJ Corporate Base',
    },
    {
      name: 'Cochin Port (Vallarpadam ICTT)',
      location: 'Kochi, Kerala',
      description:
        'Established container transshipment terminal with multiple weekly sailings directly linking to UAE (Jebel Ali), Saudi Arabia (Jeddah), Oman, and European gateways.',
      highlights: 'Dedicated Reefer Plug Infrastructure • 4-day transit to Dubai',
    },
    {
      name: 'Tuticorin (V.O.C Port)',
      location: 'Tamil Nadu (Southern Corridor)',
      description:
        'Strategic eastern-coast port providing rapid transit corridors to Colombo, Maldives, Singapore, and Southeast Asian distribution hubs.',
      highlights: 'Fast Customs Gate Clearance • Ideal for Colombo transshipment',
    },
    {
      name: 'Trivandrum International Airport',
      location: 'Thiruvananthapuram (TRV Air Cargo)',
      description:
        'Equipped with cold storage and phytosanitary inspection desks for time-critical air consignments of fresh G4 green chillies, curry leaves, and ginger.',
      highlights: 'Same-day flight departures to GCC Gulf capitals',
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
    <section id="logistics" className="py-20 bg-[#072519] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header - Clean & Minimal */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#d4af37] font-semibold block mb-2">
            Maritime Logistics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Direct Gateway to Global Seaports
          </h2>
          <p className="text-emerald-100/75 text-sm sm:text-base leading-relaxed">
            Headquartered in Thiruvananthapuram, we utilize direct access to South India&apos;s premier deepwater
            container terminals for fast refrigerated ocean transit.
          </p>
        </div>

        {/* Feature Split: Cargo Ship Visual + Cold Chain Protocol */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: Ship Image with Vessel Specs */}
          <div className="lg:col-span-7 relative group">
            <div className="rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl relative bg-black/60">
              <img
                src="/images/cargo-ship.jpg"
                alt="JNJ International Container Ship Carrying Refrigerated Cargo across Ocean"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03160d] via-black/30 to-transparent"></div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#062215]/90 backdrop-blur-md border border-[#d4af37]/30 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#d4af37]/20 text-[#f5d77f]">
                    <Anchor className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Full Container Load (FCL) Reefer Service</h4>
                    <p className="text-xs text-emerald-200">Continuous temperature monitoring with micro-data loggers</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#f5d77f] bg-black/40 px-3 py-1.5 rounded-lg border border-[#d4af37]/30">
                  <ThermometerSnowflake className="size-3.5" />
                  <span>Cold-Chain Maintained</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Port Gateway List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Navigation className="size-5 text-[#f5d77f]" />
              Strategic Export Shipping Gateways
            </h3>
            <p className="text-xs text-emerald-100/70 mb-4">
              Our trucks access deepwater docks within minutes, eliminating road fatigue and heat shock before container
              sealing:
            </p>

            <div className="space-y-3">
              {ports.map((port, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-emerald-800/60 hover:border-[#d4af37]/50 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
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
              ))}
            </div>
          </div>
        </div>

        {/* Global Transit Times Table */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-emerald-800/60">
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
            <span className="text-xs font-mono text-emerald-300 bg-black/30 px-3 py-1.5 rounded-lg border border-emerald-700/50">
              Weekly Scheduled Reefer Slots
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinations.map((dest, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#031c11]/80 border border-emerald-800/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-white">{dest.region}</span>
                    <span className="text-[11px] font-mono font-bold text-[#f5d77f] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/30">
                      {dest.transit}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-100/70">{dest.ports}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MaritimeLogistics
