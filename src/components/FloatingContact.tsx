import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react'; // تأكد إنك منزل مكتبة lucide-react للأيقونات
import { useLanguage } from '../context/LanguageContext';

const FloatingContact = () => {
  const { lang } = useLanguage();
  const whatsappLink = "https://wa.me/962782456543";

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-3">
      {/* زر الحجز المباشر */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full font-bold shadow-lg shadow-orange-500/30 text-sm border border-orange-400/50 flex items-center gap-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        {lang === 'ar' ? 'للحجز المباشر' : 'Book Directly'}
      </motion.a>

      {/* أيقونة الواتساب مع أنيميشن النبض */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-2xl shadow-green-500/40"
      >
        {/* تأثير النبض الخارجي */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></div>
        
        {/* أيقونة الواتساب */}
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
      </motion.a>
    </div>
  );
};

export default FloatingContact;