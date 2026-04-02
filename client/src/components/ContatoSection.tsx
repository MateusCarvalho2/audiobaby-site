/*
 * AudioBaby ContatoSection + Footer
 * This section covers the "Agende sua Consulta" call‑to‑action and the site
 * footer.  We updated the Instagram link to open the client's official
 * profile in a new tab, added an embedded Google Maps iframe showing the
 * clinic location, updated the copyright year to 2026 and linked the
 * Política de Privacidade page to the new route.  A signature link was
 * added to the bottom bar per request.  No other structural changes were
 * made.
 */

import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "wouter";

const LOGO_BRANCA =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/logo branca_e197d821.png";
const WAVE_ICON =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/3_e124f16a.png";
const GRAFISMO_COMP =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/2_16bdae17.png";

export default function ContatoSection() {
  return (
    <>
      {/* CTA Section */}
      <section id="contato" className="py-20 md:py-28 bg-[#2C3E50] overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 opacity-5 w-96 h-96">
          <img src={GRAFISMO_COMP} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-5 w-64 h-64 rotate-180">
          <img src={WAVE_ICON} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="container relative z-10">
          {/* Layout: switch to a two‑column grid on medium screens to
             accommodate more horizontal space earlier. */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
            {/* Left: CTA text */}
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-0.5 bg-[#F4C62F]" />
                <span className="font-nunito font-700 text-sm text-[#94B1DA] uppercase tracking-widest">
                  Agende sua Consulta
                </span>
              </div>

              <h2 className="font-nunito font-900 text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Seu bebê merece
                <br />
                <span className="text-[#F4C62F]">ouvir o mundo</span>
                <br />
                com clareza.
              </h2>

              <p className="font-lato text-lg text-white/70 leading-relaxed mb-8">
                Não espere para cuidar da audição do seu filho. Quanto mais cedo o diagnóstico, maiores as possibilidades de intervenção e desenvolvimento.
              </p>

              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#94B1DA]/20 flex items-center justify-center">
                    <Phone size={18} className="text-[#94B1DA]" />
                  </div>
                  <div>
                    <p className="font-nunito font-700 text-white text-sm">WhatsApp</p>
                    <p className="font-lato text-[#94B1DA] text-sm">(71) 98158-1346</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#94B1DA]/20 flex items-center justify-center">
                    <MapPin size={18} className="text-[#94B1DA]" />
                  </div>
                  <div>
                    <p className="font-nunito font-700 text-white text-sm">Endereço</p>
                    <p className="font-lato text-[#94B1DA] text-sm">
                      Av. Luis Viana Filho, 6462, Edf. Wall Street West, torre B, salas 305 e 306
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#94B1DA]/20 flex items-center justify-center">
                    <Clock size={18} className="text-[#94B1DA]" />
                  </div>
                  <div>
                    <p className="font-nunito font-700 text-white text-sm">Horário de Atendimento</p>
                    <p className="font-lato text-[#94B1DA] text-sm">
                      Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#94B1DA]/20 flex items-center justify-center">
                    <Mail size={18} className="text-[#94B1DA]" />
                  </div>
                  <div>
                    <p className="font-nunito font-700 text-white text-sm">E-mail</p>
                    <p className="font-lato text-[#94B1DA] text-sm">contato@audiobaby.com.br</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3 mt-8">
                <a
                  href="https://www.instagram.com/audiobaby.clinica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#94B1DA]/20 hover:bg-[#94B1DA]/40 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="text-[#94B1DA]" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-[#94B1DA]/20 hover:bg-[#94B1DA]/40 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} className="text-[#94B1DA]" />
                </a>
              </div>

              {/* Map embed */}
              <div className="mt-8">
                {/* Use a direct Google Maps embed URL instead of the maps.app link to avoid errors
                    when running locally.  The query encodes the clinic address and uses the embed
                    output format. */}
                <iframe
                  src="https://maps.google.com/maps?q=Av.%20Luis%20Viana%20Filho%206462%2C%20Salvador%20BA%20Brasil&output=embed"
                  className="w-full h-64 rounded-3xl border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: CTA Card */}
            <div className="reveal-right">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="font-nunito font-900 text-2xl text-[#2C3E50] mb-2">
                  Agende pelo WhatsApp
                </h3>
                <p className="font-lato text-sm text-[#718096] mb-6">
                  Atendimento rápido e humanizado. Nossa equipe responde em até 2 horas úteis.
                </p>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/5571981581346?text=Olá! Gostaria de agendar um exame na AudioBaby."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-nunito font-800 text-base px-6 py-4 rounded-2xl transition-all duration-200 hover:shadow-lg mb-4"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar pelo WhatsApp
                </a>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-[#94B1DA]/20" />
                  <span className="font-lato text-xs text-[#94B1DA]">ou ligue diretamente</span>
                  <div className="flex-1 h-px bg-[#94B1DA]/20" />
                </div>

                <a
                  href="tel:+5571981581346"
                  className="w-full flex items-center justify-center gap-3 bg-[#EEF4FB] hover:bg-[#94B1DA]/20 text-[#6B90C4] font-nunito font-700 text-base px-6 py-4 rounded-2xl transition-all duration-200"
                >
                  <Phone size={18} />
                  (71) 3037-8420
                </a>

                {/* Info */}
                <div className="mt-6 pt-6 border-t border-[#94B1DA]/10">
                  <div className="flex items-start gap-2">
                    <span className="text-lg"></span>
                    {/* Removed convênio information per request; intentionally left blank for future content */}
                    <p className="font-lato text-xs text-[#718096] leading-relaxed"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2632] py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            {/* Logo + tagline */}
            <div className="md:col-span-2">
              <img
                src={LOGO_BRANCA}
                alt="AudioBaby"
                className="h-14 w-auto object-contain mb-4"
              />
              <p className="font-lato text-sm text-white/60 leading-relaxed max-w-xs">
                Núcleo especializado em triagem auditiva neonatal e diagnóstico audiológico infantil. Ciência, acolhimento e responsabilidade.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-nunito font-800 text-white text-sm mb-4">Navegação</h4>
              <ul className="space-y-2">
                {[
                  { label: "Início", href: "#inicio" },
                  { label: "Sobre nós", href: "#sobre" },
                  { label: "Exames", href: "#exames" },
                  { label: "Diferenciais", href: "#diferenciais" },
                  { label: "Estrutura", href: "#unidade" },
                  { label: "Equipe", href: "#equipe" },
                  { label: "Contato", href: "#contato" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="font-lato text-sm text-white/50 hover:text-[#94B1DA] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exames */}
            <div>
              <h4 className="font-nunito font-800 text-white text-sm mb-4">Exames</h4>
              <ul className="space-y-2">
                {[
                  "Triagem Auditiva Neonatal",
                  "PEATE / BERA",
                  "Imitanciometria",
                  "Audiometria Lúdica",
                  "Processamento Auditivo",
                  "Otorrinolaringologia",
                ].map((exame) => (
                  <li key={exame}>
                    <span className="font-lato text-sm text-white/50">{exame}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-lato text-xs text-white/40">
              © 2026 AudioBaby — Núcleo de Audiologia Infantil. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 items-center">
              <Link
                to="/politica-de-privacidade"
                className="font-lato text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Política de Privacidade
              </Link>
              <a
                href="#"
                className="font-lato text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Termos de Uso
              </a>
              {/* Signature link (canto inferior direito) */}
              {/* Developer signature replaced by logo.  The image lives in public/signature-logo.png
                  and links to the provided site. */}
              <a
                href="https://canva.link/mateuscarvalhomktt"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src="/signature-logo.png"
                  alt="Assinatura"
                  className="h-6 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}