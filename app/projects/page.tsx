'use client';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectCard from './components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Enhanced construction color palette
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

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  // Comprehensive projects portfolio
  const PROJECTS = [
    {
      id: 1,
      title: "Caitlin Heights Apartments",
      value: "KES 120M",
      location: "Shanzu, Mombasa",
      category: "Building Construction",
      status: "Completed",
      duration: "18 months",
      client: "Private Developer",
      description: "44-unit luxury apartment complex featuring modern amenities and ocean views. The project included comprehensive engineering solutions from foundation to finishing, with special attention to coastal environmental factors and sustainability measures.",
      year: "2023",
      keyFeatures: [
        "44 luxury residential units",
        "Ocean view design optimization", 
        "Coastal environmental compliance",
        "Modern amenities integration",
        "Sustainable construction practices"
      ],
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
      category: "Infrastructure",
      status: "Completed",
      duration: "6 months",
      client: "Kenya Wildlife Service",
      description: "Construction of 18km wildlife electric fence with associated infrastructure to protect communities from animal encroachment. Commissioned by Kenya Wildlife Service with 180-day completion timeline. Included specialized equipment leasing from government transport division.",
      year: "2023-2024",
      keyFeatures: [
        "18km electric fence installation",
        "Wildlife management system",
        "Community protection infrastructure",
        "Government partnership project",
        "Specialized equipment integration"
      ],
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
      category: "Building Construction",
      status: "Completed",
      duration: "12 months", 
      client: "Ministry of Transport & Urban Development",
      description: "Subcontracted construction of market complex including earthworks, stormwater drainage, concrete/cabro paving, driveways, parking, landscaping, power house, ablution block and gate house. Completed within 12-month period for Ministry of Transport & Urban Development.",
      year: "2019-2020",
      keyFeatures: [
        "Market complex construction",
        "Comprehensive earthworks",
        "Stormwater management system",
        "Concrete and cabro paving",
        "Complete infrastructure package"
      ],
      images: [
        "/images/market2.jpeg",
        "/images/market1.jpeg",
      ]
    },
    {
      id: 4,
      title: "Vipingo Ridge Development",
      value: "KES 35M",
      location: "Kilifi County, Kenya",
      category: "Grading Works",
      status: "Completed",
      duration: "8 months",
      client: "Vipingo Development Ltd",
      description: "Comprehensive earthwork and land grading for luxury residential development. Included site preparation, excavation, drainage systems, and access road construction across 50-acre development with precision GPS-guided equipment.",
      year: "2022-2023",
      keyFeatures: [
        "50-acre site preparation",
        "GPS-guided precision grading",
        "Luxury residential standards",
        "Comprehensive drainage design",
        "Access road construction"
      ],
      images: [
        "/images/service2.jpeg",
        "/images/Image1.jpeg",
        "/images/service1.jpeg"
      ]
    },
    {
      id: 5,
      title: "Mombasa-Malindi Highway Section",
      value: "KES 250M",
      location: "Coast Region, Kenya",
      category: "Road Construction",
      status: "Completed",
      duration: "28 months",
      client: "Kenya National Highways Authority",
      description: "Road tarmacking and rehabilitation of 15km highway section including drainage works, culvert installation, and safety infrastructure. Project improved connectivity between major coastal towns with modern road standards.",
      year: "2020-2022",
      keyFeatures: [
        "15km highway rehabilitation",
        "Modern tarmacking standards",
        "Advanced drainage systems",
        "Safety infrastructure integration",
        "Coastal connectivity improvement"
      ],
      images: [
        "/images/service6.jpeg",
        "/images/service5.jpeg",
        "/images/service3.jpeg"
      ]
    },
    {
      id: 6,
      title: "Kwale Water Supply Project",
      value: "KES 125M",
      location: "Kwale County, Kenya",
      category: "Water & Drainage",
      status: "Ongoing",
      duration: "30 months",
      client: "Kwale County Government",
      description: "Installation of comprehensive water supply system including main pipelines, distribution networks, pump stations, and treatment facilities serving over 50,000 residents across multiple rural communities.",
      year: "2021-2024",
      keyFeatures: [
        "50,000+ residents served",
        "Main pipeline installation",
        "Pump station construction",
        "Water treatment facilities",
        "Rural community access"
      ],
      images: [
        "/images/service4.jpg",
        "/images/fence2.jpeg",
        "/images/service2.jpeg"
      ]
    },
    {
      id: 7,
      title: "Nairobi Expressway Drainage System",
      value: "KES 55M",
      location: "Nairobi County, Kenya",
      category: "Culvert Installation",
      status: "Completed",
      duration: "15 months",
      client: "China Road & Bridge Corporation",
      description: "Design and installation of advanced culvert and drainage system for major highway project. Included box culverts, storm water management, and flood control infrastructure with international standards.",
      year: "2022-2023",
      keyFeatures: [
        "Advanced culvert systems",
        "International standards compliance",
        "Flood control infrastructure",
        "Storm water management",
        "Major highway integration"
      ],
      images: [
        "/images/service5.jpeg",
        "/images/service4.jpg",
        "/images/fence3.jpeg"
      ]
    },
    {
      id: 8,
      title: "Two Rivers Site Preparation",
      value: "KES 45M",
      location: "Kiambu County, Kenya",
      category: "Grading Works",
      status: "Completed",
      duration: "10 months",
      client: "Two Rivers Development",
      description: "Large-scale grading and earthwork for mixed-use development including shopping mall, residential towers, and office complex. Comprehensive site preparation with utility installation and environmental considerations.",
      year: "2021-2022",
      keyFeatures: [
        "Mixed-use development preparation",
        "Large-scale earthwork operations",
        "Utility installation coordination",
        "Environmental compliance",
        "Multi-phase construction support"
      ],
      images: [
        "/images/Image2.jpeg",
        "/images/service1.jpeg",
        "/images/market1.jpeg"
      ]
    },
    {
      id: 9,
      title: "Tana River Irrigation Network",
      value: "KES 95M",
      location: "Tana River County, Kenya",
      category: "Water & Drainage",
      status: "Completed",
      duration: "24 months",
      client: "Ministry of Agriculture",
      description: "Construction of irrigation infrastructure including canals, pump stations, and distribution systems supporting agricultural development across 2,000 hectares with modern irrigation technology.",
      year: "2020-2023",
      keyFeatures: [
        "2,000 hectares coverage",
        "Modern irrigation technology",
        "Canal construction",
        "Agricultural development support",
        "Water distribution optimization"
      ],
      images: [
        "/images/service4.jpg",
        "/images/fence1.jpeg",
        "/images/service2.jpeg"
      ]
    },
    {
      id: 10,
      title: "Nyali Heights Apartments",
      value: "KES 120M",
      location: "Mombasa, Kenya",
      category: "Building Construction",
      status: "Completed",
      duration: "24 months",
      client: "Nyali Developers Ltd",
      description: "Construction of 60-unit residential complex with modern amenities, parking facilities, and recreational areas. Featured advanced structural engineering and coastal construction techniques with sustainable design elements.",
      year: "2021-2023",
      keyFeatures: [
        "60-unit residential complex",
        "Advanced structural engineering",
        "Coastal construction expertise",
        "Sustainable design elements",
        "Modern amenities integration"
      ],
      images: [
        "/images/Image3.jpeg",
        "/images/Image4.jpeg",
        "/images/service1.jpeg"
      ]
    }
  ];

  // Categories and years for filtering
  const CATEGORIES = ['All', 'Building Construction', 'Road Construction', 'Water & Drainage', 'Grading Works', 'Culvert Installation', 'Infrastructure'];
  const YEARS = ['All', '2024', '2023', '2022', '2021', '2020', '2019'];

  // Statistics
  const PORTFOLIO_STATS = [
    { value: "KES 1.2B+", label: "Total Portfolio Value", icon: "💰" },
    { value: "350+", label: "Projects Completed", icon: "🏗️" },
    { value: "12+", label: "Years Experience", icon: "⭐" },
    { value: "6", label: "Counties Served", icon: "📍" },
  ];

  // Filter projects based on selected category and year
  const filteredProjects = PROJECTS.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const yearMatch = selectedYear === 'All' || project.year.includes(selectedYear);
    return categoryMatch && yearMatch;
  });

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
    <div style={{ background: COLORS.sectionBg }}>
      <HeroSection 
        title="Our Engineering Legacy"
        subtitle="Transforming landscapes across East Africa with innovative infrastructure solutions"
        variant="projects"
      />

      {/* Portfolio Statistics */}
      <section className="py-16 px-4" style={{ background: COLORS.white }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PORTFOLIO_STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl border hover:shadow-lg transition-all duration-300"
                style={{ 
                  background: COLORS.lightGray,
                  borderColor: COLORS.border
                }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold mb-2" style={{ color: COLORS.primaryBg }}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium opacity-75">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: COLORS.primaryBg }}>
              Featured Projects Portfolio
            </h2>
            <div className="w-32 h-1.5 mx-auto mb-8 rounded-full" 
                 style={{ background: `linear-gradient(90deg, ${COLORS.cta}, ${COLORS.accent})` }}></div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: COLORS.dark }}>
              Discover our landmark projects that showcase our expertise in delivering complex infrastructure 
              solutions across multiple sectors and regions in East Africa.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium px-3 py-1 rounded-full" 
                      style={{ background: COLORS.lightGray, color: COLORS.dark }}>
                  Category:
                </span>
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category 
                        ? 'shadow-md transform scale-105' 
                        : 'hover:shadow-sm hover:scale-102'
                    }`}
                    style={{
                      background: selectedCategory === category ? COLORS.primaryBg : COLORS.white,
                      color: selectedCategory === category ? COLORS.white : COLORS.primaryBg,
                      border: `1px solid ${selectedCategory === category ? COLORS.primaryBg : COLORS.border}`
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm font-medium px-3 py-1 rounded-full" 
                    style={{ background: COLORS.lightGray, color: COLORS.dark }}>
                Year:
              </span>
              {YEARS.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedYear === year 
                      ? 'shadow-md' 
                      : 'hover:shadow-sm'
                  }`}
                  style={{
                    background: selectedYear === year ? COLORS.cta : COLORS.white,
                    color: selectedYear === year ? COLORS.white : COLORS.cta,
                    border: `1px solid ${selectedYear === year ? COLORS.cta : COLORS.border}`
                  }}
                >
                  {year}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => openProject(project)}
                />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.primaryBg }}>
                No projects found
              </h3>
              <p style={{ color: COLORS.dark }}>
                Try adjusting your filters to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            style={{
              background: COLORS.primaryBg + "F0",
              backdropFilter: "blur(8px)"
            }}
          >
            <div className="min-h-screen px-4 py-8 flex items-center justify-center">
              <div className="fixed inset-0" onClick={closeProject}></div>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl"
                style={{ background: COLORS.white }}
              >
                <button
                  onClick={closeProject}
                  className="absolute top-6 right-6 z-10 rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                  style={{ background: COLORS.white + "F0" }}
                >
                  <svg className="h-6 w-6" style={{ color: COLORS.dark }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="flex flex-col lg:flex-row h-[95vh]">
                  {/* Enhanced Image Gallery */}
                  <div className="lg:w-3/5 relative">
                    <div className="relative h-96 lg:h-full">
                      <Image
                        src={selectedProject.images[activeImageIndex]}
                        alt={`${selectedProject.title} - Image ${activeImageIndex + 1}`}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    {/* Image Navigation */}
                    <div className="absolute bottom-6 left-6 flex space-x-3">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`w-4 h-4 rounded-full transition-all duration-300 ${
                            index === activeImageIndex 
                              ? 'bg-white scale-125 shadow-lg'
                              : 'bg-white/60 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="absolute bottom-6 right-6 bg-black/70 text-white text-sm px-4 py-2 rounded-lg backdrop-blur-sm">
                      {activeImageIndex + 1} / {selectedProject.images.length}
                    </div>

                    {/* Project Status Badge */}
                    <div className="absolute top-6 left-6">
                      <span 
                        className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                        style={{ 
                          background: selectedProject.status === 'Completed' ? COLORS.success + "90" : COLORS.cta + "90",
                          color: COLORS.white
                        }}
                      >
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Enhanced Project Details */}
                  <div className="lg:w-2/5 overflow-y-auto">
                    <div className="p-8">
                      {/* Project Header */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <h2 className="text-3xl font-bold leading-tight" style={{ color: COLORS.primaryBg }}>
                            {selectedProject.title}
                          </h2>
                          <span 
                            className="px-3 py-1 rounded-full text-sm font-medium ml-4"
                            style={{ background: COLORS.lightGray, color: COLORS.primaryBg }}
                          >
                            {selectedProject.year}
                          </span>
                        </div>
                        
                        <div className="w-16 h-1 mb-4 rounded-full" style={{ background: COLORS.cta }}></div>
                        
                        <div className="flex items-center mb-3" style={{ color: COLORS.primaryBg }}>
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium">{selectedProject.location}</span>
                        </div>

                        <div className="text-sm opacity-75 mb-4">
                          <span className="font-medium">Category:</span> {selectedProject.category}
                        </div>
                      </div>

                      {/* Project Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-4 rounded-lg" style={{ background: COLORS.lightGray }}>
                          <div className="text-sm opacity-75 mb-1">Project Value</div>
                          <div className="text-xl font-bold" style={{ color: COLORS.primaryBg }}>
                            {selectedProject.value}
                          </div>
                        </div>
                        <div className="p-4 rounded-lg" style={{ background: COLORS.lightGray }}>
                          <div className="text-sm opacity-75 mb-1">Duration</div>
                          <div className="text-lg font-bold" style={{ color: COLORS.success }}>
                            {selectedProject.duration}
                          </div>
                        </div>
                      </div>

                      {/* Client Information */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.primaryBg }}>
                          Client
                        </h3>
                        <p className="font-medium" style={{ color: COLORS.cta }}>
                          {selectedProject.client}
                        </p>
                      </div>
                      
                      {/* Project Description */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3" style={{ color: COLORS.primaryBg }}>
                          Project Overview
                        </h3>
                        <p className="leading-relaxed" style={{ color: COLORS.dark }}>
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3" style={{ color: COLORS.primaryBg }}>
                          Key Features
                        </h3>
                        <div className="space-y-2">
                          {selectedProject.keyFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <div 
                                className="w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5"
                                style={{ background: COLORS.cta + "20" }}
                              >
                                <svg className="w-3 h-3" style={{ color: COLORS.cta }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Project Gallery Thumbnails */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3" style={{ color: COLORS.primaryBg }}>
                          Project Gallery
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                          {selectedProject.images.map((img, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveImageIndex(index)}
                              className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                index === activeImageIndex
                                  ? 'border-blue-500 scale-105 shadow-lg'
                                  : 'border-transparent hover:border-orange-400 hover:scale-102'
                              }`}
                            >
                              <Image
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                              {index === 0 && (
                                <span className="absolute top-1 left-1 rounded px-1.5 py-0.5 text-xs font-medium"
                                      style={{ background: COLORS.cta, color: COLORS.white }}>
                                  Main
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
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

// Enhanced Project type definition
type Project = {
  id: number;
  title: string;
  value: string;
  location: string;
  category: string;
  status: string;
  duration: string;
  client: string;
  description: string;
  year: string;
  keyFeatures: string[];
  images: string[];
};