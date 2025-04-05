import AppIcon from "@/common/appIcon";
import React, { Dispatch, SetStateAction, useState } from "react";
import AppButton from "@/common/appButton";
import NewsGallery from "@/containers/landing/sectionFive/newsGallery";
import ResponsiveLayout from "@/layout/responsiveLayout";

export default function LandingSectionFive() {
  const [activeState, setActiveState] = useState(0);
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <ResponsiveLayout className="flex items-center w-full pt-68 px-32 text-primary">
      <div className="w-[60%] h-screen">
        <div className="flex flex-col gap-4">
          <TabTextSelect
            setActiveState={setActiveState}
            title="توسعه سرزمینی"
            activeState={activeState}
            state={0}
          />
          <TabTextSelect
            setActiveState={setActiveState}
            title="راهبری اقتصادی"
            activeState={activeState}
            state={1}
          />
          <TabTextSelect
            setActiveState={setActiveState}
            title="شکل‌دهی آینده"
            activeState={activeState}
            state={2}
          />
          <TabTextSelect
            setActiveState={setActiveState}
            title="تمدن‌سازی"
            activeState={activeState}
            state={3}
          />
        </div>
        <div className="mt-[9vh]">
          <span className="text-[#2E4C47] text-[1.45vh] font-normal">
            فیلتر محتوا
          </span>
          <div className="flex items-center flex-wrap gap-[5px] mt-4 max-w-[560px]">
            <AppButton
              parentClass="py-2.5 px-7"
              className="text-[1.6vh]"
              theme={activeFilter === 0 ? "primary" : "gray"}
              onClick={() => setActiveFilter(0)}
              type="dashed"
            >
              همه
            </AppButton>
            <AppButton
              parentClass="py-2.5"
              className="text-[1.6vh]"
              theme={activeFilter === 1 ? "primary" : "gray"}
              onClick={() => setActiveFilter(1)}
              type="dashed"
            >
              پرونده‌ها
            </AppButton>
            <AppButton
              parentClass="py-2.5"
              className="text-[1.6vh]"
              theme={activeFilter === 2 ? "primary" : "gray"}
              onClick={() => setActiveFilter(2)}
              type="dashed"
            >
              گزارش‌ها و تحلیل‌ها
            </AppButton>
            <AppButton
              parentClass="py-2.5"
              className="text-[1.6vh]"
              theme={activeFilter === 3 ? "primary" : "gray"}
              onClick={() => setActiveFilter(3)}
              type="dashed"
            >
              مقالات
            </AppButton>
            <AppButton
              parentClass="py-2.5"
              className="text-[1.6vh]"
              theme={activeFilter === 4 ? "primary" : "gray"}
              onClick={() => setActiveFilter(4)}
              type="dashed"
            >
              اینفوگرافیک و موشن گرافیک
            </AppButton>
            <AppButton
              parentClass="py-2.5"
              className="text-[1.6vh]"
              theme={activeFilter === 5 ? "primary" : "gray"}
              onClick={() => setActiveFilter(5)}
              type="dashed"
            >
              پادکست و ویدئوکست
            </AppButton>
            <AppButton
              parentClass="py-2.5"
              className="text-[1.6vh]"
              theme={activeFilter === 6 ? "primary" : "gray"}
              onClick={() => setActiveFilter(6)}
              type="dashed"
            >
              مطالعه موردی و داستان‌های موفقیت
            </AppButton>
            <AppButton
              parentClass="py-2.5"
              className="text-[1.6vh]"
              theme={activeFilter === 7 ? "primary" : "gray"}
              onClick={() => setActiveFilter(7)}
              type="dashed"
            >
              رویدادها
            </AppButton>
            <AppButton
              parentClass="py-2.5"
              className="text-[1.6vh]"
              theme={activeFilter === 8 ? "primary" : "gray"}
              onClick={() => setActiveFilter(8)}
              type="dashed"
            >
              معرفی کتاب
            </AppButton>
            <AppButton
              parentClass="py-2.5"
              className="text-[1.6vh]"
              theme={activeFilter === 9 ? "primary" : "gray"}
              onClick={() => setActiveFilter(9)}
              type="dashed"
            >
              کیوسک منابع
            </AppButton>
            <AppButton
              parentClass="py-2.5"
              className="text-[1.6vh]"
              theme={activeFilter === 10 ? "primary" : "gray"}
              onClick={() => setActiveFilter(10)}
              type="dashed"
            >
              اخبار و بروزرسانی‌ها
            </AppButton>
          </div>
          <h1 className="text-[6.43vh] mt-[7.83vh] mb-[2.26vh]">
            دیدگاه‌ها و تحلیل‌ها
          </h1>
          <AppButton theme="primary" icon="InsideIcon">
            مشاهده مجله امکان
          </AppButton>
        </div>
      </div>
      <NewsGallery />
    </ResponsiveLayout>
  );
}

interface TabTextSelectProps {
  title: string;
  activeState: number;
  state: number;
  setActiveState: Dispatch<SetStateAction<number>>;
}

const TabTextSelect = ({
  title,
  activeState,
  state,
  setActiveState,
}: TabTextSelectProps) => {
  return (
    <div
      onClick={() => setActiveState(state)}
      className={`flex items-center gap-2 cursor-pointer select-none font-medium ${
        activeState === state ? "text-primary" : "text-disablePrimary"
      }`}
    >
      {activeState === state && (
        <AppIcon
          color="primary"
          name="HalfCircleIcon"
          width="2.61vh"
          height="2.61vh"
        />
      )}
      <h4 className="text-[2.09vh]">{title}</h4>
    </div>
  );
};
