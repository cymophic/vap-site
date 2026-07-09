"use client";

import Image from "next/image";
import { useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { cn } from "@/lib/utils/cn";

type Service = {
  title: string;
  outcome: string;
  bullets: string[];
  image: string;
};
const services: Service[] = [
  {
    title: "Executive Assistance",
    outcome: "Stop spending time on administrative work. We manage your daily operations so you can focus on growing your business",
    bullets: [
      "Executive Assistance",
      "Calendar & Appointment Management",
      "Email & Inbox Management",
      "Customer Support",
      "CRM Management",
      "Data Entry & Research",
      "SOP Documentation",
      "Travel Arrangements",
      "Project Coordination",
    ],
    image: "/assets/services/executive-assistance.jpg",
  },
  {
    title: "Social Media Management",
    outcome: "Build Your Brand While We Handle Everything",
    bullets: [
      "Content Planning",
      "Graphic Design",
      "Caption Writing",
      "Hashtag Research",
      "Scheduling",
      "Community Management",
      "LinkedIn Marketing",
      "Facebook & Instagram Management",
      "Analytics Reporting",
      "Ongoing Management and Brand Reputation Support",
    ],
    image: "/assets/services/social-media.jpg",
  },
  {
    title: "AI Content Creation",
    outcome: "Create High-End AI Content That Gets Attention",
    bullets: [
      "AI Image Creation",
      "AI Video Creation",
      "Product Videos",
      "Image-to-Video Animation",
      "AI Prompt Engineering",
      "Commercial Ads",
      "Social Media Reels",
      "Marketing Videos",
    ],
    image: "/assets/services/ai-content.jpg",
  },
  {
    title: "WordPress Website Design",
    outcome: "Beautiful Websites That Convert Visitors into Customers",
    bullets: [
      "WordPress Design",
      "Elementor Development",
      "Landing Pages",
      "Website Updates",
      "Blog Publishing",
      "Website Maintenance",
      "Basic SEO",
      "Performance Optimization",
    ],
    image: "/assets/services/wordpress.jpg",
  },
  {
    title: "Graphic Design & Branding",
    outcome: "Professional Designs That Represent Your Business",
    bullets: [
      "Social Media Graphics",
      "Flyers",
      "Brochures",
      "Banners",
      "Presentation Slides",
      "Infographics",
      "Business Documents",
      "Marketing Materials",
    ],
    image: "/assets/services/graphic-design.jpg",
  },
  {
    title: "Video Editing",
    outcome: "Professional Videos for Social Media & Marketing",
    bullets: [
      "YouTube Editing",
      "Short-form Videos",
      "Reels",
      "TikTok",
      "LinkedIn Videos",
      "Motion Graphics",
      "Captions",
      "Promotional Videos",
    ],
    image: "/assets/services/video-editing.jpg",
  },
  {
    title: "SEO Content Writing",
    outcome: "Content That Ranks and Converts",
    bullets: [
      "Blog Writing",
      "Website Content",
      "Product Descriptions",
      "Landing Pages",
      "SEO Optimization",
      "Keyword Research",
    ],
    image: "/assets/services/content-planning.jpg",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="w-full flex flex-col gap-12 py-20 md:py-32">
      {/* Header */}
      <div className="flex flex-col gap-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          What We Offer
        </p>
        <h2 className="-mt-2 text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          Our Core Services
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm"
          >
            {/* Image */}
            <div className="relative w-full aspect-video bg-zinc-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              <div className="flex flex-col gap-1 pb-8">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {service.title}
                </h3>
                <p className="text-base text-zinc-500 leading-relaxed min-h-18">
                  {service.outcome}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-zinc-100" />

              {/* Accordion Toggle */}
              <button
                onClick={() => toggle(i)}
                className="flex items-center justify-between group mt-4"
              >
                <span
                  className={cn(
                    "text-base font-semibold transition-colors group-hover:text-brand-accent",
                    openIndex === i ? "text-brand-accent" : "text-zinc-700",
                  )}
                >
                  What&#39;s Included
                </span>
                {openIndex === i ? (
                  <IconMinus size={16} className="text-brand-accent shrink-0" />
                ) : (
                  <IconPlus size={16} className="text-zinc-400 shrink-0" />
                )}
              </button>

              {/* Bullets */}
              <div
                className={cn(
                  "grid transition-all duration-300",
                  openIndex === i
                    ? "grid-rows-[1fr] mt-4"
                    : "grid-rows-[0fr] mt-0",
                )}
              >
                <ul className="overflow-hidden flex flex-col gap-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-zinc-500 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
