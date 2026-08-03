import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  PencilRuler,
  PenTool,
  Radio,
  LayoutDashboard,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Paperwork and Agreement",
    description:
      "JDNE handles paperwork and agreements, enabling affordable electricity provision. We prioritize renewable energy solutions to support cost savings and promote sustainability.",
  },
  {
    icon: PencilRuler,
    title: "Site Eligibility",
    description:
      "JDNE engineers assess site eligibility and provide a comprehensive generation report, offering valuable insights on the potential of renewable energy generation at the location.",
  },
  {
    icon: PenTool,
    title: "Installation and Permissions",
    description:
      "JDNE handles all aspects of rooftop solar installation, including obtaining necessary permissions and permits, ensuring a seamless process for clients.",
  },
  {
    icon: Radio,
    title: "Utility Connection",
    description:
      "JDNE specializes in smart metering for grid connection, enabling efficient monitoring and management of electricity consumption, contributing to a smarter and more sustainable energy infrastructure.",
  },
  {
    icon: LayoutDashboard,
    title: "Solar On!",
    description:
      "Upon completion of the installation, JDNE provides a user-friendly application that displays real-time generation data and calculates the daily savings achieved through solar energy.",
  },
];

const HowWeWork: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <SectionHeader
          title="How We Work"
          subtitle="A seamless, transparent process from initial consultation to long-term maintenance."
        />

        <div className="relative mt-16">
          {/* Vertical connector line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 md:px-12">
                    <div
                      className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 group ${
                        isEven ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <span className="inline-block text-xs font-bold tracking-wider text-green-600 uppercase mb-3 bg-green-50 px-3 py-1 rounded-full">
                        Step {String(index + 1).padStart(2, "0")}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon Node */}
                  <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                    <div className="w-16 h-16 bg-white rounded-full border-2 border-green-500 flex items-center justify-center text-green-600 shadow-md group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-20" />
                  </div>

                  {/* Empty spacer for alternating layout */}
                  <div className="flex-1 md:px-12 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
