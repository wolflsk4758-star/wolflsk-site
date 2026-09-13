# Google Services Pricing Component

## Overview
A production-ready, bilingual (English/Arabic) pricing cards component for Google services with premium animations and responsive design.

## Features

### 🎨 Design
- **3-column responsive grid** (1 col mobile, 2 cols tablet, 3 cols desktop)
- **Dark theme** with gradient backgrounds
- **Glassmorphism effects** with backdrop blur
- **Premium hover states** with scale and glow effects
- **Red accent color** for CTAs and checkmarks

### 🌍 Bilingual Support
- Full English/Arabic translation support
- Automatic RTL/LTR layout switching
- Integrated with existing LanguageContext

### ✨ Animations (Framer Motion)
- **Scroll reveal**: Section fades in and slides up
- **Staggered cards**: Cards appear sequentially (0.2s delay)
- **Hover effects**: Cards scale up (1.02x) with subtle glow
- **Button interactions**: Scale on hover/tap
- **Checklist items**: Staggered fade-in animation

### 📦 Three Pricing Packages

#### Card 1: Google Business Profile Setup
- **Price**: JOD 40 (one-time)
- **Features**: Profile creation, verification, photo upload, basic SEO
- **Best for**: Businesses needing online presence

#### Card 2: Google Search & Maps Ads
- **Price**: JOD 70 (monthly)
- **Features**: 1 campaign, keyword research, ad copy, targeting, management
- **Best for**: Businesses wanting immediate visibility

#### Card 3: SEO Keywords & Research Pack
- **Price**: JOD 130 (one-time)
- **Features**: Everything in Card 1 + Card 2, advanced research, competitor analysis
- **Best for**: Comprehensive digital marketing solution

## Technical Implementation

### Component Structure
```tsx
<GoogleServices />
```

### Data Structure
```typescript
interface PricingCard {
  id: number;
  image: string;
  badge: { en: string; ar: string };
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  price: string;
  billingCycle: { en: string; ar: string };
  buttonText: { en: string; ar: string };
  features: { en: string[]; ar: string[] };
}
```

### Animations Configuration
```typescript
// Container stagger
containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Card animation
cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
```

## Accessibility

### Semantic HTML
- `<section>` with `aria-label`
- `<article>` for each card
- Proper heading hierarchy (h2 → h3)
- List structure for features

### ARIA Labels
- Buttons have descriptive `aria-label`
- Images have `alt` text in current language
- Section has meaningful `aria-label`

### Keyboard Navigation
- All interactive elements are focusable
- Tab order follows visual layout
- Focus states are visible

## Responsive Design

### Breakpoints
- **Mobile** (< 768px): Single column, full-width cards
- **Tablet** (768px - 1024px): Two columns
- **Desktop** (> 1024px): Three columns

### Mobile Optimizations
- Touch-friendly button sizes (min 44px)
- Readable font sizes
- Proper spacing and padding
- Image aspect ratio maintained

## Performance

### Optimizations
- Lazy loading for images
- Efficient animation transforms (GPU-accelerated)
- Minimal re-renders with proper React keys
- Optimized bundle size

### Image Strategy
- Using Unsplash for placeholder images
- Recommended: Replace with actual service images
- Optimize images to < 200KB each
- Use WebP format for better compression

## Customization Guide

### Changing Colors
```tsx
// Card hover glow
className="group-hover:from-amber-500/5 group-hover:via-orange-500/5 group-hover:to-red-500/5"

// Button color
className="bg-red-600 hover:bg-red-700"

// Checkmark color
<Check className="w-5 h-5 text-red-500" />
```

### Modifying Prices
Edit the `pricingData` array in the component:
```typescript
{
  price: 'JOD 40', // Change price here
  billingCycle: {
    en: 'per profile (one-time)',
    ar: 'لكل ملف (لمرة واحدة)',
  },
}
```

### Adding/Removing Features
Edit the `features` array for each card:
```typescript
features: {
  en: ['Feature 1', 'Feature 2'],
  ar: ['الميزة 1', 'الميزة 2'],
}
```

### Changing Images
Replace the `image` URL in each card:
```typescript
image: 'https://your-image-url.com/image.jpg'
```

## Integration

### Already Integrated In
- `src/App.tsx` - Main application
- Uses existing `LanguageContext` for translations
- Follows project's design system

### Dependencies
- `framer-motion` - Animations
- `lucide-react` - Icons (Check)
- `react` - Core framework
- `tailwindcss` - Styling

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

### Potential Additions
1. **Modal popups** for detailed feature explanations
2. **Comparison table** for side-by-side feature comparison
3. **Testimonials** section below pricing
4. **FAQ accordion** for common questions
5. **Custom package builder** for tailored solutions
6. **Payment integration** for direct purchases
7. **Discount badges** for limited-time offers
8. **Tooltip explanations** for technical terms

## Testing Checklist

- [ ] All three cards display correctly
- [ ] Language switching works (EN ↔ AR)
- [ ] RTL layout applies in Arabic mode
- [ ] Hover effects work on desktop
- [ ] Touch interactions work on mobile
- [ ] Animations trigger on scroll
- [ ] Images load properly
- [ ] Buttons are clickable
- [ ] WhatsApp link works
- [ ] Responsive at all breakpoints
- [ ] Accessibility (keyboard nav, screen reader)

## Support

For questions or modifications, contact the development team.

---

**Component Version**: 1.0.0  
**Last Updated**: 2024  
**Author**: Wolf LSK Development Team
