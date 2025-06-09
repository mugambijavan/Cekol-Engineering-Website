'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gray-900 text-gray-300 py-6"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-2">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-xs tracking-wide"
        >
          &copy; {new Date().getFullYear()} Cekol Engineering Ltd.
        </motion.p>
        <motion.a
          href="https://bhakitah.co.ke"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.06, color: "#ffd700" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-xs text-[#ffb400] hover:text-[#ffd700] font-medium transition-colors"
        >
          Developed by BhakitahTech
        </motion.a>
      </div>
    </motion.footer>
  );
}