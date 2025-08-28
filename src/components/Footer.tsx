import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const SocialIcon = memo(({ Icon, label, url }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative text-gray-400 hover:text-white transition-colors duration-300"
    whileHover={{ scale: 1.2, rotate: -15 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Icon className="w-6 h-6" />
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
      {label}
    </div>
  </motion.a>
));
SocialIcon.displayName = 'SocialIcon';

const ContactItem = memo(({ Icon, children }) => (
  <div className="flex items-center space-x-4 group">
    <Icon className="w-5 h-5 text-orange-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
      {children}
    </span>
  </div>
));
ContactItem.displayName = 'ContactItem';

const QuickLinkItem = memo(({ to, label }) => (
  <Link
    to={to}
    className="block text-gray-400 hover:text-white transition-all duration-300 relative group py-1"
  >
    <span className="relative flex items-center">
      <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-400" />
      {label}
    </span>
  </Link>
));
QuickLinkItem.displayName = 'QuickLinkItem';

const Footer = () => {
  const quickLinks = useMemo(() => [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Gifting", to: "/gifting" },
    { label: "About Us", to: "/about" },
  ], []);

  const socialIcons = useMemo(() => [
    { Icon: Facebook, label: "Facebook", url: "https://www.facebook.com/share/1CcrAovRjy/" },
    { Icon: Instagram, label: "Instagram", url: "https://www.instagram.com/guggulr2025?igsh=ZHVrODUzams4aHNn" },
    { Icon: Twitter, label: "Twitter", url: "https://x.com/guggulr?t=KW-IYtDg-kXh-5N-W_e8iA&s=09" },
  ], []);

  const categories = useMemo(() => [
    "Premium Nuts",
    "Dry Fruits",
    "Exotic Spices",
    "Gift Hampers"
  ], []);

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-red-500/10 to-transparent rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>
      
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="mb-16 p-8 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 text-center">
          <motion.h3 
            className="text-2xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Join the Guggulr Family
          </motion.h3>
          <motion.p 
            className="text-sm text-orange-200/80 mb-6 max-w-md mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Subscribe for exclusive offers, new product alerts, and a taste of our finest selection.
          </motion.p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <motion.input 
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800/60 border border-gray-700/80 rounded-lg py-2.5 px-4 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 shadow-inner"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <motion.button 
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2.5 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-14">
          <div className="sm:col-span-2 lg:col-span-1 space-y-6">
            <Link to="/" className="inline-block group">
              <motion.img 
                src="/logo.jpg"
                alt="Guggulr Logo"
                width="120"
                height="56"
                className="rounded-xl shadow-lg"
                whileHover={{ scale: 1.05, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                loading="lazy"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Experience the world's finest nuts, dry fruits, and spices, curated with a passion for <span className="text-orange-400 font-semibold">quality and flavor</span>.
            </p>
            <div className="flex space-x-6 pt-2">
              {socialIcons.map(({ Icon, label, url }) => (
                <SocialIcon key={label} Icon={Icon} label={label} url={url} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <QuickLinkItem key={link.label} to={link.to} label={link.label} />
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white relative">
              Top Categories
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <QuickLinkItem key={category} to={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`} label={category} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white relative">
              Get in Touch
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </h3>
            <div className="space-y-5">
              <ContactItem Icon={Phone}>+91 95850 55599</ContactItem>
              <ContactItem Icon={Mail}>support@guggulr.com</ContactItem>
              <ContactItem Icon={MapPin}>
                Anandham Nagar, Ramapuram, Chennai - 600089
              </ContactItem>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/70 mt-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-5">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Guggulr Global Foods. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
              <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-orange-400 transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default memo(Footer);
