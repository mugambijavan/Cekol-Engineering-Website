'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import { FiUsers, FiCheckCircle, FiDollarSign, FiActivity, FiAward, FiGlobe, FiShield, FiTrendingUp, FiDownload, FiX, FiPhone } from 'react-icons/fi';

// Construction color palette
const COLORS = {
  primaryBg: "#0a2240",      // Deep construction blue
  sectionBg: "#f5f6fa",      // Light concrete gray
  dark: "#18181b",           // Charcoal for text/background
  cta: "#f59e0b",            // Amber/Construction Yellow (use for CTAs, icons)
  accent: "#ffbe3b",         // Lighter yellow for hover/accents
  white: "#fff",
  border: "#e0e3e7",         // Light border gray
};

const AboutPage = () => {
  const router = useRouter();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  const heroHeight = 'h-[48vh]';
  const bgImage = 'Image13.png';
  
  const slides = [
    { 
      text: 'Engineering the Impossible, Making it Possible',
      stats: ['112+ Skilled Professionals', '250+ Completed Projects', '12 African Countries']
    },
    { 
      text: 'NCA Category NCAS & NCAA Certified',
      stats: ['KES 727M Annual Turnover', 'ISO 9001:2015 Certified', 'AGPO Youth Registered']
    },
    { 
      text: 'Sustainable Infrastructure Solutions',
      stats: ['18KM Electric Fence Project', 'KES 349M Market Complex', 'Environmental Policy Compliant']
    },
  ];

  const certifications = [
    { 
      name: 'NCA Category NCAS', 
      year: '2022-2025', 
      issuer: 'National Construction Authority',
      description: 'Building Works Contractor certification valid until 2025',
      icon: <FiAward style={{ color: COLORS.cta }} className="w-6 h-6" />
    },
    { 
      name: 'NCA Category NCAA', 
      year: '2022-2025', 
      issuer: 'National Construction Authority',
      description: 'Water Works Contractor certification',
      icon: <FiAward style={{ color: COLORS.primaryBg }} className="w-6 h-6" />
    },
    { 
      name: 'AGPO Certified', 
      year: '2022-2024', 
      issuer: 'National Treasury',
      description: 'Youth Empowerment Program registration',
      icon: <FiTrendingUp style={{ color: "#47a447" }} className="w-6 h-6" />
    },
    { 
      name: 'OSH Compliance', 
      year: '2023', 
      issuer: 'DOSH Kenya',
      description: 'Occupational Safety and Health certified workplace',
      icon: <FiShield style={{ color: "#e74c3c" }} className="w-6 h-6" />
    },
    { 
      name: 'KRA Tax Compliant', 
      year: '2023', 
      issuer: 'Kenya Revenue Authority',
      description: 'Full tax compliance certification',
      icon: <FiCheckCircle style={{ color: "#9b59b6" }} className="w-6 h-6" />
    },
    { 
      name: 'ISO 9001:2015', 
      year: '2022', 
      issuer: 'National Construction Authority',
      description: 'Quality management system certification',
      icon: <FiCheckCircle style={{ color: "#38bdf8" }} className="w-6 h-6" />
    },
  ];

  const keyProjects = [
    {
      id: 1,
      title: "Kapkatunga Kipyemit Electric Fence",
      value: "KES 14.5M",
      location: "Kericho County, Kenya",
      description: "Construction of 18km wildlife electric fence with associated infrastructure to protect communities from animal encroachment",
      year: "2023-2024",
      role: "Prime Contractor",
      scope: "Specialized fencing with equipment leasing",
      images: [
        "/images/fence1.jpeg",
        "/images/fence2.jpeg",
        "/images/fence3.jpeg",
        "/images/fence4.jpeg"
      ]
    },
    {
      id: 2,
      title: "Uhuru Business Park",
      value: "KES 349.5M",
      location: "Kisumu County, Kenya",
      description: "Subcontracted construction of market complex including earthworks, stormwater drainage, concrete/cabro paving, and structural buildings",
      year: "2019-2020",
      role: "Subcontractor",
      scope: "Commercial complex development",
      images: [
        "/images/market2.jpeg",
        "/images/market1.jpeg",
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 8000);
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
      {/* Company Profile Modal */}
      <AnimatePresence>
        {isProfileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsProfileOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b"
                style={{ borderColor: COLORS.border }}>
                <h3 className="text-xl font-bold" style={{ color: COLORS.primaryBg }}>Company Profile</h3>
                <button 
                  onClick={() => setIsProfileOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <FiX className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <div className="flex-1 overflow-auto">
                <div className="w-full h-[70vh]">
                  <iframe 
                    src="/doc/company-profile.pdf" 
                    className="w-full h-full"
                    frameBorder="0"
                  />
                </div>
              </div>
              
              <div className="p-4 border-t flex justify-end"
                style={{ borderColor: COLORS.border }}>
                <a 
                  href="/doc/company-profile.pdf" 
                  download="Cekol-Engineering-Profile.pdf"
                  className="flex items-center gap-2 px-6 py-3"
                  style={{
                    background: COLORS.primaryBg,
                    color: COLORS.white,
                    borderRadius: 8,
                    fontWeight: 500
                  }}
                >
                  <FiDownload className="w-5 h-5" />
                  Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        className={`relative ${heroHeight} overflow-hidden`}
        style={{
          background: `linear-gradient(135deg, ${COLORS.primaryBg} 80%, ${COLORS.dark} 100%)`
        }}
      >
        {/* BLURRED BACKGROUND IMAGE */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/images/${bgImage})`,
            scale,
            rotateX,
            opacity,
            filter: 'blur(16px)' // <-- Add this line to blur the background image
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2240]/80 via-[#0a2240]/50 to-[#18181b]/30 pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <AnimatePresence mode="wait">
            {slides.map((slide, index) =>
              activeSlide === index && (
                <motion.div
                  key={index}
                  className="w-full max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 1.0, ease: 'easeInOut' }}
                >
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                    style={{
                      color: COLORS.white,
                      textShadow: "0 2px 6px #18181b80"
                    }}
                    initial={{ letterSpacing: '0em' }}
                    animate={{ letterSpacing: '0.02em' }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  >
                    {slide.text}
                  </motion.h1>
                  <motion.div
                    className="flex flex-wrap justify-center gap-4 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {slide.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border"
                        style={{
                          borderColor: COLORS.cta + "40",
                          color: COLORS.white,
                          fontWeight: 500,
                          fontSize: 16
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: idx * 0.15,
                          type: 'spring',
                          stiffness: 100,
                          damping: 10
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span>{stat}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        
      </section>

      {/* Company Introduction */}
      <section className="py-24" style={{ background: COLORS.sectionBg }}>
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/2">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: COLORS.primaryBg }}
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Engineering <span style={{ color: COLORS.dark }}>Africa&apos;s Future</span>
              </motion.h2>
              <motion.p 
                className="text-lg mb-6 leading-relaxed"
                style={{ color: COLORS.dark }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Founded in 2011 and incorporated in 2019, Cekol Engineering has grown from a Kenyan startup to a pan-African leader in civil engineering. Our team of 112+ professionals delivers innovative infrastructure solutions across 12 countries.
              </motion.p>
              <motion.p 
                className="text-lg mb-8 leading-relaxed"
                style={{ color: COLORS.dark }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                We specialize in sustainable projects that enhance communities while maintaining ISO 9001:2015 quality standards and AGPO youth empowerment compliance.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: COLORS.primaryBg + "10", color: COLORS.primaryBg }}>
                  <FiPhone />
                  <span>+254725745922</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: COLORS.primaryBg + "10", color: COLORS.primaryBg }}>
                  <FiGlobe />
                  <span>info@cekolengineering.co.ke</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                <motion.button 
                  className="px-8 py-3.5 rounded-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: COLORS.primaryBg,
                    color: COLORS.white
                  }}
                  onClick={() => setIsProfileOpen(true)}
                >
                  View Company Profile
                </motion.button>
                <motion.button 
                  className="px-8 py-3.5 border rounded-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: COLORS.white,
                    color: COLORS.primaryBg,
                    borderColor: COLORS.primaryBg
                  }}
                  onClick={() => router.push('/contact')}
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/images/Image15.png"
                  alt="Cekol Engineering Team"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 p-4 rounded-lg shadow-lg"
                  style={{
                    background: COLORS.white,
                    color: COLORS.primaryBg
                  }}>
                  <div className="text-2xl font-bold">{slides[0].stats[0]}</div>
                  <div>Skilled Professionals</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Journey Timeline */}
      <section className="py-24"
        style={{ background: COLORS.sectionBg }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: COLORS.primaryBg }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our <span style={{ color: COLORS.cta }}>Evolution</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '120px' }}
              className="h-1"
              style={{ background: COLORS.cta, margin: "1.5rem auto 0 auto" }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#0a2240] to-[#f59e0b] transform -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-16 md:space-y-0">
              {[
                { 
                  year: '2011', 
                  event: 'Company Foundation', 
                  detail: 'Founded as a construction business in Nairobi, Kenya',
                  icon: <FiActivity className="w-6 h-6" style={{ color: COLORS.primaryBg }} />
                },
                { 
                  year: '2019', 
                  event: 'Incorporation', 
                  detail: 'Registered as Cekol Engineering Limited with KES 100M share capital',
                  icon: <FiCheckCircle className="w-6 h-6" style={{ color: COLORS.cta }} />
                },
                { 
                  year: '2020', 
                  event: 'Uhuru Market Complex', 
                  detail: 'Subcontracted for KES 120M works on major government project',
                  icon: <FiTrendingUp className="w-6 h-6" style={{ color: COLORS.cta }} />
                },
                { 
                  year: '2022', 
                  event: 'Certification Milestone', 
                  detail: 'Achieved NCA NCAS, NCAA and ISO 9001:2015 certifications',
                  icon: <FiAward className="w-6 h-6" style={{ color: COLORS.cta }} />
                },
                { 
                  year: '2024', 
                  event: 'Wildlife Protection Project', 
                  detail: 'Awarded KES 14.5M contract for electric fence construction',
                  icon: <FiGlobe className="w-6 h-6" style={{ color: COLORS.cta }} />
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold z-10 shadow-lg border-4"
                    whileHover={{ scale: 1.1 }}
                    style={{
                      background: COLORS.primaryBg,
                      color: COLORS.white,
                      borderColor: COLORS.white
                    }}
                  >
                    {item.year}
                  </motion.div>
                  
                  <motion.div 
                    className={`flex-1 p-8 rounded-2xl shadow-xl border`}
                    whileHover={{ y: -5 }}
                    style={{
                      background: COLORS.white,
                      borderColor: COLORS.border,
                      color: COLORS.primaryBg
                    }}
                  >
                    <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} gap-4 mb-4`}>
                      {item.icon}
                      <h3 className="text-2xl font-bold">{item.event}</h3>
                    </div>
                    <p style={{ color: COLORS.dark }}>{item.detail}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24"
        style={{ background: `linear-gradient(135deg, ${COLORS.primaryBg} 80%, ${COLORS.dark} 100%)` }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: COLORS.cta }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Signature <span style={{ color: COLORS.white }}>Projects</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '200px' }}
              className="h-1"
              style={{ background: COLORS.cta, margin: "0 auto" }}
            />
            <motion.p
              className="max-w-2xl mx-auto mt-6"
              style={{ color: COLORS.white + "CC" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Delivering excellence across diverse construction domains
            </motion.p>
          </div>
          <div className="grid gap-16">
            {keyProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                <div className="md:w-1/2">
                  <div className="font-bold text-lg mb-1"
                    style={{ color: COLORS.cta }}>{project.value}</div>
                  <h3 className="text-3xl font-bold mb-4"
                    style={{ color: COLORS.white }}>{project.title}</h3>
                  <div className="text-lg mb-3 flex items-center gap-2"
                    style={{ color: COLORS.cta }}>
                    <FiGlobe />
                    {project.location} • {project.year}
                  </div>
                  <div className="p-3 rounded-lg mb-4 inline-block"
                    style={{ background: COLORS.primaryBg, color: COLORS.white, fontWeight: 500 }}>
                    {project.role} • {project.scope}
                  </div>
                  <p className="mb-6"
                    style={{ color: COLORS.white + "CC" }}>{project.description}</p>
                  <div className="flex gap-3 mt-4">
                    {project.images.slice(1).map((img, idx) => (
                      <motion.div
                        key={idx}
                        className="w-16 h-16 rounded-lg overflow-hidden border-2"
                        whileHover={{ scale: 1.1 }}
                        style={{ borderColor: COLORS.white + "33" }}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} preview ${idx+1}`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Excellence */}
      <section className="py-24" style={{ background: COLORS.sectionBg }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: COLORS.primaryBg }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Operational <span style={{ color: COLORS.cta }}>Excellence</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '150px' }}
              className="h-1"
              style={{ background: COLORS.primaryBg, margin: "0 auto" }}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Quality Assurance",
                content: "ISO 9001:2015 certified processes with 3-tier quality checks",
                icon: <FiCheckCircle className="w-8 h-8" style={{ color: COLORS.primaryBg }} />
              },
              { 
                title: "Safety Protocol",
                content: "DOSH certified workplace with zero accident record",
                icon: <FiShield className="w-8 h-8" style={{ color: COLORS.primaryBg }} />
              },
              { 
                title: "Technical Expertise",
                content: "112+ professionals including graduate engineers",
                icon: <FiUsers className="w-8 h-8" style={{ color: COLORS.primaryBg }} />
              },
              { 
                title: "Sustainability",
                content: "Net-zero roadmap with efficient environmental practices",
                icon: <FiGlobe className="w-8 h-8" style={{ color: COLORS.primaryBg }} />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl border transition-all shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                viewport={{ once: true }}
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.border
                }}
              >
                <div className="mb-4" style={{ color: COLORS.primaryBg }}>{item.icon}</div>
                <div className="text-xl font-bold mb-4" style={{ color: COLORS.primaryBg }}>{item.title}</div>
                <p style={{ color: COLORS.dark }}>{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section className="py-24 text-white"
        style={{ background: `linear-gradient(90deg, ${COLORS.primaryBg} 80%, ${COLORS.dark} 100%)` }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: COLORS.cta }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Financial <span style={{ color: COLORS.white }}>Strength</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '200px' }}
              className="h-1"
              style={{ background: COLORS.cta, margin: "0 auto" }}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FiDollarSign className="w-8 h-8" />,
                title: "2022 Turnover",
                value: "KES 727.6M",
                growth: "+27% from 2021",
                detail: "Revenue from construction projects across multiple sectors"
              },
              { 
                icon: <FiActivity className="w-8 h-8" />,
                title: "Total Assets",
                value: "KES 161.6M",
                growth: "8.2% Increase",
                detail: "Including property, plant and equipment valued at KES 24.4M"
              },
              { 
                icon: <FiTrendingUp className="w-8 h-8" />,
                title: "Net Profit",
                value: "KES 17.2M",
                growth: "Maintained profitability",
                detail: "After tax and administrative expenses"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl backdrop-blur-sm border transition-all"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                style={{
                  background: COLORS.primaryBg + "CC",
                  borderColor: COLORS.cta + "22"
                }}
              >
                <div className="text-4xl mb-6" style={{ color: COLORS.cta }}>{item.icon}</div>
                <div className="text-3xl font-bold mb-2">{item.value}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="mb-4" style={{ color: COLORS.accent }}>{item.growth}</p>
                <p className="text-sm" style={{ color: COLORS.white + "CC" }}>{item.detail}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-20 p-8 rounded-2xl backdrop-blur-sm border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ background: COLORS.primaryBg + "B0", borderColor: COLORS.cta + "22" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Banking Relationships</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl"
                style={{ background: COLORS.primaryBg + "33" }}>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                    style={{ background: COLORS.white, color: COLORS.primaryBg }}>D</div>
                  Diamond Trust Bank
                </h4>
                <p className="mb-4" style={{ color: COLORS.white + "CC" }}>Corporate Account since July 2023</p>
                <div className="text-sm" style={{ color: COLORS.white + "CC" }}>
                  <div>Account: 0968482001</div>
                  <div>Branch: Prestige Plaza (023)</div>
                </div>
              </div>
              <div className="p-6 rounded-xl"
                style={{ background: COLORS.primaryBg + "33" }}>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                    style={{ background: "#eafbea", color: "#249d49" }}>N</div>
                  NCBA Bank Kenya PLC
                </h4>
                <p className="mb-4" style={{ color: COLORS.white + "CC" }}>Pre-approved credit facility</p>
                <div className="text-sm" style={{ color: COLORS.white + "CC" }}>
                  Eligible for credit facilities up to <span className="font-bold" style={{ color: COLORS.white }}>KES 100M</span> subject to approval
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24" style={{ background: COLORS.sectionBg }}>
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: COLORS.primaryBg }}>
              Our <span style={{ color: COLORS.cta }}>Accreditations</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '120px' }}
              className="h-1"
              style={{ background: COLORS.cta, margin: "1.5rem auto 1.5rem auto" }}
            />
            <p className="max-w-2xl mx-auto mt-6"
              style={{ color: COLORS.dark }}>
              Certified compliance with all regulatory requirements and industry standards
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl shadow-lg transition-all border"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, type: 'spring', stiffness: 120 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                style={{ background: COLORS.white, borderColor: COLORS.border }}
              >
                <div className="flex items-start mb-4 gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: COLORS.cta + "20" }}>
                    {cert.icon}
                  </div>
                  <div>
                    <div className="text-xl font-bold" style={{ color: COLORS.primaryBg }}>{cert.name}</div>
                    <div className="text-sm" style={{ color: COLORS.dark }}>{cert.issuer}</div>
                  </div>
                </div>
                <div className="text-sm mb-3" style={{ color: COLORS.dark }}>
                  {cert.description}
                </div>
                <div className="text-xs font-medium" style={{ color: COLORS.cta }}>
                  Valid: {cert.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-24 text-white"
        style={{ background: `linear-gradient(135deg, ${COLORS.primaryBg} 80%, ${COLORS.dark} 100%)` }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: COLORS.cta }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Leadership & <span style={{ color: COLORS.white }}>Governance</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '180px' }}
              className="h-1"
              style={{ background: COLORS.cta, margin: "0 auto" }}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="p-8 rounded-2xl backdrop-blur-sm border"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ background: COLORS.primaryBg + "CC", borderColor: COLORS.cta + "22" }}
            >
              <h3 className="text-2xl font-bold mb-6">Management Team</h3>
              <div className="space-y-6">
                {[
                  { role: "Executive Director", name: "Christopher Ogola" },
                  { role: "General Manager", name: "Eng. Ogonjo" },
                  { role: "Finance Manager", name: "Chen Jiang Bing" },
                  { role: "Project Manager", name: "Eng. Methu" },
                  { role: "HSE Engineer", name: "Safety Compliance Officer" },
                ].map((person, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                      style={{
                        background: COLORS.cta,
                        color: COLORS.primaryBg
                      }}>
                      {person.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{person.role}</div>
                      <div style={{ color: COLORS.accent }}>{person.name}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="p-8 rounded-2xl backdrop-blur-sm border"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ background: COLORS.primaryBg + "CC", borderColor: COLORS.cta + "22" }}
            >
              <h3 className="text-2xl font-bold mb-6">Core Values</h3>
              <div className="space-y-6">
                {[
                  { value: "Quality", description: "Outstanding service through teamwork and innovation" },
                  { value: "Safety", description: "Proactive safety culture protecting all stakeholders" },
                  { value: "Innovation", description: "Continual improvement through technology" },
                  { value: "Sustainability", description: "Environmental protection through efficient practices" },
                  { value: "Integrity", description: "Ethical business practices and transparency" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: COLORS.cta + "20",
                        color: COLORS.cta,
                        fontWeight: "bold"
                      }}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-bold">{item.value}</div>
                      <div style={{ color: COLORS.accent }}>{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white"
        style={{ background: `linear-gradient(90deg, ${COLORS.primaryBg} 80%, ${COLORS.dark} 100%)` }}
      >
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <motion.div
            className="backdrop-blur-sm p-8 rounded-2xl border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              background: COLORS.primaryBg + "B0",
              borderColor: COLORS.cta + "22"
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build Africa&apos;s Future <span style={{ color: COLORS.cta }}>With Us</span>
            </motion.h2>
            <motion.p
              className="text-xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ color: COLORS.white + "CC" }}
            >
              Partner with Kenya&apos;s premier engineering firm for innovative infrastructure solutions
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button 
                className="px-8 py-3.5 rounded-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: COLORS.cta,
                  color: COLORS.primaryBg
                }}
                onClick={() => router.push('/contact')}
              >
                Request a Quote
              </motion.button>
              <motion.button 
                className="px-8 py-3.5 border-2 rounded-lg font-bold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "transparent",
                  borderColor: COLORS.cta,
                  color: COLORS.cta
                }}
                onClick={() => setIsProfileOpen(true)}
              >
                <FiDownload />
                Download Profile
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;