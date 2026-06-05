import type { Metadata } from "next";
import Link from "next/link";
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
  Copywriting: "bg-[#1e3a8a]/10 text-[#1e3a8a]",
  "Email Marketing": "bg-[#0D1B2A]/8 text-[#0D1B2A]/60",
  "Brand Strategy": "bg-[#0D1B2A]/8 text-[#0D1B2A]/60",
};

export default function BlogPage() {
  return (
    <>
      <style>{`body { background-color: #EEF2FF; }`}</style>

      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-[#EEF2FF] px-6 py-28 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1e3a8a] mb-5">
            The Lab
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-[3.5rem] text-[#0D1B2A] leading-[1.05] tracking-tight max-w-xl mb-5">
            Insights Worth Reading
          </h1>
          <p className="text-[0.95rem] text-[#2C2C2C]/55 max-w-md leading-[1.85]">
            Copywriting insights, e-commerce strategy, and content tips.
            No fluff, just actionable advice.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-[#E8E4DC] rounded-2xl p-7 flex flex-col hover:border-[#1e3a8a]/20 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className={`text-[10.5px] font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-[#0D1B2A]/8 text-[#0D1B2A]/60"}`}>
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[#2C2C2C]/35">{post.date}</span>
                </div>

                <h2 className="font-heading font-semibold text-[0.92rem] text-[#0D1B2A] leading-snug mb-3 flex-1">
                  {post.title}
                </h2>

                <p className="text-[0.79rem] text-[#2C2C2C]/55 leading-[1.7] mb-6">
                  {post.excerpt}
                </p>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#1e3a8a] hover:gap-2.5 transition-all"
                >
                  Read more <ArrowRight size={13} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#1e3a8a] px-6 py-28">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl px-10 py-14 shadow-lg text-center">
            <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1e3a8a] mb-5">
              Ready to Grow?
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0D1B2A] leading-tight mb-3">
              Want copy this good for your brand?
            </h2>
            <p className="text-[#1e3a8a] font-heading font-semibold text-lg mb-5">
              Let&apos;s make it happen.
            </p>
            <p className="text-[#2C2C2C]/55 text-[0.88rem] mb-9 leading-[1.8] max-w-sm mx-auto">
              No lengthy briefs. No pushy calls. Just a straightforward conversation
              about your brand and what great copy could do for it.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-[#172d6e] transition-colors"
            >
              Get in Touch <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
