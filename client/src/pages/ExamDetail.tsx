import type { ReactNode } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  FileText,
  HelpCircle,
} from "lucide-react";
import { Link, type RouteComponentProps } from "wouter";
import ContatoSection from "@/components/ContatoSection";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { examCategories, exames, getExam } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getExamIcon } from "@/lib/icons";

type ExamDetailParams = {
  slug?: string;
};

function findExamCategory(slug: string) {
  return examCategories.find(category =>
    exames[category.id].some(exam => exam.slug === slug)
  );
}

function DetailBlock({
  title,
  icon,
  items,
}: {
  title: string;
  icon: ReactNode;
  items: string[];
}) {
  return (
    <section className="reveal border border-[#94B1DA]/18 bg-white p-5 md:p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center bg-[#EEF4FB] text-[#6B90C4]">
          {icon}
        </div>
        <h2 className="font-nunito text-xl font-900 text-[#2C3E50]">{title}</h2>
      </div>
      <ul className="grid gap-3">
        {items.map(item => (
          <li
            key={item}
            className="flex gap-3 font-lato text-sm leading-relaxed text-[#4A5568] md:text-base"
          >
            <CheckCircle2
              size={18}
              className="mt-0.5 shrink-0 text-[#F4C62F]"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ExamDetail({
  params,
}: RouteComponentProps<ExamDetailParams>) {
  useScrollReveal();

  const exam = params.slug ? getExam(params.slug) : undefined;
  const category = params.slug ? findExamCategory(params.slug) : undefined;

  if (!exam) {
    return (
      <>
        <Navbar />
        <div className="page-shell min-h-screen bg-white">
          <main className="container flex min-h-[70vh] flex-col justify-center pt-32">
            <div className="max-w-xl">
              <div className="section-kicker">Exames</div>
              <h1 className="text-5xl leading-tight text-[#2C3E50]">
                Procedimento não encontrado.
              </h1>
              <Link href="/exames" className="motion-button mt-8 inline-flex">
                <ArrowLeft size={16} />
                Voltar aos exames
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
        <header className="relative isolate overflow-hidden bg-[#2C3E50] pt-32 text-white">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50] via-[#2C3E50]/92 to-[#6B90C4]/70" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8FBFF] to-transparent" />
          </div>

          <div className="container pb-24 pt-12">
            <Link
              href="/exames"
              className="hero-reveal mb-8 inline-flex items-center gap-2 font-nunito text-sm font-900 uppercase tracking-[0.12em] text-[#F4C62F]"
            >
              <ArrowLeft size={16} />
              Voltar aos exames
            </Link>

            <div className="hero-reveal mb-5 flex flex-wrap items-center gap-3">
              {category && (
                <span className="bg-[#F4C62F] px-3 py-1 font-nunito text-[11px] font-900 uppercase tracking-[0.14em] text-[#2C3E50]">
                  {category.label}
                </span>
              )}
              <span className="inline-flex items-center gap-2 font-lato text-sm text-white/78">
                <Clock size={14} />
                preparo individualizado
              </span>
            </div>

            <div className="max-w-4xl">
              <div className="hero-reveal mb-5 inline-flex items-center justify-center h-16 w-16 rounded-[20px] bg-white/10 shadow-sm border border-white/20">
                {getExamIcon(exam.slug, "h-8 w-8 text-[#F4C62F]")}
              </div>
              <h1 className="hero-reveal text-4xl leading-tight md:text-5xl lg:text-6xl">
                {exam.title}
              </h1>
              <p className="hero-reveal mt-7 max-w-2xl font-lato text-lg leading-relaxed text-white/78">
                {exam.detail}
              </p>
            </div>
          </div>

          <div
            className="absolute inset-x-0 bottom-0 z-10 w-full overflow-hidden leading-none"
            style={{ transform: "translateY(1px)" }}
          >
            <svg
              viewBox="0 0 1440 80"
              preserveAspectRatio="none"
              className="h-12 w-full md:h-16"
              style={{ display: "block" }}
            >
              <path
                d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z"
                fill="#F8FBFF"
              />
            </svg>
          </div>
        </header>

        <main className="section-band bg-[#F8FBFF]">
          <div className="container grid gap-6 lg:grid-cols-[0.68fr_0.32fr]">
            <div className="grid gap-5">
              <DetailBlock
                title="Para que serve"
                icon={<HelpCircle size={19} />}
                items={exam.purpose}
              />
              <DetailBlock
                title="Como é feito"
                icon={<FileText size={19} />}
                items={exam.procedure}
              />
              <DetailBlock
                title="Preparo"
                icon={<CheckCircle2 size={19} />}
                items={exam.preparation}
              />
              <DetailBlock
                title="Quando costuma ser indicado"
                icon={<Clock size={19} />}
                items={exam.indications}
              />
            </div>

            <aside className="reveal-right h-fit border border-[#94B1DA]/18 bg-white p-5 lg:sticky lg:top-28">
              <h2 className="font-nunito text-xl font-900 text-[#2C3E50]">
                Antes de agendar
              </h2>
              <p className="mt-4 font-lato text-sm leading-relaxed text-[#5E6D7A]">
                As orientações podem variar conforme idade, histórico clínico,
                sono, exames associados e decisão da equipe. Confirme o preparo
                no momento do agendamento.
              </p>
              <a
                href={`https://wa.me/5571981581346?text=Olá! Gostaria de saber mais sobre ${encodeURIComponent(exam.title)} na AudioBaby.`}
                target="_blank"
                rel="noopener noreferrer"
                className="motion-button mt-6 w-full"
              >
                Tirar dúvidas
              </a>
              <Link
                href="/exames"
                className="mt-4 inline-flex items-center gap-2 font-nunito text-sm font-900 uppercase tracking-[0.12em] text-[#6B90C4]"
              >
                <ArrowLeft size={15} />
                Ver todos os exames
              </Link>
            </aside>
          </div>
        </main>

        <ContatoSection topWaveBgColor="#F8FBFF" />
        <WhatsAppFloat />
      </div>
    </>
  );
}
