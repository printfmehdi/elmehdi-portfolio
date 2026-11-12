import { cn } from "@/lib/utils";

interface ChipProps {
  content: string;
  className?: string;
}

export default function Chip({ content, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex select-none items-center whitespace-nowrap rounded-md border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-secondary-foreground",
        className
      )}
    >
      {content}
    </span>
  );
}
