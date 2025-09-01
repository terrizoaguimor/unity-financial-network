# CLAUDE.md - Unity Financial Network Website

## 🎯 Project Overview
Sitio web corporativo moderno y vibrante para Unity Financial Network, una empresa de servicios financieros y seguros, con despliegue en DigitalOcean e integración de asistente AI.

## 📋 Initial Requirements

### Cliente Request:
"Es necesario realizar un nuevo proyecto en NextJS, TailwindCSS y Framer-Motion, bastante corporativo, sobre el sitio web https://unityfinancialnetwork.com/. Es necesario mantener la paleta de colores y el mismo contenido, pero el diseño debe de ser más vibrante y llamativo. La idea es que llame la atención por completo, que sea interactivo y funcione correctamente."

### Características Principales:
- **Stack Tecnológico**: Next.js 15, TypeScript, TailwindCSS, Framer Motion
- **Diseño**: Corporativo pero vibrante, moderno e interactivo
- **Funcionalidad**: Sistema bilingüe (Inglés/Español)
- **Responsive**: Optimizado para móviles, tablets y desktop
- **Deployment**: DigitalOcean App Platform con Container Registry
- **AI Assistant**: ElevenLabs Conversational AI Widget integrado
- **Tipo**: Sitio web público con landing page

## 🎨 Design System

### Paleta de Colores:
```css
primary: #522784 (Morado corporativo)
primary-shades: {
  50: '#f5f3ff',
  100: '#ede9fe',
  200: '#ddd6fe',
  300: '#c4b5fd',
  400: '#a78bfa',
  500: '#8b5cf6',
  600: '#7c3aed',
  700: '#6d28d9',
  800: '#522784',
  900: '#4c1d95',
}
accent-cyan: #abb8c3
success: green-600
warning: yellow-600
danger: red-600
```

### Logos:
- Logo principal: `/images/logo-main.png`
- Logo blanco (fondos oscuros): `/images/logo-white.png`

## 📁 Project Structure

```
unity-financial/
├── app/
│   ├── layout.tsx (Root layout with AI widget)
│   ├── page.tsx (Home page)
│   ├── globals.css
│   ├── elevenlabs-script.tsx (AI Widget component)
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── blog/page.tsx
│   ├── join-unity/page.tsx
│   ├── quote/page.tsx
│   ├── payments/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── widget-test/page.tsx (Testing page)
├── components/
│   ├── HeaderSimple.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── AboutSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   ├── ConditionalElevenLabs.tsx
│   ├── ElevenLabsWidget.tsx
│   └── TempWidget.tsx
├── lib/
│   └── translations.ts
├── contexts/
│   └── LanguageContext.tsx
├── public/
│   ├── images/
│   ├── debug-widget.js
│   └── elevenlabs-widget.html
├── messages/
│   ├── en.json
│   └── es.json
├── types/
│   └── elevenlabs.d.ts
├── Dockerfile (Multi-stage optimized build)
├── .dockerignore
├── app.yaml (DigitalOcean config)
├── deploy.sh (Automated deployment script)
├── CLAUDE.md (This file - project documentation)
├── README.md (Project README)
└── next.config.mjs (Standalone output config)
```

## 🚀 Deployment Architecture

### DigitalOcean Setup:
- **App Platform**: cb099a3d-7c17-46aa-a293-c34150d2a832
- **Container Registry**: registry.digitalocean.com/unity-financial
- **Live URL**: https://unity-financial-i3sz9.ondigitalocean.app
- **Region**: SFO (San Francisco)
- **Current Version**: v1.0 (Public Website)

### Docker Configuration:
```dockerfile
# Multi-stage build optimized for Next.js
FROM node:20-alpine AS deps
FROM node:20-alpine AS builder  
FROM node:20-alpine AS runner
# Non-root user, standalone output, port 3000
```

### Deployment Commands:
```bash
# Build Docker image
docker build --no-cache -t registry.digitalocean.com/unity-financial/unity-app:v1.0 .

# Push to registry
docker push registry.digitalocean.com/unity-financial/unity-app:v1.0

# Deploy to DigitalOcean
doctl apps update cb099a3d-7c17-46aa-a293-c34150d2a832 --spec app.yaml

# Or use automated script
./deploy.sh
```

## 🤖 ElevenLabs AI Integration

### Agent Configuration:
- **Agent ID**: `agent_8901k2cr8zvwepcarx1qw7p3rvnz`
- **Agent Name**: Alex
- **Company**: Unity Financial Network
- **Language**: Spanish (primary), English (secondary)
- **Position**: Fixed bottom-right (20px from edges)
- **Shows on**: All public pages

