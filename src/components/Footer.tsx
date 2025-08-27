import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

// FIX: All helper components are moved outside the main Footer component to prevent re-declaration on every render.
// They are memoized for optimal performance.

const SocialIcon = memo(({ Icon, label, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative"
  >
    <Icon className="w-6 h-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-all duration-300 hover:scale-110 group-hover:drop-shadow-lg" />
    {/* Hover tooltip */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20">
      {label}
    </div>
  </a>
));
SocialIcon.displayName = 'SocialIcon';

const ContactItem = memo(({ Icon, children }) => (
  <div className="flex items-center space-x-3 group hover:bg-white/5 rounded-lg p-2 -m-2 transition-colors duration-200">
    <Icon className="w-5 h-5 text-orange-400 group-hover:text-orange-300 transition-colors duration-200 flex-shrink-0" />
    <span className="text-sm group-hover:text-gray-300 transition-colors duration-200">
      {children}
    </span>
  </div>
));
ContactItem.displayName = 'ContactItem';

const QuickLinkItem = memo(({ to, label }) => (
    <Link
      to={to}
      className="block text-gray-400 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 relative group"
    >
      <span className="relative">{label}</span>
      <ArrowRight className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
));
QuickLinkItem.displayName = 'QuickLinkItem';

const Footer = () => {
  // Memoized data to prevent re-creation on each render
  const quickLinks = useMemo(() => [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Gifting", to: "/gifting" },
    { label: "About Us", to: "/about" },
  ], []);

  const socialIcons = useMemo(() => [
    { Icon: Facebook, label: "Facebook", url: "https://facebook.com/yourpage" },
    { Icon: Instagram, label: "Instagram", url: "https://instagram.com/yourpage" },
    { Icon: Twitter, label: "Twitter", url: "https://twitter.com/yourpage" },
  ], []);

  const categories = useMemo(() => [
    "Premium Nuts",
    "Dry Fruits",
    "Exotic Spices",
    "Gift Hampers"
  ], []);

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>
      
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)`,
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        
        {/* FIX: Newsletter section is moved out and placed before the main grid for better layout and focus. */}
        <div className="mb-12 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-sm text-orange-200 mb-4 max-w-md mx-auto">
              Subscribe to our newsletter to get the latest offers, new product alerts, and more.
            </p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-sm mx-auto">
                <input 
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-md py-2 px-4 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                />
                <button 
                    type="submit"
                    className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300"
                >
                    Subscribe
                </button>
            </form>
        </div>

        {/* FIX: Grid layout is now cleaner. `grid-cols-1` for mobile, `sm:grid-cols-2` for small screens, and `lg:grid-cols-4` for desktop. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          
          {/* Brand & Socials */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-6">
            <Link to="/" className="inline-block group">
              <img 
                src="/logo.jpg" // Use absolute path from public folder
                alt="Guggulr Logo"
                width="110"
                height="52"
                className="rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium nuts, dry fruits, and exotic spices sourced globally for your <span className="text-orange-400 font-semibold">health and happiness</span>.
            </p>
            <div className="flex space-x-5">
              {socialIcons.map(({ Icon, label, url }) => (
                <SocialIcon key={label} Icon={Icon} label={label} url={url} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <QuickLinkItem key={link.label} to={link.to} label={link.label} />
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white relative">
              Categories
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <QuickLinkItem key={category} to={`/products/${category.toLowerCase().replace(' ', '-')}`} label={category} />
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </h3>
            <div className="space-y-4">
              <ContactItem Icon={Phone}>+91 95850 55599</ContactItem>
              <ContactItem Icon={Mail}>support@guggulr.com</ContactItem>
              <ContactItem Icon={MapPin}>
                ANANDHAM NAGAR,
                RAMAPURAM, CHENNAI -600089
              </ContactItem>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Guggulr Global Foods. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
              <Link to="/privacy-policy" className="hover:text-orange-400 cursor-pointer transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-orange-400 cursor-pointer transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default memo(Footer);