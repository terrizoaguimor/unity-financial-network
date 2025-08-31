/**
 * @fileoverview TailwindCSS Configuration for Unity Financial Network
 * 
 * This configuration extends TailwindCSS with custom design tokens, responsive
 * breakpoints, animations, and brand-specific styling for the Unity Financial
 * Network platform.
 * 
 * Features:
 * - Custom brand color palette (primary purple scheme)
 * - Extended responsive breakpoints for tablets and large screens
 * - Fluid typography with clamp() for responsive text scaling
 * - Custom animations for enhanced user experience
 * - Gradient utilities for modern design effects
 * 
 * The configuration supports the vibrant, modern design requirements
 * while maintaining accessibility and performance.
 * 
 * @author Unity Financial Network Development Team
 * @version 4.0
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',      // Small phones
        'sm': '640px',      // Large phones
        'md': '768px',      // Small tablets
        'lg': '1024px',     // Tablets landscape
        'xl': '1280px',     // Desktop
        '2xl': '1536px',    // Large desktop
        '3xl': '1920px',    // Full HD
        // Tablet specific
        'tablet': '768px',
        'tablet-lg': '1024px',
        'tablet-xl': '1366px', // Galaxy Tab Ultra
      },
      fontSize: {
        // Clamp for responsive typography
        'xs-r': ['clamp(0.7rem, 1.5vw, 0.875rem)', '1.2'],
        'sm-r': ['clamp(0.8rem, 2vw, 1rem)', '1.4'],
        'base-r': ['clamp(0.9rem, 2.5vw, 1.125rem)', '1.5'],
        'lg-r': ['clamp(1rem, 3vw, 1.25rem)', '1.6'],
        'xl-r': ['clamp(1.1rem, 3.5vw, 1.5rem)', '1.4'],
        '2xl-r': ['clamp(1.3rem, 4vw, 1.875rem)', '1.3'],
        '3xl-r': ['clamp(1.5rem, 5vw, 2.25rem)', '1.2'],
        '4xl-r': ['clamp(2rem, 6vw, 3rem)', '1.1'],
        '5xl-r': ['clamp(2.5rem, 7vw, 3.75rem)', '1'],
      },
      colors: {
        primary: {
          DEFAULT: '#522784',
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
        },
        accent: {
          cyan: '#abb8c3',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config