import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, TrendingDown, VolumeX, Shuffle,
  CheckCircle, Clock, Shield, MessageCircle,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ServiceIcon from "@/components/ServiceIcon";
import Hero from "@/components/Hero";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { services, blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "EcomWords Lab | E-Commerce Copywriting Agency",
  description:
    "EcomWords Lab writes copy that converts visitors into buyers. Product descriptions, email sequences, landing pages, and brand messaging for e-commerce brands and online businesses.",
  openGraph: {
    title: "EcomWords Lab | E-Commerce Copywriting Agency",
    description:
      "EcomWords Lab writes copy that converts visitors into buyers. Product descriptions, email sequences, landing pages, and brand messaging for e-commerce brands and online businesses.",
    url: "https://ecomwordslab.com",
  },
};

const painPoints = [
  { title: "Traffic Without Conversions", description: "Visitors land on your store and leave without buying. The product is right. The copy isn't doing its job.", Icon: TrendingDown },
  { title: "A Brand Voice That Blends In", description: "Your messaging sounds like every other store in your niche. Without a distinct voice, you compete on price instead of value.", Icon: VolumeX },
  { title: "Content With No Strategy Behind It", description: "Posting without a plan means inconsistent messaging, missed opportunities, and customers who forget you exist.", Icon: Shuffle },
];

const outcomes = [
  { headline: "More revenue from existing traffic", detail: "Better copy turns the visitors you already have into buyers." },
  { headline: "A brand voice worth remembering", detail: "Consistent, distinctive messaging that builds trust at every touchpoint." },
  { headline: "Copy that scales with your business", detail: "From product pages to full campaigns, built to grow as you do." },
];

const steps = [
  { number: "01", title: "Tell Us About Your Brand", description: "Share your goals, your audience, and the copy challenges holding you back. We'll identify exactly where we can make the most impact." },
  { number: "02", title: "We Research and Write", description: "We dig into your market, your competitors, and your customers, then write copy built to convert, not just to impress." },
  { number: "03", title: "You See the Results", description: "Deploy your new copy and watch the numbers move. We measure success by your revenue, not vanity metrics." },
];

const categoryColors: Record<string, string> = {
  Copywriting: "bg-[#1e3a8a]/10 text-[#1e3a8a]",
  "Email Marketing": "bg-[#0D1B2A]/8 text-[#0D1B2A]/60",
  "Brand Strategy": "bg-[#0D1B2A]/8 text-[#0D1B2A]/60",
};


