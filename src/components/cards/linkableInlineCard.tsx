import * as React from "react";
import AppIcon from "@/common/appIcon";
import { IconNames } from "@/types/public/icon.types";

interface Props {
  title: string;
  subTitle: string;
  className?: string;
  icon: IconNames;
}

export default function LinkableInlineCard({
  title,
  subTitle,
  className,
  icon,
}: Props) {
  return (
    <div
      className={`p-3 w-full flex items-center justify-between gap-5 ${className}`}
    >
      <div className="flex items-center py-2 gap-5">
        <AppIcon
          color="primary"
          className=""
          name={icon}
          width="3.5vh"
          height="3.5vh"
        />
        <div className="">
          <div className="font-medium text-[2.1vh]">{title}</div>
          <div className="font-normal text-[1.5vh]">{subTitle}</div>
        </div>
      </div>
      <AppIcon
        color="primary"
        className=""
        name="ArrowToIcon"
        width="3.6vh"
        height="3.6vh"
      />
    </div>
  );
}