### Implementation:
- Uses ConditionalElevenLabs component
- Only appears on public-facing pages

## 🌐 Public Website Features

### Páginas Principales:
- **Home**: Hero section animado, servicios, testimonios
- **About**: Información de la empresa
- **Services**: 11 tipos de seguros detallados
- **Blog**: Artículos y noticias
- **Contact**: Formulario de contacto
- **Quote**: Solicitud de cotización
- **Join Unity**: Oportunidades de carrera
- **Payments**: Portal de pagos

### Componentes Principales:
- **HeaderSimple**: Navegación con menú de seguros
- **HeroSection**: Hero animado con estadísticas
- **ServicesSection**: Grid de servicios
- **AboutSection**: Información de la empresa
- **TestimonialsSection**: Testimonios de clientes
- **ContactSection**: Formulario de contacto
- **Footer**: Información y enlaces

## 🌐 Bilingual System

Sistema de traducción usando React Context:
- Selector de idioma en header
- Traducciones en `/messages/en.json` y `/messages/es.json`
- Context provider en `contexts/LanguageContext.tsx`
- Cambio instantáneo sin recargar página

## 📱 Responsive Design

### Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

### Optimizaciones:
- Menús hamburguesa en móvil
- Grid layouts adaptativos
- Imágenes optimizadas con Next/Image
- Touch-friendly interfaces

## ✨ Interactive Features

### Animaciones con Framer Motion:
- Scroll reveal animations
- Page transitions  
- Hover effects con scale
- Staggered animations
- Loading states
- Modal transitions

### Performance:
- Lighthouse Score: > 90
- Code splitting automático
- Lazy loading
- Standalone output para Docker
- Image optimization

## 🔧 Technical Specifications

### Stack Completo:
- **Frontend**: Next.js 15.5.2, React 18
- **Styling**: TailwindCSS 3.x
- **Animations**: Framer Motion 11.x
- **Icons**: Lucide React (optimized with tree-shaking)
- **Language**: TypeScript
- **Security**: Cloudflare Turnstile
- **Email**: Resend API
- **Deployment**: Docker + DigitalOcean
- **AI**: ElevenLabs Widget (excluded from portals)

### Best Practices:
- Type safety con TypeScript
- Component isolation
- Error boundaries
- Input validation
- SEO optimization
- Accessibility (ARIA)
- Security headers

## 📊 Performance Metrics

### Achieved Targets:
- **Build Size**: Optimized with standalone
- **Load Time**: < 2s on 3G
- **Time to Interactive**: < 3.5s
- **Bundle Size**: Code-split por ruta
- **Image Optimization**: WebP con fallback

## 🔐 Security & Compliance

### Medidas Implementadas:
- **Cloudflare Turnstile**: Spam protection on all forms with server-side validation
- **GDPR Cookie Consent**: 4-category system (Necessary, Functional, Analytics, Marketing) 
- **Legal Framework**: Privacy Policy, Terms & Conditions, Cookie Policy, Opt-out Policy
- **Multi-Consent System**: Separate checkboxes for contact, terms, and privacy consent
- **Authentication**: Context API for portals with protected routes
- **Input Sanitization**: XSS prevention across all forms
- **Security Headers**: HSTS, X-Frame-Options, Content-Type-Options, Referrer Policy
- **HTTPS Enforcement**: SSL/TLS in production with auto-redirect
- **No Hardcoded Secrets**: Environment variables and secure key management
- **Non-root Docker User**: Container security best practices

## 🚀 Version History

### v4.1 (Current - Sep 2025):
- ✅ **Legal Framework Complete**: Privacy Policy, Terms, Cookie Policy, Opt-out Policy
- ✅ **GDPR Cookie Consent**: 4-category system with localStorage persistence and modal customization
- ✅ **Enhanced Security**: Cloudflare Turnstile integrated across all forms with server validation
- ✅ **Performance Optimized**: 33KB bundle reduction, Lighthouse improvements, WCAG accessibility
- ✅ **Asset Management Fixed**: Unity SVG logos, public directory deployment, 404 resolution
- ✅ **Quote Calculator Enhanced**: Multi-checkbox consent (contact/terms/privacy) + Turnstile
- ✅ **Contact System Corrected**: Phone number (786) 963-6392 across all email templates
- ✅ **Build System Stable**: DigitalOcean compatibility, production deployment optimized

