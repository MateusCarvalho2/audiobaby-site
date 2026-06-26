import { useEffect, useState, type MouseEvent } from "react";
import { Menu, Phone, X } from "lucide-react";
import { useLocation } from "wouter";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/logo%20oficial_44c5ffbe.png";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/#sobre", hash: "#sobre" },
  { label: "Exames", href: "/exames" },
  { label: "Estrutura", href: "/estrutura" },
  { label: "Equipe", href: "/equipe" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/#contato", hash: "#contato" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    hash?: string
  ) => {
    setIsMenuOpen(false);
    if (!hash || window.location.pathname !== "/") return;

    const el = document.querySelector(hash);
    if (el) {
      event.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDarkPage = location !== "/" && location !== "/404";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-motion ${
        isScrolled || isMenuOpen
          ? "bg-white py-3 shadow-[0_4px_25px_rgba(44,62,80,0.08)] border-b border-[#94B1DA]/12"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container">
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-motion ${
            isScrolled || isMenuOpen
              ? "px-0 py-1"
              : "px-0 py-2"
          }`}
        >
          <a
            href="/"
            className="flex min-w-[142px] items-center"
            aria-label="AudioBaby - ir para o início"
          >
            <img
              src={LOGO_URL}
              alt="AudioBaby - Núcleo de Audiologia Infantil"
              className={`h-12 w-auto object-contain md:h-14 transition-all duration-500 ${
                !(isScrolled || isMenuOpen) && isDarkPage
                  ? "brightness-0 invert opacity-90"
                  : ""
              }`}
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? location === "/"
                  : location.startsWith(link.href.split("#")[0]) &&
                    link.href !== "/#sobre" &&
                    link.href !== "/#contato";

              // Determine text color and background classes dynamically with ! modifier to override index.css specificity
              const textClass = isScrolled
                ? isActive
                  ? "!text-[#6B90C4] !bg-[#EEF4FB]"
                  : "!text-[#2C3E50] hover:!text-[#6B90C4] hover:!bg-[#EEF4FB]"
                : isDarkPage
                  ? isActive
                    ? "!text-[#F4C62F] !bg-white/10"
                    : "!text-white/85 hover:!text-white hover:!bg-white/10"
                  : isActive
                    ? "!text-[#6B90C4] !bg-[#EEF4FB]"
                    : "!text-[#2C3E50] hover:!text-[#6B90C4] hover:!bg-[#EEF4FB]";

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.hash)}
                  className={`nav-link ${isActive ? "is-active" : ""} ${textClass}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="https://wa.me/5571981581346?text=Olá! Gostaria de agendar um exame na AudioBaby."
              target="_blank"
              rel="noopener noreferrer"
              className="motion-button nav-cta"
            >
              <Phone size={16} />
              Agendar
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className={`flex h-11 w-11 items-center justify-center border transition-all duration-300 lg:hidden ${
              isScrolled || isMenuOpen
                ? "border-[#94B1DA]/20 text-[#2C3E50] hover:bg-[#EEF4FB]"
                : isDarkPage
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-[#94B1DA]/20 text-[#2C3E50] hover:bg-[#EEF4FB]"
            }`}
            aria-label="Abrir menu"
            type="button"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-2 border border-[#94B1DA]/18 bg-white/96 p-3 shadow-xl backdrop-blur-xl lg:hidden">
            <nav className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.hash)}
                  className="font-nunito px-4 py-3 text-sm font-800 uppercase tracking-[0.12em] text-[#2C3E50] transition-colors hover:bg-[#EEF4FB] hover:text-[#6B90C4]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5571981581346?text=Olá! Gostaria de agendar um exame na AudioBaby."
                target="_blank"
                rel="noopener noreferrer"
                className="motion-button mt-2 w-full"
              >
                <Phone size={16} />
                Agendar
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
