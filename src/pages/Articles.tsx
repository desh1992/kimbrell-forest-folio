import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Mic } from "lucide-react";

// Article collections
const articleCollections = [
  {
    title: "Huffington Post Archives",
    count: "38 articles",
    desc: "Comprehensive collection of Andrew's articles on environmental law, food safety, and biotechnology policy.",
    link: "https://www.huffpost.com/author/pr-151",
    icon: FileText
  },
  {
    title: "Center for Food Safety Archives",
    count: "32 articles", 
    desc: "Andrew Kimbrell's blog and article archives from the Center for Food Safety.",
    link: "https://www.centerforfoodsafety.org/andrew-kimbrell/2440/andrew-kimbrell/andrew-kimbrells-blog",
    icon: FileText
  },
  {
    title: "Common Dreams Articles",
    count: "Multiple articles",
    desc: "Progressive commentary on environmental and social justice issues.",
    link: "https://www.commondreams.org/author/andrew-kimbrell",
    icon: FileText
  },
  {
    title: "Resurgence Trust Articles",
    count: "Archive collection",
    desc: "Articles on ecology, spirituality, and sustainable living.",
    link: "https://www.resurgence.org/magazine/author183-andrew-kimbrell.html",
    icon: FileText
  },
  {
    title: "Academia Archives",
    count: "Academic papers",
    desc: "Scholarly articles and research papers on environmental law and bioethics.",
    link: "https://independent.academia.edu/KimbrellAndrew",
    icon: FileText
  }
];

