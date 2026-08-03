import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Kishor from "../assets/founders/kishor.jpg";
import Kuber from "../assets/founders/kubermani.jpg";

const testimonials = [
  {
    id: 1,
    name: "Kishor Neupane",
    role: "Director",
    quote:
      "At JDNE, we believe in the expertise and reliability of our trusted partners who provide ISO certified qualified products. Through these valuable collaborations, we ensure the delivery of high-quality solutions that meet international standards for excellence.",
    image: Kishor,
  },
  {
    id: 2,
    name: "Kuber Mani Nepal",
    role: "Advisor",
    quote:
      "Utilizing 20 years of hydro experience and trusted partners, I aspire to revolutionize Nepal with green energy solutions.",
    image: Kuber,
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="We Say !"
          subtitle="Trust is built on results. Here's how we've helped businesses and communities achieve energy independence."
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Main Carousel Area - Fixed Height */}
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-gray-100 min-h-[400px] md:min-h-[360px] flex items-center">
            <Quote className="absolute top-10 left-10 text-green-100 w-24 h-24 -z-0" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col md:flex-row items-center gap-12 w-full"
              >
                <div className="w-48 h-48 shrink-0 relative">
                  <div className="absolute inset-0 bg-green-200 rounded-full translate-x-3 translate-y-3" />
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-lg"
                  />
                </div>

                <div className="flex-grow text-center md:text-left">
                  <p className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed mb-8 line-clamp-6">
                    "{testimonials[current].quote}"
                  </p>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mt-1">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-8 right-4 md:-right-8 flex justify-between pointer-events-none">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-400 hover:text-green-600 hover:scale-110 transition-all pointer-events-auto border border-gray-100"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-400 hover:text-green-600 hover:scale-110 transition-all pointer-events-auto border border-gray-100"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i ? "w-8 bg-green-600" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
