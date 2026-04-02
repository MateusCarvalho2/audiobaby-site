/*
 * AudioBaby Navbar
 * This component renders the top navigation bar. It includes a logo,
 * navigation links, and a call‑to‑action button.  Per client request
 * we added an "Estrutura" link pointing to the "Nossa Unidade" section
 * (id="unidade") and kept the existing links.  No other changes
 * were made to the behaviour or styling.
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const LOGO_URL =
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/logo%20oficial_44c5ffbe.png';

// Navigation links for the navbar.  Added "Estrutura" linking to
// the unidade section (#unidade) as requested.
const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Exames', href: '#exames' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Estrutura', href: '#unidade' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#inicio');
          }}
          className="flex items-center"
        >
          <img
            src={LOGO_URL}
            alt="AudioBaby — Núcleo de Audiologia Infantil"
            className="h-12 md:h-14 w-auto object-contain"
            style={{
              paddingRight: '24px',
              paddingLeft: '14px',
              marginTop: '3px',
              marginBottom: '6px',
              marginLeft: '-1px',
              width: '178px',
              height: '94px',
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`font-nunito font-600 text-sm transition-colors duration-200 hover:text-[#94B1DA] ${
                isScrolled ? 'text-[#2C3E50]' : 'text-[#2C3E50]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="https://wa.me/5571981581346?text=Olá! Gostaria de agendar um exame na AudioBaby."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#F4C62F] hover:bg-[#D4A820] text-[#2C3E50] font-nunito font-700 text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
        >
          <Phone size={15} />
          Agendar Consulta
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#2C3E50] hover:bg-[#94B1DA]/10 transition-colors"
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-[#94B1DA]/20 shadow-lg">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-nunito font-600 text-[#2C3E50] py-3 px-2 rounded-lg hover:bg-[#94B1DA]/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5571981581346?text=Olá! Gostaria de agendar um exame na AudioBaby."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-[#F4C62F] hover:bg-[#D4A820] text-[#2C3E50] font-nunito font-700 text-sm px-5 py-3 rounded-full transition-all duration-200"
            >
              <Phone size={15} />
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}