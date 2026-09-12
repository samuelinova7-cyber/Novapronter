import React, { useState } from 'react';
import { MessageSquare, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { title: 'Solicitar Orçamento Gratuito', text: 'Olá! Gostaria de solicitar um orçamento gratuito para meu imóvel.' },
    { title: 'CFTV & Câmeras no Celular', text: 'Olá! Gostaria de informações sobre instalação de câmeras de segurança.' },
    { title: 'Portaria Remota para Condomínio', text: 'Olá! Gostaria de saber mais sobre portaria remota e redução de custos.' },
    { title: 'Alarmes e Cercas Elétricas', text: 'Olá! Gostaria de um orçamento para alarme e proteção perimetral.' },
  ];

  return (
    <div id="floating-whatsapp-widget" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-slate-900 border border-emerald-500/40 shadow-2xl shadow-emerald-950/40 overflow-hidden animate-fade-in text-left">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Nova Pronter Segurança</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  Central de Atendimento 24h
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-black/20 text-white transition-colors"
              aria-label="Fechar popup WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-950/90 space-y-3">
            <p className="text-xs text-slate-300">
              Olá! Como podemos ajudar você hoje? Escolha um assunto para iniciar o atendimento direto:
            </p>

            {/* Quick action buttons */}
            <div className="space-y-1.5">
              {quickMessages.map((item, idx) => (
                <a
                  key={idx}
                  href={buildWhatsAppUrl(COMPANY_INFO.phones[0].raw, item.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 text-xs text-slate-200 hover:text-emerald-400 transition-all group"
                >
                  <span>{item.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>

            {/* Phone Selector buttons */}
            <div className="pt-2 border-t border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">
                Escolha o canal de preferência:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {COMPANY_INFO.phones.map((p, idx) => (
                  <a
                    key={idx}
                    href={buildWhatsAppUrl(p.raw, 'Olá, Nova Pronter! Gostaria de atendimento.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all text-center"
                  >
                    {p.number.split(' ')[1] || p.number}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2.5 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Abrir WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-slate-950"></span>
        </span>
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline-block text-xs uppercase tracking-wider font-bold">
          {isOpen ? 'Fechar' : 'WhatsApp'}
        </span>
      </button>
    </div>
  );
};
