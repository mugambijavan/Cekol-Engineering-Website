import Image from 'next/image';
import { motion } from 'framer-motion';

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  bgImage?: string;
  variant?: 'services' | 'projects';
};

export default function HeroSection({ 
  title, 
  subtitle,
  bgImage = "/images/image12.png",
  variant = 'services'
}: HeroSectionProps) {
  // Variant-specific configurations
  const variantConfig = {
    services: {
      gradient: "bg-gradient-to-r from-blue-900/90 to-emerald-800/80",
      height: "h-[30vh] min-h-[180px]",
      textAlign: "text-left",
      buttonColor: "bg-white text-blue-900"
    },
    projects: {
      gradient: "bg-gradient-to-b from-blue-900/90 to-blue-700/80",
      height: "h-[35vh] min-h-[200px]",
      textAlign: "text-center",
      buttonColor: "bg-emerald-500 text-white"
    }
  };

  const config = variantConfig[variant];

  return (
    <section className={`relative ${config.height} w-full`}>
      {bgImage && (
        <Image
          src={bgImage}
          alt={variant === 'services' ? "Engineering Services" : "Completed Projects"}
          fill
          className="object-cover"
          priority
        />
      )}
      
      <div className={`absolute inset-0 ${config.gradient}`}>
        <div className="container mx-auto h-full flex items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`max-w-3xl ${config.textAlign}`}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-lg text-white/90 mb-4 max-w-2xl">
                {subtitle}
              </p>
            )}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}