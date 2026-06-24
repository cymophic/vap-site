import Link from "next/link";
import Button from "@/components/ui/Button";
import { stats } from "@/lib/site";

export default function TrackRecord() {
  return (
    <section className="flex flex-col md:flex-row md:items-center gap-12">
      {/* Left */}
      <div className="flex flex-col gap-6 flex-1">
        <h2 className="-mt-2 text-3xl md:text-4xl font-bold text-zinc-800 tracking-tight leading-tight">
          Delivering results for decades. <br /> Built from clients like you.
        </h2>
        <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
          Real experience. Real results. Continuously trusted by business owners
          worldwide to handle the work that keeps operations running smoothly.
        </p>
        <Link href="/contact/" className="w-full md:w-fit">
          <Button
            variant="primary"
            size="lg"
            className="w-1/2 min-w-48 md:w-auto px-8"
          >
            Get in Touch
          </Button>
        </Link>
      </div>

      {/* Right: Bento Grid */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Large top card */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-5 md:p-8 flex flex-col gap-4 shadow-sm">
          <div className="flex flex-col gap-1">
            <span className="text-4xl md:text-5xl font-bold text-zinc-700">
              {stats.completedProjects.toLocaleString()}+
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Total Completed Projects
            </span>
          </div>
          <span className="text-sm text-zinc-500">
            Across industries and time zones worldwide.
          </span>
        </div>

        {/* Bottom two cards */}
        <div className="flex gap-4">
          <div className="flex-1 bg-white rounded-2xl border border-zinc-200 p-5 md:p-8 flex flex-col gap-2 shadow-sm">
            <span className="text-4xl md:text-5xl font-bold text-zinc-700">
              {stats.yearStarted}
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Year Started
            </span>
          </div>
          <div className="flex-1 bg-white rounded-2xl border border-zinc-200 p-5 md:p-8 flex flex-col gap-2 shadow-sm">
            <span className="text-4xl md:text-5xl font-bold text-zinc-700">
              {stats.totalClients}+
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Dedicated Clients Served
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
