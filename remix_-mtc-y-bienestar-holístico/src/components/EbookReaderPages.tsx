import React from 'react';
import { Star } from 'lucide-react';

export const WuXingDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-[280px] h-auto mx-auto" id="wuxing-svg-diagram">
      {/* Definitions for gradients and arrows */}
      <defs>
        <marker id="arrow-sheng" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#10b981" />
        </marker>
        <marker id="arrow-ke" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#f43f5e" />
        </marker>
        
        {/* Gradients for elements */}
        <radialGradient id="grad-wood" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ecfdf5" />
          <stop offset="100%" stopColor="#10b981" />
        </radialGradient>
        <radialGradient id="grad-fire" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff5f5" />
          <stop offset="100%" stopColor="#ef4444" />
        </radialGradient>
        <radialGradient id="grad-earth" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
        <radialGradient id="grad-metal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#94a3b8" />
        </radialGradient>
        <radialGradient id="grad-water" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#3b82f6" />
        </radialGradient>
      </defs>

      {/* Decorative Outer Yin Yang Circle */}
      <circle cx="200" cy="200" r="185" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="200" cy="200" r="175" fill="none" stroke="#dfc88a" strokeWidth="0.5" opacity="0.3" />

      {/* Ke (Control) Cycle - Star lines in center */}
      {/* Ordering of nodes: 
          Fuego (200, 70)
          Tierra (314, 153)
          Metal (271, 287)
          Agua (129, 287)
          Madera (86, 153)
      */}
      <line x1="200" y1="70" x2="271" y2="287" stroke="#fca5a5" strokeWidth="2.5" strokeDasharray="3 3" markerEnd="url(#arrow-ke)" />
      <line x1="271" y1="287" x2="86" y2="153" stroke="#fca5a5" strokeWidth="2.5" strokeDasharray="3 3" markerEnd="url(#arrow-ke)" />
      <line x1="86" y1="153" x2="314" y2="153" stroke="#fca5a5" strokeWidth="2.5" strokeDasharray="3 3" markerEnd="url(#arrow-ke)" />
      <line x1="314" y1="153" x2="129" y2="287" stroke="#fca5a5" strokeWidth="2.5" strokeDasharray="3 3" markerEnd="url(#arrow-ke)" />
      <line x1="129" y1="287" x2="200" y2="70" stroke="#fca5a5" strokeWidth="2.5" strokeDasharray="3 3" markerEnd="url(#arrow-ke)" />

      {/* Sheng (Generation) Cycle - Curved paths outer */}
      <path d="M 215 75 Q 275 95 300 138" fill="none" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-sheng)" />
      <path d="M 309 168 Q 305 235 276 272" fill="none" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-sheng)" />
      <path d="M 256 292 Q 200 315 144 292" fill="none" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-sheng)" />
      <path d="M 124 272 Q 95 235 91 168" fill="none" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-sheng)" />
      <path d="M 100 138 Q 125 95 185 75" fill="none" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-sheng)" />

      {/* Nodes of Elements */}
      {/* FUEGO */}
      <g transform="translate(200, 70)">
        <circle r="32" fill="url(#grad-fire)" stroke="#ef4444" strokeWidth="1.5" className="shadow" />
        <text y="-4" textAnchor="middle" fill="#7f1d1d" className="text-xs font-serif font-bold pointer-events-none">FUEGO</text>
        <text y="14" textAnchor="middle" fill="#7f1d1d" className="text-[10px] font-sans font-medium opacity-80 pointer-events-none">Huǒ · 火</text>
      </g>

      {/* TIERRA */}
      <g transform="translate(314, 153)">
        <circle r="32" fill="url(#grad-earth)" stroke="#f59e0b" strokeWidth="1.5" className="shadow" />
        <text y="-4" textAnchor="middle" fill="#78350f" className="text-xs font-serif font-bold pointer-events-none">TIERRA</text>
        <text y="14" textAnchor="middle" fill="#78350f" className="text-[10px] font-sans font-medium opacity-80 pointer-events-none">Tǔ · 土</text>
      </g>

      {/* METAL */}
      <g transform="translate(271, 287)">
        <circle r="32" fill="url(#grad-metal)" stroke="#94a3b8" strokeWidth="1.5" className="shadow" />
        <text y="-4" textAnchor="middle" fill="#1e293b" className="text-xs font-serif font-bold pointer-events-none">METAL</text>
        <text y="14" textAnchor="middle" fill="#1e293b" className="text-[10px] font-sans font-medium opacity-80 pointer-events-none">Jīn · 金</text>
      </g>

      {/* AGUA */}
      <g transform="translate(129, 287)">
        <circle r="32" fill="url(#grad-water)" stroke="#3b82f6" strokeWidth="1.5" className="shadow" />
        <text y="-4" textAnchor="middle" fill="#1e3a8a" className="text-xs font-serif font-bold pointer-events-none">AGUA</text>
        <text y="14" textAnchor="middle" fill="#1e3a8a" className="text-[10px] font-sans font-medium opacity-80 pointer-events-none">Shuǐ · 水</text>
      </g>

      {/* MADERA */}
      <g transform="translate(86, 153)">
        <circle r="32" fill="url(#grad-wood)" stroke="#10b981" strokeWidth="1.5" className="shadow" />
        <text y="-4" textAnchor="middle" fill="#064e3b" className="text-xs font-serif font-bold pointer-events-none">MADERA</text>
        <text y="14" textAnchor="middle" fill="#064e3b" className="text-[10px] font-sans font-medium opacity-80 pointer-events-none">Mù · 木</text>
      </g>

      {/* Central Yin-Yang symbol */}
      <g transform="translate(200, 200) scale(0.6)">
        <circle r="25" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <path d="M 0 -25 A 12.5 12.5 0 0 0 0 0 A 12.5 12.5 0 0 1 0 25 A 25 25 0 0 1 0 -25 Z" fill="#1e293b" />
        <circle cx="0" cy="-12.5" r="3.5" fill="#1e293b" />
        <circle cx="0" cy="12.5" r="3.5" fill="#f8fafc" />
      </g>
    </svg>
  );
};

interface EbookReaderPagesProps {
  readerBookId: 'recetario-gratis' | 'energia-vital-gratis';
  readerPage: number;
  coverImage: string;
  coverImageSecond: string;
  avatar: string;
}

