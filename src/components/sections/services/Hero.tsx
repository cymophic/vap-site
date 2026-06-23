import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row md:items-center gap-12">
      {/* Left: Text */}
      <div className="flex flex-col gap-6 flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
          Our Services
        </p>
        <h1 className="-mt-4 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          Assistance for Every Service.
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl">
          We provide virtual support across administrative, creative, and
          digital services — giving your business the help it needs, handled by
          an experienced and dedicated team.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <Button variant="primary" size="lg" className="w-full md:w-auto px-8">
            Book a Meeting
          </Button>
          <Link href="/contact/" className="w-full md:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full md:w-auto px-8"
            >
              Let&#39;s Chat
            </Button>
          </Link>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="relative shadow-2xl w-full max-w-sm aspect-3/4 rounded-3xl overflow-hidden bg-zinc-100">
          <Image
            src="/assets/services/hero.jpg"
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
