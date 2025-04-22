"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AppIcon from "@/common/appIcon";
import "./marqueeSlider.css";

interface Props {
  className: string;
}

export default function MarqueeSlider({ className }: Props) {
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
      className={`marquee-container ${className}`}
    >
      {slidesList.map((item) => (
        <SwiperSlide key={item.id} className="slide-item">
          <div className="flex items-center gap-2">
            <AppIcon
              color="primary"
              name="MiniHalfCircle"
              width="5.5vh"
              height="5.5vh"
            />
            <div className="text-[4vh] font-medium">{item.name}</div>
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
  { name: "توسعه سرزمینی", id: 13 },
  { name: "راهبری اقتصادی", id: 14 },
  { name: "شکل دهی آینده", id: 15 },
  { name: "تمدن سازی", id: 16 },
  { name: "توسعه سرزمینی", id: 17 },
  { name: "راهبری اقتصادی", id: 18 },
  { name: "شکل دهی آینده", id: 19 },
  { name: "تمدن سازی", id: 20 },
  { name: "توسعه سرزمینی", id: 21 },
  { name: "راهبری اقتصادی", id: 22 },
  { name: "شکل دهی آینده", id: 23 },
  { name: "تمدن سازی", id: 24 },
  { name: "توسعه سرزمینی", id: 25 },
  { name: "راهبری اقتصادی", id: 26 },
  { name: "شکل دهی آینده", id: 27 },
  { name: "تمدن سازی", id: 28 },
];
