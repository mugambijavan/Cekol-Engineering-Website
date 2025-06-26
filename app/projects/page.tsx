// app/projects/page.tsx
'use client';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectCard from './components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Define projects directly in the component
  const PROJECTS = [
    {
      id: 1,
      title: "Caitlin Heights Apartments",
      value: "KES 120M",
      location: "Shanzu, Mombasa",
      description: "44-unit luxury apartment complex featuring modern amenities and ocean views. The project included comprehensive engineering solutions from foundation to finishing, with special attention to coastal environmental factors.",
      year: "2023",
      images: [
        "/images/Image1.jpeg",
        "/images/Image2.jpeg",
        "/images/Image3.jpeg",
        "/images/Image4.jpeg"
      ]
    },
    {
      id: 2,
      title: "Kapkatunga Kipyemit Electric Fence",
      value: "KES 14.5M",
      location: "Kericho County, Kenya",
      description: "Construction of 18km wildlife electric fence with associated infrastructure to protect communities from animal encroachment. Commissioned by Kenya Wildlife Service with 180-day completion timeline. Included specialized equipment leasing from government transport division.",
      year: "2023-2024",
      images: [
        "/images/fence1.jpeg",
        "/images/fence2.jpeg",
        "/images/fence3.jpeg",
        "/images/fence4.jpeg"
      ]
    },
    {
      id: 3,
      title: "Uhuru Business Park",
      value: "KES 349.5M",
      location: "Kisumu County, Kenya",
      description: "Subcontracted construction of market complex including earthworks, stormwater drainage, concrete/cabro paving, driveways, parking, landscaping, power house, ablution block and gate house. Completed within 12-month period for Ministry of Transport & Urban Development.",
      year: "2019-2020",
      images: [
        "/images/market2.jpeg",
        "/images/market1.jpeg",
      ]
    }
    // Add more projects as needed
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-gray-50">
      <HeroSection 
        title="Our Engineering Legacy"
        subtitle="Transforming landscapes across East Africa"
        variant="projects"
      />
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects Portfolio
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our landmark projects that showcase our expertise in delivering complex infrastructure solutions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-sm"
          >
            <div className="min-h-screen px-4 flex items-center justify-center">
              <div 
                className="fixed inset-0"
                onClick={closeProject}
              ></div>
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              >
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="flex flex-col lg:flex-row h-[90vh]">
                  {/* Image Gallery */}
                  <div className="lg:w-7/12 relative">
                    <div className="relative h-96 lg:h-full">
                      <Image
                        src={selectedProject.images[activeImageIndex]}
                        alt={`${selectedProject.title} - Image ${activeImageIndex + 1}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === activeImageIndex 
                              ? 'bg-blue-700' 
                              : 'bg-white/80 hover:bg-white'
                          }`}
                          aria-label={`View image ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    <div className="absolute bottom-4 right-4 bg-white/90 text-gray-800 text-sm px-3 py-1 rounded-lg">
                      {activeImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="lg:w-5/12 p-6 lg:p-8 overflow-y-auto">
                    <div className="flex justify-between items-start mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedProject.title}
                      </h2>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedProject.year}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{selectedProject.location}</span>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Value</h3>
                      <p className="text-xl font-bold text-blue-900">{selectedProject.value}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Gallery</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {selectedProject.images.map((img, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveImageIndex(index)}
                            className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                              index === activeImageIndex
                                ? 'border-blue-600 scale-105'
                                : 'border-transparent hover:border-blue-400'
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`Thumbnail ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                            {index === 0 && (
                              <span className="absolute top-1 left-1 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded">
                                Main
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Define the Project type
type Project = {
  id: number;
  title: string;
  value: string;
  location: string;
  description: string;
  year: string;
  images: string[];
};