/**
 * WOLF LSK Agency - Premium Hero Section with Fire Animation
 * Features: CSS-based fire/glow animation behind centered logo,
 * ember particles, staggered text reveals, magnetic CTAs
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MagneticButton, AnimatedText } from './ui';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { useMemo } from 'react';

// ============================================
// EMBER PARTICLES - Rising fire particles
// ============================================
function EmberParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      color: ['#fbbf24', '#f59e0b', '#ef4444', '#dc2626', '#f97316'][Math.floor(Math.random() * 5)],
    })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animation: `ember-rise ${p.duration}s ease-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// FIRE BACKGROUND - Multi-layered CSS fire effect
// ============================================
function FireBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Layer 1: Large deep red base */}
      <div
        className="absolute fire-layer-1"
        style={{
          top: '55%',
          left: '50%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.6) 0%, rgba(127, 29, 29, 0.3) 40%, transparent 70%)',
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Layer 2: Medium orange glow */}
      <div
        className="absolute fire-layer-2"
        style={{
          top: '50%',
          left: '50%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.7) 0%, rgba(234, 88, 12, 0.4) 35%, transparent 65%)',
          filter: 'blur(50px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Layer 3: Amber/gold inner glow */}
      <div
        className="absolute fire-layer-3"
        style={{
          top: '50%',
          left: '50%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, rgba(245, 158, 11, 0.4) 40%, transparent 70%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Layer 4: Flickering core */}
      <div
        className="absolute fire-flicker"
        style={{
          top: '50%',
          left: '50%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(253, 224, 71, 0.9) 0%, rgba(251, 191, 36, 0.5) 50%, transparent 80%)',
          filter: 'blur(30px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Layer 5: Vertical flame shape */}
      <div
        className="absolute fire-layer-2"
        style={{
          top: '45%',
          left: '50%',
          width: '200px',
          height: '400px',
          background: 'radial-gradient(ellipse at center bottom, rgba(251, 191, 36, 0.6) 0%, rgba(239, 68, 68, 0.3) 40%, transparent 70%)',
          filter: 'blur(35px)',
          mixBlendMode: 'screen',
          animationDuration: '5s',
        }}
      />

      {/* Ember particles rising */}
      <EmberParticles />
    </div>
  );
}

// ============================================
// LOGO COMPONENT - Premium Wolf Logo
// ============================================
function WolfLogo() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative z-10 mb-8"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full logo-glow" />

      {/* Logo container */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 60px rgba(245, 158, 11, 0.4), 0 0 120px rgba(245, 158, 11, 0.2)',
            '0 0 80px rgba(245, 158, 11, 0.6), 0 0 160px rgba(245, 158, 11, 0.3)',
            '0 0 60px rgba(245, 158, 11, 0.4), 0 0 120px rgba(245, 158, 11, 0.2)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-amber-500/50 flex items-center justify-center overflow-hidden"
      >
        {/* Inner gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-600/10" />

        {/* Wolf "W" letter */}
        <div className="relative">
          <span
            className="text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 30px rgba(245, 158, 11, 0.5)',
              WebkitTextStroke: '1px rgba(245, 158, 11, 0.3)',
            }}
          >
            W
          </span>
        </div>

        {/* Decorative ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 rounded-full border border-amber-500/20"
          style={{
            borderStyle: 'dashed',
          }}
        />
      </motion.div>

      {/* Agency name below logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-6"
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-white font-black text-2xl sm:text-3xl tracking-tight">WOLF</span>
          <span className="text-amber-400 font-black text-2xl sm:text-3xl">LSK</span>
        </div>
        <p className="text-amber-400/80 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mt-1">
          Agency
        </p>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// HERO SECTION
// ============================================
export default function HeroSection() {
  const { t, lang } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero Section - Wolf LSK Digital Marketing Agency"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Fire Animation Behind Logo */}
      <FireBackground />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Centered Logo with Fire */}
        <WolfLogo />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-8"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            🔥
          </motion.span>
          {t.hero.badge.replace('🔥 ', '')}
        </motion.div>

        {/* SEO-Optimized H1 - Staggered Word Reveal */}
        <div className="mb-4">
          <AnimatedText
            text={t.hero.title}
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
            delay={1.2}
            staggerDelay={0.05}
          />
        </div>
        <div className="mb-8">
          <AnimatedText
            text={t.hero.titleHighlight}
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent"
            delay={1.6}
            staggerDelay={0.05}
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons - Magnetic Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton
            href="https://wa.me/962782456543"
            target="_blank"
            rel="noopener noreferrer"
            strength={0.5}
          >
            <div className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full text-lg shadow-2xl shadow-amber-500/20 flex items-center gap-2 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.cta1}
                <ChevronRight size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500"
                initial={{ scale: 0, borderRadius: '100%' }}
                whileHover={{ scale: 2, borderRadius: '0%' }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </MagneticButton>
          <MagneticButton href="#services" strength={0.3}>
            <div className="px-8 py-4 border-2 border-amber-500/30 text-amber-400 font-bold rounded-full text-lg hover:bg-amber-500/10 transition-all duration-300">
              {t.hero.cta2}
            </div>
          </MagneticButton>
        </motion.div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300"
          >
            <CheckCircle size={20} className="text-green-400" />
            <span className="text-gray-300 text-sm font-medium">{t.hero.badgeGoogle}</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
          >
            <CheckCircle size={20} className="text-blue-400" />
            <span className="text-gray-300 text-sm font-medium">{t.hero.badgeMeta}</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-amber-500/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-amber-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
