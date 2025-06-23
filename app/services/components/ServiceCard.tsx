// app/services/components/ServiceCard.tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  caseStudies: string[];
  image: string;
}

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Service image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-3xl text-white">
          {service.icon}
        </div>
      </div>
      
      <div className="p-6 flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        
        <p className="text-gray-700 mb-6">
          {service.description}
        </p>
      </div>
      
      <motion.div
        initial={false}
        animate={{ 
          backgroundColor: isHovered ? '#1e40af' : '#f3f4f6',
          color: isHovered ? 'white' : '#1e40af'
        }}
        className="px-6 py-3"
      >
        <button 
          onClick={onClick}
          className="w-full flex items-center justify-between font-medium"
        >
          <span>View Case Studies</span>
          <motion.svg
            animate={{ x: isHovered ? 5 : 0 }}
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </motion.svg>
        </button>
      </motion.div>
    </motion.div>
  );
}