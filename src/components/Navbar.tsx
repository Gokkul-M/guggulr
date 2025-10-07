import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Gift,
  Info,
  Phone,
  Package,
  Menu,
  X,
  ShoppingBag,
} from "lucide-react";
import { Button } from "../components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-sm border-b border-gray-200/50" : ""
        } bg-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center group flex-shrink-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                alt="Guggulr Logo"
                src="/logo.jpg"
                className="w-24 sm:w-28 h-auto"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} className="group relative">
                  <div
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isActive(item.path)
                        ? "text-orange-600"
                        : "text-gray-600 hover:text-orange-600"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {item.name}
                    </span>

                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </div>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex">
              <Button
                onClick={handleGetQuote}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium rounded-md"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 h-10 w-10 rounded-lg"
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black/20"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="absolute right-0 top-0 h-full w-72 max-w-[80vw] bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full pt-16 pb-6 px-6">
                <div className="space-y-2 mt-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? "bg-orange-100 text-orange-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    onClick={handleGetQuote}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-base font-semibold rounded-lg"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Get Quote
                  </Button>
                </div>

                <div className="mt-auto text-center text-xs text-gray-500">
                  © 2024 Guggulr. All rights reserved.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16"></div>
    </>
  );
};

export default Navbar;