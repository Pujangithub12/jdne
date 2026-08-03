import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sun, Zap, Flame } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const plans = [
  {
    icon: <Sun className="w-8 h-8" />,
    name: 'Rooftop Solar',
    price: '$750',
    unit: '/kW',
    description: 'Perfect for residential and small commercial buildings.',
    features: [
      'Site feasibility report',
      'High-efficiency panels',
      'Smart net metering',
      'Mobile monitoring app',
      '10-year warranty',
    ],
    cta: 'Get Started',
    popular: false,
    color: 'bg-white',
    iconColor: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    name: 'Transmission Line',
    price: '$1,200',
    unit: '/km',
    description: 'Complete grid infrastructure and substation solutions.',
    features: [
      'Topographic survey',
      'Tower design & testing',
      'Foundation works',
      'Stringing & commissioning',
      'Maintenance support',
    ],
    cta: 'Consult Experts',
    popular: true,
    color: 'bg-green-600 text-white',
    iconColor: 'bg-white/20 text-white',
  },
  {
    icon: <Flame className="w-8 h-8" />,
    name: 'Biomass Conversion',
    price: '$500',
    unit: '/Ton',
    description: 'Fuel-switching audits for industrial heat processes.',
    features: [
      'Efficiency audit',
      'Boiler modification',
      'Savings estimate',
      'Operator training',
      'Annual maintenance',
    ],
    cta: 'Request Audit',
    popular: false,
    color: 'bg-white',
    iconColor: 'bg-orange-100 text-orange-600',
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Service Packages"
          subtitle="Transparent pricing models tailored to different energy needs and scales."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${plan.color === 'bg-white' ? 'border-gray-100 shadow-lg' : 'border-green-500 shadow-2xl shadow-green-500/20'} flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-gray-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Recommended
                </div>
              )}

              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${plan.iconColor}`}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${plan.color === 'bg-white' ? 'text-gray-900' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.color === 'bg-white' ? 'text-gray-500' : 'text-green-100'}`}>
                    {plan.description}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${plan.color === 'bg-white' ? 'text-gray-900' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg font-medium ${plan.color === 'bg-white' ? 'text-gray-500' : 'text-green-100'}`}>
                    {plan.unit}
                  </span>
                </div>
                <p className={`text-xs mt-2 font-bold uppercase tracking-wider ${plan.color === 'bg-white' ? 'text-gray-400' : 'text-green-200'}`}>
                  Estimated starting price
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.color === 'bg-white' ? 'bg-green-100 text-green-600' : 'bg-white/20 text-white'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={`text-sm font-medium ${plan.color === 'bg-white' ? 'text-gray-600' : 'text-white/90'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.color === 'bg-white' 
                  ? 'bg-gray-900 text-white hover:bg-green-600' 
                  : 'bg-white text-green-600 hover:bg-yellow-400 hover:text-gray-900'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
