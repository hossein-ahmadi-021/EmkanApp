import * as React from "react";
import Image from "next/image";
import AppIcon from "@/common/appIcon";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconNames } from "@/types/public/icon.types";

interface Props {
  title: string;
  subTitle: string;
  bg: string | StaticImport;
  className?: string;
  icon: IconNames;
}

export default function LinkableCard({
  title,
  subTitle,
  bg,
  className,
  icon,
}: Props) {
  return (
    <div
      className={`w-[28.35vh] h-[17.5vh] max-h-[175px] relative overflow-hidden group text-white ${className}`}
    >
      <div className="bg-[#1049464D] inset-0 z-10 absolute"></div>
      <Image
        src={bg}
        width="326"
        height="169"
        alt="clean-energy"
        className="w-full h-full object-cover transition-all duration-600 ease-in-out group-hover:scale-115 transform-gpu"
      />
      <div className="duration-600 rounded-full w-[9vh] h-[9vh] bg-[#C3B293] blur-xl z-10 absolute top-6.5 start-[-11vh] group-hover:start-[-8.2vh]" />
      <div className="duration-600 rounded-full w-[189px] h-[189px] bg-primary blur-2xl absolute top-[-25] start-[-75px] group-hover:inset-0 group-hover:scale-190" />
      <AppIcon
        className="absolute top-5 start-4 z-20"
        name={icon}
        width="3.3vh"
        height="3.3vh"
      />
      <AppIcon
        className="absolute top-0 end-0 z-20"
        name="ArrowToIcon"
        width="3.3vh"
        height="3.3vh"
      />
      <div className="duration-600 absolute top-15 start-4 z-20 group-hover:top-14">
        <div className="font-medium text-[1.57vh]">{title}</div>
        <div className="font-normal text-[1.30vh]">{subTitle}</div>
      </div>
    </div>
  );
}
