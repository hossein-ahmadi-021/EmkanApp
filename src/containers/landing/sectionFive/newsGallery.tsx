import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, FreeMode, Navigation } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import AppIcon from "@/common/appIcon";
import natureImage from "@/assets/images/landing/nature.png";
import Image from "next/image";

export default function NewsGallery() {
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="md:w-[34%] h-screen flex items-start gap-5">
      {/* Desktop Navigation Buttons */}
      {!isMobile && (
        <div className="mt-12">
          <button
            className={`duration-700 w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer ${
              isBeginning ? "bg-white border" : "bg-[#CDD8D2]"
            }`}
            onClick={() => swiperRef?.slidePrev()}
          >
            <AppIcon
              className={`rotate-180 ${isBeginning && "text-[#ADA795]"}`}
              color="primary"
              name="ArrowIcon"
              width="19px"
              height="19px"
            />
          </button>
          <button
            className={`duration-700 w-[50px] h-[50px] rounded-full flex items-center justify-center mt-[5px] cursor-pointer ${
              isEnd ? "bg-white border" : "bg-[#CDD8D2]"
            }`}
            onClick={() => swiperRef?.slideNext()}
          >
            <AppIcon
              className={`${isEnd && "text-[#ADA795]"}`}
              color="primary"
              name="ArrowIcon"
              width="19px"
              height="19px"
            />
          </button>
        </div>
      )}

      <div className="w-full h-full">
        <div className="flex items-center gap-2.5 text-lg font-bold mb-6">
          <AppIcon
            color="primary"
            name="FireIcon"
            width="18.5px"
            height="24px"
          />
          <div>آخرین محتوای توسعه سرزمینی</div>
        </div>

        <Swiper
          direction={isMobile ? "horizontal" : "vertical"}
          slidesPerView={isMobile ? "auto" : 1.25}
          spaceBetween={30}
          onSwiper={setSwiperRef}
          className={isMobile ? "h-[75vh]" : "h-[75vh]"}
          freeMode={{
            enabled: isMobile,
            sticky: true,
            momentumRatio: 0.5,
            momentumBounceRatio: 0.1,
          }}
          breakpoints={{
            768: {
              direction: "vertical",
              slidesPerView: 1.25,
              freeMode: {
                enabled: true,
                sticky: true,
                momentumRatio: 0.5,
                momentumBounceRatio: 0.1,
              },
            },
          }}
          slidesPerGroup={1}
          resistanceRatio={0}
          watchSlidesProgress={true}
          modules={[FreeMode, Controller, Navigation]}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {[1, 2, 3].map((item) => (
            <SwiperSlide
              key={item}
              className={isMobile ? "!w-[85vw]" : "!h-[calc((88vh-30px)/1.5)]"}
            >
              <NewsCard isMobile={isMobile} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const NewsCard = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={natureImage}
          alt="nature banner"
          width={460}
          height={307}
          layout={isMobile ? "responsive" : "fixed"}
          className={isMobile ? "mobile-image" : ""}
        />
        <div className="bg-white text-[#104946] p-2 absolute bottom-0 font-normal text-[13px]">
          گزارش ها و انتشارات
        </div>
      </div>
      <div className="flex items-start gap-2 mt-[13px]">
        <div className="font-medium text-[22px] w-[80%]">
          راه‌اندازی مسیرهای جدید گردشگری در مناطق کمتر شناخته‌شده ایران
        </div>
        <AppIcon
          className="absolute end-[-12px] mt-[-9px]"
          color="primary"
          name="ArrowToIcon"
          width="45px"
          height="45px"
        />
      </div>
      <p className="text-sm font-light w-[80%]">
        گزارش از طرح‌های توسعه‌ای در شهرهای کوچک با پتانسیل گردشگری بالا.
      </p>
    </div>
  );
};