// Featured articles
const featuredArticles = [
  {
    title: "Climate Talks Must Include BROAD Ecological Agriculture Solutions",
    publication: "Common Dreams",
    year: "2022",
    desc: "Analysis of how agricultural solutions must be central to climate change discussions.",
    link: "https://www.commondreams.org/views/2022/11/17/climate-talks-must-include-broad-ecological-agriculture-solutions"
  },
  {
    title: "Climate Envoy John Kerry's Disturbing Sci-Fi Approach to the Climate Crisis",
    publication: "Common Dreams",
    year: "2021",
    desc: "Critique of technological solutions to climate change over systemic reform.",
    link: "https://www.commondreams.org/opinion/sci-fi-climate-john-kerry"
  },
  {
    title: "Andrew Kimbrell on the Origins of COVID-19",
    publication: "Corporate Crime Reporter",
    year: "2020",
    desc: "Investigation into the potential origins of the COVID-19 pandemic.",
    link: "https://www.corporatecrimereporter.com/news/200/andrew-kimbrell-on-the-origins-of-covid-19/"
  },
  {
    title: "Why the GMO 'Labeling' Bill That Obama Just Signed Into Law Is a Sham",
    publication: "Huffington Post",
    year: "2016",
    desc: "Critical analysis of federal GMO labeling legislation and its shortcomings.",
    link: "https://www.huffpost.com/entry/why-the-gmo-labeling-bill_b_11335918"
  },
  {
    title: "Why Bernie has already won",
    publication: "Huffington Post",
    year: "2016",
    desc: "Analysis of Bernie Sanders' impact on progressive politics and policy discourse.",
    link: "https://www.huffpost.com/entry/why-bernie-has-already-wo_b_10365730"
  },
  {
    title: "Senator Stabenow's 'Smart' Labels Would Hit Her Hometown Residents Hard",
    publication: "Huffington Post",
    year: "2016",
    desc: "Critique of proposed GMO labeling legislation and its local impacts.",
    link: "https://www.huffpost.com/entry/senator-stabenows-smart-labels_b_10119478"
  },
  {
    title: "Is the Senate About to Pass a Law That Discriminates Against Over Half of Americans?",
    publication: "Huffington Post",
    year: "2016",
    desc: "Analysis of proposed legislation and its potential discriminatory impacts.",
    link: "https://www.huffpost.com/entry/is-the-senate-about-to-pa_b_9471606"
  },
  {
    title: "The Truth About Monsanto You Need To Know",
    publication: "Food Revolution",
    year: "2016",
    desc: "Comprehensive examination of Monsanto's business practices and impact on agriculture.",
    link: "https://foodrevolution.org/blog/monsanto-gmos-truth/"
  },
  {
    title: "In a Remarkable Triumph of Democracy Over Corporate Power, GMO Labeling Has Finally Arrived in the U.S.",
    publication: "Food Revolution",
    year: "2016",
    desc: "Celebration of successful GMO labeling initiatives and democratic victories.",
    link: "https://foodrevolution.org/blog/gmo-labeling-in-the-u-s/"
  },
  {
    title: "In a Surprise Win for Democracy Over Corporate Power, GMO Labeling Has Arrived",
    publication: "Yes! Magazine",
    year: "2016",
    desc: "Analysis of successful grassroots campaigns for GMO labeling requirements.",
    link: "https://www.yesmagazine.org/democracy/2016/04/09/in-a-surprise-win-for-democracy-over-corporate-power-gmo-labeling-has-arrived"
  },
  {
    title: "The High Tech Hijacking of GMO Food Labeling",
    publication: "Huffington Post",
    year: "2015",
    desc: "Critique of technological solutions that undermine transparent food labeling.",
    link: "https://www.huffpost.com/entry/the-high-tech-hijacking-o_b_8577350"
  },
  {
    title: "State Rights, or Big Government and Monsanto Run Amok? House Republicans Will Choose.",
    publication: "Huffington Post",
    year: "2015",
    desc: "Analysis of federal vs. state authority in GMO labeling legislation.",
    link: "https://www.huffpost.com/entry/state-rights-or-big-government-monsanto_b_7835566"
  },
  {
    title: "Despite Corporations Trying to Silence Our Voices, A New Wave of Democracy",
    publication: "Common Dreams",
    year: "2015",
    desc: "Analysis of corporate influence on democratic processes and grassroots resistance.",
    link: "https://www.commondreams.org/views/2015/02/18/despite-corporations-trying-silence-our-voices-new-wave-democracy"
  },
  {
    title: "Andrew Kimbrell vs Nina Federoff: Should GMO Foods Be Labeled?",
    publication: "Genetic Literacy Project",
    year: "2015",
    desc: "Debate on GMO food labeling requirements and consumer rights.",
    link: "https://geneticliteracyproject.org/2015/07/15/andrew-kimbrell-vs-nina-federoff-should-gmo-foods-be-labeled/"
  },
  {
    title: "Food Safety in the US: We're on Red Alert",
    publication: "Huffington Post",
    year: "2014",
    desc: "Warning about the deteriorating state of food safety in America.",
    link: "https://www.huffpost.com/entry/food-safety-in-the-us-wer_b_532948"
  },
  {
    title: "Technique Against Nature",
    publication: "SAGE Journals",
    year: "1995",
    desc: "Academic analysis of technology's relationship with natural systems.",
    link: "https://journals.sagepub.com/doi/10.1177/027046769501500205?icid=int.sj-abstract.similar-articles.8"
  },
  {
    title: "Patents Encroach upon the Body: Confronting the Abolition of Man",
    publication: "Crisis Magazine",
    year: "1995",
    desc: "Examination of biotechnology patents and their implications for human dignity.",
    link: "https://crisismagazine.com/vault/patents-encroach-upon-the-body-confronting-the-abolition-of-man"
  },
  {
    title: "Biotechnology - A Proposal for Regulatory Reform",
    publication: "Notre Dame Journal of Law, Ethics & Public Policy",
    year: "1989",
    desc: "Legal framework proposal for biotechnology regulation and oversight.",
    link: "https://scholarship.law.nd.edu/ndjlepp/vol3/iss1/10/"
  }
];

