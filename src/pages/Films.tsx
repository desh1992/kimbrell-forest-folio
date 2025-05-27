import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";

// Real films and documentaries featuring Andrew Kimbrell
const films = [
  { 
    title: "The Future of Food", 
    thumbnail: "/images/films/future-of-food.jpg", 
    desc: "An investigation into unlabeled, patented, genetically engineered foods that have quietly filled grocery store shelves. Andrew appears as Executive Director of the Center for Food Safety.",
    year: "2004",
    duration: "88 min",
    type: "Documentary",
    videoLink: "https://www.youtube.com/watch?v=C2vuXxuuFBk", // Official trailer
    websiteLink: "https://thefutureoffood.com/",
    director: "Deborah Koons Garcia"
  },
  { 
    title: "Seed: The Untold Story", 
    thumbnail: "/images/films/seed-untold-story.jpg", 
    desc: "Following passionate seed keepers protecting our 12,000 year-old food legacy. Features Andrew alongside Dr. Jane Goodall, Vandana Shiva, and other experts fighting to defend the future of our food.",
    year: "2016",
    duration: "94 min", 
    type: "Documentary",
    videoLink: "https://www.youtube.com/watch?v=0GUxC_nojsU", // Official theatrical trailer
    websiteLink: "https://www.seedthemovie.com/",
    director: "Jon Betz & Taggart Siegel"
  },
  { 
    title: "A Dangerous Idea: Eugenics, Genetics and the American Dream", 
    thumbnail: "/images/films/dangerous-idea.jpg", 
    desc: "A radical reassessment of gene science and how biological determinism has threatened the American Dream. Andrew serves as writer, executive producer, and featured expert.",
    year: "2016",
    duration: "106 min",
    type: "Documentary",
    videoLink: "https://www.youtube.com/watch?v=bmGm_0MRY3A", // Trailer
    websiteLink: "https://adangerousideafilm.com/",
    director: "Stephanie Welch"
  },
  { 
    title: "Poisoning Paradise", 
    thumbnail: "/images/films/poisoning-paradise.jpg", 
    desc: "Exposing the effects of pesticide use and environmental injustice in Hawaii, where biotech companies test genetically engineered crops. Andrew provides expert commentary on food safety and corporate accountability.",
    year: "2017",
    duration: "75 min",
    type: "Documentary",
    videoLink: "https://www.youtube.com/watch?v=3gy6qBJtmtQ", // Available on YouTube
    websiteLink: "https://www.poisoningparadise.com/",
    director: "Keely Shaye Brosnan & Teresa Tico"
  },
  { 
    title: "Fresh", 
    thumbnail: "/images/films/fresh.jpg", 
    desc: "Celebrating farmers, thinkers and business people across America who are reinventing our food system. Andrew discusses sustainable agriculture and the Center for Food Safety's mission.",
    year: "2009",
    duration: "72 min",
    type: "Documentary",
    videoLink: "https://www.youtube.com/watch?v=KwR44T69_Is", // Official trailer
    websiteLink: "https://www.freshthemovie.com/",
    director: "Ana Sofia Joanes"
  },
  { 
    title: "Scientists Under Attack: Genetic Engineering in the Magnetic Field of Money", 
    thumbnail: "/images/films/scientists-under-attack.jpg", 
    desc: "German documentary examining how financial interests influence genetic engineering research. Andrew provides legal and ethical perspective on biotechnology regulation.",
    year: "2009",
    duration: "90 min",
    type: "Documentary",
    videoLink: "https://www.youtube.com/watch?v=TFWaRPrQ41k", // Official trailer
    websiteLink: "https://sustainablepulse.com/2013/08/20/scientists-under-attack-watch-the-trailer-here/",
    director: "Bertram Verhaag"
  }
];

// Helper function to extract YouTube video ID
const getYouTubeVideoId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
};

