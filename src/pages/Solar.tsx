import React from "react";
import {
  Sun,
  Battery,
  BatteryCharging,
  CheckCircle2,
  FileText,
  MapPin,
  Wrench,
  BarChart3,
  Zap,
  PlugZap,
  Lightbulb,
  RefreshCw,
  ClipboardCheck,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import onGridImage from "../assets/solar/ongrid.jpg";
import offGridImage from "../assets/solar/Off-Grid-System.png";
import hybridImage from "../assets/solar/hybrid.webp";
import heroImage from "../assets/solar/solar-rupandehi.jpg";

const checklist = [
  "Smart monitoring app integration",
  "Structure design with wind-load certification",
  "Anti-soiling coating for low maintenance",
  "AEPC-certified equipment supply",
];

const systemTypes = [
  {
    icon: PlugZap,
    title: "On-Grid Systems",
    description:
      "Grid-tied solar systems connected directly to the national grid with net-metering, letting you offset consumption and export surplus power without the cost of battery storage.",
    image: onGridImage,
  },
  {
    icon: Battery,
    title: "Off-Grid Systems",
    description:
      "Fully independent systems paired with battery storage, engineered for remote sites with no grid access, delivering reliable power around the clock.",
    image: offGridImage,
  },
  {
    icon: BatteryCharging,
    title: "Hybrid Systems",
    description:
      "A combination of grid connection and battery backup, keeping your power on during outages while still benefiting from net-metering when the grid is available.",
    image: hybridImage,
  },
];

const endToEndServices = [
  { icon: FileText, title: "Paperwork and Agreement" },
  { icon: ClipboardCheck, title: "Site Eligibility" },
  { icon: MapPin, title: "Roof-Top/ Ground Mounted Solar Installation" },
  { icon: BarChart3, title: "Sun Energy Analytics" },
  { icon: Zap, title: "Transmission Lines" },
  { icon: Lightbulb, title: "Economical Lighting" },
  { icon: Wrench, title: "Operation and Maintenance" },
  { icon: RefreshCw, title: "Recycling Excess Energy" },
];

const Solar: React.FC = () => {
  return (
    <section id="solar" className="bg-white">
      {/* Banner */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Solar Energy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-gray-900/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Solar Energy <br />
                <span className="text-yellow-400">Systems</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                Precision-engineered solar solutions for residential,
                commercial, and industrial power needs across Nepal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1000"
                alt="Solar Panel Installation"
                className="w-full h-[500px] object-cover rounded-3xl"
              />
              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Solar Energy Systems
              </h3>
              <p className="mt-1 text-sm font-bold text-yellow-600 uppercase tracking-wider">
                High-Performance PV Systems
              </p>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2 pt-4">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We provide end-to-end solar services, including site survey,
                custom system design, procurement of Tier-1 components, and
                professional installation. Our systems are optimized for maximum
                energy harvest in Nepal's varied climatic conditions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Sun className="text-yellow-600" size={22} />
                    <h4 className="font-bold text-gray-900">Rooftop PV</h4>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Net-metering ready systems for homes and businesses
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Battery className="text-yellow-600" size={22} />
                    <h4 className="font-bold text-gray-900">Hybrid Storage</h4>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Battery-backed systems for 24/7 energy independence
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Key Highlights
                </p>
                {checklist.map((item, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <CheckCircle2 className="text-yellow-600" size={18} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Solar Systems */}
      <div className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Types of Solar Installations"
            subtitle="We design and install on-grid, off-grid, and hybrid solar systems tailored to your energy needs and site conditions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {systemTypes.map((type, index) => (
              <div
                key={index}
                className="rounded-3xl border border-yellow-100 bg-yellow-50/40 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <div className="w-14 h-14 bg-yellow-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg -mt-16 relative z-10 border-4 border-white">
                    <type.icon size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-xl mb-3">
                    {type.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* End-to-End Services */}
      <div className="pb-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-24">
          <SectionHeader
            title="We Provide End-to-End Services"
            subtitle="JDNE delivers comprehensive services in rooftop solar and ground-mounted systems, encompassing installation, maintenance, training, and sustainable energy solutions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {endToEndServices.map((service, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-yellow-200 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="absolute top-3 right-4 text-4xl font-black text-gray-50 group-hover:text-yellow-50 transition-colors select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10 w-14 h-14 shrink-0 bg-yellow-500 group-hover:bg-yellow-600 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20 transition-colors duration-300">
                  <service.icon className="text-white" size={26} />
                </div>
                <h4 className="relative z-10 font-bold text-gray-900 text-base leading-snug">
                  {service.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solar;
