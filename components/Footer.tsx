import Link from "next/link";
import { Mail } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#070B10] text-white border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/[0.06]">

          {/* Wordmark + tagline */}
          <div className="md:col-span-1">
            <Link href="/" className="font-heading font-bold text-[1.05rem] tracking-tight">
              EcomWords<span className="text-[#C1440E]">Lab</span>
            </Link>
            <p className="mt-3 text-[0.8rem] text-white/38 leading-relaxed">
              Copy that converts. Strategy that scales. Built for e-commerce brands
              serious about growth.
            </p>
            <a
              href="mailto:hello@ecomwordslab.com"
              className="inline-flex items-center gap-1.5 mt-5 text-[0.8rem] text-white/45 hover:text-[#C1440E] transition-colors"
            >
              <Mail size={12} />
              hello@ecomwordslab.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] font-black tracking-[0.2em] uppercase text-white/25 mb-4">Navigate</p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/services" className="text-[0.81rem] text-white/45 hover:text-white transition-colors">Services</Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[0.81rem] text-white/45 hover:text-white transition-colors">Blog</Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-[0.81rem] text-white/45 hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* From The Lab */}
          <div className="md:col-span-2">
            <p className="text-[9px] font-black tracking-[0.2em] uppercase text-white/25 mb-4">From The Lab</p>
            <ul className="flex flex-col gap-5">
              {blogPosts.map((post) => (
                <li key={post.id}>
                  <Link href="/blog" className="group flex flex-col gap-1">
                    <span className="text-[0.81rem] text-white/50 group-hover:text-white transition-colors leading-snug">
                      {post.title}
                    </span>
                    <span className="text-[10px] text-white/22">{post.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10.5px] text-white/22">
          <span>&copy; {new Date().getFullYear()} EcomWords Lab. All rights reserved.</span>
          <span>E-Commerce Copywriting Agency</span>
        </div>
      </div>
    </footer>
  );
}
