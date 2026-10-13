import React, { useState, useEffect } from 'react'
import {
  X,
  FileSpreadsheet,
  CheckCircle2,
  MessageCircle,
  Mail,
  ShieldCheck,
} from 'lucide-react'

interface RFQModalProps {
  isOpen: boolean
  onClose: () => void
  initialProduct?: string
}

export const RFQModal: React.FC<RFQModalProps> = ({ isOpen, onClose, initialProduct = '' }) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [volume, setVolume] = useState('1 x 40ft High Cube Reefer (28-29 MT)')
  const [destinationPort, setDestinationPort] = useState('Jebel Ali Port (Dubai, UAE)')
  const [packingType, setPackingType] = useState('Standard Export Mesh / Corrugated Box')
  const [incoterm, setIncoterm] = useState('CIF (Cost, Insurance & Freight)')
  const [buyerName, setBuyerName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const productOptions = [
    'Fresh Tomatoes (Roma / Hybrid Grade A)',
    'Superior Indian Red & Pink Onions',
    'Farm-Fresh Golden Table & Processing Potatoes',
    'Fresh Hot Green Chillies (G4)',
    'Fresh Cleaned Kochi Ginger',
    'Pearl White Whole Garlic Bulbs',
  ]

  useEffect(() => {
    if (initialProduct) {
      const match = productOptions.find((p) => p.toLowerCase().includes(initialProduct.toLowerCase()))
      if (match && !selectedProducts.includes(match)) {
        setSelectedProducts([match])
      }
    } else if (selectedProducts.length === 0) {
      setSelectedProducts([productOptions[0], productOptions[1]])
    }
  }, [initialProduct, isOpen])

  if (!isOpen) return null

  const toggleProduct = (prod: string) => {
    if (selectedProducts.includes(prod)) {
      if (selectedProducts.length > 1) {
        setSelectedProducts(selectedProducts.filter((p) => p !== prod))
      }
    } else {
      setSelectedProducts([...selectedProducts, prod])
    }
  }

  const generateWhatsAppMessage = () => {
    const text = `*EXPORT RFQ ENQUIRY — JNJ INTERNATIONAL PRIVATE LIMITED*
*Buyer:* ${buyerName || 'Valued Buyer'} (${companyName || 'Import House'})
*Phone/WhatsApp:* ${phone || 'Not specified'}
*Email:* ${email || 'Not specified'}

*Produce Required:*
${selectedProducts.map((p) => `• ${p}`).join('\n')}

*Volume / Load:* ${volume}
*Destination Port / Mandi:* ${destinationPort}
*Packaging Preference:* ${packingType}
*Preferred Incoterm:* ${incoterm}
*Notes:* ${notes || 'Looking for current CIF/FOB rates and shipment schedule.'}

_Sent via JNJ International Official Web Portal (CIN: U46301KL2026PTC104999)_`

    return encodeURIComponent(text)
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    const msg = generateWhatsAppMessage()
    window.open(`https://wa.me/917994561627?text=${msg}`, '_blank')
  }

  const handleEmailSubmit = () => {
    setIsSubmitted(true)
    const subject = encodeURIComponent(`Export RFQ: ${selectedProducts.join(', ')} - ${companyName || 'Enquiry'}`)
    const body = decodeURIComponent(generateWhatsAppMessage())
    window.location.href = `mailto:jnj.internationalpvt@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-emerald-900/20 overflow-hidden my-6">
        {/* Modal Top Header */}
        <div className="bg-[#051f14] text-white p-5 sm:p-6 flex items-start justify-between border-b border-[#d4af37]/30">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#f5d77f] px-2 py-0.5 rounded bg-white/10 border border-[#d4af37]/30">
                OFFICIAL RFQ DESK
              </span>
              <span className="text-xs text-emerald-300">CIN: U46301KL2026PTC104999</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <FileSpreadsheet className="size-5 text-[#f5d77f]" />
              Request Formal Export Quotation
            </h3>
            <p className="text-xs text-emerald-200/80 mt-1">
              Direct farm-gate pricing, verified container weights, and guaranteed Reefer cold-chain booking.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close RFQ Modal"
          >
            <X className="size-6" />
          </button>
        </div>

        {isSubmitted ? (
          /* Submission Confirmation View */
          <div className="p-8 sm:p-12 text-center bg-[#fafdf8]">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-300 shadow-sm">
              <CheckCircle2 className="size-9 text-emerald-600" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Quotation Request Initiated!</h4>
            <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
              Thank you, <strong className="text-slate-800">{buyerName || 'Valued Partner'}</strong>. Your specification
              has been formatted. Our export desk in Thiruvananthapuram, Kerala, will review port availability and respond
              within 4 business hours.
            </p>

            <div className="bg-white p-5 rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2 mb-8 shadow-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500">Produce:</span>
                <span className="font-semibold text-slate-900">{selectedProducts.join(', ')}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500">Container / Load:</span>
                <span className="font-semibold text-slate-900">{volume}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Destination:</span>
                <span className="font-semibold text-slate-900">{destinationPort}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  const msg = generateWhatsAppMessage()
                  window.open(`https://wa.me/917994561627?text=${msg}`, '_blank')
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#f5d77f] via-[#d4af37] to-[#c59b27] hover:brightness-105 active:scale-95 text-[#041a10] font-bold rounded-lg text-xs shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="size-4" />
                <span>Open in WhatsApp Desk</span>
              </button>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs transition-colors"
              >
                Edit Details
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#051f14] hover:bg-[#082e1e] text-[#f5d77f] font-semibold rounded-lg text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleWhatsAppSubmit} className="p-5 sm:p-7 max-h-[78vh] overflow-y-auto space-y-6">
            {/* Step 1: Select Produce */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#052215] mb-2 font-mono">
                1. Select Export Produce Required (Choose one or multiple):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {productOptions.map((prod) => {
                  const selected = selectedProducts.includes(prod)
                  return (
                    <button
                      type="button"
                      key={prod}
                      onClick={() => toggleProduct(prod)}
                      className={`text-left text-xs p-3 rounded-lg border transition-all flex items-start gap-2.5 ${
                        selected
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => {}}
                        className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 pointer-events-none"
                      />
                      <span>{prod}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Volume & Port */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Shipment Volume / Container Type:
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="1 x 20ft Reefer FCL (approx. 14 MT)">1 x 20ft Reefer FCL (approx. 14 MT)</option>
                  <option value="1 x 40ft High Cube Reefer (28-29 MT)">1 x 40ft High Cube Reefer (28-29 MT)</option>
                  <option value="Multiple 40ft Reefers (Weekly Scheduled Contract)">
                    Multiple 40ft Reefers (Weekly Scheduled Contract)
                  </option>
                  <option value="Air Cargo Perishable (2 - 5 MT)">Air Cargo Perishable (2 - 5 MT)</option>
                  <option value="Domestic Bulk Truck (10 - 25 MT)">Domestic Bulk Truck (10 - 25 MT)</option>
                  <option value="Custom Sample Shipment">Trial / Sample Consignment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Target Destination Port or Market:
                </label>
                <select
                  value={destinationPort}
                  onChange={(e) => setDestinationPort(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="Jebel Ali Port (Dubai, UAE)">Jebel Ali Port (Dubai, UAE)</option>
                  <option value="Jeddah Islamic Port (Saudi Arabia)">Jeddah Islamic Port (Saudi Arabia)</option>
                  <option value="King Abdulaziz Port (Dammam, Saudi Arabia)">
                    King Abdulaziz Port (Dammam, Saudi Arabia)
                  </option>
                  <option value="Port of Salalah / Sohar (Oman)">Port of Salalah / Sohar (Oman)</option>
                  <option value="Hamad Port (Qatar)">Hamad Port (Qatar)</option>
                  <option value="Male Port (Maldives)">Male Port (Maldives)</option>
                  <option value="Port of Singapore">Port of Singapore</option>
                  <option value="Port Klang (Malaysia)">Port Klang (Malaysia)</option>
                  <option value="Felixstowe / London Gateway (United Kingdom)">
                    Felixstowe / London Gateway (UK)
                  </option>
                  <option value="Domestic Indian Mandi / Wholesale Hub">Domestic Indian Mandi / Wholesale Hub</option>
                  <option value="Other International Seaport">Other International Seaport</option>
                </select>
              </div>
            </div>

            {/* Step 3: Packing & Incoterm */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Packaging Specification:
                </label>
                <select
                  value={packingType}
                  onChange={(e) => setPackingType(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="Standard Export Mesh / Corrugated Box">Standard Export Mesh / Corrugated Box</option>
                  <option value="25kg / 50kg Breathable Leno Mesh Bags (Onions)">
                    25kg / 50kg Breathable Leno Mesh Bags (Onions)
                  </option>
                  <option value="15kg Ventilated Plastic Heavy Crates (Tomatoes)">
                    15kg Ventilated Plastic Heavy Crates (Tomatoes)
                  </option>
                  <option value="6kg / 10kg 5-Ply Corrugated Export Cartons">
                    6kg / 10kg 5-Ply Corrugated Export Cartons
                  </option>
                  <option value="25kg / 50kg Jute Gunny Bags (Potatoes)">
                    25kg / 50kg Jute Gunny Bags (Potatoes)
                  </option>
                  <option value="Custom Buyer Branded Packaging">Custom Buyer Branded Packaging</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Pricing Terms (Incoterms):
                </label>
                <select
                  value={incoterm}
                  onChange={(e) => setIncoterm(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="CIF (Cost, Insurance & Freight)">CIF (Cost, Insurance & Freight) - Recommended</option>
                  <option value="FOB (Free On Board - Vizhinjam / Cochin / Tuticorin)">
                    FOB (Free On Board - Indian Seaport)
                  </option>
                  <option value="CNF (Cost & Freight)">CNF (Cost & Freight)</option>
                  <option value="Ex-Packhouse / Mandi Gate (Domestic)">Ex-Packhouse / Mandi Gate (Domestic)</option>
                </select>
              </div>
            </div>

            {/* Step 4: Buyer Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name <span className="text-red-500">*</span>:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Rajesh Kumar"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company / Organization Name:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Al-Madina Supermarkets LLC"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp / Phone Number <span className="text-red-500">*</span>:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +971 50 1234567 or +91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address:
                </label>
                <input
                  type="email"
                  placeholder="e.g. procurement@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Specific Quality Requirements / Grade Notes:
              </label>
              <textarea
                rows={2}
                placeholder="Specify any caliber requirements (e.g. Onions 55mm+ only), target arrival dates, or special certifications..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="size-4 text-emerald-700" />
                <span>100% Confidential RFQ &bull; Direct Exporter Rate Guarantee</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <Mail className="size-3.5 text-slate-600" />
                  <span>Send via Email</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-[#051f14] bg-gradient-to-r from-[#f5d77f] via-[#d4af37] to-[#c59b27] hover:brightness-105 active:scale-95 rounded-lg shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="size-4 text-[#051f14]" />
                  <span>Submit via WhatsApp Desk</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default RFQModal
