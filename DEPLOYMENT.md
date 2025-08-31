# Unity Financial - DigitalOcean Deployment Guide

## 🚀 Deployment Information

The Unity Financial Network website is deployed on DigitalOcean App Platform using Container Registry.

### Live Application
- **URL**: https://unity-financial-i3sz9.ondigitalocean.app
- **Platform**: DigitalOcean App Platform
- **Region**: San Francisco (sfo2)
- **Instance**: Basic XXS

### Infrastructure Components

1. **Container Registry**
   - Name: unity-financial
   - URL: registry.digitalocean.com/unity-financial
   - Repository: unity-app

2. **App Platform**
   - App ID: cb099a3d-7c17-46aa-a293-c34150d2a832
   - Service: unity-web
   - Port: 3000

## 📋 Prerequisites

- Docker installed locally
- doctl CLI installed and configured
- Access to DigitalOcean account (token configured)

## 🔧 Initial Setup (Already Completed)

1. **Authenticate with DigitalOcean**
   ```bash
   doctl auth init --access-token YOUR_TOKEN
   ```

2. **Create Container Registry**
   ```bash
   doctl registry create unity-financial --subscription-tier basic
   ```

3. **Login to Registry**
   ```bash
   doctl registry login
   ```

## 🔄 Deployment Process

### Automatic Deployment

Use the provided deployment script:

```bash
./deploy.sh
```

This script will:
1. Build the Docker image
2. Push to DigitalOcean Container Registry
3. Trigger app deployment
4. Monitor deployment status
5. Display the live URL when complete

### Manual Deployment

1. **Build Docker Image**
   ```bash
   docker build -t registry.digitalocean.com/unity-financial/unity-app:latest .
   ```

2. **Push to Registry**
   ```bash
   docker push registry.digitalocean.com/unity-financial/unity-app:latest
   ```

3. **Update App**
   ```bash
   doctl apps update cb099a3d-7c17-46aa-a293-c34150d2a832 --spec app.yaml
   ```

4. **Check Deployment Status**
   ```bash
   doctl apps list-deployments cb099a3d-7c17-46aa-a293-c34150d2a832
   ```

## 📝 Configuration Files

### Dockerfile
- Multi-stage build for optimized production image
- Uses Node.js 20 Alpine for smaller image size
- Includes standalone Next.js build

### app.yaml
- Defines app configuration for DigitalOcean
- Specifies service settings, health checks, and environment variables

### .dockerignore
- Excludes unnecessary files from Docker build context
- Improves build performance

## 🔍 Monitoring

### View App Details
```bash
doctl apps get cb099a3d-7c17-46aa-a293-c34150d2a832
```

### View Logs
```bash
doctl apps logs cb099a3d-7c17-46aa-a293-c34150d2a832
```

### View Deployment History
```bash
doctl apps list-deployments cb099a3d-7c17-46aa-a293-c34150d2a832
```

## 🔄 Rollback

To rollback to a previous deployment:

```bash
doctl apps create-deployment cb099a3d-7c17-46aa-a293-c34150d2a832 --rollback DEPLOYMENT_ID
```

## 🌍 Environment Variables

Environment variables are configured in `app.yaml`:
- `NODE_ENV`: production
- `NEXT_PUBLIC_API_URL`: Application URL

To update environment variables:
```bash
doctl apps update cb099a3d-7c17-46aa-a293-c34150d2a832 --spec app.yaml
```

## 📊 Scaling

To scale the application:

```bash
# Scale to 2 instances
doctl apps update cb099a3d-7c17-46aa-a293-c34150d2a832 \
  --spec-path services.name=unity-web \
  --spec-path services.instance_count=2
```

## 🛡️ Security

- Container Registry is private and requires authentication
- App Platform handles SSL certificates automatically
- Health checks ensure service availability

## 🆘 Troubleshooting

### Registry Login Issues
```bash
doctl registry login --expiry-seconds 0
```

### Build Cache Issues
```bash
docker system prune -a
```

### Deployment Failures
1. Check logs: `doctl apps logs cb099a3d-7c17-46aa-a293-c34150d2a832`
2. Verify image exists: `doctl registry repository list-tags unity-financial unity-app`
3. Check app spec: `doctl apps spec get cb099a3d-7c17-46aa-a293-c34150d2a832`

## 📞 Support

For DigitalOcean support:
- Documentation: https://docs.digitalocean.com/products/app-platform/
- Support: https://www.digitalocean.com/support/

## 🔑 Important Notes

- **Never commit** the DigitalOcean API token to version control
- Always test changes locally before deploying
- Monitor costs in DigitalOcean dashboard
- Set up alerts for app health and performance

---

Last Updated: August 11, 2025
Deployed By: Unity Financial Development Team