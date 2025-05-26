'use client';
import { motion } from 'framer-motion';
import { FiTool, FiArrowRight } from 'react-icons/fi';

export default function ServiceCard({ 
  title, 
  description 
}: {
  title: string;
  description: string;
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
      {/* Icon Header */}
      <div className="bg-gradient-to-r from-blue-900 to-emerald-800 p-6">
        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
          <FiTool className="text-2xl text-white" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* CTA Button */}
        <button className="flex items-center text-blue-900 hover:text-blue-800 transition-colors">
          <span className="font-medium">Learn More</span>
          <FiArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-900 rounded-xl pointer-events-none transition-all duration-300" />
    </motion.div>
  );
}