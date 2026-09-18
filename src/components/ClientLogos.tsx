/**
 * Client Logos Carousel Component
 * Features: Infinite horizontal scroll, gradient fade masks, SEO optimized
 */

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface ClientLogo {
  id: number;
  name: string;
  logo: string;
  alt: { en: string; ar: string };
  needsInversion?: boolean; // خاصية جديدة: إذا كانت true بتحول اللوجو الغامق لأبيض
}

// Easy to edit: Just update the logo file names here
const clientLogosData: ClientLogo[] = [
  {
    id: 1,
    name: 'Farouj Noman',
    logo: '/farouj noman.jpg',
    alt: {
      en: 'Farouj Noman - Restaurant Digital Marketing Client Logo - WOLF LSK Agency',
      ar: 'فروج نعمان - شعار عميل التسويق الرقمي للمطاعم - وكالة وولف LSK',
    },
  },
  {
    id: 2,
    name: 'Hazem Beauty',
    logo: '/hazem beauty.webp',
    alt: {
      en: 'Hazem Beauty - Salon Branding Client Logo - WOLF LSK Agency',
      ar: 'حازم بيوتي - شعار عميل تصميم صالون التجميل - وكالة وولف LSK',
    },
    // إذا كان لوجو حازم بيوتي غامق ومش واضح، خليها true
    needsInversion: false, 
  },
  {
    id: 3,
    name: 'Tamimi Farm',
    logo: '/tamimi farm.jpeg',
    alt: {
      en: 'Tamimi Farm - Agricultural Marketing Client Logo - WOLF LSK Agency',
      ar: 'مزرعة التميمي - شعار عميل التسويق الزراعي - وكالة وولف LSK',
    },
  },
  {
    id: 4,
    name: 'Oliva Travel',
    logo: '/oliva travel.jpg',
    alt: {
      en: 'Oliva Travel - Tourism Marketing Client Logo - WOLF LSK Agency',
      ar: 'أوليفا للسفر - شعار عميل التسويق السياحي - وكالة وولف LSK',
    },
  },
  {
    id: 5,
    name: 'Tesla Drive',
    logo: '/tesla drive.jpeg',
    alt: {
      en: 'Tesla Drive - Automotive Marketing Client Logo - WOLF LSK Agency',
      ar: 'تيسلا درايف - شعار عميل التسويق للسيارات - وكالة وولف LSK',
    },
    // تفعيل القلب للأبيض لأن اللوجو بالصورة كان أسود ومختفي
    needsInversion: true, 
  },
];

const ClientLogos = () => {
  const { lang } = useLanguage();

  // Duplicate the array for seamless infinite loop
  const duplicatedLogos = [...clientLogosData, ...clientLogosData];

  return (
    <aside
      className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      aria-label={lang === 'ar' ? 'شركاء النجاح' : 'Our Success Partners'}
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            {lang === 'ar' ? 'شركاء النجاح' : 'Our Success Partners'}
          </h2>
          <p className="text-xl text-gray-300">
            {lang === 'ar'
              ? 'عملاؤنا السابقون الذين ساعدناهم على النمو'
              : 'Previous clients we helped grow'}
          </p>
        </motion.div>

        {/* Infinite Carousel Container */}
        <div className="relative">
          {/* Left Gradient Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

          {/* Right Gradient Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling Logos */}
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: 'fit-content' }}
          >
            {duplicatedLogos.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                whileHover={{ scale: 1.1 }}
                // تم تعديل الـ padding من p-4 إلى p-2 لإعطاء مساحة أكبر للصورة
                className="flex-shrink-0 w-48 h-24 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300 flex items-center justify-center p-2"
              >
                <img
                  src={client.logo}
                  alt={lang === 'ar' ? client.alt.ar : client.alt.en}
                  // تم استخدام w-full h-full مع شرط inversion للوجوهات الغامقة
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    client.needsInversion
                      ? 'brightness-0 invert opacity-80 hover:opacity-100'
                      : 'grayscale hover:grayscale-0'
                  }`}
                  loading="lazy"
                  width={192}
                  height={96}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            {lang === 'ar'
              ? 'انضم إلى قائمة عملائنا الناجحين اليوم'
              : 'Join our list of successful clients today'}
          </p>
          <motion.a
            href="https://wa.me/962782456543"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
          >
            {lang === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
          </motion.a>
        </motion.div>
      </div>
    </aside>
  );
};

export default ClientLogos;