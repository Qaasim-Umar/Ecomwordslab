"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Our product page conversions jumped after EcomWords Lab rewrote our copy. The difference was immediate and measurable.",
    name: "Sarah K.",
    role: "Founder, Bloom Skincare",
    initials: "SK",
  },
  {
    quote: "They nailed our brand voice on the first draft. The emails they wrote for us consistently outperform anything we'd done before.",
    name: "Marcus T.",
    role: "CEO, Ridge & Co.",
    initials: "MT",
  },
  {
    quote: "Clear process, fast turnaround, and copy that actually sounds like us. Exactly what we needed.",
    name: "Priya N.",
    role: "Marketing Lead, Aura Home",
    initials: "PN",
  },
  {
    quote: "EcomWords Lab brought real strategy to our content. Every piece they deliver feels intentional and on-brand.",
    name: "James O.",
    role: "Owner, Veldt Apparel",
    initials: "JO",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <figure className="bg-white border border-[#E8E4DC] rounded-2xl p-8 flex flex-col gap-6 h-full">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill="#1e3a8a" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.951 2.878c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
          </svg>
        ))}
      </div>

      <blockquote className="text-[0.88rem] text-[#2C2C2C]/70 leading-[1.8] flex-1">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <figcaption className="flex items-center gap-3 pt-5 border-t border-[#EEECE8]">
        <div className="w-9 h-9 rounded-full bg-[#1e3a8a] flex items-center justify-center shrink-0">
          <span className="text-[10px] font-bold text-white tracking-wide">{t.initials}</span>
        </div>
        <div>
          <p className="text-[0.83rem] font-semibold text-[#0D1B2A]">{t.name}</p>
          <p className="text-[0.75rem] text-[#2C2C2C]/45">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

// On desktop, 3 cards visible → only 2 positions (0 and 1) to slide through
const DESKTOP_VISIBLE = 3;
const desktopMax = testimonials.length - DESKTOP_VISIBLE; // = 1

export default function TestimonialsSlider() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  // Auto-advance every 3.5s
  useEffect(() => {
    const id = setInterval(() => {
      setMobileIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
      setDesktopIndex((i) => (i === desktopMax ? 0 : i + 1));
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ── Mobile: one card at a time ── */}
      <div className="md:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-full shrink-0 px-1">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-7">
          <button
            onClick={() => setMobileIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
            aria-label="Previous"
            className="w-8 h-8 rounded-full border border-[#E8E4DC] flex items-center justify-center text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === mobileIndex ? "w-5 h-2 bg-[#1e3a8a]" : "w-2 h-2 bg-[#1e3a8a]/25"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setMobileIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
            aria-label="Next"
            className="w-8 h-8 rounded-full border border-[#E8E4DC] flex items-center justify-center text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Desktop: 3 cards visible, auto-slides ── */}
      <div className="hidden md:block overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${desktopIndex * (100 / DESKTOP_VISIBLE)}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="shrink-0 px-2.5" style={{ width: `${100 / DESKTOP_VISIBLE}%` }}>
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-7">
          {Array.from({ length: desktopMax + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setDesktopIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === desktopIndex ? "w-5 h-2 bg-[#1e3a8a]" : "w-2 h-2 bg-[#1e3a8a]/25"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
