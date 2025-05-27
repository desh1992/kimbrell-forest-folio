
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
  requestType?: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(data: FormData) {
    // Simulate success
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
            
            {/* Contact Information */}
            {/* <motion.div
              className="mt-8 bg-beige rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-serif text-forest-900 font-semibold mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <p className="text-forest-700">
                  <span className="font-medium">Email:</span>{" "}
                  <a 
                    href="mailto:info@kimbrell.com" 
                    className="text-forest-900 hover:underline"
                  >
                    info@kimbrell.com
                  </a>
                </p>
                <p className="text-forest-700">
                  <span className="font-medium">Speaking Engagements:</span> Available worldwide
                </p>
                <p className="text-forest-700">
                  <span className="font-medium">Topics:</span> Environmental law, food safety, biotechnology ethics, sustainable agriculture
                </p>
              </div>
            </motion.div> */}
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
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="font-serif block text-base mb-2 text-forest-900" htmlFor="message">Message</label>
            <Textarea
              id="message"
              placeholder="How can we help you?"
              rows={8}
              className="flex-1 min-h-[200px]"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>
          <button type="submit" disabled={isSubmitting} className="px-8 py-2 mt-2 rounded-full bg-forest-900 font-serif text-white shadow hover:scale-105 transition relative">
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {submitted && (
            <motion.div
              className="text-green-700 mt-2 text-center font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.45 }}
            >
              Thank you! Your message has been received.
            </motion.div>
          )}
        </motion.form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
