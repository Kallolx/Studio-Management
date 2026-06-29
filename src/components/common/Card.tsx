import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-[#0d0c0e] p-6 shadow-md transition-all hover:border-white/15",
        className,
      )}
    >
      {children}
    </div>
  );
}
