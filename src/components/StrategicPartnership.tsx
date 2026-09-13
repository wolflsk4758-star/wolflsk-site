/**
 * Strategic Partnership Section - Ensany.com
 * Premium announcement banner for the WOLF LSK x Ensany global alliance
 * Features: Glassmorphism, emerald glow accents, Framer Motion entry animation
 */

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Award, Heart, ExternalLink } from 'lucide-react';

const StrategicPartnership = () => {
  const { lang } = useLanguage();

  const content = {
    headline: {
      en: 'Global Strategic Alliance for Good',
      ar: 'تحالف استراتيجي عالمي نحو الخير',
    },
    body: {
      en: "We are proud to announce that the global Ensany platform (Ensany.com) — a pioneer in the field of donation, spanning 72 countries worldwide — has officially designated WOLF LSK AGENCY as its exclusive technical partner and primary provider for the development of all its international donation platforms.",
      ar: 'يسرّنا أن نعلن عن اعتماد منصة إنساني (Ensany.com) العالمية - الرائدة في مجال التبرع والممتدة في 72 دولة حول العالم - لشركة WOLF LSK AGENCY شريكاً تقنياً ومورداً رئيسياً وحصرياً لتطوير جميع منصاتها التبرعية الدولية.',
    },
    cta: {
      en: 'Visit Ensany.com',
      ar: 'زيارة Ensany.com',
    },
    whatsappCta: {
      en: 'Partner With Us',
      ar: 'كن شريكاً لنا',
    },
    stats: [
      { value: '72', label: { en: 'Countries', ar: 'دولة' } },
      { value: '1000+', label: { en: 'Campaigns', ar: 'حملة تبرع' } },
      { value: '1M+', label: { en: 'Lives Impacted', ar: 'حياة تأثرت' } },
    ],
  };

  return (
    <section
      id="partnership"
      className="relative py-24 px-4 overflow-hidden"
      aria-label={lang === 'ar' ? 'شراكة استراتيجية عالمية' : 'Global Strategic Partnership'}
    >
      {/* Background - Dark with emerald glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-emerald-950/20" />

      {/* Animated emerald glow orbs */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-green-600/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"
      />

      {/* Top border glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Partnership Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <Award size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">
              {lang === 'ar' ? 'شراكة حصرية' : 'Exclusive Partnership'}
            </span>
          </div>
        </motion.div>

        {/* Main Headline - Gold/Premium text */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-tight"
        >
          <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            {content.headline[lang]}
          </span>
        </motion.h2>

        {/* Glassmorphism Text Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto max-w-4xl p-8 md:p-12 rounded-3xl mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(5, 150, 105, 0.04))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            boxShadow: '0 0 60px rgba(16, 185, 129, 0.15), inset 0 0 60px rgba(16, 185, 129, 0.05)',
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-emerald-400/50 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-emerald-400/50 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-emerald-400/50 rounded-br-3xl" />

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed text-center relative z-10">
            {content.body[lang]}
          </p>
        </motion.div>

        {/* Partnership Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12"
        >
          <img
            src="./image/ensany-partnership.jpg"
            alt="WOLF LSK and Ensany Global Partnership"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl shadow-green-900/50 border border-green-500/30"
            loading="lazy"
          />
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-12"
        >
          {content.stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center p-4 md:p-6 rounded-2xl bg-white/[0.03] border border-emerald-500/20 backdrop-blur-sm"
            >
              <div className="text-3xl md:text-5xl font-black bg-gradient-to-b from-emerald-300 to-emerald-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs md:text-sm font-medium">
                {stat.label[lang]}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://ensany.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(16, 185, 129, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-full text-lg shadow-xl shadow-emerald-500/20"
          >
            <Globe size={20} />
            {content.cta[lang]}
            <ExternalLink size={16} />
          </motion.a>
          <motion.a
            href="https://wa.me/962782456543"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-500/40 text-amber-400 font-bold rounded-full text-lg hover:bg-amber-500/10 transition-all duration-300"
          >
            <Heart size={20} />
            {content.whatsappCta[lang]}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StrategicPartnership;
