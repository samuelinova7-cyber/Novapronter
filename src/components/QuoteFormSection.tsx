import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, ShieldCheck, CheckCircle2, PhoneCall, Sparkles, MapPin } from 'lucide-react';
import { QuoteFormData } from '../types';
import { COMPANY_INFO, SERVICES_DATA, buildWhatsAppUrl } from '../data/content';

interface QuoteFormSectionProps {
  preselectedService?: string;
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'Residencial',
    selectedServices: [],
    neighborhood: '',
    message: '',
  });

  const [selectedPhoneIndex, setSelectedPhoneIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService && !formData.selectedServices.includes(preselectedService)) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: [...prev.selectedServices, preselectedService],
      }));
    }
  }, [preselectedService]);

  const toggleService = (title: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(title);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== title)
          : [...prev.selectedServices, title],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const chosenPhone = COMPANY_INFO.phones[selectedPhoneIndex].raw;
    const servicesText = formData.selectedServices.length > 0
      ? formData.selectedServices.join(', ')
      : 'Avaliação Geral de Segurança';

    const formattedMessage = `*NOVA SOLICITAÇÃO DE ORÇAMENTO - SITE NOVA PRONTER*
━━━━━━━━━━━━━━━━━━━━
👤 *Nome:* ${formData.fullName || 'Não informado'}
📱 *WhatsApp/Tel:* ${formData.phone || 'Não informado'}
✉️ *E-mail:* ${formData.email || 'Não informado'}
🏢 *Tipo de Imóvel:* ${formData.propertyType}
📍 *Bairro/Local:* ${formData.neighborhood || 'Maceió/Região'}
🛠️ *Serviço(s) de Interesse:* ${servicesText}
📝 *Mensagem/Observação:* ${formData.message || 'Gostaria de agendar uma visita/orçamento gratuito.'}
━━━━━━━━━━━━━━━━━━━━
Origem: Site Oficial Nova Pronter`;

    const whatsappUrl = buildWhatsAppUrl(chosenPhone, formattedMessage);
    
    setIsSubmitted(true);
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="orcamento" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Urgency & Guarantee Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Orçamento 100% Gratuito</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Não espere acontecer. <span className="text-cyan-400">Previna-se agora!</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Proteja seu patrimônio, sua família e seus colaboradores com quem é especialista em Maceió e Região. Preencha o formulário e receba nosso atendimento ágil diretamente no WhatsApp.
            </p>

            {/* Guarantees Box */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                Vantagens de solicitar agora:
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Visita técnica de avaliação no local sem custo.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Proposta personalizada e dimensionada para seu orçamento.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Equipamentos homologados com garantia e suporte ágil.</span>
                </div>
              </div>
            </div>

            {/* Direct Phone Assistance Bar */}
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-slate-300">
              <p className="font-semibold text-white mb-2 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                Prefere ligar ou falar imediatamente?
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                {COMPANY_INFO.phones.map((p, idx) => (
                  <a
                    key={idx}
                    href={`tel:${p.raw}`}
                    className="px-3 py-2 rounded-lg bg-slate-900 text-cyan-300 hover:text-white hover:bg-slate-800 text-center font-mono font-bold transition-colors border border-slate-800"
                  >
                    {p.number}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Form Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-slate-900/95 border border-cyan-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Solicitar Orçamento Gratuito
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Preencha os dados para receber a proposta técnica personalizada
                  </p>
                </div>
                <div className="hidden sm:flex p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white">
                    Orçamento Enviado para o WhatsApp!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Sua solicitação foi preparada. Caso o aplicativo do WhatsApp não tenha aberto automaticamente, clique no botão abaixo para conversar com a Nova Pronter agora mesmo:
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={buildWhatsAppUrl(
                        COMPANY_INFO.phones[selectedPhoneIndex].raw,
                        `Olá, Nova Pronter! Enviei meu orçamento pelo formulário do site (${formData.fullName || 'Cliente'}).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Abrir Conversa no WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="py-3 px-5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                    >
                      Novo Formulário
                    </button>
                  </div>
                </div>
              ) : (
                <form id="quote-lead-form" onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Nome Completo */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo Silveira"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                    />
                  </div>

                  {/* Row 2: WhatsApp & E-mail */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(82) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        placeholder="seuemail@exemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Tipo de Imóvel & Bairro */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Tipo de Imóvel *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['Residencial', 'Comercial', 'Condomínio'] as const).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, propertyType: type })}
                            className={`py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                              formData.propertyType === type
                                ? 'bg-cyan-500 text-slate-950 border border-cyan-400 shadow-md'
                                : 'bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Bairro / Cidade
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Ex: Ponta Verde, Maceió"
                          value={formData.neighborhood}
                          onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                          className="w-full pl-9 pr-4 py-3 rounded-xl bg-slate-950/90 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                        />
                        <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Serviço(s) de Interesse */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Serviços de Interesse (Selecione um ou mais)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SERVICES_DATA.map((srv) => {
                        const isSelected = formData.selectedServices.includes(srv.title);
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => toggleService(srv.title)}
                            className={`p-2.5 rounded-lg text-left text-xs font-medium transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-cyan-950/80 border border-cyan-400 text-cyan-300 shadow-sm'
                                : 'bg-slate-950/80 border border-slate-800 text-slate-400 hover:border-slate-700'
                            }`}
                          >
                            <span className="truncate pr-1">{srv.title}</span>
                            <span className={`w-3.5 h-3.5 rounded-full border shrink-0 flex items-center justify-center ${
                              isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-slate-600'
                            }`}>
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-slate-950"></span>}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 5: Mensagem */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Mensagem / Detalhes Adicionais
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Conte um pouco sobre sua necessidade (ex: quantidade de pontos de câmeras, metragem da cerca, portaria, etc.)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="submit-quote-btn"
                      className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                    >
                      <Send className="w-5 h-5 fill-current" />
                      <span>Enviar e Receber Orçamento</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2">
                      ⚡ Atendimento imediato em Maceió / AL. Seus dados estão 100% protegidos.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
