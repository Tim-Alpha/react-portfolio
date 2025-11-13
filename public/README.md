# Sachin Kinha - Portfolio Website

A modern, responsive portfolio website showcasing my work, skills, and experience as a full-stack web developer. Built with React.js, Vue.js, and TypeScript, featuring scroll-triggered animations, parallax effects, and a mobile-first design approach.

## 🚀 Live Demo

Visit the live portfolio: [Portfolio Website](https://your-portfolio-url.vercel.app)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design Philosophy](#design-philosophy)
- [Key Components](#key-components)
- [Animation System](#animation-system)
- [Responsive Design](#responsive-design)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Performance Optimizations](#performance-optimizations)

## ✨ Features

### Core Features
- **Modern UI/UX**: Dark theme with gradient accents and smooth animations
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Scroll Animations**: Elements animate as they enter the viewport
- **Parallax Effects**: Hero image with parallax scrolling
- **Bottom Navigation**: Mobile-optimized bottom navigation bar
- **Project Showcase**: 8+ real projects with images and live demos
- **Skills Display**: Organized skill categories with interactive badges
- **Contact Form**: Functional contact form with validation
- **Social Links**: Direct links to GitHub, LinkedIn, and Telegram

### Technical Features
- **React 19** with TypeScript for type safety
- **Vue.js Integration** for specific interactive components
- **Custom Hooks** for scroll animations and parallax effects
- **Intersection Observer API** for efficient scroll detection
- **CSS Modules** for scoped styling
- **Vite** for fast development and optimized builds

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0** - Modern React with latest features
- **TypeScript 5.9.3** - Type-safe development
- **Vue.js 3.5.24** - Integrated for specific components

### Build Tools
- **Vite 7.2.2** - Next-generation frontend tooling
- **ESLint** - Code linting and quality
- **TypeScript Compiler** - Type checking

### Styling
- **Custom CSS** - Component-scoped stylesheets
- **CSS Variables** - Theme-based color system
- **CSS Animations** - Smooth transitions and keyframe animations
- **Responsive Design** - Mobile-first approach with breakpoints

### Deployment
- **Vercel** - Optimized deployment configuration
- **GitHub** - Version control and repository hosting

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg              # Profile image
│   ├── co-founder-finder.png   # Project screenshot
│   ├── cold-email.png          # Project screenshot
│   └── vite.svg                # Vite logo
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Top navigation (desktop only)
│   │   ├── BottomNav.tsx       # Bottom navigation (mobile)
│   │   ├── Hero.tsx            # Hero section with parallax
│   │   ├── About.tsx           # About section
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── Skills.tsx          # Skills with Vue integration
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer with social links
│   ├── hooks/
│   │   ├── useScrollAnimation.ts  # Scroll-triggered animations
│   │   └── useParallax.ts          # Parallax scroll effects
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Application entry point
│   ├── index.css               # Global styles and animations
│   └── vite-env.d.ts           # TypeScript declarations
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── vercel.json                 # Vercel deployment config
└── package.json                # Dependencies and scripts
```

## 🎨 Design Philosophy

### Color Scheme
- **Primary Background**: `#1a1a1a` (Dark gray)
- **Secondary Background**: `#2d2d2d` (Lighter gray)
- **Card Background**: `#333333` (Card gray)
- **Accent Color**: `#00ff88` (Bright green)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#b0b0b0` (Light gray)

### Typography
- **Font Family**: Inter, system fonts fallback
- **Font Smoothing**: Antialiased for crisp text
- **Responsive Sizing**: Scales from 1.75rem to 3rem based on screen size

### Layout Principles
- **Container Max Width**: 1200px for optimal readability
- **Section Padding**: Responsive padding (40px - 80px)
- **Grid System**: CSS Grid with auto-fit for flexible layouts
- **Spacing**: Consistent 1rem, 1.5rem, 2rem spacing scale

## 🧩 Key Components

### Header Component
- **Desktop**: Fixed top navigation with logo and menu links
- **Mobile**: Hidden (bottom navigation used instead)
- **Features**: Smooth scroll to sections, scroll-based styling

### Bottom Navigation (Mobile)
- **5 Navigation Items**: Home, About, Projects, Skills, Contact
- **Active State Detection**: Automatically highlights current section
- **Touch Optimized**: Large tap targets (48px+)
- **Visual Indicators**: Top border and icon glow for active item

### Hero Section
- **Profile Image**: Parallax scroll effect (30% speed)
- **Animated Background**: Pulsing gradient effect
- **Call-to-Action**: Primary and secondary buttons
- **Social Links**: LinkedIn, GitHub, Telegram icons

### Projects Section
- **8 Real Projects**: Including Co-founder Finder, Cold Email System, Blog Backend
- **Project Images**: Lazy-loaded images with hover effects
- **Tags System**: Technology tags for each project
- **Live Links**: Demo and GitHub links for each project
- **Animations**: Scale-in animation with staggered delays

### Skills Section
- **5 Categories**: Frontend, Backend, Database & DevOps, AI & Blockchain, Tools
- **Vue.js Integration**: Badge powered by Vue.js component
- **Interactive Badges**: Hover effects on skill items
- **Slide Animations**: Left slide-in with staggered timing

### Contact Section
- **Contact Form**: Name, email, and message fields
- **Form Validation**: HTML5 validation
- **Social Links**: Direct links to social profiles
- **Responsive Layout**: Stacked on mobile, side-by-side on desktop

## 🎬 Animation System

### Scroll-Triggered Animations
The portfolio uses a custom `useScrollAnimation` hook built on the Intersection Observer API:

```typescript
const { elementRef, isVisible } = useScrollAnimation({
  triggerOnce: true,
  rootMargin: '0px 0px -100px 0px'
});
```

### Animation Types
1. **Fade In**: `fade-in` class - Elements fade and slide up
2. **Slide Left**: `slide-in-left` class - Elements slide from left
3. **Slide Right**: `slide-in-right` class - Elements slide from right
4. **Scale In**: `scale-in` class - Elements scale from 0.8x to 1x

### Staggered Animations
- **Stagger Delays**: 0.1s, 0.2s, 0.3s, 0.4s
- **Applied to**: Project cards, skill categories
- **Effect**: Sequential reveal for visual flow

### Parallax Effects
- **Hero Image**: Parallax scroll with 0.3 speed multiplier
- **Implementation**: Custom `useParallax` hook
- **Performance**: Uses `will-change` for GPU acceleration

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 968px - Full layout with top navigation
- **Tablet**: 768px - 968px - Adjusted spacing and layouts
- **Mobile**: 480px - 768px - Bottom navigation, stacked layouts
- **Small Mobile**: < 480px - Optimized for small screens

### Mobile Optimizations
- **Bottom Navigation**: Replaces top header on mobile
- **Touch Targets**: Minimum 48px for all interactive elements
- **Font Scaling**: Responsive typography scaling
- **Image Optimization**: Lazy loading and responsive sizing
- **Smooth Scrolling**: `-webkit-overflow-scrolling: touch`

### Responsive Features
- **Flexible Grids**: Auto-fit columns that adapt to screen size
- **Stacked Layouts**: Vertical stacking on mobile
- **Optimized Padding**: Reduced spacing on smaller screens
- **Readable Text**: Adjusted line heights and font sizes

## 🚀 Installation

### Prerequisites
- Node.js 18+ and npm
- Git

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tim-Alpha/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 💻 Development

### Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint

### Development Workflow

1. **Component Development**: Create components in `src/components/`
2. **Styling**: Add component-specific CSS files
3. **Animations**: Use custom hooks for scroll animations
4. **Testing**: Test on multiple devices and browsers
5. **Build**: Run `npm run build` before deployment

### Code Structure Guidelines

- **Components**: One component per file, PascalCase naming
- **Hooks**: Custom hooks in `src/hooks/` directory
- **Styles**: Component-scoped CSS files
- **Types**: TypeScript interfaces for type safety
- **Constants**: Project data in component files

## 🌐 Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Configuration**
   - The `vercel.json` file is pre-configured
   - Build command: `npm run build`
   - Output directory: `dist`
   - Framework: Vite

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy dist folder**
   - Upload `dist/` folder to your hosting provider
   - Configure server to serve `index.html` for all routes (SPA routing)

## ⚡ Performance Optimizations

### Code Splitting
- **Vite**: Automatic code splitting
- **Lazy Loading**: Images loaded with `loading="lazy"`
- **Dynamic Imports**: Components loaded on demand

### Animation Performance
- **Intersection Observer**: Efficient scroll detection
- **CSS Transforms**: GPU-accelerated animations
- **Will-Change**: Optimized for transform properties
- **Passive Listeners**: Non-blocking scroll events

### Image Optimization
- **Lazy Loading**: Images load as they enter viewport
- **Responsive Images**: Appropriate sizing for devices
- **Format**: Optimized PNG/JPG formats

### Bundle Optimization
- **Tree Shaking**: Unused code elimination
- **Minification**: Production builds are minified
- **Gzip Compression**: Enabled on Vercel

## 🎯 Key Design Decisions

### Why React + Vue.js?
- **React**: Primary framework for component architecture
- **Vue.js**: Integrated to demonstrate framework interoperability
- **TypeScript**: Type safety across both frameworks

### Why Custom Animation Hooks?
- **Performance**: Intersection Observer is more efficient than scroll listeners
- **Flexibility**: Custom hooks allow fine-tuned control
- **Reusability**: Hooks can be used across components
- **No Dependencies**: Reduces bundle size

### Why Bottom Navigation on Mobile?
- **UX Best Practice**: Easier thumb reach on mobile devices
- **Modern Pattern**: Native app-like experience
- **Space Efficiency**: More content visible without header

### Why Dark Theme?
- **Eye Comfort**: Reduced eye strain
- **Modern Aesthetic**: Professional and contemporary
- **Battery Saving**: On OLED displays
- **Developer Appeal**: Popular in developer communities

## 📝 Customization Guide

### Updating Personal Information
1. **Hero Section**: Edit `src/components/Hero.tsx`
2. **About Section**: Edit `src/components/About.tsx`
3. **Contact Info**: Edit `src/components/Contact.tsx` and `Footer.tsx`

### Adding Projects
1. Add project object to `projects` array in `src/components/Projects.tsx`
2. Include: title, description, tags, github, demo, image
3. Add project image to `public/` folder

### Modifying Colors
1. Edit CSS variables in `src/index.css`
2. Variables: `--bg-primary`, `--bg-secondary`, `--accent`, etc.

### Changing Animations
1. Modify animation classes in `src/index.css`
2. Adjust timing in `useScrollAnimation` hook
3. Change parallax speed in `useParallax` hook

## 🔗 Links

- **GitHub**: [https://github.com/Tim-Alpha](https://github.com/Tim-Alpha)
- **LinkedIn**: [https://www.linkedin.com/in/sachin-kinha-3b3041260/](https://www.linkedin.com/in/sachin-kinha-3b3041260/)
- **Telegram**: [https://t.me/SachinKinha](https://t.me/SachinKinha)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Sachin Kinha**
- Full Stack Web Developer
- 100+ GitHub Repositories
- Specialized in Database Scaling, AI Systems, and Blockchain

---

Built with ❤️ using React, Vue.js, and TypeScript
