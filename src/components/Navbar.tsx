import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Gift,
  Info,
  Phone,
  ShoppingBag,
  Package,
  Menu,
  X,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="h-5 w-5" /> },
    { name: "Products", path: "/products", icon: <Package className="h-5 w-5" /> },
    { name: "Gifting", path: "/gifting", icon: <Gift className="h-5 w-5" /> },
    { name: "About", path: "/about", icon: <Info className="h-5 w-5" /> },
    { name: "Contact", path: "/contact", icon: <Phone className="h-5 w-5" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleGetQuote = () => {
    navigate("/quote");
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/50"
            : "bg-white/80 backdrop-blur-sm border-b border-orange-200/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center group flex-shrink-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative w-20 sm:w-24 md:w-28 h-8 sm:h-10 md:h-12">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-lg opacity-0 transition-opacity duration-300 blur-md" />
                <img
                  alt="Guggulr Logo"
                  src="/logo.jpg"
                  className="relative w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} className="group relative">
                  <div
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-orange-600 bg-orange-50"
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50/60"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="hidden lg:inline">{item.icon}</span>
                      <span>{item.name}</span>
                    </span>

                    {/* Active underline */}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Desktop Get Quote Button */}
            <div className="hidden md:flex">
              <Button
                onClick={handleGetQuote}
                className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-md hover:shadow-lg transition-all duration-300 px-4 py-2 text-sm font-medium rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
                <ShoppingBag className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Get Quote</span>
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-orange-50 transition-colors duration-200 h-10 w-10 rounded-lg"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white shadow-xl rounded-l-2xl"
            >
              <div className="flex flex-col h-full pt-20 pb-6 px-6">
                {/* Nav Links */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                          isActive(item.path)
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                            : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Get Quote Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Button
                    onClick={handleGetQuote}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Get Quote
                  </Button>
                </motion.div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-auto pt-8 text-center text-sm text-gray-500"
                >
                  © 2024 Guggulr. All rights reserved.
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-14 sm:h-16"></div>
    </>
  );
};

export default Navbar;
