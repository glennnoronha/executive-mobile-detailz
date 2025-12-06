import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import { SectionHeader } from './components/SharedComponents';

// Simple placeholder page for About to complete the routing structure
const About: React.FC = () => (
  <div className="pt-24 pb-20 bg-brand-charcoal min-h-screen animate-fade-in">
    <div className="container mx-auto px-4">
      <SectionHeader 
        title="About Executive Mobile Detailz"
        subtitle="Founded in Amarillo, Texas, Executive Mobile Detailz was built on a simple premise: quality automotive care shouldn't be inconvenient."
        center
      />
      
      <div className="max-w-3xl mx-auto text-lg text-brand-silver space-y-6">
        <p>
          We recognized that busy professionals and families in the Panhandle rarely have time to drop their cars off at a shop for the day.
        </p>
        <p>
          Our mission is to elevate the standard of mobile detailing. We don't just "wash" cars; we meticulously restore them using the industry's 
          safest techniques and highest quality chemicals. Whether it's a farm truck in Hereford or a luxury sedan in the Colonies, we treat every vehicle with the same level of respect and detail.
        </p>
        <div className="bg-brand-gray text-white p-8 rounded-xl mt-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
          <p>We are a locally owned, small business committed to 100% customer satisfaction. If you aren't happy with the results, we will make it right.</p>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/areas" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;