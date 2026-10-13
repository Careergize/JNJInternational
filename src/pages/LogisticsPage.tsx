import React from 'react'
import {
  ThermometerSnowflake,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Anchor,
  Compass,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import MaritimeLogistics from '../components/MaritimeLogistics'
import ExportWorkflow from '../components/ExportWorkflow'
import ScrollReveal from '../components/ScrollReveal'

interface LogisticsPageProps {
  onOpenRFQ: (item?: string) => void
}

export const LogisticsPage: React.FC<LogisticsPageProps> = ({ onOpenRFQ }) => {
  const routes = [
    {
      origin: 'Vizhinjam Seaport (TRV)',
      destination: 'Jebel Ali Port, Dubai (AE DXB)',
      transit: '3 - 4 Days',
      frequency: '3 Sailings Weekly',
      carrierType: 'Direct Sea Reefer Liner',
      status: 'Active Corridor',
    },
    {
      origin: 'Vizhinjam / Cochin ICTT',
      destination: 'Jeddah Islamic Port (SA JED)',
      transit: '6 - 7 Days',
      frequency: '2 Sailings Weekly',
      carrierType: 'Direct Sea Reefer Liner',
      status: 'Active Corridor',
    },
    {
      origin: 'Vizhinjam / Cochin ICTT',
      destination: 'King Abdulaziz Port, Dammam (SA DMM)',
      transit: '5 - 6 Days',
      frequency: '2 Sailings Weekly',
      carrierType: 'Direct Sea Reefer Liner',
      status: 'Active Corridor',
    },
    {
      origin: 'Vizhinjam / Cochin ICTT',
      destination: 'Hamad Port, Doha (QA HMD)',
      transit: '4 - 5 Days',
      frequency: '2 Sailings Weekly',
      carrierType: 'Direct Sea Reefer Liner',
      status: 'Active Corridor',
    },
    {
      origin: 'Vizhinjam / Cochin ICTT',
      destination: 'Port of Singapore (SG SIN)',
      transit: '6 - 7 Days',
      frequency: 'Weekly Direct Liner',
      carrierType: 'Reefer Container FCL',
      status: 'Active Corridor',
    },
    {
      origin: 'Vizhinjam / Cochin ICTT',
      destination: 'Port of Rotterdam, Netherlands (NL RTM)',
      transit: '14 - 17 Days',
      frequency: 'Weekly Ocean Liner',
      carrierType: 'Controlled Atmosphere (CA) Reefer',
      status: 'Seasonal / Contractual',
    },
  ]

  const specs = [
    {
      icon: ThermometerSnowflake,
      title: 'Digital Micro-Temperature Logging',
      desc: 'Reefers are equipped with continuous telemetry that records supply and return air temperatures every 15 minutes. Temperature graphs are provided to consignees alongside shipping documents.',
    },
    {
      icon: Anchor,
      title: 'Mandatory Pre-Trip Inspection (PTI)',
      desc: 'No container is stuffed without passing an official carrier Pre-Trip Inspection verifying cooling compressor integrity, door gasket airtightness, and drain valve functionality.',
    },
    {
      icon: Compass,
      title: 'Controlled Fresh Air Ventilation',
      desc: 'Air exchange rates (CFM) are calibrated per crop to flush out accumulated ethylene gas and CO2, preventing premature ripening during long sea passages.',
    },
    {
      icon: ShieldCheck,
      title: 'Port Drayage within 40 Minutes',
      desc: 'Our packhouses are positioned within 25km of Vizhinjam Seaport gates. Drayage takes under an hour, eliminating exposure to ambient heat during transfer to terminal cranes.',
    },
  ]

  return (
    <div className="bg-[#fafcf9]">
      {/* 1. Multipage Header */}
      <PageHeader
        breadcrumbCurrent="Maritime Logistics"
        badge="COLD-CHAIN MARITIME INFRASTRUCTURE"
        title="Maritime Sea Logistics & Reefer Supply Chain"
        subtitle="Leveraging India's flagship transshipment deepwater container port at Vizhinjam, Kerala. Rapid ocean transit times to GCC wholesale markets with unbroken cold chain telemetry."
        onOpenRFQ={() => onOpenRFQ()}
      />

      {/* 2. Flagship Maritime Logistics Component */}
      <MaritimeLogistics />

      {/* 3. Farm-to-Port Workflow */}
      <ExportWorkflow />

      {/* 4. Ocean Shipping Corridors & Transit Matrix */}
      <section className="py-20 bg-[#f8faf5] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <ScrollReveal variant="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12442c]/10 border border-[#d4af37]/40 text-[#12442c] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
                <span className="size-1.5 rounded-full bg-[#d4af37]"></span>
                <span>Scheduled Sea Freight Corridors</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#052215] font-heading mb-4">
                Transit Times to Major Global Seaports
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Because of Vizhinjam&apos;s strategic location on the international east-west shipping lane, our transit
                windows are among the fastest from the Indian subcontinent.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-up" delay={120}>
            {/* Mobile Horizontal Scroll Indicator */}
            <div className="md:hidden flex items-center justify-between text-[11px] font-mono text-emerald-900 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 mb-3 shadow-xs">
              <span className="font-semibold">↔ Swipe horizontally to view full transit times</span>
              <span className="text-[#aa851c] font-bold">Scroll →</span>
            </div>

            <div className="luxury-card-light overflow-x-auto rounded-2xl sm:rounded-3xl border border-emerald-900/15 shadow-md">
              <table className="w-full text-left text-xs text-slate-700 bg-white min-w-[750px]">
                <thead className="bg-[#12442c] text-[#f5d77f] font-mono uppercase text-[11px] tracking-wider border-b border-[#d4af37]/30">
                  <tr>
                    <th className="py-4 px-5 font-bold">Departure Port</th>
                    <th className="py-4 px-5 font-bold">Destination Port</th>
                    <th className="py-4 px-5 font-bold">Sea Transit Time</th>
                    <th className="py-4 px-5 font-bold">Sailings Frequency</th>
                    <th className="py-4 px-5 font-bold">Vessel / Mode</th>
                    <th className="py-4 px-5 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-900/10 font-sans">
                  {routes.map((rt) => (
                    <tr key={rt.destination} className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5 font-bold text-[#052215] flex items-center gap-2">
                        <MapPin className="size-3.5 text-emerald-700 shrink-0" />
                        <span>{rt.origin}</span>
                      </td>
                      <td className="py-4 px-5 text-slate-900 font-medium">{rt.destination}</td>
                      <td className="py-4 px-5 font-mono text-[#185839] font-bold">{rt.transit}</td>
                      <td className="py-4 px-5 text-slate-600">{rt.frequency}</td>
                      <td className="py-4 px-5 text-slate-500 font-mono text-[11px]">{rt.carrierType}</td>
                      <td className="py-4 px-5 text-right">
                        <button
                          onClick={() => onOpenRFQ(`Reefer Freight to ${rt.destination}`)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#185839] text-[#f5d77f] hover:bg-[#d4af37] hover:text-[#041a10] border border-[#d4af37]/30 text-[11px] font-bold font-mono transition-colors cursor-pointer"
                        >
                          <span>Book Slot</span>
                          <ArrowRight className="size-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Cold-Chain Technology Standards */}
      <section className="py-20 bg-[#f8faf5] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal variant="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12442c]/10 border border-[#d4af37]/40 text-[#12442c] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
                <span className="size-1.5 rounded-full bg-[#d4af37]"></span>
                <span>Cold-Chain Assurance Protocols</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#052215] font-heading mb-4">
                Active Reefer Monitoring &amp; Cargo Care
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Perishable cargo requires constant vigilance. We ensure container units are powered immediately upon
                packhouse stuffing and transferred swiftly to vessel reefer plugs.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((item, idx) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.title} variant="fade-up" delay={idx * 90}>
                  <div className="luxury-card-light p-6 rounded-2xl h-full flex flex-col justify-between">
                    <div>
                      <div className="size-12 rounded-xl bg-gradient-to-br from-[#1a5c3c] to-[#24764c] text-[#f5d77f] border border-[#d4af37]/40 flex items-center justify-center mb-4">
                        <Icon className="size-6 text-[#f5d77f]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <ScrollReveal variant="fade-up" delay={180}>
              <div className="bg-[#12442c] text-white p-8 sm:p-10 rounded-3xl border border-[#d4af37]/40 shadow-2xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h4 className="text-xl sm:text-2xl font-bold font-heading mb-1 text-white">
                    Need Current Freight Rates for Jebel Ali or Dammam?
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-100/90">
                    Our logistics desk provides transparent ocean freight quotes including THC, reefer plug-in fees, and phytosanitary clearance.
                  </p>
                </div>
                <button
                  onClick={() => onOpenRFQ('Freight Rate Enquiry')}
                  className="extice-btn-primary btn-shimmer shrink-0 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#e5a83b] via-[#eaae42] to-[#d4af37] text-[#041a10] font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:brightness-105 transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Request Freight Quote</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LogisticsPage
