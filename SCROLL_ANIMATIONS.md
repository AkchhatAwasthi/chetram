# Scroll Animations Implementation Summary

## Overview
Added dynamic scroll-triggered animations across all sections of the Chetram website. Content now **appears when scrolling up** (entering viewport) and **disappears when scrolling down** (leaving viewport), creating an interactive and engaging user experience.

## What Was Created

### 1. ScrollReveal Component
**Location:** `src/components/animations/ScrollReveal.tsx`

A reusable animation wrapper component that:
- Uses Framer Motion's `useInView` hook to detect when elements enter/exit the viewport
- Triggers animations **continuously** - content appears and disappears based on scroll direction
- Supports 4 directions: up, down, left, right
- Allows customizable delays for staggered animations
- Triggers 100px before element enters viewport for smoother experience

**Features:**
- Fade-in/out effect (opacity 0 ↔ 1)
- Slide animation (40px movement)
- Smooth easing curve for natural motion
- 0.7s animation duration
- **Repeating animations** - not just once!

## Sections Updated

### ✅ Sections with Full Animation Coverage:

1. **WhyChetram** - Header with ScrollReveal + individual feature cards with staggered motion
2. **SignatureDishes** - Header with ScrollReveal + dish cards with staggered motion
3. **OurStory** - Text content slides from left, image slides from right
4. **ImageGallery** - Each image fades in with staggered delays (0.1s increments)
5. **DelhiTaste** - Header with ScrollReveal + existing motion animations
6. **OutletsTimings** - Header with ScrollReveal + existing motion animations
7. **Sustainability** - Already has motion animations (no changes needed)
8. **CustomerLove** - Header with ScrollReveal + existing motion animations
9. **OrderVisit** - Already has motion animations (no changes needed)

### Animation Patterns Used:

1. **Section Headers** - Fade in from bottom (default "up" direction)
2. **Two-Column Layouts** - Left content slides from left, right content from right
3. **Grid Items** - Staggered fade-in with incremental delays
4. **Cards** - Individual fade-in with motion.div using whileInView

## Technical Details

### Animation Trigger
- Animations trigger when elements are **100px before entering the viewport**
- This creates a smoother experience where content is already animating as it comes into view
- Content **disappears** when scrolling past it (leaving viewport from top)

### Performance
- Animations repeat every time elements enter/exit the viewport
- Uses GPU-accelerated transforms (translateX, translateY)
- Optimized with Framer Motion's built-in performance features
- Smooth 60fps animations

### Browser Compatibility
- Works on all modern browsers
- Gracefully degrades on older browsers (content still visible, just no animation)

## How to Use ScrollReveal

```tsx
import ScrollReveal from "@/components/animations/ScrollReveal";

// Basic usage (fades in from bottom)
<ScrollReveal>
  <div>Your content</div>
</ScrollReveal>

// With direction
<ScrollReveal direction="left">
  <div>Slides in from left</div>
</ScrollReveal>

// With delay (for staggered effects)
<ScrollReveal delay={0.2}>
  <div>Delayed animation</div>
</ScrollReveal>

// Combined
<ScrollReveal direction="right" delay={0.3}>
  <div>Slides from right with delay</div>
</ScrollReveal>
```

## Result
Every section now has dynamic, interactive scroll animations that:
- ✅ **Appear when scrolling up** (entering viewport)
- ✅ **Disappear when scrolling down** (leaving viewport)
- ✅ Create a highly engaging, interactive experience
- ✅ Guide user attention dynamically as they scroll
- ✅ Maintain excellent 60fps performance
- ✅ Work seamlessly with existing Framer Motion animations
- ✅ Make the website feel alive and responsive to user interaction
