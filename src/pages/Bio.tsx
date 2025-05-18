
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <Layout>
      <section className="w-full bg-forest-900/95 py-16 md:py-24">
        <motion.div
          className="max-w-3xl mx-auto text-softwhite font-serif text-center text-3xl md:text-4xl px-6"
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Meet Andrew Kimbrell
        </motion.div>
      </section>
      <section className="max-w-3xl mx-auto pt-12 pb-20 px-6">
        <motion.div
          className="mb-8 text-lg md:text-xl font-serif text-forest-900 font-medium"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}>
          Andrew Kimbrell is a pioneering public interest attorney, environmental activist, and author, best known as the Founder of the Center for Food Safety (CFS).
        </motion.div>
        <motion.div
          className="mb-6 text-base md:text-lg font-sans text-forest-800"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.26 }}>
          Over three decades, he has inspired legal and scientific strategies for food, environment, and health. His advocacy spans from land-mark federal lawsuits to public education.
        </motion.div>
        <motion.div
          className="text-base font-sans text-muted"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.32 }}>
          Kimbrell’s work continues to shape public discourse on biotechnology, agricultural policy, and ecological ethics.
        </motion.div>
        <div className="text-center mt-12">
          <a
            className="font-serif text-base px-6 py-2 rounded-full bg-forest-900 text-softwhite shadow hover:scale-105 transition"
            href="#"
            download
          >
            Download Full Bio (PDF)
          </a>
        </div>
      </section>
    </Layout>
  );
}
