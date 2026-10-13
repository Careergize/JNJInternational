import React from 'react'
import {
  PackageCheck,
  ThermometerSnowflake,
  Layers,
  ArrowRight,
  BadgeCheck,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ProduceSection from '../components/ProduceSection'
import ScrollReveal from '../components/ScrollReveal'

interface ProductsPageProps {
  onOpenRFQ: (item?: string) => void
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenRFQ }) => {
  const specs = [
    {
      commodity: 'Fresh Tomatoes',
      variety: 'Roma, Hybrid Grade-A+, Beefsteak',
      caliber: '50-65mm (Medium to Large)',
      packaging: '6kg, 7kg & 15kg Heavy-Duty Corrugated Cartons / Plastic Crates',
      reeferTemp: '+8°C to +12°C (Vented)',
      shelfLife: '18 - 25 Days',
      capacity40ft: '24 - 26 Metric Tons',
    },
    {
      commodity: 'Nashik Red Onions',
      variety: 'Garwa / Rabi Crop (High Shelf Life)',
      caliber: '45-55mm (Medium) & 55-65mm (Big)',
      packaging: '10kg, 25kg & 50kg Red Leno Mesh Bags',
      reeferTemp: '+2°C to +5°C or Dry Ventilated Dry Container',
      shelfLife: '45 - 60 Days',
      capacity40ft: '28 - 29 Metric Tons',
    },
    {
      commodity: 'Golden Potatoes',
      variety: 'Kufri Jyoti, Chipsona, Lady Rosetta',
      caliber: '45-55mm (Table) & 55mm+ (Processing)',
      packaging: '10kg, 25kg & 50kg Heavy-Duty Jute / Mesh Bags',
      reeferTemp: '+7°C to +10°C (Non-Chilling)',
      shelfLife: '60 - 90 Days',
      capacity40ft: '28 - 30 Metric Tons',
    },
    {
      commodity: 'G4 Hot Green Chillies',
      variety: 'G4 Hybrid, Light Green & Dark Green',
      caliber: '7 - 10 cm (Intact Green Pedicels)',
      packaging: '3.5kg, 4kg & 5kg Air-Ventilated Cartons',
      reeferTemp: '+7°C to +8°C (90-95% RH)',
      shelfLife: '14 - 21 Days',
      capacity40ft: '18 - 20 Metric Tons (Air Cargo / Reefer)',
    },
    {
      commodity: 'Fresh Ginger',
      variety: 'Kochi Fresh & Assam Rhizomes',
      caliber: '150g+ / 200g+ Plump Claws',
      packaging: '10kg, 13.6kg & 20kg Corrugated Boxes / PVC Crates',
      reeferTemp: '+12°C to +14°C',
      shelfLife: '30 - 45 Days',
      capacity40ft: '24 - 26 Metric Tons',
    },
  ]

  const packingFeatures = [
    {
      icon: Layers,
      title: 'Corrugated Telescopic Cartons',
      desc: '5-ply and 7-ply high-bursting strength cartons with water-resistant wax coatings designed specifically to resist collapsing under heavy ocean humidity.',
    },
    {
      icon: PackageCheck,
      title: 'Breathable Leno Mesh Bags',
      desc: 'High-density polyethylene (HDPE) knitted mesh allowing full air circulations for onions and potatoes, preventing fungal condensation.',
    },
    {
      icon: ThermometerSnowflake,
      title: 'Pre-Cooling & Cold Chain',
      desc: 'Field heat removed within 4 hours of harvest via forced-air pre-cooling before container stuffing to arrest enzymatic ripening.',
    },
    {
      icon: BadgeCheck,
      title: 'Private Label & Buyer Branding',
      desc: 'Custom carton printing with buyer brand logos, Arabic/English multilingual nutrition labeling, and GS1 QR/barcodes.',
    },
  ]

  return (
    <div className="bg-[#fafcf9]">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumbCurrent="Products & Services"
        badge="EXPORT COMMODITY DOSSIER"
        title="Premium Agricultural Export Catalog"
        subtitle="Fresh farm-gate produce graded to global phytosanitary and wholesale supermarket standards, packed for unbroken maritime cold-chain container delivery."
        onOpenRFQ={() => onOpenRFQ()}
      />

      {/* 2. Interactive Produce Catalog with Tabs */}
      <div className="pt-8">
        <ProduceSection onOpenRFQ={onOpenRFQ} />
      </div>

      {/* 3. Export Specification Matrix Table */}
      <section className="py-20 bg-[#f8faf5] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <ScrollReveal variant="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12442c]/10 border border-[#d4af37]/40 text-[#12442c] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
                <span className="size-1.5 rounded-full bg-[#d4af37]"></span>
                <span>Technical Commodity Specifications</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#052215] font-heading mb-4">
                Export Grade Matrix &amp; Reefer Temperatures
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Standard technical parameters adhered to by JNJ International packhouses for Full Container Load (FCL)
                sea shipments to Middle Eastern, European, and Asian ports.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-up" delay={120}>
            {/* Mobile Horizontal Scroll Indicator */}
            <div className="md:hidden flex items-center justify-between text-[11px] font-mono text-emerald-900 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 mb-3 shadow-xs">
              <span className="font-semibold">↔ Swipe horizontally to view full specs</span>
              <span className="text-[#aa851c] font-bold">Scroll →</span>
            </div>

            <div className="luxury-card-light overflow-x-auto rounded-2xl sm:rounded-3xl border border-emerald-900/15 shadow-md">
              <table className="w-full text-left text-xs text-slate-700 bg-white min-w-[780px]">
                <thead className="bg-[#12442c] text-[#f5d77f] font-mono uppercase text-[11px] tracking-wider border-b border-[#d4af37]/30">
                  <tr>
                    <th className="py-4 px-5 font-bold">Commodity</th>
                    <th className="py-4 px-5 font-bold">Varieties</th>
                    <th className="py-4 px-5 font-bold">Size / Caliber</th>
                    <th className="py-4 px-5 font-bold">Standard Packaging</th>
                    <th className="py-4 px-5 font-bold">Reefer Set Temp</th>
                    <th className="py-4 px-5 font-bold">Shelf Life</th>
                    <th className="py-4 px-5 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-900/10 font-sans">
                  {specs.map((row) => (
                    <tr key={row.commodity} className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-5 font-bold text-[#052215]">{row.commodity}</td>
                      <td className="py-4 px-5 text-slate-600">{row.variety}</td>
                      <td className="py-4 px-5 font-mono text-[#185839] font-semibold">{row.caliber}</td>
                      <td className="py-4 px-5 text-slate-600">{row.packaging}</td>
                      <td className="py-4 px-5 font-mono text-amber-800 font-bold">{row.reeferTemp}</td>
                      <td className="py-4 px-5 font-mono">{row.shelfLife}</td>
                      <td className="py-4 px-5 text-right">
                        <button
                          onClick={() => onOpenRFQ(row.commodity)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#185839] text-[#f5d77f] hover:bg-[#d4af37] hover:text-[#041a10] border border-[#d4af37]/30 text-[11px] font-bold font-mono transition-colors cursor-pointer"
                        >
                          <span>Get Rates</span>
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

      {/* 4. Packaging Technology & Container Stuffing */}
      <section className="py-20 bg-[#f8faf5] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal variant="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12442c]/10 border border-[#d4af37]/40 text-[#12442c] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
                <span className="size-1.5 rounded-full bg-[#d4af37]"></span>
                <span>Post-Harvest Packaging Integrity</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#052215] font-heading mb-4">
                Engineered for Long-Haul Maritime Ocean Transit
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Vegetables are living organisms that respire during transit. Our export packaging combines structural
                compression strength with ventilation dynamics to eliminate mold and rot.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packingFeatures.map((feat, index) => {
              const Icon = feat.icon
              return (
                <ScrollReveal key={feat.title} variant="fade-up" delay={index * 90}>
                  <div className="luxury-card-light p-6 rounded-2xl h-full flex flex-col justify-between">
                    <div>
                      <div className="size-12 rounded-xl bg-gradient-to-br from-[#1a5c3c] to-[#24764c] text-[#f5d77f] border border-[#d4af37]/40 flex items-center justify-center mb-4">
                        <Icon className="size-6 text-[#f5d77f]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{feat.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Bottom RFQ CTA Banner */}
          <div className="mt-16 bg-[#12442c] rounded-3xl p-8 sm:p-12 text-white border border-[#d4af37]/40 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f5d77f] block mb-1">
                FCL CONSIGNMENTS &bull; MIXED REEFER LOADS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-2">
                Need a Custom Packing Format or Private Label?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                We accommodate buyer specifications for crate weight, mesh bag colors, pallet wrapping, and multilingual
                custom labeling for supermarket chains across the GCC.
              </p>
            </div>

            <button
              onClick={() => onOpenRFQ()}
              className="extice-btn-primary btn-shimmer shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-[#e5a83b] via-[#eaae42] to-[#d4af37] text-[#041a10] font-bold text-xs uppercase tracking-wider shadow-2xl shadow-amber-500/25 hover:brightness-105 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Submit Custom Request</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
