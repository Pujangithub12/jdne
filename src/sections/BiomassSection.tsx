import React from "react";
import { Leaf, Flame, Shield, TrendingDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

const BiomassSection: React.FC = () => {
  const highlights = [
    {
      icon: Leaf,
      title: "100% Renewable",
      description:
        "Made from agricultural waste and wood residues, supporting a greener Nepal.",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: TrendingDown,
      title: "60% Cost Saving",
      description:
        "Significant reduction in fuel expenses compared to Diesel or LPG.",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: Shield,
      title: "Local & Reliable",
      description:
        "Locally produced pellets ensure energy security and stable pricing.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
  ];

  return (
    <section id="biomass" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <SectionHeader
              title="Sustainable Energy with Biomass Pellets"
              subtitle="Switch to a cleaner, more affordable energy source that's produced right here in Nepal."
              centered={false}
            />

            <div className="mt-10 space-y-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div
                    className={`flex-shrink-0 w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={item.color} size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                to="/biomass"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-green-500/30"
              >
                Learn More About Biomass <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=1000&fit=crop"
                  alt="Biomass Pellets"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Stat Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white">
                      <Flame size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                        Heating Efficiency
                      </p>
                      <p className="text-2xl font-black text-gray-900">
                        4200-4600 kcal/kg
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiomassSection;
