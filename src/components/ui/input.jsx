import { cn } from "../../lib/utils";

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "h-10 w-full rounded-md border border-[#2A2F38] bg-[#0F1115] px-3 text-sm text-[#E5E7EB] transition-colors placeholder:text-[#A1A1AA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399]",
        className
      )}
      {...props}
    />
  );
}

export { Input };
