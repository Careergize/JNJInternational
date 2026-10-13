import React from 'react'
import {
  ShieldCheck,
  BadgeCheck,
  CheckCircle,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import AnimatedCounter from './AnimatedCounter'

export const QualityStandards: React.FC = () => {
  const certifications = [
    {
      title: 'APEDA Registration Compliant',
      subtitle: 'Govt. of India Agricultural Export Authority',
      desc: 'Adhering to national export specifications, traceability protocols, and export packhouse guidelines for fresh horticultural produce.',
    },
    {
      title: 'Phytosanitary Certification',
      subtitle: 'Ministry of Agriculture & Plant Quarantine',
      desc: 'Every consignment inspected and certified free from quarantine pests, soil organisms, and pathogens compliant with the importing nation.',
    },
    {
      title: 'FSSAI Food Safety Standards',
      subtitle: 'Apex Indian Food Regulatory Authority',
      desc: 'Hygienic sorting, food-contact grade packaging materials, and strict sanitation audits at aggregation and packing stations.',
    },
    {
      title: 'Temperature Data Loggers',
      subtitle: 'Unbroken Cold-Chain Reefer Audit',
      desc: 'Independent USB / real-time sensors enclosed in every reefer container to verify uninterrupted thermal stability across high seas.',
    },
  ]

  const metrics = [
    { label: 'Export Caliber Grading Accuracy', value: 99.4, decimals: 1, suffix: '%', sub: 'Optical & manual sizing' },
    { label: 'Moisture Control in Onions', value: 13, prefix: '< ', suffix: '%', sub: 'Pre-shipment cured standard' },
    { label: 'Transit Shelf Life Retention', value: 100, suffix: '%', sub: 'Reefer sealed cold-chain' },
    { label: 'Weight Variance Tolerance', value: 0.0, decimals: 1, suffix: '%', sub: 'Digital certified weighbridge' },
  ]

  return (
    <section id="quality" className="py-24 bg-[#fafcf8] border-t border-emerald-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Certifications & Quality Commitment */}
          <div className="lg:col-span-6">
            <ScrollReveal variant="fade-down" delay={50}>
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#aa851c] font-semibold block mb-2">
                Quality &amp; Standards
              </span>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={150}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#052215] tracking-tight mb-3">
                Certified Quality for Global Markets
              </h2>
              <div className="mb-4">
                <span className="extice-accent-line"></span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={250}>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                International buyers cannot afford transit spoilage, caliber mismatch, or customs quarantine hold-ups.
                At JNJ International, our quality assurance starts in the field and ends only when the seal on your container
                is broken at destination.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <ScrollReveal key={idx} variant="fade-up" delay={250 + idx * 80}>
                  <div className="extice-card bg-white p-5 rounded-2xl border border-emerald-900/10 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BadgeCheck className="size-5 text-[#0d472d] group-hover:text-[#d4af37] group-hover:scale-110 transition-all duration-300" />
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0b3d26] transition-colors">{cert.title}</h3>
                      </div>
                      <div className="text-[11px] font-mono font-medium text-[#b38b2d] mb-1.5">{cert.subtitle}</div>
                      <p className="text-xs text-slate-600 leading-relaxed">{cert.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Technical Quality Matrix */}
          <div className="lg:col-span-6">
            <ScrollReveal variant="fade-left" delay={200} duration={850}>
              <div className="bg-[#062417] text-white rounded-3xl p-6 sm:p-8 border border-[#d4af37]/40 shadow-2xl relative overflow-hidden extice-card">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>

                <div className="flex items-center justify-between border-b border-emerald-800/80 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#f5d77f]">
                      JNJ LAB &amp; DISPATCH MATRIX
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">Shipment Benchmark Parameters</h3>
                  </div>
                  <ShieldCheck className="size-7 text-[#d4af37] animate-beacon" />
                </div>

                {/* 4 Stats Cards with AnimatedCounter */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-[#031c11]/80 p-4.5 rounded-2xl border border-emerald-800/50 flex flex-col justify-between hover:border-[#d4af37]/40 transition-colors"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#f5d77f] font-mono">
                        <AnimatedCounter
                          value={m.value}
                          prefix={m.prefix}
                          suffix={m.suffix}
                          decimals={m.decimals}
                        />
                      </div>
                      <div className="text-xs font-semibold text-white mt-1.5">{m.label}</div>
                      <div className="text-[10px] text-emerald-300/70 mt-0.5">{m.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Quality Guarantee Box */}
                <div className="bg-white/5 border border-emerald-700/50 rounded-2xl p-4.5 space-y-2.5 text-xs text-emerald-100 backdrop-blur-sm">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="size-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>
                      <strong>Pesticide Residue Limits (MRL):</strong> Tested to meet EU &amp; GCC regulatory maximum residue limits.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="size-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>
                      <strong>Digital Weight Verification:</strong> Certified tare and gross weighbridge slip provided with shipping documents.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="size-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>
                      <strong>Inspection Access:</strong> Independent third-party inspection (SGS / Bureau Veritas) accommodated upon buyer request.
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualityStandards
