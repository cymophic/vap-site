import React from "react";
import {
  IconCircleCheck,
  IconAward,
  IconClock,
  IconStar,
} from "@tabler/icons-react";
import { stats } from "@/lib/site";

type Stat = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  value: string;
  label: string;
};

const statItems: Stat[] = [
  {
    icon: IconCircleCheck,
    value: `${stats.completedProjects.toLocaleString()}+`,
    label: "Completed Projects",
  },
  {
    icon: IconAward,
    value: `${stats.yearsOfExperience}+`,
    label: "Years of Experience",
  },
  {
    icon: IconClock,
    value: `${stats.hours.toLocaleString()}+`,
    label: "Hours Worked",
  },
  {
    icon: IconStar,
    value: stats.rating.toFixed(1),
    label: "Client Rating",
  },
];

export default function Stats() {
  return (
    <section className="w-full bg-zinc-900 py-16">
      <div className="mx-auto max-w-7xl px-4 xl:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {statItems.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <stat.icon size={24} className="text-brand-accent" />
            </div>
            <span className="text-3xl font-bold text-zinc-100">
              {stat.value}
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
