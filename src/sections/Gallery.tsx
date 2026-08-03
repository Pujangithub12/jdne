import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const galleryItems = [
  {
    id: 1,
    name: "Industrial Solar Array",
    location: "Butwal, Nepal",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Commercial Rooftop Solar",
    location: "Kathmandu, Nepal",
    image:
      "https://images.unsplash.com/photo-1508514177221-18d1427d5ea2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Residential Solar System",
    location: "Lalitpur, Nepal",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Solar Farm Project",
    location: "Biratnagar, Nepal",
    image:
      "https://images.unsplash.com/photo-1466611653911-954ff21caafc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "Smart Solar Grid",
    location: "Pokhara, Nepal",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    name: "Hybrid Solar Power",
    location: "Chitwan, Nepal",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
  },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeader
            title="Solar Solutions Gallery"
            subtitle="Explore our specialized solar installations across diverse locations, delivering clean energy for a sustainable future."
            centered={true}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Always visible info overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-12">
                <h3 className="text-white text-xl font-bold mb-1">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-500/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
