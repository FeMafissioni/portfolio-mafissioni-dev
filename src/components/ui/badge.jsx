import { cn } from "../../lib/utils";

function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-[#2A2F38] bg-[#13171D] px-2.5 py-1 text-xs font-semibold text-[#D4D4D8]",
        className
      )}
    >
      {children}
    </span>
  );
}

export { Badge };
