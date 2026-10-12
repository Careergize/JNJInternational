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
    <div className="bg-[#051a11] text-emerald-100 border-b border-emerald-900/50 py-2 overflow-hidden select-none text-xs">
      <div className="flex items-center">
        {/* Minimal Static Tag */}
        <div className="shrink-0 z-10 bg-[#051a11] px-4 flex items-center gap-2 border-r border-emerald-900/60 shadow-sm">
          <span className="size-1.5 rounded-full bg-[#d4af37]"></span>
          <span className="text-[10px] uppercase tracking-widest font-mono text-[#f5d77f] font-semibold whitespace-nowrap">
            Export Desk
          </span>
        </div>

        {/* Smooth Relaxed Ribbon */}
        <div className="overflow-hidden flex-1 relative">
          <div className="animate-marquee flex items-center gap-10 py-0.5">
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 whitespace-nowrap text-[11px]">
                <span className="font-semibold text-white tracking-wide">{item.name}</span>
                <span className="text-emerald-300/70 font-mono text-[10px]">[{item.spec}]</span>
                <span className="text-emerald-500/40 text-xs ml-3">&bull;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProduceTicker
