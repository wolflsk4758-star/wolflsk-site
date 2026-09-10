/**
 * WOLF LSK Agency - Bilingual Translations (EN / AR)
 * Contains all text content for both English and Arabic languages
 */

export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      badge: '🔥 No one does it like us',
      title: 'We Dominate the Digital Landscape',
      titleHighlight: 'So You Lead the Pack.',
      description: 'At Wolf LSK, we merge the instinct of innovation with cutting-edge SEO and marketing strategies to build your brand\'s unmatched legacy. Leave competitors behind and lead the market.',
      cta1: 'Book Free Consultation',
      cta2: 'Discover Our Strategies',
      badgeGoogle: 'Google Ads Certified Partner',
      badgeMeta: 'Meta Business Certified Expert',
    },
    // About Section
    about: {
      subtitle: 'Our Strategic Methodology',
      title: 'Precision, Insight & Results That Speak',
      description: 'We don\'t believe in random marketing. Our strategies are built on deep data analysis, precise understanding of consumer behavior, and advanced AI tools. Our goal is not just to increase followers, but to multiply sales and establish your brand as the first reference in your field.',
      stat1: 'Client Satisfaction & Renewal Rate',
      stat1Value: '99%',
      stat2: 'Successful Marketing Campaigns',
      stat2Value: '500+',
      feature1Title: 'Precise Targeting',
      feature1Desc: 'We reach your potential customer wherever they are.',
      feature2Title: 'Data Analysis',
      feature2Desc: 'Our decisions are based on real numbers.',
      feature3Title: 'Accelerated Growth',
      feature3Desc: 'Strategies designed to multiply profits.',
      feature4Title: 'Market Dominance',
      feature4Desc: 'We make you the first choice, always.',
    },
    // Services Section
    services: {
      subtitle: 'Our Digital Arsenal',
      title: 'Integrated Marketing Solutions',
      items: [
        {
          title: 'Search Engine Optimization (SEO)',
          description: 'We rank your website at the top of search results using the latest local and global SEO techniques.',
          icon: 'search',
        },
        {
          title: 'Paid Advertising Campaigns',
          description: 'Managing large budgets across Meta, Snapchat, TikTok, LinkedIn with precise targeting ensuring highest ROAS.',
          icon: 'megaphone',
        },
        {
          title: 'Google Business Profile (GMB)',
          description: 'Verification and optimization of your business profile on Google Maps to dominate local search results.',
          icon: 'mapPin',
        },
        {
          title: 'Social Media Management',
          description: 'Creating interactive content, strong visual identity, and building a loyal community for your brand.',
          icon: 'share2',
        },
        {
          title: 'Advanced Web Development',
          description: 'Designing and programming professional, ultra-fast websites built with latest technologies, optimized for SEO.',
          icon: 'code',
        },
        {
          title: 'Strategic Consulting',
          description: 'We provide our expertise to analyze competitors, reveal market weaknesses, and draw a clear roadmap.',
          icon: 'lightbulb',
        },
      ],
    },
    // Testimonials Section
    testimonials: {
      subtitle: 'Client Feedback',
      title: 'What Our Clients Say',
      items: [
        {
          name: 'Ahmad Al-Rashid',
          company: 'Tech Solutions Jordan',
          text: 'Wolf LSK transformed our digital presence completely. Our organic traffic increased by 340% in just 3 months. Their SEO strategy is unmatched.',
          rating: 5,
        },
        {
          name: 'Sara Khalil',
          company: 'Bloom Fashion',
          text: 'The Meta Ads campaigns they managed for us delivered a 5x ROAS. Professional team with exceptional attention to detail and results.',
          rating: 5,
        },
        {
          name: 'Omar Hassan',
          company: 'Gulf Properties',
          text: 'Their web development team built us a stunning, lightning-fast website that perfectly represents our luxury brand. Highly recommended!',
          rating: 5,
        },
        {
          name: 'Layla Nasser',
          company: 'Fresh Bites Restaurant',
          text: 'Thanks to Wolf LSK\'s Google Business optimization, our restaurant now appears first in local searches. Walk-in customers increased by 200%.',
          rating: 5,
        },
        {
          name: 'Khaled Mansour',
          company: 'Mansour Law Firm',
          text: 'Their strategic consulting helped us identify gaps in our market and develop a digital strategy that doubled our client inquiries.',
          rating: 5,
        },
      ],
    },
    // Contact Section
    contact: {
      subtitle: 'Get In Touch',
      title: 'Let\'s Build Your Digital Empire',
      description: 'Ready to dominate your market? Reach out and let\'s discuss how we can accelerate your growth.',
      formName: 'Full Name',
      formEmail: 'Email Address',
      formPhone: 'Phone Number',
      formService: 'Select Service',
      formMessage: 'Your Message',
      formSubmit: 'Send Message',
      services: [
        'SEO Optimization',
        'Paid Advertising',
        'Google Business Profile',
        'Social Media Management',
        'Web Development',
        'Strategic Consulting',
      ],
      infoTitle: 'Contact Information',
      infoPhone: '+962 78 245 6543',
      infoEmail: 'info@wolflsk.com',
      infoLocation: 'Amman, Jordan',
      infoHours: 'Sun - Thu: 9AM - 6PM',
    },
    // Footer
    footer: {
      description: 'Your strongest partner for dominating the digital market. We merge innovation with strategy to deliver unmatched results.',
      quickLinks: 'Quick Links',
      services: 'Services',
      followUs: 'Follow Us',
      rights: '© 2025 Wolf LSK Agency. All rights reserved.',
      tagline: 'There\'s no one like us 🔥',
    },
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      testimonials: 'آراء العملاء',
      contact: 'تواصل معنا',
    },
    // Hero Section
    hero: {
      badge: '🔥 في غيرنا.. بس ما في زينا',
      title: 'نهيمن على المشهد الرقمي',
      titleHighlight: 'لتكون أنت في الصدارة.',
      description: 'في Wolf LSK، ندمج غريزة الابتكار مع أحدث استراتيجيات الـ SEO والتسويق لنبني لعلامتك التجارية مجداً لا يُنافس. اترك المنافسين خلفك، واستعد لقيادة السوق.',
      cta1: 'احجز استشارتك المجانية',
      cta2: 'اكتشف استراتيجياتنا',
      badgeGoogle: 'شريك Google Ads معتمد',
      badgeMeta: 'خبراء Meta Business معتمدون',
    },
    // About Section
    about: {
      subtitle: 'المنهجية الاستراتيجية',
      title: 'دقة، رؤية ثاقبة، ونتائج تتحدث عن نفسها',
      description: 'نحن لا نؤمن بالتسويق العشوائي. استراتيجياتنا مبنية على تحليل عميق للبيانات، فهم دقيق لسلوك المستهلك، واستخدام أدوات ذكاء اصطناعي متقدمة. هدفنا ليس فقط زيادة المتابعين، بل مضاعفة المبيعات وترسيخ اسم علامتك التجارية كمرجع أول في مجالك.',
      stat1: 'نسبة رضا العملاء والتجديد',
      stat1Value: '99%',
      stat2: 'حملة تسويقية ناجحة',
      stat2Value: '+500',
      feature1Title: 'استهداف دقيق',
      feature1Desc: 'نصل لعميلك المحتمل أينما كان.',
      feature2Title: 'تحليل البيانات',
      feature2Desc: 'قراراتنا مبنية على أرقام حقيقية.',
      feature3Title: 'نمو متسارع',
      feature3Desc: 'استراتيجيات مصممة لمضاعفة الأرباح.',
      feature4Title: 'هيمنة السوق',
      feature4Desc: 'نجعلك الخيار الأول دائماً.',
    },
    // Services Section
    services: {
      subtitle: 'أسلحتنا الرقمية',
      title: 'حلول تسويقية متكاملة',
      items: [
        {
          title: 'تصدر محركات البحث (SEO)',
          description: 'نرفع ترتيب موقعك في نتائج البحث باستخدام أحدث تقنيات تحسين محركات البحث المحلية والعالمية.',
          icon: 'search',
        },
        {
          title: 'الحملات الإعلانية الممولة',
          description: 'إدارة ميزانيات ضخمة عبر Meta وSnapchat وTikTok وLinkedIn باستهداف دقيق يضمن أعلى عائد على الاستثمار.',
          icon: 'megaphone',
        },
        {
          title: 'إدارة ملفات جوجل (GMB)',
          description: 'توثيق وتحسين ملف نشاطك التجاري على خرائط جوجل ليتصدر نتائج البحث المحلية ويجذب آلاف الزوار.',
          icon: 'mapPin',
        },
        {
          title: 'إدارة السوشيال ميديا',
          description: 'صناعة محتوى تفاعلي، تصميم هوية بصرية قوية، وبناء مجتمع وفي لعلامتك التجارية.',
          icon: 'share2',
        },
        {
          title: 'برمجة المواقع المتقدمة',
          description: 'تصميم وبرمجة مواقع احترافية وفائقة السرعة، مبنية بأحدث التقنيات ومحسنة كلياً لمحركات البحث.',
          icon: 'code',
        },
        {
          title: 'الاستشارات الاستراتيجية',
          description: 'نضع بين يديك عصارة خبرتنا لتحليل منافسيك، كشف نقاط الضعف في السوق، ورسم خارطة طريق واضحة.',
          icon: 'lightbulb',
        },
      ],
    },
    // Testimonials Section
    testimonials: {
      subtitle: 'آراء العملاء',
      title: 'ماذا يقول عملاؤنا عنا',
      items: [
        {
          name: 'أحمد الراشد',
          company: 'تك سوليوشنز الأردن',
          text: 'Wolf LSK حوّلت حضورنا الرقمي بالكامل. زادت زياراتنا العضوية بنسبة 340% في 3 أشهر فقط. استراتيجيتهم في SEO لا مثيل لها.',
          rating: 5,
        },
        {
          name: 'سارة خليل',
          company: 'بلوم فاشن',
          text: 'حملات Meta Ads التي أدارتها لنا حققت عائد استثمار 5 أضعاف. فريق محترف مع اهتمام استثنائي بالتفاصيل والنتائج.',
          rating: 5,
        },
        {
          name: 'عمر حسن',
          company: 'غلف بروبرتيز',
          text: 'فريق تطوير الويب لديهم بنى لنا موقعاً مذهلاً وسريعاً يمثل علامتنا الفاخرة بشكل مثالي. أنصح بهم بشدة!',
          rating: 5,
        },
        {
          name: 'ليلى ناصر',
          company: 'مطعم فريش بايتس',
          text: 'بفضل تحسين Wolf LSK لملفنا على Google، يظهر مطعمنا الآن أولاً في نتائج البحث المحلية. زاد عدد الزوار بنسبة 200%.',
          rating: 5,
        },
        {
          name: 'خالد منصور',
          company: 'منصور للمحاماة',
          text: 'استشاراتهم الاستراتيجية ساعدتنا في تحديد الفجوات في سوقنا وتطوير استراتيجية رقمية ضاعفت استفسارات العملاء.',
          rating: 5,
        },
      ],
    },
    // Contact Section
    contact: {
      subtitle: 'تواصل معنا',
      title: 'لنبنِ إمبراطوريتك الرقمية',
      description: 'مستعد لهيمنة سوقك؟ تواصل معنا ودعنا نناقش كيف يمكننا تسريع نموك.',
      formName: 'الاسم الكامل',
      formEmail: 'البريد الإلكتروني',
      formPhone: 'رقم الهاتف',
      formService: 'اختر الخدمة',
      formMessage: 'رسالتك',
      formSubmit: 'إرسال الرسالة',
      services: [
        'تحسين محركات البحث (SEO)',
        'الإعلانات الممولة',
        'إدارة ملفات جوجل',
        'إدارة السوشيال ميديا',
        'برمجة المواقع',
        'الاستشارات الاستراتيجية',
      ],
      infoTitle: 'معلومات التواصل',
      infoPhone: '+962 78 245 6543',
      infoEmail: 'info@wolflsk.com',
      infoLocation: 'عمّان، الأردن',
      infoHours: 'الأحد - الخميس: 9 ص - 6 م',
    },
    // Footer
    footer: {
      description: 'شريكك الأقوى للهيمنة على السوق الرقمي. ندمج الابتكار بالاستراتيجية لتقديم نتائج لا مثيل لها.',
      quickLinks: 'روابط سريعة',
      services: 'خدماتنا',
      followUs: 'تابعنا',
      rights: '© 2025 Wolf LSK Agency. جميع الحقوق محفوظة.',
      tagline: 'في غيرنا.. بس ما في زينا 🔥',
    },
  },
};
