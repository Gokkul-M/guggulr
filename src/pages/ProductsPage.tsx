import React, { useState, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, Package, Star, Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// Import images

import almonds from '../assets/products/Almonds.png';
import fourPieceCashews from '../assets/products/4-piece Cashews.png';
import bambooRice from '../assets/products/Bamboo Rice.png';
import blackDates from '../assets/products/Black Dates.png';
import blackRaisinsWithSeeds from '../assets/products/Black Raisins with Seed.png';
import brokenCashews from '../assets/products/Broken Cashews.png';
import cakeSeeds from '../assets/products/Cake Seeds.png';
import cherry from '../assets/products/Cherry.png';
import chiaSeed from '../assets/products/Chia seed.png'; // fixed variable name
import driedAmla from '../assets/products/Dried Amla.png';
import dryDates from '../assets/products/Dry Dates.png';
import fennelSeeds from '../assets/products/Fennel Seeds.png';
import fenugreekSeeds from '../assets/products/Fenugreek Seeds.png';
import fig from '../assets/products/Fig.png';
import foxtailMillet from '../assets/products/foxtail millet.png';
import greenRaisinsType1 from '../assets/products/Green Raisins (Type 1).png';
import kasuriMethi from '../assets/products/Kasuri Methi.png';
import kodoMillet from '../assets/products/Kodo Millet.png';
import kokum from '../assets/products/Kokum.png';
import masalaCashew from '../assets/products/Masala Cashew.png';
import mixedDryfruits from '../assets/products/Mixed Dry fruits.png';
import palmJaggery from '../assets/products/Palm Jaggery.png';
import pepper from '../assets/products/Pepper.png';
import pepperCashew from '../assets/products/Pepper Cashew.png';
import pistachios from '../assets/products/Pistachios.png';
import poppySeeds from '../assets/products/Poppy Seeds.png';
import pumpkinSeeds from '../assets/products/Pumpkin Seeds.png';
import redRice from '../assets/products/Red Rice.png';
import saffron from '../assets/products/Saffron.png';
import saltCashew from '../assets/products/Salt Cashew.png';
import singaporeCinnamon from '../assets/products/Singapore Cinnamon.png';
import sunflowerSeeds from '../assets/products/Sunflower Seeds.png';
import turmericStick from '../assets/products/Turmeric Stick.png';
import walnutKernels from '../assets/products/Walnut (kernels).png';
import walnutShell from '../assets/products/Walnut (Shell).png';
import watermelonSeeds from '../assets/products/Watermelon Seeds.png';
import whiteDates from '../assets/products/White Dates.png';
import wildCardamom from '../assets/products/Wild Cardamom.png';
import wholeCashews from '../assets/products/Whole Cashews.png';


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
const products: Record<"nutsDryfruits" | "spicesSeedsGrains", Product[]> = {
  nuts: [
    { id: 1, name: 'Premium Almonds', tagline: 'California\'s finest', image: almonds, price: '$24.99', description: 'Rich in vitamin E and protein.', rating: 4.8, featured: true },
    { id: 2, name: 'Cashew Delight', tagline: 'Creamy & nutritious', image: wholeCashews, price: '$32.99', description: 'Buttery roasted cashews.', rating: 4.9 },
    { id: 3, name: 'Broken Cashews', tagline: 'Perfect for cooking', image: brokenCashews, price: '$18.99', description: 'Economical broken cashew pieces.', rating: 4.4 },
    { id: 4, name: 'Masala Cashew', tagline: 'Spiced to perfection', image: masalaCashew, price: '$28.99', description: 'Cashews coated with spicy masala.', rating: 4.6 },
    { id: 5, name: 'Pepper Cashew', tagline: 'Fiery crunch', image: pepperCashew, price: '$29.99', description: 'Cashews with a peppery kick.', rating: 4.5 },
    { id: 6, name: 'Salted Cashew', tagline: 'Classic flavor', image: saltCashew, price: '$27.99', description: 'Lightly salted premium cashews.', rating: 4.4 },
    { id: 7, name: 'Whole Cashews', tagline: 'Luxury nuts', image: wholeCashews, price: '$34.99', description: 'Whole cashew kernels of the highest quality.', rating: 4.9, luxury: true },
    { id: 8, name: 'Pistachios', tagline: 'Green goodness', image: pistachios, price: '$30.99', description: 'Fresh roasted pistachios.', rating: 4.7 },
    { id: 9, name: 'Black Dates', tagline: 'Rich & sweet', image: blackDates, price: '$19.99', description: 'Nutrient-dense black dates.', rating: 4.5 },
    { id: 10, name: 'Dry Dates', tagline: 'Natural sweetness', image: dryDates, price: '$17.99', description: 'Naturally dried dates.', rating: 4.3 },
    { id: 11, name: 'White Dates', tagline: 'Exotic taste', image: whiteDates, price: '$22.99', description: 'Exotic white dates with a unique flavor.', rating: 4.4 },
    { id: 12, name: 'Black Raisins', tagline: 'With seeds', image: blackRaisinsWithSeeds, price: '$15.99', description: 'Black raisins rich in iron.', rating: 4.2 },
    { id: 13, name: 'Green Raisins', tagline: 'Sweet & tangy', image: greenRaisinsType1, price: '$16.99', description: 'Premium green raisins.', rating: 4.3 },
    { id: 14, name: 'Mixed Dry Fruits', tagline: 'Nutritious mix', image: mixedDryfruits, price: '$35.99', description: 'Balanced mix of dry fruits.', rating: 4.6 },
    { id: 15, name: 'Dried Amla', tagline: 'Vitamin C boost', image: driedAmla, price: '$14.99', description: 'Sun-dried Indian gooseberry.', rating: 4.1 },
    { id: 16, name: 'Fig', tagline: 'Ancient sweetness', image: fig, price: '$21.99', description: 'Naturally sweet dried figs.', rating: 4.5 },
    { id: 17, name: 'Cherry', tagline: 'Tangy delight', image: cherry, price: '$25.99', description: 'Dried cherries packed with antioxidants.', rating: 4.4 },
    { id: 38, name: 'Walnut Kernels', tagline: 'Brain booster', image: walnutKernels, price: '$26.99', description: 'Omega-3 rich walnut halves.', rating: 4.6 },
    { id: 39, name: 'Walnut Shell', tagline: 'Traditional use', image: walnutShell, price: '$9.99', description: 'Whole walnut with shell.', rating: 4.0 }
  ],
  
  spices: [
    { id: 18, name: 'Chia Seeds', tagline: 'Superfood energy', image: chiaSeed, price: '$12.99', description: 'Omega-3 and fiber rich chia.', rating: 4.6, featured: true },
    { id: 19, name: 'Cake Seeds', tagline: 'Baking essential', image: cakeSeeds, price: '$9.99', description: 'Perfect for desserts and baking.', rating: 4.2 },
    { id: 20, name: 'Fennel Seeds', tagline: 'Digestive aid', image: fennelSeeds, price: '$8.99', description: 'Sweet and aromatic fennel.', rating: 4.4 },
    { id: 21, name: 'Fenugreek Seeds', tagline: 'Ayurvedic herb', image: fenugreekSeeds, price: '$7.99', description: 'Healthy fenugreek seeds.', rating: 4.3 },
    { id: 22, name: 'Poppy Seeds', tagline: 'Nutty flavor', image: poppySeeds, price: '$13.99', description: 'Tiny seeds with rich taste.', rating: 4.2 },
    { id: 23, name: 'Pumpkin Seeds', tagline: 'Protein power', image: pumpkinSeeds, price: '$14.99', description: 'Roasted pumpkin seeds.', rating: 4.5 },
    { id: 24, name: 'Sunflower Seeds', tagline: 'Light snack', image: sunflowerSeeds, price: '$11.99', description: 'Crispy sunflower seeds.', rating: 4.3 },
    { id: 25, name: 'Watermelon Seeds', tagline: 'Unique crunch', image: watermelonSeeds, price: '$10.99', description: 'Nutritious roasted seeds.', rating: 4.1 },
    { id: 26, name: 'Saffron Gold', tagline: 'Kashmir\'s treasure', image: saffron, price: '$89.99', description: 'Pure Kashmiri saffron threads.', rating: 5.0, featured: true, luxury: true },
    { id: 27, name: 'Wild Cardamom', tagline: 'Queen of spices', image: wildCardamom, price: '$45.99', description: 'Premium aromatic cardamom.', rating: 4.8, luxury: true },
    { id: 28, name: 'Singapore Cinnamon', tagline: 'Sweet & woody', image: singaporeCinnamon, price: '$12.99', description: 'Exotic cinnamon bark.', rating: 4.6 },
    { id: 29, name: 'Black Pepper Premium', tagline: 'Spicy punch', image: pepper, price: '$15.99', description: 'Fresh black peppercorns.', rating: 4.7 },
    { id: 30, name: 'Turmeric Stick', tagline: 'Golden spice', image: turmericStick, price: '$8.99', description: 'Raw turmeric sticks.', rating: 4.5 },
    { id: 31, name: 'Kasuri Methi', tagline: 'Flavorful herb', image: kasuriMethi, price: '$6.99', description: 'Dried fenugreek leaves.', rating: 4.2 },
    { id: 32, name: 'Kokum', tagline: 'Traditional souring agent', image: kokum, price: '$9.99', description: 'Tropical kokum fruit.', rating: 4.0 },
    { id: 33, name: 'Bamboo Rice', tagline: 'Rare & exotic', image: bambooRice, price: '$19.99', description: 'Unique bamboo rice grains.', rating: 4.2 },
    { id: 34, name: 'Foxtail Millet', tagline: 'Gluten free', image: foxtailMillet, price: '$13.99', description: 'Healthy foxtail millet grains.', rating: 4.4 },
    { id: 35, name: 'Kodo Millet', tagline: 'Ancient grain', image: kodoMillet, price: '$12.99', description: 'Nutritious kodo millet.', rating: 4.3 },
    { id: 36, name: 'Red Rice', tagline: 'Fiber rich', image: redRice, price: '$14.99', description: 'Naturally red rice.', rating: 4.5 },
    { id: 37, name: 'Palm Jaggery', tagline: 'Natural sweetener', image: palmJaggery, price: '$15.99', description: 'Unrefined jaggery from palm.', rating: 4.4 }
  ]
};

const ProductsPage = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState<Category>('nuts');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  const [allProducts, setAllProducts] = useState<Record<Category, Product[]>>(products);
  const [displayedCount, setDisplayedCount] = useState<Record<Category, number>>({
    nuts: 4,
    spices: 3
  });
  const [isLoading, setIsLoading] = useState(false);

  const filteredProducts = products[activeCategory].filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      newFavorites.has(productId)
        ? newFavorites.delete(productId)
        : newFavorites.add(productId);
      return newFavorites;
    });
  };
   const handleQuickView = (product: Product) => {
    navigate('/quote')
  };

  const handleViewDetails = (product: Product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-glow/60 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-luxury/60 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-accent/70 rounded-full blur-[90px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <Package className="w-14 h-14 sm:w-16 sm:h-16 text-accent/80 drop-shadow-xl" />
            <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl">
              Premium Products
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our curated collection of{' '}
            <span className="font-semibold text-accent">
              premium nuts, dry fruits, and exotic spices
            </span>{' '}
            — sourced globally for luxury, quality, and unforgettable taste.
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-14">
        <div className="flex justify-center mb-12">
          <div className="flex glass-warm rounded-full p-2 shadow-premium border border-primary/20">
            {[
              { key: 'nuts' as Category, label: 'Premium Nuts', icon: Star },
              { key: 'spices' as Category, label: 'Exotic Spices', icon: Package },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition-premium ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md shadow-orange-400/40'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-100/50'
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
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search premium products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-border shadow-soft glass-warm focus:ring-2 focus:ring-primary/70 focus:border-transparent transition-premium text-base"
              />
            </div>
            <button className="p-3 rounded-2xl border border-border text-primary hover:bg-accent/50 transition-premium glass-warm shadow-soft">
              <Filter className="w-5 h-5" />
            </button>
          </div>

          {/* View Toggle */}
          <div className="flex border border-orange-200 rounded-2xl overflow-hidden shadow-md bg-white/80 backdrop-blur-md">
            {[
              { mode: 'grid' as const, icon: Grid },
              { mode: 'list' as const, icon: List },
            ].map(({ mode, icon: Icon }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`p-3 transition-premium ${
                  viewMode === mode
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-inner'
                    : 'text-gray-600 hover:bg-orange-50'
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
            className={`grid gap-8 ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1'
            }`}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
  key={product.id}
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  className={`relative overflow-hidden rounded-3xl shadow-soft hover-lift transition-premium cursor-pointer group ${
    product.luxury
      ? 'bg-gradient-luxury border border-luxury/30'
      : 'bg-card border border-border'
  } ${viewMode === 'list' ? 'flex items-center' : 'flex flex-col'}`} // make column flex
>
  {/* Luxury & Featured Tags */}
  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
    {product.luxury && (
      <div className="bg-gradient-luxury text-luxury-foreground px-3 py-1 rounded-full text-xs font-bold shadow-soft tracking-wide">
        LUXURY
      </div>
    )}
    {product.featured && (
      <div className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-soft animate-pulse">
        FEATURED
      </div>
    )}
  </div>

  {/* Favorite Button */}
  <button
    onClick={() => toggleFavorite(product.id)}
    className="absolute top-4 left-4 z-10 p-2 rounded-full glass hover:bg-white/20 transition-premium"
  >
    <Heart
      className={`w-4 h-4 ${
        favorites.has(product.id)
          ? 'text-red-500 fill-current'
          : 'text-white/70'
      }`}
    />
  </button>

  {/* Product Image */}
  <div
    className={`${
      viewMode === 'list' ? 'w-44 h-44 flex-shrink-0' : 'h-64'
    } overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20`}
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover group-hover:scale-110 transition-premium"
      loading="lazy"
    />
  </div>

  {/* Product Info */}
  <div className={`p-6 flex flex-col flex-1 ${viewMode === 'list' ? 'flex-1' : ''}`}>
    <h3 className="font-bold text-xl group-hover:text-primary transition-premium mb-2">
      {product.name}
    </h3>

    {/* Rating */}
    <div className="flex items-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(product.rating)
              ? 'text-luxury fill-current'
              : 'text-muted'
          }`}
        />
      ))}
      <span className="text-sm text-muted-foreground ml-1">
        {product.rating}
      </span>
    </div>

    <p className="text-muted-foreground text-sm mb-2 font-medium">
      {product.tagline}
    </p>
    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
      {product.description}
    </p>

    {/* Actions fixed at bottom */}
    <div className="mt-auto flex gap-3 pt-5">
      <button
        className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 
                  hover:from-orange-600 hover:to-red-600 text-white 
                  rounded-xl font-medium shadow-md transition-all"
        onClick={() => handleQuickView(product)}
      >
        Quote
      </button>

      <button
        className="flex-1 px-4 py-3 border border-orange-300 text-orange-600 
                  hover:bg-orange-100 rounded-xl font-medium transition"
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

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Package className="w-16 h-16 text-muted mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              No products found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse different categories.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;