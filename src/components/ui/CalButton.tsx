"use client";

import Button, { type ButtonProps } from "@/components/ui/Button";

export default function CalButton({ children, ...props }: ButtonProps) {
  return (
    <Button
      data-cal-link="virtual-assistant-provider/30min"
      data-cal-origin="https://cal.com"
      data-cal-config='{"theme":"light"}'
      {...props}
    >
      {children}
    </Button>
  );
}
