# Intercom Live Chat Setup Guide

## 🚀 Installation Complete

Intercom has been successfully integrated into the Unity Financial Network website with the following components:

### 📁 Files Added:
- `components/IntercomProvider.tsx` - Intercom context provider
- `components/IntercomWidget.tsx` - Custom chat widget with Unity branding
- Updated `app/layout.tsx` - Integrated Intercom into the main layout
- Updated `.env.example` - Added Intercom environment variable

## 🔧 Configuration Steps

### 1. Create Intercom Account
1. Go to [intercom.com](https://www.intercom.com) 
2. Sign up for a new account or log in
3. Create a new workspace for "Unity Financial Network"

### 2. Get Your App ID
1. In your Intercom dashboard, go to **Settings** → **Installation**
2. Copy your **App ID** (looks like: `abc12345`)
3. Add it to your `.env.local` file:
   ```env
   NEXT_PUBLIC_INTERCOM_APP_ID=your_actual_app_id_here
   ```

### 3. Environment Variables
Create or update your `.env.local` file:
```env
# Intercom Configuration
NEXT_PUBLIC_INTERCOM_APP_ID=your_intercom_app_id_here
```

## 🎨 Features Implemented

### ✨ Custom Unity Branding
- **Primary Color**: Unity purple (#522784)
- **Custom Chat Button**: Branded with Unity colors and animations
- **Bilingual Support**: Automatically switches language based on user preference
- **Positioned**: Bottom-right corner with hide functionality

### 🌐 Bilingual Support
- **English**: Default language
- **Spanish**: Switches when user selects Spanish (`language === 'es'`)
- **Dynamic Updates**: Language changes automatically update Intercom settings

### 📱 Responsive Design
- **Mobile Optimized**: Touch-friendly chat button
- **Hover Effects**: Scale animation and tooltips
- **Notification Dot**: Green pulse animation to attract attention
- **Welcome Message**: Animated welcome bubble (appears briefly)

## 🎯 Intercom Dashboard Setup

### Recommended Settings:
1. **Messenger Settings**:
   - Enable for website visitors
   - Set business hours (Mon-Fri, 9:00 AM - 6:00 PM EST)
   - Enable automatic responses in Spanish and English

2. **Team Setup**:
   - Add team members
   - Set up Spanish-speaking agents for bilingual support
   - Configure routing rules by language

3. **Custom Attributes**:
   - Language preference
   - Page source
   - Lead source tracking

4. **Appearance**:
   - Primary color: #522784 (Unity purple)
   - Upload Unity Financial logo
   - Customize welcome message

## 🚀 Testing

### Test the Integration:
1. Visit your website
2. Look for the purple chat button in bottom-right corner
3. Click to open chat
4. Test language switching:
   - Switch site language to Spanish
   - Chat should update to Spanish
   - Switch back to English - chat updates

### Debug Mode:
- Open browser console to see Intercom loading status
- Check for any JavaScript errors
- Verify App ID is correctly set in environment

## 📊 Analytics & Tracking

The integration automatically tracks:
- **User Language**: EN or ES based on site preference
- **Source**: 'unity-financial-website'
- **Page Context**: Which page user started chat from
- **Timestamp**: When user initiated conversation

## 🔒 Security Features

- **Environment Variables**: App ID stored securely
- **Client-side Only**: No sensitive server data exposed
- **GDPR Compliant**: Respects cookie consent preferences
- **No Personal Data**: Only language preference tracked initially

## 🎪 Advanced Features

### Available Hooks:
```typescript
const { boot, shutdown, show, hide, update } = useIntercom();

// Boot Intercom with user data
boot({
  name: 'User Name',
  email: 'user@example.com',
  language_override: 'es'
});

// Show/hide messenger
show();
hide();

// Update user attributes
update({
  language_override: 'en'
});
```

## 🛠️ Customization Options

### Widget Positioning:
Edit `components/IntercomWidget.tsx`:
```css
/* Change position */
className="fixed bottom-4 left-4 z-50" // Move to bottom-left
className="fixed top-4 right-4 z-50"   // Move to top-right
```

### Color Customization:
```css
/* Change primary color */
bg-primary-600 → bg-blue-600    // Blue theme
bg-primary-600 → bg-green-600   // Green theme
```

### Hide on Specific Pages:
```typescript
// In IntercomWidget.tsx
const router = useRouter();
if (router.pathname === '/admin') return null; // Hide on admin pages
```

## ⚡ Performance Notes

- **Lazy Loading**: Intercom loads only when needed
- **Bundle Size**: ~45KB added to bundle (acceptable for live chat)
- **Caching**: Intercom assets are cached by CDN
- **No Blocking**: Loads asynchronously, doesn't block page render

## 🆘 Troubleshooting

### Common Issues:

1. **Chat Button Not Appearing**:
   - Check App ID in .env.local
   - Verify no JavaScript errors in console
   - Check if component is properly imported

2. **Language Not Switching**:
   - Verify LanguageContext is working
   - Check useLanguage hook implementation
   - Test language switch on site

3. **Styling Issues**:
   - Verify Tailwind classes are loading
   - Check for CSS conflicts
   - Test on different devices/browsers

### Support:
- Intercom Documentation: https://developers.intercom.com/
- React Hook Documentation: https://github.com/devrnt/react-use-intercom

## 🎉 Go Live Checklist

- [ ] Intercom account created and configured
- [ ] App ID added to environment variables  
- [ ] Bilingual settings configured in dashboard
- [ ] Team members added and trained
- [ ] Business hours set
- [ ] Welcome messages customized
- [ ] Tested on mobile and desktop
- [ ] Spanish language support verified
- [ ] Chat routing rules configured

---

**Unity Financial Network v4.1** - Live Chat Integration Complete 🚀
*Professional customer support with bilingual capabilities*