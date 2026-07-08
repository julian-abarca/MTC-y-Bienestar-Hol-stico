/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { TESTIMONIOS_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIOS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIOS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonios" className="py-24 bg-sage-light/40 relative overflow-hidden">
      {/* Visual leaf layout on background */}
      <div className="absolute top-12 left-1/4 w-32 h-32 bg-stone-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-44 h-44 bg-gold-cream rounded-full mix-blend-multiply filter blur-xl opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="testimonials-main-wrapper">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-widest text-[#b8972e] font-semibold font-sans mb-2 block">
            Testimonios del Corazón
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-sage-dark tracking-tight mb-4">
            Voces de Despertar y Alivio
          </h2>
          <p className="text-sm sm:text-base text-earth-clay font-sans">
            Historias verdaderas de quienes caminaron el sendero del balance elemental y redescubrieron el pulso tranquilo de la salud.
          </p>
        </div>

        {/* Carousel slide card representation */}
        <div className="relative bg-white border border-earth-sand/40 rounded-3xl p-8 sm:p-12 shadow-md" id="carousel-box">
          {/* Quote mark floating decorative */}
          <div className="absolute top-6 left-6 text-earth-sand/20">
            <Quote className="h-16 w-16 transform -translate-x-3 -translate-y-3" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
              id={`testimony-slide-${TESTIMONIOS_DATA[activeIndex].id}`}
            >
              {/* Star rating info */}
              <div className="flex space-x-1 justify-center sm:justify-start mb-6">
                {[...Array(TESTIMONIOS_DATA[activeIndex].calificacion)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-dark fill-gold-light" />
                ))}
              </div>

              {/* Speech */}
              <blockquote className="text-base sm:text-lg text-sage-dark font-serif italic leading-relaxed text-center sm:text-left mb-8">
                &ldquo;{TESTIMONIOS_DATA[activeIndex].comentario}&rdquo;
              </blockquote>

              {/* Author alignment */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-earth-sand/20 pt-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={TESTIMONIOS_DATA[activeIndex].avatar}
                    alt={`Retrato de ${TESTIMONIOS_DATA[activeIndex].nombre}`}
                    className="w-12 h-12 object-cover rounded-full border border-earth-sand shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="text-sm font-semibold text-sage-dark font-sans">{TESTIMONIOS_DATA[activeIndex].nombre}</h4>
                    <span className="text-xs text-[#897967]">{TESTIMONIOS_DATA[activeIndex].rol}</span>
                  </div>
                </div>

                <div className="bg-sage-medium/10 text-sage-dark text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-sage-medium/5">
                  {TESTIMONIOS_DATA[activeIndex].servicioRecibido}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls button arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 -mx-4 sm:-mx-6 flex justify-between pointer-events-none">
            <button
              type="button"
              onClick={prevSlide}
              className="p-3 bg-white hover:bg-gold-cream/40 text-sage-dark rounded-full border border-earth-sand/50 shadow-md pointer-events-auto transition cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="p-3 bg-white hover:bg-gold-cream/40 text-sage-dark rounded-full border border-earth-sand/50 shadow-md pointer-events-auto transition cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Dynamic active index dots trackers */}
        <div className="flex justify-center space-x-2.5 mt-8" id="carousel-dots-tracker">
          {TESTIMONIOS_DATA.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-sage-medium' : 'w-2.5 bg-earth-sand hover:bg-[#897967]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
