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

export default function Home() {
  const heroSlides = [
    { 
      image: '/images/Image11.png', 
      title: 'Engineering Excellence Since 2011',
      subtitle: 'Delivering innovative construction solutions across Africa'
    },
    { 
      image: '/images/Image13.png', 
      title: '250+ Successful Projects Delivered',
      subtitle: 'From commercial buildings to infrastructure development'
    },
    { 
      image: '/images/Image17.png', 
      title: 'NCA5 Certified Contractor',
      subtitle: 'Highest category certification for building works'
    },
  ];
  
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
  
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: projectsRef, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const [activeSlide, setActiveSlide] = useState(0);

  // For project slideshow
  const [projectSlide, setProjectSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Project slideshow auto
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectSlide(prev => (prev + 1) % projectImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [projectImages.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen">
        <AnimatePresence mode='wait'>
          {heroSlides.map((slide, index) => (
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
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                </div>
                
                <motion.div 
                  style={{ rotate, scale: 1 }}
                  className="absolute inset-0"
                >
                  <div className="container h-full flex items-center justify-center text-center px-4">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-white max-w-4xl"
                    >
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-gray-300">{slide.subtitle}</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
                          >
                            Get a Quote
                          </motion.button>
                        </Link>
                        <Link href="/about">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white hover:text-gray-900 transition-colors"
                          >
                            Learn More
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
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
        className="relative py-20 bg-gradient-to-br from-gray-900 to-amber-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-32 -top-32 w-96 h-96 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-full blur-2xl" />
          <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-gradient-to-r from-gray-400/30 to-blue-400/30 rounded-full blur-2xl" />
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
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex justify-center text-3xl mb-4 text-amber-400">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-widest text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <section ref={aboutRef} className="relative py-20 bg-white">
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
                <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                About <span className="text-amber-600">CEKOL Engineering</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2011 and incorporated in 2019, CEKOL Engineering Limited is a leading civil engineering and construction company operating across Africa. We specialize in delivering high-quality, innovative, and sustainable infrastructure solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-amber-600">
                    <FiAward size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">NCA5 Certified</h4>
                    <p className="text-gray-600">Highest category certification for building works from the National Construction Authority</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-amber-600">
                    <FiShield size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Safety First</h4>
                    <p className="text-gray-600">DOSH certified with comprehensive workplace safety policies and procedures</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-amber-600">
                    <FiTrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sustainable Growth</h4>
                    <p className="text-gray-600">Committed to environmental sustainability and continuous improvement</p>
                  </div>
                </div>
              </div>
              
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Read Our Full Story
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-amber-600">Comprehensive</span> Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                <div className="h-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-amber-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mr-4 group-hover:bg-amber-200 transition-colors">
                      <span className="text-xl text-amber-600 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why <span className="text-amber-400">Choose CEKOL</span> Engineering?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
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
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="text-amber-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects with Slideshow */}
      <section ref={projectsRef} className="relative py-20 bg-white overflow-hidden">
        <motion.div 
          style={{ rotate }}
          className="absolute -right-48 -top-48 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full"
        />

        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-amber-600">Featured</span> Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-lg transition-colors"
              >
                View All Projects
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Our <span className="text-amber-600">Clients</span> Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                className="bg-white rounded-xl p-8 shadow-md"
              >
                <div className="text-amber-500 text-4xl mb-4">&quot;</div>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <p className="text-amber-600 text-sm mt-1">{testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-amber-900 text-white">
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
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Get a Free Quote
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white hover:text-gray-900 transition-colors"
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