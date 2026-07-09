import Image from "next/image";
import Link from "next/link";
import CalButton from "@/components/ui/CalButton";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row md:items-center gap-12">
      {/* Left: Text */}
      <div className="flex flex-col gap-6 flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
          Our Services
        </p>
        <h1 className="-mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
          All-in-One Executive Virtual Assistant for Business Growth
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl">
          With 18+ Years of Executive Virtual Assistance Experience, we help CEOs, entrepreneurs, and businesses streamline operations, strengthen their online presence, and leverage AI-powered content to grow faster.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <CalButton
            variant="primary"
            size="lg"
            className="w-full md:w-auto px-8"
          >
            Book a Meeting
          </CalButton>
          <Link href="/contact/" className="w-full md:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full md:w-auto px-8"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="relative shadow-2xl w-full max-w-sm aspect-3/4 rounded-3xl overflow-hidden bg-zinc-100">
          <Image
            src="/assets/services/hero.png"
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
