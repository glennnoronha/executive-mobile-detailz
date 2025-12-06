import React from 'react';
import { SectionHeader, Button } from '../components/SharedComponents';
import { SERVICES } from '../constants';
import { Check, Info } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-brand-charcoal min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Our Services</h1>
          <p className="text-lg text-brand-silver">
            We offer a comprehensive range of mobile detailing services tailored to your vehicle's needs. From basic maintenance washes to paint correction and ceramic coatings.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="bg-brand-gray rounded-2xl shadow-lg border border-gray-700 overflow-hidden" id={service.id}>
              <div className="grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-4 bg-brand-charcoal p-8 text-white flex flex-col justify-center border-r border-gray-700">
                  <h3 className="text-2xl font-bold font-heading mb-2">{service.title}</h3>
                  <div className="w-16 h-1 bg-brand-blue mb-6"></div>
                  <p className="text-brand-blue font-bold text-3xl mb-1">{service.priceRange}</p>
                  <p className="text-brand-silver text-sm mb-6">Price depends on vehicle size and condition</p>
                  <Button to="/contact" variant="primary" className="w-full justify-center">Book This Service</Button>
                </div>
                
                <div className="lg:col-span-8 p-8 md:p-10">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Info size={20} className="text-brand-blue" /> Description
                    </h4>
                    {service.fullDescription.map((para, i) => (
                      <p key={i} className="text-brand-silver mb-2 leading-relaxed">{para}</p>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4">What's Included:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-brand-charcoal p-3 rounded-lg border border-gray-600">
                          <Check size={18} className="text-brand-blue shrink-0" />
                          <span className="text-gray-200 font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;