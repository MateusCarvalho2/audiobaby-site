import { ArrowLeft, CheckCircle2, Clock } from "lucide-react";
import { Link, type RouteComponentProps } from "wouter";
import ContatoSection from "@/components/ContatoSection";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getBlogPost } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type BlogPostParams = {
  slug?: string;
};

export default function BlogPost({
  params,
}: RouteComponentProps<BlogPostParams>) {
  useScrollReveal();
  const post = params.slug ? getBlogPost(params.slug) : undefined;

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="page-shell min-h-screen bg-white">
          <main className="container flex min-h-[70vh] flex-col justify-center pt-32">
            <div className="max-w-xl">
              <div className="section-kicker">Blog</div>
              <h1 className="text-5xl leading-tight text-[#2C3E50]">
                Artigo não encontrado.
              </h1>
              <Link href="/blog" className="motion-button mt-8 inline-flex">
                <ArrowLeft size={16} />
                Voltar ao blog
              </Link>
            </div>
          </main>
          <ContatoSection />
          <WhatsAppFloat />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="page-shell min-h-screen bg-white">
        <article>
          <header className="relative isolate overflow-hidden bg-[#2C3E50] pt-32 text-white">
            <div className="absolute inset-0 -z-10">
              <img
                src={post.image}
                alt=""
                className="h-full w-full object-cover opacity-[0.46]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/96 via-[#2C3E50]/76 to-[#2C3E50]/26" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>
            <div className="container pb-24 pt-12">
              <Link
                href="/blog"
                className="hero-reveal mb-8 inline-flex items-center gap-2 font-nunito text-sm font-900 uppercase tracking-[0.12em] text-[#F4C62F]"
              >
                <ArrowLeft size={16} />
                Voltar ao blog
              </Link>
              <div className="hero-reveal mb-5 flex flex-wrap items-center gap-3">
                <span className="bg-[#F4C62F] px-3 py-1 font-nunito text-[11px] font-900 uppercase tracking-[0.14em] text-[#2C3E50]">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1 font-lato text-sm text-white/78">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
              <h1 className="hero-reveal max-w-4xl text-4xl md:text-5xl lg:text-6xl leading-tight">
                {post.title}
              </h1>
              <p className="hero-reveal mt-7 max-w-2xl font-lato text-lg leading-relaxed text-white/78">
                {post.excerpt}
              </p>
            </div>
            {/* Smooth wavy divider transition to the page content */}
            <div
              className="absolute inset-x-0 bottom-0 z-10 w-full overflow-hidden leading-none"
              style={{ transform: "translateY(1px)" }}
            >
              <svg
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                className="w-full h-12 md:h-16"
                style={{ display: "block" }}
              >
                <path
                  d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z"
                  fill="white"
                />
              </svg>
            </div>
          </header>

          <section className="section-band bg-white">
            <div className="container grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
              <div className="reveal max-w-3xl">
                {post.content.map(paragraph => (
                  <p
                    key={paragraph}
                    className="mb-6 font-lato text-lg leading-relaxed text-[#4A5568]"
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="mt-8 border-l-4 border-[#F4C62F] bg-[#F8FBFF] p-5 font-lato text-sm leading-relaxed text-[#5E6D7A]">
                  Este conteúdo é informativo e não substitui avaliação
                  individualizada. Em caso de dúvida sobre exames ou conduta,
                  converse com a equipe responsável.
                </p>
              </div>

              <aside className="reveal-right h-fit border border-[#94B1DA]/18 bg-[#F8FBFF] p-5 lg:sticky lg:top-28">
                <h2 className="text-lg font-900 text-[#2C3E50]">
                  Pontos principais
                </h2>
                <ul className="mt-5 grid gap-3">
                  {post.takeaways.map(item => (
                    <li
                      key={item}
                      className="flex gap-3 font-lato text-sm leading-relaxed text-[#4A5568]"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#F4C62F]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>
        </article>
        <ContatoSection />
        <WhatsAppFloat />
      </div>
    </>
  );
}
