import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import CustomSolutions from '@/components/CustomSolutions';
import WorkProcess from '@/components/WorkProcess';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'VisionaryMind | AI-oplossingen voor MKB';

    // Handle anchor links coming from URL on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }, 500);
    }
  }, []);

  return (
    <div className="circuit-pattern min-h-screen bg-[#0f172a]">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <CustomSolutions />
      <WorkProcess />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
