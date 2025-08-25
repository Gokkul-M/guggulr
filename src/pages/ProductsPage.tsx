import React, { useState, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, Package, Star, Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Import images
import almonds from '../assets/Almonds.png';
import cashew from '../assets/4-piece Cashews.png'
import dates from '../assets/Black Dates.png'
import mixed from '../assets/Mixed Dry fruits.png'
import walnut from '../assets/Walnut (kernels).png'
import pisco from '../assets/Pistachios.png'
import whitedates from '../assets/White Dates.png'
import greenrasin from '../assets/Green Raisins (Type 1).png'
import pepper from '../assets/Pepper.png'
import turmeric from '../assets/Turmeric Stick.png'
import cardamom from '../assets/Wild Cardamom.png';
import cinnamim from '../assets/Singapore Cinnamon.png'
import saffron from '../assets/Saffron.png'

type Category = 'nuts' | 'spices';

type Product = {
  id: number;
  name: string;
  tagline: string;
  image: string;
  price?: string;
  description?: string;
  rating?: number;
  featured?: boolean;
  luxury?: boolean;
};
const products: Record<Category, Product[]> = {
  nuts: [
    { 
      id: 1, 
      name: 'Premium Almonds', 
      tagline: 'California\'s finest', 
      image: almonds,
      price: '$24.99',
      description: 'Hand-selected California almonds, rich in protein and vitamin E.',
      rating: 4.8,
      featured: true
    },
    { 
      id: 2, 
      name: 'Cashew Delight', 
      tagline: 'Creamy & nutritious', 
      image: cashew,
      price: '$32.99',
      description: 'Premium roasted cashews with a buttery texture and rich flavor.',
      rating: 4.9
    },
    { 
      id: 3, 
      name: 'Pistachio Paradise', 
      tagline: 'Turkish excellence', 
      image: pisco,
      price: '$28.99',
      description: 'Authentic Turkish pistachios, perfectly roasted and salted.',
      rating: 4.7,
      luxury: true
    },
    { 
      id: 4, 
      name: 'Walnut Wonder', 
      tagline: 'Brain food supreme', 
      image: walnut,
      price: '$26.99',
      description: 'Fresh walnut halves packed with omega-3 fatty acids.',
      rating: 4.6
    },
    { 
      id: 5, 
      name: 'Date Delights', 
      tagline: 'Nature\'s candy', 
      image: dates,
      price: '$18.99',
      description: 'Premium Medjool dates, naturally sweet and nutritious.',
      rating: 4.5
    },
    { 
      id: 6, 
      name: 'Mixed Nuts Premium', 
      tagline: 'Perfect combination', 
      image: mixed,
      price: '$35.99',
      description: 'Carefully curated mix of premium nuts for balanced nutrition.',
      rating: 4.7,
      featured: true
    },
    { 
      id: 7, 
      name: 'White Dates Delights', 
      tagline: 'Rich & crunchy', 
      image: whitedates,
      price: '$22.99',
      description: 'Exotic white dates with unique flavor and texture.',
      rating: 4.4
    },
    { 
      id: 8, 
      name: 'Green Raisins', 
      tagline: 'Sweet & tangy', 
      image: greenrasin,
      price: '$16.99',
      description: 'Premium green raisins with natural sweetness.',
      rating: 4.3
    },
  ],
  spices: [
    { 
      id: 9, 
      name: 'Saffron Gold', 
      tagline: 'Kashmir\'s treasure', 
      image: saffron,
      price: '$89.99',
      description: 'Pure Kashmiri saffron threads, the world\'s most precious spice.',
      rating: 5.0,
      featured: true,
      luxury: true
    },
    { 
      id: 10, 
      name: 'Cardamom Elite', 
      tagline: 'Queen of spices', 
      image: cardamom,
      price: '$45.99',
      description: 'Premium green cardamom pods with intense aroma and flavor.',
      rating: 4.8,
      luxury: true
    },
    { 
      id: 11, 
      name: 'Cinnamon Bark', 
      tagline: 'Sweet & aromatic', 
      image: cinnamim,
      price: '$12.99',
      description: 'Ceylon cinnamon bark with sweet and warming properties.',
      rating: 4.6
    },
    { 
      id: 12, 
      name: 'Black Pepper Premium', 
      tagline: 'King of spices', 
      image: pepper,
      price: '$15.99',
      description: 'Freshly ground black pepper with bold and spicy flavor.',
      rating: 4.7
    },
    { 
      id: 13, 
      name: 'Turmeric Gold', 
      tagline: 'Golden healing', 
      image: turmeric,
      price: '$8.99',
      description: 'Organic turmeric powder with anti-inflammatory properties.',
      rating: 4.5
    },
  ]
};

// Additional products that will be generated dynamically
const generateAdditionalProducts = (category: Category, startId: number, count: number): Product[] => {
  const baseProducts = {
    nuts: [
      { name: 'Roasted Peanuts', tagline: 'Classic crunch', image: almonds },
      { name: 'Brazil Nuts', tagline: 'Amazonian treasure', image: cashew },
      { name: 'Pecan Deluxe', tagline: 'Southern comfort', image: pisco },
      { name: 'Macadamia Premium', tagline: 'Hawaiian luxury', image: walnut },
      { name: 'Hazelnuts Supreme', tagline: 'European elegance', image: dates },
      { name: 'Pine Nuts', tagline: 'Mediterranean gold', image: mixed },
      { name: 'Chestnuts Roasted', tagline: 'Winter warmth', image: whitedates },
      { name: 'Dried Figs', tagline: 'Ancient sweetness', image: greenrasin }
    ],
    spices: [
      { name: 'Star Anise', tagline: 'Celestial flavor', image: saffron },
      { name: 'Cloves Premium', tagline: 'Aromatic intensity', image: cardamom },
      { name: 'Nutmeg Whole', tagline: 'Warm embrace', image: cinnamim },
      { name: 'Bay Leaves', tagline: 'Herbal essence', image: pepper },
      { name: 'Fennel Seeds', tagline: 'Licorice notes', image: turmeric },
      { name: 'Cumin Ground', tagline: 'Earthy depth', image: saffron },
      { name: 'Coriander Seeds', tagline: 'Citrus hint', image: cardamom },
      { name: 'Mustard Seeds', tagline: 'Pungent power', image: cinnamim }
    ]
  };

  const baseList = baseProducts[category];
  const additionalProducts: Product[] = [];

  for (let i = 0; i < count; i++) {
    const baseIndex = i % baseList.length;
    const baseProduct = baseList[baseIndex];
    additionalProducts.push({
      id: startId + i,
      name: baseProduct.name,
      tagline: baseProduct.tagline,
      image: baseProduct.image,
      price: `${(Math.random() * 50 + 10).toFixed(2)}`,
      description: `Premium quality ${baseProduct.name.toLowerCase()} sourced from the finest producers worldwide.`,
      rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10, // Random rating between 3.5-5.0
      featured: Math.random() > 0.8,
      luxury: Math.random() > 0.85
    });
  }

  return additionalProducts;
};

const ProductsPage = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState<Category>('nuts');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [is3DModalOpen, setIs3DModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [allProducts, setAllProducts] = useState<Record<Category, Product[]>>(products);
  const [displayedCount, setDisplayedCount] = useState<Record<Category, number>>({
    nuts: 4,
    spices: 3
  });
  const [isLoading, setIsLoading] = useState(false);

  const filteredProducts = allProducts[activeCategory]
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, displayedCount[activeCategory]);

  const totalAvailableProducts = allProducts[activeCategory].filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.tagline.toLowerCase().includes(searchTerm.toLowerCase())
  ).length;

  const hasMoreProducts = displayedCount[activeCategory] < totalAvailableProducts || totalAvailableProducts < 20;

  const handleQuickView = (product: Product) => {
    navigate('/quote')
  };

  const handleViewDetails = (product: Product) => {
    navigate(`/products/${product.id}`);
  };

  const handle3DView = (product: Product) => {
    setSelectedProduct(product);
    setIs3DModalOpen(true);
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const currentCount = displayedCount[activeCategory];
    const currentProductsLength = allProducts[activeCategory].length;
    
    // If we need more products, generate them
    if (currentCount >= currentProductsLength && currentProductsLength < 20) {
      const additionalProducts = generateAdditionalProducts(
        activeCategory, 
        currentProductsLength + (activeCategory === 'nuts' ? 1 : 9), 
        4
      );
      
      setAllProducts(prev => ({
        ...prev,
        [activeCategory]: [...prev[activeCategory], ...additionalProducts]
      }));
    }
    
    // Increase displayed count
    setDisplayedCount(prev => ({
      ...prev,
      [activeCategory]: Math.min(prev[activeCategory] + 4, 20) // Max 20 products per category
    }));
    
    setIsLoading(false);
  };

  // Reset displayed count when category changes
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setDisplayedCount(prev => ({
      ...prev,
      [category]: category === 'nuts' ? 4 : 3
    }));
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
  {/* Hero Section */}
  <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-red-600 text-white overflow-hidden">
    {/* Gradient Glow Layers */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-400/60 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-red-400/60 rounded-full blur-[120px]" />
      <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-amber-400/70 rounded-full blur-[90px]" />
    </div>

    <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center space-x-4 mb-8"
      >
        <Package className="w-14 h-14 sm:w-16 sm:h-16 text-amber-200 drop-shadow-xl" />
        <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl">
          Products
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-base sm:text-lg md:text-xl text-orange-50/90 max-w-3xl mx-auto leading-relaxed"
      >
        Discover our curated collection of <span className="font-semibold text-white">premium nuts, dry fruits, and exotic spices</span> — sourced globally for luxury, quality, and unforgettable taste.
      </motion.p>
    </div>
  </section>

  {/* Category Navigation */}
  <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-14">
    <div className="flex justify-center mb-12">
      <div className="flex bg-white/70 backdrop-blur-2xl rounded-full p-2 shadow-lg border border-orange-200/40">
        {[
          { key: "nuts", label: "Premium Nuts", icon: Star },
          { key: "spices", label: "Exotic Spices", icon: Package },
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => handleCategoryChange(key)}
            className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeCategory === key
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md shadow-orange-400/40"
                : "text-gray-600 hover:text-orange-600 hover:bg-orange-100/50"
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Search & Controls */}
  <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-14">
    <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mb-12">
      {/* Search */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="relative flex-1 sm:w-72 md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search premium products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-orange-200 shadow-md bg-white/80 backdrop-blur-lg focus:ring-2 focus:ring-orange-500/70 focus:border-transparent transition text-base"
          />
        </div>
        <button className="p-3 rounded-2xl border border-orange-200 text-orange-600 hover:bg-orange-100 transition bg-white/80 backdrop-blur-md shadow-md">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      {/* View Toggle */}
      <div className="flex border border-orange-200 rounded-2xl overflow-hidden shadow-md bg-white/80 backdrop-blur-md">
        {[
          { mode: "grid", icon: Grid },
          { mode: "list", icon: List },
        ].map(({ mode, icon: Icon }) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`p-3 transition-all ${
              viewMode === mode
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-inner"
                : "text-gray-600 hover:bg-orange-50"
            }`}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>

    {/* Products Grid */}
    <AnimatePresence mode="wait">
      <motion.div
        key={`${activeCategory}-${searchTerm}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className={`grid gap-10 ${
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1"
        }`}
      >
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group ${
              product.luxury
                ? "bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border border-orange-200"
                : "bg-white border border-gray-100"
            } ${viewMode === "list" ? "flex items-center" : ""}`}
          >
            {/* Luxury & Featured Tags */}
            {product.luxury && (
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md tracking-wide">
                  LUXURY
                </div>
              </div>
            )}
            {product.featured && (
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md animate-pulse">
                  FEATURED
                </div>
              </div>
            )}

            {/* Product Image */}
            <div
              className={`${
                viewMode === "list" ? "w-44 h-44 flex-shrink-0" : "h-64"
              } overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Product Info */}
            <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
              <h3 className="font-bold text-xl group-hover:text-orange-600 transition">
                {product.name}
              </h3>
              {product.rating && (
                <div className="flex items-center gap-1 mt-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-amber-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">
                    {product.rating}
                  </span>
                </div>
              )}
              <p className="text-gray-600 text-sm mb-2">{product.tagline}</p>
              {product.description && (
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
              )}

              {/* Actions */}
              <div className="mt-5 flex gap-3">
                <button
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-medium shadow-md transition-all"
                  onClick={() => handleQuickView(product)}
                >
                  Quote
                </button>
                <button
                  className="flex-1 px-4 py-3 border border-orange-300 text-orange-600 hover:bg-orange-100 rounded-xl font-medium transition"
                  onClick={() => handleViewDetails(product)}
                >
                  Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  </div>
</div>


  );
};

export default ProductsPage;