export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ─────────────────────────────────────────
          OUTCOMES STRIP — Light
      ───────────────────────────────────────── */}
      <section className="bg-[#1e3a8a] px-6 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {outcomes.map((item, i) => (
            <div key={i} className="py-7 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
              <CheckCircle size={14} className="text-blue-300 mb-3" />
              <h3 className="font-heading font-semibold text-white text-[0.85rem] mb-1.5 leading-snug">
                {item.headline}
              </h3>
              <p className="text-[0.78rem] text-white/55 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PAIN POINTS — Light
      ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white px-6 py-28">
        {/* Blue glow blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1e3a8a] mb-4">
              Sound Familiar?
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0D1B2A] leading-tight mb-4">
              Most E-Commerce Copy Has One Problem
            </h2>
            <p className="text-[#2C2C2C]/55 text-[0.9rem] max-w-md leading-[1.8]">
              It describes products instead of selling them. It talks about the brand
              instead of speaking to the buyer. EcomWords Lab exists to fix that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {painPoints.map((point) => (
              <article
                key={point.title}
                className="bg-[#1e3a8a] rounded-2xl p-7 flex flex-col gap-5 hover:bg-[#172d6e] transition-all"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-white/15">
                  <point.Icon size={18} className="text-white" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[0.95rem] text-white mb-2.5 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-[0.82rem] text-white/60 leading-[1.75]">
                    {point.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-white/15 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                  <span className="text-[10.5px] text-white/40 tracking-wide">EcomWords Lab can help</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SERVICES — Bento grid
      ───────────────────────────────────────── */}
      <section className="bg-[#EEF2FF] px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1e3a8a] mb-3">
                What We Do
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0D1B2A] leading-tight">
                Copy for Every Stage of the Customer Journey
              </h2>
            </div>
            <Link
              href="/services"
              className="text-[#1e3a8a] font-medium text-sm hover:underline whitespace-nowrap self-start sm:self-end"
            >
              See all 9 services →
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Featured tile — 2 cols, navy */}
            <div className="col-span-2 bg-[#0D1B2A] rounded-2xl p-8 flex flex-col justify-between min-h-[230px]">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <ServiceIcon name="FileText" size={18} className="text-white" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.15em] mb-1.5">
                  Turn browsers into buyers
                </p>
                <h3 className="font-heading font-bold text-[1.15rem] text-white leading-snug mb-2">
                  Product Description Copywriting
                </h3>
                <p className="text-[0.78rem] text-white/42 leading-relaxed">
                  Crafting descriptions that highlight benefits and move people to buy.
                </p>
              </div>
            </div>

            {/* Blue tile */}
            <div className="col-span-1 bg-[#1e3a8a] rounded-2xl p-6 flex flex-col justify-between min-h-[230px]">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                <ServiceIcon name="Mail" size={16} className="text-white" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/55 uppercase tracking-[0.15em] mb-1.5">
                  Keep customers coming back
                </p>
                <h3 className="font-heading font-bold text-[0.95rem] text-white leading-snug">
                  Email Marketing
                </h3>
              </div>
            </div>

            {/* White tile */}
            <div className="col-span-1 bg-white border border-[#E5E0D9] rounded-2xl p-6 flex flex-col justify-between min-h-[230px]">
              <div className="w-9 h-9 rounded-xl bg-[#1e3a8a]/8 flex items-center justify-center">
                <ServiceIcon name="Target" size={16} className="text-[#1e3a8a]" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#1e3a8a] uppercase tracking-[0.15em] mb-1.5">
                  Convert traffic into revenue
                </p>
                <h3 className="font-heading font-bold text-[0.95rem] text-[#0D1B2A] leading-snug">
                  Landing Page Copywriting
                </h3>
              </div>
            </div>

            {/* Muted tile */}
            <div className="col-span-1 bg-[#0D1B2A]/5 border border-[#0D1B2A]/8 rounded-2xl p-6 flex flex-col justify-between min-h-[170px]">
              <div className="w-9 h-9 rounded-xl bg-[#1e3a8a]/8 flex items-center justify-center">
                <ServiceIcon name="Map" size={16} className="text-[#1e3a8a]" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#1e3a8a] uppercase tracking-[0.15em] mb-1.5">
                  Build a brand people remember
                </p>
                <h3 className="font-heading font-bold text-[0.88rem] text-[#0D1B2A] leading-snug">
                  Content Strategy & Planning
                </h3>
              </div>
            </div>

            {/* White tile */}
            <div className="col-span-1 bg-white border border-[#E5E0D9] rounded-2xl p-6 flex flex-col justify-between min-h-[170px]">
              <div className="w-9 h-9 rounded-xl bg-[#1e3a8a]/8 flex items-center justify-center">
                <ServiceIcon name="Monitor" size={16} className="text-[#1e3a8a]" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#1e3a8a] uppercase tracking-[0.15em] mb-1.5">
                  Make every page earn its place
                </p>
                <h3 className="font-heading font-bold text-[0.88rem] text-[#0D1B2A] leading-snug">
                  Website Copywriting
                </h3>
              </div>
            </div>

            {/* CTA tile — 2 cols wide */}
            <div className="col-span-2 bg-[#1e3a8a]/8 border border-[#1e3a8a]/12 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <h3 className="font-heading font-bold text-[1.05rem] text-[#0D1B2A] mb-1">
                  9 services. One goal.
                </h3>
                <p className="text-[0.82rem] text-[#2C2C2C]/55 leading-relaxed">
                  Copy that drives measurable results at every stage of the funnel.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white font-semibold text-sm px-6 py-3 rounded-xl shrink-0 hover:bg-[#172d6e] transition-colors"
              >
                See All Services <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          HOW IT WORKS — White, clean
      ───────────────────────────────────────── */}
      <section className="bg-white px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1e3a8a] mb-3">
              The Process
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0D1B2A] leading-tight">
              Simple. Straightforward. Results-Focused.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Dotted connector */}
            <div className="hidden md:block absolute top-[23px] border-t-2 border-dashed border-[#E8E4DC]"
              style={{ left: "calc(16.7% + 2rem)", right: "calc(16.7% + 2rem)" }} />

            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#1e3a8a]/25 flex items-center justify-center mb-6 shadow-sm">
                  <span className="font-heading font-bold text-sm text-[#1e3a8a]">{step.number}</span>
                </div>
                <h3 className="font-heading font-semibold text-[0.95rem] text-[#0D1B2A] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[0.82rem] text-[#2C2C2C]/55 leading-[1.75] max-w-[210px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          TESTIMONIALS — White
      ───────────────────────────────────────── */}
      <section className="bg-[#F8F7F4] px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1e3a8a] mb-3">
              Client Results
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0D1B2A] leading-tight">
              What Our Clients Say
            </h2>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FROM THE LAB — Light editorial
      ───────────────────────────────────────── */}
      <section className="bg-[#EEF2FF] px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1e3a8a] mb-3">
                The Lab
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0D1B2A] leading-tight">
                Insights Worth Reading
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-[#2C2C2C]/45 font-medium text-sm hover:text-[#0D1B2A] transition-colors whitespace-nowrap self-start sm:self-end"
            >
              See all posts →
            </Link>
          </div>

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
                <h3 className="font-heading font-semibold text-[0.92rem] text-[#0D1B2A] leading-snug mb-3 flex-1">
                  {post.title}
                </h3>
                <p className="text-[0.79rem] text-[#2C2C2C]/55 leading-[1.7] mb-6">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#1e3a8a] hover:gap-2.5 transition-all"
                >
                  Read more <ArrowRight size={13} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CTA BANNER — Light
      ───────────────────────────────────────── */}
      <section className="bg-[#1e3a8a] px-6 py-28">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl px-10 py-14 shadow-lg text-center">
            <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1e3a8a] mb-5">
              Ready to Grow?
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0D1B2A] leading-tight mb-3">
              Not sure where to start?
            </h2>
            <p className="text-[#1e3a8a] font-heading font-semibold text-lg mb-5">
              That&apos;s exactly what we&apos;re here for.
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

      {/* ─────────────────────────────────────────
          CONTACT — Light, split layout
      ───────────────────────────────────────── */}
      <section id="contact" className="bg-[#F8F7F4] px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Left col */}
            <div className="lg:col-span-2">
              <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1e3a8a] mb-4">
                Work With Us
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0D1B2A] leading-tight mb-4">
                Let&apos;s Talk About Your Brand
              </h2>
              <p className="text-[#2C2C2C]/55 text-[0.9rem] leading-[1.8] mb-10">
                Fill in a few details and we&apos;ll get back to you with a clear
                path forward, no jargon, no pressure.
              </p>

              <ul className="flex flex-col gap-5">
                {[
                  { Icon: Clock, text: "We respond within one business day" },
                  { Icon: Shield, text: "No pushy sales calls or pressure" },
                  { Icon: MessageCircle, text: "Free initial consultation included" },
                ].map(({ Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1e3a8a]/8 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-[#1e3a8a]" strokeWidth={1.75} />
                    </div>
                    <span className="text-[0.83rem] text-[#2C2C2C]/60">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-[#EEECE8]">
                <p className="text-[11px] font-semibold text-[#2C2C2C]/35 uppercase tracking-widest mb-1.5">
                  Or email directly
                </p>
                <a
                  href="mailto:hello@ecomwordslab.com"
                  className="text-sm font-medium text-[#1e3a8a] hover:underline"
                >
                  hello@ecomwordslab.com
                </a>
              </div>
            </div>

            {/* Right col — form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
