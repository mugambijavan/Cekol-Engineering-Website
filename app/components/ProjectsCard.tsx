// components/ProjectCard.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectCard({ 
  title, 
  value, 
  location, 
  description,
  year,
  image,
  delay = 0
}: {
  title: string;
  value: string;
  location: string;
  description?: string;
  year?: string;
  image?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-56">
        {image ? (
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="bg-gradient-to-r from-blue-900 to-emerald-800 h-full" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
          <div className="absolute top-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium">
            {value}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center text-gray-600">
            <svg 
              className="w-5 h-5 mr-2 text-blue-900" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <span>{location}</span>
          </div>
          {year && (
            <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
              {year}
            </span>
          )}
        </div>
        
        {description && (
          <p className="text-gray-600 mb-6">{description}</p>
        )}
        
        <div className="mt-auto">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
          <ul className="text-sm text-gray-600 mb-6 space-y-1">
            <li className="flex items-start">
              <svg className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Completed ahead of schedule
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Zero safety incidents
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Client satisfaction award
            </li>
          </ul>
        </div>
        
        <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center">
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
    </motion.div>
  );
}