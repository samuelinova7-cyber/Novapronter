import React from 'react';
import { Shield, Users, Wrench, Award, CheckCircle, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      title: 'Equipamentos de Última Geração',
      description: 'Trabalhamos exclusivamente com marcas consagradas, câmeras com visão noturna colorida, DVRs de alta performance e fechaduras biométricas testadas.',
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: 'Equipe Técnica Qualificada',
      description: 'Profissionais rigorosamente treinados, certificados e com experiência prática em instalações residenciais, comerciais e condomínios.',
    },
    {
      icon: <Wrench className="w-6 h-6 text-cyan-400" />,
      title: 'Suporte e Manutenção Ágil',
      description: 'Atendimento técnico com prontidão em Maceió e Região Metropolitana para garantir que sua proteção nunca fique desativada.',
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Soluções Integradas 360°',
      description: 'Desde o projeto de segurança perimetral até a portaria remota, controle de acesso e conservação de ambientes.',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Brand Card with Badge */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 border border-cyan-500/30 shadow-2xl">
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-cyan-500 text-slate-950 font-extrabold text-xs rounded-full uppercase tracking-wider shadow-lg">
                Excelência & Confiança
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-600/30">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Nova Pronter</h3>
                  <p className="text-xs text-cyan-400 font-medium tracking-wide">SEGURANÇA ELETRÔNICA</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Compromisso inegociável com a proteção da sua vida e do seu patrimônio. Atuamos com seriedade, tecnologia de ponta e ética profissional em todo o estado de Alagoas.
              </p>

              {/* Quick stats / Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="block font-display text-2xl font-extrabold text-cyan-400">24h/7</span>
                  <span className="text-xs text-slate-400 font-medium">Monitoramento Ativo</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="block font-display text-2xl font-extrabold text-emerald-400">100%</span>
                  <span className="text-xs text-slate-400 font-medium">Dedicação & Suporte</span>
                </div>
              </div>

              {/* Location Badge */}
              <div className="mt-6 flex items-center gap-2.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Atendimento presencial em <strong>{COMPANY_INFO.location.city} / {COMPANY_INFO.location.state}</strong> e Região.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
                Quem Somos
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2 leading-tight">
                Especialistas em Soluções Completas de Segurança e Vigilância
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              A <strong>Nova Pronter Segurança Eletrônica</strong> é especializada em soluções completas de segurança e vigilância. Com equipamentos de última geração e equipe técnica qualificada, oferecemos proteção 24 horas, controle de acesso e conservação para empresas, condomínios e residências.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-900 w-fit mb-3 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1.5">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

            {/* Direct CTA link */}
            <div className="pt-2">
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Conheça todas as nossas soluções em detalhes</span>
                <CheckCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
