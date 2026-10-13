import React, { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Building,
  ExternalLink,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Bulk Vegetable Export Enquiry',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const text = `*NEW CONTACT MESSAGE — JNJ INTERNATIONAL WEBSITE*
*From:* ${formData.name}
*Phone/WhatsApp:* ${formData.phone}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`

    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/917994561627?text=${encoded}`, '_blank')
  }

  return (
    <section id="contact" className="py-24 bg-[#f4f7f1] relative overflow-hidden">
      {/* Background ambient decorative orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal variant="fade-down" delay={50}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#0b3d26] text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
              <Phone className="size-3.5 text-[#d4af37]" />
              Direct Export &amp; Wholesale Desk
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#052215] tracking-tight mb-3">
              Connect with Our Thiruvananthapuram Export Team
            </h2>
            <div className="flex justify-center mb-4">
              <span className="extice-accent-line"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={250}>
            <p className="text-slate-600 text-base leading-relaxed">
              Whether booking seasonal 40ft Reefer allocations to the Gulf or arranging domestic mandi wholesale dispatches,
              our export officers respond directly with live prices, current pack dates, and port schedules.
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {/* Card 1: WhatsApp */}
          <ScrollReveal variant="fade-up" delay={100} className="h-full">
            <a
              href="https://wa.me/917994561627?text=Hello%20JNJ%20International%2C%20I%20would%20like%20to%20enquire%20about%20vegetable%20export%20prices."
              target="_blank"
              rel="noopener noreferrer"
              className="extice-card bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm flex flex-col justify-between group h-full cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="size-6 text-emerald-600" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-semibold block mb-1">
                  Instant Chat Desk
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#0b3d26] transition-colors">
                  WhatsApp Business
                </h3>
                <p className="text-xs text-slate-600 mb-4">Direct priority chat with export logistics officer.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                <span>+91 7994561627</span>
                <ExternalLink className="size-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </ScrollReveal>

          {/* Card 2: Phone Calling */}
          <ScrollReveal variant="fade-up" delay={180} className="h-full">
            <div className="extice-card bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm flex flex-col justify-between group h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="size-6 text-emerald-600" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-semibold block mb-1">
                  Voice Hotlines
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#0b3d26] transition-colors">
                  Call Export Desk
                </h3>
                <p className="text-xs text-slate-600 mb-4">Operating during business hours for immediate verbal support.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-1 text-xs font-bold text-slate-800">
                <a href="tel:+917994561627" className="hover:text-emerald-700 transition-colors">
                  +91 7994561627
                </a>
                <a href="tel:+919961810692" className="hover:text-emerald-700 transition-colors">
                  +91 9961810692
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Email */}
          <ScrollReveal variant="fade-up" delay={260} className="h-full">
            <a
              href="mailto:jnj.internationalpvt@gmail.com?subject=Vegetable%20Export%20Enquiry%20-%20JNJ%20International"
              className="extice-card bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm flex flex-col justify-between group h-full cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="size-6 text-emerald-600" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-semibold block mb-1">
                  Formal Inquiries
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#0b3d26] transition-colors">
                  Official Email
                </h3>
                <p className="text-xs text-slate-600 mb-4">Send tender documents, RFQ sheets, and contracts.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800 truncate">
                <span className="truncate">jnj.internationalpvt@gmail.com</span>
                <ExternalLink className="size-3.5 opacity-60 group-hover:opacity-100 shrink-0 ml-1 transition-opacity" />
              </div>
            </a>
          </ScrollReveal>

          {/* Card 4: Registered Office */}
          <ScrollReveal variant="fade-up" delay={340} className="h-full">
            <div className="extice-card bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm flex flex-col justify-between group h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="size-6 text-emerald-600" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-semibold block mb-1">
                  Registered Office
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#0b3d26] transition-colors">
                  Thiruvananthapuram
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  No.13/602 Manjadimoodu, Mylakkara, Thiruvananthapuram, Kerala &ndash; 695572
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-800 font-semibold">
                CIN U46301KL2026PTC104999
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Interactive Message Form & Operating Hours */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Form */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-right" delay={200}>
              <div className="extice-card bg-white p-6 sm:p-8 rounded-3xl border border-emerald-900/10 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Send an Instant Consignment Message</h3>
                <p className="text-xs text-slate-600 mb-6">
                  Fill in your requirement below. Our export executive will respond with current port availability and CIF/FOB rates.
                </p>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center animate-in zoom-in-95 duration-200">
                    <CheckCircle2 className="size-10 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-base font-bold text-slate-900 mb-1">Message Transmitted!</h4>
                    <p className="text-xs text-slate-600 mb-4">
                      Thank you. Your message has been prepared for dispatch to our export desk in Thiruvananthapuram.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="extice-btn-primary px-5 py-2.5 bg-emerald-700 text-white rounded-full text-xs font-semibold shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Your Name / Contact Person <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Mohammed Al-Falasi"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          WhatsApp / Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +971 55 9876543 or +91 999..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. buyer@importhouse.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Interested Produce</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] focus:outline-none transition-all"
                        >
                          <option value="Tomatoes (Roma & Hybrid Export Grade)">Tomatoes (Roma & Hybrid Export Grade)</option>
                          <option value="Indian Red & Pink Onions (Nashik / Bellary)">
                            Indian Red & Pink Onions (Nashik / Bellary)
                          </option>
                          <option value="Golden Table & Processing Potatoes">Golden Table & Processing Potatoes</option>
                          <option value="Green Chillies, Ginger & Garlic">Green Chillies, Ginger & Garlic</option>
                          <option value="Mixed Reefer Container Booking">Mixed Reefer Container Booking</option>
                          <option value="Domestic Indian Mandi Bulk Wholesale">Domestic Indian Mandi Bulk Wholesale</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Shipment Requirement / Questions <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Provide details on quantity (metric tonnes / containers), destination port, and delivery schedule..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] focus:outline-none transition-all"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="extice-btn-primary btn-shimmer group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold text-[#051f14] bg-gradient-to-r from-[#f5d77f] via-[#d4af37] to-[#c59b27] rounded-full shadow-lg cursor-pointer"
                    >
                      <Send className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      <span>Send Message to Export Desk</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Operating Hours & Logistics Desk Notice */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal variant="fade-left" delay={250}>
              <div className="extice-card bg-[#051f14] text-white p-6 sm:p-7 rounded-3xl border border-[#d4af37]/35 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#f5d77f] mb-3">
                  <Clock className="size-4" />
                  Export Desk Hours &amp; Reefer Support
                </div>
                <h4 className="text-lg font-bold text-white mb-4">Availability &amp; Response Times</h4>

                <div className="space-y-3.5 text-xs text-emerald-100">
                  <div className="flex justify-between border-b border-emerald-800/80 pb-2.5">
                    <span className="text-emerald-300">Commercial Office Desk:</span>
                    <span className="font-semibold text-white">Mon &ndash; Sat: 8:30 AM &ndash; 7:30 PM IST</span>
                  </div>
                  <div className="flex justify-between border-b border-emerald-800/80 pb-2.5">
                    <span className="text-emerald-300">Port &amp; Reefer Dispatch Desk:</span>
                    <span className="font-semibold text-[#f5d77f]">24 / 7 Operations during active loadings</span>
                  </div>
                  <div className="flex justify-between border-b border-emerald-800/80 pb-2.5">
                    <span className="text-emerald-300">WhatsApp Inquiry Response:</span>
                    <span className="font-semibold text-white">Under 60 Minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-emerald-300">Formal Proforma &amp; Quote:</span>
                    <span className="font-semibold text-white">Within 4 Business Hours</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Mandi & Maritime Port Reminder */}
            <ScrollReveal variant="fade-left" delay={350}>
              <div className="extice-card bg-white p-6 rounded-3xl border border-emerald-900/10 shadow-sm text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Building className="size-4 text-[#0d472d]" />
                  Visiting Our Thiruvananthapuram Office
                </div>
                <p className="leading-relaxed">
                  Overseas procurement teams and domestic mandi buyers are welcome to visit our administrative facilities
                  in Mylakkara, Thiruvananthapuram, Kerala, to inspect cold rooms and review active packing operations.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#0b3d26] font-semibold">
                  Appointments: +91 7994561627 / jnj.internationalpvt@gmail.com
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
