import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/content";

export default function BlogPreviewSection() {
  return (
    <section id="blog-preview" className="section-band bg-[#F8FBFF]">
      <div className="container">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="reveal-left max-w-2xl">
            <div className="section-kicker">Blog AudioBaby</div>
            <h2 className="section-title text-[#2C3E50]">
              Orientação para decidir
              <span className="text-[#94B1DA]"> com mais clareza</span>
            </h2>
          </div>
          <Link href="/blog" className="motion-button secondary reveal-right">
            Ver todos
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, i) => (
            <div key={post.slug} style={{ transitionDelay: `${i * 80}ms` }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
