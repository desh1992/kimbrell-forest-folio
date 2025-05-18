
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const talks = [
  { title: "Future of Food Law", date: "2024-05-10", location: "NYU Food Conference", cta: "Watch" },
  { title: "Ethics in Biotechnology", date: "2024-04-12", location: "Harvard Law", cta: "Read Summary" },
  { title: "Planetary Health Summit", date: "2023-11-18", location: "UC Berkeley", cta: "Watch" }
];

export default function Speaking() {
  return (
    <Layout>
      <section className="w-full bg-forest-900/90 py-16">
        <motion.h1
          className="text-3xl md:text-4xl font-serif text-softwhite text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Public Speaking
        </motion.h1>
      </section>
      <section className="max-w-6xl mx-auto py-16 px-4 grid gap-10 md:grid-cols-3">
        {talks.map((talk, idx) => (
          <motion.div
            key={idx}
            className="rounded-2xl bg-white shadow-md px-7 py-8 flex flex-col justify-between items-start hover:shadow-lg hover:scale-[1.03] transition-all"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.23 + idx * 0.1 }}>
            <div className="mb-3">
              <span className="font-serif text-xl font-semibold text-forest-900">{talk.title}</span>
              <div className="font-sans text-sm text-muted mt-1">{talk.date} • {talk.location}</div>
            </div>
            <button className="mt-4 font-serif text-sm px-4 py-2 rounded-full bg-forest-900 text-softwhite shadow hover:scale-105 transition">{talk.cta}</button>
          </motion.div>
        ))}
      </section>
    </Layout>
  );
}
