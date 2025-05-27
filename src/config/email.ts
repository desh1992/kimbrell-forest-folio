// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your service ID, template ID, and public key
// 6. Replace the values below

// For now, we'll use direct values. You can replace these with your actual EmailJS credentials
export const emailConfig = {
  serviceId: 'service_dd8i2qn',
  templateId: 'template_q5t08xr',
  publicKey: 'CWDR5q4kWLG3ttSJ0',
  toEmail: 'desh.nik1992@gmail.com'
};

// Alternative: If you want to use environment variables, create them like this:
// export const emailConfig = {
//   serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//   templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//   publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
//   toEmail: 'info@kimbrell.com'
// };

// Email template variables that will be sent to EmailJS
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
  request_type: string;
  to_email: string;
}

// Example EmailJS template content:
/*
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
*/ 