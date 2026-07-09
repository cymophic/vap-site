"use client";

import {
  IconCircleCheck,
  IconAward,
  IconClock,
  IconStar,
} from "@tabler/icons-react";
import { stats } from "@/lib/site";
import { useCountScramble } from "@/lib/hooks/useCountScramble";

export default function Stats() {
  const ANIMATION_DURATION = 670;
  const { count: completedProjects, ref: completedProjectsRef } =
    useCountScramble(stats.completedProjects, ANIMATION_DURATION);
  const { count: yearsOfExperience, ref: yearsOfExperienceRef } =
    useCountScramble(stats.yearsOfExperience, ANIMATION_DURATION);
  const { count: hours, ref: hoursRef } = useCountScramble(
    stats.hours,
    ANIMATION_DURATION,
  );
  const { count: rating, ref: ratingRef } = useCountScramble(
    stats.rating,
    ANIMATION_DURATION,
    1,
  );

  return (
    <section className="w-full bg-zinc-900 py-16">
      <div className="mx-auto max-w-7xl px-4 xl:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Rating */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center">
            <IconStar size={24} className="text-brand-accent" />
          </div>
          <span ref={ratingRef} className="text-3xl font-bold text-zinc-100">
            {rating.toFixed(1)}
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Client Rating
          </span>
        </div>

        {/* Completed Projects */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center">
            <IconCircleCheck size={24} className="text-brand-accent" />
          </div>
          <span
            ref={completedProjectsRef}
            className="text-3xl font-bold text-zinc-100"
          >
            {completedProjects.toLocaleString()}+
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Completed Projects
          </span>
        </div>

        {/* Years of Experience */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center">
            <IconAward size={24} className="text-brand-accent" />
          </div>
          <span
            ref={yearsOfExperienceRef}
            className="text-3xl font-bold text-zinc-100"
          >
            {yearsOfExperience}+
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Years of Experience
          </span>
        </div>

        {/* Hours Worked */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center">
            <IconClock size={24} className="text-brand-accent" />
          </div>
          <span ref={hoursRef} className="text-3xl font-bold text-zinc-100">
            {hours.toLocaleString()}+
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Hours Worked
          </span>
        </div>
      </div>
    </section>
  );
}
