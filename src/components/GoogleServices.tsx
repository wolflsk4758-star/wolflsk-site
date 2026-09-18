/**
 * Google Services Pricing Packages Component
 * Features: 3 pricing cards, bilingual (EN/AR), animations, responsive design
 */

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PricingCard {
  id: number;
  image: string;
  badge: { en: string; ar: string };
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  price: string;
  billingCycle: { en: string; ar: string };
  buttonText: { en: string; ar: string };
  features: { en: string[]; ar: string[] };
}

const pricingData: PricingCard[] = [
  {
    id: 1,
    image: '/googel business profile setup.jpg',
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
    image: '/google search & maps ads.jpg',
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
    image: '/seo keywords & research pack.jpg',
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

const GoogleServices = () => {
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
      id="google-services"
      className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black"
      aria-label="Google Services Pricing"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            {lang === 'ar' ? 'باقات خدمات جوجل' : 'Google Services Packages'}
          </h2>
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
          {pricingData.map((card) => (
            <motion.article
              key={card.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-orange-500/0 to-red-500/0 group-hover:from-amber-500/5 group-hover:via-orange-500/5 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none" />

              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={lang === 'ar' ? card.title.ar : card.title.en}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                {/* Popular Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-white text-gray-900 text-sm font-bold rounded-full shadow-lg">
                    {lang === 'ar' ? card.badge.ar : card.badge.en}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {lang === 'ar' ? card.title.ar : card.title.en}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {lang === 'ar' ? card.subtitle.ar : card.subtitle.en}
                  </p>
                </div>

                {/* Price Section */}
                <div className="py-4 border-t border-b border-gray-800">
                  <div className="text-3xl font-bold text-white mb-1">
                    {card.price}
                  </div>
                  <p className="text-sm text-gray-400">
                    {lang === 'ar' ? card.billingCycle.ar : card.billingCycle.en}
                  </p>
                </div>

                {/* More Info Button */}
                <motion.a
                  href="https://wa.me/962782456543"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-red-500/50 block text-center"
                  aria-label={lang === 'ar' ? card.buttonText.ar : card.buttonText.en}
                >
                  {lang === 'ar' ? card.buttonText.ar : card.buttonText.en}
                </motion.a>

                {/* Features Checklist */}
                <ul className="space-y-3 pt-2">
                  {(lang === 'ar' ? card.features.ar : card.features.en).map(
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleServices;