import React from "react";
import { motion } from "framer-motion";
import { Sun, Battery, Zap, CheckCircle2 } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import britanniaRooftop from "../assets/Project-Images/Britannia Rooftop/b2.jpeg";

const SolarSection: React.FC = () => {
  return (
    <section id="solar" className="py-24 bg-yellow-50/20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Solar Energy Systems"
          subtitle="Precision-engineered solar solutions for residential, commercial, and industrial power needs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={britanniaRooftop}
              alt="Solar Panel Installation"
              className="rounded-2xl shadow-2xl w-full h-100 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-yellow-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                  <Zap size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-gray-900">25+</p>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    Year Performance Warranty
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              High-Performance PV Systems
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We provide end-to-end solar services, including site survey,
              custom system design, procurement of Tier-1 components, and
              professional installation. Our systems are optimized for maximum
              energy harvest in various climatic conditions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                {
                  icon: <Sun className="text-yellow-600" />,
                  title: "Rooftop PV",
                  desc: "Net-metering ready systems",
                },
                {
                  icon: <Battery className="text-yellow-600" />,
                  title: "Hybrid Storage",
                  desc: "Energy independence 24/7",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-yellow-100 shadow-sm"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                "Smart monitoring app integration",
                "Structure design with wind-load certification",
                "Anti-soiling coating for low maintenance",
                "AEPC-certified equipment",
              ].map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <CheckCircle2 className="text-yellow-600" size={18} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolarSection;
