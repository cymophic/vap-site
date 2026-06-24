"use client";

import Link from "next/link";
import { useState } from "react";
import { IconPhone, IconMail, IconBrandLinkedin } from "@tabler/icons-react";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle form input change
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <section className="w-full flex flex-col md:flex-row gap-12 md:gap-24 md:items-start mb-16">
      {/* Left: Info */}
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Get In Touch
          </p>
          <h1 className="-mt-2 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            Let&#39;s Talk
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-sm">
            Have a question about our services, or ready to explore how we can
            help your business grow? We&#39;d love to hear from you.
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold text-zinc-700">Contact Info</p>
          <div className="flex flex-col gap-3">
            <Link
              href="tel:+639481000008"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                <IconPhone size={18} className="text-brand-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-800 group-hover:text-brand-accent transition-colors">
                  +63 948-100-0008
                </span>
                <span className="text-xs text-zinc-400">Viber | WhatsApp</span>
              </div>
            </Link>
            <Link
              href="mailto:contact@jennyannvalenciano.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                <IconMail size={18} className="text-brand-accent" />
              </div>
              <span className="text-sm font-medium text-zinc-800 group-hover:text-brand-accent transition-colors">
                contact@jennyannvalenciano.com
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/virtualassistantph/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                <IconBrandLinkedin size={18} className="text-brand-accent" />
              </div>
              <span className="text-sm font-medium text-zinc-800 group-hover:text-brand-accent transition-colors">
                linkedin.com/in/virtualassistantph
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 bg-white rounded-2xl border border-zinc-200 p-4 pt-8 md:p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-1 text-center">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Send Us a Message
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-700">
              Full Name <span className="text-brand-accent">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full h-11 px-4 rounded-lg border border-zinc-200 text-sm text-zinc-800 placeholder:text-zinc-500/70 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-700">
              Business Email <span className="text-brand-accent">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="w-full h-11 px-4 rounded-lg border border-zinc-200 text-sm text-zinc-800 placeholder:text-zinc-500/70 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="w-full h-11 px-4 rounded-lg border border-zinc-200 text-sm text-zinc-800 placeholder:text-zinc-500/70 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-700">
              Message <span className="text-brand-accent">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your business needs..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm text-zinc-800 placeholder:text-zinc-500/70 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition resize-none"
            />
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full">
          Send Message
        </Button>
      </div>
    </section>
  );
}
