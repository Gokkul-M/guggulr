
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-600 text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-lg"
          >
            About <span className="bg-gradient-to-r from-yellow-300 to-orange-100 bg-clip-text text-transparent">Guggulr</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed"
          >
            Your trusted partner for premium nuts, dry fruits, and exotic spices since 2020
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-600">Story</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded with a passion for quality and taste, Guggulr Global Foods has been 
                sourcing the finest nuts, dry fruits, and spices from around the world. 
                Our journey began with a simple mission: to bring the best of nature's 
                bounty to your table.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From humble beginnings to becoming a trusted name in premium food products, 
                we've maintained our commitment to quality, freshness, and customer satisfaction.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl flex items-center justify-center">
  <img
    src="/path-to-your-image.jpg"
    alt="Product"
    className="w-2/3 h-2/3 object-contain"
  />
</div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12 text-red-500" />,
                title: "Quality First",
                description: "We never compromise on the quality of our products"
              },
              {
                icon: <Award className="w-12 h-12 text-orange-500" />,
                title: "Excellence",
                description: "Striving for excellence in every aspect of our business"
              },
              {
                icon: <Users className="w-12 h-12 text-blue-500" />,
                title: "Customer Focus",
                description: "Your satisfaction is our top priority"
              },
              {
                icon: <Globe className="w-12 h-12 text-green-500" />,
                title: "Global Sourcing",
                description: "Bringing the world's finest products to you"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
