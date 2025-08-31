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
  },

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