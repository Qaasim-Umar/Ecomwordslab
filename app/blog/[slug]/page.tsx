import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const categoryColors: Record<string, string> = {
    Copywriting: "bg-[#1e3a8a]/10 text-[#1e3a8a]",
    "Email Marketing": "bg-[#0D1B2A]/8 text-[#0D1B2A]/60",
    "Brand Strategy": "bg-[#0D1B2A]/8 text-[#0D1B2A]/60",
  };

  return (
    <>
      <style>{`body { background-color: #EEF2FF; }`}</style>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#EEF2FF] px-6 py-28 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#1e3a8a] hover:gap-2.5 transition-all mb-8"
          >
            <ArrowLeft size={13} /> Back to Blog
          </Link>

          <div className="flex items-center gap-2.5 mb-6">
            <span className={`text-[10.5px] font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-[#0D1B2A]/8 text-[#0D1B2A]/60"}`}>
              {post.category}
            </span>
            <span className="text-[11px] text-[#2C2C2C]/35">{post.date}</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl md:text-[2.75rem] text-[#0D1B2A] leading-[1.1] tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-[1rem] text-[#2C2C2C]/55 leading-[1.85] max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-12">
            {post.content.map((section, i) => (
              <div key={i}>
                <h2 className="font-heading font-bold text-[1.15rem] text-[#0D1B2A] leading-snug mb-4">
                  {section.heading}
                </h2>
                <p className="text-[0.92rem] text-[#2C2C2C]/65 leading-[1.85]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-[#E8E4DC]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#1e3a8a] hover:gap-2.5 transition-all"
            >
              <ArrowLeft size={13} /> Back to all posts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Get in Touch <ArrowLeft size={14} className="rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
