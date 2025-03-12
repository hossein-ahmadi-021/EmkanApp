import { ReactNode } from "react";
import { IconNames } from "@/types/public/icon.types";
import AppIcon from "@/common/appIcon";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
  children?: ReactNode;
  icon?: IconNames;
  className?: string;
}

export default function AppButton({ icon, children, className }: Props) {
  const buttonClasses = twMerge(
    "rounded-full bg-primary cursor-pointer text-lg flex items-center justify-between gap-3",
    clsx({
      "ps-6": icon,
      "p-4": !icon,
    }),
    className,
  );

  return (
    <button className={buttonClasses}>
      {children}
      {icon && <AppIcon name={icon} width="48px" height="48px" />}
    </button>
  );
}
