"use client";
import AppButton from "@/common/appButton";
import AppIcon from "@/common/appIcon";
import { Progress } from "@/common/progress";
import { useRef, useState } from "react";

export default function Home() {
  // States
  const [pause, setPause] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.1);
  console.log(volume);

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
    <div className="relative h-full overflow-hidden">
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
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div>
            <h1 className="mb-[15px] text-[84px]">تحول اقتصادی ایران</h1>
            <h2 className="text-[70px] font-yekan">
              آغاز عصر جدید توسعه و جایگاه جهانی شکوه‌مند
            </h2>
          </div>
          <div></div>
          <div>
            <div className="bg-[#B2FFE26E] rounded-full h-[100px] w-[100px] flex justify-center items-center mt-14">
              <AppIcon
                color="primary"
                name="PlayIcon"
                width="20px"
                height="20px"
              />
            </div>
          </div>
          <div className="border-t pt-6">
            <p className="text-1-5xl">
              امکان، بستری برای توسعه متوازن، سرمایه‌گذاری هدفمند و بازتعریف
              جایگاه ایران در زنجیره ارزش جهانی است. با استراتژی‌های تحول‌آفرین،
              زیرساخت‌های پیشرفته و همکاری‌های بین‌المللی، آینده‌ای پایدار برای
              ایران می‌سازیم. آینده‌ای که در آن، ایران یکی از رهبران اقتصادی
              منطقه و جهان خواهد بود.
            </p>
            <AppButton className="mt-6 w-[326px]" icon="InsideIcon">
              درباره مکران بیشتر بدانید
            </AppButton>
          </div>
        </div>
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
            <Progress
              value={volume * 100}
              onClick={handleVolumeChange}
              className="cursor-pointer h-1 hover:h-4 transition-all"
            />
          </div>
        </div>
        dsd
      </div>
    </div>
  );
}
