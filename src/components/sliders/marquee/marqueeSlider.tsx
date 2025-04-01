"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AppIcon from "@/common/appIcon";
import "./marqueeSlider.css";

export default function MarqueeSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      loop={true}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      spaceBetween={30}
      allowTouchMove={false}
      freeMode={true}
      className="marquee-container"
    >
      {slidesList.map((item) => (
        <SwiperSlide key={item.id} className="slide-item">
          <div className="flex items-center gap-2 mt-[5.83vh]">
            <AppIcon
              color="primary"
              name="MiniHalfCircle"
              width="54"
              height="36"
            />
            <div className="text-[4.35vh] font-medium">{item.name}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const slidesList = [
  { name: "توسعه سرزمینی", id: 1 },
  { name: "راهبری اقتصادی", id: 2 },
  { name: "شکل دهی آینده", id: 3 },
  { name: "تمدن سازی", id: 4 },
  { name: "توسعه سرزمینی", id: 5 },
  { name: "راهبری اقتصادی", id: 6 },
  { name: "شکل دهی آینده", id: 7 },
  { name: "تمدن سازی", id: 8 },
  { name: "توسعه سرزمینی", id: 9 },
  { name: "راهبری اقتصادی", id: 10 },
  { name: "شکل دهی آینده", id: 11 },
  { name: "تمدن سازی", id: 12 },
];
