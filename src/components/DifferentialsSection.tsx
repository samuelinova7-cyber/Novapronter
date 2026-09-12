import React, { useState } from 'react';
import { ShieldCheck, Zap, Smartphone, Settings2, CheckCircle2, ArrowRight, Home, Building, Building2 } from 'lucide-react';
import { DIFFERENTIALS_DATA, SEGMENTS_DATA, COMPANY_INFO, buildWhatsAppUrl } from '../data/content';

export const DifferentialsSection: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>('condominio');

  const getDifferentialIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-8 h-8 text-cyan-400" />;
      case 'Settings2':
        return <Settings2 className="w-8 h-8 text-cyan-400" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-cyan-400" />;
    }
  };

  const getSegmentIcon = (id: string) => {
    switch (id) {
      case 'residencial':
        return <Home className="w-5 h-5" />;
      case 'comercial':
        return <Building className="w-5 h-5" />;
      case 'condominio':
        return <Building2 className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  const activeSegmentData = SEGMENTS_DATA.find((s) => s.id === selectedSegment) || SEGMENTS_DATA[0];

  return (
    <section id="diferenciais" className="py-24 bg-slate-900/40 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
            Por que escolher a Nova Pronter?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Diferenciais que Fazem a Nossa Segurança Superior
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Mais que equipamentos, entregamos um ecossistema completo de proteção e resposta rápida para você não se preocupar com nada.
          </p>
        </div>

        {/* 4 Main Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {DIFFERENTIALS_DATA.map((diff, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center mb-5 group-hover:border-cyan-400 group-hover:scale-105 transition-all shadow-inner">
                  {getDifferentialIcon(diff.iconName)}
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {diff.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-semibold text-cyan-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {diff.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Segment Showcase: Soluções Sob Medida */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Soluções Sob Medida
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              Segurança adaptada para o seu tipo de imóvel
            </h3>
          </div>

          {/* Segment Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {SEGMENTS_DATA.map((segment) => {
              const isSelected = selectedSegment === segment.id;
              return (
                <button
                  key={segment.id}
                  onClick={() => setSelectedSegment(segment.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                      : 'bg-slate-950/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {getSegmentIcon(segment.id)}
                  <span>{segment.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Segment Detail Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/70 rounded-2xl p-6 sm:p-8 border border-slate-800">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold">
                {activeSegmentData.badge}
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                {activeSegmentData.name}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeSegmentData.description}
              </p>

              {/* Key Benefits */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Principais Vantagens:
                </p>
                {activeSegmentData.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4 bg-slate-900/90 p-5 rounded-xl border border-slate-800/80">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Serviços Recomendados para {activeSegmentData.name}:
              </p>
              <div className="space-y-2">
                {activeSegmentData.recommendedServices.map((srv, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs sm:text-sm text-slate-200 flex items-center justify-between"
                  >
                    <span>{srv}</span>
                    <span className="text-[11px] font-semibold text-cyan-400">Incluso no Projeto</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl(
                    COMPANY_INFO.phones[0].raw,
                    `Olá! Gostaria de um orçamento personalizado para *${activeSegmentData.name}*.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>Solicitar Orçamento para {activeSegmentData.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
