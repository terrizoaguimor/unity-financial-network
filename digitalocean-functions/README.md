# DigitalOcean Functions - Unity Financial HubSpot Integration

This directory contains serverless functions for Unity Financial Network's HubSpot CRM integration.

## 🚀 Functions

### hubspot-lead
Creates and manages leads in HubSpot CRM from appointment form submissions.

**Features:**
- Creates new contacts in HubSpot
- Updates existing contacts if email already exists
- Adds appointment details as contact properties
- Creates notes with additional information
- Handles both English and Spanish submissions

## 📋 Prerequisites

1. **DigitalOcean CLI (doctl)**
   ```bash
   # Install doctl
   # macOS
   brew install doctl
   
   # Windows (scoop)
   scoop install doctl
   
   # Linux
   snap install doctl
   ```

2. **Authenticate with DigitalOcean**
   ```bash
   doctl auth init
   ```

3. **Install Serverless Support**
   ```bash
   doctl serverless install
   ```

## 🔧 Configuration

1. **HubSpot API Key**
   - Set as environment variable: `HUBSPOT_API_KEY`
   - Required for function to work properly

2. **Environment Variables**
   Update `.env.local` in the main project:
   ```env
   HUBSPOT_API_KEY=<your-hubspot-api-key>
   NEXT_PUBLIC_DO_FUNCTION_URL=<function-url-after-deployment>
   ```

## 📦 Deployment

### Automatic Deployment
```bash
# Run the deployment script
./deploy.sh
```

### Manual Deployment
```bash
# Navigate to functions directory
cd digitalocean-functions

# Deploy to DigitalOcean
doctl serverless deploy .

# Get function URL
doctl serverless functions get unity-financial-functions/hubspot-lead --url
```

## 🧪 Testing

### Test the Function Directly
```bash
# Replace <FUNCTION_URL> with your actual function URL
curl -X POST <FUNCTION_URL> \
  -H 'Content-Type: application/json' \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "305-555-0100",
    "appointmentType": "health",
    "appointmentDate": "2024-12-15",
    "appointmentTime": "10:00 AM",
    "preferredContact": "phone",
    "message": "Test appointment request",
    "language": "en"
  }'
```

### Expected Response
```json
{
  "success": true,
  "message": "Lead created successfully in HubSpot",
  "contactId": "12345678"
}
```

## 🔍 Monitoring

### View Function Logs
```bash
# Get recent logs
doctl serverless activations list --limit 5

# Get detailed logs for a specific activation
doctl serverless activations get <ACTIVATION_ID>
```

### View Function Info
```bash
# Get function details
doctl serverless functions get unity-financial-functions/hubspot-lead
```

## 📝 HubSpot Contact Properties

The function creates/updates the following properties in HubSpot:

### Standard Properties
- `email` - Contact email (required)
- `firstname` - First name (required)
- `lastname` - Last name (required)
- `phone` - Phone number
- `lifecyclestage` - Set to "lead"
- `hs_lead_status` - Set to "NEW"

### Custom Properties
These need to be created in HubSpot if they don't exist:
- `appointment_type` - Type of appointment (health/life)
- `appointment_date` - Requested appointment date
- `appointment_time` - Requested appointment time
- `preferred_contact_method` - How they prefer to be contacted
- `lead_source` - Set to "Website - Schedule Form"
- `language_preference` - Language preference (en/es)

## 🛠️ Troubleshooting

### Function Not Deploying
1. Check authentication: `doctl auth whoami`
2. Check serverless is installed: `doctl serverless status`
3. Check project structure: Ensure `project.yml` is correct

### HubSpot API Errors
1. Verify API key is valid
2. Check if contact already exists (409 error)
3. Ensure required fields are present
4. Check HubSpot API limits

### CORS Issues
The function includes CORS headers for browser requests:
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: POST, OPTIONS`

## 📊 Integration Flow

1. **User fills appointment form** on Unity Financial website
2. **Form submission** triggers `/api/schedule-appointment` endpoint
3. **API route** sends data to:
   - HubSpot (via this function or direct API)
   - Email notifications (via Resend)
4. **HubSpot** creates/updates lead in CRM
5. **Response** returned to user with confirmation

## 🔐 Security Notes

- API key should be stored as environment variable in production
- Function validates required fields before processing
- Handles duplicate contacts gracefully
- Returns sanitized error messages

## 📚 Resources

- [DigitalOcean Functions Documentation](https://docs.digitalocean.com/products/functions/)
- [HubSpot API Documentation](https://developers.hubspot.com/docs/api/crm/contacts)
- [Unity Financial Website](https://unityfinancialnetwork.com)

## 🤝 Support

For issues or questions:
- Unity Financial IT: info@unityfinancialnetwork.com
- Phone: (786) 963-6392