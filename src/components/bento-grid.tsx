import { motion } from "framer-motion";
import { Sparkles, Shield, Clock, Users, Trophy, Zap } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 md:px-40 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500 opacity-5 rounded-full blur-3xl"></div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-20 relative z-10">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              SpiceVault?
            </span>
          </motion.h2>
          <motion.p
            className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We deliver premium nuts and spices sourced from the finest global producers – bringing authentic flavors, exceptional quality, and trusted partnerships to your business.
          </motion.p>
        </div>

        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[220px] relative z-10 max-w-6xl mx-auto">
          
          {/* Premium Sourcing - Full width on mobile, 2x2 on desktop */}
          <motion.div
            className="col-span-1 md:col-span-2 md:row-span-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-soft p-6 md:p-8 relative group overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(251,146,60,0.6)] flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/10"></div>
            <div className="relative z-10 flex flex-col h-full min-h-[300px] md:min-h-0">
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-soft mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                    Premium Sourcing
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    Direct partnerships with certified farms and producers worldwide ensure the highest quality nuts and spices for your business operations.
                  </p>
                </div>
                <button className="mt-auto self-start bg-white text-orange-500 px-6 py-3 rounded-full text-sm font-semibold shadow-soft hover:bg-white/95 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </motion.div>

          {/* Quick Delivery */}
          <motion.div
            className="col-span-1 row-span-1 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-soft p-6 relative group overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(251,146,60,0.6)] flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
            <div className="relative z-10 flex flex-col h-full min-h-[220px] md:min-h-0">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-soft mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    Quick Delivery
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Same-day shipping for bulk orders within metro areas.
                  </p>
                </div>
                <button className="mt-auto self-start bg-white text-orange-500 px-4 py-2.5 rounded-full text-sm font-semibold shadow-soft hover:bg-white/95 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </motion.div>

          {/* Custom Solutions - Tall on desktop */}
          <motion.div
            className="col-span-1 md:row-span-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-soft p-6 relative group overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(251,146,60,0.6)] flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
            <div className="relative z-10 flex flex-col h-full min-h-[300px] md:min-h-0">
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-soft mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    Custom Solutions
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    Tailored blends, custom packaging, and specialized processing services to meet your unique business requirements.
                  </p>
                </div>
                <button className="mt-auto self-start bg-white text-orange-500 px-5 py-3 rounded-full text-sm font-semibold shadow-soft hover:bg-white/95 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </motion.div>
          
          {/* Certified & Safe - Wide on desktop */}
          <motion.div
            className="col-span-1 md:col-span-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-soft p-6 relative group overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(251,146,60,0.6)] flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
            <div className="relative z-10 flex flex-col h-full min-h-[220px] md:min-h-0">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-soft mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    Certified & Safe
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    FDA approved facilities, organic certifications, and rigorous quality testing ensure food safety compliance.
                  </p>
                </div>
                <button className="mt-auto self-start bg-white text-orange-500 px-4 py-2.5 rounded-full text-sm font-semibold shadow-soft hover:bg-white/95 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </motion.div>

          {/* 24/7 B2B Support */}
          <motion.div
            className="col-span-1 row-span-1 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-soft p-6 relative group overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(251,146,60,0.6)] flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
            <div className="relative z-10 flex flex-col h-full min-h-[220px] md:min-h-0">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-soft mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    24/7 B2B Support
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Dedicated account managers for enterprise clients.
                  </p>
                </div>
                <button className="mt-auto self-start bg-white text-orange-500 px-4 py-2.5 rounded-full text-sm font-semibold shadow-soft hover:bg-white/95 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </motion.div>
          
          {/* Trusted Partners */}
          <motion.div
            className="col-span-1 row-span-1 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-soft p-6 relative group overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(251,146,60,0.6)] flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
            <div className="relative z-10 flex flex-col h-full min-h-[220px] md:min-h-0">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-soft mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    Trusted Partners
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Serving 500+ retailers and food manufacturers globally.
                  </p>
                </div>
                <button className="mt-auto self-start bg-white text-orange-500 px-4 py-2.5 rounded-full text-sm font-semibold shadow-soft hover:bg-white/95 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}