import { cn } from "../../lib/utils";

function SectionHeader({ title, subtitle, className }) {
  return (
    <header className={cn("mb-8 space-y-2", className)}>
      <h2 className="text-2xl font-semibold text-[#E5E7EB] sm:text-3xl">{title}</h2>
      {subtitle ? <p className="max-w-4xl leading-relaxed text-[#A1A1AA]">{subtitle}</p> : null}
    </header>
  );
}

export { SectionHeader };
