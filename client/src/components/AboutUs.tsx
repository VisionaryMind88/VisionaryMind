import React from 'react';
import { motion } from 'framer-motion';
import { smoothScrollTo } from '@/lib/utils';
import { Zap, Lightbulb, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="over-ons" className="py-20 bg-[#1e293b] bg-opacity-30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Over VisionaryMind</h2>
          <p className="text-text-secondary text-lg">Wij transformeren het MKB met op maat gemaakte AI-oplossingen die het volledige potentieel van jouw onderneming ontsluiten.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-2xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" 
                alt="VisionaryMind team" 
                className="w-full h-auto rounded-2xl shadow-xl relative border border-primary-lighter"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">Onze missie & visie</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-blue bg-opacity-20 rounded-lg flex items-center justify-center text-accent-blue">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2">Missie</h4>
                  <p className="text-text-secondary">Het democratiseren van AI-technologie voor het MKB, zodat elk bedrijf kan profiteren van de kracht van kunstmatige intelligentie.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-purple bg-opacity-20 rounded-lg flex items-center justify-center text-accent-purple">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2">Visie</h4>
                  <p className="text-text-secondary">Een toekomst waarin elk MKB-bedrijf concurrerend blijft dankzij slimme, betaalbare en toegankelijke AI-oplossingen.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-green bg-opacity-20 rounded-lg flex items-center justify-center text-accent-green">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2">Waarom wij?</h4>
                  <p className="text-text-secondary">VisionaryMind combineert diepgaande AI-expertise met een grondige kennis van de MKB-sector om oplossingen te creëren die echt werken voor jouw bedrijf.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button
                onClick={() => smoothScrollTo('diensten')}
                className="inline-flex items-center text-accent-blue hover:text-accent-purple transition-colors duration-300 font-medium"
              >
                Ontdek onze diensten
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
