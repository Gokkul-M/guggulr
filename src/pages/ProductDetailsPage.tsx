
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Plus, Minus, Mail, Heart, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';

// Import product images
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
import gift1 from '../assets/Gifts_Website/1.png';
import gift2 from '../assets/Gifts_Website/2.png';
import gift3 from '../assets/Gifts_Website/3.png';
import gift4 from '../assets/Gifts_Website/4.png';
import gift5 from '../assets/Gifts_Website/5.png';
import gift6 from '../assets/Gifts_Website/6.png';
import gift7 from '../assets/Gifts_Website/7.png';
import gift8 from '../assets/Gifts_Website/8.png';
import gift9 from '../assets/Gifts_Website/9.png';
import gift10 from '../assets/Gifts_Website/10.png';
import gift11 from '../assets/Gifts_Website/11.png';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('500g');

  // Comprehensive product database
  const productsDatabase = {
    1: {
      id: 1,
      name: "Premium Almonds",
      tagline: "California's finest",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviews: 156,
      description: "Our premium almonds are sourced directly from California's finest farms. These nutrient-rich nuts are perfect for snacking, baking, or adding to your favorite recipes. Packed with protein, healthy fats, and essential vitamins.",
      nutritionFacts: { calories: 160, protein: "6g", fat: "14g", carbs: "6g", fiber: "4g" },
      ingredients: "100% Raw Almonds",
      storage: "Store in a cool, dry place. Refrigerate after opening.",
      origin: "California, USA",
      weights: ["250g", "500g", "1kg", "2kg"],
      images: [almonds, almonds]
    },
    2: {
      id: 2,
      name: "Cashew Delight",
      tagline: "Creamy & nutritious",
      price: 32.99,
      originalPrice: 38.99,
      rating: 4.7,
      reviews: 89,
      description: "Premium cashews with a creamy texture and rich taste. Perfect for snacking or cooking. These cashews are carefully selected and processed to maintain their natural flavor and nutritional value.",
      nutritionFacts: { calories: 157, protein: "5g", fat: "12g", carbs: "9g", fiber: "1g" },
      ingredients: "100% Raw Cashews",
      storage: "Store in a cool, dry place. Best consumed within 6 months.",
      origin: "Vietnam",
      weights: ["250g", "500g", "1kg"],
      images: [cashew, cashew]
    },
    3: {
      id: 3,
      name: "Pistachio Paradise",
      tagline: "Turkish excellence",
      price: 45.99,
      originalPrice: 52.99,
      rating: 4.9,
      reviews: 203,
      description: "Authentic Turkish pistachios with superior taste and quality. These premium nuts are naturally opened and ready to enjoy. Rich in healthy fats, protein, and essential minerals.",
      nutritionFacts: { calories: 159, protein: "6g", fat: "13g", carbs: "8g", fiber: "3g" },
      ingredients: "100% Turkish Pistachios",
      storage: "Store in airtight container. Keep away from direct sunlight.",
      origin: "Turkey",
      weights: ["250g", "500g", "1kg", "2kg"],
      images: [pisco, pisco]
    },
    4: {
      id: 4,
      name: "Walnut Wonder",
      tagline: "Brain food supreme",
      price: 28.99,
      originalPrice: 34.99,
      rating: 4.6,
      reviews: 127,
      description: "Fresh walnut kernels packed with omega-3 fatty acids. Known as brain food, these walnuts are perfect for healthy snacking and cooking. Rich in antioxidants and essential nutrients.",
      nutritionFacts: { calories: 185, protein: "4g", fat: "18g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Walnut Kernels",
      storage: "Refrigerate for longer freshness. Use within 12 months.",
      origin: "California, USA",
      weights: ["250g", "500g", "1kg"],
      images: [walnut, walnut]
    },
    5: {
      id: 5,
      name: "Date Delights",
      tagline: "Nature's candy",
      price: 18.99,
      originalPrice: 22.99,
      rating: 4.8,
      reviews: 168,
      description: "Succulent black dates that are nature's perfect sweetener. These dates are soft, chewy, and naturally sweet. Rich in fiber, potassium, and antioxidants.",
      nutritionFacts: { calories: 66, protein: "0.4g", fat: "0.1g", carbs: "18g", fiber: "1.6g" },
      ingredients: "100% Natural Black Dates",
      storage: "Store in cool, dry place. No refrigeration needed.",
      origin: "Iran",
      weights: ["500g", "1kg", "2kg"],
      images: [dates, dates]
    },
    6: {
      id: 6,
      name: "Mixed Nuts Premium",
      tagline: "Perfect combination",
      price: 35.99,
      originalPrice: 42.99,
      rating: 4.7,
      reviews: 94,
      description: "A carefully curated mix of premium nuts including almonds, cashews, walnuts, and pistachios. Perfect for gifting or enjoying a variety of flavors and textures in one package.",
      nutritionFacts: { calories: 170, protein: "6g", fat: "15g", carbs: "7g", fiber: "3g" },
      ingredients: "Almonds, Cashews, Walnuts, Pistachios",
      storage: "Store in airtight container in cool, dry place.",
      origin: "Mixed Origins",
      weights: ["500g", "1kg", "2kg"],
      images: [mixed, mixed]
    },
    7: {
      id: 7,
      name: "White Dates Delights",
      tagline: "Rich & crunchy",
      price: 22.99,
      originalPrice: 27.99,
      rating: 4.5,
      reviews: 75,
      description: "Premium white dates with a unique texture and mild sweetness. These dates are dried to perfection and offer a delightful crunch. Rich in natural sugars and minerals.",
      nutritionFacts: { calories: 63, protein: "0.5g", fat: "0.1g", carbs: "17g", fiber: "1.5g" },
      ingredients: "100% Natural White Dates",
      storage: "Store in cool, dry place away from moisture.",
      origin: "Tunisia",
      weights: ["500g", "1kg"],
      images: [whitedates, whitedates]
    },
    8: {
      id: 8,
      name: "Green Raisins",
      tagline: "Sweet & tangy",
      price: 16.99,
      originalPrice: 20.99,
      rating: 4.4,
      reviews: 112,
      description: "Premium green raisins with a perfect balance of sweetness and tanginess. These raisins are naturally dried and preserve the grape's original flavor and nutritional benefits.",
      nutritionFacts: { calories: 85, protein: "1g", fat: "0.1g", carbs: "22g", fiber: "1g" },
      ingredients: "100% Green Grapes (Dried)",
      storage: "Store in airtight container. Keep in cool, dry place.",
      origin: "Iran",
      weights: ["250g", "500g", "1kg"],
      images: [greenrasin, greenrasin]
    },
    9: {
      id: 9,
      name: "Saffron Gold",
      tagline: "Kashmir's treasure",
      price: 89.99,
      originalPrice: 105.99,
      rating: 5.0,
      reviews: 45,
      description: "Authentic Kashmiri saffron, the world's most precious spice. Hand-picked from the fields of Kashmir, this saffron offers an unmatched aroma, flavor, and color. Perfect for traditional dishes and beverages.",
      nutritionFacts: { calories: 7, protein: "0.2g", fat: "0.1g", carbs: "1.4g", fiber: "0.1g" },
      ingredients: "100% Pure Kashmiri Saffron",
      storage: "Store in airtight container away from light and heat.",
      origin: "Kashmir, India",
      weights: ["1g", "5g", "10g"],
      images: [saffron, saffron]
    },
    10: {
      id: 10,
      name: "Cardamom Elite",
      tagline: "Queen of spices",
      price: 42.99,
      originalPrice: 48.99,
      rating: 4.8,
      reviews: 67,
      description: "Premium wild cardamom with intense aroma and flavor. Known as the queen of spices, this cardamom is perfect for both sweet and savory dishes. Harvested from wild plants for superior quality.",
      nutritionFacts: { calories: 18, protein: "0.6g", fat: "0.4g", carbs: "4g", fiber: "1.6g" },
      ingredients: "100% Wild Cardamom Pods",
      storage: "Store in airtight container to preserve aroma.",
      origin: "Guatemala",
      weights: ["50g", "100g", "250g"],
      images: [cardamom, cardamom]
    },
    11: {
      id: 11,
      name: "Cinnamon Bark",
      tagline: "Sweet & aromatic",
      price: 25.99,
      originalPrice: 30.99,
      rating: 4.6,
      reviews: 88,
      description: "Authentic Singapore cinnamon bark with sweet and aromatic properties. This premium cinnamon is perfect for baking, cooking, and making aromatic beverages. Rich in antioxidants and natural oils.",
      nutritionFacts: { calories: 19, protein: "0.3g", fat: "0.1g", carbs: "6g", fiber: "4g" },
      ingredients: "100% Singapore Cinnamon Bark",
      storage: "Store in dry place away from direct sunlight.",
      origin: "Singapore",
      weights: ["100g", "250g", "500g"],
      images: [cinnamim, cinnamim]
    },
    12: {
      id: 12,
      name: "Black Pepper Premium",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Premium black pepper, the king of spices. These peppercorns are carefully selected for their bold flavor and pungency. Perfect for seasoning and adding heat to any dish.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [pepper, pepper]
    },
    13: {
      id: 13,
      name: "Turmeric Gold",
      tagline: "Golden healing",
      price: 14.99,
      originalPrice: 18.99,
      rating: 4.5,
      reviews: 156,
      description: "Premium turmeric sticks with high curcumin content. Known for its healing properties and vibrant color. Perfect for traditional cooking and health beverages. Anti-inflammatory and antioxidant rich.",
      nutritionFacts: { calories: 24, protein: "1g", fat: "0.7g", carbs: "4g", fiber: "1.4g" },
      ingredients: "100% Pure Turmeric Sticks",
      storage: "Store in dry place away from moisture and light.",
      origin: "Tamil Nadu, India",
      weights: ["100g", "250g", "500g"],
      images: [turmeric, turmeric]
    },
    
    
  };

  const product = productsDatabase[parseInt(id || '1')];

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/products')} className="bg-gradient-to-r from-orange-500 to-red-500">
            Back to Products
          </Button>
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-orange-200/50 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-medium">Back to Products</span>
          </button>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-orange-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
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

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Title & Rating */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                  {product.name}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-4">{product.tagline}</p>
                
                <div className="flex items-center space-x-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm sm:text-base text-gray-600 ml-2">
                    {product.rating} • {product.reviews} reviews
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full shadow-md">
                    <span className="text-lg font-semibold">Ask for Quote</span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                    Premium Quality
                  </span>
                </div>
              </div>

              {/* Weight Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Weight</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {product.weights.map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all ${
                        selectedWeight === weight
                          ? "bg-orange-500 text-white shadow-lg"
                          : "bg-white border border-gray-200 text-gray-700 hover:bg-orange-50"
                      }`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Quantity</h3>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center border border-gray-200 rounded-lg shadow-sm">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-3 hover:bg-gray-100 rounded-l-lg transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 py-3 text-lg font-medium text-center">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-3 hover:bg-gray-100 rounded-r-lg transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">
                    {quantity} × {selectedWeight}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-md"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Request Quote
                </Button>
                <Button variant="outline" size="lg" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Description */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-orange-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extra Info */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-white via-orange-50 to-yellow-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Nutrition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border border-orange-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutrition Facts</h3>
              <div className="space-y-2">
                {Object.entries(product.nutritionFacts).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-600 capitalize">{key}:</span>
                    <span className="font-medium">{String(value)}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border border-orange-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
              <div className="space-y-3 text-sm">
                <p><span className="text-gray-600">Ingredients: </span><span className="font-medium">{product.ingredients}</span></p>
                <p><span className="text-gray-600">Origin: </span><span className="font-medium">{product.origin}</span></p>
              </div>
            </motion.div>

            {/* Storage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border border-orange-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Storage</h3>
              <p className="text-gray-600 text-sm">{product.storage}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;