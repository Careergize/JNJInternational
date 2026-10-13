import React from 'react'

export const ProduceTicker: React.FC = () => {
  const tickerItems = [
    { name: 'Fresh Red Tomatoes', spec: 'Roma & Hybrid Grade A+ • 55-65mm • 15kg Crates' },
    { name: 'Nashik Red Onions', spec: 'Grade 1 • 45-60mm • 25kg/50kg Leno Mesh Bags' },
    { name: 'Golden Potatoes', spec: 'Kufri Jyoti & Chipsona • 50mm+ • Clean Washed' },
    { name: 'G4 Hot Green Chillies', spec: 'Intact Pedicels • 7-10cm • Pre-Cooled' },
    { name: 'Kochi Fresh Ginger', spec: 'High Curcumin • Plump Rhizomes • Export Cartons' },
    { name: 'Maritime Reefer FCL', spec: '20ft & 40ft Containers • Vizhinjam & Cochin Port Dispatches' },
  ]

  return (
    <div className="bg-[#0e3824] text-emerald-100 border-b border-[#d4af37]/25 py-2.5 overflow-hidden select-none text-xs relative">
      <div className="flex items-center">
        {/* Minimal Static Tag with Radar Beacon */}
        <div className="shrink-0 z-10 bg-[#0e3824] px-2.5 sm:px-4 flex items-center gap-2 sm:gap-2.5 border-r border-[#d4af37]/25 shadow-md">
          <span className="size-1.5 sm:size-2 rounded-full bg-[#d4af37] animate-beacon shrink-0"></span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-mono text-[#f5d77f] font-semibold whitespace-nowrap">
            Live <span className="hidden xs:inline">Export </span>Desk
          </span>
        </div>

        {/* Smooth Relaxed Ribbon with edge gradient mask */}
        <div className="overflow-hidden flex-1 relative [mask-image:linear-gradient(to_right,transparent,black_30px,black_calc(100%-30px),transparent)]">
          <div className="animate-marquee flex items-center gap-10 py-0.5">
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 whitespace-nowrap text-[11px] group cursor-default">
                <span className="font-semibold text-white tracking-wide group-hover:text-[#f5d77f] transition-colors">
                  {item.name}
                </span>
                <span className="text-emerald-300/70 font-mono text-[10px]">[{item.spec}]</span>
                <span className="text-[#d4af37]/60 text-xs ml-3">&bull;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProduceTicker
