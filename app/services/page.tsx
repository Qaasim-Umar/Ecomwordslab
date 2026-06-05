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
      <section className="bg-[#0D1B2A] px-6 py-28 md:py-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#C1440E] mb-5">
              What We Do
            </p>
            <h1 className="font-heading font-extrabold text-4xl md:text-[3.5rem] text-white leading-[1.05] tracking-tight">
              Every Word Should Earn Its Place on the Page
            </h1>
          </div>
          <div>
            <p className="text-[0.95rem] text-white/45 leading-[1.85]">
              We write copy for every stage of the customer journey. From the product page
              to the inbox to the landing page, every service is built around one goal:
              measurable results for your e-commerce business.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#C1440E] hover:underline"
            >
              Work with us <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#F2EFE9] px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <article
                key={service.id}
                className="bg-white border border-[#E5E0D9] rounded-2xl p-7 hover:border-[#C1440E]/20 hover:shadow-md transition-all flex gap-5"
              >
                <div className="w-11 h-11 rounded-xl bg-[#C1440E]/8 border border-[#C1440E]/12 flex items-center justify-center shrink-0 mt-0.5">
                  <ServiceIcon name={service.icon} size={18} className="text-[#C1440E]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#C1440E] uppercase tracking-[0.15em] mb-1.5">
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
      <section className="bg-[#0D1B2A] px-6 py-24">
        <div className="max-w-xl mx-auto">
          <div className="backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] rounded-2xl px-10 py-14 text-center">
            <h2 className="font-heading font-bold text-2xl text-white mb-3 leading-tight">
              See a service that fits?
            </h2>
            <p className="text-white/40 text-[0.88rem] mb-8 leading-[1.8]">
              Tell us where you are and where you want to be. We&apos;ll handle
              the words that get you there.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#C1440E] text-white font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-[#A83A0C] transition-colors"
            >
              Start the Conversation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
