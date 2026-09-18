/**
 * WOLF LSK Agency - Master Website
 * Ultra-premium digital marketing agency website
 * Features: Bilingual (AR/EN), Dark theme, Framer Motion animations, SEO optimized
 */

import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Globe, Phone, Mail, Clock, Star,
  Menu, X, Send, Zap, Target, TrendingUp, Crown, MapPin,
  Youtube, MessageCircle, Instagram
} from 'lucide-react';
import { MagneticButton, AnimatedText, AnimatedCounter } from './components/ui';
import ServicesSection from './components/ServicesSection';
import HeroSection from './components/HeroSection';
import GoogleServices from './components/GoogleServices';
import SEOServicePackages from './components/SEOServicePackages';
import PortfolioFeedback from './components/PortfolioFeedback';
import ClientLogos from './components/ClientLogos';
import StrategicPartnership from './components/StrategicPartnership';
import CustomCursor from './components/CustomCursor';

// ============================================
// NAVIGATION COMPONENT (مع إضافة الاسم)
// ============================================
function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl shadow-amber-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Name */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/30">
                <span className="text-black font-black text-lg">W</span>
              </div>
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <div>
                <span className="text-white font-bold text-xl tracking-tight">WOLF</span>
                <span className="text-amber-400 font-bold text-xl"> LSK</span>
              </div>
              <span className="text-gray-400 text-xs font-medium tracking-widest uppercase">By Laith</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm font-medium tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 transition-all duration-300 text-sm font-medium"
            >
              <Globe size={16} />
              <span>{lang === 'en' ? 'عربي' : 'English'}</span>
            </motion.button>

            <MagneticButton
              href="https://wa.me/962782456543"
              target="_blank"
              rel="noopener noreferrer"
              strength={0.4}
            >
              <div className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">{t.hero.cta1}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-amber-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block text-gray-300 hover:text-amber-400 transition-colors py-2 text-lg"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                <button
                  onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 text-amber-400 text-sm"
                >
                  <Globe size={16} />
                  <span>{lang === 'en' ? 'عربي' : 'English'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ============================================
// ABOUT SECTION
// ============================================
function AboutSection() {
  const { t } = useLanguage();

  const features = [
    { icon: <Target size={24} />, title: t.about.feature1Title, desc: t.about.feature1Desc },
    { icon: <TrendingUp size={24} />, title: t.about.feature2Title, desc: t.about.feature2Desc },
    { icon: <Zap size={24} />, title: t.about.feature3Title, desc: t.about.feature3Desc },
    { icon: <Crown size={24} />, title: t.about.feature4Title, desc: t.about.feature4Desc },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block"
          >
            {t.about.subtitle}
          </motion.span>
          <AnimatedText
            text={t.about.title}
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6"
            delay={0.1}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6"
          >
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              {t.about.description}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 text-center overflow-hidden group"
          >
            <div className="relative">
              <AnimatedCounter value={99} suffix="%" className="text-5xl md:text-6xl font-black text-amber-400 mb-3 block" />
              <p className="text-gray-300 text-lg">{t.about.stat1}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 text-center overflow-hidden group"
          >
            <div className="relative">
              <AnimatedCounter value={500} prefix="+" className="text-5xl md:text-6xl font-black text-amber-400 mb-3 block" />
              <p className="text-gray-300 text-lg">{t.about.stat2}</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % t.testimonials.items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [t.testimonials.items.length]);

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block"
          >
            {t.testimonials.subtitle}
          </motion.span>
          <AnimatedText text={t.testimonials.title} as="h2" className="text-3xl sm:text-4xl md:text-5xl font-black text-white" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 text-center relative overflow-hidden"
            >
              <div className="relative">
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(t.testimonials.items[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{t.testimonials.items[activeIndex].text}"
                </p>
                <div>
                  <p className="text-white font-bold text-lg">{t.testimonials.items[activeIndex].name}</p>
                  <p className="text-amber-400 text-sm">{t.testimonials.items[activeIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-8">
            {t.testimonials.items.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-amber-400 w-8' : 'bg-gray-600 hover:bg-gray-500 w-3'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New inquiry from ${formData.name}\nService: ${formData.service}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/962782456543?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            {t.contact.subtitle}
          </motion.span>
          <AnimatedText text={t.contact.title} as="h2" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.contact.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder={t.contact.formName}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder={t.contact.formEmail}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder={t.contact.formPhone}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none"
              />
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 focus:border-amber-500/50 focus:outline-none"
              >
                <option value="" className="bg-gray-900">{t.contact.formService}</option>
                {t.contact.services.map((service, i) => (
                  <option key={i} value={service} className="bg-gray-900">{service}</option>
                ))}
              </select>
            </div>
            <textarea
              placeholder={t.contact.formMessage}
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none resize-none"
              required
            />
            <MagneticButton strength={0.3}>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-xl text-lg shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 hover:scale-95 transition-transform"
              >
                <Send size={20} />
                {t.contact.formSubmit}
              </button>
            </MagneticButton>
          </motion.form>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10">
              <h3 className="text-white font-bold text-xl mb-6">{t.contact.infoTitle}</h3>
              <div className="space-y-5">
                {[
                  { icon: <Phone size={20} />, label: 'WhatsApp', value: t.contact.infoPhone },
                  { icon: <Mail size={20} />, label: 'Email', value: t.contact.infoEmail },
                  { icon: <MapPin size={20} />, label: 'Location', value: t.contact.infoLocation },
                  { icon: <Clock size={20} />, label: 'Hours', value: t.contact.infoHours },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108516.44710659498!2d35.85699675!3d31.9539421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1236b328f3b%3A0x420e285f310c97d0!2sAmman%2C%20Jordan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wolf LSK Agency Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================
function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-lg">W</span>
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-white font-bold text-xl">WOLF</span>
                  <span className="text-amber-400 font-bold text-xl"> LSK</span>
                </div>
                <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">By Laith</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{t.footer.description}</p>
            <p className="text-amber-400 text-sm font-medium">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { href: '#home', label: t.nav.home },
                { href: '#about', label: t.nav.about },
                { href: '#services', label: t.nav.services },
                { href: '#testimonials', label: t.nav.testimonials },
                { href: '#contact', label: t.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.services}</h4>
            <ul className="space-y-3">
              {t.services.items.map((service, i) => (
                <li key={i}>
                  <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.followUs}</h4>
            <div className="flex items-center gap-3 mb-6">
              <motion.a
                href="https://www.instagram.com/wolf_lsk.jo/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="https://wa.me/962782456543"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/30 transition-all duration-300"
              >
                <MessageCircle size={18} />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-500/30 transition-all duration-300"
              >
                <Youtube size={18} />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WOLF LSK Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// FLOATING WHATSAPP BUTTON (الزر المتحرك)
// ============================================
function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/962782456543"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[99] bg-gradient-to-br from-green-400 to-green-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center group border border-green-300/30"
    >
      <MessageCircle size={32} className="group-hover:animate-bounce" />
      <span className="absolute -inset-1 rounded-full border border-green-400 animate-ping opacity-30"></span>
    </motion.a>
  );
}

// ============================================
// MAIN APP COMPONENT (التجميع النهائي)
// ============================================
function App() {
  return (
    <LanguageProvider>
      <div className="bg-black min-h-screen font-sans text-white selection:bg-amber-500/30 relative">
        <CustomCursor />
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <GoogleServices />
          <SEOServicePackages />
          <PortfolioFeedback />
          <ClientLogos />
          <StrategicPartnership />
          <TestimonialsSection />
          <ContactSection />
        </main>
        
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}

export default App;