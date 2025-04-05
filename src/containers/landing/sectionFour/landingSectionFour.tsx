import * as React from "react";
import { homeSectionDictTypes } from "@/types/landing/landing.types";
import ResponsiveLayout from "@/layout/responsiveLayout";
import LinkableBanners from "@/components/cards/linkableBanners";
import consultingBanner from "@/assets/images/landing/consultingBanner.png";

interface Props {
  rtl: boolean;
  dict: homeSectionDictTypes;
}

export default function LandingSectionFour(props: Props) {
  return (
    <ResponsiveLayout>
      <div className="bg-[#F8F4EC] h-screen py-27 px-20">
        <div className="mt-[5vh] flex items-center gap-5 justify-center">
          <LinkableBanners
            className="h-[49vh] w-[44vh]"
            bg={consultingBanner}
            title=""
            subTitle=""
          />
          <LinkableBanners
            className="h-[49vh] w-[44vh]"
            bg={consultingBanner}
            title=""
            subTitle=""
          />
          <LinkableBanners
            className="h-[49vh] w-[44vh]"
            bg={consultingBanner}
            title=""
            subTitle=""
          />
        </div>
        <div className="flex items-center justify-between text-primary mt-[7.65vh]">
          <h1 className="text-[6.43vh]">ساختار گروه امکان</h1>
          <p className="text-[1.58vh] max-w-[45%] text-justify line-clamp-4 leading-7">
            ما در امکان، مسیر توسعه را با رویکردی یکپارچه و آینده‌نگر پیش
            می‌بریم. از برنامه‌ریزی کلان و سیاست‌گذاری اقتصادی تا جذب
            سرمایه‌گذاری‌های بین‌المللی و اجرای پروژه‌های تحول‌آفرین، همه در
            خدمت ایجاد یک اکوسیستم توسعه‌یافته و رقابت‌پذیر برای ایران آینده
            است. تحلیل داده‌محور، استراتژی‌های سرمایه‌گذاری و همکاری‌های
            بین‌المللی، سه رکن اساسی مدل ما برای هدایت توسعه پایدار است. با این
            نگاه، ایران را به مقصدی امن، سودآور و پیشرو در زنجیره ارزش جهانی
            تبدیل می‌کنیم.
          </p>
        </div>
      </div>
    </ResponsiveLayout>
  );
}
