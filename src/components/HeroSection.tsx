import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MagneticButton } from './ui';
import { ChevronRight, CheckCircle, Flame } from 'lucide-react';
import { FaMeta } from 'react-icons/fa6';
import { SiGoogleads } from 'react-icons/si';
import { useMemo } from 'react';

// ============================================
// EMBER PARTICLES - جزيئات النار المتصاعدة
// ============================================
function EmberParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * 4,
      color: ['#fbbf24', '#f59e0b', '#ef4444', '#dc2626', '#f97316'][Math.floor(Math.random() * 5)],
    })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0 rounded-full opacity-80"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animation: `ember-rise ${p.duration}s ease-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// FIRE BACKGROUND - وهج الخلفية
// ============================================
function FireBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
      <div
        className="absolute rounded-full"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(220, 38, 38, 0.25) 45%, transparent 75%)',
          filter: 'blur(70px)',
        }}
      />
      <EmberParticles />
    </div>
  );
}

// ============================================
// LOGO IN YELLOW CIRCLE - اللوجو بوسط الدائرة الصفراء
// ============================================
function WolfLogoInYellowCircle() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative z-20 flex items-center justify-center"
    >
      {/* الدائرة الصفراء الذهبية المتوهجة (حجم أكبر) */}
      <div className="relative flex items-center justify-center w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-yellow-300 via-amber-500 to-orange-600 p-1.5 shadow-[0_0_100px_rgba(245,158,11,0.6)]">
        
        {/* الحلقة الداخلية مع خلفية سوداء تبرز اللوجو بدون حواف مقصوصة */}
        <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden border border-amber-500/20 shadow-inner">
          <img
            src="/main-logo.png"
            alt="WOLF LSK Agency Logo"
            className="w-full h-full object-cover drop-shadow-[0_0_25px_rgba(245,158,11,0.8)]"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN HERO SECTION - القسم الرئيسي
// ============================================
export default function HeroSection() {
  const { t, lang } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-black"
      aria-label="WOLF LSK Digital Marketing Agency"
    >
      {/* شبكة الخلفية */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245, 158, 11, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* وهج النار الخلفي */}
      <FireBackground />

      {/* المحتوى الرئيسي */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center"
      >
        
        {/* حاوية تجمع الكلمة واللوجو لضمان الترتيب المثالي */}
        <div className="flex flex-col items-center justify-center gap-7 mb-10 w-full relative">
          
          {/* العبارة المميزة (فوق اللوجو تماماً) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/50 text-amber-300 text-base sm:text-lg font-black tracking-wide shadow-[0_0_30px_rgba(245,158,11,0.3)] backdrop-blur-md z-30"
          >
            <Flame size={20} className="text-amber-400 animate-pulse" />
            <span>في غيرنا.. بس ما في زينا</span>
            <Flame size={20} className="text-amber-400 animate-pulse" />
          </motion.div>

          {/* اللوجو الكبير داخل الدائرة الصفراء */}
          <WolfLogoInYellowCircle />
        </div>

        {/* العنوان الرئيسي الاحترافي */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4"
        >
          {t.hero?.title || 'نقود علامتك التجارية نحو'}
          <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(245,158,11,0.5)]">
            {t.hero?.titleHighlight || 'الهيمنة الرقمية والصدارة'}
          </span>
        </motion.h1>

        {/* الوصف التسويقي الاحترافي */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {t.hero?.description || 'ندمج حلول التسويق المبتكرة مع استراتيجيات إعلانات Meta و Google ومحركات البحث (SEO) لنبني حضوراً استثنائياً يتفوق على المنافسين ويضاعف مبيعاتك.'}
        </motion.p>

        {/* أزرار الدعوة للإجراء (CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
        >
          <MagneticButton href="https://wa.me/962782456543" target="_blank" rel="noopener noreferrer" strength={0.4}>
            <div className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold rounded-full text-base sm:text-lg shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 hover:brightness-110 transition-all duration-300">
              <span>{t.hero?.cta1 || 'احجز استشارتك المجانية'}</span>
              <ChevronRight className={lang === 'ar' ? 'rotate-180' : ''} size={20} />
            </div>
          </MagneticButton>

          <MagneticButton href="#services" strength={0.2}>
            <div className="w-full sm:w-auto px-8 py-4 border border-amber-500/40 text-amber-400 font-bold rounded-full text-base sm:text-lg hover:bg-amber-500/10 backdrop-blur-sm transition-all duration-300">
              {t.hero?.cta2 || 'استكشف خدماتنا'}
            </div>
          </MagneticButton>
        </motion.div>

        {/* شارات الشراكات المعتمدة */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 opacity-90"
        >
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <CheckCircle className="text-emerald-400" size={18} />
            <SiGoogleads size={20} color="#FBBC04" />
            <span className="text-gray-300 text-xs sm:text-sm font-medium">{t.hero?.badgeGoogle || 'شريك معتمد Google Ads'}</span>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <CheckCircle className="text-blue-400" size={18} />
            <FaMeta size={18} color="#0866FF" />
            <span className="text-gray-300 text-xs sm:text-sm font-medium">{t.hero?.badgeMeta || 'خبراء إعلانات Meta'}</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}