import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import jsPDF from 'jspdf';

const downloadBioAsPDF = () => {
  const doc = new jsPDF();
  
  // Set up document properties
  doc.setProperties({
    title: 'Andrew Kimbrell - Biography',
    author: 'Andrew Kimbrell',
    subject: 'Biography',
    creator: 'Andrew Kimbrell Website'
  });
  
  // Set font and title
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('Andrew Kimbrell', 20, 30);
  doc.text('Biography', 20, 45);
  
  // Add horizontal line
  doc.setLineWidth(0.5);
  doc.line(20, 50, 190, 50);
  
  // Set font for body text
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  
  // Full bio content
  const bioText = `Andrew Kimbrell is a pioneering public interest attorney, environmental activist, and author, best known as the Founder and former Executive Director of the Center for Food Safety (CFS).

Under his visionary leadership, CFS became one of the nation's most influential advocacy organizations dedicated to protecting human health and the environment by curbing industrial agriculture, fighting groundbreaking litigation, and teaching sustainable alternatives.

Alongside CFS, he has also founded: The Greenhouse Crisis Foundation, International Center For Technology Assessment, Organic Consumer Association, Foundation Earth, and most recently, Earth Advocacy Institute, as well as serving as the president of the Board of Humane Farm Animal Care.

Over the course of his career, Kimbrell has been at the forefront of landmark legal, regulatory, and grassroots efforts that reshaped national policy on genetically engineered crops, factory farming, food labeling, and pesticide use.

Kimbrell's legal acumen was instrumental in several landmark cases, including a significant Supreme Court decision concerning Monsanto's genetically engineered alfalfa. In this case, the Court acknowledged that the U.S. Department of Agriculture had violated federal environmental laws by approving the crop without a comprehensive environmental impact assessment, marking a substantial victory for environmental and public health advocates.

His tireless advocacy led to precedent-setting litigation and the empowerment of local and national communities in demanding transparency and accountability in the food system.

In addition to his legal and environmental work, Kimbrell is a prolific writer and thought leader. He has written several influential books that have helped educate and inspire a generation of food activists and ethical consumers, including Your Right to Know: Genetic Engineering and the Secret Changes in Your Food and The Fatal Harvest Reader: The Tragedy of Industrial Agriculture.

His writings delve into the ethical, legal, and environmental implications of modern agricultural practices, inspiring readers to engage critically with the food systems that sustain them.

Widely recognized for his contributions to environmental and food justice, he has been featured in numerous media outlets and honored by organizations across the globe.

Expanding his advocacy, Kimbrell recently founded the Earth Advocacy Institute, an organization dedicated to promoting earth stewardship, supporting citizens, activists and NGOs worldwide in coming together to prioritize the planet's health.

In addition to his environmental work, Kimbrell is a practicing psychotherapist, offering insights into the human psyche and its connection to broader societal and ecological systems. His dual expertise in law and psychotherapy enables him to approach activism with a profound understanding of both systemic structures and individual behaviors.

Recognized globally for his contributions, Kimbrell was named one of the world's 50 people "most likely to help save the planet" by The Guardian. And "one of the world's top 100 visionaries" by the Utne Reader.

His multifaceted career has fundamentally transformed the conversation around food, farming, ecological integrity and continues to influence public consciousness and inspire movements toward a more just, sustainable, and compassionate world.`;

  // Split text into lines that fit the page width
  const splitText = doc.splitTextToSize(bioText, 170);
  
  // Add the text to the document
  doc.text(splitText, 20, 65);
  
  // Save the PDF with the specified filename
  doc.save('andrew-kimbrell-bio.pdf');
};

