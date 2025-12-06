import React, { useState } from 'react';
import { SectionHeader } from '../components/SharedComponents';
import { BUSINESS_INFO, SERVICES } from '../constants';
import { Phone, Mail, Clock, Send, CheckSquare, Square } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    services: [] as string[],
    address: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (serviceTitle: string) => {
    setFormData(prev => {
      const services = prev.services.includes(serviceTitle)
        ? prev.services.filter(s => s !== serviceTitle)
        : [...prev.services, serviceTitle];
      return { ...prev, services };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend or email service
    alert(`Thanks ${formData.name}! We have received your request for: ${formData.services.join(', ') || 'General Inquiry'}. We will call you at ${formData.phone} shortly.`);
  };

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

          {/* Form */}
          <div className="lg:col-span-2 bg-brand-gray p-8 rounded-xl shadow-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-silver mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-brand-charcoal border border-gray-600 text-white focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors placeholder-gray-500"
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-silver mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-brand-charcoal border border-gray-600 text-white focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors placeholder-gray-500"
                    placeholder="(806) 555-0123"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-silver mb-2">Vehicle Make/Model</label>
                  <input 
                    type="text" 
                    name="vehicle" 
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-brand-charcoal border border-gray-600 text-white focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors placeholder-gray-500"
                    placeholder="e.g. 2020 Ford F-150"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-silver mb-3">Services Interested In (Select all that apply)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SERVICES.map((s) => {
                    const isSelected = formData.services.includes(s.title);
                    return (
                      <div 
                        key={s.id}
                        onClick={() => handleCheckboxChange(s.title)}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                          isSelected 
                            ? 'bg-brand-blue/10 border-brand-blue' 
                            : 'bg-brand-charcoal border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${isSelected ? 'bg-brand-blue text-white' : 'bg-gray-700 text-transparent'}`}>
                           <CheckSquare size={14} fill="currentColor" className={isSelected ? 'opacity-100' : 'opacity-0'} />
                        </div>
                        <span className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-brand-silver'}`}>
                          {s.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-silver mb-2">Service Address (Amarillo Area)</label>
                <input 
                  type="text" 
                  name="address" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-brand-charcoal border border-gray-600 text-white focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors placeholder-gray-500"
                  placeholder="123 Main St, Amarillo, TX"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-silver mb-2">Additional Notes / Concerns</label>
                <textarea 
                  name="notes" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-brand-charcoal border border-gray-600 text-white focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors placeholder-gray-500"
                  placeholder="e.g. There is a stain on the back seat..."
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-4 rounded-lg shadow-lg shadow-brand-blue/30 transition-all flex justify-center items-center gap-2 text-lg"
              >
                <Send size={20} /> Request Appointment
              </button>
              <p className="text-center text-xs text-brand-silver">We will contact you shortly to confirm the exact price and time.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;