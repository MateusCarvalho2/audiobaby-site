/*
 * AudioBaby PrivacyPolicy Page
 *
 * Presents the privacy policy based on information from the site.  The
 * component appears only when users navigate to /politica-de-privacidade.
 */

import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <section className="py-20 md:py-28 bg-white min-h-screen">
      <div className="container">
        <h1 className="font-nunito font-900 text-3xl md:text-4xl text-[#2C3E50] mb-4">
          Política de Privacidade
        </h1>
        <p className="font-lato text-lg text-[#4A5568] mb-6">
          A AudioBaby preza pela privacidade e proteção de dados de nossos pacientes e visitantes. Esta política descreve como coletamos, usamos e protegemos informações pessoais.
        </p>
        <h2 className="font-nunito font-800 text-2xl text-[#2C3E50] mb-2">Coleta de dados</h2>
        <p className="font-lato text-[#4A5568] mb-4">
          Coletamos informações fornecidas voluntariamente por você, como nome, telefone, e‑mail e dados do bebê, ao agendar uma consulta ou entrar em contato. Esses dados são utilizados exclusivamente para oferecer nossos serviços e melhorar sua experiência.
        </p>
        <h2 className="font-nunito font-800 text-2xl text-[#2C3E50] mb-2">Uso das informações</h2>
        <p className="font-lato text-[#4A5568] mb-4">
          Utilizamos seus dados para agendar exames, responder a solicitações, enviar comunicações sobre nossos serviços e, quando autorizado, para fins de marketing. Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para a prestação dos serviços ou exigido por lei.
        </p>
        <h2 className="font-nunito font-800 text-2xl text-[#2C3E50] mb-2">Cookies e tecnologias</h2>
        <p className="font-lato text-[#4A5568] mb-4">
          Nosso site pode utilizar cookies e tecnologias semelhantes para melhorar a navegação e entender como os usuários interagem com as páginas. Você pode ajustar as configurações do seu navegador para recusar cookies, mas isso pode limitar algumas funcionalidades.
        </p>
        <h2 className="font-nunito font-800 text-2xl text-[#2C3E50] mb-2">Seus direitos</h2>
        <p className="font-lato text-[#4A5568] mb-4">
          Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você pode solicitar acesso, correção ou exclusão de seus dados pessoais. Para exercer seus direitos ou tirar dúvidas, entre em contato conosco pelo e‑mail contato@audiobaby.com.br.
        </p>
        <p className="font-lato text-[#4A5568] mb-4">
          Ao utilizar nossos serviços, você concorda com os termos desta Política de Privacidade. Reservamo-nos o direito de atualizar este documento. Recomendamos revisitar esta página regularmente para estar ciente de eventuais alterações.
        </p>
        <Link
          href="/"
          className="font-nunito text-[#94B1DA] hover:text-[#6B90C4] underline"
        >
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}