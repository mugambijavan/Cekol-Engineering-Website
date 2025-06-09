// components/ServiceCard.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  delay?: number;
};

export default function ServiceCard({ 
  title, 
  description,
  icon,
  image,
  delay = 0
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-48">
        {image && (
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/50 flex items-end p-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center text-2xl">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="mt-auto text-blue-900 font-medium hover:underline flex items-center">
          View Case Studies
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
    </motion.div>
  );
}