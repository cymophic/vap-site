import React from "react";
import { IconSend, IconUserCheck, IconCircleCheck } from "@tabler/icons-react";

type Step = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};
const steps: Step[] = [
  {
    icon: IconSend,
    title: "Send in Your Tasks",
    description:
      "Send your tasks via email, chat, or phone after you sign up — however works best for you.",
  },
  {
    icon: IconUserCheck,
    title: "Your Assistant Picks It Up",
    description:
      "Your VA performs the task and keeps you updated throughout. Track progress anytime.",
  },
  {
    icon: IconCircleCheck,
    title: "Task Completed",
    description:
      "Your VA completes the task or coordinates with the right people to deliver it back on time.",
  },
];

export default function Process() {
  return (
    <section className="flex flex-col gap-12 px-0 md:px-16">
      {/* Header */}
      <div className="flex flex-col gap-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          How It Works
        </p>
        <h2 className="-mt-2 text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          Getting Started Is Simple
        </h2>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed">
          We keep the process straightforward so you can focus on your business,
          from your first message to your first completed task.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col xl:flex-row items-stretch gap-0 md:gap-0">
        {steps.map((step, i) => (
          <React.Fragment key={step.title}>
            {/* Card */}
            <div className="relative flex-1 bg-white rounded-2xl border border-zinc-200 flex flex-col items-center text-center gap-6 px-8 py-12 shadow-sm max-w-136 mx-auto">
              {/* Step Number */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-accent text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                <step.icon size={24} className="text-brand-accent" />
              </div>
              {/* Content */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="text-base text-zinc-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Connecting Dashed Line */}
            {i < steps.length - 1 && (
              <>
                <div className="xl:hidden h-16 flex justify-center">
                  <div className="h-16 border-l-2 border-dashed border-zinc-300" />
                </div>
                <div className="hidden xl:block w-12 shrink-0 self-center border-t-2 border-dashed border-zinc-300" />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
