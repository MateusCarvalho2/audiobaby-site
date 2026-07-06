import { ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";
import type { BlogPost } from "@/data/content";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`motion-card reveal group flex h-full overflow-hidden border border-[#94B1DA]/16 bg-white ${
        featured ? "flex-col lg:grid lg:grid-cols-[1.08fr_0.92fr]" : "flex-col"
      }`}
    >
      <div
        className={`overflow-hidden bg-[#EEF4FB] ${
          featured ? "h-80 lg:h-full" : "h-56"
        }`}
      >
        <img
          src={post.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-motion group-hover:scale-[1.05]"
        />
      </div>
      <div className={featured ? "p-7 md:p-9" : "flex flex-1 flex-col p-5"}>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="bg-[#F4C62F] px-3 py-1 font-nunito text-[11px] font-900 uppercase tracking-[0.14em] text-[#2C3E50]">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1 font-lato text-xs font-bold text-[#6B90C4]">
            <Clock size={13} />
            {post.readTime}
          </span>
        </div>
        <h3
          className={`font-nunito font-900 leading-tight text-[#2C3E50] ${
            featured ? "text-3xl md:text-4xl" : "line-clamp-2 text-xl"
          }`}
        >
          {post.title}
        </h3>
        <p
          className={`mt-4 font-lato text-sm leading-relaxed text-[#5E6D7A] ${
            featured ? "" : "line-clamp-3"
          }`}
        >
          {post.excerpt}
        </p>
        <span
          className={`inline-flex items-center gap-2 font-nunito text-sm font-900 uppercase tracking-[0.12em] text-[#6B90C4] ${
            featured ? "mt-6" : "mt-auto pt-6"
          }`}
        >
          Ler artigo
          <ArrowRight
            size={16}
            className="transition-transform duration-500 ease-motion group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
