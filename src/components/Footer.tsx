import React, { memo, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const SocialIcon = memo(({ Icon, label, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
  >
    <Icon className="w-6 h-6" />
  </a>
));
SocialIcon.displayName = 'SocialIcon';

const FooterLink = memo(({ to, label }) => (
  <Link
    to={to}
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    {label}
  </Link>
));
FooterLink.displayName = 'FooterLink';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = useMemo(() => [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Gifting", to: "/gifting" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ], []);

  const categoryLinks = useMemo(
    () => [
      {
        label: "Premium Nuts",
        onClick: () => navigate("/products"),
      },
      {
        label: "Dry Fruits",
        onClick: () => navigate("/products"),
      },
      {
        label: "Exotic Spices",
        onClick: () => navigate("/products"),
      },
      {
        label: "Gift Hampers",
        onClick: () => navigate("/gifting"),
      },
    ],
    [navigate]
  );

  const socialIcons = useMemo(() => [
    { Icon: Facebook, label: "Facebook", url: "https://www.facebook.com/share/1CcrAovRjy/" },
    { Icon: Instagram, label: "Instagram", url: "https://www.instagram.com/guggulr2025?igsh=ZHVrODUzams4aHNn" },
    { Icon: Twitter, label: "Twitter", url: "https://x.com/guggulr?t=KW-IYtDg-kXh-5N-W_e8iA&s=09" },
  ], []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Socials */}
          <div className="md:col-span-1 space-y-6">
            <Link to="/">
              <img 
                src="/logo.jpg"
                alt="Guggulr Logo"
                className="w-28 rounded-lg"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              Premium nuts, dry fruits, and spices for every occasion.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, label, url }) => (
                <SocialIcon key={label} Icon={Icon} label={label} url={url} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <FooterLink key={link.label} to={link.to} label={link.label} />
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Categories</h3>
            <div className="space-y-3">
              {categoryLinks.map((category) => (
                <button
                  key={category.label}
                  onClick={category.onClick}
                  className="block text-left w-full text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-orange-400" />
                <span>Anandham Nagar, Ramapuram, Chennai - 600089</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+91 95850 55599</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>support@guggulr.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Guggulr Global Foods. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-orange-400 transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-orange-400 transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default memo(Footer);
