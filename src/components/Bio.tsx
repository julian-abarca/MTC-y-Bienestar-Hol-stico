/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Quote, ShieldCheck } from 'lucide-react';
import { BIO_DATA } from '../data';
// ✅ IMPORTAMOS LA IMAGEN DIRECTAMENTE
import avatarImage from '../assets/images/vero_arbol_canvas.png';

export default function Bio() {
  // ✅ Usamos la imagen importada
  const avatar = avatarImage;
  
  const taoFlowPhoto = 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop';

  return (
    <section id="bio" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative vertical lines representing structural harmony */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-earth-sand/10 hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-[15%] w-[1px] bg-earth-sand/10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="bio-section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Bio Portrait Left Aspect */}
          <div className="lg:col-span-5" id="bio-portrait-wrapper">
            <div className="relative group">
              {/* Gold backing aura card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-gold-light/20 to-sage-medium/25 rounded-2xl filter blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />
              
              {/* Outer frame */}
              <div 
                className="relative bg-earth-sand p-3.5 rounded-2xl shadow-xl border border-earth-sand/40 overflow-hidden"
              >
                <img
                  src={avatar}
                  alt="Dra. Verónica Barraza"
                  className="w-full h-[450px] object-cover rounded-xl filter contrast-[1.02] transition-all duration-300 hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro badge nested on image */}
                <div className="absolute bottom-8 right-8 bg-sage-dark/95 backdrop-blur-md text-gold-cream px-5 py-3 rounded-xl border border-gold-light/20 shadow-lg flex items-center space-x-2">
                  <ShieldCheck className="h-5 w-5 text-gold-light" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-gold-light font-bold">Experiencia</span>
                    <span className="text-xs font-semibold font-sans">15+ Años Sanadora</span>
                  </div>
                </div>
              </div>

              {/* Decorative leafy overlay */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage-light rounded-full flex items-center justify-center border border-earth-sand shadow-md">
                <Quote className="h-8 w-8 text-sage-medium transform rotate-180" />
              </div>
            </div>
          </div>

          {/* History and details Right Aspect */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="bio-content-wrapper">
            {/* Secundary heading */}
            <span className="text-sm uppercase tracking-widest text-gold-dark font-semibold font-sans mb-2">
              MEDICINA PARA EL ALMA Y EL CORAZÓN
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-sage-dark tracking-tight mb-6">
              Sobre Verónica Barraza
            </h2>

            {/* Main statement block quote */}
            <p className="text-lg font-medium text-sage-medium leading-relaxed italic border-l-2 border-gold-light pl-4 mb-8">
              &quot;Fluir, fluir como el Tao. Fluir como el Agua en búsqueda permanente del Mar y vivir con salud y armonía&quot;
            </p>

            {/* Biography text blocks */}
            <div className="space-y-4 text-earth-charcoal/90 leading-relaxed text-sm sm:text-base font-sans mb-8">
              {BIO_DATA.historia.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Certifications and achievements box */}
            <div className="bg-earth-cream/60 rounded-xl p-6 border border-earth-sand/40 mb-8">
              <h3 className="text-xs uppercase tracking-widest text-sage-dark font-bold mb-4 flex items-center space-x-2">
                <Award className="h-4 w-4 text-gold-dark" />
                <span>Currículum</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-earth-charcoal/80">
                {BIO_DATA.certificaciones.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-gold-dark mt-1 font-bold">✦</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signature custom hand styling */}
            <div className="flex flex-col items-end self-end mr-6 space-y-4">
              <div className="flex flex-col items-end">
                <span className="font-hand text-5xl text-gold-dark">Veronica Barraza</span>
                <span className="text-[10px] uppercase tracking-widest text-[#897967] font-semibold font-sans mt-0.5 text-right">
                  creadora Metodo TaoFlow
                </span>
              </div>

              {/* Customizable photo representing the Tao Flow method */}
              <div className="relative group/taophoto">
                <div 
                  className="relative w-48 sm:w-56 h-28 sm:h-32 rounded-xl overflow-hidden border border-gold-light/40 bg-earth-sand shadow-xs hover:shadow-md hover:border-gold-dark transition-all duration-300"
                  title="Método Tao Flow"
                >
                  <img
                    src={taoFlowPhoto}
                    alt="Método Tao Flow de Verónica Barraza"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/taophoto:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Micro caption */}
                <div className="text-right text-[9px] uppercase tracking-widest text-earth-clay font-sans font-bold mt-1.5">
                  ✦ El flujo activo de la energía ✦
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
