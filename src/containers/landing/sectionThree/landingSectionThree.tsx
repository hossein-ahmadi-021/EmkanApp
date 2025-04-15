import ResponsiveLayout from "@/layout/responsiveLayout";
import { homeSectionDictTypes } from "@/types/landing/landing.types";
import LinkableCard from "@/components/cards/linkableCard";
import cleanEnergyBanner from "@/assets/images/landing/cleanEnergyBanner.png";
import MarqueeSlider from "@/components/sliders/marquee/marqueeSlider";
import React from "react";
import LinkableInlineCard from "@/components/cards/linkableInlineCard";

interface Props {
  rtl: boolean;
  dict: homeSectionDictTypes;
}

export default function LandingSectionThree({}: Props) {
  return (
    <div className="z-10 h-full pt-20 md:pt-28 text-primary w-full">
      <div className="h-[calc(100%_-_70px)] md:h-auto">
        <ResponsiveLayout className="h-[calc(100%_-_155px)]">
          <div className="flex md:items-center flex-col md:flex-row justify-between md:px-16">
            <h1 className="text-[4vh] md:text-[6.43vh]">بخش‌های اقتصادی</h1>
            <p className="text-[1.5vh] md:text-[1.58vh] md:max-w-[34%] text-justify line-clamp-3 leading-7">
              ایران با ظرفیت‌های بی‌نظیر در زمینه‌های مختلف اقتصادی، آماده است
              تا به بزرگترین قطب‌ صنعتی، تجاری و خدماتی منطقه تبدیل شود. گروه
              تجربه توسعه امکان، با تمرکز بر حوزه‌های استراتژیک فرصتی بی‌نظیر
              برای سرمایه‌گذاری و رشد پایدار فراهم می‌آورد.
            </p>
          </div>
          {/*cards*/}
          <div className="grid w-full mx-auto grid-cols-4 grid-rows-3 gap-[2.61vh] cursor-pointer mt-[3vh] px-16 hidden md:grid">
            <LinkableCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
              className="w-full"
            />
            <LinkableCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
              className="w-full"
            />
            <LinkableCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
              className="w-full"
            />
            <LinkableCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
              className="w-full"
            />
            <LinkableCard
              className="row-start-2 w-full"
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
            />
            <LinkableCard
              className="row-start-2 w-full"
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
            />
            <LinkableCard
              className="row-start-2 w-full"
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
            />
            <LinkableCard
              className="row-start-2 w-full"
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
            />
            <LinkableCard
              className="row-start-3 w-full"
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
            />
            <LinkableCard
              className="row-start-3 w-full"
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
            />
            <LinkableCard
              className="row-start-3 w-full"
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
            />
            <LinkableCard
              className="row-start-3 w-full"
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
            />
          </div>
          <div className="px-5 py-4 bg-dimPrimary h-full w-full mt-[1.5vh] md:hidden overflow-y-auto relative">
            <LinkableInlineCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              className="w-full border-b-2"
            />
            <LinkableInlineCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              className="w-full border-b-2"
            />
            <LinkableInlineCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              className="w-full border-b-2"
            />
            <LinkableInlineCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              className="w-full border-b-2"
            />
            <LinkableInlineCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              className="w-full border-b-2"
            />
            <LinkableInlineCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              className="w-full border-b-2"
            />
            <LinkableInlineCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              className="w-full border-b-2"
            />
            <LinkableInlineCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              className="w-full border-b-2"
            />
            <LinkableInlineCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              className="w-full border-b-2"
            />
            <LinkableInlineCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              className="w-full border-b-2"
            />
            <LinkableInlineCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              className="w-full border-b-2"
            />
            <LinkableInlineCard
              title="نو انرژی‌ها"
              subTitle="New Energies"
              className="w-full border-b-2"
            />
          </div>
        </ResponsiveLayout>
      </div>
      <MarqueeSlider className="mt-[1.5vh] md:mt-[3.3vh]" />
    </div>
  );
}
