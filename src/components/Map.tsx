import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Visit Our <span className="text-orange-600">Store</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Come and experience our premium products in person
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden h-64 sm:h-80 md:h-96 shadow-lg"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.961749940351!2d80.1773467!3d13.0315964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzUzLjciTiA4MMKwMTAnMzguNSJF!5e0!3m2!1sen!2sin!4v1724575000000!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </motion.div>
            </div>
        </section>
    );
}

export default Map;
