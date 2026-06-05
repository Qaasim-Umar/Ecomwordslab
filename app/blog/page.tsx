import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog: Copywriting Tips for E-Commerce Brands",
  description:
    "Actionable copywriting advice, email marketing strategies, and brand messaging insights for e-commerce businesses.",
  openGraph: {
    title: "Blog | EcomWords Lab",
    description:
      "Actionable copywriting advice, email marketing strategies, and brand messaging insights for e-commerce businesses.",
    url: "https://ecomwordslab.com/blog",
  },
};

const categoryColors: Record<string, string> = {
  Copywriting: "bg-[#C1440E]/15 text-[#C1440E]",
  "Email Marketing": "bg-white/10 text-white/65",
  "Brand Strategy": "bg-white/10 text-white/65",
};

export default function BlogPage() {
  return (
    <>
      {/* PAGE HERO — dark editorial */}
      <section className="bg-[#070B10] px-6 py-28 md:py-32">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#C1440E] mb-5">
            The Lab
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-[3.5rem] text-white leading-[1.05] tracking-tight max-w-xl mb-5">
            Insights Worth Reading
          </h1>
          <p className="text-[0.95rem] text-white/40 max-w-md leading-[1.85]">
            Copywriting insights, e-commerce strategy, and content tips.
            No fluff, just actionable advice.
          </p>
        </div>
      </section>

      {/* BLOG GRID — dark editorial */}
      <section className="bg-[#070B10] px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-white/[0.06] mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 flex flex-col hover:bg-white/[0.055] hover:border-white/[0.13] transition-all"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className={`text-[10.5px] font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-white/10 text-white/60"}`}>
                    {post.category}
                  </span>
                  <span className="text-[11px] text-white/28">{post.date}</span>
                </div>

                <h2 className="font-heading font-semibold text-[0.95rem] text-white leading-snug mb-3 flex-1">
                  {post.title}
                </h2>

                <p className="text-[0.8rem] text-white/38 leading-[1.72] mb-6">
                  {post.excerpt}
                </p>

                <div className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#C1440E] hover:gap-2.5 transition-all cursor-pointer">
                  Read More <ArrowRight size={13} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
