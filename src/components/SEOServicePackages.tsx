/**
 * SEO Services Packages Component
 * Features: 3 SEO service cards, bilingual support, premium dark theme
 */

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SEOPackage {
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

const seoPackagesData: SEOPackage[] = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    image: './image/seo-website.jpg',
    badge: { en: 'Popular', ar: 'الأكثر شعبية' },
    title: {
      en: 'Website SEO Optimization',
      ar: 'تحسين الـ SEO للمواقع',
    },
    subtitle: {
      en: 'On-Page & Technical SEO',
      ar: 'تحسين داخلي وتقني',
    },
    price: 'JOD 150',
    billingCycle: {
      en: 'per month',
      ar: 'شهرياً',
    },
    buttonText: {
      en: 'More info',
      ar: 'مزيد من المعلومات',
    },
    features: {
      en: [
        'Complete technical SEO audit',
        'On-page optimization (meta tags, headers, content)',
        'Site speed optimization',
        'Mobile responsiveness improvement',
        'XML sitemap creation',
        'Robots.txt optimization',
        'Schema markup implementation',
        'Internal linking strategy',
      ],
      ar: [
        'تدقيق SEO تقني شامل',
        'تحسين داخلي (وسوم ميتا، رؤوس، محتوى)',
        'تحسين سرعة الموقع',
        'تحسين الاستجابة للجوال',
        'إنشاء خريطة الموقع XML',
        'تحسين ملف robots.txt',
        'تطبيق Schema markup',
        'استراتيجية الربط الداخلي',
      ],
    },
  },
  {
    id: 2,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    image: './image/seo-google-business.jpg',
    badge: { en: 'Popular', ar: 'الأكثر شعبية' },
    title: {
      en: 'Google Business Profile SEO',
      ar: 'تحسين الـ SEO للملفات التجارية على جوجل',
    },
    subtitle: {
      en: 'Local SEO & Maps Optimization',
      ar: 'SEO محلي وتحسين الخرائط',
    },
    price: 'JOD 100',
    billingCycle: {
      en: 'per month',
      ar: 'شهرياً',
    },
    buttonText: {
      en: 'More info',
      ar: 'مزيد من المعلومات',
    },
    features: {
      en: [
        'Google Business Profile optimization',
        'Local keyword research',
        'Citation building and NAP consistency',
        'Customer review management',
        'Google Maps optimization',
        'Local content strategy',
        'Geo-tagged image optimization',
        'Local link building',
      ],
      ar: [
        'تحسين ملف نشاط جوجل التجاري',
        'بحث الكلمات المفتاحية المحلية',
        'بناء الاقتباسات واتساق NAP',
        'إدارة تقييمات العملاء',
        'تحسين خرائط جوجل',
        'استراتيجية المحتوى المحلي',
        'تحسين الصور مع البيانات الجغرافية',
        'بناء الروابط المحلية',
      ],
    },
  },
  {
    id: 3,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    image: './image/seo-advanced.jpg',
    badge: { en: 'Popular', ar: 'الأكثر شعبية' },
    title: {
      en: 'Advanced Search Engine SEO',
      ar: 'تحسين الـ SEO على محركات البحث',
    },
    subtitle: {
      en: 'Complete SEO Strategy',
      ar: 'استراتيجية SEO شاملة',
    },
    price: 'JOD 250',
    billingCycle: {
      en: 'per month',
      ar: 'شهرياً',
    },
    buttonText: {
      en: 'More info',
      ar: 'مزيد من المعلومات',
    },
    features: {
      en: [
        'Comprehensive keyword research',
        'Competitor analysis and strategy',
        'Content marketing strategy',
        'Link building campaign',
        'Advanced technical SEO',
        'Monthly performance reports',
        'Conversion rate optimization',
        'Ongoing SEO monitoring',
      ],
      ar: [
        'بحث شامل عن الكلمات المفتاحية',
        'تحليل المنافسين والاستراتيجية',
        'استراتيجية تسويق المحتوى',
        'حملة بناء الروابط',
        'SEO تقني متقدم',
        'تقارير أداء شهرية',
        'تحسين معدل التحويل',
        'مراقبة SEO المستمرة',
      ],
    },
  },
];

const SEOServicePackages = () => {
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
      id="seo-packages"
      className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black"
      aria-label={lang === 'ar' ? 'باقات خدمات ال SEO' : 'SEO Services Packages'}
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-4">
            {lang === 'ar' ? 'باقات خدمات ال SEO' : 'SEO Services Packages'}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'ارتقِ بموقعك في نتائج البحث'
              : 'Elevate your ranking in search results'}
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
          {seoPackagesData.map((pkg) => (
            <motion.article
              key={pkg.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-emerald-500/0 to-teal-500/0 group-hover:from-green-500/5 group-hover:via-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-500 pointer-events-none" />

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

                {/* SEO Icon Badge */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 text-green-400">
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
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
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
                <motion.a
                  href="https://wa.me/962782456543"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-red-500/50 block text-center"
                  aria-label={lang === 'ar' ? pkg.buttonText.ar : pkg.buttonText.en}
                >
                  {lang === 'ar' ? pkg.buttonText.ar : pkg.buttonText.en}
                </motion.a>

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
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-bold rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            {lang === 'ar' ? 'تواصل مع خبير SEO' : 'Contact SEO Expert'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOServicePackages;
