import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 lg:bg-black/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/30 text-sm font-bold mb-6 backdrop-blur-sm">
              Sustainable Energy Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-8">
              Powering Nepal with <br />
              <span className="text-yellow-400">Clean Energy</span> <br />
              <span className="text-green-400">For Tomorrow</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              Powering homes and industries with reliable solar, biomass, and
              hydro energy. Join the movement towards energy independence and
              environmental sustainability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="bg-green-600 hover:bg-green-700 text-white px-14 py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-green-500/40 cursor-pointer group"
              >
                Explore Solutions
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <Link
          to="services"
          smooth={true}
          className="text-white/50 hover:text-white cursor-pointer transition-colors"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
