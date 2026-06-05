"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { serviceDropdownOptions } from "@/lib/data";

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = "w-full border border-[#E5E1DB] rounded-xl px-4 py-3 text-sm text-[#2C2C2C] bg-[#FAFAF8] placeholder:text-[#2C2C2C]/30 focus:outline-none focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 transition";

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center border border-[#EEECE8] shadow-sm">
        <div className="w-14 h-14 rounded-full bg-[#1e3a8a]/8 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={26} className="text-[#1e3a8a]" strokeWidth={1.75} />
        </div>
        <h3 className="font-heading font-bold text-xl text-[#0D1B2A] mb-2">Message received.</h3>
        <p className="text-[#2C2C2C]/55 text-sm leading-relaxed">
          Thanks for reaching out. We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-[#E8E4DE] shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-semibold text-[#0D1B2A] tracking-wide uppercase">
            Name <span className="text-[#1e3a8a]">*</span>
          </label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-semibold text-[#0D1B2A] tracking-wide uppercase">
            Email <span className="text-[#1e3a8a]">*</span>
          </label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@yourstore.com" className={inputClass} />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="service" className="text-xs font-semibold text-[#0D1B2A] tracking-wide uppercase">
            Service Interested In
          </label>
          <select id="service" name="service" value={form.service} onChange={handleChange} className={inputClass}>
            <option value="">Select a service…</option>
            {serviceDropdownOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className="text-xs font-semibold text-[#0D1B2A] tracking-wide uppercase">
            Message <span className="text-[#1e3a8a]">*</span>
          </label>
          <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your project…" className={`${inputClass} resize-none`} />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-[#1e3a8a] text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-[#172d6e] transition-colors cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}
