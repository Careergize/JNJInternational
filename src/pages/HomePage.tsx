import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ProduceTicker from '../components/ProduceTicker'
import Hero from '../components/Hero'
import ProduceSection from '../components/ProduceSection'
import MaritimeLogistics from '../components/MaritimeLogistics'
import ExportWorkflow from '../components/ExportWorkflow'
import QualityStandards from '../components/QualityStandards'
import AboutCompany from '../components/AboutCompany'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import RFQModal from '../components/RFQModal'

export const HomePage: React.FC = () => {
  const [rfqOpen, setRfqOpen] = useState(false)
  const [selectedProductForRfq, setSelectedProductForRfq] = useState<string>('')

  const handleOpenRFQ = (initialItem?: string) => {
    setSelectedProductForRfq(initialItem || '')
    setRfqOpen(true)
  }

  const handleCloseRFQ = () => {
    setRfqOpen(false)
    setSelectedProductForRfq('')
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fafcf9] text-[#16271e] relative selection:bg-[#0d472d] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenRFQ={handleOpenRFQ} />

      {/* Real-time Ticker */}
      <ProduceTicker />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenRFQ={() => handleOpenRFQ()} />

        {/* Core Produce Catalog (Tomatoes, Onions, Potatoes, Spices) */}
        <ProduceSection onOpenRFQ={handleOpenRFQ} />

        {/* Maritime Shipping & Port Proximity (Highlighting the Cargo Ship Logo & Vizhinjam Seaport) */}
        <MaritimeLogistics />

        {/* 4-Stage Farm-to-Port Cold-Chain Workflow */}
        <ExportWorkflow />

        {/* Quality Assurance & APEDA / Phytosanitary Standards */}
        <QualityStandards />

        {/* Corporate Profile & Registration (CIN U46301KL2026PTC104999) */}
        <AboutCompany />

        {/* Contact, Hotlines & Instant Enquiry Desk */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive RFQ Modal */}
      <RFQModal
        isOpen={rfqOpen}
        onClose={handleCloseRFQ}
        initialProduct={selectedProductForRfq}
      />
    </div>
  )
}

export default HomePage
