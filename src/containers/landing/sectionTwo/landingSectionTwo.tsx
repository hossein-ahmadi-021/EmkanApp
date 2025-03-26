import { homeSectionDictTypes } from "@/types/landing/landing.types";
import ResponsiveLayout from "@/layout/responsiveLayout";
import iranMapBg from "@/assets/images/landing/iranMap.svg";
import Image from "next/image";
import AppIcon from "@/common/appIcon";
import AppButton from "@/common/appButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  rtl: boolean;
  dict: homeSectionDictTypes;
  isActive: boolean;
}

const transformConfigs = {
  makran: {
    scale: 2.5,
    originX: 25,
    originY: 41,
  },
  azad: {
    scale: 1.12,
    originX: 28,
    originY: -57,
  },
  islands: {
    scale: 2.4,
    originX: 9,
    originY: 40,
  },
};

const defaultTransform = {
  scale: 1.4,
  translateX: -20,
  translateY: -20,
};

export default function LandingSectionTwo({ dict, rtl, isActive }: Props) {
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

  //states
  const [transform, setTransform] = useState({
    scale: 1.4,
    translateX: -20,
    translateY: -20,
  });
  const [activeConfig, setActiveConfig] =
    useState<keyof typeof transformConfigs>("makran");

  //actions
  const handleZoom = (config: keyof typeof transformConfigs) => {
    const { scale, originX, originY } = transformConfigs[config];
    setTransform({
      scale,
      translateX: (1 - scale) * originX,
      translateY: (1 - scale) * originY,
    });
    setActiveConfig(config);
  };
  const resetZoom = () => {
    setTransform(defaultTransform);
  };

  //default handle zoom
  useEffect(() => {
    if (isActive) {
      handleZoom("makran");
    } else {
      resetZoom();
    }
  }, [isActive]);

  return (
    <ResponsiveLayout className="z-10 text-primary flex items-center h-screen font-medium">
      <motion.div
        variants={animateStart}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        transition={{ duration: 0.7 }}
        className="w-5/12 ps-16 whitespace-nowrap relative z-10 flex flex-col h-full pt-28 pb-8 justify-between"
      >
        <div>
          <h1 className="text-[6.43vh] font-medium">مناطق پیشران اقتصاد</h1>
          <div className="mt-[2.608vh] flex flex-col gap-2.5">
            <div className="mt-[2.608vh] flex flex-col gap-2.5">
              <div
                onClick={() => handleZoom("makran")}
                className={`flex items-center gap-2 cursor-pointer select-none ${
                  activeConfig === "makran"
                    ? "text-[1.74vh] font-semibold"
                    : "text-[1.74vh] text-disablePrimary font-semibold"
                }`}
              >
                {activeConfig === "makran" && (
                  <AppIcon
                    color="primary"
                    name="HalfCircleIcon"
                    width="30"
                    height="30"
                  />
                )}
                <h4>منطقه مکران</h4>
              </div>
              <div
                onClick={() => handleZoom("azad")}
                className={`flex items-center gap-2 cursor-pointer select-none ${
                  activeConfig === "azad"
                    ? "text-[1.74vh] font-semibold"
                    : "text-[1.74vh] text-disablePrimary font-semibold"
                }`}
              >
                {activeConfig === "azad" && (
                  <AppIcon
                    color="primary"
                    name="HalfCircleIcon"
                    width="30"
                    height="30"
                  />
                )}
                <h4 className="text-[1.74vh] font-semibold">مناطق آزاد</h4>
              </div>
              <div
                onClick={() => handleZoom("islands")}
                className={`flex items-center gap-2 cursor-pointer select-none ${
                  activeConfig === "islands"
                    ? "text-[1.74vh] font-semibold"
                    : "text-[1.74vh] text-disablePrimary font-semibold"
                }`}
              >
                {activeConfig === "islands" && (
                  <AppIcon
                    color="primary"
                    name="HalfCircleIcon"
                    width="30"
                    height="30"
                  />
                )}
                <h4 className="text-[1.74vh] font-semibold">جزایر</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="gap-[5px] flex items-center">
            <AppButton
              theme="primary"
              type="dashed"
              className="text-xBase font-medium"
            >
              هرمزگان
            </AppButton>
            <AppButton
              theme="gold"
              type="dashed"
              className="text-xBase font-medium"
            >
              سیستان و بلوچستان
            </AppButton>
          </div>
          <div className="bg-dimPrimary px-[30px] py-[24px] mt-[0.96vh] max-w-[378px] flex-wrap">
            <div className="flex items-start justify-between">
              <div className="w-100">
                <div className="text-[1.39vh] opacity-60">مساحت</div>
                <div className="flex items-center gap-2">
                  <div className="text-[1.39vh]">km2</div>
                  <div className="text-[2.78vh] font-medium">187502</div>
                </div>
              </div>
              <div className="w-100">
                <div className="text-[1.39vh] opacity-60">طول خط ساحلی</div>
                <div className="flex items-center gap-2">
                  <div className="text-[1.39vh]">KM</div>
                  <div className="text-[2.78vh] font-medium">1000</div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between mt-5">
              <div className="w-50">
                <div className="text-[1.39vh] opacity-60">جمعیت</div>
                <div className="flex items-center gap-2">
                  <div className="text-[1.39vh]">KM</div>
                  <div className="text-[2.78vh] font-medium">1000</div>
                </div>
              </div>
              <div className="w-50">
                <div className="text-[1.39vh] opacity-60">شهر ها</div>
                <div className="flex items-center gap-2">
                  <div className="text-[1.39vh]">KM</div>
                  <div className="text-[2.78vh] font-medium">1000</div>
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
            <h2 className=" text-[5.39vh]">منطقه مکران</h2>
          </div>
          <AppButton theme="primary" icon="InsideIcon">
            درباره منطقه مکران بیشتر بدانید
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
        className="w-full h-[72vh]"
        style={{
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
      </motion.div>
    </ResponsiveLayout>
  );
}
