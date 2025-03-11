"use client";
import { useRef, useState } from "react";
import AppIcon from "@/common/appIcon";
import { Progress } from "@/common/progress";
import LandingInfoBox from "@/containers/landing/landingInfoBox";

interface Props {
  dict: {
    home: {
      infoCards: {
        title: string;
        subTitle: string;
        desc: string;
      }[];
      tabs: { title: string; id: number }[];
    };
  };
}

export default function LandingSection({ dict }: Props) {
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
    <>
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
      <div className="relative z-10 py-36 text-white">
        <LandingInfoBox
          data={{
            title: dict.home.infoCards[activeTab].title,
            subTitle: dict.home.infoCards[activeTab].subTitle,
            desc: dict.home.infoCards[activeTab].desc,
          }}
        />
        <div className="mt-[146px]">
          <div className="flex items-center gap-5">
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
        </div>
        <div className="flex items-center mt-5">
          {dict.home.tabs.map((item) => {
            const isActive = item.id === activeTab;

            return (
              <div
                key={item.title}
                onClick={() => setActiveTab(item.id)}
                className="flex items-center justify-center gap-5 cursor-pointer grow select-none"
              >
                {isActive && (
                  <AppIcon name="SymbolIcon" width="12px" height="24px" />
                )}
                <div className="text-2xl font-bold">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
