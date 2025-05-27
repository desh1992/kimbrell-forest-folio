import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Play, ExternalLink, Youtube } from "lucide-react";

// Featured streaming videos
const featuredVideos = [
  {
    title: "Organic & Beyond: Paradigm for a New Food Future | Bioneers",
    desc: "Comprehensive vision for transforming our food system",
    videoId: "HQ7SkZwHO24",
    thumbnail: `https://img.youtube.com/vi/HQ7SkZwHO24/hqdefault.jpg`
  },
  {
    title: "Cold Evil, 10 Billion Animals Used Each Year For Food",
    desc: "Ethical examination of industrial agriculture",
    videoId: "ZrlzSMQW-aw",
    thumbnail: `https://img.youtube.com/vi/ZrlzSMQW-aw/hqdefault.jpg`
  },
  {
    title: "Andrew Kimbrell Kauai Seminar",
    desc: "In-depth seminar on environmental law and policy",
    videoId: "mntCuwgL67w",
    thumbnail: `https://img.youtube.com/vi/mntCuwgL67w/hqdefault.jpg`
  }
];

// Main video collection
const videoCollection = [
  {
    title: "Organic & Beyond: Paradigm for a New Food Future | Bioneers",
    desc: "Comprehensive vision for transforming our food system",
    videoId: "HQ7SkZwHO24",
    category: "Food Systems"
  },
  {
    title: "Andrew Kimbrell Kauai Seminar",
    desc: "In-depth seminar on environmental law and policy",
    videoId: "mntCuwgL67w",
    category: "Seminars"
  },
  {
    title: "The Future of Food: From Fatal Harvest To Organic And Beyond",
    desc: "Author discussion on sustainable agriculture",
    videoId: "c0tnoIuhIpE",
    category: "Food Systems"
  },
  {
    title: "Your Right to Know | Talks at Google",
    desc: "Consumer rights and food transparency",
    videoId: "gxcA6cGDHu8",
    category: "Consumer Rights"
  },
  {
    title: "Cold Evil, 10 Billion Animals Used Each Year For Food",
    desc: "Ethical examination of industrial agriculture",
    videoId: "ZrlzSMQW-aw",
    category: "Ethics"
  },
  {
    title: "Cold Evil: Technology and Ethics in the 21st Century",
    desc: "Technology's impact on modern ethics",
    videoId: "ujqvfmwt5gc",
    category: "Ethics"
  },
  {
    title: "Organic Should Be The Minimum Standard Of American Agriculture",
    desc: "Policy discussion on organic farming standards",
    videoId: "b6hgQfIhG2k",
    category: "Policy"
  },
  {
    title: "Genetic Engineering and the Secret Changes in Your Food",
    desc: "Offstage interview on GMO transparency",
    videoId: "K0z9j9929gI",
    category: "GMOs"
  },
  {
    title: "The Simple Explanation Of Genetically Modifying Seeds",
    desc: "Clear breakdown of genetic modification",
    videoId: "a56U9PwPNlo",
    category: "GMOs"
  },
  {
    title: "We Can Now Patent Animals And Plants As Machines",
    desc: "Legal implications of biotechnology patents",
    videoId: "lfc6P67QBdo",
    category: "Legal"
  },
  {
    title: "Did Covid-19 Come From a Lab?",
    desc: "Investigation into pandemic origins",
    videoId: "0vwtM29P8d0",
    category: "Health"
  },
  {
    title: "Center for Food Safety on the Loss of Crop Diversity",
    desc: "Agricultural biodiversity crisis",
    videoId: "h9MeoXf1ZRY",
    category: "Biodiversity"
  },
  {
    title: "The End of the Age of Capitalism?",
    desc: "Economic system transformation discussion",
    videoId: "uXidA1P4BsA",
    category: "Economics"
  },
  {
    title: "Why Is 53% Of Americas Farmland In Corn And Soy?",
    desc: "Agricultural monoculture problems",
    videoId: "tB40Wa3YpVA",
    category: "Agriculture"
  },
  {
    title: "The End of Market Capitalism?",
    desc: "Alternative economic models discussion",
    videoId: "VrjFCTycsqg",
    category: "Economics"
  },
  {
    title: "Vandana Shiva Home Rule Tour 2015",
    desc: "Collaborative discussion on food sovereignty",
    videoId: "mhjgnY52b1g",
    category: "Food Sovereignty"
  },
  {
    title: "Andrew Kimbrell Talks FDA Petition Filing",
    desc: "Legal action against regulatory agencies",
    videoId: "5zjdNRZrVUw",
    category: "Legal"
  },
  {
    title: "Genetic Engineering and the Secret Changes in Your Food",
    desc: "Extended discussion on food transparency",
    videoId: "5d_3l2dpQqU",
    category: "GMOs"
  },
  {
    title: "The Beautiful Truth",
    desc: "Documentary appearance on health and nutrition",
    videoId: "_xMLe3ps4oI",
    category: "Health"
  },
  {
    title: "We Are Trying To Exterminate Everything With Chemicals",
    desc: "Chemical agriculture critique",
    videoId: "IVOxNdWNqDY",
    category: "Chemicals"
  },
  {
    title: "Monsanto and Center for Food Safety on GMO Labeling",
    desc: "Debate on food labeling requirements",
    videoId: "7-jUENZMt4M",
    category: "GMOs"
  },
  {
    title: "Andrew Kimbrell on GMOs and GMO-free Corn Chowder",
    desc: "Practical discussion with recipe demonstration",
    videoId: "mT-yMqxBnqY",
    category: "Practical"
  },
  {
    title: "Andrew Kimbrell speaks with NRDC",
    desc: "Environmental law and policy discussion",
    videoId: "qABdVZrj6Ss",
    category: "Environment"
  },
  {
    title: "How Monsanto Can Be Beat!",
    desc: "Strategic discussion on corporate accountability",
    videoId: "LgXUBMh2opc",
    category: "Activism"
  },
  {
    title: "Dr. Mercola Interviews Andrew Kimbrell (Part 2)",
    desc: "Health and food safety interview series",
    videoId: "3n5FrgZDvtg",
    category: "Health"
  },
  {
    title: "Dr. Mercola Interviews Andrew Kimbrell (Part 4)",
    desc: "Continued health and policy discussion",
    videoId: "FM4UKFYJm3Y",
    category: "Health"
  },
  {
    title: "Dr. Mercola Interviews Andrew Kimbrell (Part 5)",
    desc: "Environmental health perspectives",
    videoId: "Hu3p3eJgtRs",
    category: "Health"
  },
  {
    title: "Dr. Mercola Interviews Andrew Kimbrell (Part 6)",
    desc: "Final part of comprehensive interview",
    videoId: "tE2nOPLUTBY",
    category: "Health"
  },
  {
    title: "Corporations vs Nature, Precautionary Principle",
    desc: "Legal principles for environmental protection",
    videoId: "QKnbo9Kg4ME",
    category: "Legal"
  },
  {
    title: "GMOs and the Fight to Save our Food Supply",
    desc: "Comprehensive food system analysis",
    videoId: "RgoVcn5x8qY",
    category: "Food Systems"
  },
  {
    title: "Toward an Ecological Civilization",
    desc: "Vision for sustainable society",
    videoId: "vq4YRZMEz14",
    category: "Sustainability"
  },
  {
    title: "The Great Transformation: Roadmaps to an Ecological Society",
    desc: "Pathways to environmental sustainability",
    videoId: "aomdlEGBj5o",
    category: "Sustainability"
  },
  {
    title: "Is Glyphosate Ok to Eat? | Just Ingredients Podcast",
    desc: "Chemical safety in food production",
    videoId: "U6UGNyBkbfI",
    category: "Chemicals"
  },
  {
    title: "We Are Creating",
    desc: "Philosophical discussion on human impact",
    videoId: "rfnQ6yqRLcA",
    category: "Philosophy"
  },
  {
    title: "Já ouviu sobre a ditadura do alimento?",
    desc: "International perspective on food democracy",
    videoId: "HXscTQXqwsw",
    category: "International"
  },
  {
    title: "The Future Of Forests",
    desc: "Forest conservation and policy",
    videoId: "NXvDxwu65Lk",
    category: "Environment"
  },
  {
    title: "Democracy and Energy Systems",
    desc: "Democratic approaches to energy policy",
    videoId: "U4tig272O9c",
    category: "Energy"
  },
  {
    title: "Organic Should Be The Minimum Standard",
    desc: "Essential insights on organic agriculture standards",
    videoId: "0rhx6063Ilw",
    category: "Policy"
  },
  {
    title: "The Simple Explanation Of GMO Seeds",
    desc: "Clear explanation everyone needs to hear",
    videoId: "P8itB6Meceo",
    category: "GMOs"
  }
];

