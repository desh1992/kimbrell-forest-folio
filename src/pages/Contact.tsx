import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { emailConfig, EmailTemplateParams } from '@/config/email';

type FormData = {
  name: string;
  email: string;
  message: string;
  requestType?: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(data: FormData) {
    try {
      setSubmitError(null);
      
      // Debug: Log the configuration
      console.log('EmailJS Config:', {
        serviceId: emailConfig.serviceId,
        templateId: emailConfig.templateId,
        publicKey: emailConfig.publicKey
      });
      
      // Prepare template parameters
      const templateParams: EmailTemplateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        request_type: data.requestType || 'General',
        to_email: emailConfig.toEmail,
      };

      console.log('Template Params:', templateParams);

      // Send email using EmailJS
      await emailjs.send(
        emailConfig.serviceId, 
        emailConfig.templateId, 
        templateParams, 
        emailConfig.publicKey
      );
      
      // Show success message
      setSubmitted(true);
      reset(); // Clear the form
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly at info@kimbrell.com');
    }
  }

  return (
    <Layout>
      <section className="w-full bg-forest-900/90 py-16">
        <motion.div
          className="text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-serif text-softwhite mb-4">
            Contact Andrew
          </h1>
          <p className="text-xl text-softwhite/90 font-sans mb-4">
            For public speaking, consulting or any other media inquiries please use the contact form or reach out directly via email
          </p>
          <div className="inline-flex items-center gap-2 bg-softwhite/10 backdrop-blur-sm rounded-full px-6 py-3 border border-softwhite/20">
            <svg className="w-5 h-5 text-softwhite/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
            </svg>
            <a 
              href="mailto:info@kimbrell.com" 
              className="text-lg text-softwhite font-sans hover:text-beige transition-colors"
            >
              info@kimbrell.com
            </a>
          </div>
        </motion.div>
      </section>
      
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-stretch">
          {/* Contact Image */}
          <motion.div
            className="order-2 lg:order-2 flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative flex-1">
              <img
                src="/images/other/kimbrell_contact.jpg"
                alt="Andrew Kimbrell"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-forest-900/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="order-1 lg:order-1 flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/90 p-7 md:p-10 rounded-2xl shadow-lg flex flex-col gap-6 h-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}>
          <div>
            <label className="font-serif block text-base mb-2 text-forest-900" htmlFor="name">Name</label>
            <Input
              type="text"
              id="name"
              placeholder="Your full name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div>
            <label className="font-serif block text-base mb-2 text-forest-900" htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              placeholder="you@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/, message: "Invalid email address" }
              })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div>
            <label className="font-serif block text-base mb-2 text-forest-900" htmlFor="requestType">Request Type (optional)</label>
            <select id="requestType" className="rounded-md border border-input bg-background px-3 py-2 w-full text-base md:text-sm" {...register("requestType")}>
              <option value="">General</option>
              <option value="media">Media Inquiry</option>
              <option value="speaking">Speaking Request</option>
              <option value="consulting">Consulting</option>
              <option value="interview">Interview Request</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="font-serif block text-base mb-2 text-forest-900" htmlFor="message">Message</label>
            <Textarea
              id="message"
              placeholder="Please provide details about your inquiry..."
              rows={8}
              className="flex-1 min-h-[200px]"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="px-8 py-3 mt-2 rounded-full bg-forest-900 font-serif text-white shadow hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : "Send Message"}
          </button>
          
          {/* Success Message */}
          {submitted && (
            <motion.div
              className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.45 }}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Message sent successfully!</span>
              </div>
              <p className="text-sm mt-1">Thank you for reaching out. We'll get back to you soon.</p>
            </motion.div>
          )}
          
          {/* Error Message */}
          {submitError && (
            <motion.div
              className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.45 }}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Failed to send message</span>
              </div>
              <p className="text-sm mt-1">{submitError}</p>
            </motion.div>
          )}
        </motion.form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
