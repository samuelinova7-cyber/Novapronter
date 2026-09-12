import React from 'react';
import { ShieldCheck, MessageSquare, ArrowRight, Eye, Wifi, Lock, Activity, CheckCircle2, Video } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/content';

export const Hero: React.FC = () => {
  const defaultWhatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.phones[0].raw,
    'Olá, Nova Pronter! Gostaria de falar com um especialista e solicitar um orçamento gratuito para meu imóvel.'
  );

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background High-Tech Grid & Lighting Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e90a_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e90a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      
      {/* Radial glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            {/* Live Operational Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 w-fit shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Central Operacional 24h Ativa • Maceió & Região</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Segurança Eletrônica <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Inteligente</span> e Monitoramento 24h
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Tecnologia de ponta, proteção contínua e tranquilidade total para você, sua família e seus negócios em Maceió e Região.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                id="hero-cta-orcamento"
                href="#orcamento"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Solicite seu Orçamento Gratuito</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </a>

              <a
                id="hero-cta-whatsapp"
                href={defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 font-bold text-base transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-current text-emerald-400" />
                <span>Falar com Especialista</span>
              </a>
            </div>

            {/* Key Trust Signals / Quick Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/60">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Equipamentos Homologados</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Visita Técnica em Maceió</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Acesso 100% no Smartphone</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tech Security Terminal / Visual Dashboard */}
          <div className="lg:col-span-5 relative">
            {/* Outer Decorative Tech Frame */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 border border-cyan-500/30 p-5 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl">
              
              {/* Header of the Security HUD */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">NOVA-PRONTER-HUB_v2.4</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>SISTEMA ONLINE</span>
                </div>
              </div>

              {/* Central Simulated CCTV Monitor Stream */}
              <div className="mt-4 relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 aspect-video flex flex-col justify-between p-3 group">
                {/* Visual Security Overlay Elements */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] font-mono text-cyan-300 border border-cyan-500/20">
                    <Video className="w-3.5 h-3.5 text-cyan-400" />
                    <span>CAM-01 [ENTRADA PRINCIPAL]</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-black/60 px-2 py-1 rounded">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span>GRAVANDO HD</span>
                  </div>
                </div>

                {/* Cyber Security Target Crosshairs and Radar Graphics */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                  <div className="w-40 h-40 rounded-full border border-cyan-500/40 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full border border-dashed border-cyan-400/60 animate-radar"></div>
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  {/* Cross lines */}
                  <div className="absolute w-48 h-px bg-cyan-500/20"></div>
                  <div className="absolute h-48 w-px bg-cyan-500/20"></div>
                </div>

                {/* Bottom HUD metadata */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 bg-black/70 backdrop-blur-md p-2 rounded-lg z-10 border border-slate-800">
                  <span className="text-cyan-400">FPS: 60 | 4K HDR</span>
                  <span>MACEIÓ-AL (SETOR NORTE)</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Wifi className="w-3 h-3" /> 100% SINAL
                  </span>
                </div>
              </div>

              {/* Status Modules Grid */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Proteção Perimetral</p>
                    <p className="text-xs font-bold text-white">Alarme Armado</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Controle de Portaria</p>
                    <p className="text-xs font-bold text-white">Acesso Monitorado</p>
                  </div>
                </div>
              </div>

              {/* Live Alert bar */}
              <div className="mt-3 p-2.5 rounded-lg bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-between text-xs">
                <span className="text-slate-300 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  Visualização no Celular via App
                </span>
                <span className="font-semibold text-cyan-300">Tempo Real</span>
              </div>
            </div>

            {/* Floating Badge (Emergency response) */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 p-3.5 rounded-xl bg-slate-900/95 border border-emerald-500/40 shadow-xl backdrop-blur-md flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium">Prontidão Técnica</p>
                <p className="text-xs font-extrabold text-emerald-400">Atendimento 24h / 7 Dias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
