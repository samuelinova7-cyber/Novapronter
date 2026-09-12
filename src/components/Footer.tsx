import React from 'react';
import { Shield, Phone, Instagram, MapPin, MessageSquare, Mail, Clock, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, buildWhatsAppUrl } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-slate-950 border-t border-slate-800 relative pt-16 pb-12 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 p-0.5 shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                NOVA <span className="text-cyan-400">PRONTER</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Segurança Eletrônica Inteligente e Monitoramento 24h para sua Empresa ou Residência. Protegendo famílias, comércios e condomínios com tecnologia de ponta.
            </p>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-pink-400 transition-all group"
              >
                <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                <span>{COMPANY_INFO.instagram.handle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Nossos Serviços
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#servicos"
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details & Telephones */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Canais de Atendimento
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              {/* Telephones / WhatsApp */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="font-bold text-cyan-400 block text-[11px] uppercase tracking-wider">
                  Telefones / WhatsApp
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {COMPANY_INFO.phones.map((p, idx) => (
                    <a
                      key={idx}
                      href={buildWhatsAppUrl(p.raw, 'Olá! Gostaria de atendimento da Nova Pronter.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-400 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 fill-current" />
                      <div>
                        <span className="font-bold block font-mono">{p.number}</span>
                        <span className="text-[10px] text-slate-500">{p.label}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location / Coverage */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Área de Atendimento:</span>
                  <p className="text-slate-400 text-[11px] mt-0.5 leading-normal">
                    {COMPANY_INFO.location.coverage}
                  </p>
                </div>
              </div>

              {/* Hours / 24h Central */}
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Central de Monitoramento: Operação 24 Horas / 7 Dias</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © {COMPANY_INFO.year} {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a href="#inicio" className="hover:text-cyan-400 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre Nós</a>
            <a href="#servicos" className="hover:text-cyan-400 transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-cyan-400 transition-colors">Diferenciais</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
