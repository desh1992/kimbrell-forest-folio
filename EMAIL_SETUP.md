# Email Setup Guide for Contact Form

This guide will help you set up email functionality for the contact form using EmailJS.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{request_type}}

Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Request Type: {{request_type}}

Message:
{{message}}

---
This message was sent from the Andrew Kimbrell website contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (also called User ID)

## Step 5: Configure Environment Variables

Create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Not receiving emails**: Verify your email service setup in EmailJS
- **Template variables not working**: Ensure variable names match exactly (case-sensitive)

## Security Notes

- EmailJS public key is safe to expose in client-side code
- The free tier includes 200 emails per month
- Consider upgrading for higher volume needs

## Alternative: Formspree

If you prefer a simpler setup, you can also use Formspree:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create an account and get a form endpoint
3. Replace the EmailJS code with a simple form POST to the Formspree endpoint

Let me know if you need help with either approach! 