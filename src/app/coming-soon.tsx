import Link from "next/link";

const SITE_MODE = process.env.NEXT_PUBLIC_SITE_MODE;

export default function ComingSoon({
  children,
}: {
  children?: React.ReactNode;
}) {
  if (children && SITE_MODE !== "coming_soon") {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-7 text-center gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-5xl font-semibold tracking-tight text-brand-accent">
          Coming Soon
        </p>
        <p className="text-zinc-500 text-base max-w-sm">
          Something new is on the way.
          <br />
          Please check back soon.
        </p>
      </div>

      <p className="text-zinc-500 max-w-sm">
        In the meantime, feel free to reach out at{" "}
        <Link
          href="mailto:contact@jennyannvalenciano.com"
          className="text-brand-accent underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          contact@jennyannvalenciano.com
        </Link>
      </p>
    </div>
  );
}
