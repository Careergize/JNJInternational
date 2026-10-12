import React from 'react'
import {
  Sprout,
  Filter,
  PackageCheck,
  Ship,
  CheckCircle2,
} from 'lucide-react'

export const ExportWorkflow: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Sprout,
      title: 'Direct Farm-Gate Aggregation',
      tagline: 'Zero Middlemen • Traceable Origins',
      description:
        'We procure directly from dedicated farmer collectives across key agricultural belts (Nashik for Onions, Kolar & Theni for Tomatoes, Hassan for Potatoes). Agronomists supervise harvesting at exact physiological maturity to ensure maximum transit resistance.',
      checks: [
        'Checked for optimal maturity & firmness index',
        'Field-level sorting to eliminate damaged produce',
        'Direct farmer payment contracts ensuring fair trade',
      ],
    },
    {
      step: '02',
      icon: Filter,
      title: 'Cleaning, Curing & Pre-Cooling',
      tagline: 'Thermal Arrest & Hygiene Management',
      description:
        'Harvested produce undergoes immediate post-harvest conditioning. Tomatoes and chillies are pre-cooled to remove core field heat; potatoes are sanitized and air-knife dried; onions undergo protective shade curing to seal outer papery skins.',
      checks: [
        'Pre-cooling down to target storage temp within 4 hours',
        'Optical sorting tables for uniform caliber sizing (mm)',
        'Zero chemical waxing; 100% natural hygiene standards',
      ],
    },
    {
      step: '03',
      icon: PackageCheck,
      title: 'Certified Export Packaging',
      tagline: 'Heavy-Duty 5-Ply & Leno Mesh Bags',
      description:
        'Standardized packaging designed for maritime container voyages. We use UV-stabilized Leno mesh bags for onions, breathable jute sacks for potatoes, and heavy-duty 5-ply corrugated telescopic boxes or ventilated field crates for tomatoes.',
      checks: [
        'Automatic digital check-weighing (exact 15kg / 25kg / 50kg)',
        'Ventilation holes calibrated for optimal airflow',
        'Corner-board edge protectors and stretch-film pallet wrapping',
      ],
    },
    {
      step: '04',
      icon: Ship,
      title: 'Reefer Stuffing & Port Customs Clearance',
      tagline: 'Vizhinjam & Cochin Ocean Terminals',
      description:
        'Refrigerated containers (Reefers) are pre-cooled before stuffing. Containers are plugged in throughout transit. Phytosanitary inspectors issue destination-compliant phytosanitary clearance before container seal application.',
      checks: [
        'APEDA & Govt. Phytosanitary clearance certificates',
        'Continuous temperature recording data loggers in every reefer',
        'Fast customs clearance at Vizhinjam, Cochin & Tuticorin ports',
      ],
    },
  ]

  return (
    <section id="process" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading - Clean & Minimal */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#aa851c] font-semibold block mb-2">
            Operational Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#052215] tracking-tight mb-3">
            The Farm-to-Vessel Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our multi-stage protocol guarantees that fresh vegetables packed at our packhouses reach overseas ports in
            peak condition.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => {
            const Icon = st.icon
            return (
              <div
                key={st.step}
                className="bg-[#fafcf9] rounded-2xl p-6 border border-emerald-950/10 hover:border-[#d4af37]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Step number watermark */}
                <div className="absolute top-4 right-4 text-3xl font-mono font-extrabold text-emerald-900/10 group-hover:text-[#d4af37]/20 transition-colors">
                  {st.step}
                </div>

                <div>
                  {/* Step Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#0b3d26] text-[#f5d77f] flex items-center justify-center mb-5 shadow-md shadow-emerald-950/20 group-hover:scale-110 transition-transform">
                    <Icon className="size-6" />
                  </div>

                  <span className="text-[11px] font-mono font-bold text-[#b38b2d] uppercase tracking-wider block mb-1">
                    {st.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-[#052215] mb-3">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{st.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2">
                  {st.checks.map((chk, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                      <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExportWorkflow
