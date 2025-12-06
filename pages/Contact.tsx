import React, { useEffect } from 'react';
import { SectionHeader } from '../components/SharedComponents';
import { BUSINESS_INFO } from '../constants';
import { Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  // Effect to load JotForm script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://form.jotform.com/jsform/253396843655066";
    script.type = "text/javascript";
    script.async = true;
    
    const container = document.getElementById('jotform-embed-container');
    if (container) {
      // Clear container to prevent duplicate forms on re-renders
      container.innerHTML = '';
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="pt-24 pb-20 bg-brand-charcoal min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Book Your Detail" 
          subtitle="Ready to transform your vehicle? Fill out the form below or give us a call to schedule your mobile detailing appointment."
          center
        />

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-brand-gray p-6 rounded-xl shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-silver">
                  <div className="bg-brand-charcoal p-2 rounded-lg text-brand-blue border border-gray-600"><Phone size={20} /></div>
                  <span className="font-semibold">{BUSINESS_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-brand-silver">
                  <div className="bg-brand-charcoal p-2 rounded-lg text-brand-blue border border-gray-600"><Mail size={20} /></div>
                  <span>{BUSINESS_INFO.email}</span>
                </div>
                <div className="flex items-center gap-3 text-brand-silver">
                  <div className="bg-brand-charcoal p-2 rounded-lg text-brand-blue border border-gray-600"><Clock size={20} /></div>
                  <span>{BUSINESS_INFO.hours}</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-xl shadow-lg text-white border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Why Book Mobile?</h3>
              <ul className="space-y-3 text-brand-silver text-sm">
                <li className="flex gap-2"><span className="text-brand-blue">✓</span> We come to your home or office</li>
                <li className="flex gap-2"><span className="text-brand-blue">✓</span> No waiting rooms or lines</li>
                <li className="flex gap-2"><span className="text-brand-blue">✓</span> Fully equipped with water & power</li>
              </ul>
            </div>
          </div>

          {/* JotForm Embed Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-700 overflow-hidden">
               <div id="jotform-embed-container" className="w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;