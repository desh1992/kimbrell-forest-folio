
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

// Dummy articles
const articles = [
  {
    title: "The Future of Food Regulation",
    date: "2024-05-10",
    tags: ["Law", "Food"],
    summary: "Insights on new regulations impacting agriculture and the environment.",
    image: "/public/placeholder.svg"
  },
  {
    title: "Ecological Ethics in the Modern World",
    date: "2024-04-14",
    tags: ["Ecology", "Ethics"],
    summary: "Exploring cross-section of ecology and morality in public policy.",
    image: "/public/placeholder.svg"
  }
];

export default function Articles() {
  return (
    <Layout>
      <section className="w-full bg-forest-900/90 py-16">
        <motion.h1
          className="text-3xl md:text-4xl font-serif text-softwhite text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Articles
        </motion.h1>
      </section>
      <section className="max-w-5xl mx-auto py-12 px-4 grid gap-10">
        {articles.map((a, idx) => (
          <motion.article
            key={idx}
            className="flex flex-col md:flex-row bg-white/90 rounded-xl shadow-md hover:scale-[1.01] hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.17 + idx * 0.1 }}>
            <img src={a.image} className="h-36 w-36 object-cover rounded-l-xl" alt="Article" />
            <div className="flex-1 p-6 flex flex-col justify-center">
              <span className="font-serif text-lg font-semibold text-forest-900">{a.title}</span>
              <span className="text-xs text-forest-700 mt-1">{a.date}</span>
              <div className="flex gap-2 mt-2">
                {a.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded bg-beige text-forest-900 text-xs font-medium">{tag}</span>
                ))}
              </div>
              <div className="font-sans text-base text-forest-800 mt-2">{a.summary}</div>
            </div>
          </motion.article>
        ))}
      </section>
    </Layout>
  );
}
