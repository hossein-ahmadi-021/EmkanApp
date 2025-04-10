import ResponsiveLayout from "@/layout/responsiveLayout";
import iranMapBg from "@/assets/images/landing/iranMap.svg";
import Image from "next/image";
import AppIcon from "@/common/appIcon";
import AppButton from "@/common/appButton";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  freeLocs,
  islandLocs,
  makranLocs,
} from "@/containers/landing/sectionTwo/stateLocations";
import MotionScrollableWidth from "@/components/motion/motionScrollableWidth";
import MakranGeography from "@/containers/landing/sectionTwo/makranGeography";
import AzadGeography from "@/containers/landing/sectionTwo/azadGeography";
import IslandsGeography from "@/containers/landing/sectionTwo/islandsGeography";
import { numberSplit } from "@/lib/utils/numbers";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

interface Props {
  rtl: boolean;
  isActive: boolean;
  onSubSectionComplete: () => void;
  onSubSectionBack: () => void;
}

type LocationKey = "makran" | "azad" | "islands";

interface LocationItem {
  id: number;
  name: string;
}

export default function LandingSectionTwo({
  rtl,
  isActive,
  onSubSectionComplete,
  onSubSectionBack,
}: Props) {
  const [currentZoom, setCurrentZoom] = useState<number>(0);
  const [pendingAction, setPendingAction] = useState<
    "complete" | "back" | null
  >(null);
  const isScrolling = useRef(false);
  const [transform, setTransform] = useState({
    scale: 1.4,
    translateX: rtl ? -20 : 20,
    translateY: rtl ? -20 : 20,
  });
  const [activeConfig, setActiveConfig] = useState<{
    location: LocationKey;
    activeLatLng: number;
  }>({
    location: "makran",
    activeLatLng: 1,
  });

  const transformConfigs = useMemo(
    () => ({
      makran: {
        scale: 2.5,
        originX: rtl ? 25 : -25,
        originY: 41,
      },
      azad: {
        scale: 1.12,
        originX: rtl ? 28 : -28,
        originY: -57,
      },
      islands: {
        scale: 2.4,
        originX: rtl ? 9 : -9,
        originY: 40,
      },
    }),
    [rtl]
  );

  const animateStart = {
    hidden: {
      opacity: 0,
      x: rtl ? 190 : -190,
      transition: { duration: 0.9 },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };

  const locationInfos: Record<LocationKey, LocationItem[]> = {
    makran: makranLocs,
    azad: freeLocs,
    islands: islandLocs,
  };

  const handleZoom = useCallback(
    (config: LocationKey) => {
      const { scale, originX, originY } = transformConfigs[config];
      setTransform({
        scale,
        translateX: (1 - scale) * originX,
        translateY: (1 - scale) * originY,
      });
      setActiveConfig({
        location: config,
        activeLatLng: 1,
      });
    },
    [transformConfigs]
  );

  const resetZoom = useCallback(() => {
    setTransform({
      scale: 1.4,
      translateX: rtl ? -20 : 20,
      translateY: rtl ? -20 : 20,
    });
    setActiveConfig({
      location: "makran",
      activeLatLng: 1,
    });
  }, [rtl]);

  const handleScroll = useCallback(
    (direction: "up" | "down") => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      setCurrentZoom((prev) => {
        if (direction === "down" && prev < 2) {
          const nextZoom = prev + 1;
          const locations: LocationKey[] = ["makran", "azad", "islands"];
          console.log(
            `Moving from ${locations[prev]} to ${locations[nextZoom]}`
          );
          handleZoom(locations[nextZoom]);
          return nextZoom;
        } else if (direction === "up" && prev > 0) {
          const prevZoom = prev - 1;
          const locations: LocationKey[] = ["makran", "azad", "islands"];
          console.log(
            `Moving from ${locations[prev]} to ${locations[prevZoom]}`
          );
          handleZoom(locations[prevZoom]);
          return prevZoom;
        } else if (direction === "up" && prev === 0) {
          setPendingAction("back");
          return prev;
        } else if (direction === "down" && prev === 2) {
          setPendingAction("complete");
          return prev;
        }
        return prev;
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    },
    [handleZoom]
  );

  useEffect(() => {
    if (isActive) {
      if (currentZoom === 0) {
        console.log("Section activated - Starting at makran (0)");
        handleZoom("makran");
      } else {
        const locations: LocationKey[] = ["makran", "azad", "islands"];
        console.log(
          `Section activated - Restoring to ${locations[currentZoom]} (${currentZoom})`
        );
        handleZoom(locations[currentZoom]);
      }
    } else {
      console.log("Section deactivated - Resetting zoom");
      resetZoom();
    }
  }, [isActive, handleZoom, resetZoom, currentZoom]);

  useEffect(() => {
    if (pendingAction === "complete") {
      onSubSectionComplete();
      setPendingAction(null);
    } else if (pendingAction === "back") {
      onSubSectionBack();
      setPendingAction(null);
    }
  }, [pendingAction, onSubSectionComplete, onSubSectionBack]);

  useEffect(() => {
    if (!isActive) return;

    let lastScrollTime = 0;
    const scrollCooldown = 1500;
    let scrollTimeout: NodeJS.Timeout;
    let touchStartY = 0;
    let touchStartX = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();

      if (now - lastScrollTime < scrollCooldown) {
        console.log("Scroll blocked - cooldown period");
        return;
      }

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      lastScrollTime = now;
      const direction = e.deltaY > 0 ? "down" : "up";
      console.log("Wheel event:", direction, "currentZoom:", currentZoom);

      scrollTimeout = setTimeout(() => {
        handleScroll(direction);
      }, 100);
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const now = Date.now();

      if (now - lastScrollTime < scrollCooldown) {
        return;
      }

      const touchEndY = e.touches[0].clientY;
      const touchEndX = e.touches[0].clientX;

      // Calculate vertical and horizontal movement
      const diffY = touchStartY - touchEndY;
      const diffX = touchStartX - touchEndX;

      // Only process if vertical movement is greater than horizontal (to distinguish from horizontal scroll)
      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 30) {
        lastScrollTime = now;
        const direction = diffY > 0 ? "down" : "up";
        console.log("Touch event:", direction, "currentZoom:", currentZoom);

        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(() => {
          handleScroll(direction);
        }, 100);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
    };

    // Add event listeners with passive: false to ensure preventDefault works
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isActive, handleScroll, currentZoom]);

  return (
    <ResponsiveLayout className="z-10 text-primary flex items-center h-screen font-medium">
      <motion.div
        variants={animateStart}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        transition={{ duration: 0.7 }}
        className="w-6/12 ps-16 whitespace-nowrap relative z-10 flex flex-col h-full pt-28 pb-8 justify-between overflow-hidden"
      >
        <div>
          <h1 className="text-[6.43vh] font-medium">مناطق پیشران اقتصاد</h1>
          <div className="mt-[2.608vh] flex flex-col gap-2.5">
            <Swiper
              modules={[FreeMode]}
              freeMode={true}
              slidesPerView="auto"
              spaceBetween={20}
              className="mt-[2.608vh]"
            >
              <SwiperSlide className="!w-auto">
                <div
                  onClick={() => handleZoom("makran")}
                  className={`flex items-center gap-2 cursor-pointer select-none ${
                    activeConfig.location === "makran"
                      ? "text-[1.74vh] font-semibold"
                      : "text-[1.74vh] text-disablePrimary font-semibold"
                  }`}
                >
                  {activeConfig.location === "makran" && (
                    <AppIcon
                      color="primary"
                      name="HalfCircleIcon"
                      width="30"
                      height="30"
                    />
                  )}
                  <h4>منطقه مکران</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <div
                  onClick={() => handleZoom("azad")}
                  className={`flex items-center gap-2 cursor-pointer select-none ${
                    activeConfig.location === "azad"
                      ? "text-[1.74vh] font-semibold"
                      : "text-[1.74vh] text-disablePrimary font-semibold"
                  }`}
                >
                  {activeConfig.location === "azad" && (
                    <AppIcon
                      color="primary"
                      name="HalfCircleIcon"
                      width="30"
                      height="30"
                    />
                  )}
                  <h4 className="text-[1.74vh] font-semibold">مناطق آزاد</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <div
                  onClick={() => handleZoom("islands")}
                  className={`flex items-center gap-2 cursor-pointer select-none ${
                    activeConfig.location === "islands"
                      ? "text-[1.74vh] font-semibold"
                      : "text-[1.74vh] text-disablePrimary font-semibold"
                  }`}
                >
                  {activeConfig.location === "islands" && (
                    <AppIcon
                      color="primary"
                      name="HalfCircleIcon"
                      width="30"
                      height="30"
                    />
                  )}
                  <h4 className="text-[1.74vh] font-semibold">جزایر</h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <MotionScrollableWidth isRTL={rtl}>
            {locationInfos[activeConfig.location].map((item) => {
              const isActive = activeConfig.activeLatLng === item.id;
              return (
                <AppButton
                  key={item.id}
                  theme={isActive ? "primary" : "gold"}
                  type="dashed"
                  className="text-base font-medium py-2.5"
                  onClick={() => {
                    setActiveConfig((prev) => ({
                      ...prev,
                      activeLatLng: item.id,
                    }));
                  }}
                >
                  {item.name}
                </AppButton>
              );
            })}
          </MotionScrollableWidth>
          <div className="bg-dimPrimary px-[30px] py-[24px] mt-[0.96vh] max-w-[378px] flex-wrap">
            <div className="flex items-start justify-between">
              <div className="w-100">
                <div className="text-[1.62vh] opacity-60">مساحت</div>
                <div className="flex items-center gap-2">
                  <div className="text-[1.62vh]">km2</div>
                  <div className="text-[2.88vh] font-medium">
                    {numberSplit(187502)}
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div className="text-[1.62vh] opacity-60">طول خط ساحلی</div>
                <div className="flex items-center gap-2">
                  <div className="text-[1.62vh]">KM</div>
                  <div className="text-[2.88vh] font-medium">
                    {numberSplit(1000)}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between mt-5">
              <div className="w-50">
                <div className="text-[1.62vh] opacity-60">جمعیت</div>
                <div className="flex items-center gap-2">
                  <div className="text-[1.62vh]">KM</div>
                  <div className="text-[2.88vh] font-medium">
                    {numberSplit(1000)}
                  </div>
                </div>
              </div>
              <div className="w-50">
                <div className="text-[1.62vh] opacity-60">شهر ها</div>
                <div className="flex items-center gap-2">
                  <div className="text-[1.62vh]">KM</div>
                  <div className="text-[2.88vh] font-medium">
                    {numberSplit(1000)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-[2.61vh] mb-5">
            <AppIcon
              color="primary"
              name="HalfCircleIcon"
              width="50"
              height="50"
            />
            <h2 className=" text-[5.39vh]">
              {activeConfig.location === "makran" && "منطقه مکران"}
              {activeConfig.location === "azad" && "مناطق آزاد"}
              {activeConfig.location === "islands" && "جزایر"}
            </h2>
          </div>
          <AppButton theme="primary" icon="InsideIcon">
            {activeConfig.location === "makran" &&
              "درباره منطقه مکران بیشتر بدانید"}
            {activeConfig.location === "azad" &&
              "درباره مناطق آزاد بیشتر بدانید"}
            {activeConfig.location === "islands" && "درباره جزایر بیشتر بدانید"}
          </AppButton>
        </div>
      </motion.div>
      <motion.div
        animate={{
          transform: `translate(${transform.translateX}%, ${transform.translateY}%) scale(${transform.scale})`,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 120,
          mass: 0.5,
        }}
        className="w-full relative"
        style={{
          aspectRatio: 794 / 828,
          height: "537px",
          overflow: "hidden",
          willChange: "transform",
        }}
      >
        <Image
          src={iranMapBg}
          alt="iranMap"
          fill={true}
          quality={50}
          priority
          className="object-contain"
          sizes="(max-width: 768px) 90vw, 67.04vh"
          style={{
            aspectRatio: 794 / 828,
            transform: "translateZ(0)",
          }}
        />
        <Image
          src={iranMapBg}
          alt="iranMap"
          fill={true}
          quality={50}
          priority
          className={"object-contain"}
          sizes="(max-width: 768px) 90vw, 67.04vh"
          style={{
            aspectRatio: 794 / 828,
            transform: "translateZ(0)",
          }}
        />
        {activeConfig.location === "makran" && (
          <MakranGeography
            activeTab={activeConfig.activeLatLng}
            setActiveConfig={setActiveConfig}
          />
        )}
        {activeConfig.location === "azad" && (
          <AzadGeography
            activeId={activeConfig.activeLatLng}
            setActiveConfig={setActiveConfig}
          />
        )}
        {activeConfig.location === "islands" && (
          <IslandsGeography
            activeId={activeConfig.activeLatLng}
            setActiveConfig={setActiveConfig}
          />
        )}
      </motion.div>
    </ResponsiveLayout>
  );
}
