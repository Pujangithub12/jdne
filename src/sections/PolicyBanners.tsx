import React from "react";
import { motion } from "framer-motion";
import usolarLogo from "../assets/policy banner/usolar.jpeg";
import nepalgov from "../assets/policy banner/nepal-gov.png";

const logos = [
  {
    name: "U-Solar",
    src: usolarLogo,
  },
  {
    name: "Certificate",
    src: nepalgov,
  },
  {
    name: "AEPC Certified",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Generic_logo.svg/120px-Generic_logo.svg.png",
  },
  {
    name: "NEA",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Generic_logo.svg/120px-Generic_logo.svg.png",
  },
  {
    name: "MoE",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Generic_logo.svg/120px-Generic_logo.svg.png",
  },
  {
    name: "World Bank",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Generic_logo.svg/120px-Generic_logo.svg.png",
  },
  {
    name: "UNDP",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Generic_logo.svg/120px-Generic_logo.svg.png",
  },
  {
    name: "GIZ",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Generic_logo.svg/120px-Generic_logo.svg.png",
  },
];

const PolicyBanners: React.FC = () => {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Certifications & Partners
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Trusted by leading organizations and certified by global standards
          </p>
        </div>
      </div>

      <div className="relative w-full bg-gray-50 border-y border-gray-100 py-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gray-50 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gray-50 z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 shrink-0"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl border border-gray-200 flex items-center justify-center p-3 shadow-sm">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-gray-600">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PolicyBanners;
