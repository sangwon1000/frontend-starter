# Customization Guide

This guide will help you customize the ShipFast clone for your own project.

## 🎨 Branding & Colors

### Update Color Scheme

1. **Edit `tailwind.config.js`**
   ```javascript
   theme: {
     extend: {
       colors: {
         primary: '#YOUR_PRIMARY_COLOR',    // Your brand color
         secondary: '#YOUR_SECONDARY_COLOR', // Darker shade
       },
     },
   },
   ```

2. **Update gradient colors in `globals.css`**
   ```css
   .gradient-text {
     background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     background-clip: text;
   }
   ```

### Change Logo & Brand Name

1. **Update Header component (`components/Header.tsx`)**
   ```tsx
   <h1 className="text-2xl font-bold gradient-text">YOUR_BRAND_NAME</h1>
   ```

2. **Update Footer component (`components/Footer.tsx`)**
   ```tsx
   <h3 className="text-2xl font-bold gradient-text mb-4">YOUR_BRAND_NAME</h3>
   ```

## 📝 Content Updates

### Hero Section

Edit `components/Hero.tsx`:

```tsx
// Update headline
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
  Your compelling headline
  <br />
  <span className="gradient-text">with gradient text</span>
  <br />
  goes here
</h1>

// Update description
<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
  Your product description that explains what you do and why people should care.
</p>

// Update CTA button
<button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition-colors font-semibold text-lg">
  YOUR_CTA_TEXT
</button>
```

### Features Section

Edit `components/Features.tsx`:

```tsx
const features = [
  {
    icon: Mail,
    title: 'Your Feature',
    description: 'Description of your feature and how it helps users',
    timeSaved: 'X hours',
    provider: 'with YourProvider'
  },
  // Add more features...
]
```

### Pricing Plans

Edit `components/Pricing.tsx`:

```tsx
const pricingPlans = [
  {
    name: 'Your Plan Name',
    originalPrice: 299,
    discountedPrice: 199,
    currency: 'USD',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      // Add more features...
    ],
    cta: 'GET STARTED',
    subtitle: 'Your subtitle'
  },
  // Add more plans...
]
```

### Testimonials

Edit `components/Testimonials.tsx`:

```tsx
// Update founder story
<h2 className="text-3xl font-bold text-gray-900 mb-6">
  Hey, it's Your Name 👋
</h2>
<div className="text-lg text-gray-600 space-y-4">
  <p>Your founder story here...</p>
  <p>More about your journey...</p>
  <p>Why you built this product...</p>
</div>
```

### FAQ Section

Edit `components/FAQ.tsx`:

```tsx
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your detailed answer that helps users understand your product better.'
  },
  // Add more FAQs...
]
```

### Wall of Love

Edit `components/WallOfLove.tsx`:

```tsx
const testimonials = [
  {
    name: 'Customer Name',
    quote: 'Their testimonial about your product',
    fullQuote: 'Extended testimonial if needed',
    author: 'Additional context',
    handle: '@twitter_handle'
  },
  // Add more testimonials...
]
```

## 🖼️ Images & Media

### Add Your Images

1. **Create an `images` folder**
   ```bash
   mkdir public/images
   ```

2. **Add your images**
   - Logo files
   - Product screenshots
   - Team photos
   - Customer avatars

3. **Use in components**
   ```tsx
   import Image from 'next/image'
   
   <Image
     src="/images/your-logo.png"
     alt="Your Logo"
     width={200}
     height={50}
   />
   ```

### Icons

1. **Use Lucide React icons**
   ```tsx
   import { Mail, CreditCard, User } from 'lucide-react'
   ```

2. **Or add custom icons**
   - Place SVG files in `public/icons/`
   - Import and use as components

## 🔗 Links & Navigation

### Update Navigation

Edit `components/Header.tsx`:

```tsx
<nav className="hidden md:flex space-x-8">
  <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">
    Pricing
  </a>
  <a href="#demo" className="text-gray-700 hover:text-primary transition-colors">
    Demo
  </a>
  <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
    About
  </a>
  {/* Add more navigation items */}
</nav>
```

### Update Footer Links

Edit `components/Footer.tsx`:

```tsx
<ul className="space-y-2 text-gray-400">
  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
  <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
  {/* Add more links */}
</ul>
```

## 📱 Mobile Responsiveness

### Test Responsive Design

1. **Use browser dev tools**
   - Toggle device toolbar
   - Test different screen sizes

2. **Common breakpoints**
   - Mobile: < 768px
   - Tablet: 768px - 1024px
   - Desktop: > 1024px

3. **Update responsive classes**
   ```tsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {/* Content */}
   </div>
   ```

## 🎯 SEO Optimization

### Update Meta Tags

Edit `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Brand - Your Tagline',
  description: 'Your compelling description that appears in search results',
  keywords: 'your, keywords, here',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Brand - Your Tagline',
    description: 'Your Open Graph description',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Brand - Your Tagline',
    description: 'Your Twitter description',
  },
}
```

### Add Structured Data

```tsx
// Add to layout.tsx or specific pages
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Your Brand",
      "url": "https://yourdomain.com",
      "logo": "https://yourdomain.com/logo.png"
    })
  }}
/>
```

## 🔧 Advanced Customization

### Add New Sections

1. **Create new component**
   ```tsx
   // components/NewSection.tsx
   export default function NewSection() {
     return (
       <section className="py-16 px-4 sm:px-6 lg:px-8">
         {/* Your content */}
       </section>
     )
   }
   ```

2. **Import in main page**
   ```tsx
   // app/page.tsx
   import NewSection from '@/components/NewSection'
   
   // Add to your layout
   <NewSection />
   ```

### Add Animations

1. **Install Framer Motion**
   ```bash
   npm install framer-motion
   ```

2. **Use in components**
   ```tsx
   import { motion } from 'framer-motion'
   
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}
   >
     {/* Your content */}
   </motion.div>
   ```

### Add Forms

1. **Create form component**
   ```tsx
   // components/ContactForm.tsx
   export default function ContactForm() {
     return (
       <form className="space-y-4">
         <input
           type="email"
           placeholder="Your email"
           className="w-full px-4 py-2 border rounded-lg"
         />
         <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg">
           Subscribe
         </button>
       </form>
     )
   }
   ```

## 🚀 Performance Tips

### Optimize Images
- Use Next.js Image component
- Compress images before adding
- Use appropriate formats (WebP, AVIF)

### Minimize Bundle Size
- Remove unused dependencies
- Use dynamic imports for heavy components
- Optimize third-party scripts

### Monitor Performance
- Use Lighthouse for audits
- Monitor Core Web Vitals
- Test on different devices

## 📋 Customization Checklist

- [ ] Update brand colors
- [ ] Change logo and brand name
- [ ] Update hero content
- [ ] Customize features
- [ ] Set pricing plans
- [ ] Add testimonials
- [ ] Update FAQ
- [ ] Change navigation links
- [ ] Update footer
- [ ] Add your images
- [ ] Update meta tags
- [ ] Test responsive design
- [ ] Optimize performance
- [ ] Test on different browsers

---

**Happy customizing! 🎨** 