// Interviews and podcasts
const interviews = [
  {
    title: "Cold Evil: Technology and Modern Ethics",
    type: "Podcast",
    year: "2017",
    desc: "In-depth discussion about technology's impact on modern ethics and human values.",
    link: "https://podcasts.apple.com/us/podcast/cold-evil-technology-and-modern-ethics-andrew-kimbrell/id1197513890?i=1000386746413"
  },
  {
    title: "Organic Valley Interview Part 1",
    type: "Interview",
    year: "2015",
    desc: "Discussion on organic agriculture and sustainable food systems.",
    link: "https://www.organicvalley.coop/blog/rootstock-radio-andrew-kimbrell-part-1/"
  },
  {
    title: "Organic Valley Interview Part 2",
    type: "Interview", 
    year: "2015",
    desc: "Continuation of discussion on Center for Food Safety's work and mission.",
    link: "https://www.organicvalley.coop/blog/andrew-kimbrell-of-center-for-food-safety-part-2/"
  },
  {
    title: "GMOs: Necessary in a Hot and Crowded World?",
    type: "Podcast",
    year: "2014",
    desc: "Climate One podcast debate on GMOs and their role in addressing climate change.",
    link: "https://www.climateone.org/people/andrew-kimbrell"
  },
  {
    title: "Prop 37: Did 44 Million Dollars Make the Difference?",
    type: "Radio Interview",
    year: "2012",
    desc: "Analysis of California's GMO labeling proposition and corporate influence.",
    link: "https://www.kcrw.com/news/shows/which-way-la/prop-37-did-44-million-dollars-make-the-difference/prop-37-did-44-million-dollars-make-the-difference"
  }
];

export default function Articles() {
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
            Articles & Interviews
          </h1>
          <p className="text-xl text-softwhite/90 font-sans">
            Decades of writing on environmental law, food safety, and biotechnology policy
          </p>
        </motion.div>
      </section>
      
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Article Collections */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-forest-900 font-semibold mb-8 text-center">
            Article Collections
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {articleCollections.map((collection, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest-900/5 flex items-center justify-center mr-3">
                    <collection.icon size={24} className="text-forest-900/80" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-forest-900">
                      {collection.title}
                    </h3>
                    <span className="text-sm text-forest-600">{collection.count}</span>
                  </div>
                </div>
                <p className="text-base text-forest-700 mb-4 line-clamp-3">
                  {collection.desc}
                </p>
                <a
                  href={collection.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-forest-900 text-softwhite shadow hover:bg-forest-700 hover:scale-105 transition-all"
                >
                  View Collection
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Articles */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-forest-900 font-semibold mb-8 text-center">
            Featured Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              >
                <div className="mb-3">
                  <h3 className="font-serif font-semibold text-lg text-forest-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-forest-600">
                    <span>{article.publication}</span>
                    <span>•</span>
                    <span>{article.year}</span>
                  </div>
                </div>
                <p className="text-base text-forest-700 mb-4 line-clamp-3">
                  {article.desc}
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full border-2 border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-softwhite transition-all"
                >
                  Read Article
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interviews & Podcasts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-forest-900 font-semibold mb-8 text-center">
            Interviews & Podcasts
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {interviews.map((interview, idx) => (
              <motion.div
                key={idx}
                className="bg-beige rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest-900/5 flex items-center justify-center mr-3">
                    <Mic size={24} className="text-forest-900/80" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-forest-600 bg-forest-100 px-2 py-1 rounded">
                      {interview.type}
                    </span>
                    <div className="text-sm text-forest-600 mt-1">{interview.year}</div>
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-lg text-forest-900 mb-3 line-clamp-2">
                  {interview.title}
                </h3>
                <p className="text-base text-forest-700 mb-4 line-clamp-3">
                  {interview.desc}
                </p>
                <a
                  href={interview.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-sm px-4 py-2 rounded-full bg-forest-900 text-softwhite shadow hover:bg-forest-700 hover:scale-105 transition-all"
                >
                  Listen/Watch
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
