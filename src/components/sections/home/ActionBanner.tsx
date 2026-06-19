import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ActionBanner() {
  return (
    <section className="bg-brand-accent/8 rounded-2xl px-8 py-14 md:py-14 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
      {/* Text */}
      <div className="flex text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-accent tracking-tight">
          Start delegating your daily tasks
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto shrink-0">
        {/* Book a Meeting Button */}
        <Button
          variant="primary"
          size="lg"
          className="px-8 w-full md:w-auto max-w-md whitespace-nowrap"
        >
          Book a Meeting
        </Button>

        {/* Learn More Button */}
        <Link
          href="/services/"
          className="w-full md:w-auto max-w-md flex justify-center"
        >
          <Button
            variant="secondary"
            size="lg"
            className="px-8 w-full md:w-auto max-w-md whitespace-nowrap bg-white/90! border border-transparent hover:border-zinc-300"
          >
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
}
