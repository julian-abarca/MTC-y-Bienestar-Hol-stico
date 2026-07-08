/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BIO_DATA } from '../data';
import { useAvatar } from '../hooks/useAvatar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { avatar } = useAvatar();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#bio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Mis Libros', href: '#libros' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-earth-cream/90 backdrop-blur-md shadow-md py-4 border-b border-earth-sand/30'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="flex items-center space-x-3 group"
              id="header-logo"
            >
              <div className="relative">
                <div className="p-[2px] bg-gradient-to-tr from-gold-light to-sage-medium rounded-full transition-all duration-300 group-hover:scale-[1.05] w-10 h-10 flex items-center justify-center overflow-hidden shadow-xs">
                  <img
                    src={avatar}
                    alt="Dra. Verónica logo de perfil"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 p-0.5 bg-gold-dark text-white rounded-full border border-white shadow-xs">
                  <Leaf className="h-2.5 w-2.5" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-base tracking-wider font-semibold text-sage-dark leading-tight">
                  VERÓNICA BARRAZA
                </span>
                <span className="text-[9px] uppercase tracking-widest text-gold-dark font-sans font-bold leading-none mt-0.5">
                  Bienestar MTC & Alquimia
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-sm font-medium text-earth-charcoal/80 hover:text-sage-dark transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-dark transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center" id="header-cta-container">
              <a
                href="#contacto"
                onClick={(e) => handleLinkClick(e, '#contacto')}
                className="inline-flex items-center space-x-2 bg-sage-medium text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-sage-dark active:scale-[0.98] transition-all duration-300 shadow-sm border border-sage-medium hover:border-gold-light"
                id="header-cta"
              >
                <Calendar className="h-4 w-4 text-gold-light" />
                <span className="text-gold-cream font-medium">Consulta Gratuita</span>
              </a>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-sage-dark p-1 focus:outline-none"
                aria-expanded={isOpen}
                id="mobile-menu-btn"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 md:hidden bg-earth-cream"
            id="mobile-drawer"
          >
            <div className="px-6 py-8 space-y-4 shadow-inner border-t border-earth-sand">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block text-lg font-medium text-sage-dark hover:text-gold-dark border-b border-earth-sand/30 pb-3"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6">
                <a
                  href="#contacto"
                  onClick={(e) => handleLinkClick(e, '#contacto')}
                  className="w-full flex items-center justify-center space-x-2 bg-sage-medium text-white py-3 rounded-full text-sm font-semibold uppercase tracking-wider"
                >
                  <Calendar className="h-5 w-5 text-gold-light" />
                  <span className="text-gold-cream">Agenda tu Consulta</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
