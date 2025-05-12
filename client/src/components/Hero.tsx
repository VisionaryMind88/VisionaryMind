import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { smoothScrollTo } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-pattern pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary-light border border-primary-lighter mb-4">
              <p className="text-sm text-text-secondary flex items-center">
                <span className="w-2 h-2 bg-accent-green rounded-full inline-block mr-2 animate-pulse"></span>
                Innovatieve AI-oplossingen voor het MKB
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Ontketen het <span className="gradient-text">volledige potentieel</span> van AI voor jouw onderneming
            </h1>
            
            <p className="text-lg text-[#94a3b8] mb-8 max-w-xl mx-auto lg:mx-0">
              VisionaryMind helpt MKB-bedrijven voorsprong te nemen met geavanceerde AI-technologie die perfect aansluit bij jouw specifieke zakelijke uitdagingen en doelen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => smoothScrollTo('contact')}
                className="neon-button bg-accent-blue text-white py-3 px-8 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-accent-blue/25 animate-glow"
              >
                Plan een adviesgesprek
              </Button>
              <Button 
                onClick={() => smoothScrollTo('diensten')}
                variant="outline"
                className="bg-transparent text-text-primary border border-primary-lighter py-3 px-8 rounded-lg font-medium hover:border-accent-purple transition-all duration-300 group"
              >
                Onze diensten
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" 
              alt="Futuristische AI visualisatie" 
              className="w-full h-auto rounded-2xl shadow-2xl relative z-10 border border-primary-lighter object-cover animate-float"
            />
            <div className="absolute -bottom-4 -right-4 p-5 bg-primary-light rounded-lg border border-primary-lighter shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                <p className="text-sm font-medium">AI-technologie actief</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-heading font-bold text-accent-blue">98%</p>
            <p className="text-text-secondary text-sm mt-2">Klanttevredenheid</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-heading font-bold text-accent-purple">150+</p>
            <p className="text-text-secondary text-sm mt-2">Gerealiseerde projecten</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-heading font-bold text-accent-green">45%</p>
            <p className="text-text-secondary text-sm mt-2">Efficiëntiewinst</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-heading font-bold gradient-text">24/7</p>
            <p className="text-text-secondary text-sm mt-2">AI-ondersteuning</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
