    'use client';
    import Link from 'next/link';
    import Image from 'next/image';
    import { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { usePathname } from 'next/navigation';
    import { FiMenu, FiX } from 'react-icons/fi';

    export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
        const offset = window.scrollY;
        setIsScrolled(offset > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        color: "#f59e0b",
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
            ? 'bg-gray-900 shadow-xl' 
            : 'md:bg-transparent md:shadow-none'
        }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
            >
                <div className="bg-amber-500 p-1 rounded-lg mr-3">
                <Image 
                    src="/images/construction-logo.png"
                    alt="BUILDMASTER CONSTRUCTIONS"
                    width={50}
                    height={50}
                    className="h-10 w-10"
                    priority
                />
                </div>
                <div className="hidden sm:block">
                <h1 className="font-bold text-xl text-white">BUILDMASTER</h1>
                <p className="text-amber-400 text-xs font-semibold tracking-wider">CONSTRUCTIONS</p>
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
                            ? 'text-amber-400' 
                            : `text-${isScrolled ? 'gray-300' : 'white'}`
                        } text-lg font-bold px-3 py-2 transition-colors duration-300`}
                    >
                        {item}
                        {isActive && (
                        <motion.div
                            className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 rounded-full"
                            layoutId="activeTab"
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        />
                        )}
                    </Link>
                    </motion.div>
                )}
                )}
                <motion.button
                whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#f59e0b",
                    transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`${
                    isScrolled 
                    ? 'bg-amber-500 text-gray-900' 
                    : 'md:bg-amber-500 md:text-gray-900'
                } px-6 py-2.5 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 ml-4`}
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
                <FiX className="w-8 h-8 text-amber-500" />
                ) : (
                <FiMenu className="w-8 h-8 text-amber-500" />
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
                className="md:hidden overflow-hidden bg-gray-800 rounded-lg shadow-xl border border-gray-700"
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
                            className={`${
                            isActive ? 'bg-amber-900 text-amber-400' : 'text-gray-300'
                            } block px-6 py-4 text-lg font-bold mx-2 transition-colors rounded-lg`}
                            onClick={() => setIsOpen(false)}
                        >
                            <div className="flex items-center">
                            {item}
                            {isActive && (
                                <motion.div
                                className="ml-2 w-2 h-2 bg-amber-500 rounded-full"
                                layoutId="mobileActiveTab"
                                />
                            )}
                            </div>
                        </Link>
                        </motion.div>
                    )}
                    )}
                    <motion.div
                    variants={mobileLinkVariants}
                    className="px-4 pt-2"
                    >
                    <button 
                        className="w-full bg-amber-500 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-amber-600 transition-colors"
                        onClick={() => setIsOpen(false)}
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