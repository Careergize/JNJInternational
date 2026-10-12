import React from 'react'
import {
  ShieldCheck,
  BadgeCheck,
  CheckCircle,
} from 'lucide-react'

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
    { label: 'Export Caliber Grading Accuracy', value: '99.4%', sub: 'Optical & manual sizing' },
    { label: 'Moisture Control in Onions', value: '< 13%', sub: 'Pre-shipment cured standard' },
    { label: 'Transit Shelf Life Retention', value: '100%', sub: 'Reefer sealed cold-chain' },
    { label: 'Weight Variance Tolerance', value: '0.0%', sub: 'Digital certified weighbridge' },
  ]

  return (
    <section id="quality" className="py-20 bg-[#fafcf8] border-t border-emerald-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Certifications & Quality Commitment */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#aa851c] font-semibold block mb-2">
              Quality &amp; Standards
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#052215] tracking-tight mb-4">
              Certified Quality for Global Markets
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              International buyers cannot afford transit spoilage, caliber mismatch, or customs quarantine hold-ups.
              At JNJ International, our quality assurance starts in the field and ends only when the seal on your container
              is broken at destination.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4.5 rounded-xl border border-emerald-900/10 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BadgeCheck className="size-5 text-[#0d472d]" />
                    <h3 className="text-sm font-bold text-slate-900">{cert.title}</h3>
                  </div>
                  <div className="text-[11px] font-mono font-medium text-[#b38b2d] mb-1.5">{cert.subtitle}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Technical Quality Matrix */}
          <div className="lg:col-span-6">
            <div className="bg-[#062417] text-white rounded-2xl p-6 sm:p-8 border border-[#d4af37]/35 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between border-b border-emerald-800/80 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#f5d77f]">
                    JNJ LAB &amp; DISPATCH MATRIX
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">Shipment Benchmark Parameters</h3>
                </div>
                <ShieldCheck className="size-7 text-[#d4af37]" />
              </div>

              {/* 4 Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-[#031c11]/80 p-4 rounded-xl border border-emerald-800/50 flex flex-col justify-between"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#f5d77f] font-mono">{m.value}</div>
                    <div className="text-xs font-semibold text-white mt-1">{m.label}</div>
                    <div className="text-[10px] text-emerald-300/70 mt-0.5">{m.sub}</div>
                  </div>
                ))}
              </div>

              {/* Quality Guarantee Box */}
              <div className="bg-white/5 border border-emerald-700/50 rounded-xl p-4 space-y-2.5 text-xs text-emerald-100">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualityStandards
