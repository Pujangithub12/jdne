import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Zap,
  Calendar,
  Shield,
  User,
  Maximize,
  Battery,
  Layers,
  Sun,
  Leaf,
  Droplets,
} from "lucide-react";
import { projects } from "../data/projects";

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

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === parseInt(id ?? "")) ?? null;
  const [activeImage, setActiveImage] = useState<string>(
    project?.mainImage ?? project?.galleryImages[0] ?? "",
  );

  useEffect(() => {
    setActiveImage(project?.mainImage ?? project?.galleryImages[0] ?? "");
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Project not found
        </h2>
        <Link
          to="/projects"
          className="flex items-center gap-2 text-green-600 font-bold hover:underline"
        >
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>
    );
  }

  const config = categoryConfig[project.type];
  const Icon = config.icon;

  // Safe array handling for rendering
  const allImages = [project.mainImage, ...project.galleryImages].filter(
    (img): img is string => Boolean(img),
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 font-medium transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200"
            >
              {activeImage ? (
                <img
                  src={activeImage}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                  No images available
                </div>
              )}
            </motion.div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === img
                        ? "border-green-500 scale-95"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.name} thumbnail ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Project Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <span
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold ${config.badge} mb-4`}
              >
                <Icon size={16} />
                {config.label}
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                {project.name}
              </h1>
              <div className="flex items-center gap-2 mt-4 text-gray-500 font-medium">
                <MapPin size={20} className="text-green-600" />
                {project.location}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                About Project
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                  Capacity
                </p>
                <div className="flex items-center gap-2 text-gray-900 font-bold">
                  <Zap size={18} className="text-amber-500" />
                  {project.capacity}
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                  Savings
                </p>
                <div className="flex items-center gap-2 text-green-600 font-bold">
                  <Zap size={18} />
                  {project.savings}
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                  Completion
                </p>
                <div className="flex items-center gap-2 text-gray-900 font-bold">
                  <Calendar size={18} className="text-blue-500" />
                  {project.date}
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Layers size={22} className="text-green-600" />
                Technical Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <SpecItem
                  icon={<Battery size={18} />}
                  label="Panels / Equipment"
                  value={project.panels || "N/A"}
                />
                <SpecItem
                  icon={<Zap size={18} />}
                  label="Inverter"
                  value={project.inverter || "N/A"}
                />
                <SpecItem
                  icon={<Layers size={18} />}
                  label="Modules"
                  value={project.modules || "N/A"}
                />
                <SpecItem
                  icon={<Maximize size={18} />}
                  label="Project Area"
                  value={project.area || "N/A"}
                />
                <SpecItem
                  icon={<Shield size={18} />}
                  label="Warranty"
                  value={project.warranty || "N/A"}
                />
                <SpecItem
                  icon={<User size={18} />}
                  label="Owner / Client"
                  value={project.owner || "N/A"}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SpecItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 text-gray-400">{icon}</div>
    <div>
      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
        {label}
      </p>
      <p className="text-sm font-semibold text-gray-800 mt-0.5">{value}</p>
    </div>
  </div>
);

export default ProjectDetails;
