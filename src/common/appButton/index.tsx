import { IconNames } from "@/types/public/icon.types";
import React, { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import AppIcon from "@/common/appIcon";
import clsx from "clsx";
import { useLangStore } from "@/store/langStore";
import { motion } from "framer-motion";

interface Props {
  children?: ReactNode;
  icon?: IconNames;
  className?: string;
  type?: "normal" | "dashed";
  theme?: "primary" | "gold";
}

export default function AppButton({
  icon,
  children,
  className,
  type = "normal",
  theme = "primary",
}: Props) {
  const isDashed = type === "dashed";
  const isGold = theme === "gold";
  const { isRTL } = useLangStore();
  const [ripple, setRipple] = useState<{
    key: number;
    x: number;
    y: number;
  } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ key: Date.now(), x, y });
  };

  const buttonClasses = twMerge(
    "rounded-full cursor-pointer flex items-center justify-between gap-3 relative overflow-hidden text-lg font-normal",
    clsx({
      ...(isGold
        ? {
            "bg-[#BDAA88] text-white": !isDashed,
            "bg-white border border-[#BDAA88] text-[#BDAA88]": isDashed,
          }
        : {
            "bg-primary text-white": !isDashed,
            "bg-[#10494633] border border-primary text-primary": isDashed,
          }),
    }),
    clsx({
      "ps-6": icon,
      "px-4 py-[15px]": !icon,
    }),
  );
  return (
    <motion.button
      className={buttonClasses}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
    >
      {ripple && (
        <motion.span
          key={ripple.key}
          className="absolute bg-white/30 rounded-full pointer-events-none"
          initial={{
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: 4,
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          style={{
            width: "100px",
            height: "100px",
            left: ripple.x - 50,
            top: ripple.y - 50,
          }}
          onAnimationComplete={() => setRipple(null)}
        />
      )}
      <div className={className}>{children}</div>
      {icon && (
        <div className={isRTL ? "" : "rotate-180"}>
          <AppIcon name={icon} width="48px" height="48px" />
        </div>
      )}
    </motion.button>
  );
}
