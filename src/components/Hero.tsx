/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { BIO_DATA } from '../data';
import { useAvatar } from '../hooks/useAvatar';

export default function Hero() {
  const { avatar } = useAvatar();
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-earth-cream"
    >
      {/* Serene Ambient Background with Blend Effects */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
          alt="Zen river stones and calm water flow background"
          className="w-full h-full object-cover opacity-25 filter blur-[1px] mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        {/* Soft Radial Gradients to paint with Gold, Earth, and Sage shades */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sage-light via-earth-cream/90 to-gold-cream/40" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-earth-cream to-transparent" />
      </div>

      {/* Floating Daoist Circles graphic accents */}
      <div className="absolute top-24 left-10 md:left-24 w-72 h-72 rounded-full border border-gold-light/10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-16 right-10 md:right-24 w-96 h-96 rounded-full border border-sage-medium/5 pointer-events-none" />

      {/* Small Personal Brand Circular Badge in one extreme (top-right corner) of Hero section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-4 sm:right-8 md:right-12 lg:right-16 top-28 sm:top-32 md:top-36 z-20"
        id="hero-personal-brand-badge"
      >
        <div 
          onClick={() => handleScrollTo('#bio')}
          className="group relative flex flex-col items-center bg-white/70 hover:bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-gold-light/30 hover:border-gold-dark shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer max-w-[130px] text-center"
          title="Verónica Barraza · Sobre Mí"
        >
          {/* Active pulse dot indicator of connection/mindfulness activity */}
          <span className="absolute top-3 right-3 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>

          <div 
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-gold-light via-sage-medium to-gold-dark overflow-hidden shadow-sm"
          >
            <img
              src={avatar}
              alt="Dra. Verónica Barraza Marca Personal"
              className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-110 filter contrast-[1.01]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Name & custom label */}
          <div className="mt-2 space-y-0.5">
            <span className="block font-cinzel text-[10px] sm:text-xs font-bold text-sage-dark tracking-wider leading-none">
              VERÓNICA B.
            </span>
            <span className="block font-hand text-sm text-gold-dark font-medium leading-none">
              Sintonía Vital
            </span>
            <span className="inline-block text-[8px] uppercase tracking-wider text-earth-clay/80 font-semibold font-sans pt-1 border-t border-earth-sand/50 w-full">
              Marca Personal
            </span>
          </div>

          {/* Hover highlight decorative effect */}
          <div className="absolute -inset-px rounded-2xl border-2 border-gold-light/0 group-hover:border-gold-light/35 pointer-events-none transition-colors duration-500" />
        </div>
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="hero-container">
        {/* Little badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-sage-medium/10 text-sage-dark px-4 py-1.5 rounded-full border border-sage-medium/10 mb-8"
        >
          <Compass className="h-4 w-4 text-gold-dark animate-spin-slow" />
          <span className="text-xs uppercase tracking-widest font-semibold font-sans">
            Medicina para el alma y para el corazón
          </span>
        </motion.div>

        {/* Main peaceful heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif text-sage-dark tracking-tight leading-tight max-w-4xl mx-auto"
          id="hero-title"
        >
          Restaura tu Armonía Natural y <br />
          <span className="italic font-normal font-hand text-gold-dark text-5xl sm:text-6xl md:text-7xl block mt-2">
            Despierta a Tu Identidad Energética
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-earth-clay font-sans mt-6 max-w-2xl mx-auto leading-relaxed"
          id="hero-tagline"
        >
          Te acompaño a descubrir tu propósito de vida, a equilibrar tus flujos energéticos a través del sabio sendero de la Medicina Tradicional China, el Coaching Espiritual y Retiros transformativos.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          id="hero-ctas"
        >
          <button
            type="button"
            onClick={() => handleScrollTo('#servicios')}
            className="w-full sm:w-auto bg-sage-dark hover:bg-sage-medium text-gold-cream hover:text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
          >
            <span>Explorar Servicios</span>
            <ArrowRight className="h-4 w-4 text-gold-light" />
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo('#libros')}
            className="w-full sm:w-auto bg-white border border-earth-sand/80 hover:bg-gold-cream/40 text-earth-charcoal px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <BookOpen className="h-4 w-4 text-sage-medium" />
            <span>Libro Gratuito</span>
          </button>
        </motion.div>

        {/* Traditional Chinese Elements mini-grid for sensory immersion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="grid grid-cols-5 gap-2 max-w-sm sm:max-w-md mx-auto mt-20 border-t border-earth-sand/30 pt-8"
          id="five-elements-grid"
        >
          {[
            { tag: 'Madera', color: 'border-emerald-600/30 text-emerald-800' },
            { tag: 'Fuego', color: 'border-red-600/30 text-rose-800' },
            { tag: 'Tierra', color: 'border-amber-600/30 text-amber-800' },
            { tag: 'Metal', color: 'border-slate-400/30 text-slate-700' },
            { tag: 'Agua', color: 'border-blue-600/30 text-cyan-900' },
          ].map((el, i) => (
            <div
              key={el.tag}
              className={`flex flex-col items-center p-2 border ${el.color} rounded-lg bg-white/40 backdrop-blur-xs`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold-dark mb-1 animate-ping" style={{ animationDelay: `${i * 300}ms` }} />
              <span className="text-[10px] font-semibold uppercase tracking-wider font-sans">{el.tag}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
