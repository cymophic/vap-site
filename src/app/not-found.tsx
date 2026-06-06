import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-7 text-center gap-6">
      <p className="text-6xl md:text-7xl font-semibold tracking-tight text-brand-accent">
        404
      </p>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl md:text-2xl font-semibold text-brand-accent">
          Page not found
        </h1>
        <p className="text-zinc-500 text-sm md:text-base max-w-xs">
          The page you&#39;re looking for doesn&#39;t exist or may have been
          moved.
        </p>
      </div>
      <Link
        href="/"
        className="text-sm md:text-base font-medium text-brand-accent underline underline-offset-4 hover:opacity-70 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
