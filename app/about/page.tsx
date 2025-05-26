'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiUsers, FiCheckCircle,  FiDollarSign, FiActivity } from 'react-icons/fi';

const AboutPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [activeSlide, setActiveSlide] = useState(0);

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const heroHeight = 'h-[80vh]';

  const slides = [
    { 
      text: 'Infrastructure Innovators Since 2011',
      stats: ['250+ Projects', '12 Countries', '98% Success Rate']
    },
    { 
      text: 'NCA Category NCAS Certified Engineering',
      stats: ['KES 727M Turnover', 'NCAS Grade', 'ISO 9001:2015']
    },
    { 
      text: 'Pan-African Engineering Solutions',
      stats: ['112+ Professionals', '18KM Fence Projects', '349M Complex']
    },
  ];


  const certifications = [
    { name: 'ISO 9001:2015', year: '2022', issuer: 'National Construction Authority' },
    { name: 'NCA Category NCAS', year: '2022', issuer: 'NCA Kenya' },
    { name: 'AGPO Certified', year: '2022', issuer: 'National Treasury' },
    { name: 'OSH Compliant', year: '2023', issuer: 'DOSH Kenya' },
    { name: 'KRA Tax Compliant', year: '2023', issuer: 'Kenya Revenue Authority' },
    { name: 'NCA Category NCAA', year: '2022', issuer: 'NCA Kenya' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="overflow-hidden">
      {/* Enhanced Hero Section with Parallax */}
      <section className={`relative ${heroHeight} overflow-hidden`}>
        <motion.div 
          className="absolute inset-0 bg-[url('/images/construction-site.jpg')] bg-cover bg-center"
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
            rotateX,
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md">
            <div className="container h-full flex flex-col items-center justify-center text-center">
              <AnimatePresence mode='wait'>
                {slides.map((slide, index) => (
                  activeSlide === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      className="text-white max-w-4xl mx-auto"
                    >
                      <motion.h1 
                        className="text-5xl md:text-6xl font-bold mb-6"
                        initial={{ letterSpacing: '0em' }}
                        animate={{ letterSpacing: '0.02em' }}
                        transition={{ duration: 1 }}
                      >
                        {slide.text}
                      </motion.h1>
                      
                      <motion.div className="flex justify-center space-x-6">
                        {slide.stats.map((stat, idx) => (
                          <motion.div
                            key={idx}
                            className="px-4 py-2 bg-white/10 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            {stat}
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Strategic Milestones */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Corporate Journey
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              className="h-1 bg-blue-900 mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: '2011', event: 'Company Foundation', detail: 'Began operations in Nairobi' },
              { year: '2019', event: 'Incorporation', detail: 'Registered as Ltd company' },
              { year: '2022', event: 'AGPO Certification', detail: 'Youth Empowerment Partner' },
              { year: '2023', event: 'Pan-African Expansion', detail: '12 Countries Served' },
              { year: '2024', event: 'KWS Project', detail: '18KM Electric Fence' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-blue-900 text-3xl font-bold mb-2">{item.year}</div>
                <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                <p className="text-gray-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Ecosystem */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Financial Ecosystem
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '200px' }}
              className="h-1 bg-emerald-400 mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FiDollarSign />,
                title: "2022 Turnover",
                value: "KES 727M",
                growth: "+27% from 2021"
              },
              { 
                icon: <FiActivity />,
                title: "Total Assets",
                value: "KES 161M",
                growth: "24% Increase"
              },
              { 
                icon: <FiUsers />,
                title: "Human Capital",
                value: "112+ Experts",
                growth: "35% Graduate Engineers"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl mb-6 text-emerald-400">{item.icon}</div>
                <div className="text-3xl font-bold mb-2">{item.value}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-emerald-200">{item.growth}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Excellence */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Operational Framework
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '150px' }}
              className="h-1 bg-blue-900 mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Quality Assurance",
                content: "ISO 9001:2015 certified processes with 3-tier quality checks"
              },
              { 
                title: "Safety Protocol",
                content: "DOSH certified workplace with zero accident record"
              },
              { 
                title: "Tech Integration",
                content: "Advanced BIM modeling and GIS mapping solutions"
              },
              { 
                title: "Sustainability",
                content: "Net-zero roadmap with 30% emission reduction target"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-slate-50 rounded-2xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-blue-900 text-2xl font-bold mb-4">{item.title}</div>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Certifications Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-8">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Accreditation Portfolio
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FiCheckCircle className="text-blue-900 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-900">{cert.name}</div>
                    <div className="text-sm text-gray-500">{cert.issuer}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Valid through {parseInt(cert.year)+2} • Registration No: CER/{cert.year.slice(2)}-{index+1000}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;