import AppIcon from "@/common/appIcon";
import React, { Dispatch, SetStateAction, useState } from "react";
import AppButton from "@/common/appButton";
import NewsGallery from "@/containers/landing/sectionFive/newsGallery";
import ResponsiveLayout from "@/layout/responsiveLayout";
import MotionScrollableWidth from "@/components/motion/motionScrollableWidth";

export default function LandingSectionFive() {
  const [activeState, setActiveState] = useState(0);
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <ResponsiveLayout className="w-full pt-[20vh] md:pt-0">
      <div className="flex items-center w-full pt-70 md:px-17 text-primary flex flex-col md:flex-row">
        <div className="w-full md:w-[54%] md:h-screen flex flex-col-reverse gap-4 md:flex-col">
          <div>
            <MotionScrollableWidth
              hasBlur={false}
              className="md:hidden gap-5 mb-4"
            >
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
            </MotionScrollableWidth>
            <MotionScrollableWidth className="md:hidden my-3" hasBlur={false}>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 0 ? "primary" : "gray"}
                onClick={() => setActiveFilter(0)}
                type="dashed"
              >
                همه
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 1 ? "primary" : "gray"}
                onClick={() => setActiveFilter(1)}
                type="dashed"
              >
                پرونده‌ها
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 2 ? "primary" : "gray"}
                onClick={() => setActiveFilter(2)}
                type="dashed"
              >
                گزارش‌ها و تحلیل‌ها
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 3 ? "primary" : "gray"}
                onClick={() => setActiveFilter(3)}
                type="dashed"
              >
                مقالات
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 4 ? "primary" : "gray"}
                onClick={() => setActiveFilter(4)}
                type="dashed"
              >
                اینفوگرافیک و موشن گرافیک
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 5 ? "primary" : "gray"}
                onClick={() => setActiveFilter(5)}
                type="dashed"
              >
                پادکست و ویدئوکست
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 6 ? "primary" : "gray"}
                onClick={() => setActiveFilter(6)}
                type="dashed"
              >
                مطالعه موردی و داستان‌های موفقیت
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 7 ? "primary" : "gray"}
                onClick={() => setActiveFilter(7)}
                type="dashed"
              >
                رویدادها
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 8 ? "primary" : "gray"}
                onClick={() => setActiveFilter(8)}
                type="dashed"
              >
                معرفی کتاب
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 9 ? "primary" : "gray"}
                onClick={() => setActiveFilter(9)}
                type="dashed"
              >
                کیوسک منابع
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 10 ? "primary" : "gray"}
                onClick={() => setActiveFilter(10)}
                type="dashed"
              >
                اخبار و بروزرسانی‌ها
              </AppButton>
            </MotionScrollableWidth>
          </div>
          <div className="flex flex-row md:flex-col gap-y-4 hidden md:flex">
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
          <div className="md:mt-[4vh] w-full">
            <span className="text-[#2E4C47] text-[1.45vh] font-normal hidden md:block">
              فیلتر محتوا
            </span>
            <div className="flex items-center flex-wrap gap-[5px] mt-4 max-w-[560px] hidden md:flex">
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 0 ? "primary" : "gray"}
                onClick={() => setActiveFilter(0)}
                type="dashed"
              >
                همه
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 1 ? "primary" : "gray"}
                onClick={() => setActiveFilter(1)}
                type="dashed"
              >
                پرونده‌ها
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 2 ? "primary" : "gray"}
                onClick={() => setActiveFilter(2)}
                type="dashed"
              >
                گزارش‌ها و تحلیل‌ها
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 3 ? "primary" : "gray"}
                onClick={() => setActiveFilter(3)}
                type="dashed"
              >
                مقالات
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 4 ? "primary" : "gray"}
                onClick={() => setActiveFilter(4)}
                type="dashed"
              >
                اینفوگرافیک و موشن گرافیک
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 5 ? "primary" : "gray"}
                onClick={() => setActiveFilter(5)}
                type="dashed"
              >
                پادکست و ویدئوکست
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 6 ? "primary" : "gray"}
                onClick={() => setActiveFilter(6)}
                type="dashed"
              >
                مطالعه موردی و داستان‌های موفقیت
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 7 ? "primary" : "gray"}
                onClick={() => setActiveFilter(7)}
                type="dashed"
              >
                رویدادها
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 8 ? "primary" : "gray"}
                onClick={() => setActiveFilter(8)}
                type="dashed"
              >
                معرفی کتاب
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 9 ? "primary" : "gray"}
                onClick={() => setActiveFilter(9)}
                type="dashed"
              >
                کیوسک منابع
              </AppButton>
              <AppButton
                className="text-[1.6vh] py-2.5 text-nowrap"
                theme={activeFilter === 10 ? "primary" : "gray"}
                onClick={() => setActiveFilter(10)}
                type="dashed"
              >
                اخبار و بروزرسانی‌ها
              </AppButton>
            </div>
            <h1 className="text-[4.2vh] md:text-[6.43vh] md:mt-[6vh] mb-[2.26vh]">
              دیدگاه‌ها و تحلیل‌ها
            </h1>
            <AppButton
              parentClassName="w-full mx-auto md:w-fit md:mt-0 md:px-0"
              className="text-[2.1vh] md:text-lg py-1"
              iconClass="w-[38px] h-[38px] md:w-[48px] md:h-[48px]"
              theme="primary"
              icon="InsideIcon"
            >
              مشاهده مجله امکان
            </AppButton>
          </div>
        </div>
        <NewsGallery />
      </div>
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
      className={`flex flex-row-reverse md:flex-row items-center gap-2 cursor-pointer select-none text-nowrap font-medium p-3 md:p-0 ${
        activeState === state
          ? "text-primary border-b-2 border-primary md:border-none"
          : "text-disablePrimary"
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