// Get unique categories
const categories = [...new Set(videoCollection.map(video => video.category))].sort();

export default function Speaking() {
  const getYouTubeUrl = (videoId: string) => `https://www.youtube.com/watch?v=${videoId}`;
  const getThumbnailUrl = (videoId: string) => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, videoId: string) => {
    const img = e.currentTarget;
    const currentSrc = img.src;
    
    if (currentSrc.includes('hqdefault')) {
      img.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    } else if (currentSrc.includes('mqdefault')) {
      img.src = `https://img.youtube.com/vi/${videoId}/default.jpg`;
    } else if (currentSrc.includes('default.jpg')) {
      img.src = `https://img.youtube.com/vi/${videoId}/0.jpg`;
    } else {
      // Final fallback - hide image and show placeholder
      img.style.display = 'none';
      const parent = img.parentElement;
      if (parent && !parent.querySelector('.thumbnail-placeholder')) {
        const placeholder = document.createElement('div');
        placeholder.className = 'thumbnail-placeholder absolute inset-0 flex items-center justify-center bg-gray-200';
        placeholder.innerHTML = `
          <div class="text-center">
            <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p class="text-xs text-gray-600">Video</p>
          </div>
        `;
        parent.appendChild(placeholder);
      }
    }
  };

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
            Speaking & Media
          </h1>
          <p className="text-xl text-softwhite/90 font-sans">
            Decades of public speaking on environmental law, food safety, and sustainable agriculture
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Videos */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-forest-900 font-semibold mb-8 text-center">
            Featured Presentations
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredVideos.map((video, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              >
                <a
                  href={getYouTubeUrl(video.videoId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-video bg-gray-100"
                >
                  <img
                    src={getThumbnailUrl(video.videoId)}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => handleImageError(e, video.videoId)}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </a>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-forest-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-base text-forest-700 mb-4 line-clamp-2">
                    {video.desc}
                  </p>
                  <a
                    href={getYouTubeUrl(video.videoId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-red-600 text-white shadow hover:bg-red-700 hover:scale-105 transition-all"
                  >
                    <Youtube size={16} />
                    Watch on YouTube
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Collection by Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-forest-900 font-semibold mb-8 text-center">
            Complete Video Collection
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, idx) => (
              <motion.span
                key={category}
                className="px-3 py-1 bg-forest-100 text-forest-800 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
              >
                {category}
              </motion.span>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {videoCollection.map((video, idx) => (
              <motion.div
                key={idx}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + (idx % 12) * 0.05 }}
              >
                <a
                  href={getYouTubeUrl(video.videoId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-video bg-gray-100"
                >
                  <img
                    src={getThumbnailUrl(video.videoId)}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => handleImageError(e, video.videoId)}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Play size={16} className="text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 bg-forest-900/80 text-white text-xs rounded">
                      {video.category}
                    </span>
                  </div>
                </a>
                <div className="p-4">
                  <h3 className="font-serif font-semibold text-sm text-forest-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-forest-600 mb-3 line-clamp-2">
                    {video.desc}
                  </p>
                  <a
                    href={getYouTubeUrl(video.videoId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-serif text-xs px-3 py-1.5 rounded-full border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-white transition-all"
                  >
                    <Youtube size={12} />
                    Watch
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact for Speaking */}
        <motion.div
          className="mt-20 text-center bg-beige rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-2xl font-serif text-forest-900 font-semibold mb-4">
            Book Andrew for Speaking
          </h3>
          <p className="text-lg text-forest-700 mb-6 max-w-2xl mx-auto">
            Available for conferences, universities, and organizations worldwide. 
            Topics include environmental law, food safety, biotechnology ethics, and sustainable agriculture.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-serif text-lg px-6 py-3 rounded-full bg-forest-900 text-softwhite shadow-lg hover:bg-forest-700 hover:scale-105 transition-all"
          >
            Contact for Speaking Engagements
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </section>
    </Layout>
  );
}
