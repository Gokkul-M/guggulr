import { motion } from "framer-motion";
import { Sparkles, Shield, Clock, Users, Trophy, Zap } from "lucide-react";

const FeatureCard = ({ icon, title, description, buttonText, href, className, iconBgColor }) => (
  <motion.div
    className={`bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconBgColor}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
    </div>
    <a
      href={href}
      className="text-orange-600 font-semibold text-sm hover:underline"
    >
      {buttonText}
    </a>
  </motion.div>
);

export default function WhyChooseSection() {
  const features = [
    {
      icon: <Trophy className="w-6 h-6 text-white" />,
      title: "Premium Sourcing",
      description: "Direct partnerships with certified farms ensure the highest quality nuts and spices.",
      buttonText: "Learn More",
      href: "/about",
      className: "md:col-span-2 md:row-span-2",
      iconBgColor: "bg-orange-500",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Quick Delivery",
      description: "Same-day shipping for bulk orders within metro areas.",
      buttonText: "Learn More",
      href: "/about",
      className: "",
      iconBgColor: "bg-red-500",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Custom Solutions",
      description: "Tailored blends, custom packaging, and specialized processing services.",
      buttonText: "Learn More",
      href: "/about",
      className: "md:row-span-2",
      iconBgColor: "bg-yellow-500",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Certified & Safe",
      description: "FDA approved facilities and rigorous quality testing ensure food safety.",
      buttonText: "Learn More",
      href: "/about",
      className: "md:col-span-2",
      iconBgColor: "bg-green-500",
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "24/7 B2B Support",
      description: "Dedicated account managers for enterprise clients.",
      buttonText: "Learn More",
      href: "/about",
      className: "",
      iconBgColor: "bg-blue-500",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Trusted Partners",
      description: "Serving 500+ retailers and food manufacturers globally.",
      buttonText: "Learn More",
      href: "/about",
      className: "",
      iconBgColor: "bg-indigo-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose Guggulr?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver premium nuts and spices sourced from the finest global producers, bringing authentic flavors and exceptional quality to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[240px]">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
