import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingDown, VolumeX, Shuffle, CheckCircle, FileText, Mail, Target, Map } from "lucide-react";

export const metadata: Metadata = {
  title: "Design Preview | EcomWords Lab",
  robots: { index: false },
};

/* ─── shared data ─── */
const painPoints = [
  { title: "Traffic Without Conversions", description: "Visitors land on your store and leave without buying. The product is right. The copy isn't doing its job.", Icon: TrendingDown },
  { title: "A Brand Voice That Blends In", description: "Your messaging sounds like every other store in your niche. Without a distinct voice, you compete on price.", Icon: VolumeX },
  { title: "Content With No Strategy", description: "Posting without a plan means inconsistent messaging, missed opportunities, and customers who forget you exist.", Icon: Shuffle },
];

const services4 = [
  { title: "Product Descriptions", outcome: "Turn browsers into buyers", Icon: FileText },
  { title: "Email Marketing", outcome: "Keep customers coming back", Icon: Mail },
  { title: "Landing Pages", outcome: "Convert traffic into revenue", Icon: Target },
  { title: "Content Strategy", outcome: "Build a brand people remember", Icon: Map },
];

/* ══════════════════════════════════════════════
   STYLE 1 — DARK MODE
   Full-dark theme, dot-grid bg, sienna accents
══════════════════════════════════════════════ */
function DarkModeHero() {
  return (
    <section className="relative bg-[#080C10] overflow-hidden px-6 py-28">
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      {/* glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C1440E]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <span className="inline-block text-[10px] font-black tracking-[0.25em] uppercase text-[#C1440E] border border-[#C1440E]/30 rounded-full px-4 py-1.5 mb-8">
          E-Commerce Copywriting Agency
        </span>
        <h1 className="font-heading font-black text-5xl md:text-7xl text-white leading-[1.06] tracking-tight mb-6 max-w-3xl">
          Your Products Are Great.{" "}
          <span className="text-[#C1440E]">Your Copy Should Prove It.</span>
        </h1>
        <p className="text-white/40 text-lg max-w-lg leading-relaxed mb-10">
          EcomWords Lab helps e-commerce brands convert more visitors into buyers
          with copy built around your customer, your market, and your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="inline-flex items-center gap-2 bg-[#C1440E] text-white font-semibold text-sm px-7 py-3 rounded-md hover:bg-[#A83A0C] transition-colors cursor-pointer">
            Start the Conversation <ArrowRight size={14} />
          </button>
          <button className="inline-flex items-center gap-2 bg-white/6 text-white/70 border border-white/10 font-medium text-sm px-7 py-3 rounded-md hover:bg-white/10 transition-colors cursor-pointer">
            See what we do →
          </button>
        </div>

        {/* mini stat row */}
        <div className="mt-16 flex flex-col sm:flex-row gap-8 pt-8 border-t border-white/8">
          {[
            { label: "More revenue from existing traffic", val: "01" },
            { label: "A brand voice worth remembering", val: "02" },
            { label: "Copy that scales with your business", val: "03" },
          ].map((s) => (
            <div key={s.val} className="flex items-start gap-3">
              <span className="font-heading font-black text-2xl text-[#C1440E]/40 leading-none mt-0.5">{s.val}</span>
              <span className="text-sm text-white/40 leading-snug max-w-[160px]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   STYLE 2 — BENTO GRID
   Asymmetric mosaic, editorial, mixed tile sizes
══════════════════════════════════════════════ */
function BentoServices() {
  return (
    <section className="bg-[#F2EFE9] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[#C1440E] mb-3">What We Do</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#0D1B2A] leading-tight max-w-lg">
            Copy for Every Stage of the Journey
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto gap-3">
          {/* Tile 1 — wide feature tile */}
          <div className="col-span-2 bg-[#0D1B2A] rounded-2xl p-8 flex flex-col justify-between min-h-[220px]">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <FileText size={18} className="text-white" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#C1440E] uppercase tracking-widest mb-1.5">Turn browsers into buyers</p>
              <h3 className="font-heading font-bold text-xl text-white leading-snug">Product Description Copywriting</h3>
              <p className="text-sm text-white/45 mt-2 leading-relaxed">Crafting persuasive product descriptions that highlight benefits and increase conversions.</p>
            </div>
          </div>

          {/* Tile 2 — accent tile */}
          <div className="col-span-1 bg-[#C1440E] rounded-2xl p-6 flex flex-col justify-between min-h-[220px]">
            <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
              <Mail size={16} className="text-white" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Keep customers coming back</p>
              <h3 className="font-heading font-bold text-base text-white leading-snug">Email Marketing</h3>
            </div>
          </div>

          {/* Tile 3 — cream tile */}
          <div className="col-span-1 bg-white border border-[#E2DDD7] rounded-2xl p-6 flex flex-col justify-between min-h-[220px]">
            <div className="w-9 h-9 rounded-xl bg-[#C1440E]/10 flex items-center justify-center">
              <Target size={16} className="text-[#C1440E]" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#C1440E] uppercase tracking-widest mb-1">Convert traffic into revenue</p>
              <h3 className="font-heading font-bold text-base text-[#0D1B2A] leading-snug">Landing Pages</h3>
            </div>
          </div>

          {/* Tile 4 — tall quote tile */}
          <div className="col-span-2 md:col-span-1 bg-[#0D1B2A]/6 border border-[#0D1B2A]/10 rounded-2xl p-6 flex flex-col justify-center items-center text-center min-h-[160px]">
            <div className="w-9 h-9 rounded-xl bg-[#C1440E]/10 flex items-center justify-center mb-3">
              <Map size={16} className="text-[#C1440E]" strokeWidth={1.75} />
            </div>
            <p className="text-[10px] font-bold text-[#C1440E] uppercase tracking-widest mb-1">Build a brand people remember</p>
            <h3 className="font-heading font-bold text-sm text-[#0D1B2A]">Content Strategy</h3>
          </div>

          {/* Tile 5 — wide CTA tile */}
          <div className="col-span-2 md:col-span-3 bg-[#C1440E]/8 border border-[#C1440E]/15 rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h3 className="font-heading font-bold text-xl text-[#0D1B2A] mb-1">Ready to see what else we do?</h3>
              <p className="text-sm text-[#2C2C2C]/60">8 services built around one goal: copy that converts.</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 bg-[#C1440E] text-white font-semibold text-sm px-6 py-2.5 rounded-xl whitespace-nowrap hover:bg-[#A83A0C] transition-colors shrink-0">
              See All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   STYLE 3 — BRUTALISM
   Raw, bold, typographic-first, thick borders
══════════════════════════════════════════════ */
function BrutalistHero() {
  return (
    <section className="bg-[#FAF8F2] border-b-4 border-black px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-10">
          <span className="text-xs font-black tracking-[0.25em] uppercase">E-Commerce Copywriting Agency</span>
          <span className="text-xs font-mono text-black/40">EST. 2024</span>
        </div>

        {/* Hero block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black">
          {/* Left: big headline */}
          <div className="border-b-2 md:border-b-0 md:border-r-2 border-black p-8 md:p-12 bg-black">
            <h1 className="font-heading font-black text-4xl md:text-6xl text-white leading-[0.95] uppercase tracking-tight">
              Your<br />Products<br />Are<br />
              <span className="text-[#C1440E]">Great.</span>
            </h1>
          </div>

          {/* Right: sub + CTA */}
          <div className="p-8 md:p-12 flex flex-col justify-between gap-8">
            <div>
              <div className="border-l-4 border-[#C1440E] pl-4 mb-6">
                <p className="font-heading font-black text-xl md:text-2xl text-black uppercase leading-tight">
                  Your copy should prove it.
                </p>
              </div>
              <p className="font-mono text-sm text-black/60 leading-relaxed">
                EcomWords Lab helps e-commerce brands convert more visitors into buyers
                with copy built around your customer, your market, and your goals.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button className="w-full bg-[#C1440E] text-white font-black text-sm uppercase tracking-widest px-6 py-4 border-2 border-[#C1440E] hover:bg-black hover:border-black transition-colors cursor-pointer">
                Start the Conversation →
              </button>
              <button className="w-full bg-transparent text-black font-black text-sm uppercase tracking-widest px-6 py-4 border-2 border-black hover:bg-black hover:text-white transition-colors cursor-pointer">
                See What We Do
              </button>
            </div>
          </div>
        </div>

        {/* Outcome strip */}
        <div className="grid grid-cols-3 border-2 border-t-0 border-black">
          {[
            "More revenue from existing traffic",
            "A brand voice worth remembering",
            "Copy that scales with your business",
          ].map((text, i) => (
            <div key={i} className={`p-5 ${i < 2 ? "border-r-2 border-black" : ""}`}>
              <div className="w-5 h-0.5 bg-[#C1440E] mb-3" />
              <p className="font-mono text-xs text-black/70 leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   STYLE 4 — GLASSMORPHISM
   Dark gradient bg, frosted glass cards, glows
══════════════════════════════════════════════ */
function GlassPainPoints() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28"
      style={{ background: "linear-gradient(135deg, #06101A 0%, #0F2035 50%, #06101A 100%)" }}
    >
      {/* glow orbs */}
      <div className="absolute top-16 left-1/4 w-80 h-80 bg-[#C1440E]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-1/4 w-56 h-56 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C1440E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Sound Familiar?
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight">
            Most E-Commerce Copy Has One Problem
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            It describes products instead of selling them. EcomWords Lab exists to fix that.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {painPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl p-7 flex flex-col gap-5"
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(193,68,14,0.18)", border: "1px solid rgba(193,68,14,0.3)" }}
              >
                <point.Icon size={19} className="text-[#C1440E]" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base text-white mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-sm text-white/45 leading-[1.7]">{point.description}</p>
              </div>
              <div className="mt-auto pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-[#C1440E]" />
                  <span className="text-xs text-white/35">EcomWords Lab can help</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Glass CTA */}
        <div
          className="mt-8 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p className="text-white/60 text-sm">
            Ready to fix what&apos;s holding your copy back?
          </p>
          <button className="inline-flex items-center gap-2 bg-[#C1440E] text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-[#A83A0C] transition-colors cursor-pointer shrink-0">
            Start the Conversation <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   PAGE SHELL
══════════════════════════════════════════════ */
export default function DesignPreviewPage() {
  function Label({ n, name, desc }: { n: string; name: string; desc: string }) {
    return (
      <div className="bg-[#0D1B2A] px-6 py-5 flex items-center gap-5">
        <span className="font-heading font-black text-4xl text-white/10 leading-none">{n}</span>
        <div>
          <p className="font-heading font-bold text-white text-base">{name}</p>
          <p className="text-white/40 text-xs mt-0.5">{desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* back link */}
      <div className="bg-[#F8F7F4] border-b border-[#EEECE8] px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium text-[#C1440E] hover:underline">← Back to site</Link>
        <span className="text-xs text-[#2C2C2C]/40 font-mono">Design Preview — Choose a direction</span>
      </div>

      {/* 1: Dark Mode */}
      <Label n="01" name="Dark Mode" desc="Full-dark theme with dot-grid background and sienna accents. Premium, editorial." />
      <DarkModeHero />

      {/* 2: Bento Grid */}
      <Label n="02" name="Bento Grid" desc="Asymmetric mosaic tiles, mixed sizes, editorial feel. Modern and content-dense." />
      <BentoServices />

      {/* 3: Brutalism */}
      <Label n="03" name="Brutalism" desc="Raw, bold, typographic-first. Thick borders, stark contrast, no softness." />
      <BrutalistHero />

      {/* 4: Glassmorphism */}
      <Label n="04" name="Glassmorphism" desc="Frosted glass cards on dark gradient with glow orbs. Airy and dimensional." />
      <GlassPainPoints />

      {/* decision bar */}
      <div className="bg-[#0D1B2A] px-6 py-6 text-center">
        <p className="text-white/50 text-sm">Pick a style above and it will be applied across the entire site.</p>
      </div>
    </div>
  );
}
