/**
 * WOLF LSK Agency - Premium Services Section with Glassmorphism Modals
 * Features: 6 main services, click-to-open modals, sub-service grids with WhatsApp CTAs
 * SEO-optimized: All text rendered in DOM for crawlers
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TiltCard, AnimatedText } from './ui';
import { X, ExternalLink, MessageCircle, ChevronRight } from 'lucide-react';

// ============================================
// EXACT DATA STRUCTURE (SEO + UI)
// ============================================
interface SubService {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
}

interface MainService {
  id: number;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  gradient: string;
  glowColor: string;
  subServices: SubService[];
}

const servicesData: MainService[] = [
  {
    id: 0,
    title: 'Paid Media Dominance',
    titleAr: 'إدارة الحملات الإعلانية',
    subtitle: 'Paid Media Dominance',
    subtitleAr: 'إدارة الحملات الإعلانية',
    description: 'Strategic advertising campaigns across all major platforms with precision targeting for maximum ROAS.',
    descriptionAr: 'حملات إعلانية استراتيجية عبر جميع المنصات الرئيسية باستهداف دقيق لأعلى عائد على الاستثمار.',
    icon: 'megaphone',
    gradient: 'from-blue-600/20 via-purple-600/20 to-pink-600/20',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    subServices: [
      {
        name: 'Meta Ads (Facebook & Instagram)',
        nameAr: 'إعلانات ميتا (Meta)',
        description: 'Targeted campaigns across Facebook and Instagram with precision audience segmentation and retargeting.',
        descriptionAr: 'حملات مستهدفة عبر فيسبوك وانستغرام مع تقسيم دقيق للجمهور وإعادة الاستهداف.',
        icon: 'meta',
      },
      {
        name: 'Snapchat Ads',
        nameAr: 'إعلانات سناب شات',
        description: 'Captivating video ads reaching the GCC and local audience with high engagement rates.',
        descriptionAr: 'إعلانات فيديو جذابة تصل للجمهور الخليجي والمحلي بفعالية عالية.',
        icon: 'snapchat',
      },
      {
        name: 'TikTok Ads',
        nameAr: 'إعلانات تيك توك',
        description: 'Trend-driven campaigns leveraging viral content for maximum reach and engagement.',
        descriptionAr: 'حملات مبنية على الترندات للوصول السريع لملايين المستخدمين.',
        icon: 'tiktok',
      },
      {
        name: 'LinkedIn Ads (B2B)',
        nameAr: 'إعلانات لينكد إن (B2B)',
        description: 'Targeting companies, managers, and decision makers to enhance partnerships and B2B sales.',
        descriptionAr: 'استهداف الشركات والمدراء وصناع القرار لتعزيز الشراكات وبيع الخدمات الموجهة للأعمال.',
        icon: 'linkedin',
      },
      {
        name: 'X (Twitter) Ads',
        nameAr: 'X (Twitter) Ads',
        description: 'Leveraging trending events and reaching an elite, engaged audience through X platform campaigns.',
        descriptionAr: 'الاستفادة من الأحداث الرائجة والوصول لجمهور نخبوي ومتفاعل من خلال الحملات الإعلانية على منصة X.',
        icon: 'twitter',
      },
      {
        name: 'App Promotion (App Ads)',
        nameAr: 'ترويج التطبيقات (App Ads)',
        description: 'Specialized campaigns to increase app installs across all networks at the lowest cost per install.',
        descriptionAr: 'حملات مخصصة لزيادة تحميلات تطبيقك عبر جميع الشبكات بأقل تكلفة للتحميل الواحد.',
        icon: 'app',
      },
    ],
  },
  {
    id: 1,
    title: 'Search Engine Optimization',
    titleAr: 'تصدر محركات البحث (SEO)',
    subtitle: 'Search Engine Dominance',
    subtitleAr: 'هيمنة محركات البحث',
    description: 'Rank your website at the top using the latest local and global SEO techniques.',
    descriptionAr: 'نرفع ترتيب موقعك في نتائج البحث باستخدام أحدث تقنيات تحسين محركات البحث المحلية والعالمية.',
    icon: 'search',
    gradient: 'from-green-600/20 via-emerald-600/20 to-teal-600/20',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    subServices: [
      {
        name: 'On-Page SEO',
        nameAr: 'SEO الداخلي',
        description: 'Optimizing page structure, titles, descriptions, and internal links to perfectly match search algorithms.',
        descriptionAr: 'تحسين بنية الصفحات، العناوين، الأوصاف، والروابط الداخلية لتتوافق تماماً مع خوارزميات محركات البحث.',
        icon: 'page',
      },
      {
        name: 'Off-Page SEO',
        nameAr: 'SEO الخارجي',
        description: 'Building a strong backlink network from authoritative sites to boost Domain Authority and credibility.',
        descriptionAr: 'بناء شبكة روابط خلفية قوية من مواقع موثوقة لرفع الدومين أثورتي وزيادة مصداقية موقعك.',
        icon: 'link',
      },
      {
        name: 'Local SEO',
        nameAr: 'Local SEO',
        description: 'Dominating local search results by connecting your site with Google Maps and targeting your city.',
        descriptionAr: 'تصدر نتائج البحث المحلية عبر ربط الموقع بخرائط جوجل وتهيئته لاستهداف مدينتك.',
        icon: 'map',
      },
      {
        name: 'Technical SEO',
        nameAr: 'Technical SEO',
        description: 'Fixing crawl errors, building Sitemaps, and ensuring Google spiders can read your site without obstacles.',
        descriptionAr: 'إصلاح أخطاء الزحف، بناء ملفات Sitemap وضمان قراءة عناكب جوجل لموقعك بدون عوائق.',
        icon: 'code',
      },
      {
        name: 'Keyword Research',
        nameAr: 'Keyword Research',
        description: 'Analyzing high-search, low-competition keywords to bring targeted traffic searching for your services.',
        descriptionAr: 'تحليل الكلمات المفتاحية ذات البحث العالي والمنافسة لجلب زيارات مستهدفة تبحث عن خدماتك.',
        icon: 'key',
      },
      {
        name: 'Content Optimization',
        nameAr: 'Content Optimization',
        description: 'Optimizing site content to be rich, useful, and aligned with search intent for better rankings.',
        descriptionAr: 'تحسين محتوى الموقع ليكون غنياً ومفيداً ومتوافقاً مع نية البحث.',
        icon: 'content',
      },
    ],
  },
  {
    id: 2,
    title: 'Google Ecosystem',
    titleAr: 'إدارة ملفات جوجل',
    subtitle: 'Google Ecosystem',
    subtitleAr: 'خدمات جوجل المتكاملة',
    description: 'Complete Google solutions from Maps dominance to Search Console management.',
    descriptionAr: 'حلول جوجل متكاملة من الهيمنة على الخرائط إلى إدارة Search Console.',
    icon: 'google',
    gradient: 'from-blue-600/20 via-red-600/20 to-yellow-600/20',
    glowColor: 'rgba(66, 133, 244, 0.4)',
    subServices: [
      {
        name: 'Google Maps Setup',
        nameAr: 'إنشاء خريطة على جوجل ماب',
        description: 'Setting up and optimizing your business profile on Google Maps to dominate local search.',
        descriptionAr: 'إنشاء وتحسين ملف نشاطك التجاري على خرائط جوجل ليتصدر نتائج البحث المحلية.',
        icon: 'maps',
      },
      {
        name: 'Google Ads',
        nameAr: 'Google Ads',
        description: 'Search, Display, and YouTube campaigns with precision targeting ensuring you appear first.',
        descriptionAr: 'حملات شبكة البحث، العرض، واليوتيوب باستهداف دقيق يضمن ظهورك في النتيجة الأولى.',
        icon: 'ads',
      },
      {
        name: 'Google Merchant Center',
        nameAr: 'Google Merchant Center',
        description: 'Listing your products directly in the Shopping tab to increase sales with prices and images.',
        descriptionAr: 'إدراج منتجاتك مباشرة في تبويب التسوق لزيادة المبيعات وعرض الأسعار والصور.',
        icon: 'shopping',
      },
      {
        name: 'Google Business Profile Management',
        nameAr: 'إدارة الملف التجاري على Google',
        description: 'Updating business profile, responding to reviews, and publishing offers to build customer trust.',
        descriptionAr: 'تحديث الملف التجاري، الرد على التقييمات، ونشر العروض لزيادة التفاعل وبناء ثقة العملاء.',
        icon: 'business',
      },
      {
        name: 'Google Tag Manager',
        nameAr: 'Google Tag Manager',
        description: 'Managing all tracking codes (pixels) from one place without needing a developer.',
        descriptionAr: 'إدارة جميع أكواد التتبع (البكسل) في موقعك من مكان واحد دون الحاجة لمبرمج.',
        icon: 'tag',
      },
      {
        name: 'Google Search Console',
        nameAr: 'Google Search Console',
        description: 'Monitoring site health in search results, indexing pages, and fixing technical issues.',
        descriptionAr: 'مراقبة صحة موقعك في نتائج البحث، أرشفة الصفحات، وحل أي مشاكل تقنية.',
        icon: 'console',
      },
    ],
  },
  {
    id: 3,
    title: 'Social Media Management',
    titleAr: 'إدارة السوشيال ميديا',
    subtitle: 'Social Media Management',
    subtitleAr: 'إدارة التواصل الاجتماعي',
    description: 'Building a strong digital presence through professional management of all social platforms.',
    descriptionAr: 'نبني حضورًا رقميًا قويًا لعلامتك التجارية من خلال إدارة احترافية لجميع منصات التواصل.',
    icon: 'social',
    gradient: 'from-pink-600/20 via-rose-600/20 to-orange-600/20',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    subServices: [
      {
        name: 'Account Management',
        nameAr: 'إدارة الحسابات',
        description: 'Professional management of Facebook, Instagram, TikTok, LinkedIn, X, and Snapchat pages.',
        descriptionAr: 'إدارة صفحات Facebook، Instagram، TikTok، LinkedIn، X، Snapchat باحترافية كاملة.',
        icon: 'accounts',
      },
      {
        name: 'Content Creation',
        nameAr: 'صناعة المحتوى',
        description: 'Designing posts, reels, stories, videos, and visual identity aligned with your brand.',
        descriptionAr: 'تصميم المنشورات، الريلز، الستوري، الفيديوهات، والهوية البصرية المتوافقة مع علامتك.',
        icon: 'content',
      },
      {
        name: 'Performance Analytics',
        nameAr: 'تحليل الأداء',
        description: 'Analyzing statistics, algorithms, measuring performance, and continuously improving results.',
        descriptionAr: 'تحليل الإحصائيات والخوارزميات وقياس الأداء وتحسين النتائج بشكل مستمر.',
        icon: 'analytics',
      },
      {
        name: 'Advertising Campaigns',
        nameAr: 'الحملات الإعلانية',
        description: 'Managing Meta, TikTok, LinkedIn campaigns to achieve the highest return on investment.',
        descriptionAr: 'إدارة حملات Meta وTikTok وLinkedIn وغيرها لتحقيق أعلى عائد على الاستثمار.',
        icon: 'campaigns',
      },
      {
        name: 'Community Management',
        nameAr: 'إدارة المجتمع',
        description: 'Responding to messages and comments, building strong relationships and trust with followers.',
        descriptionAr: 'الرد على الرسائل والتعليقات وبناء علاقة قوية وثقة مع العملاء والمتابعين.',
        icon: 'community',
      },
      {
        name: 'Monthly Reports',
        nameAr: 'التقارير الشهرية',
        description: 'Professional reports showing growth, reach, engagement, and achieved sales.',
        descriptionAr: 'تقارير احترافية توضح النمو والوصول والتفاعل والمبيعات المحققة.',
        icon: 'report',
      },
    ],
  },
  {
    id: 4,
    title: 'Premium Web Development',
    titleAr: 'برمجة المواقع المتقدمة',
    subtitle: 'Premium Web Development',
    subtitleAr: 'تطوير المواقع المتميز',
    description: 'Designing and developing professional, ultra-fast websites optimized for SEO and all devices.',
    descriptionAr: 'نصمم ونطور مواقع إلكترونية احترافية وسريعة ومتوافقة مع جميع الأجهزة ومحركات البحث.',
    icon: 'code',
    gradient: 'from-amber-600/20 via-orange-600/20 to-red-600/20',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    subServices: [
      {
        name: 'Corporate Websites',
        nameAr: 'مواقع الشركات',
        description: 'Professional websites for companies and institutions reflecting visual identity and building trust.',
        descriptionAr: 'مواقع احترافية للشركات والمؤسسات تعكس الهوية البصرية وتبني الثقة.',
        icon: 'corporate',
      },
      {
        name: 'E-commerce Stores',
        nameAr: 'المتاجر الإلكترونية',
        description: 'Complete stores with electronic payment, product management, and shipping integration.',
        descriptionAr: 'متاجر متكاملة مع الدفع الإلكتروني وإدارة المنتجات والشحن.',
        icon: 'ecommerce',
      },
      {
        name: 'Custom Systems',
        nameAr: 'الأنظمة الخاصة',
        description: 'Programming CRM, ERP systems, and custom dashboards according to your requirements.',
        descriptionAr: 'برمجة أنظمة CRM، ERP، ولوحات تحكم مخصصة حسب الطلب.',
        icon: 'system',
      },
      {
        name: 'Web Applications',
        nameAr: 'Web Apps',
        description: 'Advanced web applications that work with speed, security, and flexibility.',
        descriptionAr: 'تطبيقات ويب متقدمة تعمل بسرعة وأمان ومرونة.',
        icon: 'webapp',
      },
      {
        name: 'Speed & SEO Optimization',
        nameAr: 'تحسين السرعة وSEO',
        description: 'Programmatically optimizing site speed and preparing it to rank in search results.',
        descriptionAr: 'تحسين سرعة الموقع برمجياً وتجهيزه ليتصدر نتائج البحث.',
        icon: 'speed',
      },
      {
        name: 'Security & Maintenance',
        nameAr: 'الحماية والصيانة',
        description: 'Backup, protection against vulnerabilities, updates, and periodic maintenance.',
        descriptionAr: 'نسخ احتياطي، حماية ضد الثغرات، تحديثات وصيانة دورية.',
        icon: 'security',
      },
    ],
  },
  {
    id: 5,
    title: 'Digital Strategy Consulting',
    titleAr: 'الاستشارات الاستراتيجية',
    subtitle: 'Digital Strategy Consulting',
    subtitleAr: 'استشارات النمو الرقمي',
    description: 'Building a clear growth plan based on market analysis and competitor research.',
    descriptionAr: 'نساعدك على بناء خطة نمو واضحة تعتمد على تحليل السوق والمنافسين.',
    icon: 'strategy',
    gradient: 'from-indigo-600/20 via-violet-600/20 to-purple-600/20',
    glowColor: 'rgba(99, 102, 241, 0.4)',
    subServices: [
      {
        name: 'Business Analysis',
        nameAr: 'تحليل النشاط التجاري',
        description: 'Comprehensive examination of your business model and current brand evaluation in the market.',
        descriptionAr: 'فحص شامل لنموذج عملك وتقييم الوضع الحالي للعلامة التجارية في السوق.',
        icon: 'analysis',
      },
      {
        name: 'Competitor Research',
        nameAr: 'دراسة المنافسين',
        description: 'Monitoring and analyzing direct competitors\' marketing strategies to exploit market gaps.',
        descriptionAr: 'مراقبة وتحليل استراتيجيات التسويق لدى منافسيك المباشرين لاستغلال الثغرات في السوق.',
        icon: 'competitor',
      },
      {
        name: 'Integrated Marketing Plan',
        nameAr: 'خطة تسويقية متكاملة',
        description: 'Drawing a clear, measurable roadmap that defines goals and allocates budgets precisely.',
        descriptionAr: 'رسم خارطة طريق واضحة وقابلة للقياس تحدد الأهداف وتوزع الميزانيات بدقة.',
        icon: 'plan',
      },
      {
        name: 'Sales Growth Strategies',
        nameAr: 'استراتيجيات زيادة المبيعات',
        description: 'Developing sales funnels and improving customer experience to increase conversion rates.',
        descriptionAr: 'تطوير مسارات البيع وتحسين تجربة العميل لرفع نسب التحويل.',
        icon: 'sales',
      },
      {
        name: 'Digital Transformation & Automation',
        nameAr: 'التحول الرقمي والأتمتة',
        description: 'Integrating AI tools and process automation to save time and effort.',
        descriptionAr: 'إدخال أدوات الذكاء الاصطناعي وأتمتة العمليات لتوفير الوقت والجهد.',
        icon: 'automation',
      },
      {
        name: 'Performance Monitoring & Development',
        nameAr: 'متابعة وتطوير الأداء',
        description: 'Periodic consulting sessions to evaluate results and make strategic adjustments.',
        descriptionAr: 'جلسات استشارية دورية لتقييم النتائج وإجراء التعديلات الاستراتيجية.',
        icon: 'monitor',
      },
    ],
  },
];

// ============================================
// SERVICE ICON COMPONENT
// ============================================
function ServiceIcon({ type, className = '' }: { type: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    megaphone: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 11l18-5v12L3 13v-2z" />
        <path d="M11.6 16.8a3 3 0 11-5.8-1.6" />
      </svg>
    ),
    search: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    google: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
    social: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    code: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
      </svg>
    ),
    strategy: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  };

  return <>{icons[type] || icons.megaphone}</>;
}

// ============================================
// SUB-SERVICE ICON COMPONENT
// ============================================
function SubServiceIcon({ type }: { type: string }) {
  const iconClass = "w-6 h-6";
  
  switch (type) {
    case 'meta':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      );
    case 'snapchat':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.072 1.125-.154 2.393-.325 3.559-.136.93-.338 1.726-.6 2.38-.264.654-.597 1.008-.898 1.215a3.02 3.02 0 01-.44.248c.05.39.124.803.258 1.18.14.39.352.765.66 1.035.39.34.89.508 1.47.63.36.076.75.12 1.14.18.57.09 1.02.24 1.35.51.45.36.6.87.57 1.38-.03.51-.27 1.02-.72 1.38-.36.3-.84.48-1.38.6-.54.12-1.14.18-1.74.24a12.9 12.9 0 01-1.62.06c-.54 0-1.08-.03-1.56-.06a8.1 8.1 0 01-.66-.06 3.9 3.9 0 00-.48-.03c-.24 0-.48.06-.66.18-.36.24-.6.6-.84.96-.24.36-.54.72-.96.96-.42.24-.96.3-1.56.3-.6 0-1.14-.06-1.56-.3-.42-.24-.72-.6-.96-.96-.24-.36-.48-.72-.84-.96a1.2 1.2 0 00-.66-.18c-.18 0-.36.03-.48.03-.21.03-.42.06-.66.06a12.9 12.9 0 01-1.62.06c-.54 0-1.08-.03-1.56-.06a16.4 16.4 0 01-1.74-.24c-.54-.12-1.02-.3-1.38-.6-.45-.36-.69-.87-.72-1.38-.03-.51.12-1.02.57-1.38.33-.27.78-.42 1.35-.51.39-.06.78-.105 1.14-.18.57-.12 1.08-.288 1.47-.63.3-.27.51-.645.66-1.035.134-.377.208-.79.258-1.18a3.02 3.02 0 01-.44-.248c-.3-.207-.633-.561-.898-1.215-.262-.654-.464-1.45-.6-2.38-.171-1.166-.253-2.434-.325-3.559l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.86 1.069 11.216.793 12.206.793z"/>
        </svg>
      );
    case 'tiktok':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.85z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'app':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      );
    default:
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      );
  }
}

// ============================================
// GLASSMORPHISM MODAL COMPONENT
// ============================================
function ServiceModal({ service, onClose }: { service: MainService; onClose: () => void }) {
  const { lang } = useLanguage();

  // Close on Escape
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.95), rgba(30, 30, 30, 0.95))',
          backdropFilter: 'blur(40px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: `0 0 80px ${service.glowColor}, inset 0 0 80px rgba(0, 0, 0, 0.5)`,
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
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                style={{
                  background: `linear-gradient(135deg, ${service.glowColor}, transparent)`,
                  border: `1px solid ${service.glowColor}`,
                }}
              >
                <ServiceIcon type={service.icon} className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white">
                  {lang === 'ar' ? service.titleAr : service.title}
                </h2>
                <p className="text-amber-400 text-sm font-medium">
                  {lang === 'ar' ? service.subtitleAr : service.subtitle}
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-lg mt-4">
              {lang === 'ar' ? service.descriptionAr : service.description}
            </p>
          </motion.div>
        </div>

        {/* Sub-Services Grid */}
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.08,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="group relative p-6 rounded-2xl overflow-hidden cursor-hover"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.glowColor}20 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div className="relative flex items-start gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{
                      background: `${service.glowColor}30`,
                      border: `1px solid ${service.glowColor}50`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <SubServiceIcon type={sub.icon} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-base mb-1 group-hover:text-amber-400 transition-colors">
                      {lang === 'ar' ? sub.nameAr : sub.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="relative text-gray-400 text-sm leading-relaxed mb-4">
                  {lang === 'ar' ? sub.descriptionAr : sub.description}
                </p>

                {/* WhatsApp CTA */}
                <motion.a
                  href={`https://wa.me/962782456543?text=${encodeURIComponent(
                    lang === 'ar'
                      ? `أريد الاستفسار عن خدمة: ${sub.nameAr}`
                      : `I want to inquire about: ${sub.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  <span>{lang === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp'}</span>
                </motion.a>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${service.glowColor}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-8 md:p-12 border-t border-white/10 text-center">
          <motion.a
            href="https://wa.me/962782456543"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${service.glowColor}` }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full text-lg shadow-xl"
          >
            <ExternalLink size={20} />
            {lang === 'ar' ? 'احجز هذه الخدمة الآن' : 'Book This Service Now'}
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// MAIN SERVICES SECTION
// ============================================
export default function ServicesSection() {
  const { lang } = useLanguage();
  const [selectedService, setSelectedService] = useState<MainService | null>(null);

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
              ? 'اضغط على أي خدمة لاكتشاف تفاصيلها وخدماتها الفرعية'
              : 'Click any service to discover its details and sub-services'}
          </motion.p>
        </div>

        {/* Services Grid - 6 Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <TiltCard
                className="h-full cursor-hover"
                tiltAmount={8}
                onClick={() => setSelectedService(service)}
              >
                <div
                  className="relative p-8 rounded-2xl group h-full overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

                  {/* Animated border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: `inset 0 0 30px ${service.glowColor}40, 0 0 30px ${service.glowColor}40`,
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
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <ServiceIcon type={service.icon} className="w-8 h-8" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-amber-400 transition-colors duration-300">
                      {lang === 'ar' ? service.titleAr : service.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-amber-400/80 text-sm font-medium mb-3">
                      {lang === 'ar' ? service.subtitleAr : service.subtitle}
                    </p>

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
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <span>{lang === 'ar' ? 'اكتشف المزيد' : 'Explore'}</span>
                        <ChevronRight size={16} className={lang === 'ar' ? 'rotate-180' : ''} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* SEO: Hidden text for crawlers */}
        <div className="sr-only">
          {servicesData.map((service) => (
            <div key={service.id}>
              <h3>{service.title} - {service.titleAr}</h3>
              <p>{service.description}</p>
              <p>{service.descriptionAr}</p>
              <ul>
                {service.subServices.map((sub, i) => (
                  <li key={i}>
                    <strong>{sub.name}</strong> - {sub.nameAr}: {sub.description} / {sub.descriptionAr}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
