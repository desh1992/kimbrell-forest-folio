
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { LayoutDashboard, LayoutList, LayoutGrid, Move } from "lucide-react";

// Use uploaded person image for hero background
const heroImage = "/lovable-uploads/4a6b2924-0dd6-4f9a-8ebb-a916c892531d.png";

const brandLogos = [
  { name: "Center for Food Safety", src: "/public/placeholder.svg", initials: "CFS" },
  { name: "Earth Justice", src: "/public/placeholder.svg", initials: "EJ" },
  { name: "Sierra Club", src: "/public/placeholder.svg", initials: "SC" },
  { name: "UNEP", src: "/public/placeholder.svg", initials: "UN" },
  { name: "Food Ethics Council", src: "/public/placeholder.svg", initials: "FEC" },
  { name: "WWF", src: "/public/placeholder.svg", initials: "WWF" }
];

const features = [
  {
    title: "Litigation",
    desc: "Expertise in environmental and food law; advocacy for public interest in landmark federal cases.",
    icon: LayoutDashboard,
    primary: true
  },
  {
    title: "Public Speaking",
    desc: "Inspiring audiences on law, food, future, and ethical issues at events globally.",
    icon: LayoutList,
  },
  {
    title: "Books & Writing",
    desc: "Renowned author on bioethics, agriculture, and conservation topics.",
    icon: LayoutGrid,
  },
  {
    title: "Consulting",
    desc: "Strategic advisory to NGOs, government, and business on regulatory and scientific matters.",
    icon: Move,
  },
];

export default function Index() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col md:flex-row min-h-[450px] max-h-[75vh] overflow-hidden bg-forest-900">
        {/* Hero Image: takes full background; visible especially on left */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImage}
            alt="Portrait hero background"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.93)" }}
          />
        </div>
        {/* Gradient overlay: left side mostly transparent, right side more dark for text visibility */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(37,77,50,0.05) 0%, rgba(37,77,50,0.18) 38%, rgba(37,77,50,0.83) 82%, rgba(37,77,50,0.96) 100%)"
          }}
        />
        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-start justify-center gap-4 px-6 md:px-12 py-16 max-w-2xl md:max-w-lg w-full md:w-2/5 ml-auto glass"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.36, 1.39, 0.46, 0.81] }}
          style={{
            background:
              "linear-gradient(to right, rgba(247,246,242,0.04) 0%, rgba(249,250,249,0.14) 47%, rgba(255,255,255,0.71) 95%, rgba(255,255,255,0.92) 100%)",
            backdropFilter: "blur(6px)"
          }}
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-forest-900 mb-4 leading-tight">
            Andrew Kimbrell
          </h1>
          <div className="font-sans text-lg md:text-2xl text-forest-800 font-medium mb-4">
            Attorney, Author, Psychotherapist
          </div>
          <p className="mt-2 mb-4 font-sans text-base md:text-lg text-forest-800/80 max-w-lg">
            {"Here you'll find the collected works of Andrew Kimbrell, including his books, essays, and public talks on law, food, and the future of the planet."}
          </p>
          <a
            href="/bio"
            className="px-6 py-2 rounded-full font-serif bg-forest-900 text-softwhite text-base font-semibold shadow hover:bg-forest-800 hover:scale-105 transition"
          >
            About Andrew
          </a>
        </motion.div>
      </section>

      {/* TRUSTED BY / BRANDS SECTION */}
      <section className="w-full flex flex-col items-center justify-center py-10 bg-beige border-b border-forest-700/5">
        <motion.div
          className="mb-8 text-lg md:text-xl font-serif text-forest-700"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.09 }}>
          Trusted by leading organizations
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-7 md:gap-14 items-center justify-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.14 }}>
          {brandLogos.map((logo, idx) => (
            <div key={logo.name} className="w-32 h-10 flex items-center justify-center bg-softwhite rounded-lg shadow-sm opacity-90">
              {/* Prefer initials as logo, fallback to svg */}
              {logo.initials
                ? <span className="font-serif text-lg text-forest-900">{logo.initials}</span>
                : <img src={logo.src} alt={logo.name} className="w-7 h-7 object-contain" />
              }
            </div>
          ))}
        </motion.div>
      </section>

      {/* MISSION / IMPACT SECTION */}
      <section className="relative w-full flex flex-col items-center justify-center py-16 bg-forest-900">
        <motion.div
          className="text-softwhite font-serif text-2xl md:text-3xl font-medium text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.07 }}
        >
          Since 1994 Andrew Kimbrell has brought together the brightest minds—offering advocacy and thoughtful leadership for a thriving planet.
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
          Areas of Expertise
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 w-full max-w-5xl">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              className={`rounded-2xl shadow bg-white border border-forest-900/10 px-8 py-10 flex flex-col items-start gap-3 hover:scale-[1.035] hover:shadow-lg transition-all ${
                f.primary ? 'bg-white text-forest-900' : 'text-forest-900'
              }`}
              style={{
                boxShadow: '0 2px 18px 0 rgba(151, 169, 161, 0.09)'
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.29 }}
              transition={{ duration: 0.5 + idx * 0.07, delay: 0.1 + idx * 0.09 }}
            >
              <div className="mb-4 w-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-forest-900/5`}>
                  {f.icon && <f.icon size={26} className="text-forest-900/80" aria-label={`${f.title} icon`} />}
                </div>
                <span className="font-serif text-xl font-bold">{f.title}</span>
              </div>
              <div className="font-sans text-base opacity-85">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS / VALUE SECTION */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-softwhite">
        <motion.div
          className="text-2xl font-serif text-forest-900 font-semibold mb-8 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}>
          Process that moves things forward
        </motion.div>
        <div className="max-w-3xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Research", "Advocacy", "Impact"].map((step, i) => (
            <motion.div
              key={step}
              className="rounded-xl bg-beige border border-forest-900/10 px-5 py-7 text-center shadow hover:scale-[1.03] transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 + i * 0.12, delay: 0.1 + i * 0.07 }}
            >
              <div className="text-3xl font-serif font-bold mb-3 text-forest-900">{i + 1}</div>
              <div className="font-serif text-xl mb-2 text-forest-800">{step}</div>
              <div className="font-sans text-base text-forest-700 opacity-70">Short description of how Andrew approaches {step.toLowerCase()} with purpose, rigor, and honesty.</div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

