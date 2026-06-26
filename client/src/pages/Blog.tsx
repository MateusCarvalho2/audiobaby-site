import BlogCard from "@/components/BlogCard";
import ContatoSection from "@/components/ContatoSection";
import InternalHero from "@/components/InternalHero";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { blogPosts } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Blog() {
  useScrollReveal();

  const featured = blogPosts.find((post) => post.featured) || blogPosts[0];

  return (
    <>
      <Navbar />
      <div className="page-shell min-h-screen bg-white">
        <InternalHero
          label="Blog"
          title="Conteúdo para"
          highlight="famílias bem orientadas."
          description="Guias curtos sobre triagem auditiva, diagnóstico infantil, fatores de risco e preparo para exames."
          image="https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/fonoaudiologa_crianca_fb5ab1ac.jpg"
          waveColor="#F8FBFF"
          bgColor="#F8FBFF"
        />

        <section className="section-band bg-[#F8FBFF]">
          <div className="container">
            {featured && (
              <div className="mb-14">
                <div className="section-kicker">Artigo em destaque</div>
                <BlogCard post={featured} featured />
              </div>
            )}

            <div className="mb-8">
              <div className="section-kicker">Todos os artigos</div>
              <h2 className="section-title text-[#2C3E50]">
                Biblioteca AudioBaby
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, i) => (
                <div key={post.slug} style={{ transitionDelay: `${i * 80}ms` }}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContatoSection />
        <WhatsAppFloat />
      </div>
    </>
  );
}
