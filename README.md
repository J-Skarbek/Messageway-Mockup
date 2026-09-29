# Massage Way Hendersonville - Design Mockups

Static HTML/CSS/JS mockup for Massage Way Hendersonville with two design directions (light and dark themes). Built for Netlify deployment with vanilla code—no framework dependencies, no dark/light toggle, fully Elementor-friendly.

## 📁 File Structure

```
/
├── index.html                 # Landing page - choose design direction
├── README.md                  # This file
│
├── homepage-mocks/           # Homepage design variations
│   ├── homepage-1.html       # Light theme homepage
│   └── homepage-2.html       # Dark theme homepage
│
├── page-mocks/               # Service subpage variations
│   ├── sub1a.html            # Assisted Stretching (light theme)
│   ├── sub1b.html            # Craniosacral Massage (light theme)
│   ├── sub2a.html            # Assisted Stretching (dark theme)
│   └── sub2b.html            # Craniosacral Massage (dark theme)
│
└── shared/                   # Shared resources
    ├── styles.css            # Common styles (reset, nav, cards, etc.)
    └── functions.js          # Navigation & smooth scroll
```

## 🎨 Design Options

### **Option 1: Light Theme**
- Background: `#f9f8f7` (warm beige)
- Text: `#1a1a1a` (dark charcoal)
- CTAs: Dark solid buttons
- Aesthetic: Clean, minimalist, welcoming
- **Entry point:** `homepage-mocks/homepage-1.html`

### **Option 2: Dark Theme**
- Background: `#0f0f0f` to `#1a1a1a` (dark with contrast)
- Text: `#f5f5f5` (off-white)
- CTAs: Light buttons with hover effects
- Aesthetic: Sophisticated, premium, modern
- Accent: Subtle radial glow overlays, gold accents on new services
- **Entry point:** `homepage-mocks/homepage-2.html`

## 🚀 Getting Started

### Local Testing
1. Open `index.html` in a browser to see both design options
2. Click either option to navigate to the respective homepage
3. All internal links are relative, so the site works offline

### Netlify Deployment
1. Push this folder to GitHub
2. Connect repo to Netlify (auto-deploy on push)
3. Set build command: `(none)` — this is a static site
4. Set publish directory: `./` (root folder)

**Live site will be accessible at your Netlify domain**

## 📱 Responsive Design
- Mobile-first approach
- Fully responsive at all breakpoints
- Tested viewports: 480px, 768px, 1400px+
- No JavaScript required for layout

## 🔗 Navigation & Links

All pages link back to:
- `index.html` — Design selector
- Respective homepages from service pages
- Service pages include working nav links to other services in the same theme

**Theme consistency:** 
- Light theme pages link to light theme pages
- Dark theme pages link to dark theme pages

## 🎯 Content Included

### Homepage Sections
- Hero with CTA buttons
- "What We Offer" (3-card grid)
- "Featured Services" (3-card grid)
- "Experience the Difference" (3-card grid)
- "Introducing New Services" (highlights with links)
- CTA section + footer

### Service Pages (4 variations)
- Service hero with tag badge
- "What to Expect" (6-7 numbered steps)
- "Is [Service] Right For You?" (3-card grid)
- "Key Benefits" (6-item benefits grid)
- CTA section + footer

### Footer
- Business info (address, phone)
- Service links
- Quick links
- Copyright

## 📝 Content Source
All copy and structure derived from:
- **Live site:** https://massagewayhendersonville.com/
- **Business info:** 121 Indian Lake Rd, Suite C, Hendersonville, TN 37075
- **Phone:** (615) 265-8232

## 🔄 Next Steps

1. **Choose design direction** → Review both options and decide which resonates
2. **Add real images** → Replace placeholder text with actual business photos
3. **Update booking links** → Connect `#book` CTA buttons to real booking system (e.g., Acuity Scheduling)
4. **Build Elementor version** → Once direction is chosen, recreate in Elementor for client control
5. **Add live content** → Pricing, promotions, gift card details, testimonials

## 🛠 Customization Guide

### Changing Colors
Edit theme-specific CSS in each HTML file:

**Light theme:**
```css
body { background: #f9f8f7; color: #1a1a1a; }
```

**Dark theme:**
```css
body { background: #0f0f0f; color: #f5f5f5; }
```

### Updating Copy
Edit text directly in HTML files. Each page has clear section comments.

### Adding New Sections
1. Copy an existing section (e.g., `.section` div)
2. Update class names and content
3. Link in navigation if needed

### Modifying Shared Styles
- `shared/styles.css` — Base styles (reset, layout, grid, responsive)
- Theme-specific styles in each HTML's `<style>` tag

### Adding Images
```html
<img src="path/to/image.jpg" alt="descriptive text">
```
Recommended locations:
- `/images/` folder (create if needed)
- Use relative paths from HTML file location

## ✨ Special Features

- **Navigation highlighting** — Current page highlighted in nav (via JS)
- **Smooth scrolling** — Anchor links scroll smoothly
- **Service emphasis** — ✨ emoji on "Assisted Stretching" and "Craniosacral Massage" nav items
- **Dark theme accents** — Gold-colored links on new service cards (Option 2)
- **Sticky navigation** — Nav stays at top on scroll
- **Mobile optimized** — Touch-friendly buttons and spacing

## 📦 File Sizes

- `styles.css` — ~7 KB
- `functions.js` — ~1 KB
- Individual HTML files — ~8-12 KB each
- **Total:** ~60 KB (very lightweight, fast load times)

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📞 Contact & Support

**Massage Way Hendersonville**
- Address: 121 Indian Lake Rd, Suite C, Hendersonville, TN 37075
- Phone: (615) 265-8232
- Website: https://massagewayhendersonville.com/

---

**Last Updated:** September 2026  
**Version:** 1.0 (Design Mockup)
