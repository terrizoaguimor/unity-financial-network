# 🏢 Unity Financial Network

<div align="center">
  <img src="public/images/logo-main.png" alt="Unity Financial Network" width="300"/>
  
  **Modern Insurance Services Website**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?logo=typescript)](https://www.typescriptlang.org/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
  [![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
  [![Status](https://img.shields.io/badge/Status-Production-success)](https://unity-financial-i3sz9.ondigitalocean.app)
  
  [Live Demo](https://unity-financial-i3sz9.ondigitalocean.app) • [Documentation](./CLAUDE.md)
</div>

---

## 📋 Overview

Unity Financial Network is a modern, vibrant corporate website for an insurance and financial services company. Built with Next.js 15 and TypeScript, it provides a complete bilingual experience with AI assistant integration.

## 🎯 Project Features

### Public Website
- **Bilingual Support** (English/Spanish) with instant switching
- **AI Assistant** (ElevenLabs) for customer support
- **Responsive Design** optimized for all devices
- **SEO Optimized** with meta tags and social sharing
- **Smooth Animations** with Framer Motion
- **11 Insurance Products** showcase
- **Contact Forms** with validation
- **Blog System** for content marketing

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 15.4.6** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - Latest React features

### Styling & UI
- **TailwindCSS 3.x** - Utility-first CSS framework
- **Framer Motion 11.x** - Smooth animations and transitions
- **Lucide React** - Modern icon library
- **Responsive Design** - Mobile-first approach

### AI Integration
- **ElevenLabs** - Conversational AI assistant (Alex)
- Spanish/English voice and text support
- Context-aware responses

### Deployment
- **Docker** - Containerized deployment
- **DigitalOcean App Platform** - Cloud hosting
- **Container Registry** - Image management

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm or yarn
- Docker (for deployment)
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd unity-financial
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
unity-financial/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services pages
│   ├── blog/              # Blog
│   ├── contact/           # Contact form
│   ├── quote/             # Quote request
│   └── ...                # Other pages
├── components/            # React components
│   ├── HeaderSimple.tsx   # Navigation
│   ├── HeroSection.tsx    # Hero component
│   ├── Footer.tsx         # Footer
│   └── ...                # Other components
├── contexts/              # React contexts
│   └── LanguageContext.tsx # i18n support
├── lib/                   # Utilities
│   └── translations.ts    # Translations
├── public/                # Static assets
│   └── images/           # Images
└── styles/               # Global styles
```

## 🌐 Pages

- `/` - Homepage with hero, services, testimonials
- `/about` - Company information
- `/services` - Insurance products overview
- `/services/[slug]` - Individual service pages
- `/blog` - Articles and news
- `/contact` - Contact form
- `/quote` - Quote request
- `/join-unity` - Career opportunities
- `/payments` - Payment portal

## 🎨 Design System

### Color Palette
```css
Primary: #522784 (Corporate Purple)
Secondary: #abb8c3 (Cyan)
Success: #16a34a
Warning: #ca8a04
Danger: #dc2626
```

### Typography
- Font: Inter (Google Fonts)
- Responsive sizing
- Clear hierarchy

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
./deploy.sh          # Deploy to DigitalOcean
```

### Environment Configuration

Create `.env.local` for local development:
```env
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 🐳 Docker Deployment

### Building Docker Image

```bash
# Build for production
docker build -t unity-financial:latest .

# Run locally
docker run -p 3000:3000 unity-financial:latest
```

## ☁️ DigitalOcean Deployment

The application is deployed on DigitalOcean App Platform.

### Deployment Process

```bash
# Automated deployment
./deploy.sh

# Manual deployment
docker build -t registry.digitalocean.com/unity-financial/unity-app:v1.0 .
docker push registry.digitalocean.com/unity-financial/unity-app:v1.0
doctl apps update cb099a3d-7c17-46aa-a293-c34150d2a832 --spec app.yaml
```

### Live URL
https://unity-financial-i3sz9.ondigitalocean.app

## 🤖 AI Assistant

The website includes an AI assistant powered by ElevenLabs:
- Name: Alex
- Languages: Spanish (primary), English
- Available on all pages
- Fixed position (bottom-right)

## 📱 Responsive Design

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lighthouse Score: > 90
- Load Time: < 2s on 3G
- Optimized images
- Code splitting
- Lazy loading

## 🔐 Security

- HTTPS enforcement
- Security headers
- Input sanitization
- No hardcoded secrets
- Non-root Docker user

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development Team** - Unity Financial Network
- **Design** - UX/UI Team
- **DevOps** - Infrastructure Team

## 📞 Support

- 📧 Email: support@unityfinancialnetwork.com
- 📱 Phone: (786) 963-6392
- 🌐 Website: https://unityfinancialnetwork.com

## 🙏 Acknowledgments

- Built with amazing open-source technologies
- Thanks to all contributors
- Powered by Next.js and React

---

<div align="center">
  <b>Unity Financial Network</b><br>
  Empowering Insurance Excellence<br>
  <br>
  Made with ❤️ by Unity Financial Team<br>
  © 2025 Unity Financial Network. All rights reserved.
</div>