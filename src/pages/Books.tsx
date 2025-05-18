
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

// Dummy book data
const books = [
  { 
    title: "Your Right to Know", 
    cover: "/public/placeholder.svg", 
    desc: "A guide on food transparency and advocacy.", 
    badge: "Bestseller" 
  },
  { 
    title: "The Fatal Harvest", 
    cover: "/public/placeholder.svg", 
    desc: "Exploring the ethics of industrial agriculture.", 
    badge: null 
  },
  { 
    title: "Salmon Economics", 
    cover: "/public/placeholder.svg", 
    desc: "Conservation and economic perspectives.", 
    badge: "Editor's Pick"
  }
];

export default function Books() {
  return (
    <Layout>
      <section className="w-full bg-forest-900/90 py-16">
        <motion.h1
          className="text-3xl md:text-4xl font-serif text-softwhite text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Books by Andrew Kimbrell
        </motion.h1>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-3">
        {books.map((book, idx) => (
          <motion.div
            key={idx}
            className="relative group rounded-2xl bg-white shadow-md px-5 py-7 flex flex-col items-start hover:shadow-lg hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 + idx * 0.11 }}>
            <img src={book.cover} alt={book.title + " cover"} className="h-36 w-full object-contain mb-3 rounded-md shadow" />
            <span className="font-serif font-semibold text-lg text-forest-900">{book.title}</span>
            <span className="mt-1 text-base font-sans text-muted-foreground">{book.desc}</span>
            {book.badge && <span className="absolute top-4 right-4 bg-forest-900 text-softwhite font-serif rounded px-3 py-1 text-xs">{book.badge}</span>}
            <a className="mt-4 font-serif text-sm px-4 py-2 rounded-full bg-forest-900 text-softwhite shadow hover:scale-105 transition" href="#">Learn More</a>
          </motion.div>
        ))}
      </section>
    </Layout>
  );
}
