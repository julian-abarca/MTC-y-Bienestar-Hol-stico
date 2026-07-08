/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Activity, BookOpen, Compass, CheckCircle2, Clock, MapPin, DollarSign, CalendarCheck } from 'lucide-react';
import { SERVICIOS_DATA } from '../data';
import { Servicio } from '../types';
import { motion, AnimatePresence } from 'motion/react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Sparkles,
  Activity,
  BookOpen,
  Compass
};

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeDetailsId, setActiveDetailsId] = useState<string | null>(null);

  const categories = ['Todos', 'MTC', 'Coaching', 'Talleres', 'Retiros'];

  const filteredServices = selectedCategory === 'Todos'
    ? SERVICIOS_DATA
    : SERVICIOS_DATA.filter(s => s.categoria === selectedCategory);

  const handleBookingClick = (serviceId: string) => {
    // 1. Find contact form select element
    const selectEl = document.getElementById('tipoServicio') as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = serviceId;
      // Trigger vanilla react change detection
      const event = new Event('change', { bubbles: true });
      selectEl.dispatchEvent(event);
    }
    // 2. Scroll to contact section
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleDetails = (id: string) => {
    setActiveDetailsId(activeDetailsId === id ? null : id);
  };

  return (
    <section id="servicios" className="py-24 bg-sage-light/40 relative">
      <div className="absolute inset-0 bg-radial-at-t from-gold-cream/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="services-main-container">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-sage-dark tracking-tight mb-4 uppercase">
            METODO TAO FLOW
          </h2>
          <p className="text-sm sm:text-base text-earth-clay font-sans">
            Método diseñado para conocerte, restablecer tu balance personal, energético y espiritual. Una medicina para el Alma y el Corazón.
          </p>
        </div>

        {/* Categories Tab Filter Menu */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="services-tabs-menu">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setActiveDetailsId(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-sage-dark text-white shadow-md'
                  : 'bg-white text-earth-charcoal hover:bg-earth-sand/40 border border-earth-sand/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-grid">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const IconComp = iconMap[service.icono] || Activity;
              const isDetailsOpen = activeDetailsId === service.id;

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-earth-sand/30 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                  id={`service-card-${service.id}`}
                >
                  <div>
                    {/* Top block */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-sage-light text-sage-dark rounded-xl border border-sage-medium/10">
                        <IconComp className="h-6 w-6 text-gold-dark" />
                      </div>
                      <div className="flex flex-col text-right text-xs text-earth-clay font-sans gap-0.5">
                        <span className="flex items-center justify-end space-x-1">
                          <MapPin className="h-3.5 w-3.5 text-sage-medium" />
                          <span>{service.modalidad}</span>
                        </span>
                        {service.duracion && (
                          <span className="flex items-center justify-end space-x-1">
                            <Clock className="h-3.5 w-3.5 text-sage-medium" />
                            <span>{service.duracion}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Titles */}
                    <h3 className="text-xl font-serif text-sage-dark font-semibold mb-3">
                      {service.titulo}
                    </h3>
                    <p className="text-sm text-earth-charcoal/85 leading-relaxed font-sans mb-6">
                      {service.descripcion}
                    </p>

                    {/* Accordion trigger link */}
                    <button
                      type="button"
                      onClick={() => toggleDetails(service.id)}
                      className="text-xs text-gold-dark hover:text-sage-dark underline font-bold uppercase tracking-wider mb-6 transition-all focus:outline-none"
                    >
                      {isDetailsOpen ? 'Ocultar Detalles' : 'Ver Programa Completo'}
                    </button>

                    {/* Expandable specifics content block */}
                    <AnimatePresence>
                      {isDetailsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden space-y-5 border-t border-earth-sand/20 pt-4"
                        >
                          {/* Inner list: Qué incluye */}
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-[#b8972e] font-bold">¿En qué consiste?</span>
                            <ul className="mt-2 space-y-2 text-xs text-earth-charcoal/80 bg-earth-cream/40 p-3 rounded-lg border border-earth-sand/10">
                              {service.detalles.map((det, di) => (
                                <li key={di} className="flex items-start space-x-2">
                                  <span className="text-sage-dark mt-0.5">•</span>
                                  <span>{det}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Inner list: Beneficios */}
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-sage-dark font-bold">Beneficios Esperados</span>
                            <ul className="mt-2 space-y-2 text-xs text-earth-charcoal/80 font-sans">
                              {service.beneficios.map((ben, bi) => (
                                <li key={bi} className="flex items-start space-x-2">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-gold-dark mt-0.5 flex-shrink-0" />
                                  <span>{ben}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Plan details: Tarifas y Formatos */}
                          {service.tarifasFormatos && (
                            <div className="border-t border-earth-sand/20 pt-4 mt-2">
                              <span className="text-[10px] uppercase tracking-widest text-[#b8972e] font-bold block mb-3 font-sans">
                                {service.tarifasFormatos.titulo}
                              </span>
                              {service.tarifasFormatos.introduccion && (
                                <p className="text-xs text-[#897967] leading-relaxed font-sans mb-4 whitespace-pre-line bg-earth-cream/20 p-3 rounded-xl border border-earth-sand/15">
                                  {service.tarifasFormatos.introduccion}
                                </p>
                              )}
                              <div className="space-y-3 font-sans">
                                {service.tarifasFormatos.planes.map((plan, pi) => (
                                  <div key={pi} className="p-3 bg-sage-light/20 rounded-xl border border-sage-medium/10">
                                    <div className="flex justify-between items-start gap-2">
                                      <h4 className="font-semibold text-xs text-sage-dark">{plan.nombre}</h4>
                                      <span className="text-xs font-serif font-bold text-gold-dark whitespace-nowrap">{plan.precio}</span>
                                    </div>
                                    {plan.subtitulo && (
                                      <p className="text-[11px] text-[#897967] italic mt-0.5">{plan.subtitulo}</p>
                                    )}
                                    {plan.descripcion && (
                                      <p className="text-[11px] text-earth-charcoal/80 mt-1.5 leading-relaxed bg-white/60 p-2 rounded border border-earth-sand/10">{plan.descripcion}</p>
                                    )}
                                  </div>
                                ))}
                              </div>

                              {service.tarifasFormatos.incluye && (
                                <div className="mt-4 font-sans">
                                  <span className="text-[10px] uppercase tracking-widest text-sage-dark font-bold block mb-2">Características del Programa</span>
                                  <ul className="space-y-1.5 text-xs text-earth-charcoal/80">
                                    {service.tarifasFormatos.incluye.map((inc, ii) => (
                                      <li key={ii} className="flex items-start space-x-2">
                                        <span className="text-gold-dark mt-0.5">✦</span>
                                        <span>{inc}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {service.tarifasFormatos.promocion && (
                                <div className="mt-5 p-4 rounded-xl border border-gold-dark/30 bg-gold-cream/40 shadow-sm relative overflow-hidden font-sans">
                                  <div className="absolute top-0 right-0 bg-gold-dark/10 text-[#b4922b] text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-bl-lg font-bold">
                                    PROMO
                                  </div>
                                  <span className="text-[10px] uppercase tracking-widest text-sage-dark font-semibold block mb-3">
                                    {service.tarifasFormatos.promocion.titulo}
                                  </span>
                                  <div className="space-y-2.5">
                                    {service.tarifasFormatos.promocion.planes.map((promoPlan, pri) => (
                                      <div key={pri} className="flex justify-between items-center bg-white/80 p-2.5 rounded-lg border border-gold-dark/10 shadow-sm">
                                        <div>
                                          <h5 className="font-semibold text-xs text-earth-charcoal leading-tight">{promoPlan.nombre}</h5>
                                          {promoPlan.subtitulo && (
                                            <p className="text-[10px] text-[#897967] italic mt-0.5">{promoPlan.subtitulo}</p>
                                          )}
                                        </div>
                                        <span className="text-xs font-serif font-bold text-gold-dark bg-[#fcfaee]/80 px-2.5 py-1 rounded-md border border-gold-dark/10 whitespace-nowrap shadow-sm">
                                          {promoPlan.precio}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Actions bottom */}
                  <div className="border-t border-earth-sand/20 pt-6 mt-6 flex items-center justify-between">
                    <div>
                      {service.precio ? (
                        <>
                          <span className="text-[10px] text-[#897967] block uppercase tracking-wider font-semibold">Inversión Reciprocidad</span>
                          <span className="text-lg font-serif text-sage-dark font-bold">
                            {service.precio}
                          </span>
                        </>
                      ) : (
                        <span className="text-xs italic text-sage-dark font-semibold">Precio variable según fecha</span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleBookingClick(service.id)}
                      className="px-5 py-2.5 bg-sage-medium hover:bg-sage-dark text-gold-cream hover:text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2"
                    >
                      <CalendarCheck className="h-3.5 w-3.5" />
                      <span>{service.categoria === 'Retiros' ? 'Inscribirse' : 'Reservar'}</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
