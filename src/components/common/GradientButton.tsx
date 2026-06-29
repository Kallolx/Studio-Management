import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function GradientButton({ className, children, ...props }: GradientButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f5d59a] to-[#d2a153] px-6 py-2.5 text-sm font-semibold text-neutral-900 transition-all hover:brightness-105 active:scale-98 border border-[#d2a153]/30 shadow-sm cursor-pointer",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
}
