'use client';
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

// Construction color palette
const COLORS = {
  primaryBg: "#0a2240",
  sectionBg: "#f5f6fa",
  dark: "#18181b",
  cta: "#f59e0b",
  accent: "#ffbe3b",
  white: "#fff",
  border: "#e0e3e7",
};

function ContactContent() {
  const searchParams = useSearchParams();
  const isQuoteRequest = searchParams.get('form') === 'quote';

  useEffect(() => {
    if (isQuoteRequest) {
      setTimeout(() => {
        document.getElementById('quote-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }, 300);
    }
  }, [isQuoteRequest]);

  return (
    <div style={{ background: COLORS.sectionBg }}>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] min-h-[400px] w-full"
        style={{
          background: `linear-gradient(90deg, ${COLORS.primaryBg} 80%, ${COLORS.dark} 100%)`
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${COLORS.primaryBg}E6 90%, ${COLORS.dark}CC 100%)`
          }}
        >
          <div className="container mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: COLORS.white }}
            >
              Let&apos;s Build Something Amazing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl"
              style={{ color: COLORS.white + 'E6' }}
            >
              Contact our engineering experts for innovative solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex gap-4"
            >
              <a href="tel:+254725745922">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg font-medium border-2"
                  style={{
                    background: "transparent",
                    borderColor: COLORS.white,
                    color: COLORS.white
                  }}
                >
                  Call Now
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section 
        id="quote-section" 
        className="py-16 px-4"
        style={{
          background: `linear-gradient(90deg, ${COLORS.primaryBg} 80%, ${COLORS.dark} 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.white }}>
              Request a Project Quote
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ background: COLORS.cta }}></div>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: COLORS.white + 'E6' }}>
              Get a customized estimate for your construction project. Our experts will review 
              your requirements and provide a detailed quote within 24 hours.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl shadow-xl p-6 md:p-8"
            style={{ background: COLORS.white }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.primaryBg }}>
                Tell us about your project
              </h3>
              <p style={{ color: COLORS.dark }}>
                Fill out the form below and our team will prepare a customized quote
              </p>
            </div>
            
            <ContactForm isQuote={true} />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primaryBg }}>
              Get in Touch
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ background: COLORS.cta }}></div>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: COLORS.dark }}>
              Have a project in mind? Reach out to our team for a consultation. We respond within 24 hours.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-xl p-8"
              style={{ background: COLORS.white }}
            >
              <h2 className="text-3xl font-bold mb-8" style={{ color: COLORS.primaryBg }}>Our Contact Details</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4" style={{ background: COLORS.primaryBg + "15" }}>
                    <svg className="w-6 h-6" style={{ color: COLORS.primaryBg }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: COLORS.primaryBg }}>Call Us</h3>
                    <p style={{ color: COLORS.dark }}>+254 725 745 922</p>
                    <p style={{ color: COLORS.dark }}>Mon-Fri: 8:00am - 5:00pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4" style={{ background: COLORS.cta + "22" }}>
                    <svg className="w-6 h-6" style={{ color: COLORS.cta }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: COLORS.primaryBg }}>Email Us</h3>
                    <p style={{ color: COLORS.dark }}>info@cekolengineering.co.ke</p>
                    <p style={{ color: COLORS.dark }}>projects@cekolengineering.co.ke</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4" style={{ background: COLORS.accent + "22" }}>
                    <svg className="w-6 h-6" style={{ color: COLORS.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: COLORS.primaryBg }}>Visit Us</h3>
                    <p style={{ color: COLORS.dark }}>
                      Summit House, 4th Floor, Moi Avenue<br/>
                      P.O Box 28460-00200, Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.primaryBg }}>Why Contact Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: COLORS.cta }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: COLORS.dark }}>Free project consultation with our engineers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: COLORS.cta }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: COLORS.dark }}>Customized solutions for your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: COLORS.cta }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: COLORS.dark }}>Quick response within 24 business hours</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-xl p-8"
              style={{ background: COLORS.white }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2" style={{ color: COLORS.primaryBg }}>Send Us a Message</h2>
                <p style={{ color: COLORS.dark }}>Fill out the form and our team will contact you shortly</p>
              </div>
              
              <ContactForm isQuote={false} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-xl overflow-hidden"
            style={{ background: COLORS.white }}
          >
            <div className="p-6 border-b" style={{ borderColor: COLORS.border }}>
              <h2 className="text-2xl font-bold" style={{ color: COLORS.primaryBg }}>Our Headquarters</h2>
              <p style={{ color: COLORS.dark }}>Visit us for a face-to-face consultation</p>
            </div>
            
            {/* Map placeholder */}
            <div
              className="h-96 relative"
              style={{
                background: `linear-gradient(90deg, ${COLORS.primaryBg} 80%, ${COLORS.dark} 100%)`
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                    style={{ background: COLORS.white + "22", backdropFilter: 'blur(4px)' }}>
                    <svg className="w-8 h-8" fill="none" stroke={COLORS.cta} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: COLORS.primaryBg }}>Summit House, 4th Floor</h3>
                  <p style={{ color: COLORS.white }}>{`Moi Avenue, Nairobi, Kenya`}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 text-center">
              <p className="mb-4" style={{ color: COLORS.dark }}>
                Get directions to our office
              </p>
              <a 
                href="https://maps.app.goo.gl/YSwbkwSHwWSG2q1p8" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium hover:underline"
                style={{ color: COLORS.primaryBg }}
              >
                Open in Google Maps
                <svg className="ml-2 w-4 h-4" fill="none" stroke={COLORS.cta} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Main export with Suspense boundary
export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: COLORS.sectionBg }}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto"
            style={{ borderColor: COLORS.primaryBg, borderTopColor: 'transparent' }}></div>
          <p className="mt-4" style={{ color: COLORS.dark }}>Loading contact information...</p>
        </div>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}