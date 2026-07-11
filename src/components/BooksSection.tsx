/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Book, Download, ShoppingCart, Check, Heart, ShieldCheck, Star, BookOpen, ChevronLeft, ChevronRight, X, Flame, Droplets, Utensils } from 'lucide-react';
import { LIBROS_DATA, BIO_DATA } from '../data';
import { Libro } from '../types';
import { motion, AnimatePresence } from 'motion/react';
// @ts-ignore
import coverImage from '../assets/images/calmar_fuego_cover_1780352229613.png';
// @ts-ignore
import coverImageSecond from '../assets/images/energia_vital_cover_1780352750275.png';
// @ts-ignore
import escuchandoElAlmaCover from '../assets/images/escuchando_el_alma_cover.jpg';
import { EbookReaderPages } from './EbookReaderPages';
import { useAvatar } from '../hooks/useAvatar';

export default function BooksSection() {
  const { avatar } = useAvatar();
  const [downloadEmail, setDownloadEmail] = useState('');
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [downloadEmailSecond, setDownloadEmailSecond] = useState('');
  const [hasDownloadedSecond, setHasDownloadedSecond] = useState(false);
  const [activePurchaseBook, setActivePurchaseBook] = useState<Libro | null>(null);
  const [purchaseStep, setPurchaseStep] = useState<'options' | 'address' | 'success'>('options');
  const [purchaseFormat, setPurchaseFormat] = useState<'fisico' | 'digital'>('digital');
  
  // Purchase form states
  const [purchaserName, setPurchaserName] = useState('');
  const [purchaserEmail, setPurchaserEmail] = useState('');
  const [purchaserAddress, setPurchaserAddress] = useState('');

  // Reader states
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [readerBookId, setReaderBookId] = useState<'recetario-gratis' | 'energia-vital-gratis'>('recetario-gratis');
  const [readerPage, setReaderPage] = useState(0);

  const freeBooks = LIBROS_DATA.filter(b => b.esGratuito);
  const freeBook = freeBooks.find(b => b.id === 'recetario-gratis')!;
  const freeBookSecond = freeBooks.find(b => b.id === 'energia-vital-gratis')!;
  const paidBooks = LIBROS_DATA.filter(b => !b.esGratuito);

  // Generate a real text download detailing MTC nutritional advice
  const triggerEbookDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadEmail) return;

    // Save subscriber inside localStorage for local persistence
    try {
      const existing = localStorage.getItem('mtc_suscriptores');
      const list = existing ? JSON.parse(existing) : [];
      list.push({
        id: crypto.randomUUID(),
        email: downloadEmail,
        fechaRegistro: new Date().toISOString(),
        consentimiento: true
      });
      localStorage.setItem('mtc_suscriptores', JSON.stringify(list));
      
      // Dispatch custom event to notify Admin Panel if it is loaded
      window.dispatchEvent(new Event('local_db_updated'));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    // Creating beautiful readable content for the ebook text file
    const bookletText = `========================================================================
CALMAR EL FUEGO DE TU CORAZÓN - GUÍA DE MEDICINA TRADICIONAL CHINA
========================================================================
Escrito por la Dra. Verónica Barraza · Armonía MTC y Bienestar
========================================================================

¡Hola Sanador!
Gracias por descargar esta guía. A continuación, comparto contigo
las tres técnicas milenarias de la Medicina Tradicional China (MTC)
diseñadas para calmar el Fuego del Corazón, apaciguar el Shen (mente/espíritu)
y reducir la ansiedad de manera inmediata.

------------------------------------------------------------------------
TÉCNICA 1: ACUPRESIÓN EN EL PUNTO "SHEN MEN" (C7/PUERTA DEL ESPÍRITU)
------------------------------------------------------------------------
Ubicación: En el pliegue interno de la muñeca, en la parte interna del hueso
pisiforme (pasa el dedo por debajo del meñique hasta la muñeca).
Cómo presionar:
* Aplica una presión firme constante o realiza masajes circulares con la yema
  de tu dedo pulgar durante 2 a 3 minutos en ambas muñecas.
* Acompaña con respiraciones abdominales profundas.
Beneficio: Calma la mente de inmediato, reduce palpitaciones e induce paz.

------------------------------------------------------------------------
TÉCNICA 2: ACUPRESIÓN EN EL PUNTO "NEI GUAN" (PC6/BARRERA INTERNA)
------------------------------------------------------------------------
Ubicación: A tres dedos de distancia del pliegue de la muñeca, justo entre
los dos tendones flexores del brazo.
Cómo presionar:
* Mantén una presión profunda o un masaje circular lento durante 2 minutos.
* Inhala en 4 tiempos y exhala en 6 tiempos para relajar el sistema nervioso.
Beneficio: Alivia la sensación de opresión en el pecho, reduce el estrés, las 
náuseas emocionales y promueve un sueño reparador.

------------------------------------------------------------------------
TÉCNICA 3: RESPIRACIÓN REFRESCANTE DEL CORAZÓN (CICLO DE ENFRIAMIENTO)
------------------------------------------------------------------------
Procedimiento ritual de respiración:
1. Adopta una postura cómoda con la espalda erguida. Coloca tu mano derecha
   sobre el centro del pecho (plexo cardíaco).
2. Imagina una suave luz de color azul fresco o verde esmeralda que baña
   tu pecho con cada inhalación.
3. Exhala lentamente con los labios entreabiertos haciendo el sonido "Ke" (sonido
   terapéutico para enfriar el Corazón), liberando el calor excedente acumulado.
4. Repite de 9 a 18 veces sintiendo el descenso de la agitación mental.

Que el Qi de tu Corazón vuelva a su cauce natural, lleno de Amor y Luz.
Dra. Verónica Barraza.
========================================================================`;

    const blob = new Blob([bookletText], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'MTC_Calmar_el_Fuego_de_tu_Corazon_Veronica_Barraza.txt';
    link.click();

    setHasDownloaded(true);
    setDownloadEmail('');
  };

  const triggerEbookDownloadSecond = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadEmailSecond) return;

    try {
      const existing = localStorage.getItem('mtc_suscriptores');
      const list = existing ? JSON.parse(existing) : [];
      list.push({
        id: crypto.randomUUID(),
        email: downloadEmailSecond,
        fechaRegistro: new Date().toISOString(),
        consentimiento: true
      });
      localStorage.setItem('mtc_suscriptores', JSON.stringify(list));
      window.dispatchEvent(new Event('local_db_updated'));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    const bookletText = `========================================================================
LOS 5 ELEMENTOS EN LA MEDICINA CHINA - MANUAL DE EQUILIBRIO Y ARMONÍA DIARIA
========================================================================
Escrito por la Dra. Verónica Barraza · Bienestar y Alquimia MTC
========================================================================

¡Hola Caminante de la Tierra!
Conocer los Cinco Elementos (Wuxing) es aprender a escuchar el ritmo de 
la naturaleza dentro de tus propios órganos y células. Esta sabiduría te
permitirá identificar cuándo tu energía está estancada y cómo armonizarla.

------------------------------------------------------------------------
1. MADERA (Hígado y Vesícula Biliar)
------------------------------------------------------------------------
* Ciclo: Primavera.
* Clave: Dirección, visión y toma de decisiones.
* Desequilibrio: Ira, frustración, tensión cervical.
* Práctica diaria: Bebe agua tibia con limón al despertar. Realiza estiramientos
  suaves por las mañanas orientando tu respiración a los costados del torso.

------------------------------------------------------------------------
2. FUEGO (Corazón e Intestino Delgado)
------------------------------------------------------------------------
* Ciclo: Verano.
* Clave: Claridad de espíritu (Shen), alegría pura y amor incondicional.
* Desequilibrio: Ansiedad, insomnio de madrugada, lengua muy roja.
* Práctica diaria: Presiona el punto Shenmen (abajo del meñique en la muñeca)
  antes de dormir y sonríe internamente a tu corazón en silencio.

------------------------------------------------------------------------
3. TIERRA (Bazo y Estómago)
------------------------------------------------------------------------
* Ciclo: Fin de Verano / Canícula.
* Clave: Nutrición, sostén y asimilación.
* Desequilibrio: Preocupación excesiva, rumiación mental, pesadez física.
* Práctica diaria: Consume alimentos templados y cocidos (caldos de calabaza o
  cereales). Camina descalzo sobre tierra o pasto para enraizar tu Qi.

------------------------------------------------------------------------
4. METAL (Pulmón e Intestino Grueso)
------------------------------------------------------------------------
* Ciclo: Otoño.
* Clave: Soltar, purificar y absorber la energía pura del cosmos.
* Desequilibrio: Tristeza profunda, melancolía persistente, resequedad cutánea.
* Práctica diaria: Realiza 9 respiraciones profundas al aire libre exhalando con
  el sonido purificador "Si", sintiendo cómo sueltas lo que ya no sirve.

------------------------------------------------------------------------
5. AGUA (Riñón y Vejiga)
------------------------------------------------------------------------
* Ciclo: Invierno.
* Clave: Voluntad, reservas de energía vital (Jing) y descanso profundo.
* Desequilibrio: Miedo paralizante, fatiga lumbar, dolores de rodillas.
* Práctica diaria: Mantén tus pies y espalda lumbar siempre abrigados.
  Bebe agua tibia y tómate al menos 10 minutos de reposo absoluto a la mitad del día.

Que el flujo armónico del Tao guíe cada uno de tus pasos en equilibrio.
Dra. Verónica Barraza.
========================================================================`;

    const blob = new Blob([bookletText], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'MTC_Los_5_Elementos_en_la_Medicina_China_Veronica_Barraza.txt';
    link.click();

    setHasDownloadedSecond(true);
    setDownloadEmailSecond('');
  };

  const startBookPurchase = (book: Libro) => {
    setActivePurchaseBook(book);
    setPurchaseStep('options');
    setPurchaseFormat('digital');
    setPurchaserName('');
    setPurchaserEmail('');
    setPurchaserAddress('');
  };

  const finishBookPurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!purchaserName || !purchaserEmail) return;

    // Save purchase inside localStorage for local persistence
    try {
      const existing = localStorage.getItem('mtc_compras');
      const list = existing ? JSON.parse(existing) : [];
      list.push({
        id: crypto.randomUUID(),
        libroId: activePurchaseBook?.id,
        libroTitulo: activePurchaseBook?.titulo,
        nombre: purchaserName,
        email: purchaserEmail,
        formato: purchaseFormat,
        direccion: purchaseFormat === 'fisico' ? purchaserAddress : 'Envío Digital',
        precio: activePurchaseBook?.precio,
        fechaCompra: new Date().toISOString()
      });
      localStorage.setItem('mtc_compras', JSON.stringify(list));
      
      // Dispatch custom event to notify Admin Panel
      window.dispatchEvent(new Event('local_db_updated'));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setPurchaseStep('success');
  };

  return (
    <section id="libros" className="py-24 bg-sage-light/30 relative overflow-hidden">
      {/* Subtle geometric circles with golden details */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full border border-gold-light/10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full border border-sage-medium/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="books-main-container">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-widest text-gold-dark font-semibold font-sans mb-2 block">
            Biblioteca de Alquimia
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-sage-dark tracking-tight mb-4">
            Lectura Transformadora
          </h2>
          <p className="text-sm sm:text-base text-earth-clay font-sans">
            Guías escritas desde el corazón y el estudio milenario para cultivar la paz interior, sanar tu cuerpo y alma desde la energía transformadora del Amor y liberar tu potencial energético.
          </p>
        </div>

        {/* Free e-book box download row */}
        <div className="bg-gradient-to-r from-sage-medium to-sage-medium/85 rounded-3xl p-8 sm:p-12 mb-20 text-white shadow-xl flex flex-col lg:flex-row items-center gap-12 border border-sage-light/25 shadow-md" id="free-book-row">
          {/* Cover image area */}
          <div className="w-full lg:w-1/3 flex justify-center" id="free-book-cover-wrapper">
            <div className="relative group">
              <div className="absolute inset-0 bg-gold-dark/40 rounded-2xl filter blur-md transform translate-x-3 translate-y-3 group-hover:blur-lg transition-all" />
              <div className="relative w-[220px] h-[310px] bg-[#0c1f28] rounded-2xl overflow-hidden shadow-2xl border border-gold-light/20 flex flex-col justify-between group-hover:scale-[1.02] transition-all duration-300">
                <img
                  src={coverImage}
                  alt="Calmar el Fuego de tu Corazón"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Details & Form area */}
          <div className="w-full lg:w-2/3 flex flex-col" id="free-book-details-wrapper">
            <div className="inline-flex items-center space-x-2 bg-gold-dark/20 text-gold-light border border-gold-light/20 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-max mb-6">
              <Star className="h-3.5 w-3.5 text-gold-light fill-gold-light" />
              <span>Libro Digital Autoral · Descarga Gratuita</span>
            </div>

            <h3 className="text-2xl sm:text-3.5xl font-serif tracking-tight text-gold-cream mb-4">
              {freeBook.titulo}
            </h3>
            <p className="text-xs sm:text-sm text-gold-cream/75 leading-relaxed font-sans mb-6">
              {freeBook.descripcion}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-black/20 p-4 rounded-xl border border-white/5">
              <div className="text-center md:text-left">
                <span className="text-[9px] text-gold-light/80 uppercase tracking-widest block">Páginas</span>
                <span className="text-sm font-semibold">{freeBook.paginas} pág.</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-[9px] text-gold-light/80 uppercase tracking-widest block">Formato</span>
                <span className="text-sm font-semibold">{freeBook.formato}</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-[9px] text-gold-light/80 uppercase tracking-widest block">Idioma</span>
                <span className="text-sm font-semibold">Castellano</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-[9px] text-gold-light/80 uppercase tracking-widest block">Lectura</span>
                <span className="text-sm font-semibold">Sencilla e Ilustrada</span>
              </div>
            </div>

            {/* Email Form Trigger */}
            <div className="flex flex-col gap-4 w-full">
              {!hasDownloaded ? (
                <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center w-full">
                  <form onSubmit={triggerEbookDownload} className="flex-grow flex flex-col sm:flex-row gap-3" id="free-book-download-form">
                    <input
                      type="email"
                      required
                      placeholder="Introduce tu correo personal..."
                      value={downloadEmail}
                      onChange={(e) => setDownloadEmail(e.target.value)}
                      className="flex-grow px-5 py-4 bg-white/10 text-white placeholder-gold-light/50 border border-white/10 focus:border-gold-light rounded-xl sm:rounded-full outline-hidden text-sm transition"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gold-dark hover:bg-gold-light text-amber-950 hover:text-amber-950 font-semibold text-xs tracking-wider uppercase rounded-xl sm:rounded-full flex items-center justify-center space-x-2 transition duration-300 shrink-0"
                    >
                      <Download className="h-4 w-4" />
                      <span>Descargar Libro</span>
                    </button>
                  </form>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setReaderBookId('recetario-gratis');
                      setIsReaderOpen(true);
                      setReaderPage(0);
                    }}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-gold-light text-gold-cream hover:text-white font-semibold text-xs tracking-wider uppercase rounded-xl sm:rounded-full flex items-center justify-center space-x-2 transition duration-300"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Leer Online Gratis</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="bg-sage-medium/20 border border-sage-light/20 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-serif font-medium text-gold-light flex items-center gap-2">
                        <Check className="h-5 w-5 text-gold-light bg-sage-dark rounded-full p-0.5" />
                        ¡Suscripción confirmada y descarga iniciada!
                      </h4>
                      <p className="text-xs text-gold-cream/70 mt-1">Busca el archivo &quot;MTC_Calmar_el_Fuego_de_tu_Corazon_Veronica_Barraza.txt&quot; en tus descargas recientes.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setHasDownloaded(false)}
                      className="text-xs text-gold-light hover:text-white underline font-bold uppercase tracking-wider"
                    >
                      Descargar de nuevo
                    </button>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setReaderBookId('recetario-gratis');
                      setIsReaderOpen(true);
                      setReaderPage(0);
                    }}
                    className="self-center sm:self-start px-8 py-4 bg-[#dfc88a] text-[#4a0a15] hover:bg-opacity-95 font-semibold text-xs tracking-wider uppercase rounded-xl sm:rounded-full flex items-center justify-center space-x-2 transition duration-300"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Comenzar Lectura Online</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Second Free e-book box download row (Energy & 5 Elements) */}
        <div className="bg-gradient-to-r from-[#7a8c7e] to-sage-medium rounded-3xl p-8 sm:p-12 mb-20 text-white shadow-xl flex flex-col lg:flex-row items-center gap-12 border border-sage-light/25 shadow-md" id="free-book-row-second">
          {/* Cover image area */}
          <div className="w-full lg:w-1/3 flex justify-center" id="free-book-cover-wrapper-second">
            <div className="relative group">
              <div className="absolute inset-0 bg-gold-dark/30 rounded-2xl filter blur-md transform translate-x-3 translate-y-3 group-hover:blur-lg transition-all" />
              <div className="relative w-[220px] h-[310px] bg-[#0c1f28] rounded-2xl overflow-hidden shadow-2xl border border-gold-light/20 flex flex-col justify-between group-hover:scale-[1.02] transition-all duration-300">
                <img
                  src={coverImageSecond}
                  alt="Los 5 elementos en la Medicina China"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Details & Form area */}
          <div className="w-full lg:w-2/3 flex flex-col" id="free-book-details-wrapper-second">
            <div className="inline-flex items-center space-x-2 bg-gold-dark/20 text-gold-light border border-gold-light/20 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-max mb-6">
              <Star className="h-3.5 w-3.5 text-gold-light fill-gold-light" />
              <span>Guía básica de los 5 elementos · Descarga Gratuita</span>
            </div>

            <h3 className="text-2xl sm:text-3.5xl font-serif tracking-tight text-gold-cream mb-4 font-bold">
              {freeBookSecond.titulo}
            </h3>
            <p className="text-xs sm:text-sm text-gold-cream/80 leading-relaxed font-sans mb-6">
              {freeBookSecond.descripcion}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-black/20 p-4 rounded-xl border border-white/5">
              <div className="text-center md:text-left">
                <span className="text-[9px] text-gold-light/85 uppercase tracking-widest block">Páginas</span>
                <span className="text-sm font-semibold">{freeBookSecond.paginas} pág.</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-[9px] text-gold-light/85 uppercase tracking-widest block">Formato</span>
                <span className="text-sm font-semibold">{freeBookSecond.formato}</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-[9px] text-gold-light/85 uppercase tracking-widest block">Idioma</span>
                <span className="text-sm font-semibold">Castellano</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-[9px] text-gold-light/85 uppercase tracking-widest block">Lectura</span>
                <span className="text-sm font-semibold">Práctica e Ilustrada</span>
              </div>
            </div>

            {/* Email Form Trigger */}
            <div className="flex flex-col gap-4 w-full">
              {!hasDownloadedSecond ? (
                <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center w-full">
                  <form onSubmit={triggerEbookDownloadSecond} className="flex-grow flex flex-col sm:flex-row gap-3" id="free-book-download-form-second">
                    <input
                      type="email"
                      required
                      placeholder="Introduce tu correo personal..."
                      value={downloadEmailSecond}
                      onChange={(e) => setDownloadEmailSecond(e.target.value)}
                      className="flex-grow px-5 py-4 bg-white/10 text-white placeholder-gold-light/50 border border-white/10 focus:border-gold-light rounded-xl sm:rounded-full outline-hidden text-sm transition"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gold-dark hover:bg-gold-light text-amber-950 hover:text-amber-950 font-semibold text-xs tracking-wider uppercase rounded-xl sm:rounded-full flex items-center justify-center space-x-2 transition duration-300 shrink-0"
                    >
                      <Download className="h-4 w-4" />
                      <span>Descargar Libro</span>
                    </button>
                  </form>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setReaderBookId('energia-vital-gratis');
                      setIsReaderOpen(true);
                      setReaderPage(0);
                    }}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-gold-light text-gold-cream hover:text-white font-semibold text-xs tracking-wider uppercase rounded-xl sm:rounded-full flex items-center justify-center space-x-2 transition duration-300"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Leer Online Gratis</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="bg-sage-medium/20 border border-sage-light/20 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-serif font-medium text-gold-light flex items-center gap-2">
                        <Check className="h-5 w-5 text-gold-light bg-sage-dark rounded-full p-0.5" />
                        ¡Suscripción confirmada y descarga iniciada!
                      </h4>
                      <p className="text-xs text-gold-cream/70 mt-1">Busca el archivo &quot;MTC_Tu_Energia_Vital_y_los_5_Elementos_Veronica_Barraza.txt&quot; en tus descargas recientes.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setHasDownloadedSecond(false)}
                      className="text-xs text-gold-light hover:text-white underline font-bold uppercase tracking-wider"
                    >
                      Descargar de nuevo
                    </button>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setReaderBookId('energia-vital-gratis');
                      setIsReaderOpen(true);
                      setReaderPage(0);
                    }}
                    className="self-center sm:self-start px-8 py-4 bg-[#dfc88a] text-[#4a0a15] hover:bg-opacity-95 font-semibold text-xs tracking-wider uppercase rounded-xl sm:rounded-full flex items-center justify-center space-x-2 transition duration-300"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Comenzar Lectura Online</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Written books for sale section */}
        <div className="border-t border-earth-sand pt-20" id="paid-books-sale-box">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-14 text-center lg:text-left">
            <div>
              <span className="text-sm uppercase tracking-widest text-gold-dark font-semibold font-sans mb-1 block">Títulos Autorales</span>
              <h3 className="text-2xl sm:text-3xl font-serif text-sage-dark tracking-tight">Obras de Medicina y Crecimiento</h3>
            </div>
            <p className="max-w-md text-sm text-earth-clay">
              Cada volumen físico o digital incluye una cuidadosa maquetación con ilustraciones caligráficas exclusivas, pensadas para propiciar la meditación activa.
            </p>
          </div>

          {/* Paid books list */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" id="paid-books-store-grid">
            {paidBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-earth-sand shadow-lg flex flex-col md:flex-row items-center gap-8 self-start"
                id={`paid-book-card-${book.id}`}
              >
                {/* Book graphic 3D paperback representation */}
                <div className="relative group w-[160px] h-[230px] flex-shrink-0" id={`paid-book-cover-holder-${book.id}`}>
                  <div className="absolute inset-0 bg-gold-dark/10 rounded-lg filter blur-md transform translate-x-2 translate-y-2 group-hover:translate-x-3 transition-transform" />
                  {book.id === 'escuchando-el-alma' ? (
                    <img
                      src={escuchandoElAlmaCover}
                      alt={book.titulo}
                      className="relative w-full h-full rounded-lg overflow-hidden shadow-md object-cover"
                    />
                  ) : (
                  <div
                    className={`relative w-full h-full rounded-lg overflow-hidden shadow-md flex flex-col justify-between p-4 border-l-[10px] ${
                      book.id === 'escuchando-el-alma' ? 'bg-[#2c3a30] text-gold-cream border-amber-950' : 'bg-[#e2cdc6] text-earth-charcoal border-[#3d352e]'
                    }`}
                  >
                    <div>
                      <span className="text-[8px] font-cinzel block border-b border-white/10 pb-1 uppercase tracking-widest">Verónica Barraza</span>
                      <p className="text-sm font-serif font-bold tracking-tight mt-4 leading-snug">{book.titulo}</p>
                    </div>
                    <div className="flex justify-between items-end border-t border-white/10 pt-2">
                      <span className="text-[7px] uppercase tracking-wider">{book.formato}</span>
                      <Book className="h-4 w-4 opacity-50" />
                    </div>
                  </div>
                  )}
                </div>

                {/* Details layout */}
                <div className="flex-grow flex flex-col" id={`paid-book-details-holder-${book.id}`}>
                  <h4 className="text-lg font-serif text-sage-dark font-bold leading-tight">
                    {book.titulo}
                  </h4>
                  <span className="text-xs text-gold-dark italic mt-1 font-medium leading-tight">
                    {book.subtitulo}
                  </span>
                  {book.esProximamente && (
                    <div className="mt-2.5">
                      <span className="text-[10px] font-extrabold text-red-600 bg-red-50 border border-red-200 rounded-sm px-2 py-0.5 tracking-widest uppercase inline-block font-sans animate-pulse">
                        PRÓXIMAMENTE
                      </span>
                    </div>
                  )}
                  <p className="text-xs text-earth-charcoal/80 leading-relaxed font-sans mt-3 mb-6">
                    {book.descripcion}
                  </p>

                  <div className="flex items-center space-x-6 text-xs text-earth-clay border-t border-earth-sand/20 pt-4 mb-5">
                    <span><strong>Páginas:</strong> {book.paginas}</span>
                    <span><strong>Idioma:</strong> Español</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    {book.esProximamente ? (
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-[#897967] block">Lanzamiento</span>
                          <span className="text-sm font-black font-sans text-red-600 tracking-wider">PRÓXIMAMENTE</span>
                        </div>
                        <span className="px-4 py-2 bg-red-50 text-red-600/80 border border-red-200 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          Muy Pronto
                        </span>
                      </div>
                    ) : (
                      <>
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-[#897967] block">Precio Autora</span>
                          <span className="text-xl font-bold font-serif text-sage-dark">${book.precio} USD</span>
                        </div>

                        {book.enlaceCompra && book.enlaceCompra.startsWith('http') ? (
                          <a
                            href={book.enlaceCompra}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4.5 py-2.5 bg-sage-medium hover:bg-sage-dark text-gold-cream hover:text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 shadow-xs"
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                            <span>Comprar Obra</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() => startBookPurchase(book)}
                            className="px-4.5 py-2.5 bg-sage-medium hover:bg-sage-dark text-gold-cream hover:text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 shadow-xs"
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                            <span>Comprar Obra</span>
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simulated Purchase Process Modal Dialog */}
      <AnimatePresence>
        {activePurchaseBook && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-earth-sand/30"
              id="purchase-modal-dialog"
            >
              {/* Modal top header */}
              <div className="flex justify-between items-start border-b border-earth-sand/20 pb-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold-dark font-bold block">Adquirir Ejemplar</span>
                  <h4 className="text-lg font-serif text-sage-dark font-bold">{activePurchaseBook.titulo}</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePurchaseBook(null)}
                  className="text-earth-clay hover:text-sage-dark text-lg font-bold p-1 focus:outline-none"
                >
                  ✕
                </button>
              </div>

              {/* Steps display */}
              {purchaseStep === 'options' && (
                <div>
                  <p className="text-xs text-earth-charcoal leading-relaxed mb-6 font-sans">
                    Elige el formato preferido para interactuar con la obra. La opción física incluye dedicatoria manuscrita personalizada por la autora.
                  </p>

                  <div className="space-y-3 mb-6">
                    {/* Format Selector: Digital */}
                    <div
                      onClick={() => setPurchaseFormat('digital')}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${
                        purchaseFormat === 'digital'
                          ? 'border-gold-dark bg-gold-cream/40'
                          : 'border-earth-sand/30 hover:border-earth-sand bg-white'
                      }`}
                    >
                      <div>
                        <span className="text-sm font-semibold text-sage-dark font-sans block">Versión Digital (ePUB + PDF)</span>
                        <span className="text-[11px] text-[#897967]">Descarga automática e inmediata una vez completado.</span>
                      </div>
                      <span className="text-base font-bold font-serif text-sage-dark">${activePurchaseBook.precio}</span>
                    </div>

                    {/* Format Selector: Fisico */}
                    <div
                      onClick={() => setPurchaseFormat('fisico')}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${
                        purchaseFormat === 'fisico'
                          ? 'border-gold-dark bg-gold-cream/40'
                          : 'border-earth-sand/30 hover:border-earth-sand bg-white'
                      }`}
                    >
                      <div>
                        <span className="text-sm font-semibold text-sage-dark font-sans block">Libro Físico (Tapa Blanda Encolada)</span>
                        <span className="text-[11px] text-[#897967]">Envío certificado. Incluye dedicatoria autógrafa.</span>
                      </div>
                      <span className="text-base font-bold font-serif text-sage-dark">
                        ${(activePurchaseBook.precio + 4.90).toFixed(2)} <span className="text-[10px] text-[#897967] font-normal font-sans">(Envío +$4.90)</span>
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPurchaseStep('address')}
                    className="w-full py-3.5 bg-sage-dark hover:bg-sage-medium text-gold-cream font-semibold text-xs tracking-wider uppercase rounded-xl transition duration-300"
                  >
                    Continuar al Pago e Información
                  </button>
                </div>
              )}

              {purchaseStep === 'address' && (
                <form onSubmit={finishBookPurchase} className="space-y-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#897967] font-bold block mb-1">Nombre Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre completo..."
                      value={purchaserName}
                      onChange={(e) => setPurchaserName(e.target.value)}
                      className="w-full px-4 py-3 bg-earth-cream text-sm rounded-lg border border-earth-sand/60 focus:border-gold-dark outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#897967] font-bold block mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      placeholder="Para enviar el recibo u obra ePUB..."
                      value={purchaserEmail}
                      onChange={(e) => setPurchaserEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-earth-cream text-sm rounded-lg border border-earth-sand/60 focus:border-gold-dark outline-hidden"
                    />
                  </div>

                  {purchaseFormat === 'fisico' && (
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-[#897967] font-bold block mb-1">Dirección de Envío Postal</label>
                      <textarea
                        required
                        rows={2}
                        placeholder="Calle, Número, CP, Localidad, Provincia, País..."
                        value={purchaserAddress}
                        onChange={(e) => setPurchaserAddress(e.target.value)}
                        className="w-full px-4 py-3 bg-earth-cream text-sm rounded-lg border border-earth-sand/60 focus:border-gold-dark outline-hidden"
                      />
                    </div>
                  )}

                  {/* Trust alert */}
                  <div className="bg-sage-light/50 p-4 rounded-lg flex items-start space-x-2 border border-earth-sand/20">
                    <ShieldCheck className="h-5 w-5 text-gold-dark mt-0.5 flex-shrink-0" />
                    <p className="text-[11px] text-earth-charcoal leading-relaxed font-sans">
                      Pago procesado bajo encriptación SSL simulada. Ningún dato real de tarjeta es reclamado. Todo se guarda de forma segura en local.
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-earth-sand/20 mt-6">
                    <button
                      type="button"
                      onClick={() => setPurchaseStep('options')}
                      className="w-1/3 py-3 bg-earth-sand/40 hover:bg-earth-sand/70 text-earth-charcoal font-semibold text-xs tracking-wider uppercase rounded-xl transition"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3 bg-sage-medium hover:bg-sage-dark text-gold-cream font-semibold text-xs tracking-wider uppercase rounded-xl transition"
                    >
                      Confirmar Compra
                    </button>
                  </div>
                </form>
              )}

              {purchaseStep === 'success' && (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-sage-medium text-gold-cream rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-gold-light" />
                  </div>
                  <h4 className="text-xl font-serif text-sage-dark font-bold mb-2">¡Transacción Registrada con Éxito!</h4>
                  <p className="text-xs text-earth-charcoal/80 leading-relaxed font-sans max-w-sm mx-auto mb-6">
                    Agradecemos profundamente tu sintonía y apoyo a la sabiduría escrita de Verónica.
                    {purchaseFormat === 'digital'
                      ? ' Hemos enviado un correo simulado con el enlace de descarga ePUB a: '
                      : ' Tu ejemplar autografiado será empacado pacientemente para llegar pronto a: '}
                    <strong>{purchaserEmail}</strong>.
                  </p>
                  
                  <button
                    type="button"
                    onClick={() => setActivePurchaseBook(null)}
                    className="px-6 py-3 bg-sage-dark hover:bg-sage-medium text-gold-cream font-semibold text-xs tracking-wider uppercase rounded-xl transition"
                  >
                    Volver de nuevo
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* Interactive Ebook Reader Modal */}
        {isReaderOpen && (
          <div className="fixed inset-0 bg-[#061118]/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="bg-[#fafaf6] rounded-3xl max-w-5xl w-full shadow-2xl border border-gold-light/20 flex flex-col h-[92vh] sm:h-[85vh] relative overflow-hidden"
              id="ebook-reader-container"
            >
              {/* Header bar / Top Control bar */}
              <div className="bg-[#0c1f28] text-gold-cream px-5 py-4 flex items-center justify-between border-b border-gold-dark/20 z-20 shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="p-1.5 bg-gold-dark/20 text-gold-light rounded-lg border border-gold-dark/10">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-serif font-bold tracking-tight">
                      {readerBookId === 'recetario-gratis' ? 'Calmar el Fuego de tu Corazón' : 'Los 5 elementos en la Medicina China'}
                    </h4>
                    <p className="text-[10px] text-gold-cream/60 font-sans tracking-wide">Dra. Verónica Barraza · Lectura Interactiva Gratuita</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-[10px] sm:text-xs font-mono bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                    Página {readerPage + 1} de {readerBookId === 'recetario-gratis' ? 8 : 17}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsReaderOpen(false)}
                    className="p-1 rounded-full text-gold-cream/70 hover:text-white hover:bg-white/10 transition"
                    title="Cerrar Lector"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Main reading canvas content area */}
              <div className="flex-grow overflow-y-auto relative p-4 sm:p-8" id="ebook-slides-canvas">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={readerPage}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="h-full w-full"
                  >
                    {readerBookId !== 'none' ? (
                      <EbookReaderPages
                        readerBookId={readerBookId}
                        readerPage={readerPage}
                        coverImage={coverImage}
                        coverImageSecond={coverImageSecond}
                        avatar={avatar}
                      />
                    ) : (
                      <>
                        {/* SLIDE 0: Portada / Cover */}
                        {readerPage === 0 && (
                      <div className="h-full w-full bg-[#0c1f28] text-gold-cream rounded-2xl flex flex-col md:flex-row items-center justify-center gap-8 p-6 sm:p-12 relative overflow-hidden border border-gold-light/20 shadow-inner">
                        {/* Starry/glow decoration */}
                        <div className="absolute inset-x-0 top-0 bg-[radial-gradient(circle_at_center,rgba(223,200,138,0.08)_0%,transparent_70%)] h-full pointer-events-none" />
                        
                        {/* Realistic cover image display */}
                        <div className="relative w-[180px] h-[254px] sm:w-[220px] sm:h-[310px] rounded-xl overflow-hidden shadow-2xl border border-gold-dark/45 shrink-0">
                          <img
                            src={coverImage}
                            alt="Portada Calmar el Fuego de tu Corazón"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Welcoming introduction */}
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
                    )}

                    {/* SLIDE 1: ¿Qué es el Fuego del Corazón? */}
                    {readerPage === 1 && (
                      <div className="text-slate-800 space-y-6">
                        <div className="border-b border-earth-sand/30 pb-4 text-center">
                          <h2 className="text-2xl sm:text-3xl font-serif text-sage-dark font-extrabold tracking-tight uppercase leading-none">
                            ¿Qué es el Fuego del Corazón?
                          </h2>
                          <p className="text-xs italic text-[#897967] mt-1">El Desequilibrio que Arde en tu Interior</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                          {/* Left Column (Content) */}
                          <div className="md:col-span-8 space-y-4 text-sm leading-relaxed text-slate-700">
                            <h3 className="text-base font-serif font-bold text-gold-dark italic">
                              ¿Por qué tu corazón está en llamas?
                            </h3>
                            <p>
                              Son las 2 de la madrugada. Tu mente no para. El pecho aprieta. Sabes que deberías dormir, pero hay algo dentro de ti que no puede detenerse. Una lista de pendientes, una conversación que no terminó bien, un miedo que no tiene nombre pero que se siente en cada latido.
                            </p>
                            <div className="p-3 bg-gold-cream/40 rounded-xl border border-[#dfc88a]/30 font-serif italic text-[#4a0a15] text-center my-3">
                              Si reconoces esa sensación, este libro es para ti.
                            </div>
                            <p>
                              En mis quince años de práctica clínica, el exceso de Fuego en el Corazón es el desequilibrio más frecuente que veo — en ejecutivos, en madres, en jóvenes de veinte años y en personas de setenta. Es la enfermedad silenciosa de nuestro tiempo. La buena noticia: el cuerpo sabe cómo regularse. Solo necesita las herramientas correctas.
                            </p>
                          </div>

                          {/* Right Column (Focus Banner) */}
                          <div className="md:col-span-4 space-y-6">
                            {/* SVG Meditating Woman icon with green heart */}
                            <div className="bg-sage-light/30 border border-sage-medium/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center">
                              <svg viewBox="0 0 100 100" className="w-24 h-24 text-sage-dark mb-3">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                                {/* Human Silhouette sitting in Lotus pose */}
                                <path d="M50 25 C54 25, 54 17, 50 17 C46 17, 46 25, 50 25 Z" fill="currentColor" opacity="0.8" />
                                <path d="M50 27 C44 27, 41 33, 41 42 C41 51, 44 55, 41 68 C40 70, 31 71, 31 75 C31 82, 69 82, 69 75 C69 71, 60 70, 59 68 C56 55, 59 51, 59 42 C59 33, 56 27, 50 27 Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1" />
                                {/* Glowing Green Heart Node */}
                                <path d="M50 42 C48 39, 45 39, 45 42 C45 45, 50 49, 50 49 C50 49, 55 45, 55 42 C55 39, 52 39, 50 42 Z" fill="#2ecc71" className="animate-pulse" />
                                <circle cx="50" cy="43" r="5" fill="#2ece71" fillOpacity="0.4" className="animate-ping" />
                              </svg>
                              
                              <p className="text-xs text-sage-dark font-semibold font-serif leading-relaxed">
                                En la Medicina Tradicional China, lo que llamamos ansiedad o estrés crónico tiene un nombre muy preciso: <span className="text-[#4a0a15] font-bold">excesiva acumulación de Fuego en el Corazón</span>. Y tiene solución.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SLIDE 2: Sintomatología y Emperador */}
                    {readerPage === 2 && (
                      <div className="text-slate-800 space-y-5">
                        <div className="border-b border-earth-sand/30 pb-4 text-center">
                          <h2 className="text-2xl sm:text-3xl font-serif text-sage-dark font-extrabold tracking-tight uppercase leading-none">
                            El Fuego en tu Interior
                          </h2>
                          <p className="text-xs italic text-[#897967] mt-1">Síntomas y Fundamentos de la Alquimia Taoísta</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                          {/* Symptoms list */}
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
                              <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">•</span>
                                <strong>Dificultad para meditar</strong> o aquietar la conversación interna.
                              </li>
                            </ul>
                          </div>

                          {/* Medical/Yellow Emperor text */}
                          <div className="space-y-4 text-sm text-slate-755 leading-relaxed">
                            <p>
                              En la Medicina Tradicional China, el Corazón es mucho más que un órgano físico: es el <strong>&quot;Emperador&quot;</strong> de todos los órganos, el guardián del <strong>Shen</strong> (espíritu) y la sede de nuestra conciencia emocional.
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

                            <div className="text-xs bg-sage-medium/10 text-sage-dark p-3.5 rounded-lg border border-sage-medium/20 text-center font-bold font-sans">
                              El primer paso hacia la sanación es comprender qué está sucediendo en tu interior.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SLIDE 3: Técnica 1 (Shenmen 7C) */}
                    {readerPage === 3 && (
                      <div className="text-slate-800 space-y-4">
                        <div className="border-b border-earth-sand/30 pb-3 text-center">
                          <span className="text-[10px] uppercase tracking-widest text-gold-dark font-extrabold font-sans">TÉCNICA 1 DE 3</span>
                          <h2 className="text-2xl font-serif text-sage-dark font-extrabold tracking-tight">
                            Punto Sagrado Shenmen 7C
                          </h2>
                          <p className="text-xs italic text-[#4a0a15] font-serif">&quot;La Puerta del Espíritu&quot;</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                          {/* Left (Info and Location) */}
                          <div className="lg:col-span-4 space-y-4 text-xs sm:text-sm">
                            <p className="leading-relaxed">
                              El punto <strong>Shenmen</strong>, conocido como &quot;La Puerta del Espíritu&quot;, es uno de los portales más poderosos para calmar el fuego.
                            </p>
                            
                            <div className="bg-white p-3 rounded-xl border border-earth-sand/40 space-y-2">
                              <h4 className="font-serif font-bold text-sage-dark">Ubicación Exacta:</h4>
                              <p className="text-xs text-slate-700 leading-relaxed">
                                Se encuentra en el pliegue de la muñeca, en el lado del meñique, en una pequeña depresión entre el tendón y el hueso pisiforme.
                              </p>
                            </div>

                            {/* SVG Hands Wrist map */}
                            <div className="bg-[#fbfbf9] border border-[#dfc88a]/30 rounded-xl p-3 flex flex-col items-center">
                              <svg viewBox="0 0 100 80" className="w-full h-24 text-sage-dark">
                                {/* Diagram representing arms and wrists */}
                                <path d="M20 70 Q30 40 40 10 L50 10 Q45 40 35 70 Z" fill="currentColor" opacity="0.1" />
                                <path d="M80 70 Q70 40 60 10 L50 10 Q55 40 65 70 Z" fill="currentColor" opacity="0.15" />
                                {/* Hand details */}
                                <path d="M40 10 C42 4, 48 4, 50 10" stroke="currentColor" strokeWidth="1" fill="none" />
                                <path d="M38 12 C30 14, 28 30, 24 45" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
                                {/* Interactive Dot */}
                                <circle cx="43" cy="35" r="4.5" fill="#e67e22" className="animate-ping" style={{ animationDuration: '2s' }} />
                                <circle cx="43" cy="35" r="3.5" fill="#d35400" />
                                <text x="50" y="38" className="font-mono text-[7px] font-bold" fill="#4a0a15">C7 - Shenmen</text>
                              </svg>
                              <span className="text-[10px] text-slate-500">Estimulación táctil en el punto dorado</span>
                            </div>
                          </div>

                          {/* Right (Instructions and Benefits) */}
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
                                <li>Practica 2 o 3 veces al día, especialmente antes de acostarte.</li>
                              </ol>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-xs">
                              <div className="bg-sage-light/20 p-2.5 rounded-lg border border-sage-light">
                                <h5 className="font-bold text-sage-dark">Beneficio Directo:</h5>
                                <p className="text-slate-600 mt-1">Calma el insomnio y la aceleración mental.</p>
                              </div>
                              <div className="bg-sage-light/20 p-2.5 rounded-lg border border-sage-light">
                                <h5 className="font-bold text-sage-dark">Efecto Nervioso:</h5>
                                <p className="text-slate-600 mt-1">Equilibra las descargas del cortisol.</p>
                              </div>
                            </div>

                            {/* Clinical highlight box */}
                            <div className="bg-yellow-100/50 border-l-4 border-yellow-500 p-3 rounded-r-lg text-[11px] text-yellow-900 leading-relaxed font-sans">
                              <strong>Nota Clínica:</strong> Ensayos clínicos modernos demuestran que la acupresión continuada en el punto Shenmen reduce significativamente los niveles sistémicos de cortisol, induciendo un estado alfa en las ondas cerebrales.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SLIDE 4: Técnica 2 (Respiración 4-7-8) */}
                    {readerPage === 4 && (
                      <div className="text-slate-800 space-y-4">
                        <div className="border-b border-earth-sand/30 pb-3 text-center">
                          <span className="text-[10px] uppercase tracking-widest text-gold-dark font-extrabold font-sans">TÉCNICA 2 DE 3</span>
                          <h2 className="text-2xl font-serif text-sage-dark font-extrabold tracking-tight">
                            Respiración Alquímica 4-7-8
                          </h2>
                          <p className="text-xs italic text-[#4a0a15] font-serif">El Arte de apagar el fuego con la brisa</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                          {/* Instructions column */}
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
                              <li><strong>Repite el ciclo entero</strong> un total de 4 veces seguidas.</li>
                            </ol>
                          </div>

                          {/* Details and Science column */}
                          <div className="space-y-4">
                            <div className="bg-[#fbfbf9] p-4 rounded-xl border border-earth-sand/30 space-y-2">
                              <h4 className="text-xs uppercase tracking-widest text-[#897967] font-bold block">Cuándo Practicarla:</h4>
                              <p className="text-xs text-slate-700">Visualízala como tu caja de primeros auxilios ante insomnios de madrugada, ataques agudos de ansiedad o justo antes de una conversación estresante.</p>
                            </div>

                            <div className="bg-[#fbfbf9] p-4 rounded-xl border border-earth-sand/30 space-y-2">
                              <h4 className="text-xs uppercase tracking-widest text-sage-dark font-bold block">Acción Terapéutica:</h4>
                              <p className="text-xs text-slate-700">Enfría el Fuego del Corazón al inducir una estimulación estimable sobre el <strong>nervio vago</strong>, restableciendo la coherencia cardíaca y guiando el Qi de vuelta a su canal adecuado.</p>
                            </div>

                            <blockquote className="border-t border-b border-gold-dark/20 py-3 text-center italic text-xs font-serif text-[#4a0a15]">
                              &quot;El agua de la respiración consciente apaga el fuego de la mente agitada.&quot;
                            </blockquote>

                            <div className="bg-yellow-105/30 border border-yellow-500/20 p-3 rounded-lg text-[10px] text-slate-600 leading-normal">
                              <strong>Nota clínica:</strong> Practicar de forma metódica dos veces al día durante 21 días reprograma el umbral de reacción de tus glándulas suprarrenales al estrés exógeno.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SLIDE 5: Técnica 3 (Meditación del Agua) */}
                    {readerPage === 5 && (
                      <div className="text-slate-800 space-y-4">
                        <div className="border-b border-earth-sand/30 pb-3 text-center">
                          <span className="text-[10px] uppercase tracking-widest text-gold-dark font-extrabold font-sans">TÉCNICA 3 DE 3</span>
                          <h2 className="text-2xl font-serif text-sage-dark font-extrabold tracking-tight">
                            Meditación del Agua que Enfría el Fuego
                          </h2>
                          <p className="text-xs italic text-[#4a0a15] font-serif">Equilibrio Energético e Introspección Profunda</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                          {/* Inner instructions block (Left) */}
                          <div className="lg:col-span-6 space-y-4">
                            <div className="bg-white p-4 rounded-xl border border-earth-sand/40 space-y-2 text-xs">
                              <p className="leading-relaxed text-slate-750 font-sans">
                                Esta práctica meditativa de la tradición taoísta usa el poder creador de la mente para equilibrar el elemento <strong>Fuego</strong> del Corazón con el elemento <strong>Agua</strong> del Riñón.
                              </p>
                              <p className="font-bold text-gold-dark mt-1">Duración: 10 - 15 Minutos</p>
                              
                              <h4 className="text-xs uppercase tracking-widest text-[#897967] font-bold block pt-2">Para empezar:</h4>
                              <ol className="space-y-1.5 pl-3 list-decimal">
                                <li>Siéntate erguido con tus manos reposadas hacia el vientre.</li>
                                <li>Cierra los párpados de forma relajada e interioriza tu pulso.</li>
                                <li>Observa en calma tu pecho sin juzgar el cansancio o apuro.</li>
                              </ol>
                            </div>

                            <div className="bg-sage-light/20 p-4 border border-sage-light/50 rounded-xl text-xs text-slate-700 leading-relaxed font-sans">
                              <strong>Fundamento MTC:</strong> En la Medicina Oriental, el Riñón cobija el elemento Agua. La meditación sincrónica restablece el vínculo trans-meridiano Corazón-Riñón, aplacando la fatiga crónica y fortaleciendo el sistema endocrino.
                            </div>
                          </div>

                          {/* Visualization details (Right) */}
                          <div className="lg:col-span-6 space-y-3.5">
                            <div className="bg-[#fbfbf9] p-4 rounded-xl border border-earth-sand/30 space-y-2 text-xs">
                              <h4 className="text-xs uppercase tracking-widest text-gold-dark font-bold font-sans">
                                Visualización Guiada:
                              </h4>
                              <ol className="space-y-2 pl-4 list-decimal text-slate-700">
                                <li>Visualiza un lago prístino de aguas profundas, frescas y de color azul noche en tu interior.</li>
                                <li>Imagina que con cada inhalación, un hilo sanador de agua pura asciende desde tu coxis hacia tu pecho.</li>
                                <li>Siente cómo esa agua templada y pura envuelve amorosamente tu corazón, arrastrando el exceso de calor.</li>
                                <li>Al exhalar por la boca, imagina que liberas el fuego estancado en forma de vapor blanco evanescente.</li>
                                <li>Visualiza flores de loto blancas y fucsias flotando sobre un agua serena, reflejando tu Shen purificado.</li>
                              </ol>
                            </div>

                            <blockquote className="text-center italic font-serif text-slate-750 text-xs py-2 bg-earth-sand/15 rounded-lg border-l-4 border-sage-medium">
                              &quot;El agua es la más suave de todas las cosas, pero vence a la más dura.&quot;
                              <span className="block text-[10px] font-sans font-bold text-slate-500 uppercase tracking-widest not-italic mt-1">— Lao Tse</span>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SLIDE 6: Alimentos que Enfrían (Bonus) */}
                    {readerPage === 6 && (
                      <div className="text-slate-800 space-y-4">
                        <div className="border-b border-earth-sand/30 pb-3 text-center">
                          <span className="text-[10px] uppercase tracking-widest text-[#d35400] font-extrabold font-sans">ALQUIMIA NUTRICIONAL</span>
                          <h2 className="text-2xl font-serif text-sage-dark font-extrabold tracking-tight">
                            Bonus: 3 Alimentos Refrescantes
                          </h2>
                          <p className="text-xs italic text-[#897967]">La alimentación consciente como medicina del espíritu</p>
                        </div>

                        <p className="text-xs text-center text-slate-700 max-w-xl mx-auto">
                          La dietoterapia taoísta concibe los alimentos según su resonancia térmica y energética. Estos tres ingredientes alivian el exceso calórico acumulado en tus órganos vitales de inmediato.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* Alimento 1: Sandía */}
                          <div className="bg-white p-4.5 rounded-2xl border border-earth-sand/40 space-y-2 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="font-serif font-bold text-red-700">1. Sandía</h4>
                                <span className="text-[9px] bg-red-100 text-red-800 font-bold px-1.5 py-0.5 rounded-full uppercase">Frío</span>
                              </div>
                              <p className="text-[10px] text-slate-500 italic">Meridianos: Corazón, Estómago, Vejiga</p>
                              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                                Conocida como el &quot;Tigre Blanco&quot; por su asombrosa fuerza para extinguir sequedades y fiebres emocionales en segundos.
                              </p>
                            </div>
                            <div className="text-[10px] bg-red-50 text-red-900/90 p-2 rounded-lg mt-3">
                              <strong>Tip:</strong> Consúmela fresca entre horas. No olvides masticar la parte blanca cerca de la cáscara, sumamente medicinal.
                            </div>
                          </div>

                          {/* Alimento 2: Pepino */}
                          <div className="bg-white p-4.5 rounded-2xl border border-earth-sand/40 space-y-2 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="font-serif font-bold text-green-700">2. Pepino</h4>
                                <span className="text-[9px] bg-green-100 text-green-800 font-bold px-1.5 py-0.5 rounded-full uppercase">Cold</span>
                              </div>
                              <p className="text-[10px] text-slate-500 italic">Meridianos: Estómago, Intestino, Vejiga</p>
                              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                                Un milagro hídrico natural diseñado para humectar y desintoxicar las células, despidiendo la acidez y el agotamiento psicológico.
                              </p>
                            </div>
                            <div className="text-[10px] bg-green-50 text-green-900/90 p-2 rounded-lg mt-3">
                              <strong>Tip:</strong> Prepáralo crudo en ensaladas con hojas de menta o agrégalo en rodajas a tu botella de agua de diario.
                            </div>
                          </div>

                          {/* Alimento 3: Té de Crisantemo */}
                          <div className="bg-white p-4.5 rounded-2xl border border-earth-sand/40 space-y-2 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="font-serif font-bold text-yellow-700">3. Crisantemo</h4>
                                <span className="text-[9px] bg-yellow-101 text-yellow-800 font-bold px-1.5 py-0.5 rounded-full uppercase">Fresco</span>
                              </div>
                              <p className="text-[10px] text-slate-500 italic">Meridianos: Pulmón, Hígado</p>
                              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                                Flor solar sagrada que disuelve el calor del cráneo, calma los globos oculares fatigados e induce paz a la glándula pineal.
                              </p>
                            </div>
                            <div className="text-[10px] bg-yellow-50 text-yellow-904 p-2 rounded-lg mt-3 font-sans">
                              <strong>Tip:</strong> Infusiona 5 flores secas por taza. Endulza levemente con miel. Consúmelo tibio, nunca helado en la tarde.
                            </div>
                          </div>
                        </div>

                        <div className="text-center pt-2 italic text-xs font-serif text-[#897967] uppercase border-t border-earth-sand/20">
                          &quot;Que tu alimento sea tu medicina y tu medicina sea tu alimento&quot; — Hipócrates
                        </div>
                      </div>
                    )}

                    {/* SLIDE 7: Cierre / Gracias */}
                    {readerPage === 7 && (
                      <div className="h-full w-full bg-[#f8f5eb] text-slate-800 rounded-2xl flex flex-col justify-between items-center p-6 sm:p-12 border-2 border-gold-dark/30 shadow-md relative overflow-hidden text-center">
                        {/* Glow asset */}
                        <div className="absolute inset-0 bg-radial-at-t from-[#dfc88a]/35 via-transparent to-transparent pointer-events-none" />

                        {/* Top Author Portrait frame with live avatar */}
                        <div className="relative mt-2">
                          <div className="absolute inset-0 bg-gold-dark/30 rounded-full filter blur-md transform translate-y-1.5" />
                          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-purple-800 overflow-hidden shadow-lg p-[1px] bg-gradient-to-tr from-[#dfc88a] via-[#4a0a15] to-[#897967]">
                            <img
                              src={avatar}
                              alt="Verónica Barraza"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                          <div className="absolute bottom-1 right-1 bg-purple-900 border border-gold-light/40 text-gold-cream rounded-full p-1 shadow-sm">
                            <Star className="h-3.5 w-3.5 fill-gold-light text-gold-light" />
                          </div>
                        </div>

                        {/* Inner Thank Card */}
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
                            Si buscas guías personalizadas digitales, retiros o una consulta, escríbeme directamente con total confianza:
                          </p>
                          <a
                            href="mailto:hola@veronicabarrazamtc.com"
                            className="inline-block mt-1 text-xs text-purple-900 hover:text-purple-700 font-mono font-bold hover:underline transition"
                          >
                            hola@veronicabarrazamtc.com
                          </a>
                        </div>

                        {/* Bottom quote with gold ring ornament */}
                        <div className="border-t border-[#dfc88a]/30 pt-4 w-full max-w-xs mt-2 self-center">
                          <p className="font-serif italic text-sm text-[#4a0a15] font-bold">
                            &quot;Que el agua de la sabiduría apague el fuego de tu corazón&quot;
                          </p>
                        </div>
                      </div>
                    )}
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Footer Bar */}
              <div className="bg-earth-cream px-5 py-4 flex items-center justify-between border-t border-earth-sand/30 z-20 shrink-0">
                <button
                  type="button"
                  disabled={readerPage === 0}
                  onClick={() => setReaderPage(prev => Math.max(0, prev - 1))}
                  className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                    readerPage === 0
                      ? 'text-slate-300 pointer-events-none'
                      : 'bg-white hover:bg-gold-cream/40 text-sage-dark border border-earth-sand hover:border-gold-dark'
                  }`}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Anterior</span>
                </button>

                {/* Bullets indication bar */}
                <div className="hidden sm:flex items-center space-x-1.5 max-w-[50%] overflow-x-auto py-1 scrollbar-thin">
                  {Array.from({ length: readerBookId === 'recetario-gratis' ? 8 : 17 }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setReaderPage(idx)}
                      className={`h-2 text-[8px] flex items-center justify-center rounded-full transition-all duration-300 shrink-0 ${
                        readerPage === idx
                          ? 'w-4 h-2.5 bg-gold-dark text-white rounded-full'
                          : 'w-2 bg-earth-sand/65 hover:bg-gold-light'
                      }`}
                      title={`Ir a página ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  disabled={readerPage === (readerBookId === 'recetario-gratis' ? 7 : 16)}
                  onClick={() => setReaderPage(prev => Math.min(readerBookId === 'recetario-gratis' ? 7 : 16, prev + 1))}
                  className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                    readerPage === (readerBookId === 'recetario-gratis' ? 7 : 16)
                      ? 'text-slate-300 pointer-events-none'
                      : 'bg-sage-medium hover:bg-sage-dark text-gold-cream hover:text-white border border-sage-medium'
                  }`}
                >
                  <span>Siguiente</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
