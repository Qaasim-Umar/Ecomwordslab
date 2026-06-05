import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services: E-Commerce Copywriting and Content Strategy",
  description:
    "From product descriptions and email marketing to landing pages and brand messaging. Explore all the copywriting services EcomWords Lab offers.",
  openGraph: {
    title: "Services | EcomWords Lab",
    description:
      "From product descriptions and email marketing to landing pages and brand messaging. Explore all the copywriting services EcomWords Lab offers.",
    url: "https://ecomwordslab.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-white px-6 py-28 md:py-32">
        {/* Blue glow blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1e3a8a] mb-5">
              What We Do
            </p>
            <h1 className="font-heading font-extrabold text-4xl md:text-[3.5rem] text-[#0D1B2A] leading-[1.05] tracking-tight">
              Every Word Should Earn Its Place on the Page
            </h1>
          </div>
          <div>
            <p className="text-[0.95rem] text-[#2C2C2C]/55 leading-[1.85]">
              We write copy for every stage of the customer journey. From the product page
              to the inbox to the landing page, every service is built around one goal:
              measurable results for your e-commerce business.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#1e3a8a] hover:underline"
            >
              Work with us <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#EEF2FF] px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1e3a8a] mb-3">
              Our Services
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0D1B2A] leading-tight">
              Copy for Every Stage of the Customer Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <article
                key={service.id}
                className="bg-white border border-[#E5E0D9] rounded-2xl p-7 hover:border-[#1e3a8a]/20 hover:shadow-sm transition-all flex gap-5"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1e3a8a]/8 border border-[#1e3a8a]/12 flex items-center justify-center shrink-0 mt-0.5">
                  <ServiceIcon name={service.icon} size={18} className="text-[#1e3a8a]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1e3a8a] uppercase tracking-[0.15em] mb-1.5">
                    {service.outcome}
                  </p>
                  <h2 className="font-heading font-semibold text-[1.05rem] text-[#0D1B2A] mb-2.5 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-[0.82rem] text-[#2C2C2C]/55 leading-[1.75]">
                    {service.description}
                  </p>
                </div>
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
              See a service that fits?
            </h2>
            <p className="text-[#1e3a8a] font-heading font-semibold text-lg mb-5">
              Let&apos;s make it happen.
            </p>
            <p className="text-[#2C2C2C]/55 text-[0.88rem] mb-9 leading-[1.8] max-w-sm mx-auto">
              Tell us where you are and where you want to be. We&apos;ll handle
              the words that get you there.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-[#172d6e] transition-colors"
            >
              Start the Conversation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
