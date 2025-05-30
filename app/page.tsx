'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiCheckCircle, FiClock, FiUsers } from 'react-icons/fi';
import { SERVICES, PROJECTS } from './_utils/constants';
import ProjectCard from './components/ProjectsCard';

export default function Home() {
  const slides = [
    { image: '/images/image.png', text: 'Engineering Excellence Since 2011' },
    { image: '/images/image2.png', text: '250+ Successful Projects Delivered' },
    { image: '/images/image3.png', text: '98% Client Satisfaction Rate' },
    { image: '/images/image4.png', text: 'Across 12 African Nations' },
    { image: '/images/image5.png', text: 'ISO 9001:2015 Certified Quality' },
  ];
  
  const projectsRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: projectsRef, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen">
        <AnimatePresence mode='wait'>
          {slides.map((slide, index) => (
            activeSlide === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {/* Background image with overlay */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                </div>
                
                <motion.div 
                  style={{ rotate, scale: 1 }}
                  className="absolute inset-0"
                >
                  <div className="container h-full flex items-center justify-center text-center">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-white"
                    >
                      <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        {slide.text}
                      </h1>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="h-1 bg-white origin-left"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full ${
                activeSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-32 -top-32 w-96 h-96 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-full blur-2xl" />
          <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-gradient-to-r from-amber-400/30 to-rose-400/30 rounded-full blur-2xl" />
        </div>

        <div className="container relative grid md:grid-cols-3 gap-8 text-center mx-auto">
          {[
            { icon: <FiCheckCircle />, value: '250+', label: 'Projects Completed' },
            { icon: <FiClock />, value: '12+', label: 'Years Experience' },
            { icon: <FiUsers />, value: '112+', label: 'Skilled Professionals' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex justify-center text-4xl mb-6">
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                >
                  {stat.icon}
                </motion.div>
              </div>
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-widest text-slate-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="relative py-28 bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="container relative mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center mb-20 font-serif bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent"
          >
            Our Core Services
          </motion.h2>
          
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
                <div className="h-full bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-slate-100 hover:border-blue-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                      <span className="text-2xl text-blue-600">0{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="relative py-28 bg-slate-900 overflow-hidden">
        <motion.div 
          style={{ rotate }}
          className="absolute -right-48 -top-48 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full"
        />
        <motion.div 
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [15, 0]) }}
          className="absolute -left-48 -bottom-48 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-rose-400/20 rounded-full"
        />

        <div className="container relative mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-20 font-serif text-white"
          >
            Recent Success Stories
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                value={project.value}
                location={project.location}
                description={project.description}
              />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link href="/projects">
              <button 
                className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-xl hover:scale-105 transition-transform font-medium text-lg shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">View All Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}