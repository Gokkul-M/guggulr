
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import QuoteForm from '../components/QuoteForm';

const QuotePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Tell us about your requirements and we'll provide you with a personalized quote 
              for our premium dry fruits and spices
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quote Form Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-orange-600">Guggulr?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium quality and exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "Hand-picked, grade-A products sourced directly from trusted farmers",
                icon: "🌟"
              },
              {
                title: "Custom Packaging",
                description: "Personalized packaging solutions for corporate gifts and bulk orders",
                icon: "📦"
              },
              {
                title: "Fast Delivery",
                description: "Quick turnaround times with reliable shipping to your doorstep",
                icon: "🚚"
              },
              {
                title: "Competitive Pricing",
                description: "Best prices in the market with transparent, no-hidden-cost quotes",
                icon: "💰"
              },
              {
                title: "24/7 Support",
                description: "Dedicated customer support team ready to assist you anytime",
                icon: "🤝"
              },
              {
                title: "Global Reach",
                description: "Worldwide shipping with special rates for bulk international orders",
                icon: "🌍"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
