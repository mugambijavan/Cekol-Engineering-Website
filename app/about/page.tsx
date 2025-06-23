'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import { FiUsers, FiCheckCircle, FiDollarSign, FiActivity, FiAward, FiGlobe, FiShield, FiTrendingUp, FiDownload, FiX, FiLoader } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const router = useRouter();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [1, 1, 0]);

  // Changed from 80vh to ~48vh to reduce by 40%
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
      icon: <FiAward className="text-amber-400 w-6 h-6" />
    },
    { 
      name: 'NCA Category NCAA', 
      year: '2022-2025', 
      issuer: 'National Construction Authority',
      description: 'Water Works Contractor certification',
      icon: <FiAward className="text-blue-400 w-6 h-6" />
    },
    { 
      name: 'AGPO Certified', 
      year: '2022-2024', 
      issuer: 'National Treasury',
      description: 'Youth Empowerment Program registration',
      icon: <FiTrendingUp className="text-green-400 w-6 h-6" />
    },
    { 
      name: 'OSH Compliance', 
      year: '2023', 
      issuer: 'DOSH Kenya',
      description: 'Occupational Safety and Health certified workplace',
      icon: <FiShield className="text-red-400 w-6 h-6" />
    },
    { 
      name: 'KRA Tax Compliant', 
      year: '2023', 
      issuer: 'Kenya Revenue Authority',
      description: 'Full tax compliance certification',
      icon: <FiCheckCircle className="text-purple-400 w-6 h-6" />
    },
    { 
      name: 'ISO 9001:2015', 
      year: '2022', 
      issuer: 'National Construction Authority',
      description: 'Quality management system certification',
      icon: <FiCheckCircle className="text-emerald-400 w-6 h-6" />
    },
  ];

  const keyProjects = [
    {
      title: "Uhuru Business Park Market Complex",
      value: "KES 349M",
      year: "2020",
      role: "Subcontractor",
      scope: "Earth works, storm water drainage, concrete works"
    },
    {
      title: "18KM Kapkatunga-Kipyemit Electric Fence",
      value: "KES 14.5M",
      year: "2024",
      role: "Prime Contractor",
      scope: "Construction of electric fence in Kericho County"
    },
    {
      title: "Road Tarmacking Projects",
      value: "Multiple Contracts",
      year: "Ongoing",
      role: "Specialist Contractor",
      scope: "Urban and rural road tarmacking solutions"
    }
  ];

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize GSAP animations
  useEffect(() => {
    // Hero text animation
    gsap.from('.hero-text', {
      opacity: 0,
      y: 40,
      duration: 1.5,
      delay: 0.5,
      stagger: 0.2
    });

    // Stats animation
    gsap.from('.stat-item', {
      opacity: 0,
      scale: 0.8,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      delay: 1.2,
      ease: "back.out(1.7)"
    });

    // Section title animations
    (gsap.utils.toArray('section') as HTMLElement[]).forEach((section) => {
      const heading = section.querySelector('h2');
      const underline = section.querySelector('.section-underline');
      
      if (heading) {
        ScrollTrigger.create({
          trigger: section,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(heading, 
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8 }
            );
          }
        });
      }
      
      if (underline) {
        ScrollTrigger.create({
          trigger: section,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(underline, 
              { width: 0 },
              { width: "120px", duration: 1, ease: "power2.out" }
            );
          }
        });
      }
    });

    // Card animations
    (gsap.utils.toArray('.gsap-card') as HTMLElement[]).forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 90%",
        onEnter: () => {
          gsap.fromTo(card, 
            { opacity: 0, y: 60 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8, 
              delay: index * 0.1,
              ease: "back.out(1.2)" 
            }
          );
        }
      });
    });

    // Timeline animations
    (gsap.utils.toArray('.timeline-item') as HTMLElement[]).forEach((item, index: number) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(item, 
            { opacity: 0, y: 60 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8, 
              delay: index * 0.15,
              ease: "power2.out" 
            }
          );
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (isProfileOpen) {
      document.body.style.overflow = 'hidden';
      setPdfLoading(true);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isProfileOpen]);

  return (
    <div ref={ref} className="overflow-hidden bg-white">
      {/* Enhanced PDF Modal */}
      <AnimatePresence>
        {isProfileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsProfileOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: isMobile ? 100 : 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: isMobile ? 100 : 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className={`bg-white rounded-xl w-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col shadow-2xl ${
                isMobile ? 'rounded-b-none' : ''
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-bold text-gray-900">Company Profile</h3>
                <motion.button 
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsProfileOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <FiX className="w-6 h-6 text-gray-500" />
                </motion.button>
              </div>
              
              {/* PDF Container with improved mobile scrolling */}
              <div className="flex-1 overflow-hidden relative">
                {pdfLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 z-10"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="text-blue-600"
                    >
                      <FiLoader className="w-12 h-12" />
                    </motion.div>
                    <p className="mt-4 text-gray-600">Loading document...</p>
                  </motion.div>
                )}
                
                <div className="w-full h-full overflow-auto touch-pan-y">
                  <iframe 
                    src="/doc/company-profile.pdf" 
                    className={`w-full h-full min-h-[500px] ${pdfLoading ? 'opacity-0' : 'opacity-100'}`}
                    frameBorder="0"
                    onLoad={() => setPdfLoading(false)}
                    style={{ 
                      pointerEvents: pdfLoading ? 'none' : 'auto',
                      WebkitOverflowScrolling: 'touch'
                    }}
                  />
                </div>
                
                
              </div>
              
              <div className="p-4 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-gray-600 text-sm">
                  <p>File size: 2.4MB • Last updated: June 2025</p>
                </div>
                
                <motion.a 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/doc/company-profile.pdf" 
                  download="Cekol-Engineering-Profile.pdf"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <FiDownload className="w-5 h-5" />
                  Download PDF
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className={`relative ${heroHeight} overflow-hidden`}>
        {/* Single background image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/images/${bgImage})`,
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]),
            rotateX,
            opacity
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 pointer-events-none" />
        {/* Slide text and stats */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <AnimatePresence mode="wait">
            {slides.map((slide, index) =>
              activeSlide === index && (
                <div
                  key={index}
                  className="w-full max-w-4xl mx-auto"
                >
                  <h1 className="hero-text text-4xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
                    {slide.text}
                  </h1>
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {slide.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="stat-item px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white shadow-md"
                      >
                        <span className="font-medium">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-700">Cekol Engineering</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established in 2011 and incorporated in 2019, Cekol Engineering Limited has grown into a leading civil engineering and construction firm operating across Africa. Our team of 112+ professionals delivers comprehensive engineering solutions with expertise in both civil and electrical engineering.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in creating sustainable infrastructure that enhances communities while maintaining the highest standards of quality assurance, service delivery, and safety compliance.
              </p>
              <div>
                <motion.button 
                  className="px-8 py-3.5 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsProfileOpen(true)}
                >
                  View Company Profile
                </motion.button>
              </div>
            </div>
            <div className="md:w-1/2 gsap-card">
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Image15.png"
                  alt="Cekol Engineering Team"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Journey Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Corporate Journey
            </h2>
            <div className="section-underline h-1 bg-blue-700 mx-auto mt-6 w-0" />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-blue-700/20 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-0">
              {[
                { 
                  year: '2011', 
                  event: 'Company Foundation', 
                  detail: 'Began operations as a construction business in Nairobi, Kenya',
                  icon: <FiActivity className="w-6 h-6 text-blue-700" />
                },
                { 
                  year: '2019', 
                  event: 'Incorporation', 
                  detail: 'Registered as Cekol Engineering Limited with KES 100M share capital',
                  icon: <FiCheckCircle className="w-6 h-6 text-blue-700" />
                },
                { 
                  year: '2020', 
                  event: 'Major Project Milestone', 
                  detail: 'Subcontracted for KES 120M works on Uhuru Business Park Market Complex',
                  icon: <FiTrendingUp className="w-6 h-6 text-blue-700" />
                },
                { 
                  year: '2022', 
                  event: 'Certification Achievements', 
                  detail: 'Obtained NCA NCAS, NCAA certifications and ISO 9001:2015',
                  icon: <FiAward className="w-6 h-6 text-blue-700" />
                },
                { 
                  year: '2024', 
                  event: 'Kenya Wildlife Service Project', 
                  detail: 'Awarded KES 14.5M contract for 18KM electric fence construction',
                  icon: <FiGlobe className="w-6 h-6 text-blue-700" />
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-blue-700 text-white flex items-center justify-center text-2xl font-bold z-10 shadow-lg">
                    {item.year}
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} p-8 bg-white rounded-2xl shadow-lg gsap-card`}>
                    <div className="flex items-center md:justify-end gap-4 mb-4">
                      {item.icon}
                      <h3 className="text-2xl font-bold text-gray-900">{item.event}</h3>
                    </div>
                    <p className="text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Performance
            </h2>
            <div className="section-underline h-1 bg-emerald-400 mx-auto w-0" />
            <p className="max-w-2xl mx-auto mt-6 text-blue-200">
              Audited financial statements prepared by Matuku & Associates CPA(K)
            </p>
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
              <div
                key={index}
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all gsap-card"
              >
                <div className="text-4xl mb-6 text-emerald-400">{item.icon}</div>
                <div className="text-3xl font-bold mb-2">{item.value}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-emerald-300 mb-4">{item.growth}</p>
                <p className="text-blue-200 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Key Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {keyProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all gsap-card"
                >
                  <div className="text-emerald-400 font-bold text-lg mb-1">{project.value}</div>
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <div className="text-blue-300 text-sm mb-3">{project.year} • {project.role}</div>
                  <p className="text-blue-200 text-sm">{project.scope}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Excellence */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Operational Excellence
            </h2>
            <div className="section-underline h-1 bg-blue-700 mx-auto w-0" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Quality Assurance",
                content: "ISO 9001:2015 certified processes with 3-tier quality checks on all projects",
                icon: <FiCheckCircle className="w-8 h-8 text-blue-700" />
              },
              { 
                title: "Safety Protocol",
                content: "DOSH certified workplace with zero accident record and proactive safety culture",
                icon: <FiShield className="w-8 h-8 text-blue-700" />
              },
              { 
                title: "Technical Expertise",
                content: "112+ professionals including graduate engineers and technical specialists",
                icon: <FiUsers className="w-8 h-8 text-blue-700" />
              },
              { 
                title: "Sustainability",
                content: "Environmental policy aligned with net-zero roadmap and sustainable practices",
                icon: <FiGlobe className="w-8 h-8 text-blue-700" />
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all gsap-card"
              >
                <div className="text-blue-700 mb-4">{item.icon}</div>
                <div className="text-xl font-bold text-gray-900 mb-4">{item.title}</div>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Accreditations</h2>
            <div className="section-underline h-1 bg-blue-700 mx-auto mb-6 w-0" />
            <p className="max-w-2xl mx-auto mt-6 text-gray-600">
              Certified compliance with all regulatory requirements and industry standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 gsap-card"
              >
                <div className="flex items-start mb-4 gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">{cert.name}</div>
                    <div className="text-sm text-gray-500">{cert.issuer}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {cert.description}
                </div>
                <div className="text-xs text-blue-600 font-medium">
                  Valid: {cert.year} • Registration No: CER/{cert.year.slice(2,4)}-{index+1000}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Leadership & Governance
            </h2>
            <div className="section-underline h-1 bg-blue-700 mx-auto w-0" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm gsap-card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Management Structure</h3>
              <div className="space-y-6">
                {[
                  { role: "Executive Director", name: "Christopher Ogola" },
                  { role: "General Manager", name: "Eng. Ogonjo" },
                  { role: "Finance Manager", name: "Chen Jiang Bing" },
                  { role: "Project Manager", name: "Eng. Methu" },
                  { role: "HSE Engineer", name: "Safety Compliance Officer" },
                ].map((person, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                      {person.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{person.role}</div>
                      <div className="text-gray-600">{person.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm gsap-card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Values</h3>
              <div className="space-y-6">
                {[
                  { value: "Quality", description: "Outstanding service through teamwork, experience, and innovation" },
                  { value: "Safety", description: "Proactive safety culture protecting colleagues and the public" },
                  { value: "Innovation", description: "Continual improvement through technology and process optimization" },
                  { value: "Sustainability", description: "Environmental protection through efficient practices" },
                  { value: "Integrity", description: "Ethical business practices and transparency" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{item.value}</div>
                      <div className="text-gray-600">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Kenya&apos;s Leading Engineering Firm
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Contact us today to discuss your next construction or engineering project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="px-8 py-3.5 bg-white text-blue-700 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/contact')}
            >
              Request a Quote
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;