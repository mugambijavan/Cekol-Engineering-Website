'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Construction color palette
const COLORS = {
  primaryBg: "#0a2240",
  cta: "#f59e0b",
  accent: "#ffbe3b",
  white: "#fff",
  border: "#e0e3e7",
  dark: "#18181b",
};

interface Project {
  id: number;
  title: string;
  value: string;
  location: string;
  description: string;
  year: string;
  images: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="rounded-xl shadow-lg overflow-hidden cursor-pointer h-full border"
      style={{ background: COLORS.white, borderColor: COLORS.border }}
      onClick={onClick}
    >
      <div className="relative h-60">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold" style={{ color: COLORS.primaryBg }}>{project.title}</h3>
          <span className="text-sm px-3 py-1 rounded-full" style={{ background: COLORS.cta + "22", color: COLORS.primaryBg }}>
            {project.year}
          </span>
        </div>
        
        <div className="flex items-center mb-2" style={{ color: COLORS.primaryBg }}>
          <LocationIcon />
          <span className="ml-2">{project.location}</span>
        </div>
        
        <p className="mb-4" style={{ color: "#374151" }}>
          {project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold" style={{ color: COLORS.cta }}>
            {project.value}
          </span>
          <button 
            className="font-medium flex items-center"
            style={{ color: COLORS.primaryBg }}
            onClick={onClick}
          >
            View Details
            <ArrowIcon />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);