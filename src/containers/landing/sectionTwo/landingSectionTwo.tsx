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
import "swiper/css";
import "swiper/css/free-mode";

// Types
type LocationKey = "makran" | "azad" | "islands";

interface LocationItem {
  id: number;
  name: string;
}

interface Props {
  rtl: boolean;
  isActive: boolean;
  onSubSectionComplete: () => void;
  onSubSectionBack: () => void;
}

interface TransformState {
  scale: number;
  translateX: number;
  translateY: number;
}

interface ActiveConfig {
  location: LocationKey;
  activeLatLng: number;
}

// Constants
const SCROLL_COOLDOWN = 1500;
const ANIMATION_DURATION = 700;
const DEFAULT_TRANSFORM: TransformState = {
  scale: 1.4,
  translateX: 20,
  translateY: 20,
};

export default function LandingSectionTwo({
  rtl,
  isActive,
  onSubSectionComplete,
  onSubSectionBack,
}: Props) {
  // State
  const [currentZoom, setCurrentZoom] = useState<number>(0);
  const [pendingAction, setPendingAction] = useState<
    "complete" | "back" | null
  >(null);
  const isScrolling = useRef(false);
  const [transform, setTransform] = useState<TransformState>({
    ...DEFAULT_TRANSFORM,
    translateX: rtl
      ? -DEFAULT_TRANSFORM.translateX
      : DEFAULT_TRANSFORM.translateX,
    translateY: rtl
      ? -DEFAULT_TRANSFORM.translateY
      : DEFAULT_TRANSFORM.translateY,
  });
  const [activeConfig, setActiveConfig] = useState<ActiveConfig>({
    location: "makran",
    activeLatLng: 1,
  });

  // Memoized values
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

  const locationInfos: Record<LocationKey, LocationItem[]> = {
    makran: makranLocs,
    azad: freeLocs,
    islands: islandLocs,
  };

  // Animation variants
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

  // Handlers
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
      ...DEFAULT_TRANSFORM,
      translateX: rtl
        ? -DEFAULT_TRANSFORM.translateX
        : DEFAULT_TRANSFORM.translateX,
      translateY: rtl
        ? -DEFAULT_TRANSFORM.translateY
        : DEFAULT_TRANSFORM.translateY,
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
        const locations: LocationKey[] = ["makran", "azad", "islands"];

        if (direction === "down" && prev < 2) {
          const nextZoom = prev + 1;
          handleZoom(locations[nextZoom]);
          return nextZoom;
        } else if (direction === "up" && prev > 0) {
          const prevZoom = prev - 1;
          handleZoom(locations[prevZoom]);
          return prevZoom;
        } else if (direction === "up" && prev === 0) {
          setPendingAction("back");
        } else if (direction === "down" && prev === 2) {
          setPendingAction("complete");
        }
        return prev;
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, ANIMATION_DURATION);
    },
    [handleZoom]
  );

  // Effects
  useEffect(() => {
    if (isActive) {
      const locations: LocationKey[] = ["makran", "azad", "islands"];
      handleZoom(locations[currentZoom]);
    } else {
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
    let scrollTimeout: NodeJS.Timeout;
    let touchStartY = 0;
    let touchStartX = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();

      if (now - lastScrollTime < SCROLL_COOLDOWN) return;
      if (scrollTimeout) clearTimeout(scrollTimeout);

      lastScrollTime = now;
      const direction = e.deltaY > 0 ? "down" : "up";

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

      if (now - lastScrollTime < SCROLL_COOLDOWN) return;

      const touchEndY = e.touches[0].clientY;
      const touchEndX = e.touches[0].clientX;
      const diffY = touchStartY - touchEndY;
      const diffX = touchStartX - touchEndX;

      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 30) {
        lastScrollTime = now;
        const direction = diffY > 0 ? "down" : "up";

        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          handleScroll(direction);
        }, 100);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
    };

    const options = { passive: false };
    window.addEventListener("wheel", handleWheel, options);
    window.addEventListener("touchstart", handleTouchStart, options);
    window.addEventListener("touchmove", handleTouchMove, options);
    window.addEventListener("touchend", handleTouchEnd, options);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isActive, handleScroll]);

  // Render helpers
  const renderLocationButton = (location: LocationKey, label: string) => (
    <div
      onClick={() => handleZoom(location)}
      className={`flex md:justify-start justify-center w-full cursor-pointer select-none ${
        activeConfig.location === location
          ? "text-[1.74vh] font-semibold border-b-2 md:border-b-0 border-primary"
          : "text-[1.74vh] text-disablePrimary font-semibold border-b md:border-none"
      }`}
    >
      <div className="flex items-center gap-2">
        {activeConfig.location === location && (
          <AppIcon
            className="w-[2.3vh] md:w-[30px]"
            color="primary"
            name="HalfCircleIcon"
            width="30"
            height="30"
          />
        )}
        <h4>{label}</h4>
      </div>
    </div>
  );

  const renderLocationInfo = (title: string, value: number, unit: string) => (
    <div className="flex items-center gap-2">
      <div className="text-[1.12vh] md:text-[1.62vh]">{unit}</div>
      <div className="text-[2.38vh] font-medium md:text-[2.88vh]">
        {numberSplit(value)}
      </div>
    </div>
  );

  return (
    <ResponsiveLayout className="z-10 text-primary flex flex-col md:flex-row items-center h-screen font-medium w-full p-0 md:p-auto">
      <motion.div
        variants={animateStart}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        transition={{ duration: 0.7 }}
        className="w-full md:w-6/12 md:ps-16 md:whitespace-nowrap relative z-10 flex flex-col h-fit md:h-full pt-20 md:pt-28 pb-8 md:justify-between md:overflow-hidden bg-white"
      >
        <div>
          <h1 className="text-[4vh] md:text-[6.43vh] font-medium text-center md:text-start">
            مناطق پیشران اقتصاد
          </h1>
          <div className="mt-[1vh] md:mt-[4.608vh] flex flex-row md:flex-col md:gap-2.5 mb-2 md:mb-4 w-full [&>*]:md:w-full [&>*]:w-full [&>*]:transition-colors [&>*]:duration-300 [&>*]:pb-1 [&>*]:md:pb-0 [&>*]:flex-1">
            {renderLocationButton("makran", "منطقه مکران")}
            {renderLocationButton("azad", "مناطق آزاد")}
            {renderLocationButton("islands", "جزایر")}
          </div>
        </div>
        <div>
          <MotionScrollableWidth className="px-3 md:px-0" isRTL={rtl}>
            {locationInfos[activeConfig.location].map((item) => (
              <AppButton
                key={item.id}
                theme={
                  activeConfig.activeLatLng === item.id ? "primary" : "gold"
                }
                type="dashed"
                className="text-[1.6vh] md:text-base font-medium py-1.5 md:py-2.5 text-nowrap"
                onClick={() => {
                  setActiveConfig((prev) => ({
                    ...prev,
                    activeLatLng: item.id,
                  }));
                }}
              >
                {item.name}
              </AppButton>
            ))}
          </MotionScrollableWidth>
          <div className="bg-dimPrimary px-[30px] py-[18px] md:py-[24px] mt-[0.96vh] max-w-[378px] flex-wrap mx-3 md:mx-0">
            <div className="flex items-start justify-between">
              <div className="w-100">
                <div className="text-[1.3vh] md:text-[1.62vh] opacity-60">
                  مساحت
                </div>
                {renderLocationInfo("مساحت", 187502, "km2")}
              </div>
              <div className="w-100">
                <div className="text-[1.3vh] md:text-[1.62vh] opacity-60">
                  طول خط ساحلی
                </div>
                {renderLocationInfo("طول خط ساحلی", 1000, "KM")}
              </div>
            </div>
            <div className="flex items-start justify-between mt-5">
              <div className="w-50">
                <div className="text-[1.3vh] md:text-[1.62vh] opacity-60">
                  جمعیت
                </div>
                {renderLocationInfo("جمعیت", 1000, "KM")}
              </div>
              <div className="w-50">
                <div className="text-[1.3vh] md:text-[1.62vh] opacity-60">
                  شهر ها
                </div>
                {renderLocationInfo("شهر ها", 1000, "KM")}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-[2.61vh] mb-5 hidden md:flex">
            <AppIcon
              className="w-[30px] md:w-[50px]"
              color="primary"
              name="HalfCircleIcon"
              width="50"
              height="50"
            />
            <h2 className="text-[3.5vh] md:text-[5.39vh]">
              {activeConfig.location === "makran" && "منطقه مکران"}
              {activeConfig.location === "azad" && "مناطق آزاد"}
              {activeConfig.location === "islands" && "جزایر"}
            </h2>
          </div>
          <AppButton
            parentClassName="w-full mx-auto md:w-fit mt-2 md:mt-0 px-3 md:px-0"
            className="text-[2.1vh] md:text-lg py-0"
            iconClass="w-[38px] h-[38px] md:w-[48px] md:h-[48px]"
            theme="primary"
            icon="InsideIcon"
          >
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
        className={`w-full !h-[295px] md:!h-[537px] md:overflow-hidden ${
          activeConfig.location === "islands" && "me-14 md:me-0"
        }`}
        style={{
          aspectRatio: 794 / 828,
          height: "537px",
          width: "100%",
          willChange: "transform",
        }}
      >
        <div className="relative w-full h-full">
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
          {activeConfig.location === "makran" && (
            <MakranGeography
              activeTab={activeConfig.activeLatLng}
              setActiveConfig={setActiveConfig}
            />
          )}
        </div>
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
