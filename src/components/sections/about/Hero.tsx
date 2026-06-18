import { stats } from "@/lib/site";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="w-full mx-auto max-w-7xl flex flex-col items-center text-center gap-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
        About Us
      </p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
        <span className="text-zinc-900">Delivering Virtual Support,</span>
        <br />
        <span className="text-brand-accent">
          For Over {stats.yearsOfExperience} Years.
        </span>
      </h1>
      <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-3xl">
        We believe your time is your most valuable asset. <br />
        Our mission is to help businesses worldwide reclaim it.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="primary" size="lg" className="px-8 whitespace-nowrap">
          Book a Meeting
        </Button>
        <Link href="/contact/">
          <Button
            variant="secondary"
            size="lg"
            className="px-8 whitespace-nowrap"
          >
            Let&#39;s Chat
          </Button>
        </Link>
      </div>
    </section>
  );
}
