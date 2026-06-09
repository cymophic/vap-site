"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Underline from "@/components/ui/Underline";
import Button from "@/components/ui/Button";

import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils/cn";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 py-2 px-4 h-(--header-height)">
      <div className="mx-auto max-w-7xl w-full flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <NavigationLinks className="gap-10 px-3" />
        <ActionButton className="px-8" />
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
  const logoUrl: string = "/vap-logo-full.png";

  return (
    <Image
      src={logoUrl}
      alt="Website logo"
      width={width}
      height={height}
      priority
      className={cn("object-cover h-15 -ml-2 w-auto", className)}
    />
  );
}

// Navigation links
function NavigationLinks({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex flex-row text-orange-950 font-light text-base",
        className,
      )}
    >
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className="group">
          <Underline isActive={pathname === link.href}>{link.label}</Underline>
        </Link>
      ))}
    </nav>
  );
}

// Call to Action Button
type ActionButton = {
  text?: string;
  className?: string;
};
function ActionButton({ text = "Let's Talk", className }: ActionButton) {
  return (
    <Button variant="primary" size="lg" className={className}>
      <span className="whitespace-nowrap">{text}</span>
    </Button>
  );
}
