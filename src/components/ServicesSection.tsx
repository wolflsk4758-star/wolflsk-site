/**
 * WOLF LSK Agency - Interactive Services Section
 * Features: Drill-down cards, 3D tilt, glowing borders, Framer Motion animations
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TiltCard, AnimatedText, GlowingBorder } from './ui';
import {
  Megaphone, Globe, Code, ChevronRight, X, ExternalLink,
  Search, MapPin, Layout, ShoppingCart, Building2, Zap
} from 'lucide-react';

// ============================================
// SERVICE DATA STRUCTURE
// ============================================
interface SubService {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  color: string;
  icon: string;
  brandColor?: string;
}

interface MainService {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: React.ReactNode;
  gradient: string;
  glowColor: string;
  subServices: SubService[];
}

const servicesData: MainService[] = [
  {
    id: 'advertising',
    title: 'Advertising Campaigns',
    titleAr: 'الحملات الإعلانية الممولة',
    description: 'Managing large budgets across all major platforms with precise targeting ensuring highest ROAS.',
    descriptionAr: 'إدارة ميزانيات ضخمة عبر جميع المنصات الرئيسية باستهداف دقيق يضمن أعلى عائد على الاستثمار.',
    icon: <Megaphone size={32} />,
    gradient: 'from-blue-600/20 via-purple-600/20 to-pink-600/20',
    glowColor: 'rgba(139, 92, 246, 0.3)',
    subServices: [
      {
        name: 'Facebook Ads',
        nameAr: 'إعلانات فيسبوك',
        description: 'Targeted campaigns reaching billions of users with precision audience segmentation.',
        descriptionAr: 'حملات مستهدفة تصل لمليارات المستخدمين مع تقسيم دقيق للجمهور.',
        color: '#1877F2',
        icon: 'facebook',
        brandColor: '#1877F2',
      },
      {
        name: 'Instagram Ads',
        nameAr: 'إعلانات إنستغرام',
        description: 'Visual storytelling campaigns with Reels, Stories, and Shopping integration.',
        descriptionAr: 'حملات سرد بصري مع الريلز والستوريز والتكامل مع التسوق.',
        color: '#E4405F',
        icon: 'instagram',
        brandColor: '#E4405F',
      },
      {
        name: 'Snapchat Ads',
        nameAr: 'إعلانات سناب شات',
        description: 'Captivating video ads reaching the GCC audience with high engagement rates.',
        descriptionAr: 'إعلانات فيديو جذابة تصل للجمهور الخليجي بمعدلات تفاعل عالية.',
        color: '#FFFC00',
        icon: 'snapchat',
        brandColor: '#FFFC00',
      },
      {
        name: 'LinkedIn Ads',
        nameAr: 'إعلانات لينكد إن',
        description: 'B2B campaigns targeting decision makers, executives, and industry professionals.',
        descriptionAr: 'حملات B2B تستهدف صناع القرار والمدراء والمحترفين في مختلف القطاعات.',
        color: '#0A66C2',
        icon: 'linkedin',
        brandColor: '#0A66C2',
      },
      {
        name: 'TikTok Ads',
        nameAr: 'إعلانات تيك توك',
        description: 'Trend-driven campaigns leveraging viral content for maximum reach and engagement.',
        descriptionAr: 'حملات مبنية على الترندات تستغل المحتوى الفيروسي لأقصى وصول وتفاعل.',
        color: '#000000',
        icon: 'tiktok',
        brandColor: '#69C9D0',
      },
    ],
  },
  {
    id: 'google',
    title: 'Google Ecosystem',
    titleAr: 'خدمات جوجل المتكاملة',
    description: 'Complete Google solutions from Search dominance to local business visibility.',
    descriptionAr: 'حلول جوجل متكاملة من الهيمنة على البحث إلى ظهور الأعمال المحلية.',
    icon: <Globe size={32} />,
    gradient: 'from-green-600/20 via-yellow-600/20 to-red-600/20',
    glowColor: 'rgba(66, 133, 244, 0.3)',
    subServices: [
      {
        name: 'Google Search Ads',
        nameAr: 'إعلانات بحث جوجل',
        description: 'Dominate search results with precision keyword targeting and smart bidding strategies.',
        descriptionAr: 'هيمنة على نتائج البحث باستهداف دقيق للكلمات المفتاحية واستراتيجيات ذكية.',
        color: '#4285F4',
        icon: 'google',
        brandColor: '#4285F4',
      },
      {
        name: 'Advanced SEO',
        nameAr: 'تصدر محركات البحث',
        description: 'Technical, on-page, and off-page SEO to rank #1 on Google for your target keywords.',
        descriptionAr: 'SEO تقني وداخلي وخارجي للوصول للمركز الأول في جوجل على كلماتك المستهدفة.',
        color: '#34A853',
        icon: 'seo',
        brandColor: '#34A853',
      },
      {
        name: 'Google My Business',
        nameAr: 'إنشاء وإدارة ملف تجاري على خرائط جوجل',
        description: 'Setup, verification, and optimization of your Google Maps business profile for local dominance.',
        descriptionAr: 'إنشاء وتوثيق وتحسين ملف نشاطك التجاري على خرائط جوجل للهيمنة محلياً.',
        color: '#EA4335',
        icon: 'maps',
        brandColor: '#EA4335',
      },
    ],
  },
  {
    id: 'webdev',
    title: 'Web Development',
    titleAr: 'برمجة المواقع المتقدمة',
    description: 'Premium websites and web applications built with cutting-edge technologies.',
    descriptionAr: 'مواقع وتطبيقات ويب متميزة مبنية بأحدث التقنيات.',
    icon: <Code size={32} />,
    gradient: 'from-amber-600/20 via-orange-600/20 to-red-600/20',
    glowColor: 'rgba(245, 158, 11, 0.3)',
    subServices: [
      {
        name: 'UI/UX Design',
        nameAr: 'تصميم واجهات وتجربة المستخدم',
        description: 'Stunning, intuitive interfaces that convert visitors into customers.',
        descriptionAr: 'واجهات مذهلة وبديهية تحوّل الزوار إلى عملاء.',
        color: '#F59E0B',
        icon: 'design',
        brandColor: '#F59E0B',
      },
      {
        name: 'E-commerce Stores',
        nameAr: 'المتاجر الإلكترونية',
        description: 'Full-featured online stores with payment integration, inventory, and analytics.',
        descriptionAr: 'متاجر إلكترونية متكاملة مع الدفع الإلكتروني وإدارة المخزون والتحليلات.',
        color: '#10B981',
        icon: 'ecommerce',
        brandColor: '#10B981',
      },
      {
        name: 'Corporate Websites',
        nameAr: 'مواقع الشركات',
        description: 'Professional corporate websites that reflect your brand authority and build trust.',
        descriptionAr: 'مواقع شركات احترافية تعكس هوية علامتك التجارية وتبني الثقة.',
        color: '#6366F1',
        icon: 'corporate',
        brandColor: '#6366F1',
      },
    ],
  },
];

// ============================================
// SUB-SERVICE ICON COMPONENT
// ============================================
function SubServiceIcon({ type, color }: { type: string; color: string }) {
  const iconStyle = { color };
  const size = 24;

  switch (type) {
    case 'facebook':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      );
    case 'snapchat':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.072 1.125-.154 2.393-.325 3.559-.136.93-.338 1.726-.6 2.38-.264.654-.597 1.008-.898 1.215a3.02 3.02 0 01-.44.248c.05.39.124.803.258 1.18.14.39.352.765.66 1.035.39.34.89.508 1.47.63.36.076.75.12 1.14.18.57.09 1.02.24 1.35.51.45.36.6.87.57 1.38-.03.51-.27 1.02-.72 1.38-.36.3-.84.48-1.38.6-.54.12-1.14.18-1.74.24a12.9 12.9 0 01-1.62.06c-.54 0-1.08-.03-1.56-.06a8.1 8.1 0 01-.66-.06 3.9 3.9 0 00-.48-.03c-.24 0-.48.06-.66.18-.36.24-.6.6-.84.96-.24.36-.54.72-.96.96-.42.24-.96.3-1.56.3-.6 0-1.14-.06-1.56-.3-.42-.24-.72-.6-.96-.96-.24-.36-.48-.72-.84-.96a1.2 1.2 0 00-.66-.18c-.18 0-.36.03-.48.03-.21.03-.42.06-.66.06a12.9 12.9 0 01-1.62.06c-.54 0-1.08-.03-1.56-.06a16.4 16.4 0 01-1.74-.24c-.54-.12-1.02-.3-1.38-.6-.45-.36-.69-.87-.72-1.38-.03-.51.12-1.02.57-1.38.33-.27.78-.42 1.35-.51.39-.06.78-.105 1.14-.18.57-.12 1.08-.288 1.47-.63.3-.27.51-.645.66-1.035.134-.377.208-.79.258-1.18a3.02 3.02 0 01-.44-.248c-.3-.207-.633-.561-.898-1.215-.262-.654-.464-1.45-.6-2.38-.171-1.166-.253-2.434-.325-3.559l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.86 1.069 11.216.793 12.206.793z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case 'tiktok':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.85z"/>
        </svg>
      );
    case 'google':
      return <Search size={size} style={{ color }} />;
    case 'seo':
      return <Zap size={size} style={{ color }} />;
    case 'maps':
      return <MapPin size={size} style={{ color }} />;
    case 'design':
      return <Layout size={size} style={{ color }} />;
    case 'ecommerce':
      return <ShoppingCart size={size} style={{ color }} />;
    case 'corporate':
      return <Building2 size={size} style={{ color }} />;
    default:
      return <Globe size={size} style={{ color }} />;
  }
}

// ============================================
// MAIN SERVICES SECTION
// ============================================
export default function ServicesSection() {
  const { lang, t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleClose = () => {
    setExpandedId(null);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      {/* Animated background orbs */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"
      />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block"
          >
            {lang === 'ar' ? 'أسلحتنا الرقمية' : 'Our Digital Arsenal'}
          </motion.span>
          <AnimatedText
            text={lang === 'ar' ? 'حلول تسويقية متكاملة' : 'Integrated Marketing Solutions'}
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6"
            delay={0.1}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {lang === 'ar'
              ? 'اضغط على أي خدمة لاكتشاف تفاصيلها'
              : 'Click any service to explore its details'}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <TiltCard
                className="h-full"
                tiltAmount={6}
                onClick={() => handleCardClick(service.id)}
              >
                <GlowingBorder active={expandedId === service.id} className="h-full">
                  <div
                    onClick={() => handleCardClick(service.id)}
                    className="relative p-8 rounded-2xl cursor-pointer group h-full"
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />

                    {/* Animated border glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow: `inset 0 0 30px ${service.glowColor}, 0 0 30px ${service.glowColor}`,
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-amber-400"
                        style={{
                          background: `linear-gradient(135deg, ${service.glowColor}40, transparent)`,
                          border: `1px solid ${service.glowColor}60`,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {service.icon}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-white font-bold text-xl mb-3 group-hover:text-amber-400 transition-colors duration-300">
                        {lang === 'ar' ? service.titleAr : service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {lang === 'ar' ? service.descriptionAr : service.description}
                      </p>

                      {/* Sub-services count badge */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                          {service.subServices.length} {lang === 'ar' ? 'خدمات فرعية' : 'sub-services'}
                        </span>
                        <motion.div
                          className="flex items-center gap-1 text-amber-400 text-sm font-medium"
                          animate={{ x: expandedId === service.id ? 0 : [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <span>{lang === 'ar' ? 'اكتشف المزيد' : 'Explore'}</span>
                          <ChevronRight size={16} className={lang === 'ar' ? 'rotate-180' : ''} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </GlowingBorder>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Expanded Service Detail Panel */}
        <AnimatePresence>
          {expandedId && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 40 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="relative rounded-3xl overflow-hidden"
              >
                {/* Panel Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-xl" />
                <div className="absolute inset-0 border border-white/10 rounded-3xl" />

                {/* Animated top border */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${
                      servicesData.find(s => s.id === expandedId)?.glowColor || '#f59e0b'
                    }, transparent)`,
                  }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative p-8 md:p-12">
                  {/* Close Button */}
                  <motion.button
                    onClick={handleClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-500/50 transition-all duration-300"
                  >
                    <X size={18} />
                  </motion.button>

                  {/* Panel Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-10"
                  >
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                      {lang === 'ar'
                        ? servicesData.find(s => s.id === expandedId)?.titleAr
                        : servicesData.find(s => s.id === expandedId)?.title}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {lang === 'ar'
                        ? servicesData.find(s => s.id === expandedId)?.descriptionAr
                        : servicesData.find(s => s.id === expandedId)?.description}
                    </p>
                  </motion.div>

                  {/* Sub-services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.find(s => s.id === expandedId)?.subServices.map((sub, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + i * 0.1,
                          ease: [0.25, 0.4, 0.25, 1],
                        }}
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                          transition: { duration: 0.2 },
                        }}
                        className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                      >
                        {/* Hover glow */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle at 50% 0%, ${sub.brandColor || sub.color}15 0%, transparent 70%)`,
                          }}
                        />

                        {/* Icon with brand color */}
                        <div className="relative flex items-center gap-4 mb-4">
                          <motion.div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{
                              background: `${sub.brandColor || sub.color}15`,
                              border: `1px solid ${sub.brandColor || sub.color}30`,
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <SubServiceIcon type={sub.icon} color={sub.brandColor || sub.color} />
                          </motion.div>
                          <div>
                            <h4 className="text-white font-bold text-base">
                              {lang === 'ar' ? sub.nameAr : sub.name}
                            </h4>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="relative text-gray-400 text-sm leading-relaxed">
                          {lang === 'ar' ? sub.descriptionAr : sub.description}
                        </p>

                        {/* Bottom accent line */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${sub.brandColor || sub.color}, transparent)`,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 text-center"
                  >
                    <motion.a
                      href="https://wa.me/962782456543"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(245, 158, 11, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full text-lg shadow-xl shadow-amber-500/20"
                    >
                      <ExternalLink size={18} />
                      {lang === 'ar' ? 'احجز هذه الخدمة الآن' : 'Book This Service Now'}
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
