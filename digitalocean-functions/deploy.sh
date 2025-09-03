#!/bin/bash

# DigitalOcean Functions Deployment Script for Unity Financial HubSpot Integration
# This script deploys the HubSpot lead function to DigitalOcean Functions

echo "========================================="
echo "Unity Financial - HubSpot Function Deploy"
echo "========================================="

# Check if doctl is installed
if ! command -v doctl &> /dev/null; then
    echo "❌ Error: doctl is not installed"
    echo "Please install doctl: https://docs.digitalocean.com/reference/doctl/how-to/install/"
    exit 1
fi

# Check if user is authenticated
if ! doctl auth whoami &> /dev/null; then
    echo "❌ Error: Not authenticated with DigitalOcean"
    echo "Please run: doctl auth init"
    exit 1
fi

# Set the HubSpot API key as an environment variable
# This should be set in your environment or passed as parameter
if [ -z "$HUBSPOT_API_KEY" ]; then
    echo "⚠️  Warning: HUBSPOT_API_KEY not set. Please set it before deployment."
    echo "   export HUBSPOT_API_KEY='your-api-key'"
    exit 1
fi

echo "📦 Deploying function to DigitalOcean..."

# Navigate to the functions directory
cd "$(dirname "$0")"

# Deploy the function
doctl serverless deploy . --verbose

if [ $? -eq 0 ]; then
    echo "✅ Function deployed successfully!"
    echo ""
    echo "📝 Getting function URL..."
    
    # Get the function URL
    FUNCTION_URL=$(doctl serverless functions get unity-financial-functions/hubspot-lead --url)
    
    if [ ! -z "$FUNCTION_URL" ]; then
        echo "🔗 Function URL: $FUNCTION_URL"
        echo ""
        echo "📋 Next steps:"
        echo "1. Update NEXT_PUBLIC_DO_FUNCTION_URL in .env.local with:"
        echo "   $FUNCTION_URL"
        echo ""
        echo "2. Test the function with:"
        echo "   curl -X POST $FUNCTION_URL \\"
        echo "     -H 'Content-Type: application/json' \\"
        echo "     -d '{\"firstName\":\"Test\",\"lastName\":\"User\",\"email\":\"test@example.com\"}'"
    fi
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi

echo ""
echo "========================================="
echo "Deployment complete!"
echo "========================================="