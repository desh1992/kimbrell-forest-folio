import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Real book data
const books = [
  { 
    title: "The Human Body Shop", 
    cover: "/images/books/Kimbrell_thehumanbodyshop.jpg", 
    desc: "A groundbreaking examination of the commercialization of human body parts and biotechnology.",
    link: "https://www.amazon.com/gp/product/0895264188/ref=x_gr_bb_amazon?ie=UTF8&tag=x_gr_bb_amazon-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0895264188&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
    type: "book"
  },
  { 
    title: "The Masculine Mystique", 
    cover: "/images/books/Kimbrell_themasculinemystique.jpg", 
    desc: "An exploration of masculinity and its impact on society and the environment.",
    link: "https://a.co/d/eqHMez6",
    type: "book"
  },
  { 
    title: "Fatal Harvest: The Tragedy of Industrial Agriculture", 
    cover: "/images/books/kimbrell_fatalharvest.jpg", 
    desc: "A comprehensive critique of industrial agriculture and its devastating effects on our environment and health.",
    link: "https://a.co/d/2vT5xrO",
    type: "book"
  },
  { 
    title: "The Fatal Harvest Reader", 
    cover: "/images/books/kimbrell_fatalharvestreader.jpg", 
    desc: "A collection of essays and articles expanding on the themes of Fatal Harvest.",
    link: "https://a.co/d/35zrsjW",
    type: "book"
  },
  { 
    title: "Your Right to Know", 
    cover: "/images/books/kimbrell_yourrighttoknow.jpg", 
    desc: "Essential reading on genetic engineering and the secret changes in our food system.",
    link: "https://a.co/d/0vkNhO1",
    type: "book"
  }
];

const handbooks = [
  { 
    title: "Salmon Economics", 
    cover: "/images/books/kimbrell_salmoneconomics.jpg", 
    desc: "Economic perspectives on salmon conservation and sustainable fishing practices.",
    link: "https://a.co/d/1lfhQv0",
    readLink: "https://centerforneweconomics.org/publications/salmon-economics-and-other-lessons/",
    type: "handbook"
  },
  { 
    title: "Cold Evil: Technology and Modern Ethics", 
    cover: "/images/books/kimbrell_coldevil.jpg", 
    desc: "An examination of technology's impact on modern ethics and human values.",
    link: "https://a.co/d/1y4X6np",
    readLink: "https://centerforneweconomics.org/publications/cold-evil-technology-and-modern-ethics/",
    type: "handbook"
  }
];

export default function Books() {
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
            Books by Andrew Kimbrell
          </h1>
          <p className="text-xl text-softwhite/90 font-sans">
            Influential works on environmental law, bioethics, and sustainable agriculture
          </p>
        </motion.div>
      </section>
      
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl font-serif text-forest-700 max-w-4xl mx-auto leading-relaxed">
            Andrew published his first book "The Human Body Shop" in 1993. He went on to write "The Masculine Mystique", "Fatal Harvest" and "Your Right to Know", alongside countless articles in various publications, some of which you can find{" "}
            <a href="/articles" className="text-forest-900 font-semibold hover:text-forest-600 underline transition-colors">
              here
            </a>.
          </p>
        </motion.div>

        {/* Books Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-forest-900 font-semibold mb-8 text-center">
            Books
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book, idx) => (
              <motion.div
                key={idx}
                className="relative group rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              >
                <div className="h-64 bg-gradient-to-br from-forest-50 to-forest-100 flex items-center justify-center p-4">
                  <img 
                    src={book.cover} 
                    alt={book.title + " cover"} 
                    className="h-full w-auto object-contain rounded shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = "/images/placeholder-book.jpg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-forest-900 mb-3 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-base font-sans text-forest-700 mb-4 line-clamp-3">
                    {book.desc}
                  </p>
                  <a 
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-forest-900 text-softwhite shadow hover:bg-forest-700 hover:scale-105 transition-all"
                  >
                    View on Amazon
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Handbooks Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-forest-900 font-semibold mb-8 text-center">
            Handbooks
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {handbooks.map((handbook, idx) => (
              <motion.div
                key={idx}
                className="relative group rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
              >
                <div className="h-64 bg-gradient-to-br from-forest-50 to-forest-100 flex items-center justify-center p-4">
                  <img 
                    src={handbook.cover} 
                    alt={handbook.title + " cover"} 
                    className="h-full w-auto object-contain rounded shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = "/images/placeholder-book.jpg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-forest-900 mb-3 line-clamp-2">
                    {handbook.title}
                  </h3>
                  <p className="text-base font-sans text-forest-700 mb-4 line-clamp-3">
                    {handbook.desc}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={handbook.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-forest-900 text-softwhite shadow hover:bg-forest-700 hover:scale-105 transition-all"
                    >
                      View on Amazon
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={handbook.readLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 font-serif text-sm px-4 py-2 rounded-full border-2 border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-softwhite transition-all"
                    >
                      Read Online
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
