'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// Enhanced color palette for construction theme
const COLORS = {
  primaryBg: "#0a2240",
  sectionBg: "#f8fafc",
  dark: "#1e293b",
  cta: "#f59e0b",
  accent: "#ffbe3b",
  white: "#ffffff",
  border: "#e2e8f0",
  success: "#10b981",
  lightGray: "#f1f5f9",
  darkBlue: "#1e40af",
};

// Enhanced service interface to match the page.tsx structure
interface Service {
  id: number;
  icon: string;
  title: string;
  shortDesc: string;
  description: string;
  detailedFeatures: string[];
  specifications: string[];
  caseStudies: Array<{
    name: string;
    value: string;
    duration: string;
  }>;
  image: string;
  expertise: string;
  projects: string;
}

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-2xl shadow-lg overflow-hidden border h-full flex flex-col group cursor-pointer"
      style={{
        background: COLORS.white,
        borderColor: COLORS.border
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Service image with overlay */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ 
          background: `linear-gradient(135deg, ${COLORS.primaryBg}99 0%, transparent 50%, ${COLORS.dark}66 100%)` 
        }}></div>
        
        {/* Service icon */}
        <div className="absolute top-4 left-4">
          <div 
            className="text-4xl p-3 rounded-xl backdrop-blur-sm border"
            style={{ 
              background: COLORS.white + "20",
              borderColor: COLORS.white + "30",
              color: COLORS.white
            }}
          >
            {service.icon}
          </div>
        </div>
        
        {/* Expertise badge */}
        <div className="absolute top-4 right-4">
          <div 
            className="px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border"
            style={{ 
              background: COLORS.cta + "90",
              borderColor: COLORS.cta,
              color: COLORS.white
            }}
          >
            {service.expertise}
          </div>
        </div>

        {/* Projects completed badge */}
        <div className="absolute bottom-4 right-4">
          <div 
            className="px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border"
            style={{ 
              background: COLORS.success + "90",
              borderColor: COLORS.success,
              color: COLORS.white
            }}
          >
            {service.projects}
          </div>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Service title and short description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.primaryBg }}>
            {service.title}
          </h3>
          <div className="w-12 h-1 mb-3 rounded-full" style={{ background: COLORS.cta }}></div>
          <p className="text-sm font-medium opacity-75 mb-2" style={{ color: COLORS.dark }}>
            {service.shortDesc}
          </p>
        </div>

        {/* Key features preview */}
        <div className="mb-4 flex-1">
          <div className="space-y-2">
            {service.detailedFeatures.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start text-sm">
                <div 
                  className="w-4 h-4 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5"
                  style={{ background: COLORS.cta + "20" }}
                >
                  <svg className="w-2.5 h-2.5" style={{ color: COLORS.cta }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="opacity-75 leading-tight">{feature}</span>
              </div>
            ))}
            {service.detailedFeatures.length > 3 && (
              <div className="text-sm font-medium mt-2" style={{ color: COLORS.cta }}>
                +{service.detailedFeatures.length - 3} more capabilities
              </div>
            )}
          </div>
        </div>

        {/* Case studies preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2" style={{ color: COLORS.primaryBg }}>
            Recent Projects:
          </h4>
          <div className="space-y-1">
            {service.caseStudies.slice(0, 2).map((study, index) => (
              <div key={index} className="text-xs flex justify-between items-center py-1">
                <span className="opacity-75 truncate mr-2">{study.name}</span>
                <span className="font-medium whitespace-nowrap" style={{ color: COLORS.success }}>
                  {study.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Interactive footer button */}
      <motion.div
        initial={false}
        animate={{ 
          backgroundColor: isHovered ? COLORS.primaryBg : COLORS.lightGray,
          color: isHovered ? COLORS.white : COLORS.primaryBg
        }}
        className="px-6 py-4 border-t"
        style={{ borderColor: COLORS.border }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-sm">
              {isHovered ? 'View Full Details' : 'Learn More'}
            </div>
            <div className="text-xs opacity-75">
              {isHovered ? 'Case studies & specifications' : 'Click to explore'}
            </div>
          </div>
          
          <motion.div
            animate={{ 
              x: isHovered ? 5 : 0,
              rotate: isHovered ? 0 : 0
            }}
            className="flex items-center"
          >
            <motion.svg
              animate={{ 
                scale: isHovered ? 1.2 : 1,
                color: isHovered ? COLORS.cta : COLORS.primaryBg
              }}
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </motion.svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Hover overlay effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${COLORS.cta}08, ${COLORS.primaryBg}08)`,
          borderRadius: '1rem'
        }}
      />
    </motion.div>
  );
}