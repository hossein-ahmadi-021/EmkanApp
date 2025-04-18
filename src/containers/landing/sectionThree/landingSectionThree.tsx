import ResponsiveLayout from "@/layout/responsiveLayout";
import { homeSectionDictTypes } from "@/types/landing/landing.types";
import LinkableCard from "@/components/cards/linkableCard";
import MarqueeSlider from "@/components/sliders/marquee/marqueeSlider";
import React from "react";
import LinkableInlineCard from "@/components/cards/linkableInlineCard";
import cleanEnergyBanner from "@/assets/images/landing/cleanEnergyBanner.png";
import transportationBanner from "@/assets/images/landing/transportation-banner.png";
import tourismBanner from "@/assets/images/landing/tourism-banner.png";
import buildingBanner from "@/assets/images/landing/building-banner.png";
import agricultureBanner from "@/assets/images/landing/agriculture-banner.png";
import mineBanner from "@/assets/images/landing/mine-banner.png";
import financialBanner from "@/assets/images/landing/financial-banner.png";
import manufacturingBanner from "@/assets/images/landing/manufacturing-banner.png";
import pharmacyBanner from "@/assets/images/landing/pharmacy-banner.png";
import servicesBanner from "@/assets/images/landing/services-banner.png";
import humanCapitalBanner from "@/assets/images/landing/humanCapital-banner.png";
import environmentBanner from "@/assets/images/landing/environment-banner.png";

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
              icon="EnergyIcon"
              title="نو انرژی‌ها"
              subTitle="New Energies"
              bg={cleanEnergyBanner}
              className="w-full"
            />
            <LinkableCard
              icon="TransportationIcon"
              title="حمل و نقل و لجستیک"
              subTitle="Transportation and Logistics"
              bg={transportationBanner}
              className="w-full"
            />
            <LinkableCard
              icon="TravelingIcon"
              title="گردشگری و کیفیت زندگی"
              subTitle="Tourism and quality of life"
              bg={tourismBanner}
              className="w-full"
            />
            <LinkableCard
              icon="BuildingIcon"
              title="املاک  و ساخت و ساز"
              subTitle="Real estate and construction"
              bg={buildingBanner}
              className="w-full"
            />
            <LinkableCard
              icon="AgricultureIcon"
              className="row-start-2 w-full"
              title="کشاورزی و فرآوری مواد غذایی"
              subTitle="Agriculture and food processing"
              bg={agricultureBanner}
            />
            <LinkableCard
              icon="MiningIcon"
              className="row-start-2 w-full"
              title="معدن و فلزات"
              subTitle="Mining and metals"
              bg={mineBanner}
            />
            <LinkableCard
              icon="MoneyIcon"
              className="row-start-2 w-full"
              title="خدمات مالی"
              subTitle="Financial services"
              bg={financialBanner}
            />
            <LinkableCard
              icon="ManufacturingIcon"
              className="row-start-2 w-full"
              title="تولید پیشرفته"
              subTitle="Advanced manufacturing"
              bg={manufacturingBanner}
            />
            <LinkableCard
              icon="PharmacyIcon"
              className="row-start-3 w-full"
              title="داروسازی و زیست فناوری"
              subTitle="Pharmaceuticals and biotechnology"
              bg={pharmacyBanner}
            />
            <LinkableCard
              icon="HealthcareIcon"
              className="row-start-3 w-full"
              title="خدمات و تجهیزات بهداشت و درمان"
              subTitle="Healthcare services and equipment"
              bg={servicesBanner}
            />
            <LinkableCard
              icon="HumansIcon"
              className="row-start-3 w-full"
              title="سرمایه انسانی و نوآوری"
              subTitle="Human capital and innovation"
              bg={humanCapitalBanner}
            />
            <LinkableCard
              icon="EnvironmentalIcon"
              className="row-start-3 w-full"
              title="خدمات محیط زیست"
              subTitle="Environmental services"
              bg={environmentBanner}
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
