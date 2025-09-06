'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { 
  FiCheckCircle, 
  FiClock, 
  FiUsers, 
  FiAward,
  FiMapPin,
  FiShield,
  FiTrendingUp,
  FiDollarSign,
  FiHome,
  FiTool,
  FiSettings,
  FiLayers,
  FiZap,
  FiTarget,
  FiStar,
  FiPhone,
  FiMail,
  FiArrowRight
} from 'react-icons/fi';

// Enhanced color palette with more depth
const COLORS = {
  primaryBg: "#0a2240",
  primaryLight: "#1e3a5f",
  sectionBg: "#f8fafc",
  dark: "#1e293b",
  cta: "#f59e0b",
  ctaHover: "#d97706",
  accent: "#ffbe3b",
  success: "#10b981",
  white: "#ffffff",
  border: "#e2e8f0",
  textLight: "#64748b",
  overlay: "rgba(10, 34, 64, 0.9)"
};

// Enhanced services data with icons
const SERVICES = [
  {
    title: "Building Construction",
    description: "Complete building construction services from residential to commercial complexes with modern techniques and quality materials.",
    icon: <FiHome size={32} />,
    features: ["Residential Buildings", "Commercial Complexes", "Institutional Structures"]
  },
  {
    title: "Civil Engineering",
    description: "Comprehensive civil engineering solutions including roads, bridges, and infrastructure development across Africa.",
    icon: <FiTool size={32} />,
    features: ["Road Construction", "Bridge Development", "Infrastructure Planning"]
  },
  {
    title: "Project Management",
    description: "End-to-end project management services ensuring timely delivery, quality control, and cost-effective solutions.",
    icon: <FiSettings size={32} />,
    features: ["Timeline Management", "Quality Assurance", "Cost Optimization"]
  },
  {
    title: "Structural Engineering",
    description: "Expert structural engineering and design services for safe, durable, and innovative construction solutions.",
    icon: <FiLayers size={32} />,
    features: ["Structural Design", "Safety Analysis", "Load Calculations"]
  },
  {
    title: "Electrical & Plumbing",
    description: "Complete electrical and plumbing installation services for residential and commercial properties.",
    icon: <FiZap size={32} />,
    features: ["Electrical Installation", "Plumbing Systems", "Maintenance Services"]
  },
  {
    title: "Consulting Services",
    description: "Professional consulting services for construction planning, feasibility studies, and technical advisory.",
    icon: <FiTarget size={32} />,
    features: ["Feasibility Studies", "Technical Advisory", "Construction Planning"]
  }
];

