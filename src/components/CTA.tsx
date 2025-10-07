import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const CTA = () => {

    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('/products');
    };

    const handleGetQuote = () => {
        navigate('/quote');
    };

    return (
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
    );
}

export default CTA;