// Helper function to get YouTube thumbnail
const getYouTubeThumbnail = (videoId: string) => {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

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
            Films & Documentaries
          </h1>
          <p className="text-xl text-softwhite/90 font-sans mb-4">
            Documentary films and media featuring Andrew Kimbrell's expertise in environmental law, food safety, and biotechnology ethics
          </p>
          <p className="text-lg text-softwhite/80 font-sans">
            From groundbreaking investigations into genetic engineering to explorations of sustainable agriculture, these films showcase Andrew's decades of advocacy for environmental justice and food safety.
          </p>
        </motion.div>
      </section>
      
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {films.map((film, idx) => {
            const videoId = film.videoLink ? getYouTubeVideoId(film.videoLink) : null;
            const thumbnailUrl = videoId ? getYouTubeThumbnail(videoId) : null;
            
            return (
              <motion.div
                key={idx}
                className="relative group rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
              >
                {/* Film Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-forest-100 to-forest-200 overflow-hidden">
                  {/* Video thumbnail or placeholder */}
                  {thumbnailUrl ? (
                    <img 
                      src={thumbnailUrl} 
                      alt={film.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if thumbnail fails
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-forest-900/10 flex items-center justify-center">
                      <Play size={48} className="text-forest-700/50" />
                    </div>
                  )}
                  
                  {/* Clickable overlay for video */}
                  {film.videoLink && (
                    <a 
                      href={film.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                    >
                      <div className="bg-white/90 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                        <Play size={32} className="text-forest-900 ml-1" />
                      </div>
                    </a>
                  )}
                  
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
                  {film.director && (
                    <p className="text-sm text-forest-600 mb-2 font-sans">
                      Directed by {film.director}
                    </p>
                  )}
                  <p className="text-base font-sans text-forest-700 mb-3 line-clamp-3">
                    {film.desc}
                  </p>
                  <div className="flex items-center justify-between text-sm text-forest-600 mb-4">
                    <span>{film.duration}</span>
                    <span>{film.type}</span>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-2 flex-wrap">
                    {film.videoLink && (
                      <a 
                        href={film.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-forest-900 text-softwhite shadow hover:bg-forest-700 hover:scale-105 transition-all"
                      >
                        <Play size={14} />
                        Watch Trailer
                      </a>
                    )}
                    {film.websiteLink !== "#" && (
                      <a 
                        href={film.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-beige text-forest-900 shadow hover:bg-forest-100 hover:scale-105 transition-all"
                      >
                        Learn More
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {!film.videoLink && film.websiteLink === "#" && (
                      <div className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-forest-300 text-forest-700 shadow">
                        Contact for Access
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Additional Films Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-beige rounded-2xl p-8">
            <h2 className="text-2xl font-serif text-forest-900 font-semibold mb-6 text-center">
              Additional Media Appearances
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Food Evolution */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-forest-100 to-forest-200 overflow-hidden group">
                  <img 
                    src="https://img.youtube.com/vi/_bw06BVC3FM/hqdefault.jpg" 
                    alt="Food Evolution"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Clickable overlay for video */}
                  <a 
                    href="https://www.youtube.com/watch?v=_bw06BVC3FM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <div className="bg-white/90 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Play size={32} className="text-forest-900 ml-1" />
                    </div>
                  </a>
                  {/* Year badge */}
                  <div className="absolute top-3 left-3 bg-forest-900 text-softwhite px-3 py-1 rounded-full text-sm font-serif">
                    2017
                  </div>
                  {/* Type badge */}
                  <div className="absolute top-3 right-3 bg-white/90 text-forest-900 px-3 py-1 rounded-full text-sm font-serif">
                    Documentary
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-forest-900 mb-2">
                    Food Evolution (2017)
                  </h3>
                  <p className="text-forest-700 mb-3">
                    Documentary examining the debate over genetically modified foods, featuring Andrew's perspective on food safety regulation.
                  </p>
                  <p className="text-sm text-forest-600 mb-4">Directed by Scott Hamilton Kennedy</p>
                  <div className="flex gap-2 flex-wrap">
                    <a 
                      href="https://www.youtube.com/watch?v=_bw06BVC3FM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-forest-900 text-softwhite shadow hover:bg-forest-700 hover:scale-105 transition-all"
                    >
                      <Play size={14} />
                      Watch Trailer
                    </a>
                    <a 
                      href="https://www.justwatch.com/us/movie/food-evolution"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-beige text-forest-900 shadow hover:bg-forest-100 hover:scale-105 transition-all"
                    >
                      Watch Full Film
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Modified */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-forest-100 to-forest-200 overflow-hidden group">
                  <img 
                    src="https://img.youtube.com/vi/oxjjg1U2UD0/hqdefault.jpg" 
                    alt="Modified"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Clickable overlay for video */}
                  <a 
                    href="https://www.youtube.com/watch?v=oxjjg1U2UD0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <div className="bg-white/90 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Play size={32} className="text-forest-900 ml-1" />
                    </div>
                  </a>
                  {/* Year badge */}
                  <div className="absolute top-3 left-3 bg-forest-900 text-softwhite px-3 py-1 rounded-full text-sm font-serif">
                    2017
                  </div>
                  {/* Type badge */}
                  <div className="absolute top-3 right-3 bg-white/90 text-forest-900 px-3 py-1 rounded-full text-sm font-serif">
                    Documentary
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-forest-900 mb-2">
                    Modified (2017)
                  </h3>
                  <p className="text-forest-700 mb-3">
                    Canadian documentary exploring GMO labeling and consumer rights, with Andrew providing legal expertise.
                  </p>
                  <p className="text-sm text-forest-600 mb-4">Directed by Aube Giroux</p>
                  <div className="flex gap-2 flex-wrap">
                    <a 
                      href="https://www.youtube.com/watch?v=oxjjg1U2UD0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-forest-900 text-softwhite shadow hover:bg-forest-700 hover:scale-105 transition-all"
                    >
                      <Play size={14} />
                      Watch Trailer
                    </a>
                    <a 
                      href="https://www.modifiedthefilm.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-beige text-forest-900 shadow hover:bg-forest-100 hover:scale-105 transition-all"
                    >
                      Learn More
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Media Inquiries Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-forest-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif text-softwhite font-semibold mb-4">
              Media Inquiries & Documentary Collaborations
            </h2>
            <p className="text-lg text-softwhite/90 mb-6">
              Andrew is available for documentary interviews, expert commentary, and media collaborations on environmental law, food safety, biotechnology ethics, and sustainable agriculture.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-serif bg-softwhite text-forest-900 text-lg font-semibold shadow-md hover:bg-beige hover:scale-105 transition-all"
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