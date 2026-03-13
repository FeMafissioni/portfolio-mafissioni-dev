import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md border font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1115] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "border-[#10B981] bg-[#10B981] text-[#06291E] hover:border-[#0E9F70] hover:bg-[#0E9F70]",
        secondary: "border-[#2A2F38] bg-transparent text-[#E5E7EB] hover:bg-[#171B22]",
        ghost: "border-transparent bg-transparent text-[#E5E7EB] hover:border-[#2A2F38] hover:bg-[#171B22]",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

function Button({
  as: Component = "button",
  className,
  variant,
  size,
  type = "button",
  ...props
}) {
  return (
    <Component
      className={cn(buttonVariants({ variant, size }), className)}
      type={Component === "button" ? type : undefined}
      {...props}
    />
  );
}

export { Button, buttonVariants };
