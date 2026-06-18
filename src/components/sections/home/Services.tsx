import React from "react";
import {
  IconSparkles,
  IconVideo,
  IconHash,
  IconPencil,
  IconPalette,
  IconBriefcase,
  IconMail,
  IconBrandWordpress,
  IconSettings2,
} from "@tabler/icons-react";

type Service = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};
const services: Service[] = [
  {
    icon: IconSparkles,
    title: "AI Content Creation",
    description:
      "Engaging AI-generated images, videos, and visuals that keep your brand active and relevant online.",
  },
  {
    icon: IconVideo,
    title: "Video Editing",
    description:
      "Professional short-form and long-form video editing for reels, ads, and promotional content.",
  },
  {
    icon: IconHash,
    title: "Social Media Management",
    description:
      "Consistent posting, engagement, and growth strategies across your social media platforms.",
  },
  {
    icon: IconPencil,
    title: "Content Planning & Creation",
    description:
      "Strategic content calendars and creative assets that align with your brand and business goals.",
  },
  {
    icon: IconPalette,
    title: "Graphic Design & Branding",
    description:
      "Eye-catching graphics and branding visuals crafted to make your business stand out.",
  },
  {
    icon: IconBriefcase,
    title: "Executive Assistance",
    description:
      "High-level administrative support to keep your operations organized and running efficiently.",
  },
  {
    icon: IconMail,
    title: "Email & Calendar Management",
    description:
      "Inbox organization, scheduling, and appointment management so nothing falls through the cracks.",
  },
  {
    icon: IconBrandWordpress,
    title: "WordPress & Web Design",
    description:
      "Clean, functional WordPress websites built and optimized to represent your business professionally.",
  },
  {
    icon: IconSettings2,
    title: "Workflow Automation",
    description:
      "Streamlined processes and automated workflows that save time and reduce manual work.",
  },
];

export default function Services() {
  return (
    <section className="w-full mx-auto max-w-7xl flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          What We Offer
        </p>
        <h2 className="-mt-2 text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          Our Core Services
        </h2>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed">
          Comprehensive virtual support tailored to the tasks that keep your
          business moving forward.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
              <service.icon size={20} className="text-brand-accent" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold text-zinc-900">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
