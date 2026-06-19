import Image from "next/image";
import { stats } from "@/lib/site";

export default function Founder() {
  return (
    <section className="w-full mx-auto max-w-5xl flex flex-col md:flex-row md:items-center gap-18">
      {/* Left: Image */}
      <div className="shrink-0">
        <div className="relative shadow-2xl w-72 md:w-96 aspect-3/4 rounded-3xl overflow-hidden bg-zinc-100 mx-auto">
          <Image
            src="/assets/about/portrait.jpg"
            alt="Jenny Ann Valenciano"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="flex flex-col gap-6 flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Our Founder
        </p>
        <h2 className="-mt-4 text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          Jenny Ann Valenciano
        </h2>
        <div className="flex flex-col gap-4 text-zinc-500 text-base leading-relaxed">
          <p>
            Virtual Assistant Provider was founded in {stats.yearStarted} and is
            owned and operated by Jenny A. Valenciano. With over{" "}
            {stats.yearsOfExperience} years of experience as an Executive
            Virtual Assistant, she has established herself as a trusted and
            dependable professional in her field.
          </p>
          <p>
            Throughout her career, she has provided exceptional virtual
            assistance services to numerous individuals and companies across the
            USA, Canada, UK, and New Zealand. Her clients rely on her to help
            them achieve their goals and save their valuable time to focus on
            more important activities.
          </p>
        </div>
      </div>
    </section>
  );
}
