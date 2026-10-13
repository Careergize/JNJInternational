import React from 'react'
import {
  CheckCircle2,
  Award,
  ArrowRight,
  ClipboardList,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import QualityStandards from '../components/QualityStandards'
import ScrollReveal from '../components/ScrollReveal'

interface QualityPageProps {
  onOpenRFQ: (item?: string) => void
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenRFQ }) => {
  const inspectionStages = [
    {
      step: '01',
      title: 'Farm Gate Agronomist Assessment',
      desc: 'Before harvest commences, our field agronomists inspect crops for physiological maturity, Brix sweetness levels, and absence of pest damage or viral blemishes.',
    },
    {
      step: '02',
      title: 'Ozonated Wash & Pre-Treatment',
      desc: 'Harvested produce is washed in cold ozonated water baths to remove soil particulates and sanitize outer skins without harmful synthetic chemical residues.',
    },
    {
      step: '03',
      title: 'Optical Sizing & Mechanical Grading',
      desc: 'Automated conveyor lanes segregate tomatoes, onions, and potatoes into precise millimeter size calipers (e.g., 50-60mm, 60-70mm) to ensure uniformity in cartons.',
    },
    {
      step: '04',
      title: 'MRL & NABL Laboratory Screening',
      desc: 'Batch samples are submitted to NABL-accredited testing laboratories to verify adherence to European and GCC Maximum Residue Limits (MRLs) for agricultural chemicals.',
    },
    {
      step: '05',
      title: 'Phytosanitary & Plant Quarantine Seal',
      desc: 'Government Plant Quarantine officials conduct pre-shipment inspections at our packhouse, issuing official Phytosanitary Certificates before container doors are customs sealed.',
    },
  ]

  const accreditations = [
    {
      agency: 'APEDA',
      name: 'Agricultural & Processed Food Products Export Development Authority',
      role: 'Recognized Indian Agricultural Export House',
      badge: 'APEDA ACCREDITED',
    },
    {
      agency: 'FSSAI',
      name: 'Food Safety and Standards Authority of India',
      role: 'Central Export Food License Compliance',
      badge: 'FOOD SAFETY VERIFIED',
    },
    {
      agency: 'Spices Board',
      name: 'Spices Board of India (Ministry of Commerce & Industry)',
      role: 'Certified Exporter of Fresh Green Chillies & Ginger',
      badge: 'SPICES BOARD REGISTERED',
    },
    {
      agency: 'Plant Quarantine',
      name: 'Directorate of Plant Protection, Quarantine & Storage',
      role: 'Official Phytosanitary Certification for Middle East & EU',
      badge: 'PEST-FREE CERTIFICATION',
    },
  ]

  return (
    <div className="bg-[#fafcf9]">
      {/* 1. Multipage Header */}
      <PageHeader
        breadcrumbCurrent="Quality Standards"
        badge="CERTIFIED COMPLIANCE ARCHITECTURE"
        title="Quality Assurance &amp; Phytosanitary Integrity"
        subtitle="Stringent multi-tier inspection protocols, international pesticide residue compliance, and APEDA-aligned cold-chain export packaging."
        onOpenRFQ={() => onOpenRFQ()}
      />

      {/* 2. Core Quality Standards Component */}
      <QualityStandards />

      {/* 3. The 5-Stage Inspection Protocol */}
      <section className="py-20 bg-[#f8faf5] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16">
            <ScrollReveal variant="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#052216]/10 border border-[#d4af37]/40 text-[#073822] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
                <span className="size-1.5 rounded-full bg-[#d4af37]"></span>
                <span>5-Stage Inspection Protocol</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#052215] font-heading mb-4">
                How JNJ Guarantees Export-Grade Quality
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Quality is not an afterthought at the port gate. We enforce quality control from the very soil where
                seeds are sown to the moment container doors are sealed.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspectionStages.map((st, idx) => (
              <ScrollReveal key={st.step} variant="fade-up" delay={idx * 80}>
                <div className="luxury-card-light p-7 rounded-2xl h-full flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-mono font-extrabold text-[#d4af37] block mb-3">{st.step}</span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{st.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{st.desc}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-800 font-semibold">
                    <CheckCircle2 className="size-3.5 text-emerald-600" />
                    <span>VERIFIED QUALITY GATE</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Third-Party Inspection Card */}
            <ScrollReveal variant="fade-up" delay={400}>
              <div className="luxury-card-dark bg-gradient-to-br from-[#062417] to-[#03170e] text-white p-7 rounded-2xl border border-[#d4af37]/40 shadow-xl h-full flex flex-col justify-between">
                <div>
                  <div className="size-10 rounded-xl bg-[#0b3d26] text-[#f5d77f] border border-[#d4af37]/30 flex items-center justify-center mb-4">
                    <ClipboardList className="size-5 text-[#f5d77f]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Third-Party Inspections Welcome</h3>
                  <p className="text-xs text-emerald-100/80 leading-relaxed font-normal">
                    We invite buyer-nominated international inspection agencies (such as <strong>SGS, Bureau Veritas, or Intertek</strong>)
                    to attend packhouse sorting and oversee container stuffing.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-emerald-900 text-[11px] font-mono text-[#f5d77f]">
                  SGS / BUREAU VERITAS WELCOME
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Accreditation & Statutory Regulatory Alignments */}
      <section className="py-20 bg-[#f8faf5] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal variant="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#052216]/10 border border-[#d4af37]/40 text-[#073822] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
                <span className="size-1.5 rounded-full bg-[#d4af37]"></span>
                <span>Government &amp; Statutory Registrations</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#052215] font-heading mb-4">
                Regulatory Credentials &amp; Standards
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating under rigorous statutory oversight ensures smooth customs processing and rapid clearance at
                destination seaports without port demurrage risks.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {accreditations.map((acc, index) => (
              <ScrollReveal key={acc.agency} variant="fade-up" delay={index * 100}>
                <div className="luxury-card-light p-6 sm:p-7 rounded-2xl flex items-start gap-4">
                  <div className="size-12 rounded-2xl bg-gradient-to-br from-[#062417] to-[#0b3d26] text-[#f5d77f] border border-[#d4af37]/40 flex items-center justify-center shrink-0 shadow-md">
                    <Award className="size-6 text-[#f5d77f]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mb-1">
                      {acc.badge}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{acc.name}</h3>
                    <p className="text-xs text-slate-600 mt-1">{acc.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-[#03150e] rounded-3xl p-8 sm:p-10 text-white border border-[#d4af37]/40 shadow-2xl text-center max-w-3xl mx-auto">
            <ScrollReveal variant="fade-up" delay={150}>
              <h3 className="text-2xl font-bold font-heading mb-2 text-white">
                Request a Sample Batch or Certificate of Analysis
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 mb-6 max-w-xl mx-auto">
                We provide complete lab reports and phytosanitary certificate copies for your customs clearance teams
                prior to vessel sailing.
              </p>
              <button
                onClick={() => onOpenRFQ('Quality Certificate & Spec Sheet Request')}
                className="extice-btn-primary btn-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e5a83b] via-[#eaae42] to-[#d4af37] text-[#041a10] font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:brightness-105 transition-all cursor-pointer"
              >
                <span>Request Quality Spec Sheets</span>
                <ArrowRight className="size-4" />
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QualityPage
