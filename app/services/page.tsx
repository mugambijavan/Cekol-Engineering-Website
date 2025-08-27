'use client';

import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from './components/ServiceCard';
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

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Enhanced services data with comprehensive details
  const SERVICES = [
    {
      id: 1,
      icon: '🏗️',
      title: 'Building Construction',
      shortDesc: 'Complete construction solutions for all sectors',
      description: 'CEKOL Engineering undertakes comprehensive construction projects across various sectors, including commercial buildings, schools, hospitals, hotels, and industrial complexes. Each project is executed with the highest standards of quality, safety, and adherence to building codes.',
      detailedFeatures: [
        'Commercial office buildings and retail complexes',
        'Educational facilities (schools, universities, training centers)',
        'Healthcare facilities (hospitals, clinics, medical centers)',
        'Hospitality projects (hotels, resorts, conference centers)',
        'Industrial complexes and manufacturing facilities',
        'Residential developments and apartment complexes',
        'Government and institutional buildings'
      ],
      specifications: [
        'Full compliance with Kenya Building Code and international standards',
        'Quality assurance with certified materials and testing',
        'Project management from design to completion',
        'Safety protocols meeting OSHA and local requirements',
        'Environmental impact assessment and mitigation'
      ],
      caseStudies: [
        { name: 'Shanzu Mixed-Use Complex', value: 'KES 85M', duration: '18 months' },
        { name: 'Nyali Heights Apartments', value: 'KES 120M', duration: '24 months' },
        { name: 'Mombasa International School', value: 'KES 95M', duration: '20 months' }
      ],
      image: '/images/service1.jpeg',
      expertise: '12+ Years',
      projects: '45+ Completed'
    },
    {
      id: 2,
      icon: '🚜',
      title: 'Grading Works',
      shortDesc: 'Professional earthwork and land preparation',
      description: 'CEKOL provides nationwide earthwork and land grading services for both private and commercial clients. Our experienced team handles everything from digging footings, floors, and basements to grading grassy fields, berms, parking lots, and roadways.',
      detailedFeatures: [
        'Site preparation and land clearing',
        'Excavation for foundations, footings, and basements',
        'Grading for parking lots and access roads',
        'Slope stabilization and erosion control',
        'Storm water management grading',
        'Athletic field and recreational area grading',
        'Utility trenching and backfilling'
      ],
      specifications: [
        'GPS-guided grading equipment for precision',
        'Soil compaction testing to 95% standard proctor',
        'Proper drainage design and implementation',
        'Environmental protection measures',
        'Aggregate specifications per project requirements'
      ],
      caseStudies: [
        { name: 'Vipingo Ridge Development', value: 'KES 35M', duration: '8 months' },
        { name: 'Two Rivers Site Preparation', value: 'KES 45M', duration: '10 months' },
        { name: 'Konza Techno City Phase 1', value: 'KES 78M', duration: '12 months' }
      ],
      image: '/images/service2.jpeg',
      expertise: '10+ Years',
      projects: '65+ Completed'
    },
    {
      id: 3,
      icon: '🪨',
      title: 'Graveling Works',
      shortDesc: 'Complete road gravelling and surfacing solutions',
      description: 'CEKOL provides comprehensive road gravelling solutions with appropriate construction methods and materials for all road types. Our construction engineers collaborate with clients to determine the best approaches for each specific project.',
      detailedFeatures: [
        'Rural access roads and farm-to-market roads',
        'Urban residential street gravelling',
        'Industrial park internal roads',
        'Parking area surfacing and maintenance',
        'Temporary construction access roads',
        'Recreational trail development',
        'Airport taxiway and apron gravelling'
      ],
      specifications: [
        'Gravel gradation per Kenya Roads Board standards',
        'Proper base preparation and compaction',
        'Drainage integration for longevity',
        'Dust control measures implementation',
        'Regular quality control testing'
      ],
      caseStudies: [
        { name: 'Coastal Highway Gravelling', value: 'KES 28M', duration: '6 months' },
        { name: 'Northern Kenya Access Roads', value: 'KES 42M', duration: '9 months' },
        { name: 'Rural Connectivity Project', value: 'KES 65M', duration: '14 months' }
      ],
      image: '/images/service3.jpeg',
      expertise: '8+ Years',
      projects: '80+ Completed'
    },
    {
      id: 4,
      icon: '💧',
      title: 'Water & Drainage Works',
      shortDesc: 'Complete water systems and drainage solutions',
      description: 'CEKOL Engineering specializes in installing water and sanitary lines to meet all building codes, including main pipes, valves, hydrants, fire lines, and tie-ins. We serve both private clients and municipalities with comprehensive water infrastructure solutions.',
      detailedFeatures: [
        'Water supply system installation and maintenance',
        'Sewerage system design and construction',
        'Storm water drainage systems',
        'Irrigation network development',
        'Water treatment plant construction',
        'Pump station and lift station installation',
        'Fire protection system installation'
      ],
      specifications: [
        'Precision installation using pipe lasers and GPS',
        'Pressure testing to 1.5x operating pressure',
        'Compliance with Kenya Water Act regulations',
        'Use of certified pipes and fittings',
        'Comprehensive leak testing and commissioning'
      ],
      caseStudies: [
        { name: 'Kwale Water Supply Project', value: 'KES 125M', duration: '30 months' },
        { name: 'Mombasa Sewerage System Upgrade', value: 'KES 180M', duration: '36 months' },
        { name: 'Tana River Irrigation Network', value: 'KES 95M', duration: '24 months' }
      ],
      image: '/images/service4.jpg',
      expertise: '12+ Years',
      projects: '35+ Completed'
    },
    {
      id: 5,
      icon: '🔄',
      title: 'Culvert Installation',
      shortDesc: 'Expert drainage culvert design and installation',
      description: 'CEKOL Engineering has extensive experience in both the design and installation of culverts for effective flood management and infrastructure development. Our solutions ensure proper water flow and long-term durability.',
      detailedFeatures: [
        'Box culvert design and installation',
        'Pipe culvert systems for various applications',
        'Bridge culvert construction',
        'Flood control culvert networks',
        'Highway and railway crossing culverts',
        'Agricultural drainage culverts',
        'Urban storm water management culverts'
      ],
      specifications: [
        'Hydraulic design calculations for optimal flow',
        'Reinforced concrete and steel pipe options',
        'Proper bedding and backfill procedures',
        'Anti-seepage collars and cut-off walls',
        'Load rating for traffic and structural requirements'
      ],
      caseStudies: [
        { name: 'Nairobi Expressway Drainage', value: 'KES 55M', duration: '15 months' },
        { name: 'Thika Highway Expansion', value: 'KES 38M', duration: '12 months' },
        { name: 'Coastal Flood Management', value: 'KES 72M', duration: '18 months' }
      ],
      image: '/images/service5.jpeg',
      expertise: '9+ Years',
      projects: '50+ Completed'
    },
    {
      id: 6,
      icon: '🛣️',
      title: 'Road Tarmacking',
      shortDesc: 'Innovative tarmacking for all road types',
      description: 'CEKOL provides innovative tarmacking solutions for various road types including low-volume roads, AC roads, urban roads, and rural roads. We handle projects from small driveways and basketball courts to major highway sections and large parking lots.',
      detailedFeatures: [
        'Highway and major arterial road construction',
        'Urban street paving and rehabilitation',
        'Residential subdivision roads',
        'Commercial and industrial parking lots',
        'Airport runway and taxiway construction',
        'Sports courts and recreational surfaces',
        'Driveway and private access road paving'
      ],
      specifications: [
        'Hot mix asphalt per Kenya Roads Board specifications',
        'Proper base course preparation and testing',
        'Temperature control during placement',
        'Density requirements of 96% minimum',
        'Quality control testing at regular intervals'
      ],
      caseStudies: [
        { name: 'Mombasa-Malindi Highway Section', value: 'KES 250M', duration: '28 months' },
        { name: 'Nairobi Industrial Park Roads', value: 'KES 85M', duration: '16 months' },
        { name: 'Kisumu Lakefront Development', value: 'KES 65M', duration: '14 months' }
      ],
      image: '/images/service6.jpeg',
      expertise: '11+ Years',
      projects: '70+ Completed'
    }
  ];

  const STATS = [
    { value: "12+", label: "Years Experience", description: "Over a decade of engineering excellence" },
    { value: "KES 1.2B+", label: "Projects Value", description: "Total value of completed projects" },
    { value: "350+", label: "Projects Delivered", description: "Successfully completed infrastructure projects" },
    { value: "112+", label: "Team Members", description: "Skilled professionals and certified engineers" },
    { value: "50+", label: "Happy Clients", description: "Satisfied clients across East Africa" },
    { value: "6", label: "Core Services", description: "Comprehensive engineering solutions" }
  ];

  const CERTIFICATIONS = [
    "ISO 9001:2015 Quality Management",
    "Kenya Association of Building & Civil Engineering Contractors",
    "National Construction Authority License",
    "Environmental Impact Assessment Certification",
    "Occupational Safety & Health Compliance"
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
    <div style={{ background: COLORS.sectionBg }}>
      <HeroSection
        title="Engineering Excellence in Infrastructure"
        subtitle="Comprehensive construction and engineering solutions across East Africa"
        variant="services"
      />

      {/* Services Overview Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: COLORS.primaryBg }}>
              Our Core Engineering Services
            </h2>
            <div className="w-32 h-1.5 mx-auto mb-8 rounded-full" 
                 style={{ background: `linear-gradient(90deg, ${COLORS.cta}, ${COLORS.accent})` }}></div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed"
               style={{ color: COLORS.dark }}>
              CEKOL Engineering delivers excellence across all project phases with innovative engineering solutions, 
              quality craftsmanship, and unwavering commitment to safety and sustainability.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  service={service}
                  onClick={() => openService(service)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section 
        className="py-20 text-white px-4 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${COLORS.primaryBg} 0%, ${COLORS.darkBlue} 50%, ${COLORS.dark} 100%)`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Why Choose CEKOL Engineering?</h3>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
              With over a decade of experience, we bring technical expertise, innovative solutions, 
              and unwavering commitment to every project across East Africa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl backdrop-blur-sm border hover:transform hover:scale-105 transition-all duration-300"
                style={{
                  background: COLORS.white + "15",
                  borderColor: COLORS.white + "25"
                }}
              >
                <div className="text-5xl font-bold mb-3" style={{ color: COLORS.accent }}>
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Quality Section */}
      <section className="py-20 px-4" style={{ background: COLORS.white }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: COLORS.primaryBg }}>
                Quality Assurance & Certifications
              </h3>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: COLORS.dark }}>
                CEKOL Engineering maintains the highest standards of quality and safety through 
                rigorous certification processes and continuous improvement initiatives.
              </p>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 rounded-lg border"
                    style={{ 
                      background: COLORS.lightGray,
                      borderColor: COLORS.border
                    }}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4"
                         style={{ background: COLORS.success + "20" }}>
                      <svg className="w-5 h-5" style={{ color: COLORS.success }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-8 rounded-2xl" style={{ background: COLORS.sectionBg }}>
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.primaryBg }}>
                  Our Commitment
                </h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="text-6xl mr-4">🏆</div>
                    <div className="text-left">
                      <div className="font-bold text-lg">Excellence</div>
                      <div className="text-sm opacity-75">In every project delivery</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-6xl mr-4">🛡️</div>
                    <div className="text-left">
                      <div className="font-bold text-lg">Safety First</div>
                      <div className="text-sm opacity-75">Zero compromise on safety</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-6xl mr-4">🌍</div>
                    <div className="text-left">
                      <div className="font-bold text-lg">Sustainability</div>
                      <div className="text-sm opacity-75">Environmental responsibility</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            {/* Enhanced background with service image */}
            <div className="absolute inset-0">
              <div className="absolute inset-0" style={{ background: COLORS.primaryBg }}>
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-30 blur-sm"
                />
              </div>
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, ${COLORS.primaryBg}E6 0%, ${COLORS.dark}F2 100%)`
                }}
              ></div>
            </div>

            <div className="fixed inset-0" onClick={closeService}></div>

            <div className="min-h-screen px-4 py-8 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, y: 100 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border"
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.primaryBg + "20"
                }}
              >
                {/* Close button */}
                <button
                  onClick={closeService}
                  className="absolute top-6 right-6 z-10 hover:bg-gray-100 rounded-full p-3 transition-colors shadow-lg"
                  style={{ background: COLORS.white + "F0" }}
                >
                  <svg className="h-6 w-6" style={{ color: COLORS.dark }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-8 lg:p-12">
                  {/* Service Header */}
                  <div className="flex items-start mb-8">
                    <div className="text-6xl mr-6">{selectedService.icon}</div>
                    <div className="flex-1">
                      <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: COLORS.primaryBg }}>
                        {selectedService.title}
                      </h2>
                      <div className="w-24 h-1.5 mb-4 rounded-full" style={{ background: COLORS.cta }}></div>
                      <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.dark }}>
                        {selectedService.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center px-4 py-2 rounded-full" 
                             style={{ background: COLORS.cta + "15", color: COLORS.cta }}>
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          {selectedService.expertise}
                        </div>
                        <div className="flex items-center px-4 py-2 rounded-full" 
                             style={{ background: COLORS.success + "15", color: COLORS.success }}>
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                          </svg>
                          {selectedService.projects}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Details Grid */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Detailed Features */}
                    <div>
                      <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primaryBg }}>
                        Service Capabilities
                      </h3>
                      <div className="space-y-3">
                        {selectedService.detailedFeatures.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * index }}
                            className="flex items-start p-3 rounded-lg border"
                            style={{ 
                              background: COLORS.lightGray,
                              borderColor: COLORS.border
                            }}
                          >
                            <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5"
                                 style={{ background: COLORS.cta + "20" }}>
                              <svg className="h-3 w-3" style={{ color: COLORS.cta }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primaryBg }}>
                        Technical Specifications
                      </h3>
                      <div className="space-y-3">
                        {selectedService.specifications.map((spec, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * index }}
                            className="flex items-start p-3 rounded-lg"
                            style={{ background: COLORS.sectionBg }}
                          >
                            <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5"
                                 style={{ background: COLORS.success + "20" }}>
                              <svg className="h-3 w-3" style={{ color: COLORS.success }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                            </div>
                            <span className="text-sm font-medium">{spec}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Case Studies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.primaryBg }}>
                      Featured Project Case Studies
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {selectedService.caseStudies.map((study, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="p-6 rounded-xl border hover:shadow-lg transition-all duration-300"
                          style={{ 
                            background: COLORS.white,
                            borderColor: COLORS.border
                          }}
                        >
                          <h4 className="font-bold mb-2" style={{ color: COLORS.primaryBg }}>
                            {study.name}
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="opacity-75">Project Value:</span>
                              <span className="font-medium" style={{ color: COLORS.cta }}>
                                {study.value}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="opacity-75">Duration:</span>
                              <span className="font-medium">{study.duration}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t" style={{ borderColor: COLORS.border }}>
                    <button
                      onClick={closeService}
                      className="px-8 py-3 rounded-lg transition-all duration-300 flex items-center font-medium hover:shadow-lg"
                      style={{
                        background: COLORS.primaryBg,
                        color: COLORS.white
                      }}
                    >
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back to Services
                    </button>
                    <button
                      className="px-8 py-3 rounded-lg transition-all duration-300 flex items-center font-medium hover:shadow-lg border"
                      style={{
                        background: COLORS.cta,
                        color: COLORS.white,
                        borderColor: COLORS.cta
                      }}
                      onClick={() => {
                        // Handle contact/quote request
                        window.open('/contact?service=' + encodeURIComponent(selectedService.title), '_blank');
                      }}
                    >
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Request Quote
                    </button>
                    <button
                      className="px-8 py-3 rounded-lg transition-all duration-300 flex items-center font-medium hover:shadow-lg border"
                      style={{
                        background: 'transparent',
                        color: COLORS.primaryBg,
                        borderColor: COLORS.primaryBg
                      }}
                      onClick={() => {
                        // Handle portfolio/case studies
                        window.open('/portfolio?category=' + encodeURIComponent(selectedService.title), '_blank');
                      }}
                    >
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      View Portfolio
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action Section */}
      <section 
        className="py-20 px-4 text-white relative"
        style={{
          background: `linear-gradient(135deg, ${COLORS.primaryBg} 0%, ${COLORS.dark} 100%)`
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Partner with CEKOL Engineering for reliable, innovative, and sustainable infrastructure solutions. 
              Our experienced team is ready to bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
                style={{
                  background: COLORS.cta,
                  color: COLORS.white
                }}
              >
                Get Free Consultation
              </button>
              <button
                className="px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:transform hover:scale-105 border-2"
                style={{
                  background: 'transparent',
                  color: COLORS.white,
                  borderColor: COLORS.white
                }}
              >
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Enhanced service type definition
type Service = {
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
};