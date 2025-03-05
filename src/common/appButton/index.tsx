import { ReactNode } from "react";
import { IconNames } from "@/types/public/icon.types";
import AppIcon from "@/common/appIcon";

interface Props {
  children?: ReactNode;
  icon?: IconNames;
}

export default function AppButton({ icon, children }: Props) {
  return (
    <button className="rounded-full bg-primary text-lg flex items-center gap-3 ps-6">
      {children}
      {icon && <AppIcon name={icon} width="48px" height="48px" />}
    </button>
  );
}
