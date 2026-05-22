"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Underline from "@/components/ui/Underline";

import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils/cn";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 border-b border-zinc-200 py-2">
      <div className="mx-auto max-w-7xl w-full flex justify-between items-center">
        <Logo />
        <NavigationLinks className="gap-8 px-3" />
      </div>
    </header>
  );
}

// Website logo
type Logo = {
  width?: number;
  height?: number;
  className?: string;
};
function Logo({ width = 150, height = 100, className }: Logo) {
  const logoUrl: string = "/vap-logo.png";

  return (
    <Image
      src={logoUrl}
      alt="Website logo"
      width={width}
      height={height}
      priority
      className={cn("rounded-full object-cover h-15 mt-0.5 w-auto", className)}
    />
  );
}

// Navigation links
function NavigationLinks({ className }: React.HTMLAttributes<HTMLSpanElement>) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-row text-orange-950", className)}>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className="group">
          <Underline isActive={pathname === link.href}>{link.label}</Underline>
        </Link>
      ))}
    </nav>
  );
}
