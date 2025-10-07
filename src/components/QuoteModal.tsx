import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const QuoteModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    quantity: '10',
    message: `I'm interested in a quote for ${product.name}.`
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.quantity) {
      toast({
        title: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
        const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
        const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
        const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

        const templateParams = {
            to_email: 'enquiry.guggulr@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company,
            quantity: formData.quantity,
            message: formData.message,
            product_name: product.name,
            subject: `Quote Request for ${product.name}`
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        toast({
            title: "Quote Request Sent!",
            description: "We've received your request and will get back to you shortly."
        });
        onClose();
    } catch (error) {
        console.error('Failed to send email:', error);
        toast({
            title: "Error Sending Request",
            description: "There was a problem sending your request. Please try again or contact us directly.",
            variant: "destructive"
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-lg m-4 p-8 glass-effect rounded-2xl border border-white/20 shadow-2xl"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors">
              <X />
            </button>
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-2">Request a Quote</h2>
            <p className="text-gray-600 mb-6">For <span className="font-semibold text-orange-600">{product.name}</span></p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name *"
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors input-highlight"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email *"
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors input-highlight"
                required
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company Name (Optional)"
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors input-highlight"
              />
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="Quantity (e.g., 10kg) *"
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors input-highlight"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Additional Message"
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none input-highlight"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3"
              >
                {isSubmitting ? (
                    <div className="flex items-center">
                        <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                    </div>
                ) : (
                    <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Request
                    </>
                )}
              </Button>
            </form>
             <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800">
          <strong>Setup Required:</strong> To enable email sending, please set up EmailJS with your Gmail account. 
          Update the service ID, template ID, and public key in the code, then create an email template in your EmailJS dashboard.
        </p>
      </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;