"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

import Underline from "@/components/ui/Underline";
import Button from "@/components/ui/Button";

import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils/cn";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 right-0 py-2 px-4 border-b border-zinc-200 bg-white z-50 flex items-center h-(--header-height)">
      <div className="mx-auto max-w-7xl w-full flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <NavigationLinks className="hidden md:flex gap-10 px-3" />
        <div className="hidden md:block">
          <ActionButton className="px-8" />
        </div>
        <button
          className="md:hidden text-zinc-700"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
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
      className={cn("object-cover h-15 pt-0.5 -ml-2 w-auto", className)}
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

// Mobile navigation
type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};
function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed top-(--header-height) left-0 right-0 bottom-0 bg-zinc-50 px-4 py-12 z-50">
      {/* Navigation Links */}
      <div className="flex flex-col gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={cn(
              "text-xl font-normal text-zinc-700 hover:text-brand-accent",
              pathname === link.href && "text-brand-accent",
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Call to Action Button */}
      <ActionButton className="mt-12 w-full" />
    </div>
  );
}
