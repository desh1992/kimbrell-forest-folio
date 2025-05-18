
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
        <motion.h1
          className="text-3xl md:text-4xl font-serif text-softwhite text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Contact
        </motion.h1>
      </section>
      <section className="max-w-xl mx-auto py-14 px-5">
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/90 p-7 md:p-10 rounded-2xl shadow-lg flex flex-col gap-6"
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
              rows={5}
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
      </section>
    </Layout>
  );
}
