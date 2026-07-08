/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Services from './components/Services';
import BooksSection from './components/BooksSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import AdminPanel from './components/AdminPanel';
import { Compass, Leaf, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen flex flex-col bg-earth-cream antialiased select-none font-sans overflow-x-hidden">
      
      {/* Floating Translucent Header */}
      <Header />

      {/* Main Sections Body */}
      <main className="flex-grow">
        
        {/* Hero Section Welcome */}
        <Hero />

        {/* Biography Section */}
        <Bio />

        {/* Services Showcase (MTC, Coaching, Workshops, Retreats) */}
        <Services />

        {/* Ebooks Store, Download Free Guide, testimonials alongside paid books */}
        <BooksSection />

        {/* Testimonials Slideshow Slider */}
        <Testimonials />

        {/* Custom Consultation Request Form + Social Media Info + Newsletter capture */}
        <ContactSection />
        
      </main>

      {/* Atmospheric Spa Footer in Spanish */}
      <footer className="bg-sage-dark text-gold-cream border-t border-sage-medium/30 py-16 relative overflow-hidden" id="app-footer">
        {/* Background decorative flower of life pattern subtle lines */}
        <div className="absolute inset-0 bg-radial-at-b from-sage-medium/20 to-transparent pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full border border-gold-light/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-sage-medium/25 pb-12 mb-12">
            
            {/* Core Brand Column (5 Columns) */}
            <div className="md:col-span-5 space-y-4" id="footer-details-company">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-sage-medium text-gold-cream rounded-full">
                  <Leaf className="h-5 w-5 text-gold-light" />
                </div>
                <span className="font-cinzel text-lg tracking-widest font-semibold text-gold-cream">
                  VERÓNICA BARRAZA
                </span>
              </div>
              <p className="text-xs text-gold-cream/70 leading-relaxed font-sans max-w-sm">
                Un templo digital dedicado a tender puentes entre la antigua tradición sanadora oriental del Qi, los meridianos físicos y la conciencia espiritual moderna.
              </p>
              <div className="text-[10px] text-gold-light uppercase tracking-widest font-medium flex items-center gap-1.5 pt-2">
                <Compass className="h-3.5 w-3.5 text-gold-dark animate-spin-slow" />
                <span>Yin & Yang en Perfecta Sintonía</span>
              </div>
            </div>

            {/* Quick Links Column (3 Columns) */}
            <div className="md:col-span-3 space-y-4" id="footer-quick-links">
              <h4 className="text-xs uppercase tracking-widest text-[#dfc88a] font-bold">Explorar el Sendero</h4>
              <ul className="space-y-2 text-xs text-gold-cream/75 font-medium">
                <li>
                  <a href="#inicio" className="hover:text-white hover:underline transition">Regresar al Inicio</a>
                </li>
                <li>
                  <a href="#bio" className="hover:text-white hover:underline transition">La Trayectoria de Dra. Verónica</a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-white hover:underline transition">Nuestros Tratamientos MTC</a>
                </li>
                <li>
                  <a href="#libros" className="hover:text-white hover:underline transition">Obras Autorales y ePUB</a>
                </li>
                <li>
                  <a href="#testimonios" className="hover:text-white hover:underline transition">Historias de Recuperación</a>
                </li>
              </ul>
            </div>

            {/* Inspiring Taoist Quote (4 Columns) */}
            <div className="md:col-span-4 space-y-4" id="footer-wellness-motto">
              <h4 className="text-xs uppercase tracking-widest text-[#dfc88a] font-bold">Máxima de la Sabiduría China</h4>
              <blockquote className="text-sm font-serif italic text-gold-cream/80 border-l border-gold-light/40 pl-3 leading-relaxed">
                &quot;El agua es blanda y dócil, pero vence a lo duro y fuerte. Fluye en el no-esfuerzo, ahí reside la sanidad.&quot;
              </blockquote>
              <span className="text-[10px] uppercase tracking-wider text-gold-cream/60 block font-semibold">- Lao Tse, Daodejing</span>
            </div>

          </div>

          {/* Subfooter bottom info */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gold-cream/65" id="subfooter-box">
            <p>
              &copy; {currentYear} Dra. Verónica Barraza · Medicina Tradicional China & Alma y Corazón. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-1.5">
              <span>Hecho con</span>
              <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              <span>en paz y sintonía</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Subtle Management Dashboard hidden locally for contact / download inspects */}
      <AdminPanel />

    </div>
  );
}