export default function Bio() {
  return (
    <Layout>
      <section className="w-full bg-forest-900/95 py-16 md:py-24">
        <motion.div
          className="max-w-4xl mx-auto text-softwhite font-serif text-center text-3xl md:text-4xl px-6"
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Andrew Kimbrell Biography
        </motion.div>
      </section>
      
      <section className="max-w-4xl mx-auto pt-12 pb-20 px-6">
        {/* First image - Left side with text wrap */}
        <motion.div
          className="float-left mr-6 mb-4 w-72 md:w-96"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="/images/other/Kimbrellhome.jpeg"
            alt="Andrew Kimbrell"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>
        
        <motion.div
          className="mb-8 text-lg md:text-xl font-serif text-forest-900 font-medium leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}>
          Andrew Kimbrell is a pioneering public interest attorney, environmental activist, and author, best known as the Founder and former Executive Director of the Center for Food Safety (CFS).
        </motion.div>
        
        <motion.div
          className="mb-6 text-base md:text-lg font-sans text-forest-800 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.26 }}>
          Under his visionary leadership, CFS became one of the nation's most influential advocacy organizations dedicated to protecting human health and the environment by curbing industrial agriculture, fighting groundbreaking litigation, and teaching sustainable alternatives.
        </motion.div>
        
        <motion.div
          className="mb-6 text-base md:text-lg font-sans text-forest-800 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.32 }}>
          Alongside CFS, he has also founded: The Greenhouse Crisis Foundation, International Center For Technology Assessment, Organic Consumer Association, Foundation Earth, and most recently, Earth Advocacy Institute, as well as serving as the president of the Board of Humane Farm Animal Care.
        </motion.div>
        
        <motion.div
          className="mb-6 text-base md:text-lg font-sans text-forest-800 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.38 }}>
          Over the course of his career, Kimbrell has been at the forefront of landmark legal, regulatory, and grassroots efforts that reshaped national policy on genetically engineered crops, factory farming, food labeling, and pesticide use.
        </motion.div>
        
        <motion.div
          className="mb-6 text-base md:text-lg font-sans text-forest-800 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.44 }}>
          Kimbrell's legal acumen was instrumental in several landmark cases, including a significant Supreme Court decision concerning Monsanto's genetically engineered alfalfa. In this case, the Court acknowledged that the U.S. Department of Agriculture had violated federal environmental laws by approving the crop without a comprehensive environmental impact assessment, marking a substantial victory for environmental and public health advocates.
        </motion.div>
        
        {/* Second image - Right side with text wrap */}
        <motion.div
          className="float-right ml-6 mb-4 w-72 md:w-96"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <img
            src="/images/other/kimbrell_bio copy.jpg"
            alt="Andrew Kimbrell"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>
        
        <motion.div
          className="mb-6 text-base md:text-lg font-sans text-forest-800 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.50 }}>
          His tireless advocacy led to precedent-setting litigation and the empowerment of local and national communities in demanding transparency and accountability in the food system.
        </motion.div>
        
        <motion.div
          className="mb-6 text-base md:text-lg font-sans text-forest-800 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.56 }}>
          In addition to his legal and environmental work, Kimbrell is a prolific writer and thought leader. He has written several influential books that have helped educate and inspire a generation of food activists and ethical consumers, including <em>Your Right to Know: Genetic Engineering and the Secret Changes in Your Food</em> and <em>The Fatal Harvest Reader: The Tragedy of Industrial Agriculture</em>. His writings delve into the ethical, legal, and environmental implications of modern agricultural practices, inspiring readers to engage critically with the food systems that sustain them.
        </motion.div>
        
        <motion.div
          className="mb-6 text-base md:text-lg font-sans text-forest-800 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.62 }}>
          Widely recognized for his contributions to environmental and food justice, he has been featured in numerous media outlets and honored by organizations across the globe.
        </motion.div>
        
        <motion.div
          className="mb-6 text-base md:text-lg font-sans text-forest-800 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.68 }}>
          Expanding his advocacy, Kimbrell recently founded the Earth Advocacy Institute, an organization dedicated to promoting earth stewardship, supporting citizens, activists and NGOs worldwide in coming together to prioritize the planet's health.
        </motion.div>
        
        <motion.div
          className="mb-6 text-base md:text-lg font-sans text-forest-800 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.74 }}>
          In addition to his environmental work, Kimbrell is a practicing psychotherapist, offering insights into the human psyche and its connection to broader societal and ecological systems. His dual expertise in law and psychotherapy enables him to approach activism with a profound understanding of both systemic structures and individual behaviors.
        </motion.div>
        
        <motion.div
          className="mb-6 text-base md:text-lg font-sans text-forest-800 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.80 }}>
          Recognized globally for his contributions, Kimbrell was named one of the world's 50 people "most likely to help save the planet" by The Guardian. And "one of the world's top 100 visionaries" by the Utne Reader.
        </motion.div>
        
        <motion.div
          className="mb-8 text-base md:text-lg font-sans text-forest-800 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.86 }}>
          His multifaceted career has fundamentally transformed the conversation around food, farming, ecological integrity and continues to influence public consciousness and inspire movements toward a more just, sustainable, and compassionate world.
        </motion.div>
        
        {/* Clear floats */}
        <div className="clear-both"></div>
        
        <div className="text-center mt-12">
          <button
            className="font-serif text-base px-6 py-2 rounded-full bg-forest-900 text-softwhite shadow hover:scale-105 transition"
            onClick={downloadBioAsPDF}
          >
            Download Full Bio (PDF)
          </button>
        </div>
      </section>
    </Layout>
  );
}
