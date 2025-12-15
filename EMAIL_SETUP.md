# Email Setup Instructions

To enable the contact form to send emails to `gatirelocare@gmail.com`, you need to configure Gmail SMTP settings.

## Steps to Configure Gmail SMTP

### 1. Enable 2-Step Verification
1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** > **2-Step Verification**
3. Enable 2-Step Verification if not already enabled

### 2. Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select **Mail** as the app
3. Select **Other (Custom name)** as the device
4. Enter "GatiRelocare Website" as the name
5. Click **Generate**
6. Copy the 16-character password (you'll need this for the `.env.local` file)

### 3. Create Environment Variables
Create a file named `.env.local` in the root directory (`kartikgati-web-app/`) with the following content:

```env
SMTP_EMAIL=gatirelocare@gmail.com
SMTP_PASSWORD=your-16-character-app-password-here
```

**Important:** 
- Replace `your-16-character-app-password-here` with the actual app password you generated
- Never commit `.env.local` to version control (it's already in `.gitignore`)

### 4. Restart Development Server
After creating/updating `.env.local`, restart your Next.js development server:

```bash
npm run dev
```

## Testing the Form

1. Fill out the contact form on your website
2. Submit the form
3. Check `gatirelocare@gmail.com` inbox for the new email
4. The email will contain all the form details in a nicely formatted HTML email

## Troubleshooting

### "Invalid login" error
- Make sure you're using an **App Password**, not your regular Gmail password
- Verify the email address is correct
- Ensure 2-Step Verification is enabled

### "Connection timeout" error
- Check your internet connection
- Verify Gmail SMTP settings (should be `smtp.gmail.com` on port `587`)

### Emails not received
- Check spam/junk folder
- Verify the recipient email (`gatirelocare@gmail.com`) is correct
- Check server logs for any error messages

## Security Features Included

✅ **Honeypot field** - Catches bots automatically  
✅ **Time-based validation** - Prevents instant submissions  
✅ **Rate limiting** - Max 5 submissions per hour per IP  
✅ **Input validation** - Validates all required fields and email format  
✅ **Server-side processing** - All validation happens on the server

