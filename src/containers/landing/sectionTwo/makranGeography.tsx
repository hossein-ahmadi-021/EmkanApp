import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import sistanGold from "@/assets/images/landing/SistanGold.svg";
import sistanPrimary from "@/assets/images/landing/SistanPrimary.svg";
import hormozGold from "@/assets/images/landing/HormozganGold.svg";
import hormozPrimary from "@/assets/images/landing/HormozganPrimary.svg";

const opacityVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type LocationKey = "makran" | "azad" | "islands";

interface Props {
  activeTab: number;
  setActiveConfig: Dispatch<
    SetStateAction<{ location: LocationKey; activeLatLng: number }>
  >;
}

interface MapImageProps {
  src: string;
  alt: string;
  position: {
    className: string;
  };
  size: {
    className?: string;
  };
  isActive: boolean;
  onClick: () => void;
  zIndex?: number;
}

const MapImage: React.FC<MapImageProps> = ({
  src,
  alt,
  position,
  size,
  isActive,
  onClick,
  zIndex = 0,
}) => (
  <motion.div
    onClick={onClick}
    initial="hidden"
    animate={isActive ? "visible" : "hidden"}
    variants={opacityVariant}
    transition={{ duration: 0.6 }}
    className="absolute w-full h-full"
  >
    <div
      className={`absolute ${position.className} ${zIndex ? "z-10" : ""} ${
        size.className || ""
      }`}
      style={{
        transform: "translateZ(0)",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        willChange: "transform",
      }}
    >
      <Image
        src={src}
        alt={alt}
        quality={50}
        priority
        fill
        className="object-contain select-none"
        sizes="(max-width: 768px) 90vw, 67.04vh"
        style={{
          transform: "translateZ(0)",
          objectFit: "contain",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          willChange: "transform",
        }}
      />
    </div>
  </motion.div>
);

export default function MakranGeography({ activeTab, setActiveConfig }: Props) {
  const handleSistanClick = () =>
    setActiveConfig({
      location: "makran",
      activeLatLng: 2,
    });

  const handleHormozClick = () =>
    setActiveConfig({
      location: "makran",
      activeLatLng: 1,
    });

  const imageSize = {
    className:
      "w-[129px] h-[200px] max-[1400px]:w-[200px] max-[1400px]:h-[200px] max-[1200px]:w-[180px] max-[1200px]:h-[180px] max-[992px]:w-[160px] max-[992px]:h-[160px] max-[768px]:w-[140px] max-[768px]:h-[140px]",
  };
  const sistanPosition = {
    className:
      "start-[23.3%] bottom-[-2.4%] max-[1400px]:start-[25%] max-[1400px]:bottom-[-1.5%] max-[1200px]:start-[27%] max-[1200px]:bottom-[-2%] max-[992px]:start-[29%] max-[992px]:bottom-[-2.5%] max-[768px]:start-[31%] max-[768px]:bottom-[-3%]",
  };

  const hormozSize = {
    className:
      "w-[65.5px] h-[100px] max-[1400px]:w-[100px] max-[1400px]:h-[100px] max-[1200px]:w-[90px] max-[1200px]:h-[90px] max-[992px]:w-[80px] max-[992px]:h-[80px] max-[768px]:w-[70px] max-[768px]:h-[70px]",
  };
  const hormozPosition = {
    className:
      "start-[35.81%] bottom-[6.7%] max-[1400px]:start-[37%] max-[1400px]:bottom-[-1.6%] max-[1200px]:start-[39%] max-[1200px]:bottom-[-2.1%] max-[992px]:start-[41%] max-[992px]:bottom-[-2.6%] max-[768px]:start-[43%] max-[768px]:bottom-[-3.1%]",
  };

  return (
    <div
      className="relative w-full h-full"
      style={{
        aspectRatio: "794 / 828",
        height: "537px",
        width: "100%",
        overflow: "hidden",
        willChange: "transform",
      }}
    >
      <MapImage
        src={sistanGold}
        alt="Sistan geographical location"
        position={sistanPosition}
        size={imageSize}
        isActive={activeTab === 1}
        onClick={handleSistanClick}
        zIndex={10}
      />
      <MapImage
        src={sistanPrimary}
        alt="Sistan geographical location"
        position={sistanPosition}
        size={imageSize}
        isActive={activeTab !== 1}
        onClick={handleSistanClick}
      />
      <MapImage
        src={hormozGold}
        alt="Hormoz geographical location"
        position={hormozPosition}
        size={hormozSize}
        isActive={activeTab !== 1}
        onClick={handleHormozClick}
        zIndex={10}
      />
      <MapImage
        src={hormozPrimary}
        alt="Hormoz geographical location"
        position={hormozPosition}
        size={hormozSize}
        isActive={activeTab === 1}
        onClick={handleHormozClick}
      />
    </div>
  );
}
