import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import LogisticsPage from './pages/LogisticsPage'
import QualityPage from './pages/QualityPage'
import ContactPage from './pages/ContactPage'

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        {({ onOpenRFQ }) => (
          <Routes>
            <Route path="/" element={<HomePage onOpenRFQ={onOpenRFQ} />} />
            <Route path="/about" element={<AboutPage onOpenRFQ={onOpenRFQ} />} />
            <Route path="/products" element={<ProductsPage onOpenRFQ={onOpenRFQ} />} />
            <Route path="/logistics" element={<LogisticsPage onOpenRFQ={onOpenRFQ} />} />
            <Route path="/quality" element={<QualityPage onOpenRFQ={onOpenRFQ} />} />
            <Route path="/contact" element={<ContactPage onOpenRFQ={onOpenRFQ} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </Layout>
    </BrowserRouter>
  )
}

export default App
