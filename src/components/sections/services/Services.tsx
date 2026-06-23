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
    outcome: "Delegate the details so you can lead with focus.",
    bullets: [
      "Calendar management & scheduling",
      "Email handling & correspondence",
      "Travel arrangements & coordination",
      "Meeting preparation & follow-ups",
      "Data entry & database management",
    ],
    image: "/assets/services/executive-assistance.jpg",
  },
  {
    title: "Email & Calendar Management",
    outcome: "Stay organized and in control of your time.",
    bullets: [
      "Inbox organization & filtering",
      "Email responses & follow-ups",
      "Appointment scheduling & reminders",
      "Calendar blocking & prioritization",
      "Meeting coordination across time zones",
    ],
    image: "/assets/services/email-calendar.jpg",
  },
  {
    title: "Workflow Automation",
    outcome: "Eliminate bottlenecks and reclaim productive hours.",
    bullets: [
      "Process mapping & documentation",
      "Tool integration & automation setup",
      "Repetitive task elimination",
      "SOP creation & optimization",
      "Platform setup (Zapier, Make, Notion)",
    ],
    image: "/assets/services/workflow-automation.jpg",
  },
  {
    title: "AI Content Creation",
    outcome: "Maintain a consistent brand presence at scale.",
    bullets: [
      "AI-generated images & visuals",
      "Short-form video & reel creation",
      "Brand-consistent content production",
      "Social-ready asset creation",
      "Prompt-engineered copy & captions",
    ],
    image: "/assets/services/ai-content.jpg",
  },
  {
    title: "Video Editing",
    outcome: "Deliver polished, professional video content consistently.",
    bullets: [
      "Short-form reels & TikTok edits",
      "Long-form YouTube & promo videos",
      "Captions, transitions & effects",
      "Intro/outro & branding overlays",
      "Ad creatives & testimonial cuts",
    ],
    image: "/assets/services/video-editing.jpg",
  },
  {
    title: "Graphic Design & Branding",
    outcome: "Present your business with clarity and consistency.",
    bullets: [
      "Social media graphics & templates",
      "Brand kits & style guides",
      "Presentation & pitch deck design",
      "Marketing materials & flyers",
      "Canva & Adobe Photoshop assets",
    ],
    image: "/assets/services/graphic-design.jpg",
  },
  {
    title: "Content Planning & Creation",
    outcome: "Build a content strategy that drives consistent engagement.",
    bullets: [
      "Monthly content calendars",
      "Caption & copy writing",
      "Blog & article drafting",
      "Content repurposing across platforms",
      "Hashtag research & strategy",
    ],
    image: "/assets/services/content-planning.jpg",
  },
  {
    title: "Social Media Management",
    outcome: "Build and maintain a credible online presence.",
    bullets: [
      "Daily/weekly posting & scheduling",
      "Community engagement & replies",
      "Platform growth strategy",
      "Performance tracking & reporting",
      "Profile optimization",
    ],
    image: "/assets/services/social-media.jpg",
  },
  {
    title: "WordPress & Web Design",
    outcome:
      "Get a professionally built website that represents your business with confidence.",
    bullets: [
      "WordPress site setup & customization",
      "Page design & layout",
      "Plugin setup & optimization",
      "Speed & SEO improvements",
      "Ongoing maintenance & updates",
    ],
    image: "/assets/services/wordpress.jpg",
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
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
            <div className="p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
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
                className="flex items-center justify-between group"
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
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
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
