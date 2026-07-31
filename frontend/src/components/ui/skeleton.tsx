import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const skeletonVariants = cva("animate-pulse rounded-md bg-primary/10", {
  variants: {
    variant: {
      default: "",
      text: "h-4 w-full",
      avatar: "h-10 w-10 rounded-full",
      card: "h-32 w-full rounded-xl",
      tableRow: "h-12 w-full rounded-none border-b border-border",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(skeletonVariants({ variant, className }))}
      {...props}
    />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Skeleton, skeletonVariants }
