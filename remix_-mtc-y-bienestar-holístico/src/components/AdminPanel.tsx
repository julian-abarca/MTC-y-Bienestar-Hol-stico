/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Inbox, Users, BookOpen, Trash2, CheckCircle, AlertCircle, Heart, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ConsultaContacto, SuscriptorBoletin } from '../types';

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'consultas' | 'suscriptores' | 'ventas'>('consultas');
  const [consultas, setConsultas] = useState<ConsultaContacto[]>([]);
  const [suscriptores, setSuscriptores] = useState<SuscriptorBoletin[]>([]);
  const [compras, setCompras] = useState<any[]>([]);

  const loadData = () => {
    try {
      const c = localStorage.getItem('mtc_consultas');
      setConsultas(c ? JSON.parse(c) : []);

      const s = localStorage.getItem('mtc_suscriptores');
      setSuscriptores(s ? JSON.parse(s) : []);

      const v = localStorage.getItem('mtc_compras');
      setCompras(v ? JSON.parse(v) : []);
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  };

  useEffect(() => {
    loadData();
    // Re-load when custom storage signals hit the window
    window.addEventListener('local_db_updated', loadData);
    return () => window.removeEventListener('local_db_updated', loadData);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) loadData();
  };

  const handleMarkProcessed = (id: string) => {
    try {
      const updated = consultas.map(item => {
        if (item.id === id) return { ...item, procesada: !item.procesada };
        return item;
      });
      localStorage.setItem('mtc_consultas', JSON.stringify(updated));
      setConsultas(updated);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteConsulta = (id: string) => {
    try {
      const filtered = consultas.filter(item => item.id !== id);
      localStorage.setItem('mtc_consultas', JSON.stringify(filtered));
      setConsultas(filtered);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteSuscriptor = (id: string) => {
    try {
      const filtered = suscriptores.filter(item => item.id !== id);
      localStorage.setItem('mtc_suscriptores', JSON.stringify(filtered));
      setSuscriptores(filtered);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCompra = (id: string) => {
    try {
      const filtered = compras.filter(item => item.id !== id);
      localStorage.setItem('mtc_compras', JSON.stringify(filtered));
      setCompras(filtered);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Floating admin launcher in bottom margin */}
      <div className="fixed bottom-6 right-6 z-40" id="admin-launcher-container">
        <button
          type="button"
          onClick={handleToggle}
          className="bg-gold-dark hover:bg-sage-dark text-white rounded-full p-4 shadow-xl border border-gold-light/20 flex items-center space-x-2 transition cursor-pointer active:scale-95 group"
          title="Buzón Holístico de Dra. Verónica"
          id="admin-dashboard-trigger"
        >
          <Inbox className="h-5 w-5 text-gold-cream animate-pulse group-hover:rotate-12" />
          <span className="text-[10px] uppercase tracking-widest font-bold pr-1 text-gold-cream">
            Buzón ({consultas.length + suscriptores.length + compras.length})
          </span>
        </button>
      </div>

      {/* Admin Panel Drawer Modal overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl border border-earth-sand/40 p-6 sm:p-8 w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
              id="admin-mailbox-drawer"
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b border-earth-sand/20 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-serif text-sage-dark font-bold flex items-center gap-2">
                    <Inbox className="text-gold-dark" />
                    <span>BUZÓN</span>
                  </h3>
                  <p className="text-xs text-[#897967] font-sans">
                    Administra solicitudes de consultas, descargas gratuitas de e-book y compras
                  </p>
                </div>
                <button
                  type="button"
                  className="p-1 px-3 bg-earth-sand/40 hover:bg-earth-sand text-earth-charcoal rounded-lg font-bold text-xs uppercase"
                  onClick={handleToggle}
                >
                  Cerrar
                </button>
              </div>

              {/* Sub navbar folders */}
              <div className="flex border-b border-earth-sand/10 mb-6 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('consultas')}
                  className={`pb-3 px-4 text-xs font-semibold uppercase tracking-widest flex items-center gap-2 transition focus:outline-none border-b-2 ${
                    activeTab === 'consultas'
                      ? 'border-gold-dark text-sage-dark'
                      : 'border-transparent text-earth-clay hover:text-sage-dark'
                  }`}
                >
                  <Users className="h-4 w-4" />
                  <span>Consultas ({consultas.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('suscriptores')}
                  className={`pb-3 px-4 text-xs font-semibold uppercase tracking-widest flex items-center gap-2 transition focus:outline-none border-b-2 ${
                    activeTab === 'suscriptores'
                      ? 'border-gold-dark text-sage-dark'
                      : 'border-transparent text-earth-clay hover:text-sage-dark'
                  }`}
                >
                  <Download className="h-4 w-4" />
                  <span>Suscripciones ({suscriptores.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('ventas')}
                  className={`pb-3 px-4 text-xs font-semibold uppercase tracking-widest flex items-center gap-2 transition focus:outline-none border-b-2 ${
                    activeTab === 'ventas'
                      ? 'border-gold-dark text-sage-dark'
                      : 'border-transparent text-earth-clay hover:text-sage-dark'
                  }`}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Libros Vendidos ({compras.length})</span>
                </button>
              </div>

              {/* Content body with custom tables */}
              <div className="flex-grow overflow-y-auto min-h-[300px]">
                {activeTab === 'consultas' && (
                  <div className="space-y-4">
                    {consultas.length === 0 ? (
                      <div className="text-center py-12 text-earth-clay">
                        <Users className="h-12 w-12 text-earth-sand mx-auto mb-4" />
                        <p className="text-sm font-medium">No se han recibido consultas personalizadas.</p>
                        <p className="text-xs">Usa el formulario de la web para simular tus envíos.</p>
                      </div>
                    ) : (
                      <div className="grid gap-4">
                        {consultas.map((item) => (
                          <div
                            key={item.id}
                            className={`p-4 rounded-xl border transition ${
                              item.procesada ? 'bg-sage-light/20 border-sage-medium/30' : 'bg-gold-cream/30 border-gold-dark/20'
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-2">
                              <div>
                                <h4 className="text-sm font-semibold text-sage-dark">{item.nombre}</h4>
                                <p className="text-xs text-earth-clay">{item.email} {item.telefono && `· tel: ${item.telefono}`}</p>
                              </div>
                              <span className="text-[10px] text-[#897967] font-semibold">
                                {new Date(item.fechaCreacion).toLocaleDateString()} · {new Date(item.fechaCreacion).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 bg-white/70 p-2.5 rounded-lg border border-earth-sand/20 mb-3 text-xs">
                              <div>
                                <span className="text-[9px] text-[#897967] uppercase block">Servicio Solicitado</span>
                                <strong className="text-sage-dark">
                                  {item.tipoServicio === 'coaching-espiritual' && 'Coaching Espiritual Taoísta'}
                                  {item.tipoServicio === 'armonizacion-mtc' && 'Armonización Energética y MTC'}
                                  {item.tipoServicio === 'taller-cinco-elementos' && 'Taller Estacional'}
                                  {item.tipoServicio === 'retiro-alquimia-silencio' && 'Retiro de Alquimia'}
                                  {item.tipoServicio === 'consulta-general' && 'Consulta General MTC'}
                                </strong>
                              </div>
                              <div>
                                <span className="text-[9px] text-[#897967] uppercase block">Enfoque Energético</span>
                                <span className="font-semibold text-amber-950">{item.energiaPreferencia || 'Cinco Elementos'}</span>
                              </div>
                            </div>

                            <p className="text-xs text-earth-charcoal leading-relaxed bg-white/40 p-2.5 rounded-lg border border-earth-sand/10 italic">
                              &ldquo;{item.motivoConsulta}&rdquo;
                            </p>

                            {/* Actions toolbar */}
                            <div className="flex items-center justify-end gap-3 mt-4 border-t border-earth-sand/10 pt-3">
                              <button
                                type="button"
                                onClick={() => handleMarkProcessed(item.id)}
                                className={`text-[10px] uppercase font-bold tracking-wider py-1 px-3.5 rounded-full flex items-center gap-1.5 cursor-pointer ${
                                  item.procesada ? 'bg-sage-medium text-white' : 'bg-[#fbf5e6] text-[#b8972e] border border-[#dfc88a]/30'
                                }`}
                              >
                                <CheckCircle className="h-3.5 w-3.5" />
                                <span>{item.procesada ? 'Contestado' : 'Marcar Leído'}</span>
                              </button>

                              <button
                                type="button"
                                onClick={() => handleDeleteConsulta(item.id)}
                                className="text-xs text-red-600 hover:text-white p-1 hover:bg-red-600 rounded-lg transition cursor-pointer"
                                title="Eliminar registro"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'suscriptores' && (
                  <div className="space-y-4">
                    {suscriptores.length === 0 ? (
                      <div className="text-center py-12 text-earth-clay">
                        <Download className="h-12 w-12 text-earth-sand mx-auto mb-4" />
                        <p className="text-sm font-medium">No hay suscriptores de Newsletter / Ebook.</p>
                      </div>
                    ) : (
                      <div className="bg-white/40 rounded-xl border border-earth-sand/20 overflow-hidden">
                        <table className="w-full text-left text-xs font-sans">
                          <thead className="bg-[#fbf5e6]/50 text-[#897967] text-[10px] uppercase tracking-widest border-b border-earth-sand/20">
                            <tr>
                              <th className="p-4">Email</th>
                              <th className="p-4">Fecha Sintonía</th>
                              <th className="p-4 text-right">Acciones</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-earth-sand/10">
                            {suscriptores.map((sub) => (
                              <tr key={sub.id} className="hover:bg-gold-cream/10">
                                <td className="p-4 font-semibold text-sage-dark">{sub.email}</td>
                                <td className="p-4 text-earth-clay">{new Date(sub.fechaRegistro).toLocaleDateString()}</td>
                                <td className="p-4 text-right">
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteSuscriptor(sub.id)}
                                    className="p-1.5 text-red-600 hover:bg-red-100 rounded-lg transition"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'ventas' && (
                  <div className="space-y-4">
                    {compras.length === 0 ? (
                      <div className="text-center py-12 text-earth-clay">
                        <BookOpen className="h-12 w-12 text-earth-sand mx-auto mb-4" />
                        <p className="text-sm font-medium">Buzón de compras vacío.</p>
                        <p className="text-xs">Usa el botón &quot;Comprar&quot; de cualquiera de los libros pagos.</p>
                      </div>
                    ) : (
                      <div className="bg-white/40 rounded-xl border border-earth-sand/20 overflow-hidden">
                        <table className="w-full text-left text-xs font-sans">
                          <thead className="bg-[#fbf5e6]/50 text-[#897967] text-[10px] uppercase tracking-widest border-b border-earth-sand/20">
                            <tr>
                              <th className="p-4">Cliente</th>
                              <th className="p-4">Libro</th>
                              <th className="p-4">Formato</th>
                              <th className="p-4">Dirección / Recibo</th>
                              <th className="p-4">Precio</th>
                              <th className="p-4 text-right">Acción</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-earth-sand/10">
                            {compras.map((item) => (
                              <tr key={item.id} className="hover:bg-gold-cream/10">
                                <td className="p-4">
                                  <div className="font-semibold text-sage-dark">{item.nombre}</div>
                                  <div className="text-[10px] text-earth-clay">{item.email}</div>
                                </td>
                                <td className="p-4 font-serif text-amber-950 font-medium">{item.libroTitulo}</td>
                                <td className="p-4">
                                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                                    item.formato === 'fisico' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                                  }`}>
                                    {item.formato}
                                  </span>
                                </td>
                                <td className="p-4 text-[#897967] text-[11px] max-w-[200px] truncate" title={item.direccion}>
                                  {item.direccion}
                                </td>
                                <td className="p-4 font-bold text-sage-dark">${item.precio}</td>
                                <td className="p-4 text-right">
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteCompra(item.id)}
                                    className="p-1.5 text-red-600 hover:bg-red-100 rounded-lg transition"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Modal footer status banner */}
              <div className="border-t border-earth-sand/20 pt-4 mt-6 flex justify-between items-center text-[10px] text-[#897967]">
                <span className="flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5 text-gold-dark fill-gold-light" />
                  <span>Sintonizado con el Dao local del navegador</span>
                </span>
                <span>Armonía MTC Dashboard v1.0</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
