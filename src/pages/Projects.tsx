import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Leaf,
  Droplets,
  MapPin,
  Zap,
  Calendar,
  Layers,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../data/projects";

type ProjectType = "solar" | "biomass" | "hydropower";

const categoryConfig = {
  solar: {
    label: "Solar",
    icon: Sun,
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
  },
  biomass: {
    label: "Biomass",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
  },
  hydropower: {
    label: "Hydropower",
    icon: Droplets,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
};

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectType | "all">("all");

  const visibleProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  const tabs: { key: ProjectType | "all"; label: string }[] = [
    { key: "all", label: "All Projects" },
    { key: "solar", label: "Solar" },
    { key: "biomass", label: "Biomass" },
    { key: "hydropower", label: "Hydropower" },
  ];

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SectionHeader
          title="Our Projects"
          subtitle="Explore our renewable energy installations across Nepal."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.key
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/30"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => {
              const config = categoryConfig[project.type];
              const Icon = config.icon;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={project.mainImage}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${config.badge} shadow-sm`}
                      >
                        <Icon size={14} />
                        {config.label}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3 flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                      <div className="flex items-start gap-2">
                        <Zap size={16} className="text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-400 font-medium">
                            Capacity
                          </p>
                          <p className="text-sm font-semibold text-gray-800">
                            {project.capacity}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-400 font-medium">
                            Location
                          </p>
                          <p className="text-sm font-semibold text-gray-800">
                            {project.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar size={14} />
                          {project.date}
                        </span>
                      </div>
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-sm font-bold text-green-600 hover:text-green-700 flex items-center gap-1 transition-colors"
                      >
                        View Details <ExternalLink size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {visibleProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers className="text-gray-400" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              No projects found
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
