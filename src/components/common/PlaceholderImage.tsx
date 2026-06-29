import { cn } from "@/utils/cn";

interface PlaceholderImageProps {
  label?: string;
  className?: string;
}

export function PlaceholderImage({
  label = "Image Placeholder",
  className,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center border border-neutral-300 bg-neutral-100 text-sm text-neutral-500",
        className,
      )}
    >
      {label}
    </div>
  );
}
