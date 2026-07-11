/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Compass, CheckCircle2, HeartHandshake } from 'lucide-react';
import { REDES_SOCIALES, SERVICIOS_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';

// lucide-react no incluye un ícono oficial de TikTok, así que se define aquí como SVG simple
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.5 3c.3 1.9 1.5 3.4 3.3 3.9v2.7c-1.2 0-2.3-.4-3.3-1v6.6c0 3.2-2.6 5.8-5.8 5.8S5 18.4 5 15.2c0-3.1 2.5-5.6 5.5-5.8v2.7c-1.5.2-2.6 1.5-2.6 3.1 0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1V3h2.4z" />
    </svg>
  );
}

export default function ContactSection() {
  // Contact Form states
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipoServicio, setTipoServicio] = useState('coaching-espiritual');
  const [energiaPreferencia, setEnergiaPreferencia] = useState('Tierra (Bazo/Estómago - Arraigo)');
  const [motivoConsulta, setMotivoConsulta] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Newsletter Section states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Submit personalized consultation
  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !email || !motivoConsulta) return;

    try {
      const existing = localStorage.getItem('mtc_consultas');
      const list = existing ? JSON.parse(existing) : [];
      list.push({
        id: crypto.randomUUID(),
        nombre,
        email,
        telefono,
        tipoServicio,
        energiaPreferencia,
        motivoConsulta,
        fechaCreacion: new Date().toISOString(),
        procesada: false
      });
      localStorage.setItem('mtc_consultas', JSON.stringify(list));
      
      // Dispatch custom event to notify Admin Panel
      window.dispatchEvent(new Event('local_db_updated'));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setFormSubmitted(true);
    setNombre('');
    setEmail('');
    setTelefono('');
    setMotivoConsulta('');
  };

  // Submit newsletter signup
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    try {
      const existing = localStorage.getItem('mtc_suscriptores');
      const list = existing ? JSON.parse(existing) : [];
      list.push({
        id: crypto.randomUUID(),
        email: newsletterEmail,
        fechaRegistro: new Date().toISOString(),
        consentimiento: true
      });
      localStorage.setItem('mtc_suscriptores', JSON.stringify(list));

      // Dispatch custom event to notify Admin Panel
      window.dispatchEvent(new Event('local_db_updated'));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setNewsletterSubmitted(true);
    setNewsletterEmail('');
  };

  const cincoElementos = [
    { label: 'Madera (Hígado - Ira/Creatividad)', color: 'border-emerald-200 text-emerald-800' },
    { label: 'Fuego (Corazón - Ansiedad/Paz)', color: 'border-red-200 text-rose-800' },
    { label: 'Tierra (Bazo/Estómago - Arraigo)', color: 'border-amber-200 text-amber-800' },
    { label: 'Metal (Pulmón - Tristeza/Inspiración)', color: 'border-slate-300 text-slate-700' },
    { label: 'Agua (Riñón - Miedo/Voluntad)', color: 'border-blue-200 text-cyan-900' },
  ];

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-main-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Info Side & Social Media & Newsletter (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="contact-info-panel">
            <div>
              <span className="text-sm uppercase tracking-widest text-[#b8972e] font-semibold font-sans mb-2 block">
                Comencemos el Viaje
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-sage-dark tracking-tight mb-6">
                Consultas y Redes
              </h2>
              <p className="text-sm sm:text-base text-earth-clay font-sans leading-relaxed mb-8">
                ¿sientes un llamado? ¿es un llamado urgente? ¿sientes estancamiento en tu vida personal, profesional, en tu energía o buscas un retorno consciente al bienestar?. Escríbeme. Atiendo en Playa del Carmen, México y realizo sesiones online con consultantes de todo el mundo hispanohablante.
              </p>

              {/* Physical contact specifics */}
              <div className="space-y-4 mb-10" id="contact-specific-details">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-5 w-5 text-gold-dark flex-shrink-0" />
                  <div>
                    <strong className="text-sage-dark block font-sans">Vía Telefónica / Whatsapp</strong>
                    <a href={REDES_SOCIALES.whatsapp} target="_blank" rel="noopener noreferrer" className="text-earth-charcoal/85 hover:text-gold-dark transition underline font-medium">
                      +52 984 801 67 23 (Enviar mensaje)
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-5 w-5 text-gold-dark flex-shrink-0" />
                  <div>
                    <strong className="text-sage-dark block font-sans">Correo de Atención</strong>
                    <a href={`mailto:${REDES_SOCIALES.email}`} className="text-earth-charcoal/85 hover:text-gold-dark transition underline font-medium">
                      {REDES_SOCIALES.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels information buttons requested by customer */}
              <div className="mb-12" id="social-media-corner">
                <span className="text-[10px] uppercase tracking-widest text-[#897967] font-bold block mb-3">Redes y Comunidad</span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={REDES_SOCIALES.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[#fbf5e6] hover:bg-gold-light/20 text-gold-dark hover:text-sage-dark rounded-full border border-[#dfc88a]/30 transition"
                    title="Visítame en Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={REDES_SOCIALES.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[#fbf5e6] hover:bg-gold-light/20 text-gold-dark hover:text-sage-dark rounded-full border border-[#dfc88a]/30 transition"
                    title="Canal de Youtube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a
                    href={REDES_SOCIALES.pinterest}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[#fbf5e6] hover:bg-gold-light/20 text-gold-dark hover:text-sage-dark rounded-full border border-[#dfc88a]/30 transition"
                    title="Pinterest Recetero"
                  >
                    <Compass className="h-5 w-5" />
                  </a>
                  <a
                    href={REDES_SOCIALES.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[#fbf5e6] hover:bg-gold-light/20 text-gold-dark hover:text-sage-dark rounded-full border border-[#dfc88a]/30 transition"
                    title="Sígueme en TikTok"
                  >
                    <TikTokIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription corner requested by customer */}
            <div className="bg-sage-light/40 border border-earth-sand/30 p-6 rounded-2xl" id="newsletter-subscription-box">
              <h3 className="text-sm font-serif font-bold text-sage-dark flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-gold-dark" />
                <span>Suscríbete al Correo de Verónica Barraza</span>
              </h3>
              <p className="text-xs text-earth-charcoal/85 leading-relaxed font-sans mt-2 mb-4">
                Recibe semanalmente en español reflexiones taoístas, sintonía herbal de estación y promociones exclusivas para retiros y talleres.
              </p>

              {!newsletterSubmitted ? (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2" id="newsletter-form">
                  <input
                    type="email"
                    required
                    placeholder="Tu email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-grow px-3.5 py-2.5 bg-white text-xs rounded-lg border border-earth-sand focus:border-gold-dark outline-hidden"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-sage-medium hover:bg-sage-dark text-gold-cream text-xs font-semibold uppercase tracking-wider rounded-lg transition shrink-0"
                  >
                    Unirse
                  </button>
                </form>
              ) : (
                <div className="bg-sage-medium/10 text-sage-dark p-3.5 rounded-lg border border-sage-medium/20 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold-dark" />
                  <span>¡Gracias por unirte a nuestro newsletter!</span>
                </div>
              )}
            </div>

          </div>

          {/* Consultation Intake Form (7 Columns) */}
          <div className="lg:col-span-7 bg-earth-cream/40 border border-earth-sand/30 rounded-3xl p-6 sm:p-10 relative" id="contact-intake-panel">
            <div className="absolute top-6 right-6 text-[#dfc88a]/20 pointer-events-none">
              <Compass className="h-12 w-12 animate-spin-slow" />
            </div>

            <h3 className="text-xl font-serif text-sage-dark font-bold mb-1">Formulario de Consulta Personalizada</h3>
            <p className="text-xs text-[#897967] uppercase tracking-wide mb-6">Describe tus síntomas y reencaucemos tu flujo vital</p>

            {!formSubmitted ? (
              <form onSubmit={handleConsultationSubmit} className="space-y-5" id="consultation-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="text-[10px] uppercase tracking-widest text-[#897967] font-bold block mb-1">Nombre Completo *</label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      placeholder="Tu nombre completo..."
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white text-sm rounded-lg border border-earth-sand/60 focus:border-gold-dark outline-hidden font-sans"
                    />
                  </div>

                  {/* Correo */}
                  <div>
                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-[#897967] font-bold block mb-1">Correo Electrónico *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="ejemplo@correo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white text-sm rounded-lg border border-earth-sand/60 focus:border-gold-dark outline-hidden font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Telefono */}
                  <div>
                    <label htmlFor="telefono" className="text-[10px] uppercase tracking-widest text-[#897967] font-bold block mb-1">Teléfono Móvil (Opcional)</label>
                    <input
                      id="telefono"
                      type="tel"
                      placeholder="+34 600 000 000"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white text-sm rounded-lg border border-earth-sand/60 focus:border-gold-dark outline-hidden font-sans"
                    />
                  </div>

                  {/* Servicio deseado */}
                  <div>
                    <label htmlFor="tipoServicio" className="text-[10px] uppercase tracking-widest text-[#897967] font-bold block mb-1">Servicio de Interés *</label>
                    <select
                      id="tipoServicio"
                      required
                      value={tipoServicio}
                      onChange={(e) => setTipoServicio(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white text-sm rounded-lg border border-earth-sand/60 focus:border-gold-dark outline-hidden font-sans text-earth-charcoal"
                    >
                      <option value="coaching-espiritual">Coaching Espiritual Taoísta</option>
                      <option value="armonizacion-mtc">Armonización Energética y MTC</option>
                      <option value="taller-cinco-elementos">Taller Escuchando el Alma y Abriendo el Corazón</option>
                      <option value="retiro-alquimia-silencio">Retiro Tao Flow</option>
                      <option value="consulta-general">Consulta Diagnóstica General</option>
                    </select>
                  </div>
                </div>

                {/* Energy preference, unique interactive elements for therapeutic customization */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#897967] font-bold block mb-2">
                    Área Energética o Emocional de Foco (Elige una para priorizar)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {cincoElementos.map((elm) => (
                      <button
                        key={elm.label}
                        type="button"
                        onClick={() => setEnergiaPreferencia(elm.label)}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition ${
                          energiaPreferencia === elm.label
                            ? 'bg-sage-dark text-white border-sage-dark shadow-sm'
                            : 'bg-white hover:bg-gold-cream/40 border-earth-sand text-earth-charcoal'
                        }`}
                      >
                        {elm.label.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] italic text-[#897967] mt-1 block">Sintonizado con: <strong>{energiaPreferencia}</strong></span>
                </div>

                {/* Message text */}
                <div>
                  <label htmlFor="motivoConsulta" className="text-[10px] uppercase tracking-widest text-[#897967] font-bold block mb-1">
                    Háblame de ti, de tus dolores o metas espirituales *
                  </label>
                  <textarea
                    id="motivoConsulta"
                    required
                    rows={4}
                    placeholder="Describe pacientemente cómo te sientes física y emocionalmente para trazar tu diagnóstico..."
                    value={motivoConsulta}
                    onChange={(e) => setMotivoConsulta(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white text-sm rounded-lg border border-earth-sand/60 focus:border-gold-dark outline-hidden font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-sage-dark hover:bg-sage-medium text-gold-cream font-semibold text-xs tracking-wider uppercase rounded-xl transition duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4 text-gold-light" />
                  <span>Enviar Formulario Holístico</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12" id="consultation-success-splash">
                <div className="w-16 h-16 bg-sage-medium text-gold-cream rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-gold-light/20">
                  <CheckCircle2 className="h-8 w-8 text-gold-light" />
                </div>
                <h4 className="text-2xl font-serif text-sage-dark font-bold mb-2">¡Tu consulta ha sido enviada con paz!</h4>
                <p className="text-xs sm:text-sm text-earth-charcoal leading-relaxed font-sans max-w-md mx-auto mb-8">
                  Gracias por tu confianza, <strong>{nombre}</strong>. Nos pondremos en contacto contigo en las próximas 24 horas laborables para agendar la cita y armonizar tu proceso.
                </p>
                <div className="space-y-2 max-w-xs mx-auto border-t border-earth-sand pt-6 mb-6 text-xs text-[#897967]">
                  <p>✓ Servicio: {SERVICIOS_DATA.find(s => s.id === tipoServicio)?.titulo || 'Consulta MTC'}</p>
                  <p>✓ Enfoque: {energiaPreferencia.split(' ')[0]}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-sage-medium text-gold-cream rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-sage-dark transition"
                >
                  Enviar otra consulta
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
