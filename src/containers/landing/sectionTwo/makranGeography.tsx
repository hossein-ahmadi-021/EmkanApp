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
}

const MapImage: React.FC<MapImageProps> = ({
  src,
  alt,
  position,
  size,
  isActive,
  onClick,
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
      className={`absolute ${position.className} ${isActive ? "z-10" : ""} ${
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
    className: "w-[129px] h-[200px]",
  };
  const sistanPosition = {
    className:
      "start-[23.3%] bottom-[-2.4%] max-[1536px]:start-[17.2%] max-[1280px]:start-[9.1%]",
  };

  const hormozSize = {
    className: "w-[65.5px] h-[100px]",
  };
  const hormozPosition = {
    className:
      "start-[35.81%] bottom-[6.7%] max-[1536px]:start-[32.5%] max-[1280px]:start-[28.2%]",
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
