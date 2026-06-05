"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GeometricBackground from "@/components/ui/geometric";

const ACCENT = "#1e3a8a";

interface StatCardProps {
  value: string;
  label: string;
  trend?: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, trend, icon }) => (
  <div className="bg-white rounded-lg p-3 shadow-sm border border-[#1e3a8a]/10">
    <div className="flex items-start justify-between mb-1.5">
      <div className="text-[#1e3a8a] [&>svg]:w-4 [&>svg]:h-4">{icon}</div>
      {trend && (
        <span className="text-[11px] font-medium text-green-600 flex items-center gap-0.5">
          <TrendingUp className="w-3 h-3" />
          {trend}
        </span>
      )}
    </div>
    <div className="text-xl font-bold text-[#0D1B2A] mb-0.5">{value}</div>
    <div className="text-xs text-[#0D1B2A]/60">{label}</div>
  </div>
);

interface MockupCardProps {
  title: string;
  subtitle: string;
  metrics: Array<{ label: string; value: string }>;
}

const MockupCard: React.FC<MockupCardProps> = ({ title, subtitle, metrics }) => (
  <div className="bg-[#0D1B2A] rounded-xl p-4 text-white shadow-xl">
    <div className="flex items-center gap-1.5 mb-3">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
    </div>
    <h3 className="font-heading text-base font-bold mb-1">{title}</h3>
    <p className="text-white/50 text-xs mb-3">{subtitle}</p>
    <div className="space-y-2">
      {metrics.map((metric, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-xs text-white/50">{metric.label}</span>
          <span className="text-sm font-bold text-[#1e3a8a]">{metric.value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function Hero() {
  const stats = [
    {
      value: "3.2x",
      label: "Avg. Conversion Lift",
      trend: "+24%",
      icon: <Target className="w-5 h-5" />,
    },
    {
      value: "500+",
      label: "Products Optimized",
      trend: "+18%",
      icon: <Zap className="w-5 h-5" />,
    },
  ];

  const mockupMetrics = [
    { label: "Click-Through Rate", value: "+156%" },
    { label: "Add to Cart", value: "+89%" },
    { label: "Revenue Impact", value: "+$2.4M" },
  ];

  return (
    <GeometricBackground className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column */}
          <div className="space-y-5 relative z-10">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#1e3a8a]/20 rounded-full px-3 py-1.5 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] animate-pulse" />
              <span className="text-xs font-medium text-[#0D1B2A]">
                Trusted by 200+ E-commerce Brands
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight">
                Words That{" "}
                <span className="text-[#1e3a8a] relative inline-block">
                  Convert
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="6"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.5C50 2.5 150 2.5 199 5.5"
                      stroke="#1e3a8a"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#0D1B2A]/60 leading-relaxed max-w-lg">
                Premium copywriting that transforms product pages into
                revenue-generating machines. Data-driven, conversion-optimized,
                and crafted for scale.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-semibold px-6 py-2.5 text-sm rounded-lg shadow-md shadow-[#1e3a8a]/20 hover:shadow-lg transition-all duration-300 group h-auto"
                asChild
              >
                <Link href="/#contact">
                  Get Your Free Audit
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#0D1B2A] text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white font-semibold px-6 py-2.5 text-sm rounded-lg transition-all duration-300 h-auto"
                asChild
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-5 pt-2 border-t border-[#0D1B2A]/[0.07]">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#0D1B2A] border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-xs text-[#0D1B2A]/60 font-medium">Join 200+ brands</span>
              </div>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 fill-[#1e3a8a]" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-1.5 text-xs text-[#0D1B2A]/60 font-medium">4.9/5 avg rating</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative z-10">
            <div className="space-y-3">

              {/* Mockup card */}
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <MockupCard
                  title="Product Page Optimization"
                  subtitle="Real results from our latest campaign"
                  metrics={mockupMetrics}
                />
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <StatCard {...stat} />
                  </div>
                ))}
              </div>

              {/* Fast turnaround badge */}
              <Card className="bg-white border-[#1e3a8a]/20 py-3 px-4 shadow-md gap-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1e3a8a] flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0D1B2A]">Fast Turnaround</div>
                    <div className="text-xs text-[#0D1B2A]/60">48-hour delivery on most projects</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Decorative rings */}
            <div className="absolute -top-6 -right-6 w-20 h-20 border-4 border-[#1e3a8a]/20 rounded-full pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-[#0D1B2A]/10 rounded-full pointer-events-none" />
          </div>

        </div>
      </div>
    </GeometricBackground>
  );
}
