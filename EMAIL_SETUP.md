# Email Integration Setup

## Resend Setup Instructions

### 1. Create Resend Account
- Go to https://resend.com
- Sign up for a free account
- You get 100 emails/day free forever

### 2. Get Your API Key
- After signing in, go to API Keys section
- Create a new API key
- Copy the API key (starts with `re_`)

### 3. Add API Key to Vercel
```bash
# In Vercel Dashboard:
1. Go to your project settings
2. Navigate to Environment Variables
3. Add: RESEND_API_KEY = your_api_key_here
4. Make sure it's available for Production, Preview, and Development
```

Or via CLI:
```bash
vercel env add RESEND_API_KEY
# Paste your API key when prompted
```

### 4. Verify Domain (Optional but Recommended)
- In Resend dashboard, add your domain (e.g., ootahgonah.com)
- Add the DNS records they provide
- Once verified, update the `from` field in `/api/send-email.js`:
  ```javascript
  from: 'Circle <noreply@ootahgonah.com>'
  ```

### 5. Test
After deployment:
- Fill out the "Join the Circle" form
- Check ootahgonah-circle@googlegroups.com for the email
- Check Resend dashboard for delivery status

## Files Changed
- `/api/send-email.js` - Serverless function to send emails
- `/controllers/mainController.js` - Updated form submission
- `/package.json` - Added resend dependency

## Important Notes
- Free tier: 100 emails/day
- Uses `onboarding@resend.dev` initially (works for testing)
- Update to your domain once verified for better deliverability
- All emails go to: ootahgonah-circle@googlegroups.com
