/**
 * Portfolio Feedback Component
 * Features: Two-column layout, infinite vertical carousel, bilingual support
 */

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioItem {
  id: number;
  category: { en: string; ar: string };
  image: string;
  alt: { en: string; ar: string };
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: { en: 'Healthcare', ar: 'الرعاية الصحية' },
    image: '/dental clinic campaing design.png',
    alt: { en: 'Dental Clinic Campaign Design', ar: 'تصميم حملة عيادة أسنان' },
  },
  {
    id: 2,
    category: { en: 'Food & Beverage', ar: 'المطاعم' },
    image: '/farouj noman restaurant social media ad.png',
    alt: { en: 'Farouj Noman Restaurant Social Media Ad', ar: 'إعلان سوشيال ميديا لمطعم فروج نعمان' },
  },
  {
    id: 3,
    category: { en: 'Beauty', ar: 'التجميل' },
    image: '/hazem beauty salon branding.png',
    alt: { en: 'Hazem Beauty Salon Branding', ar: 'هوية بصرية لصالون حازم للتجميل' },
  },
  {
    id: 4,
    category: { en: 'Medical', ar: 'الطبي' },
    image: '/medical center promo.jpg',
    alt: { en: 'Medical Center Promo', ar: 'إعلان مركز طبي' },
  },
  {
    id: 5,
    category: { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
    image: '/online store campaign.png',
    alt: { en: 'Online Store Campaign', ar: 'حملة متجر إلكتروني' },
  },
  {
    id: 6,
    category: { en: 'Real Estate', ar: 'العقارات' },
    image: '/property marketing design.jpg',
    alt: { en: 'Property Marketing Design', ar: 'تصميم تسويق عقاري' },
  },
  {
    id: 7,
    category: { en: 'Education', ar: 'التعليم' },
    image: '/educational platform ad.png',
    alt: { en: 'Educational Platform Ad', ar: 'إعلان منصة تعليمية' },
  },
  {
    id: 8,
    category: { en: 'Fitness', ar: 'اللياقة' },
    image: '/gym promotion campaign.png',
    alt: { en: 'Gym Promotion Campaign', ar: 'حملة ترويجية لصالة رياضية' },
  },
  {
    id: 9,
    category: { en: 'SEO', ar: 'تحسين محركات البحث' },
    image: '/advanced search engine seo.png',
    alt: { en: 'Advanced Search Engine SEO', ar: 'تحسين محركات البحث المتقدم' },
  },
  {
    id: 10,
    category: { en: 'Food & Beverage', ar: 'المطاعم' },
    image: '/farouj noman.png',
    alt: { en: 'Farouj Noman', ar: 'فروج نعمان' },
  },
  {
    id: 11,
    category: { en: 'Local SEO', ar: 'تحسين الخرائط' },
    image: '/googal business profile setup.png',
    alt: { en: 'Google Business Profile Setup', ar: 'إعداد ملف نشاطي التجاري على جوجل' },
  },
  {
    id: 12,
    category: { en: 'Local SEO', ar: 'تحسين الخرائط' },
    image: '/google business profile seo.png',
    alt: { en: 'Google Business Profile SEO', ar: 'تحسين محركات البحث لملف جوجل' },
  },
  {
    id: 13,
    category: { en: 'Digital Ads', ar: 'الإعلانات الرقمية' },
    image: '/google search & maps ads.png',
    alt: { en: 'Google Search & Maps Ads', ar: 'إعلانات بحث وخرائط جوجل' },
  },
  {
    id: 14,
    category: { en: 'Beauty', ar: 'التجميل' },
    image: '/hazem beauty.png',
    alt: { en: 'Hazem Beauty Logo', ar: 'شعار حازم للتجميل' },
  },
  {
    id: 15,
    category: { en: 'Travel', ar: 'السياحة والسفر' },
    image: '/oliva travel.png',
    alt: { en: 'Oliva Travel', ar: 'أوليفا للسياحة والسفر' },
  },
  {
    id: 16,
    category: { en: 'SEO', ar: 'تحسين محركات البحث' },
    image: '/seo keywords & research pack.png',
    alt: { en: 'SEO Keywords & Research Pack', ar: 'باقة الكلمات المفتاحية وأبحاث السيو' },
  },
  {
    id: 17,
    category: { en: 'Real Estate', ar: 'العقارات' },
    image: '/tamimi farm.jpg',
    alt: { en: 'Tamimi Farm', ar: 'مزرعة التميمي' },
  },
  {
    id: 18,
    category: { en: 'Automotive', ar: 'السيارات' },
    image: '/tesla drive.png',
    alt: { en: 'Tesla Drive', ar: 'قيادة تسلا' },
  },
  {
    id: 19,
    category: { en: 'SEO', ar: 'تحسين محركات البحث' },
    image: '/website seo optimization.png',
    alt: { en: 'Website SEO Optimization', ar: 'تحسين السيو للموقع الإلكتروني' },
  },
  {
    id: 20,
    category: { en: 'Partnerships', ar: 'الشراكات' },
    image: '/wolf lsk and ensany global partnership.png',
    alt: { en: 'Wolf LSK and Ensany Global Partnership', ar: 'شراكة Wolf LSK وإنساني العالمية' },
  }
];

