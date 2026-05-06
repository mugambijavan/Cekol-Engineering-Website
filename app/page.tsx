'use client';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { useEffect, useRef, useState, memo } from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import {
  FiCheckCircle, FiClock, FiUsers, FiAward, FiMapPin,
  FiShield, FiTrendingUp, FiDollarSign, FiHome, FiTool,
  FiSettings, FiLayers, FiZap, FiTarget, FiStar,
  FiPhone, FiMail, FiArrowRight, FiChevronRight, FiPlay
} from 'react-icons/fi';

/* ─── Design Tokens ──────────────────────────────────── */
const T = {
  navy:    '#0B1F3A',
  navyMid: '#152E50',
  navyLt:  '#1E3D6E',
  gold:    '#C8882A',
  goldLt:  '#E8A94A',
  goldPl:  '#F5C878',
  steel:   '#2D3748',
  slate:   '#718096',
  light:   '#F7F8FA',
  white:   '#FFFFFF',
  success: '#22C55E',
};

/* ─── Fade-in wrapper ────────────────────────────────── */
const FadeIn = memo(({ children, delay = 0, direction = 'up', className = '' }: { children: ReactNode; delay?: number; direction?: 'up' | 'down' | 'left' | 'right'; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const dirs = { up: [30, 0], down: [-30, 0], left: [0, 30], right: [0, -30] };
  const [dy, dx] = dirs[direction] || dirs.up;
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: dy, x: dx }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
});
FadeIn.displayName = 'FadeIn';

/* ─── Section Label ─────────────────────────────────── */
const Label = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase"
    style={{ color: T.gold }}>
    <span className="w-6 h-px" style={{ background: T.gold }} />
    {children}
  </span>
);

