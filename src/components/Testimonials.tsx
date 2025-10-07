import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    { name: "Sarah Mitchell", rating: 5, text: "Guggulr transformed our corporate gifting strategy. The quality is exceptional...", role: "Tech Innovations Inc." },
    { name: "David Chen", rating: 5, text: "I've used Guggulr for dozens of weddings, and the response is always...", role: "Elegant Events Co." },
    { name: "Emily Rodriguez", rating: 5, text: "Every holiday season, Guggulr nuts are the star of our family gatherings....", role: "Happy Home" },
    { name: "Michael Thompson", rating: 5, text: "As someone who values nutrition, I appreciate Guggulr's commitment to...", role: "Vitality Plus" },
    { name: "Priya Patel", rating: 5, text: "The gift hampers are beautifully packaged and delicious.", role: "Event Planner" },
    { name: "James Wilson", rating: 5, text: "Outstanding customer service and premium quality products every time.", role: "Corporate Solutions" }
];

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

const Testimonials = () => {
    return (
        <section className="py-20 bg-white">
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
    );
}

export default Testimonials;
