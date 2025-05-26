'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer 
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      variants={variants}
      className="bg-gray-900 text-gray-300 py-8 border-t-4 border-[#ffb400]"
    >
      <div className="max-w-7xl mx-auto px-4">

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-6 border-t border-gray-700 text-center"
        >
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Cekol Engineering Ltd. All rights reserved.
          </p>
          <motion.p 
            whileHover={{ scale: 1.05 }}
            className="text-xs text-gray-500 mt-2"
          >
            Developed by {' '}
            <a 
              href="https://bhakitah.co.ke" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#ffb400] hover:text-[#ffd700] font-medium transition-colors duration-300"
            >
              BhakitahTech
            </a>
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}