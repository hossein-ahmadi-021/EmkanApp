"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Progress } from "@/common/progress";
import { twMerge } from "tailwind-merge";
import ResponsiveLayout from "@/layout/responsiveLayout";
import LandingInfoBox from "@/containers/landing/sectionOne/landingInfoBox";
import AppIcon from "@/common/appIcon";
import clsx from "clsx";
import { homeSectionDictTypes } from "@/types/landing/landing.types";
import MotionScrollableWidth from "@/components/motion/motionScrollableWidth";

interface Props {
  rtl: boolean;
  dict: homeSectionDictTypes;
}

interface TabItemType {
  id: number;
  title: string;
}

const clickTabsVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const loadTabsVariants = {
  hidden: { opacity: 0, y: "120%" },
  visible: { opacity: 1, y: 0 },
};

export default function LandingSectionOne({ dict, rtl }: Props) {
  // States
  const [activeTab, setActiveTab] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useState(0.1);
  const [pause, setPause] = useState(false);
  const [muted, setMuted] = useState(true);

  // Handlers
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPause(true);
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPause(false);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (videoRef.current) {
      const volumeValue = newVolume / 100;
      setVolume(volumeValue);
      if (volumeValue > 0 && muted) {
        setMuted(false);
      }
    }
  };

  return (
    <div className="h-full md:h-fit w-full">
      <video
        ref={videoRef}
        autoPlay
        muted={muted}
        loop
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/landing-bg-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-[#0E0E0E80] fixed inset-0 w-full h-full -z-9"></div>
      <ResponsiveLayout className="z-10 text-white">
        <div className="md:mt-[12.38vh]">
          <MotionScrollableWidth
            className="md:hidden mt-[12vh]"
            isRTL={rtl}
            hasBlur={false}
            childClassName="!gap-2.5"
          >
            {dict.tabs.map((item: TabItemType) => {
              const isActive = item.id === activeTab;

              const titleClass = twMerge(
                "text-[1.57vh]",
                clsx({
                  "font-bold": isActive,
                  "font-normal": !isActive,
                })
              );

              return (
                <div
                  key={item.title}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-center gap-2.5 cursor-pointer px-4 select-none font-normal text-2xl rounded-full text-nowrap p-3 ${
                    isActive && "bg-[#FFFFFF33]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={clickTabsVariant}
                      transition={{ duration: 0.7 }}
                      className={rtl ? "" : "rotate-180"}
                    >
                      <AppIcon
                        name="HalfCircleIcon"
                        width="2.5vh"
                        height="2.5vh"
                        className="!animate-[spin_0.4s_linear_1]"
                      />
                    </motion.div>
                  )}
                  <div className={titleClass}>{item.title}</div>
                </div>
              );
            })}
          </MotionScrollableWidth>
          {dict.infoCards.map((item) => {
            if (item.id !== activeTab) return null;
            return (
              <LandingInfoBox
                rtl={rtl}
                key={item.id}
                data={{
                  title: item.title,
                  subTitle: item.subTitle,
                  desc: item.desc,
                  btnTitle: item.btnTitle,
                }}
              />
            );
          })}
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={loadTabsVariants}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-5 hidden md:flex">
            <div
              onClick={pause ? handlePlay : handlePause}
              className="cursor-pointer"
            >
              <AppIcon
                name={pause ? "PlayIcon" : "PauseIcon"}
                width="15px"
                height="18px"
              />
            </div>
            <div
              onClick={() => setMuted((prev) => !prev)}
              className="cursor-pointer"
            >
              <AppIcon
                name={muted ? "MuteIcon" : "VolumeIcon"}
                width="18px"
                height="18px"
              />
            </div>
            <div className="grow h-4 flex items-center group">
              <Progress
                value={volume * 100}
                onClick={handleVolumeChange}
                className="cursor-pointer h-[2px] group-hover:h-4 transition-all"
              />
            </div>
          </div>
          <div className="flex items-center mt-[1.74vh] hidden md:flex">
            {dict.tabs.map((item: TabItemType) => {
              const isActive = item.id === activeTab;

              const titleClass = twMerge(
                "text-2xl",
                clsx({
                  "font-bold": isActive,
                  "font-normal": !isActive,
                })
              );

              return (
                <div
                  key={item.title}
                  onClick={() => setActiveTab(item.id)}
                  className="flex items-center justify-center gap-5 cursor-pointer grow select-none font-normal text-2xl"
                >
                  {isActive && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={clickTabsVariant}
                      transition={{ duration: 0.7 }}
                      className={rtl ? "" : "rotate-180"}
                    >
                      <AppIcon name="SymbolIcon" width="12px" height="24px" />
                    </motion.div>
                  )}
                  <div className={titleClass}>{item.title}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </ResponsiveLayout>
    </div>
  );
}
