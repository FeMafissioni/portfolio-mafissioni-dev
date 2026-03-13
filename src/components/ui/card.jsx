import { cn } from "../../lib/utils";

function Card({ as: Component = "article", className, ...props }) {
  return (
    <Component
      className={cn(
        "rounded-lg border border-[#2A2F38] bg-[#171B22] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.28)]",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return <h3 className={cn("text-xl font-semibold text-[#E5E7EB]", className)} {...props} />;
}

function CardDescription({ className, ...props }) {
  return <p className={cn("text-[#A1A1AA]", className)} {...props} />;
}

export { Card, CardTitle, CardDescription };
