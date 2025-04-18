import * as React from "react";
import { homeSectionDictTypes } from "@/types/landing/landing.types";
import ResponsiveLayout from "@/layout/responsiveLayout";
import LinkableBanners from "@/components/cards/linkableBanners";
import consultingBanner from "@/assets/images/landing/consultingBanner.png";
import meetingBanner from "@/assets/images/landing/meetingBanner.png";
import conferenceBanner from "@/assets/images/landing/conferenceBanner.png";

interface Props {
  rtl: boolean;
  dict: homeSectionDictTypes;
}

export default function LandingSectionFour({}: Props) {
  return (
    <ResponsiveLayout className="w-full">
      <div className="bg-[#F8F4EC] h-screen py-14 md:pt-27 md:mb-0 md:px-20 w-full flex flex-col-reverse md:flex-col">
        <div className="mt-[3vh] md:mt-[5vh] flex md:flex-row flex-col items-center gap-5 justify-center h-[90vh] md:h-full overflow-y-auto md:overflow-y-hidden w-full px-5 md:px-0">
          <LinkableBanners
            className="min-h-[300px] md:h-[49vh] w-full md:w-[44vh]"
            bg={consultingBanner}
            title="مشاوره برنامه‌ریزی و اقتصاد"
            subTitle="Planing and economic consulting"
            desc="ارائه مشاوره استراتژیک و تحلیل‌های اقتصادی برای شناسایی فرصت‌ها و افزایش بهره‌وری پروژه‌ها."
          />
          <LinkableBanners
            className="min-h-[300px] md:h-[49vh] w-full md:w-[44vh]"
            bg={meetingBanner}
            title="آژانس ترویج سرمایه‌گذاری"
            subTitle="Investment promotion agency"
            desc="تسهیل جذب سرمایه‌های داخلی و خارجی برای تحقق پروژه‌های اقتصادی کلان در سراسر ایران."
          />
          <LinkableBanners
            className="min-h-[300px] md:h-[49vh] w-full md:w-[44vh]"
            bg={conferenceBanner}
            title="توسعه‌دهنده ارشد"
            subTitle="Master developer company"
            desc="راهبری پروژه‌های توسعه‌ای بزرگ در ایران، با هدف ایجاد زیرساخت‌های پایدار و مناطق اقتصادی جدید."
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between text-primary mt-[3vh] md:mt-[7.65vh] px-5 md:px-0-1">
          <h1 className="text-[4.2vh] md:text-[6.43vh]">ساختار گروه امکان</h1>
          <p className="text-[1.58vh] md:max-w-[45%] text-justify line-clamp-4 leading-7">
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
