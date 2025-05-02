"use client";

import { IconNames } from "@/types/public/icon.types";
import AppIcon from "../appIcon";
import { twMerge } from "tailwind-merge";

interface Props {
  label?: string;
  placeHolder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: IconNames;
  className?: string;
}

export default function AppInput({
  label,
  placeHolder,
  value = "",
  onChange = () => {},
  icon,
  className,
}: Props) {
  const parentClassName = twMerge(
    "w-full relative border border-[#E6E7E1] h-[60px]",
    className
  );

  return (
    <div className={parentClassName}>
      {label && <div className="text-base mb-[5px]">{label}</div>}
      <input
        className="w-full h-full px-5 text-base"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
      {icon && (
        <AppIcon
          className="absolute left-4 top-1/2 -translate-y-1/2"
          name={icon}
          width="20px"
          height="20px"
          color="primary"
        />
      )}
    </div>
  );
}
