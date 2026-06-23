import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-7 text-center gap-6  min-h-[calc(100vh-var(--header-height))]">
      <p className="text-6xl md:text-7xl font-semibold tracking-tight text-zinc-700">
        404
      </p>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl md:text-2xl font-semibold text-zinc-700">
          Page not found
        </h1>
        <p className="text-zinc-500 text-sm md:text-base max-w-xs">
          The page you&#39;re looking for doesn&#39;t exist or may have been
          moved.
        </p>
      </div>
      <Link
        href="/"
        className="mt-2 w-full md:w-fit flex justify-center sm:justify-left"
      >
        <Button
          variant="secondary"
          size="lg"
          className="w-full md:w-auto max-w-md px-8"
        >
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
