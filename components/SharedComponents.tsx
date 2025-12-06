import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Service, Review } from '../types';

export const SectionHeader: React.FC<{ title: string; subtitle?: string; center?: boolean; light?: boolean }> = ({ title, subtitle, center, light }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <h2 className={`text-3xl md:text-4xl font-bold font-heading mb-4 text-white`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} text-brand-silver`}>
        {subtitle}
      </p>
    )}
    <div className={`h-1.5 w-24 bg-brand-blue rounded mt-6 ${center ? 'mx-auto' : ''}`}></div>
  </div>
);

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-brand-gray rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 overflow-hidden flex flex-col h-full group">
    <div className="p-6 md:p-8 flex-grow">
      <div className="w-14 h-14 bg-brand-charcoal rounded-lg flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
         {/* Icon placeholder logic would go here, simplified for this file */}
         <Star size={28} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-brand-silver mb-6 text-sm leading-relaxed">{service.shortDescription}</p>
      
      <div className="mb-6">
        <p className="text-brand-blue font-bold text-lg mb-2">{service.priceRange}</p>
        <ul className="space-y-2">
          {service.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <CheckCircle size={16} className="text-brand-blue shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="p-6 pt-0 mt-auto">
      <Link 
        to="/services" 
        className="block w-full text-center border-2 border-gray-600 text-white py-2.5 rounded-lg font-semibold hover:bg-brand-blue hover:border-brand-blue transition-colors"
      >
        View Details
      </Link>
    </div>
  </div>
);

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="bg-brand-gray p-8 rounded-xl border border-gray-700 relative">
    <div className="flex gap-1 mb-4 text-brand-blue">
      {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
    </div>
    <p className="text-brand-silver italic mb-6 leading-relaxed">"{review.text}"</p>
    <div className="flex justify-between items-end">
      <div>
        <h4 className="font-bold text-white">{review.author}</h4>
        <span className="text-xs text-gray-400">{review.date}</span>
      </div>
      <div className="text-6xl text-brand-charcoal font-serif absolute top-4 right-6 opacity-50">"</div>
    </div>
  </div>
);

export const Button: React.FC<{ to: string; variant?: 'primary' | 'secondary' | 'outline'; children: React.ReactNode; className?: string }> = ({ to, variant = 'primary', children, className = '' }) => {
  const baseStyles = "inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold transition-all transform hover:-translate-y-1";
  const variants = {
    primary: "bg-brand-blue hover:bg-brand-blue-dark text-white shadow-lg shadow-brand-blue/30",
    secondary: "bg-brand-gray hover:bg-gray-600 text-white shadow-lg shadow-black/30",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-charcoal"
  };

  return (
    <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
};