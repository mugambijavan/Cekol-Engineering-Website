'use client';
import { motion } from 'framer-motion';
import { FiMapPin, FiDollarSign } from 'react-icons/fi';

export default function ProjectCard({ 
  title, 
  value, 
  location, 
  description 
}: {
  title: string;
  value: string;
  location: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Image placeholder - replace with actual image */}
      <div className="h-48 bg-gradient-to-r from-blue-900 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 transition-all duration-300 group-hover:bg-black/20" />
      </div>

      <div className="p-6">
        {/* Project Value Ribbon */}
        <div className="absolute top-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
          <FiDollarSign className="mr-2" /> {value}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        
        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <FiMapPin className="mr-2 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        {description && (
          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
        )}

        {/* CTA Button */}
        <button className="w-full bg-transparent border-2 border-blue-900 text-blue-900 py-2 rounded-lg hover:bg-blue-900 hover:text-white transition-colors duration-300 flex items-center justify-center">
          View Project Details
          <svg 
            className="ml-2 w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </button>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-900 rounded-xl pointer-events-none transition-all duration-300" />
    </motion.div>
  );
}