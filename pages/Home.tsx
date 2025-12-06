import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, ShieldCheck, Clock, Award, Phone } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, REVIEWS } from '../constants';
import { SectionHeader, ServiceCard, ReviewCard, Button } from '../components/SharedComponents';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in bg-brand-charcoal">
      {/* Hero Section */}
      <section className="relative bg-brand-charcoal text-white pt-24 pb-32 overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-blue blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full text-brand-blue font-semibold text-sm mb-6">
              Voted Best Mobile Detailer in Amarillo
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Expert Mobile Detailing <br />
              <span className="text-brand-blue">We Come To You</span>
            </h1>
            <p className="text-lg text-brand-silver mb-8 max-w-xl leading-relaxed">
              Experience showroom quality without leaving your home or office. {BUSINESS_INFO.name} provides premium interior, exterior, and ceramic coating services across the Texas Panhandle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary">Book Appointment <ArrowRight size={20} /></Button>
              <Button to="/services" variant="outline">View Services</Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-brand-gray p-2 rounded-2xl shadow-2xl rotate-3 transform hover:rotate-0 transition-all duration-500">
               <img
                 src="https://images.unsplash.com/photo-1694678505383-676d78ea3b96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0" 
                 alt="Polishing a car" 
                 className="rounded-xl w-full h-auto opacity-90"
               />
               <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-6 rounded-xl shadow-xl border border-brand-blue-dark">
                 <p className="font-bold text-3xl font-heading">100%</p>
                 <p className="text-sm font-semibold">Satisfaction<br/>Guaranteed</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props / Stats */}
      <section className="bg-brand-gray py-12 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-4 hover:bg-white/5 rounded-lg transition-colors">
              <div className="bg-brand-charcoal p-3 rounded-full text-brand-blue border border-gray-700"><Clock size={24} /></div>
              <div>
                <h3 className="font-bold text-lg text-white">Save Time</h3>
                <p className="text-brand-silver text-sm">No waiting in lines. We work while you relax or work.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 hover:bg-white/5 rounded-lg transition-colors">
              <div className="bg-brand-charcoal p-3 rounded-full text-brand-blue border border-gray-700"><MapPin size={24} /></div>
              <div>
                <h3 className="font-bold text-lg text-white">We Travel to You</h3>
                <p className="text-brand-silver text-sm">Serving Amarillo, Canyon, Bushland, and Hereford.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 hover:bg-white/5 rounded-lg transition-colors">
              <div className="bg-brand-charcoal p-3 rounded-full text-brand-blue border border-gray-700"><Award size={24} /></div>
              <div>
                <h3 className="font-bold text-lg text-white">Certified Experts</h3>
                <p className="text-brand-silver text-sm">Licensed, insured, and trained in modern paint correction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-brand-charcoal">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Premium Services" 
            subtitle="Choose from our comprehensive detailing packages designed to protect and enhance your vehicle."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/services" variant="secondary">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Trust/Process Section */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800" 
                alt="Detailing Interior" 
                className="rounded-lg shadow-2xl opacity-90" 
              />
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-brand-blue/10 rounded-full -z-10 blur-2xl"></div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader title={`Why Choose ${BUSINESS_INFO.name}?`} subtitle="We don't just wash cars; we restore them. Our attention to detail is unmatched in the Texas Panhandle." />
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1"><CheckCircle className="text-brand-blue" size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Premium Products Only</h4>
                    <p className="text-brand-silver">We use pH-neutral soaps, high-grade carnauba waxes, and SiO2 ceramic sealants to ensure longevity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1"><ShieldCheck className="text-brand-blue" size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Fully Insured</h4>
                    <p className="text-brand-silver">Peace of mind knowing your vehicle is in safe, professional hands.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1"><MapPin className="text-brand-blue" size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Local & Reliable</h4>
                    <p className="text-brand-silver">Based in Amarillo, we are a small business dedicated to our community's satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-brand-charcoal relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader title="What Our Clients Say" subtitle="Real results from real neighbors in Amarillo." center />
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">Ready for a Showroom Shine?</h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">Book your mobile detailing service today and let us bring the best care to your driveway.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-brand-charcoal text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all shadow-xl flex items-center justify-center gap-2">
               <Phone size={20} /> Call {BUSINESS_INFO.phone}
             </a>
             <Link to="/contact" className="bg-white text-brand-charcoal px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all shadow-xl flex items-center justify-center gap-2">
               <Clock size={20} /> Book Online
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;