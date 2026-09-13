# Portfolio Feedback Component

## Overview

The `PortfolioFeedback` component creates an engaging two-column layout with a sticky text section on the left and an infinite vertical carousel on the right. It's designed to showcase portfolio work while encouraging user feedback.

## Features

### Layout
- **Two-column design**: 50/50 split on desktop, stacked on mobile
- **Sticky left column**: Text content stays visible while scrolling through portfolio
- **Responsive**: Adapts seamlessly from mobile to desktop

### Animations
- **Infinite vertical carousel**: Two columns scrolling in opposite directions
  - Column 1: Scrolls UP continuously
  - Column 2: Scrolls DOWN continuously
- **Hover pause**: Animation pauses when hovering over the carousel
- **Smooth transitions**: 40-second animation cycle for seamless looping
- **Image hover effects**: Scale and glassmorphism overlay on hover

### Visual Effects
- **Gradient overlays**: Top and bottom fade effects for smooth transitions
- **Glassmorphism**: Category badges with backdrop blur
- **Dark theme**: Consistent with the overall site design
- **Image zoom**: Subtle scale effect on hover

### Bilingual Support
- Full English/Arabic translations
- Automatic RTL/LTR layout switching
- All text content is translatable

## Portfolio Data Structure

The component includes 8 portfolio items with the following structure:

```typescript
interface PortfolioItem {
  id: number;
  category: { en: string; ar: string };
  image: string;
  alt: { en: string; ar: string };
}
```

### Included Portfolio Items
1. **Dental Clinic Campaign Design** (Healthcare)
2. **Farouj Noman Restaurant Social Media Ad** (Food & Beverage)
3. **Hazem Beauty Salon Branding** (Beauty)
4. **Medical Center Promo** (Medical)
5. **Online Store Campaign** (E-commerce)
6. **Property Marketing Design** (Real Estate)
7. **Educational Platform Ad** (Education)
8. **Gym Promotion Campaign** (Fitness)

## Technical Implementation

### Dependencies
- **React**: Component framework
- **Framer Motion**: Animation library
- **Tailwind CSS**: Styling
- **LanguageContext**: Bilingual support

### Animation Configuration

```typescript
// Column 1 - Scrolls UP
animate={{ y: [0, -2000] }}
transition={{
  duration: 40,
  repeat: Infinity,
  ease: 'linear',
}}

// Column 2 - Scrolls DOWN
animate={{ y: [-2000, 0] }}
transition={{
  duration: 40,
  repeat: Infinity,
  ease: 'linear',
}}
```

### Hover Pause Mechanism
```typescript
whileHover={{ animationPlayState: 'paused' }}
```

## Usage

The component is already integrated into the main application:

```typescript
import PortfolioFeedback from './components/PortfolioFeedback';

// In AppContent component
<PortfolioFeedback />
```

## Customization Guide

### Changing Animation Speed
Modify the `duration` property in the transition object:

```typescript
// Slower animation (60 seconds)
transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}

// Faster animation (20 seconds)
transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
```

### Adding More Portfolio Items
Add new items to the `portfolioData` array:

```typescript
{
  id: 9,
  category: { en: 'Technology', ar: 'التكنولوجيا' },
  image: 'https://example.com/image.jpg',
  alt: { en: 'Tech Company Branding', ar: 'هوية بصرية لشركة تقنية' },
}
```

### Modifying Text Content
Update the text in the left column:

```typescript
// Subtitle
{lang === 'ar' ? 'شاركنا رأيك' : 'Share Your Feedback'}

// Headline
{lang === 'ar'
  ? 'رأيك يهمنا — ساعدنا على التحسن'
  : 'Your Opinion Matters — Help Us Improve'}

// Description
{lang === 'ar'
  ? 'نسعى لتقديم تصاميم عالية الجودة...'
  : 'We aim to deliver high-quality...'}
```

### Changing CTA Button
Update the button link and text:

```typescript
<motion.a
  href="https://your-link.com"
  target="_blank"
  rel="noopener noreferrer"
  // ...
>
  {lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
</motion.a>
```

### Adjusting Column Heights
Modify the container height:

```typescript
// Taller carousel (800px)
className="relative h-[800px] overflow-hidden rounded-2xl"

// Shorter carousel (400px)
className="relative h-[400px] overflow-hidden rounded-2xl"
```

### Customizing Gradient Overlays
Adjust the gradient opacity and size:

```typescript
// Top gradient
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

// Bottom gradient
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
```

## Performance Considerations

### Image Optimization
- Use optimized images (WebP format recommended)
- Keep image sizes reasonable (600x800px is optimal)
- Consider lazy loading for better performance

### Animation Performance
- The component uses CSS transforms for smooth animations
- GPU acceleration is enabled via Framer Motion
- Hover pause helps reduce CPU usage when not needed

### Responsive Images
- Images use `object-cover` for consistent sizing
- Consider using responsive images with `srcset` for better mobile performance

## Accessibility

### ARIA Labels
- Section has proper `aria-label` for screen readers
- Images have descriptive `alt` text in both languages
- Semantic HTML structure maintained

### Keyboard Navigation
- All interactive elements are focusable
- CTA button is keyboard accessible
- Proper focus indicators

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Images Not Loading
- Check image URLs are accessible
- Verify Unsplash API is working (if using their images)
- Consider self-hosting images for production

### Animation Not Smooth
- Reduce animation duration for faster movement
- Check browser hardware acceleration is enabled
- Consider reducing number of images if performance issues persist

### Layout Issues on Mobile
- Component automatically stacks on mobile
- Adjust padding/margins if needed
- Test on various screen sizes

## Integration with Other Components

The component works seamlessly with:
- **CustomCursor**: Cursor effects work over the carousel
- **LanguageContext**: Bilingual support is automatic
- **Framer Motion**: Animations integrate with page transitions
- **Tailwind CSS**: Consistent styling with the rest of the site

## Future Enhancements

Potential improvements:
1. **Click to expand**: Open portfolio item in modal
2. **Filter by category**: Add category filter buttons
3. **Lightbox view**: Full-screen image viewer
4. **Video support**: Add video portfolio items
5. **3D effects**: Add parallax or 3D tilt effects
6. **Loading states**: Add skeleton loaders for images
7. **Error handling**: Fallback images for broken links

## Support

For questions or customizations, contact the development team.

---

**Component Version**: 1.0.0  
**Last Updated**: 2024  
**Author**: Wolf LSK Development Team
