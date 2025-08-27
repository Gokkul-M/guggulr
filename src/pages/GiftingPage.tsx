import React, { useState, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Star, Heart, Package, Truck, CheckCircle, ShoppingCart } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useGLTF } from "@react-three/drei";
import giftModel1 from "../assets/3dmodel/1.glb";
import giftModel2 from "../assets/3dmodel/2.glb";
import giftModel3 from "../assets/3dmodel/3.glb";
import giftModel4 from "../assets/3dmodel/4.glb";
import giftModel5 from "../assets/3dmodel/5.glb";
import giftModel6 from "../assets/3dmodel/6.glb";
import giftModel7 from "../assets/3dmodel/7.glb";
import giftModel8 from "../assets/3dmodel/8.glb";
import giftModel9 from "../assets/3dmodel/9.glb";
import giftModel10 from "../assets/3dmodel/10.glb";
import giftModel11 from "../assets/3dmodel/11.glb";

import gift1 from '../assets/Gifts_Website/1.jpeg';
import gift2 from '../assets/Gifts_Website/2.jpeg';
import gift3 from '../assets/Gifts_Website/3.jpeg';
import gift4 from '../assets/Gifts_Website/4.jpeg';
import gift5 from '../assets/Gifts_Website/5.jpeg';
import gift6 from '../assets/Gifts_Website/6.jpeg';
import gift7 from '../assets/Gifts_Website/7.jpeg';
import gift8 from '../assets/Gifts_Website/8.jpeg';
import gift9 from '../assets/Gifts_Website/9.jpeg';
import gift10 from '../assets/Gifts_Website/10.jpeg';
import gift11 from '../assets/Gifts_Website/11.jpeg';

function FallbackBox() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#fff" />
    </mesh>
  );
}

// Utility to generate model wrappers
function makeModelComponent(modelPath: string, scale: number) {
  return function ModelWrapper() {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={scale} />;
  };
}

// Create all model components
const CorporateGiftModel1 = makeModelComponent(giftModel1, 2.5);
const CorporateGiftModel2 = makeModelComponent(giftModel2, 2.5);
const CorporateGiftModel3 = makeModelComponent(giftModel3, 2.5);
const CorporateGiftModel4 = makeModelComponent(giftModel4, 2.5);
const HolidayGiftModel5 = makeModelComponent(giftModel5, 1.2);
const HolidayGiftModel6 = makeModelComponent(giftModel6, 1.2);
const PersonalGiftModel7 = makeModelComponent(giftModel7, 1.2);
const PersonalGiftModel8 = makeModelComponent(giftModel8, 1.2);
const PersonalGiftModel9 = makeModelComponent(giftModel9, 1.2);
const PersonalGiftModel10 = makeModelComponent(giftModel10, 1.2);
const WeddingGiftModel11 = makeModelComponent(giftModel11, 1.2);

// Map productId to the correct component
const modelComponents: Record<number, React.FC> = {
  1: CorporateGiftModel1,
  2: CorporateGiftModel2,
  3: CorporateGiftModel3,
  4: CorporateGiftModel4,
  5: HolidayGiftModel5,
  6: HolidayGiftModel6,
  7: PersonalGiftModel7,
  8: PersonalGiftModel8,
  9: PersonalGiftModel9,
  10: PersonalGiftModel10,
  11: WeddingGiftModel11,
};

