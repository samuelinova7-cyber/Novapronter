import React, { useState, useEffect } from 'react';
import { Shield, Phone, MessageSquare, Menu, X, Instagram, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  const defaultWhatsappUrl = buildWhatsAppUrl(
    COMPANY_INFO.phones[0].raw,
    'Olá, Nova Pronter! Gostaria de solicitar um orçamento para segurança eletrônica do meu imóvel.'
  );

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20 py-3'
          : 'bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent py-5'
      }`}
    >
      {/* Top emergency & quick contact sub-bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 p-0.5 shadow-md shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Shield className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                  NOVA <span className="text-cyan-400">PRONTER</span>
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-widest text-slate-400 uppercase">
                Segurança Eletrônica
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action CTA & Phone preview */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex flex-col text-right">
              <span className="text-[11px] text-slate-400 font-medium flex items-center justify-end gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Atendimento Rápido Maceió
              </span>
              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
              >
                {COMPANY_INFO.phones[0].number}
              </a>
            </div>

            <a
              id="header-cta-whatsapp"
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Orçamento via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              aria-label="Alternar Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-cyan-400 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <div className="text-xs text-slate-400 px-3">
                <p className="font-semibold text-slate-300">Central de Atendimento Maceió:</p>
                <p>{COMPANY_INFO.phones[0].number} / {COMPANY_INFO.phones[1].number}</p>
              </div>

              <a
                href={defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-500 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Solicitar Orçamento via WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>{COMPANY_INFO.instagram.handle}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
