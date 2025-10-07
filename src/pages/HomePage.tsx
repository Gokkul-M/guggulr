import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import BentoGrid from '../components/bento-grid';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Map from '../components/Map';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <BentoGrid />
      <Testimonials />
      <Contact />
      <Map />
      <CTA />
    </div>
  );
};

export default HomePage;