export default function EnhancedConstructionHomepage() {
  const heroSlides = [
    { 
      image: '/images/Image11.png', 
      title: 'Engineering Excellence Since 2011',
      subtitle: 'Delivering innovative construction solutions across Africa with unmatched precision and quality',
      stats: [
        { value: '250+', label: 'Projects Completed' },
        { value: '98%', label: 'Client Satisfaction' }
      ]
    },
    { 
      image: '/images/Image13.png', 
      title: '250+ Successful Projects Delivered',
      subtitle: 'From towering commercial buildings to critical infrastructure development',
      stats: [
        { value: '15+', label: 'Years Experience' },
        { value: 'NCA5', label: 'Certified Excellence' }
      ]
    },
    { 
      image: '/images/Image17.png', 
      title: 'NCA5 Certified Contractor',
      subtitle: 'Highest category certification for building works - your guarantee of quality',
      stats: [
        { value: '50+', label: 'Expert Engineers' },
        { value: '24/7', label: 'Project Support' }
      ]
    },
  ];
  
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: projectsRef, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const [activeSlide, setActiveSlide] = useState(0);
  
  const projectImages = [
    '/images/Image10.png', '/images/Image11.png', '/images/Image12.png',
    '/images/Image13.png', '/images/Image14.png', '/images/Image15.png',
    '/images/Image16.png', '/images/Image17.png', '/images/Image18.png', '/images/Image19.png'
  ];
  
  const [projectSlide, setProjectSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectSlide(prev => (prev + 1) % projectImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projectImages.length]);

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section */}
      <section 
        className="relative h-screen overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${COLORS.primaryBg} 0%, ${COLORS.primaryLight} 50%, ${COLORS.dark} 100%)` 
        }}
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 z-0">
          {/* Animated construction grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-16 grid-rows-10 h-full w-full">
              {Array.from({ length: 160 }).map((_, i) => (
                <motion.div 
                  key={i}
                  className="border border-amber-500/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: i * 0.005,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 8
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Enhanced floating elements */}
          <motion.div 
            className="absolute top-20 right-20 text-amber-500"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <FiAward className="text-4xl" />
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-40 left-24 text-amber-500"
            animate={{ 
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <FiShield className="text-4xl" />
            </div>
          </motion.div>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {heroSlides.map((slide, index) =>
            activeSlide === index ? (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute inset-0 z-10"
              >
                {/* Enhanced background with better overlay */}
                <motion.div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 10, ease: 'easeOut' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-amber-900/70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                {/* Enhanced Content Layout */}
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-white max-w-4xl"
                      >
                        {/* Enhanced Badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                          className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30"
                        >
                          <FiAward className="mr-2" style={{ color: COLORS.cta }} />
                          <span className="font-semibold text-sm tracking-wider uppercase">
                            NCA5 Certified Excellence
                          </span>
                        </motion.div>

                        {/* Enhanced Title Animation */}
                        <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                          {slide.title.split(' ').map((word, i) => (
                            <motion.span
                              key={i}
                              className="inline-block mr-4"
                              initial={{ opacity: 0, y: 100, rotateX: -90 }}
                              animate={{ opacity: 1, y: 0, rotateX: 0 }}
                              transition={{ 
                                duration: 0.8, 
                                delay: 0.7 + (i * 0.1),
                                type: "spring",
                                stiffness: 100
                              }}
                              style={{ 
                                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                background: word.includes('Excellence') || word.includes('NCA5') ? 
                                  `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.accent})` : 'transparent',
                                WebkitBackgroundClip: word.includes('Excellence') || word.includes('NCA5') ? 'text' : 'initial',
                                WebkitTextFillColor: word.includes('Excellence') || word.includes('NCA5') ? 'transparent' : 'white'
                              }}
                            >
                              {word}
                            </motion.span>
                          ))}
                        </motion.h1>
                        
                        <motion.p
                          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl font-light leading-relaxed"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 }}
                        >
                          {slide.subtitle}
                        </motion.p>
                        
                        {/* Enhanced Stats */}
                        <motion.div
                          className="flex flex-wrap gap-8 mb-12"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.4 }}
                        >
                          {slide.stats.map((stat, i) => (
                            <motion.div 
                              key={i} 
                              className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20"
                              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                            >
                              <div className="text-4xl font-black mb-1" style={{ color: COLORS.cta }}>
                                {stat.value}
                              </div>
                              <div className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                                {stat.label}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                        
                        {/* Enhanced CTA Buttons */}
                        <motion.div
                          className="flex flex-col sm:flex-row gap-6"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.6 }}
                        >
                          <motion.button
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: `0 10px 40px ${COLORS.cta}40`
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-lg"
                            style={{
                              background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.ctaHover})`,
                              color: COLORS.white,
                            }}
                          >
                            <div className="flex items-center justify-center">
                              <span>Get Free Quote</span>
                              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: 'rgba(255,255,255,0.1)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 text-white backdrop-blur-sm"
                          >
                            View Projects
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === activeSlide ? 'bg-amber-500 scale-125' : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </section>

      {/* Enhanced Stats Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-24 text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${COLORS.primaryBg}, ${COLORS.primaryLight})` }}
      >
        {/* Enhanced background effects */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute -right-32 -top-32 w-96 h-96 rounded-full blur-3xl"
            style={{ background: `linear-gradient(90deg, ${COLORS.cta}, ${COLORS.accent})` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full blur-3xl"
            style={{ background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.cta})` }}
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="container relative mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FiCheckCircle size={36} />, value: '250+', label: 'Projects Completed', color: COLORS.success },
              { icon: <FiClock size={36} />, value: '15+', label: 'Years Experience', color: COLORS.cta },
              { icon: <FiUsers size={36} />, value: '50+', label: 'Expert Engineers', color: COLORS.accent },
              { icon: <FiMapPin size={36} />, value: '12+', label: 'African Countries', color: COLORS.success },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
                className="group relative p-8 rounded-2xl bg-white/95 backdrop-blur-lg border border-white/20 text-center overflow-hidden"
              >
                {/* Hover effect background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${stat.color}, ${COLORS.accent})` }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex justify-center mb-4"
                    style={{ color: stat.color }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-5xl font-black mb-3"
                    style={{ color: COLORS.primaryBg }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm font-bold uppercase tracking-widest text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced About Section */}
      <section ref={aboutRef} className="relative py-24" style={{ background: COLORS.sectionBg }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image 
                  src="/images/Image11.png"
                  alt="CEKOL Engineering Team"
                  width={800}
                  height={600}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating achievement badge */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-2xl"
                  style={{ background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.ctaHover})` }}
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-white text-center">
                    <FiAward className="text-3xl mb-2 mx-auto" />
                    <div className="text-2xl font-black">15+</div>
                    <div className="text-xs font-bold uppercase tracking-wider">Years Excellence</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <span className="text-amber-600 font-bold text-lg tracking-wider uppercase">About Us</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2 mb-6 leading-tight"
                  style={{ color: COLORS.primaryBg }}
                >
                  Building Africa&apos;s{' '}
                  <span 
                    className="relative"
                    style={{ 
                      background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.accent})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Future
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </span>
                </h2>
              </motion.div>
              
              <p className="text-xl mb-8 leading-relaxed" style={{ color: COLORS.dark }}>
                Founded in 2011 and incorporated in 2019, CEKOL Engineering Limited stands as Africa&apos;s premier 
                civil engineering and construction company. We don&apos;t just build structures - we craft legacies 
                that stand the test of time.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: <FiAward size={24} />,
                    title: "NCA5 Certified Excellence",
                    desc: "Highest category certification - your guarantee of uncompromising quality"
                  },
                  {
                    icon: <FiShield size={24} />,
                    title: "Safety-First Approach",
                    desc: "DOSH certified with zero-compromise safety protocols on every project"
                  },
                  {
                    icon: <FiTrendingUp size={24} />,
                    title: "Sustainable Innovation",
                    desc: "Leading the industry with eco-friendly and future-ready solutions"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div 
                      className="flex-shrink-0 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform"
                      style={{ background: `${COLORS.cta}20`, color: COLORS.cta }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1" style={{ color: COLORS.primaryBg }}>
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Feature list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-4 rounded-xl font-semibold border-2 transition-all duration-300"
                    style={{
                      borderColor: COLORS.cta,
                      color: COLORS.cta,
                      background: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = COLORS.cta;
                      e.target.style.color = COLORS.white;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = COLORS.cta;
                    }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="relative py-24 text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${COLORS.primaryBg} 0%, ${COLORS.primaryLight} 100%)` }}
      >
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-20"
            style={{ background: `radial-gradient(circle, ${COLORS.cta}, transparent 70%)` }}
            animate={{ scale: [1, 1.2, 1], rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-10"
            style={{ background: `radial-gradient(circle, ${COLORS.accent}, transparent 70%)` }}
            animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-amber-400 font-bold text-lg tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
              Excellence in Every{' '}
              <span style={{ color: COLORS.cta }}>Detail</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don&apos;t just meet industry standards - we set them. Here&apos;s what makes us 
              Africa&apos;s premier construction partner
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiAward size={40} />,
                title: "Certified Excellence",
                description: "NCA5 certified with all necessary government registrations and industry compliance",
                stat: "100%",
                statLabel: "Certified"
              },
              {
                icon: <FiDollarSign size={40} />,
                title: "Cost Efficiency",
                description: "Competitive pricing with transparent billing and no hidden costs",
                stat: "30%",
                statLabel: "Cost Savings"
              },
              {
                icon: <FiClock size={40} />,
                title: "On-Time Delivery",
                description: "98% on-time completion rate with industry-leading project management",
                stat: "98%",
                statLabel: "On Time"
              },
              {
                icon: <FiShield size={40} />,
                title: "Safety First",
                description: "DOSH certified with zero-incident safety record and comprehensive protocols",
                stat: "0",
                statLabel: "Incidents"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.accent})` }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: COLORS.cta }}
                    whileHover={{ rotate: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Stat display */}
                  <div className="mb-4">
                    <div className="text-3xl font-black" style={{ color: COLORS.cta }}>
                      {item.stat}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                      {item.statLabel}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects Section */}
      <section ref={projectsRef} className="relative py-24 overflow-hidden" style={{ background: COLORS.sectionBg }}>
        <motion.div 
          className="absolute -right-48 -top-48 w-96 h-96 rounded-full opacity-30"
          style={{
            background: `linear-gradient(90deg, ${COLORS.cta}40, ${COLORS.accent}40)`,
            rotate
          }}
        />

        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-amber-600 font-bold text-lg tracking-wider uppercase">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6"
              style={{ color: COLORS.primaryBg }}
            >
              Featured{' '}
              <span 
                style={{ 
                  background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Projects
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: COLORS.textLight }}>
              Explore our portfolio of successfully completed projects across Africa
            </p>
          </motion.div>
          
          {/* Enhanced Project Slideshow */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={projectImages[projectSlide]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={projectImages[projectSlide]}
                    alt={`Featured Project ${projectSlide + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                  
                  {/* Project overlay info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="max-w-2xl"
                    >
                      <div className="flex items-center mb-4">
                        <div 
                          className="px-4 py-2 rounded-full text-sm font-bold mr-4"
                          style={{ background: COLORS.cta, color: COLORS.white }}
                        >
                          Project {projectSlide + 1} of {projectImages.length}
                        </div>
                        <div className="flex items-center text-white/80">
                          <FiMapPin className="mr-1" size={16} />
                          <span className="text-sm">East Africa</span>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        Modern Infrastructure Development
                      </h3>
                      <p className="text-gray-200 text-lg mb-4">
                        State-of-the-art construction showcasing our expertise in delivering 
                        complex projects with precision and excellence.
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="text-white/80 text-sm">
                          <FiCheckCircle className="inline mr-1" />
                          Completed on schedule
                        </div>
                        <div className="text-white/80 text-sm">
                          <FiAward className="inline mr-1" />
                          Quality certified
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Project navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setProjectSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === projectSlide 
                      ? 'bg-amber-500 scale-125' 
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 10px 30px ${COLORS.cta}40`
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-xl font-bold text-lg"
              style={{
                background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.ctaHover})`,
                color: COLORS.white,
              }}
            >
              <div className="flex items-center">
                <span>View Complete Portfolio</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="relative py-24" style={{ background: COLORS.white }}>
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-amber-600 font-bold text-lg tracking-wider uppercase">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6"
              style={{ color: COLORS.primaryBg }}
            >
              Client{' '}
              <span 
                style={{ 
                  background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Success
              </span>{' '}
              Stories
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: COLORS.textLight }}>
              Don&apos;t just take our word for it - hear from satisfied clients across Africa
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "CEKOL Engineering transformed our vision into reality. Their market complex project exceeded all expectations with impeccable timing and budget management.",
                author: "Bashir Mohamed Mohamud",
                position: "Director, Infinity Development Ltd",
                project: "Uhuru Business Park Market Complex",
                rating: 5,
                avatar: "B"
              },
              {
                quote: "Outstanding professionalism in executing our electric fence project. Their technical expertise and attention to safety protocols make them our preferred contractor.",
                author: "Dr. Erustus Kanga",
                position: "Director General, Kenya Wildlife Service", 
                project: "Kapkatunga-Kipyemit Electric Fence",
                rating: 5,
                avatar: "E"
              },
              {
                quote: "Unmatched expertise in road construction. CEKOL has been our trusted partner across multiple infrastructure projects with consistent quality delivery.",
                author: "Eng. George Omondi",
                position: "Project Manager, Ministry of Transport",
                project: "Various Road Construction Projects",
                rating: 5,
                avatar: "G"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden"
              >
                {/* Hover background effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.accent})` }}
                />
                
                <div className="relative z-10">
                  {/* Star rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className="text-amber-500 fill-current" 
                        size={20} 
                      />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="text-6xl opacity-20 mb-4" style={{ color: COLORS.cta }}>
                    &ldquo;
                  </div>
                  <p className="text-gray-700 italic mb-8 leading-relaxed text-lg">
                    {testimonial.quote}
                  </p>
                  
                  {/* Author info */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
                        style={{ background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.accent})` }}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg" style={{ color: COLORS.primaryBg }}>
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.position}
                        </p>
                        <p className="text-amber-600 text-sm font-semibold mt-1">
                          {testimonial.project}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 text-white overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${COLORS.primaryBg} 0%, ${COLORS.primaryLight} 50%, ${COLORS.dark} 100%)` 
        }}
      >
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <Image 
              src="/images/Image11.png" 
              alt="Construction Background"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-slate-900/90" />
        </div>
        
        <div className="container mx-auto px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-amber-400 font-bold text-lg tracking-wider uppercase">Get Started</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-8">
              Ready to Build Your{' '}
              <span style={{ color: COLORS.cta }}>Vision?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Partner with Africa&apos;s leading construction company. Get your free consultation 
              and project estimate today.
            </p>
            
            {/* Enhanced CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 15px 40px ${COLORS.cta}50`
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-10 py-5 rounded-xl font-bold text-xl"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.ctaHover})`,
                  color: COLORS.white,
                }}
              >
                <div className="flex items-center">
                  <FiPhone className="mr-3" size={24} />
                  <span>Get Free Quote</span>
                  <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 rounded-xl font-bold text-xl border-2 border-white/30 text-white backdrop-blur-sm"
              >
                <div className="flex items-center">
                  <FiMail className="mr-3" size={24} />
                  <span>View Portfolio</span>
                </div>
              </motion.button>
            </motion.div>
            
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-300"
            >
              <div className="flex items-center">
                <FiPhone className="mr-2" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center">
                <FiMail className="mr-2" />
                <span>info@cekolengineering.com</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 10px 30px ${COLORS.cta}40`
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-xl font-bold text-lg"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.ctaHover})`,
                  color: COLORS.white,
                }}
              >
                <div className="flex items-center">
                  <span>Discover Our Story</span>
                  <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="relative py-24" style={{ background: COLORS.white }}>
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, ${COLORS.cta} 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-amber-600 font-bold text-lg tracking-wider uppercase">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6"
              style={{ color: COLORS.primaryBg }}
            >
              Complete{' '}
              <span 
                style={{ 
                  background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Construction
              </span>{' '}
              Solutions
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: COLORS.textLight }}>
              From concept to completion, we deliver comprehensive engineering and construction 
              services that exceed expectations
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -15 },
                  visible: { opacity: 1, y: 0, rotateX: 0 }
                }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 overflow-hidden"
              >
                {/* Hover background effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${COLORS.cta}, ${COLORS.accent})` }}
                />
                
                <div className="relative z-10">
                  {/* Enhanced icon */}
                  <motion.div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${COLORS.cta}20, ${COLORS.accent}20)`,
                      color: COLORS.cta
                    }}
                    whileHover={{ rotate: 5 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-600 transition-colors"
                    style={{ color: COLORS.primaryBg }}
                  >
                    {service.title}
                  </h3>
                  
                  <p className="text
