/**
 * @fileoverview Next.js Configuration for Unity Financial Network
 * 
 * This configuration file optimizes the Next.js application for production
 * deployment in Docker containers and DigitalOcean App Platform.
 * 
 * Key Configurations:
 * - Standalone output for Docker optimization
 * - Image domain allowlisting for security
 * - Performance optimizations for production
 * 
 * The standalone output creates a self-contained build that includes
 * all necessary dependencies, perfect for containerized deployments.
 * 
 * @author Unity Financial Network Development Team
 * @version 4.0
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Standalone Output Configuration
   * 
   * Enables standalone build mode for Docker deployments.
   * This creates a minimal, self-contained production build
   * that includes all dependencies and can run independently.
   * 
   * Benefits:
   * - Smaller Docker images
   * - Faster cold starts
   * - Better performance in containerized environments
   * - Easier deployment to cloud platforms
   */
  output: 'standalone',

  /**
   * Performance Optimizations
   */
  compress: true,
  swcMinify: true,
  poweredByHeader: false,
  
  /**
   * Modern JavaScript Target
   * Reduces polyfills for modern browsers
   */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  /**
   * Bundle Analysis and Tree Shaking
   */
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    optimizeCss: true,
  },

  /**
   * Image Optimization Configuration
   * 
   * Configures Next.js Image component to allow external image sources.
   * This is required for loading images from remote domains securely.
   * 
   * Security Note: Only trusted domains should be added to this list
   * to prevent potential security vulnerabilities.
   */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unityfinancialnetwork.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  /**
   * Headers for Performance and Security
   */
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        }
      ],
    },
    {
      source: '/images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/_next/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],

  /**
   * Additional Performance Optimizations
   * 
   * These settings can be uncommented to enable additional optimizations:
   * 
   * // Enable compression for better performance
   * compress: true,
   * 
   * // Optimize CSS and JavaScript
   * swcMinify: true,
   * 
   * // Enable experimental features
   * experimental: {
   *   appDir: true,
   *   optimizeCss: true,
   * },
   * 
   * // Configure headers for security and caching
   * headers: async () => [
   *   {
   *     source: '/(.*)',
   *     headers: [
   *       {
   *         key: 'X-Frame-Options',
   *         value: 'DENY',
   *       },
   *       {
   *         key: 'X-Content-Type-Options',
   *         value: 'nosniff',
   *       },
   *     ],
   *   },
   * ],
   */
}

export default nextConfig