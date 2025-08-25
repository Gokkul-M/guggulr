import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Gift, Leaf, Truck, CheckCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Marquee } from "../components/Marquee";
import almonds from '../assets/Almonds.png';
import cashew from '../assets/4-piece Cashews.png';
import mixed from '../assets/Mixed Dry fruits.png';
import walnut from '../assets/Walnut (kernels).png';
import pisco from '../assets/Pistachios.png';
import pepper from '../assets/Pepper.png';
import turmeric from '../assets/Turmeric Stick.png';
import cardamom from '../assets/Wild Cardamom.png';
import cinnamon from '../assets/Singapore Cinnamon.png';
import saffron from '../assets/Saffron.png';
import heroBg from "../assets/home.png";
import mobileHeroBg from "../assets/mobile.png";
import WhyChooseSection from "../components/bento-grid"
import gift1 from "../assets/Gifts_Website/1.jpeg"
import gift2 from "../assets/Gifts_Website/2.jpeg"
import gift3 from "../assets/Gifts_Website/3.jpeg"
import gift4 from "../assets/Gifts_Website/4.jpeg"
import gift5 from "../assets/Gifts_Website/5.jpeg"
import gift6 from "../assets/Gifts_Website/6.jpeg"
import gift7 from "../assets/Gifts_Website/7.jpeg"

// Button Component (No changes, included for completeness)
const Button = ({ children, className = "", variant = "default", size = "md", onClick, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default: "bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-500",
    outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white focus:ring-orange-500",
    explore: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const AutoSlideshow = ({ items, renderItem, autoSlideInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, autoSlideInterval);
      return () => clearInterval(interval);
    }
  }, [items.length, autoSlideInterval, isHovered]);

  const getVisibleItems = () => {
    const totalItems = items.length;
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;

    return [
      { item: items[prevIndex], position: 'prev' },
      { item: items[currentIndex], position: 'current' },
      { item: items[nextIndex], position: 'next' }
    ];
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px] px-2 sm:px-4">
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-8 w-full max-w-6xl">
          {getVisibleItems().map(({ item, position }) => (
            <motion.div
              key={`${currentIndex}-${position}`}
              className={`
                ${position === 'current' ? 'scale-100 opacity-100 z-10' : 'scale-75 opacity-40 z-0'}
                ${position === 'prev' ? 'transform -translate-x-1 sm:-translate-x-2 md:-translate-x-4' : ''}
                ${position === 'next' ? 'transform translate-x-1 sm:translate-x-2 md:translate-x-4' : ''}
                transition-all duration-500 ease-in-out flex-shrink-0
              `}
              style={{
                width: position === 'current'
                  ? 'min(400px, 90vw)'
                  : 'min(300px, 70vw)',
                maxWidth: position === 'current' ? '400px' : '300px'
              }}
            >
              {renderItem(item, position === 'current')}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-orange-500 scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const CountUpAnimation = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const startTime = Date.now();

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress === 1) {
        clearInterval(timer);
        setHasAnimated(true);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, hasAnimated]);

  return <span>{count}{suffix}</span>;
};



