import Image from "next/image";
import Link from "next/link";
import { IconCheck, IconStarFilled } from "@tabler/icons-react";
import Button from "@/components/ui/Button";
import { stats } from "@/lib/site";

const features: string[] = [
  "Executive & administrative support",
  "Social media management & content creation",
  "AI-powered video editing & branding visuals",
  "WordPress, workflow automation & more",
];

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row md:items-center md:gap-12 py-16">
      {/* Left */}
      <div className="flex flex-col mx-auto gap-6 flex-1">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase text-center md:text-left tracking-widest text-brand-accent">
          Virtual Assistant Services
        </p>

        {/* Heading */}
        <h1 className="-mt-4 text-4xl md:text-6xl font-bold text-center md:text-left leading-tight tracking-tight text-zinc-900">
          You focus on Growth. <br /> We Handle{" "}
          <span className="text-brand-accent">the Rest.</span>
        </h1>

        {/* Subheading */}
        <p className="text-zinc-500 text-center md:text-left max-w-md text-lg md:text-xl leading-relaxed">
          {stats.yearsOfExperience}+ years of trusted virtual support designed
          with quality, consistency, and results so you can focus on what
          matters most.
        </p>

        {/* Checklist */}
        <ul className="hidden md:flex flex-col gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-zinc-700">
              <IconCheck
                size={18}
                className="text-brand-accent shrink-0 mt-0.5"
              />
              <span className="text-base font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:gap-4 items-center">
          {/* Book a Meeting Button */}
          <div className="mt-2 w-full md:w-fit flex justify-center sm:justify-left">
            <Button
              variant="primary"
              size="lg"
              className="w-full md:w-auto max-w-md px-8"
            >
              Book a Meeting
            </Button>
          </div>

          {/* Contact Us Button */}
          <Link
            href="/contact/"
            className="mt-2 w-full md:w-fit flex justify-center sm:justify-left"
          >
            <Button
              variant="secondary"
              size="lg"
              className="w-full md:w-auto max-w-md px-8"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-2 sm:mt-4 flex justify-center md:justify-start items-center gap-5 sm:gap-8">
          {/* Rating */}
          <div className="flex flex-col">
            <span className="flex items-center gap-1 text-xl font-bold text-zinc-900">
              {stats.rating.toFixed(1)}
              <IconStarFilled size={16} className="text-orange-400" />
            </span>
            <span className="text-xs text-zinc-500">from 100+ Clients</span>
          </div>
          <div className="w-px h-8 bg-zinc-200" />
          {/* Hours Worked */}
          <div className="flex flex-col">
            <span className="text-xl font-bold text-zinc-900">
              {stats.hours.toLocaleString()}+
            </span>
            <span className="text-xs text-zinc-500">Hours Worked</span>
          </div>
          <div className="w-px h-8 bg-zinc-200" />
          {/* Years Experience */}
          <div className="flex flex-col">
            <span className="text-xl font-bold text-zinc-900">
              {stats.yearsOfExperience}+
            </span>
            <span className="text-xs text-zinc-500">Years Experience</span>
          </div>
        </div>

        {/* Mobile: Image + Checklist */}
        <div className="mt-8 flex flex-row mx-auto items-center gap-6 md:hidden">
          {/* Image */}
          <div className="relative shadow-2xl w-32 shrink-0 aspect-square rounded-2xl overflow-hidden bg-zinc-100">
            <Image
              src="/assets/hero/image.jpg"
              alt="Virtual assistant at work"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Checklist */}
          <ul className="flex flex-col gap-2 flex-1">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-zinc-700"
              >
                <IconCheck
                  size={14}
                  className="text-brand-accent shrink-0 mt-0.5"
                />
                <span className="text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: Desktop Only */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="relative shadow-2xl w-full max-w-sm aspect-3/4 rounded-3xl overflow-hidden bg-zinc-100">
          <Image
            src="/assets/hero/image.jpg"
            alt="Virtual assistant at work"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
