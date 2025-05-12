import React from 'react';
import Logo from './Logo';
import { smoothScrollTo } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-light py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo className="mb-6" />
            
            <p className="text-text-secondary mb-6">Wij transformeren MKB-bedrijven met op maat gemaakte AI-oplossingen die jouw concurrentiepositie versterken.</p>
            
            <p className="text-text-secondary text-sm">© {new Date().getFullYear()} VisionaryMind. Alle rechten voorbehouden.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Diensten</h4>
            <ul className="space-y-3">
              <li><button onClick={() => smoothScrollTo('diensten')} className="text-text-secondary hover:text-accent-blue transition-colors duration-300">AI Data-analyse</button></li>
              <li><button onClick={() => smoothScrollTo('diensten')} className="text-text-secondary hover:text-accent-blue transition-colors duration-300">AI Klantenservice</button></li>
              <li><button onClick={() => smoothScrollTo('diensten')} className="text-text-secondary hover:text-accent-blue transition-colors duration-300">AI Content Creatie</button></li>
              <li><button onClick={() => smoothScrollTo('diensten')} className="text-text-secondary hover:text-accent-blue transition-colors duration-300">AI Procesoptimalisatie</button></li>
              <li><button onClick={() => smoothScrollTo('maatwerk')} className="text-text-secondary hover:text-accent-blue transition-colors duration-300">Maatwerkoplossingen</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Bedrijf</h4>
            <ul className="space-y-3">
              <li><button onClick={() => smoothScrollTo('over-ons')} className="text-text-secondary hover:text-accent-blue transition-colors duration-300">Over ons</button></li>
              <li><button onClick={() => smoothScrollTo('home')} className="text-text-secondary hover:text-accent-blue transition-colors duration-300">Onze aanpak</button></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-blue transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-blue transition-colors duration-300">Vacatures</a></li>
              <li><button onClick={() => smoothScrollTo('contact')} className="text-text-secondary hover:text-accent-blue transition-colors duration-300">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Juridisch</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-secondary hover:text-accent-blue transition-colors duration-300">Algemene voorwaarden</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-blue transition-colors duration-300">Privacybeleid</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-blue transition-colors duration-300">Cookiebeleid</a></li>
            </ul>
            
            <div className="mt-6">
              <p className="text-text-secondary text-sm mb-2">KvK: 87654321</p>
              <p className="text-text-secondary text-sm">BTW: NL123456789B01</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
