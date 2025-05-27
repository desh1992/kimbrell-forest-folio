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
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  
  // Bio content
  const bioText = `Andrew Kimbrell is a pioneering public interest attorney, environmental activist, and author, best known as the Founder of the Center for Food Safety (CFS).

Over three decades, he has inspired legal and scientific strategies for food, environment, and health. His advocacy spans from landmark federal lawsuits to public education.

Kimbrell's work continues to shape public discourse on biotechnology, agricultural policy, and ecological ethics.

Professional Background:
• Founder and Executive Director of the Center for Food Safety
• Public interest attorney specializing in environmental and food law
• Author of multiple books on bioethics and environmental policy
• International speaker on food safety and environmental issues
• Expert in biotechnology regulation and agricultural policy

Notable Achievements:
• Led landmark federal lawsuits on food and environmental issues
• Authored influential works on bioethics and sustainable agriculture
• Advised government agencies and NGOs on regulatory matters
• Recognized expert in agricultural biotechnology and food safety law
• Advocate for sustainable food systems and environmental protection

Education and Expertise:
• Legal expertise in environmental and food safety law
• Extensive background in public interest advocacy
• Deep knowledge of biotechnology and agricultural policy
• Experience in federal litigation and regulatory affairs
• Leadership in environmental and food safety organizations`;

  // Split text into lines that fit the page width
  const splitText = doc.splitTextToSize(bioText, 170);
  
  // Add the text to the document
  doc.text(splitText, 20, 65);
  
  // Save the PDF with the specified filename
  doc.save('andrew-bio.pdf');
};

export default function Bio() {
  return (
    <Layout>
      <section className="w-full bg-forest-900/95 py-16 md:py-24">
        <motion.div
          className="max-w-3xl mx-auto text-softwhite font-serif text-center text-3xl md:text-4xl px-6"
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Meet Andrew Kimbrell
        </motion.div>
      </section>
      <section className="max-w-3xl mx-auto pt-12 pb-20 px-6">
        <motion.div
          className="mb-8 text-lg md:text-xl font-serif text-forest-900 font-medium"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}>
          Andrew Kimbrell is a pioneering public interest attorney, environmental activist, and author, best known as the Founder of the Center for Food Safety (CFS).
        </motion.div>
        <motion.div
          className="mb-6 text-base md:text-lg font-sans text-forest-800"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.26 }}>
          Over three decades, he has inspired legal and scientific strategies for food, environment, and health. His advocacy spans from land-mark federal lawsuits to public education.
        </motion.div>
        <motion.div
          className="text-base font-sans text-muted"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.32 }}>
          Kimbrell's work continues to shape public discourse on biotechnology, agricultural policy, and ecological ethics.
        </motion.div>
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