/* ─── Gold Heading ──────────────────────────────────── */
const GoldWord = ({ children }: { children: ReactNode }) => (
  <span style={{
    background: `linear-gradient(120deg, ${T.gold}, ${T.goldPl})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }}>
    {children}
  </span>
);

/* ─── SERVICES DATA ─────────────────────────────────── */
const SERVICES = [
  { icon: FiHome,     title: 'Building Construction', desc: 'Residential and commercial complexes built with precision — from foundations to finishing.', features: ['Residential Buildings', 'Commercial Complexes', 'Institutional Structures'] },
  { icon: FiTool,     title: 'Civil Engineering',     desc: 'Roads, bridges, and critical infrastructure across East Africa and beyond.', features: ['Road Construction', 'Bridge Development', 'Infrastructure Planning'] },
  { icon: FiSettings, title: 'Project Management',    desc: 'End-to-end delivery management with transparent reporting and zero surprises.', features: ['Timeline Management', 'Quality Assurance', 'Cost Optimization'] },
  { icon: FiLayers,   title: 'Structural Engineering', desc: 'Expert design and analysis ensuring every structure is safe, durable, and codes-compliant.', features: ['Structural Design', 'Safety Analysis', 'Load Calculations'] },
  { icon: FiZap,      title: 'Electrical & Plumbing',  desc: 'Full MEP installation and maintenance for residential and commercial properties.', features: ['Electrical Installation', 'Plumbing Systems', 'Maintenance Services'] },
  { icon: FiTarget,   title: 'Consulting Services',    desc: 'Technical advisory and feasibility studies that inform smart construction decisions.', features: ['Feasibility Studies', 'Technical Advisory', 'Construction Planning'] },
];

/* ─── TESTIMONIALS ─────────────────────────────────── */
const TESTIMONIALS = [
  { quote: 'CEKOL transformed our vision into a landmark. Their market complex project came in on time, on budget — and beyond expectation.', author: 'Bashir Mohamed Mohamud', role: 'Director, Infinity Development Ltd', project: 'Uhuru Business Park', initials: 'BM' },
  { quote: 'Outstanding professionalism on the electric fence project. Their safety protocols and technical depth make them our go-to contractor.', author: 'Dr. Erustus Kanga', role: 'Director General, Kenya Wildlife Service', project: 'Kapkatunga-Kipyemit Fence', initials: 'EK' },
  { quote: 'Consistent quality across multiple road contracts. CEKOL is the benchmark for infrastructure delivery in this region.', author: 'Eng. George Omondi', role: 'Project Manager, Ministry of Transport', project: 'Regional Road Projects', initials: 'GO' },
];

/* ─── HERO SLIDES ───────────────────────────────────── */
const SLIDES = [
  { image: '/images/Image11.png', eyebrow: 'NCA5 Certified Excellence', title: ['Engineering', 'Excellence'], subtitle: 'Delivering world-class construction solutions across Africa since 2011.' },
  { image: '/images/Image13.png', eyebrow: '250+ Projects Delivered', title: ['Built to', 'Last'],         subtitle: 'From towering commercial buildings to critical pan-African infrastructure.' },
  { image: '/images/Image17.png', eyebrow: 'Certified · Insured · Trusted', title: ['Africa\'s', 'Premier Contractor'], subtitle: 'The highest NCA category certification — your guarantee of uncompromising quality.' },
];

const PROJECT_IMAGES = [
  '/images/Image10.png', '/images/Image11.png', '/images/Image12.png',
  '/images/Image13.png', '/images/Image14.png', '/images/Image15.png',
  '/images/Image16.png', '/images/Image17.png', '/images/Image18.png', '/images/Image19.png',
];

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════ */
export default function ConstructionHomepage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [projectSlide, setProjectSlide] = useState(0);
  const projectsRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: projectsRef, offset: ['start end', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  /* Auto-advance slides */
  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setProjectSlide(p => (p + 1) % PROJECT_IMAGES.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif", background: T.white }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .serif { font-family: 'DM Serif Display', serif; }
        .btn-gold {
          background: linear-gradient(135deg, ${T.gold}, ${T.goldLt});
          color: ${T.white};
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }
        .btn-gold:hover { filter: brightness(1.08); transform: translateY(-2px); box-shadow: 0 8px 30px ${T.gold}50; }
        .btn-ghost {
          background: transparent;
          color: ${T.white};
          border: 1.5px solid rgba(255,255,255,0.35);
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }
        .card-service {
          background: ${T.white};
          border: 1px solid #E8ECEF;
          border-radius: 16px;
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .card-service:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(11,31,58,0.1);
          border-color: ${T.gold}60;
        }
        .card-service:hover .svc-icon { background: linear-gradient(135deg, ${T.gold}, ${T.goldLt}); color: ${T.white}; }
        .svc-icon {
          width: 56px; height: 56px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: ${T.light};
          color: ${T.gold};
          transition: background 0.3s ease, color 0.3s ease;
          margin-bottom: 1.25rem;
        }
        .stat-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .stat-card:hover { background: rgba(255,255,255,0.12); transform: translateY(-4px); }
        .testimonial-card {
          background: ${T.white};
          border: 1px solid #E8ECEF;
          border-radius: 16px;
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .testimonial-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(11,31,58,0.08); }
        .dot-nav button {
          width: 8px; height: 8px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.3);
          padding: 0;
        }
        .dot-nav button.active { background: ${T.gold}; transform: scale(1.4); }
        .why-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .why-card:hover { background: rgba(255,255,255,0.08); border-color: ${T.gold}50; transform: translateY(-4px); }
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #D4DBE5, transparent);
          margin: 0;
        }
        @media (max-width: 768px) {
          .hero-title { font-size: clamp(2.5rem, 10vw, 4rem) !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: '100svh', minHeight: 600, overflow: 'hidden' }}>

        {/* Slide Images */}
        <AnimatePresence initial={false} mode="wait">
          {SLIDES.map((slide, i) => i === activeSlide && (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <motion.div
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: 'easeOut' }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <Image src={slide.image} alt="" fill className="object-cover" priority={i === 0} />
              </motion.div>
              {/* Layered overlays for depth */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11,31,58,0.88) 0%, rgba(11,31,58,0.6) 60%, rgba(11,31,58,0.45) 100%)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)' }} />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Decorative geometric line */}
        <div style={{
          position: 'absolute', top: 0, right: '15%', width: 1, height: '100%',
          background: `linear-gradient(to bottom, transparent, ${T.gold}40, transparent)`,
          zIndex: 2,
        }} className="hide-mobile" />

        {/* Hero Content */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 5,
          display: 'flex', alignItems: 'center',
          padding: '0 max(2rem, 5vw)',
        }}>
          <AnimatePresence mode="wait">
            {SLIDES.map((slide, i) => i === activeSlide && (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ maxWidth: 720 }}
              >
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem' }}
                >
                  <div style={{ width: 32, height: 1.5, background: T.gold }} />
                  <span style={{ color: T.goldLt, fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    {slide.eyebrow}
                  </span>
                </motion.div>

                {/* Title */}
                <h1 className="hero-title" style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                  fontWeight: 400,
                  color: T.white,
                  lineHeight: 1.06,
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.01em',
                }}>
                  {slide.title[0]}<br />
                  <span style={{ background: `linear-gradient(120deg, ${T.gold}, ${T.goldPl})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {slide.title[1]}
                  </span>
                </h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 540, fontWeight: 300 }}
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
                >
                  <button className="btn-gold" style={{
                    padding: '0.875rem 2rem', borderRadius: 10, fontSize: '0.95rem', fontWeight: 600,
                    display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'inherit',
                  }}>
                    Get Free Quote <FiArrowRight size={16} />
                  </button>
                  <button className="btn-ghost" style={{
                    padding: '0.875rem 2rem', borderRadius: 10, fontSize: '0.95rem', fontWeight: 500,
                    display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'inherit',
                  }}>
                    <FiPlay size={14} /> View Projects
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Slide Dots */}
        <div className="dot-nav" style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          zIndex: 10, display: 'flex', gap: '0.5rem', alignItems: 'center',
        }}>
          {SLIDES.map((_, i) => (
            <button key={i} className={i === activeSlide ? 'active' : ''} onClick={() => setActiveSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: '2.5rem', right: '3rem', zIndex: 10,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
          className="hide-mobile"
        >
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.35))' }} />
          <span>Scroll</span>
        </motion.div>
      </section>

      {/* ══ STATS BAR ══════════════════════════════════════ */}
      <section style={{ background: T.navy, padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid-4" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}>
            {[
              { icon: FiCheckCircle, value: '250+', label: 'Projects Completed', color: T.success },
              { icon: FiClock,       value: '15+',  label: 'Years Experience',   color: T.gold },
              { icon: FiUsers,       value: '50+',  label: 'Expert Engineers',   color: T.goldLt },
              { icon: FiMapPin,      value: '12+',  label: 'African Countries',  color: T.success },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="stat-card">
                  <s.icon size={28} style={{ color: s.color, marginBottom: '1rem' }} />
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: T.white, fontFamily: 'DM Serif Display, serif', lineHeight: 1, marginBottom: '0.5rem' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══════════════════════════════════════════ */}
      <section id="about" style={{ background: T.light, padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

            {/* Image side */}
            <FadeIn direction="left">
              <div style={{ position: 'relative' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3' }}>
                  <Image src="/images/Image11.png" alt="CEKOL Engineering" fill className="object-cover" />
                  {/* Overlay frame accent */}
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${T.navy}60, transparent 60%)` }} />
                </div>
                {/* Floating badge */}
                <div style={{
                  position: 'absolute', bottom: '-2rem', right: '-1.5rem',
                  background: `linear-gradient(135deg, ${T.gold}, ${T.goldLt})`,
                  borderRadius: 16, padding: '1.25rem 1.5rem', textAlign: 'center',
                  boxShadow: `0 16px 40px ${T.gold}40`,
                  minWidth: 130,
                }}>
                  <FiAward size={24} color={T.white} style={{ marginBottom: '0.5rem' }} />
                  <div style={{ color: T.white, fontWeight: 700, fontSize: '1.75rem', lineHeight: 1, fontFamily: 'DM Serif Display, serif' }}>15+</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4 }}>Years Excellence</div>
                </div>
                {/* Corner accent line */}
                <div style={{
                  position: 'absolute', top: -12, left: -12, width: 80, height: 80,
                  border: `2px solid ${T.gold}`,
                  borderRight: 'none', borderBottom: 'none',
                  borderRadius: '12px 0 0 0',
                }} />
              </div>
            </FadeIn>

            {/* Text side */}
            <FadeIn direction="right">
              <div>
                <Label>About CEKOL</Label>
                <h2 className="serif" style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: T.navy,
                  lineHeight: 1.15, margin: '1rem 0 1.5rem', letterSpacing: '-0.01em',
                }}>
                  Building Africa's <GoldWord>Future</GoldWord>,<br />One Structure at a Time
                </h2>
                <p style={{ color: T.slate, fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 300 }}>
                  Founded in 2011 and incorporated in 2019, CEKOL Engineering Limited stands as East Africa's
                  most trusted civil engineering and construction partner. We don't just erect structures —
                  we craft legacies engineered to outlast generations.
                </p>

                {/* Pillars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                  {[
                    { icon: FiAward,    title: 'NCA5 Certified Excellence', desc: 'The highest contractor category — your assurance of uncompromising standards.' },
                    { icon: FiShield,   title: 'Safety-First Culture',      desc: 'DOSH certified. Zero-incident protocols enforced on every single site.' },
                    { icon: FiTrendingUp, title: 'Sustainable Innovation',  desc: 'Eco-conscious methods and future-ready solutions for lasting impact.' },
                  ].map((p, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                        background: `${T.gold}18`, color: T.gold,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <p.icon size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, color: T.navy, marginBottom: '0.2rem', fontSize: '0.95rem' }}>{p.title}</div>
                        <div style={{ color: T.slate, fontSize: '0.875rem', lineHeight: 1.6 }}>{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="btn-gold" style={{
                  padding: '0.875rem 2rem', borderRadius: 10, fontSize: '0.95rem',
                  fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'inherit',
                }}>
                  Our Story <FiArrowRight size={16} />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══ SERVICES ═══════════════════════════════════════ */}
      <section id="services" style={{ background: T.white, padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <Label>Our Services</Label>
              <h2 className="serif" style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: T.navy,
                margin: '1rem 0 1rem', lineHeight: 1.2,
              }}>
                Complete <GoldWord>Construction</GoldWord> Solutions
              </h2>
              <p style={{ color: T.slate, fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}>
                From concept to handover — every discipline, one team.
              </p>
            </div>
          </FadeIn>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {SERVICES.map((svc, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="card-service">
                  <div className="svc-icon">
                    <svc.icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.navy, marginBottom: '0.625rem' }}>{svc.title}</h3>
                  <p style={{ color: T.slate, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', fontWeight: 300 }}>{svc.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {svc.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: T.slate }}>
                        <FiCheckCircle size={14} style={{ color: T.success, flexShrink: 0 }} /> {f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: T.gold, fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
                    Learn more <FiChevronRight size={14} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══════════════════════════════════ */}
      <section style={{ background: T.navy, padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative background element */}
        <div style={{
          position: 'absolute', right: -120, top: -120, width: 480, height: 480,
          borderRadius: '50%', background: `radial-gradient(circle, ${T.gold}12, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', left: -80, bottom: -80, width: 360, height: 360,
          borderRadius: '50%', background: `radial-gradient(circle, ${T.navyLt}80, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <Label>Why Choose Us</Label>
              <h2 className="serif" style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: T.white,
                margin: '1rem 0 1rem', lineHeight: 1.2,
              }}>
                Excellence in Every <span style={{ color: T.gold }}>Detail</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}>
                We don't meet industry standards — we define them.
              </p>
            </div>
          </FadeIn>

          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {[
              { icon: FiAward,    stat: '100%', label: 'Certified',    title: 'Certified Excellence', desc: 'NCA5 certified with full government compliance across all project categories.' },
              { icon: FiDollarSign, stat: '30%', label: 'Cost Savings', title: 'Cost Efficiency',    desc: 'Transparent billing, value engineering, no hidden costs — ever.' },
              { icon: FiClock,    stat: '98%',  label: 'On Time',       title: 'On-Time Delivery',   desc: 'Industry-leading 98% on-time project completion through rigorous scheduling.' },
              { icon: FiShield,   stat: '0',    label: 'Incidents',     title: 'Safety First',        desc: 'DOSH certified with a zero-incident safety record across all active sites.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="why-card">
                  <item.icon size={28} style={{ color: T.gold, marginBottom: '1.25rem' }} />
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, color: T.gold, fontFamily: 'DM Serif Display, serif' }}>{item.stat}</span>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', display: 'block', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>{item.label}</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: T.white, marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ═══════════════════════════════════════ */}
      <section id="projects" ref={projectsRef} style={{ background: T.light, padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <Label>Our Portfolio</Label>
              <h2 className="serif" style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: T.navy,
                margin: '1rem 0 1rem', lineHeight: 1.2,
              }}>
                Featured <GoldWord>Projects</GoldWord>
              </h2>
              <p style={{ color: T.slate, fontSize: '1.05rem', maxWidth: 520, margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}>
                A curated selection from our growing portfolio across Africa.
              </p>
            </div>
          </FadeIn>

          {/* Slideshow */}
          <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: '16/9', maxWidth: 1000, margin: '0 auto 2rem' }}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={projectSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <motion.div style={{ position: 'absolute', inset: 0, y: parallaxY }}>
                  <Image src={PROJECT_IMAGES[projectSlide]} alt={`Project ${projectSlide + 1}`} fill className="object-cover" />
                </motion.div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,31,58,0.85) 0%, rgba(11,31,58,0.1) 55%)' }} />

                {/* Project info overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                    <span style={{
                      background: `linear-gradient(135deg, ${T.gold}, ${T.goldLt})`,
                      color: T.white, fontSize: '0.75rem', fontWeight: 700,
                      padding: '0.3rem 0.875rem', borderRadius: 100, letterSpacing: '0.05em',
                    }}>
                      {projectSlide + 1} / {PROJECT_IMAGES.length}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <FiMapPin size={12} /> East Africa
                    </span>
                  </div>
                  <h3 style={{ color: T.white, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontFamily: 'DM Serif Display, serif', fontWeight: 400, marginBottom: '0.5rem' }}>
                    Modern Infrastructure Development
                  </h3>
                  <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                    {['Delivered on schedule', 'Quality certified'].map((t, i) => (
                      <span key={i} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.825rem', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <FiCheckCircle size={13} style={{ color: T.success }} /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot nav */}
          <div className="dot-nav" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {PROJECT_IMAGES.map((_, i) => (
              <button key={i} className={i === projectSlide ? 'active' : ''} onClick={() => setProjectSlide(i)} aria-label={`Project ${i + 1}`}
                style={{ background: i === projectSlide ? T.gold : '#CBD5E0' }} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button className="btn-gold" style={{
              padding: '0.875rem 2rem', borderRadius: 10, fontSize: '0.95rem',
              fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'inherit',
            }}>
              Full Portfolio <FiArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══ TESTIMONIALS ═══════════════════════════════════ */}
      <section id="testimonials" style={{ background: T.white, padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <Label>Testimonials</Label>
              <h2 className="serif" style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: T.navy,
                margin: '1rem 0 1rem', lineHeight: 1.2,
              }}>
                Client <GoldWord>Success</GoldWord> Stories
              </h2>
              <p style={{ color: T.slate, fontSize: '1.05rem', maxWidth: 500, margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}>
                Our reputation is built project by project, client by client.
              </p>
            </div>
          </FadeIn>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="testimonial-card">
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
                    {[...Array(5)].map((_, j) => <FiStar key={j} size={16} style={{ color: T.gold, fill: T.gold }} />)}
                  </div>
                  {/* Quote mark */}
                  <div style={{ fontSize: '4rem', lineHeight: 0.8, color: `${T.gold}20`, fontFamily: 'DM Serif Display, serif', marginBottom: '1rem' }}>&ldquo;</div>
                  <p style={{ color: T.steel, fontSize: '0.95rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.75rem', fontWeight: 300 }}>
                    {t.quote}
                  </p>
                  <div style={{ borderTop: `1px solid #EDF2F7`, paddingTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                      background: `linear-gradient(135deg, ${T.gold}, ${T.goldLt})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: T.white, fontWeight: 700, fontSize: '0.875rem',
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: T.navy, fontSize: '0.9rem' }}>{t.author}</div>
                      <div style={{ color: T.slate, fontSize: '0.775rem', marginTop: 1 }}>{t.role}</div>
                      <div style={{ color: T.gold, fontSize: '0.75rem', fontWeight: 600, marginTop: 2 }}>{t.project}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ═════════════════════════════════════ */}
      <section id="contact" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 2rem' }}>
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/images/Image11.png" alt="" fill className="object-cover" />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, rgba(11,31,58,0.95) 0%, rgba(11,31,58,0.88) 100%)` }} />
        </div>

        {/* Geometric accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, transparent, ${T.gold}, ${T.goldPl}, ${T.gold}, transparent)`,
        }} />

        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <FadeIn>
            <Label>Get Started</Label>
            <h2 className="serif" style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 400, color: T.white,
              margin: '1rem 0 1.25rem', lineHeight: 1.1,
            }}>
              Ready to Build Your <span style={{ color: T.gold }}>Vision?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
              Partner with East Africa's leading construction company. Get your free consultation and project estimate today.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
              <button className="btn-gold" style={{
                padding: '1rem 2.25rem', borderRadius: 10, fontSize: '1rem', fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'inherit',
              }}>
                <FiPhone size={18} /> Get Free Quote
              </button>
              <button className="btn-ghost" style={{
                padding: '1rem 2.25rem', borderRadius: 10, fontSize: '1rem', fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'inherit',
              }}>
                <FiMail size={18} /> Send Enquiry
              </button>
            </div>

            {/* Contact row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
              {[
                { icon: FiPhone, text: '+254 700 123 456' },
                { icon: FiMail,  text: 'info@cekolengineering.com' },
                { icon: FiMapPin, text: 'Nairobi, Kenya' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem' }}>
                  <c.icon size={15} style={{ color: T.gold }} />
                  {c.text}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ FOOTER ═════════════════════════════════════════ */}
      <footer style={{ background: '#060F1E', padding: '3rem 2rem 2rem', borderTop: `1px solid rgba(255,255,255,0.05)` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{
                  width: 36, height: 36,
                  background: `linear-gradient(135deg, ${T.gold}, ${T.goldLt})`,
                  borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ color: T.white, fontWeight: 700, fontSize: '0.95rem', fontFamily: 'DM Serif Display, serif' }}>C</span>
                </div>
                <span style={{ color: T.white, fontWeight: 700, fontSize: '1rem' }}>CEKOL Engineering Limited</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.825rem', lineHeight: 1.7, maxWidth: 360 }}>
                NCA5 Certified · DOSH Compliant · Est. 2011 · Incorporated 2019
              </p>
            </div>
            {/* Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'flex-end' }}>
              {['Services', 'Projects', 'About', 'Testimonials', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.825rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = T.gold)}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.775rem' }}>© 2024 CEKOL Engineering Limited. All rights reserved.</span>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.775rem' }}>Nairobi · East Africa</span>
          </div>
        </div>
      </footer>

    </div>
  );
}