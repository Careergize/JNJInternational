import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import RFQModal from './RFQModal'
import ScrollProgressBar from './ScrollProgressBar'
import BackToTop from './BackToTop'

interface LayoutProps {
  children: (props: { onOpenRFQ: (item?: string) => void }) => React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
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
    <div className="min-h-screen flex flex-col bg-[#fafcf9] text-[#16271e] relative selection:bg-[#185839] selection:text-white">
      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top CRR Associates Luxury Navbar */}
      <Navbar onOpenRFQ={() => handleOpenRFQ()} />

      {/* Main Page Route Content */}
      <main className="flex-1">
        {children({ onOpenRFQ: handleOpenRFQ })}
      </main>

      {/* Corporate Multipage Footer */}
      <Footer />

      {/* Morphing Back-To-Top / WhatsApp Floating Button */}
      <BackToTop />

      {/* Interactive RFQ Modal Accessible from any page */}
      <RFQModal
        isOpen={rfqOpen}
        onClose={handleCloseRFQ}
        initialProduct={selectedProductForRfq}
      />
    </div>
  )
}

export default Layout
