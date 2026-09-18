import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

// قائمة الأسماء والصور المقابلة لها (محدثة بناءً على مجلد public)
const nameToImageMap: Record<string, string> = {
  // العيادات والمراكز الصحية
  "dental clinic": "/dental clinic campaing design.png",
  "medical center": "/medical center promo.jpg",
  "hazem beauty": "/hazem beauty.webp",
  "jakjan": "/hazem beauty salon branding.png", // تم ربطها بملف صالون حازم أو جاكجان حسب المتوفر
  
  // الشركات والمتاجر الإلكترونية
  "online store": "/online store campaign.png",
  "raheeq": "/seo keywords & research packjng.jpg", // أو أي منتج مناسب
  "jumana library": "/educational platform ad.png",
  "gibraltar farm": "/tamimi farm.jpeg",
  "tamimi farm": "/tamimi farm.jpeg",
  
  // المطاعم والسياحة
  "farouj noman": "/farouj noman.jpg",
  "oliva travel": "/oliva travel.jpg",
  "riva suites": "/property marketing design.png",
  
  // التقنية والسيارات
  "tesla drive": "/tesla drive.jpeg",
  "saed tesla": "/tesla drive.jpeg",
  "website seo": "/website seo optimization.jpg",
  "google business": "/google business profile setup.jpg",
};

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // حالة الصورة الحالية المعروضة
  const [hoverImage, setHoverImage] = useState<string | null>(null);

  // Motion values for cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animations for smooth trailing
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const slowConfig = { damping: 20, stiffness: 150, mass: 1 };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Slower trailing circle
  const outerX = useMotionValue(-100);
  const outerY = useMotionValue(-100);
  const outerXSpring = useSpring(outerX, slowConfig);
  const outerYSpring = useSpring(outerY, slowConfig);

  useEffect(() => {
    // Check if mobile/touch device
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(hover: none)').matches || 'ontouchstart' in window);
    };
    checkMobile();

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      outerX.set(e.clientX);
      outerY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Hover detection for interactive elements and names/images
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select, .cursor-hover'
      );
      setIsHovering(!!isInteractive);

      // البحث عن اسم أو صورة في العنصر الذي يمر عليه الماوس
      const namedElement = target.closest('[data-name], [data-image]') as HTMLElement;
      if (namedElement) {
        const imageAttr = namedElement.getAttribute('data-image');
        const nameAttr = namedElement.getAttribute('data-name')?.toLowerCase();

        if (imageAttr) {
          setHoverImage(imageAttr);
        } else if (nameAttr) {
          // محاولة المطابقة المباشرة أو الجزئية مع أسماء المفاتيح
          const matchedKey = Object.keys(nameToImageMap).find(key => nameAttr.includes(key));
          if (matchedKey) {
            setHoverImage(nameToImageMap[matchedKey]);
          } else {
            setHoverImage(null);
          }
        } else {
          setHoverImage(null);
        }
      } else {
        setHoverImage(null);
      }
    };

    // Click ripple effect
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
    };
  }, [cursorX, cursorY, outerX, outerY, isVisible]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Click Ripple Effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-8 h-8 rounded-full border-2 border-amber-400/60" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Particle burst on click */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={`particles-${ripple.id}`}
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [1, 0.8, 0],
                  x: Math.cos((i * Math.PI * 2) / 6) * 40,
                  y: Math.sin((i * Math.PI * 2) / 6) * 40,
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full"
                style={{
                  boxShadow: '0 0 6px rgba(245, 158, 11, 0.8)',
                }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Preview Image on Hovering Names */}
      <AnimatePresence>
        {hoverImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="fixed pointer-events-none z-[9997] overflow-hidden rounded-xl shadow-2xl border border-amber-500/40"
            style={{
              x: outerXSpring,
              y: outerYSpring,
              translateX: '24px',
              translateY: '-50%',
              width: '180px',
              height: '120px',
            }}
          >
            <img
              src={hoverImage}
              alt="Hover preview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Outer trailing circle */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: outerXSpring,
          y: outerYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 60 : isClicking ? 30 : 40,
            height: isHovering ? 60 : isClicking ? 30 : 40,
            borderColor: isHovering
              ? 'rgba(245, 158, 11, 0.6)'
              : isClicking
              ? 'rgba(245, 158, 11, 0.8)'
              : 'rgba(245, 158, 11, 0.3)',
            borderWidth: isHovering ? 2 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="rounded-full border border-amber-500/30"
          style={{
            backdropFilter: isHovering ? 'blur(4px)' : 'none',
            boxShadow: isHovering
              ? '0 0 20px rgba(245, 158, 11, 0.2), inset 0 0 20px rgba(245, 158, 11, 0.05)'
              : 'none',
          }}
        />
      </motion.div>

      {/* Inner cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 8 : isClicking ? 4 : 6,
            height: isHovering ? 8 : isClicking ? 4 : 6,
            backgroundColor: isHovering
              ? 'rgba(245, 158, 11, 1)'
              : isClicking
              ? 'rgba(255, 255, 255, 1)'
              : 'rgba(245, 158, 11, 0.9)',
            boxShadow: isHovering
              ? '0 0 20px rgba(245, 158, 11, 0.8), 0 0 40px rgba(245, 158, 11, 0.4)'
              : '0 0 10px rgba(245, 158, 11, 0.6)',
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full"
        />
      </motion.div>
    </>
  );
}