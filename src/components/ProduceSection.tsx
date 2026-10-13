import React, { useState } from 'react'
import {
  Package,
  Thermometer,
  Calendar,
  Check,
  ArrowRight,
  MessageCircle,
  Scale,
  BadgeCheck,
  MapPin,
  Ship,
  ShieldCheck,
  Ruler,
  Clock,
  ChevronRight,
  Eye,
  X,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface ProduceItem {
  id: string
  name: string
  scientificName: string
  category: 'tomatoes' | 'onions' | 'potatoes' | 'spices'
  badge: string
  image: string
  description: string
  origins: string
  specs: {
    size: string
    color: string
    shelfLife: string
    reeferTemp: string
    moq: string
  }
  packingOptions: string[]
  keyFeatures: string[]
}

const PRODUCE_DATA: ProduceItem[] = [
  {
    id: 'tomatoes',
    name: 'Export-Grade Fresh Tomatoes',
    scientificName: 'Solanum lycopersicum (Roma & Hybrid Varieties)',
    category: 'tomatoes',
    badge: 'GRADE A+ EXPORT STANDARD',
    image: '/images/tomatoes.jpg',
    description:
      'Hand-harvested at mature-green to turning stage for maximum shelf longevity during maritime transit. Carefully graded for uniform caliber, thick pericarp wall, and zero skin cracks.',
    origins: 'Kolar, Theni & Southern Farm Belts',
    specs: {
      size: '55mm – 65mm Uniform Caliber',
      color: '80% – 90% Mature Red / Breaker Stage',
      shelfLife: '14 – 21 Days under Cold Chain',
      reeferTemp: '10°C to 12°C (Relative Humidity 85-90%)',
      moq: '1 x 20ft Reefer FCL (approx. 14 MT) / Air Cargo',
    },
    packingOptions: [
      '15kg Heavy-Duty Ventilated Plastic Field Crates',
      '6kg & 10kg Telescopic 5-Ply Corrugated Export Cartons',
      'Custom palletized wrapping with corner board edge protectors',
    ],
    keyFeatures: [
      'Firm pericarp structure engineered to resist ocean transit vibration',
      'Sanitized, washed & sorted using optical grading lines',
      'Zero pesticide residue compliant with international destination standards',
    ],
  },
  {
    id: 'onions',
    name: 'Superior Indian Red & Pink Onions',
    scientificName: 'Allium cepa (Nashik & Bellary Red)',
    category: 'onions',
    badge: 'SUPERIOR GRADE • HIGH DRY-MATTER',
    image: '/images/onions.jpg',
    description:
      'World-renowned Indian red onions famous for rich pungent aroma, robust dry-matter content, and thick papery outer skin. Cured under sun-drying canopies to ensure zero moisture condensation and long sea voyage resilience.',
    origins: 'Nashik, Maharashtra & Southern Clusters',
    specs: {
      size: '45mm – 60mm & 55mm+ Jumbo Selection',
      color: 'Deep Purplish Red / Bright Pink',
      shelfLife: '30 – 60 Days under Dry Ventilated Stacking',
      reeferTemp: 'Ambient Dry / 0°C to 2°C in Reefer (RH 65-70%)',
      moq: '1 x 40ft High Cube Reefer (29 MT)',
    },
    packingOptions: [
      '25kg & 50kg Red / Purple Leno Mesh Breathable Bags',
      '10kg Consumer Ready Mesh Bags with carry-handles',
      'Heavy Jute Sacks for domestic wholesale and regional mandi supply',
    ],
    keyFeatures: [
      'Thoroughly cured to prevent fungal rot and premature sprouting',
      'Pungent, high sulfur compound profile preferred across Gulf & Asian markets',
      'Precision weight calibration with automatic digital bagging',
    ],
  },
  {
    id: 'potatoes',
    name: 'Farm-Fresh Golden Table & Processing Potatoes',
    scientificName: 'Solanum tuberosum (Kufri Jyoti / Chipsona)',
    category: 'potatoes',
    badge: 'CLEAN WASHED • HIGH SOLID',
    image: '/images/potatoes.jpg',
    description:
      'Directly aggregated from fertile potato growing regions. Offered in both washed table-ready varieties and high-solid processing potatoes suitable for commercial food processors and bulk retail chains.',
    origins: 'Hassan, Indore & Western Harvest Hubs',
    specs: {
      size: '50mm+ Large & 40-50mm Medium Graded',
      color: 'Smooth Golden Yellow Skin, Creamy Flesh',
      shelfLife: '45 – 90 Days under Controlled Storage',
      reeferTemp: '7°C to 10°C (RH 90-95%)',
      moq: '1 x 40ft Reefer Container (28 MT)',
    },
    packingOptions: [
      '25kg & 50kg Traditional Breathable Jute / Gunny Bags',
      '10kg & 20kg Ventilated Mesh Sacks with Export Marking',
      'Heavy Corrugated Master Cartons upon buyer requisition',
    ],
    keyFeatures: [
      'Zero green skinning (solanine-free), unbruised, shallow eyes',
      'Washed and dried using industrial air-knives before packing',
      'Certified free from soil contamination and bacterial ring rots',
    ],
  },
  {
    id: 'spices',
    name: 'Fresh Hot Green Chillies, Ginger & Garlic',
    scientificName: 'Capsicum annuum / Zingiber officinale',
    category: 'spices',
    badge: 'AIR & SEA REEFER CONSIGNMENTS',
    image: '/images/spices-chillies.jpg',
    description:
      'Complementing our core vegetable shipments with high-demand Indian kitchen essentials: spicy G4 green chillies with intact stalks, high-curcumin Cochin ginger roots, and pearl white garlic bulbs.',
    origins: 'Wayanad, Palakkad & Southern Foothills',
    specs: {
      size: 'Chillies: 7-10cm | Ginger: 150g+ Hand Size Rhizomes',
      color: 'Lustrous Dark Green / Earthy Gold / Pearl White',
      shelfLife: '14 – 25 Days in Cold Transit',
      reeferTemp: '2°C to 4°C for Chillies, 12°C for Ginger',
      moq: '2 MT (Air Cargo) / Mixed Reefer Container',
    },
    packingOptions: [
      '3.5kg & 4kg Telescopic Ventilated Export Cartons',
      '10kg Master Cartons with Micro-Perforated Poly Liners',
      'Pre-pack punnets for international supermarket shelf display',
    ],
    keyFeatures: [
      'Strict stalk retention on chillies to maintain freshness & prevent decay',
      'High essential oil and pungency index for culinary aroma',
      'Pre-cooled immediately upon harvest to arrest respiration rate',
    ],
  },
]

interface ProduceSectionProps {
  onOpenRFQ: (initialItem?: string) => void
}

export const ProduceSection: React.FC<ProduceSectionProps> = ({ onOpenRFQ }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'tomatoes' | 'onions' | 'potatoes' | 'spices'>('all')
  const [cardViews, setCardViews] = useState<Record<string, 'specs' | 'packing'>>({
    tomatoes: 'specs',
    onions: 'specs',
    potatoes: 'specs',
    spices: 'specs',
  })
  const [detailModalItem, setDetailModalItem] = useState<ProduceItem | null>(null)

  const toggleCardView = (id: string, view: 'specs' | 'packing') => {
    setCardViews((prev) => ({ ...prev, [id]: view }))
  }

  const filteredItems =
    activeTab === 'all'
      ? PRODUCE_DATA
      : PRODUCE_DATA.filter((item) => item.category === activeTab)

  return (
    <section id="products" className="py-24 bg-[#f8faf5] relative overflow-hidden border-t border-[#d4af37]/20">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/25 to-transparent pointer-events-none rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal variant="fade-down" delay={50}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12442c]/10 border border-[#d4af37]/40 text-[#12442c] text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-sm">
              <BadgeCheck className="size-3.5 text-[#d4af37]" />
              <span>APEDA Certified &bull; Farm-Direct Aggregation</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#052215] tracking-tight font-heading mb-3">
              Export-Grade Fresh Produce
            </h2>
            <div className="flex justify-center mb-4">
              <span className="extice-accent-line"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={250}>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Direct from India&apos;s most fertile agricultural belts. Graded to uniform caliber, cold-chain stabilized, and packaged to arrive at international destination ports in prime condition.
            </p>
          </ScrollReveal>

          {/* Value propositions pill bar */}
          <ScrollReveal variant="fade-up" delay={350}>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs text-slate-700">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-emerald-900/10 shadow-xs font-medium hover:border-[#d4af37]/50 transition-colors">
                <ShieldCheck className="size-3.5 text-emerald-700" />
                100% Traceable Harvest
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-emerald-900/10 shadow-xs font-medium hover:border-[#d4af37]/50 transition-colors">
                <Thermometer className="size-3.5 text-emerald-700" />
                Pre-Cooled Reefer Transit
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-emerald-900/10 shadow-xs font-medium hover:border-[#d4af37]/50 transition-colors">
                <Ship className="size-3.5 text-emerald-700" />
                Fast Dispatch via Vizhinjam Port
              </span>
            </div>
          </ScrollReveal>

          {/* Interactive Category Filter Tabs */}
          <ScrollReveal variant="fade-up" delay={450}>
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 p-1 sm:p-1.5 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-emerald-900/10 shadow-sm max-w-full sm:max-w-fit mx-auto">
              {[
                { key: 'all', label: 'All Produce', count: PRODUCE_DATA.length },
                { key: 'tomatoes', label: 'Fresh Tomatoes', count: 1 },
                { key: 'onions', label: 'Red Onions', count: 1 },
                { key: 'potatoes', label: 'Golden Potatoes', count: 1 },
                { key: 'spices', label: 'Chillies & Ginger', count: 1 },
              ].map((tab) => {
                const isActive = activeTab === tab.key
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#1a5c3c] to-[#24764c] text-[#f5d77f] shadow-md shadow-emerald-950/20 ring-1 ring-[#d4af37]/50 scale-[1.02]'
                        : 'text-slate-600 hover:text-[#185839] hover:bg-emerald-50/50'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive ? 'bg-[#d4af37] text-[#072417] font-bold' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Product Cards Grid with Staggered ScrollReveal */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item, index) => {
            const currentView = cardViews[item.id] || 'specs'

            return (
              <ScrollReveal
                key={item.id}
                variant="fade-up"
                delay={index * 120}
                duration={750}
                className="h-full"
              >
                <div className="luxury-card-light rounded-3xl overflow-hidden flex flex-col group relative h-full">
                  {/* Product Image Showcase with Extice Zoom */}
                  <div className="relative h-64 sm:h-80 w-full extice-zoom-wrap bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover extice-zoom-img brightness-[0.98]"
                      loading="lazy"
                    />
                    {/* Cinematic gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12442c] via-black/35 to-black/15 pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>

                    {/* Top Badges Row */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-10 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                      <span className="text-[9px] sm:text-xs font-mono font-bold tracking-wider px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#12442c]/90 text-[#f5d77f] border border-[#d4af37]/40 shadow-md backdrop-blur-md inline-flex items-center gap-1 sm:gap-1.5 pointer-events-auto max-w-[65%] sm:max-w-none truncate">
                        <BadgeCheck className="size-3 text-[#f5d77f] shrink-0" />
                        <span className="truncate">{item.badge}</span>
                      </span>

                      <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 rounded-full text-[10px] sm:text-xs font-semibold text-slate-800 shadow-md flex items-center gap-1 sm:gap-1.5 border border-white/60 pointer-events-auto">
                        <MapPin className="size-3 sm:size-3.5 text-emerald-700 shrink-0" />
                        <span>{item.origins}</span>
                      </div>
                    </div>

                    {/* Bottom Image Overlay: Title & Botanical Name */}
                    <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 z-10 pr-10">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-md font-heading group-hover:text-[#f5d77f] transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 sm:mt-1.5">
                        <span className="inline-block text-[10px] sm:text-xs font-mono text-emerald-200 bg-emerald-950/60 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 rounded-md border border-emerald-500/30 truncate max-w-full">
                          {item.scientificName}
                        </span>
                      </div>
                    </div>

                    {/* Quick View Button on Image */}
                    <button
                      onClick={() => setDetailModalItem(item)}
                      className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 z-20 size-8 sm:size-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/40 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer shadow-lg"
                      title="View Full Technical Details"
                    >
                      <Eye className="size-3.5 sm:size-4" />
                    </button>
                  </div>

                  {/* Product Body Details */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      {/* Description Paragraph */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                        {item.description}
                      </p>

                      {/* Interactive Tab Toggle: Specs vs Packaging */}
                      <div className="flex items-center p-1 bg-slate-100/80 rounded-xl mb-5 border border-slate-200/60">
                        <button
                          onClick={() => toggleCardView(item.id, 'specs')}
                          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                            currentView === 'specs'
                              ? 'bg-white text-[#0b3823] shadow-xs font-bold border border-slate-200/50'
                              : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          <Scale className="size-3.5 text-[#d4af37]" />
                          <span>Export Specs</span>
                        </button>

                        <button
                          onClick={() => toggleCardView(item.id, 'packing')}
                          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                            currentView === 'packing'
                              ? 'bg-white text-[#0b3823] shadow-xs font-bold border border-slate-200/50'
                              : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          <Package className="size-3.5 text-[#0d472d]" />
                          <span>Packaging &amp; Quality</span>
                        </button>
                      </div>

                      {/* View 1: 4-Box Technical Specifications Grid */}
                      {currentView === 'specs' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 animate-in fade-in duration-300">
                          {/* 1. Caliber */}
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-[#f5f8f3] border border-slate-200/70 hover:border-emerald-300 transition-colors">
                            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                              <Ruler className="size-3 text-[#d4af37]" />
                              <span>Export Caliber / Size</span>
                            </div>
                            <div className="text-xs font-bold text-slate-900 leading-snug">
                              {item.specs.size}
                            </div>
                          </div>

                          {/* 2. Color & Maturity */}
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-[#f5f8f3] border border-slate-200/70 hover:border-emerald-300 transition-colors">
                            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                              <BadgeCheck className="size-3 text-emerald-600" />
                              <span>Color &amp; Maturity</span>
                            </div>
                            <div className="text-xs font-bold text-slate-900 leading-snug">
                              {item.specs.color}
                            </div>
                          </div>

                          {/* 3. Reefer Temperature */}
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-[#f5f8f3] border border-slate-200/70 hover:border-emerald-300 transition-colors">
                            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                              <Thermometer className="size-3 text-cyan-600" />
                              <span>Reefer Climate</span>
                            </div>
                            <div className="text-xs font-bold text-slate-900 leading-snug flex items-center gap-1">
                              <span className="size-1.5 rounded-full bg-cyan-500 shrink-0"></span>
                              {item.specs.reeferTemp}
                            </div>
                          </div>

                          {/* 4. Transit Shelf Life */}
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-[#f5f8f3] border border-slate-200/70 hover:border-emerald-300 transition-colors">
                            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                              <Calendar className="size-3 text-[#aa851c]" />
                              <span>Sea Voyage Life</span>
                            </div>
                            <div className="text-xs font-bold text-slate-900 leading-snug flex items-center gap-1">
                              <Clock className="size-3 text-[#aa851c]" />
                              {item.specs.shelfLife}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* View 2: Packaging & Quality Standards */}
                      {currentView === 'packing' && (
                        <div className="space-y-4 mb-6 animate-in fade-in duration-300">
                          {/* Packaging Options */}
                          <div className="bg-[#f7faf5] p-3.5 rounded-2xl border border-emerald-900/10">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#185839] font-bold mb-2 flex items-center gap-1.5">
                              <Package className="size-3.5 text-[#d4af37]" />
                              Available Export Packaging
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-700">
                              {item.packingOptions.map((pack, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                  <span className="font-medium">{pack}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Key Features */}
                          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/60">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 font-bold mb-2 flex items-center gap-1.5">
                              <ShieldCheck className="size-3.5 text-emerald-700" />
                              Export Quality Assurance
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-600">
                              {item.keyFeatures.map((feat, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="size-1.5 rounded-full bg-[#d4af37] shrink-0 mt-1.5"></span>
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Bottom Bar: MOQ & Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5">
                      {/* Minimum Order Shipping Tag */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f0f6f2] border border-emerald-900/15 text-slate-700 text-xs">
                        <Ship className="size-3.5 text-emerald-700 shrink-0" />
                        <div className="text-[11px] leading-tight">
                          <span className="text-slate-400 font-mono uppercase text-[9px] block">Min Order Quantity</span>
                          <strong className="text-slate-900 font-semibold">{item.specs.moq}</strong>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2.5 w-full sm:w-auto">
                        {/* Direct WhatsApp Chat */}
                        <a
                          href={`https://wa.me/917994561627?text=Hello%20JNJ%20International%2C%20I%20want%20to%20inquire%20about%20export%20rates%20for%20${encodeURIComponent(
                            item.name
                          )}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full border border-emerald-300/80 text-emerald-800 hover:bg-emerald-50 hover:border-emerald-400 transition-all cursor-pointer shadow-xs hover:scale-105"
                          title="Chat on WhatsApp with Export Desk"
                        >
                          <MessageCircle className="size-4 text-emerald-700" />
                        </a>

                        {/* Request Formal Quote Button with Shimmer & Slide */}
                        <button
                          onClick={() => onOpenRFQ(item.name)}
                          className="extice-btn-primary btn-shimmer group/btn flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-[#041a10] bg-gradient-to-r from-[#e5a83b] via-[#eaae42] to-[#d4af37] hover:brightness-105 rounded-full shadow-md cursor-pointer"
                        >
                          <span>Request Quote</span>
                          <ArrowRight className="size-3.5 text-[#041a10] group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom Banner: Custom Export Enquiries */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mt-16 bg-gradient-to-r from-[#1a5c3c] via-[#24764c] to-[#12442c] text-white rounded-3xl p-8 sm:p-10 border border-[#d4af37]/40 shadow-2xl relative overflow-hidden extice-card">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-xl text-center md:text-left">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#f5d77f] font-bold block mb-2">
                  Tailored Export Solutions
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-2">
                  Require Mixed Reefer Consignments or Custom Grading?
                </h3>
                <p className="text-emerald-200/80 text-xs sm:text-sm leading-relaxed">
                  We fulfill customized consolidation orders with multi-commodity reefer partitioning, private buyer label packaging, and destination-specific phytosanitary clearance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <a
                  href="https://wa.me/917994561627?text=Hello%20JNJ%20International%2C%20I%20need%20a%20custom%20mixed%20reefer%20consignment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="extice-btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/20 cursor-pointer"
                >
                  <MessageCircle className="size-4 text-[#f5d77f]" />
                  <span>WhatsApp Export Desk</span>
                </a>

                <button
                  onClick={() => onOpenRFQ()}
                  className="extice-btn-primary btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#d4af37] hover:bg-[#c59b27] text-[#051f14] text-xs font-bold shadow-lg cursor-pointer"
                >
                  <span>Request Custom Quote</span>
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Detailed Technical Modal */}
      {detailModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setDetailModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="size-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#185839] text-[#f5d77f]">
                {detailModalItem.badge}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {detailModalItem.origins}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-1">
              {detailModalItem.name}
            </h3>
            <p className="text-xs font-mono text-emerald-800 italic mb-4">
              {detailModalItem.scientificName}
            </p>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {detailModalItem.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">Grading / Caliber</span>
                <span className="text-xs font-bold text-slate-900">{detailModalItem.specs.size}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">Color &amp; Maturity</span>
                <span className="text-xs font-bold text-slate-900">{detailModalItem.specs.color}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">Reefer Climate</span>
                <span className="text-xs font-bold text-slate-900">{detailModalItem.specs.reeferTemp}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">Transit Shelf Life</span>
                <span className="text-xs font-bold text-slate-900">{detailModalItem.specs.shelfLife}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 font-mono">
                Export Packaging Specifications
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {detailModalItem.packingOptions.map((pack, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="size-3.5 text-emerald-600" />
                    <span>{pack}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <div className="text-xs text-slate-600">
                <strong>MOQ:</strong> {detailModalItem.specs.moq}
              </div>

              <button
                onClick={() => {
                  setDetailModalItem(null)
                  onOpenRFQ(detailModalItem.name)
                }}
                className="extice-btn-primary btn-shimmer px-6 py-2.5 rounded-full bg-[#185839] hover:bg-[#206d47] text-white text-xs font-semibold shadow-md cursor-pointer"
              >
                Request Rate for this Produce
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProduceSection
