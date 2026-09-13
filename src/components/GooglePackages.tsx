/**
 * Google Packages Component - Enhanced Google Services Section
 * Features: Google branding, SEO optimized, bilingual support, premium dark theme
 */

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FcGoogle, FcAdvertising, FcBusinessContact } from 'react-icons/fc';

interface GooglePackage {
  id: number;
  icon: React.ReactNode;
  badge: { en: string; ar: string };
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  price: string;
  billingCycle: { en: string; ar: string };
  buttonText: { en: string; ar: string };
  features: { en: string[]; ar: string[] };
  image: string;
}

const googlePackagesData: GooglePackage[] = [
  {
    id: 1,
    icon: <FcBusinessContact className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
    badge: { en: 'Popular', ar: 'الأكثر شعبية' },
    title: {
      en: 'Google Business Profile Setup',
      ar: 'إعداد ملف نشاطك التجاري على جوجل',
    },
    subtitle: {
      en: 'Verified & Optimized',
      ar: 'موثق ومحسّن',
    },
    price: 'JOD 40',
    billingCycle: {
      en: 'per profile (one-time)',
      ar: 'لكل ملف (لمرة واحدة)',
    },
    buttonText: {
      en: 'More info',
      ar: 'مزيد من المعلومات',
    },
    features: {
      en: [
        'Complete business profile creation',
        'Category selection & optimization',
        'Business hours & contact setup',
        'Photo upload (up to 5 images)',
        'Verification assistance',
        'Basic SEO optimization',
      ],
      ar: [
        'إنشاء ملف نشاط تجاري كامل',
        'اختيار الفئة والتحسين',
        'إعداد ساعات العمل ومعلومات الاتصال',
        'رفع الصور (حتى 5 صور)',
        'مساعدة في التوثيق',
        'تحسين SEO أساسي',
      ],
    },
  },
  {
    id: 2,
    icon: <FcAdvertising className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    badge: { en: 'Popular', ar: 'الأكثر شعبية' },
    title: {
      en: 'Google Search & Maps Ads',
      ar: 'إعلانات بحث وخرائط جوجل',
    },
    subtitle: {
      en: '1 Campaign / 1 Month',
      ar: 'حملة واحدة / شهر واحد',
    },
    price: 'JOD 70',
    billingCycle: {
      en: 'per campaign (monthly)',
      ar: 'لكل حملة (شهرياً)',
    },
    buttonText: {
      en: 'More info',
      ar: 'مزيد من المعلومات',
    },
    features: {
      en: [
        '1 complete campaign setup',
        'Keyword research & targeting',
        'Professional ad copy creation',
        'Audience targeting & segmentation',
        'Performance tracking & analytics',
        '1 month campaign management',
        'Weekly performance reports',
      ],
      ar: [
        'إعداد حملة واحدة كاملة',
        'بحث الكلمات المفتاحية والاستهداف',
        'إنشاء نصوص إعلانية احترافية',
        'استهداف الجمهور والتقسيم',
        'تتبع الأداء والتحليلات',
        'إدارة الحملة لمدة شهر',
        'تقارير أداء أسبوعية',
      ],
    },
  },
  {
    id: 3,
    icon: <FcGoogle className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop',
    badge: { en: 'Popular', ar: 'الأكثر شعبية' },
    title: {
      en: 'SEO Keywords & Research Pack',
      ar: 'باقة بحث الكلمات المفتاحية وSEO',
    },
    subtitle: {
      en: 'GBP + Ads + SEO',
      ar: 'ملف جوجل + الإعلانات + SEO',
    },
    price: 'JOD 130',
    billingCycle: {
      en: 'complete package (one-time)',
      ar: 'باقة كاملة (لمرة واحدة)',
    },
    buttonText: {
      en: 'More info',
      ar: 'مزيد من المعلومات',
    },
    features: {
      en: [
        'Everything in GBP Setup (JOD 40)',
        'Everything in Google Ads (JOD 70)',
        'Advanced keyword research',
        'Competitor analysis',
        'Content strategy planning',
        'Monthly performance reporting',
        'Priority support',
        'ROI optimization',
      ],
      ar: [
        'كل شيء في إعداد ملف جوجل (40 دينار)',
        'كل شيء في إعلانات جوجل (70 دينار)',
        'بحث متقدم عن الكلمات المفتاحية',
        'تحليل المنافسين',
        'تخطيط استراتيجية المحتوى',
        'تقارير أداء شهرية',
        'دعم ذو أولوية',
        'تحسين العائد على الاستثمار',
      ],
    },
  },
];

const GooglePackages = () => {
  const { lang } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="google-packages"
      className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black"
      aria-label={lang === 'ar' ? 'باقات خدمات جوجل' : 'Google Services Packages'}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Google Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FcGoogle className="w-12 h-12 md:w-16 md:h-16" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              {lang === 'ar' ? 'باقات خدمات جوجل' : 'Google Services Packages'}
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'اختر الباقة المناسبة لنمو عملك الرقمي'
              : 'Choose the right package for your digital business growth'}
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {googlePackagesData.map((pkg) => (
            <motion.article
              key={pkg.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-red-500/0 to-yellow-500/0 group-hover:from-blue-500/5 group-hover:via-red-500/5 group-hover:to-yellow-500/5 transition-all duration-500 pointer-events-none" />

              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={lang === 'ar' ? pkg.title.ar : pkg.title.en}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                {/* Google Icon Badge */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
                  {pkg.icon}
                </div>

                {/* Popular Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-white text-gray-900 text-sm font-bold rounded-full shadow-lg">
                    {lang === 'ar' ? pkg.badge.ar : pkg.badge.en}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {lang === 'ar' ? pkg.title.ar : pkg.title.en}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {lang === 'ar' ? pkg.subtitle.ar : pkg.subtitle.en}
                  </p>
                </div>

                {/* Price Section */}
                <div className="py-4 border-t border-b border-gray-800">
                  <div className="text-3xl font-bold text-white mb-1">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-400">
                    {lang === 'ar' ? pkg.billingCycle.ar : pkg.billingCycle.en}
                  </p>
                </div>

                {/* More Info Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-red-500/50"
                  aria-label={lang === 'ar' ? pkg.buttonText.ar : pkg.buttonText.en}
                >
                  {lang === 'ar' ? pkg.buttonText.ar : pkg.buttonText.en}
                </motion.button>

                {/* Features Checklist */}
                <ul className="space-y-3 pt-2">
                  {(lang === 'ar' ? pkg.features.ar : pkg.features.en).map(
                    (feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.li>
                    )
                  )}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            {lang === 'ar'
              ? 'هل تحتاج باقة مخصصة؟ تواصل معنا'
              : 'Need a custom package? Get in touch'}
          </p>
          <motion.a
            href="https://wa.me/962782456543"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-white font-bold rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            <FcGoogle className="w-6 h-6" />
            {lang === 'ar' ? 'تواصل مع خبير جوجل' : 'Contact Google Expert'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GooglePackages;
