'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FiCheckCircle, 
  FiClock, 
  FiUsers, 
  FiAward,
  FiMapPin,
  FiShield,
  FiTrendingUp,
  FiDollarSign
} from 'react-icons/fi';
import { SERVICES } from './_utils/constants';

// Color palette for construction theme
const COLORS = {
  primaryBg: "#0a2240",      // Deep construction blue
  sectionBg: "#f5f6fa",      // Light concrete gray
  dark: "#18181b",           // Charcoal for text/background
  cta: "#f59e0b",            // Amber/Construction Yellow (use for CTAs, icons)
  accent: "#ffbe3b",         // Lighter yellow for hover/accents
  white: "#fff",
  border: "#e0e3e7",         // Light border gray
};

export default function Home() {
  const heroSlides = [
    { 
      image: '/images/Image11.png', 
      title: 'Engineering Excellence Since 2011',
      subtitle: 'Delivering innovative construction solutions across Africa',
      stats: [
        { value: '250+', label: 'Projects' },
        { value: '98%', label: 'Satisfaction' }
      ]
    },
    { 
      image: '/images/Image13.png', 
      title: '250+ Successful Projects Delivered',
      subtitle: 'From commercial buildings to infrastructure development',
      stats: [
        { value: '15+', label: 'Years' },
        { value: 'NCA5', label: 'Certified' }
      ]
    },
    { 
      image: '/images/Image17.png', 
      title: 'NCA5 Certified Contractor',
      subtitle: 'Highest category certification for building works',
      stats: [
        { value: '50+', label: 'Engineers' },
        { value: '24/7', label: 'Support' }
      ]
    },
  ];
  
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: projectsRef, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const [activeSlide, setActiveSlide] = useState(0);
  // Project slideshow images
  const projectImages = [
    '/images/Image10.png',
    '/images/Image11.png',
    '/images/Image12.png',
    '/images/Image13.png',
    '/images/Image14.png',
    '/images/Image15.png',
    '/images/Image16.png',
    '/images/Image17.png',
    '/images/Image18.png',
    '/images/Image19.png',
  ];
  // For project slideshow
  const [projectSlide, setProjectSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroSlides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Project slideshow auto
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectSlide(prev => (prev + 1) % projectImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projectImages.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative h-screen overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${COLORS.primaryBg} 80%, ${COLORS.dark} 100%)` }}
      >
        <div className="absolute inset-0 z-0">
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
              {Array.from({ length: 72 }).map((_, i) => (
                <motion.div 
                  key={i}
                  className="border"
                  style={{ borderColor: COLORS.border }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 1, 
                    delay: i * 0.01,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 3
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Floating construction icons */}
          <motion.div 
            className="absolute top-20 right-20"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <FiAward style={{ color: COLORS.cta }} className="text-4xl opacity-50" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-40 left-24"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <FiShield style={{ color: COLORS.cta }} className="text-4xl opacity-50" />
          </motion.div>
          
          <motion.div 
            className="absolute top-1/3 left-1/4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <FiCheckCircle style={{ color: COLORS.cta }} className="text-4xl opacity-50" />
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
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0 z-0"
              >
                {/* Parallax background layers */}
                <motion.div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  initial={{ scale: 1.1, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 8, ease: 'easeOut' }}
                >
                  <div className="absolute inset-0" style={{
                    background: "linear-gradient(to bottom, rgba(10,34,64,0.82) 0%, rgba(10,34,64,0.34) 60%, rgba(24,24,27,0.8) 100%)"
                  }} />
                  <div className="absolute inset-0" style={{
                    background: "linear-gradient(to right, rgba(10,34,64,0.3), rgba(10,34,64,0.3))"
                  }} />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="absolute inset-0 z-10 flex items-center justify-center"
                >
                  <div className="container px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white lg:w-1/2"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          className="mb-6"
                        >
                          <motion.span 
                            className="font-semibold tracking-widest uppercase text-sm"
                            style={{ color: COLORS.cta }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            Building the Future
                          </motion.span>
                          <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight"
                          >
                            {slide.title.split(' ').map((word, i) => (
                              <motion.span
                                key={i}
                                className="inline-block mr-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                  duration: 0.5, 
                                  delay: 0.5 + (i * 0.05),
                                  type: "spring",
                                  stiffness: 100
                                }}
                              >
                                {word}
                              </motion.span>
                            ))}
                          </motion.h1>
                          
                          <motion.p
                            className="text-xl text-gray-200 mb-10 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                          >
                            {slide.subtitle}
                          </motion.p>
                          
                          <motion.div
                            className="flex gap-6 mb-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                          >
                            {slide.stats.map((stat, i) => (
                              <div key={i} className="text-center">
                                <div className="text-3xl font-bold" style={{ color: COLORS.cta }}>{stat.value}</div>
                                <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
                              </div>
                            ))}
                          </motion.div>
                          
                          <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                          >
                            <Link href="/contact">
                              <motion.button
                                whileHover={{ 
                                  scale: 1.05,
                                  backgroundColor: COLORS.accent
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="relative overflow-hidden group"
                                style={{
                                  background: COLORS.cta,
                                  color: COLORS.white,
                                  padding: "1rem 2rem",
                                  borderRadius: "0.5rem",
                                  fontWeight: 500,
                                  fontSize: "1.125rem",
                                  transition: "background 0.3s"
                                }}
                              >
                                <span>Get a Quote</span>
                                <motion.span
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 1.6 }}
                                  style={{ marginLeft: 8 }}
                                >
                                  &rarr;
                                </motion.span>
                              </motion.button>
                            </Link>
                            <Link href="/projects">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                                style={{
                                  background: "transparent",
                                  borderColor: COLORS.white,
                                  color: COLORS.white,
                                }}
                              >
                                View Projects
                              </motion.button>
                            </Link>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="lg:w-1/2 relative"
                      >
                        <div className="relative aspect-video bg-gray-900/50 border-2 rounded-xl overflow-hidden shadow-2xl"
                          style={{ borderColor: COLORS.cta }}
                        >
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              backgroundImage: `url(${slide.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 8, ease: 'easeOut' }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <motion.h3 
                              className="text-white text-xl font-semibold"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1 }}
                            >
                              Featured Project
                            </motion.h3>
                            <motion.p 
                              style={{ color: COLORS.cta }}
                              className="font-bold"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.2 }}
                            >
                              Modern Commercial Complex
                            </motion.p>
                          </div>
                          
                          {/* Animated construction elements */}
                          <motion.div 
                            className="absolute top-6 right-6 text-black px-3 py-1 rounded-full text-sm font-bold"
                            style={{ background: COLORS.cta }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              delay: 1.4,
                              type: "spring"
                            }}
                          >
                            NCA5 Certified
                          </motion.div>
                          
                          <motion.div 
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: 1.6,
                              type: "spring",
                              stiffness: 200
                            }}
                          >
                            <div style={{ background: COLORS.cta + "CC" }} className="w-16 h-16 rounded-full flex items-center justify-center">
                              <FiAward className="text-white text-2xl" />
                            </div>
                          </motion.div>
                        </div>
                        
                        {/* Floating elements */}
                        <motion.div
                          className="absolute -top-6 -left-6 bg-gray-900 p-4 rounded-lg shadow-lg border"
                          style={{ borderColor: COLORS.cta + "4D" }}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.8 }}
                        >
                          <div className="flex items-center gap-2">
                            <FiClock style={{ color: COLORS.cta }} />
                            <span className="text-white text-sm">On-time Delivery</span>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          className="absolute -bottom-6 -right-6 bg-gray-900 p-4 rounded-lg shadow-lg border"
                          style={{ borderColor: COLORS.cta + "4D" }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 2 }}
                        >
                          <div className="flex items-center gap-2">
                            <FiDollarSign style={{ color: COLORS.cta }} />
                            <span className="text-white text-sm">Cost Efficiency</span>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <span className="text-gray-300 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-8 h-12 rounded-full border-2 flex justify-center p-1"
              style={{ borderColor: COLORS.cta }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full"
                style={{ background: COLORS.cta }}
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative py-20 text-white overflow-hidden"
        style={{ background: COLORS.primaryBg }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full blur-2xl"
            style={{ background: `linear-gradient(90deg, ${COLORS.cta}44, ${COLORS.accent}44)` }}
          />
          <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full blur-2xl"
            style={{ background: `linear-gradient(90deg, #cbd5e1, #38bdf8)` }}
          />
        </div>
        <div className="container relative grid md:grid-cols-4 gap-6 text-center mx-auto px-4">
          {[
            { icon: <FiCheckCircle size={28} />, value: '250+', label: 'Projects Completed' },
            { icon: <FiClock size={28} />, value: '12+', label: 'Years Experience' },
            { icon: <FiUsers size={28} />, value: '112+', label: 'Skilled Professionals' },
            { icon: <FiMapPin size={28} />, value: '12+', label: 'African Countries' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 rounded-xl bg-white/90 backdrop-blur-lg border transition-all"
              style={{ borderColor: COLORS.border }}
            >
              <div className="flex justify-center text-3xl mb-4" style={{ color: COLORS.cta }}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: COLORS.primaryBg }}>
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-widest" style={{ color: COLORS.dark }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <section ref={aboutRef} className="relative py-20"
        style={{ background: COLORS.sectionBg }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/Image11.png"
                  alt="CEKOL Engineering Team"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 p-6 rounded-lg shadow-lg"
                  style={{ background: COLORS.cta, color: COLORS.white }}
                >
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: COLORS.primaryBg }}
              >
                About <span style={{ color: COLORS.cta }}>CEKOL Engineering</span>
              </h2>
              <p className="text-lg mb-6" style={{ color: COLORS.dark }}>
                Founded in 2011 and incorporated in 2019, CEKOL Engineering Limited is a leading civil engineering and construction company operating across Africa. We specialize in delivering high-quality, innovative, and sustainable infrastructure solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4" style={{ color: COLORS.cta }}>
                    <FiAward size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: COLORS.primaryBg }}>NCA5 Certified</h4>
                    <p style={{ color: COLORS.dark }}>Highest category certification for building works from the National Construction Authority</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4" style={{ color: COLORS.cta }}>
                    <FiShield size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: COLORS.primaryBg }}>Safety First</h4>
                    <p style={{ color: COLORS.dark }}>DOSH certified with comprehensive workplace safety policies and procedures</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4" style={{ color: COLORS.cta }}>
                    <FiTrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: COLORS.primaryBg }}>Sustainable Growth</h4>
                    <p style={{ color: COLORS.dark }}>Committed to environmental sustainability and continuous improvement</p>
                  </div>
                </div>
              </div>
              
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-lg font-medium transition-colors"
                  style={{
                    background: COLORS.cta,
                    color: COLORS.white,
                  }}
                >
                  Read Our Full Story
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20"
        style={{ background: COLORS.sectionBg }}
      >
        <div className="absolute inset-0" style={{
          background: "radial-gradient(#e0e3e7 1px,transparent 1px)",
          backgroundSize: "16px 16px"
        }} />
        
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: COLORS.primaryBg }}
            >
              Our <span style={{ color: COLORS.cta }}>Comprehensive</span> Services
            </h2>
            <p className="text-lg" style={{ color: COLORS.dark }}>
              We offer a full range of construction and engineering services to meet all your infrastructure needs
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="w-full max-w-[400px]"
              >
                <div className="h-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border"
                  style={{ borderColor: COLORS.border }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#fffbe3] transition-colors"
                      style={{
                        background: COLORS.cta + "22",
                        color: COLORS.cta
                      }}
                    >
                      <span className="text-xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold"
                      style={{ color: COLORS.primaryBg }}
                    >{service.title}</h3>
                  </div>
                  <p className="leading-relaxed mb-4"
                    style={{ color: COLORS.dark }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 text-white"
        style={{ background: COLORS.primaryBg }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why <span style={{ color: COLORS.cta }}>Choose CEKOL</span> Engineering?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg"
              style={{ color: "#e5e7eb" }}
            >
              We stand out in the construction industry through our commitment to excellence and innovation
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiAward size={32} />,
                title: "Certified Excellence",
                description: "NCA5 certified with all necessary government registrations and compliance"
              },
              {
                icon: <FiDollarSign size={32} />,
                title: "Competitive Pricing",
                description: "Cost-effective solutions without compromising on quality or safety"
              },
              {
                icon: <FiClock size={32} />,
                title: "Timely Delivery",
                description: "Proven track record of completing projects on schedule"
              },
              {
                icon: <FiShield size={32} />,
                title: "Safety First",
                description: "DOSH certified with comprehensive safety protocols for all projects"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#18181b] rounded-xl p-6 hover:bg-[#23272e] transition-colors"
              >
                <div className="mb-4" style={{ color: COLORS.cta }}>{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects with Slideshow */}
      <section ref={projectsRef} className="relative py-20 overflow-hidden"
        style={{ background: COLORS.sectionBg }}
      >
        <motion.div 
          className="absolute -right-48 -top-48 w-96 h-96 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${COLORS.cta}44, ${COLORS.accent}44)`,
            rotate
          }}
        />

        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: COLORS.primaryBg }}
            >
              Our <span style={{ color: COLORS.cta }}>Featured</span> Projects
            </h2>
            <p className="text-lg"
              style={{ color: COLORS.dark }}
            >
              Showcasing some of our most significant and challenging projects
            </p>
          </motion.div>
          
          {/* Project Images Slideshow */}
          <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl mb-12">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={projectImages[projectSlide]}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image 
                  src={projectImages[projectSlide]}
                  alt={`Featured Project ${projectSlide + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link href="/projects">
              <button 
                className="px-8 py-3 rounded-lg font-medium text-lg shadow-lg transition-colors"
                style={{
                  background: COLORS.cta,
                  color: COLORS.white,
                }}
              >
                View All Projects
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20"
        style={{ background: COLORS.sectionBg }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: COLORS.primaryBg }}
            >
              What Our <span style={{ color: COLORS.cta }}>Clients</span> Say
            </h2>
            <p className="text-lg" style={{ color: COLORS.dark }}>
              Hear from some of our satisfied clients about their experience working with us
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "CEKOL Engineering delivered our market complex project on time and within budget. Their attention to detail was impressive.",
                author: "Bashir Mohamed Mohamud",
                position: "Director, Infinity Development Ltd",
                project: "Uhuru Business Park Market Complex"
              },
              {
                quote: "The team demonstrated exceptional professionalism in executing our electric fence project. Highly recommended for government contracts.",
                author: "Dr. Erustus Kanga",
                position: "Director General, Kenya Wildlife Service",
                project: "Kapkatunga-Kipyemit Electric Fence"
              },
              {
                quote: "Their expertise in road construction and gravelling works is unmatched in the region. We've partnered on multiple projects.",
                author: "Eng. George Omondi",
                position: "Project Manager, Ministry of Transport",
                project: "Various Road Construction Projects"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md border"
                style={{ borderColor: COLORS.border }}
              >
                <div className="text-4xl mb-4" style={{ color: COLORS.cta }}>&quot;</div>
                <p className="italic mb-6" style={{ color: COLORS.dark }}>{testimonial.quote}</p>
                <div className="border-t pt-4" style={{ borderColor: COLORS.border }}>
                  <h4 className="font-bold" style={{ color: COLORS.primaryBg }}>{testimonial.author}</h4>
                  <p className="text-sm" style={{ color: COLORS.dark }}>{testimonial.position}</p>
                  <p className="text-sm mt-1" style={{ color: COLORS.cta }}>{testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white"
        style={{ background: `linear-gradient(90deg, ${COLORS.primaryBg} 80%, ${COLORS.dark} 100%)` }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/image.png')] bg-cover bg-center" />
        </div>
        
        <div className="container mx-auto px-4 relative text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: "#e5e7eb" }}
          >
            Contact us today to discuss your construction needs and get a free consultation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-medium text-lg transition-colors"
                style={{
                  background: COLORS.cta,
                  color: COLORS.white,
                }}
              >
                Get a Free Quote
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
                style={{
                  background: "transparent",
                  borderColor: COLORS.white,
                  color: COLORS.white,
                }}
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}