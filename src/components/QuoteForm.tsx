
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, Building, Package, MessageSquare, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import emailjs from '@emailjs/browser';

interface QuoteFormProps {
  onClose?: () => void;
  productName?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onClose, productName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: productName || '',
    quantity: '',
    deliveryLocation: '',
    message: '',
    budget: '',
    timeline: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.productInterest) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, and Product Interest).",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration - You'll need to replace these with your actual values
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID  
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      const templateParams = {
        to_email: 'your-email@gmail.com', // Replace with your Gmail address
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        product_interest: formData.productInterest,
        quantity: formData.quantity,
        delivery_location: formData.deliveryLocation,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        subject: `Quote Request from ${formData.name} - ${formData.productInterest}`
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Quote Request Sent!",
        description: "Thank you for your interest. We'll get back to you within 24 hours with a detailed quote.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        productInterest: '',
        quantity: '',
        deliveryLocation: '',
        message: '',
        budget: '',
        timeline: ''
      });

      if (onClose) onClose();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error Sending Request",
        description: "There was a problem sending your quote request. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20"
    >
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Request a Quote
          </h2>
        </div>
        <p className="text-gray-600">
          Get personalized pricing for premium dry fruits and spices
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <User className="w-4 h-4 mr-2 text-orange-500" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Mail className="w-4 h-4 mr-2 text-orange-500" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Phone className="w-4 h-4 mr-2 text-orange-500" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Building className="w-4 h-4 mr-2 text-orange-500" />
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Your company name"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Package className="w-4 h-4 mr-2 text-orange-500" />
            Product Interest *
          </label>
          <select
            name="productInterest"
            value={formData.productInterest}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            required
          >
            <option value="">Select a product category</option>
            <option value="Premium Nuts">Premium Nuts</option>
            <option value="Exotic Spices">Exotic Spices</option>
            <option value="Dried Fruits">Dried Fruits</option>
            <option value="Mixed Collections">Mixed Collections</option>
            <option value="Corporate Gift Boxes">Corporate Gift Boxes</option>
            <option value="Bulk Orders">Bulk Orders</option>
            <option value="Custom Packaging">Custom Packaging</option>
            <option value="Other">Other (specify in message)</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Estimated Quantity
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="e.g., 10kg, 50 boxes, 100 units"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Delivery Location
            </label>
            <input
              type="text"
              name="deliveryLocation"
              value={formData.deliveryLocation}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="City, State/Country"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            >
              <option value="">Select budget range</option>
              <option value="Under $500">Under $500</option>
              <option value="$500 - $1,000">$500 - $1,000</option>
              <option value="$1,000 - $5,000">$1,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="Over $10,000">Over $10,000</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            >
              <option value="">When do you need this?</option>
              <option value="ASAP">As soon as possible</option>
              <option value="Within 1 week">Within 1 week</option>
              <option value="Within 2 weeks">Within 2 weeks</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="Flexible">Flexible timeline</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <MessageSquare className="w-4 h-4 mr-2 text-orange-500" />
            Additional Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your specific requirements, preferences, or any questions you have..."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 font-medium transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Quote Request
              </>
            )}
          </Button>
          
          {onClose && (
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-6"
            >
              Cancel
            </Button>
          )}
        </div>
      </form>

      {/* Setup Instructions */}
      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800">
          <strong>Setup Required:</strong> To enable email sending, please set up EmailJS with your Gmail account. 
          Update the service ID, template ID, and public key in the code, then create an email template in your EmailJS dashboard.
        </p>
      </div>
    </motion.div>
  );
};

export default QuoteForm;