export const EbookReaderPages: React.FC<EbookReaderPagesProps> = ({
  readerBookId,
  readerPage,
  coverImage,
  coverImageSecond,
  avatar,
}) => {
  if (readerBookId === 'recetario-gratis') {
    switch (readerPage) {
      case 0:
        return (
          <div className="h-full w-full bg-[#0c1f28] text-gold-cream rounded-2xl flex flex-col md:flex-row items-center justify-center gap-8 p-6 sm:p-12 relative overflow-hidden border border-gold-light/20 shadow-inner">
            <div className="absolute inset-x-0 top-0 bg-[radial-gradient(circle_at_center,rgba(223,200,138,0.08)_0%,transparent_70%)] h-full pointer-events-none" />
            <div className="relative w-[180px] h-[254px] sm:w-[220px] sm:h-[310px] rounded-xl overflow-hidden shadow-2xl border border-gold-dark/45 shrink-0">
              <img
                src={coverImage}
                alt="Portada Calmar el Fuego de tu Corazón"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left max-w-sm space-y-4 relative z-10">
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-gold-light font-semibold block">
                LECTURA INTERACTIVA
              </span>
              <h1 className="text-2xl sm:text-4xl font-serif text-[#dfc88a] font-black tracking-tight leading-snug">
                Calmar el Fuego de tu Corazón
              </h1>
              <p className="text-xs text-gold-cream/90 leading-relaxed font-sans">
                Estás por iniciar una guía práctica de medicina tradicional china. Descubre acupresión sagrada, respiración reguladora y meditaciones taoístas para sintonizar alma y corazón.
              </p>
              <div className="pt-2 flex justify-center md:justify-start">
                <span className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-wider bg-gold-dark/10 border border-gold-light/20 px-3 py-1 rounded-full text-gold-cream">
                  <span>8 páginas</span>
                  <span>•</span>
                  <span>MTC Autoral</span>
                </span>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="text-slate-800 space-y-6">
            <div className="border-b border-earth-sand/30 pb-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-800 font-extrabold tracking-tight uppercase leading-none">
                ¿Qué es el Fuego del Corazón?
              </h2>
              <p className="text-xs italic text-[#897967] mt-1 font-sans">El Desequilibrio que Arde en tu Interior</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8 space-y-4 text-sm leading-relaxed text-slate-700">
                <h3 className="text-base font-serif font-bold text-gold-dark italic">
                  ¿Por qué tu corazón está en llamas?
                </h3>
                <p>
                  Son las 2 de la madrugada. Tu mente no para. El pecho aprieta. Sabes que deberías dormir, pero hay algo dentro de ti que no puede detenerse. Una lista de pendientes, una conversación que no terminó bien, un miedo que no tiene nombre pero que se siente en cada latido.
                </p>
                <div className="p-3 bg-gold-cream/40 rounded-xl border border-[#dfc88a]/30 font-serif italic text-amber-950 text-center my-3">
                  Si reconoces esa sensación, este libro es para ti.
                </div>
                <p>
                  En mis quince años de práctica clínica, el exceso de Fuego en el Corazón es el desequilibrio más frecuente que veo — en ejecutivos, en madres, en jóvenes de veinte años y en personas de setenta. Es la enfermedad silenciosa de nuestro tiempo. La buena noticia: el cuerpo sabe cómo regularse. Solo necesita las herramientas correctas.
                </p>
              </div>
              <div className="md:col-span-4 space-y-6">
                <div className="bg-emerald-50/20 border border-emerald-500/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center">
                  <svg viewBox="0 0 100 100" className="w-24 h-24 text-emerald-800 mb-3">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                    <path d="M50 25 C54 25, 54 17, 50 17 C46 17, 46 25, 50 25 Z" fill="currentColor" opacity="0.8" />
                    <path d="M50 27 C44 27, 41 33, 41 42 C41 51, 44 55, 41 68 C40 70, 31 71, 31 75 C31 82, 69 82, 69 75 C69 71, 60 70, 59 68 C56 55, 59 51, 59 42 C59 33, 56 27, 50 27 Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1" />
                    <path d="M50 42 C48 39, 45 39, 45 42 C45 45, 50 49, 50 49 C50 49, 55 45, 55 42 C55 39, 52 39, 50 42 Z" fill="#2ecc71" className="animate-pulse" />
                    <circle cx="50" cy="43" r="5" fill="#2ecc71" fillOpacity="0.4" className="animate-ping" />
                  </svg>
                  <p className="text-xs text-slate-800 font-semibold font-serif leading-relaxed">
                    En la Medicina Tradicional China, lo que llamamos ansiedad o estrés crónico tiene un nombre muy preciso: <span className="text-red-900 font-bold">excesiva acumulación de Fuego en el Corazón</span>. Y tiene solución.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-slate-800 space-y-5">
            <div className="border-b border-earth-sand/30 pb-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-800 font-extrabold tracking-tight uppercase leading-none">
                El Fuego en tu Interior
              </h2>
              <p className="text-xs italic text-[#897967] mt-1 font-sans">Síntomas y Fundamentos de la Alquimia Taoísta</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="bg-[#fbfbf9] p-5 sm:p-6 rounded-2xl border border-earth-sand/30 space-y-3.5">
                <h3 className="text-sm uppercase tracking-widest text-gold-dark font-bold font-sans">
                  Síntomas Comunes del Fuego del Corazón:
                </h3>
                <ul className="text-xs sm:text-sm space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <strong>Dificultad para conciliar el sueño</strong> o sueños excesivos y agitados.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <strong>Ansiedad constante</strong> y preocupación obsesiva recurrente.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <strong>Palpitaciones</strong> o sensación de un latido desbocado/acelerado.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <strong>Lengua roja</strong> con la punta visiblemante más roja.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <strong>Sed constante</strong> y sequedad persistente en la boca.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <strong>Irritabilidad</strong>, agitación mental e impaciencia.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <strong>Sensación de calor</strong> o pesadez en el pecho.
                  </li>
                </ul>
              </div>
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  En la Medicina Tradicional China, el Corazón es mucho más que un órgano físico: es el <strong>&quot;Emperador&quot;</strong> de todos los órganos, el guardián del <strong>Shen</strong> (espíritu) y la sede de nuestra conciencia de amor y perdón.
                </p>
                <p>
                  Cuando el Fuego se desequilibra, experimentamos un exceso de calor interno que perturba nuestra paz mental y emocional. Este fuego asciende e irrita nuestro espíritu protector.
                </p>
                <blockquote className="bg-earth-sand/20 border-l-4 border-gold-dark p-4 rounded-r-xl italic font-serif text-slate-700 text-xs text-center">
                  &quot;El Corazón alberga el Shen. Cuando el fuego asciende, el espíritu se inquieta y no encuentra reposo.&quot;
                  <cite className="block text-[10px] font-sans font-bold tracking-widest text-[#897967] uppercase not-italic mt-2">
                    — Clásico de Medicina Interna del Emperador Amarillo
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-slate-800 space-y-4">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-gold-dark font-extrabold font-sans block mb-1">TÉCNICA 1 DE 3</span>
              <h2 className="text-2xl font-serif text-slate-800 font-extrabold tracking-tight">
                Punto Sagrado Shenmen 7C
              </h2>
              <p className="text-xs italic text-red-900 font-serif">&quot;La Puerta del Espíritu&quot;</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 space-y-4 text-xs sm:text-sm">
                <p className="leading-relaxed">
                  El punto <strong>Shenmen</strong>, conocido como &quot;La Puerta del Espíritu&quot;, es uno de los portales más poderosos para calmar el fuego.
                </p>
                <div className="bg-white p-3 rounded-xl border border-earth-sand/40 space-y-2">
                  <h4 className="font-serif font-bold text-slate-800">Ubicación Exacta:</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Se encuentra en el pliegue de la muñeca, en el lado del meñique, en una pequeña depresión entre el tendón y el hueso pisiforme.
                  </p>
                </div>
                <div className="bg-[#fbfbf9] border border-[#dfc88a]/30 rounded-xl p-3 flex flex-col items-center">
                  <svg viewBox="0 0 100 80" className="w-full h-24 text-slate-800">
                    <path d="M20 70 Q30 40 40 10 L50 10 Q45 40 35 70 Z" fill="currentColor" opacity="0.1" />
                    <path d="M80 70 Q70 40 60 10 L50 10 Q55 40 65 70 Z" fill="currentColor" opacity="0.15" />
                    <path d="M40 10 C42 4, 48 4, 50 10" stroke="currentColor" strokeWidth="1" fill="none" />
                    <path d="M38 12 C30 14, 28 30, 24 45" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
                    <circle cx="43" cy="35" r="4.5" fill="#e67e22" className="animate-ping" style={{ animationDuration: '2s' }} />
                    <circle cx="43" cy="35" r="3.5" fill="#d35400" />
                    <text x="50" y="38" className="font-mono text-[7px] font-bold" fill="#4a0a15">C7 - Shenmen</text>
                  </svg>
                  <span className="text-[10px] text-slate-500">Estimulación táctil en el punto dorado</span>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-white p-4 rounded-xl border border-earth-sand/40 space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-[#897967] font-bold font-sans">
                    Instrucciones Paso a Paso:
                  </h4>
                  <ol className="text-xs sm:text-sm space-y-2 text-slate-700 list-decimal pl-4.5">
                    <li><strong>Localiza el punto</strong> en tu muñeca izquierda, en el pliegue interno, justo debajo del hueso que sobresale del lado del meñique.</li>
                    <li>Con el pulgar de tu mano opuesta, <strong>presiona suavemente</strong> el punto con firmeza moderada.</li>
                    <li><strong>Mantén la presión</strong> constante durante 1-2 minutos mientras respiras profundamente.</li>
                    <li>Realiza pequeños <strong>movimientos circulares</strong> en sentido horario sobre la zona.</li>
                    <li><strong>Repite el ritual</strong> en la muñeca contraria.</li>
                  </ol>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#f0f4f2] p-2.5 rounded-lg border border-slate-300">
                    <h5 className="font-bold text-slate-800">Beneficio Directo:</h5>
                    <p className="text-slate-600 mt-1">Calma el insomnio y la aceleración mental.</p>
                  </div>
                  <div className="bg-[#f0f4f2] p-2.5 rounded-lg border border-slate-300">
                    <h5 className="font-bold text-slate-800">Efecto Nervioso:</h5>
                    <p className="text-slate-600 mt-1">Equilibra las descargas del cortisol.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-slate-800 space-y-4">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-gold-dark font-extrabold font-sans block mb-1">TÉCNICA 2 DE 3</span>
              <h2 className="text-2xl font-serif text-slate-800 font-extrabold tracking-tight">
                Respiración Alquímica 4-7-8
              </h2>
              <p className="text-xs italic text-red-900 font-serif">El Arte de apagar el fuego con la brisa</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <div className="bg-white p-5 rounded-xl border border-earth-sand/40 space-y-4">
                <p className="text-xs leading-relaxed text-slate-700">
                  Esta técnica asombrosa, conocida como respiración del enfriamento o relajación sistémica, actúa directamente sobre tu sistema nervioso parasimpático.
                </p>
                <h4 className="text-xs uppercase tracking-widest text-gold-dark font-bold font-sans">
                  Instrucciones Paso a Paso:
                </h4>
                <ol className="text-xs sm:text-sm space-y-2 text-slate-700 list-decimal pl-4.5">
                  <li>Adopta una postura sentada con la <strong>espalda recta</strong>.</li>
                  <li>Coloca la <strong>punta de tu lengua</strong> justo detrás de los dientes superiores.</li>
                  <li><strong>Exhala completamente</strong> por la boca haciendo un soplido suave.</li>
                  <li>Inhala silenciosamente por la nariz contando hasta <strong>4 segundos</strong>.</li>
                  <li><strong>Retén el aire</strong> de forma pacífica durante <strong>7 segundos</strong>.</li>
                  <li><strong>Exhala suavemente</strong> por la boca durante <strong>8 segundos</strong>.</li>
                </ol>
              </div>
              <div className="space-y-4">
                <div className="bg-[#fbfbf9] p-4 rounded-xl border border-earth-sand/30 space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-[#897967] font-bold block">Cuándo Practicarla:</h4>
                  <p className="text-xs text-slate-700">Visualízala como tu caja de primeros auxilios ante insomnios de madrugada, ataques agudos de ansiedad o justo antes de una conversación estresante.</p>
                </div>
                <div className="bg-[#fbfbf9] p-4 rounded-xl border border-earth-sand/30 space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-slate-800 font-bold block">Acción Terapéutica:</h4>
                  <p className="text-xs text-slate-700">Enfría el Fuego del Corazón al inducir una estimulación estimable sobre el <strong>nervio vago</strong>, restableciendo la coherencia cardíaca.</p>
                </div>
                <blockquote className="border-t border-b border-gold-dark/20 py-3 text-center italic text-xs font-serif text-red-950">
                  &quot;El agua de la respiración consciente apaga el fuego de la mente agitada.&quot;
                </blockquote>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-slate-800 space-y-4">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-gold-dark font-extrabold font-sans block mb-1">TÉCNICA 3 DE 3</span>
              <h2 className="text-2xl font-serif text-slate-800 font-extrabold tracking-tight">
                Meditación del Agua que Enfría el Fuego
              </h2>
              <p className="text-xs italic text-red-900 font-serif">Equilibrio Energético e Introspección Profunda</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="bg-white p-4 rounded-xl border border-earth-sand/40 space-y-2 text-xs">
                  <p className="leading-relaxed text-slate-750 font-sans">
                    Esta práctica meditativa de la tradición taoísta usa el poder de la mente para equilibrar el elemento <strong>Fuego</strong> del Corazón con el elemento <strong>Agua</strong> del Riñón.
                  </p>
                  <p className="font-bold text-gold-dark mt-1">Duración: 10 - 15 Minutos</p>
                  <h4 className="text-xs uppercase tracking-widest text-[#897967] font-bold block pt-2">Para empezar:</h4>
                  <ol className="space-y-1.5 pl-3 list-decimal">
                    <li>Siéntate erguido con tus manos reposadas hacia el vientre.</li>
                    <li>Cierra los párpados de forma relajada e interioriza tu pulso.</li>
                    <li>Observa en calma tu pecho sin juzgar el cansancio o apuro.</li>
                  </ol>
                </div>
              </div>
              <div className="lg:col-span-6 space-y-3.5">
                <div className="bg-[#fbfbf9] p-4 rounded-xl border border-earth-sand/30 space-y-2 text-xs">
                  <h4 className="text-xs uppercase tracking-widest text-gold-dark font-bold font-sans">
                    Visualización Guiada:
                  </h4>
                  <ol className="space-y-2 pl-4 list-decimal text-slate-700">
                    <li>Visualiza un lago prístino de aguas profundas, frescas y de color azul noche en tu vientre.</li>
                    <li>Imagina que con cada inhalación, un hilo de agua pura asciende hacia tu pecho.</li>
                    <li>Siente cómo esa agua templada envuelve tu corazón, calmándolo.</li>
                    <li>Al exhalar, imagina que liberas el fuego estancado en forma de vapor evanescente.</li>
                  </ol>
                </div>
                <blockquote className="text-center italic font-serif text-slate-750 text-xs py-2 bg-earth-sand/15 rounded-lg border-l-4 border-slate-500">
                  &quot;El agua es la más suave de todas las cosas, pero vence a la más dura.&quot;
                  <span className="block text-[10px] font-sans font-bold text-slate-500 uppercase tracking-widest not-italic mt-1">— Lao Tse</span>
                </blockquote>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-slate-800 space-y-4">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#d35400] font-extrabold font-sans block mb-1">ALQUIMIA NUTRICIONAL</span>
              <h2 className="text-2xl font-serif text-[#0c1f28] font-extrabold tracking-tight">
                Bonus: 3 Alimentos Refrescantes
              </h2>
              <p className="text-xs italic text-[#897967] font-sans">La alimentación consciente como medicina del espíritu</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4.5 rounded-2xl border border-earth-sand/40 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-serif font-bold text-red-750">1. Sandía</h4>
                    <span className="text-[9px] bg-red-100 text-red-800 font-bold px-1.5 py-0.5 rounded-full uppercase">Frío</span>
                  </div>
                  <p className="text-[10px] text-slate-550 italic">Meridianos: Corazón, Estómago</p>
                  <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                    Conocida como el &quot;Tigre Blanco&quot; por su asombrosa fuerza para extinguir fiebres emocionales en segundos.
                  </p>
                </div>
                <div className="text-[10px] bg-red-50 text-red-900/90 p-2 rounded-lg mt-3">
                  <strong>Tip:</strong> Consúmela fresca entre horas. No olvides masticar la parte blanca cerca de la cáscara.
                </div>
              </div>
              <div className="bg-white p-4.5 rounded-2xl border border-earth-sand/40 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-serif font-bold text-green-700">2. Pepino</h4>
                    <span className="text-[9px] bg-green-100 text-green-800 font-bold px-1.5 py-0.5 rounded-full uppercase">Frío</span>
                  </div>
                  <p className="text-[10px] text-slate-550 italic">Meridianos: Estómago, Vejiga</p>
                  <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                    Un milagro hídrico natural diseñado para humectar y desintoxicar las células, calmando el cansancio.
                  </p>
                </div>
                <div className="text-[10px] bg-green-50 text-green-900/90 p-2 rounded-lg mt-3">
                  <strong>Tip:</strong> Prepáralo crudo en ensaladas con hojas de menta para refrescar tu sistema digestivo.
                </div>
              </div>
              <div className="bg-white p-4.5 rounded-2xl border border-earth-sand/40 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-serif font-bold text-amber-700">3. Crisantemo</h4>
                    <span className="text-[9px] bg-yellow-101 text-yellow-800 font-bold px-1.5 py-0.5 rounded-full uppercase">Fresco</span>
                  </div>
                  <p className="text-[10px] text-slate-550 italic">Meridianos: Pulmón, Hígado</p>
                  <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                    Flor solar sagrada que disuelve el calor de la cabeza dándole descanso al espíritu nervioso.
                  </p>
                </div>
                <div className="text-[10px] bg-yellow-50 text-yellow-904 p-2 rounded-lg mt-3 font-sans">
                  <strong>Tip:</strong> Infusiona 5 flores secas por taza. Consúmelo tibio, nunca helado a media tarde.
                </div>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="h-full w-full bg-[#f8f5eb] text-slate-800 rounded-2xl flex flex-col justify-between items-center p-6 sm:p-12 border-2 border-gold-dark/30 shadow-md relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-radial-at-t from-[#dfc88a]/35 via-transparent to-transparent pointer-events-none" />
            <div className="relative mt-2">
              <div className="absolute inset-0 bg-gold-dark/30 rounded-full filter blur-md transform translate-y-1.5" />
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-slate-700 overflow-hidden shadow-lg p-[1px] bg-gradient-to-tr from-[#dfc88a] via-slate-850 to-[#897967]">
                <img
                  src={avatar}
                  alt="Verónica Barraza"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute bottom-1 right-1 bg-slate-900 border border-gold-light/40 text-gold-cream rounded-full p-1 shadow-sm">
                <Star className="h-3.5 w-3.5 fill-gold-light text-gold-light" />
              </div>
            </div>
            <div className="max-w-md mx-auto space-y-4 my-2">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#897967] font-bold">
                Gracias por Recorrer este Camino Conmigo
              </h3>
              <h1 className="text-2xl sm:text-3xl font-serif text-slate-800 font-extrabold tracking-tight leading-none uppercase">
                Dra. Verónica Barraza
              </h1>
              <p className="text-[10px] sm:text-xs text-slate-600 font-sans tracking-wide uppercase font-semibold">
                Terapeuta MTC y Coach Espiritual Taoísta
              </p>
              <div className="w-12 h-[2px] bg-gold-dark/30 mx-auto my-4" />
              <p className="text-xs text-slate-700 leading-relaxed font-sans max-w-sm">
                Si deseas profundizar mediante retiros, manuales de salud o consulta de acupuntura presencial, escríbeme:
              </p>
              <a
                href="mailto:hola@veronicabarrazamtc.com"
                className="inline-block mt-1 text-xs text-slate-800 hover:text-slate-600 font-mono font-bold hover:underline transition"
              >
                hola@veronicabarrazamtc.com
              </a>
            </div>
            <div className="border-t border-[#dfc88a]/30 pt-4 w-full max-w-xs mt-2 self-center">
              <p className="font-serif italic text-sm text-[#4a0a15] font-bold">
                &quot;Que el agua del corazón apacigüe tu fuego y guíe tu vida con paz&quot;
              </p>
            </div>
          </div>
        );

      default:
        return <div>Página no encontrada.</div>;
    }
  } else {
    // energia-vital-gratis
    switch (readerPage) {
      case 0:
        return (
          <div className="h-full w-full bg-[#0a1e15] text-emerald-100 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-8 p-6 sm:p-12 relative overflow-hidden border border-emerald-500/20 shadow-inner">
            <div className="absolute inset-x-0 top-0 bg-[radial-gradient(circle_at_center,rgba(46,189,133,0.08)_0%,transparent_70%)] h-full pointer-events-none" />
            <div className="relative w-[180px] h-[254px] sm:w-[220px] sm:h-[310px] rounded-xl overflow-hidden shadow-2xl border border-emerald-950 shrink-0">
              <img
                src={coverImageSecond}
                alt="Portada Los 5 elementos en la Medicina China"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left max-w-sm space-y-4 relative z-10">
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-emerald-400 font-semibold block">
                GUÍA CONSTITUCIONAL MTC
              </span>
              <h1 className="text-2xl sm:text-4.5xl font-serif text-white font-black tracking-tight leading-snug">
                Los 5 elementos en la Medicina China
              </h1>
              <p className="text-xs text-emerald-100/90 leading-relaxed font-sans">
                Explorando la teoría Wu Xing para comprender nuestra salud, correspondencias cosmológicas y equilibrio vital.
              </p>
              <div className="pt-2 flex justify-center md:justify-start">
                <span className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-wider bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-200">
                  <span>17 páginas</span>
                  <span>•</span>
                  <span>Ebook Gratuito Completo</span>
                </span>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto py-2">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#5c7a6b] font-extrabold font-sans block mb-1">CONCEPTOS FUNDAMENTALES</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-emerald-900 font-extrabold tracking-tight uppercase leading-none">
                Fundamentos de Wu Xing
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-4">
              <div className="md:col-span-7 space-y-4 text-center md:text-left animate-fade-in">
                <blockquote className="font-serif italic text-base sm:text-lg text-emerald-950 leading-relaxed max-w-xl mx-auto md:mx-0">
                  &quot;Como es arriba, es abajo; como es en el cosmos, es en el hombre.&quot;
                </blockquote>
                <div className="w-12 h-[2px] bg-emerald-700/20 mx-auto md:mx-0 my-4" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                  La teoría de las Cinco Fases o Cinco Elementos de la Medicina Tradicional China es un modelo arquetípico milenario que describe el movimiento cíclico y los flujos mutacionales del Qi dentro del ser humano y la naturaleza.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                  Cada fase (Madera, Fuego, Tierra, Metal, Agua) no representa una sustancia elemental estática, sino una cualidad dinámica y una dirección de movimiento que une el macrocosmos con nuestro cuerpo y mente en un fluir armonioso.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-earth-sand/30 h-[240px]">
                  <img
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=600&auto=format&fit=crop"
                    alt="Zen misty landscape"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#5c7a6b] font-extrabold font-sans block mb-1">MOVIMIENTO CÍCLICO</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-emerald-950 font-bold tracking-tight">
                El Ciclo de la Vida
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4 text-sm leading-relaxed text-slate-705">
                <p>
                  La Teoría de los 5 Elementos describe las fases de cambio de la energía (Qi). No son sustancias estáticas, sino procesos dinámicos alineados con los movimientos celestes y terrenales.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="bg-[#f2f8f4] p-3 rounded-xl border border-emerald-500/10">
                    <h4 className="font-serif font-bold text-emerald-950 text-xs flex items-center gap-1.5 uppercase tracking-wider">
                      <span>🔄</span> Ciclo Sheng (Generación):
                    </h4>
                    <p className="text-xs text-slate-650 mt-1 pl-5">
                      La madre nutre al hijo. La Madera alimenta al Fuego. El Fuego produce Tierra (cenizas). La Tierra engendra Metal. El Metal condensa el Agua. El Agua nutre la Madera.
                    </p>
                  </div>
                  <div className="bg-[#fffbfa] p-3 rounded-xl border border-red-500/10">
                    <h4 className="font-serif font-bold text-red-950 text-xs flex items-center gap-1.5 uppercase tracking-wider">
                      <span>🛡️</span> Ciclo Ke (Control):
                    </h4>
                    <p className="text-xs text-slate-655 mt-1 pl-5">
                      El equilibrio a través de la restricción. El Agua apaga al Fuego. El Fuego funde el Metal. El Metal corta la Madera. La Madera retiene la Tierra. La Tierra absorbe el Agua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 flex justify-center items-center">
                <div className="bg-[#fcfbf7] p-2 rounded-2xl border border-earth-sand/30 shadow-md w-full max-w-[280px]">
                  <WuXingDiagram />
                  <p className="text-[10px] text-center text-slate-400 mt-2 font-mono">Diagrama Wu Xing: Sheng &amp; Ke</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-extrabold font-sans block mb-1">ELEMENTO MADERA (MÙ)</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-emerald-955 font-bold tracking-tight">
                El Pionero
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-4">
                <p className="text-sm leading-relaxed text-slate-700">
                  Representa la primavera, el nacimiento y la expansión. Es la energía del crecimiento vertical, la flexibilidad, la iniciativa y la visión clara de futuro.
                </p>
                <ul className="text-xs sm:text-sm space-y-2 text-slate-700 bg-[#f2f8f4] p-4 rounded-xl border border-emerald-500/10">
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <strong>Color y Planeta:</strong> Verde · Júpiter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <strong>Órgano:</strong> Hígado / Vesícula Biliar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <strong>Emoción / Rasgos:</strong> Ira / Decisión, visión, benevolencia y liderazgo.
                  </li>
                </ul>
                <div className="p-4 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-xl text-xs sm:text-sm shadow-xs">
                  <strong>🌿 Consejo de Armonía:</strong> Realiza estiramientos matutinos para flexibilizar los tendones, camina descalzo en la naturaleza y canaliza la frustración mediante la respiración rítmica y el movimiento libre.
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-md border border-earth-sand/30 h-[260px]">
                  <img
                    src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=600&auto=format&fit=crop"
                    alt="Lush green forest wood element"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-red-500 font-extrabold font-sans block mb-1">ELEMENTO FUEGO (HUǑ)</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-red-955 font-bold tracking-tight">
                El Optimista
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-4">
                <p className="text-sm leading-relaxed text-slate-700">
                  La máxima expresión de la energía Yang. Rige el verano, el calor expansivo, la comunicación fluida, la risa sincera y la conexión emocional profunda.
                </p>
                <ul className="text-xs sm:text-sm space-y-2 text-slate-700 bg-red-50/35 p-4 rounded-xl border border-red-500/10">
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <strong>Color y Planeta:</strong> Rojo · Marte
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <strong>Órgano:</strong> Corazón / Intestino Delgado
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <strong>Emoción / Rasgos:</strong> Alegría (o ansiedad) / Carisma, entusiasmo y calma interior.
                  </li>
                </ul>
                <div className="p-4 bg-red-50/80 text-red-900 border border-red-200 rounded-xl text-xs sm:text-sm shadow-xs">
                  <strong>🔥 Consejo de Armonía:</strong> Cultiva el silencio mental mediante la meditación diaria, modera los estimulantes y prioriza un sueño reparador antes de las 11:00 PM.
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-md border border-earth-sand/30 h-[260px]">
                  <img
                    src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=600&auto=format&fit=crop"
                    alt="Paisaje soleado y radiante con mucha luz de sol representando el elemento Fuego"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-amber-600 font-extrabold font-sans block mb-1">ELEMENTO TIERRA (TǓ)</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-amber-955 font-bold tracking-tight">
                El Cuidador
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-4">
                <p className="text-sm leading-relaxed text-slate-700">
                  El centro de estabilidad y transición estacional. Representa la nutrición óptima, el soporte vital, la asimilación física y la digestión mental de las ideas.
                </p>
                <ul className="text-xs sm:text-sm space-y-2 text-slate-700 bg-amber-50/20 p-4 rounded-xl border border-amber-500/10">
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <strong>Color y Planeta:</strong> Amarillo · Saturno
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <strong>Órgano:</strong> Bazo / Estómago
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <strong>Emoción / Rasgos:</strong> Preocupación / Compasión, estabilidad, empatía y centralidad.
                  </li>
                </ul>
                <div className="p-4 bg-amber-50 text-amber-900 border border-amber-200 rounded-xl text-xs sm:text-sm shadow-xs">
                  <strong>🌾 Consejo de Armonía:</strong> Establece horarios fijos para tus comidas, prefiere alimentos templados y de fácil digestión, y reduce considerablemente el rumiar mental.
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-md border border-earth-sand/30 h-[260px]">
                  <img
                    src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop"
                    alt="Golden terraced agricultural fields earth element"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-extrabold font-sans block mb-1">ELEMENTO METAL (JĪN)</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold tracking-tight">
                El Arquitecto
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-4">
                <p className="text-sm leading-relaxed text-slate-700">
                  Refleja la introspección y contracción del otoño. Se asocia directamente con la pureza, el orden estructural, los límites claros, el instinto y la capacidad de soltar.
                </p>
                <ul className="text-xs sm:text-sm space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <strong>Color y Planeta:</strong> Blanco / Plateado · Venus
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <strong>Órgano:</strong> Pulmón / Intestino Grueso
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <strong>Emoción / Rasgos:</strong> Tristeza / Disciplina, ética firme, desapego sano y rectitud.
                  </li>
                </ul>
                <div className="p-4 bg-slate-50 text-slate-800 border border-slate-200 rounded-xl text-xs sm:text-sm shadow-xs">
                  <strong>💨 Consejo de Armonía:</strong> Practica ejercicios de respiración consciente (Qi Gong) al aire libre al amanecer para purificar tus vías aéreas y asimilar el Qi celeste.
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-md border border-earth-sand/30 h-[260px]">
                  <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop"
                    alt="Lámina de metal pulido brillante representando el elemento Metal"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#3498db] font-extrabold font-sans block mb-1">ELEMENTO AGUA (SHUǏ)</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-blue-950 font-bold tracking-tight">
                El Filósofo
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-4">
                <p className="text-sm leading-relaxed text-slate-700">
                  Representa el invierno, la máxima quietud introspectiva Yin y las reservas más profundas de energía vital (nuestra esencia vital heredada o ancestral Jing).
                </p>
                <ul className="text-xs sm:text-sm space-y-2 text-slate-700 bg-blue-50/20 p-4 rounded-xl border border-blue-500/10">
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <strong>Color y Planeta:</strong> Azul oscuro / Negro · Mercurio
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <strong>Órgano:</strong> Riñón / Vejiga
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <strong>Emoción / Rasgos:</strong> Miedo / Sabiduría ancestral, voluntad inquebrantable y resiliencia fluida.
                  </li>
                </ul>
                <div className="p-4 bg-blue-50 text-blue-900 border border-blue-200 rounded-xl text-xs sm:text-sm shadow-xs">
                  <strong>💧 Consejo de Armonía:</strong> Asegura el consumo regular de agua tibia, protege tu zona lumbar, rodillas y oídos del frío, y equilibre sabiamente el esfuerzo físico diario con descanso.
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-md border border-earth-sand/30 h-[260px]">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"
                    alt="Landscape of beautiful clear ocean sea with waves"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#5c7a6b] font-extrabold font-sans block mb-1">CORRESPONDENCIAS EN BALANCE</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-emerald-955 font-bold tracking-tight">
                Matriz de Correspondencias
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 overflow-x-auto shadow-xs border border-earth-sand/40 rounded-xl w-full">
                <table className="w-full text-left border-collapse text-[10px] sm:text-xs">
                  <thead>
                    <tr className="bg-emerald-950 text-gold-cream">
                      <th className="px-3 py-2.5 font-serif">Elemento</th>
                      <th className="px-3 py-2.5 font-serif">Planeta</th>
                      <th className="px-3 py-2.5 font-serif">Color</th>
                      <th className="px-3 py-2.5 font-serif">Órgano (Yin)</th>
                      <th className="px-3 py-2.5 font-serif">Sentido</th>
                      <th className="px-3 py-2.5 font-serif">Sabor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-earth-sand/25">
                    <tr className="bg-emerald-50/10 hover:bg-emerald-50/20">
                      <td className="px-3 py-3 font-bold text-emerald-900 border-r border-earth-sand/15">Madera</td>
                      <td className="px-3 py-3">Júpiter</td>
                      <td className="px-3 py-3 text-emerald-700 font-medium">Verde</td>
                      <td className="px-3 py-3">Hígado</td>
                      <td className="px-3 py-3">Vista</td>
                      <td className="px-3 py-3 font-mono text-emerald-900">Agrio</td>
                    </tr>
                    <tr className="bg-red-50/5 hover:bg-red-50/10">
                      <td className="px-3 py-3 font-bold text-red-900 border-r border-earth-sand/15">Fuego</td>
                      <td className="px-3 py-3">Marte</td>
                      <td className="px-3 py-3 text-red-600 font-medium">Rojo</td>
                      <td className="px-3 py-3">Corazón</td>
                      <td className="px-3 py-3">Habla / Lengua</td>
                      <td className="px-3 py-3 font-mono text-red-900">Amargo</td>
                    </tr>
                    <tr className="bg-amber-50/5 hover:bg-amber-50/10">
                      <td className="px-3 py-3 font-bold text-amber-900 border-r border-earth-sand/15">Tierra</td>
                      <td className="px-3 py-3">Saturno</td>
                      <td className="px-3 py-3 text-amber-600 font-medium">Amarillo</td>
                      <td className="px-3 py-3">Bazo</td>
                      <td className="px-3 py-3">Gusto / Boca</td>
                      <td className="px-3 py-3 font-mono text-amber-900">Dulce</td>
                    </tr>
                    <tr className="bg-slate-50/40 hover:bg-slate-50/60">
                      <td className="px-3 py-3 font-bold text-slate-800 border-r border-earth-sand/15">Metal</td>
                      <td className="px-3 py-3">Venus</td>
                      <td className="px-3 py-3 text-slate-500 font-medium">Blanco / Plateado</td>
                      <td className="px-3 py-3">Pulmón</td>
                      <td className="px-3 py-3">Olfato / Nariz</td>
                      <td className="px-3 py-3 font-mono text-slate-800">Picante</td>
                    </tr>
                    <tr className="bg-blue-50/10 hover:bg-blue-50/20">
                      <td className="px-3 py-3 font-bold text-blue-900 border-r border-earth-sand/15">Agua</td>
                      <td className="px-3 py-3">Mercurio</td>
                      <td className="px-3 py-3 text-blue-700 font-medium">Azul oscuro / Negro</td>
                      <td className="px-3 py-3">Riñón</td>
                      <td className="px-3 py-3">Oído</td>
                      <td className="px-3 py-3 font-mono text-blue-900">Salado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="md:col-span-4 flex flex-col justify-center">
                <div className="rounded-xl overflow-hidden shadow-md border border-earth-sand/30 h-[240px] relative">
                  <img
                    src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=600&auto=format&fit=crop"
                    alt="Tranquil sea water element"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 inset-x-0 text-center">
                    <span className="bg-slate-900/60 backdrop-blur-xs text-white text-[9px] px-2 py-0.5 rounded-full font-sans uppercase tracking-wider">
                      Fase de Máxima Fluidez
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#5c7a6b] font-extrabold font-sans block mb-1">EVALUACIÓN CLÍNICA</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-emerald-955 font-bold tracking-tight">
                Diagnóstico y Equilibrio
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden shadow-md border border-earth-sand/30 h-[260px]">
                <img
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop"
                  alt="Sesión de acupuntura clínica profesional de Medicina Tradicional China"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-earth-sand/35 space-y-2">
                  <h4 className="font-serif font-bold text-emerald-955 text-sm uppercase">Lengua y Pulso:</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Las herramientas clave en la consulta clínica para identificar qué elemento se encuentra en estado de exceso o deficiencia de Qi.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-earth-sand/35 space-y-2">
                  <h4 className="font-serif font-bold text-emerald-955 text-sm uppercase">Armonización Holística:</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Se logra mediante acupuntura estacional, fitoterapia, ejercicios de Qi Gong y la alimentación según los sabores correspondientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="text-slate-800 space-y-4 max-w-4xl mx-auto text-center py-2 animate-fade-in">
            <div className="border-b border-earth-sand/30 pb-3">
              <span className="text-[10px] uppercase tracking-widest text-[#5c7a6b] font-extrabold font-sans block mb-1">SÍNTESIS DE LA CONSTITUCIÓN</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-emerald-955 font-bold tracking-tight">
                Resumen de Fuerzas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-3">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-gold-dark font-serif tracking-tight leading-none block">5</span>
                  <h4 className="font-serif font-extrabold text-[11px] text-slate-800 uppercase tracking-wide">Fuerzas Primarias</h4>
                  <p className="text-[10px] text-slate-500 leading-normal">Los pilares de tu salud constitucional.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#8a9d8a] font-serif tracking-tight leading-none block">5</span>
                  <h4 className="font-serif font-extrabold text-[11px] text-slate-800 uppercase tracking-wide">Planetas Guía</h4>
                  <p className="text-[10px] text-slate-500 leading-normal font-sans">La conexión cósmica y rítmica del ser.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-amber-800 font-serif tracking-tight leading-none block">2</span>
                  <h4 className="font-serif font-extrabold text-[11px] text-slate-800 uppercase tracking-wide">Grandes Ciclos</h4>
                  <p className="text-[10px] text-slate-500 leading-normal">Generación y regulación recíproca.</p>
                </div>
              </div>
              <div className="h-[140px] rounded-xl overflow-hidden border border-earth-sand/30 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop"
                  alt="Balance Zen de Fuerza"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        );

      case 11:
        return (
          <div className="text-slate-800 space-y-6 max-w-3xl mx-auto py-4">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#5c7a6b] font-extrabold font-sans block mb-1">COACHING ESPIRITUAL</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-emerald-955 font-bold tracking-tight">
                Medicina para el Alma
              </h2>
            </div>
            <div className="bg-[#fffdf9] rounded-3xl border-2 border-earth-sand/40 p-6 sm:p-8 text-center space-y-4 max-w-xl mx-auto shadow-sm">
              <div className="relative w-20 h-20 mx-auto rounded-full border-2 border-emerald-800/20 overflow-hidden shadow-md animate-fade-in">
                <img
                  src={avatar}
                  alt="Dra. Verónica Barraza"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-serif text-emerald-955 font-black tracking-tight leading-none uppercase">
                  Verónica Barraza
                </h1>
                <p className="text-[10px] text-slate-500 font-sans tracking-widest uppercase font-semibold">
                  MEDICINA PARA EL ALMA Y EL CORAZÓN
                </p>
              </div>
              <div className="w-16 h-[1.5px] bg-earth-sand mx-auto" />
              <h3 className="font-serif italic text-base text-amber-900 font-semibold leading-relaxed">
                Método Tao Flow
              </h3>
              <p className="text-xs sm:text-sm text-slate-705 leading-relaxed font-sans px-4">
                Acompañando tu retorno al equilibrio natural a través de la integración de la Medicina Tradicional China, la consciencia corporal y la sanación del alma.
              </p>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="text-slate-800 space-y-4 max-w-3xl mx-auto text-center py-4">
            <h1 className="text-3xl sm:text-4.5xl font-serif text-[#0c1f28] font-black tracking-tight leading-none">
              ¿Preguntas?
            </h1>
            <p className="text-sm sm:text-base text-slate-700 italic font-serif leading-relaxed max-w-lg mx-auto">
              La salud es el equilibrio dinámico de todos tus elementos.
            </p>
            <div className="flex justify-center py-2">
              <div className="w-32 h-20 rounded-xl overflow-hidden border border-earth-sand/35 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=600&auto=format&fit=crop"
                  alt="Serene morning sun rays over forest path"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 text-[10px] bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full text-emerald-950 leading-none">
                <span className="text-sm">🌱</span>
                <span className="font-semibold">Gracias por tu atención</span>
              </div>
            </div>
            <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase pt-4">
              Guía de Armonía de los Cinco Elementos (Wu Xing)
            </p>
          </div>
        );

      case 13:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <h2 className="text-2xl sm:text-3xl font-serif text-emerald-950 font-bold tracking-tight">
                Fuentes de las Imágenes
              </h2>
            </div>
            <div className="space-y-3 max-w-2xl mx-auto overflow-y-auto max-h-[280px] p-2">
              <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-earth-sand/30">
                <div className="w-16 h-12 bg-[#fcfbf7] rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-0.5 border border-slate-250">
                  <div className="w-10 h-10">
                    <WuXingDiagram />
                  </div>
                </div>
                <div className="text-xs">
                  <h4 className="font-bold">Wu Xing Diagram (Ciclo de la Vida)</h4>
                  <p className="text-slate-500 mt-1 truncate">Origen: Google Image Collection - Wikipedia Creative Commons</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-earth-sand/30">
                <div className="w-16 h-12 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold">Forest wallpaper (Madera)</h4>
                  <p className="text-slate-500 mt-1">Origen: Unsplash curated high stability forest landscape</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-earth-sand/30">
                <div className="w-16 h-12 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold">Bright Sunshine (Fuego)</h4>
                  <p className="text-slate-500 mt-1">Origen: Unsplash paisaje soleado y radiante</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-earth-sand/30">
                <div className="w-16 h-12 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold">Terraced fields (Tierra)</h4>
                  <p className="text-slate-500 mt-1">Origen: Unsplash agricultural mountain hills</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 14:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <h2 className="text-2xl sm:text-3xl font-serif text-emerald-955 font-bold tracking-tight">
                Fuentes (Continuación)
              </h2>
            </div>
            <div className="space-y-3 max-w-2xl mx-auto overflow-y-auto max-h-[280px] p-2">
              <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-earth-sand/30">
                <div className="w-16 h-12 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold">Polished metal sheet (Metal)</h4>
                  <p className="text-slate-500 mt-1">Origen: Unsplash silver metal texture</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-earth-sand/30">
                <div className="w-16 h-12 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold">Water ripples surface (Agua)</h4>
                  <p className="text-slate-500 mt-1">Origen: Unsplash peaceful deep blue pond surface</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-earth-sand/30">
                <div className="w-16 h-12 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold">Acupuncture Session (Diagnóstico)</h4>
                  <p className="text-slate-500 mt-1">Origen: Traditional Chinese Acupuncture Clinical therapy</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 15:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <h2 className="text-2xl sm:text-3xl font-serif text-emerald-100 font-bold tracking-tight">
                Créditos de las Secuencias
              </h2>
            </div>
            <div className="max-w-2xl mx-auto text-xs space-y-4 font-mono leading-relaxed bg-[#f8f6f2] p-6 rounded-2xl border border-earth-sand/20">
              <div className="space-y-1">
                <p className="font-bold text-slate-800">Candelas del Fuego (Fase Yang)</p>
                <a href="https://unsplash.com/photos/bonfire-particle-glow" className="text-emerald-800 hover:underline truncate block">Source: unsplash.co</a>
              </div>
              <div className="space-y-1 pt-2 border-t border-slate-300">
                <p className="font-bold text-slate-800">Frondosidad de Madera (Fase Primavera)</p>
                <a href="https://unsplash.com/photos/deep-green-forest" className="text-emerald-800 hover:underline truncate block">Source: unsplash.com</a>
              </div>
              <div className="space-y-1 pt-2 border-t border-slate-300">
                <p className="font-bold text-slate-800">Campos de Tierra Cultivada (Nutrición)</p>
                <a href="https://unsplash.com/photos/cultivated-terrace-fields" className="text-emerald-800 hover:underline truncate block">Source: unsplash.com</a>
              </div>
            </div>
          </div>
        );

      case 16:
        return (
          <div className="text-slate-800 space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-earth-sand/30 pb-3 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#5c7a6b] font-extrabold font-sans block mb-1">IMAGE SOURCE CREDITS Continued</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-emerald-955 font-bold tracking-tight">
                Image Sources - Part II
              </h2>
            </div>
            <div className="max-w-2xl mx-auto text-xs space-y-4 font-mono leading-relaxed bg-[#f8f6f2] p-6 rounded-2xl border border-earth-sand/25">
              <div className="space-y-2">
                <p className="font-bold text-slate-800">Acupuncture clinic therapy sessions</p>
                <a href="https://www.hopkinsmedicine.org" className="text-emerald-800 hover:underline truncate block">Source: www.hopkinsmedicine.org</a>
                <p className="text-[10px] text-slate-400">Integrative Medicine Program Center - Wellness Division</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-300">
                <p className="font-bold text-slate-800">White minerals &amp; rock crystal quartz</p>
                <a href="https://unsplash.com/photos/white-crystal-cluster" className="text-emerald-800 hover:underline truncate block">Source: unsplash.com</a>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-300">
                <p className="font-bold text-slate-800">Clear deep pond ocean ripples</p>
                <a href="https://unsplash.com/photos/peaceful-water-waves" className="text-emerald-800 hover:underline truncate block">Source: unsplash.com</a>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Página no encontrada.</div>;
    }
  }
};
