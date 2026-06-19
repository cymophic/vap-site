import Image from "next/image";
import Link from "next/link";
import { navLinks, stats } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-900 mt-auto">
      <div className="mx-auto max-w-7xl w-full px-4 xl:px-0 py-12 flex flex-col gap-8">
        {/* Top: Logo + Nav */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            <Image
              src="/vap-logo.png"
              alt="VAP Logo"
              width={48}
              height={48}
              className="h-14 w-auto brightness-0 invert"
            />
            <div className="flex flex-col text-center md:text-start">
              <span className="text-lg font-bold text-white">
                Virtual Assistant Provider
              </span>
              <span className="text-sm font-normal text-white">
                Metro Manila, Philippines
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20" />

        {/* Copyright */}
        <p className="text-xs font-medium text-white/80 text-center">
          © {stats.yearStarted} - {currentYear} Virtual Assistant Provider. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
