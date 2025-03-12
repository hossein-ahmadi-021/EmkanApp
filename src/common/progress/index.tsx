"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils/classnames";
import { useLangStore } from "@/store/langStore";

interface ProgressProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    "onClick"
  > {
  className?: string;
  value?: number;
  onClick?: (value: number) => void;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, onClick, ...props }, ref) => {
  const isRTL = useLangStore((state) => state.isRTL);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;

    const adjustedClickX = isRTL ? rect.width - clickX : clickX;

    const newValue = (adjustedClickX / rect.width) * 100;
    if (onClick) {
      onClick(newValue);
    }
  };

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-white transition-all"
        style={{
          transform: isRTL
            ? `translateX(${100 - (value || 0)}%)`
            : `translateX(-${100 - (value || 0)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
