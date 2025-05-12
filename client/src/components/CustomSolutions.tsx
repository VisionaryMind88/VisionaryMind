import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { smoothScrollTo } from '@/lib/utils';
import { Code, Layers, Sliders } from 'lucide-react';

const CustomSolutions: React.FC = () => {
  return (
    <section id="maatwerk" className="py-20 bg-primary-light bg-opacity-30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary-light border border-primary-lighter mb-4">
              <p className="text-sm text-text-secondary flex items-center">
                <span className="w-2 h-2 bg-accent-purple rounded-full inline-block mr-2 animate-pulse"></span>
                Op maat gemaakte oplossingen
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">AI-maatwerk voor unieke bedrijfsuitdagingen</h2>
            
            <p className="text-text-secondary mb-8">Naast onze standaard AI-diensten ontwikkelen we volledig op maat gemaakte oplossingen die specifiek zijn afgestemd op de unieke behoeften, doelen en uitdagingen van jouw bedrijf.</p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-blue bg-opacity-20 rounded-lg flex items-center justify-center text-accent-blue">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2">Integratie met bestaande systemen</h4>
                  <p className="text-text-secondary">Naadloze integratie van AI-oplossingen met je huidige software, CRM, ERP of andere bedrijfssystemen.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-purple bg-opacity-20 rounded-lg flex items-center justify-center text-accent-purple">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2">Branchespecifieke oplossingen</h4>
                  <p className="text-text-secondary">AI-oplossingen die zijn ontwikkeld met diepgaande kennis van de specifieke uitdagingen en kansen in jouw branche.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-green bg-opacity-20 rounded-lg flex items-center justify-center text-accent-green">
                  <Sliders className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2">Schaalbare oplossingen</h4>
                  <p className="text-text-secondary">Systemen die meegroeien met je bedrijf, van startup tot gevestigde speler, zonder dat je opnieuw hoeft te investeren.</p>
                </div>
              </div>
            </div>
            
            <Button
              onClick={() => smoothScrollTo('contact')}
              className="neon-button bg-accent-purple text-white py-3 px-8 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-accent-purple/25 inline-block"
            >
              Vraag een maatwerkoplossing aan
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 rounded-2xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80" 
                alt="Futuristische AI-interface" 
                className="w-full h-auto rounded-2xl shadow-xl relative border border-primary-lighter" 
              />
              
              {/* Success stories overlay */}
              <div className="absolute -bottom-6 -right-6 bg-primary-bg p-6 rounded-xl border border-primary-lighter shadow-xl max-w-xs">
                <h4 className="text-lg font-heading font-semibold mb-4">Succes met maatwerk</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-blue bg-opacity-20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-text-secondary">Logistiek bedrijf behaalde 38% efficiëntieverbetering met onze op maat gemaakte voorspellende route-optimalisatie.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-purple bg-opacity-20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-text-secondary">E-commerce platform zag 54% hogere conversie door ons AI-gepersonaliseerde aanbevelingssysteem.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