### v4.0 (Aug 2025):
- ✅ Portal Administrativo completo
- ✅ Marketing Hub con 14 páginas
- ✅ WhatsApp Business AI Management  
- ✅ Content Management System
- ✅ Gestión de cursos, documentos y noticias
- ✅ Sistema de auditoría

### v3.2 (Previous):
- Portal de agentes completo
- Integración ElevenLabs funcional

### v2.0:
- Sitio público con AI widget
- Deployment en DigitalOcean

### v1.0:
- Sitio inicial sin portales

## 🔮 Future Enhancements

### Planned Features:
1. **Payment Processing** (Stripe/PayPal)
2. **Advanced Analytics** con Google Analytics
3. **Email Automation** con SendGrid
4. **SMS Notifications**
5. **Mobile Apps** (React Native)
6. **API REST** para integraciones
7. **Advanced Forms** con validación
8. **Live Chat** support

## 📝 Development Notes

### Key Commands:
```bash
# Development
npm run dev

# Build production
npm run build

# Start production
npm run start

# Lint code
npm run lint

# Deploy to DigitalOcean
./deploy.sh
```

### Environment Variables:
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://unity-financial-i3sz9.ondigitalocean.app
```

### Testing:
- **Public Website**: No authentication needed
- **AI Assistant**: Disponible en todas las páginas

## ✅ Project Status: PRODUCTION READY v4.1

### Completed Deliverables:
- ✅ **Public Website**: Complete with legal framework and GDPR compliance
- ✅ **Portal Systems**: Agent portal and admin portal fully functional
- ✅ **Security**: Cloudflare Turnstile integrated across all forms
- ✅ **Legal Compliance**: Privacy Policy, Terms, Cookie Policy, Opt-out Policy
- ✅ **Cookie Consent**: GDPR-compliant 4-category system
- ✅ **Performance**: Optimized bundle size, Lighthouse improvements
- ✅ **Accessibility**: WCAG 2.1 AA compliant
- ✅ **Asset Management**: Unity SVG logos properly deployed
- ✅ **Enhanced Quote Calculator**: Multi-consent system with Turnstile
- ✅ **Email System**: Correct contact information across all templates
- ✅ **Bilingual Support**: Complete EN/ES translation system
- ✅ **Docker Deployment**: Stable production build system
- ✅ **DigitalOcean**: Auto-deployment pipeline configured

### Live URLs:
- **Production**: https://unity-financial-i3sz9.ondigitalocean.app
- **Legal Pages**: /privacy, /terms, /cookies, /opt-out
- **Quote Calculator**: /quote (enhanced with security)
- **Agent Portal**: /agents
- **Admin Portal**: /admin

## 📋 Development Guidelines v4.1

### **Critical Security Requirements** 🔒
1. **ALL forms MUST include Turnstile captcha** with server-side validation
2. **Quote calculator requires 3 checkboxes**: contact consent + terms + privacy
3. **Email templates MUST use correct phone**: (786) 963-6392
4. **Environment variables required**: Turnstile keys, Resend API key
5. **Legal pages must remain current** and comprehensive

### **Performance Standards** ⚡
- Lighthouse Performance: 85+ | Accessibility: 90+ | Best Practices: 85+
- Bundle size optimized with tree-shaking (`OptimizedIcons.tsx`)
- SVG logos, WebP/AVIF images, aggressive caching for static assets
- Modern JavaScript targeting to reduce polyfills

### **Legal Compliance Checklist** ⚖️
- [x] Cookie consent appears for new users (4 categories)
- [x] Privacy policy comprehensive with contact details  
- [x] Terms & conditions clear and enforceable
- [x] Opt-out procedures documented with timeframes
- [x] Multi-consent system in quote calculator
- [x] GDPR principles followed in data collection

### **Key File Locations** 📁
- **Security**: `components/TurnstileWidget.tsx`, `lib/turnstile.ts`
- **Legal**: `app/privacy/`, `app/terms/`, `app/cookies/`, `app/opt-out/`
- **Cookie System**: `components/CookieConsent.tsx`
- **Quote Calculator**: `app/quote/page.tsx` (enhanced)
- **Assets**: `public/images/logo-main.svg`, `public/images/logo-white.svg`

---

*Unity Financial Network v4.1 - Enterprise Insurance Platform*  
*Complete Legal Framework | GDPR Compliant | Production Ready*  
*Deployed on DigitalOcean with auto-deployment pipeline*