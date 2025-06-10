    // app/projects/components/ProjectCard.tsx
    'use client';
    import { motion } from 'framer-motion';
    import Image from 'next/image';

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
        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full"
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
            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {project.year}
            </span>
            </div>
            
            <div className="flex items-center text-gray-600 mb-2">
            <LocationIcon />
            <span className="ml-2">{project.location}</span>
            </div>
            
            <p className="text-gray-700 line-clamp-2 mb-4">
            {project.description}
            </p>
            
            <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-blue-900">
                {project.value}
            </span>
            <button 
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
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