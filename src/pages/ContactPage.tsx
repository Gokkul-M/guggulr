
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-600 text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-40 h-40 sm:w-72 sm:h-72 bg-orange-400 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-96 sm:h-96 bg-red-400 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center space-x-4 mb-4 sm:mb-6"
          >
            <MessageSquare className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Contact Us
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-100 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-4"
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Get in <span className="text-orange-600">Touch</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Whether you have questions about our products, need help with an order, 
                  or want to explore our corporate gifting options, we're here to help.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />,
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    subContent: "Mon-Fri 9AM-6PM EST"
                  },
                  {
                    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />,
                    title: "Email",
                    content: "hello@guggulr.com",
                    subContent: "We'll respond within 24 hours"
                  },
                  {
                    icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />,
                    title: "Address",
                    content: "123 Spice Street",
                    subContent: "Global Foods District, GF 12345"
                  },
                  {
                    icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />,
                    title: "Business Hours",
                    content: "Monday - Friday: 9AM - 6PM",
                    subContent: "Saturday: 10AM - 4PM"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-white/60 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base">{item.content}</p>
                      <p className="text-gray-500 text-xs sm:text-sm">{item.subContent}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-white/20"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white/80"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white/80"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white/80"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white/80"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="products">Product Questions</option>
                    <option value="corporate">Corporate Gifting</option>
                    <option value="wholesale">Wholesale Orders</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white/80 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 sm:py-4 text-sm sm:text-base font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our <span className="text-orange-600">Store</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Come and experience our premium products in person
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl sm:rounded-3xl h-64 sm:h-80 md:h-96 flex items-center justify-center"
          >
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-orange-500" />
              <p className="text-sm sm:text-base">Interactive map coming soon</p>
              <p className="text-xs sm:text-sm mt-2">123 Spice Street, Global Foods District</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
