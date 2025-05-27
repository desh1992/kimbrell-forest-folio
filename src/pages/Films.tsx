import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";

// Dummy film data
const films = [
  { 
    title: "Fatal Harvest: The Tragedy of Industrial Agriculture", 
    thumbnail: "/images/films/fatal-harvest.jpg", 
    desc: "A documentary exploring the devastating effects of industrial agriculture on our environment and health.",
    year: "2003",
    duration: "90 min",
    type: "Documentary",
    link: "#"
  },
  { 
    title: "The Human Body Shop", 
    thumbnail: "/images/films/human-body-shop.jpg", 
    desc: "An investigation into the commercialization of human body parts and biotechnology.",
    year: "2001",
    duration: "75 min", 
    type: "Documentary",
    link: "#"
  },
  { 
    title: "Seeds of Change", 
    thumbnail: "/images/films/seeds-change.jpg", 
    desc: "Following Andrew's legal battles against genetic modification in agriculture.",
    year: "2005",
    duration: "60 min",
    type: "Documentary",
    link: "#"
  },
  { 
    title: "Environmental Lawyer", 
    thumbnail: "/images/films/environmental-lawyer.jpg", 
    desc: "A profile of Andrew Kimbrell's career as an environmental attorney and activist.",
    year: "2010",
    duration: "45 min",
    type: "Profile",
    link: "#"
  },
  { 
    title: "Center for Food Safety: 20 Years", 
    thumbnail: "/images/films/cfs-20years.jpg", 
    desc: "Celebrating two decades of food safety advocacy and victories.",
    year: "2017",
    duration: "30 min",
    type: "Documentary Short",
    link: "#"
  },
  { 
    title: "The Future of Food Systems", 
    thumbnail: "/images/films/future-food.jpg", 
    desc: "Andrew's vision for sustainable and ethical food production systems.",
    year: "2020",
    duration: "85 min",
    type: "Documentary",
    link: "#"
  }
];

export default function Films() {
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
            Films & Videos
          </h1>
          <p className="text-xl text-softwhite/90 font-sans">
            Documentary films, interviews, and video content featuring Andrew Kimbrell's work and advocacy
          </p>
        </motion.div>
      </section>
      
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {films.map((film, idx) => (
            <motion.div
              key={idx}
              className="relative group rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
            >
              {/* Film Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-forest-100 to-forest-200 overflow-hidden">
                <div className="absolute inset-0 bg-forest-900/10 flex items-center justify-center">
                  <Play size={48} className="text-forest-700/50" />
                </div>
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play size={60} className="text-white" />
                </div>
                {/* Year badge */}
                <div className="absolute top-3 left-3 bg-forest-900 text-softwhite px-3 py-1 rounded-full text-sm font-serif">
                  {film.year}
                </div>
                {/* Type badge */}
                <div className="absolute top-3 right-3 bg-white/90 text-forest-900 px-3 py-1 rounded-full text-sm font-serif">
                  {film.type}
                </div>
              </div>
              
              {/* Film Info */}
              <div className="p-6">
                <h3 className="font-serif font-semibold text-lg text-forest-900 mb-2 line-clamp-2">
                  {film.title}
                </h3>
                <p className="text-base font-sans text-forest-700 mb-3 line-clamp-3">
                  {film.desc}
                </p>
                <div className="flex items-center justify-between text-sm text-forest-600 mb-4">
                  <span>{film.duration}</span>
                  <span>{film.type}</span>
                </div>
                <a 
                  href={film.link}
                  className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-forest-900 text-softwhite shadow hover:bg-forest-700 hover:scale-105 transition-all"
                >
                  Watch Now
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Content Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-beige rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif text-forest-900 font-semibold mb-4">
              Media Inquiries & Licensing
            </h2>
            <p className="text-lg text-forest-700 mb-6">
              For media licensing, interview requests, or to discuss documentary collaborations, 
              please contact Andrew directly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-serif bg-forest-900 text-softwhite text-lg font-semibold shadow-md hover:bg-forest-700 hover:scale-105 transition-all"
            >
              Contact Andrew
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
} 