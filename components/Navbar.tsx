"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const links = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "sticky top-4 z-50 mx-4 md:mx-auto md:w-full md:max-w-4xl",
        "rounded-xl border border-[#EEECE8] shadow-sm",
        "bg-white/30 backdrop-blur-xl backdrop-saturate-150",
      )}
    >
      <nav className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo className="h-9 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden md:inline-flex bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-semibold shadow-sm"
            asChild
          >
            <Link href="/#contact">Get in Touch</Link>
          </Button>

          <button
            className="md:hidden text-[#0D1B2A] p-1 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#EEECE8] px-4 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={buttonVariants({
                variant: "ghost",
                className: "justify-start text-[#0D1B2A]",
              })}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button
              className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-semibold"
              asChild
            >
              <Link href="/#contact" onClick={() => setOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
