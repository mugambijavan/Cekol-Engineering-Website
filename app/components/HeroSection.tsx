import { motion } from 'framer-motion';

// Construction color palette
const COLORS = {
  primaryBg: "#0a2240",
  dark: "#18181b",
  cta: "#f59e0b",
  accent: "#ffbe3b",
  white: "#fff",
  border: "#e0e3e7",
};

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  bgImage?: string;
  variant?: 'services' | 'projects';
};

export default function HeroSection({ 
  title, 
  subtitle,
  bgImage,
  variant = 'services'
}: HeroSectionProps) {
  // Variant-specific configurations
  const variantConfig = {
    services: {
      height: "h-[40vh] min-h-[300px] md:h-[50vh]",
      textAlign: "text-left",
      contentWidth: "max-w-4xl",
      defaultImage: "/images/Image12.png"
    },
    projects: {
      height: "h-[45vh] min-h-[350px] md:h-[55vh]",
      textAlign: "text-center",
      contentWidth: "max-w-5xl",
      defaultImage: "/images/Image13.png"
    }
  };

  const config = variantConfig[variant];
  const backgroundImage = bgImage || config.defaultImage;

  return (
    <section 
      className={`relative ${config.height} w-full overflow-hidden`}
      style={{
        backgroundImage: `linear-gradient(${COLORS.primaryBg}CC,${COLORS.primaryBg}CC), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Decorative Elements */}
      {variant === 'services' && (
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full"
               style={{ background: `linear-gradient(to left, ${COLORS.primaryBg}44 80%, transparent)` }}></div>
          <div className="absolute bottom-0 left-0 w-full h-32"
               style={{ background: `linear-gradient(to top, ${COLORS.dark}B3 90%, transparent)` }}></div>
        </div>
      )}
      
      {variant === 'projects' && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-24"
               style={{ background: `linear-gradient(to bottom, ${COLORS.dark}B3 90%, transparent)` }}></div>
          <div className="absolute bottom-0 left-0 w-full h-32"
               style={{ background: `linear-gradient(to top, ${COLORS.dark}B3 90%, transparent)` }}></div>
        </div>
      )}
      
      {/* Content */}
      <div className="container mx-auto h-full flex items-center px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`${config.contentWidth} ${config.textAlign}`}
        >
          <motion.h1
            initial={{ opacity: 0, x: variant === 'services' ? -20 : 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: COLORS.white }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-xl mb-6 max-w-3xl ${variant === 'projects' ? 'mx-auto' : ''}`}
              style={{ color: COLORS.white + "E6" }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
      
      {/* Decorative Bottom Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[40px]"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            style={{ fill: COLORS.dark }}
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            style={{ fill: COLORS.primaryBg }}
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            style={{ fill: COLORS.cta }}
          ></path>
        </svg>
      </div>
    </section>
  );
}