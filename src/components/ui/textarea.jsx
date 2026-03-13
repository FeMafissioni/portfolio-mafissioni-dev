import { cn } from "../../lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "min-h-36 w-full rounded-md border border-[#2A2F38] bg-[#0F1115] px-3 py-2 text-sm text-[#E5E7EB] transition-colors placeholder:text-[#A1A1AA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399]",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
