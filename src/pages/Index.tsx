import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Book, Mic, FileText, Film } from "lucide-react";

// Use a picturesque dummy image for hero background (e.g. foggy mountain summit)
const heroBgImage = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80";



const features = [
  {
    title: "Books and Handbooks",
    desc: "Explore Andrew's influential publications on bioethics, environmental law, and food safety.",
    icon: Book,
    href: "/books",
    primary: true
  },
  {
    title: "Public Speaking",
    desc: "Inspiring talks on law, food systems, and environmental issues delivered globally.",
    icon: Mic,
    href: "/speaking",
  },
  {
    title: "Articles & Interviews",
    desc: "In-depth articles and interviews covering critical environmental and legal topics.",
    icon: FileText,
    href: "/articles",
  },
  {
    title: "Films",
    desc: "Documentary films and video content featuring Andrew's work and advocacy.",
    icon: Film,
    href: "/films",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center min-h-[470px] md:min-h-[520px] max-h-[85vh] w-full overflow-visible bg-forest-900">
        {/* Hero background image */}
        <img
          src={heroBgImage}
          alt="Nature background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: "brightness(0.8)" }}
        />
        {/* Translucent gradient overlay */}
        <div
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(37,77,50,0.61) 5%, rgba(37,77,50,0.70) 30%, rgba(37,77,50,0.75) 70%, rgba(37,77,50,0.86) 100%)"
          }}
        />
        
        {/* Floating Desktop Image Container - Within Content Boundaries */}
        <motion.div
          className="hidden md:block absolute left-[56%] translate-x-32 lg:translate-x-40 xl:translate-x-44 top-[-05%] -translate-y-1/2 z-40"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        >
          <div className="relative group">
            {/* Elegant Shadow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-forest-900/5 to-forest-900/15 rounded-3xl transform translate-x-2 translate-y-2 blur-xl"></div>
            
            {/* Main Floating Image Frame - Extends Beyond Hero Section */}
            <div 
              className="relative w-96 h-[36rem] rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700 overflow-hidden"
              style={{
                boxShadow: '0 25px 50px -12px rgba(37, 77, 50, 0.25)'
              }}
            >
              <div className="relative w-full h-full bg-gradient-to-br from-forest-50 to-beige">
                <img 
                  src="/images/other/Kimbrellweb_cropped.jpeg" 
                  alt="Andrew Kimbrell speaking at U.S. Senate"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/5 via-transparent to-transparent"></div>
                
                {/* Elegant Inner Border */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-softwhite/20"></div>
              </div>
            </div>
            
            {/* Decorative Corner Accents */}
            {/* <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-softwhite to-beige rounded-full shadow-lg opacity-80"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-forest-100 to-forest-200 rounded-full shadow-lg opacity-60"></div> */}
          </div>
        </motion.div>

        {/* Mobile Landscape Image Container - Top Positioned */}
        <motion.div
          className="md:hidden absolute inset-x-0 top-4 flex justify-center z-40"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <div className="relative">
            {/* Mobile Shadow */}
            <div className="absolute inset-0 bg-forest-900/10 rounded-2xl transform translate-x-1 translate-y-1 blur-lg"></div>
            
            {/* Mobile Landscape Image Frame */}
            <div 
              className="relative w-52 h-32 rounded-2xl shadow-xl overflow-hidden"
              style={{
                boxShadow: '0 15px 30px -8px rgba(37, 77, 50, 0.2)'
              }}
            >
              <div className="relative w-full h-full">
                <img 
                  src="/images/other/Kimbrellweb_cropped.jpeg" 
                  alt="Andrew Kimbrell speaking at U.S. Senate"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/5 via-transparent to-transparent"></div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-softwhite/20"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Glass-like, centered content */}
        <motion.div
          className="relative z-20 flex flex-col items-start justify-center w-full px-6 md:px-8 py-12 md:py-20 text-left md:max-w-lg md:mr-[22rem] lg:mr-[26rem] xl:mr-[30rem] pt-44 md:pt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.37, 1, 0.22, 1] }}
        >
          {/* Subtle big shadowed text behind */}
          {/* <span className="font-serif text-[2.8rem] md:text-[4.5rem] font-bold text-softwhite/30 leading-none absolute -top-8 left-1/2 -translate-x-1/2 z-10 select-none pointer-events-none whitespace-nowrap"
            style={{ textShadow: "0 1px 17px rgba(44,72,46,0.18)" }}>
            Andrew Kimbrell
          </span> */}
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-softwhite mb-6 drop-shadow-lg relative z-20">
            Andrew Kimbrell
          </h1>
          <div className="font-sans text-2xl md:text-3xl text-softwhite/90 font-normal mb-7 relative z-20">
            Attorney, Author, NGO leader, Psychologist
          </div>
          <p className="mb-8 mt-2 font-sans text-lg md:text-xl text-softwhite/85 max-w-2xl relative z-20">
            {"Welcome to the official web home of Andrew Kimbrell, including links to his books, articles, media and litigation highlights."}
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFORMATION SECTION */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center py-20 bg-beige border-b border-forest-700/5 relative">
        <motion.div
          className="text-center max-w-4xl mx-auto px-6 flex-1"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.09 }}>
          <h2 className="text-2xl md:text-3xl font-serif text-forest-900 font-semibold mb-6">
            Get in Touch with Andrew
          </h2>
          <p className="text-lg md:text-xl font-serif text-forest-700 mb-4 leading-relaxed">
            For public speaking, consulting or any other media inquiries please use the contact form or reach out directly via email: 
          </p>
          {/* <p className="text-lg md:text-xl font-serif text-forest-700 mb-6">
            Please use the contact form or reach out directly via email:
          </p> */}
          <a 
            href="mailto:ackimbrell@gmail.com" 
            className="text-lg md:text-2xl font-serif text-forest-900  hover:text-forest-600 transition-colors underline"
          >
            info@kimbrell.com
          </a>
        </motion.div>
        
        {/* Square Image Container */}
        {/* <motion.div
          className="mt-8 md:mt-0 md:absolute md:right-8 lg:right-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div 
            className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-softwhite to-forest-100 rounded-xl shadow-lg border-2 border-forest-200 hover:scale-105 transition-transform duration-300"
            style={{
              boxShadow: '0 10px 25px -8px rgba(37, 77, 50, 0.3)'
            }}
          >
            <div className="absolute inset-3 bg-forest-900/5 rounded-lg flex items-center justify-center">
              <div className="text-center text-forest-700">
                <div className="text-sm font-serif mb-1">Square Image</div>
                <div className="text-xs opacity-70">1:1 Ratio</div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </section>



      {/* PRAISE SECTION */}
      <section className="relative w-full flex flex-col items-center justify-center py-16 px-4 bg-forest-900">
        <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="font-serif text-lg md:text-xl font-semibold text-softwhite mb-4 leading-relaxed">
              "ONE OF THE WORLD'S 50 GREEN HEROES<br /> 
              WHO COULD SAVE THE PLANET."
            </div>
            <div className="font-serif text-base text-softwhite/80">
              — THE GUARDIAN
            </div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="font-serif text-lg md:text-xl font-semibold text-softwhite mb-4 leading-relaxed">
              "ONE OF THE WORLD'S 100 TOP VISIONARIES."
            </div>
            <div className="font-serif text-base text-softwhite/80">
              — UTNE READER
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION / IMPACT SECTION */}
      <section className="relative w-full flex flex-col items-center justify-center py-16 bg-softwhite">
        <motion.div
          className="text-forest-900 font-serif text-2xl md:text-3xl font-medium text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.07 }}
        >
          
          Andrew Kimbrell is the celebrated founder of Center for Food Safety and a notable author, litigator and psychotherapist. Read his full bio here…
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <a
            href="/bio"
            className="px-7 py-2 rounded-full font-serif bg-forest-900 text-softwhite text-lg font-semibold shadow-md hover:bg-forest-700 hover:text-softwhite border-2 border-forest-900 hover:scale-105 transition"
          >
            About Andrew
          </a>
        </motion.div>
      </section>

      {/* FEATURE / SERVICES CARDS SECTION */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-beige/80 px-4">
        <motion.div
          className="mb-10 text-2xl font-serif text-forest-900 font-semibold text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.12 }}>
          Explore Andrew’s Work
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 w-full max-w-5xl">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.29 }}
              transition={{ duration: 0.5 + idx * 0.07, delay: 0.1 + idx * 0.09 }}
            >
              <a
                href={f.href}
                className={`block rounded-2xl shadow bg-white border border-forest-900/10 px-8 py-10 flex flex-col items-start gap-3 hover:scale-[1.035] hover:shadow-lg transition-all cursor-pointer ${
                  f.primary ? 'bg-white text-forest-900' : 'text-forest-900'
                } no-underline`}
                style={{
                  boxShadow: '0 2px 18px 0 rgba(151, 169, 161, 0.09)'
                }}
              >
                <div className="mb-4 w-full">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-forest-900/5`}>
                    {f.icon && <f.icon size={26} className="text-forest-900/80" aria-label={`${f.title} icon`} />}
                  </div>
                  <span className="font-serif text-xl font-bold">{f.title}</span>
                </div>
                <div className="font-sans text-base opacity-85">{f.desc}</div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* KEY ACCOMPLISHMENTS SECTION */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-softwhite">
        {/* <motion.div
          className="text-2xl font-serif text-forest-900 font-semibold mb-8 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}>
          Key Accomplishments
        </motion.div> */}
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="rounded-xl bg-beige border border-forest-900/10 px-6 py-8 text-left shadow hover:scale-[1.03] transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="font-serif text-xl mb-4 text-forest-800 font-semibold text-center">NGO LEADER & ENTREPRENEUR</div>
            <div className="font-sans text-base text-forest-700">Founder of The Greenhouse Crisis Foundation, International Center For Technology Assessment, Center For Food Safety, Organic Consumer Association, Earth Advocacy Institute, and more.</div>
          </motion.div>
          <motion.div
            className="rounded-xl bg-beige border border-forest-900/10 px-6 py-8 text-left shadow hover:scale-[1.03] transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.52, delay: 0.17 }}
          >
            <div className="font-serif text-xl mb-4 text-forest-800 font-semibold text-center">ENVIRONMENTAL ATTORNEY</div>
            <div className="font-sans text-base text-forest-700">Initiated and co-litigated successful US Supreme Court victories requiring the Environmental Protection Agency (EPA) to regulate greenhouse gases, halt the patenting of genes, and allow farmers to sue corporations for GMO contamination of their crops.</div>
          </motion.div>
          <motion.div
            className="rounded-xl bg-beige border border-forest-900/10 px-6 py-8 text-left shadow hover:scale-[1.03] transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.64, delay: 0.24 }}
          >
            <div className="font-serif text-xl mb-4 text-forest-800 font-semibold text-center">AUTHOR</div>
            <div className="font-sans text-base text-forest-700">Author of influential works including <em>The Human Body Shop</em>, <em>The Masculine Mystique</em>, and <em>Fatal Harvest: The Tragedy of Industrial Agriculture</em>.</div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
