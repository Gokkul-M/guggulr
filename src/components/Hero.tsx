import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <img src="/hero-bg.jpg" alt="Nuts and leaves background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight drop-shadow-xl">
            <span className="text-orange-400">Guggulr</span>
            <span className="block">Global Foods</span>
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-lg leading-relaxed">
            Nuts for your desk! Gifts for their heart!
          </p>
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative w-44 h-44 rounded-2xl border-2 border-orange-400 overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
              >
                  <img src="/gifting-journey.png" alt="Gift Boxes" className="w-full h-full object-cover" />
                  <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 200 200">
                      <path id="curve1" d="M 20,100 A 80,80 0 0,1 180,100" fill="transparent" />
                      <text className="text-xs font-semibold fill-orange-400">
                          <textPath href="#curve1" startOffset="50%" text-anchor="middle">
                              Your Gifting Journey Starts Here
                          </textPath>
                      </text>
                  </svg>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative w-44 h-44 rounded-2xl border-2 border-orange-400 overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
              >
                  <img src="/quality-day.png" alt="Premium Nuts" className="w-full h-full object-cover" />
                  <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 200 200">
                      <path id="curve2" d="M 20,100 A 80,80 0 0,1 180,100" fill="transparent" />
                      <text className="text-xs font-semibold fill-white">
                          <textPath href="#curve2" startOffset="50%" text-anchor="middle">
                              Your Quality Day Begins Here
                          </textPath>
                      </text>
                  </svg>
              </motion.div>
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center h-full min-h-[450px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full border-6 border-orange-400 overflow-hidden shadow-2xl relative"
          >
            <img src="/gift-box.png" alt="Gift Box" className="w-full h-full object-cover" />
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded-full text-xs font-bold text-gray-800 shadow">
              GUGGULR
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute -top-6 right-0 w-28 h-28 md:w-[180px] md:h-[180px] rounded-full border-4 border-orange-400 overflow-hidden shadow-lg"
          >
            <img src="/nuts-bowl-1.png" alt="Almonds" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute -bottom-4 right-0 w-24 h-24 md:w-[120px] md:h-[120px] rounded-full border-4 border-orange-400 overflow-hidden shadow-lg"
          >
              <img src="/dates-bowl.png" alt="Dates" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute bottom-0 -left-0 w-24 h-24 md:w-[120px] md:h-[120px] rounded-full border-4 border-orange-400 overflow-hidden shadow-lg"
          >
              <img src="/mixed-nuts.png" alt="Pistachios" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
