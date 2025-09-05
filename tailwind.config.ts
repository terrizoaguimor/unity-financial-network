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
        // Unity Financial Brand Colors
        primary: {
          DEFAULT: '#512783', // Unity Purple
          50: '#f4f0fa',
          100: '#e9e1f5',
          200: '#d3c3eb',
          300: '#bda5e1',
          400: '#a787d7',
          500: '#9169cd',
          600: '#7b4bc3',
          700: '#6938a2',
          800: '#512783', // Main Unity Purple
          900: '#3d1d62',
          950: '#291341',
        },
        accent: {
          DEFAULT: '#f18918', // Unity Orange
          50: '#fef8f0',
          100: '#fdf0e1',
          200: '#fbd9b3',
          300: '#f9c285',
          400: '#f7ab57',
          500: '#f18918', // Main Unity Orange
          600: '#d97a16',
          700: '#b56713',
          800: '#915410',
          900: '#6d410d',
        },
        neutral: {
          light: '#dadada', // Unity Light Gray
          DEFAULT: '#403c43', // Unity Dark Gray
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#ebebeb',
          300: '#dadada', // Unity Light Gray
          400: '#b8b8b8',
          500: '#969696',
          600: '#747474',
          700: '#525252',
          800: '#403c43', // Unity Dark Gray
          900: '#2e2b30',
        },
        // Keep some semantic colors for specific uses
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
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