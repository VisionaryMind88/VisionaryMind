import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileBarChart, Code, Play, Zap } from 'lucide-react';

const steps = [
  {
    title: "1. Ontdekking & Analyse",
    description: "We beginnen met het grondig begrijpen van je bedrijf, doelen en uitdagingen. Dit stelt ons in staat om jouw specifieke AI-behoeften te identificeren.",
    icon: <Search className="h-8 w-8 text-white" />,
    color: "bg-accent-blue"
  },
  {
    title: "2. Strategieontwikkeling",
    description: "Op basis van onze analyse stellen we een maatwerkaanpak voor, waarbij we de meest geschikte AI-oplossingen en implementatiestrategie selecteren.",
    icon: <FileBarChart className="h-8 w-8 text-white" />,
    color: "bg-accent-purple"
  },
  {
    title: "3. Ontwikkeling & Implementatie",
    description: "Ons team van AI-experts ontwikkelt de oplossing volgens je specificaties, terwijl we je gedurende het hele proces betrokken houden.",
    icon: <Code className="h-8 w-8 text-white" />,
    color: "bg-accent-green"
  },
  {
    title: "4. Training & Activering",
    description: "We zorgen voor een volledige kennisoverdracht, zodat je team de AI-oplossing optimaal kan benutten en beheersen.",
    icon: <Play className="h-8 w-8 text-white" />,
    color: "bg-accent-blue"
  },
  {
    title: "5. Ondersteuning & Optimalisatie",
    description: "We blijven je ondersteunen met doorlopende verbeteringen, updates en strategisch advies om ervoor te zorgen dat je AI-investering blijft renderen.",
    icon: <Zap className="h-8 w-8 text-white" />,
    color: "bg-accent-purple"
  }
];

const WorkProcess: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ons werkproces</h2>
          <p className="text-text-secondary text-lg">Van eerste gesprek tot implementatie: dit is hoe wij samen met jou werken aan jouw AI-oplossing.</p>
        </motion.div>
        
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bottom-10 w-1 bg-primary-lighter hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`${index % 2 === 0 ? 'md:text-right order-2 md:order-1' : 'order-2'}`}>
                  <h3 className="text-2xl font-heading font-semibold mb-4">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
                <div className={`relative flex justify-center ${index % 2 === 0 ? 'md:justify-start order-1 md:order-2' : 'md:justify-end order-1'}`}>
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center z-10 relative`}>
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
