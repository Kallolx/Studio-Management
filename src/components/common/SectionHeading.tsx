import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ label, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-2xl", align === "center" && "mx-auto text-center")}>
      {label && (
        <div className="mb-3 inline-block rounded-full border border-[#d2a153]/30 bg-[#d2a153]/10 px-3 py-1 text-xs uppercase tracking-wide text-[#f5d59a]">
          {label}
        </div>
      )}
      <h2 className="font-serif text-3xl font-semibold tracking-normal text-white md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-base text-neutral-400">{description}</p>}
    </div>
  );
}
