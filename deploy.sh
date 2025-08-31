#!/bin/bash

# DigitalOcean Unity Financial Deployment Script
# This script builds and deploys the Unity Financial app to DigitalOcean

set -e

echo "🚀 Starting Unity Financial deployment to DigitalOcean..."

# Configuration
REGISTRY_URL="registry.digitalocean.com/unity-financial"
IMAGE_NAME="unity-app"
APP_ID="cb099a3d-7c17-46aa-a293-c34150d2a832"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}📦 Building Docker image...${NC}"
docker build -t ${REGISTRY_URL}/${IMAGE_NAME}:latest .

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Docker image built successfully${NC}"
else
    echo -e "${RED}❌ Docker build failed${NC}"
    exit 1
fi

echo -e "${YELLOW}🔐 Logging into DigitalOcean Container Registry...${NC}"
doctl registry login

echo -e "${YELLOW}📤 Pushing image to registry...${NC}"
docker push ${REGISTRY_URL}/${IMAGE_NAME}:latest

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Image pushed successfully${NC}"
else
    echo -e "${RED}❌ Image push failed${NC}"
    exit 1
fi

echo -e "${YELLOW}🔄 Triggering app deployment...${NC}"
# Update the app to trigger a new deployment
doctl apps update ${APP_ID} --spec app.yaml

echo -e "${YELLOW}⏳ Waiting for deployment to complete...${NC}"
# Poll deployment status
while true; do
    STATUS=$(doctl apps list-deployments ${APP_ID} --format Phase --no-header | head -1)
    if [ "$STATUS" = "ACTIVE" ]; then
        echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
        break
    elif [ "$STATUS" = "ERROR" ] || [ "$STATUS" = "CANCELED" ]; then
        echo -e "${RED}❌ Deployment failed with status: $STATUS${NC}"
        exit 1
    else
        echo "Current status: $STATUS - waiting..."
        sleep 10
    fi
done

# Get the app URL
APP_URL=$(doctl apps get ${APP_ID} -o json | jq -r '.[0].live_url')
echo -e "${GREEN}🎉 Unity Financial is now live at: ${APP_URL}${NC}"

echo ""
echo "Deployment Summary:"
echo "==================="
echo "App ID: ${APP_ID}"
echo "Live URL: ${APP_URL}"
echo "Registry: ${REGISTRY_URL}"
echo "Image: ${IMAGE_NAME}:latest"
echo ""
echo -e "${GREEN}✨ Deployment completed successfully!${NC}"