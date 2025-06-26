'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

// Construction color palette
const COLORS = {
  primaryBg: "#0a2240",
  dark: "#18181b",
  cta: "#f59e0b",
  accent: "#ffbe3b",
  white: "#fff",
  border: "#e0e3e7",
};

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = () => {
    if (pathname === '/contact') {
      document.getElementById('quote-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else {
      router.push('/contact?form=quote');
    }
    setIsOpen(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      color: COLORS.cta,
      transition: { 
        type: "spring", 
        stiffness: 300,
        duration: 0.3
      }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      } 
    }
  };

  const mobileLinkVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 200,
        damping: 15
      }
    },
    closed: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const getLinkPath = (item: string) => 
    item === 'Home' ? '/' : `/${item.toLowerCase()}`;

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
        ? '' 
        : 'md:bg-transparent md:shadow-none'
      }`}
      style={{
        background: isScrolled ? COLORS.primaryBg : 'transparent',
        boxShadow: isScrolled ? "0 4px 32px 0 rgba(10,34,64,0.12)" : undefined
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <div className="p-1 rounded-lg mr-3 bg-white">
              <Image 
                src="/images/logo.png"
                alt="CEKOL ENGINEERING"
                width={50}
                height={50}
                className="h-10 w-10"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl" style={{ color: COLORS.cta }}>CEKOL</h1>
              <p className="text-xs font-semibold tracking-wider" style={{ color: COLORS.cta}}>ENGINEERING</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => {
              const href = getLinkPath(item);
              const isActive = pathname === href;
              return (
                <motion.div
                  key={item}
                  whileHover="hover"
                  whileTap="tap"
                  variants={linkVariants}
                  className="relative"
                >
                  <Link 
                    href={href}
                    className={`${
                      isActive 
                        ? 'font-bold'
                        : 'font-bold'
                    } text-lg px-3 py-2 transition-colors duration-300`}
                    style={{
                      color: isActive
                        ? COLORS.cta
                        : isScrolled
                          ? COLORS.white
                          : COLORS.white
                    }}
                  >
                    {item}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-1 rounded-full"
                        style={{ background: COLORS.accent }}
                        layoutId="activeTab"
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
            <motion.button
              onClick={handleQuoteClick}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: COLORS.accent,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 ml-4"
              style={{
                background: COLORS.cta,
                color: COLORS.primaryBg,
                border: "none"
              }}
            >
              GET QUOTE
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <FiX className="w-8 h-8" style={{ color: COLORS.cta }} />
            ) : (
              <FiMenu className="w-8 h-8" style={{ color: COLORS.cta }} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden rounded-lg shadow-xl border"
              style={{
                background: COLORS.primaryBg,
                borderColor: COLORS.border
              }}
            >
              <div className="pt-2 pb-4 space-y-1">
                {navItems.map((item) => {
                  const href = getLinkPath(item);
                  const isActive = pathname === href;
                  return (
                    <motion.div
                      key={item}
                      variants={mobileLinkVariants}
                    >
                      <Link 
                        href={href}
                        className={`block px-6 py-4 text-lg font-bold mx-2 transition-colors rounded-lg`}
                        style={{
                          background: isActive ? COLORS.cta + "20" : "transparent",
                          color: isActive ? COLORS.cta : COLORS.white
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center">
                          {item}
                          {isActive && (
                            <motion.div
                              className="ml-2 w-2 h-2 rounded-full"
                              style={{ background: COLORS.cta }}
                              layoutId="mobileActiveTab"
                            />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  variants={mobileLinkVariants}
                  className="px-4 pt-2"
                >
                  <button 
                    onClick={handleQuoteClick}
                    className="w-full px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-colors"
                    style={{
                      background: COLORS.cta,
                      color: COLORS.primaryBg
                    }}
                  >
                    GET QUOTE
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}