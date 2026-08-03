import React from "react";
import { motion } from "framer-motion";
import { Sun, Flame, Zap, ArrowRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const services = [
  {
    icon: <Sun className="w-10 h-10" />,
    title: "Solar Rooftop & Ground Mount",
    description:
      "Complete EPC services from design to installation for residential and commercial projects.",
    color: "bg-yellow-50 text-yellow-600 border-yellow-100",
    iconBg: "bg-yellow-500",
  },
  {
    icon: <Flame className="w-10 h-10" />,
    title: "Biomass Solutions",
    description:
      "Fuel-switching, industrial stoves, high-efficiency burners, and technical training for operators.",
    color: "bg-orange-50 text-orange-600 border-orange-100",
    iconBg: "bg-orange-500",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Hydropower & Transmission",
    description:
      "High-quality equipment supply, routine maintenance, and modern grid integration solutions.",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    iconBg: "bg-blue-500",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Our Renewable Solutions"
          subtitle="We offer a comprehensive range of clean energy services tailored to meet the unique needs of our clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border ${service.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group`}
            >
              <div
                className={`w-16 h-16 ${service.iconBg} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-current/20`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-gray-900 group-hover:text-green-600 transition-colors"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
