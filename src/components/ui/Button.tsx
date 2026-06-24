"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "icon";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent focus-visible:ring-offset-zinc-200 disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-accent text-white hover:opacity-85",
  secondary: "bg-zinc-200 text-zinc-700 hover:bg-zinc-300/85",
  outline: "border border-zinc-400 text-zinc-700 hover:bg-zinc-100",
  ghost:
    "bg-transparent text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100/60",
  icon: "bg-transparent text-zinc-500 hover:text-zinc-700",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-9 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size, className, ...props }, ref) => {
    const sizeClass = size ? sizeClasses[size] : "";

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClass,
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
export default Button;
