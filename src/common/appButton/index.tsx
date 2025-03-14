import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { IconNames } from "@/types/public/icon.types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useLangStore } from "@/store/langStore";
import AppIcon from "@/common/appIcon";

interface Props {
  children?: ReactNode;
  icon?: IconNames;
  className?: string;
}

export default function AppButton({ icon, children, className }: Props) {
  const { isRTL } = useLangStore();
  const [ripple, setRipple] = useState<{
    key: number;
    x: number;
    y: number;
  } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within the button
    const y = e.clientY - rect.top; // Y position within the button
    setRipple({ key: Date.now(), x, y });
  };

  const buttonClasses = twMerge(
    "rounded-full bg-primary cursor-pointer text-lg flex items-center justify-between gap-3 relative overflow-hidden",
    clsx({
      "ps-6": icon,
      "p-4": !icon,
    }),
    className,
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
            left: ripple.x - 50, // Center horizontally
            top: ripple.y - 50, // Center vertically
          }}
          onAnimationComplete={() => setRipple(null)}
        />
      )}

      {children}
      {icon && (
        <div className={isRTL ? "" : "rotate-180"}>
          <AppIcon name={icon} width="48px" height="48px" />
        </div>
      )}
    </motion.button>
  );
}
