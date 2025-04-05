import * as React from "react";
import Image from "next/image";
import AppIcon from "@/common/appIcon";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  title: string;
  subTitle: string;
  bg: string | StaticImport;
  className?: string;
}

export default function LinkableBanners({ bg, className }: Props) {
  return (
    <div
      className={`relative overflow-hidden group text-white cursor-pointer ${className}`}
    >
      <div className="bg-[#1049464D] inset-0 z-10 absolute"></div>
      <Image
        src={bg}
        width="326"
        height="169"
        alt="clean-energy"
        className="w-full h-full object-cover transition-all duration-600 ease-in-out group-hover:scale-115 transform-gpu"
      />
      <div className="duration-600 ease-in-out h-[30vh] bg-primary/70 blur-xl rounded-t-2xl absolute start-[-40px] end-[-40px] bottom-[-40px] group-hover:h-[63vh]" />
      <AppIcon
        className="absolute top-0 end-0 z-20"
        name="ArrowToIcon"
        width="4.78vh"
        height="5.22vh"
      />
      <div className="absolute duration-600 ease-in-out bottom-[-5.4vh] group-hover:bottom-5 inset-x-8 z-20">
        <AppIcon
          className="group-hover:text-gold"
          name="EnergyIcon"
          width="4.3vh"
          height="4.3vh"
        />
        <div className="text-[3vh] mt-[1.74vh]">
          مشاوره برنامه‌ریزی و اقتصاد
        </div>
        <div className="text-[1.98vh] font-light">
          Planing and economic consulting
        </div>
        <p className="text-[1.85vh] mt-[5.13vh] font-light">
          ارائه مشاوره استراتژیک و تحلیل‌های اقتصادی برای شناسایی فرصت‌ها و
          افزایش بهره‌وری پروژه‌ها.
        </p>
        <div className="border-t border-gray-400 w-full mt-[3vh] mb-[1.1vh]"></div>
        <div className="flex items-center justify-between">
          <div className="text-[1.85vh]">مشاوره با تیم امکان</div>
          <AppIcon name="InsideIcon" width="4.2vh" height="4.2vh" />
        </div>
      </div>
    </div>
  );
}
