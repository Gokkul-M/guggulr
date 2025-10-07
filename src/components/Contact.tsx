import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

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


const Contact = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-black">
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
                                    content: "+91 95850 55599",
                                    subContent: "Mon-Fri 9AM-6PM EST"
                                },
                                {
                                    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />,
                                    title: "Email",
                                    content: "support@guggulr.com",
                                    subContent: "We'll respond within 24 hours"
                                },
                                {
                                    icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />,
                                    title: "Address",
                                    content: "1ST STREET, ANANDHAM NAGAR,",
                                    subContent: "RAMAPURAM, CHENNAI -600089"
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
    );
}

export default Contact;
