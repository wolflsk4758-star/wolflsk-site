/**
 * WOLF LSK Agency - Google Ecosystem Section
 * Features: 3 glassmorphism cards, animated modals, SEO-rich content
 * Cards: Google Ads, Google Maps/Business Profile, SEO Dominance
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedText } from './ui';
import {
  X, ExternalLink, MessageCircle, CheckCircle2,
  TrendingUp, MapPin, Search, Target, BarChart3,
  Globe, Zap, Award
} from 'lucide-react';

// ============================================
// GOOGLE SERVICE DATA (SEO + UI)
// ============================================
interface GoogleService {
  id: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  description: string;
  descriptionAr: string;
  icon: React.ReactNode;
  gradient: string;
  glowColor: string;
  features: { en: string; ar: string }[];
  modalContent: {
    heading: { en: string; ar: string };
    intro: { en: string; ar: string };
    benefits: { en: string[]; ar: string[] };
    process: { en: string[]; ar: string[] };
    pricing: { en: string; ar: string };
    cta: { en: string; ar: string };
  };
}

const googleServices: GoogleService[] = [
  {
    id: 'google-ads',
    title: 'Google Ads Campaigns',
    titleAr: 'الحملات الإعلانية على جوجل',
    subtitle: 'Google Ads Mastery',
    subtitleAr: 'إتقان إعلانات جوجل',
    description: 'Dominate search results with precision-targeted campaigns that deliver maximum ROI.',
    descriptionAr: 'هيمنة على نتائج البحث بحملات مستهدفة بدقة تحقق أقصى عائد على الاستثمار.',
    icon: <TrendingUp size={32} />,
    gradient: 'from-blue-500/20 via-cyan-500/20 to-green-500/20',
    glowColor: 'rgba(66, 133, 244, 0.5)',
    features: [
      { en: 'Search Network Campaigns', ar: 'حملات شبكة البحث' },
      { en: 'Display & Shopping Ads', ar: 'إعلانات العرض والتسوق' },
      { en: 'YouTube Video Ads', ar: 'إعلانات فيديو يوتيوب' },
      { en: 'Performance Max', ar: 'أقصى أداء' },
    ],
    modalContent: {
      heading: {
        en: 'Google Ads - Dominate Search Results',
        ar: 'إعلانات جوجل - هيمنة على نتائج البحث',
      },
      intro: {
        en: 'Our Google Ads management service transforms your advertising budget into measurable results. We create precision-targeted campaigns across Search, Display, Shopping, and YouTube networks that put your business in front of customers at the exact moment they\'re searching for your services.',
        ar: 'خدمة إدارة إعلانات جوجل لدينا تحول ميزانيتك الإعلانية إلى نتائج قابلة للقياس. ننشئ حملات مستهدفة بدقة عبر شبكات البحث والعرض والتسوق ويوتيوب تضع عملك أمام العملاء في اللحظة التي يبحثون فيها عن خدماتك.',
      },
      benefits: {
        en: [
          'Appear at the top of Google search results for your target keywords',
          'Pay only when potential customers click on your ad',
          'Reach customers across all Google platforms (Search, YouTube, Gmail, Maps)',
          'Advanced audience targeting based on demographics, interests, and behavior',
          'Real-time performance tracking with detailed analytics',
          'Continuous optimization to maximize your return on ad spend (ROAS)',
        ],
        ar: [
          'الظهور في أعلى نتائج بحث جوجل على كلماتك المفتاحية المستهدفة',
          'الدفع فقط عندما ينقر العملاء المحتملون على إعلانك',
          'الوصول للعملاء عبر جميع منصات جوجل (البحث، يوتيوب، جي ميل، الخرائط)',
          'استهداف متقدم للجمهور بناءً على التركيبة السكانية والاهتمامات والسلوك',
          'تتبع الأداء الفوري مع تحليلات مفصلة',
          'تحسين مستمر لتعظيم العائد على إنفاق الإعلانات',
        ],
      },
      process: {
        en: [
          'Comprehensive market and competitor analysis',
          'Strategic keyword research and audience segmentation',
          'Campaign structure design with ad groups and extensions',
          'Compelling ad copy creation with A/B testing',
          'Landing page optimization for conversion',
          'Daily monitoring and bid management',
          'Weekly performance reports with actionable insights',
        ],
        ar: [
          'تحليل شامل للسوق والمنافسين',
          'بحث استراتيجي عن الكلمات المفتاحية وتقسيم الجمهور',
          'تصميم هيكل الحملة مع مجموعات الإعلانات والإضافات',
          'إنشاء نصوص إعلانية جذابة مع اختبارات A/B',
          'تحسين صفحات الهبوط للتحويل',
          'مراقبة يومية وإدارة العطاءات',
          'تقارير أداء أسبوعية مع رؤى قابلة للتنفيذ',
        ],
      },
      pricing: {
        en: 'Custom packages starting from $500/month. Management fee + ad spend. Free initial consultation and strategy session.',
        ar: 'باقات مخصصة تبدأ من 500 دولار شهرياً. رسوم الإدارة + إنفاق الإعلانات. استشارة مجانية أولية وجلسة استراتيجية.',
      },
      cta: {
        en: 'Launch Your Google Ads Campaign',
        ar: 'أطلق حملتك الإعلانية على جوجل',
      },
    },
  },
  {
    id: 'google-maps',
    title: 'Google Maps & Business Profile',
    titleAr: 'إنشاء ملف تجاري على خرائط جوجل',
    subtitle: 'Local SEO Dominance',
    subtitleAr: 'هيمنة البحث المحلي',
    description: 'Setup, verify, and optimize your Google Business Profile to dominate local search.',
    descriptionAr: 'إنشاء وتوثيق وتحسين ملف نشاطك التجاري على جوجل لهيمنة البحث المحلي.',
    icon: <MapPin size={32} />,
    gradient: 'from-red-500/20 via-yellow-500/20 to-green-500/20',
    glowColor: 'rgba(234, 67, 53, 0.5)',
    features: [
      { en: 'Business Profile Setup', ar: 'إعداد الملف التجاري' },
      { en: 'Maps Optimization', ar: 'تحسين الخرائط' },
      { en: 'Review Management', ar: 'إدارة التقييمات' },
      { en: 'Local SEO Boost', ar: 'تعزيز SEO المحلي' },
    ],
    modalContent: {
      heading: {
        en: 'Google Maps & Business Profile - Local Domination',
        ar: 'خرائط جوجل والملف التجاري - هيمنة محلية',
      },
      intro: {
        en: 'Capture local customers at the moment they\'re ready to buy. Our Google Business Profile optimization service ensures your business appears prominently in local search results and Google Maps, driving foot traffic and phone calls from nearby customers actively seeking your services.',
        ar: 'اجذب العملاء المحليين في اللحظة التي يكونون فيها مستعدين للشراء. خدمة تحسين ملف نشاطك التجاري على جوجل تضمن ظهور عملك بشكل بارز في نتائج البحث المحلية وخرائط جوجل، مما يدفع حركة المرور والمكالمات من العملاء القريبين الذين يبحثون بنشاط عن خدماتك.',
      },
      benefits: {
        en: [
          'Appear in the Google Maps "Local Pack" (top 3 results)',
          'Increase phone calls and direction requests by up to 300%',
          'Build trust with verified business information and customer reviews',
          'Showcase your products, services, and special offers directly on Maps',
          'Respond to customer reviews professionally to build reputation',
          'Track customer actions (calls, website visits, direction requests)',
          'Outrank local competitors in "near me" searches',
        ],
        ar: [
          'الظهور في "الحزمة المحلية" لخرائط جوجل (أعلى 3 نتائج)',
          'زيادة المكالمات وطلبات الاتجاهات بنسبة تصل إلى 300%',
          'بناء الثقة بمعلومات عمل موثقة وتقييمات العملاء',
          'عرض منتجاتك وخدماتك وعروضك الخاصة مباشرة على الخرائط',
          'الرد على تقييمات العملاء باحترافية لبناء السمعة',
          'تتبع إجراءات العملاء (المكالمات، زيارات الموقع، طلبات الاتجاهات)',
          'تفوق على المنافسين المحليين في عمليات البحث "بالقرب مني"',
        ],
      },
      process: {
        en: [
          'Business verification and profile setup on Google',
          'Complete optimization of all profile fields and categories',
          'Professional photography and virtual tour integration',
          'Review generation strategy and response protocols',
          'Local citation building and NAP consistency',
          'Regular posts, offers, and updates to maintain engagement',
          'Monthly performance reports with local ranking data',
        ],
        ar: [
          'توثيق العمل وإعداد الملف على جوجل',
          'تحسين شامل لجميع حقول الملف والفئات',
          'تصوير احترافي وتكامل الجولات الافتراضية',
          'استراتيجية توليد التقييمات وبروتوكولات الرد',
          'بناء الاقتباسات المحلية واتساق NAP',
          'منشورات وعروض وتحديثات منتظمة للحفاظ على التفاعل',
          'تقارير أداء شهرية مع بيانات الترتيب المحلي',
        ],
      },
      pricing: {
        en: 'Setup packages from $200. Monthly management from $150/month. Includes verification, optimization, and ongoing maintenance.',
        ar: 'باقات الإعداد من 200 دولار. الإدارة الشهرية من 150 دولار/شهرياً. تشمل التوثيق والتحسين والصيانة المستمرة.',
      },
      cta: {
        en: 'Setup Your Google Business Profile',
        ar: 'أنشئ ملف نشاطك التجاري على جوجل',
      },
    },
  },
  {
    id: 'seo-dominance',
    title: 'SEO Dominance',
    titleAr: 'تصدر نتائج البحث SEO',
    subtitle: 'Organic Search Mastery',
    subtitleAr: 'إتقان البحث العضوي',
    description: 'Rank #1 on Google with our comprehensive SEO strategies that drive organic traffic.',
    descriptionAr: 'احتل المركز الأول في جوجل مع استراتيجيات SEO الشاملة التي تدفع حركة المرور العضوية.',
    icon: <Search size={32} />,
    gradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
    glowColor: 'rgba(16, 185, 129, 0.5)',
    features: [
      { en: 'Technical SEO Audit', ar: 'تدقيق SEO تقني' },
      { en: 'On-Page Optimization', ar: 'تحسين داخلي' },
      { en: 'Link Building', ar: 'بناء الروابط' },
      { en: 'Content Strategy', ar: 'استراتيجية المحتوى' },
    ],
    modalContent: {
      heading: {
        en: 'SEO Dominance - Rank #1 on Google',
        ar: 'هيمنة SEO - احتل المركز الأول على جوجل',
      },
      intro: {
        en: 'Achieve sustainable, long-term growth with our comprehensive SEO services. We combine technical excellence, strategic content creation, and authoritative link building to position your website as the #1 result for your most valuable keywords. Our white-hat SEO approach delivers results that compound over time.',
        ar: 'حقق نمواً مستداماً طويل الأمد مع خدمات SEO الشاملة لدينا. نجمع بين التميز التقني وإنشاء المحتوى الاستراتيجي وبناء الروابط الموثوقة لوضع موقعك في المرتبة الأولى لأكثر كلماتك المفتاحية قيمة. نهجنا في SEO ذو القبعة البيضاء يحقق نتائج تتضاعف مع مرور الوقت.',
      },
      benefits: {
        en: [
          'Sustainable organic traffic growth without ongoing ad spend',
          'Higher conversion rates from targeted, intent-driven traffic',
          'Build brand authority and trust with top search rankings',
          'Outrank competitors who rely solely on paid advertising',
          'Improve user experience and site performance',
          'Long-term ROI that compounds month after month',
          'Comprehensive reporting with keyword ranking tracking',
        ],
        ar: [
          'نمو مستدام في حركة المرور العضوية دون إنفاق إعلاني مستمر',
          'معدلات تحويل أعلى من حركة المرور المستهدفة المبنية على النية',
          'بناء سلطة العلامة التجارية والثقة مع أعلى ترتيبات البحث',
          'تفوق على المنافسين الذين يعتمدون فقط على الإعلانات المدفوعة',
          'تحسين تجربة المستخدم وأداء الموقع',
          'عائد استثمار طويل الأمد يتضاعف شهراً بعد شهر',
          'تقارير شاملة مع تتبع ترتيب الكلمات المفتاحية',
        ],
      },
      process: {
        en: [
          'Comprehensive technical SEO audit and site analysis',
          'In-depth keyword research and competitive analysis',
          'On-page optimization (titles, meta, headers, content)',
          'Technical improvements (speed, mobile, Core Web Vitals)',
          'Content strategy and creation targeting search intent',
          'Strategic link building from authoritative sources',
          'Monthly reporting with ranking improvements and traffic growth',
        ],
        ar: [
          'تدقيق SEO تقني شامل وتحليل الموقع',
          'بحث متعمق عن الكلمات المفتاحية وتحليل المنافسين',
          'تحسين داخلي (العناوين، الوصف، الرؤوس، المحتوى)',
          'تحسينات تقنية (السرعة، الجوال، Core Web Vitals)',
          'استراتيجية المحتوى وإنشائه لاستهداف نية البحث',
          'بناء استراتيجي للروابط من مصادر موثوقة',
          'تقارير شهرية مع تحسينات الترتيب ونمو حركة المرور',
        ],
      },
      pricing: {
        en: 'SEO packages from $800/month. Includes full audit, ongoing optimization, content creation, and link building. Results typically visible within 3-6 months.',
        ar: 'باقات SEO من 800 دولار شهرياً. تشمل التدقيق الكامل والتحسين المستمر وإنشاء المحتوى وبناء الروابط. النتائج عادة تظهر خلال 3-6 أشهر.',
      },
      cta: {
        en: 'Dominate Google Search Results',
        ar: 'سيطر على نتائج بحث جوجل',
      },
    },
  },
];

// ============================================
// MODAL COMPONENT
// ============================================
function GoogleServiceModal({
  service,
  onClose,
}: {
  service: GoogleService;
  onClose: () => void;
}) {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const content = service.modalContent;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/85 backdrop-blur-xl"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.97), rgba(25, 25, 25, 0.97))',
          backdropFilter: 'blur(40px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: `0 0 100px ${service.glowColor}, inset 0 0 100px rgba(0, 0, 0, 0.5)`,
        }}
      >
        {/* Animated top border */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${service.glowColor}, transparent)`,
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Close Button */}
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-500/50 transition-all duration-300 z-10"
          aria-label="Close modal"
        >
          <X size={20} />
        </motion.button>

        {/* Modal Header */}
        <div className="p-8 md:p-12 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                style={{
                  background: `linear-gradient(135deg, ${service.glowColor}, transparent)`,
                  border: `1px solid ${service.glowColor}`,
                }}
              >
                {service.icon}
              </div>
              <div>
                <h2
                  id="modal-title"
                  className="text-2xl md:text-3xl font-black text-white"
                >
                  {lang === 'ar' ? content.heading.ar : content.heading.en}
                </h2>
                <p className="text-amber-400 text-sm font-medium">
                  {lang === 'ar' ? service.subtitleAr : service.subtitle}
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {lang === 'ar' ? content.intro.ar : content.intro.en}
            </p>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="p-8 md:p-12 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="text-amber-400" size={24} />
              {lang === 'ar' ? 'الفوائد الرئيسية' : 'Key Benefits'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(lang === 'ar' ? content.benefits.ar : content.benefits.en).map(
                (benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-green-400 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Process Section */}
        <div className="p-8 md:p-12 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BarChart3 className="text-amber-400" size={24} />
              {lang === 'ar' ? 'منهجية العمل' : 'Our Process'}
            </h3>
            <div className="space-y-3">
              {(lang === 'ar' ? content.process.ar : content.process.en).map(
                (step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-all duration-300"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${service.glowColor}, ${service.glowColor}80)`,
                      }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Pricing & CTA */}
        <div className="p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 mb-8">
              <h3 className="text-lg font-bold text-amber-400 mb-2">
                {lang === 'ar' ? 'الاستثمار' : 'Investment'}
              </h3>
              <p className="text-gray-300">
                {lang === 'ar' ? content.pricing.ar : content.pricing.en}
              </p>
            </div>

            <motion.a
              href="https://wa.me/962782456543"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${service.glowColor}` }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full text-lg shadow-xl"
            >
              <MessageCircle size={20} />
              {lang === 'ar' ? content.cta.ar : content.cta.en}
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// GOOGLE SERVICES SECTION
// ============================================
export default function GoogleServices() {
  const { lang } = useLanguage();
  const [selectedService, setSelectedService] = useState<GoogleService | null>(null);

  return (
    <section
      id="google-services"
      className="relative py-32 overflow-hidden"
      aria-label="Google Ecosystem Services"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block"
          >
            {lang === 'ar' ? 'خدمات جوجل المتكاملة' : 'Google Ecosystem'}
          </motion.span>
          <AnimatedText
            text={
              lang === 'ar'
                ? 'هيمنة على منظومة جوجل'
                : 'Dominate the Google Ecosystem'
            }
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
              ? 'اضغط على أي خدمة لاكتشاف التفاصيل الكاملة'
              : 'Click any service to discover full details'}
          </motion.p>
        </div>

        {/* Services Grid - 3 Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {googleServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => setSelectedService(service)}
                className="relative group cursor-pointer h-full"
                role="button"
                tabIndex={0}
                aria-label={`${lang === 'ar' ? service.titleAr : service.title} - ${lang === 'ar' ? 'اضغط للتفاصيل' : 'Click for details'}`}
              >
                {/* Glassmorphism Card */}
                <div
                  className="relative p-8 rounded-2xl h-full overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                  />

                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: `inset 0 0 40px ${service.glowColor}40, 0 0 40px ${service.glowColor}40`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white"
                      style={{
                        background: `linear-gradient(135deg, ${service.glowColor}40, transparent)`,
                        border: `1px solid ${service.glowColor}60`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-amber-400 transition-colors duration-300">
                      {lang === 'ar' ? service.titleAr : service.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-amber-400/80 text-sm font-medium mb-4">
                      {lang === 'ar' ? service.subtitleAr : service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {lang === 'ar' ? service.descriptionAr : service.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-amber-400 flex-shrink-0"
                          />
                          <span>{lang === 'ar' ? feature.ar : feature.en}</span>
                        </div>
                      ))}
                    </div>

                    {/* Explore CTA */}
                    <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
                      <span>{lang === 'ar' ? 'اكتشف المزيد' : 'Explore Details'}</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ExternalLink size={14} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* SEO: Hidden text for crawlers */}
        <div className="sr-only">
          <h2>Google Services - Wolf LSK Agency</h2>
          {googleServices.map((service) => (
            <article key={service.id}>
              <h3>{service.title} - {service.titleAr}</h3>
              <p>{service.modalContent.intro.en}</p>
              <p>{service.modalContent.intro.ar}</p>
              <h4>Benefits:</h4>
              <ul>
                {service.modalContent.benefits.en.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <h4>الفوائد:</h4>
              <ul>
                {service.modalContent.benefits.ar.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <h4>Process:</h4>
              <ol>
                {service.modalContent.process.en.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ol>
              <p>Pricing: {service.modalContent.pricing.en}</p>
              <p>الأسعار: {service.modalContent.pricing.ar}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <GoogleServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
