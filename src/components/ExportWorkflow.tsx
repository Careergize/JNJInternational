import React from 'react'
import {
  Sprout,
  Filter,
  PackageCheck,
  Ship,
  CheckCircle2,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

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
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Background ambient decorative orb */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal variant="fade-down" delay={50}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#aa851c] font-semibold block mb-2">
              Operational Protocol
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#052215] tracking-tight mb-3">
              The Farm-to-Vessel Process
            </h2>
            <div className="flex justify-center mb-4">
              <span className="extice-accent-line"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={250}>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our multi-stage protocol guarantees that fresh vegetables packed at our packhouses reach overseas ports in
              peak condition.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Process Cards with Extice Stepper Dynamics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Subtle animated connecting SVG line on large desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 pointer-events-none z-0">
            <svg className="w-full h-2 overflow-visible" fill="none">
              <path
                d="M 50 1 H 950"
                stroke="#d4af37"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-dash-flow opacity-30"
              />
            </svg>
          </div>

          {steps.map((st, index) => {
            const Icon = st.icon
            return (
              <ScrollReveal
                key={st.step}
                variant="fade-up"
                delay={index * 130}
                duration={750}
                className="h-full"
              >
                <div className="extice-card bg-[#fafcf9] rounded-2xl p-6 sm:p-7 border border-emerald-950/10 shadow-sm hover:shadow-2xl flex flex-col justify-between group relative h-full z-10">
                  {/* Step number watermark that glows on hover */}
                  <div className="absolute top-4 right-4 text-4xl font-mono font-extrabold text-emerald-900/10 group-hover:text-[#d4af37]/30 transition-all duration-500 select-none">
                    {st.step}
                  </div>

                  <div>
                    {/* Step Icon with smooth bounce */}
                    <div className="w-13 h-13 rounded-2xl bg-[#0b3d26] text-[#f5d77f] flex items-center justify-center mb-5 shadow-lg shadow-emerald-950/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="size-6.5" />
                    </div>

                    <span className="text-[11px] font-mono font-bold text-[#b38b2d] uppercase tracking-wider block mb-1">
                      {st.tagline}
                    </span>
                    <h3 className="text-lg font-bold text-[#052215] mb-3 group-hover:text-[#0b3d26] transition-colors">
                      {st.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                      {st.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 space-y-2">
                    {st.checks.map((chk, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span>{chk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExportWorkflow
