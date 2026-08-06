import React from "react";
import { Sun, Flame, Zap, Lightbulb, Check } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import britanniaRooftop from "../assets/Project-Images/Britannia Rooftop/b5.jpeg";
import service2Image from "../assets/IMG-20260603-WA0007.jpg";
import transmissionImage from "../assets/transmission-line.webp";
import consultingImage from "../assets/consulting.png";

const services = [
  {
    icon: Sun,
    title: "Solar Rooftop & Ground Mount",
    description:
      "End-to-end EPC services covering site assessment, system design, permitting, installation, and commissioning. We manage residential and commercial projects with dedicated project oversight and quality assurance at every stage.",
    image: britanniaRooftop,
    iconBg: "bg-yellow-500",
    accentText: "text-yellow-700",
    accentBg: "bg-yellow-50",
    borderColor: "border-yellow-300",
    features: [
      "Site Assessment & Design",
      "Permitting & Documentation",
      "Installation & Commissioning",
    ],
  },
  {
    icon: Flame,
    title: "Biomass Solutions",
    description:
      "Comprehensive fuel-switching consultancy including industrial stove installation, high-efficiency burner supply, and hands-on technical training for plant operators to ensure a smooth, safe transition to biomass energy.",
    image: service2Image,
    iconBg: "bg-orange-500",
    accentText: "text-orange-700",
    accentBg: "bg-orange-50",
    borderColor: "border-orange-300",
    features: [
      "Fuel-Switching Consultancy",
      "Equipment Installation",
      "Operator Training Programs",
    ],
  },
  {
    icon: Zap,
    title: "Transmission",
    description:
      "Design, construction, and maintenance of transmission lines and substation infrastructure, delivering reliable grid integration and power evacuation solutions that ensure long-term system reliability.",
    image: transmissionImage,
    iconBg: "bg-blue-500",
    accentText: "text-blue-700",
    accentBg: "bg-blue-50",
    borderColor: "border-blue-300",
    features: ["Equipment Supply", "Routine Maintenance", "Grid Integration"],
  },
  {
    icon: Lightbulb,
    title: "Hydro and Solar Consulting",
    description:
      "Expert advisory services spanning feasibility studies, technical due diligence, and project design for hydropower and solar developments, helping clients make informed decisions from concept through commissioning.",
    image: consultingImage,
    iconBg: "bg-purple-500",
    accentText: "text-purple-700",
    accentBg: "bg-purple-50",
    borderColor: "border-purple-300",
    features: [
      "Feasibility Studies",
      "Technical Due Diligence",
      "Project Design & Advisory",
    ],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white">
      {/* Banner */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&h=800&fit=crop"
          alt="Renewable Energy Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-white/90 text-sm font-medium">
                  What We Offer
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Our Renewable <br />
                <span className="text-green-400">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                Comprehensive clean energy services tailored to meet the unique
                needs of our clients across Nepal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Services We Provide"
            subtitle="Three core pillars of clean energy expertise, delivered with precision and local knowledge."
          />

          <div className="mt-16 space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-16`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      {/* Name on Image */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                          >
                            <service.icon size={28} />
                          </div>
                          <div>
                            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">
                              Service {String(index + 1).padStart(2, "0")}
                            </p>
                            <h3 className="text-white font-black text-2xl leading-tight">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description Side */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`p-8 rounded-3xl ${service.accentBg} border-l-4 ${service.borderColor}`}
                    >
                      <p className="text-gray-700 leading-relaxed text-lg mb-8">
                        {service.description}
                      </p>

                      <div className="space-y-4">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          What's Included
                        </p>
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-full ${service.iconBg} flex items-center justify-center flex-shrink-0`}
                            >
                              <Check size={16} className="text-white" />
                            </div>
                            <span className="text-gray-800 font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
