// app/services/page.tsx
'use client';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from './components/ServiceCard';
import Image from 'next/image';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  // Services data with updated descriptions and images
  const SERVICES = [
    {
      id: 1,
      icon: '🏗️',
      title: 'Building Construction',
      description: 'We undertake construction projects across various sectors, including commercial buildings, schools, hospitals, hotels, and industrial complexes.',
      caseStudies: ['Shanzu Mixed-Use Complex', 'Nyali Heights Apartments', 'Mombasa International School'],
      image: '/images/service1.jpeg'
    },
    {
      id: 2,
      icon: '🚜',
      title: 'Grading Works',
      description: 'Private and commercial earthwork and land grading services nationwide, handling everything from digging footings to grading roadways.',
      caseStudies: ['Vipingo Ridge Development', 'Two Rivers Site Preparation', 'Konza Techno City'],
      image: '/images/service2.jpeg'
    },
    {
      id: 3,
      icon: '🪨',
      title: 'Graveling Works',
      description: 'Comprehensive road gravelling solutions with appropriate construction methods and materials for all road types.',
      caseStudies: ['Coastal Highway Gravelling', 'Northern Kenya Access Roads', 'Rural Connectivity Project'],
      image: '/images/service3.jpeg'
    },
    {
      id: 4,
      icon: '💧',
      title: 'Water & Drainage Works',
      description: 'Complete water and sanitary line installations with precision equipment for municipalities and commercial projects.',
      caseStudies: ['Kwale Water Supply Project', 'Mombasa Sewerage System', 'Tana River Irrigation Network'],
      image: '/images/service4.jpg'
    },
    {
      id: 5,
      icon: '🔄',
      title: 'Culvert Installation',
      description: 'Expert design and installation of drainage culverts for effective flood management and infrastructure development.',
      caseStudies: ['Nairobi Expressway Drainage', 'Thika Highway Expansion', 'Coastal Flood Management'],
      image: '/images/service5.jpeg'
    },
    {
      id: 6,
      icon: '🛣️',
      title: 'Road Tarmacking',
      description: 'Innovative tarmacking solutions for all road types including urban, rural, parking lots and courts.',
      caseStudies: ['Mombasa-Malindi Highway', 'Nairobi Industrial Park Roads', 'Kisumu Lakefront Development'],
      image: '/images/service6.jpeg'
    }
  ];

  const STATS = [
    { value: "12+", label: "Years Experience" },
    { value: "KES 350M+", label: "Projects Completed" },
    { value: "112+", label: "Team Members" },
    { value: "50+", label: "Happy Clients" }
  ];

  const openService = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeService = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-gray-50">
      <HeroSection 
        title="Our Engineering Services"
        subtitle="Comprehensive solutions for East Africa's infrastructure needs"
        variant="services"
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
              Our Core Engineering Services
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering excellence across all project phases with innovative engineering solutions and quality craftsmanship
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => openService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-6">Why Choose CEKOL Engineering?</h3>
            <p className="text-xl max-w-3xl mx-auto mb-12">
              With over a decade of experience, we bring technical expertise, innovative solutions, and unwavering commitment to every project
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            {/* Blurred background with service image */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-80 blur-lg scale-125"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
            </div>
            
            <div 
              className="fixed inset-0"
              onClick={closeService}
            ></div>
            
            <div className="min-h-screen px-4 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white/95 backdrop-blur-sm rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/20"
              >
                <button
                  onClick={closeService}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{selectedService.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedService.title}
                      </h2>
                      <div className="w-16 h-1 bg-blue-900 mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none mb-8">
                    <p className="text-gray-700 text-lg">
                      {selectedService.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Featured Case Studies
                    </h3>
                    <ul className="space-y-3">
                      {selectedService.caseStudies.map((study, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-start"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-lg">{study}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={closeService}
                      className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center"
                    >
                      Close
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </button>
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

// Define service type with image property
type Service = {
  id: number;
  icon: string;
  title: string;
  description: string;
  caseStudies: string[];
  image: string;
};