const InteractiveMarquee = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const interactiveCards = [
    { id: 1, name: "Premium Almonds", price: "$24.99", emoji: "🥜", description: "California's finest almonds with rich, buttery flavor", category: "Nuts", details: "Hand-selected premium California almonds, roasted to perfection. Rich in vitamin E, magnesium, and healthy fats. Perfect for snacking or cooking." },
    { id: 2, name: "Cashew Supreme", price: "$32.99", emoji: "🥜", description: "Creamy cashews from Kerala's best farms", category: "Nuts", details: "Premium cashews sourced directly from Kerala farms. Naturally sweet and creamy texture. High in copper, magnesium, and plant-based protein." },
    { id: 3, name: "Golden Pistachios", price: "$28.99", emoji: "🥜", description: "Turkish pistachios with natural crunch", category: "Nuts", details: "Authentic Turkish pistachios with distinctive flavor. Rich in antioxidants, fiber, and healthy fats. Naturally opened for easy snacking." },
    { id: 4, name: "Saffron Gold", price: "$89.99", emoji: "🌸", description: "Premium Kashmir saffron threads", category: "Spices", details: "Highest grade Kashmir saffron with intense aroma and color. Hand-harvested and carefully processed. Perfect for rice dishes, desserts, and teas." },
    { id: 5, name: "Cardamom Elite", price: "$45.99", emoji: "🌿", description: "Green cardamom from Western Ghats", category: "Spices", details: "Premium green cardamom pods from the Western Ghats. Intense aroma and flavor. Essential for Indian cuisine and chai preparations." },
    { id: 6, name: "Walnut Wonder", price: "$26.99", emoji: "🥜", description: "Fresh walnuts packed with omega-3", category: "Nuts", details: "Fresh California walnuts rich in omega-3 fatty acids. Brain-healthy nuts perfect for baking or snacking. High in antioxidants and healthy fats." },
    { id: 7, name: "Turmeric Gold", price: "$18.99", emoji: "🟡", description: "Organic turmeric from Tamil Nadu", category: "Spices", details: "Premium organic turmeric powder with high curcumin content. Sourced from Tamil Nadu farms. Perfect for cooking and wellness applications." },
    { id: 8, name: "Mixed Premium", price: "$39.99", emoji: "🎁", description: "Assorted premium nuts collection", category: "Mixed", details: "Carefully curated mix of premium nuts including almonds, cashews, walnuts, and pistachios. Perfect for gifting or family snacking." }
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsPopupOpen(true);
  };

  const InteractiveCard = ({ product, index }) => (
    <div
      className="relative bg-white rounded-2xl shadow-lg p-6 w-80 flex-shrink-0 
                 transition-all duration-300 cursor-pointer border border-gray-100
                 hover:shadow-2xl hover:scale-105 hover:z-20"
      onClick={() => handleCardClick(product)}
    >
      <div className="text-center">
        <div className="text-6xl mb-4">{product.emoji}</div>
        <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.category}
        </span>
        <h3 className="font-bold text-xl text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
        <div className="space-y-2">
          <Button
            size="sm"
            className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick(product);
            }}
          >
            View Details
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full rounded-full border-blue-300 text-blue-600 hover:bg-blue-50"
            onClick={(e) => e.stopPropagation()}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );

  const ProductPopup = () => (
    selectedCard && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-auto shadow-2xl">
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="text-8xl mb-4">{selectedCard.emoji}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedCard.name}</h2>
              <p className="text-lg text-blue-600 font-semibold">{selectedCard.price}</p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600">{selectedCard.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Details</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{selectedCard.details}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedCard.category}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Add to Cart - {selectedCard.price}
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-full border-gray-300"
                onClick={() => setIsPopupOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );

  return (
    <>
      <div className="relative">
        <Marquee
          pauseOnHover={true}
          className="py-8"
          repeat={2}
        >
          {interactiveCards.map((product, index) => (
            <InteractiveCard key={product.id} product={product} index={index} />
          ))}
        </Marquee>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pink-50 via-pink-50/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-red-50 via-red-50/80 to-transparent pointer-events-none z-10"></div>
      </div>

      {isPopupOpen && <ProductPopup />}
    </>
  );
};