const PortfolioFeedback = () => {
  const { lang } = useLanguage();

  // Duplicate the array for seamless infinite scroll
  const duplicatedPortfolio = [...portfolioData, ...portfolioData];

  // Split into two columns
  const column1 = duplicatedPortfolio.filter((_, index) => index % 2 === 0);
  const column2 = duplicatedPortfolio.filter((_, index) => index % 2 === 1);

  return (
    <section
      id="portfolio-feedback"
      className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen"
      aria-label={lang === 'ar' ? 'معرض الأعمال والتقييمات' : 'Portfolio and Feedback'}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-20 space-y-6"
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-red-500 font-semibold text-sm uppercase tracking-wider"
            >
              {lang === 'ar' ? 'شاركنا رأيك' : 'Share Your Feedback'}
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              {lang === 'ar'
                ? 'رأيك يهمنا — ساعدنا على التحسن'
                : 'Your Opinion Matters — Help Us Improve'}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              {lang === 'ar'
                ? 'نسعى لتقديم تصاميم عالية الجودة ومبنية على النتائج. رأيك يساعدنا على التحسن وخدمتك بشكل أفضل. تصفح أعمالنا وشاركنا رأيك الصادق.'
                : 'We aim to deliver high-quality, results-driven designs. Your opinion helps us improve and serve you better. Browse our work and share your honest feedback.'}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="https://wa.me/962782456543"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-2xl hover:shadow-red-500/50 transition-all duration-300"
                aria-label={lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
              >
                {lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] overflow-hidden rounded-2xl"
          >
            {/* Top Gradient Overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

            {/* Two Column Carousel */}
            <div className="flex gap-4 h-full">
              {/* Column 1 - Scrolls UP */}
              <motion.div
                className="flex-1 flex flex-col gap-4"
                animate={{ y: [0, -2000] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                whileHover={{ animationPlayState: 'paused' }}
              >
                {column1.map((item, index) => (
                  <motion.div
                    key={`col1-${index}`}
                    whileHover={{ scale: 1.05 }}
                    className="relative group flex-shrink-0"
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-2xl">
                      <img
                        src={item.image}
                        alt={lang === 'ar' ? item.alt.ar : item.alt.en}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Glassmorphism Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
                          {lang === 'ar' ? item.category.ar : item.category.en}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Column 2 - Scrolls DOWN */}
              <motion.div
                className="flex-1 flex flex-col gap-4"
                animate={{ y: [-2000, 0] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                whileHover={{ animationPlayState: 'paused' }}
              >
                {column2.map((item, index) => (
                  <motion.div
                    key={`col2-${index}`}
                    whileHover={{ scale: 1.05 }}
                    className="relative group flex-shrink-0"
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-2xl">
                      <img
                        src={item.image}
                        alt={lang === 'ar' ? item.alt.ar : item.alt.en}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Glassmorphism Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
                          {lang === 'ar' ? item.category.ar : item.category.en}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioFeedback;