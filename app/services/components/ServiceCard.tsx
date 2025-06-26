'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// Color palette for construction theme
const COLORS = {
  primaryBg: "#0a2240",
  cta: "#f59e0b",
  accent: "#ffbe3b",
  white: "#fff",
  border: "#e0e3e7",
};

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
      className="rounded-xl shadow-lg overflow-hidden border h-full flex flex-col group"
      style={{
        background: COLORS.white,
        borderColor: COLORS.border
      }}
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
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #18181bcc, transparent)" }}></div>
        <div className="absolute bottom-4 left-4 text-3xl" style={{ color: COLORS.white }}>
          {service.icon}
        </div>
      </div>
      
      <div className="p-6 flex-1">
        <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.primaryBg }}>
          {service.title}
        </h3>
        
        <p className="mb-6" style={{ color: "#374151" }}>
          {service.description}
        </p>
      </div>
      
      <motion.div
        initial={false}
        animate={{ 
          backgroundColor: isHovered ? COLORS.primaryBg : COLORS.white,
          color: isHovered ? COLORS.white : COLORS.primaryBg
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
            style={{
              color: isHovered ? COLORS.cta : COLORS.primaryBg
            }}
          >
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </motion.svg>
        </button>
      </motion.div>
    </motion.div>
  );
}