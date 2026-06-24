import Link from "next/link";
import CalButton from "@/components/ui/CalButton";
import Button from "@/components/ui/Button";

export default function ActionBanner() {
  return (
    <section className="w-full bg-brand-accent/8 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Text */}
        <h2 className="text-3xl md:text-4xl font-bold text-brand-accent tracking-tight text-center md:text-left">
          Start delegating your daily tasks
        </h2>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center shrink-0">
          <CalButton
            variant="primary"
            size="lg"
            className="px-8 w-full md:w-auto whitespace-nowrap"
          >
            Book a Meeting
          </CalButton>
          <Link
            href="/contact/"
            className="w-full md:w-auto flex justify-center"
          >
            <Button
              variant="secondary"
              size="lg"
              className="px-8 w-full md:w-auto whitespace-nowrap bg-white/90! border border-transparent hover:border-zinc-300"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
