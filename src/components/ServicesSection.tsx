import React, { useState } from 'react';
import { Camera, Building2, DoorClosed, BellRing, MonitorCheck, Sparkles, CheckCircle2, ChevronRight, MessageSquare, Plus } from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA, COMPANY_INFO, buildWhatsAppUrl } from '../data/content';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onSelectServiceForForm: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForForm }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-6 h-6 text-cyan-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-cyan-400" />;
      case 'DoorClosed':
        return <DoorClosed className="w-6 h-6 text-cyan-400" />;
      case 'BellRing':
        return <BellRing className="w-6 h-6 text-cyan-400" />;
      case 'MonitorCheck':
        return <MonitorCheck className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      default:
        return <Camera className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle tech background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <span>Soluções Completas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Nossos Serviços & Soluções em Segurança
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Projetos sob medida com tecnologia de última geração para proteger seu patrimônio com máxima eficiência em Maceió e Região.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const whatsappUrl = buildWhatsAppUrl(
              COMPANY_INFO.phones[0].raw,
              `Olá! Gostaria de informações e orçamento sobre o serviço de *${service.title}*.`
            );

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 hover:-translate-y-1 ${
                  service.popular
                    ? 'border-cyan-500/50 shadow-xl shadow-cyan-950/40'
                    : 'border-slate-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-950/20'
                }`}
              >
                {/* Popular / Highlight Badge */}
                {service.badge && (
                  <div className="absolute -top-3 right-6">
                    <span className="px-3 py-1 text-[11px] font-extrabold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 uppercase tracking-wider shadow-md">
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Icon & Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:scale-105 transition-all shadow-inner">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-cyan-400 uppercase tracking-wider block">
                        {service.subtitle}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullets directly from user prompt */}
                  <div className="space-y-2.5 mb-6 pt-2 border-t border-slate-800/80">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 text-xs font-semibold hover:border-cyan-500/40 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Detalhes</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-md shadow-emerald-500/20 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Orçamento</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Consultation */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-lg sm:text-xl text-white">
              Precisa de um projeto personalizado para seu condomínio ou empresa?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nossa equipe técnica realiza a visita e diagnóstico no local sem nenhum custo.
            </p>
          </div>
          <a
            href="#orcamento"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-md transition-all"
          >
            <span>Solicitar Avaliação Técnica</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalService && (
        <ServiceModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onSelectForQuote={(title) => {
            onSelectServiceForForm(title);
            setActiveModalService(null);
          }}
        />
      )}
    </section>
  );
};
