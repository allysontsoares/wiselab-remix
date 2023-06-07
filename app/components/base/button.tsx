import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        subtle:
          "bg-gray-100 text-gray-900 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-gray-100",
        alert:
          "bg-yellow-500 text-white hover:bg-yellow-600 dark:hover:bg-yellow-600",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "underline-offset-4 hover:underline text-primary",
      },
      fullWidth: {
        true: "w-full",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
      roundness: {
        square: "rounded-none",
        rounded: "rounded-md",
        pill: "rounded-full",
      },
      justify: {
        center: "justify-center",
        start: "justify-start",
        end: "justify-end"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      roundness: "rounded",
      justify: "center"
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  onClick?: any;
  disabled?: any;
  asChild?: boolean;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      roundness,
      justify,
      onClick,
      disabled,
      fullWidth,
      asChild = false,
      ...props
    }, ref) => {
    const Comp = asChild ? Slot : "button"
    if (!onClick) onClick = undefined;
    if (!disabled) disabled = false;
    return (
      <Comp
        disabled={disabled}
        onClick={onClick}
        className={cn(buttonVariants({ variant, size, roundness, justify, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
