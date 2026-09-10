/**
 * Premium UI Components for WOLF LSK Agency
 * MagneticButton, AnimatedText, TiltCard, GlowingBorder
 */

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef, useState, useEffect } from 'react';

// ============================================
// MAGNETIC BUTTON - Follows cursor with magnetic pull
// ============================================
interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  strength?: number;
}

export function MagneticButton({
  children,
  className = '',
  href,
  target,
  rel,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * strength;
    const distY = (e.clientY - centerY) * strength;
    x.set(distX);
    y.set(distY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} className="inline-block">
      {content}
    </div>
  );
}

// ============================================
// ANIMATED TEXT - Word-by-word staggered reveal
// ============================================
interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  once?: boolean;
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  as: Tag = 'span',
  once = true,
}: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <Tag className={`${className} inline-flex flex-wrap`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay: delay + i * staggerDelay,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

// ============================================
// ANIMATED PARAGRAPH - Line-by-line reveal
// ============================================
interface AnimatedParagraphProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedParagraph({ text, className = '', delay = 0 }: AnimatedParagraphProps) {
  const lines = text.split('. ').filter(Boolean);

  return (
    <p className={`${className}`}>
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className="inline-block mr-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.15,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {line}.{' '}
        </motion.span>
      ))}
    </p>
  );
}

// ============================================
// 3D TILT CARD - Perspective tilt on mouse move
// ============================================
interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  onClick?: () => void;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = '',
  tiltAmount = 8,
  onClick,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden"
          style={{ transform: 'translateZ(1px)' }}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, transparent 60%)',
              x: glareX,
              y: glareY,
            }}
          />
        </div>
      )}
    </motion.div>
  );
}

// ============================================
// GLOWING BORDER - Animated gradient border
// ============================================
interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
}

export function GlowingBorder({ children, className = '', active = false }: GlowingBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated border */}
      <div
        className={`absolute -inset-[1px] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
          active ? 'opacity-100' : ''
        }`}
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0%, #f59e0b 25%, transparent 50%, #f59e0b 75%, transparent 100%)',
          animation: 'spin-border 4s linear infinite',
        }}
      />
      {/* Inner content */}
      <div className="relative rounded-[inherit] bg-gray-950/95 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}

// ============================================
// COUNTER ANIMATION - Animated number counting
// ============================================
interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = value / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

// ============================================
// FLOATING PARTICLES - Background decoration
// ============================================
export function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-amber-400/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
