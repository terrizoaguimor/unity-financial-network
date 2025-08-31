/**
 * @fileoverview Multi-stage Docker build for Unity Financial Network
 * 
 * This Dockerfile creates an optimized production build of the Next.js
 * application using a multi-stage build process for minimal image size
 * and maximum security.
 * 
 * Build Stages:
 * 1. Dependencies: Install only production dependencies
 * 2. Builder: Full build with all dependencies and source code
 * 3. Runner: Minimal runtime with only necessary files
 * 
 * Security Features:
 * - Non-root user execution (nextjs:nodejs)
 * - Minimal attack surface
 * - No build tools in final image
 * - Proper file permissions
 * 
 * Optimizations:
 * - Layer caching for faster rebuilds
 * - Standalone output for minimal bundle
 * - npm cache cleaning
 * - Telemetry disabled for performance
 * 
 * Usage:
 *   docker build -t unity-financial .
 *   docker run -p 3000:3000 unity-financial
 * 
 * @author Unity Financial Network Development Team
 * @version 4.0
 */

# Multi-stage build for Next.js application

# Stage 1: Dependencies
# Purpose: Install only production dependencies for the final image
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files for dependency installation
COPY package.json package-lock.json* ./
RUN npm ci --only=production && \
    npm cache clean --force

# Stage 2: Builder
# Purpose: Build the application with all dependencies
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .

# Set environment variables for production build
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Build the application (creates .next/standalone output)
RUN npm run build

# Stage 3: Runner
# Purpose: Minimal runtime environment for the application
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create non-root user for security
# This prevents the container from running as root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copy necessary files from builder stage
# Only copy what's needed for runtime to minimize image size
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set correct file permissions for non-root user
RUN chown -R nextjs:nodejs /app

# Switch to non-root user for security
USER nextjs

# Expose port 3000 for the application
EXPOSE 3000

# Set environment variables for the application
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Health check for container monitoring
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Start the application using the standalone server
CMD ["node", "server.js"]