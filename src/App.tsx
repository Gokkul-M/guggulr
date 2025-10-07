import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CategoryProvider } from '@/context/CategoryContext';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailsPage from '@/pages/ProductDetailsPage';
import GiftingPage from '@/pages/GiftingPage';
import GiftDetailsPage from './pages/gift-details-page';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import QuotePage from './pages/QuotePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

function App() {
  return (
    <CategoryProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gifting" element={<GiftingPage />} />
            <Route path="/gifting/:id" element={<GiftDetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          </Routes>
        </Layout>
      </Router>
    </CategoryProvider>
  );
}

export default App;