const InteractiveGiftingMarquee = () => {
  const giftImages = [
    gift1,
    gift2,
    gift3,
    gift4,
    gift5,
    gift6,
    gift7
  ];

  const GiftImage = ({ src, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative w-72 h-48 mx-4 cursor-pointer"
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <div className="absolute inset-0 bg-white rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative h-full bg-white backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white group-hover:shadow-2xl transition-all duration-300">
        <img
          src={src}
          alt={`Gift ${index + 1}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    </motion.div>
  );

  return (
    <div className="relative">
      <Marquee
        pauseOnHover={false}
        className="py-8"
        repeat={2}
      >
        {giftImages.map((src, index) => (
          <GiftImage key={index} src={src} index={index} />
        ))}
      </Marquee>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-gray-100/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-gray-100/80 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

const GiftingMarquee = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const giftCards = [
    { id: 1, name: "Corporate Elite", price: "$299", emoji: "🎁", description: "Premium business gifting solution", category: "Corporate" },
    { id: 2, name: "Wedding Bliss", price: "$199", emoji: "💍", description: "Elegant wedding celebration hamper", category: "Wedding" },
    { id: 3, name: "Festival Joy", price: "$149", emoji: "🎊", description: "Traditional festival gift collection", category: "Festival" },
    { id: 4, name: "Birthday Surprise", price: "$89", emoji: "🎂", description: "Special birthday treat hamper", category: "Personal" },
    { id: 5, name: "Thank You Bundle", price: "$69", emoji: "🙏", description: "Gratitude expression gift set", category: "Appreciation" },
    { id: 6, name: "Anniversary Special", price: "$179", emoji: "❤️", description: "Love celebration premium box", category: "Anniversary" },
    { id: 7, name: "Wellness Pack", price: "$129", emoji: "🌿", description: "Healthy lifestyle gift hamper", category: "Health" },
    { id: 8, name: "Luxury Collection", price: "$399", emoji: "👑", description: "Ultimate premium gift experience", category: "Luxury" }
  ];

  const GiftCard = ({ gift, index }) => (
    <div
      className={`
        relative bg-white rounded-2xl shadow-lg p-6 w-80 flex-shrink-0 
        transition-all duration-300 cursor-pointer border border-gray-100
        ${hoveredCard === gift.id
          ? 'transform scale-105 shadow-2xl z-20 bg-gradient-to-br from-white to-pink-50'
          : 'hover:shadow-xl'
        }
      `}
      onMouseEnter={() => setHoveredCard(gift.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="text-center">
        <div className="text-6xl mb-4">{gift.emoji}</div>
        <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {gift.category}
        </span>
        <h3 className="font-bold text-xl text-gray-900 mb-2">{gift.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{gift.description}</p>
        <div className="flex items-center justify-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-2xl font-bold text-pink-600 mb-4">{gift.price}</p>
        <div className="space-y-2">
          <Button
            size="sm"
            className={`w-full rounded-full transition-all duration-300 ${hoveredCard === gift.id
                ? 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600'
                : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
              }`}
          >
            Customize Gift
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full rounded-full border-pink-300 text-pink-600 hover:bg-pink-50"
          >
            Quick Order
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <Marquee
        pauseOnHover={false}
        className="py-8"
        repeat={2}
      >
        {giftCards.map((gift, index) => (
          <GiftCard key={gift.id} gift={gift} index={index} />
        ))}
      </Marquee>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pink-50 via-pink-50/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-red-50 via-red-50/80 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/products');
  };

  const handleCorporateGifting = () => {
    navigate('/gifting');
  };

  const handleGetQuote = () => {
    navigate('/quote');
  };

  const featuredProducts = {
    nuts: [
      { id: 1, name: "Premium Almonds", desc: "Premium California almonds with rich flavor", image: almonds },
      { id: 2, name: "Cashew Delight", desc: "Creamy cashews from Kerala farms", image: cashew },
      { id: 3, name: "Pistachio Paradise", desc: "Turkish pistachios with natural taste", image: pisco },
      { id: 4, name: "Walnut Wonder", desc: "Fresh walnuts packed with omega-3", image: walnut },
      { id: 5, name: "Mixed Nuts Premium", desc: "Assorted premium nuts collection", image: mixed }
    ],
    spices: [
      { id: 9, name: "Saffron Gold", desc: "Premium Kashmir saffron threads", image: saffron },
      { id: 10, name: "Cardamom Elite", desc: "Green cardamom pods from Western Ghats", image: cardamom },
      { id: 11, name: "Cinnamon Bark", desc: "Ceylon cinnamon sticks with sweet aroma", image: cinnamon },
      { id: 12, name: "Black Pepper", desc: "Whole black peppercorns from Malabar", image: pepper },
      { id: 13, name: "Turmeric Gold", desc: "Organic turmeric powder from Tamil Nadu", image: turmeric }
    ]
  };

  const testimonials = [
    { name: "Sarah Mitchell", rating: 5, text: "Guggulr transformed our corporate gifting strategy. The quality is exceptional...", role: "Tech Innovations Inc." },
    { name: "David Chen", rating: 5, text: "I've used Guggulr for dozens of weddings, and the response is always...", role: "Elegant Events Co." },
    { name: "Emily Rodriguez", rating: 5, text: "Every holiday season, Guggulr nuts are the star of our family gatherings....", role: "Happy Home" },
    { name: "Michael Thompson", rating: 5, text: "As someone who values nutrition, I appreciate Guggulr's commitment to...", role: "Vitality Plus" },
    { name: "Priya Patel", rating: 5, text: "The gift hampers are beautifully packaged and delicious.", role: "Event Planner" },
    { name: "James Wilson", rating: 5, text: "Outstanding customer service and premium quality products every time.", role: "Corporate Solutions" }
  ];

  const whyGuggulrItems = [
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Premium Quality",
      description: "Handpicked from the world's finest farms. Every product undergoes rigorous quality checks to ensure excellence.",
      className: "lg:col-span-2"
    },
    {
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "100% Natural",
      description: "Pure, preservative-free ingredients for a healthier you. Our commitment to natural goodness means no artificial additives.",
      className: ""
    },
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      title: "Perfect Gifting",
      description: "Luxurious hampers designed to impress on every occasion. Make every moment memorable with elegant packaging.",
      className: ""
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "Fast Delivery",
      description: "Freshness guaranteed with quick, reliable shipping. Our optimized logistics ensure perfect condition delivery.",
      className: ""
    },
    {
      icon: <Star className="w-8 h-8 text-white fill-current" />,
      title: "5-Star Rated",
      description: "Trusted by thousands of satisfied customers worldwide. Our consistent ratings reflect unwavering excellence.",
      className: "lg:col-span-2"
    }
  ];

  const ProductCard = ({ item }) => (
    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 border border-gray-100">
      <div className="w-full h-32 sm:h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl mb-3 sm:mb-5 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-md">
        New
      </span>
      <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 mb-2">{item.name}</h3>
      <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{item.desc}</p>
      <div className="flex justify-between items-center">
        <Button
          size="sm"
          className="rounded-full text-sm"
          onClick={() => navigate(`/products/${item.id}`)}
        >
          View
        </Button>
      </div>
    </div>
  );

  const TestimonialCard = ({ item }) => (
    <div className="relative group w-80 flex-shrink-0">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-orange-300 rounded-2xl p-0.5">
        <div className="bg-white rounded-2xl h-full w-full"></div>
      </div>

      <div className="relative bg-white rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <div className="absolute top-4 left-4 text-5xl text-orange-300 font-serif leading-none select-none">
          "
        </div>

        <div className="pt-8">
          <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3">
            {item.text}
          </p>

          <div className="flex justify-start mb-4">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
            ))}
          </div>

          <div>
            <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
            <p className="text-xs text-gray-500">{item.role}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ContinuousTestimonials = () => {
    const [isPaused, setIsPaused] = useState(false);

    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
      <div
        className="overflow-hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex space-x-6"
          style={{
            width: `${duplicatedTestimonials.length * 326}px`
          }}
          animate={isPaused ? undefined : {
            x: [0, -(testimonials.length * 326)]
          }}
          transition={isPaused ? { duration: 0 } : {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`testimonial-${index}`} item={testimonial} />
          ))}
        </motion.div>

        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
      </div>
    );
  };

  return (
    <div className="home-page bg-white">
<section className="relative w-screen overflow-hidden">
  {/* Desktop Image */}
  <div className="hidden md:block w-full h-full relative">
    <img
      src={heroBg}
      alt="Hero Desktop"
      className="w-full h-full object-cover"
    />
    
  
    
    {/* Transparent Buttons on Highlighted Areas - Desktop Only */}
    <div className="absolute inset-0 hidden md:block pointer-events-none">
      {/* Gifting Journey Button - Left highlighted box */}
      <button
        onClick={() => navigate('/gifting')}
        className="absolute left-[48%] top-[45%] w-[20%] h-[45%] bg-transparent border-2 border-transparent  transition-all duration-300 cursor-pointer pointer-events-auto rounded-lg "
        aria-label="Start Your Gifting Journey"
        title="Your Gifting Journey Starts Here"
      />
      
      {/* Quality Day Button - Right highlighted box */}
      <button
        onClick={() => navigate('/products')}
        className="absolute left-[73%] top-[45%] w-[20%] h-[45%] bg-transparent border-2 border-transparent  transition-all duration-300 cursor-pointer pointer-events-auto rounded-lg "
        aria-label="Start Your Quality Day"
        title="Your Quality Day Begins Here"
      />

       <button
        onClick={() => navigate('/products')}
        className="absolute right-[2%] bottom-[2%] w-[17%] h-[10%] bg-transparent border-2 border-transparent  transition-all duration-300 cursor-pointer pointer-events-auto rounded-lg "
        aria-label="explore"
        title="Your Gifting Journey Starts Here"
      />
    </div>
  </div>

  {/* Mobile Image */}
  <div className="block md:hidden w-full h-full ">
    <img
      src={mobileHeroBg}
      alt="Hero Mobile"
      className="w-full h-full object-cover"
    />
  </div>
</section>

      <section className="py-12 sm:py-16 bg-white border-b border-gray-100 md:px-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <motion.div
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-600 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <CountUpAnimation end={5000} suffix="+" duration={2} />
                </motion.div>
                <div className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Happy Customers</div>
                <div className="text-sm text-gray-500">Satisfied clients worldwide</div>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <motion.div
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-600 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CountUpAnimation end={100} suffix="%" duration={2} />
                </motion.div>
                <div className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Natural Products</div>
                <div className="text-sm text-gray-500">Pure & preservative-free</div>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <motion.div
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-600 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <CountUpAnimation end={24} suffix="hr" duration={2} />
                </motion.div>
                <div className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Fresh Delivery</div>
                <div className="text-sm text-gray-500">Lightning-fast shipping</div>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
              Explore Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Collections</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Premium nuts and exotic spices in continuous display
            </p>
          </div>

          <div className="flex justify-center items-start space-x-2 sm:space-x-4 md:space-x-8 overflow-hidden h-[400px] sm:h-[500px] md:h-[600px]">
            <div className="w-64 sm:w-72 md:w-80 relative overflow-hidden">
              <motion.div
                className="flex flex-col space-y-6"
                animate={{ y: [0, -100 * featuredProducts.nuts.length] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear"
                  }
                }}
              >
                {[...featuredProducts.nuts, ...featuredProducts.nuts].map((item, index) => (
                  <div key={`nuts-${index}`} className="flex-shrink-0">
                    <ProductCard item={item} />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="w-64 sm:w-72 md:w-80 relative overflow-hidden">
              <motion.div
                className="flex flex-col space-y-4 sm:space-y-6"
                animate={{ y: [-100 * featuredProducts.spices.length, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear"
                  }
                }}
              >
                {[...featuredProducts.spices, ...featuredProducts.spices].map((item, index) => (
                  <div key={`spices-${index}`} className="flex-shrink-0">
                    <ProductCard item={item} />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="w-64 sm:w-72 md:w-80 relative overflow-hidden hidden sm:block">
              <motion.div
                className="flex flex-col space-y-6"
                animate={{ y: [0, -100 * [...featuredProducts.nuts.slice(0, 3), ...featuredProducts.spices.slice(0, 2)].length] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear"
                  }
                }}
              >
                {[
                  ...featuredProducts.nuts.slice(0, 3),
                  ...featuredProducts.spices.slice(0, 2),
                  ...featuredProducts.nuts.slice(0, 3),
                  ...featuredProducts.spices.slice(0, 2)
                ].map((item, index) => (
                  <div key={`mixed-${index}`} className="flex-shrink-0">
                    <ProductCard item={item} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Perfect Gifting Solutions with Interactive Marquee */}
      <section className="py-16 sm:py-20 white overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
              Perfect <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-sm">Gift Hampers </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Click any gift hamper to explore our elegant solutions that create lasting memories
            </p>
          </div>

          <div className="relative">
            <InteractiveGiftingMarquee />
          </div>
        </div>
      </section>

      <section className="py-24 white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <WhyChooseSection />
        </div>
      </section>


      <section className="py-20 bg-white md:px-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Thousands of happy customers trust Guggulr for unmatched quality, luxury, and taste.
            </p>
          </div>

          <ContinuousTestimonials />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-black md:px-40">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-red-400/30 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight justify-center text-center">
            Contact{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-sm">
              Us
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                  Get in <span className="text-orange-400">Touch</span>
                </h2>
                <p className="text-base sm:text-lg text-black leading-relaxed">
                  Whether you have questions about our products, need help with an order,
                  or want to explore our corporate gifting options, we're here to help.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 text-black">
                {[
                  {
                    icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />,
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    subContent: "Mon-Fri 9AM-6PM EST"
                  },
                  {
                    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />,
                    title: "Email",
                    content: "hello@guggulr.com",
                    subContent: "We'll respond within 24 hours"
                  },
                  {
                    icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />,
                    title: "Address",
                    content: "123 Spice Street",
                    subContent: "Global Foods District, GF 12345"
                  },
                  {
                    icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />,
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
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-white/10 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-black text-sm sm:text-base">{item.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{item.content}</p>
                      <p className="text-gray-600 text-xs sm:text-sm">{item.subContent}</p>
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
              className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-white/20"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
                Send us a Message
              </h3>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black/80 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black/80 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/80 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/80 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                  >
                    <option value="" className="white">Select a subject</option>
                    <option value="general" className="white">General Inquiry</option>
                    <option value="products" className="white">Product Questions</option>
                    <option value="corporate" className="white">Corporate Gifting</option>
                    <option value="wholesale" className="white">Wholesale Orders</option>
                    <option value="support" className="white">Customer Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
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


      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-500 to-red-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Taste the Future of{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-100 bg-clip-text text-transparent">
                Premium Quality
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto">
              Discover world-class nuts, exotic spices, and elegant gift hampers.
              Elevate your snacking and gifting game with Guggulr Global Foods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50"
                onClick={handleExplore}
              >
                Shop Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50"
                onClick={handleGetQuote}
              >
                Request Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;