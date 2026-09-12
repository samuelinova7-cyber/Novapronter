import React from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight, Shield } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/content';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSelectForQuote }) => {
  if (!service) return null;

  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.phones[0].raw,
    `Olá, Nova Pronter! Gostaria de um orçamento detalhado sobre o serviço de *${service.title}*.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 p-6 sm:p-8 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400">
            <Shield className="w-7 h-7" />
          </div>
          <div>
            {service.badge && (
              <span className="inline-block px-2.5 py-0.5 mb-1.5 text-[11px] font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
                {service.badge}
              </span>
            )}
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
              {service.title}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">{service.subtitle}</p>
          </div>
        </div>

        {/* Main description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Highlights from prompt */}
        <div className="mb-6 space-y-2.5">
          <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            O que está incluso nesta solução:
          </h4>
          <div className="space-y-2">
            {service.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical specs / features */}
        <div className="mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
            Diferenciais Técnicos
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Pedir Orçamento no WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onSelectForQuote(service.title);
              onClose();
              const formEl = document.getElementById('orcamento');
              if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold text-sm transition-all"
          >
            <span>Preencher Formulário</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
