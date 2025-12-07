import React from 'react';
import { SectionHeader, Button } from '../components/SharedComponents';
import { LOCATIONS, BUSINESS_INFO } from '../constants';
import { MapPin, Phone } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <div className="pt-14 pb-20 bg-brand-charcoal min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Areas We Serve" 
          subtitle={`${BUSINESS_INFO.name} is proud to be a 100% mobile service, bringing professional auto care directly to your home or workplace across the Texas Panhandle.`}
          center 
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-brand-gray p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Our Service Radius</h3>
            <ul className="space-y-4">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug} className="flex items-start gap-4">
                  <div className="bg-brand-charcoal p-2 rounded-full shadow-sm text-brand-blue mt-1 border border-gray-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{loc.name}, Texas</h4>
                    <p className="text-brand-silver leading-relaxed">{loc.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-full min-h-[400px] bg-gray-800 rounded-2xl overflow-hidden relative">
            {/* Placeholder for a map */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
              alt="Map of Texas Panhandle" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-brand-charcoal/40 flex items-center justify-center">
              <p className="text-white font-bold text-2xl drop-shadow-lg">We Come To You!</p>
            </div>
          </div>
        </div>

        <div className="bg-brand-gray border border-gray-700 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
           <h3 className="text-3xl font-bold font-heading mb-4">Don't see your city?</h3>
           <p className="text-brand-silver mb-8 max-w-2xl mx-auto">We often travel outside our standard radius for fleet services or full detail packages. Give us a call to discuss your location.</p>
           <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-brand-blue/20">
             <Phone size={20} /> Contact Us at {BUSINESS_INFO.phone}
           </a>
        </div>
      </div>
    </div>
  );
};

export default Locations;
