'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import { FiUsers, FiCheckCircle, FiDollarSign, FiActivity, FiAward, FiGlobe, FiShield, FiTrendingUp, FiDownload, FiX, FiPhone, FiStar, FiTarget, FiLayers, FiZap, FiMap, FiClock } from 'react-icons/fi';

// Premium construction color palette
const COLORS = {
  primaryBg: "#0a2240",      // Deep construction blue
  sectionBg: "#f8fafc",      // Premium light background
  dark: "#0f172a",           // Rich charcoal
  cta: "#f59e0b",            // Premium gold/amber
  accent: "#10b981",         // Success green
  white: "#ffffff",
  border: "#e2e8f0",         // Refined border
  text: "#475569",           // Professional gray
};

const AboutPage = () => {
  const router = useRouter();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  const heroHeight = 'h-[60vh]';
  const bgImage = 'Image13.png';
  
  const slides = [
    { 
      text: 'Africa\'s Premier Infrastructure Partner',
      subtitle: 'Engineering Excellence Across 12 Counties',
      stats: ['112+ Elite Professionals', '250+ Successful Projects', '12 Countries Served']
    },
    { 
      text: 'KES 727M Annual Revenue Leader',
      subtitle: 'Certified Excellence & Proven Results',
      stats: ['NCA Category NCAS & NCAA', 'ISO 9001:2015 Certified', 'AGPO Youth Registered']
    },
    { 
      text: 'Sustainable Future Builder',
      subtitle: 'Innovation Meets Environmental Responsibility',
      stats: ['18KM Wildlife Protection', 'KES 349M Market Complex', 'Net-Zero Committed']
    },
  ];

  const achievements = [
    { 
      icon: <FiTrendingUp className="w-8 h-8" />,
      metric: "727.6M+",
      label: "Annual Revenue (KES)",
      description: "Consistent growth trajectory"
    },
    { 
      icon: <FiUsers className="w-8 h-8" />,
      metric: "112+",
      label: "Expert Professionals",
      description: "Graduate engineers & specialists"
    },
    { 
      icon: <FiGlobe className="w-8 h-8" />,
      metric: "12",
      label: "African Countries",
      description: "Pan-continental presence"
    },
    { 
      icon: <FiAward className="w-8 h-8" />,
      metric: "250+",
      label: "Completed Projects",
      description: "Delivered on time & budget"
    }
  ];

  const certifications = [
    { 
      name: 'NCA Category NCAS', 
      year: '2022-2025', 
      issuer: 'National Construction Authority',
      description: 'Premium Building Works Contractor - Unlimited Value',
      icon: <FiAward style={{ color: COLORS.cta }} className="w-6 h-6" />,
      priority: 'high'
    },
    { 
      name: 'NCA Category NCAA', 
      year: '2022-2025', 
      issuer: 'National Construction Authority',
      description: 'Water & Infrastructure Works Specialist',
      icon: <FiShield style={{ color: COLORS.primaryBg }} className="w-6 h-6" />,
      priority: 'high'
    },
    { 
      name: 'ISO 9001:2015', 
      year: '2022-Current', 
      issuer: 'International Standards Organization',
      description: 'Quality Management System Excellence',
      icon: <FiCheckCircle style={{ color: COLORS.accent }} className="w-6 h-6" />,
      priority: 'high'
    },
    { 
      name: 'AGPO Youth Certified', 
      year: '2022-2024', 
      issuer: 'National Treasury Kenya',
      description: 'Youth Empowerment & Development Partner',
      icon: <FiTarget style={{ color: "#3b82f6" }} className="w-6 h-6" />,
      priority: 'medium'
    },
    { 
      name: 'DOSH Safety Compliant', 
      year: '2023-Current', 
      issuer: 'Directorate of Occupational Health',
      description: 'Zero-Accident Workplace Certification',
      icon: <FiShield style={{ color: "#ef4444" }} className="w-6 h-6" />,
      priority: 'medium'
    },
    { 
      name: 'KRA Tax Compliant', 
      year: '2023-Current', 
      issuer: 'Kenya Revenue Authority',
      description: 'Full Tax Compliance & Good Standing',
      icon: <FiCheckCircle style={{ color: "#8b5cf6" }} className="w-6 h-6" />,
      priority: 'medium'
    },
  ];

  const keyProjects = [
    {
      id: 1,
      title: "Kapkatunga Kipyemit Wildlife Electric Fence",
      value: "KES 14.5M",
      location: "Kericho County, Kenya",
      description: "Engineering 18km of precision wildlife protection infrastructure with advanced monitoring systems, protecting over 5,000 community members from human-wildlife conflict.",
      year: "2023-2024",
      role: "Prime Contractor",
      scope: "Specialized Infrastructure & Equipment Integration",
      impact: "Community Protection & Wildlife Conservation",
      images: [
        "/images/fence1.jpeg",
        "/images/fence2.jpeg",
        "/images/fence3.jpeg",
        "/images/fence4.jpeg"
      ]
    },
    {
      id: 2,
      title: "Uhuru Business Park Commercial Complex",
      value: "KES 349.5M",
      location: "Kisumu County, Kenya",
      description: "Comprehensive construction of multi-phase commercial complex featuring advanced infrastructure, sustainable drainage systems, premium concrete works, and modern architectural finishes.",
      year: "2019-2020",
      role: "Strategic Subcontractor",
      scope: "Commercial Infrastructure Development",
      impact: "Economic Growth & Job Creation",
      images: [
        "/images/market2.jpeg",
        "/images/market1.jpeg",
      ]
    }
  ];

  const companyTabs = [
    { id: 'overview', label: 'Overview', icon: <FiLayers /> },
    { id: 'capabilities', label: 'Capabilities', icon: <FiZap /> },
    { id: 'presence', label: 'Global Reach', icon: <FiMap /> },
    { id: 'timeline', label: 'Journey', icon: <FiClock /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (isProfileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isProfileOpen]);

  return (
    <div ref={ref} className="overflow-hidden" style={{ background: COLORS.sectionBg }}>
      {/* Enhanced Company Profile Modal */}
      <AnimatePresence>
        {isProfileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsProfileOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b"
                style={{ borderColor: COLORS.border, background: COLORS.primaryBg }}>
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FiDownload className="w-6 h-6" style={{ color: COLORS.cta }} />
                  Company Profile - Cekol Engineering Limited
                </h3>
                <button 
                  onClick={() => setIsProfileOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <FiX className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <div className="flex-1 overflow-auto">
                <div className="w-full h-[75vh]">
                  <iframe 
                    src="/doc/company-profile.pdf" 
                    className="w-full h-full"
                    frameBorder="0"
                  />
                </div>
              </div>
              
              <div className="p-6 border-t flex justify-between items-center"
                style={{ borderColor: COLORS.border, background: COLORS.sectionBg }}>
                <p className="text-sm" style={{ color: COLORS.text }}>
                  Premium construction services across Africa
                </p>
                <a 
                  href="/doc/company-profile.pdf" 
                  download="Cekol-Engineering-Premium-Profile.pdf"
                  className="flex items-center gap-3 px-8 py-3 rounded-lg font-medium shadow-lg transition-all"
                  style={{
                    background: COLORS.cta,
                    color: COLORS.white
                  }}
                >
                  <FiDownload className="w-5 h-5" />
                  Download Premium Profile
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Hero Section */}
      <section
        className={`relative ${heroHeight} overflow-hidden`}
        style={{
          background: `linear-gradient(135deg, ${COLORS.primaryBg} 0%, ${COLORS.dark} 100%)`
        }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/images/${bgImage})`,
            scale,
            rotateX,
            opacity,
            filter: 'blur(8px) brightness(0.4)'
          }}
        />
        
        {/* Premium overlay with depth */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a2240]/95 via-[#0a2240]/80 to-[#0f172a]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <AnimatePresence mode="wait">
            {slides.map((slide, index) =>
              activeSlide === index && (
                <motion.div
                  key={index}
                  className="w-full max-w-6xl mx-auto"
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -80, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border"
                      style={{
                        background: COLORS.cta + "20",
                        borderColor: COLORS.cta + "30",
                        color: COLORS.cta
                      }}>
                      <FiStar className="w-4 h-4" />
                      <span className="text-sm font-medium">Industry Leader Since 2011</span>
                    </div>
                  </motion.div>
                  
                  <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    style={{
                      color: COLORS.white,
                      textShadow: "0 4px 20px rgba(0,0,0,0.5)"
                    }}
                    initial={{ letterSpacing: '-0.02em', opacity: 0 }}
                    animate={{ letterSpacing: '0em', opacity: 1 }}
                    transition={{ duration: 1.0, delay: 0.1 }}
                  >
                    {slide.text}
                  </motion.h1>
                  
                  <motion.p
                    className="text-xl md:text-2xl mb-10 font-light"
                    style={{ color: COLORS.cta }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  
                  <motion.div
                    className="flex flex-wrap justify-center gap-6 mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {slide.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="px-8 py-4 backdrop-blur-md rounded-xl border shadow-lg"
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          borderColor: COLORS.cta + "30",
                          color: COLORS.white
                        }}
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.8 + (idx * 0.1),
                          type: 'spring',
                          stiffness: 150,
                          damping: 12
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -5,
                          boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)"
                        }}
                      >
                        <span className="font-semibold text-lg">{stat}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )
            )}
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${activeSlide === index ? 'w-8' : ''}`}
                style={{
                  background: activeSlide === index ? COLORS.cta : COLORS.white + "40"
                }}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Metrics Dashboard */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl shadow-xl border backdrop-blur-sm"
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.border
                }}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl"
                    style={{ background: COLORS.cta + "10", color: COLORS.cta }}>
                    {achievement.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold"
                      style={{ color: COLORS.primaryBg }}>
                      {achievement.metric}
                    </div>
                  </div>
                </div>
                <div className="text-lg font-semibold mb-2"
                  style={{ color: COLORS.dark }}>
                  {achievement.label}
                </div>
                <p className="text-sm"
                  style={{ color: COLORS.text }}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Company Introduction with Tabs */}
      <section className="py-24" style={{ background: COLORS.sectionBg }}>
        <div className="container max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {companyTabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all`}
                style={{
                  background: activeTab === tab.id ? COLORS.primaryBg : 'transparent',
                  color: activeTab === tab.id ? COLORS.white : COLORS.text,
                  border: `1px solid ${activeTab === tab.id ? COLORS.primaryBg : COLORS.border}`
                }}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                className="flex flex-col lg:flex-row gap-16 items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
              >
                <div className="lg:w-1/2">
                  <motion.h2 
                    className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
                    style={{ color: COLORS.primaryBg }}
                  >
                    Transforming Africa&apos;s
                    <span style={{ color: COLORS.cta }}> Infrastructure</span>
                  </motion.h2>
                  
                  <div className="space-y-6 mb-10">
                    <p className="text-xl leading-relaxed" style={{ color: COLORS.text }}>
                      Since 2011, Cekol Engineering has evolved from a visionary Kenyan startup into Africa&apos;s most trusted infrastructure partner. With a track record spanning 12 countries and 250+ successful projects, we&apos;re not just building structures—we&apos;re engineering the future of Africa.
                    </p>
                    <p className="text-lg leading-relaxed" style={{ color: COLORS.text }}>
                      Our team of 112+ certified professionals combines cutting-edge technology with deep local expertise, delivering projects that exceed international standards while respecting cultural contexts and environmental sustainability.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {[
                      { label: "Annual Revenue", value: "KES 727M+", icon: <FiTrendingUp /> },
                      { label: "Success Rate", value: "98.5%", icon: <FiCheckCircle /> },
                      { label: "Safety Record", value: "Zero Fatalities", icon: <FiShield /> },
                      { label: "Client Retention", value: "95%", icon: <FiStar /> }
                    ].map((stat, index) => (
                      <div key={index} className="p-4 rounded-xl"
                        style={{ background: COLORS.primaryBg + "05", border: `1px solid ${COLORS.border}` }}>
                        <div className="flex items-center gap-3 mb-2">
                          <div style={{ color: COLORS.cta }}>{stat.icon}</div>
                          <span className="text-sm font-medium" style={{ color: COLORS.text }}>{stat.label}</span>
                        </div>
                        <div className="text-2xl font-bold" style={{ color: COLORS.primaryBg }}>
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.button 
                      className="px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: COLORS.primaryBg,
                        color: COLORS.white
                      }}
                      onClick={() => setIsProfileOpen(true)}
                    >
                      Download Premium Profile
                    </motion.button>
                    <motion.button 
                      className="px-8 py-4 border-2 rounded-xl font-semibold text-lg"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: 'transparent',
                        color: COLORS.primaryBg,
                        borderColor: COLORS.primaryBg
                      }}
                      onClick={() => router.push('/contact')}
                    >
                      Partner With Us
                    </motion.button>
                  </motion.div>
                </div>
                
                <div className="lg:w-1/2">
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/Image15.png"
                        alt="Cekol Engineering Excellence"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    
                    {/* Floating achievement cards */}
                    <motion.div
                      className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl backdrop-blur-sm"
                      style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl font-bold" style={{ color: COLORS.cta }}>12</div>
                      <div className="text-sm font-medium" style={{ color: COLORS.text }}>African Countries</div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute -top-6 -right-6 p-6 rounded-2xl shadow-xl backdrop-blur-sm"
                      style={{ background: COLORS.primaryBg, color: COLORS.white }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl font-bold">250+</div>
                      <div className="text-sm opacity-90">Projects Delivered</div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}
            
            {/* Additional tab content can be added here */}
          </AnimatePresence>
        </div>
      </section>

      {/* Rest of the sections remain largely the same but with enhanced styling */}
      {/* Enhanced Projects Showcase */}
      <section className="py-24"
        style={{ background: `linear-gradient(135deg, ${COLORS.primaryBg} 0%, ${COLORS.dark} 100%)` }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: COLORS.cta + "20", color: COLORS.cta }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <FiStar className="w-4 h-4" />
              <span className="text-sm font-medium">Signature Projects</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8"
              style={{ color: COLORS.white }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Engineering <span style={{ color: COLORS.cta }}>Excellence</span>
            </motion.h2>
            
            <motion.p
              className="max-w-3xl mx-auto text-xl leading-relaxed"
              style={{ color: COLORS.white + "CC" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Transforming communities through innovative infrastructure solutions that stand the test of time
            </motion.p>
          </div>
          
          <div className="space-y-24">
            {keyProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="lg:w-1/2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      width={700}
                      height={500}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Project value overlay */}
                    <div className="absolute top-6 left-6 px-4 py-2 rounded-xl backdrop-blur-sm"
                      style={{ background: COLORS.cta, color: COLORS.white }}>
                      <div className="text-2xl font-bold">{project.value}</div>
                    </div>
                  </div>
                  
                  {/* Project gallery thumbnails */}
                  <div className="flex gap-4 mt-6 justify-center">
                    {project.images.slice(1).map((img, idx) => (
                      <motion.div
                        key={idx}
                        className="w-20 h-20 rounded-xl overflow-hidden border-2 shadow-lg"
                        whileHover={{ scale: 1.1, y: -5 }}
                        style={{ borderColor: COLORS.cta + "40" }}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} detail ${idx+1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <div className="lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {/* Project impact badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                      style={{ background: COLORS.accent + "20", color: COLORS.accent }}>
                      <FiCheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.impact}</span>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                      style={{ color: COLORS.white }}>{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg"
                        style={{ background: COLORS.white + "10", color: COLORS.cta }}>
                        <FiGlobe className="w-4 h-4" />
                        <span className="font-medium">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg"
                        style={{ background: COLORS.white + "10", color: COLORS.white }}>
                        <FiClock className="w-4 h-4" />
                        <span className="font-medium">{project.year}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-4 rounded-xl backdrop-blur-sm"
                        style={{ background: COLORS.primaryBg + "80", border: `1px solid ${COLORS.cta}40` }}>
                        <div className="text-sm opacity-80 mb-1" style={{ color: COLORS.white }}>Project Role</div>
                        <div className="font-semibold" style={{ color: COLORS.cta }}>{project.role}</div>
                      </div>
                      <div className="p-4 rounded-xl backdrop-blur-sm"
                        style={{ background: COLORS.primaryBg + "80", border: `1px solid ${COLORS.cta}40` }}>
                        <div className="text-sm opacity-80 mb-1" style={{ color: COLORS.white }}>Scope</div>
                        <div className="font-semibold" style={{ color: COLORS.cta }}>{project.scope}</div>
                      </div>
                    </div>
                    
                    <p className="text-lg leading-relaxed mb-8"
                      style={{ color: COLORS.white + "DD" }}>{project.description}</p>
                    
                    <motion.button
                      className="flex items-center gap-3 px-8 py-4 rounded-xl font-medium shadow-lg"
                      style={{ background: COLORS.cta, color: COLORS.primaryBg }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiTarget className="w-5 h-5" />
                      View Project Details
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section className="py-24" style={{ background: COLORS.sectionBg }}>
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: COLORS.primaryBg + "10", color: COLORS.primaryBg }}>
              <FiAward className="w-4 h-4" />
              <span className="text-sm font-medium">Industry Certifications</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8"
              style={{ color: COLORS.primaryBg }}>
              Certified <span style={{ color: COLORS.cta }}>Excellence</span>
            </h2>
            
            <p className="max-w-3xl mx-auto text-xl leading-relaxed"
              style={{ color: COLORS.text }}>
              Maintaining the highest industry standards through comprehensive certifications and regulatory compliance
            </p>
          </motion.div>
          
          {/* Priority certifications */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {certifications.filter(cert => cert.priority === 'high').map((cert, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl shadow-xl border-2 relative overflow-hidden"
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, type: 'spring', stiffness: 120 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                style={{ 
                  background: COLORS.white, 
                  borderColor: COLORS.cta + "30",
                  boxShadow: `0 10px 40px ${COLORS.primaryBg}10`
                }}
              >
                {/* Premium badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: COLORS.cta, color: COLORS.white }}>
                  PREMIUM
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl"
                    style={{ background: COLORS.cta + "15" }}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: COLORS.primaryBg }}>{cert.name}</h3>
                    <p className="text-sm font-medium" style={{ color: COLORS.text }}>{cert.issuer}</p>
                  </div>
                </div>
                
                <p className="mb-6 leading-relaxed" style={{ color: COLORS.text }}>
                  {cert.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold px-3 py-1 rounded-full"
                    style={{ background: COLORS.accent + "20", color: COLORS.accent }}>
                    Valid: {cert.year}
                  </span>
                  <FiCheckCircle className="w-6 h-6" style={{ color: COLORS.accent }} />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Supporting certifications */}
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.filter(cert => cert.priority === 'medium').map((cert, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl shadow-lg border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                style={{ background: COLORS.white, borderColor: COLORS.border }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg" style={{ background: COLORS.primaryBg + "10" }}>
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ color: COLORS.primaryBg }}>{cert.name}</h4>
                    <p className="text-sm" style={{ color: COLORS.text }}>{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm mb-4" style={{ color: COLORS.text }}>{cert.description}</p>
                <div className="text-xs font-medium" style={{ color: COLORS.cta }}>
                  Valid: {cert.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Financial Performance */}
      <section className="py-24 text-white relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${COLORS.primaryBg} 0%, ${COLORS.dark} 100%)` }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${COLORS.cta} 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: COLORS.cta + "20", color: COLORS.cta }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <FiDollarSign className="w-4 h-4" />
              <span className="text-sm font-medium">Financial Excellence</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8"
              style={{ color: COLORS.white }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Proven <span style={{ color: COLORS.cta }}>Performance</span>
            </motion.h2>
            
            <p className="max-w-3xl mx-auto text-xl leading-relaxed opacity-90">
              Strong financial foundation supporting sustainable growth and client confidence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                icon: <FiDollarSign className="w-10 h-10" />,
                title: "Annual Revenue 2022",
                value: "KES 727.6M",
                growth: "+27% YoY Growth",
                detail: "Consistent revenue growth across diverse construction sectors",
                color: COLORS.cta
              },
              { 
                icon: <FiActivity className="w-10 h-10" />,
                title: "Total Asset Base",
                value: "KES 161.6M",
                growth: "8.2% Asset Growth",
                detail: "Including KES 24.4M in property, plant & equipment",
                color: COLORS.accent
              },
              { 
                icon: <FiTrendingUp className="w-10 h-10" />,
                title: "Net Profitability",
                value: "KES 17.2M",
                growth: "Healthy Margins",
                detail: "Sustainable profitability after all operational expenses",
                color: "#3b82f6"
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl backdrop-blur-sm border group"
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primaryBg}CC 0%, ${COLORS.primaryBg}AA 100%)`,
                  borderColor: metric.color + "30"
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                  style={{ background: metric.color }} />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl"
                    style={{ background: metric.color + "20", color: metric.color }}>
                    {metric.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold opacity-90">{metric.title}</h3>
                    <div className="text-3xl font-bold">{metric.value}</div>
                  </div>
                </div>
                
                <div className="mb-4 font-medium" style={{ color: metric.color }}>
                  {metric.growth}
                </div>
                
                <p className="text-sm opacity-80 leading-relaxed">{metric.detail}</p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${metric.color}10 0%, transparent 100%)` }} />
              </motion.div>
            ))}
          </div>

          {/* Banking relationships with enhanced design */}
          <motion.div
            className="backdrop-blur-sm rounded-3xl border p-8 md:p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ 
              background: `linear-gradient(135deg, ${COLORS.primaryBg}E0 0%, ${COLORS.primaryBg}CC 100%)`, 
              borderColor: COLORS.cta + "30" 
            }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Strategic Banking <span style={{ color: COLORS.cta }}>Partnerships</span>
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Established relationships with premier financial institutions supporting our growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="p-8 rounded-2xl backdrop-blur-sm border"
                whileHover={{ scale: 1.02, y: -5 }}
                style={{ background: COLORS.white + "10", borderColor: COLORS.cta + "30" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg"
                    style={{ background: COLORS.white, color: COLORS.primaryBg }}>
                    D
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">Diamond Trust Bank</h4>
                    <p className="opacity-80">Corporate Banking Partner</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="opacity-80">Account:</span>
                    <span className="font-mono font-bold">0968482001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">Branch:</span>
                    <span className="font-semibold">Prestige Plaza (023)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">Since:</span>
                    <span className="font-semibold">July 2023</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="p-8 rounded-2xl backdrop-blur-sm border"
                whileHover={{ scale: 1.02, y: -5 }}
                style={{ background: COLORS.accent + "10", borderColor: COLORS.accent + "30" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg"
                    style={{ background: COLORS.accent, color: COLORS.white }}>
                    N
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">NCBA Bank Kenya</h4>
                    <p className="opacity-80">Credit Facility Partner</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="opacity-80">Facility Limit:</span>
                    <span className="font-bold text-2xl" style={{ color: COLORS.cta }}>KES 100M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">Status:</span>
                    <span className="font-semibold">Pre-approved</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">Terms:</span>
                    <span className="font-semibold">Subject to approval</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: COLORS.sectionBg }}
      >
        <div className="container max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            className="p-12 rounded-3xl shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: `linear-gradient(135deg, ${COLORS.primaryBg} 0%, ${COLORS.dark} 100%)`,
              border: `1px solid ${COLORS.cta}30`
            }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, ${COLORS.cta} 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ background: COLORS.cta + "20", color: COLORS.cta }}>
                <FiStar className="w-4 h-4" />
                <span className="text-sm font-medium">Ready to Build Excellence?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                Partner with Africa&apos;s
                <br />
                <span style={{ color: COLORS.cta }}>Infrastructure Leaders</span>
              </h2>
              
              <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
                Join the 250+ successful projects that have transformed communities across 12 African nations. 
                Experience the Cekol Engineering difference—where innovation meets excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button 
                  className="px-10 py-4 rounded-xl font-bold text-lg shadow-xl flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: COLORS.cta,
                    color: COLORS.primaryBg
                  }}
                  onClick={() => router.push('/contact')}
                >
                  <FiTarget className="w-5 h-5" />
                  Start Your Project
                </motion.button>
                
                <motion.button 
                  className="px-10 py-4 border-2 rounded-xl font-bold text-lg flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'transparent',
                    borderColor: COLORS.cta,
                    color: COLORS.cta
                  }}
                  onClick={() => setIsProfileOpen(true)}
                >
                  <FiDownload className="w-5 h-5" />
                  Download Profile
                </motion.button>
              </div>
              
              {/* Contact info */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2 text-white/80">
                  <FiPhone className="w-4 h-4" />
                  <span>+254725745922</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <FiGlobe className="w-4 h-4" />
                  <span>info@cekolengineering.co.ke</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;