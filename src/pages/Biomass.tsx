import React from "react";
import {
  Flame,
  CheckCircle2,
  Factory,
  Leaf,
  Shield,
  DollarSign,
  Globe,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import pelletsImage from "../assets/pellets.jpg";
import pelletVideo1 from "../assets/biomass/pellet-video1.mp4";
import pelletVideo2 from "../assets/biomass/pellet-video2.mp4";
import pelletVideo3 from "../assets/biomass/pellet-video3.mp4";

const Biomass: React.FC = () => {
  const reasons = [
    {
      icon: Leaf,
      title: "Renewable & Sustainable",
      desc: "Sourced from wood waste and agricultural residues. Promotes a circular economy and reduces environmental impact.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: DollarSign,
      title: "Significant Cost Savings",
      desc: "More affordable than traditional fuels with stable pricing. Long-term financial benefits for consumers and businesses.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Shield,
      title: "Energy Independence",
      desc: "Reduces reliance on imported fossil fuels. Local production promotes self-sufficiency and shields against price fluctuations.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Globe,
      title: "Foreign Currency Reduction",
      desc: "Made in Nepal pellets reduce dependency on imports, decreasing foreign currency expenditure and fostering economic growth.",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const comparisons = [
    {
      fuel: "Diesel",
      savings: "68%",
      pellets: "2.217 kg",
      color: "bg-red-50 border-red-200 text-red-700",
    },
    {
      fuel: "LPG",
      savings: "48%",
      pellets: "2.609 kg",
      color: "bg-orange-50 border-orange-200 text-orange-700",
    },
    {
      fuel: "Petrol",
      savings: "66%",
      pellets: "2.415 kg",
      color: "bg-amber-50 border-amber-200 text-amber-700",
    },
    {
      fuel: "Coal",
      savings: "29%",
      pellets: "1.304 kg",
      color: "bg-gray-50 border-gray-200 text-gray-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={pelletsImage}
          alt="Biomass energy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-orange-800/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Why Biomass Pellets?
            </h1>
            <p className="text-lg md:text-xl text-orange-100 max-w-2xl leading-relaxed">
              Clean, affordable, and locally produced energy for Nepal's future
            </p>
          </div>
        </div>
      </div>

      {/* Why Biomass */}
      <section className="py-20 bg-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Biomass Pellets?"
            subtitle="A smarter energy choice for homes, businesses, and industries across Nepal"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100"
              >
                <div
                  className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-5`}
                >
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pellet Production Videos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Biomass Pellets in Action"
            subtitle="A closer look at pellet production and use across our facilities"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[pelletVideo1, pelletVideo2, pelletVideo3].map((video, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-lg border border-orange-100 bg-black"
              >
                <video
                  src={video}
                  controls
                  playsInline
                  className="w-full aspect-video object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Stoves — Redesigned with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Types of Stoves"
            subtitle="Tailored solutions for every scale — from households to heavy industry"
          />

          <div className="mt-16 space-y-24">
            {/* SME Stoves */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-orange-200 rounded-3xl opacity-30 group-hover:opacity-50 transition duration-500 blur-xl" />
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                    alt="SME biomass stove in a bakery"
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      SME
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Factory className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    SME Stoves
                  </h3>
                </div>
                <p className="text-orange-600 font-medium text-lg mb-4">
                  Small & Medium Enterprises
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Designed for bakeries, food processing units, dairies, and
                  small manufacturing workshops. These stoves deliver consistent
                  thermal output while cutting fuel costs by nearly half
                  compared to LPG or diesel. Their compact footprint makes them
                  ideal for businesses with limited space but high energy
                  demands.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <div className="w-10 h-10 bg-orange-200 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-orange-700 font-bold text-sm">
                        01
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        Top-Feeding Stoves
                      </h4>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Pellets are loaded from the top into a built-in hopper,
                        allowing steady heat generation over extended periods.
                        Perfect for batch processes like baking or boiling that
                        require uninterrupted heat for hours without frequent
                        refilling.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <div className="w-10 h-10 bg-orange-200 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-orange-700 font-bold text-sm">
                        02
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        Side-Feeding Stoves
                      </h4>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Features lateral pellet feeding with an adjustable flow
                        rate for precision heat control. Operators can fine-tune
                        temperature on the fly, making it ideal for processes
                        with varying energy needs like frying, roasting, or
                        intermittent heating cycles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Household Stoves */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Leaf className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Household Stoves
                  </h3>
                </div>
                <p className="text-green-600 font-medium text-lg mb-4">
                  Domestic Cooking & Heating
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  A clean, modern replacement for LPG cylinders in Nepali homes.
                  These stoves are engineered for daily cooking from simmering
                  daal to high-heat stir-frying. while reducing monthly fuel
                  expenses by up to 50%. Their ergonomic design fits seamlessly
                  into standard kitchen layouts, and the automatic ignition
                  system makes them as convenient as traditional gas stoves.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Substantial reduction in monthly fuel costs vs LPG",
                    "Compact and user-friendly design",
                    "Safe with consistent heat output",
                    "Lower greenhouse gas emissions",
                    "Promotes cleaner energy at home",
                    "Easy pellet refilling with minimal ash cleanup",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-3 bg-green-50 rounded-lg"
                    >
                      <CheckCircle2
                        className="text-green-500 shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="text-base text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group order-1 lg:order-2">
                <div className="absolute -inset-4 bg-green-200 rounded-3xl opacity-30 group-hover:opacity-50 transition duration-500 blur-xl" />
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop"
                    alt="Household biomass stove in a modern kitchen"
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute top-6 right-6">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Home
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industrial Stoves */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gray-300 rounded-3xl opacity-30 group-hover:opacity-50 transition duration-500 blur-xl" />
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                    alt="Industrial biomass burner system"
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Industrial
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Flame className="text-gray-700" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Industrial Stoves
                  </h3>
                </div>
                <p className="text-gray-500 font-medium text-lg mb-4">
                  Large-Scale Operations
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Built for heavy-duty applications across food processing,
                  plastics, textiles, brick kilns, and large manufacturing
                  plants. These high-capacity systems replace coal and diesel
                  burners entirely, slashing fuel costs by up to 68% while
                  meeting strict emission standards. Automated feeding and ash
                  removal minimize labor requirements and ensure 24/7 operation.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-gray-700 font-bold text-sm">
                        01
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        100,000-Calorie Burners
                      </h4>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Mid-range thermal output for medium-sized industrial
                        applications such as steam boilers, rotary dryers, and
                        large heating systems. Delivers powerful, stable heat
                        with a compact footprint and fully automated pellet feed
                        control.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-gray-700 font-bold text-sm">
                        02
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        30,000,000-Calorie Burners
                      </h4>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Maximum thermal output for large-scale manufacturing
                        plants, cement pre-heating, and massive food processing
                        units. Replaces heavy fuel oil systems completely, with
                        integrated heat recovery and multi-stage combustion for
                        peak efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison - Simple Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Cost Savings Comparison"
            subtitle="Biomass pellets are an eco-friendly renewable fuel made from agricultural residues, wood waste, and other organic materials. Compared to traditional energy sources such as coal, diesel, and LPG, biomass pellets produce significantly lower greenhouse gas emissions, helping reduce environmental impact."
          />
          <div className="mt-12 max-w-5xl mx-auto">
            {/* Biomass pellet specs banner */}
            <div className="bg-orange-50 rounded-xl p-8 border border-orange-100 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Flame className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Biomass Pellet
                  </h3>
                  <p className="text-sm text-orange-600 font-semibold mt-1">
                    30 Rs/kg | 4200-4600 kcal/kg | &lt;10% moisture | &lt;3% ash
                  </p>
                </div>
              </div>
            </div>

            {/* Clean comparison table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-base">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-8 py-5 font-semibold text-gray-700 text-base">
                      Fuel Type
                    </th>
                    <th className="text-center px-8 py-5 font-semibold text-gray-700 text-base">
                      You Save
                    </th>
                    <th className="text-right px-8 py-5 font-semibold text-gray-700 text-base">
                      Pellets Needed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                    >
                      <td className="px-8 py-5 font-medium text-gray-900 text-base">
                        {item.fuel}
                      </td>
                      <td className="px-8 py-5 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full font-bold text-sm">
                          {item.savings} cheaper
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right text-gray-600 text-base">
                        {item.pellets}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biomass;
