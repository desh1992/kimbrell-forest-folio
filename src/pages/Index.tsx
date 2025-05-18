
// Home: Hero section with elegant serif quote and subtitle, fade-in layers, fallback image

import Layout from "@/components/Layout";

const heroImage =
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=facearea&w=1500&q=80";

export default function Index() {
  return (
    <Layout>
      <section className="relative w-full flex flex-col items-center justify-start min-h-[340px] md:min-h-[520px] max-h-[75vh]">
        {/* Hero image bg/fallback */}
        <img
          src={heroImage}
          alt="Forest lake aerial landscape"
          className="hero-bg absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{
            zIndex: 1,
            minHeight: 320,
            maxHeight: 480
          }}
        />
        {/* Overlaid quote */}
        <div
          className="relative z-10 flex flex-col items-center justify-center px-4 md:px-10"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="mx-auto rounded-2xl glass max-w-2xl px-6 py-10 md:py-16 bg-white/60 shadow-lg mt-24 md:mt-32 fade-in-on-scroll visible"
            style={{backdropFilter: "blur(4px)", animationDelay: "0.1s"}}>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-forest-900 mb-6 leading-tight text-center section-fadein">
              It is worth doing<br/>important and brave things.
            </h1>
            <div className="mt-3 text-lg md:text-xl text-forest-700 font-sans text-center section-fadein" style={{animationDelay: "0.4s"}}>
              "Here you&apos;ll find the collected works of Andrew Kimbrell, including his books, essays, and public talks on law, food, and the future of the planet."
            </div>
            <div className="mt-6 flex items-center justify-center section-fadein" style={{ animationDelay: "0.6s" }}>
              <span className="inline-block h-2 w-2 bg-forest-900 rounded-full mx-1 animate-pulse" />
              <span className="inline-block h-2 w-2 bg-forest-700 rounded-full mx-1 animate-pulse" />
              <span className="inline-block h-2 w-2 bg-forest-600 rounded-full mx-1 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
      {/* Optionally, below hero: Add a little scroll hint */}
      <div className="w-full flex items-center justify-center mt-[-32px] mb-16">
        <span className="relative rounded-full border border-forest-700/30 bg-white/50 px-4 py-1 text-forest-900/70 text-sm font-serif shadow section-fadein animate-bounce">
          Scroll for more
        </span>
      </div>
    </Layout>
  );
}
