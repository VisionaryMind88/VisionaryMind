import React from 'react';
import { motion } from 'framer-motion';
import { smoothScrollTo } from '@/lib/utils';
import { Cpu, MessageSquare, FileEdit, DollarSign, Search, Shield } from 'lucide-react';

const serviceItems = [
  {
    icon: <Cpu className="h-8 w-8 text-accent-blue" />, 
    title: "AI Data-analyse",
    description: "Transformeer ruwe bedrijfsgegevens naar bruikbare inzichten en voorspellende modellen om betere beslissingen te nemen.",
    features: ["Klantgedragsanalyse", "Voorraadoptimalisatie", "Omzet- en trendprognoses"],
    color: "blue",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-accent-purple" />, 
    title: "AI Klantenservice",
    description: "Verbeter de klanttevredenheid met 24/7 beschikbare AI-gedreven klantenservice-oplossingen.",
    features: ["Slimme chatbots", "Email-automatisering", "Sentimentanalyse"],
    color: "purple",
  },
  {
    icon: <FileEdit className="h-8 w-8 text-accent-green" />, 
    title: "AI Content Creatie",
    description: "Genereer hoogwaardige content voor jouw marketing, website en sociale media met geavanceerde AI.",
    features: ["Website copy", "Social media posts", "E-mailmarketing"],
    color: "green",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-accent-blue" />, 
    title: "AI Procesoptimalisatie",
    description: "Automatiseer en optimaliseer bedrijfsprocessen voor maximale efficiëntie en kostenreductie.",
    features: ["Workflowautomatisering", "Documentherkenning", "Slim resource-beheer"],
    color: "blue",
  },
  {
    icon: <Search className="h-8 w-8 text-accent-purple" />, 
    title: "AI Marketing & SEO",
    description: "Verbeter je online vindbaarheid en marketingprestaties met datagestuurde AI-oplossingen.",
    features: ["Gepersonaliseerde marketing", "SEO-optimalisatie", "Concurrentieanalyse"],
    color: "purple",
  },
  {
    icon: <Shield className="h-8 w-8 text-accent-green" />, 
    title: "AI Beveiliging",
    description: "Bescherm je bedrijf met geavanceerde AI-beveiligingsoplossingen die bedreigingen detecteren en voorkomen.",
    features: ["Fraudedetectie", "Netwerkmonitoring", "Risicobeoordeling"],
    color: "green",
  }
];

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  index: number;
}> = ({ icon, title, description, features, color, index }) => {
  return (
    <motion.div 
      className="service-card gradient-border rounded-xl overflow-hidden bg-primary-light"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className={`w-14 h-14 rounded-lg bg-accent-${color} bg-opacity-20 flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-heading font-semibold mb-4">{title}</h3>
        <p className="text-text-secondary mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-accent-${color} mr-2 flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-text-secondary text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => smoothScrollTo('contact')}
          className={`inline-flex items-center text-accent-${color} hover:text-accent-purple transition-colors duration-300 text-sm font-medium`}
        >
          Meer informatie
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="diensten" className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">AI-diensten & oplossingen</h2>
          <p className="text-text-secondary text-lg">Van standaard AI-tools tot volledig maatwerk - wij bieden alles wat je nodig hebt om jouw bedrijf naar het volgende niveau te tillen.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              color={service.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
