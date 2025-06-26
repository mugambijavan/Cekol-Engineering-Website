'use client';
import { motion } from 'framer-motion';

// Construction color palette
const COLORS = {
  primaryBg: "#0a2240",
  cta: "#f59e0b",
  accent: "#ffbe3b",
  white: "#fff",
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-6"
      style={{
        background: `linear-gradient(90deg, ${COLORS.primaryBg} 80%, #18181b 100%)`,
        color: COLORS.white
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-2">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-xs tracking-wide"
          style={{ color: COLORS.white }}
        >
          &copy; {new Date().getFullYear()} Cekol Engineering Ltd.
        </motion.p>
        <motion.a
          href="https://bhakitah.co.ke"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.06, color: COLORS.accent }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-xs font-medium transition-colors"
          style={{
            color: COLORS.cta
          }}
        >
          Developed by BhakitahTech
        </motion.a>
      </div>
    </motion.footer>
  );
}