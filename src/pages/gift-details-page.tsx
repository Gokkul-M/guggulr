import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Plus, Minus, Gift, Heart, Share2, Package, Truck, Shield } from 'lucide-react';

// Import gift images
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


const GiftDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [customMessage, setCustomMessage] = useState('');

  // Comprehensive gift database - matches the GiftingPage database
  const giftsDatabase: { [key: number]: any } = {
    1: {
      id: 1,
      name: "Executive Premium Box",
      tagline: "Luxury nuts and dried fruits collection",
      rating: 4.9,
      reviews: 156,
      description: "Premium corporate gift box featuring hand-selected nuts, exotic dry fruits, and gourmet treats perfect for business relationships.",
      contents: ["Premium Almonds (200g)", "Cashew Delights (150g)", "Turkish Pistachios (100g)", "Medjool Dates (200g)", "Mixed Dry Fruits (150g)"],
      occasion: "Corporate Gifting, Business Events, Client Appreciation",
      packaging: "Premium wooden box with gold foil branding and silk ribbon",
      shelfLife: "12 months from manufacture date",
      origin: "Curated from multiple premium sources worldwide",
      sizes: ["Small", "Medium", "Large", "Extra Large"],
      customization: ["Custom message card", "Company branding", "Special packaging"],
      images: [gift1, gift1, gift1],
      featured: true,
      luxury: true
    },
    2: {
      id: 2,
      name: "Corporate Wellness Pack",
      tagline: "Healthy snacking for the workplace",
      rating: 4.7,
      reviews: 89,
      description: "Health-focused gift collection promoting wellness in the workplace with nutritious snacks and premium ingredients.",
      contents: ["Mixed Nuts (300g)", "Dried Fruits Medley (250g)", "Green Tea Bags (20 pcs)", "Honey Sticks (10 pcs)", "Granola Bars (6 pcs)"],
      occasion: "Employee Appreciation, Wellness Programs, Office Pantry",
      packaging: "Eco-friendly kraft box with wellness theme design",
      shelfLife: "8 months from manufacture date",
      origin: "Organic certified sources",
      sizes: ["Small", "Medium", "Large"],
      customization: ["Wellness message card", "Custom labels", "Portion control packs"],
      images: [gift2, gift2, gift2],
      featured: false,
      luxury: false
    },
    3: {
      id: 3,
      name: "Holiday Special",
      tagline: "Festive premium gift collection",
      rating: 4.8,
      reviews: 203,
      description: "Celebrate the holiday season with this festive collection of premium nuts, spices, and seasonal delights.",
      contents: ["Festive Mixed Nuts (400g)", "Christmas Dates (300g)", "Holiday Spice Mix (100g)", "Candied Fruits (200g)", "Premium Chocolates (150g)", "Herbal Tea Blend (50g)"],
      occasion: "Christmas, New Year, Holiday Parties, Family Gatherings",
      packaging: "Festive red and gold box with holiday ribbon and ornaments",
      shelfLife: "10 months from manufacture date",
      origin: "Premium international selection",
      sizes: ["Medium", "Large", "Extra Large", "Family Size"],
      customization: ["Holiday greeting card", "Family name engraving", "Gift wrapping options"],
      images: [gift3, gift3, gift3],
      featured: false,
      luxury: false
    },
    7: {
      id: 7,
      name: "Family Feast Box",
      tagline: "Perfect for family gatherings",
      rating: 4.6,
      reviews: 75,
      description: "A delightful collection designed for family moments, featuring everyone's favorite nuts and treats.",
      contents: ["Family Mix Nuts (500g)", "Assorted Dates (400g)", "Kids' Favorite Trail Mix (300g)", "Premium Dried Fruits (350g)", "Coconut Chips (200g)", "Honey Roasted Nuts (250g)"],
      occasion: "Family Reunions, Birthdays, Anniversaries, Weekend Treats",
      packaging: "Large family-style wooden crate with rope handles",
      shelfLife: "12 months from manufacture date",
      origin: "Family-friendly selections from trusted sources",
      sizes: ["Large", "Extra Large", "Family Size", "Mega Family"],
      customization: ["Family photo card", "Personal message", "Portion dividers"],
      images: [gift4, gift4, gift4],
      featured: true,
      luxury: false
    },
    8: {
      id: 8,
      name: "Birthday Surprise",
      tagline: "Sweet and savory birthday treats",
      rating: 4.4,
      reviews: 112,
      description: "Celebrate special birthdays with this curated mix of sweet dates, crunchy nuts, and festive flavors.",
      contents: ["Birthday Mix Nuts (250g)", "Chocolate Covered Dates (200g)", "Fruit & Nut Bark (150g)", "Party Trail Mix (300g)", "Gourmet Popcorn (100g)"],
      occasion: "Birthdays, Personal Celebrations, Milestone Events",
      packaging: "Colorful birthday-themed box with confetti and ribbon",
      shelfLife: "8 months from manufacture date",
      origin: "Premium birthday-special selection",
      sizes: ["Small", "Medium", "Large"],
      customization: ["Birthday message", "Age-specific treats", "Party decorations"],
      images: [gift5, gift5, gift5],
      featured: false,
      luxury: false
    },
    13: {
      id: 13,
      name: "Bridal Bliss Box",
      tagline: "Luxurious treats for the happy couple",
      rating: 5.0,
      reviews: 45,
      description: "An elegant wedding gift featuring the finest selection of luxury nuts, exotic spices, and premium treats.",
      contents: ["Rose Petals & Almonds (200g)", "Honey Glazed Walnuts (250g)", "Premium Saffron Dates (150g)", "Love Potion Trail Mix (300g)", "Wedding Spice Collection (100g)", "Champagne Truffles (100g)"],
      occasion: "Weddings, Engagement Parties, Bridal Showers, Anniversaries",
      packaging: "Elegant white and gold box with lace ribbon and pearl accents",
      shelfLife: "12 months from manufacture date",
      origin: "Romantic selections from premium sources",
      sizes: ["Medium", "Large", "Deluxe", "Royal"],
      customization: ["Wedding date engraving", "Couple's names", "Wedding colors theme"],
      images: [gift7, gift7, gift7],
      featured: true,
      luxury: true
    },
    14: {
      id: 14,
      name: "Business Elite Collection",
      tagline: "Professional excellence in gifting",
      rating: 4.8,
      reviews: 67,
      description: "Our most prestigious corporate gift featuring rare nuts, premium spices, and luxury packaging.",
      contents: ["Elite Mixed Nuts (400g)", "Imported Dates (300g)", "Luxury Spice Blend (150g)", "Premium Dried Fruits (250g)", "Gourmet Chocolates (200g)"],
      occasion: "Executive Gifting, VIP Clients, High-Value Business Relationships",
      packaging: "Luxury mahogany box with gold inlay and premium finishing",
      shelfLife: "15 months from manufacture date",
      origin: "Premium international selection",
      sizes: ["Medium", "Large", "Extra Large", "Executive"],
      customization: ["Company logo engraving", "Executive message card", "Premium wrapping"],
      images: [gift1, gift1, gift1],
      featured: true,
      luxury: true
    },
    15: {
      id: 15,
      name: "Office Delight Box",
      tagline: "Team building through taste",
      rating: 4.5,
      reviews: 94,
      description: "Perfect for office sharing, featuring a variety of healthy snacks and energy-boosting treats.",
      contents: ["Office Mix Nuts (350g)", "Energy Dates (250g)", "Trail Mix Varieties (300g)", "Dried Fruit Medley (200g)"],
      occasion: "Team Building, Office Events, Employee Appreciation",
      packaging: "Modern office-friendly box with easy sharing compartments",
      shelfLife: "10 months from manufacture date",
      origin: "Office-optimized selection",
      sizes: ["Small", "Medium", "Large", "Team Size"],
      customization: ["Team message", "Office branding", "Portion control"],
      images: [gift2, gift2, gift2],
      featured: false,
      luxury: false
    },
    16: {
      id: 16,
      name: "Friendship Special",
      tagline: "Bonds that taste amazing",
      rating: 4.3,
      reviews: 88,
      description: "Show your appreciation with this heartwarming collection of premium snacks and treats.",
      contents: ["Friendship Mix Nuts (300g)", "Sweet Dates (200g)", "Sharing Trail Mix (250g)", "Comfort Treats (150g)"],
      occasion: "Friendship Day, Thank You Gifts, Casual Appreciation",
      packaging: "Warm and colorful friendship-themed box",
      shelfLife: "8 months from manufacture date",
      origin: "Carefully selected for sharing",
      sizes: ["Small", "Medium", "Large"],
      customization: ["Friendship message", "Personal note", "Colorful wrapping"],
      images: [gift4, gift4, gift4],
      featured: false,
      luxury: false
    },
    17: {
      id: 17,
      name: "Anniversary Bliss",
      tagline: "Celebrating love and memories",
      rating: 4.7,
      reviews: 156,
      description: "Mark special anniversaries with this romantic collection of gourmet treats and luxury items.",
      contents: ["Anniversary Nuts (300g)", "Romantic Dates (250g)", "Love Blend Mix (200g)", "Special Treats (150g)"],
      occasion: "Anniversaries, Romantic Occasions, Love Celebrations",
      packaging: "Elegant anniversary box with romantic design",
      shelfLife: "12 months from manufacture date",
      origin: "Romantic selection from premium sources",
      sizes: ["Medium", "Large", "Deluxe"],
      customization: ["Anniversary date engraving", "Love message", "Romantic wrapping"],
      images: [gift5, gift5, gift5],
      featured: true,
      luxury: true
    },
    18: {
      id: 18,
      name: "Celebration Elegance",
      tagline: "Sophisticated wedding collection",
      rating: 4.6,
      reviews: 78,
      description: "Perfect for wedding celebrations, featuring sophisticated flavors and beautiful presentation.",
      contents: ["Elegant Nuts (350g)", "Wedding Dates (300g)", "Celebration Mix (250g)", "Premium Treats (200g)"],
      occasion: "Weddings, Engagement Parties, Elegant Celebrations",
      packaging: "Sophisticated wedding-themed elegant box",
      shelfLife: "12 months from manufacture date",
      origin: "Premium wedding selection",
      sizes: ["Medium", "Large", "Extra Large"],
      customization: ["Wedding theme", "Couple names", "Elegant wrapping"],
      images: [gift3, gift3, gift3],
      featured: false,
      luxury: true
    },
    19: {
      id: 19,
      name: "Unity Hamper",
      tagline: "Two hearts, one perfect gift",
      rating: 4.9,
      reviews: 92,
      description: "Symbolize unity with this beautiful hamper designed for newlyweds and special couples.",
      contents: ["Unity Nuts (400g)", "Couple's Dates (350g)", "Harmony Mix (300g)", "Unity Treats (250g)"],
      occasion: "Weddings, Unity Ceremonies, Couple Celebrations",
      packaging: "Beautiful unity-themed hamper with dual compartments",
      shelfLife: "15 months from manufacture date",
      origin: "Premium couple's selection",
      sizes: ["Large", "Extra Large", "Unity Special"],
      customization: ["Unity ceremony date", "Couple's names", "Special blessing"],
      images: [gift7, gift7, gift7],
      featured: true,
      luxury: true
    }
  };

  const product = giftsDatabase[parseInt(id || '1')];

  // Handle case where gift is not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gift Not Found</h1>
          <p className="text-gray-600 mb-6">The gift you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/gifting')}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl"
          >
            Back to Gifts
          </button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
  {/* Header */}
  <div className="bg-white/70 backdrop-blur-md border-b border-orange-200/50 sticky top-16 z-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="text-sm sm:text-base">Back to Gifts</span>
      </button>
    </div>
  </div>

  {/* Gift Details */}
  <section className="py-10 sm:py-14">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        {/* Left: Product Images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          {/* Main Image */}
          <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-xl">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {product.images.map((image: string, index: number) => (
              <div
                key={index}
                className="aspect-square bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:ring-2 hover:ring-orange-400 transition-all"
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Title & Tagline */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">{product.tagline}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                />
              ))}
            </div>
            <span className="text-sm sm:text-base text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Labels */}
          <div className="flex items-center space-x-3">
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${product.luxury
                  ? 'bg-amber-100 text-amber-600'
                  : product.featured
                    ? 'bg-green-100 text-green-600'
                    : 'bg-blue-100 text-blue-600'
                }`}
            >
              {product.luxury ? 'Luxury Gift' : product.featured ? 'Featured Gift' : 'Premium Gift'}
            </span>
          </div>

          {/* Size Selector */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {product.sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 sm:py-3 rounded-lg text-sm font-medium transition-all ${selectedSize === size
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-orange-50 border border-gray-200'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Buttons */}
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-5">
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-3 hover:bg-gray-100 rounded-l-lg"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 py-2 text-lg font-medium text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-3 hover:bg-gray-100 rounded-r-lg"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-lg sm:text-xl font-bold text-gray-900">
                  {quantity} {selectedSize} Box{quantity > 1 ? 'es' : ''}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="flex-1 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-medium flex items-center justify-center"
                onClick={() => alert('🎁 Gift customization request coming soon!')}
              >
                <Gift className="w-5 h-5 mr-2" />
                Customize Gift
              </button>
              <button className="px-4 py-4 border border-orange-300 text-orange-600 hover:bg-orange-50 rounded-xl">
                <Heart className="w-5 h-5" />
              </button>
              <button className="px-4 py-4 border border-orange-300 text-orange-600 hover:bg-orange-50 rounded-xl">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-orange-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* Gift Services */}
  <section className="py-10 sm:py-14 bg-gradient-to-t from-white/60 to-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <Package className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Packaging</h3>
          <p className="text-gray-600 text-sm">Beautiful presentation with personalized touches</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <Truck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Express Delivery</h3>
          <p className="text-gray-600 text-sm">Fast and reliable gift delivery service</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Guarantee</h3>
          <p className="text-gray-600 text-sm">100% satisfaction guarantee on all gifts</p>
        </motion.div>
      </div>
    </div>
  </section>
</div>

  );
};

export default GiftDetailsPage;
