import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailsPage from '@/pages/ProductDetailsPage';
import GiftingPage from '@/pages/GiftingPage';
import GiftDetailsPage from './pages/gift-details-page';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import QuotePage from './pages/QuotePage';
import { CategoryProvider } from '@/context/CategoryContext';

function App() {
  return (
    <CategoryProvider>
      <Router>
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gifting" element={<GiftingPage />} />
              <Route path="/gifting/:id" element={<GiftDetailsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/quote" element={<QuotePage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </CategoryProvider>
  );
}

export default App;