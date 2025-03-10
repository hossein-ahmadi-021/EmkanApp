"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/store/langStore";

interface ProgressProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    "onClick" // Omit the default onClick type
  > {
  className?: string;
  value?: number;
  onClick?: (value: number) => void; // Define a custom onClick prop
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, onClick, ...props }, ref) => {
  const isRTL = useLangStore((state) => state.isRTL);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left; // Get click position from the left

    // Adjust clickX for RTL (calculate from the right)
    const adjustedClickX = isRTL ? rect.width - clickX : clickX;

    const newValue = (adjustedClickX / rect.width) * 100; // Calculate the percentage clicked
    if (onClick) {
      onClick(newValue); // Pass the calculated value to the parent
    }
  };

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className,
      )}
      onClick={handleClick} // Attach click handler
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-white transition-all"
        style={{
          transform: isRTL
            ? `translateX(${100 - (value || 0)}%)` // Fill from the right for RTL
            : `translateX(-${100 - (value || 0)}%)`, // Fill from the left for LTR
        }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
