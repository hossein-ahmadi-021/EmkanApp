import ResponsiveLayout from "@/layout/responsiveLayout";
import { homeSectionDictTypes } from "@/types/landing/landing.types";
import LinkableCard from "@/components/cards/linkableCard";
import cleanEnergyBanner from "@/assets/images/landing/cleanEnergyBanner.png";
import AppIcon from "@/common/appIcon";
import MarqueeSlider from "@/components/sliders/marquee/marqueeSlider";
import React from "react";

interface Props {
  rtl: boolean;
  dict: homeSectionDictTypes;
}

export default function LandingSectionThree(props: Props) {
  return (
    <ResponsiveLayout className="z-10 h-full pt-30 text-primary">
      <div className="px-20">
        <div className="flex items-center justify-between">
          <h1 className="text-[6.43vh]">بخش‌های اقتصادی</h1>
          <p className="text-[1.58vh] max-w-[34%] text-justify line-clamp-3 leading-7">
            ایران با ظرفیت‌های بی‌نظیر در زمینه‌های مختلف اقتصادی، آماده است تا
            به بزرگترین قطب‌ صنعتی، تجاری و خدماتی منطقه تبدیل شود. گروه تجربه
            توسعه امکان، با تمرکز بر حوزه‌های استراتژیک فرصتی بی‌نظیر برای
            سرمایه‌گذاری و رشد پایدار فراهم می‌آورد.
          </p>
        </div>
        {/*cards*/}
        <div className="grid w-fit mx-auto grid-cols-4 grid-rows-3 gap-[2.61vh] cursor-pointer mt-[4.35vh]">
          <LinkableCard
            title="نو انرژی‌ها"
            subTitle="New Energies"
            bg={cleanEnergyBanner}
          />
          <LinkableCard
            title="نو انرژی‌ها"
            subTitle="New Energies"
            bg={cleanEnergyBanner}
          />
          <LinkableCard
            title="نو انرژی‌ها"
            subTitle="New Energies"
            bg={cleanEnergyBanner}
          />
          <LinkableCard
            title="نو انرژی‌ها"
            subTitle="New Energies"
            bg={cleanEnergyBanner}
          />
          <LinkableCard
            className="row-start-2"
            title="نو انرژی‌ها"
            subTitle="New Energies"
            bg={cleanEnergyBanner}
          />
          <LinkableCard
            className="row-start-2"
            title="نو انرژی‌ها"
            subTitle="New Energies"
            bg={cleanEnergyBanner}
          />
          <LinkableCard
            className="row-start-2"
            title="نو انرژی‌ها"
            subTitle="New Energies"
            bg={cleanEnergyBanner}
          />
          <LinkableCard
            className="row-start-2"
            title="نو انرژی‌ها"
            subTitle="New Energies"
            bg={cleanEnergyBanner}
          />
          <LinkableCard
            className="row-start-3"
            title="نو انرژی‌ها"
            subTitle="New Energies"
            bg={cleanEnergyBanner}
          />
          <LinkableCard
            className="row-start-3"
            title="نو انرژی‌ها"
            subTitle="New Energies"
            bg={cleanEnergyBanner}
          />
          <LinkableCard
            className="row-start-3"
            title="نو انرژی‌ها"
            subTitle="New Energies"
            bg={cleanEnergyBanner}
          />
          <LinkableCard
            className="row-start-3"
            title="نو انرژی‌ها"
            subTitle="New Energies"
            bg={cleanEnergyBanner}
          />
        </div>
      </div>
      <MarqueeSlider />
    </ResponsiveLayout>
  );
}