// ✅ Main component
export function Gift3DModel({ productId }: { productId: number }) {
  const ModelComponent = modelComponents[productId];

  if (!ModelComponent) {
    console.warn(`No 3D model found for productId: ${productId}`);
    return <FallbackBox />;
  }

  return (
    <Suspense fallback={<FallbackBox />}>
      <ModelComponent />
    </Suspense>
  );
}
const GiftingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('corporate');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [is3DModalOpen, setIs3DModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [displayedCount, setDisplayedCount] = useState({
    corporate: 2,
    personal: 2,
    wedding: 2
  });
  const navigate = useNavigate();

  const giftCategories = {
    corporate: {
      title: "Corporate Gifting",
      description: "Professional gift hampers for business relationships",
      products: [
        { 
          id: 1,
          name: "Executive Premium Box", 
          tagline: "Luxury nuts and dried fruits collection",
          image: gift1,
         
          description: "Premium corporate gift box featuring hand-selected nuts, exotic dry fruits, and gourmet treats perfect for business relationships.",
          rating: 4.9,
          featured: true,
          luxury: true
        },
        { 
          id: 2,
          name: "Corporate Wellness Pack", 
          tagline: "Healthy snacking for the workplace",
          image: gift2,
         
          description: "Health-focused gift collection promoting wellness in the workplace with nutritious snacks and premium ingredients.",
          rating: 4.7,
          featured: false,
          luxury: false
        },
        { 
          id: 3,
          name: "Holiday Special", 
          tagline: "Festive premium gift collection",
          image: gift3,
         
          description: "Celebrate the holiday season with this festive collection of premium nuts, spices, and seasonal delights.",
          rating: 4.8,
          featured: false,
          luxury: false
        },
        { 
          id: 4,
          name: "Golden Bloom Hamper", 
          tagline: "Team Spirit Treats",
          image: gift4,
          
          description: "A radiant hamper filled with golden delights, blooming with richness and joy.",
          rating: 4.8,
          featured: true,
          luxury: false
        },
        
      ]
    },
    personal: {
      title: "Personal Gifting",
      description: "Thoughtful gifts for friends and family",
      products: [
        { 
          id: 5,
          name: "Pearl Elegance Basket", 
          tagline: "Celebrate with Festive Flavors",
          image: gift5,
          
          description: "A basket of timeless elegance, adorned with pearl-inspired charm and luxury treats.",
          rating: 4.8,
          featured: false,
          luxury: true
        },
        { 
          id: 6,
          name: "Royal Trio Hamper", 
          tagline: "Birthday Bliss Delivered",
          image: gift6,
         
          description: "A majestic trio of delights, curated for those who cherish royal indulgence.",
          rating: 4.8,
          featured: false,
          luxury: false
        },
        { 
          id: 7,
          name: "Rose Delight Hamper", 
          tagline: "Togetherness in Every Bite",
          image: gift7,
         
          description: "A fragrant hamper inspired by roses, crafted for sweet and elegant gifting.",
          rating: 4.8,
          featured: true,
          luxury: true
        },
        { 
          id: 8,
          name: "Pearl Purse Pack", 
          tagline: "Love Wrapped in Luxury",
          image: gift8,
         
          description: "A stylish pearl-inspired purse pack designed for chic gifting moments.",
          rating: 4.6,
          featured: false,
          luxury: false
        },
      ]
    },
    wedding: {
      title: "Wedding Gifts",
      description: "Elegant gifts for special occasions",
      products: [
        { 
          id: 9,
          name: "Golden Leaf Delight",
          tagline: "Birthday Bliss Delivered",
          image: gift9,
         
          description: "A golden-leaf inspired delight that brings charm and festive richness.",
          rating: 4.4,
          featured: false,
          luxury: false
        },
        { 
          id: 10,
          name: "Lavender Bliss Hamper", 
          tagline: "Luxurious treats for the happy couple",
          image: gift10,
         
          description: "A golden-leaf inspired delight that brings charm and festive richness.",
          rating: 4.4,
          featured: false,
          luxury: true
        },
        { 
          id: 11,
          name: "Golden Pearl Delight", 
          tagline: "Professional excellence in gifting",
          image: gift11,
         
          description: "A radiant fusion of golden elegance and pearl charm crafted to impress.",
          rating: 4.8,
          featured: false,
          luxury: true
        },
      ]
    }
  };

  const features = [
    {
      icon: <Package className="w-8 h-8 text-orange-500" />,
      title: "Custom Packaging",
      description: "Beautiful, personalized packaging for every occasion"
    },
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: "Express Delivery",
      description: "Fast, reliable delivery to ensure freshness"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all gift orders"
    }
  ];

  // Get current products based on displayed count
  const currentProducts = giftCategories[selectedCategory as keyof typeof giftCategories].products
    .slice(0, displayedCount[selectedCategory as keyof typeof displayedCount]);
  
  const totalProducts = giftCategories[selectedCategory as keyof typeof giftCategories].products.length;
  const hasMoreProducts = displayedCount[selectedCategory as keyof typeof displayedCount] < totalProducts;

  const handleCustomizeGift = (product: any) => {
    navigate('/quote');
  };

  const handleViewDetails = (product: any) => {
    console.log('Navigating to gift details for product:', product.id);
    navigate(`/gifting/${product.id}`);
  };

  const handle3DView = (product: any) => {
    setSelectedProduct(product);
    setIs3DModalOpen(true);
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Increase displayed count by 2
    setDisplayedCount(prev => ({
      ...prev,
      [selectedCategory]: Math.min(prev[selectedCategory as keyof typeof prev] + 2, totalProducts)
    }));
    
    setIsLoading(false);
  };

  // Reset displayed count when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setDisplayedCount(prev => ({
      ...prev,
      [category]: 2 // Reset to show first 2 products
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 via-orange-500 to-red-600 text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-40 h-40 sm:w-72 sm:h-72 bg-pink-400 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-96 sm:h-96 bg-orange-400 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center space-x-4 mb-4 sm:mb-6"
          >
            <Gift className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Premium Gifting
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-pink-100 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-4"
          >
            Create memorable moments with our curated gift hampers featuring premium nuts, 
            dry fruits, and exotic spices.
          </motion.p>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="flex bg-white/70 backdrop-blur-md rounded-full p-1 shadow-lg">
              {Object.entries(giftCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                    selectedCategory === key
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {giftCategories[selectedCategory as keyof typeof giftCategories].title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                {giftCategories[selectedCategory as keyof typeof giftCategories].description}
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {currentProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className={`relative overflow-hidden backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-orange-100/50 ${
                      product.luxury 
                        ? 'bg-gradient-to-br from-amber-50/80 via-orange-50/80 to-red-50/80 rounded-3xl' 
                        : 'bg-white/70 rounded-2xl'
                    } ${
                      product.featured 
                        ? 'ring-2 ring-orange-400/50 shadow-orange-200/50' 
                        : ''
                    }`}
                  >
                    {/* Premium Badge */}
                    {product.luxury && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          LUXURY
                        </div>
                      </div>
                    )}

                    {product.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                          FEATURED
                        </div>
                      </div>
                    )}

                    {/* Product Image */}
                    <div className={`h-64 overflow-hidden ${
                      product.luxury ? 'bg-gradient-to-br from-amber-50 to-orange-50' : 'bg-gradient-to-br from-orange-50 to-amber-50'
                    } ${
                      product.featured ? 'rounded-t-3xl' : 'rounded-t-2xl'
                    }`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>

                    {/* Product Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <div className="mb-3">
                          <h3 className={`font-bold group-hover:text-orange-600 transition ${
                            product.luxury ? 'text-2xl text-amber-800' : 'text-xl text-gray-800'
                          }`}>
                            {product.name}
                          </h3>
                        </div>
                        
                        {/* Rating Stars */}
                        {product.rating && (
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating!) 
                                    ? 'text-amber-400 fill-current' 
                                    : 'text-gray-300'
                                }`} 
                              />
                            ))}
                            <span className="text-sm text-gray-600 ml-1">
                              {product.rating}
                            </span>
                          </div>
                        )}
                        
                        <p className="text-gray-600 mb-2 font-medium">{product.tagline}</p>
                        
                        
                        {/* Price */}
                        
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3 mt-6">
                        {/* Primary Quote Button - Full Width */}
                        {product.luxury ? (
                          <button
                            className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-2xl font-medium transition-all shadow-lg group"
                            onClick={() => handleCustomizeGift(product)}
                          >
                            <Gift className="mr-2 w-4 h-4 inline group-hover:animate-bounce" />
                            Luxury Customize
                          </button>
                        ) : product.featured ? (
                          <button
                            className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-2xl font-medium transition-all"
                            onClick={() => handleCustomizeGift(product)}
                          >
                            <Star className="mr-2 w-4 h-4 inline" />
                            Customize Gift
                          </button>
                        ) : (
                          <button
                            className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-2xl font-medium transition-all"
                            onClick={() => handleCustomizeGift(product)}
                          >
                            Customize Gift
                          </button>
                        )}

                        {/* Secondary Actions Row */}
                        <div className="flex gap-3">
                          <button
                            className="flex-1 px-4 py-3 border border-orange-300 text-orange-600 hover:bg-orange-50 rounded-2xl font-medium transition-all"
                            onClick={() => handleViewDetails(product)}
                          >
                            View Details
                          </button>
                          <button
                            className="px-4 py-3 border border-orange-300 text-orange-600 hover:bg-orange-50 rounded-2xl font-medium transition-all flex-shrink-0"
                            onClick={() => handle3DView(product)}
                            title="View 3D Model"
                          >
                            <Package className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Load More Section */}
            {hasMoreProducts && (
              <div className="text-center mt-16">
                <button 
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className={`px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-2xl shadow-lg text-lg font-medium transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    isLoading ? 'animate-pulse' : ''
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="inline-block w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Loading...
                    </>
                  ) : (
                    <>
                      <Gift className="mr-2 w-5 h-5 inline" />
                      Load More Gift Sets
                    </>
                  )}
                </button>
                
                {/* Products count indicator */}
                <p className="text-sm text-gray-500 mt-4">
                  Showing {currentProducts.length} of {totalProducts} gift sets
                </p>
              </div>
            )}

            {/* No more products message */}
            {!hasMoreProducts && currentProducts.length > 0 && (
              <div className="text-center mt-16">
                <div className="inline-flex items-center px-6 py-3 bg-green-50 border border-green-200 rounded-2xl">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <p className="text-green-700 font-medium">
                    All {totalProducts} gift sets loaded!
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose Our <span className="text-orange-600">Gifting Service</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We make gifting effortless with our premium service and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4 sm:mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Need Custom Gifting Solutions?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our team can create personalized gift hampers for any occasion. 
              Contact us to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-orange-600 hover:bg-orange-50 text-sm sm:text-base font-medium transition"
                onClick={() => navigate('/quote')}
              >
                Get Custom Quote
              </button>
              <button 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white text-white hover:bg-white hover:text-orange-600 text-sm sm:text-base font-medium transition"
                onClick={() => alert('🚧 Catalog Coming Soon! This feature isn\'t ready yet, but you can request it in your next prompt. 🚀')}
              >
                View Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customize Gift Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-md sm:max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="text-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                {selectedProduct.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium text-sm sm:text-base"
                  onClick={() => {
                    alert('🎁 Gift customization coming soon!');
                    setIsModalOpen(false);
                  }}
                >
                  Customize Gift
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-600 rounded-xl font-medium text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* 3D Model Modal */}
      {is3DModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-3xl w-full h-[85vh] flex flex-col"
          >
            <div className="text-center mb-6 w-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                3D Model: {selectedProduct.name}
              </h3>
              <p className="text-gray-600">{selectedProduct.tagline}</p>
              <p className="text-sm text-gray-500 mt-2">
                Drag to rotate • Scroll to zoom • Interactive 3D gift box
              </p>
            </div>
            
            {/* 3D Canvas */}
            <div className="flex-1 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl overflow-hidden border border-orange-200">
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ width: '100%', height: '100%' }}
              >
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.4} />
                <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.3} penumbra={0.2} />
                
                <Gift3DModel productId={selectedProduct.id} />
                
                <Environment preset="sunset" />
                <OrbitControls 
                  enableZoom={true} 
                  enablePan={false}
                  autoRotate={false}
                  maxDistance={8}
                  minDistance={2}
                />
              </Canvas>
            </div>
            
            <div className="mt-6 text-center">
              <button 
                onClick={() => setIs3DModalOpen(false)}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-2xl font-medium transition-all shadow-2xl"
              >
                <Gift className="mr-2 w-5 h-5 inline" />
                Close 3D View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default GiftingPage;