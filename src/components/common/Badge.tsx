import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-[#d2a153]/30 bg-[#d2a153]/10 px-3 py-1 text-xs uppercase tracking-wide text-[#f5d59a]",
        className,
      )}
    >
      {children}
    </span>
  );
}
