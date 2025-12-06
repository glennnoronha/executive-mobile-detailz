import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, Car } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants';

// Using the provided URL for the logo
const LOGO_URL = "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/472589574_588520200600939_8861611998182754380_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yoaxWQz4AQwQ7kNvwHlDiq3&_nc_oc=AdnwpcpA8BW47oDlri6PPurkiRqhiBePosTfjv1ZmGehEz2_xoyv9ieW5LB_s_mw3IVN7T52MW1Eug0BA-NqyeC5&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LKGVu8svyWOdTysCNbGayQ&oh=00_AfkuFxXXvOQ6RvqKJoM1BvGvj_q2EHHqY87vzbXrXieFRA&oe=693A7601";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-white-soft bg-brand-charcoal">
      {/* Top Bar */}
      <div className="bg-brand-gray text-brand-silver py-2 text-sm hidden md:block border-b border-gray-700">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> {BUSINESS_INFO.location} (Mobile Service)</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-brand-blue" /> {BUSINESS_INFO.email}</span>
          </div>
          <div className="font-semibold text-brand-blue">{BUSINESS_INFO.hours}</div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-charcoal shadow-md py-2 border-b border-gray-800' : 'bg-brand-charcoal/95 backdrop-blur-sm py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            {!logoError ? (
              <img 
                src={LOGO_URL}
                alt="Executive Mobile Detailz Logo" 
                className="h-12 w-12 md:h-16 md:w-16 object-contain rounded-full transition-transform group-hover:scale-105"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-brand-blue bg-brand-gray flex items-center justify-center text-brand-blue">
                <Car size={20} />
              </div>
            )}
            <div className="text-xl md:text-2xl font-bold font-heading text-white tracking-tighter group-hover:opacity-90 transition-opacity uppercase">
              EXECUTIVE <span className="text-brand-blue">MOBILE DETAILZ</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 font-medium text-brand-silver">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`hover:text-brand-blue transition-colors ${location.pathname === item.path ? 'text-brand-blue' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="hidden md:flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-brand-blue/30">
              <Phone size={18} />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-brand-charcoal border-t border-gray-800 shadow-xl flex flex-col p-4 animate-fade-in z-50">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="py-3 px-4 border-b border-gray-800 text-brand-silver font-medium hover:bg-brand-gray hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${BUSINESS_INFO.phone}`} className="mt-4 flex justify-center items-center gap-2 bg-brand-blue text-white py-3 rounded-lg font-bold">
              <Phone size={18} /> Call Now to Book
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t-4 border-brand-blue">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
               {!logoError ? (
                  <img 
                    src={LOGO_URL}
                    alt="Executive Mobile Detailz Logo" 
                    className="h-10 w-10 object-contain rounded-full"
                    onError={() => setLogoError(true)} 
                  />
               ) : (
                  <Car className="text-brand-blue" size={32} />
               )}
               <h3 className="text-xl font-bold font-heading text-white uppercase">EXECUTIVE <span className="text-brand-blue">MOBILE DETAILZ</span></h3>
            </div>
            <p className="text-brand-silver mb-6">{BUSINESS_INFO.tagline}. We bring the shop to you, providing premium care for your vehicle.</p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/people/Exec-Mobile-Detailz-LLC/100083288915214/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-gray w-10 h-10 flex items-center justify-center rounded-full hover:bg-brand-blue hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a 
                href="https://tiktok.com/@detailer_mike" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-gray w-10 h-10 flex items-center justify-center rounded-full hover:bg-brand-blue hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok text-xl"></i>
              </a>
              <a 
                href="https://www.snapchat.com/add/detailguy_mike" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-gray w-10 h-10 flex items-center justify-center rounded-full hover:bg-brand-blue hover:text-white transition-colors"
                aria-label="Snapchat"
              >
                <i className="fab fa-snapchat text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-brand-blue inline-block pb-1">Quick Links</h4>
            <ul className="space-y-3 text-brand-silver">
              {NAV_ITEMS.map(item => (
                <li key={item.path}><Link to={item.path} className="hover:text-brand-blue transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-brand-blue inline-block pb-1">Services</h4>
            <ul className="space-y-3 text-brand-silver">
              <li><Link to="/services" className="hover:text-brand-blue">Full Detail Packages</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue">Ceramic Coating</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue">Interior Deep Clean</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue">Paint Correction</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-brand-blue inline-block pb-1">Contact Us</h4>
            <ul className="space-y-4 text-brand-silver">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-blue shrink-0 mt-1" size={18} />
                <span>Serving {BUSINESS_INFO.location} and surrounding areas.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-blue shrink-0" size={18} />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-blue shrink-0" size={18} />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-8 border-t border-gray-600 text-center text-brand-silver text-sm">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. | A Diamond Dev Website</p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-brand-charcoal border-t border-gray-700 p-4 z-40 flex gap-2">
         <a href={`tel:${BUSINESS_INFO.phone}`} className="flex-1 bg-brand-blue text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2 shadow-lg">
           <Phone size={18} /> Call Now
         </a>
         <Link to="/contact" className="flex-1 bg-brand-gray text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2 shadow-lg hover:bg-gray-600">
           Book Online
         </Link>
      </div>
    </div>
  );
};

export default Layout;
