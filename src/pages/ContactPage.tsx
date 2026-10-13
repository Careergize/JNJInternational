import React from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactSection from '../components/ContactSection'
import ScrollReveal from '../components/ScrollReveal'

interface ContactPageProps {
  onOpenRFQ: (item?: string) => void
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenRFQ }) => {
  const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ) for sea shipments?',
      a: 'Our standard export MOQ is one Full Container Load (1 x 40ft High-Cube Reefer, approximately 24 to 28 Metric Tons depending on the crop). Mixed container loads (e.g., tomatoes + chillies, or onions + potatoes) can be arranged.',
    },
    {
      q: 'Which Incoterms and delivery options do you support?',
      a: 'We routinely execute contracts under FOB (Free On Board) Vizhinjam Seaport / Cochin Port, as well as CIF (Cost, Insurance & Freight) or CFR to buyer-designated destination ports like Jebel Ali, Jeddah, Dammam, and Rotterdam.',
    },
    {
      q: 'What are standard international commercial payment terms?',
      a: 'We accept 100% Irrevocable Letter of Credit (LC) at sight issued by first-class international banks, or Telegraphic Transfer (T/T) with an advance booking deposit and the balance payable against non-negotiable Bill of Lading (B/L) copy.',
    },
    {
      q: 'How quickly can a reefer container be packed and dispatched?',
      a: 'Thanks to our direct farmer collective network and 25km proximity to Vizhinjam Seaport, orders can be graded, pre-cooled, stuffed, and gated-in at terminal cranes within 48 to 72 hours of confirmed LC issuance.',
    },
  ]

  const contactCards = [
    {
      icon: MapPin,
      title: 'Registered Corporate Office',
      details: [
        'No. 13/602 Manjadimoodu, Mylakkara,',
        'Thiruvananthapuram, Kerala – 695572, India',
        'CIN: U46301KL2026PTC104999',
      ],
      tag: 'GOVERNMENT REGISTERED HEADQUARTERS',
    },
    {
      icon: Phone,
      title: 'Commercial Export Hotlines',
      details: [
        '+91 79945 61627 (Commercial Desk)',
        '+91 99618 10692 (Logistics Desk)',
        'Direct WhatsApp: Available 24/7',
      ],
      tag: 'DIRECT TELEPHONE ACCESS',
    },
    {
      icon: Mail,
      title: 'Official Electronic Mail',
      details: [
        'jnj.internationalpvt@gmail.com',
        'Direct Quotations: exports@jnjinternational.com',
        'Response Time: < 2 Hours during trade hours',
      ],
      tag: 'RAPID DOCUMENTATION RESPONSE',
    },
    {
      icon: Clock,
      title: 'Global Trade Desk Hours',
      details: [
        'Monday – Saturday: 08:00 – 21:00 IST',
        'Sunday: Emergency Port & Reefer Operations Only',
        'Time Zone: GMT +5:30 (Aligned with GCC trading)',
      ],
      tag: 'TIME-ZONE ALIGNED DESK',
    },
  ]

  return (
    <div className="bg-[#fafcf9]">
      {/* 1. Multipage Header */}
      <PageHeader
        breadcrumbCurrent="Contact Us"
        badge="GLOBAL COMMERCIAL TRADING DESK"
        title="Connect with JNJ International"
        subtitle="Speak directly with our agricultural trade directors, request seasonal produce price lists, or book refrigerated container space from Vizhinjam Seaport."
        onOpenRFQ={() => onOpenRFQ()}
      />

      {/* 2. Interactive Contact Form & Desk */}
      <ContactSection />

      {/* 3. Institutional Contact Points Matrix */}
      <section className="py-20 bg-[#f8faf5] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal variant="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12442c]/10 border border-[#d4af37]/40 text-[#12442c] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
                <span className="size-1.5 rounded-full bg-[#d4af37]"></span>
                <span>Official Corporate Liaison</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#052215] font-heading mb-4">
                Corporate &amp; Operational Contact Hubs
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Reach our team via multiple communication channels. All buyer enquiries are routed directly to accredited
                trade representatives.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <ScrollReveal key={card.title} variant="fade-up" delay={idx * 80}>
                  <div className="luxury-card-light p-6 sm:p-7 rounded-2xl h-full flex flex-col justify-between">
                    <div>
                      <div className="size-12 rounded-xl bg-gradient-to-br from-[#1a5c3c] to-[#24764c] text-[#f5d77f] border border-[#d4af37]/40 flex items-center justify-center mb-4 shadow-md">
                        <Icon className="size-6 text-[#f5d77f]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-widest block mb-1">
                        {card.tag}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mb-3">{card.title}</h3>
                      <div className="space-y-1 text-xs text-slate-600 leading-relaxed font-sans">
                        {card.details.map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Direct WhatsApp Callout Banner */}
          <div className="mt-12 luxury-card-dark bg-gradient-to-r from-[#12442c] via-[#1a5c3c] to-[#12442c] text-white p-6 sm:p-8 rounded-3xl border border-[#d4af37]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg">
                <MessageCircle className="size-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-white">Instant WhatsApp Trade Hotline</h4>
                <p className="text-xs text-emerald-200/90">
                  Direct line with JNJ International trade directors for instantaneous pack date verification &amp; CIF rates.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/917994561627?text=Hello%20JNJ%20International,%20I%20would%20like%20to%20enquire%20about%20export%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105"
            >
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* 4. Commercial Buyer FAQs */}
      <section className="py-20 bg-[#f8faf5] border-t border-[#d4af37]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <ScrollReveal variant="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12442c]/10 border border-[#d4af37]/40 text-[#12442c] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
                <HelpCircle className="size-3.5 text-[#d4af37]" />
                <span>Commercial Buyer FAQ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#052215] font-heading">
                Frequently Asked Trade Questions
              </h2>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 70}>
                <div className="luxury-card-light p-6 rounded-2xl">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-start gap-2.5">
                    <CheckCircle2 className="size-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
