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
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const linkVariants = {
        hover: { 
        scale: 1.05,
        color: "#1d4ed8",
        transition: { type: "spring", stiffness: 300 }
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
        transition: { type: "spring", stiffness: 200 }
        },
        closed: { opacity: 0, y: -20 }
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
            ? 'bg-white shadow-xl' 
            : 'md:bg-transparent md:shadow-none'
        }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transition-colors duration-300"
            >
                <Image 
                    src="/images/logo.png"
                    alt="CEKOL ENGINEERING"
                    width={50}
                    height={48}
                    className="h-12 w-12 mr-2"
                    priority
                />
                
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 items-center">
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
                            ? 'bg-blue-50 text-blue-900' 
                            : `text-${isScrolled ? 'gray-700' : 'white'}`
                        } text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300`}
                    >
                        {item}
                        {isActive && (
                        <motion.div
                            className="absolute inset-0 border-2 border-blue-200 rounded-lg"
                            layoutId="activeTab"
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        />
                        )}
                    </Link>
                    </motion.div>
                )}
                )}
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                    isScrolled 
                    ? 'bg-blue-900 text-white' 
                    : 'md:bg-white md:text-blue-900'
                } px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ml-4`}
                >
                Get Quote
                </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2"
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? (
                <FiX className="w-8 h-8 text-blue-900" />
                ) : (
                <FiMenu className="w-8 h-8 text-blue-900" />
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
                className="md:hidden overflow-hidden"
                >
                <div className="pt-2 pb-4 space-y-2">
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
                            isActive ? 'bg-blue-100 text-blue-900' : 'text-gray-700'
                            } block px-4 py-3 rounded-lg text-lg font-medium mx-2 transition-colors`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                            {isActive && (
                            <motion.div
                                className="absolute left-0 top-1/2 h-3/5 w-1 bg-blue-600 rounded-r-full -translate-y-1/2"
                                layoutId="mobileActiveTab"
                            />
                            )}
                        </Link>
                        </motion.div>
                    )}
                    )}
                    <motion.div
                    variants={mobileLinkVariants}
                    className="px-4 pt-4"
                    >
                    <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-colors">
                        Get Quote
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